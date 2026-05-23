import {
  Bot,
  Boxes,
  Container,
  Cpu,
  Database,
  GitBranch,
  MemoryStick,
  Network,
  Rabbit,
  Server,
} from "lucide-react";
import {
  categorySourceRefs,
  knowledgePointsByCategory,
  knowledgeSources,
  type GraphKnowledgePoint,
  type KnowledgeSourceId,
} from "../../data/knowledge-points";
import type { CategoryId, Difficulty } from "../../data/types";
import type {
  CategoryCopy,
  GraphBoard,
  GraphMode,
  KnowledgeSourceView,
  Locale,
  PointPriority,
} from "../../app/ui-types";
import { isPointVisualizable } from "../../data/visual-simulations/metadata";

export const categoryIcons = [
  Network,
  MemoryStick,
  GitBranch,
  Database,
  Cpu,
  Rabbit,
  Server,
  Container,
  Boxes,
  Bot,
];

export function getCategoryLabel(t: CategoryCopy, categoryId: CategoryId) {
  return t.categories.find(([id]) => id === categoryId)?.[1] ?? categoryId;
}

export function getKnowledgeLabel(point: GraphKnowledgePoint, locale: Locale) {
  return locale === "zh" ? point.zh : point.en;
}

export function getDifficultyLabel(difficulty: Difficulty, t: CategoryCopy) {
  const labels = {
    easy: t.difficulties[0],
    medium: t.difficulties[1],
    hard: t.difficulties[2],
  };

  return labels[difficulty] ?? difficulty;
}

export function normalizeSearch(value: string) {
  return value.trim().toLowerCase();
}

export function pointMatchesSearch(
  point: GraphKnowledgePoint,
  categoryLabel: string,
  query: string,
) {
  const normalized = normalizeSearch(query);

  if (!normalized) {
    return true;
  }

  return [point.zh, point.en, point.id, categoryLabel].some((value) =>
    value.toLowerCase().includes(normalized),
  );
}

export function getPointSearchScore(
  point: GraphKnowledgePoint,
  categoryLabel: string,
  query: string,
) {
  const normalized = normalizeSearch(query);

  if (!normalized) {
    return 0;
  }

  const values = [point.id, point.zh, point.en, categoryLabel].map((value) =>
    value.toLowerCase(),
  );

  if (values.some((value) => value === normalized)) {
    return 100;
  }

  if (values.some((value) => value.split(/[\s-]+/).includes(normalized))) {
    return 82;
  }

  if (values.some((value) => value.startsWith(normalized))) {
    return 68;
  }

  if (values.some((value) => value.includes(normalized))) {
    return 32;
  }

  return 0;
}

export function findFirstSearchMatch(t: CategoryCopy, query: string) {
  const normalized = normalizeSearch(query);

  if (!normalized) {
    return undefined;
  }

  let bestMatch: { categoryId: CategoryId; score: number } | undefined;

  for (const [rawId] of t.categories) {
    const categoryId = rawId as CategoryId;
    const categoryLabel = getCategoryLabel(t, categoryId);

    knowledgePointsByCategory[categoryId].forEach((point) => {
      const score = getPointSearchScore(point, categoryLabel, normalized);

      if (score > (bestMatch?.score ?? 0)) {
        bestMatch = { categoryId, score };
      }
    });
  }

  return bestMatch?.categoryId;
}

