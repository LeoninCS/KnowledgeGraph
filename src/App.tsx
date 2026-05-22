import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Bot,
  Boxes,
  CheckCircle2,
  CircleHelp,
  Container,
  Cpu,
  Database,
  GitBranch,
  Laptop,
  MemoryStick,
  Moon,
  Network,
  PlayCircle,
  Rabbit,
  RefreshCw,
  Search,
  Send,
  Server,
  ShieldCheck,
  Sun,
  ExternalLink,
  Waypoints,
  Zap,
  ZoomIn,
  ZoomOut,
} from "lucide-react";
import {
  type CSSProperties,
  type MouseEvent as ReactMouseEvent,
  type PointerEvent as ReactPointerEvent,
  type ReactNode,
  type WheelEvent as ReactWheelEvent,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  categoryColors,
  categorySourceRefs,
  knowledgeSources,
  networkKnowledgeExplanations,
  knowledgePointsByCategory,
  type GraphKnowledgePoint,
} from "./data/knowledge-points";
import type { CategoryId, Difficulty } from "./data/types";

type Locale = "zh" | "en";
type Theme = "light" | "dark";
type Page = "home" | "detail" | "simulator" | "about";
type Step = 0 | 1 | 2 | 3;
type GraphMode = "core" | "all";
type PointPriority = "primary" | "secondary";

const copy = {
  zh: {
    appName: "KnowledgeGraph",
    navGraph: "知识图谱",
    github: "GitHub",
    about: "关于",
    search: "搜索",
    searchPlaceholder: "搜索知识点，比如 TCP、进程、索引",
    searchResults: "搜索结果",
    noSearchResult: "没有匹配的知识点",
    aboutTitle: "关于 KnowledgeGraph",
    aboutLead: "KnowledgeGraph 是面向计算机基础学习者的可视化学习项目，用分类图谱、知识详情和交互模拟器组织抽象概念。",
    aboutSections: [
      ["项目目标", "把网络、操作系统、数据结构、数据库、后端工程和 AI Agent 等主题放进统一知识图谱，帮助学习者看到知识之间的连接。"],
      ["当前能力", "左侧分类切换专题图谱，顶部搜索快速定位知识点，图谱节点进入详情页，TCP 三次握手提供交互式模拟。"],
      ["内容结构", "每个分类包含一组核心知识点，知识点带难度、关系和学习入口，后续可以继续扩展更多详情页和模拟器。"],
    ],
    themeLight: "浅色",
    themeDark: "深色",
    lang: "中文",
    learningPath: "所需知识",
    fundamentals: "分类总览",
    categories: [
      ["network", "计算机网络"],
      ["os", "操作系统"],
      ["algorithm", "数据结构与算法"],
      ["mysql", "Mysql"],
      ["redis", "Redis"],
      ["rabbitmq", "RabbitMQ"],
      ["backend", "后端进阶"],
      ["docker", "Docker"],
      ["kubernetes", "Kubernetes"],
      ["agent", "Agent"],
    ],
    difficultyFilter: "难度筛选",
    difficulties: ["简单", "中等", "困难"],
    upgrade: "升级",
    focused: "当前聚焦",
    graphMode: "图谱范围",
    coreMode: "核心",
    allMode: "全部",
    graphHint: "滚轮缩放 · Shift + 滚轮横移 · 拖动空白处平移",
    medium: "中等",
    tcpTitle: "TCP",
    tcpSummary: "可靠连接 · 三次握手 · 有序传输",
    prerequisites: "前置知识",
    related: "相关知识",
    categoryOverview: "分类概览",
    knowledgePoints: "知识点",
    sourceReferences: "参考来源",
    sourceDescription: "本分类知识点参考以下八股文和面试资料整理。",
    detailInfo: "知识点信息",
    explanation: "讲解",
    scenarioExamples: "典型问题",
    learningOrder: "学习顺序",
    openReference: "打开来源",
    documentation: "文档",
    ipProtocol: "IP 协议",
    networkLayer: "网络层",
    udp: "UDP",
    connectionless: "无连接协议",
    handshake: "三次握手",
    viewDetail: "详情",
    breadcrumbGraph: "知识图谱",
    breadcrumbNetwork: "计算机网络",
    detailTitle: "TCP 三次握手",
    detailSubtitle: "建立连接，确认双方收发能力，同步初始序列号。",
    transportLayer: "传输层",
    reliable: "可靠传输",
    coreConcept: "核心概念",
    conceptBody: "TCP 先建立可靠连接，再开始传输数据。",
    consistency: "连接一致性",
    consistencyBody: "同步序列号",
    initialization: "资源初始化",
    initializationBody: "准备传输资源",
    handshakeSteps: "握手步骤",
    steps: [
      {
        title: "第一次握手：SYN",
        body: "客户端发送 SYN，声明 seq=x。",
        quote: "我想建立连接，我的初始序列号是 x。",
      },
      {
        title: "第二次握手：SYN-ACK",
        body: "服务端返回 SYN-ACK，声明 seq=y，确认 ack=x+1。",
        quote: "收到你的请求。我同意建立连接，我的序列号是 y。",
      },
      {
        title: "第三次握手：ACK",
        body: "客户端发送 ACK，确认 ack=y+1。",
        quote: "我知道你准备好了。连接建立成功。",
      },
    ],
    stateTable: "状态变化表",
    tableHeads: ["角色", "初始状态", "发送/接收", "最终状态"],
    tableRows: [
      ["Client", "CLOSED", "发送 SYN", "SYN-SENT"],
      ["Server", "LISTEN", "收 SYN，发 SYN-ACK", "SYN-RCVD"],
      ["Client", "SYN-SENT", "收 SYN-ACK，发 ACK", "ESTABLISHED"],
      ["Server", "SYN-RCVD", "收 ACK", "ESTABLISHED"],
    ],
    interactive: "交互式仿真",
    interactiveBody: "手动发送 SYN、SYN-ACK、ACK。",
    startSimulator: "开始模拟",
    contents: "本章目录",
    contentItems: [
      "核心概念",
      "握手步骤",
      "状态变化",
      "模拟器",
      "下一章",
    ],
    nextStep: "下一章节",
    dataTransfer: "TCP 数据传输",
    visualCaption: "连接生命周期",
    backDetail: "返回详情",
    simulatorTitle: "TCP 三次握手模拟器",
    reset: "重置",
    client: "客户端",
    server: "服务器",
    physicalLink: "物理链路",
    currentTask: "当前任务",
    actionPanel: "操作面板",
    feedback: "操作反馈",
    history: "历史记录",
    waitingFeedback: "等待操作反馈",
    waitingAction: "等待操作",
    tasks: [
      "发送第一个报文。",
      "返回确认报文。",
      "发送最终确认。",
      "连接建立完成，双方进入 ESTABLISHED 状态。",
    ],
    actions: ["发送 SYN", "发送 SYN-ACK", "发送 ACK"],
    invalid: "当前步骤请选择高亮操作。",
    feedbacks: [
      "客户端进入 SYN-SENT。",
      "服务端进入 SYN-RCVD。",
      "双方进入 ESTABLISHED。",
    ],
    historyItems: [
      "客户端发出 SYN (seq=x)",
      "服务端返回 SYN-ACK (seq=y, ack=x+1)",
      "客户端发出 ACK (ack=y+1)",
    ],
    timeline: ["SYN 发送", "SYN-ACK 确认", "ACK 确认", "ESTABLISHED"],
    complete: "完成",
    proAccess: "专业版",
    unlock: "更多图谱",
    privacy: "隐私政策",
    terms: "服务条款",
    feedbackLink: "反馈建议",
  },
  en: {
    appName: "KnowledgeGraph",
    navGraph: "Knowledge Graph",
    github: "GitHub",
    about: "About",
    search: "Search",
    searchPlaceholder: "Search topics, e.g. TCP, process, index",
    searchResults: "Search Results",
    noSearchResult: "No matching knowledge points",
    aboutTitle: "About KnowledgeGraph",
    aboutLead: "KnowledgeGraph is a visual learning project for computer science fundamentals, organizing abstract concepts with category graphs, knowledge details, and interactive simulators.",
    aboutSections: [
      ["Goal", "Put networks, operating systems, data structures, databases, backend engineering, and AI Agent topics into one connected knowledge graph."],
      ["Current Features", "Use the left sidebar to switch topic graphs, search from the top bar, open node details, and run the TCP three-way handshake simulator."],
      ["Content Model", "Each category contains core knowledge points with difficulty, relationships, and learning entry points, ready for more detail pages and simulators."],
    ],
    themeLight: "Light",
    themeDark: "Dark",
    lang: "English",
    learningPath: "Required Knowledge",
    fundamentals: "Category Overview",
    categories: [
      ["network", "Computer Networks"],
      ["os", "Operating Systems"],
      ["algorithm", "Data Structures & Algorithms"],
      ["mysql", "Mysql"],
      ["redis", "Redis"],
      ["rabbitmq", "RabbitMQ"],
      ["backend", "Backend Advanced"],
      ["docker", "Docker"],
      ["kubernetes", "Kubernetes"],
      ["agent", "Agent"],
    ],
    difficultyFilter: "Difficulty Filter",
    difficulties: ["Easy", "Medium", "Hard"],
    upgrade: "Upgrade",
    focused: "Focused",
    graphMode: "Graph Scope",
    coreMode: "Core",
    allMode: "All",
    graphHint: "Wheel to zoom · Shift + wheel to pan horizontally · Drag blank canvas to pan",
    medium: "Medium",
    tcpTitle: "TCP",
    tcpSummary: "Reliable connection · three-step handshake · ordered delivery",
    prerequisites: "Prerequisites",
    related: "Related",
    categoryOverview: "Category Overview",
    knowledgePoints: "Knowledge Points",
    sourceReferences: "References",
    sourceDescription: "Knowledge points in this category are organized from these interview and learning resources.",
    detailInfo: "Knowledge Info",
    explanation: "Explanation",
    scenarioExamples: "Typical Questions",
    learningOrder: "Learning Order",
    openReference: "Open Reference",
    documentation: "Documentation",
    ipProtocol: "IP Protocol",
    networkLayer: "Network Layer",
    udp: "UDP",
    connectionless: "Connectionless",
    handshake: "Three-Way Handshake",
    viewDetail: "Details",
    breadcrumbGraph: "Knowledge Graph",
    breadcrumbNetwork: "Computer Networks",
    detailTitle: "TCP Three-Way Handshake",
    detailSubtitle: "Establish connection, verify both sides, sync sequence numbers.",
    transportLayer: "Transport Layer",
    reliable: "Reliable",
    coreConcept: "Core Concept",
    conceptBody: "TCP establishes a reliable connection before data transfer.",
    consistency: "Connection Consistency",
    consistencyBody: "Sync sequence numbers",
    initialization: "Resource Initialization",
    initializationBody: "Prepare transfer resources",
    handshakeSteps: "Handshake Steps",
    steps: [
      {
        title: "First Handshake: SYN",
        body: "Client sends SYN with seq=x.",
        quote: "I want to connect. My initial sequence number is x.",
      },
      {
        title: "Second Handshake: SYN-ACK",
        body: "Server returns SYN-ACK with seq=y and ack=x+1.",
        quote: "Request received. I accept and my sequence number is y.",
      },
      {
        title: "Third Handshake: ACK",
        body: "Client sends ACK with ack=y+1.",
        quote: "I know you are ready. The connection is established.",
      },
    ],
    stateTable: "State Transition",
    tableHeads: ["Role", "Initial State", "Send / Receive", "Final State"],
    tableRows: [
      ["Client", "CLOSED", "Send SYN", "SYN-SENT"],
      ["Server", "LISTEN", "Receive SYN, send SYN-ACK", "SYN-RCVD"],
      ["Client", "SYN-SENT", "Receive SYN-ACK, send ACK", "ESTABLISHED"],
      ["Server", "SYN-RCVD", "Receive ACK", "ESTABLISHED"],
    ],
    interactive: "Interactive Simulation",
    interactiveBody: "Send SYN, SYN-ACK, and ACK manually.",
    startSimulator: "Start Simulation",
    contents: "Contents",
    contentItems: [
      "Core Concept",
      "Steps",
      "States",
      "Simulator",
      "Next",
    ],
    nextStep: "Next Chapter",
    dataTransfer: "TCP Data Transfer",
    visualCaption: "Connection lifecycle",
    backDetail: "Back to Detail",
    simulatorTitle: "TCP Handshake Simulator",
    reset: "Reset",
    client: "Client",
    server: "Server",
    physicalLink: "Physical Link",
    currentTask: "Current Task",
    actionPanel: "Action Panel",
    feedback: "Feedback",
    history: "History",
    waitingFeedback: "Waiting for feedback",
    waitingAction: "Waiting for action",
    tasks: [
      "Send the first packet.",
      "Return the confirmation packet.",
      "Send the final ACK.",
      "Connection established. Both sides are now ESTABLISHED.",
    ],
    actions: ["Send SYN", "Send SYN-ACK", "Send ACK"],
    invalid: "Choose the highlighted action for this step.",
    feedbacks: [
      "Client is SYN-SENT.",
      "Server is SYN-RCVD.",
      "Both sides are ESTABLISHED.",
    ],
    historyItems: [
      "Client sent SYN (seq=x)",
      "Server returned SYN-ACK (seq=y, ack=x+1)",
      "Client sent ACK (ack=y+1)",
    ],
    timeline: ["SYN Sent", "SYN-ACK Confirmed", "ACK Confirmed", "ESTABLISHED"],
    complete: "Complete",
    proAccess: "Pro Access",
    unlock: "More graphs",
    privacy: "Privacy",
    terms: "Terms",
    feedbackLink: "Feedback",
  },
} as const;

