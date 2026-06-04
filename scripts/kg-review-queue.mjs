import { mkdir, readFile, rmdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import {
  coreKnowledgePointIdsByCategory,
  knowledgePointsByCategory,
  knowledgeSources,
} from "../src/data/knowledge-points/index.ts";

const scriptDir = dirname(fileURLToPath(import.meta.url));
const rootDir = join(scriptDir, "..");
const dataDir = join(rootDir, "src/data/knowledge-points");
const stateFile = join(rootDir, ".kg-review-progress.json");
const lockDir = join(rootDir, ".kg-review-lock");
const markerName = "KG_REVIEWED";

const categoryOrder = [
  "go",
  "network",
  "os",
  "algorithm",
  "redis",
  "mysql",
  "rabbitmq",
  "backend",
  "docker",
  "kubernetes",
  "agent",
];

const categoryFiles = {
  go: "go.ts",
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

const categorySourceArrays = {
  go: ["goKnowledgePoints"],
  network: ["networkKnowledgePointBase", "networkKnowledgePoints"],
  os: ["operatingSystemKnowledgePointBase", "operatingSystemKnowledgePoints"],
  algorithm: ["dsaKnowledgePointBase", "dsaKnowledgePoints"],
  redis: ["redisKnowledgePointBase", "redisKnowledgePoints"],
  mysql: ["mysqlKnowledgePointBase", "mysqlKnowledgePoints"],
  rabbitmq: ["rabbitmqKnowledgePointBase", "rabbitmqKnowledgePoints"],
  backend: ["backendKnowledgePoints"],
  docker: ["dockerKnowledgePoints"],
  kubernetes: ["kubernetesKnowledgePoints"],
  agent: ["agentKnowledgePoints"],
};

function printJson(value) {
  process.stdout.write(`${JSON.stringify(value, null, 2)}\n`);
}

function today() {
  return new Date().toISOString().slice(0, 10);
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

function splitList(value) {
  return String(value ?? "")
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

function makeGlobalId(categoryId, pointId) {
  return `${categoryId}/${pointId}`;
}

function itemMatchesFilters(item, { ids, categoryFilter }) {
  const globalId = makeGlobalId(item.categoryId, item.id);
  return (
    (ids.size === 0 || ids.has(globalId) || ids.has(item.id)) &&
    (categoryFilter.size === 0 || categoryFilter.has(item.categoryId))
  );
}

function categoryFile(categoryId) {
  return join(dataDir, categoryFiles[categoryId]);
}

function getCategoryBlock(source, categoryId) {
  const arrayNames = categorySourceArrays[categoryId] ?? [];
  const pattern = new RegExp(`(?:export\\s+)?const\\s+(?:${arrayNames.join("|")})\\s*=\\s*\\[`);
  const match = source.match(pattern);
  const start = match?.index ?? -1;
  if (start === -1) {
    throw new Error(`Category array not found: ${categoryId}`);
  }
  const end = source.indexOf("] satisfies GraphKnowledgePoint[];", start);
  if (end === -1) {
    throw new Error(`Category array is not closed: ${categoryId}`);
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

function parsePointId(line) {
  return line.match(/\bid:\s*"([^"]+)"/)?.[1] ?? null;
}

async function readMarkersByPoint() {
  const markersByPoint = {};
  for (const categoryId of categoryOrder) {
    const source = await readFile(categoryFile(categoryId), "utf8");
    const block = getCategoryBlock(source, categoryId);
    const lines = source.slice(block.start, block.end).split("\n");
    let pendingMarkers = [];

    for (const line of lines) {
      const marker = parseMarker(line);
      if (marker) {
        pendingMarkers.push(marker);
        continue;
      }

      const id = parsePointId(line);
      if (id) {
        markersByPoint[`${categoryId}/${id}`] = Object.fromEntries(
          pendingMarkers.map((item) => [item.name, item]),
        );
        pendingMarkers = [];
      }
    }
  }
  return markersByPoint;
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
  await writeFile(
    stateFile,
    `${JSON.stringify({ ...state, updatedAt: new Date().toISOString() }, null, 2)}\n`,
  );
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

async function buildQueue(args = {}) {
  const markersByPoint = await readMarkersByPoint();
  const categoryFilter = new Set(splitList(args.category ?? args.categories));

  return categoryOrder
    .filter((categoryId) => categoryFilter.size === 0 || categoryFilter.has(categoryId))
    .flatMap((categoryId) =>
      knowledgePointsByCategory[categoryId].map((point) => {
        const key = `${categoryId}/${point.id}`;
        const sourceRefs = point.sourceRefs ?? [];
        const markers = markersByPoint[key] ?? {};
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
          reviewed: Boolean(markers[markerName]),
          reviewedMarker: markers[markerName] ?? null,
        };
      }),
    );
}

function pendingItems(queue) {
  return queue
    .filter((item) => !item.reviewed)
    .sort((a, b) => categoryOrder.indexOf(a.categoryId) - categoryOrder.indexOf(b.categoryId) || a.order - b.order);
}

function sameItem(a, b) {
  return Boolean(a && b && a.categoryId === b.categoryId && a.id === b.id);
}

function makeSearchQueries(item) {
  return [
    `${item.zh} ${item.en} 官方文档`,
    `${item.zh} ${item.en} RFC 标准 源码 设计文档`,
    `${item.zh} ${item.en} 热门 技术博客 原理`,
    `${item.zh} ${item.en} 面试 常见问题`,
    `${item.zh} ${item.en} 生产 排查 性能 边界`,
  ];
}

function getPointExplanationText(point) {
  return (point.explanation ?? []).join("\n");
}

function hasAnyKeyword(text, keywords) {
  return keywords.some((keyword) => text.includes(keyword));
}

function validateArticleQuality(item, point) {
  const issues = [];
  const globalId = makeGlobalId(item.categoryId, item.id);
  const explanationText = getPointExplanationText(point);
  const minSources = 4;
  const minExplanations = 7;
  const minQuestions = 5;

  if (item.sourceRefs.length < minSources) {
    issues.push({
      type: "article-source-refs-too-few",
      item: globalId,
      sourceRefCount: item.sourceRefs.length,
      minSources,
    });
  }

  if (item.explanationCount < minExplanations) {
    issues.push({
      type: "article-explanation-too-short",
      item: globalId,
      explanationCount: item.explanationCount,
      minExplanations,
    });
  }

  if (item.typicalProblemCount < minQuestions) {
    issues.push({
      type: "article-interview-questions-too-few",
      item: globalId,
      typicalProblemCount: item.typicalProblemCount,
      minQuestions,
    });
  }

  if (!hasAnyKeyword(explanationText, ["参考来源", "资料来源", "主要参考"])) {
    issues.push({ type: "article-source-note-missing", item: globalId });
  }

  if (!/```|(?:^|\n)\s*(?:[-*]|\d+\.)\s+/m.test(explanationText)) {
    issues.push({ type: "article-format-structure-missing", item: globalId });
  }

  const requiredKeywordGroups = [
    {
      type: "article-problem-or-definition-missing",
      keywords: ["概念", "定义", "解决", "问题"],
    },
    {
      type: "article-mechanism-missing",
      keywords: ["机制", "流程", "工作", "状态", "过程"],
    },
    {
      type: "article-example-or-scenario-missing",
      keywords: ["例子", "场景", "案例", "使用", "应用"],
    },
    {
      type: "article-boundary-or-failure-missing",
      keywords: ["边界", "特殊", "故障", "异常", "失败", "限制"],
    },
    {
      type: "article-practice-or-troubleshooting-missing",
      keywords: ["排查", "实践", "命令", "指标", "日志", "验证"],
    },
    {
      type: "article-advanced-depth-missing",
      keywords: ["性能", "取舍", "实现", "一致性", "并发", "安全", "容量", "版本"],
    },
  ];

  for (const group of requiredKeywordGroups) {
    if (!hasAnyKeyword(explanationText, group.keywords)) {
      issues.push({ type: group.type, item: globalId });
    }
  }

  return issues;
}

function getLimit(args, fallback = 10) {
  const value = Number(args.limit ?? args.count ?? fallback);
  if (!Number.isFinite(value) || value <= 0) {
    return fallback;
  }
  return Math.floor(value);
}

function isAutopassCandidate(item, args = {}) {
  const minSources = Number(args["min-sources"] ?? 3);
  const minExplanation = Number(args["min-explanation"] ?? 5);
  const minQuestions = Number(args["min-questions"] ?? 3);
  return (
    item.sourceRefs.length >= minSources &&
    item.explanationCount >= minExplanation &&
    item.typicalProblemCount >= minQuestions
  );
}

async function pickItem(queue, state, args) {
  if (args.id) {
    const matches = queue.filter((item) =>
      item.id === args.id && (!args.category || item.categoryId === args.category),
    );
    if (matches.length !== 1) {
      throw new Error(`Expected one item, got ${matches.length}: ${args.category ?? "*"} / ${args.id}`);
    }
    return matches[0];
  }

  if (state.current) {
    const current = queue.find((item) => sameItem(item, state.current));
    if (current && !current.reviewed) {
      return current;
    }
  }

  return pendingItems(queue)[0] ?? null;
}

async function start(args = {}) {
  await withLock(async () => {
    const state = await readState();
    const queue = await buildQueue(args);
    const item = await pickItem(queue, state, args);

    if (!item) {
      await writeState({ ...state, status: "complete", current: null });
      printJson({ status: "complete", pending: 0 });
      return;
    }

    const continuing = sameItem(item, state.current);
    const current = {
      ...item,
      step: continuing ? state.current.step : "research",
      startedAt: continuing ? state.current.startedAt : new Date().toISOString(),
      searchQueries: makeSearchQueries(item),
      researchChecklist: [
        "official docs, standards, RFCs, or authoritative project docs",
        "popular high-quality Chinese technical blogs or articles",
        "high-quality English engineering references",
        "beginner mental model and example",
        "advanced mechanisms, tradeoffs, and boundaries",
        "failure modes and troubleshooting evidence",
        "interview questions and advanced follow-ups",
        "sourceRefs verified",
      ],
      notes: continuing ? state.current.notes ?? [] : [],
    };

    await writeState({ ...state, status: "active", current });
    printJson({ status: "active", current, pending: pendingItems(queue).length });
  });
}

async function batch(args = {}) {
  await withLock(async () => {
    const state = await readState();
    const queue = await buildQueue(args);
    const limit = getLimit(args, 5);
    const items = pendingItems(queue).slice(0, limit).map((item) => ({
      ...item,
      searchQueries: makeSearchQueries(item),
    }));

    if (items.length === 0) {
      await writeState({ ...state, status: "complete", current: null, batch: [] });
      printJson({ status: "complete", pending: 0, batch: [] });
      return;
    }

    await writeState({
      ...state,
      status: "batch-active",
      current: null,
      batch: items,
    });
    printJson({
      status: "batch-active",
      batch: items,
      pending: pendingItems(queue).length,
    });
  });
}

async function status(args = {}) {
  const state = await readState();
  const queue = await buildQueue(args);
  const pending = pendingItems(queue);
  const limit = getLimit(args, 20);
  const counts = categoryOrder.map((categoryId) => {
    const scoped = queue.filter((item) => item.categoryId === categoryId);
    return {
      categoryId,
      total: scoped.length,
      reviewed: scoped.filter((item) => item.reviewed).length,
      pending: scoped.filter((item) => !item.reviewed).length,
    };
  });

  printJson({
    status: state.status,
    current: state.current,
    batch: state.batch ?? [],
    next: pending[0] ?? null,
    nextPending: pending.slice(0, limit),
    total: queue.length,
    reviewed: queue.filter((item) => item.reviewed).length,
    pending: pending.length,
    counts,
  });
}

function markerLine(title, date, sourceCount) {
  return `  /* <!-- ${markerName}: ${title} | ${date} | source_count=${sourceCount} --> */`;
}

async function writeMarker({ categoryId, id, date, sourceCount }) {
  const sourcePath = categoryFile(categoryId);
  const source = await readFile(sourcePath, "utf8");
  const block = getCategoryBlock(source, categoryId);
  const before = source.slice(0, block.start);
  const blockText = source.slice(block.start, block.end);
  const after = source.slice(block.end);
  const lines = blockText.split("\n");
  const lineIndex = lines.findIndex((line) => line.includes(`id: "${id}"`));
  if (lineIndex === -1) {
    throw new Error(`Point not found: ${categoryId}/${id}`);
  }

  const point = knowledgePointsByCategory[categoryId].find((candidate) => candidate.id === id);
  const nextMarker = markerLine(point?.zh ?? id, date, sourceCount);
  let insertIndex = lineIndex;
  while (insertIndex > 0 && /^\s*\/\*\s*<!--\s*KG_[A-Z_]+:/.test(lines[insertIndex - 1])) {
    const previous = parseMarker(lines[insertIndex - 1]);
    if (previous?.name === markerName) {
      lines[insertIndex - 1] = nextMarker;
      await writeFile(sourcePath, `${before}${lines.join("\n")}${after}`);
      return;
    }
    insertIndex -= 1;
  }

  lines.splice(insertIndex, 0, nextMarker);
  await writeFile(sourcePath, `${before}${lines.join("\n")}${after}`);
}

async function complete(args = {}) {
  await withLock(async () => {
    const state = await readState();
    const queue = await buildQueue(args);
    const categoryId = args.category ?? state.current?.categoryId;
    const id = args.id ?? state.current?.id;
    if (!categoryId || !id) {
      throw new Error("Run kg:review:start first, or pass --category and --id.");
    }

    const item = queue.find((candidate) => candidate.categoryId === categoryId && candidate.id === id);
    if (!item) {
      throw new Error(`Queue item not found: ${categoryId}/${id}`);
    }

    const sourceCount = Number(args["source-count"] ?? args.sourceCount ?? item.sourceRefs.length);
    const date = args.date ?? today();
    await writeMarker({ categoryId, id, date, sourceCount });

    const record = {
      categoryId,
      id,
      zh: item.zh,
      en: item.en,
      sourceCount,
      completedAt: new Date().toISOString(),
    };
    await writeState({
      ...state,
      status: "idle",
      current: null,
      completed: [...(state.completed ?? []), record],
    });
    printJson(record);
  });
}

async function markReviewed(args = {}) {
  await withLock(async () => {
    const state = await readState();
    const queue = await buildQueue(args);
    const ids = splitList(args.ids);
    const items = ids.length > 0
      ? ids.map((id) => {
        const [categoryId, pointId] = id.includes("/") ? id.split("/") : [args.category, id];
        if (!categoryId || !pointId) {
          throw new Error(`Item id must be category/id or pass --category: ${id}`);
        }
        const item = queue.find((candidate) => candidate.categoryId === categoryId && candidate.id === pointId);
        if (!item) {
          throw new Error(`Queue item not found: ${categoryId}/${pointId}`);
        }
        return item;
      })
      : (state.batch ?? []).map((batchItem) => {
        const item = queue.find((candidate) => sameItem(candidate, batchItem));
        if (!item) {
          throw new Error(`Queue item not found: ${batchItem.categoryId}/${batchItem.id}`);
        }
        return item;
      });

    if (items.length === 0) {
      throw new Error("No batch items. Run kg:review:batch first, or pass --ids category/id,category/id.");
    }

    const date = args.date ?? today();
    const records = [];
    for (const item of items) {
      const sourceCount = item.sourceRefs.length;
      await writeMarker({
        categoryId: item.categoryId,
        id: item.id,
        date,
        sourceCount,
      });
      records.push({
        categoryId: item.categoryId,
        id: item.id,
        zh: item.zh,
        en: item.en,
        sourceCount,
        completedAt: new Date().toISOString(),
      });
    }

    await writeState({
      ...state,
      status: "idle",
      current: null,
      batch: [],
      completed: [...(state.completed ?? []), ...records],
    });
    printJson({ completed: records });
  });
}

async function syncCounts(args = {}) {
  await withLock(async () => {
    const queue = await buildQueue(args);
    const date = args.date ?? today();
    const ids = new Set(splitList(args.ids));
    const categoryFilter = new Set(splitList(args.category ?? args.categories));
    const synced = [];

    for (const item of queue) {
      const globalId = `${item.categoryId}/${item.id}`;
      if (!item.reviewed) {
        continue;
      }
      if (ids.size > 0 && !ids.has(globalId) && !ids.has(item.id)) {
        continue;
      }
      if (categoryFilter.size > 0 && !categoryFilter.has(item.categoryId)) {
        continue;
      }
      if (item.reviewedMarker.sourceCount === item.sourceRefs.length) {
        continue;
      }

      await writeMarker({
        categoryId: item.categoryId,
        id: item.id,
        date,
        sourceCount: item.sourceRefs.length,
      });
      synced.push({
        item: globalId,
        markerSourceCount: item.reviewedMarker.sourceCount,
        actualSourceCount: item.sourceRefs.length,
      });
    }

    printJson({ synced, count: synced.length });
  });
}

async function autopass(args = {}) {
  await withLock(async () => {
    const state = await readState();
    const queue = await buildQueue(args);
    const limit = getLimit(args, 10);
    const items = pendingItems(queue)
      .filter((item) => isAutopassCandidate(item, args))
      .slice(0, limit);

    if (items.length === 0) {
      printJson({ completed: [], reason: "no autopass candidates" });
      return;
    }

    const date = args.date ?? today();
    const records = [];
    for (const item of items) {
      await writeMarker({
        categoryId: item.categoryId,
        id: item.id,
        date,
        sourceCount: item.sourceRefs.length,
      });
      records.push({
        categoryId: item.categoryId,
        id: item.id,
        zh: item.zh,
        en: item.en,
        sourceCount: item.sourceRefs.length,
        explanationCount: item.explanationCount,
        typicalProblemCount: item.typicalProblemCount,
        completedAt: new Date().toISOString(),
      });
    }

    await writeState({
      ...state,
      status: "idle",
      current: null,
      batch: [],
      completed: [...(state.completed ?? []), ...records],
    });
    printJson({ completed: records });
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
  const queue = await buildQueue(args);
  const pending = pendingItems(queue);
  printJson({
    generatedAt: new Date().toISOString(),
    queue: {
      total: queue.length,
      reviewed: queue.filter((item) => item.reviewed).length,
      pending: pending.length,
    },
    current: state.current,
    nextPending: pending.slice(0, 20),
    workflow: "docs/workflows/kg-explain-all-knowledge-points.md",
    resumeCommand: "npm run kg:review:start",
  });
}

async function validate(args = {}) {
  const queue = await buildQueue(args);
  const essentialKnowledgeIds = coreKnowledgePointIdsByCategory;
  const sourceIds = new Set(Object.keys(knowledgeSources));
  const strictArticle = Boolean(args["strict-article"] ?? args.strictArticle);
  const ids = new Set(splitList(args.ids ?? args.id));
  const categoryFilter = new Set(splitList(args.category ?? args.categories));
  const issues = [];
  const seenIds = new Map();
  const pointIdSets = Object.fromEntries(
    categoryOrder.map((categoryId) => [
      categoryId,
      new Set(knowledgePointsByCategory[categoryId].map((point) => point.id)),
    ]),
  );
  const queueByGlobalId = new Map(queue.map((item) => [`${item.categoryId}/${item.id}`, item]));

  for (const categoryId of categoryOrder) {
    const knownIds = pointIdSets[categoryId] ?? new Set();
    const essentialIds = essentialKnowledgeIds[categoryId] ?? [];

    if (essentialIds.length === 0) {
      issues.push({ type: "missing-essential-id-list", categoryId });
    }

    for (const id of essentialIds) {
      const globalId = makeGlobalId(categoryId, id);
      const item = queueByGlobalId.get(globalId);

      if (!knownIds.has(id)) {
        issues.push({ type: "unknown-essential-id", item: globalId });
        continue;
      }

      if (!item) {
        continue;
      }

      if (item.sourceRefs.length === 0) {
        issues.push({ type: "core-source-refs-missing", item: globalId });
      }

      if (item.explanationCount < 5) {
        issues.push({ type: "core-explanation-too-short", item: globalId, explanationCount: item.explanationCount });
      }

      if (item.typicalProblemCount < 3) {
        issues.push({ type: "core-interview-questions-too-few", item: globalId, typicalProblemCount: item.typicalProblemCount });
      }
    }
  }

  for (const item of queue) {
    const globalId = makeGlobalId(item.categoryId, item.id);
    if (seenIds.has(globalId)) {
      issues.push({ type: "duplicate-point-id", item: globalId });
    }
    seenIds.set(globalId, true);

    for (const sourceRef of item.sourceRefs) {
      if (!sourceIds.has(sourceRef)) {
        issues.push({ type: "unknown-source-ref", item: globalId, sourceRef });
      }
    }

    const point = knowledgePointsByCategory[item.categoryId].find((candidate) => candidate.id === item.id);
    const knownIds = pointIdSets[item.categoryId] ?? new Set();

    for (const prerequisiteId of point?.prerequisites ?? []) {
      if (!knownIds.has(prerequisiteId)) {
        issues.push({ type: "unknown-prerequisite-ref", item: globalId, prerequisiteId });
      }
    }

    for (const relatedId of point?.related ?? []) {
      if (!knownIds.has(relatedId)) {
        issues.push({ type: "unknown-related-ref", item: globalId, relatedId });
      }
    }

    if (item.reviewed && item.reviewedMarker.sourceCount !== item.sourceRefs.length) {
      issues.push({
        type: "marker-source-count-mismatch",
        item: globalId,
        markerSourceCount: item.reviewedMarker.sourceCount,
        actualSourceCount: item.sourceRefs.length,
      });
    }

    if (item.reviewed && item.explanationCount < 5) {
      issues.push({ type: "reviewed-explanation-too-short", item: globalId, explanationCount: item.explanationCount });
    }

    if (item.reviewed && item.typicalProblemCount < 3) {
      issues.push({ type: "reviewed-interview-questions-too-few", item: globalId, typicalProblemCount: item.typicalProblemCount });
    }

    if (strictArticle && point && itemMatchesFilters(item, { ids, categoryFilter })) {
      issues.push(...validateArticleQuality(item, point));
    }
  }

  printJson({
    ok: issues.length === 0,
    total: queue.length,
    reviewed: queue.filter((item) => item.reviewed).length,
    pending: pendingItems(queue).length,
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
  if (command === "start" || command === "next") {
    await start(args);
    return;
  }
  if (command === "batch") {
    await batch(args);
    return;
  }
  if (command === "complete") {
    await complete(args);
    return;
  }
  if (command === "mark-reviewed") {
    await markReviewed(args);
    return;
  }
  if (command === "sync-counts") {
    await syncCounts(args);
    return;
  }
  if (command === "autopass") {
    await autopass(args);
    return;
  }
  if (command === "fail") {
    await fail(args);
    return;
  }
  if (command === "handoff") {
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