export const areaLabelMap: Record<string, { zh: string; en: string }> = {
  foundation: { zh: "基础", en: "Foundation" },
  physical: { zh: "物理层", en: "Physical" },
  "data-link": { zh: "数据链路层", en: "Data Link" },
  network: { zh: "网络", en: "Network" },
  transport: { zh: "传输层", en: "Transport" },
  application: { zh: "应用层", en: "Application" },
  security: { zh: "安全", en: "Security" },
  performance: { zh: "性能", en: "Performance" },
  process: { zh: "进程线程", en: "Process" },
  scheduling: { zh: "调度", en: "Scheduling" },
  concurrency: { zh: "并发同步", en: "Concurrency" },
  memory: { zh: "内存", en: "Memory" },
  io: { zh: "I/O", en: "I/O" },
  "file-system": { zh: "文件系统", en: "File System" },
  virtualization: { zh: "虚拟化", en: "Virtualization" },
  linux: { zh: "Linux", en: "Linux" },
  api: { zh: "API", en: "API" },
  sql: { zh: "SQL", en: "SQL" },
  engine: { zh: "存储引擎", en: "Engine" },
  index: { zh: "索引", en: "Index" },
  transaction: { zh: "事务", en: "Transaction" },
  lock: { zh: "锁", en: "Lock" },
  log: { zh: "日志", en: "Log" },
  replication: { zh: "复制", en: "Replication" },
  "data-type": { zh: "数据类型", en: "Data Type" },
  persistence: { zh: "持久化", en: "Persistence" },
  expiration: { zh: "过期淘汰", en: "Expiration" },
  coordination: { zh: "分布式协作", en: "Coordination" },
  "high-availability": { zh: "高可用", en: "High Availability" },
  cluster: { zh: "集群", en: "Cluster" },
  exchange: { zh: "交换机", en: "Exchange" },
  queue: { zh: "队列", en: "Queue" },
  routing: { zh: "路由", en: "Routing" },
  reliability: { zh: "可靠性", en: "Reliability" },
  "dead-letter": { zh: "死信", en: "Dead Letter" },
  "delay-retry": { zh: "延迟重试", en: "Delay & Retry" },
  pattern: { zh: "消费模式", en: "Pattern" },
  availability: { zh: "可用性", en: "Availability" },
  quality: { zh: "质量保障", en: "Quality" },
  engineering: { zh: "工程实践", en: "Engineering" },
  traffic: { zh: "流量治理", en: "Traffic" },
  resilience: { zh: "韧性", en: "Resilience" },
  consistency: { zh: "一致性", en: "Consistency" },
  messaging: { zh: "消息", en: "Messaging" },
  cache: { zh: "缓存", en: "Cache" },
  observability: { zh: "可观测性", en: "Observability" },
  build: { zh: "构建", en: "Build" },
  image: { zh: "镜像", en: "Image" },
  container: { zh: "容器", en: "Container" },
  registry: { zh: "仓库", en: "Registry" },
  storage: { zh: "存储", en: "Storage" },
  compose: { zh: "Compose", en: "Compose" },
  resource: { zh: "资源", en: "Resource" },
  deployment: { zh: "部署", en: "Deployment" },
  node: { zh: "节点", en: "Node" },
  "control-plane": { zh: "控制平面", en: "Control Plane" },
  "multi-tenancy": { zh: "多租户", en: "Multi-tenancy" },
  workload: { zh: "工作负载", en: "Workload" },
  release: { zh: "发布", en: "Release" },
  configuration: { zh: "配置", en: "Configuration" },
  autoscaling: { zh: "自动伸缩", en: "Autoscaling" },
  troubleshooting: { zh: "故障排查", en: "Troubleshooting" },
  prompting: { zh: "提示词", en: "Prompting" },
  tools: { zh: "工具", en: "Tools" },
  rag: { zh: "RAG", en: "RAG" },
  planning: { zh: "规划", en: "Planning" },
  workflow: { zh: "工作流", en: "Workflow" },
  "multi-agent": { zh: "多 Agent", en: "Multi-Agent" },
  evaluation: { zh: "评估", en: "Evaluation" },
  safety: { zh: "安全边界", en: "Safety" },
  tooling: { zh: "工具体系", en: "Tooling" },
  technique: { zh: "技术方法", en: "Technique" },
  product: { zh: "产品体验", en: "Product" },
  scaling: { zh: "扩缩容", en: "Scaling" },
  optimization: { zh: "优化", en: "Optimization" },
  linear: { zh: "线性结构", en: "Linear" },
  hashing: { zh: "哈希", en: "Hashing" },
  tree: { zh: "树", en: "Tree" },
  heap: { zh: "堆", en: "Heap" },
  graph: { zh: "图", en: "Graph" },
  sorting: { zh: "排序", en: "Sorting" },
  search: { zh: "搜索", en: "Search" },
  algorithm: { zh: "算法思想", en: "Algorithm" },
  operations: { zh: "运维", en: "Operations" },
};

