import type { CategoryId } from "./types";
import type { GraphKnowledgePoint } from "./knowledge-points";

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

const tx = (zh: string, en: string): LocalizedText => ({ zh, en });

export function readLocalizedText(text: LocalizedText, locale: "zh" | "en") {
  return text[locale];
}

export function getSimulationKey(categoryId: CategoryId, pointId: string) {
  return `${categoryId}:${pointId}`;
}

const visualAreas: Record<CategoryId, string[]> = {
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

export const visualPointIds: Partial<Record<CategoryId, string[]>> = {
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
    "container",
    "dockerfile",
    "build-cache",
    "multi-stage-build",
    "registry",
    "network",
    "volume",
    "compose",
    "logs",
    "resource-limit",
    "deployment-practice",
    "rolling-update",
  ],
  kubernetes: [
    "cluster",
    "scheduler",
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

function getAreaKey(point: GraphKnowledgePoint) {
  return point.area ?? point.layer ?? "foundation";
}

export function isPointVisualizable(categoryId: CategoryId, point: GraphKnowledgePoint) {
  return visualPointIds[categoryId]?.includes(point.id) ?? false;
}

function actor(
  id: string,
  zh: string,
  en: string,
  detailZh: string,
  detailEn: string,
  kind: ActorKind,
): SimulationActor {
  return {
    id,
    label: tx(zh, en),
    detail: tx(detailZh, detailEn),
    kind,
  };
}

function step(
  titleZh: string,
  titleEn: string,
  actionZh: string,
  actionEn: string,
  from: string,
  to: string,
  labelZh: string,
  labelEn: string,
  descriptionZh: string,
  descriptionEn: string,
  insightZh: string,
  insightEn: string,
  states: Record<string, LocalizedText>,
  tone: SimulationTone = "brand",
): SimulationStep {
  return {
    title: tx(titleZh, titleEn),
    action: tx(actionZh, actionEn),
    from,
    to,
    label: tx(labelZh, labelEn),
    description: tx(descriptionZh, descriptionEn),
    insight: tx(insightZh, insightEn),
    states,
    tone,
  };
}

type Builder = (point: GraphKnowledgePoint) => VisualSimulation;

function makeSimulation(
  categoryId: CategoryId,
  point: GraphKnowledgePoint,
  pattern: LocalizedText,
  subtitle: LocalizedText,
  actors: SimulationActor[],
  initialStates: Record<string, LocalizedText>,
  steps: SimulationStep[],
  metrics: LocalizedText[],
): VisualSimulation {
  return {
    key: getSimulationKey(categoryId, point.id),
    categoryId,
    pointId: point.id,
    pattern,
    title: tx(`${point.zh} 可视化模拟`, `${point.en} Simulation`),
    subtitle,
    entryLabel: tx("进入模拟", "Open simulation"),
    actors,
    initialStates,
    steps,
    metrics,
  };
}

type ActorSpec = [
  id: string,
  zh: string,
  en: string,
  detailZh: string,
  detailEn: string,
  kind: ActorKind,
];

type StepSpec = [
  titleZh: string,
  titleEn: string,
  actionZh: string,
  actionEn: string,
  from: string,
  to: string,
  labelZh: string,
  labelEn: string,
  descriptionZh: string,
  descriptionEn: string,
  insightZh: string,
  insightEn: string,
  states: Record<string, LocalizedText>,
  tone?: SimulationTone,
];

type TextPair = [zh: string, en: string];

function flow(
  categoryId: CategoryId,
  point: GraphKnowledgePoint,
  pattern: TextPair,
  subtitle: TextPair,
  actorSpecs: ActorSpec[],
  initialStates: Record<string, LocalizedText>,
  stepSpecs: StepSpec[],
  metrics: TextPair[],
) {
  return makeSimulation(
    categoryId,
    point,
    tx(pattern[0], pattern[1]),
    tx(subtitle[0], subtitle[1]),
    actorSpecs.map((spec) => actor(...spec)),
    initialStates,
    stepSpecs.map((spec) => step(...spec)),
    metrics.map((metric) => tx(metric[0], metric[1])),
  );
}

function buildNetworkGeneric(point: GraphKnowledgePoint) {
  const actors = [
    actor("client", "客户端", "Client", "发起访问", "Starts the request", "client"),
    actor("edge", "本地网络", "Local Network", "解析、封装、转发", "Resolves, wraps, forwards", "network"),
    actor("transit", "中间路径", "Transit", "路由、代理、策略", "Routes, proxies, policies", "network"),
    actor("server", "目标服务", "Server", "接收并响应", "Receives and responds", "server"),
  ];

  return makeSimulation(
    "network",
    point,
    tx("网络路径", "Network path"),
    tx("把协议过程拆成请求、寻址、转发、确认四段。", "Split the protocol into request, addressing, forwarding, and confirmation."),
    actors,
    {
      client: tx("准备发送", "Ready"),
      edge: tx("等待请求", "Idle"),
      transit: tx("路径待定", "Route pending"),
      server: tx("监听中", "Listening"),
    },
    [
      step(
        "构造请求",
        "Build request",
        `发起 ${point.zh}`,
        `Start ${point.en}`,
        "client",
        "edge",
        point.zh,
        point.en,
        "客户端准备字段、端口、地址或缓存条件。",
        "The client prepares fields, ports, addresses, or cache conditions.",
        "第一步关注输入：目标、协议字段和本地缓存。",
        "Focus on inputs: target, protocol fields, and local cache.",
        { client: tx("已发起", "Sent"), edge: tx("处理中", "Processing") },
      ),
      step(
        "确定路径",
        "Choose path",
        "计算下一跳",
        "Choose next hop",
        "edge",
        "transit",
        "路由/策略",
        "Route / policy",
        "本地网络根据缓存、表项或策略选择下一跳。",
        "The local network chooses the next hop from cache, tables, or policy.",
        "路径选择决定后续延迟、可达性和故障边界。",
        "Path choice determines latency, reachability, and failure boundaries.",
        { edge: tx("已选择路径", "Path chosen"), transit: tx("转发中", "Forwarding") },
        "teal",
      ),
      step(
        "目标处理",
        "Target handling",
        "送达目标",
        "Deliver",
        "transit",
        "server",
        "到达服务",
        "Delivered",
        "目标服务接收请求并更新协议状态。",
        "The target receives the request and updates protocol state.",
        "这一步观察目标状态、队列、连接或证书校验结果。",
        "Watch target state, queues, connection state, or certificate checks.",
        { transit: tx("已转发", "Forwarded"), server: tx("已处理", "Handled") },
        "success",
      ),
      step(
        "返回结果",
        "Return result",
        "确认结果",
        "Confirm",
        "server",
        "client",
        "响应",
        "Response",
        "响应沿路径返回，客户端得到最终状态。",
        "The response travels back and the client reaches the final state.",
        "排查时把每一段的状态和抓包现象对应起来。",
        "For troubleshooting, map each segment to states and packet traces.",
        {
          client: tx("已完成", "Complete"),
          edge: tx("记录状态", "State recorded"),
          transit: tx("路径闭环", "Round trip complete"),
          server: tx("响应完成", "Responded"),
        },
        "success",
      ),
    ],
    [
      tx("关键字段", "Key fields"),
      tx("状态变化", "State changes"),
      tx("往返路径", "Round trip"),
    ],
  );
}

function buildCategoryGeneric(categoryId: CategoryId, point: GraphKnowledgePoint) {
  const titleZh = point.zh;
  const titleEn = point.en;
  const blueprints: Record<CategoryId, {
    pattern: LocalizedText;
    subtitle: LocalizedText;
    actors: SimulationActor[];
    states: Record<string, LocalizedText>;
    metrics: LocalizedText[];
    steps: SimulationStep[];
  }> = {
    network: {
      pattern: tx("网络路径", "Network path"),
      subtitle: tx("按请求、寻址、转发、确认观察协议过程。", "Observe request, addressing, forwarding, and confirmation."),
      actors: [],
      states: {},
      metrics: [],
      steps: [],
    },
    os: {
      pattern: tx("内核状态", "Kernel state"),
      subtitle: tx("把用户态请求、内核处理、资源变化和观测信号串起来。", "Connect user request, kernel handling, resource changes, and signals."),
      actors: [
        actor("app", "应用", "App", "发起系统动作", "Starts operation", "client"),
        actor("kernel", "内核", "Kernel", "管理资源", "Manages resources", "kernel"),
        actor("resource", "资源", "Resource", "CPU/内存/I/O", "CPU / memory / I/O", "cpu"),
        actor("monitor", "观测", "Monitor", "命令与指标", "Commands and metrics", "data"),
      ],
      states: {
        app: tx("用户态", "User mode"),
        kernel: tx("等待陷入", "Awaiting trap"),
        resource: tx("空闲", "Idle"),
        monitor: tx("采样中", "Sampling"),
      },
      metrics: [tx("状态队列", "State queues"), tx("资源占用", "Resource usage"), tx("系统调用", "Syscalls")],
      steps: [
        step("发起动作", "Start operation", `模拟 ${titleZh}`, `Simulate ${titleEn}`, "app", "kernel", titleZh, titleEn, "应用触发系统调用、调度或资源访问。", "The app triggers a syscall, scheduling event, or resource access.", "入口决定后续进入哪个内核子系统。", "The entry point determines the kernel subsystem.", { app: tx("等待结果", "Waiting"), kernel: tx("已接管", "Handling") }),
        step("更新内核结构", "Update kernel data", "更新状态", "Update state", "kernel", "resource", "状态变化", "State change", "内核修改队列、页表、锁或文件结构。", "The kernel updates queues, page tables, locks, or file structures.", "核心是看状态从哪里来、被谁修改、何时释放。", "Track where state comes from, who changes it, and when it releases.", { kernel: tx("更新完成", "Updated"), resource: tx("被占用", "Allocated") }, "teal"),
        step("产生影响", "Apply effect", "观察资源", "Inspect resource", "resource", "monitor", "指标变化", "Metric change", "资源变化体现为延迟、吞吐、阻塞或错误。", "Resource changes appear as latency, throughput, blocking, or errors.", "线上排查依赖命令输出和指标趋势。", "Production debugging relies on command output and metric trends.", { resource: tx("状态稳定", "Stable"), monitor: tx("记录信号", "Recorded") }, "success"),
      ],
    },
    algorithm: {
      pattern: tx("数据结构演算", "Data-structure trace"),
      subtitle: tx("用输入、指针/状态、核心不变量和输出理解算法。", "Use input, pointers/state, invariant, and output to understand the algorithm."),
      actors: [
        actor("input", "输入", "Input", "样例数据", "Sample data", "data"),
        actor("state", "状态", "State", "指针、栈、队列或表", "Pointer, stack, queue, or table", "cpu"),
        actor("rule", "规则", "Rule", "不变量与转移", "Invariant and transition", "tool"),
        actor("result", "结果", "Result", "最终答案", "Final answer", "server"),
      ],
      states: {
        input: tx("待扫描", "Pending"),
        state: tx("初始化", "Initialized"),
        rule: tx("待应用", "Ready"),
        result: tx("待输出", "Pending"),
      },
      metrics: [tx("时间复杂度", "Time complexity"), tx("空间复杂度", "Space complexity"), tx("不变量", "Invariant")],
      steps: [
        step("读取输入", "Read input", `载入 ${titleZh}`, `Load ${titleEn}`, "input", "state", "样例", "Sample", "把问题约束转成数据结构状态。", "Turn constraints into data-structure state.", "先确定状态含义，演算才稳定。", "Define state first for a stable trace.", { input: tx("已读取", "Read"), state: tx("已初始化", "Initialized") }),
        step("执行规则", "Apply rule", "推进一步", "Advance", "state", "rule", "转移", "Transition", "按核心规则移动指针、出入栈、扩展节点或更新 DP。", "Move pointers, push/pop, expand nodes, or update DP by rule.", "每一步都要维护同一个不变量。", "Every step maintains the invariant.", { state: tx("已推进", "Advanced"), rule: tx("已应用", "Applied") }, "teal"),
        step("得到输出", "Produce result", "确认结果", "Confirm result", "rule", "result", "答案", "Answer", "状态收敛后输出答案，并复盘复杂度。", "After state converges, output the answer and review complexity.", "边界样例用于验证不变量覆盖完整。", "Boundary cases verify invariant coverage.", { result: tx("已得到", "Produced"), rule: tx("完成", "Complete") }, "success"),
      ],
    },
    mysql: {
      pattern: tx("SQL 执行链路", "SQL execution path"),
      subtitle: tx("观察 SQL 从解析、优化、执行到日志/事务的一条链路。", "Observe SQL from parsing and optimization to execution, logging, and transactions."),
      actors: [
        actor("client", "客户端", "Client", "提交 SQL", "Submits SQL", "client"),
        actor("optimizer", "优化器", "Optimizer", "选择计划", "Chooses plan", "cpu"),
        actor("engine", "InnoDB", "InnoDB", "访问索引与行", "Accesses indexes and rows", "database"),
        actor("log", "日志/事务", "Logs / TX", "保证恢复和一致性", "Recovery and consistency", "storage"),
      ],
      states: {
        client: tx("已连接", "Connected"),
        optimizer: tx("等待 SQL", "Waiting"),
        engine: tx("页在 Buffer Pool", "Pages in buffer pool"),
        log: tx("等待写入", "Waiting"),
      },
      metrics: [tx("执行计划", "Execution plan"), tx("锁与事务", "Locks and transactions"), tx("日志顺序", "Log order")],
      steps: [
        step("提交 SQL", "Submit SQL", `提交 ${titleZh}`, `Submit ${titleEn}`, "client", "optimizer", "SQL", "SQL", "连接层把 SQL 交给解析和优化流程。", "The connection layer hands SQL to parsing and optimization.", "执行前先看语句目标和可用索引。", "Before execution, inspect the target and usable indexes.", { client: tx("等待返回", "Waiting"), optimizer: tx("分析中", "Analyzing") }),
        step("选择计划", "Choose plan", "生成执行计划", "Build plan", "optimizer", "engine", "计划", "Plan", "优化器选择访问路径、索引和 JOIN 顺序。", "The optimizer chooses access path, indexes, and join order.", "计划质量直接影响扫描行数和锁范围。", "Plan quality drives scanned rows and lock range.", { optimizer: tx("计划完成", "Plan ready"), engine: tx("开始执行", "Executing") }, "teal"),
        step("执行与记录", "Execute and log", "推进执行", "Execute", "engine", "log", "写入/读取", "Read / write", "存储引擎访问页、行、锁和日志。", "The engine touches pages, rows, locks, and logs.", "事务场景要同时关注数据页和日志顺序。", "Transaction scenarios require both data pages and log order.", { engine: tx("已访问数据", "Data touched"), log: tx("已记录", "Logged") }, "success"),
      ],
    },
    redis: {
      pattern: tx("内存命令链路", "In-memory command path"),
      subtitle: tx("观察命令、键空间、内存结构、持久化或高可用状态。", "Observe command, keyspace, in-memory structure, persistence, or HA state."),
      actors: [
        actor("app", "应用", "App", "发起命令", "Sends command", "client"),
        actor("redis", "Redis", "Redis", "单线程执行命令", "Executes commands", "cache"),
        actor("memory", "内存结构", "Memory", "Key 与数据结构", "Keys and structures", "data"),
        actor("ha", "持久化/副本", "Persistence / Replica", "恢复与高可用", "Recovery and HA", "storage"),
      ],
      states: {
        app: tx("等待命令", "Ready"),
        redis: tx("事件循环空闲", "Event loop idle"),
        memory: tx("键空间稳定", "Keyspace stable"),
        ha: tx("同步中", "Syncing"),
      },
      metrics: [tx("命中率", "Hit ratio"), tx("慢查询", "Slow queries"), tx("复制/持久化", "Replication / persistence")],
      steps: [
        step("发送命令", "Send command", `执行 ${titleZh}`, `Run ${titleEn}`, "app", "redis", "命令", "Command", "应用把命令发送给 Redis 事件循环。", "The app sends a command to the Redis event loop.", "先看 key、TTL、数据结构和命令复杂度。", "Check key, TTL, data structure, and command complexity.", { app: tx("等待响应", "Waiting"), redis: tx("执行中", "Executing") }),
        step("访问键空间", "Access keyspace", "读取/更新结构", "Read / update", "redis", "memory", "Key", "Key", "Redis 修改内存结构、过期信息或缓存状态。", "Redis changes memory structure, expiration info, or cache state.", "大 key、热 key 和过期集中会放大风险。", "Large keys, hot keys, and clustered expiration amplify risk.", { redis: tx("完成命令", "Command complete"), memory: tx("已变化", "Changed") }, "teal"),
        step("同步结果", "Sync result", "记录副作用", "Record side effect", "memory", "ha", "AOF/RDB/复制", "AOF / RDB / replication", "持久化或复制链路承接内存变化。", "Persistence or replication receives the memory change.", "恢复能力来自写入策略、复制状态和监控信号。", "Recovery relies on write policy, replication state, and monitoring.", { memory: tx("状态已确认", "Confirmed"), ha: tx("已同步", "Synced") }, "success"),
      ],
    },
    rabbitmq: {
      pattern: tx("消息投递链路", "Message delivery path"),
      subtitle: tx("观察生产者、交换机、队列、消费者和确认语义。", "Observe producer, exchange, queue, consumer, and acknowledgement semantics."),
      actors: [
        actor("producer", "生产者", "Producer", "发布消息", "Publishes message", "client"),
        actor("exchange", "交换机", "Exchange", "匹配路由", "Matches route", "broker"),
        actor("queue", "队列", "Queue", "缓存待消费消息", "Buffers messages", "queue"),
        actor("consumer", "消费者", "Consumer", "处理并确认", "Handles and ACKs", "server"),
      ],
      states: {
        producer: tx("待发送", "Ready"),
        exchange: tx("等待路由", "Waiting"),
        queue: tx("队列稳定", "Stable"),
        consumer: tx("等待投递", "Waiting"),
      },
      metrics: [tx("确认模式", "ACK mode"), tx("堆积量", "Backlog"), tx("重试与死信", "Retry and DLQ")],
      steps: [
        step("发布消息", "Publish", `发布 ${titleZh}`, `Publish ${titleEn}`, "producer", "exchange", "Message", "Message", "生产者发送消息、路由键和属性。", "The producer sends message, routing key, and properties.", "可靠投递从生产者确认开始。", "Reliable delivery starts with producer confirm.", { producer: tx("已发布", "Published"), exchange: tx("已接收", "Received") }),
        step("匹配路由", "Match route", "执行路由", "Route", "exchange", "queue", "Binding", "Binding", "交换机根据类型、绑定和路由键投递。", "The exchange routes by type, binding, and routing key.", "路由关系决定消息进入哪些队列。", "Bindings decide target queues.", { exchange: tx("路由完成", "Routed"), queue: tx("已入队", "Enqueued") }, "teal"),
        step("消费确认", "Consume and ACK", "完成消费", "Consume", "queue", "consumer", "ACK", "ACK", "消费者处理消息并返回确认。", "The consumer handles the message and sends acknowledgement.", "消费语义由 ACK、重试、死信和幂等共同保证。", "ACK, retry, DLQ, and idempotency define consumption semantics.", { queue: tx("已出队", "Dequeued"), consumer: tx("已确认", "Acknowledged") }, "success"),
      ],
    },
    backend: {
      pattern: tx("服务治理链路", "Service-governance path"),
      subtitle: tx("观察请求在网关、服务、依赖和观测系统中的状态。", "Observe request state across gateway, service, dependency, and observability."),
      actors: [
        actor("client", "调用方", "Caller", "发起请求", "Sends request", "client"),
        actor("gateway", "网关", "Gateway", "认证、限流、路由", "Auth, limit, route", "network"),
        actor("service", "业务服务", "Service", "处理业务", "Handles business", "server"),
        actor("dependency", "依赖", "Dependency", "数据库/缓存/消息", "DB / cache / messaging", "database"),
      ],
      states: {
        client: tx("准备请求", "Ready"),
        gateway: tx("策略待评估", "Policy pending"),
        service: tx("等待处理", "Waiting"),
        dependency: tx("健康", "Healthy"),
      },
      metrics: [tx("延迟", "Latency"), tx("错误率", "Error rate"), tx("降级/重试", "Fallback / retry")],
      steps: [
        step("进入网关", "Enter gateway", `触发 ${titleZh}`, `Trigger ${titleEn}`, "client", "gateway", "Request", "Request", "请求先经过认证、路由、限流或观测入口。", "The request enters auth, routing, limiting, or observability entry points.", "治理能力要放在清晰的责任边界内。", "Governance works best at clear responsibility boundaries.", { client: tx("等待响应", "Waiting"), gateway: tx("策略执行", "Policy running") }),
        step("执行业务", "Run service", "调用业务", "Call service", "gateway", "service", "业务处理", "Business logic", "业务服务执行业务逻辑并处理上下文。", "The service runs business logic and context handling.", "业务层要保留核心规则和可观测上下文。", "The service keeps core rules and observability context.", { gateway: tx("已转发", "Forwarded"), service: tx("处理中", "Processing") }, "teal"),
        step("访问依赖", "Call dependency", "访问依赖", "Call dependency", "service", "dependency", "DB/Cache/MQ", "DB / cache / MQ", "服务访问数据库、缓存、队列或外部系统。", "The service calls database, cache, queue, or external systems.", "可靠性设计要覆盖超时、重试、幂等和降级。", "Reliability covers timeout, retry, idempotency, and fallback.", { service: tx("等待依赖", "Awaiting dependency"), dependency: tx("已返回", "Returned") }, "success"),
      ],
    },
    docker: {
      pattern: tx("容器交付链路", "Container delivery path"),
      subtitle: tx("观察源码、镜像、容器和运行环境的状态变化。", "Observe state changes from source to image, container, and runtime."),
      actors: [
        actor("source", "源码/配置", "Source / config", "构建输入", "Build input", "data"),
        actor("image", "镜像", "Image", "只读层", "Read-only layers", "container"),
        actor("container", "容器", "Container", "运行实例", "Running instance", "container"),
        actor("runtime", "运行环境", "Runtime", "网络、卷、资源", "Network, volume, resources", "cluster"),
      ],
      states: {
        source: tx("待构建", "Ready"),
        image: tx("待生成", "Pending"),
        container: tx("待启动", "Pending"),
        runtime: tx("资源可用", "Available"),
      },
      metrics: [tx("镜像层", "Image layers"), tx("启动状态", "Startup state"), tx("网络/卷/资源", "Network / volume / resources")],
      steps: [
        step("构建输入", "Prepare build input", `准备 ${titleZh}`, `Prepare ${titleEn}`, "source", "image", "Build", "Build", "Dockerfile、上下文和配置形成镜像输入。", "Dockerfile, context, and config become image input.", "构建质量由层顺序、缓存和依赖边界决定。", "Build quality depends on layer order, cache, and dependency boundaries.", { source: tx("已提交", "Submitted"), image: tx("构建中", "Building") }),
        step("创建容器", "Create container", "启动实例", "Start instance", "image", "container", "Run", "Run", "镜像层加上可写层形成容器实例。", "Image layers plus a writable layer form the container instance.", "容器状态体现进程、文件系统和命名空间。", "Container state reflects process, filesystem, and namespaces.", { image: tx("可运行", "Runnable"), container: tx("运行中", "Running") }, "teal"),
        step("接入运行环境", "Attach runtime", "挂载资源", "Attach resources", "container", "runtime", "Network/Volume", "Network / volume", "容器接入网络、端口、数据卷、日志和资源限制。", "The container attaches network, ports, volumes, logs, and limits.", "排障从 inspect、logs、stats 和事件开始。", "Debug with inspect, logs, stats, and events.", { container: tx("已接入", "Attached"), runtime: tx("已观测", "Observed") }, "success"),
      ],
    },
    kubernetes: {
      pattern: tx("声明式调谐链路", "Declarative reconciliation"),
      subtitle: tx("观察资源提交、控制器调谐、调度运行和状态反馈。", "Observe resource submission, controller reconciliation, scheduling, and status feedback."),
      actors: [
        actor("user", "用户/YAML", "User / YAML", "声明期望状态", "Declares desired state", "data"),
        actor("apiserver", "API Server", "API Server", "保存资源", "Stores resource", "server"),
        actor("controller", "控制器/调度器", "Controller / Scheduler", "调谐与调度", "Reconciles and schedules", "cluster"),
        actor("node", "Node/Pod", "Node / Pod", "运行工作负载", "Runs workload", "container"),
      ],
      states: {
        user: tx("待提交", "Ready"),
        apiserver: tx("等待资源", "Waiting"),
        controller: tx("持续监听", "Watching"),
        node: tx("等待调度", "Pending"),
      },
      metrics: [tx("期望状态", "Desired state"), tx("实际状态", "Actual state"), tx("Events/Conditions", "Events / conditions")],
      steps: [
        step("提交资源", "Submit resource", `应用 ${titleZh}`, `Apply ${titleEn}`, "user", "apiserver", "YAML", "YAML", "用户提交资源定义，API Server 保存期望状态。", "The user submits resource definition and API Server stores desired state.", "Kubernetes 的核心入口是声明期望状态。", "Kubernetes starts from desired state.", { user: tx("已提交", "Submitted"), apiserver: tx("已保存", "Stored") }),
        step("控制器调谐", "Reconcile", "触发调谐", "Reconcile", "apiserver", "controller", "Watch", "Watch", "控制器监听变化并计算实际操作。", "Controllers watch changes and compute actions.", "调谐循环把差异变成创建、更新或删除动作。", "The reconciliation loop turns drift into actions.", { apiserver: tx("已通知", "Notified"), controller: tx("调谐中", "Reconciling") }, "teal"),
        step("运行与反馈", "Run and report", "更新状态", "Update status", "controller", "node", "Status", "Status", "调度器、kubelet 和容器运行时让资源进入目标状态。", "Scheduler, kubelet, and runtime move resources into target state.", "describe、events、logs 是定位异常状态的主线。", "describe, events, and logs are the main debug path.", { controller: tx("已下发", "Dispatched"), node: tx("运行/反馈", "Running / reporting") }, "success"),
      ],
    },
    agent: {
      pattern: tx("Agent 执行轨迹", "Agent execution trace"),
      subtitle: tx("观察目标理解、上下文、模型、工具和评估反馈。", "Observe goal understanding, context, model, tools, and evaluation feedback."),
      actors: [
        actor("user", "用户", "User", "提出目标", "Provides goal", "client"),
        actor("agent", "Agent", "Agent", "规划与编排", "Plans and orchestrates", "agent"),
        actor("model", "模型/检索", "Model / retrieval", "生成与召回", "Generates and retrieves", "model"),
        actor("tool", "工具/系统", "Tool / system", "执行外部动作", "Runs external actions", "tool"),
      ],
      states: {
        user: tx("提出目标", "Goal provided"),
        agent: tx("构造上下文", "Building context"),
        model: tx("待调用", "Ready"),
        tool: tx("权限待校验", "Permission pending"),
      },
      metrics: [tx("轨迹", "Trace"), tx("成本/延迟", "Cost / latency"), tx("安全边界", "Safety boundary")],
      steps: [
        step("理解目标", "Understand goal", `启动 ${titleZh}`, `Start ${titleEn}`, "user", "agent", "Goal", "Goal", "Agent 读取目标、上下文和约束。", "The agent reads goal, context, and constraints.", "好的轨迹从目标、约束和可用能力开始。", "A good trace starts with goal, constraints, and capabilities.", { user: tx("等待结果", "Waiting"), agent: tx("规划中", "Planning") }),
        step("调用模型", "Call model", "生成计划", "Generate plan", "agent", "model", "Reasoning", "Reasoning", "模型基于上下文生成计划、检索或结构化参数。", "The model generates plan, retrieval, or structured arguments from context.", "中间结果需要可检查、可追踪、可回放。", "Intermediate results need inspection, tracing, and replay.", { agent: tx("等待模型", "Awaiting model"), model: tx("已生成", "Generated") }, "teal"),
        step("执行与反馈", "Execute and feedback", "执行工具", "Execute tool", "model", "tool", "Action", "Action", "工具执行动作，Agent 观察结果并修正下一步。", "Tools execute actions; the agent observes results and adjusts.", "稳定性来自权限、重试、评估和安全拦截。", "Stability comes from permissions, retry, evaluation, and safety checks.", { model: tx("输出参数", "Arguments ready"), tool: tx("已返回", "Returned") }, "success"),
      ],
    },
  };

  if (categoryId === "network") {
    return buildNetworkGeneric(point);
  }

  const blueprint = blueprints[categoryId];

  return makeSimulation(
    categoryId,
    point,
    blueprint.pattern,
    blueprint.subtitle,
    blueprint.actors,
    blueprint.states,
    blueprint.steps,
    blueprint.metrics,
  );
}

function tcpHandshake(point: GraphKnowledgePoint) {
  const actors = [
    actor("client", "客户端", "Client", "主动打开连接", "Actively opens", "client"),
    actor("wire", "网络链路", "Network Link", "承载 TCP 报文", "Carries TCP segments", "network"),
    actor("server", "服务器", "Server", "监听端口", "Listens on port", "server"),
  ];

  return makeSimulation(
    "network",
    point,
    tx("报文时序", "Packet sequence"),
    tx("手动发送 SYN、SYN-ACK、ACK，观察双方状态进入 ESTABLISHED。", "Send SYN, SYN-ACK, and ACK manually, then watch both sides reach ESTABLISHED."),
    actors,
    {
      client: tx("CLOSED", "CLOSED"),
      wire: tx("空闲", "Idle"),
      server: tx("LISTEN", "LISTEN"),
    },
    [
      step("第一次握手", "First handshake", "发送 SYN", "Send SYN", "client", "server", "SYN=1 seq=x", "SYN=1 seq=x", "客户端声明初始序列号并请求建立连接。", "The client declares its initial sequence number and requests a connection.", "客户端进入 SYN-SENT，服务器进入 SYN-RCVD。", "The client enters SYN-SENT and the server enters SYN-RCVD.", { client: tx("SYN-SENT", "SYN-SENT"), wire: tx("SYN 传输中", "SYN in flight"), server: tx("SYN-RCVD", "SYN-RCVD") }),
      step("第二次握手", "Second handshake", "发送 SYN-ACK", "Send SYN-ACK", "server", "client", "SYN=1 ACK=1 seq=y ack=x+1", "SYN=1 ACK=1 seq=y ack=x+1", "服务器确认客户端序列号，同时声明自己的序列号。", "The server acknowledges the client sequence and declares its own.", "客户端保持 SYN-SENT，等待最终 ACK 发送。", "The client stays in SYN-SENT before sending the final ACK.", { client: tx("SYN-SENT", "SYN-SENT"), wire: tx("SYN-ACK 传输中", "SYN-ACK in flight"), server: tx("SYN-RCVD", "SYN-RCVD") }, "teal"),
      step("第三次握手", "Third handshake", "发送 ACK", "Send ACK", "client", "server", "ACK=1 seq=x+1 ack=y+1", "ACK=1 seq=x+1 ack=y+1", "客户端确认服务器序列号，连接建立。", "The client acknowledges the server sequence and the connection opens.", "双方进入 ESTABLISHED，应用数据可以开始传输。", "Both sides reach ESTABLISHED and application data can flow.", { client: tx("ESTABLISHED", "ESTABLISHED"), wire: tx("连接可用", "Connection ready"), server: tx("ESTABLISHED", "ESTABLISHED") }, "success"),
    ],
    [tx("seq/ack", "seq / ack"), tx("客户端状态", "Client state"), tx("服务器状态", "Server state")],
  );
}

function tcpWave(point: GraphKnowledgePoint) {
  const actors = [
    actor("client", "主动关闭方", "Active closer", "发送 FIN", "Sends FIN", "client"),
    actor("wire", "网络链路", "Network Link", "承载 FIN/ACK", "Carries FIN / ACK", "network"),
    actor("server", "被动关闭方", "Passive closer", "完成剩余发送", "Finishes remaining send", "server"),
  ];

  return makeSimulation(
    "network",
    point,
    tx("状态释放", "Connection teardown"),
    tx("模拟 FIN、ACK、FIN、ACK，理解半关闭、CLOSE-WAIT 和 TIME-WAIT。", "Simulate FIN, ACK, FIN, ACK to understand half-close, CLOSE-WAIT, and TIME-WAIT."),
    actors,
    {
      client: tx("ESTABLISHED", "ESTABLISHED"),
      wire: tx("连接可用", "Connection open"),
      server: tx("ESTABLISHED", "ESTABLISHED"),
    },
    [
      step("主动发送 FIN", "Send FIN", "发送 FIN", "Send FIN", "client", "server", "FIN=1 seq=u", "FIN=1 seq=u", "主动关闭方表示本方向数据发送完毕。", "The active closer says its sending direction is finished.", "连接进入半关闭，另一个方向仍可发送数据。", "The connection enters half-close; the other direction can still send.", { client: tx("FIN-WAIT-1", "FIN-WAIT-1"), server: tx("ESTABLISHED", "ESTABLISHED"), wire: tx("FIN 传输中", "FIN in flight") }),
      step("返回 ACK", "Return ACK", "发送 ACK", "Send ACK", "server", "client", "ACK=1 ack=u+1", "ACK=1 ack=u+1", "被动关闭方确认 FIN，进入 CLOSE-WAIT。", "The passive closer acknowledges FIN and enters CLOSE-WAIT.", "CLOSE-WAIT 堆积通常来自应用层关闭动作滞后。", "CLOSE-WAIT buildup often points to delayed application close.", { client: tx("FIN-WAIT-2", "FIN-WAIT-2"), server: tx("CLOSE-WAIT", "CLOSE-WAIT"), wire: tx("ACK 已返回", "ACK returned") }, "teal"),
      step("被动方发送 FIN", "Passive FIN", "发送 FIN", "Send FIN", "server", "client", "FIN=1 seq=v", "FIN=1 seq=v", "被动关闭方完成剩余数据后也发送 FIN。", "The passive closer sends FIN after remaining data is finished.", "双向数据流需要分别释放。", "Each data direction closes independently.", { client: tx("FIN-WAIT-2", "FIN-WAIT-2"), server: tx("LAST-ACK", "LAST-ACK"), wire: tx("第二个 FIN", "Second FIN") }, "warning"),
      step("最终 ACK", "Final ACK", "发送最终 ACK", "Send final ACK", "client", "server", "ACK=1 ack=v+1", "ACK=1 ack=v+1", "主动关闭方确认 FIN，进入 TIME-WAIT。", "The active closer acknowledges FIN and enters TIME-WAIT.", "TIME-WAIT 保护迟到报文并保证最终 ACK 可重传。", "TIME-WAIT handles delayed packets and final ACK retransmission.", { client: tx("TIME-WAIT", "TIME-WAIT"), server: tx("CLOSED", "CLOSED"), wire: tx("释放完成", "Closed") }, "success"),
    ],
    [tx("FIN/ACK 顺序", "FIN / ACK order"), tx("半关闭", "Half-close"), tx("TIME-WAIT", "TIME-WAIT")],
  );
}

function tcpState(point: GraphKnowledgePoint) {
  const actors = [
    actor("client", "主动端", "Active endpoint", "主动打开与主动关闭", "Active open and close", "client"),
    actor("state", "状态机", "State machine", "根据事件迁移", "Transitions by event", "network"),
    actor("server", "被动端", "Passive endpoint", "监听与被动关闭", "Listening and passive close", "server"),
  ];

  return makeSimulation(
    "network",
    point,
    tx("有限状态机", "Finite state machine"),
    tx("按 OPEN、SYN、ACK、FIN、CLOSE 和 2MSL 点亮 TCP 生命周期状态。", "Light up the TCP lifecycle by OPEN, SYN, ACK, FIN, CLOSE, and 2MSL."),
    actors,
    {
      client: tx("CLOSED", "CLOSED"),
      state: tx("等待事件", "Awaiting event"),
      server: tx("CLOSED", "CLOSED"),
    },
    [
      step("被动打开", "Passive open", "listen()", "listen()", "server", "state", "CLOSED -> LISTEN", "CLOSED -> LISTEN", "服务端创建 TCB，进入 LISTEN 等待连接请求。", "The server creates a TCB and enters LISTEN for connection requests.", "LISTEN 是服务端接入新连接的入口状态。", "LISTEN is the server-side entry state for accepting new connections.", { server: tx("LISTEN", "LISTEN"), state: tx("监听路径激活", "Listen path active") }),
      step("主动打开", "Active open", "connect() / SYN", "connect() / SYN", "client", "server", "SYN-SENT / SYN-RECEIVED", "SYN-SENT / SYN-RECEIVED", "客户端发送 SYN 进入 SYN-SENT，服务端收到后返回 SYN-ACK 并进入 SYN-RECEIVED。", "The client sends SYN and enters SYN-SENT; the server returns SYN-ACK and enters SYN-RECEIVED.", "建连路径由 SYN、SYN-ACK、ACK 推动。", "Connection setup is driven by SYN, SYN-ACK, and ACK.", { client: tx("SYN-SENT", "SYN-SENT"), state: tx("握手进行中", "Handshake in progress"), server: tx("SYN-RECEIVED", "SYN-RECEIVED") }, "teal"),
      step("进入传输", "Enter transfer", "ACK", "ACK", "client", "server", "ACK -> ESTABLISHED", "ACK -> ESTABLISHED", "最终 ACK 到达后，双方进入 ESTABLISHED，应用数据开始传输。", "After the final ACK arrives, both sides enter ESTABLISHED and application data can flow.", "ESTABLISHED 是数据传输阶段的稳定状态。", "ESTABLISHED is the steady state for data transfer.", { client: tx("ESTABLISHED", "ESTABLISHED"), state: tx("数据传输", "Data transfer"), server: tx("ESTABLISHED", "ESTABLISHED") }, "success"),
      step("主动关闭", "Active close", "close() / FIN", "close() / FIN", "client", "server", "FIN-WAIT / CLOSE-WAIT", "FIN-WAIT / CLOSE-WAIT", "主动端发送 FIN 后进入 FIN-WAIT-1，收到 ACK 后进入 FIN-WAIT-2；被动端确认 FIN 后进入 CLOSE-WAIT。", "The active side enters FIN-WAIT-1 after sending FIN and FIN-WAIT-2 after ACK; the passive side enters CLOSE-WAIT after acknowledging FIN.", "CLOSE-WAIT 表示本地应用需要完成关闭动作。", "CLOSE-WAIT means the local application needs to complete close.", { client: tx("FIN-WAIT-2", "FIN-WAIT-2"), state: tx("半关闭", "Half-close"), server: tx("CLOSE-WAIT", "CLOSE-WAIT") }, "warning"),
      step("被动关闭", "Passive close", "close() / FIN", "close() / FIN", "server", "client", "LAST-ACK / TIME-WAIT", "LAST-ACK / TIME-WAIT", "被动端应用关闭后发送 FIN 进入 LAST-ACK；主动端确认该 FIN 后进入 TIME-WAIT。", "After the passive application closes, it sends FIN and enters LAST-ACK; the active side acknowledges that FIN and enters TIME-WAIT.", "同时关闭会经过 CLOSING，再进入 TIME-WAIT。", "Simultaneous close goes through CLOSING before TIME-WAIT.", { client: tx("TIME-WAIT", "TIME-WAIT"), state: tx("等待 2MSL", "Waiting 2MSL"), server: tx("LAST-ACK", "LAST-ACK") }, "teal"),
      step("超时回收", "Timeout cleanup", "2MSL timeout", "2MSL timeout", "state", "client", "TIME-WAIT -> CLOSED", "TIME-WAIT -> CLOSED", "TIME-WAIT 计时结束后，主动端回到 CLOSED，连接状态释放完成。", "After TIME-WAIT expires, the active endpoint returns to CLOSED and the connection state is released.", "TIME-WAIT 给最终 ACK 重传和迟到报文隔离留出时间窗口。", "TIME-WAIT provides a window for final ACK retransmission and delayed packet isolation.", { client: tx("CLOSED", "CLOSED"), state: tx("连接释放", "Released"), server: tx("CLOSED", "CLOSED") }, "success"),
    ],
    [tx("11 个状态", "11 states"), tx("事件驱动", "Event-driven"), tx("堆积排查", "State buildup")],
  );
}

function arp(point: GraphKnowledgePoint) {
  const actors = [
    actor("host", "主机 A", "Host A", "192.168.1.10 / AA:AA", "192.168.1.10 / AA:AA", "client"),
    actor("cache", "ARP 缓存", "ARP cache", "下一跳 IP 到 MAC 映射", "Next-hop IP to MAC mapping", "data"),
    actor("switch", "交换机/广播域", "Switch / broadcast domain", "VLAN 10 内泛洪广播", "Floods broadcast inside VLAN 10", "network"),
    actor("target", "目标或网关", "Target or gateway", "拥有被查询 IPv4 地址", "Owns the queried IPv4 address", "server"),
  ];

  return makeSimulation(
    "network",
    point,
    tx("下一跳解析", "Next-hop resolution"),
    tx("按下一跳选择、缓存缺失、广播请求、单播应答和以太网封装观察 ARP。", "Observe ARP through next-hop choice, cache miss, broadcast request, unicast reply, and Ethernet framing."),
    actors,
    {
      host: tx("准备发送 IP 包", "Preparing IP packet"),
      cache: tx("无下一跳表项", "No next-hop entry"),
      switch: tx("广播域空闲", "Broadcast domain idle"),
      target: tx("等待查询", "Awaiting query"),
    },
    [
      step("判断下一跳", "Choose next hop", "计算同网段/网关", "Compute local or gateway", "host", "cache", "dst IP & mask -> next-hop IP", "dst IP & mask -> next-hop IP", "主机先用目标 IP 与子网掩码决定查询目标主机还是默认网关。", "The host first uses destination IP and mask to choose the target host or default gateway.", "访问远端网络时，以太网下一跳是网关，IP 包目的地址保持远端主机。", "For remote networks, the Ethernet next hop is the gateway while the IP destination remains the remote host.", { host: tx("下一跳 IP 已选", "Next-hop IP chosen"), cache: tx("准备查表", "Ready to look up") }),
      step("缓存未命中", "Cache miss", "查 ARP 缓存", "Check ARP cache", "cache", "host", "ARP table lookup", "ARP table lookup", "主机查询本地 ARP 缓存，缺少下一跳 IP 到 MAC 的映射时进入解析流程。", "The host checks the local ARP cache and starts resolution when the next-hop IP to MAC mapping is missing.", "ARP 缓存命中会直接进入以太网封装；缺失才触发广播请求。", "A cache hit goes straight to Ethernet framing; a miss triggers a broadcast request.", { cache: tx("表项缺失", "Entry missing"), host: tx("准备广播请求", "Preparing broadcast request") }, "warning"),
      step("广播请求", "Broadcast request", "发送 ARP Request", "Send ARP Request", "host", "switch", "dst MAC FF:FF:FF:FF:FF:FF", "dst MAC FF:FF:FF:FF:FF:FF", "请求方把 ARP Request 放进广播以太网帧，同一广播域内设备都能收到。", "The requester puts the ARP Request into a broadcast Ethernet frame so devices in the same broadcast domain can receive it.", "Request 中 sender hardware/protocol address 标识请求方，target protocol address 标识被查询 IP。", "The request identifies the sender hardware/protocol address and the queried target protocol address.", { host: tx("等待 Reply", "Waiting for reply"), switch: tx("VLAN 10 广播", "Broadcasting in VLAN 10") }, "teal"),
      step("单播应答", "Unicast reply", "返回 ARP Reply", "Return ARP Reply", "target", "host", "target IP is at target MAC", "target IP is at target MAC", "拥有目标 IP 的设备返回 ARP Reply，把自己的 MAC 地址交给请求方。", "The device that owns the target IP returns an ARP Reply with its MAC address.", "Reply 通常单播给请求方，抓包时看 opcode、sender IP/MAC 和 target IP/MAC。", "The reply usually unicasts to the requester; packet capture focuses on opcode, sender IP/MAC, and target IP/MAC.", { target: tx("已返回 MAC", "MAC returned"), host: tx("收到下一跳 MAC", "Next-hop MAC received") }, "success"),
      step("缓存并发帧", "Cache and frame", "更新缓存并发送数据帧", "Update cache and send data frame", "host", "target", "ARP cache + Ethernet frame", "ARP cache + Ethernet frame", "主机写入 ARP 缓存，然后把真实 IP 包封装进目的 MAC 为下一跳的以太网帧。", "The host writes the ARP cache, then wraps the real IP packet in an Ethernet frame addressed to the next-hop MAC.", "重复 IP、错误静态 ARP 或投毒会让同一个 IP 映射到异常 MAC。", "Duplicate IPs, wrong static ARP, or poisoning map one IP to an unexpected MAC.", { host: tx("数据帧已发出", "Data frame sent"), cache: tx("表项已更新", "Entry updated"), switch: tx("按 MAC 转发", "Forwarding by MAC"), target: tx("收到数据帧", "Data frame received") }, "success"),
    ],
    [tx("下一跳 IP", "Next-hop IP"), tx("广播 Request", "Broadcast request"), tx("单播 Reply", "Unicast reply"), tx("ARP 缓存", "ARP cache"), tx("异常 MAC", "Unexpected MAC")],
  );
}

function macAddress(point: GraphKnowledgePoint) {
  return flow(
    "network",
    point,
    ["MAC 投递与 Flood/Learn", "MAC delivery and flood-and-learn"],
    [
      "模拟主机用 ARP 找到下一跳 MAC，交换机学习源 MAC，再按目的 MAC 查表转发或泛洪。",
      "Simulate a host resolving next-hop MAC with ARP, while the switch learns source MAC and forwards or floods by destination MAC.",
    ],
    [
      ["host", "发送主机", "Sender host", "持有源 IP/MAC 与目标 IP", "Has source IP/MAC and destination IP", "client"],
      ["arp", "ARP/下一跳", "ARP / next hop", "决定目标主机或网关 MAC", "Chooses target host or gateway MAC", "data"],
      ["switch", "交换机 MAC 表", "Switch MAC table", "学习源 MAC，查询目的 MAC", "Learns source MAC and looks up destination MAC", "network"],
      ["target", "目标/网关", "Target / gateway", "接收帧并回包", "Receives frame and replies", "server"],
    ],
    {
      host: tx("知道目标 IP", "Destination IP known"),
      arp: tx("缓存待查", "Cache lookup pending"),
      switch: tx("MAC 表待学习", "MAC table empty"),
      target: tx("等待帧", "Awaiting frame"),
    },
    [
      [
        "确定下一跳",
        "Choose next hop",
        "判断同网段/网关",
        "Check subnet / gateway",
        "host",
        "arp",
        "next-hop IP",
        "next-hop IP",
        "主机用 IP 与掩码判断目标在本地网段还是交给默认网关。",
        "The host uses IP and mask to decide local target or default gateway.",
        "跨网段访问时，二层目的 MAC 指向网关，三层目的 IP 仍是远端目标。",
        "For cross-subnet traffic, the Layer-2 destination MAC is the gateway, while Layer-3 destination IP stays remote.",
        { host: tx("下一跳已选", "Next hop chosen"), arp: tx("准备查 MAC", "Ready to resolve MAC") },
      ],
      [
        "解析 MAC",
        "Resolve MAC",
        "ARP Request/Reply",
        "ARP request / reply",
        "arp",
        "target",
        "FF:FF... -> MAC",
        "FF:FF... -> MAC",
        "ARP 缓存缺失时，主机发送广播请求；目标或网关返回自己的 MAC。",
        "On ARP cache miss, the host broadcasts a request; the target or gateway returns its MAC.",
        "ARP Request 使用广播 MAC，ARP Reply 通常单播给请求方。",
        "ARP request uses broadcast MAC, and ARP reply usually returns as unicast.",
        { arp: tx("已得到 MAC", "MAC resolved"), target: tx("已应答 ARP", "ARP replied") },
        "teal",
      ],
      [
        "封装帧头",
        "Build frame header",
        "src MAC + dst MAC",
        "src MAC + dst MAC",
        "host",
        "switch",
        "Ethernet header",
        "Ethernet header",
        "发送主机把自己的 MAC 写入源 MAC，把下一跳 MAC 写入目的 MAC。",
        "The sender writes its MAC as source and the next-hop MAC as destination.",
        "以太网帧只服务当前二层链路，跨路由器后会重新封装新的源/目的 MAC。",
        "An Ethernet frame serves the current Layer-2 link; after a router, a new source and destination MAC are written.",
        { host: tx("帧已发出", "Frame sent"), switch: tx("学习源 MAC", "Learning source MAC") },
        "warning",
      ],
      [
        "查表转发",
        "Lookup and forward",
        "Learn / Flood / Forward",
        "Learn / flood / forward",
        "switch",
        "target",
        "MAC table",
        "MAC table",
        "交换机先把源 MAC 与入端口写入 MAC 表，再按目的 MAC 查表。命中时定向转发，未知单播或广播进入泛洪。",
        "The switch records source MAC and ingress port, then looks up destination MAC. A hit forwards directly; unknown unicast or broadcast floods.",
        "Flood and Learn 让交换机从首次通信逐步收敛到定向转发。",
        "Flood-and-learn lets switching converge from first-contact flooding to direct forwarding.",
        { switch: tx("已选择出口", "Egress chosen"), target: tx("收到帧", "Frame received") },
        "success",
      ],
      [
        "反向学习",
        "Learn return path",
        "Reply updates table",
        "Reply updates table",
        "target",
        "switch",
        "return frame",
        "return frame",
        "目标回包时，交换机学习目标 MAC 与端口，后续双向通信都能按表项直接转发。",
        "When the target replies, the switch learns the target MAC and port, enabling direct forwarding in both directions.",
        "排查时把 ARP 表、交换机 MAC 表、VLAN 和抓包里的 Ethernet 头一起看。",
        "Troubleshoot by reading ARP table, switch MAC table, VLAN, and Ethernet headers together.",
        { target: tx("已回包", "Reply sent"), switch: tx("双向表项完成", "Bidirectional entries ready"), host: tx("后续直达", "Direct next frames") },
        "success",
      ],
    ],
    [
      ["源/目的 MAC", "Source / destination MAC"],
      ["ARP 缓存", "ARP cache"],
      ["MAC 表", "MAC table"],
      ["Flood and Learn", "Flood and learn"],
    ],
  );
}

function networkSwitch(point: GraphKnowledgePoint) {
  return flow(
    "network",
    point,
    ["交换机学习、查表与泛洪收敛", "Switch learning, lookup, and flood convergence"],
    [
      "模拟交换机收到帧后学习源 MAC、查询目的 MAC、未知泛洪、回包学习，并在表项命中后定向转发。",
      "Simulate a switch learning source MAC, looking up destination MAC, flooding unknown unicast, learning the reply, and then forwarding directly on table hit.",
    ],
    [
      ["hostA", "主机 A", "Host A", "端口 Gi0/1，发送首帧", "Port Gi0/1, sends first frame", "client"],
      ["switch", "交换机", "Switch", "学习源 MAC 并查表", "Learns source MAC and looks up table", "network"],
      ["macTable", "MAC 地址表", "MAC address table", "MAC + VLAN + Port", "MAC + VLAN + port", "data"],
      ["hostB", "主机 B", "Host B", "端口 Gi0/3，返回响应", "Port Gi0/3, replies", "server"],
    ],
    {
      hostA: tx("准备发送帧", "Ready to send frame"),
      switch: tx("MAC 表为空", "MAC table empty"),
      macTable: tx("VLAN 10 无表项", "No entry in VLAN 10"),
      hostB: tx("等待帧", "Waiting for frame"),
    },
    [
      [
        "学习源 MAC",
        "Learn source MAC",
        "记录 A -> Gi0/1",
        "Record A -> Gi0/1",
        "hostA",
        "macTable",
        "src=A vlan=10 port=Gi0/1",
        "src=A vlan=10 port=Gi0/1",
        "交换机从入端口收到帧，先把源 MAC、VLAN 和入端口写入 MAC 地址表。",
        "The switch receives a frame on the ingress port and first records source MAC, VLAN, and ingress port in the MAC address table.",
        "源 MAC 学习让交换机知道回到主机 A 的出口。",
        "Source learning tells the switch which egress reaches Host A.",
        { hostA: tx("帧已进入 Gi0/1", "Frame entered Gi0/1"), switch: tx("学习源地址", "Learning source"), macTable: tx("A -> Gi0/1", "A -> Gi0/1") },
      ],
      [
        "目的未知",
        "Destination unknown",
        "未知单播泛洪",
        "Flood unknown unicast",
        "switch",
        "hostB",
        "dst=B miss -> flood VLAN 10",
        "dst=B miss -> flood VLAN 10",
        "目的 MAC B 在表中缺失，交换机会在同一 VLAN 中向除入端口外的端口泛洪。",
        "Destination MAC B is missing, so the switch floods within the same VLAN except the ingress port.",
        "泛洪范围由 VLAN 决定，目标收到后，其他主机会丢弃不属于自己的帧。",
        "Flood scope is defined by VLAN; the target accepts the frame and other hosts discard it.",
        { switch: tx("在 VLAN 10 泛洪", "Flooding in VLAN 10"), hostB: tx("收到未知单播", "Received unknown unicast") },
        "warning",
      ],
      [
        "回包学习",
        "Learn return path",
        "记录 B -> Gi0/3",
        "Record B -> Gi0/3",
        "hostB",
        "macTable",
        "src=B vlan=10 port=Gi0/3",
        "src=B vlan=10 port=Gi0/3",
        "主机 B 回包时，交换机同样学习源 MAC B 与入端口 Gi0/3。",
        "When Host B replies, the switch learns source MAC B and ingress port Gi0/3.",
        "回包完成后，A 和 B 两个方向的表项都已具备。",
        "After the reply, table entries exist for both directions between A and B.",
        { hostB: tx("回包进入 Gi0/3", "Reply entered Gi0/3"), macTable: tx("A/B 表项完成", "A/B entries ready") },
        "teal",
      ],
      [
        "命中转发",
        "Forward on hit",
        "定向转发到 Gi0/3",
        "Forward directly to Gi0/3",
        "macTable",
        "hostB",
        "dst=B hit -> Gi0/3",
        "dst=B hit -> Gi0/3",
        "后续 A 发往 B 的帧命中 MAC 地址表，交换机只从 Gi0/3 定向转发。",
        "Later frames from A to B hit the MAC address table, so the switch forwards only out Gi0/3.",
        "表项命中把首次通信的泛洪收敛成稳定的点到点转发。",
        "A table hit turns first-contact flooding into stable directed forwarding.",
        { switch: tx("定向转发", "Forwarding directly"), hostB: tx("收到定向帧", "Received directed frame") },
        "success",
      ],
      [
        "过滤与老化",
        "Filter and age",
        "过滤同端口/刷新表项",
        "Filter same-port / age entries",
        "switch",
        "macTable",
        "same port filter + aging",
        "same port filter + aging",
        "目的 MAC 若映射到入端口，交换机会过滤该帧；动态表项会随时间老化，后续通信再触发学习。",
        "If destination MAC maps to the ingress port, the switch filters the frame; dynamic entries age out and later traffic triggers learning again.",
        "排查时把 VLAN、端口、表项年龄、MAC 漂移和未知单播计数一起看。",
        "Debug by checking VLAN, port, entry age, MAC moves, and unknown-unicast counters together.",
        { switch: tx("过滤/刷新完成", "Filtered / refreshed"), macTable: tx("等待下一次学习", "Awaiting next learning") },
        "success",
      ],
    ],
    [
      ["源 MAC 学习", "Source MAC learning"],
      ["未知单播泛洪", "Unknown-unicast flooding"],
      ["VLAN 边界", "VLAN boundary"],
      ["表项老化", "Entry aging"],
    ],
  );
}

function dns(point: GraphKnowledgePoint) {
  const actors = [
    actor("browser", "浏览器", "Browser", "发起域名查询", "Starts domain lookup", "client"),
    actor("recursive", "递归解析器", "Recursive Resolver", "缓存与递归", "Cache and recursion", "server"),
    actor("authority", "权威 DNS", "Authoritative DNS", "返回记录", "Returns records", "network"),
    actor("app", "目标服务", "Target Service", "接收连接", "Receives connection", "server"),
  ];

  return makeSimulation(
    "network",
    point,
    tx("解析链路", "Resolution chain"),
    tx("模拟浏览器缓存、递归解析、权威应答和连接目标服务。", "Simulate browser cache, recursive lookup, authoritative answer, and service connection."),
    actors,
    {
      browser: tx("需要 IP", "Needs IP"),
      recursive: tx("检查缓存", "Checking cache"),
      authority: tx("持有记录", "Has records"),
      app: tx("等待访问", "Waiting"),
    },
    [
      step("检查缓存", "Check cache", "查浏览器/系统缓存", "Check local cache", "browser", "recursive", "Query A/AAAA", "Query A / AAAA", "客户端先查本地缓存，再交给递归解析器。", "The client checks local cache, then asks the resolver.", "缓存命中会直接省掉递归链路。", "A cache hit skips recursive lookup.", { browser: tx("已发起查询", "Query sent"), recursive: tx("收到查询", "Query received") }),
      step("递归查询", "Recursive lookup", "向权威查询", "Ask authority", "recursive", "authority", "NS/A/AAAA", "NS / A / AAAA", "递归解析器按根、顶级域、权威域路径查找记录。", "The resolver walks root, TLD, and authoritative path.", "TTL 决定记录在缓存中的有效时间。", "TTL controls record lifetime in cache.", { recursive: tx("递归中", "Resolving"), authority: tx("返回记录", "Record returned") }, "teal"),
      step("返回 IP", "Return IP", "返回解析结果", "Return answer", "recursive", "browser", "IP + TTL", "IP + TTL", "递归解析器缓存结果并返回 IP。", "The resolver caches the answer and returns IP.", "解析结果决定后续连接的目标地址。", "The answer determines the connection target.", { browser: tx("拿到 IP", "IP resolved"), recursive: tx("缓存记录", "Cached") }, "success"),
      step("访问服务", "Connect service", "连接目标服务", "Connect service", "browser", "app", "TCP/QUIC", "TCP / QUIC", "客户端使用解析出的 IP 建立连接。", "The client uses the resolved IP to open a connection.", "DNS 问题常表现为慢、错、旧三个方向。", "DNS issues often show as slow, wrong, or stale answers.", { browser: tx("开始连接", "Connecting"), app: tx("收到连接", "Connection received") }, "success"),
    ],
    [tx("TTL", "TTL"), tx("递归链路", "Recursive path"), tx("A/AAAA 记录", "A / AAAA records")],
  );
}

function tls(point: GraphKnowledgePoint) {
  const actors = [
    actor("client", "客户端", "Client", "发起 TLS", "Starts TLS", "client"),
    actor("server", "服务端", "Server", "返回证书", "Returns certificate", "server"),
    actor("ca", "证书链", "Certificate Chain", "验证身份", "Verifies identity", "security"),
    actor("session", "会话密钥", "Session Key", "加密通信", "Encrypted traffic", "storage"),
  ];

  return makeSimulation(
    "network",
    point,
    tx("安全握手", "Secure handshake"),
    tx("模拟 ClientHello、证书验证、密钥协商和加密通信。", "Simulate ClientHello, certificate validation, key agreement, and encrypted traffic."),
    actors,
    {
      client: tx("准备握手", "Ready"),
      server: tx("等待 Hello", "Waiting hello"),
      ca: tx("信任根可用", "Trust roots ready"),
      session: tx("密钥未生成", "No key yet"),
    },
    [
      step("ClientHello", "ClientHello", "发送 ClientHello", "Send ClientHello", "client", "server", "版本/套件/随机数", "Version / suites / random", "客户端发送支持的协议版本、密码套件和随机数。", "The client sends supported versions, cipher suites, and random data.", "握手从能力协商开始。", "The handshake starts with capability negotiation.", { client: tx("等待 ServerHello", "Waiting ServerHello"), server: tx("选择套件", "Selecting suite") }),
      step("证书验证", "Certificate validation", "验证证书链", "Validate certificate", "server", "ca", "Certificate", "Certificate", "服务端返回证书，客户端验证证书链、域名和有效期。", "The server returns a certificate; the client validates chain, domain, and validity.", "证书链把服务端身份连接到可信根。", "The chain links server identity to a trust root.", { server: tx("证书已发送", "Certificate sent"), ca: tx("校验通过", "Validated") }, "teal"),
      step("协商密钥", "Agree key", "生成会话密钥", "Generate session key", "client", "session", "Key share", "Key share", "双方协商共享密钥材料，形成对称加密密钥。", "Both sides derive shared key material for symmetric encryption.", "数据传输阶段主要使用对称加密提升效率。", "Data transfer primarily uses symmetric encryption for efficiency.", { client: tx("密钥就绪", "Key ready"), session: tx("已生成", "Generated") }, "success"),
      step("加密传输", "Encrypted traffic", "发送加密数据", "Send encrypted data", "session", "server", "Application Data", "Application data", "应用数据在 TLS 记录层中加密传输。", "Application data travels encrypted in TLS records.", "HTTPS 的安全性来自身份认证、机密性和完整性。", "HTTPS security comes from authentication, confidentiality, and integrity.", { client: tx("安全连接", "Secure connection"), server: tx("安全连接", "Secure connection"), session: tx("加密中", "Encrypting") }, "success"),
    ],
    [tx("证书链", "Certificate chain"), tx("密钥协商", "Key agreement"), tx("加密记录", "Encrypted records")],
  );
}

function httpCache(point: GraphKnowledgePoint) {
  const actors = [
    actor("browser", "浏览器", "Browser", "读取缓存策略", "Reads cache policy", "client"),
    actor("cache", "本地缓存", "Local Cache", "保存响应", "Stores responses", "cache"),
    actor("origin", "源站", "Origin", "返回资源", "Returns resource", "server"),
  ];

  return makeSimulation(
    "network",
    point,
    tx("缓存决策", "Cache decision"),
    tx("模拟强缓存、协商缓存、304 和资源更新。", "Simulate fresh cache, validation, 304, and resource refresh."),
    actors,
    {
      browser: tx("请求资源", "Requesting resource"),
      cache: tx("有缓存副本", "Has cached copy"),
      origin: tx("持有最新资源", "Has latest resource"),
    },
    [
      step("检查强缓存", "Check freshness", "判断缓存新鲜度", "Check freshness", "browser", "cache", "Cache-Control", "Cache-Control", "浏览器根据 max-age、Expires 等字段判断缓存是否新鲜。", "The browser checks max-age, Expires, and similar headers for freshness.", "强缓存命中时请求停在本地。", "Fresh-cache hits stop locally.", { browser: tx("读取缓存策略", "Reading policy"), cache: tx("判断新鲜度", "Checking freshness") }),
      step("发起协商", "Validate", "发送条件请求", "Send conditional request", "cache", "origin", "ETag/Last-Modified", "ETag / Last-Modified", "缓存过期后，浏览器带条件头向源站校验。", "After staleness, the browser validates with conditional headers.", "协商缓存关注资源是否变化。", "Validation asks whether the resource changed.", { cache: tx("等待校验", "Awaiting validation"), origin: tx("比较版本", "Comparing version") }, "teal"),
      step("返回 304", "Return 304", "复用缓存", "Reuse cache", "origin", "browser", "304", "304", "资源版本一致时源站返回 304，浏览器复用缓存体。", "When versions match, the origin returns 304 and the browser reuses the body.", "304 节省响应体传输成本。", "304 saves response-body transfer.", { origin: tx("已确认", "Confirmed"), browser: tx("复用本地副本", "Reusing copy") }, "success"),
      step("刷新资源", "Refresh resource", "更新缓存", "Update cache", "origin", "cache", "200 + body", "200 + body", "资源变化时源站返回新内容，缓存写入新版本。", "When changed, the origin returns new content and cache stores the new version.", "资源发布要配合文件名、ETag 或缓存头策略。", "Resource releases need filename, ETag, or header strategy.", { cache: tx("新版本已缓存", "New version cached"), browser: tx("展示新内容", "Showing new content") }, "success"),
    ],
    [tx("Cache-Control", "Cache-Control"), tx("ETag", "ETag"), tx("304", "304")],
  );
}

function loadBalancing(point: GraphKnowledgePoint) {
  const actors = [
    actor("client", "客户端", "Client", "发起请求", "Sends request", "client"),
    actor("lb", "负载均衡器", "Load Balancer", "选择后端", "Selects backend", "network"),
    actor("pool", "后端池", "Backend Pool", "多个实例", "Multiple instances", "cluster"),
    actor("health", "健康检查", "Health Check", "摘除异常实例", "Removes bad instances", "data"),
  ];

  return makeSimulation(
    "network",
    point,
    tx("流量分发", "Traffic distribution"),
    tx("模拟请求进入、算法选择、健康检查和后端响应。", "Simulate request entry, algorithm selection, health checks, and backend response."),
    actors,
    {
      client: tx("准备请求", "Ready"),
      lb: tx("等待流量", "Waiting"),
      pool: tx("实例池健康", "Pool healthy"),
      health: tx("周期探测", "Probing"),
    },
    [
      step("请求进入", "Request enters", "发送请求", "Send request", "client", "lb", "HTTP/TCP", "HTTP / TCP", "客户端流量先到达负载均衡器。", "Client traffic first reaches the load balancer.", "四层看连接，七层看请求内容。", "Layer 4 uses connections; Layer 7 uses request content.", { client: tx("等待响应", "Waiting"), lb: tx("收到请求", "Request received") }),
      step("选择实例", "Select instance", "执行分发算法", "Run algorithm", "lb", "pool", "RR/Hash/LeastConn", "RR / hash / least connections", "负载均衡器按算法和会话策略选择后端。", "The load balancer selects a backend by algorithm and session policy.", "算法影响均衡性、亲和性和故障表现。", "The algorithm affects balance, affinity, and failure behavior.", { lb: tx("已选择实例", "Instance selected"), pool: tx("实例接收", "Instance receiving") }, "teal"),
      step("检查健康", "Check health", "刷新健康状态", "Refresh health", "health", "lb", "Probe", "Probe", "健康检查持续更新可用实例集合。", "Health checks continuously update the available instance set.", "异常实例需要及时摘除流量。", "Unhealthy instances need timely traffic removal.", { health: tx("状态已更新", "Updated"), lb: tx("路由表刷新", "Routing table refreshed") }, "warning"),
      step("返回响应", "Return response", "后端响应", "Backend response", "pool", "client", "Response", "Response", "后端处理完成后响应沿原路径返回。", "The backend responds through the same path.", "排查时对照 LB 日志、后端日志和健康检查结果。", "Troubleshoot with LB logs, backend logs, and health-check results.", { client: tx("收到响应", "Response received"), pool: tx("请求完成", "Complete"), lb: tx("记录指标", "Metrics recorded") }, "success"),
    ],
    [tx("分发算法", "Algorithm"), tx("健康检查", "Health checks"), tx("后端池", "Backend pool")],
  );
}

function cdn(point: GraphKnowledgePoint) {
  const actors = [
    actor("user", "全球用户", "Global users", "选择地域与资源", "Chooses region and asset", "client"),
    actor("routing", "DNS/Anycast 调度", "DNS / Anycast routing", "就近接入边缘", "Routes to nearby edge", "network"),
    actor("edge", "边缘缓存", "Edge cache", "计算 cache key 与 TTL", "Computes cache key and TTL", "cache"),
    actor("shield", "区域缓存 / Origin Shield", "Regional cache / Origin Shield", "合并回源请求", "Coalesces origin fetches", "cache"),
    actor("origin", "源站", "Origin", "保存权威内容", "Holds authoritative content", "server"),
  ];

  return makeSimulation(
    "network",
    point,
    tx("CDN 请求路由与缓存层级", "CDN request routing and cache hierarchy"),
    tx(
      "模拟用户到最近边缘、边缘缓存命中、过期再验证、分层回源和指标观测。",
      "Simulate user-to-edge routing, edge cache hits, stale revalidation, tiered origin fetches, and metrics.",
    ),
    actors,
    {
      user: tx("选择资源 /assets/app.js", "Asset /assets/app.js selected"),
      routing: tx("等待调度", "Awaiting routing"),
      edge: tx("缓存为空", "Cache empty"),
      shield: tx("待命", "Standby"),
      origin: tx("权威版本 v42", "Authoritative v42"),
    },
    [
      step(
        "就近接入边缘",
        "Route to nearest edge",
        "DNS/CNAME/Anycast 调度",
        "DNS / CNAME / Anycast routing",
        "user",
        "routing",
        "geo + latency",
        "geo + latency",
        "用户请求通过 DNS、CNAME、Anycast 或平台调度进入低延迟边缘位置。",
        "The user reaches a low-latency edge through DNS, CNAME, Anycast, or platform routing.",
        "CDN 的第一层收益来自把用户入口移到更近的边缘网络。",
        "The first CDN gain comes from moving the entry point to a nearby edge network.",
        { user: tx("请求已发出", "Request sent"), routing: tx("边缘已选中", "Edge selected") },
      ),
      step(
        "计算缓存键",
        "Compute cache key",
        "匹配 URL/Header/Cookie",
        "Match URL / headers / cookies",
        "routing",
        "edge",
        "cache key + TTL",
        "cache key + TTL",
        "边缘节点用 Host、路径、查询参数、Vary 相关 Header、Cookie 策略和缓存规则确定缓存对象。",
        "The edge uses Host, path, query string, Vary-related headers, cookie policy, and cache rules to identify the object.",
        "cache key 过宽会浪费命中率，cache key 过窄会带来内容串扰风险。",
        "Cache-key design governs hit ratio and content isolation.",
        { routing: tx("请求到达边缘", "Request at edge"), edge: tx("cache key 已计算", "Cache key computed") },
        "teal",
      ),
      step(
        "缓存命中返回",
        "Return cache hit",
        "边缘直接响应",
        "Serve from edge",
        "edge",
        "user",
        "HIT + Age",
        "HIT + Age",
        "新鲜缓存命中时，边缘节点直接返回响应，源站请求数和 TTFB 同时下降。",
        "When a fresh object hits, the edge responds directly, reducing origin requests and TTFB.",
        "HIT、Age、x-cache 或 cf-cache-status 是观察命中的直接信号。",
        "HIT, Age, x-cache, or cf-cache-status are direct cache signals.",
        { edge: tx("HIT: Age 184s", "HIT: Age 184s"), user: tx("TTFB 42ms", "TTFB 42ms") },
        "success",
      ),
      step(
        "过期再验证",
        "Revalidate stale object",
        "发送 If-None-Match",
        "Send If-None-Match",
        "edge",
        "shield",
        "ETag / 304",
        "ETag / 304",
        "缓存过期后，边缘可携带 ETag 或 Last-Modified 向上层缓存或源站做条件请求。",
        "After expiry, the edge can send conditional requests with ETag or Last-Modified to an upper cache or origin.",
        "304 或 REVALIDATED 路径能节省响应体传输并保持内容新鲜。",
        "304 or REVALIDATED paths save response-body transfer while preserving freshness.",
        { edge: tx("EXPIRED -> revalidate", "EXPIRED -> revalidate"), shield: tx("条件请求中", "Conditional request") },
        "warning",
      ),
      step(
        "分层回源填充",
        "Fill through tiered cache",
        "MISS 经过 Shield 回源",
        "MISS through Shield",
        "shield",
        "origin",
        "MISS + origin fetch",
        "MISS + origin fetch",
        "边缘或区域缓存缺失时，Origin Shield 合并回源流量并从源站获取权威响应，再把内容写回缓存层。",
        "When edge or regional cache misses, Origin Shield consolidates origin traffic, fetches the authoritative response, and fills cache layers.",
        "分层缓存能减少重复回源并提升整体命中率。",
        "Tiered caching reduces duplicate origin fetches and raises aggregate hit ratio.",
        { shield: tx("填充缓存层", "Filling cache tiers"), origin: tx("返回 200 v42", "Returns 200 v42") },
        "teal",
      ),
      step(
        "观测与清理",
        "Observe and purge",
        "记录命中率与刷新",
        "Record hit ratio and purge",
        "edge",
        "origin",
        "purge / logs / metrics",
        "purge / logs / metrics",
        "发布新版本或发现错误缓存时，运维通过 purge、版本化 URL、日志和指标确认各地域边缘状态。",
        "When releasing a new version or fixing stale content, operators use purge, versioned URLs, logs, and metrics to confirm edge state by region.",
        "CDN 排障要把用户地域、缓存状态、回源耗时和源站日志串起来。",
        "CDN debugging connects user region, cache status, origin latency, and origin logs.",
        { edge: tx("命中率 91%", "Hit ratio 91%"), origin: tx("回源率下降", "Origin load down") },
        "success",
      ),
    ],
    [
      tx("边缘 TTFB", "Edge TTFB"),
      tx("缓存状态", "Cache status"),
      tx("命中率", "Hit ratio"),
      tx("回源请求", "Origin requests"),
      tx("TTL/新鲜度", "TTL / freshness"),
    ],
  );
}

function bPlusTree(point: GraphKnowledgePoint) {
  const actors = [
    actor("query", "查询条件", "Predicate", "WHERE / ORDER BY", "WHERE / ORDER BY", "client"),
    actor("root", "根/内部节点", "Root / internal nodes", "定位范围", "Locate range", "data"),
    actor("leaf", "叶子链表", "Leaf chain", "有序记录", "Ordered records", "database"),
    actor("row", "数据行", "Rows", "返回结果", "Return rows", "server"),
  ];

  return makeSimulation(
    "mysql",
    point,
    tx("索引查找", "Index lookup"),
    tx("模拟从根节点定位叶子页，再顺序扫描范围结果。", "Simulate locating leaf pages from root and scanning range results."),
    actors,
    {
      query: tx("条件已给定", "Predicate ready"),
      root: tx("等待比较", "Awaiting compare"),
      leaf: tx("叶子页有序", "Leaves ordered"),
      row: tx("待返回", "Pending"),
    },
    [
      step("定位根节点", "Start at root", "比较根节点", "Compare root", "query", "root", "key", "key", "查询键先与根节点分隔键比较。", "The search key is compared with root separator keys.", "树高低意味着磁盘页访问次数少。", "Low tree height means fewer page visits.", { root: tx("选择子节点", "Child chosen") }),
      step("下探叶子页", "Descend to leaf", "进入叶子页", "Enter leaf", "root", "leaf", "page", "page", "内部节点逐层定位到目标叶子页。", "Internal nodes guide the search to the target leaf page.", "索引选择性影响扫描范围。", "Index selectivity affects scan range.", { root: tx("路径确定", "Path fixed"), leaf: tx("命中叶子页", "Leaf hit") }, "teal"),
      step("范围扫描", "Range scan", "顺序扫描", "Scan range", "leaf", "row", "linked leaves", "linked leaves", "叶子节点按键有序连接，适合范围查询和排序。", "Leaf nodes are ordered and linked, fitting range scan and sorting.", "范围查询优势来自叶子链表顺序访问。", "Range-query strength comes from ordered leaf links.", { leaf: tx("扫描完成", "Scanned"), row: tx("结果返回", "Rows returned") }, "success"),
    ],
    [tx("树高", "Tree height"), tx("叶子链表", "Leaf links"), tx("范围扫描", "Range scan")],
  );
}

function k8sDeployment(point: GraphKnowledgePoint) {
  const actors = [
    actor("yaml", "Deployment YAML", "Deployment YAML", "声明副本和镜像", "Declares replicas and image", "data"),
    actor("api", "API Server", "API Server", "保存期望状态", "Stores desired state", "server"),
    actor("controller", "Deployment Controller", "Deployment Controller", "创建 ReplicaSet", "Creates ReplicaSet", "cluster"),
    actor("pod", "Pod", "Pod", "运行副本", "Runs replicas", "container"),
  ];

  return makeSimulation(
    "kubernetes",
    point,
    tx("控制器调谐", "Controller reconciliation"),
    tx("模拟 Deployment 从 YAML 到 ReplicaSet，再到 Pod 运行状态。", "Simulate Deployment from YAML to ReplicaSet and running Pods."),
    actors,
    {
      yaml: tx("副本=3", "replicas=3"),
      api: tx("等待提交", "Waiting"),
      controller: tx("监听中", "Watching"),
      pod: tx("Pending", "Pending"),
    },
    [
      step("提交 YAML", "Apply YAML", "kubectl apply", "kubectl apply", "yaml", "api", "desired state", "desired state", "API Server 保存 Deployment 的期望状态。", "API Server stores the desired state of the Deployment.", "所有后续动作都围绕期望状态展开。", "All later actions follow desired state.", { yaml: tx("已提交", "Applied"), api: tx("已保存", "Stored") }),
      step("创建 ReplicaSet", "Create ReplicaSet", "控制器调谐", "Reconcile", "api", "controller", "ReplicaSet", "ReplicaSet", "Deployment Controller 创建或更新 ReplicaSet。", "The Deployment controller creates or updates ReplicaSet.", "ReplicaSet 负责副本数量。", "ReplicaSet owns replica count.", { controller: tx("已创建 RS", "RS created"), api: tx("状态更新", "Status updated") }, "teal"),
      step("创建 Pod", "Create Pods", "调度 Pod", "Schedule Pods", "controller", "pod", "Pods", "Pods", "ReplicaSet 创建 Pod，调度器和 kubelet 让其运行。", "ReplicaSet creates Pods; scheduler and kubelet run them.", "Pod 状态通过 Events 和 Conditions 暴露。", "Pod state is exposed through events and conditions.", { pod: tx("Running", "Running"), controller: tx("副本满足", "Replicas ready") }, "success"),
    ],
    [tx("期望状态", "Desired state"), tx("ReplicaSet", "ReplicaSet"), tx("Pod Conditions", "Pod conditions")],
  );
}

function rag(point: GraphKnowledgePoint) {
  const actors = [
    actor("user", "用户问题", "User question", "提出问题", "Asks question", "client"),
    actor("retriever", "检索器", "Retriever", "召回片段", "Retrieves chunks", "tool"),
    actor("context", "上下文", "Context", "拼接证据", "Assembles evidence", "data"),
    actor("model", "模型", "Model", "生成答案", "Generates answer", "model"),
  ];

  return makeSimulation(
    "agent",
    point,
    tx("检索增强生成", "Retrieval-augmented generation"),
    tx("模拟问题向量化、召回、上下文组装和带证据生成。", "Simulate query embedding, retrieval, context assembly, and evidence-grounded generation."),
    actors,
    {
      user: tx("问题已输入", "Question entered"),
      retriever: tx("等待检索", "Waiting"),
      context: tx("上下文为空", "Empty context"),
      model: tx("等待上下文", "Waiting context"),
    },
    [
      step("理解问题", "Understand question", "生成查询向量", "Create query embedding", "user", "retriever", "embedding", "embedding", "系统把问题转成检索查询或向量。", "The system turns the question into a search query or vector.", "查询表达决定召回质量上限。", "Query representation bounds retrieval quality.", { retriever: tx("查询就绪", "Query ready") }),
      step("召回片段", "Retrieve chunks", "执行检索", "Run retrieval", "retriever", "context", "top-k chunks", "top-k chunks", "检索器从知识库召回候选片段。", "The retriever recalls candidate chunks from the knowledge base.", "召回要兼顾相关性、多样性和时效。", "Retrieval balances relevance, diversity, and freshness.", { retriever: tx("召回完成", "Retrieved"), context: tx("证据待筛选", "Evidence pending") }, "teal"),
      step("组装上下文", "Assemble context", "压缩上下文", "Compress context", "context", "model", "prompt context", "prompt context", "系统把证据、引用和任务要求放入模型上下文。", "The system places evidence, citations, and task requirements in context.", "上下文质量影响答案可验证性。", "Context quality affects answer verifiability.", { context: tx("上下文就绪", "Context ready"), model: tx("开始生成", "Generating") }, "warning"),
      step("生成答案", "Generate answer", "生成带证据回答", "Generate grounded answer", "model", "user", "answer", "answer", "模型基于检索证据生成答案并返回。", "The model answers using retrieved evidence and returns it.", "RAG 的关键指标是召回、忠实度、引用和延迟。", "Key RAG metrics are recall, faithfulness, citations, and latency.", { model: tx("答案完成", "Answer complete"), user: tx("收到答案", "Answer received") }, "success"),
    ],
    [tx("召回率", "Recall"), tx("忠实度", "Faithfulness"), tx("引用覆盖", "Citation coverage")],
  );
}

function signal(point: GraphKnowledgePoint) {
  const actors = [
    actor("sender", "发送端", "Sender", "产生比特流", "Produces bits", "client"),
    actor("encoder", "编码器/介质", "Encoder / media", "电、光、无线信号", "Electrical, optical, radio signals", "network"),
    actor("link", "链路频带", "Link band", "容量、传播、排队", "Capacity, propagation, queueing", "network"),
    actor("receiver", "接收端", "Receiver", "测量体验", "Measures experience", "server"),
  ];

  return makeSimulation(
    "network",
    point,
    tx("物理信号实验室", "Physical signal lab"),
    tx("同步观察时域波形、频域带宽、首比特延迟、完整消息完成时间和有效吞吐。", "Observe time-domain waveform, frequency bandwidth, first-bit latency, full-message completion, and effective throughput together."),
    actors,
    {
      sender: tx("消息 12 KB 待发送", "12 KB message queued"),
      encoder: tx("等待调制", "Awaiting modulation"),
      link: tx("频带空闲", "Band idle"),
      receiver: tx("等待首比特", "Awaiting first bit"),
    },
    [
      step(
        "比特进入编码器",
        "Bits enter encoder",
        "生成电/光/无线信号",
        "Generate physical signal",
        "sender",
        "encoder",
        "10110010 -> waveform",
        "10110010 -> waveform",
        "网卡、光模块或无线设备把比特映射成时域波形，接收端再按采样和判决恢复 0/1。",
        "NICs, optics, or radios map bits into a time-domain waveform; the receiver samples and decides 0/1 values.",
        "信号质量直接影响误码、CRC 错误、协商速率和链路稳定性。",
        "Signal quality drives bit errors, CRC errors, negotiated rate, and link stability.",
        { sender: tx("比特已排队", "Bits queued"), encoder: tx("波形已生成", "Waveform generated") },
      ),
      step(
        "占用频率带宽",
        "Occupy frequency band",
        "观察频域范围",
        "Inspect spectrum",
        "encoder",
        "link",
        "Hz band",
        "Hz band",
        "同一个信号也能从频域观察，频谱上被占用的一段范围就是信号带宽。",
        "The same signal can be viewed in frequency domain; the occupied range in the spectrum is signal bandwidth.",
        "更宽的可用频带通常支持更高符号率或更多并行载波。",
        "A wider usable band usually supports higher symbol rate or more parallel carriers.",
        { encoder: tx("频谱已展开", "Spectrum shown"), link: tx("频带被占用", "Band occupied") },
        "teal",
      ),
      step(
        "首比特到达",
        "First bit arrives",
        "传播延迟生效",
        "Apply propagation delay",
        "link",
        "receiver",
        "first-bit latency",
        "first-bit latency",
        "距离、介质传播速度、设备处理和排队决定首比特何时到达。",
        "Distance, propagation speed, device processing, and queueing decide when the first bit arrives.",
        "延迟控制交互响应时间，带宽控制后续数据灌入速度。",
        "Latency controls interaction response time; bandwidth controls the following bit stream rate.",
        { link: tx("传播中", "Propagating"), receiver: tx("首比特已到达", "First bit arrived") },
        "warning",
      ),
      step(
        "吞吐受瓶颈限制",
        "Throughput hits bottleneck",
        "测量有效速率",
        "Measure effective rate",
        "link",
        "receiver",
        "throughput < nominal",
        "throughput < nominal",
        "路径吞吐由最窄链路、共享竞争、协议开销、窗口、重传和限速策略共同决定。",
        "Path throughput comes from the narrowest link, contention, protocol overhead, windows, retransmission, and rate limits.",
        "标称带宽是容量上限，实际吞吐要用 iperf、抓包和接口计数验证。",
        "Nominal bandwidth is a capacity ceiling; real throughput is verified with iperf, packet traces, and interface counters.",
        { link: tx("队列出现", "Queue formed"), receiver: tx("吞吐可测", "Throughput measurable") },
        "warning",
      ),
      step(
        "丢包与抖动显现",
        "Loss and jitter appear",
        "观察重传成本",
        "Inspect retransmission cost",
        "receiver",
        "sender",
        "loss + jitter + retry",
        "loss + jitter + retry",
        "无线干扰、CRC 错误、拥塞队列和缓冲膨胀会表现为丢包、抖动、重传和完成时间拉长。",
        "Wireless interference, CRC errors, congested queues, and bufferbloat show up as loss, jitter, retransmission, and longer completion time.",
        "排障时把 ping/mtr、iperf、tcpdump、链路速率、双工和接口错误计数放在同一张图里看。",
        "Debug with ping/mtr, iperf, tcpdump, link rate, duplex, and interface error counters in one view.",
        { sender: tx("准备重传", "Preparing retry"), receiver: tx("体验已量化", "Experience quantified") },
        "danger",
      ),
    ],
    [
      tx("信号带宽 Hz", "Signal bandwidth Hz"),
      tx("网络带宽 bps", "Network bandwidth bps"),
      tx("RTT/抖动", "RTT / jitter"),
      tx("吞吐/丢包", "Throughput / loss"),
    ],
  );
}

function ethernetPhysical(point: GraphKnowledgePoint) {
  return flow(
    "network",
    point,
    ["以太网物理链路建立与排障", "Ethernet physical link setup and troubleshooting"],
    [
      "从介质选择、端口连接、自动协商、信号传输到错误计数，观察一条以太网链路如何稳定工作。",
      "Observe how an Ethernet link works from media selection, port connection, auto-negotiation, signal transmission, and error counters.",
    ],
    [
      ["media", "介质/模块", "Media / module", "双绞线、光纤、SFP/QSFP", "Copper, fiber, SFP/QSFP", "data"],
      ["nic", "网卡", "NIC", "编码帧并驱动物理接口", "Encodes frames and drives the physical interface", "client"],
      ["switchPort", "交换机端口", "Switch port", "速率、双工、VLAN、错误计数", "Speed, duplex, VLAN, error counters", "network"],
      ["signalPath", "信号路径", "Signal path", "线缆、配线架、光功率、距离", "Cable, patch panel, optical power, distance", "network"],
      ["ops", "排障观察", "Troubleshooting view", "链路灯、up/down、CRC/FCS、替换验证", "Link LED, up/down, CRC/FCS, swap test", "server"],
    ],
    {
      media: tx("待选择", "Awaiting selection"),
      nic: tx("接口待连接", "Interface awaiting link"),
      switchPort: tx("端口空闲", "Port idle"),
      signalPath: tx("路径未验证", "Path unverified"),
      ops: tx("等待指标", "Awaiting signals"),
    },
    [
      [
        "选择介质",
        "Select media",
        "匹配速率与距离",
        "Match speed and distance",
        "media",
        "nic",
        "copper/fiber + transceiver",
        "copper / fiber + transceiver",
        "先根据距离、速率、成本、抗干扰和接口形态选择双绞线、光纤或光模块。",
        "Choose copper, fiber, or transceiver by distance, speed, cost, interference tolerance, and interface form factor.",
        "介质与模块能力决定链路可达速率和稳定性上限。",
        "Media and module capability set the ceiling for link speed and stability.",
        { media: tx("介质匹配", "Media matched"), nic: tx("准备建链", "Ready to link") },
      ],
      [
        "端口协商",
        "Port negotiation",
        "自动协商速率/双工",
        "Auto-negotiate speed / duplex",
        "nic",
        "switchPort",
        "speed + duplex",
        "speed + duplex",
        "网卡与交换机端口协商速率、双工和能力，结果决定后续帧发送方式。",
        "NIC and switch port negotiate speed, duplex, and capabilities; the result decides frame transmission behavior.",
        "速率降级和双工不匹配会直接造成吞吐下降、冲突或丢包。",
        "Speed downgrade and duplex mismatch directly cause lower throughput, collisions, or loss.",
        { nic: tx("能力已通告", "Capabilities advertised"), switchPort: tx("协商完成", "Negotiated") },
        "teal",
      ],
      [
        "发送信号",
        "Transmit signal",
        "承载以太网帧",
        "Carry Ethernet frames",
        "switchPort",
        "signalPath",
        "frame -> electrical/optical signal",
        "frame -> electrical / optical signal",
        "端口把帧转换成物理信号，信号经过线缆、光纤、配线架和中间连接器到达对端。",
        "The port converts frames into physical signals that traverse cable, fiber, patch panel, and connectors.",
        "距离超限、弯折、污染、模块不兼容和光功率异常会降低链路质量。",
        "Distance overrun, bend, contamination, module mismatch, and optical power issues reduce link quality.",
        { switchPort: tx("帧已编码", "Frame encoded"), signalPath: tx("信号传播中", "Signal propagating") },
        "warning",
      ],
      [
        "观察错误",
        "Observe errors",
        "查看链路与计数器",
        "Check link and counters",
        "signalPath",
        "ops",
        "up/down + CRC/FCS",
        "up/down + CRC / FCS",
        "运维侧观察链路灯、端口 up/down、协商速率、CRC/FCS、丢包、抖动和错误包计数。",
        "Operations observe link LED, port up/down, negotiated speed, CRC/FCS, loss, jitter, and error counters.",
        "CRC/FCS 错误通常优先检查线缆、模块、端口、光功率和对端配置。",
        "CRC/FCS errors usually lead to cable, module, port, optical power, and peer configuration checks.",
        { signalPath: tx("质量已采样", "Quality sampled"), ops: tx("定位方向明确", "Direction identified") },
        "success",
      ],
    ],
    [
      ["速率/双工", "Speed / duplex"],
      ["CRC/FCS", "CRC / FCS"],
      ["链路 up/down", "Link up/down"],
      ["替换验证", "Swap test"],
    ],
  );
}

function ethernetFrame(point: GraphKnowledgePoint) {
  return flow(
    "network",
    point,
    ["以太网帧字段装配", "Ethernet frame field assembly"],
    [
      "按同步字段、MAC 地址、可选 VLAN Tag、Type/Length、Payload 和 FCS 观察一帧如何被构造、传输和校验。",
      "Inspect how a frame is built, transmitted, and checked through sync fields, MAC addresses, optional VLAN tag, Type/Length, Payload, and FCS.",
    ],
    [
      ["phy", "同步字段", "Sync fields", "Preamble 与 SFD 标记帧起始", "Preamble and SFD mark frame start", "network"],
      ["header", "帧头", "Frame header", "目的 MAC、源 MAC、Type/Length", "Destination MAC, source MAC, Type/Length", "data"],
      ["payload", "载荷", "Payload", "IP、ARP 或填充后的上层数据", "IP, ARP, or padded upper-layer data", "server"],
      ["fcs", "FCS 校验", "FCS check", "接收端验证帧完整性", "Receiver validates frame integrity", "security"],
    ],
    {
      phy: tx("等待链路同步", "Awaiting link sync"),
      header: tx("字段未写入", "Fields empty"),
      payload: tx("上层包待封装", "Packet awaiting wrap"),
      fcs: tx("校验值未生成", "No checksum yet"),
    },
    [
      [
        "同步帧起始",
        "Synchronize frame start",
        "写入 Preamble/SFD",
        "Write Preamble / SFD",
        "phy",
        "header",
        "7B preamble + 1B SFD",
        "7B preamble + 1B SFD",
        "发送端先输出 Preamble 和 SFD，让接收端完成时钟同步并识别帧起始。",
        "The sender emits Preamble and SFD so the receiver can synchronize clocking and identify frame start.",
        "Preamble 与 SFD 服务物理接收过程，通常抓包工具从 MAC 地址字段开始展示。",
        "Preamble and SFD serve physical reception, and packet captures usually start from MAC address fields.",
        { phy: tx("起始已同步", "Start synchronized"), header: tx("准备写入 MAC", "Ready for MAC fields") },
      ],
      [
        "写入地址",
        "Write addresses",
        "填入目的/源 MAC",
        "Fill destination / source MAC",
        "header",
        "header",
        "dst MAC + src MAC",
        "dst MAC + src MAC",
        "帧头先写目的 MAC，再写源 MAC，交换机用目的 MAC 选择本地链路出口。",
        "The header writes destination MAC first, then source MAC; switches choose local-link egress by destination MAC.",
        "跨网段访问时目的 MAC 通常是网关 MAC，IP 头中的目的 IP 仍指向远端主机。",
        "For cross-subnet access, the destination MAC is usually the gateway MAC while the IP destination remains remote.",
        { header: tx("地址字段完成", "Address fields complete") },
        "teal",
      ],
      [
        "插入 VLAN",
        "Insert VLAN",
        "可选 802.1Q Tag",
        "Optional 802.1Q tag",
        "header",
        "payload",
        "TPID + TCI",
        "TPID + TCI",
        "Trunk 链路会在源 MAC 与 Type/Length 之间插入 4 字节 802.1Q Tag，携带优先级和 VLAN ID。",
        "Trunk links insert a 4-byte 802.1Q tag between source MAC and Type/Length, carrying priority and VLAN ID.",
        "Tag 位置决定交换机如何区分广播域；插入或移除 Tag 后需要重新计算 FCS。",
        "Tag position lets switches distinguish broadcast domains; adding or removing the tag requires FCS recalculation.",
        { header: tx("VLAN Tag 已插入", "VLAN tag inserted"), payload: tx("等待类型字段", "Awaiting type field") },
        "warning",
      ],
      [
        "封装载荷",
        "Wrap payload",
        "写入 Type/Length 与 Payload",
        "Write Type/Length and Payload",
        "payload",
        "fcs",
        "EtherType + 46-1500B",
        "EtherType + 46-1500B",
        "Type/Length 指出载荷协议或长度，Payload 承载 IP、ARP 等上层数据，短载荷会补齐到最小长度。",
        "Type/Length identifies payload protocol or length, and Payload carries IP, ARP, or similar data; short payloads are padded to the minimum size.",
        "0x0800、0x86DD、0x0806 分别常见于 IPv4、IPv6 和 ARP。",
        "0x0800, 0x86DD, and 0x0806 commonly indicate IPv4, IPv6, and ARP.",
        { payload: tx("载荷已封装", "Payload wrapped"), fcs: tx("准备计算校验", "Ready to compute check") },
        "teal",
      ],
      [
        "校验接收",
        "Validate reception",
        "计算并校验 FCS",
        "Compute and verify FCS",
        "fcs",
        "phy",
        "CRC/FCS",
        "CRC / FCS",
        "发送端生成 4 字节 FCS，接收端用它校验帧完整性；校验通过后按 Type/Length 分发载荷。",
        "The sender generates a 4-byte FCS and the receiver validates frame integrity with it; after success, payload is dispatched by Type/Length.",
        "FCS/CRC 错误通常结合端口错误计数、线缆、光模块和双工速率排查。",
        "FCS/CRC errors are investigated with port counters, cable, optics, and speed/duplex checks.",
        { fcs: tx("校验通过", "Check passed"), phy: tx("交付上层", "Delivered upward") },
        "success",
      ],
    ],
    [
      ["目的/源 MAC", "Destination / source MAC"],
      ["802.1Q Tag", "802.1Q tag"],
      ["EtherType/MTU", "EtherType / MTU"],
      ["FCS/CRC", "FCS / CRC"],
    ],
  );
}

function buildNetworkSpecific(point: GraphKnowledgePoint) {
  const area = getAreaKey(point);

  if (area === "foundation" || area === "physical") {
    return flow(
      "network",
      point,
      ["分层封装", "Layered encapsulation"],
      ["把应用数据逐层封装成 TCP/UDP、IP、以太网帧和物理信号。", "Wrap application data into TCP/UDP, IP, Ethernet frame, and physical signal."],
      [
        ["app", "应用数据", "Application data", "HTTP/DNS/RPC 载荷", "HTTP / DNS / RPC payload", "client"],
        ["transport", "传输层", "Transport", "端口、可靠性、窗口", "Ports, reliability, windows", "network"],
        ["internet", "网络层", "Internet", "IP、路由、TTL", "IP, routing, TTL", "network"],
        ["link", "链路/物理层", "Link / physical", "MAC、帧、信号", "MAC, frame, signal", "server"],
      ],
      {
        app: tx("待发送", "Ready"),
        transport: tx("等待端口", "Awaiting port"),
        internet: tx("等待目的 IP", "Awaiting destination IP"),
        link: tx("链路空闲", "Link idle"),
      },
      [
        ["封装应用数据", "Wrap payload", `准备 ${point.zh}`, `Prepare ${point.en}`, "app", "transport", "payload", "payload", "应用层生成业务载荷并交给传输层。", "The application layer creates payload and passes it to transport.", "先看业务协议和目标端口。", "Start from application protocol and destination port.", { app: tx("载荷就绪", "Payload ready"), transport: tx("添加端口", "Adding ports") }],
        ["添加寻址信息", "Add addressing", "写入端口和 IP", "Add port and IP", "transport", "internet", "src/dst + TTL", "src/dst + TTL", "传输层和网络层补上端到端地址信息。", "Transport and internet layers add end-to-end addressing.", "端口定位进程，IP 定位主机路径。", "Ports locate processes; IP locates host paths.", { transport: tx("段已形成", "Segment ready"), internet: tx("包已形成", "Packet ready") }, "teal"],
        ["进入链路", "Enter link", "封装以太网帧", "Wrap Ethernet frame", "internet", "link", "MAC + FCS", "MAC + FCS", "链路层写入源 MAC、目的 MAC 和校验信息。", "The link layer adds source MAC, destination MAC, and checksum.", "抓包排障时按层拆开字段。", "Packet analysis follows these layers.", { internet: tx("交给下一跳", "Next hop chosen"), link: tx("正在传输", "Transmitting") }, "success"],
      ],
      [["分层职责", "Layer responsibility"], ["封装字段", "Header fields"], ["抓包层次", "Packet layers"]],
    );
  }

  if (area === "data-link") {
    return flow(
      "network",
      point,
      ["二层投递", "Layer-2 delivery"],
      ["模拟主机发帧、交换机学习 MAC、VLAN 隔离和目标主机接收。", "Simulate frame send, switch MAC learning, VLAN isolation, and target receive."],
      [
        ["hostA", "主机 A", "Host A", "构造以太网帧", "Builds Ethernet frame", "client"],
        ["table", "ARP/MAC 表", "ARP / MAC table", "保存 IP-MAC 与端口映射", "Stores IP-MAC and port mappings", "data"],
        ["switch", "交换机/VLAN", "Switch / VLAN", "按 MAC 与 VLAN 转发", "Forwards by MAC and VLAN", "network"],
        ["hostB", "主机 B/网关", "Host B / gateway", "接收帧并解封装", "Receives and unwraps frame", "server"],
      ],
      {
        hostA: tx("准备发送帧", "Frame ready"),
        table: tx("表项待查", "Lookup pending"),
        switch: tx("等待入端口", "Awaiting ingress"),
        hostB: tx("等待帧", "Awaiting frame"),
      },
      [
        ["查询映射", "Lookup mapping", `处理 ${point.zh}`, `Handle ${point.en}`, "hostA", "table", "ARP/MAC", "ARP / MAC", "主机先确认目标 MAC 或网关 MAC。", "The host resolves target MAC or gateway MAC.", "二层转发依赖正确的 MAC 和 VLAN 上下文。", "Layer-2 forwarding relies on MAC and VLAN context.", { hostA: tx("查询中", "Looking up"), table: tx("命中/学习", "Hit / learned") }],
        ["交换机转发", "Switch forwarding", "进入交换机", "Enter switch", "table", "switch", "VLAN + MAC", "VLAN + MAC", "交换机学习源 MAC，再按目的 MAC 与 VLAN 选择出口。", "The switch learns source MAC and chooses egress by destination MAC and VLAN.", "未知单播会在广播域内泛洪。", "Unknown unicast floods inside the broadcast domain.", { table: tx("表项更新", "Entry updated"), switch: tx("选择出口", "Egress chosen") }, "teal"],
        ["目标接收", "Target receive", "投递帧", "Deliver frame", "switch", "hostB", "Ethernet Frame", "Ethernet frame", "目标主机校验帧并把载荷交给 IP 或 ARP。", "The target validates the frame and passes payload to IP or ARP.", "VLAN、MAC 表和 ARP 缓存是二层排障主线。", "VLAN, MAC table, and ARP cache drive L2 debugging.", { switch: tx("已转发", "Forwarded"), hostB: tx("已接收", "Received") }, "success"],
      ],
      [["MAC 表", "MAC table"], ["ARP 缓存", "ARP cache"], ["VLAN 边界", "VLAN boundary"]],
    );
  }

  if (area === "network") {
    return flow(
      "network",
      point,
      ["三层路由", "Layer-3 routing"],
      ["模拟主机选择网关、路由器查表、NAT/ICMP 辅助和目标网络返回。", "Simulate gateway selection, router lookup, NAT/ICMP support, and target-network return."],
      [
        ["host", "源主机", "Source host", "生成 IP 包", "Builds IP packet", "client"],
        ["gateway", "默认网关", "Default gateway", "接收跨网段流量", "Receives cross-subnet traffic", "network"],
        ["router", "路由表/NAT", "Route table / NAT", "最长前缀匹配与地址转换", "Longest-prefix match and translation", "network"],
        ["target", "目标网络", "Target network", "接收或返回 ICMP", "Receives or returns ICMP", "server"],
      ],
      {
        host: tx("目标 IP 已知", "Destination IP known"),
        gateway: tx("等待下一跳", "Awaiting next hop"),
        router: tx("路由表就绪", "Route table ready"),
        target: tx("等待分组", "Awaiting packet"),
      },
      [
        ["选择网关", "Choose gateway", `发送 ${point.zh}`, `Send ${point.en}`, "host", "gateway", "dst IP", "dst IP", "源主机根据掩码判断同网段或走默认网关。", "The source host uses mask to choose local delivery or default gateway.", "跨网段时二层目的 MAC 指向网关。", "Cross-subnet delivery uses gateway MAC at layer 2.", { host: tx("包已发出", "Packet sent"), gateway: tx("收到分组", "Packet received") }],
        ["查路由表", "Lookup route", "最长前缀匹配", "Longest-prefix match", "gateway", "router", "route + TTL", "route + TTL", "路由器递减 TTL，按最长前缀匹配选择下一跳。", "The router decrements TTL and selects next hop by longest-prefix match.", "路由表、回程路由和策略路由决定可达性。", "Route table, return route, and policy route define reachability.", { gateway: tx("交给路由", "Routing"), router: tx("下一跳确定", "Next hop chosen") }, "teal"],
        ["到达目标", "Reach target", "转发到目标网段", "Forward to target subnet", "router", "target", "IP packet", "IP packet", "分组到达目标网段，目标或中间设备可返回 ICMP 信号。", "The packet reaches target subnet; target or middlebox can return ICMP signals.", "ping、traceroute 和路由表能把路径拆清楚。", "ping, traceroute, and route tables reveal the path.", { router: tx("已转发", "Forwarded"), target: tx("已到达", "Reached") }, "success"],
      ],
      [["最长前缀匹配", "Longest-prefix match"], ["TTL/ICMP", "TTL / ICMP"], ["回程路由", "Return route"]],
    );
  }

  if (area === "transport") {
    return flow(
      "network",
      point,
      ["传输控制", "Transport control"],
      ["模拟端口、连接状态、发送窗口、确认与重传如何共同保证端到端传输。", "Simulate ports, connection state, send window, ACK, and retransmission for end-to-end delivery."],
      [
        ["sender", "发送端", "Sender", "维护 seq、cwnd、rwnd", "Maintains seq, cwnd, rwnd", "client"],
        ["window", "发送窗口", "Send window", "限制在途字节", "Limits in-flight bytes", "data"],
        ["wire", "网络链路", "Network path", "可能丢包、乱序、拥塞", "Can drop, reorder, congest", "network"],
        ["receiver", "接收端", "Receiver", "确认序列与接收窗口", "ACKs sequence and receive window", "server"],
      ],
      {
        sender: tx("连接已建立", "Connected"),
        window: tx("窗口可用", "Window open"),
        wire: tx("链路可用", "Path available"),
        receiver: tx("等待数据", "Awaiting data"),
      },
      [
        ["发送段", "Send segment", `执行 ${point.zh}`, `Run ${point.en}`, "sender", "window", "seq + len", "seq + len", "发送端把数据切成段，并受发送窗口限制。", "The sender splits data into segments under the send-window limit.", "窗口大小决定在途数据量。", "Window size controls in-flight data.", { sender: tx("发送中", "Sending"), window: tx("占用窗口", "Window occupied") }],
        ["穿过链路", "Cross path", "传输 TCP/UDP 段", "Transmit segment", "window", "wire", "segment", "segment", "网络链路可能带来延迟、丢包、乱序或拥塞。", "The path can introduce latency, loss, reordering, or congestion.", "重传、流控和拥塞控制都围绕链路反馈调整。", "Retransmission, flow control, and congestion control react to path feedback.", { window: tx("等待 ACK", "Awaiting ACK"), wire: tx("传输中", "In flight") }, "teal"],
        ["确认反馈", "ACK feedback", "返回 ACK/window", "Return ACK/window", "receiver", "sender", "ACK + rwnd", "ACK + rwnd", "接收端确认序列号并通告接收窗口。", "The receiver acknowledges sequence number and advertises receive window.", "抓包时重点看 seq、ack、window、RTO 和重复 ACK。", "Packet analysis focuses on seq, ack, window, RTO, and duplicate ACKs.", { receiver: tx("已确认", "Acknowledged"), sender: tx("窗口滑动", "Window slid"), window: tx("释放空间", "Space freed") }, "success"],
      ],
      [["seq/ack", "seq / ack"], ["发送窗口", "Send window"], ["重传信号", "Retransmission signals"]],
    );
  }

  if (area === "application") {
    return flow(
      "network",
      point,
      ["应用请求", "Application request"],
      ["模拟浏览器或服务构造请求、连接复用、协议帧和响应返回。", "Simulate request construction, connection reuse, protocol frames, and response return."],
      [
        ["client", "客户端", "Client", "构造 URL/Header/Body", "Builds URL, headers, body", "client"],
        ["conn", "连接/会话", "Connection / session", "TCP、TLS、HTTP/2、QUIC", "TCP, TLS, HTTP/2, QUIC", "network"],
        ["server", "应用服务", "Application server", "解析协议并执行业务", "Parses protocol and runs logic", "server"],
        ["response", "响应/缓存", "Response / cache", "状态码、Header、Body", "Status, headers, body", "cache"],
      ],
      {
        client: tx("准备请求", "Request ready"),
        conn: tx("连接待复用", "Connection reusable"),
        server: tx("等待请求", "Awaiting request"),
        response: tx("响应待生成", "Response pending"),
      },
      [
        ["构造请求", "Build request", `发起 ${point.zh}`, `Start ${point.en}`, "client", "conn", "method/path/header", "method / path / headers", "客户端填入方法、路径、Header、Body 或 RPC 字段。", "The client fills method, path, headers, body, or RPC fields.", "应用协议字段直接影响服务端处理分支。", "Application fields drive server branches.", { client: tx("请求已构造", "Request built"), conn: tx("准备发送", "Ready to send") }],
        ["协议传输", "Protocol transfer", "发送协议帧", "Send protocol frames", "conn", "server", "frame/request", "frame / request", "连接承载 HTTP、gRPC、WebSocket 或 QUIC 帧。", "The connection carries HTTP, gRPC, WebSocket, or QUIC frames.", "多路复用、长连接和序列化格式影响吞吐与延迟。", "Multiplexing, long connections, and serialization affect throughput and latency.", { conn: tx("帧传输中", "Frames in flight"), server: tx("解析中", "Parsing") }, "teal"],
        ["返回响应", "Return response", "生成状态码和响应体", "Create status and body", "server", "response", "status + body", "status + body", "服务端返回状态码、响应头和响应体，客户端再渲染或反序列化。", "The server returns status, headers, and body for client rendering or deserialization.", "排查时对照 DNS、连接、TLS、状态码和业务日志。", "Debug with DNS, connection, TLS, status code, and business logs.", { server: tx("响应完成", "Response ready"), response: tx("可交付", "Deliverable") }, "success"],
      ],
      [["协议字段", "Protocol fields"], ["连接复用", "Connection reuse"], ["状态码/帧", "Status / frames"]],
    );
  }

  if (area === "security") {
    return flow(
      "network",
      point,
      ["安全校验", "Security verification"],
      ["模拟客户端握手、证书链、策略规则和安全连接建立。", "Simulate client handshake, certificate chain, policy rules, and secure connection establishment."],
      [
        ["client", "客户端", "Client", "发起安全请求", "Starts secure request", "client"],
        ["policy", "证书/规则", "Certificate / rules", "CA、SAN、防火墙规则", "CA, SAN, firewall rules", "security"],
        ["gateway", "安全网关", "Security gateway", "放行、拒绝或转发", "Allows, denies, or forwards", "network"],
        ["server", "目标服务", "Target service", "建立受保护会话", "Establishes protected session", "server"],
      ],
      {
        client: tx("等待校验", "Awaiting verification"),
        policy: tx("规则已加载", "Rules loaded"),
        gateway: tx("检查流量", "Inspecting traffic"),
        server: tx("等待安全连接", "Awaiting secure session"),
      },
      [
        ["发起校验", "Start verification", `检查 ${point.zh}`, `Check ${point.en}`, "client", "policy", "SNI/cert/5-tuple", "SNI / cert / 5-tuple", "客户端带着域名、证书信息或五元组进入校验流程。", "The client enters verification with domain, certificate info, or five-tuple.", "安全问题先看身份、加密和规则命中。", "Security debugging starts from identity, encryption, and matched rule.", { client: tx("等待结果", "Waiting"), policy: tx("校验中", "Verifying") }],
        ["匹配策略", "Match policy", "执行规则", "Apply rules", "policy", "gateway", "allow/deny", "allow / deny", "证书链、域名、端口、防火墙或安全组完成策略判断。", "Certificate chain, domain, port, firewall, or security group completes policy decision.", "规则顺序和证书链是常见定位点。", "Rule order and certificate chain are common debug points.", { policy: tx("策略命中", "Policy matched"), gateway: tx("已判定", "Decision made") }, "teal"],
        ["建立安全通道", "Open secure path", "放行受保护流量", "Allow protected traffic", "gateway", "server", "secure traffic", "secure traffic", "安全检查通过后，流量进入目标服务并保持加密或受控状态。", "After verification, traffic reaches target service with encryption or control.", "最终状态要能从证书、抓包、规则日志三处验证。", "Final state can be verified through certificate, packet trace, and rule logs.", { gateway: tx("已放行", "Allowed"), server: tx("安全连接", "Secure session") }, "success"],
      ],
      [["证书链", "Certificate chain"], ["规则命中", "Rule match"], ["受保护会话", "Protected session"]],
    );
  }

  return flow(
    "network",
    point,
    ["性能路径", "Performance path"],
    ["模拟请求经过边缘节点、负载均衡、健康检查和观测指标。", "Simulate request through edge node, load balancer, health checks, and metrics."],
    [
      ["client", "客户端", "Client", "产生访问流量", "Generates traffic", "client"],
      ["edge", "CDN/边缘", "CDN / edge", "缓存和就近接入", "Caching and nearby access", "cache"],
      ["lb", "负载均衡", "Load balancer", "分发到健康实例", "Distributes to healthy instances", "network"],
      ["metrics", "指标/日志", "Metrics / logs", "记录延迟、命中率、错误率", "Records latency, hit ratio, error rate", "data"],
    ],
    {
      client: tx("请求待发", "Request ready"),
      edge: tx("缓存待查", "Cache lookup pending"),
      lb: tx("后端池健康", "Backend pool healthy"),
      metrics: tx("采样中", "Sampling"),
    },
    [
      ["进入边缘", "Enter edge", `访问 ${point.zh}`, `Access ${point.en}`, "client", "edge", "GET/resource", "GET / resource", "请求先进入边缘节点，判断缓存命中或回源。", "The request enters edge node and checks cache hit or origin fetch.", "命中率直接影响延迟和源站压力。", "Hit ratio directly affects latency and origin load.", { client: tx("等待响应", "Waiting"), edge: tx("检查缓存", "Checking cache") }],
      ["分发后端", "Distribute backend", "选择实例", "Select instance", "edge", "lb", "RR/Hash/Health", "RR / hash / health", "边缘或负载均衡按策略选择健康实例。", "Edge or load balancer selects a healthy instance by policy.", "健康检查和分发算法决定流量落点。", "Health checks and algorithm decide traffic target.", { edge: tx("回源/命中", "Hit / origin"), lb: tx("实例已选", "Instance chosen") }, "teal"],
      ["记录指标", "Record metrics", "写入观测信号", "Write signals", "lb", "metrics", "RTT/error/hit", "RTT / error / hit", "系统记录延迟、吞吐、错误率和链路日志。", "The system records latency, throughput, error rate, and request logs.", "性能优化依赖可量化的路径信号。", "Performance tuning relies on measurable path signals.", { lb: tx("请求完成", "Complete"), metrics: tx("指标更新", "Metrics updated") }, "success"],
    ],
    [["RTT/吞吐", "RTT / throughput"], ["缓存命中", "Cache hit"], ["健康状态", "Health state"]],
  );
}

function buildOsSpecific(point: GraphKnowledgePoint) {
  const area = getAreaKey(point);

  if (area === "process" || area === "scheduling" || area === "linux") {
    return flow(
      "os",
      point,
      ["进程调度", "Process scheduling"],
      ["模拟进程从系统调用进入内核，再在就绪队列、CPU 和阻塞队列之间流转。", "Simulate a process entering the kernel and moving across ready queue, CPU, and blocked queue."],
      [
        ["app", "用户进程", "User process", "发起 fork/exec/read/write", "Starts fork, exec, read, write", "client"],
        ["ready", "就绪队列", "Ready queue", "等待 CPU 时间片", "Waits for CPU slice", "kernel"],
        ["cpu", "CPU/调度器", "CPU / scheduler", "执行上下文切换", "Runs context switch", "cpu"],
        ["blocked", "阻塞/唤醒队列", "Blocked / wake queue", "等待 I/O、锁或信号", "Waits for I/O, lock, or signal", "data"],
      ],
      {
        app: tx("用户态运行", "Running in user mode"),
        ready: tx("队列可入", "Queue accepts task"),
        cpu: tx("时间片空闲", "Time slice free"),
        blocked: tx("等待事件", "Awaiting events"),
      },
      [
        ["进入内核", "Enter kernel", `触发 ${point.zh}`, `Trigger ${point.en}`, "app", "ready", "syscall/trap", "syscall / trap", "用户进程通过系统调用、中断或信号进入内核。", "The process enters kernel through syscall, interrupt, or signal.", "入口决定它进入调度、文件、网络或内存子系统。", "The entry decides scheduling, file, network, or memory subsystem.", { app: tx("内核态", "Kernel mode"), ready: tx("入队等待", "Queued") }],
        ["获得 CPU", "Get CPU", "调度时间片", "Schedule slice", "ready", "cpu", "context switch", "context switch", "调度器选择任务并切换寄存器、栈和页表上下文。", "The scheduler selects a task and switches registers, stack, and page-table context.", "上下文切换成本来自保存与恢复执行现场。", "Context-switch cost comes from saving and restoring execution state.", { ready: tx("出队", "Dequeued"), cpu: tx("正在运行", "Running") }, "teal"],
        ["阻塞或完成", "Block or finish", "等待事件/返回用户态", "Wait or return", "cpu", "blocked", "I/O wait / wake", "I/O wait / wake", "任务可能因 I/O、锁、sleep 进入等待，也可能返回用户态。", "The task may wait for I/O, lock, sleep, or return to user mode.", "top、ps、strace、perf 能把状态和耗时串起来。", "top, ps, strace, and perf connect state with latency.", { cpu: tx("时间片结束", "Slice ended"), blocked: tx("等待唤醒", "Waiting wakeup") }, "success"],
      ],
      [["进程状态", "Process state"], ["上下文切换", "Context switch"], ["等待队列", "Wait queues"]],
    );
  }

  if (area === "concurrency") {
    return flow(
      "os",
      point,
      ["并发同步", "Concurrency synchronization"],
      ["模拟线程竞争共享资源、获取锁、等待条件和释放唤醒。", "Simulate threads competing for shared resource, acquiring locks, waiting conditions, and waking up."],
      [
        ["threadA", "线程 A", "Thread A", "进入临界区", "Enters critical section", "client"],
        ["lock", "锁/信号量", "Lock / semaphore", "保护共享资源", "Protects shared resource", "security"],
        ["resource", "共享资源", "Shared resource", "数据、队列或文件", "Data, queue, or file", "data"],
        ["threadB", "线程 B", "Thread B", "等待或被唤醒", "Waits or wakes", "server"],
      ],
      {
        threadA: tx("准备进入", "Ready to enter"),
        lock: tx("未持有", "Free"),
        resource: tx("数据稳定", "Data stable"),
        threadB: tx("等待机会", "Awaiting chance"),
      },
      [
        ["申请锁", "Acquire lock", `执行 ${point.zh}`, `Run ${point.en}`, "threadA", "lock", "lock()/wait()", "lock() / wait()", "线程进入临界区前申请锁或等待信号。", "The thread acquires lock or waits for signal before critical section.", "同步对象决定竞争边界。", "The synchronization object defines the contention boundary.", { threadA: tx("申请中", "Acquiring"), lock: tx("已持有", "Held") }],
        ["修改资源", "Change resource", "更新共享数据", "Update shared data", "lock", "resource", "critical section", "critical section", "持锁线程修改共享资源，其他线程等待。", "The lock holder modifies shared resource while others wait.", "竞态、死锁和优先级反转都发生在这里。", "Race, deadlock, and priority inversion happen here.", { lock: tx("保护中", "Protecting"), resource: tx("更新中", "Updating"), threadB: tx("阻塞等待", "Blocked") }, "teal"],
        ["释放唤醒", "Release and wake", "unlock()/notify()", "unlock() / notify()", "resource", "threadB", "wake", "wake", "资源更新完成后释放锁并唤醒等待线程。", "After update, the lock releases and wakes waiting threads.", "排查时看锁持有者、等待链和临界区耗时。", "Debug lock holder, wait chain, and critical-section time.", { lock: tx("已释放", "Released"), resource: tx("数据一致", "Consistent"), threadB: tx("被唤醒", "Woken") }, "success"],
      ],
      [["临界区", "Critical section"], ["等待链", "Wait chain"], ["唤醒信号", "Wake signal"]],
    );
  }

  if (area === "memory") {
    return flow(
      "os",
      point,
      ["内存映射", "Memory mapping"],
      ["模拟虚拟地址经过页表、TLB、物理页和磁盘换入换出。", "Simulate virtual address through page table, TLB, physical page, and disk swap."],
      [
        ["process", "进程地址空间", "Process address space", "栈、堆、mmap 区", "Stack, heap, mmap", "client"],
        ["tlb", "TLB/页表", "TLB / page table", "虚拟页到物理页映射", "Virtual-to-physical mapping", "kernel"],
        ["page", "物理页/页缓存", "Physical page / page cache", "承载真实数据", "Holds real data", "storage"],
        ["disk", "磁盘/Swap", "Disk / swap", "缺页换入与回写", "Page-in and writeback", "database"],
      ],
      {
        process: tx("访问虚拟地址", "Accessing virtual address"),
        tlb: tx("等待命中", "Awaiting hit"),
        page: tx("页框可用", "Frame available"),
        disk: tx("后备存储", "Backing store"),
      },
      [
        ["访问地址", "Access address", `读取 ${point.zh}`, `Read ${point.en}`, "process", "tlb", "virtual address", "virtual address", "进程访问虚拟地址，CPU 先查 TLB，再查页表。", "The process accesses virtual address; CPU checks TLB then page table.", "虚拟内存让每个进程看到独立地址空间。", "Virtual memory gives each process its own address space.", { process: tx("发起访问", "Access started"), tlb: tx("查找映射", "Looking up") }],
        ["定位物理页", "Locate page", "完成地址翻译", "Translate address", "tlb", "page", "PFN + offset", "PFN + offset", "页表命中后得到物理页框和偏移。", "On page-table hit, the physical frame and offset are found.", "页表、TLB 和页大小影响访问开销。", "Page table, TLB, and page size affect access cost.", { tlb: tx("映射命中", "Mapping hit"), page: tx("页已命中", "Page hit") }, "teal"],
        ["处理缺页", "Handle page fault", "换入/回写", "Page in / writeback", "disk", "page", "page fault", "page fault", "缺页时内核从磁盘或 swap 换入页面，必要时回写脏页。", "On page fault, the kernel pages data in from disk or swap and writes back dirty pages when needed.", "vmstat、dmesg 和 page fault 指标能定位内存压力。", "vmstat, dmesg, and page-fault metrics reveal memory pressure.", { disk: tx("数据换入", "Paged in"), page: tx("页可访问", "Accessible") }, "success"],
      ],
      [["页表", "Page table"], ["TLB 命中", "TLB hit"], ["缺页中断", "Page fault"]],
    );
  }

  return flow(
    "os",
    point,
    ["I/O 路径", "I/O path"],
    ["模拟应用请求进入 VFS、文件描述符、页缓存和设备驱动。", "Simulate app request through VFS, file descriptor, page cache, and device driver."],
    [
      ["app", "应用", "App", "read/write/socket", "read / write / socket", "client"],
      ["vfs", "VFS/文件描述符", "VFS / file descriptor", "统一文件、管道、Socket", "Unifies files, pipes, sockets", "kernel"],
      ["cache", "页缓存/缓冲区", "Page cache / buffer", "缓存读写数据", "Caches read-write data", "cache"],
      ["device", "磁盘/网卡", "Disk / NIC", "真实设备 I/O", "Real device I/O", "storage"],
    ],
    {
      app: tx("等待 I/O", "Awaiting I/O"),
      vfs: tx("描述符已打开", "FD open"),
      cache: tx("缓存待查", "Cache pending"),
      device: tx("设备可用", "Device ready"),
    },
    [
      ["发起 I/O", "Start I/O", `执行 ${point.zh}`, `Run ${point.en}`, "app", "vfs", "fd + op", "fd + op", "应用通过文件描述符发起文件、管道或网络 I/O。", "The app starts file, pipe, or network I/O through file descriptor.", "Linux 把很多资源抽象成文件描述符。", "Linux exposes many resources through file descriptors.", { app: tx("等待内核", "Awaiting kernel"), vfs: tx("解析对象", "Resolving object") }],
      ["访问缓存", "Access cache", "查页缓存/缓冲区", "Check page cache", "vfs", "cache", "cache hit/miss", "cache hit / miss", "内核先检查页缓存，命中时减少设备访问。", "The kernel checks page cache first; hits reduce device access.", "缓存命中率影响 I/O 延迟。", "Cache hit ratio affects I/O latency.", { vfs: tx("路径确定", "Path resolved"), cache: tx("命中/缺失", "Hit / miss") }, "teal"],
      ["驱动设备", "Drive device", "提交设备请求", "Submit device request", "cache", "device", "bio/packet", "bio / packet", "缓存缺失或写回时，内核把请求交给磁盘、网卡或其他设备。", "On cache miss or writeback, the kernel sends request to disk, NIC, or another device.", "iostat、lsof、ss、strace 能观察 I/O 状态。", "iostat, lsof, ss, and strace reveal I/O state.", { cache: tx("数据就绪", "Data ready"), device: tx("请求完成", "Request complete") }, "success"],
    ],
    [["文件描述符", "File descriptor"], ["页缓存", "Page cache"], ["设备等待", "Device wait"]],
  );
}

function buildAlgorithmSpecific(point: GraphKnowledgePoint) {
  const area = getAreaKey(point);

  if (point.id === "array") {
    return flow(
      "algorithm",
      point,
      ["索引与搬移", "Index and shift"],
      ["用连续单元、下标寻址和插入搬移解释数组的访问与更新成本。", "Use contiguous cells, indexed addressing, and insertion shifts to explain array access and update cost."],
      [
        ["address", "地址公式", "Address formula", "base + i * size", "base + i * size", "cpu"],
        ["array", "连续单元", "Contiguous cells", "a[0] 到 a[n-1]", "a[0] through a[n-1]", "data"],
        ["cursor", "目标下标", "Target index", "访问或插入位置", "Access or insertion index", "tool"],
        ["cost", "成本结论", "Cost result", "随机访问或搬移成本", "Random access or shift cost", "server"],
      ],
      {
        address: tx("base=1000, size=4", "base=1000, size=4"),
        array: tx("[4, 8, 15, 16, 23]", "[4, 8, 15, 16, 23]"),
        cursor: tx("等待下标", "Awaiting index"),
        cost: tx("等待分析", "Awaiting analysis"),
      },
      [
        ["建立连续存储", "Build contiguous storage", "载入数组", "Load array", "address", "array", "连续地址", "contiguous addresses", "元素按下标顺序放入连续单元，长度和元素大小决定可访问范围。", "Elements occupy contiguous cells by index; length and element size define valid access range.", "数组的核心模型是下标映射到固定宽度单元。", "The core model maps an index to a fixed-width cell.", { address: tx("公式就绪", "Formula ready"), array: tx("单元已编号", "Cells indexed") }],
        ["随机访问 a[2]", "Random access a[2]", "计算地址", "Compute address", "array", "cursor", "base + 2 * size", "base + 2 * size", "访问 a[2] 时直接用下标计算目标地址并读取该单元。", "Accessing a[2] computes the target address directly and reads that cell.", "下标访问只依赖公式和下标，所以按 O(1) 分析。", "Index access depends on formula and index only, so it is analyzed as O(1).", { cursor: tx("命中 a[2]=15", "Hit a[2]=15"), cost: tx("随机访问 O(1)", "Random access O(1)") }, "teal"],
        ["插入 99 到 i=2", "Insert 99 at i=2", "右移尾部", "Shift suffix right", "cursor", "array", "shift a[2..4]", "shift a[2..4]", "在中间插入时，后缀元素从右向左移动一格，为新元素腾出位置。", "Middle insertion shifts suffix elements one slot right from the end to make room.", "移动元素数量随后缀长度增长，所以中间插入按 O(n) 分析。", "Moved elements grow with suffix length, so middle insertion is analyzed as O(n).", { array: tx("[4, 8, 99, 15, 16, 23]", "[4, 8, 99, 15, 16, 23]"), cost: tx("插入搬移 O(n)", "Insertion shift O(n)") }, "warning"],
        ["检查边界与容量", "Check bounds and capacity", "验证结果", "Verify result", "array", "cost", "0 <= i < length", "0 <= i < length", "完成操作后检查下标范围、长度变化和容量是否足够。", "After the operation, check index range, length change, and capacity.", "数组题的正确性通常来自明确边界和循环不变量。", "Array correctness usually comes from explicit bounds and loop invariants.", { cursor: tx("边界已检查", "Bounds checked"), cost: tx("模型稳定", "Model stable") }, "success"],
      ],
      [["随机访问 O(1)", "Random access O(1)"], ["插入删除 O(n)", "Insert/delete O(n)"], ["边界与容量", "Bounds and capacity"]],
    );
  }

  if (point.id === "linked-list") {
    return flow(
      "algorithm",
      point,
      ["节点与指针重连", "Nodes and pointer rewiring"],
      ["用 head、next、prev/curr 游标和引用重连解释链表访问、插入和反转成本。", "Use head, next, prev/curr cursors, and reference rewiring to explain linked-list access, insertion, and reversal cost."],
      [
        ["head", "头指针", "Head pointer", "链表入口", "List entry", "tool"],
        ["nodes", "节点链", "Node chain", "value + next", "value + next", "data"],
        ["cursor", "游标", "Cursor", "prev / curr / next", "prev / curr / next", "cpu"],
        ["cost", "成本结论", "Cost result", "遍历或重连成本", "Traversal or rewiring cost", "server"],
      ],
      {
        head: tx("head -> A", "head -> A"),
        nodes: tx("A -> B -> C -> D", "A -> B -> C -> D"),
        cursor: tx("等待遍历", "Awaiting traversal"),
        cost: tx("等待分析", "Awaiting analysis"),
      },
      [
        ["建立节点链", "Build node chain", "载入链表", "Load list", "head", "nodes", "head + next", "head + next", "链表从 head 进入，每个节点用 next 指向后继节点。", "The list enters from head; each node points to its successor through next.", "结构顺序由引用决定，节点在内存中可以分散。", "Reference links define order; nodes can live apart in memory.", { head: tx("入口确定", "Entry fixed"), nodes: tx("next 链就绪", "next chain ready") }],
        ["顺序访问 C", "Sequential access to C", "沿 next 前进", "Follow next", "nodes", "cursor", "A -> B -> C", "A -> B -> C", "访问目标节点需要从 head 沿 next 逐个移动游标。", "Accessing a target node moves the cursor from head through next links.", "链表随机访问依赖遍历步数，所以按 O(n) 分析。", "Random access depends on traversal steps, so it is analyzed as O(n).", { cursor: tx("curr = C", "curr = C"), cost: tx("访问 O(n)", "Access O(n)") }, "teal"],
        ["在 B 后插入 X", "Insert X after B", "重连两条引用", "Rewrite two links", "cursor", "nodes", "X.next = C; B.next = X", "X.next = C; B.next = X", "已知前驱 B 时，先让新节点指向 C，再让 B 指向新节点。", "When predecessor B is known, point the new node to C, then point B to the new node.", "已定位位置附近的插入主要成本是常数次引用更新。", "Insertion near a known position mainly costs constant reference updates.", { nodes: tx("A -> B -> X -> C -> D", "A -> B -> X -> C -> D"), cost: tx("重连 O(1)", "Rewire O(1)") }, "warning"],
        ["反转前三个节点", "Reverse first three nodes", "prev/curr/next 推进", "Advance prev/curr/next", "nodes", "cost", "A <- B <- X", "A <- B <- X", "反转时先保存 next，再把 curr.next 指向 prev，最后同步移动 prev 与 curr。", "Reversal saves next, points curr.next to prev, then advances prev and curr.", "指针题的关键是不丢失剩余链和正确更新 head。", "Pointer problems hinge on preserving the remaining chain and updating head.", { head: tx("head -> X", "head -> X"), cursor: tx("prev=X curr=C", "prev=X curr=C"), cost: tx("反转 O(n)", "Reverse O(n)") }, "success"],
      ],
      [["访问 O(n)", "Access O(n)"], ["已定位插入 O(1)", "Known-position insert O(1)"], ["head/tail 边界", "head/tail boundaries"]],
    );
  }

  if (point.id === "stack") {
    return flow(
      "algorithm",
      point,
      ["LIFO 栈顶演算", "LIFO top trace"],
      ["用 top 指针、push、peek、pop 和空栈边界解释栈的后进先出语义。", "Use the top pointer, push, peek, pop, and empty-stack boundary to explain LIFO semantics."],
      [
        ["top", "栈顶指针", "Top pointer", "唯一操作入口", "Only operation end", "cpu"],
        ["stack", "栈内容", "Stack contents", "bottom 到 top", "bottom to top", "data"],
        ["operation", "操作", "Operation", "push / peek / pop", "push / peek / pop", "tool"],
        ["result", "返回与边界", "Result and boundary", "返回值或错误", "Value or error", "server"],
      ],
      {
        top: tx("top = -1", "top = -1"),
        stack: tx("空栈", "Empty stack"),
        operation: tx("等待操作", "Awaiting operation"),
        result: tx("等待返回", "Awaiting result"),
      },
      [
        ["建立空栈", "Start empty stack", "初始化", "Initialize", "top", "stack", "top=-1", "top=-1", "空栈时 top 指向栈外，任何读取或弹出都要先判断 isEmpty。", "On an empty stack, top points outside the stack; reads and pops check isEmpty first.", "栈的边界从空栈判断开始。", "Stack boundaries start with the empty check.", { top: tx("top=-1", "top=-1"), stack: tx("[]", "[]") }],
        ["push 7、12、18", "push 7, 12, 18", "压入元素", "Push values", "operation", "stack", "push(x)", "push(x)", "push 把元素写入 top 上方的位置，再把 top 移到新元素。", "Push writes the value above current top, then moves top to the new value.", "最后压入的元素成为下一次读取或弹出的对象。", "The most recently pushed value becomes the next value to read or pop.", { top: tx("top=18", "top=18"), stack: tx("[7, 12, 18]", "[7, 12, 18]"), operation: tx("push 完成", "push complete") }, "teal"],
        ["peek 栈顶", "Peek top", "读取 top", "Read top", "stack", "result", "peek()", "peek()", "peek 只读取 top 元素，栈内容和 top 位置保持不变。", "Peek only reads the top value; contents and top position stay unchanged.", "读取不改变结构，是调试栈状态的常用动作。", "A read leaves structure unchanged and helps inspect state.", { result: tx("返回 18", "Returns 18"), top: tx("top=18", "top=18") }, "warning"],
        ["pop 两次", "Pop twice", "弹出栈顶", "Pop top", "stack", "result", "pop(), pop()", "pop(), pop()", "pop 先返回 top 元素，再把 top 移回下一个元素。连续两次弹出会先得到 18，再得到 12。", "Pop returns the top value, then moves top back to the next value. Two pops return 18 then 12.", "LIFO 通过 top 指针移动自然成立。", "LIFO follows from top-pointer movement.", { stack: tx("[7]", "[7]"), top: tx("top=7", "top=7"), result: tx("18, 12", "18, 12") }, "success"],
        ["检查空栈边界", "Check empty boundary", "继续 pop", "Continue pop", "top", "result", "isEmpty()", "isEmpty()", "继续弹出前先检查 isEmpty；空栈 pop 或 peek 应返回约定值或抛出受控错误。", "Before continuing to pop, check isEmpty; empty pop or peek returns a contract value or raises a controlled error.", "空栈、满栈和容量扩容是数组栈实现的关键测试。", "Empty stack, full stack, and capacity growth are key tests for array stacks.", { stack: tx("[]", "[]"), top: tx("top=-1", "top=-1"), result: tx("边界已处理", "Boundary handled") }, "danger"],
      ],
      [["LIFO", "LIFO"], ["push/pop O(1)", "push/pop O(1)"], ["空栈边界", "empty boundary"]],
    );
  }

  if (area === "tree" || area === "heap") {
    return flow(
      "algorithm",
      point,
      ["树形演算", "Tree trace"],
      ["用根节点、候选节点、辅助结构和输出路径展示树、堆或字典树的状态变化。", "Use root node, candidate node, helper structure, and output path to show tree, heap, or trie state changes."],
      [
        ["root", "根/堆顶", "Root / heap top", "当前入口节点", "Current entry node", "data"],
        ["candidate", "候选节点", "Candidate node", "左右子树或子节点", "Children or subtree", "cpu"],
        ["helper", "栈/队列/比较器", "Stack / queue / comparator", "维护遍历或堆序", "Maintains traversal or heap order", "tool"],
        ["result", "访问序列", "Visit order", "输出路径或答案", "Output path or answer", "server"],
      ],
      {
        root: tx("入口已确定", "Entry fixed"),
        candidate: tx("等待比较", "Awaiting compare"),
        helper: tx("辅助结构就绪", "Helper ready"),
        result: tx("结果为空", "Empty result"),
      },
      [
        ["定位入口", "Locate entry", `演示 ${point.zh}`, `Trace ${point.en}`, "root", "candidate", "node", "node", "从根节点或堆顶开始，确定第一个访问对象。", "Start from root or heap top and choose the first visited object.", "入口节点决定遍历方向或堆调整方向。", "Entry node decides traversal or heap-adjust direction.", { root: tx("已访问", "Visited"), candidate: tx("展开子节点", "Expanding children") }],
        ["维护结构", "Maintain structure", "入栈/入队/比较", "Push, queue, compare", "candidate", "helper", "push/pop/compare", "push / pop / compare", "算法用栈、队列或比较器维护下一步候选。", "The algorithm uses stack, queue, or comparator to maintain next candidates.", "树和堆的关键是保持顺序或遍历规则。", "Trees and heaps rely on order or traversal rules.", { candidate: tx("候选更新", "Candidates updated"), helper: tx("规则生效", "Rule applied") }, "teal"],
        ["输出路径", "Emit result", "记录访问结果", "Record visit", "helper", "result", "visit", "visit", "访问顺序、路径或堆顶结果进入输出。", "Visit order, path, or heap-top result enters output.", "边界样例包括空树、单节点和重复值。", "Boundary cases include empty tree, single node, and duplicates.", { helper: tx("本轮完成", "Round complete"), result: tx("序列更新", "Sequence updated") }, "success"],
      ],
      [["节点关系", "Node relation"], ["辅助结构", "Helper structure"], ["访问顺序", "Visit order"]],
    );
  }

  if (area === "graph" || area === "search") {
    return flow(
      "algorithm",
      point,
      ["图搜索", "Graph search"],
      ["用起点、邻接表、访问集合和结果路径展示 DFS、BFS、最短路或连通性。", "Use source, adjacency list, visited set, and result path to show DFS, BFS, shortest path, or connectivity."],
      [
        ["source", "起点", "Source", "搜索入口", "Search entry", "client"],
        ["frontier", "栈/队列/优先队列", "Stack / queue / priority queue", "保存待访问节点", "Stores frontier nodes", "cpu"],
        ["visited", "访问集合/距离表", "Visited set / distance table", "去重、记录距离", "Deduplicates and records distance", "data"],
        ["answer", "路径/连通分量", "Path / component", "输出搜索结果", "Outputs search result", "server"],
      ],
      {
        source: tx("起点已选", "Source chosen"),
        frontier: tx("frontier 初始化", "Frontier initialized"),
        visited: tx("visited 为空", "Visited empty"),
        answer: tx("等待结果", "Awaiting result"),
      },
      [
        ["加入起点", "Add source", `运行 ${point.zh}`, `Run ${point.en}`, "source", "frontier", "start", "start", "起点进入栈、队列或优先队列。", "The source enters stack, queue, or priority queue.", "搜索策略由 frontier 的取出规则决定。", "Search strategy is decided by frontier pop rule.", { source: tx("已入队", "Enqueued"), frontier: tx("待展开", "Pending expansion") }],
        ["展开邻居", "Expand neighbors", "扫描邻接表", "Scan adjacency list", "frontier", "visited", "neighbors", "neighbors", "算法取出节点，扫描邻接表并更新访问集合或距离。", "The algorithm pops a node, scans adjacency list, and updates visited set or distance.", "去重与松弛决定正确性和复杂度。", "Deduplication and relaxation define correctness and complexity.", { frontier: tx("弹出节点", "Node popped"), visited: tx("记录状态", "State recorded") }, "teal"],
        ["形成答案", "Build answer", "回溯路径/输出集合", "Backtrack path / output set", "visited", "answer", "path/component", "path / component", "搜索结束后输出路径、层序、连通分量或距离表。", "After search, output path, level order, component, or distance table.", "边权、环和不可达节点是图题重点。", "Weights, cycles, and unreachable nodes are key graph cases.", { visited: tx("遍历完成", "Traversal complete"), answer: tx("结果生成", "Answer generated") }, "success"],
      ],
      [["frontier", "frontier"], ["visited", "visited"], ["路径/距离", "Path / distance"]],
    );
  }

  if (area === "sorting") {
    return flow(
      "algorithm",
      point,
      ["排序过程", "Sorting process"],
      ["展示待排序数组、比较指针、分区/归并区间和已排序区域。", "Show input array, comparison pointers, partition/merge range, and sorted region."],
      [
        ["array", "待排序数组", "Input array", "样例元素", "Sample elements", "data"],
        ["pointers", "比较指针", "Comparison pointers", "i/j/mid/pivot", "i, j, mid, pivot", "cpu"],
        ["work", "分区/归并区间", "Partition / merge range", "临时数组或原地交换", "Temp array or in-place swap", "tool"],
        ["sorted", "已排序区域", "Sorted region", "最终顺序", "Final order", "server"],
      ],
      {
        array: tx("无序", "Unsorted"),
        pointers: tx("指针初始化", "Pointers initialized"),
        work: tx("区间待处理", "Range pending"),
        sorted: tx("为空", "Empty"),
      },
      [
        ["选择区间", "Choose range", `执行 ${point.zh}`, `Run ${point.en}`, "array", "pointers", "range", "range", "算法选择当前处理区间和比较指针。", "The algorithm selects current range and comparison pointers.", "区间边界决定递归、迭代或稳定性表现。", "Range boundary drives recursion, iteration, or stability.", { array: tx("区间锁定", "Range locked"), pointers: tx("开始比较", "Comparing") }],
        ["交换/归并", "Swap or merge", "移动元素", "Move elements", "pointers", "work", "compare + move", "compare + move", "比较结果触发交换、插入、计数或归并。", "Comparison triggers swap, insertion, counting, or merge.", "核心不变量是已处理区域保持有序。", "The invariant is that processed region stays ordered.", { pointers: tx("指针推进", "Pointers advanced"), work: tx("区间更新", "Range updated") }, "teal"],
        ["输出有序区", "Emit sorted region", "确认有序", "Confirm order", "work", "sorted", "sorted", "sorted", "当前区间收敛后并入已排序区域。", "After convergence, the range joins the sorted region.", "复杂度来自比较次数、移动次数和额外空间。", "Complexity comes from comparisons, moves, and extra space.", { work: tx("本轮完成", "Round complete"), sorted: tx("有序增长", "Sorted region grows") }, "success"],
      ],
      [["比较次数", "Comparisons"], ["移动次数", "Moves"], ["稳定性", "Stability"]],
    );
  }

  if (area === "algorithm" || area === "technique") {
    return flow(
      "algorithm",
      point,
      ["策略模板", "Technique template"],
      ["展示输入窗口、指针/状态、剪枝条件和答案更新。", "Show input window, pointer/state, pruning condition, and answer update."],
      [
        ["input", "输入序列/约束", "Input / constraints", "数组、字符串或搜索空间", "Array, string, or search space", "data"],
        ["state", "指针/窗口/递归栈", "Pointers / window / recursion stack", "维护当前选择", "Maintains current choice", "cpu"],
        ["guard", "约束/剪枝", "Constraint / pruning", "判断合法性", "Checks validity", "tool"],
        ["answer", "答案", "Answer", "最优值或组合", "Best value or combination", "server"],
      ],
      {
        input: tx("样例已载入", "Sample loaded"),
        state: tx("状态初始化", "State initialized"),
        guard: tx("等待判断", "Awaiting check"),
        answer: tx("等待更新", "Awaiting update"),
      },
      [
        ["建立状态", "Build state", `套用 ${point.zh}`, `Apply ${point.en}`, "input", "state", "state", "state", "把题目约束映射为指针、窗口、递归栈或候选集合。", "Map problem constraints to pointers, window, recursion stack, or candidates.", "题型识别后先定义状态含义。", "After recognizing pattern, define state meaning first.", { input: tx("约束明确", "Constraints clear"), state: tx("状态就绪", "State ready") }],
        ["检查转移", "Check transition", "推进并剪枝", "Advance and prune", "state", "guard", "condition", "condition", "每次推进都检查合法性、去重和剪枝条件。", "Every advance checks validity, deduplication, and pruning condition.", "剪枝强度决定搜索空间大小。", "Pruning strength decides search-space size.", { state: tx("候选推进", "Candidate advanced"), guard: tx("条件判定", "Condition checked") }, "teal"],
        ["更新答案", "Update answer", "记录最优/可行解", "Record best / feasible", "guard", "answer", "best/solution", "best / solution", "合法状态更新答案，随后继续下一轮。", "Valid state updates answer, then moves to next round.", "边界用例验证状态定义是否覆盖完整。", "Boundary cases verify state coverage.", { guard: tx("通过约束", "Passed"), answer: tx("已更新", "Updated") }, "success"],
      ],
      [["状态定义", "State definition"], ["剪枝条件", "Pruning"], ["答案更新", "Answer update"]],
    );
  }

  return flow(
    "algorithm",
    point,
    ["结构操作", "Structure operation"],
    ["展示输入元素进入数组、链表、栈、队列或哈希桶，并维护结构不变量。", "Show elements entering array, linked list, stack, queue, or hash bucket while maintaining invariant."],
    [
      ["input", "输入元素", "Input element", "待插入、删除或查询", "To insert, delete, or query", "data"],
      ["index", "索引/指针", "Index / pointer", "定位位置", "Locates position", "cpu"],
      ["structure", "目标结构", "Target structure", "数组、链表、栈、队列、哈希桶", "Array, list, stack, queue, hash bucket", "tool"],
      ["result", "返回结果", "Return result", "命中值或结构快照", "Hit value or structure snapshot", "server"],
    ],
    {
      input: tx("元素待处理", "Element pending"),
      index: tx("定位待开始", "Locate pending"),
      structure: tx("不变量稳定", "Invariant stable"),
      result: tx("等待返回", "Awaiting return"),
    },
    [
      ["定位位置", "Locate position", `操作 ${point.zh}`, `Operate ${point.en}`, "input", "index", "key/index", "key / index", "根据下标、指针或哈希值找到操作位置。", "Find operation position by index, pointer, or hash value.", "定位方式决定时间复杂度。", "Location method decides time complexity.", { input: tx("已读取", "Read"), index: tx("定位中", "Locating") }],
      ["修改结构", "Change structure", "插入/删除/查询", "Insert / delete / query", "index", "structure", "mutate", "mutate", "目标结构更新连接关系、桶链、栈顶或队首队尾。", "The structure updates links, bucket chain, top, or head/tail.", "关键是操作后仍满足结构不变量。", "The key is preserving invariant after operation.", { index: tx("位置确定", "Position fixed"), structure: tx("结构更新", "Structure updated") }, "teal"],
      ["返回快照", "Return snapshot", "输出结果", "Output result", "structure", "result", "value/state", "value / state", "操作结果返回，并可观察结构新状态。", "The operation returns result and exposes new structure state.", "用空结构、满结构、冲突和重复值验证边界。", "Validate with empty structure, full structure, conflicts, and duplicates.", { structure: tx("不变量恢复", "Invariant restored"), result: tx("结果就绪", "Result ready") }, "success"],
    ],
    [["定位方式", "Location"], ["结构不变量", "Invariant"], ["边界样例", "Boundary cases"]],
  );
}

function buildMysqlSpecific(point: GraphKnowledgePoint) {
  const area = getAreaKey(point);

  if (area === "index" || area === "engine" || area === "optimization" || area === "sql") {
    return flow(
      "mysql",
      point,
      ["SQL 执行计划", "SQL execution plan"],
      ["模拟 SQL 进入优化器，选择索引，访问 Buffer Pool 与数据行。", "Simulate SQL entering optimizer, choosing index, and accessing Buffer Pool and rows."],
      [
        ["client", "客户端 SQL", "Client SQL", "提交查询或更新", "Submits query or update", "client"],
        ["optimizer", "优化器/执行计划", "Optimizer / plan", "选择索引与 JOIN 顺序", "Chooses index and join order", "cpu"],
        ["index", "B+树/Buffer Pool", "B+ tree / Buffer Pool", "定位索引页和数据页", "Locates index and data pages", "database"],
        ["rows", "行记录/结果集", "Rows / result set", "返回或修改数据", "Returns or changes data", "server"],
      ],
      {
        client: tx("SQL 已到达", "SQL arrived"),
        optimizer: tx("等待解析", "Awaiting parse"),
        index: tx("页缓存待查", "Page cache pending"),
        rows: tx("结果待返回", "Result pending"),
      },
      [
        ["解析 SQL", "Parse SQL", `执行 ${point.zh}`, `Execute ${point.en}`, "client", "optimizer", "SQL AST", "SQL AST", "连接层把 SQL 交给解析器和优化器。", "The connection layer passes SQL to parser and optimizer.", "先看谓词、排序、分页和可用索引。", "Check predicates, order, pagination, and usable indexes.", { client: tx("等待结果", "Waiting"), optimizer: tx("分析中", "Analyzing") }],
        ["选择索引", "Choose index", "生成执行计划", "Build execution plan", "optimizer", "index", "EXPLAIN", "EXPLAIN", "优化器选择访问类型、索引、JOIN 顺序和扫描范围。", "The optimizer chooses access type, index, join order, and scan range.", "执行计划决定扫描行数、回表次数和锁范围。", "The plan decides scanned rows, back-to-table count, and lock range.", { optimizer: tx("计划完成", "Plan ready"), index: tx("开始访问页", "Accessing pages") }, "teal"],
        ["读取记录", "Read records", "访问索引页/数据页", "Access index and data pages", "index", "rows", "leaf/page/row", "leaf / page / row", "InnoDB 访问 Buffer Pool、B+树叶子页和行记录。", "InnoDB accesses Buffer Pool, B+ tree leaf pages, and row records.", "慢查询重点看扫描行数、临时表、排序和回表。", "Slow-query analysis focuses on scanned rows, temp table, filesort, and back-to-table.", { index: tx("页已命中", "Page hit"), rows: tx("结果返回", "Rows returned") }, "success"],
      ],
      [["EXPLAIN", "EXPLAIN"], ["扫描行数", "Rows scanned"], ["Buffer Pool", "Buffer Pool"]],
    );
  }

  if (area === "transaction" || area === "lock") {
    return flow(
      "mysql",
      point,
      ["事务与锁", "Transaction and lock"],
      ["模拟事务创建 ReadView、访问版本链、申请锁并提交。", "Simulate transaction creating ReadView, reading version chain, acquiring locks, and committing."],
      [
        ["txA", "事务 A", "Transaction A", "读写当前语句", "Reads or writes statement", "client"],
        ["readview", "ReadView/隔离级别", "ReadView / isolation", "判断可见版本", "Determines visible versions", "security"],
        ["version", "Undo 版本链/锁表", "Undo chain / lock table", "保存历史版本与锁等待", "Stores versions and lock waits", "database"],
        ["txB", "事务 B", "Transaction B", "并发读写", "Concurrent reads and writes", "server"],
      ],
      {
        txA: tx("事务已开启", "Transaction open"),
        readview: tx("视图待创建", "View pending"),
        version: tx("版本链存在", "Version chain exists"),
        txB: tx("并发中", "Concurrent"),
      },
      [
        ["创建视图", "Create view", `模拟 ${point.zh}`, `Simulate ${point.en}`, "txA", "readview", "trx_id set", "trx_id set", "事务按隔离级别创建或复用 ReadView。", "The transaction creates or reuses ReadView by isolation level.", "可见性规则决定读到哪个版本。", "Visibility rules decide which version is read.", { txA: tx("等待可见性", "Awaiting visibility"), readview: tx("视图生成", "View created") }],
        ["访问版本/锁", "Access versions and locks", "读取版本或申请锁", "Read version or acquire lock", "readview", "version", "undo/lock", "undo / lock", "InnoDB 根据 ReadView 找可见版本，写操作进入锁等待或持锁。", "InnoDB finds visible version by ReadView; writes wait for or hold locks.", "幻读、间隙锁和死锁都能在这里定位。", "Phantom reads, gap locks, and deadlocks are debugged here.", { readview: tx("判定完成", "Visibility decided"), version: tx("锁/版本命中", "Lock / version hit") }, "teal"],
        ["提交释放", "Commit and release", "写日志并释放锁", "Log and release locks", "version", "txB", "commit", "commit", "提交后日志持久化，锁释放，并发事务继续推进。", "After commit, logs persist, locks release, and concurrent transactions continue.", "长事务会拉长版本链并扩大锁冲突。", "Long transactions lengthen undo chain and expand lock conflicts.", { version: tx("状态提交", "Committed"), txB: tx("继续执行", "Continues") }, "success"],
      ],
      [["ReadView", "ReadView"], ["锁等待", "Lock wait"], ["版本链", "Version chain"]],
    );
  }

  return flow(
    "mysql",
    point,
    ["日志与复制", "Logs and replication"],
    ["模拟 Buffer Pool 脏页、redo/undo/binlog、两阶段提交和副本重放。", "Simulate dirty pages, redo/undo/binlog, two-phase commit, and replica replay."],
    [
      ["engine", "InnoDB 执行器", "InnoDB executor", "修改页和事务状态", "Changes pages and transaction state", "database"],
      ["redo", "Redo/Undo Log", "Redo / undo log", "崩溃恢复与回滚", "Crash recovery and rollback", "storage"],
      ["binlog", "Binlog/提交点", "Binlog / commit point", "复制与恢复顺序", "Replication and recovery order", "data"],
      ["replica", "从库/恢复流程", "Replica / recovery", "重放日志", "Replays logs", "server"],
    ],
    {
      engine: tx("事务执行中", "Transaction running"),
      redo: tx("等待写入", "Awaiting write"),
      binlog: tx("等待提交", "Awaiting commit"),
      replica: tx("等待同步", "Awaiting sync"),
    },
    [
      ["修改数据页", "Change data page", `处理 ${point.zh}`, `Handle ${point.en}`, "engine", "redo", "dirty page + undo", "dirty page + undo", "事务修改 Buffer Pool 页，并生成 undo 与 redo 记录。", "The transaction changes Buffer Pool page and creates undo and redo records.", "恢复能力来自日志先行和事务回滚信息。", "Recoverability comes from write-ahead log and rollback info.", { engine: tx("脏页产生", "Dirty page created"), redo: tx("日志记录中", "Logging") }],
      ["两阶段提交", "Two-phase commit", "写 redo prepare 与 binlog", "Write redo prepare and binlog", "redo", "binlog", "prepare + binlog", "prepare + binlog", "MySQL 用 redo prepare、binlog、redo commit 对齐崩溃恢复和复制。", "MySQL aligns crash recovery and replication with redo prepare, binlog, and redo commit.", "崩溃点分析要看 redo 与 binlog 的一致性。", "Crash-point analysis checks redo and binlog consistency.", { redo: tx("prepare 完成", "Prepare done"), binlog: tx("binlog 已写", "Binlog written") }, "teal"],
      ["复制/恢复", "Replicate or recover", "重放日志", "Replay logs", "binlog", "replica", "relay/replay", "relay / replay", "副本读取 binlog 或恢复流程重放 redo，数据状态收敛。", "Replica reads binlog or recovery replays redo until data state converges.", "主从延迟、GTID 和崩溃恢复都围绕日志顺序。", "Replication lag, GTID, and crash recovery revolve around log order.", { binlog: tx("提交完成", "Committed"), replica: tx("重放完成", "Replayed") }, "success"],
    ],
    [["redo/undo", "redo / undo"], ["binlog", "binlog"], ["复制延迟", "Replication lag"]],
  );
}

function buildRedisSpecific(point: GraphKnowledgePoint) {
  const area = getAreaKey(point);

  if (area === "data-type") {
    return flow(
      "redis",
      point,
      ["内存结构", "In-memory structure"],
      ["模拟命令进入事件循环，定位 Key，再操作 Dict、Listpack、Skiplist 或 Stream。", "Simulate command entering event loop, locating key, and operating dict, listpack, skiplist, or stream."],
      [
        ["client", "客户端命令", "Client command", "GET/HSET/ZADD/XADD", "GET, HSET, ZADD, XADD", "client"],
        ["loop", "事件循环", "Event loop", "单线程解析命令", "Single-thread command parsing", "cache"],
        ["keyspace", "Keyspace Dict", "Keyspace dict", "定位 key 与对象编码", "Locates key and encoding", "data"],
        ["reply", "返回值", "Reply", "RESP 响应", "RESP response", "server"],
      ],
      {
        client: tx("命令待发送", "Command ready"),
        loop: tx("事件循环空闲", "Event loop idle"),
        keyspace: tx("keyspace 稳定", "Keyspace stable"),
        reply: tx("等待响应", "Awaiting reply"),
      },
      [
        ["发送命令", "Send command", `执行 ${point.zh}`, `Run ${point.en}`, "client", "loop", "RESP command", "RESP command", "客户端发送命令、key 和参数。", "The client sends command, key, and arguments.", "先判断命令复杂度和 key 类型。", "Start from command complexity and key type.", { client: tx("等待响应", "Waiting"), loop: tx("解析命令", "Parsing") }],
        ["定位结构", "Locate structure", "查 keyspace", "Lookup keyspace", "loop", "keyspace", "key + encoding", "key + encoding", "Redis 根据 key 找到对象编码并执行结构操作。", "Redis locates object encoding by key and runs structure operation.", "String、Hash、List、Set、ZSet 的编码决定内存和复杂度。", "String, Hash, List, Set, and ZSet encoding decide memory and complexity.", { loop: tx("执行中", "Executing"), keyspace: tx("结构更新", "Structure updated") }, "teal"],
        ["返回结果", "Return reply", "写回 RESP", "Write RESP", "keyspace", "reply", "value/array", "value / array", "命令结果被序列化为 RESP 返回客户端。", "The command result is serialized as RESP and returned.", "大 key、热 key 和慢命令会放大单线程压力。", "Large keys, hot keys, and slow commands amplify event-loop pressure.", { keyspace: tx("状态确认", "State confirmed"), reply: tx("响应就绪", "Reply ready") }, "success"],
      ],
      [["命令复杂度", "Command complexity"], ["对象编码", "Object encoding"], ["内存占用", "Memory usage"]],
    );
  }

  if (area === "cache") {
    return flow(
      "redis",
      point,
      ["缓存治理", "Cache governance"],
      ["模拟请求先查缓存，未命中访问 DB，再通过空值、互斥、布隆或过期策略保护后端。", "Simulate request checking cache, hitting DB on miss, and protecting backend with null cache, mutex, Bloom, or expiration policy."],
      [
        ["app", "业务请求", "Business request", "读取热点数据", "Reads hot data", "client"],
        ["cache", "Redis 缓存", "Redis cache", "保存值、TTL、互斥标记", "Stores value, TTL, mutex", "cache"],
        ["guard", "保护策略", "Protection strategy", "布隆、空值、互斥、逻辑过期", "Bloom, null cache, mutex, logical expire", "security"],
        ["db", "数据库", "Database", "真实数据源", "Source of truth", "database"],
      ],
      {
        app: tx("请求进入", "Request enters"),
        cache: tx("待查 key", "Key pending"),
        guard: tx("策略待执行", "Policy pending"),
        db: tx("连接池健康", "Pool healthy"),
      },
      [
        ["查缓存", "Check cache", `处理 ${point.zh}`, `Handle ${point.en}`, "app", "cache", "GET key", "GET key", "业务请求先查 Redis，判断命中、过期或空值。", "The request checks Redis for hit, expiration, or null marker.", "缓存命中直接减少数据库压力。", "Cache hits directly reduce database pressure.", { app: tx("等待数据", "Waiting data"), cache: tx("查询 key", "Querying key") }],
        ["执行保护", "Run protection", "应用缓存策略", "Apply cache policy", "cache", "guard", "Bloom/mutex/TTL", "Bloom / mutex / TTL", "未命中或过期时触发布隆过滤、互斥重建或逻辑过期。", "Miss or expiry triggers Bloom filter, mutex rebuild, or logical expiration.", "穿透、击穿、雪崩的差别体现在保护策略。", "Penetration, breakdown, and avalanche differ in protection policy.", { cache: tx("命中策略", "Policy matched"), guard: tx("保护中", "Protecting") }, "teal"],
        ["回源与回填", "Fetch and refill", "读取 DB 并写回缓存", "Read DB and refill", "guard", "db", "SELECT + SETEX", "SELECT + SETEX", "策略允许时访问数据库，再把结果与 TTL 写回缓存。", "When policy allows, read DB and write result with TTL back to cache.", "回填要配合幂等、TTL 随机化和热点保护。", "Refill needs idempotency, TTL jitter, and hot-key protection.", { guard: tx("允许回源", "Origin allowed"), db: tx("返回数据", "Data returned"), cache: tx("缓存更新", "Cache updated") }, "success"],
      ],
      [["命中率", "Hit ratio"], ["TTL 策略", "TTL policy"], ["后端保护", "Backend protection"]],
    );
  }

  if (area === "persistence" || area === "expiration" || area === "memory") {
    return flow(
      "redis",
      point,
      ["持久化与内存", "Persistence and memory"],
      ["模拟内存数据经过过期检查、淘汰、RDB/AOF 写入和恢复。", "Simulate in-memory data through expiration checks, eviction, RDB/AOF write, and recovery."],
      [
        ["memory", "内存 keyspace", "Memory keyspace", "key、TTL、对象编码", "Keys, TTLs, encodings", "cache"],
        ["expire", "过期/淘汰器", "Expiration / eviction", "惰性、主动、LRU/LFU", "Lazy, active, LRU/LFU", "cpu"],
        ["persist", "RDB/AOF 缓冲", "RDB / AOF buffer", "快照和追加日志", "Snapshot and append log", "storage"],
        ["disk", "磁盘/恢复", "Disk / recovery", "保存与重建数据", "Stores and rebuilds data", "database"],
      ],
      {
        memory: tx("数据在内存", "Data in memory"),
        expire: tx("周期扫描", "Periodic scan"),
        persist: tx("等待写入", "Awaiting write"),
        disk: tx("文件可用", "File available"),
      },
      [
        ["检查 TTL", "Check TTL", `观察 ${point.zh}`, `Observe ${point.en}`, "memory", "expire", "TTL/LRU/LFU", "TTL / LRU / LFU", "Redis 在访问时或周期任务中处理过期与淘汰。", "Redis handles expiration and eviction on access or periodic tasks.", "内存治理关注 key 数量、对象大小和淘汰策略。", "Memory governance watches key count, object size, and eviction policy.", { memory: tx("待扫描", "Pending scan"), expire: tx("策略执行", "Policy running") }],
        ["写入持久化", "Write persistence", "生成 RDB/AOF", "Create RDB / AOF", "memory", "persist", "fork/COW/fsync", "fork / COW / fsync", "RDB 使用快照，AOF 记录写命令并按策略刷盘。", "RDB uses snapshot; AOF records write commands and flushes by policy.", "fork、COW 和 fsync 会影响延迟尖刺。", "fork, COW, and fsync affect latency spikes.", { memory: tx("快照源", "Snapshot source"), persist: tx("写入中", "Writing") }, "teal"],
        ["恢复数据", "Recover data", "加载文件重建 keyspace", "Load file and rebuild keyspace", "persist", "disk", "load/replay", "load / replay", "重启时加载 RDB 或重放 AOF，把数据恢复到内存。", "On restart, Redis loads RDB or replays AOF to rebuild memory.", "恢复速度和数据丢失窗口由策略决定。", "Recovery speed and data-loss window depend on policy.", { persist: tx("文件完成", "File ready"), disk: tx("可恢复", "Recoverable") }, "success"],
      ],
      [["TTL/淘汰", "TTL / eviction"], ["RDB/AOF", "RDB / AOF"], ["恢复窗口", "Recovery window"]],
    );
  }

  return flow(
    "redis",
    point,
    ["高可用与集群", "High availability and cluster"],
    ["模拟主从复制、哨兵选举、槽位路由和故障切换。", "Simulate replication, Sentinel election, slot routing, and failover."],
    [
      ["client", "客户端", "Client", "发送命令或槽位请求", "Sends command or slot request", "client"],
      ["primary", "主节点", "Primary", "接收写入与复制流", "Accepts writes and replication stream", "cache"],
      ["replica", "副本/哨兵", "Replica / Sentinel", "同步、监控、投票", "Syncs, monitors, votes", "cluster"],
      ["slot", "槽位/新主", "Slot / new primary", "接管流量", "Takes over traffic", "server"],
    ],
    {
      client: tx("请求待路由", "Request awaiting route"),
      primary: tx("主节点在线", "Primary online"),
      replica: tx("复制中", "Replicating"),
      slot: tx("槽位已分配", "Slots assigned"),
    },
    [
      ["路由请求", "Route request", `处理 ${point.zh}`, `Handle ${point.en}`, "client", "primary", "hash slot / write", "hash slot / write", "客户端按槽位或连接信息把请求发到主节点。", "The client routes request to primary by slot or connection info.", "集群问题先看槽位、MOVED/ASK 和客户端缓存。", "Cluster debugging starts from slots, MOVED/ASK, and client cache.", { client: tx("路由完成", "Routed"), primary: tx("收到命令", "Command received") }],
      ["同步监控", "Sync and monitor", "复制偏移量/健康检查", "Replication offset / health check", "primary", "replica", "offset + ping", "offset + ping", "副本拉取复制流，哨兵或集群节点持续监控健康状态。", "Replica pulls replication stream; Sentinel or cluster nodes monitor health.", "复制延迟和 quorum 决定切换质量。", "Replication lag and quorum decide failover quality.", { primary: tx("复制发送", "Replication sent"), replica: tx("状态判断", "Health judged") }, "teal"],
      ["故障切换", "Failover", "提升新主/迁移槽位", "Promote new primary / move slots", "replica", "slot", "failover", "failover", "故障时副本提升为新主，槽位或客户端路由更新。", "On failure, a replica promotes to primary and slots or client routes update.", "高可用关注数据一致性、恢复时间和客户端重连。", "HA focuses on consistency, recovery time, and client reconnect.", { replica: tx("已提升", "Promoted"), slot: tx("流量接管", "Traffic taken") }, "success"],
    ],
    [["复制偏移", "Replication offset"], ["quorum", "quorum"], ["槽位路由", "Slot routing"]],
  );
}

function buildRabbitmqSpecific(point: GraphKnowledgePoint) {
  const area = getAreaKey(point);

  if (point.id === "exchange") {
    return flow(
      "rabbitmq",
      point,
      ["交换机路由矩阵", "Exchange routing matrix"],
      [
        "模拟生产者把消息发布到交换机后，Direct、Fanout、Topic、Headers 和 Alternate Exchange 如何决定目标队列。",
        "Simulate how Direct, Fanout, Topic, Headers, and Alternate Exchange decide target queues after a producer publishes to an exchange.",
      ],
      [
        ["producer", "生产者", "Producer", "发送 exchange、routing key、headers 和 body", "Sends exchange, routing key, headers, and body", "client"],
        ["exchange", "交换机", "Exchange", "按类型和绑定关系评估路由", "Evaluates routes by type and bindings", "broker"],
        ["bindings", "绑定表", "Bindings", "保存 binding key、pattern 和 header 条件", "Stores binding keys, patterns, and header conditions", "data"],
        ["queues", "目标队列", "Target queues", "接收匹配消息或兜底未路由消息", "Receives matched messages or unrouted fallback", "queue"],
      ],
      {
        producer: tx("准备发布 order.created", "Preparing order.created"),
        exchange: tx("等待消息", "Awaiting publish"),
        bindings: tx("Direct/Fanout/Topic/Headers 已声明", "Direct/Fanout/Topic/Headers declared"),
        queues: tx("等待匹配结果", "Awaiting route result"),
      },
      [
        [
          "发布到交换机",
          "Publish to exchange",
          "发送 exchange + routing key + headers",
          "Send exchange + routing key + headers",
          "producer",
          "exchange",
          "exchange=orders.events",
          "exchange=orders.events",
          "生产者发布到交换机，消息携带 routing key 和可选 headers；队列名通常留在绑定拓扑里。",
          "Producer publishes to an exchange with a routing key and optional headers; queue names usually stay inside topology bindings.",
          "交换机是发布入口，生产者面向路由语义发布消息。",
          "The exchange is the publish entrypoint, and producers publish to routing semantics.",
          {
            producer: tx("已发布", "Published"),
            exchange: tx("收到消息属性", "Message properties received"),
          },
        ],
        [
          "Direct 精确匹配",
          "Direct exact match",
          "比较 routing key 与 binding key",
          "Compare routing key and binding key",
          "exchange",
          "bindings",
          "order.created == order.created",
          "order.created == order.created",
          "Direct 交换机把 routing key 与 binding key 精确相等的消息投递到对应队列。",
          "A direct exchange routes to queues whose binding key exactly equals the routing key.",
          "Direct 适合命令、状态事件和明确业务通道。",
          "Direct fits commands, status events, and explicit business lanes.",
          {
            exchange: tx("执行 exact match", "Exact match running"),
            bindings: tx("命中 order.created", "order.created matched"),
          },
          "teal",
        ],
        [
          "Fanout 广播",
          "Fanout broadcast",
          "复制给全部绑定目标",
          "Copy to every bound target",
          "bindings",
          "queues",
          "all bindings",
          "all bindings",
          "Fanout 交换机忽略 routing key，把消息复制到所有绑定队列，适合发布订阅。",
          "A fanout exchange ignores the routing key and copies the message to every bound queue, fitting publish-subscribe.",
          "每个订阅方使用独立队列，消费进度互相独立。",
          "Each subscriber uses its own queue, so consumption progress is isolated.",
          {
            bindings: tx("全部绑定通过", "All bindings pass"),
            queues: tx("审计/通知/搜索队列收到副本", "Audit/notify/search queues receive copies"),
          },
          "success",
        ],
        [
          "Topic 模式匹配",
          "Topic pattern match",
          "匹配 * 和 # 通配符",
          "Match * and # wildcards",
          "exchange",
          "bindings",
          "order.* / order.#",
          "order.* / order.#",
          "Topic 交换机按点分词段匹配；* 匹配一个词段，# 匹配零个或多个词段。",
          "A topic exchange matches dot-separated words; * matches one word and # matches zero or more words.",
          "Topic 适合把事件域、动作、地区和版本写进 routing key。",
          "Topic fits event domain, action, region, and version in routing keys.",
          {
            exchange: tx("解析词段 order.created", "Parsing words order.created"),
            bindings: tx("模式匹配完成", "Pattern match complete"),
          },
          "warning",
        ],
        [
          "Headers 条件匹配",
          "Headers condition match",
          "按 headers 和 x-match 判断",
          "Evaluate headers and x-match",
          "bindings",
          "queues",
          "tenant=vip,type=invoice",
          "tenant=vip,type=invoice",
          "Headers 交换机根据消息 headers 与绑定参数匹配，可用 all 或 any 语义组合条件。",
          "A headers exchange matches message headers against binding arguments with all or any semantics.",
          "Headers 适合维度多、routing key 表达吃力的路由条件。",
          "Headers fits multi-dimensional routes that routing keys express poorly.",
          {
            bindings: tx("Header 条件通过", "Header conditions pass"),
            queues: tx("VIP 发票队列收到消息", "VIP invoice queue receives message"),
          },
          "success",
        ],
        [
          "未路由兜底",
          "Unrouted fallback",
          "进入 Alternate Exchange",
          "Enter alternate exchange",
          "exchange",
          "queues",
          "alternate-exchange",
          "alternate-exchange",
          "没有任何 binding 命中时，可以由 Alternate Exchange 承接未路由消息，也可以用 mandatory 返回让生产者感知。",
          "When no binding matches, an alternate exchange can catch the unrouted message, and mandatory return can notify the producer.",
          "未路由消息要被观测和兜底，避免错误 routing key 静默丢失。",
          "Unrouted messages need observability and fallback to avoid silent routing-key mistakes.",
          {
            exchange: tx("未命中绑定", "No binding matched"),
            queues: tx("unrouted.audit 收到兜底消息", "unrouted.audit receives fallback message"),
          },
          "danger",
        ],
      ],
      [
        ["exchange type", "exchange type"],
        ["routing key / headers", "routing key / headers"],
        ["binding 命中数", "Binding match count"],
        ["unrouted fallback", "unrouted fallback"],
      ],
    );
  }

  if (area === "dead-letter" || area === "delay-retry") {
    return flow(
      "rabbitmq",
      point,
      ["重试与死信", "Retry and dead letter"],
      ["模拟消息消费失败后进入重试队列、延迟等待和死信队列。", "Simulate failed consumption entering retry queue, delayed wait, and dead-letter queue."],
      [
        ["producer", "生产者", "Producer", "发布业务消息", "Publishes business message", "client"],
        ["queue", "业务队列", "Business queue", "等待消费", "Awaiting consumption", "queue"],
        ["retry", "延迟/重试队列", "Delay / retry queue", "TTL、backoff、次数限制", "TTL, backoff, retry limit", "broker"],
        ["dlq", "死信队列", "Dead-letter queue", "保存失败消息", "Stores failed messages", "server"],
      ],
      {
        producer: tx("消息待发", "Message ready"),
        queue: tx("队列正常", "Queue healthy"),
        retry: tx("等待失败消息", "Awaiting failed message"),
        dlq: tx("等待兜底", "Awaiting fallback"),
      },
      [
        ["发布消息", "Publish message", `发布 ${point.zh}`, `Publish ${point.en}`, "producer", "queue", "routing key", "routing key", "生产者把消息投递到业务队列。", "Producer sends message to business queue.", "可靠投递先看 confirm 和 return。", "Reliable publishing starts from confirm and return.", { producer: tx("已发布", "Published"), queue: tx("已入队", "Enqueued") }],
        ["消费失败", "Consumption failed", "NACK/requeue", "NACK / requeue", "queue", "retry", "TTL + retry count", "TTL + retry count", "消费失败后消息进入重试队列，按 TTL 或插件延迟。", "After failure, the message enters retry queue and waits by TTL or plugin.", "重试要限制次数和退避间隔。", "Retry needs count limit and backoff interval.", { queue: tx("投递失败", "Delivery failed"), retry: tx("延迟等待", "Delayed") }, "warning"],
        ["进入死信", "Enter DLQ", "超过重试上限", "Retry limit reached", "retry", "dlq", "DLX", "DLX", "超过次数或过期后进入死信队列等待人工或补偿处理。", "After limit or expiry, the message enters DLQ for manual or compensating handling.", "死信队列要配合幂等和告警。", "DLQ needs idempotency and alerting.", { retry: tx("重试结束", "Retries done"), dlq: tx("死信已记录", "Dead letter stored") }, "success"],
      ],
      [["重试次数", "Retry count"], ["TTL/延迟", "TTL / delay"], ["DLQ 告警", "DLQ alert"]],
    );
  }

  if (area === "reliability" || area === "engineering") {
    return flow(
      "rabbitmq",
      point,
      ["可靠投递", "Reliable delivery"],
      ["模拟 confirm、路由失败、消费 ACK、幂等和顺序保护。", "Simulate confirm, routing failure, consumer ACK, idempotency, and ordering protection."],
      [
        ["producer", "生产者", "Producer", "发送带 messageId 的消息", "Sends message with messageId", "client"],
        ["broker", "Broker/交换机", "Broker / exchange", "确认与路由", "Confirms and routes", "broker"],
        ["queue", "队列", "Queue", "持久化和堆积", "Persistence and backlog", "queue"],
        ["consumer", "消费者", "Consumer", "处理、去重、ACK", "Processes, dedups, ACKs", "server"],
      ],
      {
        producer: tx("待确认", "Awaiting confirm"),
        broker: tx("等待发布", "Awaiting publish"),
        queue: tx("消息待入队", "Awaiting enqueue"),
        consumer: tx("等待投递", "Awaiting delivery"),
      },
      [
        ["发布确认", "Publisher confirm", `执行 ${point.zh}`, `Run ${point.en}`, "producer", "broker", "confirm/return", "confirm / return", "Broker 接收消息后返回 confirm，路由失败时触发 return 或备份交换机。", "Broker returns confirm after receiving message; routing failure triggers return or alternate exchange.", "生产端可靠性看 confirm、return 和本地消息表。", "Producer reliability uses confirm, return, and local message table.", { producer: tx("等待 confirm", "Awaiting confirm"), broker: tx("确认发布", "Publish confirmed") }],
        ["入队投递", "Enqueue and deliver", "持久化并投递", "Persist and deliver", "broker", "queue", "persistent + prefetch", "persistent + prefetch", "队列持久化消息，并按 prefetch 分发给消费者。", "Queue persists message and dispatches by prefetch.", "堆积、预取和消费者数量影响吞吐。", "Backlog, prefetch, and consumer count affect throughput.", { broker: tx("路由完成", "Routed"), queue: tx("等待 ACK", "Awaiting ACK") }, "teal"],
        ["消费确认", "Consumer ACK", "处理并 ACK", "Process and ACK", "queue", "consumer", "ACK/idempotent", "ACK / idempotent", "消费者完成处理后 ACK，并用幂等键避免重复副作用。", "Consumer ACKs after processing and uses idempotency key to avoid duplicate side effects.", "可靠消费由 ACK、幂等、重试和死信共同保障。", "Reliable consumption uses ACK, idempotency, retry, and DLQ.", { queue: tx("已出队", "Dequeued"), consumer: tx("处理完成", "Processed") }, "success"],
      ],
      [["confirm", "confirm"], ["prefetch", "prefetch"], ["幂等键", "Idempotency key"]],
    );
  }

  return buildCategoryGeneric("rabbitmq", point);
}

function buildBackendSpecific(point: GraphKnowledgePoint) {
  const area = getAreaKey(point);

  if (area === "security" || area === "gateway" || area === "traffic" || area === "api") {
    return flow(
      "backend",
      point,
      ["入口治理", "Entry governance"],
      ["模拟请求进入网关，完成认证、授权、限流、路由和契约校验。", "Simulate request entering gateway for authentication, authorization, rate limiting, routing, and contract validation."],
      [
        ["client", "调用方", "Caller", "携带请求和 token", "Sends request and token", "client"],
        ["gateway", "API Gateway", "API Gateway", "认证、限流、路由", "Auth, limit, route", "network"],
        ["policy", "策略/契约", "Policy / contract", "JWT、RBAC、OpenAPI", "JWT, RBAC, OpenAPI", "security"],
        ["service", "业务服务", "Business service", "处理请求", "Handles request", "server"],
      ],
      {
        client: tx("请求待发送", "Request ready"),
        gateway: tx("策略待评估", "Policy pending"),
        policy: tx("规则已加载", "Rules loaded"),
        service: tx("等待路由", "Awaiting route"),
      },
      [
        ["进入网关", "Enter gateway", `处理 ${point.zh}`, `Handle ${point.en}`, "client", "gateway", "HTTP/gRPC", "HTTP / gRPC", "请求进入网关，携带路径、Header、Token 或调用方身份。", "The request enters gateway with path, headers, token, or caller identity.", "入口层适合做统一治理和观测。", "Entry layer is fit for unified governance and observability.", { client: tx("等待响应", "Waiting"), gateway: tx("接收请求", "Request received") }],
        ["执行策略", "Apply policy", "认证/授权/限流/契约校验", "Auth / limit / contract check", "gateway", "policy", "JWT/RBAC/quota/schema", "JWT / RBAC / quota / schema", "策略层验证身份、权限、配额和请求格式。", "Policy layer checks identity, permission, quota, and request shape.", "401、403、429 和 schema 错误能明确入口问题。", "401, 403, 429, and schema errors reveal entry issues.", { gateway: tx("策略执行", "Policy running"), policy: tx("判定完成", "Decision done") }, "teal"],
        ["路由服务", "Route service", "转发到业务服务", "Forward to service", "policy", "service", "upstream", "upstream", "通过策略后请求被路由到后端服务。", "After policy pass, request routes to backend service.", "契约、版本和兼容性决定服务演进质量。", "Contract, versioning, and compatibility decide service evolution quality.", { policy: tx("允许通过", "Allowed"), service: tx("开始处理", "Processing") }, "success"],
      ],
      [["身份", "Identity"], ["限流配额", "Quota"], ["API 契约", "API contract"]],
    );
  }

  if (area === "resilience") {
    return flow(
      "backend",
      point,
      ["弹性保护", "Resilience guard"],
      ["模拟调用方经过超时、重试、熔断、隔离和降级保护依赖服务。", "Simulate caller protecting dependency with timeout, retry, circuit breaker, isolation, and fallback."],
      [
        ["caller", "调用方", "Caller", "发起依赖调用", "Calls dependency", "client"],
        ["guard", "超时/重试/熔断器", "Timeout / retry / circuit breaker", "控制失败传播", "Controls failure propagation", "security"],
        ["service", "依赖服务", "Dependency service", "可能慢或错误", "Can be slow or failing", "server"],
        ["fallback", "降级结果", "Fallback result", "兜底响应或缓存", "Fallback response or cache", "cache"],
      ],
      {
        caller: tx("请求进入", "Request enters"),
        guard: tx("保护策略就绪", "Guard ready"),
        service: tx("健康未知", "Health unknown"),
        fallback: tx("兜底可用", "Fallback ready"),
      },
      [
        ["进入保护器", "Enter guard", `触发 ${point.zh}`, `Trigger ${point.en}`, "caller", "guard", "timeout budget", "timeout budget", "调用先进入超时预算、重试规则和隔离池。", "The call enters timeout budget, retry rule, and isolation pool.", "保护策略要限制失败扩散范围。", "Protection policy limits failure spread.", { caller: tx("等待依赖", "Awaiting dependency"), guard: tx("策略检查", "Policy checking") }],
        ["调用依赖", "Call dependency", "发送请求并观察结果", "Send request and observe result", "guard", "service", "attempt", "attempt", "依赖服务返回成功、慢响应或错误。", "The dependency returns success, slow response, or error.", "重试要结合退避、抖动和幂等。", "Retries need backoff, jitter, and idempotency.", { guard: tx("尝试调用", "Attempting"), service: tx("返回信号", "Signal returned") }, "teal"],
        ["降级或恢复", "Fallback or recover", "返回兜底结果", "Return fallback", "guard", "fallback", "fallback/cache", "fallback / cache", "熔断打开或超时后返回兜底结果，并记录指标。", "After circuit open or timeout, the fallback returns a safe result and records metrics.", "可用性来自失败隔离、降级和快速恢复。", "Availability comes from failure isolation, fallback, and fast recovery.", { guard: tx("保护完成", "Guard completed"), fallback: tx("响应返回", "Response returned") }, "success"],
      ],
      [["超时预算", "Timeout budget"], ["熔断状态", "Circuit state"], ["降级结果", "Fallback"]],
    );
  }

  if (area === "consistency" || area === "cache" || area === "messaging") {
    return flow(
      "backend",
      point,
      ["一致性链路", "Consistency path"],
      ["模拟业务写入、事务边界、缓存/消息副作用和最终确认。", "Simulate business write, transaction boundary, cache/message side effect, and final confirmation."],
      [
        ["service", "业务服务", "Business service", "执行领域规则", "Runs domain rules", "server"],
        ["tx", "事务/锁", "Transaction / lock", "保护并发写入", "Protects concurrent writes", "security"],
        ["store", "数据库/缓存", "Database / cache", "保存状态", "Stores state", "database"],
        ["mq", "消息/补偿", "Message / compensation", "异步通知或补偿", "Async notification or compensation", "queue"],
      ],
      {
        service: tx("请求处理中", "Processing request"),
        tx: tx("事务待开启", "Transaction pending"),
        store: tx("状态待变更", "State pending"),
        mq: tx("副作用待发", "Side effect pending"),
      },
      [
        ["开启边界", "Open boundary", `执行 ${point.zh}`, `Run ${point.en}`, "service", "tx", "lock/tx id", "lock / tx id", "业务服务进入事务、锁或幂等边界。", "The service enters transaction, lock, or idempotency boundary.", "一致性要先定义写入边界。", "Consistency starts from write boundary.", { service: tx("规则执行", "Rules running"), tx: tx("边界开启", "Boundary open") }],
        ["更新状态", "Update state", "写 DB/缓存", "Write DB / cache", "tx", "store", "commit/cache", "commit / cache", "系统更新数据库、缓存或业务状态。", "The system updates database, cache, or business state.", "缓存一致性、分布式锁和事务隔离都在这一段体现。", "Cache consistency, distributed lock, and isolation appear here.", { tx: tx("写入中", "Writing"), store: tx("状态更新", "State updated") }, "teal"],
        ["发送副作用", "Send side effect", "投递消息/补偿记录", "Send message / compensation", "store", "mq", "outbox/event", "outbox / event", "提交后发送事件、写 outbox 或记录补偿任务。", "After commit, send event, write outbox, or record compensation task.", "最终一致性依赖幂等、重试和可观测补偿。", "Eventual consistency relies on idempotency, retry, and observable compensation.", { store: tx("提交完成", "Committed"), mq: tx("事件可消费", "Event consumable") }, "success"],
      ],
      [["事务边界", "Transaction boundary"], ["幂等", "Idempotency"], ["补偿事件", "Compensation event"]],
    );
  }

  return buildCategoryGeneric("backend", point);
}

function buildDockerSpecific(point: GraphKnowledgePoint) {
  const area = getAreaKey(point);

  if (area === "image" || area === "build" || area === "registry") {
    return flow(
      "docker",
      point,
      ["镜像构建", "Image build"],
      ["模拟 Dockerfile、构建上下文、层缓存、镜像推送和拉取。", "Simulate Dockerfile, build context, layer cache, image push, and pull."],
      [
        ["source", "Dockerfile/上下文", "Dockerfile / context", "COPY、RUN、ARG", "COPY, RUN, ARG", "data"],
        ["cache", "Layer Cache", "Layer cache", "复用或重建层", "Reuses or rebuilds layers", "cache"],
        ["image", "镜像层", "Image layers", "只读层和 digest", "Read-only layers and digest", "container"],
        ["registry", "Registry", "Registry", "保存 tag/digest", "Stores tag and digest", "server"],
      ],
      {
        source: tx("上下文待发送", "Context pending"),
        cache: tx("缓存待查", "Cache lookup pending"),
        image: tx("镜像待生成", "Image pending"),
        registry: tx("等待推送", "Awaiting push"),
      },
      [
        ["读取构建输入", "Read build input", `构建 ${point.zh}`, `Build ${point.en}`, "source", "cache", "Dockerfile + context", "Dockerfile + context", "构建器读取 Dockerfile、上下文和 .dockerignore。", "Builder reads Dockerfile, context, and .dockerignore.", "上下文大小和指令顺序影响构建速度。", "Context size and instruction order affect build speed.", { source: tx("输入已解析", "Input parsed"), cache: tx("查找层缓存", "Looking up cache") }],
        ["生成镜像层", "Create layers", "执行指令", "Run instructions", "cache", "image", "layer diff", "layer diff", "每条关键指令生成或复用镜像层。", "Each key instruction creates or reuses an image layer.", "多阶段构建能减少最终镜像体积。", "Multi-stage build reduces final image size.", { cache: tx("命中/重建", "Hit / rebuild"), image: tx("层已生成", "Layers created") }, "teal"],
        ["推送仓库", "Push registry", "上传 tag/digest", "Upload tag / digest", "image", "registry", "push/pull", "push / pull", "镜像按 tag 和 digest 推送到仓库，部署时再拉取。", "Image is pushed by tag and digest to registry and later pulled for deployment.", "生产部署优先使用 digest 锁定版本。", "Production deployment benefits from digest pinning.", { image: tx("镜像完成", "Image ready"), registry: tx("已保存", "Stored") }, "success"],
      ],
      [["层缓存", "Layer cache"], ["镜像大小", "Image size"], ["tag/digest", "tag / digest"]],
    );
  }

  if (area === "container" || area === "foundation") {
    return flow(
      "docker",
      point,
      ["容器运行", "Container runtime"],
      ["模拟镜像创建容器，运行进程，并通过 namespace、cgroup、可写层隔离资源。", "Simulate image creating container, running process, and isolating resources with namespace, cgroup, and writable layer."],
      [
        ["image", "镜像", "Image", "只读层模板", "Read-only layer template", "container"],
        ["process", "容器进程", "Container process", "PID 1 与入口命令", "PID 1 and entry command", "cpu"],
        ["isolation", "Namespace/Cgroup", "Namespace / cgroup", "网络、PID、资源限制", "Network, PID, resource limits", "security"],
        ["writable", "可写层/日志", "Writable layer / logs", "文件变化和 stdout", "File changes and stdout", "storage"],
      ],
      {
        image: tx("镜像可运行", "Image runnable"),
        process: tx("进程待启动", "Process pending"),
        isolation: tx("隔离待创建", "Isolation pending"),
        writable: tx("可写层待挂载", "Writable layer pending"),
      },
      [
        ["创建容器", "Create container", `启动 ${point.zh}`, `Start ${point.en}`, "image", "isolation", "create", "create", "Docker 基于镜像准备 namespace、cgroup、挂载和配置。", "Docker prepares namespace, cgroup, mounts, and config from image.", "容器是带隔离配置的进程运行环境。", "A container is an isolated process runtime.", { image: tx("模板已加载", "Template loaded"), isolation: tx("隔离创建", "Isolation created") }],
        ["启动进程", "Start process", "运行 ENTRYPOINT/CMD", "Run entrypoint / CMD", "isolation", "process", "PID 1", "PID 1", "容器内 PID 1 启动应用，状态进入 running。", "PID 1 starts the app and state becomes running.", "进程退出会决定容器退出状态。", "Process exit decides container exit state.", { isolation: tx("限制生效", "Limits active"), process: tx("Running", "Running") }, "teal"],
        ["写入与观测", "Write and observe", "记录文件和日志", "Record files and logs", "process", "writable", "stdout/files", "stdout / files", "容器写入可写层、卷或 stdout/stderr。", "The container writes to writable layer, volume, or stdout/stderr.", "inspect、logs、stats 能定位运行状态。", "inspect, logs, and stats locate runtime state.", { process: tx("请求处理中", "Processing"), writable: tx("日志更新", "Logs updated") }, "success"],
      ],
      [["PID 1", "PID 1"], ["namespace", "namespace"], ["cgroup", "cgroup"]],
    );
  }

  return flow(
    "docker",
    point,
    ["运行接入", "Runtime attachment"],
    ["模拟容器接入网络、端口、数据卷、Compose 和资源限制。", "Simulate container attaching network, ports, volumes, Compose, and resource limits."],
    [
      ["container", "容器", "Container", "运行服务进程", "Runs service process", "container"],
      ["network", "网络/端口", "Network / ports", "bridge、host、端口映射", "bridge, host, port mapping", "network"],
      ["volume", "数据卷/配置", "Volume / config", "持久化和挂载", "Persistence and mounts", "storage"],
      ["ops", "Compose/部署/观测", "Compose / deploy / observe", "编排、日志、资源", "Orchestration, logs, resources", "cluster"],
    ],
    {
      container: tx("进程运行", "Process running"),
      network: tx("网络待接入", "Network pending"),
      volume: tx("挂载待确认", "Mount pending"),
      ops: tx("等待编排", "Awaiting orchestration"),
    },
    [
      ["接入网络", "Attach network", `配置 ${point.zh}`, `Configure ${point.en}`, "container", "network", "bridge/port", "bridge / port", "容器加入网络并设置端口映射或服务名解析。", "The container joins network and sets port mapping or service-name resolution.", "端口冲突和网络模式是常见排障入口。", "Port conflict and network mode are common debug entries.", { container: tx("等待流量", "Awaiting traffic"), network: tx("网络已接入", "Network attached") }],
      ["挂载数据", "Mount data", "挂载卷和配置", "Mount volume and config", "container", "volume", "mount", "mount", "卷、bind mount 或 tmpfs 接入容器文件系统。", "Volume, bind mount, or tmpfs attaches to container filesystem.", "挂载路径会影响数据持久化和文件覆盖。", "Mount path affects persistence and file override.", { container: tx("文件系统更新", "Filesystem updated"), volume: tx("挂载完成", "Mounted") }, "teal"],
      ["编排观测", "Orchestrate and observe", "启动依赖和限制资源", "Start dependencies and limit resources", "volume", "ops", "compose/logs/stats", "compose / logs / stats", "Compose、日志和资源限制形成运行管理面。", "Compose, logs, and resource limits form runtime management.", "部署排障从 ps、logs、inspect、stats 开始。", "Deployment debugging starts from ps, logs, inspect, stats.", { volume: tx("数据可用", "Data ready"), ops: tx("状态可观测", "Observable") }, "success"],
    ],
    [["端口映射", "Port mapping"], ["卷挂载", "Volume mount"], ["资源限制", "Resource limit"]],
  );
}

function buildKubernetesSpecific(point: GraphKnowledgePoint) {
  const area = getAreaKey(point);

  if (area === "control-plane" || area === "tooling" || area === "foundation") {
    return flow(
      "kubernetes",
      point,
      ["控制面调谐", "Control-plane reconciliation"],
      ["模拟 kubectl 提交 YAML，API Server 写入 etcd，控制器和调度器推进实际状态。", "Simulate kubectl applying YAML, API Server writing etcd, and controllers plus scheduler advancing actual state."],
      [
        ["kubectl", "kubectl/YAML", "kubectl / YAML", "声明期望状态", "Declares desired state", "data"],
        ["api", "API Server/etcd", "API Server / etcd", "校验并保存资源", "Validates and stores resource", "server"],
        ["controller", "控制器/调度器", "Controller / scheduler", "调谐差异与调度", "Reconciles drift and schedules", "cluster"],
        ["node", "Node/kubelet", "Node / kubelet", "运行并回报状态", "Runs and reports status", "container"],
      ],
      {
        kubectl: tx("YAML 待提交", "YAML pending"),
        api: tx("等待资源", "Awaiting resource"),
        controller: tx("Watch 中", "Watching"),
        node: tx("等待任务", "Awaiting task"),
      },
      [
        ["提交资源", "Apply resource", `应用 ${point.zh}`, `Apply ${point.en}`, "kubectl", "api", "manifest", "manifest", "kubectl 发送资源定义，API Server 校验并写入 etcd。", "kubectl sends resource definition; API Server validates and stores it in etcd.", "所有状态变化都围绕期望状态。", "All state changes follow desired state.", { kubectl: tx("已提交", "Applied"), api: tx("已持久化", "Persisted") }],
        ["触发调谐", "Trigger reconcile", "Watch 资源变化", "Watch resource changes", "api", "controller", "watch event", "watch event", "控制器和调度器监听变化，计算创建、更新或调度动作。", "Controllers and scheduler watch changes and compute create, update, or schedule actions.", "调谐循环把差异变成动作。", "Reconciliation turns drift into actions.", { api: tx("事件发出", "Event emitted"), controller: tx("调谐中", "Reconciling") }, "teal"],
        ["节点执行", "Node execution", "kubelet 更新状态", "kubelet updates status", "controller", "node", "PodStatus/Condition", "PodStatus / Condition", "kubelet 启动容器并把状态、事件和条件回写。", "kubelet starts containers and writes status, events, and conditions back.", "describe、events、logs 是排障主线。", "describe, events, and logs drive debugging.", { controller: tx("动作已下发", "Action sent"), node: tx("状态回报", "Status reported") }, "success"],
      ],
      [["期望状态", "Desired state"], ["Watch 事件", "Watch event"], ["Conditions", "Conditions"]],
    );
  }

  if (area === "workload" || area === "node" || area === "release") {
    return flow(
      "kubernetes",
      point,
      ["工作负载生命周期", "Workload lifecycle"],
      ["模拟 Pod 从 Pending 到 Running，并在滚动更新、探针和重启策略中变化。", "Simulate Pod moving from Pending to Running and changing through rollout, probes, and restart policy."],
      [
        ["spec", "Pod/Deployment Spec", "Pod / Deployment spec", "镜像、副本、资源、探针", "Image, replicas, resources, probes", "data"],
        ["scheduler", "Scheduler", "Scheduler", "选择节点", "Chooses node", "cluster"],
        ["kubelet", "kubelet/运行时", "kubelet / runtime", "拉镜像并启动容器", "Pulls image and starts container", "container"],
        ["status", "Status/Events", "Status / events", "Ready、Restart、Condition", "Ready, restart, condition", "server"],
      ],
      {
        spec: tx("期望已提交", "Desired state submitted"),
        scheduler: tx("等待调度", "Scheduling pending"),
        kubelet: tx("等待 Pod", "Awaiting Pod"),
        status: tx("Pending", "Pending"),
      },
      [
        ["调度 Pod", "Schedule Pod", `处理 ${point.zh}`, `Handle ${point.en}`, "spec", "scheduler", "node fit", "node fit", "调度器按资源、亲和性、污点和拓扑选择节点。", "Scheduler chooses node by resources, affinity, taints, and topology.", "Pending 状态重点看调度条件。", "Pending state focuses on scheduling conditions.", { spec: tx("待绑定", "Awaiting bind"), scheduler: tx("筛选节点", "Filtering nodes") }],
        ["启动容器", "Start container", "拉镜像并运行", "Pull image and run", "scheduler", "kubelet", "image + sandbox", "image + sandbox", "kubelet 创建 Pod sandbox，拉镜像并启动容器。", "kubelet creates Pod sandbox, pulls image, and starts container.", "ImagePullBackOff、CrashLoopBackOff 都在这一段定位。", "ImagePullBackOff and CrashLoopBackOff are debugged here.", { scheduler: tx("已绑定", "Bound"), kubelet: tx("启动中", "Starting") }, "teal"],
        ["更新状态", "Update status", "探针和 Ready", "Probe and Ready", "kubelet", "status", "Probe/Ready", "Probe / Ready", "探针决定 Ready 状态，控制器据此推进滚动更新。", "Probes decide Ready state; controller advances rollout from it.", "发布质量看 Ready、重启次数、事件和 rollout 状态。", "Release quality uses Ready, restart count, events, and rollout state.", { kubelet: tx("容器运行", "Container running"), status: tx("Ready", "Ready") }, "success"],
      ],
      [["调度条件", "Scheduling conditions"], ["探针", "Probes"], ["rollout", "rollout"]],
    );
  }

  return flow(
    "kubernetes",
    point,
    ["集群资源接入", "Cluster resource attachment"],
    ["模拟 Service/Ingress、Config/Secret、Volume、HPA 和排障信号如何接入工作负载。", "Simulate Service/Ingress, Config/Secret, Volume, HPA, and troubleshooting signals attaching to workloads."],
    [
      ["workload", "Pod/Service", "Pod / service", "接收流量或挂载资源", "Receives traffic or mounts resources", "container"],
      ["network", "Service/Ingress/DNS", "Service / Ingress / DNS", "服务发现和入口流量", "Service discovery and ingress traffic", "network"],
      ["resource", "Config/Secret/Volume/HPA", "Config / secret / volume / HPA", "配置、存储、弹性", "Config, storage, autoscaling", "storage"],
      ["debug", "Events/Logs/Metrics", "Events / logs / metrics", "定位异常", "Debugs anomalies", "data"],
    ],
    {
      workload: tx("工作负载运行", "Workload running"),
      network: tx("流量待接入", "Traffic pending"),
      resource: tx("资源待挂载", "Resource pending"),
      debug: tx("信号采集中", "Signals collecting"),
    },
    [
      ["接入流量", "Attach traffic", `配置 ${point.zh}`, `Configure ${point.en}`, "network", "workload", "ClusterIP/Ingress", "ClusterIP / Ingress", "Service、Ingress 或 DNS 把请求导向后端 Pod。", "Service, Ingress, or DNS routes request to backend Pods.", "访问问题看 endpoints、DNS、Ingress 规则和网络策略。", "Access issues check endpoints, DNS, Ingress rules, and network policies.", { network: tx("路由生效", "Route active"), workload: tx("收到流量", "Traffic received") }],
      ["挂载资源", "Mount resource", "注入配置/存储/弹性", "Inject config / storage / scaling", "resource", "workload", "mount/env/scale", "mount / env / scale", "配置、密钥、卷和 HPA 把外部资源接入 Pod。", "Config, secrets, volumes, and HPA attach external resources to Pods.", "资源状态决定启动、扩缩容和数据持久化。", "Resource state affects startup, scaling, and persistence.", { resource: tx("已挂载/扩缩", "Mounted / scaled"), workload: tx("状态变化", "State changed") }, "teal"],
      ["观察排障", "Observe debug", "读取事件日志指标", "Read events, logs, metrics", "workload", "debug", "kubectl describe/logs/top", "kubectl describe / logs / top", "事件、日志和指标把异常定位到调度、镜像、探针、资源或网络。", "Events, logs, and metrics locate anomalies in scheduling, image, probes, resources, or network.", "K8s 排障围绕资源状态与控制器事件展开。", "K8s debugging follows resource status and controller events.", { workload: tx("异常可定位", "Anomaly locatable"), debug: tx("信号完整", "Signals ready") }, "success"],
    ],
    [["Service/Ingress", "Service / Ingress"], ["配置/卷", "Config / volume"], ["事件日志", "Events / logs"]],
  );
}

function buildAgentSpecific(point: GraphKnowledgePoint) {
  const area = getAreaKey(point);

  if (area === "rag") {
    return rag(point);
  }

  if (area === "tools") {
    return flow(
      "agent",
      point,
      ["工具调用", "Tool calling"],
      ["模拟模型选择工具、生成参数、执行外部系统并读取 observation。", "Simulate model selecting tool, generating arguments, executing external system, and reading observation."],
      [
        ["user", "用户目标", "User goal", "任务和约束", "Task and constraints", "client"],
        ["agent", "Agent", "Agent", "选择工具和参数", "Selects tool and arguments", "agent"],
        ["tool", "工具/API", "Tool / API", "执行外部动作", "Runs external action", "tool"],
        ["obs", "Observation", "Observation", "结果、错误或证据", "Result, error, or evidence", "data"],
      ],
      {
        user: tx("目标已输入", "Goal entered"),
        agent: tx("工具待选", "Tool pending"),
        tool: tx("权限待校验", "Permission pending"),
        obs: tx("等待结果", "Awaiting result"),
      },
      [
        ["选择工具", "Select tool", `执行 ${point.zh}`, `Run ${point.en}`, "user", "agent", "intent + schema", "intent + schema", "Agent 根据目标和工具 schema 选择动作。", "The agent selects action from goal and tool schema.", "工具选择要匹配能力、权限和输入约束。", "Tool selection matches capability, permission, and input constraints.", { user: tx("等待执行", "Waiting execution"), agent: tx("选择中", "Selecting") }],
        ["生成参数", "Generate arguments", "填充结构化参数", "Fill structured arguments", "agent", "tool", "JSON args", "JSON args", "模型生成参数，系统校验类型、必填项和权限。", "The model generates arguments; system validates types, required fields, and permission.", "参数校验能减少工具误用。", "Argument validation reduces tool misuse.", { agent: tx("参数就绪", "Arguments ready"), tool: tx("执行中", "Executing") }, "teal"],
        ["读取观察", "Read observation", "把工具结果放回上下文", "Put tool result into context", "tool", "obs", "result/error", "result / error", "工具返回结果、错误或证据，Agent 决定下一步。", "The tool returns result, error, or evidence; the agent decides next step.", "稳定工具链要记录调用轨迹、错误和重试。", "Stable toolchains record call trace, errors, and retries.", { tool: tx("已返回", "Returned"), obs: tx("进入上下文", "In context") }, "success"],
      ],
      [["schema", "schema"], ["权限", "Permission"], ["observation", "observation"]],
    );
  }

  if (area === "planning" || area === "workflow" || area === "multi-agent") {
    return flow(
      "agent",
      point,
      ["规划执行", "Planning execution"],
      ["模拟目标拆解、任务队列、执行器、反思修正和多角色协作。", "Simulate goal decomposition, task queue, executor, reflection, and multi-role collaboration."],
      [
        ["goal", "目标", "Goal", "用户意图和约束", "User intent and constraints", "client"],
        ["plan", "计划/DAG", "Plan / DAG", "任务拆解和依赖", "Task decomposition and dependencies", "agent"],
        ["executor", "执行器/角色", "Executor / role", "调用模型或工具", "Calls model or tools", "tool"],
        ["review", "反思/验收", "Reflection / review", "检查结果并修正", "Checks result and revises", "model"],
      ],
      {
        goal: tx("目标待拆解", "Goal pending decomposition"),
        plan: tx("计划为空", "Plan empty"),
        executor: tx("等待任务", "Awaiting task"),
        review: tx("等待验收", "Awaiting review"),
      },
      [
        ["拆解任务", "Decompose tasks", `规划 ${point.zh}`, `Plan ${point.en}`, "goal", "plan", "subtasks", "subtasks", "Agent 把目标拆成有依赖关系的任务。", "The agent decomposes goal into dependent tasks.", "任务颗粒度决定可控性和成本。", "Task granularity decides controllability and cost.", { goal: tx("目标明确", "Goal clear"), plan: tx("DAG 生成", "DAG created") }],
        ["执行节点", "Execute node", "调度角色/工具", "Schedule role / tool", "plan", "executor", "action", "action", "执行器按计划调用模型、工具或其他 Agent。", "Executor calls model, tools, or other agents by plan.", "多 Agent 协作要明确角色、协议和共享状态。", "Multi-agent collaboration needs roles, protocol, and shared state.", { plan: tx("节点激活", "Node active"), executor: tx("执行中", "Executing") }, "teal"],
        ["反思验收", "Review result", "检查并修正", "Check and revise", "executor", "review", "critique/revision", "critique / revision", "系统检查结果质量，必要时回到计划或执行节点。", "The system checks quality and loops back to plan or execution when needed.", "长任务稳定性来自可回放轨迹和明确终止条件。", "Long-task stability comes from replayable trace and clear stop condition.", { executor: tx("结果提交", "Result submitted"), review: tx("验收完成", "Review complete") }, "success"],
      ],
      [["任务 DAG", "Task DAG"], ["执行轨迹", "Execution trace"], ["验收条件", "Acceptance criteria"]],
    );
  }

  if (area === "safety" || area === "evaluation" || area === "operations") {
    return flow(
      "agent",
      point,
      ["评估与安全", "Evaluation and safety"],
      ["模拟输入经过策略边界、模型输出、评估器、日志指标和人工反馈。", "Simulate input passing policy boundary, model output, evaluator, logs and metrics, and human feedback."],
      [
        ["input", "输入/上下文", "Input / context", "用户、检索、工具结果", "User, retrieval, tool result", "client"],
        ["policy", "策略边界", "Policy boundary", "权限、隐私、注入拦截", "Permission, privacy, injection guard", "security"],
        ["model", "模型输出", "Model output", "回答、动作或参数", "Answer, action, or arguments", "model"],
        ["eval", "评估/监控", "Evaluation / monitoring", "质量、安全、成本、延迟", "Quality, safety, cost, latency", "data"],
      ],
      {
        input: tx("上下文待检查", "Context awaiting check"),
        policy: tx("规则已加载", "Rules loaded"),
        model: tx("等待调用", "Awaiting call"),
        eval: tx("指标采集中", "Metrics collecting"),
      },
      [
        ["检查输入", "Check input", `评估 ${point.zh}`, `Evaluate ${point.en}`, "input", "policy", "policy check", "policy check", "策略层检查权限、隐私、提示注入和工具边界。", "Policy layer checks permission, privacy, prompt injection, and tool boundary.", "安全边界要先于模型和工具动作。", "Safety boundary comes before model and tool actions.", { input: tx("待判定", "Awaiting decision"), policy: tx("检查中", "Checking") }],
        ["生成输出", "Generate output", "调用模型", "Call model", "policy", "model", "response/action", "response / action", "通过策略后，模型生成回答、计划、工具参数或拒答说明。", "After policy pass, model generates answer, plan, tool arguments, or refusal rationale.", "输出要绑定可验证证据和动作权限。", "Output needs verifiable evidence and action permission.", { policy: tx("允许执行", "Allowed"), model: tx("生成中", "Generating") }, "teal"],
        ["记录评估", "Record evaluation", "打分与监控", "Score and monitor", "model", "eval", "quality/safety/cost", "quality / safety / cost", "评估器记录任务成功率、忠实度、安全命中、成本和延迟。", "Evaluator records task success, faithfulness, safety hits, cost, and latency.", "Agent 工程化依赖轨迹、指标和回归集。", "Agent engineering relies on traces, metrics, and regression sets.", { model: tx("输出完成", "Output complete"), eval: tx("指标更新", "Metrics updated") }, "success"],
      ],
      [["安全命中", "Safety hit"], ["质量分", "Quality score"], ["成本延迟", "Cost latency"]],
    );
  }

  return buildCategoryGeneric("agent", point);
}

function networkOverview(point: GraphKnowledgePoint) {
  return flow(
    "network",
    point,
    ["端到端封装路径", "End-to-end encapsulation path"],
    [
      "从输入 URL、DNS 解析、协议封装、逐跳转发到目标解封装，串起一次完整访问。",
      "Connect URL entry, DNS resolution, protocol encapsulation, hop-by-hop forwarding, and target decapsulation.",
    ],
    [
      ["browser", "浏览器/应用", "Browser / app", "URL、业务请求、响应消费", "URL, business request, response consumption", "client"],
      ["resolver", "DNS 解析器", "DNS resolver", "缓存、递归、权威记录", "Cache, recursion, authoritative records", "network"],
      ["transport", "传输层", "Transport", "端口、连接、可靠性或数据报", "Ports, connection, reliability or datagrams", "network"],
      ["internet", "Internet 层", "Internet layer", "IP、路由表、TTL、下一跳", "IP, route table, TTL, next hop", "network"],
      ["link", "链路层", "Link layer", "ARP、MAC、帧、物理信号", "ARP, MAC, frames, physical signals", "data"],
      ["server", "目标服务", "Target service", "解封装、处理请求、生成响应", "Decapsulation, request handling, response creation", "server"],
    ],
    {
      browser: tx("输入 URL", "URL entered"),
      resolver: tx("等待域名", "Awaiting name"),
      transport: tx("等待端口", "Awaiting port"),
      internet: tx("等待目的 IP", "Awaiting destination IP"),
      link: tx("等待下一跳", "Awaiting next hop"),
      server: tx("等待请求", "Awaiting request"),
    },
    [
      [
        "读取目标",
        "Read target",
        "查询 DNS",
        "Query DNS",
        "browser",
        "resolver",
        "URL host",
        "URL host",
        "浏览器从 URL 中取出主机名，先查本地和递归解析链路，拿到目标服务 IP。",
        "The browser extracts the host from the URL, checks local and recursive resolution, and gets the target IP.",
        "DNS 把人可读名称接到可路由地址，缓存和 TTL 会影响后续访问。",
        "DNS connects readable names to routable addresses; cache and TTL shape later visits.",
        { browser: tx("目标域名就绪", "Host ready"), resolver: tx("返回 A/AAAA", "A/AAAA returned") },
      ],
      [
        "构造请求",
        "Build request",
        "生成应用数据",
        "Create payload",
        "resolver",
        "transport",
        "HTTP payload",
        "HTTP payload",
        "应用层生成业务载荷，并交给传输层选择端口、连接方式和可靠性策略。",
        "The application creates payload and passes it to transport for ports, connection mode, and reliability behavior.",
        "应用层表达业务语义，传输层服务进程通信。",
        "Application layer carries business meaning; transport serves process communication.",
        { resolver: tx("解析完成", "Resolved"), transport: tx("添加端口信息", "Adding port info") },
        "teal",
      ],
      [
        "封装传输信息",
        "Wrap transport",
        "写入 TCP/UDP 头",
        "Add TCP / UDP header",
        "transport",
        "internet",
        "src port + dst port",
        "src port + dst port",
        "传输层写入源端口、目标端口，以及连接、序列、窗口或数据报信息。",
        "Transport adds source port, destination port, and connection, sequence, window, or datagram fields.",
        "端口把一台主机上的流量送到具体进程。",
        "Ports deliver host traffic to a concrete process.",
        { transport: tx("段已形成", "Segment ready"), internet: tx("添加 IP 信息", "Adding IP info") },
        "warning",
      ],
      [
        "封装 IP 包",
        "Wrap IP packet",
        "写入 IP 与 TTL",
        "Add IP and TTL",
        "internet",
        "link",
        "dst IP + next hop",
        "dst IP + next hop",
        "Internet 层写入源/目的 IP 和 TTL，并根据路由表与默认网关确定下一跳。",
        "The Internet layer adds source and destination IP plus TTL, then uses route table and default gateway for next hop.",
        "跨网络通信由逐跳路由拼成端到端路径。",
        "Cross-network communication is built from hop-by-hop routing.",
        { internet: tx("下一跳确定", "Next hop chosen"), link: tx("准备二层投递", "Preparing L2 delivery") },
        "teal",
      ],
      [
        "逐跳投递",
        "Hop-by-hop delivery",
        "封装以太网帧",
        "Wrap Ethernet frame",
        "link",
        "server",
        "MAC + frame + signal",
        "MAC + frame + signal",
        "链路层写入下一跳 MAC，把帧转换成电、光或无线信号；路由器逐跳重写二层头并转发。",
        "The link layer adds next-hop MAC and turns frames into electrical, optical, or wireless signals; routers rewrite L2 headers hop by hop.",
        "链路层处理本地交付，端到端目标地址保留在 IP 包里。",
        "Link layer handles local delivery; the end-to-end destination stays in the IP packet.",
        { link: tx("帧已发出", "Frame sent"), server: tx("收到帧", "Frame received") },
        "success",
      ],
      [
        "解封装响应",
        "Decapsulate and respond",
        "逐层拆包",
        "Unwrap layers",
        "server",
        "browser",
        "response",
        "response",
        "目标服务按链路、IP、传输、应用的顺序解封装，处理请求后沿反向路径返回响应。",
        "The target service unwraps link, IP, transport, and application layers, handles the request, then returns a response along the reverse path.",
        "抓包和排障时按封装层次定位字段、状态和故障边界。",
        "Packet analysis and debugging follow encapsulation layers to locate fields, states, and fault boundaries.",
        { server: tx("响应发出", "Response sent"), browser: tx("收到响应", "Response received") },
        "success",
      ],
    ],
    [
      ["DNS 解析", "DNS resolution"],
      ["协议封装", "Protocol encapsulation"],
      ["IP 路由", "IP routing"],
      ["链路投递", "Link delivery"],
      ["逐层解封装", "Layer decapsulation"],
    ],
  );
}

function osiModel(point: GraphKnowledgePoint) {
  return flow(
    "network",
    point,
    ["OSI 七层封装", "OSI seven-layer encapsulation"],
    [
      "按应用、表示、会话、传输、网络、数据链路、物理七层完整观察发送端封装和接收端解封装。",
      "Observe sender encapsulation and receiver decapsulation across application, presentation, session, transport, network, data link, and physical layers.",
    ],
    [
      ["application", "应用层", "Application", "HTTP、DNS、SMTP 等应用协议", "HTTP, DNS, SMTP, and app protocols", "client"],
      ["presentation", "表示层", "Presentation", "编码、压缩、加密、格式转换", "Encoding, compression, encryption, format conversion", "security"],
      ["session", "会话层", "Session", "会话建立、维持、恢复", "Session setup, maintenance, recovery", "network"],
      ["transport", "传输层", "Transport", "TCP/UDP、端口、分段、可靠性", "TCP / UDP, ports, segmentation, reliability", "network"],
      ["network", "网络层", "Network", "IP、路由、TTL、分组转发", "IP, routing, TTL, packet forwarding", "network"],
      ["dataLink", "数据链路层", "Data link", "MAC、帧、VLAN、差错检测", "MAC, frames, VLAN, error detection", "data"],
      ["physical", "物理层", "Physical", "电、光、无线信号与介质", "Electrical, optical, wireless signals and media", "server"],
    ],
    {
      application: tx("业务数据待发送", "Payload ready"),
      presentation: tx("等待表示处理", "Awaiting representation"),
      session: tx("等待会话上下文", "Awaiting session context"),
      transport: tx("等待端口", "Awaiting ports"),
      network: tx("等待 IP", "Awaiting IP"),
      dataLink: tx("等待成帧", "Awaiting framing"),
      physical: tx("链路空闲", "Link idle"),
    },
    [
      [
        "应用生成数据",
        "Application payload",
        "产生应用数据",
        "Create app data",
        "application",
        "presentation",
        "HTTP/DNS data",
        "HTTP / DNS data",
        "应用层把用户请求表达成具体协议数据。",
        "The application layer expresses the user request as protocol data.",
        "第 7 层关注业务语义和应用协议。",
        "Layer 7 focuses on business meaning and application protocols.",
        { application: tx("数据已生成", "Data created"), presentation: tx("处理表示", "Handling representation") },
      ],
      [
        "表示处理",
        "Presentation handling",
        "编码/压缩/加密",
        "Encode / compress / secure",
        "presentation",
        "session",
        "format/security",
        "format / security",
        "表示层处理字符编码、压缩、加密和数据格式，让两端能解释同一份数据。",
        "Presentation handles character encoding, compression, encryption, and data format so both ends interpret the same data.",
        "乱码、压缩、序列化和加密格式问题常从表示层切入。",
        "Encoding, compression, serialization, and encryption-format issues start here.",
        { presentation: tx("表示格式就绪", "Representation ready"), session: tx("准备会话控制", "Preparing session control") },
        "teal",
      ],
      [
        "会话控制",
        "Session control",
        "建立/维持会话",
        "Setup / maintain session",
        "session",
        "transport",
        "dialog context",
        "dialog context",
        "会话层维护双方交互上下文，包括会话建立、同步点、恢复和关闭。",
        "Session layer maintains interaction context, including setup, checkpoints, recovery, and teardown.",
        "会话状态、长连接复用和恢复策略可映射到这一层理解。",
        "Session state, connection reuse, and recovery policy can be understood here.",
        { session: tx("会话上下文就绪", "Session context ready"), transport: tx("准备分段", "Preparing segments") },
        "teal",
      ],
      [
        "传输分段",
        "Transport segment",
        "添加 TCP/UDP 信息",
        "Add TCP / UDP info",
        "transport",
        "network",
        "ports + seq/ack",
        "ports + seq / ack",
        "传输层用端口定位进程，并处理可靠性、流控或数据报交付。",
        "Transport uses ports for processes and handles reliability, flow control, or datagrams.",
        "端口、握手、重传和窗口都属于传输层排障线索。",
        "Ports, handshakes, retransmission, and windows are transport debugging signals.",
        { transport: tx("段已形成", "Segment ready"), network: tx("准备寻址", "Preparing addressing") },
        "warning",
      ],
      [
        "网络寻址",
        "Network addressing",
        "添加 IP 和路由信息",
        "Add IP and route info",
        "network",
        "dataLink",
        "IP packet",
        "IP packet",
        "网络层根据目的 IP、路由表和 TTL 推动跨网络转发。",
        "The network layer forwards across networks using destination IP, routing table, and TTL.",
        "IP、路由、网关和 ICMP 是网络层排障重点。",
        "IP, routes, gateways, and ICMP are network-layer debugging focus.",
        { network: tx("包已形成", "Packet ready"), dataLink: tx("准备成帧", "Preparing frame") },
        "teal",
      ],
      [
        "数据链路成帧",
        "Data-link framing",
        "添加 MAC/FCS",
        "Add MAC / FCS",
        "dataLink",
        "physical",
        "Ethernet frame",
        "Ethernet frame",
        "数据链路层写入源/目的 MAC、类型、可选 VLAN 和校验字段，完成同一链路上的帧投递准备。",
        "Data link adds source and destination MAC, type, optional VLAN, and checksum fields for local-link delivery.",
        "MAC、ARP、VLAN、MTU 和 FCS 是二层排障重点。",
        "MAC, ARP, VLAN, MTU, and FCS are layer-2 debugging focus.",
        { dataLink: tx("帧已形成", "Frame ready"), physical: tx("准备发送信号", "Preparing signals") },
        "warning",
      ],
      [
        "物理发送",
        "Physical transmission",
        "转换为信号",
        "Convert to signals",
        "physical",
        "application",
        "bits/signals",
        "bits / signals",
        "物理层把帧编码成电、光或无线信号；接收端从物理层向应用层逐层解封装。",
        "Physical layer encodes frames into electrical, optical, or wireless signals; the receiver decapsulates upward to application.",
        "七层模型的价值是把封装字段和故障边界逐层拆清楚。",
        "The OSI model clarifies fields and fault boundaries layer by layer.",
        { physical: tx("信号已发送", "Signals sent"), application: tx("接收端解封装", "Receiver decapsulates") },
        "success",
      ],
    ],
    [
      ["七层完整职责", "Complete layer roles"],
      ["封装/解封装", "Encapsulation / decapsulation"],
      ["故障边界", "Fault boundary"],
      ["TCP/IP 对照", "TCP/IP mapping"],
    ],
  );
}

function tcpIpModel(point: GraphKnowledgePoint) {
  return flow(
    "network",
    point,
    ["TCP/IP 四层封装", "TCP/IP four-layer encapsulation"],
    [
      "按应用层、传输层、Internet 层和链路层观察真实互联网协议栈如何封装、转发和解封装。",
      "Inspect how the real Internet protocol stack encapsulates, forwards, and decapsulates through application, transport, Internet, and link layers.",
    ],
    [
      ["application", "应用层", "Application", "HTTP、DNS、SSH、SMTP、业务语义", "HTTP, DNS, SSH, SMTP, business semantics", "client"],
      ["transport", "传输层", "Transport", "TCP/UDP、端口、连接、可靠性", "TCP / UDP, ports, connection, reliability", "network"],
      ["internet", "Internet 层", "Internet", "IP、ICMP、路由、TTL、下一跳", "IP, ICMP, routing, TTL, next hop", "network"],
      ["link", "链路层", "Link", "Ethernet/Wi-Fi、ARP、MAC、帧、信号", "Ethernet / Wi-Fi, ARP, MAC, frames, signals", "data"],
      ["receiver", "接收端", "Receiver", "逐层解封装并交给应用", "Decapsulates upward and delivers to application", "server"],
    ],
    {
      application: tx("应用数据待发送", "App data ready"),
      transport: tx("等待端口", "Awaiting ports"),
      internet: tx("等待 IP", "Awaiting IP"),
      link: tx("链路空闲", "Link idle"),
      receiver: tx("等待帧到达", "Awaiting frame"),
    },
    [
      [
        "应用产生数据",
        "Application data",
        "生成 HTTP/DNS 数据",
        "Create HTTP / DNS data",
        "application",
        "transport",
        "payload",
        "payload",
        "应用层把业务动作表达成 HTTP、DNS、RPC 或其他应用协议数据。",
        "The application layer expresses business action as HTTP, DNS, RPC, or other application protocol data.",
        "应用层排查看 URL、域名、Header、状态码、序列化格式和业务日志。",
        "Application debugging checks URL, name, headers, status code, serialization format, and business logs.",
        {
          application: tx("应用载荷已生成", "Application payload created"),
          transport: tx("等待 TCP/UDP 端口", "Awaiting TCP/UDP ports"),
        },
      ],
      [
        "传输封装",
        "Transport wrap",
        "添加 TCP/UDP 头",
        "Add TCP / UDP header",
        "transport",
        "internet",
        "segment/datagram",
        "segment / datagram",
        "传输层写入源端口和目标端口，并提供连接状态、可靠传输、窗口控制或轻量数据报能力。",
        "Transport adds source and destination ports and provides connection state, reliability, window control, or lightweight datagram behavior.",
        "端口、握手、重传、窗口和连接状态都在这一层分析。",
        "Ports, handshake, retransmission, windows, and connection states are analyzed here.",
        {
          transport: tx("段/数据报已形成", "Segment/datagram ready"),
          internet: tx("等待 IP 头与路由", "Awaiting IP header and route"),
        },
        "teal",
      ],
      [
        "Internet 寻址",
        "Internet addressing",
        "添加 IP 头并选路",
        "Add IP header and route",
        "internet",
        "link",
        "IP packet",
        "IP packet",
        "Internet 层写入源 IP、目标 IP、TTL 等字段，并通过路由表、子网掩码和默认网关选择下一跳。",
        "The Internet layer adds source IP, destination IP, TTL, then chooses next hop with route table, subnet mask, and default gateway.",
        "IP、路由、网关、NAT、TTL 和 ICMP 是这一层的核心信号。",
        "IP, routes, gateways, NAT, TTL, and ICMP are key signals at this layer.",
        {
          internet: tx("IP 包已形成", "IP packet ready"),
          link: tx("等待下一跳 MAC", "Awaiting next-hop MAC"),
        },
        "warning",
      ],
      [
        "链路投递",
        "Link delivery",
        "封装帧并发送",
        "Frame and transmit",
        "link",
        "receiver",
        "Ethernet frame",
        "Ethernet frame",
        "链路层处理 ARP、下一跳 MAC、VLAN、MTU 和帧校验，再把帧变成电、光或无线信号交给本地链路。",
        "The link layer handles ARP, next-hop MAC, VLAN, MTU, and frame checks, then sends frames as electrical, optical, or wireless signals to the local link.",
        "MAC、ARP、VLAN、MTU、FCS 和物理链路计数都在这一层分析。",
        "MAC, ARP, VLAN, MTU, FCS, and physical link counters are analyzed here.",
        {
          link: tx("帧已发往下一跳", "Frame sent to next hop"),
          receiver: tx("接收端收到链路帧", "Receiver got link frame"),
        },
        "warning",
      ],
      [
        "接收端解封装",
        "Receiver decapsulation",
        "逐层交付",
        "Deliver upward",
        "receiver",
        "application",
        "Ethernet -> IP -> TCP/UDP -> app",
        "Ethernet -> IP -> TCP / UDP -> app",
        "接收端按链路、Internet、传输、应用的顺序拆头，最终用端口把载荷交给目标进程或应用协议。",
        "The receiver removes headers in link, Internet, transport, and application order, then uses ports to deliver payload to the target process or application protocol.",
        "抓包读法从 Ethernet 到 IP，再到 TCP/UDP，最后看 HTTP、DNS 或业务协议。",
        "Packet reading goes from Ethernet to IP, then TCP/UDP, then HTTP, DNS, or business protocol.",
        {
          receiver: tx("解封装完成", "Decapsulation complete"),
          application: tx("响应回到应用层", "Response returned to application"),
        },
        "success",
      ],
    ],
    [
      ["应用协议", "Application protocol"],
      ["端口/连接", "Ports / connections"],
      ["IP/路由", "IP / routing"],
      ["MAC/ARP/MTU", "MAC / ARP / MTU"],
      ["OSI 对照", "OSI mapping"],
    ],
  );
}

const customBuilders: Record<string, Builder> = {
  "network:network-overview": networkOverview,
  "network:osi-model": osiModel,
  "network:tcp-ip-model": tcpIpModel,
  "network:signal": signal,
  "network:ethernet-physical": ethernetPhysical,
  "network:ethernet-frame": ethernetFrame,
  "network:tcp-handshake": tcpHandshake,
  "network:tcp-four-way-wave": tcpWave,
  "network:tcp-state": tcpState,
  "network:mac-address": macAddress,
  "network:switch": networkSwitch,
  "network:arp": arp,
  "network:dns": dns,
  "network:tls": tls,
  "network:https": tls,
  "network:http-cache": httpCache,
  "network:cdn": cdn,
  "network:load-balancing": loadBalancing,
  "mysql:b-plus-tree": bPlusTree,
  "kubernetes:deployment": k8sDeployment,
  "kubernetes:rolling-update": k8sDeployment,
  "agent:rag": rag,
  "agent:retrieval": rag,
};

const categoryBuilders: Record<CategoryId, Builder> = {
  network: buildNetworkSpecific,
  os: buildOsSpecific,
  algorithm: buildAlgorithmSpecific,
  mysql: buildMysqlSpecific,
  redis: buildRedisSpecific,
  rabbitmq: buildRabbitmqSpecific,
  backend: buildBackendSpecific,
  docker: buildDockerSpecific,
  kubernetes: buildKubernetesSpecific,
  agent: buildAgentSpecific,
};

export function buildVisualSimulation(
  categoryId: CategoryId,
  point: GraphKnowledgePoint,
): VisualSimulation | undefined {
  if (!isPointVisualizable(categoryId, point)) {
    return undefined;
  }

  const key = getSimulationKey(categoryId, point.id);
  const customBuilder = customBuilders[key];

  return customBuilder ? customBuilder(point) : categoryBuilders[categoryId](point);
}

export function getVisualPatternLabel(categoryId: CategoryId, point: GraphKnowledgePoint) {
  return buildVisualSimulation(categoryId, point)?.pattern;
}
