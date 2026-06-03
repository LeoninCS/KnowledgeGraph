import type { CategoryId } from "../types.ts";
import type { GraphKnowledgePoint } from "../knowledge-points/types.ts";
import { filterCoreKnowledgePointIds } from "../knowledge-points/core.ts";

export type LocalizedText = {
  zh: string;
  en: string;
};

export type ActorKind =
  | "client"
  | "server"
  | "network"
  | "database"
  | "cache"
  | "queue"
  | "broker"
  | "kernel"
  | "cpu"
  | "container"
  | "cluster"
  | "agent"
  | "model"
  | "tool"
  | "security"
  | "storage"
  | "data";

export type SimulationTone = "brand" | "teal" | "success" | "warning" | "danger";

export interface SimulationActor {
  id: string;
  label: LocalizedText;
  detail: LocalizedText;
  kind: ActorKind;
}

export interface SimulationStep {
  title: LocalizedText;
  action: LocalizedText;
  from: string;
  to: string;
  label: LocalizedText;
  description: LocalizedText;
  insight: LocalizedText;
  tone?: SimulationTone;
  states: Record<string, LocalizedText>;
}

export interface VisualSimulation {
  key: string;
  categoryId: CategoryId;
  pointId: string;
  pattern: LocalizedText;
  title: LocalizedText;
  subtitle: LocalizedText;
  entryLabel: LocalizedText;
  actors: SimulationActor[];
  initialStates: Record<string, LocalizedText>;
  steps: SimulationStep[];
  metrics: LocalizedText[];
}

export const tx = (zh: string, en: string): LocalizedText => ({ zh, en });

export function readLocalizedText(text: LocalizedText, locale: "zh" | "en") {
  return text[locale];
}

export function getSimulationKey(categoryId: CategoryId, pointId: string) {
  return `${categoryId}:${pointId}`;
}

const visualAreas: Record<CategoryId, string[]> = {
  go: [
    "syntax",
    "type-system",
    "function",
    "concurrency",
    "runtime",
    "testing",
    "performance",
    "web",
    "tooling",
  ],
  network: [
    "data-link",
    "network",
    "transport",
    "application",
    "security",
    "performance",
  ],
  os: [
    "process",
    "scheduling",
    "concurrency",
    "memory",
    "io",
    "file-system",
    "virtualization",
    "linux",
  ],
  algorithm: [
    "linear",
    "hashing",
    "tree",
    "heap",
    "graph",
    "sorting",
    "search",
    "algorithm",
  ],
  mysql: [
    "sql",
    "engine",
    "index",
    "transaction",
    "lock",
    "log",
    "replication",
    "optimization",
  ],
  redis: [
    "data-type",
    "persistence",
    "expiration",
    "memory",
    "cache",
    "coordination",
    "high-availability",
    "cluster",
  ],
  rabbitmq: [
    "exchange",
    "queue",
    "routing",
    "reliability",
    "dead-letter",
    "delay-retry",
    "pattern",
    "operations",
    "engineering",
  ],
  backend: [
    "security",
    "gateway",
    "traffic",
    "resilience",
    "consistency",
    "messaging",
    "cache",
    "observability",
  ],
  docker: [
    "foundation",
    "image",
    "container",
    "build",
    "registry",
    "network",
    "storage",
    "compose",
    "observability",
    "resource",
    "deployment",
    "security",
  ],
  kubernetes: [
    "foundation",
    "control-plane",
    "node",
    "workload",
    "release",
    "network",
    "configuration",
    "storage",
    "autoscaling",
    "troubleshooting",
  ],
  agent: [
    "tools",
    "rag",
    "memory",
    "planning",
    "workflow",
    "multi-agent",
    "safety",
    "operations",
    "product",
    "evaluation",
  ],
};