export const essentialKnowledgeIds: Record<CategoryId, string[]> = {
  network: [
    "network-overview",
    "tcp-ip-model",
    "ip",
    "subnet",
    "gateway",
    "routing",
    "mac-address",
    "arp",
    "nat",
    "port",
    "tcp",
    "tcp-handshake",
    "tcp-four-way-wave",
    "tcp-state",
    "tcp-retransmission",
    "tcp-flow-control",
    "tcp-congestion-control",
    "udp",
    "dns",
    "http",
    "http-cache",
    "tls",
    "https",
    "latency-bandwidth",
    "load-balancing",
    "observability",
  ],
  os: [
    "os-overview",
    "kernel",
    "kernel-mode",
    "system-call",
    "process",
    "process-state",
    "thread",
    "context-switch",
    "scheduler",
    "critical-section",
    "mutex",
    "semaphore",
    "condition-variable",
    "thread-safety",
    "race-condition",
    "deadlock",
    "deadlock-conditions",
    "deadlock-prevention",
    "memory-management",
    "virtual-memory",
    "paging",
    "page-table",
    "tlb",
    "page-fault",
    "heap-stack",
    "file-system",
    "file-descriptor",
    "io",
    "nonblocking-io",
    "io-multiplexing",
    "epoll",
    "socket",
    "linux-shell",
    "linux-command",
  ],
  algorithm: [
    "dsa-overview",
    "time-complexity",
    "space-complexity",
    "recursion",
    "array",
    "two-pointers",
    "sliding-window",
    "prefix-sum",
    "linked-list",
    "fast-slow-pointers",
    "stack",
    "monotonic-stack",
    "queue",
    "hash-table",
    "lru-cache",
    "tree",
    "binary-tree",
    "tree-traversal",
    "heap",
    "priority-queue",
    "graph",
    "graph-representation",
    "dfs",
    "bfs",
    "binary-search",
    "search-boundary",
    "sorting",
    "merge-sort",
    "quick-sort",
    "quickselect",
    "greedy",
    "backtracking",
    "dynamic-programming",
    "dp-state",
  ],
  mysql: [
    "mysql-overview",
    "sql",
    "schema-design",
    "data-type",
    "primary-key",
    "select",
    "where",
    "join",
    "limit-offset",
    "innodb",
    "clustered-index",
    "buffer-pool",
    "mysql-index",
    "b-plus-tree",
    "secondary-index",
    "back-to-table",
    "covering-index",
    "composite-index",
    "leftmost-prefix",
    "range-query",
    "transaction",
    "acid",
    "isolation-level",
    "repeatable-read",
    "phantom-read",
    "mvcc",
    "read-view",
    "redo-log",
    "undo-log",
    "binlog",
    "two-phase-commit",
    "crash-recovery",
    "lock",
    "row-lock",
    "record-lock",
    "gap-lock",
    "next-key-lock",
    "deadlock",
    "sql-optimization",
    "explain",
    "access-type",
    "slow-query-log",
    "replication",
    "read-write-splitting",
    "replication-lag",
    "connection-pool",
  ],
  redis: [
    "redis-overview",
    "redis-command",
    "redis-cli",
    "redis-data-types",
    "redis-string",
    "redis-hash",
    "redis-list",
    "redis-set",
    "redis-zset",
    "redis-persistence",
    "rdb",
    "aof",
    "aof-rewrite",
    "fork-cow",
    "expire-policy",
    "lazy-expire",
    "active-expire",
    "eviction-policy",
    "redis-memory",
    "big-key",
    "hot-key",
    "redis-cache",
    "cache-aside",
    "cache-consistency",
    "cache-penetration",
    "bloom-filter",
    "cache-breakdown",
    "mutex-rebuild",
    "cache-avalanche",
    "redis-lock",
    "set-nx-ex",
    "lua-unlock",
    "redis-replication",
    "full-sync",
    "partial-sync",
    "replication-lag",
    "redis-sentinel",
    "sentinel-failover",
    "redis-cluster",
    "hash-slot",
    "key-tag",
    "slowlog",
    "redis-monitor",
    "load-balancing",
  ],
  rabbitmq: [
    "rabbitmq-overview",
    "amqp",
    "broker",
    "connection",
    "channel",
    "message",
    "producer",
    "consumer",
    "exchange",
    "direct-exchange",
    "topic-exchange",
    "queue",
    "durable-queue",
    "quorum-queue",
    "binding",
    "routing-key",
    "publisher-confirm",
    "consumer-ack",
    "manual-ack",
    "prefetch",
    "persistent-message",
    "ttl",
    "dead-letter-exchange",
    "dead-letter-queue",
    "delay-queue",
    "retry",
    "idempotency",
    "transactional-outbox",
    "order-consumption",
    "single-active-consumer",
    "peak-shaving",
    "back-pressure",
    "monitoring",
    "cluster",
    "high-availability",
  ],
  backend: [
    "backend-overview",
    "api-design",
    "restful-api",
    "error-model",
    "api-contract",
    "auth",
    "authentication",
    "authorization",
    "jwt",
    "rbac",
    "api-gateway",
    "rate-limit",
    "circuit-breaker",
    "fallback",
    "timeout",
    "retry-policy",
    "bulkhead",
    "back-pressure",
    "distributed-lock",
    "fencing-token",
    "database-transaction",
    "isolation-level",
    "deadlock",
    "distributed-transaction",
    "saga",
    "transactional-outbox",
    "idempotent-api",
    "message-queue",
    "rabbitmq",
    "kafka",
    "event-driven",
    "cache",
    "redis-cache",
    "cache-aside",
    "cache-consistency",
    "cache-penetration",
    "cache-breakdown",
    "cache-avalanche",
    "observability",
    "logging",
    "monitoring",
    "alerting",
    "tracing",
    "canary-release",
    "rollback",
  ],
  docker: [
    "docker-overview",
    "containerization",
    "namespace",
    "cgroup",
    "image",
    "image-layer",
    "tag",
    "container",
    "container-lifecycle",
    "run-command",
    "port-mapping",
    "healthcheck",
    "dockerfile",
    "dockerfile-run",
    "entrypoint",
    "build-context",
    "dockerignore",
    "build-cache",
    "multi-stage-build",
    "registry",
    "network",
    "bridge-network",
    "dns",
    "volume",
    "bind-mount",
    "compose",
    "compose-file",
    "compose-service",
    "logs",
    "container-stats",
    "resource-limit",
    "memory-limit",
    "oom",
    "security-hardening",
    "non-root-user",
    "image-security",
    "debugging",
    "deployment-practice",
    "rollback",
  ],
  kubernetes: [
    "kubernetes-overview",
    "cluster",
    "control-plane",
    "api-server",
    "etcd",
    "kubectl",
    "manifest",
    "namespace",
    "pod",
    "pod-lifecycle",
    "resource-limit",
    "deployment",
    "label-selector",
    "statefulset",
    "service",
    "clusterip",
    "endpoint",
    "dns",
    "ingress",
    "network-policy",
    "configmap",
    "secret",
    "rbac",
    "node",
    "kubelet",
    "scheduler",
    "taint-toleration",
    "probe",
    "readiness-probe",
    "persistent-volume",
    "persistent-volume-claim",
    "storage-class",
    "hpa",
    "pod-disruption-budget",
    "rolling-update",
    "rollback",
    "monitoring",
    "troubleshooting",
    "logs",
    "helm",
  ],
  agent: [
    "agent-overview",
    "llm",
    "token",
    "context-window",
    "model-selection",
    "prompt",
    "system-prompt",
    "instruction-hierarchy",
    "structured-output",
    "validation",
    "tool-calling",
    "function-calling",
    "tool-schema",
    "tool-selection",
    "tool-result",
    "tool-error-handling",
    "embedding",
    "rag",
    "vector-database",
    "chunking",
    "retrieval",
    "reranking",
    "grounding",
    "memory",
    "long-term-memory",
    "context-management",
    "planner",
    "task-decomposition",
    "execution",
    "react",
    "human-in-the-loop",
    "workflow-orchestration",
    "multi-agent",
    "coordinator",
    "evaluation",
    "task-success-rate",
    "tool-call-accuracy",
    "golden-dataset",
    "regression-test",
    "safety-boundary",
    "guardrails",
    "prompt-injection",
    "access-control",
    "tool-permission",
    "audit-log",
    "observability",
    "metrics",
    "cost-control",
  ],
};