type Copy = (typeof copy)[Locale];

const categoryIcons = [
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

function getCategoryLabel(t: Copy, categoryId: CategoryId) {
  return t.categories.find(([id]) => id === categoryId)?.[1] ?? categoryId;
}

function getKnowledgeLabel(point: GraphKnowledgePoint, locale: Locale) {
  return locale === "zh" ? point.zh : point.en;
}

function getDifficultyLabel(difficulty: Difficulty, t: Copy) {
  const labels = {
    easy: t.difficulties[0],
    medium: t.difficulties[1],
    hard: t.difficulties[2],
  };

  return labels[difficulty];
}

function normalizeSearch(value: string) {
  return value.trim().toLowerCase();
}

function pointMatchesSearch(
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

function findFirstSearchMatch(t: Copy, query: string) {
  const normalized = normalizeSearch(query);

  if (!normalized) {
    return undefined;
  }

  for (const [rawId] of t.categories) {
    const categoryId = rawId as CategoryId;
    const categoryLabel = getCategoryLabel(t, categoryId);
    const match = knowledgePointsByCategory[categoryId].find((point) =>
      pointMatchesSearch(point, categoryLabel, normalized),
    );

    if (match) {
      return categoryId;
    }
  }

  return undefined;
}

const areaLabelMap: Record<string, { zh: string; en: string }> = {
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

const essentialKnowledgeIds: Record<CategoryId, string[]> = {
  network: [
    "osi-model",
    "tcp-ip-model",
    "arp",
    "ip",
    "subnet",
    "tcp",
    "tcp-handshake",
    "tcp-four-way-wave",
    "udp",
    "dns",
    "http",
    "https",
    "tls",
    "load-balancing",
  ],
  os: [
    "process",
    "thread",
    "context-switch",
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
    "linux-command",
  ],
  algorithm: [
    "time-complexity",
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
    "quick-sort",
    "backtracking",
    "dynamic-programming",
  ],
  mysql: [
    "sql",
    "join",
    "innodb",
    "mysql-index",
    "b-plus-tree",
    "transaction",
    "isolation-level",
    "mvcc",
    "redo-log",
    "undo-log",
    "binlog",
    "lock",
    "explain",
    "replication",
  ],
  redis: [
    "redis-data-types",
    "redis-string",
    "redis-hash",
    "redis-list",
    "redis-set",
    "redis-zset",
    "redis-persistence",
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
    "amqp",
    "producer",
    "consumer",
    "exchange",
    "queue",
    "binding",
    "routing-key",
    "publisher-confirm",
    "consumer-ack",
    "persistent-message",
    "dead-letter-queue",
    "delay-queue",
    "retry",
    "idempotency",
    "order-consumption",
    "peak-shaving",
  ],
  backend: [
    "api-design",
    "authentication",
    "authorization",
    "jwt",
    "api-gateway",
    "rate-limit",
    "circuit-breaker",
    "fallback",
    "timeout",
    "distributed-lock",
    "database-transaction",
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
  ],
  kubernetes: [
    "cluster",
    "kubectl",
    "pod",
    "deployment",
    "service",
    "ingress",
    "configmap",
    "secret",
    "namespace",
    "node",
    "scheduler",
    "probe",
    "volume",
    "hpa",
    "rolling-update",
    "troubleshooting",
  ],
  agent: [
    "llm",
    "token",
    "context-window",
    "prompt",
    "system-prompt",
    "structured-output",
    "tool-calling",
    "function-calling",
    "rag",
    "embedding",
    "retrieval",
    "memory",
    "planner",
    "reflection",
    "multi-agent",
    "evaluation",
    "safety-boundary",
    "prompt-injection",
    "workflow-orchestration",
  ],
};

function getAreaKey(point: GraphKnowledgePoint) {
  return point.area ?? point.layer ?? "foundation";
}

function getAreaLabel(area: string, locale: Locale) {
  const known = areaLabelMap[area];

  if (known) {
    return known[locale];
  }

  return area
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

type ExplanationItem = {
  title: string;
  body: string;
};

const instructorExplanationTitles = [
  "概念定位",
  "标准答法",
  "核心机制",
  "特殊情况",
  "追问方向",
  "工程实践",
  "掌握标准",
  "常见误区",
  "学习路径",
] as const;

const categoryExplanationFrames: Record<
  CategoryId,
  {
    scope: string;
    mechanism: string;
    interview: string;
    specialCases: string;
    answerPattern: string;
    practice: string;
  }
> = {
  network: {
    scope: "关注数据从应用产生到链路传输的完整路径，核心线索是分层、封装、寻址、连接状态和错误恢复。",
    mechanism:
      "分析时按应用层数据、传输层端口和连接、网络层 IP 与路由、数据链路层 MAC 与帧、物理链路信号的顺序展开。",
    interview:
      "面试回答适合先画出通信链路，再说明协议字段、状态变化、异常分支和常用排查命令。",
    specialCases:
      "特殊情况要覆盖丢包、乱序、重传、超时、半连接队列、MTU、DNS 缓存、证书过期、安全组、防火墙、NAT、代理和负载均衡。",
    answerPattern:
      "标准答法按“它解决什么问题 -> 位于哪一层 -> 关键字段或状态 -> 正常流程 -> 异常分支 -> 排查命令”展开。",
    practice:
      "工程排查常用 ping、traceroute、dig、curl、ss、tcpdump、网关路由表和服务日志，把现象定位到链路、路由、传输连接或应用协议。",
  },
  os: {
    scope: "关注 CPU、内存、文件、设备和网络资源如何被内核抽象并分配给应用程序。",
    mechanism:
      "分析时从用户态请求进入内核开始，看系统调用、调度队列、内核数据结构、资源状态和返回结果如何变化。",
    interview:
      "面试回答适合把概念、状态流转、底层结构、性能代价和 Linux 可观察现象串成一条线。",
    specialCases:
      "特殊情况要覆盖竞争条件、阻塞等待、死锁、饥饿、上下文切换过高、内存泄漏、缺页、文件描述符耗尽、I/O 阻塞和权限边界。",
    answerPattern:
      "标准答法按“内核抽象 -> 数据结构 -> 状态流转 -> 资源代价 -> Linux 命令观测 -> 线上处理”展开。",
    practice:
      "工程排查常用 top、ps、strace、lsof、ss、vmstat、iostat、dmesg、perf 和日志，重点观察 CPU、内存、I/O、上下文切换和阻塞状态。",
  },
  algorithm: {
    scope: "关注数据如何组织、操作如何设计、复杂度如何控制，以及边界条件如何保证正确性。",
    mechanism:
      "分析时先确定输入规模和数据关系，再选择数组、链表、栈、队列、哈希、树、堆、图或动态规划等模型。",
    interview:
      "面试回答适合按问题建模、核心不变量、状态转移或遍历顺序、复杂度、边界用例来展开。",
    specialCases:
      "特殊情况要覆盖空输入、单元素、重复值、负数、溢出、环、连通性、排序稳定性、递归栈深度、剪枝条件和极端规模。",
    answerPattern:
      "标准答法按“题型识别 -> 数据结构选择 -> 不变量或状态定义 -> 转移/遍历顺序 -> 复杂度 -> 边界用例”展开。",
    practice:
      "刷题时要写出模板、手推样例、检查空输入和极端规模，再对比递归、迭代、哈希优化、剪枝和空间压缩方案。",
  },
  mysql: {
    scope: "关注 SQL 进入 MySQL 后如何经过连接器、解析器、优化器、执行器和 InnoDB 完成读写。",
    mechanism:
      "分析时顺着索引结构、Buffer Pool、事务视图、锁、redo log、undo log、binlog 和主从复制观察数据一致性与性能。",
    interview:
      "面试回答适合把执行计划、索引命中、事务隔离、锁冲突、日志恢复和慢查询治理一起说明。",
    specialCases:
      "特殊情况要覆盖索引失效、回表、覆盖索引、间隙锁、幻读、死锁、长事务、主从延迟、崩溃恢复、慢查询和大表变更。",
    answerPattern:
      "标准答法按“SQL 如何执行 -> 索引如何命中 -> 锁和事务如何保证正确性 -> 日志如何恢复 -> 慢查询如何优化”展开。",
    practice:
      "工程排查常用 EXPLAIN、慢查询日志、SHOW ENGINE INNODB STATUS、锁等待、主从延迟、表结构和索引基数来定位问题。",
  },
  redis: {
    scope: "关注内存数据结构、命令复杂度、缓存治理、持久化、高可用和集群路由。",
    mechanism:
      "分析时从命令访问数据结构开始，继续看过期、淘汰、持久化、复制、哨兵或集群槽位如何影响结果。",
    interview:
      "面试回答适合覆盖使用场景、底层编码、时间复杂度、缓存一致性、失效风险和高可用方案。",
    specialCases:
      "特殊情况要覆盖大 Key、热 Key、缓存穿透、击穿、雪崩、过期风暴、淘汰误伤、持久化阻塞、复制延迟、脑裂和锁过期。",
    answerPattern:
      "标准答法按“使用场景 -> 数据结构或命令 -> 时间复杂度 -> 失效风险 -> 高可用方案 -> 线上治理”展开。",
    practice:
      "工程排查常用 INFO、SLOWLOG、MEMORY、MONITOR、big key 与 hot key 分析、命中率、复制延迟和集群槽位状态。",
  },
  rabbitmq: {
    scope: "关注消息从生产者进入交换机、路由到队列、被消费者确认的全过程。",
    mechanism:
      "分析时按生产者确认、交换机类型、绑定关系、路由键、队列持久化、消费者 ack、死信与重试链路展开。",
    interview:
      "面试回答适合说明可靠投递、重复消费、顺序消费、消息积压、削峰填谷和幂等处理。",
    specialCases:
      "特殊情况要覆盖生产者发送失败、路由失败、消息丢失、重复投递、消费超时、队列堆积、死信循环、重试风暴和顺序破坏。",
    answerPattern:
      "标准答法按“消息链路 -> 可靠性保证 -> 消费语义 -> 异常重试 -> 幂等设计 -> 积压治理”展开。",
    practice:
      "工程排查重点看连接数、通道数、队列堆积、消费速率、ack 状态、重试次数、死信队列和业务幂等日志。",
  },
  backend: {
    scope: "关注一次请求在网关、认证、业务、缓存、数据库、消息队列和可观测系统中的完整链路。",
    mechanism:
      "分析时看流量入口、身份校验、限流熔断、事务边界、异步化、缓存策略、监控告警和失败恢复。",
    interview:
      "面试回答适合从目标、架构组件、数据一致性、性能瓶颈、故障场景和降级策略展开。",
    specialCases:
      "特殊情况要覆盖重试放大、雪崩、部分失败、幂等冲突、分布式事务悬挂、缓存一致性、限流误杀、降级兜底和链路盲区。",
    answerPattern:
      "标准答法按“业务目标 -> 架构组件 -> 一致性策略 -> 性能瓶颈 -> 故障预案 -> 可观测验证”展开。",
    practice:
      "工程落地要配合压测、指标、日志、链路追踪、灰度发布、回滚预案和容量规划形成闭环。",
  },
  docker: {
    scope: "关注镜像如何构建、容器如何隔离运行、网络与存储如何挂载，以及应用如何交付。",
    mechanism:
      "分析时按 Dockerfile 分层、构建缓存、容器生命周期、网络命名空间、数据卷、日志和资源限制展开。",
    interview:
      "面试回答适合说明镜像与容器关系、常见指令、Compose 编排、多阶段构建和线上部署注意点。",
    specialCases:
      "特殊情况要覆盖镜像膨胀、缓存失效、端口冲突、挂载覆盖、权限问题、容器退出、日志暴涨、资源限制和网络隔离。",
    answerPattern:
      "标准答法按“镜像构建 -> 容器运行 -> 网络存储 -> 日志资源 -> Compose 编排 -> 部署排障”展开。",
    practice:
      "工程排查常用 docker ps、logs、inspect、exec、stats、events、network inspect 和镜像层分析。",
  },
  kubernetes: {
    scope: "关注声明式资源如何由控制面调谐到集群真实状态。",
    mechanism:
      "分析时从 YAML 提交到 API Server 开始，看控制器、调度器、kubelet、容器运行时、Service 和 Ingress 如何协作。",
    interview:
      "面试回答适合说明资源职责、控制器调谐、Pod 生命周期、服务发现、滚动更新、弹性伸缩和故障定位。",
    specialCases:
      "特殊情况要覆盖镜像拉取失败、调度失败、探针失败、CrashLoopBackOff、OOMKilled、Service 解析失败、滚动更新卡住和资源不足。",
    answerPattern:
      "标准答法按“资源定义 -> 控制器调谐 -> 调度运行 -> 服务访问 -> 弹性发布 -> 故障定位”展开。",
    practice:
      "工程排查常用 kubectl get、describe、logs、events、exec、top、rollout、探针状态、调度条件和控制器日志。",
  },
  agent: {
    scope: "关注大模型如何结合提示词、工具、检索、记忆、规划和评估完成任务。",
    mechanism:
      "分析时看目标理解、上下文构造、工具调用、观察结果、记忆读写、反思修正和安全边界如何形成闭环。",
    interview:
      "面试回答适合覆盖能力边界、失败模式、RAG 质量、工具权限、成本延迟、评估指标和安全治理。",
    specialCases:
      "特殊情况要覆盖幻觉、提示注入、检索召回不足、上下文污染、工具调用失败、权限越界、成本失控、长任务中断和评估漂移。",
    answerPattern:
      "标准答法按“任务目标 -> 上下文来源 -> 工具和检索 -> 规划执行 -> 评估反馈 -> 安全边界”展开。",
    practice:
      "工程落地要记录提示词、检索命中、工具调用轨迹、模型输出、人工反馈、成本、延迟和风险拦截结果。",
  },
};

function joinReadable(values: string[], emptyText: string, limit = 4) {
  const trimmed = values.filter(Boolean).slice(0, limit);

  if (!trimmed.length) {
    return emptyText;
  }

  return trimmed.join("、");
}

function getPointScenarioItems(point: GraphKnowledgePoint) {
  return (
    point.typicalProblems ??
    point.useCases ??
    point.commonCommands ??
    point.practiceAdvice ??
    point.opsScenarios ??
    point.applicationScenarios ??
    point.commonIssues ??
    []
  );
}

function getPointCoreText(point: GraphKnowledgePoint, t: Copy) {
  const listValue =
    point.useCases ??
    point.practiceAdvice ??
    point.opsScenarios ??
    point.applicationScenarios ??
    point.commonIssues ??
    point.commonCommands;

  return (
    point.summary ??
    point.concept ??
    point.engineeringValue ??
    (listValue?.length ? listValue.join("、") : undefined) ??
    t.sourceDescription
  );
}

function ensureSentence(value: string) {
  const trimmed = value.trim();

  if (!trimmed) {
    return trimmed;
  }

  return /[。.!！？?]$/.test(trimmed) ? trimmed : `${trimmed}。`;
}

function getPointLabelsByIds(
  ids: string[],
  points: GraphKnowledgePoint[],
  locale: Locale,
) {
  return ids
    .map((id) => points.find((item) => item.id === id))
    .filter((item): item is GraphKnowledgePoint => Boolean(item))
    .map((item) => getKnowledgeLabel(item, locale));
}

function buildDetailedExplanationItems(
  point: GraphKnowledgePoint,
  activeCategory: CategoryId,
  locale: Locale,
  t: Copy,
) {
  const points = knowledgePointsByCategory[activeCategory];
  const frame = categoryExplanationFrames[activeCategory];
  const categoryLabel = getCategoryLabel(t, activeCategory);
  const pointTitle = getKnowledgeLabel(point, locale);
  const areaLabel = getAreaLabel(getAreaKey(point), locale);
  const difficulty = getDifficultyLabel(point.difficulty, t);
  const coreText = ensureSentence(getPointCoreText(point, t));
  const prerequisiteLabels = getPointLabelsByIds(point.prerequisites, points, locale);
  const relatedLabels = getPointLabelsByIds(point.related, points, locale);
  const scenarioItems = getPointScenarioItems(point);
  const sourceTitles = (point.sourceRefs ?? categorySourceRefs[activeCategory])
    .map((sourceRef) => knowledgeSources[sourceRef]?.title)
    .filter(Boolean);
  const networkNotes =
    activeCategory === "network" ? networkKnowledgeExplanations[point.id] : undefined;
  const commandText = point.commonCommands?.length
    ? `常用命令可以从 ${joinReadable(point.commonCommands, "命令集合")} 开始练习。`
    : "";
  const issueText = point.commonIssues?.length
    ? `常见问题包括 ${joinReadable(point.commonIssues, "配置、容量、延迟和一致性问题")}。`
    : "";
  const scenarioText = scenarioItems.length
    ? `典型追问可以围绕 ${joinReadable(scenarioItems, "核心机制、边界条件和工程排查")} 展开。`
    : "典型追问通常围绕核心机制、边界条件、性能影响和工程排查展开。";
  const sourceText = sourceTitles.length
    ? `当前内容参考 ${joinReadable(sourceTitles, "项目资料", 3)} 的八股文与面试资料整理。`
    : t.sourceDescription;
  const networkDetail = networkNotes?.length
    ? `计网专项补充：${networkNotes.slice(0, 2).join(" ")}`
    : "";
  const masteryText = [
    `能用自己的话解释 ${pointTitle} 解决的核心问题`,
    `能画出 ${pointTitle} 的关键流程或数据结构`,
    `能说清 ${pointTitle} 的边界条件、性能影响和失败场景`,
    `能把 ${pointTitle} 和 ${joinReadable(relatedLabels, "相关知识", 2)} 放在同一条链路里分析`,
  ];
  const pitfallText = [
    `只背定义，缺少流程和状态变化`,
    `只讲正常路径，遗漏异常分支和恢复方式`,
    `只说结论，缺少命令、指标或案例支撑`,
  ];
  const interviewQuestions = scenarioItems.length
    ? scenarioItems.slice(0, 5)
    : [
        `${pointTitle}解决什么问题`,
        `${pointTitle}核心流程是什么`,
        `${pointTitle}有哪些边界条件`,
        `${pointTitle}线上异常怎么排查`,
      ];

  return [
    {
      title: instructorExplanationTitles[0],
      body: `${pointTitle}（${point.en}）属于${categoryLabel}的${areaLabel}主题，难度为${difficulty}。先让同学记住一句主线：${coreText}${frame.scope}面试中先讲“为什么需要它”，再讲“它靠什么机制工作”，最后补充“异常时怎么处理”。`,
    },
    {
      title: instructorExplanationTitles[1],
      body: `可以按这个口径回答：${frame.answerPattern}具体到 ${pointTitle}，开头先说它解决的核心问题，再把 ${joinReadable(prerequisiteLabels, categoryLabel, 3)} 作为前置背景，随后串到 ${joinReadable(relatedLabels, areaLabel, 3)}。这样答会显得有层次，面试官继续追问时也方便展开。`,
    },
    {
      title: instructorExplanationTitles[2],
      body: `${frame.mechanism}放到 ${pointTitle} 上，要重点讲清四件事：输入是什么、内部状态怎样变化、关键结构或协议字段是什么、输出如何被下一环节使用。${networkDetail}理解原理时可以画一条从“请求进入”到“结果返回”的链路，每个节点标出状态、代价和失败点。`,
    },
    {
      title: instructorExplanationTitles[3],
      body: `${frame.specialCases}落到 ${pointTitle} 上，至少要准备正常路径、失败路径、高并发路径和恢复路径。回答时可以主动补一句：真实线上问题通常出在边界条件，比如超时、重试、资源耗尽、状态残留、并发竞争或依赖服务异常。`,
    },
    {
      title: instructorExplanationTitles[4],
      body: `${frame.interview}回答 ${pointTitle} 时，先给定义，再讲流程或数据结构，随后补充和 ${joinReadable(relatedLabels, "相关概念")} 的联系。高频追问包括：${interviewQuestions.join("；")}。${scenarioText}`,
    },
    {
      title: instructorExplanationTitles[5],
      body: `${frame.practice}${commandText}${issueText}排查时按“现象范围 -> 关键指标 -> 日志或状态 -> 最小复现 -> 修复验证”走。讲给面试官时要说清你看什么指标、用什么命令、如何证明问题已经解决。`,
    },
    {
      title: instructorExplanationTitles[6],
      body: `学到可以面试输出的程度，至少要做到：${masteryText.join("；")}。课堂上我会要求同学用 1 分钟说定义、2 分钟讲机制、1 分钟讲特殊情况，再用 1 分钟给工程排查案例。这个节奏最适合面试现场。`,
    },
    {
      title: instructorExplanationTitles[7],
      body: `复习 ${pointTitle} 时常见失分点包括：${pitfallText.join("；")}。遇到追问时，把现象、原因、验证方式和解决方案按顺序说出来。回答越像一次完整排障，可信度越高。`,
    },
    {
      title: instructorExplanationTitles[8],
      body: `学习 ${pointTitle} 前先掌握 ${joinReadable(prerequisiteLabels, categoryLabel)}，学完后继续串联 ${joinReadable(relatedLabels, areaLabel)}。${sourceText}`,
    },
  ];
}

function getVisiblePoints(
  selectedCategory: CategoryId,
  allPoints: GraphKnowledgePoint[],
  matchedPoints: GraphKnowledgePoint[],
  graphMode: GraphMode,
  hasSearch: boolean,
) {
  const searchVisiblePoints = hasSearch && matchedPoints.length ? matchedPoints : allPoints;

  if (hasSearch || graphMode === "all") {
    return searchVisiblePoints;
  }

  const coreIdSet = new Set(essentialKnowledgeIds[selectedCategory]);

  return allPoints.filter((point) => coreIdSet.has(point.id));
}

function getPointPriority(
  selectedCategory: CategoryId,
  point: GraphKnowledgePoint,
  selectedKnowledgeId: string,
) {
  if (
    point.id === selectedKnowledgeId ||
    essentialKnowledgeIds[selectedCategory].includes(point.id)
  ) {
    return "primary";
  }

  return "secondary";
}

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

const clusterRingCapacities = [6, 10, 14, 18, 22, 26, 30];

function getClusterRingCount(pointCount: number) {
  let remaining = pointCount;
  let ringCount = 0;

  while (remaining > 0) {
    remaining -= clusterRingCapacities[ringCount] ?? 32;
    ringCount += 1;
  }

  return Math.max(1, ringCount);
}

function getClusterRadius(pointCount: number) {
  return 180 + (getClusterRingCount(pointCount) - 1) * 150 + 96;
}

function getChildPositionInCluster(
  index: number,
  total: number,
  center: { x: number; y: number },
) {
  let start = 0;
  let ring = 0;

  while (index >= start + (clusterRingCapacities[ring] ?? 32)) {
    start += clusterRingCapacities[ring] ?? 32;
    ring += 1;
  }

  const capacity = clusterRingCapacities[ring] ?? 32;
  const itemsInRing = Math.min(capacity, total - start);
  const indexInRing = index - start;
  const angleOffset = ring % 2 === 0 ? -90 : -90 + 360 / Math.max(itemsInRing * 2, 1);
  const angle = (angleOffset + (360 / Math.max(itemsInRing, 1)) * indexInRing) * (Math.PI / 180);
  const radius = 180 + ring * 150;

  return {
    x: center.x + Math.cos(angle) * radius,
    y: center.y + Math.sin(angle) * radius,
  };
}

function buildGraphItems(
  t: Copy,
  locale: Locale,
  selectedCategory: CategoryId,
  selectedKnowledgeId: string,
  graphMode: GraphMode,
  searchQuery: string,
) {
  const categoryLabel = getCategoryLabel(t, selectedCategory);
  const allPoints = knowledgePointsByCategory[selectedCategory];
  const hasSearch = normalizeSearch(searchQuery).length > 0;
  const points = hasSearch
    ? allPoints.filter((point) => pointMatchesSearch(point, categoryLabel, searchQuery))
    : [];
  const visiblePoints = getVisiblePoints(
    selectedCategory,
    allPoints,
    points,
    graphMode,
    hasSearch,
  );
  const groups = new Map<string, GraphKnowledgePoint[]>();

  visiblePoints.forEach((point) => {
    const area = getAreaKey(point);
    const group = groups.get(area) ?? [];

    group.push(point);
    groups.set(area, group);
  });

  const groupEntries = Array.from(groups.entries());
  const groupCount = Math.max(groupEntries.length, 1);
  const maxClusterRadius = Math.max(
    ...groupEntries.map(([, group]) => getClusterRadius(group.length)),
    240,
  );
  const branchRadius = Math.max(
    720,
    maxClusterRadius / Math.max(Math.sin(Math.PI / groupCount), 0.24) + 260,
  );
  const graphWidth = Math.ceil((branchRadius + maxClusterRadius + 380) * 2);
  const graphHeight = Math.ceil((branchRadius + maxClusterRadius + 380) * 2);
  const center = { x: graphWidth / 2, y: graphHeight / 2 };
  const categoryNode = {
    id: `category-${selectedCategory}`,
    label: categoryLabel,
    categoryId: selectedCategory,
    categoryLabel,
    count: hasSearch ? points.length : allPoints.length,
    kind: "category" as const,
    x: center.x,
    y: center.y,
    active: false,
    matched: true,
  };
  const groupNodes = groupEntries.map(([area, group], index) => {
    const angle = (-90 + (360 / groupCount) * index) * (Math.PI / 180);

    return {
      id: `group-${area}`,
      label: getAreaLabel(area, locale),
      categoryId: selectedCategory,
      categoryLabel,
      count: group.length,
      kind: "group" as const,
      area,
      x: center.x + Math.cos(angle) * branchRadius,
      y: center.y + Math.sin(angle) * branchRadius,
      active: false,
      matched: true,
    };
  });
  const groupNodeByArea = new Map(groupNodes.map((node) => [node.area, node]));
  const pointNodes = groupEntries.flatMap(([area, group]) => {
    const groupNode = groupNodeByArea.get(area) ?? categoryNode;

    return group.map((point, index) => {
      const position = getChildPositionInCluster(index, group.length, groupNode);

      return {
        id: point.id,
        label: getKnowledgeLabel(point, locale),
        categoryId: selectedCategory,
        categoryLabel,
        difficulty: point.difficulty,
        priority: getPointPriority(selectedCategory, point, selectedKnowledgeId) as PointPriority,
        kind: "knowledge" as const,
        area,
        x: position.x,
        y: position.y,
        active: point.id === selectedKnowledgeId,
        matched: hasSearch ? points.includes(point) : true,
      };
    });
  });
  const nodes = [categoryNode, ...groupNodes, ...pointNodes];
  const nodeById = new Map(pointNodes.map((node) => [node.id, node]));
  const lineKeys = new Set<string>();
  const lines: Array<{
    id: string;
    x1: number;
    y1: number;
    x2: number;
    y2: number;
    categoryId: CategoryId;
    relation: "category" | "group" | "prerequisite" | "related";
  }> = [];
  const addLine = (
    source: { id: string; x: number; y: number },
    target: { id: string; x: number; y: number },
    relation: "category" | "group" | "prerequisite" | "related",
  ) => {
    const orderedKey =
      relation === "related"
        ? [source.id, target.id].sort().join("::")
        : `${source.id}->${target.id}`;
    const key = `${relation}:${orderedKey}`;

    if (lineKeys.has(key)) {
      return;
    }

    lineKeys.add(key);
    lines.push({
      id: key,
      x1: source.x,
      y1: source.y,
      x2: target.x,
      y2: target.y,
      categoryId: selectedCategory,
      relation,
    });
  };

  groupEntries.forEach(([area, group]) => {
    const groupNode = groupNodeByArea.get(area);

    if (!groupNode) {
      return;
    }

    addLine(categoryNode, groupNode, "category");
    group.forEach((point) => {
      const pointNode = nodeById.get(point.id);

      if (pointNode) {
        addLine(groupNode, pointNode, "group");
      }
    });
  });

  visiblePoints.forEach((point) => {
    const target = nodeById.get(point.id);

    if (!target) {
      return;
    }

    point.prerequisites.forEach((sourceId) => {
      const source = nodeById.get(sourceId);

      if (source) {
        addLine(source, target, "prerequisite");
      }
    });

    point.related.slice(0, 2).forEach((relatedId) => {
      const related = nodeById.get(relatedId);

      if (related) {
        addLine(target, related, "related");
      }
    });
  });

  return {
    nodes,
    lines,
    groupLabels: [],
    width: graphWidth,
    height: graphHeight,
  };
}

function App() {
  const [page, setPage] = useState<Page>("home");
  const [theme, setTheme] = useState<Theme>("light");
  const [locale, setLocale] = useState<Locale>("zh");
  const [selectedCategory, setSelectedCategory] = useState<CategoryId>("network");
  const [selectedKnowledgeId, setSelectedKnowledgeId] = useState("tcp-handshake");
  const [searchQuery, setSearchQuery] = useState("");
  const t = copy[locale];

  function showCategoryGraph(categoryId: CategoryId) {
    setSelectedCategory(categoryId);
    setSelectedKnowledgeId(
      knowledgePointsByCategory[categoryId][0]?.id ?? selectedKnowledgeId,
    );
    setPage("home");
  }

  function openKnowledgeDetail(categoryId: CategoryId, pointId: string) {
    setSelectedCategory(categoryId);
    setSelectedKnowledgeId(pointId);
    setPage("detail");
  }

  function handleSearch(query: string) {
    setSearchQuery(query);
    const matchCategory = findFirstSearchMatch(t, query);

    if (matchCategory) {
      setSelectedCategory(matchCategory);
    }

    setPage("home");
  }

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.lang = locale === "zh" ? "zh-CN" : "en";
  }, [theme, locale]);

  return (
    <div className="app-shell">
      <TopNav
        page={page}
        setPage={setPage}
        theme={theme}
        setTheme={setTheme}
        locale={locale}
        setLocale={setLocale}
        searchQuery={searchQuery}
        setSearchQuery={handleSearch}
        t={t}
      />
      {page === "home" && (
        <HomePage
          setPage={setPage}
          t={t}
          locale={locale}
          selectedCategory={selectedCategory}
          selectedKnowledgeId={selectedKnowledgeId}
          searchQuery={searchQuery}
          onSelectCategory={showCategoryGraph}
          onOpenDetail={openKnowledgeDetail}
        />
      )}
      {page === "detail" && (
        <DetailPage
          setPage={setPage}
          t={t}
          locale={locale}
          activeCategory={selectedCategory}
          selectedKnowledgeId={selectedKnowledgeId}
          onSelectCategory={showCategoryGraph}
        />
      )}
      {page === "simulator" && <SimulatorPage setPage={setPage} t={t} />}
      {page === "about" && <AboutPage setPage={setPage} t={t} />}
    </div>
  );
}

function TopNav({
  page,
  setPage,
  theme,
  setTheme,
  locale,
  setLocale,
  searchQuery,
  setSearchQuery,
  t,
}: {
  page: Page;
  setPage: (page: Page) => void;
  theme: Theme;
  setTheme: (theme: Theme) => void;
  locale: Locale;
  setLocale: (locale: Locale) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  t: Copy;
}) {
  const themeLabel = theme === "light" ? t.themeLight : t.themeDark;

  return (
    <header className="top-nav">
      <div className="brand-area">
        <button className="brand" onClick={() => setPage("home")}>
          <Waypoints size={22} />
          <span>{t.appName}</span>
        </button>
        {page === "simulator" ? (
          <button className="nav-link inline-back" onClick={() => setPage("detail")}>
            <ArrowLeft size={16} />
            {t.backDetail}
          </button>
        ) : (
          <nav className="primary-nav">
            <button
              className={page === "home" ? "active" : ""}
              onClick={() => setPage("home")}
            >
              {t.navGraph}
            </button>
            <a
              href="https://github.com/LeoninCS/KnowledgeGraph"
              target="_blank"
              rel="noreferrer"
            >
              {t.github}
            </a>
            <button
              className={page === "about" ? "active" : ""}
              onClick={() => setPage("about")}
            >
              {t.about}
            </button>
          </nav>
        )}
      </div>
      <div className="top-actions">
        {page !== "simulator" && (
          <label className="search-box">
            <Search size={16} />
            <input
              value={searchQuery}
              onInput={(event) => setSearchQuery(event.currentTarget.value)}
              placeholder={t.searchPlaceholder}
            />
          </label>
        )}
        <button
          className="icon-text-button"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          title={themeLabel}
        >
          {theme === "light" ? <Sun size={17} /> : <Moon size={17} />}
          <span>{themeLabel}</span>
        </button>
        <button
          className="icon-text-button"
          onClick={() => setLocale(locale === "zh" ? "en" : "zh")}
        >
          <span className="language-mark">{locale === "zh" ? "中" : "EN"}</span>
          <span>{t.lang}</span>
        </button>
      </div>
    </header>
  );
}

function HomePage({
  setPage,
  t,
  locale,
  selectedCategory,
  selectedKnowledgeId,
  searchQuery,
  onSelectCategory,
  onOpenDetail,
}: {
  setPage: (page: Page) => void;
  t: Copy;
  locale: Locale;
  selectedCategory: CategoryId;
  selectedKnowledgeId: string;
  searchQuery: string;
  onSelectCategory: (categoryId: CategoryId) => void;
  onOpenDetail: (categoryId: CategoryId, pointId: string) => void;
}) {
  const graphCanvasRef = useRef<HTMLElement | null>(null);
  const [graphMode, setGraphMode] = useState<GraphMode>("core");
  const graph = useMemo(
    () => buildGraphItems(t, locale, selectedCategory, selectedKnowledgeId, graphMode, searchQuery),
    [t, locale, selectedCategory, selectedKnowledgeId, graphMode, searchQuery],
  );
  const [zoom, setZoom] = useState(0.82);
  const [pan, setPan] = useState({ x: 18, y: 20 });
  const [isSpacePressed, setIsSpacePressed] = useState(false);
  const dragStart = useRef<{
    pointerId: number;
    x: number;
    y: number;
    panX: number;
    panY: number;
  } | null>(null);
  const hasSearch = normalizeSearch(searchQuery).length > 0;
  const hasResults = graph.nodes.some(
    (node) => node.kind === "knowledge" && node.matched,
  );
  const resetView = () => {
    const canvasBox = graphCanvasRef.current?.getBoundingClientRect();
    const targetZoom = 0.58;

    setZoom(targetZoom);
    setPan({
      x: canvasBox ? canvasBox.width / 2 - (graph.width * targetZoom) / 2 : 18,
      y: canvasBox ? canvasBox.height / 2 - (graph.height * targetZoom) / 2 : 20,
    });
  };
  const zoomAt = (nextZoom: number, screenX?: number, screenY?: number) => {
    const clampedZoom = clamp(nextZoom, 0.28, 2.2);
    const canvasBox = graphCanvasRef.current?.getBoundingClientRect();

    if (!canvasBox || screenX === undefined || screenY === undefined) {
      setZoom(clampedZoom);
      return;
    }

    const cursorX = screenX - canvasBox.left;
    const cursorY = screenY - canvasBox.top;

    setPan((currentPan) => {
      const graphX = (cursorX - currentPan.x) / zoom;
      const graphY = (cursorY - currentPan.y) / zoom;

      return {
        x: cursorX - graphX * clampedZoom,
        y: cursorY - graphY * clampedZoom,
      };
    });
    setZoom(clampedZoom);
  };
  const updateZoom = (direction: 1 | -1) => {
    zoomAt(zoom + direction * 0.14);
  };
  const handlePointerDown = (event: ReactPointerEvent<HTMLElement>) => {
    if (event.button !== 0 && event.button !== 1) {
      return;
    }

    if (event.button === 1) {
      event.preventDefault();
    }

    event.currentTarget.setPointerCapture(event.pointerId);
    dragStart.current = {
      pointerId: event.pointerId,
      x: event.clientX,
      y: event.clientY,
      panX: pan.x,
      panY: pan.y,
    };
  };
  const handlePointerMove = (event: ReactPointerEvent<HTMLElement>) => {
    const start = dragStart.current;

    if (!start || start.pointerId !== event.pointerId) {
      return;
    }

    setPan({
      x: start.panX + event.clientX - start.x,
      y: start.panY + event.clientY - start.y,
    });
  };
  const handlePointerUp = (event: ReactPointerEvent<HTMLElement>) => {
    const start = dragStart.current;

    if (start?.pointerId === event.pointerId) {
      dragStart.current = null;
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  };
  const handleWheel = (event: ReactWheelEvent<HTMLElement>) => {
    event.preventDefault();

    if (event.ctrlKey || event.metaKey) {
      const scale = Math.exp(-event.deltaY * 0.0014);
      zoomAt(zoom * scale, event.clientX, event.clientY);
      return;
    }

    if (event.shiftKey) {
      setPan((currentPan) => ({
        x: currentPan.x - event.deltaY - event.deltaX,
        y: currentPan.y,
      }));
      return;
    }

    const scale = Math.exp(-event.deltaY * 0.0012);
    zoomAt(zoom * scale, event.clientX, event.clientY);
  };
  const handleDoubleClick = (event: ReactMouseEvent<HTMLElement>) => {
    zoomAt(zoom + 0.18, event.clientX, event.clientY);
  };

  useEffect(() => {
    resetView();
  }, [selectedCategory, searchQuery, graphMode, graph.width, graph.height]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.code === "Space") {
        setIsSpacePressed(true);
      }
    };
    const handleKeyUp = (event: KeyboardEvent) => {
      if (event.code === "Space") {
        setIsSpacePressed(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  return (
    <main className="home-layout page-with-topbar">
      <LearningSidebar t={t} active={selectedCategory} onSelect={onSelectCategory} />
      <section
        ref={graphCanvasRef}
        className={`graph-canvas ${isSpacePressed ? "space-pan" : ""}`}
        aria-label={t.navGraph}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        onWheel={handleWheel}
        onDoubleClick={handleDoubleClick}
      >
        {hasSearch && (
          <div className="search-status">
            <Search size={16} />
            <span>{hasResults ? t.searchResults : t.noSearchResult}</span>
            <strong>{searchQuery}</strong>
          </div>
        )}
        <div className="graph-controls" onPointerDown={(event) => event.stopPropagation()}>
          <button aria-label="Zoom in" onClick={() => updateZoom(1)}>
            <ZoomIn size={18} />
          </button>
          <button aria-label="Zoom out" onClick={() => updateZoom(-1)}>
            <ZoomOut size={18} />
          </button>
          <button aria-label="Center graph" onClick={resetView}>
            <Waypoints size={18} />
          </button>
        </div>
        <div
          className="graph-mode-switch"
          aria-label={t.graphMode}
          onPointerDown={(event) => event.stopPropagation()}
        >
          <button
            className={graphMode === "core" ? "active" : ""}
            onClick={() => setGraphMode("core")}
          >
            {t.coreMode}
          </button>
          <button
            className={graphMode === "all" ? "active" : ""}
            onClick={() => setGraphMode("all")}
          >
            {t.allMode}
          </button>
        </div>
        <div className="graph-hint">
          {t.graphHint}
        </div>
        <div
          className="graph-map"
          style={
            {
              width: graph.width,
              height: graph.height,
              transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`,
            } as CSSProperties
          }
        >
          <svg
            className="graph-lines"
            viewBox={`0 0 ${graph.width} ${graph.height}`}
            preserveAspectRatio="none"
          >
            {graph.lines.map((line) => (
              <line
                key={line.id}
                x1={line.x1}
                y1={line.y1}
                x2={line.x2}
                y2={line.y2}
                className={line.relation}
                style={{ "--category-color": categoryColors[line.categoryId] } as CSSProperties}
              />
            ))}
          </svg>
          {graph.nodes.map((node) => (
            <button
              key={node.id}
              className={`graph-node ${node.kind} ${
                node.kind === "knowledge" ? node.difficulty : ""
              } ${node.kind === "knowledge" ? node.priority : ""} ${
                graphMode === "core" ? "core-mode" : "all-mode"
              } ${node.active ? "active" : ""} ${
                node.kind === "knowledge" && hasSearch && node.matched ? "matched" : ""
              }`}
              style={
                {
                  left: node.x,
                  top: node.y,
                  "--category-color": categoryColors[node.categoryId],
                } as CSSProperties
              }
              onPointerDown={(event) => event.stopPropagation()}
              onClick={() => node.kind === "knowledge" && onOpenDetail(node.categoryId, node.id)}
              title={node.categoryLabel}
            >
              <span>{node.label}</span>
              {(node.kind === "category" || node.kind === "group") && <small>{node.count}</small>}
              {node.active && (
                <>
                  <span className="node-badge">
                    <Zap size={16} fill="currentColor" />
                  </span>
                  <strong>{t.focused}</strong>
                </>
              )}
            </button>
          ))}
        </div>
      </section>
    </main>
  );
}

function LearningSidebar({
  t,
  active,
  onSelect,
}: {
  t: Copy;
  active: CategoryId | "none";
  onSelect?: (categoryId: CategoryId) => void;
}) {
  return (
    <aside className="left-sidebar">
      <div className="path-header">
        <span>{t.learningPath}</span>
        <h2>{t.fundamentals}</h2>
      </div>
      <nav className="category-list">
        {t.categories.map(([id, name], index) => {
          const categoryId = id as CategoryId;
          const Icon = categoryIcons[index];
          const isActive = active === id;
          const count = knowledgePointsByCategory[categoryId].length;

          return (
            <button
              key={id}
              className={isActive ? "active" : ""}
              onClick={() => onSelect?.(categoryId)}
            >
              <span className="category-heading">
                <Icon size={19} />
                {name}
              </span>
              <small>{count}</small>
            </button>
          );
        })}
      </nav>
    </aside>
  );
}

function AboutPage({ setPage, t }: { setPage: (page: Page) => void; t: Copy }) {
  return (
    <main className="about-shell page-with-topbar">
      <section className="about-hero">
        <span className="pill">{t.about}</span>
        <h1>{t.aboutTitle}</h1>
        <p>{t.aboutLead}</p>
        <button className="primary-button" onClick={() => setPage("home")}>
          {t.navGraph}
          <ArrowRight size={17} />
        </button>
      </section>
      <section className="about-grid">
        {t.aboutSections.map(([title, body]) => (
          <article className="about-card" key={title}>
            <h2>{title}</h2>
            <p>{body}</p>
          </article>
        ))}
      </section>
    </main>
  );
}

function DetailPage({
  setPage,
  t,
  locale,
  activeCategory,
  selectedKnowledgeId,
  onSelectCategory,
}: {
  setPage: (page: Page) => void;
  t: Copy;
  locale: Locale;
  activeCategory: CategoryId;
  selectedKnowledgeId: string;
  onSelectCategory: (categoryId: CategoryId) => void;
}) {
  const points = knowledgePointsByCategory[activeCategory];
  const point =
    points.find((item) => item.id === selectedKnowledgeId) ?? points[0];
  const categoryLabel = getCategoryLabel(t, activeCategory);
  const pointTitle = point ? getKnowledgeLabel(point, locale) : categoryLabel;
  const pointSummary = point ? getPointCoreText(point, t) : t.sourceDescription;
  const explanationItems = point
    ? buildDetailedExplanationItems(point, activeCategory, locale, t)
    : [];
  const areaLabel = point ? getAreaLabel(getAreaKey(point), locale) : categoryLabel;
  const pointSourceRefs = point?.sourceRefs ?? categorySourceRefs[activeCategory];
  const pointSources = pointSourceRefs.map((sourceRef) => knowledgeSources[sourceRef]);
  const prerequisiteLabels = point
    ? getPointLabelsByIds(point.prerequisites, points, locale)
    : [];
  const relatedLabels = point ? getPointLabelsByIds(point.related, points, locale) : [];
  const scenarioItems = point ? getPointScenarioItems(point) : [];
  const learningOrder = point?.order ?? point?.learningPathPosition;

  return (
    <main className="detail-shell page-with-topbar">
      <LearningSidebar t={t} active={activeCategory} onSelect={onSelectCategory} />
      <div className="detail-content">
        <nav className="breadcrumbs">
          <button onClick={() => setPage("home")}>{t.breadcrumbGraph}</button>
          <ArrowRight size={14} />
          <span>{categoryLabel}</span>
          <ArrowRight size={14} />
          <strong>{pointTitle}</strong>
        </nav>
        <div className="detail-grid">
          <article className="article-flow">
            <header className="hero-panel">
              <div className="tag-row">
                {point && (
                  <span className="pill accent-teal">
                    {getDifficultyLabel(point.difficulty, t)}
                  </span>
                )}
                <span className="pill">{areaLabel}</span>
                {learningOrder && <span className="pill">#{learningOrder}</span>}
              </div>
              <h1>{pointTitle}</h1>
              <p>{pointSummary}</p>
            </header>
            <InfoSection title={t.detailInfo}>
              <div className="summary-strip">
                <Network size={20} />
                <p>{pointSummary}</p>
              </div>
              <div className="mini-facts">
                <span>{categoryLabel}</span>
                <span>{areaLabel}</span>
                {point?.en && <span>{point.en}</span>}
              </div>
            </InfoSection>
            {explanationItems.length > 0 && (
              <InfoSection title={t.explanation}>
                <div className="explanation-flow">
                  {explanationItems.map((item) => (
                    <section key={item.title} className="explanation-card">
                      <h3>{item.title}</h3>
                      <p>{item.body}</p>
                    </section>
                  ))}
                </div>
              </InfoSection>
            )}
            <InfoSection title={t.prerequisites}>
              <div className="chip-list">
                {(prerequisiteLabels.length ? prerequisiteLabels : [categoryLabel]).map((label) => (
                  <span key={label}>{label}</span>
                ))}
              </div>
            </InfoSection>
            <InfoSection title={t.related}>
              <div className="chip-list">
                {(relatedLabels.length ? relatedLabels : [areaLabel]).map((label) => (
                  <span key={label}>{label}</span>
                ))}
              </div>
            </InfoSection>
            {scenarioItems.length > 0 && (
              <InfoSection title={t.scenarioExamples}>
                <div className="detail-list">
                  {scenarioItems.slice(0, 8).map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </InfoSection>
            )}
          </article>
          <aside className="detail-aside">
            {point?.id === "tcp-handshake" && (
              <div className="cta-panel">
                <PlayCircle size={34} />
                <h2>{t.interactive}</h2>
                <p>{t.interactiveBody}</p>
                <button onClick={() => setPage("simulator")}>
                  {t.startSimulator}
                  <ArrowRight size={17} />
                </button>
              </div>
            )}
            <div className="contents-panel">
              <h3>{t.sourceReferences}</h3>
              <p>{t.sourceDescription}</p>
              {pointSources.map((source) => (
                <a
                  key={source.title}
                  href={source.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  {source.title}
                  <ExternalLink size={14} />
                </a>
              ))}
            </div>
          </aside>
        </div>
        <footer className="footer-line">
          <span>© 2026 KnowledgeGraph Academic</span>
          <a>{t.privacy}</a>
          <a>{t.terms}</a>
          <a>{t.feedbackLink}</a>
        </footer>
      </div>
    </main>
  );
}

function InfoSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="info-section">
      <header>{title}</header>
      <div>{children}</div>
    </section>
  );
}

function SimulatorPage({ setPage, t }: { setPage: (page: Page) => void; t: Copy }) {
  const [step, setStep] = useState<Step>(0);
  const [error, setError] = useState(false);
  const history = useMemo(() => t.historyItems.slice(0, step), [step, t.historyItems]);
  const packets = [
    {
      label: "SYN=1, seq=x",
      className: "syn",
      marker: "packet-arrow-brand",
      visible: step >= 1,
      active: step === 1,
      x1: 58,
      y1: 62,
      x2: 422,
      y2: 118,
      labelX: 240,
      labelY: 78,
      rotate: 9,
    },
    {
      label: "SYN=1, ACK=1, seq=y, ack=x+1",
      className: "synAck",
      marker: "packet-arrow-teal",
      visible: step >= 2,
      active: step === 2,
      x1: 422,
      y1: 134,
      x2: 58,
      y2: 176,
      labelX: 240,
      labelY: 136,
      rotate: -9,
    },
    {
      label: "ACK=1, seq=x+1, ack=y+1",
      className: "ack",
      marker: "packet-arrow-success",
      visible: step >= 3,
      active: step === 3,
      x1: 58,
      y1: 190,
      x2: 422,
      y2: 236,
      labelX: 240,
      labelY: 197,
      rotate: 7,
    },
  ];

  function reset() {
    setStep(0);
    setError(false);
  }

  function handleAction(actionIndex: number) {
    if (actionIndex !== step || step === 3) {
      setError(true);
      window.setTimeout(() => setError(false), 1200);
      return;
    }

    setError(false);
    setStep((step + 1) as Step);
  }

  return (
    <main className="simulator-shell page-with-topbar">
      <section className="simulator-canvas">
        <div className="sim-top-row">
          <span className="sim-context">{t.handshake}</span>
          <h1>{t.simulatorTitle}</h1>
          <button className="secondary-button" onClick={reset}>
            <RefreshCw size={16} />
            {t.reset}
          </button>
        </div>
        <div className="lab-stage">
          <Endpoint
            kind="client"
            title={t.client}
            address="192.168.1.5"
            state={step === 0 ? "CLOSED" : step === 1 ? "SYN-SENT" : "ESTABLISHED"}
          />
          <div className="wire-zone">
            <svg
              className="packet-sequence"
              viewBox="0 0 480 280"
              aria-label={t.history}
              role="img"
            >
              <defs>
                {[
                  ["packet-arrow-brand", "var(--brand)"],
                  ["packet-arrow-teal", "var(--tertiary)"],
                  ["packet-arrow-success", "var(--success)"],
                ].map(([id, fill]) => (
                  <marker
                    key={id}
                    id={id}
                    viewBox="0 0 10 10"
                    refX="8"
                    refY="5"
                    markerWidth="7"
                    markerHeight="7"
                    orient="auto-start-reverse"
                  >
                    <path d="M 0 0 L 10 5 L 0 10 z" fill={fill} />
                  </marker>
                ))}
              </defs>
              <line className="lifeline" x1="48" y1="22" x2="48" y2="258" />
              <line className="lifeline" x1="432" y1="22" x2="432" y2="258" />
              {packets
                .filter((packet) => packet.visible)
                .map((packet) => (
                  <g
                    key={packet.label}
                    className={`packet-record ${packet.className} ${
                      packet.active ? "active" : ""
                    }`}
                  >
                    <line
                      x1={packet.x1}
                      y1={packet.y1}
                      x2={packet.x2}
                      y2={packet.y2}
                      markerEnd={`url(#${packet.marker})`}
                    />
                    <text
                      x={packet.labelX}
                      y={packet.labelY}
                      transform={`rotate(${packet.rotate} ${packet.labelX} ${packet.labelY})`}
                    >
                      {packet.label}
                    </text>
                  </g>
                ))}
            </svg>
            <div className="wire-caption">
              <span>{t.physicalLink}</span>
              <span>10Gbps</span>
            </div>
          </div>
          <Endpoint
            kind="server"
            title={t.server}
            address="10.0.0.1:80"
            state={step < 2 ? "LISTEN" : step === 2 ? "SYN-RCVD" : "ESTABLISHED"}
          />
        </div>
      </section>
      <aside className="simulator-panel">
        <section>
          <h2>
            <BookOpen size={18} />
            {t.currentTask}
          </h2>
          <p className="task-text">{t.tasks[step]}</p>
        </section>
        <section className="action-section">
          <h2>
            <Zap size={18} />
            {t.actionPanel}
          </h2>
          {t.actions.map((action, index) => {
            const enabled = index === step && step < 3;

            return (
              <button
                key={action}
                className={enabled ? "sim-action enabled" : "sim-action"}
                onClick={() => handleAction(index)}
              >
                <span>{action}</span>
                <Send size={17} />
              </button>
            );
          })}
        </section>
        <section className="feedback-card">
          <h2>
            <CircleHelp size={18} />
            {t.feedback}
          </h2>
          <div className={error ? "feedback error" : step > 0 ? "feedback success" : "feedback"}>
            {error ? (
              <>
                <CircleHelp size={28} />
                <strong>{t.invalid}</strong>
              </>
            ) : step > 0 ? (
              <>
                <CheckCircle2 size={28} />
                <strong>{t.feedbacks[step - 1]}</strong>
              </>
            ) : (
              <>
                <CircleHelp size={28} />
                <strong>{t.waitingFeedback}</strong>
              </>
            )}
          </div>
        </section>
        <section className="history-card">
          <h2>{t.history}</h2>
          {history.length ? (
            history.map((item) => <p key={item}>{item}</p>)
          ) : (
            <p className="muted">{t.waitingAction}</p>
          )}
        </section>
      </aside>
      <footer className="timeline">
        {t.timeline.map((item, index) => {
          const done = step > index || (step === 3 && index === 3);
          const active = step === index && step < 3;

          return (
            <div className={`timeline-item ${done ? "done" : ""} ${active ? "active" : ""}`} key={item}>
              <span>{index === 3 ? <CheckCircle2 size={18} /> : index + 1}</span>
              <small>{item}</small>
            </div>
          );
        })}
      </footer>
    </main>
  );
}

function Endpoint({
  kind,
  title,
  address,
  state,
}: {
  kind: "client" | "server";
  title: string;
  address: string;
  state: string;
}) {
  const Icon = kind === "client" ? Laptop : Server;

  return (
    <div className={`endpoint ${kind}`}>
      <div className="endpoint-box">
        <span className="endpoint-label">{title}</span>
        <Icon size={46} />
        <strong>{address}</strong>
      </div>
      <code>{state}</code>
    </div>
  );
}

export { App };
