import { mkdir, readFile, readdir, rm, rmdir, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import {
  knowledgePointsByCategory,
  knowledgeSources,
} from "../src/data/knowledge-points/index.ts";
import {
  buildVisualSimulation,
  isPointVisualizable,
  visualPointIds,
} from "../src/data/visual-simulations/index.ts";

const scriptDir = dirname(fileURLToPath(import.meta.url));
const rootDir = join(scriptDir, "..");
const dataDir = join(rootDir, "src/data/knowledge-points");
const stateFile = join(rootDir, ".visualization-progress.json");
const claimsFile = join(rootDir, ".visualization-claims.json");
const researchDir = join(rootDir, ".visualization-research");
const lockDir = join(rootDir, ".visualization-lock");
const implementationLockDir = join(rootDir, ".visualization-implementation-lock");
const categoryArrays = {
  network: "networkKnowledgePoints",
  os: "operatingSystemKnowledgePoints",
  algorithm: "dsaKnowledgePoints",
  redis: "redisKnowledgePoints",
  mysql: "mysqlKnowledgePoints",
  rabbitmq: "rabbitmqKnowledgePoints",
  backend: "backendKnowledgePoints",
  docker: "dockerKnowledgePoints",
  kubernetes: "kubernetesKnowledgePoints",
  agent: "agentKnowledgePoints",
};
const categories = Object.keys(categoryArrays);
const categoryFiles = {
  network: "network.ts",
  os: "os.ts",
  algorithm: "algorithm.ts",
  redis: "redis.ts",
  mysql: "mysql.ts",
  rabbitmq: "rabbitmq.ts",
  backend: "backend.ts",
  docker: "docker.ts",
  kubernetes: "kubernetes.ts",
  agent: "agent.ts",
};

function categoryFile(categoryId) {
  return join(dataDir, categoryFiles[categoryId]);
}

function today() {
  return new Date().toISOString().slice(0, 10);
}

function getVisualizedTag(point) {
  return point.internalTags?.find((tag) => /^ai-visualized:\d{4}-\d{2}-\d{2}$/.test(tag)) ?? null;
}

function getVisualSourceRefs(point) {
  return point.internalTags
    ?.map((tag) => tag.match(/^visual-source:(.+)$/)?.[1])
    .filter(Boolean) ?? [];
}

function buildQueue() {
  return categories.flatMap((categoryId) =>
    knowledgePointsByCategory[categoryId]
      .filter((point) => isPointVisualizable(categoryId, point))
      .map((point) => {
        const visualizedTag = getVisualizedTag(point);
        return {
          categoryId,
          id: point.id,
          zh: point.zh,
          en: point.en,
          area: point.area ?? point.layer ?? "foundation",
          order: point.order ?? point.learningPathPosition ?? 9999,
          sourceRefs: point.sourceRefs ?? [],
          visualized: Boolean(visualizedTag),
          visualizedTag,
          visualSourceRefs: getVisualSourceRefs(point),
        };
      }),
  );
}

async function readState() {
  try {
    return JSON.parse(await readFile(stateFile, "utf8"));
  } catch {
    return {
      version: 1,
      status: "idle",
      current: null,
      completed: [],
      failures: [],
    };
  }
}

async function writeState(state) {
  await writeFile(stateFile, `${JSON.stringify({
    ...state,
    updatedAt: new Date().toISOString(),
  }, null, 2)}\n`);
}

async function withLock(action) {
  const startedAt = Date.now();
  while (true) {
    try {
      await mkdir(lockDir);
      break;
    } catch (error) {
      if (error?.code !== "EEXIST" || Date.now() - startedAt > 10000) {
        throw error;
      }
      await new Promise((resolve) => setTimeout(resolve, 100));
    }
  }

  try {
    return await action();
  } finally {
    await rmdir(lockDir).catch(() => {});
  }
}

async function claimImplementation(args) {
  const worker = args.worker ?? args.w ?? "implementation-worker";
  const ttlMs = Number(args.ttl ?? 3 * 60 * 60 * 1000);
  try {
    await mkdir(implementationLockDir);
    const claim = {
      worker,
      claimedAt: new Date().toISOString(),
      expiresAt: new Date(Date.now() + ttlMs).toISOString(),
      lockDir: implementationLockDir,
    };
    await writeFile(join(implementationLockDir, "claim.json"), `${JSON.stringify(claim, null, 2)}\n`);
    printJson({ status: "claimed", ...claim });
  } catch (error) {
    if (error?.code !== "EEXIST") {
      throw error;
    }
    const claim = await readJsonFile(join(implementationLockDir, "claim.json"), null);
    if (claim && new Date(claim.expiresAt).getTime() < Date.now()) {
      await rm(implementationLockDir, { recursive: true, force: true });
      await claimImplementation(args);
      return;
    }
    printJson({ status: "busy", claim });
    process.exitCode = 2;
  }
}

async function releaseImplementation(args) {
  const claim = await readJsonFile(join(implementationLockDir, "claim.json"), null);
  const worker = args.worker ?? args.w;
  if (worker && claim?.worker && worker !== claim.worker) {
    throw new Error(`Implementation lock belongs to ${claim.worker}.`);
  }
  await rm(implementationLockDir, { recursive: true, force: true });
  printJson({ status: "released", worker: worker ?? claim?.worker ?? null });
}

function getPending(queue) {
  return queue
    .filter((item) => !item.visualized)
    .sort((a, b) => categories.indexOf(a.categoryId) - categories.indexOf(b.categoryId) || a.order - b.order);
}

function getCategoryFilter(args) {
  return splitList(args.category ?? args.categories);
}

function filterQueue(queue, args) {
  const categoryFilter = getCategoryFilter(args);
  if (!categoryFilter.length) {
    return queue;
  }
  return queue.filter((item) => categoryFilter.includes(item.categoryId));
}

function pickCurrent(queue, state) {
  if (state.current) {
    const match = queue.find((item) =>
      item.categoryId === state.current.categoryId && item.id === state.current.id,
    );
    if (match && !match.visualized) {
      return match;
    }
  }
  return getPending(queue)[0] ?? null;
}

function sameItem(a, b) {
  return Boolean(a && b && a.categoryId === b.categoryId && a.id === b.id);
}

function printJson(value) {
  process.stdout.write(`${JSON.stringify(value, null, 2)}\n`);
}

function parseArgs(argv) {
  const result = { _: [] };
  for (let index = 0; index < argv.length; index += 1) {
    const item = argv[index];
    if (!item.startsWith("--")) {
      result._.push(item);
      continue;
    }
    const key = item.slice(2);
    const next = argv[index + 1];
    if (next && !next.startsWith("--")) {
      result[key] = next;
      index += 1;
    } else {
      result[key] = true;
    }
  }
  return result;
}

function makeSearchQuery(item) {
  return `${item.zh} ${item.en} interactive diagram explanation`;
}

function researchKey(item) {
  return `${item.categoryId}__${item.id}`;
}

function researchFileFor(item) {
  return join(researchDir, `${researchKey(item)}.json`);
}

async function readJsonFile(path, fallback) {
  try {
    return JSON.parse(await readFile(path, "utf8"));
  } catch {
    return fallback;
  }
}

async function readClaims() {
  return readJsonFile(claimsFile, {
    version: 1,
    items: {},
  });
}

async function writeClaims(claims) {
  await writeFile(claimsFile, `${JSON.stringify({
    ...claims,
    updatedAt: new Date().toISOString(),
  }, null, 2)}\n`);
}

async function listResearchArtifacts() {
  try {
    const files = await readdir(researchDir);
    const artifacts = await Promise.all(
      files
        .filter((file) => file.endsWith(".json"))
        .map((file) => readJsonFile(join(researchDir, file), null)),
    );
    return artifacts.filter(Boolean);
  } catch {
    return [];
  }
}

async function getReadyResearch() {
  const artifacts = await listResearchArtifacts();
  return artifacts
    .filter((artifact) => artifact.status === "ready")
    .sort((a, b) => new Date(a.updatedAt ?? a.createdAt).getTime() - new Date(b.updatedAt ?? b.createdAt).getTime());
}

async function getResearchFor(item) {
  return readJsonFile(researchFileFor(item), null);
}

async function pickRequestedItem(queue, args) {
  if (!args.id) {
    return null;
  }
  const matches = queue.filter((candidate) =>
    candidate.id === args.id && (!args.category || candidate.categoryId === args.category),
  );
  if (matches.length !== 1) {
    throw new Error(`Queue item lookup expected one match, got ${matches.length}: ${args.category ?? "*"} / ${args.id}`);
  }
  return matches[0];
}

async function pickReadyResearchItem(queue) {
  const ready = await getReadyResearch();
  for (const artifact of ready) {
    const item = queue.find((candidate) =>
      candidate.categoryId === artifact.categoryId && candidate.id === artifact.id && !candidate.visualized,
    );
    if (item) {
      return item;
    }
  }
  return null;
}

async function start(args = {}) {
  const queue = filterQueue(buildQueue(), args);
  const state = await readState();
  const current = await pickRequestedItem(queue, args)
    ?? pickCurrent(queue, state)
    ?? await pickReadyResearchItem(queue);
  if (!current) {
    await writeState({ ...state, status: "complete", current: null });
    printJson({ status: "complete", pending: 0 });
    return;
  }

  const continuing = sameItem(current, state.current);
  const research = await getResearchFor(current);
  const nextState = {
    ...state,
    status: "active",
    current: {
      ...current,
      searchQuery: makeSearchQuery(current),
      step: continuing ? state.current.step : research?.status === "ready" ? "implementation" : "research",
      startedAt: continuing ? state.current.startedAt : new Date().toISOString(),
      references: continuing ? state.current.references ?? [] : research?.references ?? [],
      selectedSources: continuing ? state.current.selectedSources ?? [] : research?.selectedSources ?? [],
      verification: continuing ? state.current.verification ?? {} : {},
      notes: continuing ? state.current.notes ?? [] : research?.notes ?? [],
      research: research ?? undefined,
    },
  };
  await writeState(nextState);
  printJson({
    status: "active",
    current: nextState.current,
    pending: getPending(queue).length,
  });
}

function splitList(value) {
  if (!value) {
    return [];
  }
  return String(value)
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

async function researchClaim(args) {
  const worker = args.worker ?? args.w ?? "research-worker";
  return withLock(async () => {
    const queue = filterQueue(buildQueue(), args);
    const claims = await readClaims();
    const now = Date.now();
    const ttlMs = Number(args.ttl ?? 6 * 60 * 60 * 1000);
    const readyKeys = new Set((await getReadyResearch()).map((item) => researchKey(item)));

    const activeClaims = Object.fromEntries(
      Object.entries(claims.items ?? {}).filter(([, claim]) => {
        const item = queue.find((candidate) => sameItem(candidate, claim));
        return item && !item.visualized && new Date(claim.expiresAt).getTime() > now;
      }),
    );
    const claimedKeys = new Set(Object.keys(activeClaims));
    const item = getPending(queue).find((candidate) => {
      const key = researchKey(candidate);
      return !claimedKeys.has(key) && !readyKeys.has(key);
    });

    if (!item) {
      await writeClaims({ ...claims, items: activeClaims });
      printJson({ status: "empty", worker });
      return;
    }

    const claim = {
      ...item,
      worker,
      searchQuery: makeSearchQuery(item),
      claimedAt: new Date(now).toISOString(),
      expiresAt: new Date(now + ttlMs).toISOString(),
      status: "claimed",
    };
    activeClaims[researchKey(item)] = claim;
    await writeClaims({ ...claims, items: activeClaims });
    printJson(claim);
  });
}

async function researchSave(args) {
  const queue = buildQueue();
  const claims = await readClaims();
  const worker = args.worker ?? args.w ?? "research-worker";
  const claimed = Object.values(claims.items ?? {}).find((claim) =>
    claim.worker === worker && claim.status === "claimed",
  );
  const categoryId = args.category ?? claimed?.categoryId;
  const id = args.id ?? claimed?.id;
  if (!categoryId || !id) {
    throw new Error("No claimed item. Run visual:research:claim first, or pass --category and --id.");
  }

  const item = queue.find((candidate) => candidate.categoryId === categoryId && candidate.id === id);
  if (!item) {
    throw new Error(`Queue item not found: ${categoryId}/${id}`);
  }

  await mkdir(researchDir, { recursive: true });
  const previous = await getResearchFor(item);
  const now = new Date().toISOString();
  const artifact = {
    ...(previous ?? {}),
    categoryId,
    id,
    zh: item.zh,
    en: item.en,
    area: item.area,
    order: item.order,
    searchQuery: makeSearchQuery(item),
    worker,
    status: args.ready ? "ready" : args.status ?? previous?.status ?? "draft",
    references: [
      ...(previous?.references ?? []),
      ...parseReferences(args.references ?? args.reference),
    ],
    selectedSources: [
      ...(previous?.selectedSources ?? []),
      ...splitList(args.sources),
    ].filter((source, index, list) => list.indexOf(source) === index),
    visualPlan: args["visual-plan"] ?? args.visualPlan ?? previous?.visualPlan ?? "",
    explanationPlan: args["explanation-plan"] ?? args.explanationPlan ?? previous?.explanationPlan ?? "",
    notes: [
      ...(previous?.notes ?? []),
      ...(args.note ? [{ at: now, text: String(args.note) }] : []),
    ],
    createdAt: previous?.createdAt ?? now,
    updatedAt: now,
  };

  await writeFile(researchFileFor(item), `${JSON.stringify(artifact, null, 2)}\n`);
  if (artifact.status === "ready") {
    claims.items[researchKey(item)] = {
      ...(claims.items[researchKey(item)] ?? {}),
      ...item,
      worker,
      status: "ready",
      completedAt: now,
    };
    await writeClaims(claims);
  }
  printJson(artifact);
}

async function researchList() {
  const artifacts = await listResearchArtifacts();
  printJson({
    total: artifacts.length,
    ready: artifacts.filter((artifact) => artifact.status === "ready").length,
    items: artifacts,
  });
}

function parseKeyValues(value) {
  return splitList(value).reduce((acc, item) => {
    const separatorIndex = item.indexOf("=");
    if (separatorIndex === -1) {
      acc[item] = true;
      return acc;
    }
    const key = item.slice(0, separatorIndex).trim();
    const rawValue = item.slice(separatorIndex + 1).trim();
    if (key) {
      acc[key] = rawValue;
    }
    return acc;
  }, {});
}

function parseReferences(value) {
  return splitList(value).map((item) => {
    const separatorIndex = item.indexOf("=");
    if (separatorIndex === -1) {
      return { title: item, url: item };
    }
    return {
      title: item.slice(0, separatorIndex).trim(),
      url: item.slice(separatorIndex + 1).trim(),
    };
  });
}

async function update(args) {
  const state = await readState();
  if (!state.current) {
    throw new Error("No active item. Run visual:start first.");
  }

  const verification = {
    ...(state.current.verification ?? {}),
    ...(args.verification ? parseKeyValues(args.verification) : {}),
  };
  for (const key of ["build", "desktop", "mobile"]) {
    if (args[key]) {
      verification[key] = args[key];
    }
  }

  const note = args.note ?? args.notes;
  const notes = note
    ? [...(state.current.notes ?? []), { at: new Date().toISOString(), text: String(note) }]
    : state.current.notes ?? [];

  const current = {
    ...state.current,
    step: args.step ?? state.current.step,
    references: [
      ...(state.current.references ?? []),
      ...parseReferences(args.references ?? args.reference),
    ],
    selectedSources: [
      ...(state.current.selectedSources ?? []),
      ...splitList(args.sources),
    ].filter((source, index, list) => list.indexOf(source) === index),
    verification,
    notes,
  };

  await writeState({
    ...state,
    status: "active",
    current,
  });
  printJson(current);
}

async function status() {
  const args = arguments[0] ?? {};
  const queue = filterQueue(buildQueue(), args);
  const state = await readState();
  const pending = getPending(queue);
  const counts = categories.map((categoryId) => {
    const scoped = queue.filter((item) => item.categoryId === categoryId);
    return {
      categoryId,
      total: scoped.length,
      done: scoped.filter((item) => item.visualized).length,
      pending: scoped.filter((item) => !item.visualized).length,
    };
  });

  printJson({
    status: state.status,
    current: state.current,
    next: pickCurrent(queue, state),
    total: queue.length,
    done: queue.filter((item) => item.visualized).length,
    pending: pending.length,
    counts,
  });
}

async function handoff() {
  const args = arguments[0] ?? {};
  const queue = filterQueue(buildQueue(), args);
  const state = await readState();
  const pending = getPending(queue);
  const completed = queue
    .filter((item) => item.visualized)
    .map((item) => ({
      categoryId: item.categoryId,
      id: item.id,
      zh: item.zh,
      en: item.en,
      tag: item.visualizedTag,
      sources: item.visualSourceRefs,
    }));

  printJson({
    generatedAt: new Date().toISOString(),
    queue: {
      total: queue.length,
      completed: completed.length,
      pending: pending.length,
    },
    completed,
    current: state.current,
    nextPending: pending.slice(0, 20),
    verification: state.current?.verification ?? {},
    resumeCommand: state.current ? "npm run visual:status" : "npm run visual:start",
  });
}

async function validate() {
  const args = arguments[0] ?? {};
  const queue = filterQueue(buildQueue(), args);
  const state = await readState();
  const issues = [];

  for (const categoryId of categories) {
    const points = knowledgePointsByCategory[categoryId];
    const ids = new Set(points.map((point) => point.id));
    const duplicates = points
      .map((point) => point.id)
      .filter((id, index, list) => list.indexOf(id) !== index);
    duplicates.forEach((id) => {
      issues.push({ type: "duplicate-point-id", categoryId, id });
    });

    for (const visualId of visualPointIds[categoryId] ?? []) {
      if (!ids.has(visualId)) {
        issues.push({ type: "missing-visual-point", categoryId, id: visualId });
      }
    }
  }

  for (const item of queue) {
    const point = knowledgePointsByCategory[item.categoryId].find((candidate) => candidate.id === item.id);
    const tagCount = point?.internalTags?.filter((tag) => tag.startsWith("ai-visualized:")).length ?? 0;
    if (tagCount > 1) {
      issues.push({ type: "duplicate-visualized-tag", categoryId: item.categoryId, id: item.id });
    }
    for (const sourceRef of item.visualSourceRefs) {
      if (!knowledgeSources[sourceRef]) {
        issues.push({ type: "unknown-visual-source", categoryId: item.categoryId, id: item.id, sourceRef });
      }
    }
    if (!buildVisualSimulation(item.categoryId, point)) {
      issues.push({ type: "missing-simulation", categoryId: item.categoryId, id: item.id });
    }
  }

  if (state.current) {
    const current = queue.find((item) => sameItem(item, state.current));
    if (!current) {
      issues.push({ type: "current-outside-queue", current: state.current });
    } else if (current.visualized) {
      issues.push({ type: "current-already-visualized", current: state.current });
    }
  }

  printJson({
    ok: issues.length === 0,
    issueCount: issues.length,
    issues,
  });
  if (issues.length > 0) {
    process.exitCode = 1;
  }
}

function findCategoryBlock(source, categoryId) {
  const arrayName = categoryArrays[categoryId];
  const startMarker = `export const ${arrayName} = [`;
  const start = source.indexOf(startMarker);
  if (start === -1) {
    throw new Error(`Unknown category block: ${categoryId}`);
  }
  const end = source.indexOf("] satisfies GraphKnowledgePoint[];", start);
  if (end === -1) {
    throw new Error(`Unclosed category block: ${categoryId}`);
  }
  return { start, end };
}

function addTagsToLine(line, tags) {
  const existingTagMatch = line.match(/internalTags:\s*\[([^\]]*)\]/);
  if (existingTagMatch) {
    const existingText = existingTagMatch[1];
    const existingTags = new Set([...existingText.matchAll(/"([^"]+)"/g)].map((match) => match[1]));
    const mergedTags = [...existingTags, ...tags].filter((tag, index, arr) => arr.indexOf(tag) === index);
    return line.replace(/internalTags:\s*\[[^\]]*\]/, `internalTags: [${mergedTags.map((tag) => `"${tag}"`).join(", ")}]`);
  }
  return line.replace("{ ", `{ internalTags: [${tags.map((tag) => `"${tag}"`).join(", ")}], `);
}

async function tagCompleted({ categoryId, id, date, sources }) {
  const sourcePath = categoryFile(categoryId);
  const source = await readFile(sourcePath, "utf8");
  const block = findCategoryBlock(source, categoryId);
  const before = source.slice(0, block.start);
  const blockText = source.slice(block.start, block.end);
  const after = source.slice(block.end);
  const lines = blockText.split("\n");
  const lineIndex = lines.findIndex((line) => line.includes(`id: "${id}"`));
  if (lineIndex === -1) {
    throw new Error(`Point not found: ${categoryId}/${id}`);
  }

  const tags = [
    `ai-visualized:${date}`,
    ...sources.map((sourceRef) => `visual-source:${sourceRef}`),
  ];
  if (!lines[lineIndex].includes(`ai-visualized:${date}`)) {
    lines[lineIndex] = addTagsToLine(lines[lineIndex], tags);
  }

  await writeFile(sourcePath, `${before}${lines.join("\n")}${after}`);
}

async function assertCompletedTag({ categoryId, id, date }) {
  const source = await readFile(categoryFile(categoryId), "utf8");
  const block = findCategoryBlock(source, categoryId);
  const line = source
    .slice(block.start, block.end)
    .split("\n")
    .find((item) => item.includes(`id: "${id}"`));
  if (!line?.includes(`ai-visualized:${date}`)) {
    throw new Error(`Tag write verification failed: ${categoryId}/${id}`);
  }
}

async function complete(args) {
  const queue = buildQueue();
  const state = await readState();
  const categoryId = args.category ?? state.current?.categoryId;
  const id = args.id ?? state.current?.id;
  if (!categoryId || !id) {
    throw new Error("Run visual:start first, or pass --category and --id.");
  }

  const item = queue.find((candidate) => candidate.categoryId === categoryId && candidate.id === id);
  if (!item) {
    throw new Error(`Queue item not found: ${categoryId}/${id}`);
  }

  const completedDate = args.date ?? today();
  const stateSources = state.current?.selectedSources ?? [];
  const sources = splitList(args.sources).length ? splitList(args.sources) : stateSources;

  if (!args["dry-run"]) {
    await tagCompleted({ categoryId, id, date: completedDate, sources });
    await assertCompletedTag({ categoryId, id, date: completedDate });
  }

  const record = {
    categoryId,
    id,
    zh: item.zh,
    en: item.en,
    completedAt: new Date().toISOString(),
    tag: `ai-visualized:${completedDate}`,
    sources,
    verification: {
      ...(state.current?.verification ?? {}),
      build: args.build ?? state.current?.verification?.build ?? "passed",
      desktop: args.desktop ?? state.current?.verification?.desktop ?? "passed",
      mobile: args.mobile ?? state.current?.verification?.mobile ?? "passed",
    },
    dryRun: Boolean(args["dry-run"]),
  };
  if (!args["dry-run"]) {
    await writeState({
      ...state,
      status: "idle",
      current: null,
      completed: [...(state.completed ?? []), record],
    });
    await rm(researchFileFor({ categoryId, id }), { force: true });
    const claims = await readClaims();
    delete claims.items[researchKey({ categoryId, id })];
    await writeClaims(claims);
  }
  printJson(record);
}

async function fail(args) {
  const state = await readState();
  if (!state.current) {
    throw new Error("No active item.");
  }
  const record = {
    ...state.current,
    failedAt: new Date().toISOString(),
    reason: args.reason ?? "unspecified",
  };
  await writeState({
    ...state,
    status: "blocked",
    current: record,
    failures: [...(state.failures ?? []), record],
  });
  printJson(record);
}

async function main() {
  const [command = "status", ...rest] = process.argv.slice(2);
  const args = parseArgs(rest);
  if (command === "status") {
    await status(args);
    return;
  }
  if (command === "next" || command === "start") {
    await start(args);
    return;
  }
  if (command === "research-claim") {
    await researchClaim(args);
    return;
  }
  if (command === "research-save") {
    await researchSave(args);
    return;
  }
  if (command === "research-list") {
    await researchList();
    return;
  }
  if (command === "implementation-claim") {
    await claimImplementation(args);
    return;
  }
  if (command === "implementation-release") {
    await releaseImplementation(args);
    return;
  }
  if (command === "update") {
    await update(args);
    return;
  }
  if (command === "handoff" || command === "checkpoint") {
    await handoff(args);
    return;
  }
  if (command === "validate") {
    await validate(args);
    return;
  }
  if (command === "complete") {
    await complete(args);
    return;
  }
  if (command === "fail") {
    await fail(args);
    return;
  }
  throw new Error(`Unknown command: ${command}`);
}

main().catch((error) => {
  process.stderr.write(`${error.stack ?? error.message}\n`);
  process.exit(1);
});