export function getAreaKey(point: GraphKnowledgePoint) {
  return point.area ?? point.layer ?? "foundation";
}

export function getAreaLabel(area: string, locale: Locale) {
  const known = areaLabelMap[area];

  if (known) {
    return known[locale];
  }

  return area
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export function getVisualizablePoints(categoryId: CategoryId) {
  return sortKnowledgePointsByOrder(
    knowledgePointsByCategory[categoryId].filter((point) =>
      isPointVisualizable(categoryId, point),
    ),
  );
}

export function sortKnowledgePointsByOrder(points: GraphKnowledgePoint[]) {
  return [...points].sort((a, b) => {
    const orderDelta =
      (a.order ?? a.learningPathPosition ?? Number.MAX_SAFE_INTEGER) -
      (b.order ?? b.learningPathPosition ?? Number.MAX_SAFE_INTEGER);

    if (orderDelta !== 0) {
      return orderDelta;
    }

    return a.id.localeCompare(b.id);
  });
}

export function getVisiblePoints(
  selectedCategory: CategoryId,
  allPoints: GraphKnowledgePoint[],
  matchedPoints: GraphKnowledgePoint[],
  graphMode: GraphMode,
  hasSearch: boolean,
) {
  if (hasSearch) {
    return sortKnowledgePointsByOrder(matchedPoints);
  }

  if (graphMode === "all") {
    return sortKnowledgePointsByOrder(allPoints);
  }

  const coreIdSet = new Set(essentialKnowledgeIds[selectedCategory]);

  return sortKnowledgePointsByOrder(
    allPoints.filter((point) => coreIdSet.has(point.id)),
  );
}

export function getVisibleGraphPoints(
  selectedCategory: CategoryId,
  allPoints: GraphKnowledgePoint[],
  matchedPoints: GraphKnowledgePoint[],
  graphMode: GraphMode,
  graphBoard: GraphBoard,
  hasSearch: boolean,
) {
  const basePoints = getVisiblePoints(
    selectedCategory,
    allPoints,
    matchedPoints,
    graphMode,
    hasSearch,
  );

  if (graphBoard === "knowledge") {
    return basePoints;
  }

  return basePoints.filter((point) => isPointVisualizable(selectedCategory, point));
}

export function getPointPriority(
  selectedCategory: CategoryId,
  point: GraphKnowledgePoint,
  selectedKnowledgeId: string,
): PointPriority {
  if (
    point.id === selectedKnowledgeId ||
    essentialKnowledgeIds[selectedCategory].includes(point.id)
  ) {
    return "primary";
  }

  return "secondary";
}

export function resolvePointSources(
  categoryId: CategoryId,
  point?: GraphKnowledgePoint,
): KnowledgeSourceView[] {
  const refs = (point?.sourceRefs?.length ? point.sourceRefs : categorySourceRefs[categoryId]) as KnowledgeSourceId[];

  return refs.map((sourceRef) => {
    const source = knowledgeSources[sourceRef];

    if (source) {
      return {
        id: sourceRef,
        title: source.title,
        url: source.url,
        found: true,
      };
    }

    return {
      id: sourceRef,
      title: `Missing source: ${sourceRef}`,
      url: "",
      found: false,
    };
  });
}
