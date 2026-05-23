import { mkdir, readFile, rm, rmdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import {
  knowledgePointsByCategory,
  knowledgeSources,
} from "../src/data/knowledge-points/index.ts";

const scriptDir = dirname(fileURLToPath(import.meta.url));
const rootDir = join(scriptDir, "..");
const dataDir = join(rootDir, "src/data/knowledge-points");
const stateFile = join(rootDir, ".kg-explain-progress.json");
const lockDir = join(rootDir, ".kg-explain-lock");
const defaultMarker = "KG_REVIEWED";

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

function splitList(value) {
  if (!value) {
    return [];
  }
  return String(value)
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
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

function printJson(value) {
  process.stdout.write(`${JSON.stringify(value, null, 2)}\n`);
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

function parseMarker(line) {
  const match = line.match(/<!--\s*(KG_[A-Z_]+):\s*(.*?)\s*\|\s*(\d{4}-\d{2}-\d{2})\s*\|\s*source_count=(\d+)\s*-->/);
  if (!match) {
    return null;
  }
  return {
    name: match[1],
    title: match[2],
    date: match[3],
    sourceCount: Number(match[4]),
    raw: line.trim(),
  };
}

function parseId(line) {
  return line.match(/\bid:\s*"([^"]+)"/)?.[1] ?? null;
}

async function parseMarkersByPoint() {
  const result = {};
  for (const categoryId of categories) {
    const source = await readFile(categoryFile(categoryId), "utf8");
    const block = findCategoryBlock(source, categoryId);
    const lines = source.slice(block.start, block.end).split("\n");
    let pendingMarkers = [];
    for (const line of lines) {
      const marker = parseMarker(line);
      if (marker) {
        pendingMarkers.push(marker);
        continue;
      }

      const id = parseId(line);
      if (id) {
        result[`${categoryId}/${id}`] = Object.fromEntries(
          pendingMarkers.map((item) => [item.name, item]),
        );
        pendingMarkers = [];
      }
    }
  }
  return result;
}

async function readState() {
  try {
    return JSON.parse(await readFile(stateFile, "utf8"));
  } catch {
    return {
      version: 1,
      status: "idle",
      marker: defaultMarker,
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

function getMarkerName(args = {}, state = {}) {
  return String(args.marker ?? state.marker ?? defaultMarker);
}

async function buildQueue(args = {}, state = {}) {
  const markerName = getMarkerName(args, state);
  const markersByPoint = await parseMarkersByPoint();
  const categoryFilter = splitList(args.category ?? args.categories);

  return categories
    .filter((categoryId) => categoryFilter.length === 0 || categoryFilter.includes(categoryId))
    .flatMap((categoryId) =>
      knowledgePointsByCategory[categoryId].map((point) => {
        const key = `${categoryId}/${point.id}`;
        const markers = markersByPoint[key] ?? {};
        const sourceRefs = point.sourceRefs ?? [];
        return {
          categoryId,
          id: point.id,
          zh: point.zh,
          en: point.en,
          area: point.area ?? point.layer ?? "foundation",
          difficulty: point.difficulty,
          order: point.order ?? point.learningPathPosition ?? 9999,
          summary: point.summary ?? point.concept ?? "",
          sourceRefs,
          sourceTitles: sourceRefs.map((sourceRef) => knowledgeSources[sourceRef]?.title ?? sourceRef),
          explanationCount: point.explanation?.length ?? 0,
          typicalProblemCount: point.typicalProblems?.length ?? 0,
          markers,
          completed: Boolean(markers[markerName]),
          completedMarker: markers[markerName] ?? null,
          existingExplainedMarker: markers.KG_EXPLAINED ?? null,
        };
      }),
    );
}

function getPending(queue) {
  return queue
    .filter((item) => !item.completed)
    .sort((a, b) => categories.indexOf(a.categoryId) - categories.indexOf(b.categoryId) || a.order - b.order);
}

function sameItem(a, b) {
  return Boolean(a && b && a.categoryId === b.categoryId && a.id === b.id);
}

function makeSearchQuery(item) {
  return `${item.zh} ${item.en} 官方文档 讲解 边界 常见误区`;
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

async function pickCurrent(queue, state, args) {
  const requested = await pickRequestedItem(queue, args);
  if (requested) {
    return requested;
  }
  if (state.current) {
    const match = queue.find((item) => sameItem(item, state.current));
    if (match && !match.completed) {
      return match;
    }
  }
  return getPending(queue)[0] ?? null;
}

async function start(args = {}) {
  await withLock(async () => {
    const state = await readState();
    const markerName = getMarkerName(args, state);
    const queue = await buildQueue(args, { ...state, marker: markerName });
    const current = await pickCurrent(queue, state, args);
    if (!current) {
      await writeState({ ...state, marker: markerName, status: "complete", current: null });
      printJson({ status: "complete", marker: markerName, pending: 0 });
      return;
    }

    const continuing = sameItem(current, state.current);
    const nextCurrent = {
      ...current,
      marker: markerName,
      searchQuery: makeSearchQuery(current),
      step: continuing ? state.current.step : "research",
      startedAt: continuing ? state.current.startedAt : new Date().toISOString(),
      notes: continuing ? state.current.notes ?? [] : [],
    };
    await writeState({
      ...state,
      marker: markerName,
      status: "active",
      current: nextCurrent,
    });
    printJson({
      status: "active",
      marker: markerName,
      current: nextCurrent,
      pending: getPending(queue).length,
    });
  });
}

async function status(args = {}) {
  const state = await readState();
  const markerName = getMarkerName(args, state);
  const queue = await buildQueue(args, { ...state, marker: markerName });
  const pending = getPending(queue);
  const counts = categories.map((categoryId) => {
    const scoped = queue.filter((item) => item.categoryId === categoryId);
    return {
      categoryId,
      total: scoped.length,
      done: scoped.filter((item) => item.completed).length,
      pending: scoped.filter((item) => !item.completed).length,
    };
  });

  printJson({
    status: state.status,
    marker: markerName,
    current: state.current,
    next: await pickCurrent(queue, state, args),
    total: queue.length,
    done: queue.filter((item) => item.completed).length,
    pending: pending.length,
    counts,
  });
}

function buildMarkerComment(markerName, title, date, sourceCount) {
  return `  /* <!-- ${markerName}: ${title} | ${date} | source_count=${sourceCount} --> */`;
}

async function writeCompletionMarker({ categoryId, id, markerName, date, sourceCount }) {
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

  const point = knowledgePointsByCategory[categoryId].find((candidate) => candidate.id === id);
  const markerLine = buildMarkerComment(markerName, point?.zh ?? id, date, sourceCount);
  let insertIndex = lineIndex;
  while (insertIndex > 0 && /^\s*\/\*\s*<!--\s*KG_[A-Z_]+:/.test(lines[insertIndex - 1])) {
    const previous = parseMarker(lines[insertIndex - 1]);
    if (previous?.name === markerName) {
      lines[insertIndex - 1] = markerLine;
      await writeFile(sourcePath, `${before}${lines.join("\n")}${after}`);
      return;
    }
    insertIndex -= 1;
  }
  lines.splice(insertIndex, 0, markerLine);
  await writeFile(sourcePath, `${before}${lines.join("\n")}${after}`);
}

async function complete(args = {}) {
  await withLock(async () => {
    const state = await readState();
    const markerName = getMarkerName(args, state);
    const queue = await buildQueue(args, { ...state, marker: markerName });
    const categoryId = args.category ?? state.current?.categoryId;
    const id = args.id ?? state.current?.id;
    if (!categoryId || !id) {
      throw new Error("Run kg:explain:start first, or pass --category and --id.");
    }

    const item = queue.find((candidate) => candidate.categoryId === categoryId && candidate.id === id);
    if (!item) {
      throw new Error(`Queue item not found: ${categoryId}/${id}`);
    }

    const sourceCount = Number(
      args["source-count"] ??
      args.sourceCount ??
      (splitList(args.sources).length || item.sourceRefs.length),
    );
    const completedDate = args.date ?? today();
    if (!args["dry-run"]) {
      await writeCompletionMarker({
        categoryId,
        id,
        markerName,
        date: completedDate,
        sourceCount,
      });
    }

    const record = {
      categoryId,
      id,
      zh: item.zh,
      en: item.en,
      marker: markerName,
      tag: `${markerName}:${completedDate}`,
      sourceCount,
      completedAt: new Date().toISOString(),
      dryRun: Boolean(args["dry-run"]),
    };
    if (!args["dry-run"]) {
      await writeState({
        ...state,
        marker: markerName,
        status: "idle",
        current: null,
        completed: [...(state.completed ?? []), record],
      });
    }
    printJson(record);
  });
}

async function fail(args = {}) {
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

async function handoff(args = {}) {
  const state = await readState();
  const markerName = getMarkerName(args, state);
  const queue = await buildQueue(args, { ...state, marker: markerName });
  const pending = getPending(queue);
  printJson({
    generatedAt: new Date().toISOString(),
    marker: markerName,
    queue: {
      total: queue.length,
      completed: queue.filter((item) => item.completed).length,
      pending: pending.length,
    },
    current: state.current,
    nextPending: pending.slice(0, 20),
    sourceFile: "src/data/knowledge-points/",
    workflow: "docs/workflows/kg-explain-graph-points.md",
    resumeCommand: `npm run kg:explain:start -- --marker ${markerName}`,
  });
}

async function validate(args = {}) {
  const state = await readState();
  const markerName = getMarkerName(args, state);
  const queue = await buildQueue(args, { ...state, marker: markerName });
  const issues = [];
  const allSourceIds = new Set(Object.keys(knowledgeSources));

  for (const categoryId of categories) {
    const points = knowledgePointsByCategory[categoryId];
    const seen = new Set();
    for (const point of points) {
      if (seen.has(point.id)) {
        issues.push({ type: "duplicate-point-id", categoryId, id: point.id });
      }
      seen.add(point.id);
      for (const sourceRef of point.sourceRefs ?? []) {
        if (!allSourceIds.has(sourceRef)) {
          issues.push({ type: "unknown-source-ref", categoryId, id: point.id, sourceRef });
        }
      }
      if ((point.explanation?.length ?? 0) < 4) {
        issues.push({ type: "short-explanation", categoryId, id: point.id, explanationCount: point.explanation?.length ?? 0 });
      }
      if ((point.sourceRefs?.length ?? 0) < 2) {
        issues.push({ type: "few-sources", categoryId, id: point.id, sourceCount: point.sourceRefs?.length ?? 0 });
      }
    }
  }

  const staleCounts = queue
    .filter((item) => item.completedMarker && item.completedMarker.sourceCount !== item.sourceRefs.length)
    .map((item) => ({
      type: "marker-source-count-mismatch",
      categoryId: item.categoryId,
      id: item.id,
      marker: markerName,
      markerSourceCount: item.completedMarker.sourceCount,
      actualSourceCount: item.sourceRefs.length,
    }));
  issues.push(...staleCounts);

  printJson({
    ok: issues.length === 0,
    marker: markerName,
    issueCount: issues.length,
    issues,
  });
  if (issues.length > 0) {
    process.exitCode = 1;
  }
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
  if (command === "complete") {
    await complete(args);
    return;
  }
  if (command === "fail") {
    await fail(args);
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
  throw new Error(`Unknown command: ${command}`);
}

main().catch((error) => {
  process.stderr.write(`${error.stack ?? error.message}\n`);
  process.exit(1);
});