const rawVisualPointIds: Partial<Record<CategoryId, string[]>> = {
  go: [
    "go-module",
    "array-slice",
    "map",
    "interface",
    "goroutine",
    "channel",
    "select",
    "context",
    "mutex",
    "waitgroup",
    "pipeline",
    "go-runtime",
    "scheduler",
    "gc",
    "go-test",
    "benchmark",
    "pprof",
    "http-server",
    "database-sql",
  ],
  network: [
    "network-overview",
    "osi-model",
    "tcp-ip-model",
    "signal",
    "ethernet-physical",
    "mac-address",
    "ethernet-frame",
    "arp",
    "switch",
    "vlan",
    "subnet",
    "cidr",
    "gateway",
    "routing",
    "icmp",
    "nat",
    "tcp-handshake",
    "tcp-four-way-wave",
    "tcp-state",
    "tcp-retransmission",
    "tcp-flow-control",
    "tcp-congestion-control",
    "dns",
    "http",
    "https",
    "http-cache",
    "http2",
    "http3",
    "websocket",
    "tls",
    "certificate",
    "firewall",
    "cdn",
    "load-balancing",
    "health-check",
    "observability",
  ],
  os: [
    "system-call",
    "process",
    "process-state",
    "context-switch",
    "thread",
    "scheduler",
    "mutex",
    "semaphore",
    "deadlock",
    "virtual-memory",
    "paging",
    "file-system",
    "io-multiplexing",
    "epoll",
    "socket",
    "container",
  ],
  algorithm: [
    "array",
    "linked-list",
    "stack",
    "queue",
    "hash-table",
    "binary-tree",
    "heap",
    "graph",
    "dfs",
    "bfs",
    "binary-search",
    "merge-sort",
    "quick-sort",
    "backtracking",
    "dynamic-programming",
  ],
  mysql: [
    "select",
    "join",
    "buffer-pool",
    "mysql-index",
    "b-plus-tree",
    "transaction",
    "isolation-level",
    "mvcc",
    "read-view",
    "redo-log",
    "undo-log",
    "binlog",
    "two-phase-commit",
    "lock",
    "deadlock",
    "replication",
    "replication-lag",
    "gtid",
    "explain",
  ],
  redis: [
    "redis-data-types",
    "redis-string",
    "redis-hash",
    "redis-list",
    "redis-set",
    "redis-zset",
    "redis-persistence",
    "rdb",
    "aof",
    "expire-policy",
    "eviction-policy",
    "cache-penetration",
    "cache-breakdown",
    "cache-avalanche",
    "redis-lock",
    "redis-replication",
    "redis-sentinel",
    "redis-cluster",
    "hash-slot",
  ],
  rabbitmq: [
    "exchange",
    "binding",
    "routing-key",
    "queue",
    "publisher-confirm",
    "consumer-ack",
    "dead-letter-queue",
    "delay-queue",
    "retry",
    "idempotency",
    "order-consumption",
    "peak-shaving",
    "rate-limit",
  ],
  backend: [
    "authentication",
    "authorization",
    "jwt",
    "api-gateway",
    "rate-limit",
    "circuit-breaker",
    "fallback",
    "timeout",
    "distributed-lock",
    "distributed-transaction",
    "idempotent-api",
    "message-queue",
    "cache",
    "observability",
    "tracing",
  ],
  docker: [
    "containerization",
    "image",
    "image-layer",
    "container",
    "dockerfile",
    "build-cache",
    "multi-stage-build",
    "registry",
    "network",
    "bridge-network",
    "port-mapping",
    "volume",
    "compose",
    "logs",
    "resource-limit",
    "cpu-limit",
    "pids-limit",
    "deployment-practice",
    "rolling-update",
  ],
  kubernetes: [
    "cluster",
    "scheduler",
    "taint-toleration",
    "pod-affinity",
    "topology-spread",
    "preemption",
    "node",
    "pod",
    "container",
    "probe",
    "deployment",
    "rolling-update",
    "service",
    "ingress",
    "configmap",
    "secret",
    "volume",
    "hpa",
    "logs",
    "crashloopbackoff",
  ],
  agent: [
    "tool-calling",
    "function-calling",
    "rag",
    "embedding",
    "retrieval",
    "memory",
    "planner",
    "reflection",
    "workflow-orchestration",
    "multi-agent",
    "message-queue",
    "safety-boundary",
    "prompt-injection",
    "observability",
    "trace",
    "metrics",
    "streaming",
    "cost-control",
    "cache",
    "rate-limit",
  ],
};

export const visualPointIds = Object.fromEntries(
  Object.entries(rawVisualPointIds).map(([categoryId, ids]) => [
    categoryId,
    filterCoreKnowledgePointIds(categoryId as CategoryId, ids ?? []),
  ]),
) as Partial<Record<CategoryId, string[]>>;

export function getAreaKey(point: GraphKnowledgePoint) {
  return point.area ?? point.layer ?? "foundation";
}

export function isPointVisualizable(categoryId: CategoryId, point: GraphKnowledgePoint) {
  return visualPointIds[categoryId]?.includes(point.id) ?? false;
}
