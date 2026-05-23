import {
  Background,
  Controls,
  Handle,
  Position,
  ReactFlow,
  ReactFlowProvider,
  type Edge,
  type Node,
  type NodeProps,
  type NodeTypes,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
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
  GitCommitHorizontal,
  Waypoints,
  Zap,
} from "lucide-react";
import {
  type CSSProperties,
  type ReactNode,
  useEffect,
  useMemo,
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
import { getAlgorithmExampleProblems } from "./data/algorithm-example-problems";
import {
  buildVisualSimulation,
  isPointVisualizable,
  readLocalizedText,
  type ActorKind,
  type SimulationActor,
  type VisualSimulation,
} from "./data/visual-simulations";
import type { CategoryId, Difficulty } from "./data/types";

type Locale = "zh" | "en";
type Theme = "light" | "dark";
type Page = "home" | "detail" | "simulator" | "about";
type Step = number;
type GraphMode = "core" | "all";
type GraphBoard = "knowledge" | "visual";
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
      ["当前能力", "左侧分类切换专题图谱，顶部搜索快速定位知识点，图谱节点进入详情页，流程型知识点提供交互式模拟。"],
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
    graphBoard: "画板类型",
    knowledgeBoard: "知识图谱",
    visualBoard: "可视化图谱",
    graphMode: "图谱范围",
    coreMode: "核心",
    allMode: "全部",
    graphHint: "拖动画布平移 · 滚轮缩放 · 右下角重置视图",
    visualGraphHint: "可视化知识点画板 · 点击节点进详情 · 从详情页开始模拟",
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
    exampleProblems: "例题练习",
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
    interactiveBody: "按步骤推进事件、报文或状态变化。",
    startSimulator: "开始模拟",
    openVisualBoard: "查看可视化图谱",
    visualTag: "可视化",
    visualizable: "可视化",
    visualizablePoints: "可视化知识点",
    visualizableIntro: "以下知识点适合通过流程、状态、路径或结构模拟理解。",
    visualPattern: "可视化类型",
    simulationMetrics: "观察指标",
    currentState: "当前状态",
    stepInsight: "理解重点",
    actorStates: "参与者状态",
    progress: "进度",
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
    previousAction: "上一步",
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
      ["Current Features", "Use the left sidebar to switch topic graphs, search from the top bar, open node details, and run interactive simulations for process-oriented topics."],
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
    graphBoard: "Board Type",
    knowledgeBoard: "Knowledge Graph",
    visualBoard: "Visual Graph",
    graphMode: "Graph Scope",
    coreMode: "Core",
    allMode: "All",
    graphHint: "Drag canvas to pan · wheel to zoom · reset from bottom-right controls",
    visualGraphHint: "Visualizable topic board · open details from nodes · start simulations from detail pages",
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
    exampleProblems: "Practice Problems",
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
    interactiveBody: "Step through events, packets, or state transitions.",
    startSimulator: "Start Simulation",
    openVisualBoard: "Open Visual Graph",
    visualTag: "Visual",
    visualizable: "Visualizable",
    visualizablePoints: "Visualizable Topics",
    visualizableIntro: "These topics are best understood through flow, state, path, or structure simulations.",
    visualPattern: "Visualization Type",
    simulationMetrics: "Signals to Watch",
    currentState: "Current State",
    stepInsight: "Key Insight",
    actorStates: "Actor States",
    progress: "Progress",
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
    previousAction: "Previous",
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

function getPointSearchScore(
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

function findFirstSearchMatch(t: Copy, query: string) {
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
    "network-overview",
    "osi-model",
    "tcp-ip-model",
    "ethernet-frame",
    "switch",
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

function getVisualizablePoints(categoryId: CategoryId) {
  return knowledgePointsByCategory[categoryId].filter((point) =>
    isPointVisualizable(categoryId, point),
  );
}

function buildDetailedExplanationItems(
  point: GraphKnowledgePoint,
  activeCategory: CategoryId,
  locale: Locale,
  t: Copy,
) {
  if (locale === "zh" && point.explanation?.length) {
    return point.explanation.map((body, index) => {
      const [rawTitle, ...rest] = body.split("：");
      const hasTitlePrefix = rest.length > 0 && rawTitle.length <= 12;

      return {
        title: hasTitlePrefix
          ? rawTitle
          : instructorExplanationTitles[index] ?? `${t.explanation} ${index + 1}`,
        body: hasTitlePrefix ? rest.join("：") : body,
      };
    });
  }

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

function getVisibleGraphPoints(
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

type KnowledgeGraphNodeKind = "category" | "group" | "knowledge";
type KnowledgeGraphRelation = "category" | "group" | "prerequisite" | "related";

type KnowledgeGraphNodeData = {
  label: string;
  categoryId: CategoryId;
  categoryLabel: string;
  count?: number;
  kind: KnowledgeGraphNodeKind;
  area?: string;
  difficulty?: Difficulty;
  priority?: PointPriority;
  active: boolean;
  matched: boolean;
  graphMode: GraphMode;
  hasSearch: boolean;
  visualizable: boolean;
  focusedLabel: string;
  onOpenDetail?: (categoryId: CategoryId, pointId: string) => void;
};

type KnowledgeGraphNode = Node<KnowledgeGraphNodeData, "knowledgeGraph">;
type KnowledgeGraphEdge = Edge<
  {
    categoryId: CategoryId;
    relation: KnowledgeGraphRelation;
  }
>;

const knowledgeNodeDimensions: Record<KnowledgeGraphNodeKind, { width: number; height: number }> = {
  category: { width: 96, height: 96 },
  group: { width: 70, height: 70 },
  knowledge: { width: 62, height: 62 },
};

const graphNodeTypes: NodeTypes = {
  knowledgeGraph: KnowledgeGraphNodeView,
};

function KnowledgeGraphNodeView({ id, data }: NodeProps<KnowledgeGraphNode>) {
  const classes = [
    "graph-node",
    data.kind,
    data.kind === "knowledge" ? data.difficulty : "",
    data.kind === "knowledge" ? data.priority : "",
    data.graphMode === "core" ? "core-mode" : "all-mode",
    data.active ? "active" : "",
    data.kind === "knowledge" && data.hasSearch && data.matched ? "matched" : "",
  ]
    .filter(Boolean)
    .join(" ");
  const canOpen = data.kind === "knowledge";

  return (
    <button
      className={classes}
      style={{ "--category-color": categoryColors[data.categoryId] } as CSSProperties}
      title={data.categoryLabel}
      onClick={() => canOpen && data.onOpenDetail?.(data.categoryId, id)}
    >
      {["top", "right", "bottom", "left"].map((handlePosition) => (
        <Handle
          key={`target-${handlePosition}`}
          id={`target-${handlePosition}`}
          type="target"
          position={handlePositionToReactFlowPosition(handlePosition)}
        />
      ))}
      {["top", "right", "bottom", "left"].map((handlePosition) => (
        <Handle
          key={`source-${handlePosition}`}
          id={`source-${handlePosition}`}
          type="source"
          position={handlePositionToReactFlowPosition(handlePosition)}
        />
      ))}
      {data.visualizable && (
        <span className="visual-node-badge">
          <PlayCircle size={13} fill="currentColor" />
        </span>
      )}
      <span>{data.label}</span>
      {(data.kind === "category" || data.kind === "group") && <small>{data.count}</small>}
      {data.active && (
        <>
          <span className="node-badge">
            <Zap size={16} fill="currentColor" />
          </span>
          <strong>{data.focusedLabel}</strong>
        </>
      )}
    </button>
  );
}

function handlePositionToReactFlowPosition(handlePosition: string) {
  const positions: Record<string, Position> = {
    top: Position.Top,
    right: Position.Right,
    bottom: Position.Bottom,
    left: Position.Left,
  };

  return positions[handlePosition] ?? Position.Right;
}

function toNodeTopLeft(
  kind: KnowledgeGraphNodeKind,
  center: { x: number; y: number },
) {
  const dimensions = knowledgeNodeDimensions[kind];

  return {
    x: center.x - dimensions.width / 2,
    y: center.y - dimensions.height / 2,
  };
}

function layoutKnowledgeGraph(nodes: KnowledgeGraphNode[]) {
  const categoryNode = nodes.find((node) => node.data.kind === "category");
  const groupNodes = nodes.filter((node) => node.data.kind === "group");
  const pointNodes = nodes.filter((node) => node.data.kind === "knowledge");
  const pointsByArea = new Map<string, KnowledgeGraphNode[]>();

  pointNodes.forEach((node) => {
    const area = node.data.area ?? "foundation";
    const group = pointsByArea.get(area) ?? [];

    group.push(node);
    pointsByArea.set(area, group);
  });

  const center = { x: 680, y: 480 };
  const groupRadius = groupNodes.length > 8 ? 360 : 330;
  const positions = new Map<string, { x: number; y: number }>();

  if (categoryNode) {
    positions.set(categoryNode.id, toNodeTopLeft("category", center));
  }

  groupNodes.forEach((groupNode, groupIndex) => {
    const groupAngle =
      (-92 + (360 / Math.max(groupNodes.length, 1)) * groupIndex) * (Math.PI / 180);
    const groupCenter = {
      x: center.x + Math.cos(groupAngle) * groupRadius,
      y: center.y + Math.sin(groupAngle) * groupRadius,
    };
    const areaPoints = pointsByArea.get(groupNode.data.area ?? "foundation") ?? [];

    positions.set(groupNode.id, toNodeTopLeft("group", groupCenter));
    areaPoints.forEach((pointNode, index) => {
      const ring = index < 4 ? 0 : 1;
      const ringStart = ring === 0 ? 0 : 4;
      const ringCount = Math.min(ring === 0 ? 4 : 8, areaPoints.length - ringStart);
      const indexInRing = index - ringStart;
      const spread = Math.min(Math.PI * 0.92, Math.PI * (0.34 + ringCount * 0.1));
      const pointAngle =
        ringCount <= 1
          ? groupAngle
          : groupAngle - spread / 2 + (spread / (ringCount - 1)) * indexInRing;
      const pointRadius = 108 + ring * 92;
      const pointCenter = {
        x: groupCenter.x + Math.cos(pointAngle) * pointRadius,
        y: groupCenter.y + Math.sin(pointAngle) * pointRadius,
      };

      positions.set(pointNode.id, toNodeTopLeft("knowledge", pointCenter));
    });
  });

  return nodes.map((node) => ({
    ...node,
    position: positions.get(node.id) ?? node.position,
  }));
}

function getNodeCenter(node: KnowledgeGraphNode) {
  const dimensions = knowledgeNodeDimensions[node.data.kind];

  return {
    x: node.position.x + dimensions.width / 2,
    y: node.position.y + dimensions.height / 2,
  };
}

function getDirectionalHandle(deltaX: number, deltaY: number) {
  if (Math.abs(deltaX) > Math.abs(deltaY)) {
    return deltaX >= 0 ? "right" : "left";
  }

  return deltaY >= 0 ? "bottom" : "top";
}

function getOppositeHandle(handle: string) {
  const opposites: Record<string, string> = {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right",
  };

  return opposites[handle] ?? "left";
}

function attachEdgeHandles(nodes: KnowledgeGraphNode[], edges: KnowledgeGraphEdge[]) {
  const nodeById = new Map(nodes.map((node) => [node.id, node]));

  return edges.map((edge) => {
    const sourceNode = nodeById.get(edge.source);
    const targetNode = nodeById.get(edge.target);

    if (!sourceNode || !targetNode) {
      return edge;
    }

    const sourceCenter = getNodeCenter(sourceNode);
    const targetCenter = getNodeCenter(targetNode);
    const sourceHandle = getDirectionalHandle(
      targetCenter.x - sourceCenter.x,
      targetCenter.y - sourceCenter.y,
    );

    return {
      ...edge,
      sourceHandle: `source-${sourceHandle}`,
      targetHandle: `target-${getOppositeHandle(sourceHandle)}`,
    };
  });
}

function buildGraphItems(
  t: Copy,
  locale: Locale,
  selectedCategory: CategoryId,
  selectedKnowledgeId: string,
  graphMode: GraphMode,
  graphBoard: GraphBoard,
  searchQuery: string,
  visualizableIdSet: Set<string>,
  onOpenDetail: (categoryId: CategoryId, pointId: string) => void,
) {
  const categoryLabel = getCategoryLabel(t, selectedCategory);
  const allPoints = knowledgePointsByCategory[selectedCategory];
  const hasSearch = normalizeSearch(searchQuery).length > 0;
  const points = hasSearch
    ? allPoints.filter((point) => pointMatchesSearch(point, categoryLabel, searchQuery))
    : [];
  const boardPoints = getVisibleGraphPoints(
    selectedCategory,
    allPoints,
    points,
    graphMode,
    graphBoard,
    hasSearch,
  );
  const groups = new Map<string, GraphKnowledgePoint[]>();

  boardPoints.forEach((point) => {
    const area = getAreaKey(point);
    const group = groups.get(area) ?? [];

    group.push(point);
    groups.set(area, group);
  });

  const groupEntries = Array.from(groups.entries());
  const categoryNode: KnowledgeGraphNode = {
    id: `category-${selectedCategory}`,
    type: "knowledgeGraph",
    position: { x: 0, y: 0 },
    data: {
      label: categoryLabel,
      categoryId: selectedCategory,
      categoryLabel,
      count: graphBoard === "visual" ? boardPoints.length : hasSearch ? points.length : allPoints.length,
      kind: "category",
      active: false,
      matched: true,
      graphMode,
      hasSearch,
      visualizable: false,
      focusedLabel: t.focused,
    },
  };
  const groupNodes: KnowledgeGraphNode[] = groupEntries.map(([area, group]) => (
    {
      id: `group-${area}`,
      type: "knowledgeGraph",
      position: { x: 0, y: 0 },
      data: {
        label: getAreaLabel(area, locale),
        categoryId: selectedCategory,
        categoryLabel,
        count: group.length,
        kind: "group",
        area,
        active: false,
        matched: true,
        graphMode,
        hasSearch,
        visualizable: false,
        focusedLabel: t.focused,
      },
    }
  ));
  const pointNodes: KnowledgeGraphNode[] = groupEntries.flatMap(([area, group]) =>
    group.map((point) => (
      {
        id: point.id,
        type: "knowledgeGraph",
        position: { x: 0, y: 0 },
        data: {
          label: getKnowledgeLabel(point, locale),
          categoryId: selectedCategory,
          categoryLabel,
          difficulty: point.difficulty,
          priority: getPointPriority(selectedCategory, point, selectedKnowledgeId),
          kind: "knowledge",
          area,
          active: point.id === selectedKnowledgeId,
          matched: hasSearch ? points.includes(point) : true,
          graphMode,
          hasSearch,
          visualizable: visualizableIdSet.has(point.id),
          focusedLabel: t.focused,
          onOpenDetail,
        },
      }
    )),
  );
  const nodes = [categoryNode, ...groupNodes, ...pointNodes];
  const groupNodeByArea = new Map(groupNodes.map((node) => [node.data.area, node]));
  const nodeById = new Map(pointNodes.map((node) => [node.id, node]));
  const edgeKeys = new Set<string>();
  const edges: KnowledgeGraphEdge[] = [];
  const addEdge = (
    sourceId: string,
    targetId: string,
    relation: KnowledgeGraphRelation,
  ) => {
    const orderedKey =
      relation === "related"
        ? [sourceId, targetId].sort().join("::")
        : `${sourceId}->${targetId}`;
    const key = `${relation}:${orderedKey}`;

    if (edgeKeys.has(key)) {
      return;
    }

    edgeKeys.add(key);
    edges.push({
      id: key,
      source: sourceId,
      target: targetId,
      type: "straight",
      data: {
        categoryId: selectedCategory,
        relation,
      },
      animated: false,
      style: {
        "--category-color": categoryColors[selectedCategory],
      } as CSSProperties,
      className: `graph-edge ${relation}`,
    });
  };

  groupEntries.forEach(([area, group]) => {
    const groupNode = groupNodeByArea.get(area);

    if (!groupNode) {
      return;
    }

    addEdge(categoryNode.id, groupNode.id, "category");
    group.forEach((point) => {
      const pointNode = nodeById.get(point.id);

      if (pointNode) {
        addEdge(groupNode.id, pointNode.id, "group");
      }
    });
  });

  boardPoints.forEach((point) => {
    const target = nodeById.get(point.id);

    if (!target) {
      return;
    }

    point.prerequisites.forEach((sourceId) => {
      const source = nodeById.get(sourceId);

      if (source) {
        addEdge(source.id, target.id, "prerequisite");
      }
    });

    point.related.slice(0, 2).forEach((relatedId) => {
      const related = nodeById.get(relatedId);

      if (related) {
        addEdge(target.id, related.id, "related");
      }
    });
  });

  const layoutedNodes = layoutKnowledgeGraph(nodes);

  return {
    nodes: layoutedNodes,
    edges: attachEdgeHandles(layoutedNodes, edges),
  };
}

function App() {
  const [page, setPage] = useState<Page>("home");
  const [theme, setTheme] = useState<Theme>("light");
  const [locale, setLocale] = useState<Locale>("zh");
  const [selectedCategory, setSelectedCategory] = useState<CategoryId>("network");
  const [selectedKnowledgeId, setSelectedKnowledgeId] = useState("tcp-handshake");
  const [graphBoard, setGraphBoard] = useState<GraphBoard>("knowledge");
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

  function openSimulator(categoryId: CategoryId, pointId: string) {
    setSelectedCategory(categoryId);
    setSelectedKnowledgeId(pointId);
    setPage("simulator");
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
          t={t}
          locale={locale}
          selectedCategory={selectedCategory}
          selectedKnowledgeId={selectedKnowledgeId}
          graphBoard={graphBoard}
          searchQuery={searchQuery}
          onChangeGraphBoard={setGraphBoard}
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
          onOpenDetail={openKnowledgeDetail}
          onOpenSimulator={openSimulator}
        />
      )}
      {page === "simulator" && (
        <SimulatorPage
          setPage={setPage}
          t={t}
          locale={locale}
          activeCategory={selectedCategory}
          selectedKnowledgeId={selectedKnowledgeId}
        />
      )}
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
              id="knowledge-search"
              name="knowledge-search"
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
  t,
  locale,
  selectedCategory,
  selectedKnowledgeId,
  graphBoard,
  searchQuery,
  onChangeGraphBoard,
  onSelectCategory,
  onOpenDetail,
}: {
  t: Copy;
  locale: Locale;
  selectedCategory: CategoryId;
  selectedKnowledgeId: string;
  graphBoard: GraphBoard;
  searchQuery: string;
  onChangeGraphBoard: (graphBoard: GraphBoard) => void;
  onSelectCategory: (categoryId: CategoryId) => void;
  onOpenDetail: (categoryId: CategoryId, pointId: string) => void;
}) {
  const [graphMode, setGraphMode] = useState<GraphMode>("core");
  const hasSearch = normalizeSearch(searchQuery).length > 0;
  const visualizablePoints = useMemo(
    () => getVisualizablePoints(selectedCategory),
    [selectedCategory],
  );
  const visualizableIdSet = useMemo(
    () => new Set(visualizablePoints.map((point) => point.id)),
    [visualizablePoints],
  );
  const graph = useMemo(
    () =>
      buildGraphItems(
        t,
        locale,
        selectedCategory,
        selectedKnowledgeId,
        graphMode,
        graphBoard,
        searchQuery,
        visualizableIdSet,
        onOpenDetail,
      ),
    [
      t,
      locale,
      selectedCategory,
      selectedKnowledgeId,
      graphMode,
      graphBoard,
      searchQuery,
      visualizableIdSet,
      onOpenDetail,
    ],
  );
  const hasResults = graph.nodes.some(
    (node) => node.data.kind === "knowledge" && node.data.matched,
  );

  return (
    <main className="home-layout page-with-topbar">
      <LearningSidebar
        t={t}
        active={selectedCategory}
        onSelect={onSelectCategory}
      />
      <section className="graph-canvas" aria-label={t.navGraph}>
        {hasSearch && (
          <div className="search-status">
            <Search size={16} />
            <span>{hasResults ? t.searchResults : t.noSearchResult}</span>
            <strong>{searchQuery}</strong>
          </div>
        )}
        <div className="graph-toolbar">
          <div className="graph-mode-switch" aria-label={t.graphBoard}>
            <button
              className={graphBoard === "knowledge" ? "active" : ""}
              onClick={() => onChangeGraphBoard("knowledge")}
            >
              {t.knowledgeBoard}
            </button>
            <button
              className={graphBoard === "visual" ? "active" : ""}
              onClick={() => onChangeGraphBoard("visual")}
            >
              {t.visualBoard}
            </button>
          </div>
          <div className="graph-mode-switch scope-switch" aria-label={t.graphMode}>
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
        </div>
        <div className="graph-hint">
          {graphBoard === "visual" ? t.visualGraphHint : t.graphHint}
        </div>
        <ReactFlowProvider>
          <ReactFlow
            key={`${selectedCategory}-${graphMode}-${graphBoard}-${searchQuery}-${selectedKnowledgeId}-${locale}`}
            nodes={graph.nodes}
            edges={graph.edges}
            nodeTypes={graphNodeTypes}
            fitView
            fitViewOptions={{ padding: 0.2, minZoom: 0.32, maxZoom: 1.24 }}
            minZoom={0.2}
            maxZoom={1.8}
            nodesDraggable={false}
            nodesConnectable={false}
            elementsSelectable
            selectNodesOnDrag={false}
            proOptions={{ hideAttribution: true }}
          >
            <Background color="var(--line)" gap={30} size={1} />
            <Controls position="bottom-right" showInteractive={false} />
          </ReactFlow>
        </ReactFlowProvider>
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
  onOpenDetail,
  onOpenSimulator,
}: {
  setPage: (page: Page) => void;
  t: Copy;
  locale: Locale;
  activeCategory: CategoryId;
  selectedKnowledgeId: string;
  onSelectCategory: (categoryId: CategoryId) => void;
  onOpenDetail: (categoryId: CategoryId, pointId: string) => void;
  onOpenSimulator: (categoryId: CategoryId, pointId: string) => void;
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
  const exampleProblems =
    activeCategory === "algorithm" && point ? getAlgorithmExampleProblems(point) : [];
  const learningOrder = point?.order ?? point?.learningPathPosition;
  const simulation = point ? buildVisualSimulation(activeCategory, point) : undefined;

  return (
    <main className="detail-shell page-with-topbar">
      <LearningSidebar
        t={t}
        active={activeCategory}
        onSelect={onSelectCategory}
      />
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
            {exampleProblems.length > 0 && (
              <InfoSection title={t.exampleProblems}>
                <div className="example-problem-list">
                  {exampleProblems.map((problem) => (
                    <a
                      key={problem.id}
                      className="example-problem-card"
                      href={problem.url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span>
                        <strong>{problem.title[locale]}</strong>
                        <p>{problem.reason[locale]}</p>
                      </span>
                      <small>
                        {problem.source}
                        <ExternalLink size={14} />
                      </small>
                    </a>
                  ))}
                </div>
              </InfoSection>
            )}
          </article>
          <aside className="detail-aside">
            {point && simulation && (
              <div className="cta-panel">
                <PlayCircle size={34} />
                <h2>{readLocalizedText(simulation.title, locale)}</h2>
                <p>{readLocalizedText(simulation.subtitle, locale)}</p>
                <div className="simulation-meta-list">
                  <span>{t.visualPattern}</span>
                  <strong>{readLocalizedText(simulation.pattern, locale)}</strong>
                </div>
                <button onClick={() => onOpenSimulator(activeCategory, point.id)}>
                  {readLocalizedText(simulation.entryLabel, locale)}
                  <ArrowRight size={17} />
                </button>
              </div>
            )}
            {simulation && (
              <div className="contents-panel simulation-signals">
                <h3>{t.simulationMetrics}</h3>
                {simulation.metrics.map((metric) => (
                  <span key={readLocalizedText(metric, locale)}>
                    <GitCommitHorizontal size={14} />
                    {readLocalizedText(metric, locale)}
                  </span>
                ))}
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

function SimulatorPage({
  setPage,
  t,
  locale,
  activeCategory,
  selectedKnowledgeId,
}: {
  setPage: (page: Page) => void;
  t: Copy;
  locale: Locale;
  activeCategory: CategoryId;
  selectedKnowledgeId: string;
}) {
  const points = knowledgePointsByCategory[activeCategory];
  const point = points.find((item) => item.id === selectedKnowledgeId) ?? points[0];
  const simulation = buildVisualSimulation(activeCategory, point);
  const [step, setStep] = useState<Step>(0);
  const [error, setError] = useState(false);

  useEffect(() => {
    setStep(0);
    setError(false);
  }, [simulation?.key]);

  if (!simulation) {
    return (
      <main className="simulator-empty page-with-topbar">
        <button className="secondary-button" onClick={() => setPage("detail")}>
          <ArrowLeft size={16} />
          {t.backDetail}
        </button>
        <h1>{t.visualizablePoints}</h1>
        <p>{t.visualizableIntro}</p>
      </main>
    );
  }

  const completedSteps = Math.min(step, simulation.steps.length);
  const activeStep = simulation.steps[Math.min(step, simulation.steps.length - 1)];
  const activeStepIndex = Math.min(step, simulation.steps.length - 1);
  const isComplete = step >= simulation.steps.length;
  const history = simulation.steps.slice(0, completedSteps);
  const actorStates = getSimulationActorStates(simulation, completedSteps);
  const progress = Math.round((completedSteps / simulation.steps.length) * 100);

  function reset() {
    setStep(0);
    setError(false);
  }

  function goBack() {
    setStep((currentStep) => Math.max(currentStep - 1, 0));
    setError(false);
  }

  function handleAction(actionIndex: number) {
    if (actionIndex !== step || isComplete) {
      setError(true);
      window.setTimeout(() => setError(false), 1200);
      return;
    }

    setError(false);
    setStep(step + 1);
  }

  return (
    <main className="simulator-shell page-with-topbar">
      <section className="simulator-canvas">
        <div className="sim-top-row">
          <span className="sim-context">{readLocalizedText(simulation.pattern, locale)}</span>
          <div>
            <h1>{readLocalizedText(simulation.title, locale)}</h1>
            <p>{readLocalizedText(simulation.subtitle, locale)}</p>
          </div>
          <div className="sim-control-group">
            <button className="secondary-button" onClick={goBack} disabled={step <= 0}>
              <ArrowLeft size={16} />
              {t.previousAction}
            </button>
            <button className="secondary-button" onClick={reset}>
              <RefreshCw size={16} />
              {t.reset}
            </button>
          </div>
        </div>
        <SimulationStage
          simulation={simulation}
          locale={locale}
          completedSteps={completedSteps}
          activeStepIndex={activeStepIndex}
          actorStates={actorStates}
        />
      </section>
      <aside className="simulator-panel">
        <section>
          <h2>
            <BookOpen size={18} />
            {t.currentTask}
          </h2>
          <p className="task-text">
            {isComplete
              ? t.complete
              : readLocalizedText(activeStep.description, locale)}
          </p>
          <div className="progress-meter" aria-label={t.progress}>
            <span style={{ width: `${progress}%` }} />
          </div>
        </section>
        <section className="action-section">
          <h2>
            <Zap size={18} />
            {t.actionPanel}
          </h2>
          {simulation.steps.map((item, index) => {
            const enabled = index === step && !isComplete;

            return (
              <button
                key={readLocalizedText(item.action, locale)}
                className={enabled ? "sim-action enabled" : "sim-action"}
                disabled={!enabled}
                onClick={() => handleAction(index)}
              >
                <span>{readLocalizedText(item.action, locale)}</span>
                {completedSteps > index ? <CheckCircle2 size={17} /> : <Send size={17} />}
              </button>
            );
          })}
        </section>
        <section className="feedback-card">
          <h2>
            <CircleHelp size={18} />
            {t.stepInsight}
          </h2>
          <div className={error ? "feedback error" : completedSteps > 0 ? "feedback success" : "feedback"}>
            {error ? (
              <>
                <CircleHelp size={28} />
                <strong>{t.invalid}</strong>
              </>
            ) : completedSteps > 0 ? (
              <>
                <CheckCircle2 size={28} />
                <strong>
                  {readLocalizedText(simulation.steps[completedSteps - 1].insight, locale)}
                </strong>
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
            history.map((item, index) => (
              <p key={`${readLocalizedText(item.title, locale)}-${index}`}>
                <strong>{index + 1}.</strong> {readLocalizedText(item.title, locale)}
              </p>
            ))
          ) : (
            <p className="muted">{t.waitingAction}</p>
          )}
        </section>
      </aside>
      <footer className="timeline">
        {simulation.steps.map((item, index) => {
          const done = completedSteps > index;
          const active = step === index && !isComplete;

          return (
            <div
              className={`timeline-item ${done ? "done" : ""} ${active ? "active" : ""}`}
              key={readLocalizedText(item.title, locale)}
            >
              <span>{done ? <CheckCircle2 size={18} /> : index + 1}</span>
              <small>{readLocalizedText(item.title, locale)}</small>
            </div>
          );
        })}
      </footer>
    </main>
  );
}

function getSimulationActorStates(simulation: VisualSimulation, completedSteps: number) {
  return simulation.steps.slice(0, completedSteps).reduce(
    (states, currentStep) => ({
      ...states,
      ...currentStep.states,
    }),
    { ...simulation.initialStates },
  );
}

function SvgLabelBox({
  x,
  y,
  width,
  height,
  className,
  children,
}: {
  x: number;
  y: number;
  width: number;
  height: number;
  className: string;
  children: ReactNode;
}) {
  return (
    <foreignObject x={x - width / 2} y={y - height / 2} width={width} height={height}>
      <div className={className}>{children}</div>
    </foreignObject>
  );
}

function SimulationStage({
  simulation,
  locale,
  completedSteps,
  activeStepIndex,
  actorStates,
}: {
  simulation: VisualSimulation;
  locale: Locale;
  completedSteps: number;
  activeStepIndex: number;
  actorStates: Record<string, { zh: string; en: string }>;
}) {
  if (simulation.key === "network:tcp-handshake") {
    return (
      <TcpHandshakeStage
        simulation={simulation}
        locale={locale}
        completedSteps={completedSteps}
        activeStepIndex={activeStepIndex}
      />
    );
  }

  if (simulation.key === "network:ethernet-frame") {
    return (
      <EthernetFrameStage
        simulation={simulation}
        locale={locale}
        completedSteps={completedSteps}
        activeStepIndex={activeStepIndex}
      />
    );
  }

  if (simulation.key === "network:switch") {
    return (
      <SwitchForwardingStage
        simulation={simulation}
        locale={locale}
        completedSteps={completedSteps}
        activeStepIndex={activeStepIndex}
      />
    );
  }

  if (simulation.key === "network:tcp-four-way-wave") {
    return (
      <TcpWaveStage
        simulation={simulation}
        locale={locale}
        completedSteps={completedSteps}
        activeStepIndex={activeStepIndex}
      />
    );
  }

  if (simulation.key === "network:tcp-state") {
    return (
      <TcpStateMachineStage
        simulation={simulation}
        locale={locale}
        completedSteps={completedSteps}
        activeStepIndex={activeStepIndex}
      />
    );
  }

  if (simulation.key === "algorithm:array") {
    return (
      <ArrayIndexStage
        simulation={simulation}
        locale={locale}
        completedSteps={completedSteps}
        activeStepIndex={activeStepIndex}
      />
    );
  }

  if (simulation.key === "algorithm:linked-list") {
    return (
      <LinkedListPointerStage
        simulation={simulation}
        locale={locale}
        completedSteps={completedSteps}
        activeStepIndex={activeStepIndex}
      />
    );
  }

  if (simulation.key === "algorithm:stack") {
    return (
      <StackLifoStage
        simulation={simulation}
        locale={locale}
        completedSteps={completedSteps}
        activeStepIndex={activeStepIndex}
      />
    );
  }

  if (simulation.key === "algorithm:queue") {
    return (
      <QueueFifoStage
        simulation={simulation}
        locale={locale}
        completedSteps={completedSteps}
        activeStepIndex={activeStepIndex}
      />
    );
  }

  if (simulation.key === "algorithm:hash-table") {
    return (
      <HashTableBucketStage
        simulation={simulation}
        locale={locale}
        completedSteps={completedSteps}
        activeStepIndex={activeStepIndex}
      />
    );
  }

  const visibleSteps = simulation.steps.slice(0, completedSteps);
  const activeStep = simulation.steps[activeStepIndex];
  const flowActors = simulation.actors.filter((actorItem) => actorItem.id !== "wire");
  const laneActors = flowActors.length >= 2 ? flowActors : simulation.actors;
  const laneCount = Math.max(laneActors.length, 1);
  const laneWidth = 220;
  const laneGap = laneCount === 1 ? 0 : 260 / Math.max(laneCount - 1, 1);
  const laneTop = 118;
  const stateHeight = 84;
  const stateGap = 0;
  const stateTones = ["blue", "yellow", "orange", "green", "purple", "teal"];
  const statesByActor = useMemo(() => {
    const result = new Map<string, string[]>();

    laneActors.forEach((actorItem) => {
      const states = [
        readLocalizedText(simulation.initialStates[actorItem.id] ?? actorItem.detail, locale),
      ];

      if (simulation.key === "network:tcp-handshake" && actorItem.id === "server") {
        states.unshift("CLOSED");
      }

      simulation.steps.forEach((stepItem) => {
        const nextState = stepItem.states[actorItem.id];

        if (nextState) {
          const label = readLocalizedText(nextState, locale);

          if (states[states.length - 1] !== label) {
            states.push(label);
          }
        }
      });

      result.set(actorItem.id, states);
    });

    return result;
  }, [laneActors, locale, simulation.initialStates, simulation.steps]);
  const maxStateCount = Math.max(
    1,
    ...Array.from(statesByActor.values()).map((states) => states.length),
  );
  const stageWidth = 260 + laneWidth * laneCount + laneGap * Math.max(laneCount - 1, 0);
  const stageHeight = Math.max(
    560,
    laneTop + maxStateCount * (stateHeight + stateGap) + 126,
  );
  const lanePositions = useMemo(() => {
    const positions = new Map<string, { x: number; top: number; width: number }>();

    laneActors.forEach((actorItem, index) => {
      positions.set(actorItem.id, {
        x: 70 + index * (laneWidth + laneGap),
        top: laneTop,
        width: laneWidth,
      });
    });

    return positions;
  }, [laneActors, laneGap]);
  const stateIndexByActor = useMemo(() => {
    const indexes = new Map<string, number>();

    laneActors.forEach((actorItem) => {
      const currentState = readLocalizedText(actorStates[actorItem.id], locale);
      const states = statesByActor.get(actorItem.id) ?? [];
      const index = states.findIndex((label) => label === currentState);

      indexes.set(actorItem.id, Math.max(index, 0));
    });

    return indexes;
  }, [actorStates, laneActors, locale, statesByActor]);

  function getStateCenter(actorId: string, stateIndex: number) {
    const lane = lanePositions.get(actorId) ?? lanePositions.get(laneActors[0]?.id ?? "");
    const safeLane = lane ?? { x: 70, top: laneTop, width: laneWidth };

    return {
      x: safeLane.x + safeLane.width / 2,
      y: safeLane.top + stateIndex * (stateHeight + stateGap) + stateHeight / 2,
    };
  }

  function getStepEndpoints(stepIndex: number) {
    const item = simulation.steps[stepIndex];
    const previousStates = getSimulationActorStates(simulation, stepIndex);
    const nextStates = getSimulationActorStates(simulation, stepIndex + 1);
    const fromActor = lanePositions.has(item.from) ? item.from : laneActors[0]?.id;
    const toActor = lanePositions.has(item.to) ? item.to : laneActors[laneActors.length - 1]?.id ?? fromActor;
    const fromStates = statesByActor.get(fromActor) ?? [];
    const toStates = statesByActor.get(toActor) ?? [];
    const fromStateLabel = readLocalizedText(previousStates[fromActor] ?? simulation.initialStates[fromActor], locale);
    const toStateLabel = readLocalizedText(nextStates[toActor] ?? simulation.initialStates[toActor], locale);
    const fromIndex = Math.max(fromStates.findIndex((label) => label === fromStateLabel), 0);
    const toIndex = Math.max(toStates.findIndex((label) => label === toStateLabel), 0);

    return {
      from: getStateCenter(fromActor, fromIndex),
      to: getStateCenter(toActor, toIndex),
      fromActor,
      toActor,
    };
  }

  return (
    <div className="visual-stage state-flow-stage">
      <div
        className="state-flow-map"
        style={{ aspectRatio: `${stageWidth} / ${stageHeight}` }}
      >
        <svg
          className="packet-sequence state-flow-sequence"
          viewBox={`0 0 ${stageWidth} ${stageHeight}`}
          preserveAspectRatio="xMidYMid meet"
          aria-label={readLocalizedText(simulation.title, locale)}
          role="img"
        >
          <defs>
            {[
              ["packet-arrow-brand", "var(--brand)"],
              ["packet-arrow-teal", "var(--tertiary)"],
              ["packet-arrow-success", "var(--success)"],
              ["packet-arrow-warning", "#f59e0b"],
              ["packet-arrow-danger", "var(--danger)"],
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
          <path
            className="data-flow-arrow"
            d={`M ${stageWidth * 0.29} 74 L ${stageWidth * 0.71} 74`}
            markerStart="url(#packet-arrow-success)"
            markerEnd="url(#packet-arrow-success)"
          />
          <SvgLabelBox
            x={stageWidth / 2}
            y={58}
            width={Math.min(620, stageWidth * 0.45)}
            height={42}
            className="data-flow-label-box"
          >
            {readLocalizedText(simulation.pattern, locale)}
          </SvgLabelBox>
          {laneActors.map((actorItem) => {
            const lane = lanePositions.get(actorItem.id) ?? { x: 70, top: laneTop, width: laneWidth };
            const states = statesByActor.get(actorItem.id) ?? [];
            const activeStateIndex = stateIndexByActor.get(actorItem.id) ?? 0;
            const Icon = getActorIcon(actorItem.kind);

            return (
              <g key={actorItem.id} className="state-lane">
                <foreignObject x={lane.x + 42} y="16" width={lane.width - 84} height="58">
                  <div className="state-actor-icon">
                    <Icon size={42} />
                  </div>
                </foreignObject>
                <SvgLabelBox
                  x={lane.x + lane.width / 2}
                  y={104}
                  width={lane.width}
                  height={42}
                  className="state-lane-label-box"
                >
                  {readLocalizedText(actorItem.label, locale)}
                </SvgLabelBox>
                {states.map((stateLabel, index) => {
                  const y = lane.top + index * (stateHeight + stateGap);
                  const active = index <= activeStateIndex;

                  return (
                    <g
                      key={`${actorItem.id}-${stateLabel}-${index}`}
                      className={`state-block ${stateTones[index % stateTones.length]} ${active ? "active" : ""}`}
                    >
                      <rect x={lane.x} y={y} width={lane.width} height={stateHeight} />
                      <SvgLabelBox
                        x={lane.x + lane.width / 2}
                        y={y + stateHeight / 2}
                        width={lane.width - 16}
                        height={stateHeight - 12}
                        className="state-block-label-box"
                      >
                        {stateLabel}
                      </SvgLabelBox>
                    </g>
                  );
                })}
              </g>
            );
          })}
          {visibleSteps.map((item, index) => {
            const tone = item.tone ?? "brand";
            const endpoints = getStepEndpoints(index);
            const sameActor = endpoints.fromActor === endpoints.toActor;
            const rawLabelX = sameActor
              ? endpoints.from.x + 92
              : (endpoints.from.x + endpoints.to.x) / 2;
            const labelX = Math.min(Math.max(rawLabelX, 116), stageWidth - 116);
            const labelY = Math.min(
              Math.max((endpoints.from.y + endpoints.to.y) / 2 - 12, 144),
              stageHeight - 76,
            );
            const path = sameActor
              ? `M ${endpoints.from.x + 36} ${endpoints.from.y} C ${endpoints.from.x + 142} ${endpoints.from.y - 24}, ${endpoints.to.x + 142} ${endpoints.to.y + 24}, ${endpoints.to.x + 36} ${endpoints.to.y}`
              : `M ${endpoints.from.x} ${endpoints.from.y} L ${endpoints.to.x} ${endpoints.to.y}`;

            return (
              <g
                key={`${readLocalizedText(item.label, locale)}-${index}`}
                className={`packet-record ${tone} ${
                  index === completedSteps - 1 ? "active" : ""
                }`}
              >
                <path d={path} markerEnd={`url(#packet-arrow-${tone})`} />
                <SvgLabelBox
                  x={labelX}
                  y={labelY}
                  width={sameActor ? 180 : 230}
                  height={54}
                  className="packet-record-label-box"
                >
                  {readLocalizedText(item.label, locale)}
                </SvgLabelBox>
              </g>
            );
          })}
          {completedSteps >= simulation.steps.length && laneActors.length >= 2 && (
            <>
              <path
                className="data-transfer-arrow"
                d={`M ${stageWidth * 0.34} ${stageHeight - 58} L ${stageWidth * 0.66} ${stageHeight - 58}`}
                markerEnd="url(#packet-arrow-success)"
              />
              <SvgLabelBox
                x={stageWidth / 2}
                y={stageHeight - 78}
                width={260}
                height={42}
                className="data-transfer-label-box"
              >
                {locale === "zh" ? "数据传输" : "Data transfer"}
              </SvgLabelBox>
            </>
          )}
        </svg>
        <div className="wire-caption">
          <span>{readLocalizedText(activeStep.title, locale)}</span>
          <span>{completedSteps}/{simulation.steps.length}</span>
        </div>
      </div>
    </div>
  );
}

function ArrayIndexStage({
  simulation,
  locale,
  completedSteps,
  activeStepIndex,
}: {
  simulation: VisualSimulation;
  locale: Locale;
  completedSteps: number;
  activeStepIndex: number;
}) {
  const activeStep = simulation.steps[activeStepIndex];
  const values = [4, 8, 15, 16, 23];
  const insertedValues = [4, 8, 99, 15, 16, 23];
  const showAddress = completedSteps >= 1;
  const showRead = completedSteps >= 2;
  const showInsert = completedSteps >= 3;
  const showCheck = completedSteps >= 4;
  const cells = showInsert ? insertedValues : values;
  const cellWidth = showInsert ? 118 : 128;
  const startX = showInsert ? 108 : 140;
  const gap = 10;
  const cellsY = 230;
  const addressY = 354;
  const targetIndex = 2;
  const highlightIndex = targetIndex;
  const suffixStart = showInsert ? 3 : 2;
  const selectedX = startX + highlightIndex * (cellWidth + gap) + cellWidth / 2;
  const insertX = startX + targetIndex * (cellWidth + gap) + cellWidth / 2;

  return (
    <div className="visual-stage array-stage">
      <div className="array-card">
        <svg
          className="array-diagram"
          viewBox="0 0 980 620"
          preserveAspectRatio="xMidYMid meet"
          aria-label={readLocalizedText(simulation.title, locale)}
          role="img"
        >
          <defs>
            <filter id="array-soft-shadow" x="-20%" y="-30%" width="140%" height="160%">
              <feDropShadow dx="0" dy="10" stdDeviation="9" floodOpacity="0.14" />
            </filter>
            <marker
              id="array-arrow-brand"
              viewBox="0 0 10 10"
              refX="8"
              refY="5"
              markerWidth="8"
              markerHeight="8"
              orient="auto-start-reverse"
            >
              <path d="M 0 0 L 10 5 L 0 10 z" />
            </marker>
            <marker
              id="array-arrow-warning"
              viewBox="0 0 10 10"
              refX="8"
              refY="5"
              markerWidth="8"
              markerHeight="8"
              orient="auto-start-reverse"
            >
              <path d="M 0 0 L 10 5 L 0 10 z" />
            </marker>
          </defs>
          <rect className="array-bg" x="26" y="24" width="928" height="572" rx="24" />
          <text className="array-title" x="490" y="76">
            {readLocalizedText(simulation.title, locale)}
          </text>
          <text className="array-subtitle" x="490" y="108">
            {locale === "zh" ? "base=1000, elementSize=4, index i=2" : "base=1000, elementSize=4, index i=2"}
          </text>

          <g className={`array-formula ${showAddress ? "visible" : ""}`}>
            <rect x="116" y="138" width="748" height="58" rx="16" />
            <text x="490" y="174">
              {locale === "zh" ? "address(a[i]) = base + i * elementSize" : "address(a[i]) = base + i * elementSize"}
            </text>
          </g>

          <g className="array-cells">
            {cells.map((value, index) => {
              const x = startX + index * (cellWidth + gap);
              const isInserted = showInsert && value === 99;
              const isTarget = index === highlightIndex && showRead;
              const isSuffix = showInsert && index >= suffixStart;
              const cellClass = [
                "array-cell",
                isTarget ? "target" : "",
                isInserted ? "inserted" : "",
                isSuffix ? "shifted" : "",
              ].filter(Boolean).join(" ");

              return (
                <g key={`${value}-${index}`} className={cellClass}>
                  <rect x={x} y={cellsY} width={cellWidth} height="86" rx="10" />
                  <text className="array-cell-value" x={x + cellWidth / 2} y={cellsY + 38}>
                    {value}
                  </text>
                  <text className="array-cell-index" x={x + cellWidth / 2} y={cellsY + 66}>
                    a[{index}]
                  </text>
                  <text className="array-cell-address" x={x + cellWidth / 2} y={addressY}>
                    {1000 + index * 4}
                  </text>
                </g>
              );
            })}
          </g>

          {showRead && (
            <g className="array-read-pointer">
              <path d={`M 490 196 L ${selectedX} 224`} markerEnd="url(#array-arrow-brand)" />
              <rect x={selectedX - 106} y="404" width="212" height="58" rx="14" />
              <text x={selectedX} y="428">a[2] = 15</text>
              <text x={selectedX} y="448">O(1)</text>
            </g>
          )}

          {showInsert && (
            <>
              <g className="array-insert-marker">
                <path d={`M ${insertX} 214 L ${insertX} 142`} markerEnd="url(#array-arrow-warning)" />
                <rect x={insertX - 84} y="122" width="168" height="44" rx="12" />
                <text x={insertX} y="150">
                  {locale === "zh" ? "插入 99" : "insert 99"}
                </text>
              </g>
              <g className="array-shift-arrows">
                {[3, 4, 5].map((index) => {
                  const x = startX + index * (cellWidth + gap) + cellWidth / 2;
                  return (
                    <path
                      key={index}
                      d={`M ${x - 56} ${cellsY - 22} L ${x + 48} ${cellsY - 22}`}
                      markerEnd="url(#array-arrow-warning)"
                    />
                  );
                })}
                <rect x="590" y="404" width="250" height="58" rx="14" />
                <text x="715" y="428">{locale === "zh" ? "后缀右移" : "suffix shifts right"}</text>
                <text x="715" y="448">O(n)</text>
              </g>
            </>
          )}

          <g className={`array-boundary ${showCheck ? "visible" : ""}`}>
            <rect x="122" y="502" width="736" height="54" rx="16" />
            <text x="490" y="535">
              {locale === "zh"
                ? "边界：0 <= i < length，插入时还要检查容量"
                : "Bounds: 0 <= i < length; insertion also checks capacity"}
            </text>
          </g>
        </svg>
        <div className="wire-caption array-caption">
          <span>{readLocalizedText(activeStep.title, locale)}</span>
          <span>{completedSteps}/{simulation.steps.length}</span>
        </div>
      </div>
    </div>
  );
}

function LinkedListPointerStage({
  simulation,
  locale,
  completedSteps,
  activeStepIndex,
}: {
  simulation: VisualSimulation;
  locale: Locale;
  completedSteps: number;
  activeStepIndex: number;
}) {
  const activeStep = simulation.steps[activeStepIndex];
  const baseNodes = [
    { id: "A", value: 7, x: 128, y: 238 },
    { id: "B", value: 12, x: 328, y: 238 },
    { id: "C", value: 18, x: 528, y: 238 },
    { id: "D", value: 24, x: 728, y: 238 },
  ];
  const insertedNode = { id: "X", value: 99, x: 528, y: 370 };
  const nodes = completedSteps >= 3
    ? [baseNodes[0], baseNodes[1], insertedNode, baseNodes[2], baseNodes[3]]
    : baseNodes;
  const showTraversal = completedSteps >= 2;
  const showInsert = completedSteps >= 3;
  const showReverse = completedSteps >= 4;
  const headTarget = showReverse ? insertedNode : baseNodes[0];
  const arrowId = (tone: string) => `url(#linked-list-arrow-${tone})`;

  function pointerPath(from: { x: number; y: number }, to: { x: number; y: number }) {
    const startX = from.x + 126;
    const startY = from.y + 42;
    const endX = to.x - 14;
    const endY = to.y + 42;
    const curve = Math.abs(endY - startY) > 80
      ? `C ${startX + 44} ${startY}, ${endX - 44} ${endY}, ${endX} ${endY}`
      : `L ${endX} ${endY}`;

    return `M ${startX} ${startY} ${curve}`;
  }

  function renderNode(node: { id: string; value: number; x: number; y: number }) {
    const inserted = node.id === "X";
    const reversedHead = showReverse && node.id === "X";
    const active = showTraversal && ["B", "C"].includes(node.id);

    return (
      <g
        key={node.id}
        className={[
          "linked-node",
          inserted ? "inserted" : "",
          reversedHead ? "reversed-head" : "",
          active ? "active" : "",
        ].filter(Boolean).join(" ")}
      >
        <rect x={node.x} y={node.y} width="146" height="86" rx="12" />
        <line x1={node.x + 88} y1={node.y} x2={node.x + 88} y2={node.y + 86} />
        <text className="linked-node-id" x={node.x + 44} y={node.y + 34}>
          {node.id}
        </text>
        <text className="linked-node-value" x={node.x + 44} y={node.y + 62}>
          {node.value}
        </text>
        <text className="linked-node-next" x={node.x + 117} y={node.y + 51}>
          next
        </text>
      </g>
    );
  }

  return (
    <div className="visual-stage linked-list-stage">
      <div className="linked-list-card">
        <svg
          className="linked-list-diagram"
          viewBox="0 0 980 650"
          preserveAspectRatio="xMidYMid meet"
          aria-label={readLocalizedText(simulation.title, locale)}
          role="img"
        >
          <defs>
            <filter id="linked-list-soft-shadow" x="-20%" y="-30%" width="140%" height="160%">
              <feDropShadow dx="0" dy="10" stdDeviation="9" floodOpacity="0.13" />
            </filter>
            {[
              ["brand", "var(--brand)"],
              ["teal", "var(--tertiary)"],
              ["warning", "#f59e0b"],
              ["success", "var(--success)"],
              ["muted", "color-mix(in srgb, var(--muted) 54%, transparent)"],
            ].map(([tone, fill]) => (
              <marker
                key={tone}
                id={`linked-list-arrow-${tone}`}
                viewBox="0 0 10 10"
                refX="8"
                refY="5"
                markerWidth="8"
                markerHeight="8"
                orient="auto-start-reverse"
              >
                <path d="M 0 0 L 10 5 L 0 10 z" fill={fill} />
              </marker>
            ))}
          </defs>

          <rect className="linked-list-bg" x="26" y="24" width="928" height="586" rx="24" />
          <text className="linked-list-title" x="490" y="76">
            {readLocalizedText(simulation.title, locale)}
          </text>
          <text className="linked-list-subtitle" x="490" y="108">
            {locale === "zh" ? "node = value + next, head 是唯一入口" : "node = value + next, head is the entry"}
          </text>

          <g className="linked-head-pointer">
            <rect x="58" y="146" width="156" height="54" rx="14" />
            <text x="136" y="180">{showReverse ? "head -> X" : "head -> A"}</text>
            <path
              d={`M 214 173 C 250 173, ${headTarget.x - 48} ${headTarget.y + 12}, ${headTarget.x + 16} ${headTarget.y + 22}`}
              markerEnd={arrowId(showReverse ? "success" : "brand")}
            />
          </g>

          <g className="linked-nodes">
            {nodes.map(renderNode)}
          </g>

          <g className="linked-next-links">
            {!showReverse && (
              <>
                <path d={pointerPath(baseNodes[0], baseNodes[1])} markerEnd={arrowId("brand")} />
                {showInsert ? (
                  <>
                    <path d={pointerPath(baseNodes[1], insertedNode)} markerEnd={arrowId("warning")} />
                    <path d={pointerPath(insertedNode, baseNodes[2])} markerEnd={arrowId("warning")} />
                  </>
                ) : (
                  <path d={pointerPath(baseNodes[1], baseNodes[2])} markerEnd={arrowId("brand")} />
                )}
                <path d={pointerPath(baseNodes[2], baseNodes[3])} markerEnd={arrowId("brand")} />
              </>
            )}
            {showReverse && (
              <>
                <path d={pointerPath(insertedNode, baseNodes[1])} markerEnd={arrowId("success")} />
                <path d={pointerPath(baseNodes[1], baseNodes[0])} markerEnd={arrowId("success")} />
                <path d={pointerPath(baseNodes[2], baseNodes[3])} markerEnd={arrowId("brand")} />
                <path
                  className="linked-remainder-link"
                  d={`M ${baseNodes[0].x + 52} ${baseNodes[0].y + 96} C 360 560, 474 552, ${baseNodes[2].x + 36} ${baseNodes[2].y + 96}`}
                  markerEnd={arrowId("teal")}
                />
              </>
            )}
          </g>

          {showTraversal && (
            <g className="linked-traversal">
              <path d="M 174 210 L 374 210 L 574 210" markerEnd={arrowId("teal")} />
              <rect x="426" y="136" width="182" height="52" rx="14" />
              <text x="517" y="158">curr = C</text>
              <text x="517" y="178">{"A -> B -> C"}</text>
            </g>
          )}

          {showInsert && (
            <g className="linked-insert-note">
              <rect x="622" y="394" width="242" height="76" rx="14" />
              <text x="743" y="420">X.next = C</text>
              <text x="743" y="444">B.next = X</text>
              <text x="743" y="464">O(1)</text>
            </g>
          )}

          {showReverse && (
            <g className="linked-reverse-note">
              <rect x="94" y="494" width="360" height="68" rx="16" />
              <text x="274" y="521">{locale === "zh" ? "保存 next，再执行 curr.next = prev" : "save next, then curr.next = prev"}</text>
              <text x="274" y="544">prev = X, curr = C</text>
            </g>
          )}

          <g className="linked-null-tail">
            <path
              d={`M ${baseNodes[3].x + 126} ${baseNodes[3].y + 42} L 910 ${baseNodes[3].y + 42}`}
              markerEnd={arrowId("muted")}
            />
            <text x="928" y={baseNodes[3].y + 48}>null</text>
          </g>
        </svg>
        <div className="wire-caption linked-list-caption">
          <span>{readLocalizedText(activeStep.title, locale)}</span>
          <span>{completedSteps}/{simulation.steps.length}</span>
        </div>
      </div>
    </div>
  );
}

function StackLifoStage({
  simulation,
  locale,
  completedSteps,
  activeStepIndex,
}: {
  simulation: VisualSimulation;
  locale: Locale;
  completedSteps: number;
  activeStepIndex: number;
}) {
  const activeStep = simulation.steps[activeStepIndex];
  const capacity = 5;
  const pushedValues = [7, 12, 18];
  const visibleValues = completedSteps >= 5
    ? []
    : completedSteps >= 4
      ? [7]
      : completedSteps >= 2
        ? pushedValues
        : [];
  const topIndex = visibleValues.length - 1;
  const showPush = completedSteps >= 2;
  const showPeek = completedSteps >= 3;
  const showPop = completedSteps >= 4;
  const showBoundary = completedSteps >= 5;
  const cellX = 340;
  const cellY = 468;
  const cellWidth = 270;
  const cellHeight = 70;
  const cellGap = 10;
  const stackHeight = capacity * (cellHeight + cellGap) - cellGap;
  const topY = topIndex >= 0
    ? cellY - topIndex * (cellHeight + cellGap) + cellHeight / 2
    : cellY + cellHeight / 2;
  const topLabel = topIndex >= 0 ? `top -> ${visibleValues[topIndex]}` : "top = -1";
  const arrowId = (tone: string) => `url(#stack-arrow-${tone})`;

  return (
    <div className="visual-stage stack-stage">
      <div className="stack-card">
        <svg
          className="stack-diagram"
          viewBox="0 0 980 650"
          preserveAspectRatio="xMidYMid meet"
          aria-label={readLocalizedText(simulation.title, locale)}
          role="img"
        >
          <defs>
            <filter id="stack-soft-shadow" x="-20%" y="-30%" width="140%" height="160%">
              <feDropShadow dx="0" dy="10" stdDeviation="9" floodOpacity="0.12" />
            </filter>
            {[
              ["brand", "var(--brand)"],
              ["teal", "var(--tertiary)"],
              ["warning", "#f59e0b"],
              ["success", "var(--success)"],
              ["danger", "var(--danger)"],
              ["muted", "color-mix(in srgb, var(--muted) 54%, transparent)"],
            ].map(([tone, fill]) => (
              <marker
                key={tone}
                id={`stack-arrow-${tone}`}
                viewBox="0 0 10 10"
                refX="8"
                refY="5"
                markerWidth="8"
                markerHeight="8"
                orient="auto-start-reverse"
              >
                <path d="M 0 0 L 10 5 L 0 10 z" fill={fill} />
              </marker>
            ))}
          </defs>

          <rect className="stack-bg" x="26" y="24" width="928" height="586" rx="24" />
          <text className="stack-title" x="490" y="76">
            {readLocalizedText(simulation.title, locale)}
          </text>
          <text className="stack-subtitle" x="490" y="108">
            {locale === "zh" ? "bottom 固定，所有操作都发生在 top" : "bottom stays fixed; every operation touches top"}
          </text>

          <g className="stack-frame" transform={`translate(${cellX}, ${cellY - stackHeight + cellHeight})`}>
            <path d={`M 0 0 L 0 ${stackHeight + 16} L ${cellWidth} ${stackHeight + 16} L ${cellWidth} 0`} />
            {Array.from({ length: capacity }).map((_, slot) => {
              const valueIndex = capacity - 1 - slot;
              const value = visibleValues[valueIndex];
              const y = slot * (cellHeight + cellGap);
              const isTop = valueIndex === topIndex;

              return (
                <g
                  key={slot}
                  className={[
                    "stack-slot",
                    value !== undefined ? "filled" : "",
                    isTop ? "top" : "",
                  ].filter(Boolean).join(" ")}
                >
                  <rect x="12" y={y} width={cellWidth - 24} height={cellHeight} rx="10" />
                  <text x={cellWidth / 2} y={y + 44}>
                    {value !== undefined ? value : ""}
                  </text>
                </g>
              );
            })}
            <text className="stack-bottom-label" x={cellWidth / 2} y={stackHeight + 46}>
              bottom
            </text>
          </g>

          <g className="stack-top-pointer">
            <rect x="90" y={topY - 26} width="154" height="52" rx="14" />
            <text x="167" y={topY + 5}>{topLabel}</text>
            <path
              d={`M 244 ${topY} C 282 ${topY}, 306 ${topY}, ${cellX + 16} ${topY}`}
              markerEnd={arrowId(showBoundary ? "danger" : topIndex >= 0 ? "teal" : "muted")}
            />
          </g>

          <g className="stack-operation-panel">
            <rect x="690" y="154" width="210" height="280" rx="18" />
            <text className="stack-operation-title" x="795" y="194">
              {locale === "zh" ? "操作序列" : "Operation trace"}
            </text>
            {[
              [1, "init", locale === "zh" ? "top=-1" : "top=-1"],
              [2, "push", "push(7), push(12), push(18)"],
              [3, "peek", locale === "zh" ? "peek() -> 18" : "peek() -> 18"],
              [4, "pop", locale === "zh" ? "pop() -> 18, 12" : "pop() -> 18, 12"],
              [5, "empty", "isEmpty()"],
            ].map(([stepNumber, label, detail]) => (
              <g
                key={label}
                className={`stack-operation-row ${completedSteps >= Number(stepNumber) ? "active" : ""}`}
              >
                <circle cx="716" cy={196 + Number(stepNumber) * 38} r="8" />
                <text x="742" y={202 + Number(stepNumber) * 38}>{detail}</text>
              </g>
            ))}
          </g>

          {showPush && (
            <g className="stack-push-path">
              <path d={`M 490 142 C 490 182, 490 208, 490 ${topY - 44}`} markerEnd={arrowId("teal")} />
              <rect x="410" y="122" width="180" height="44" rx="12" />
              <text x="500" y="151">{locale === "zh" ? "push 写入 top+1" : "push writes top+1"}</text>
            </g>
          )}

          {showPeek && (
            <g className="stack-peek-note">
              <rect x="122" y="132" width="238" height="70" rx="16" />
              <text x="241" y="160">peek() = 18</text>
              <text x="241" y="184">{locale === "zh" ? "不移动 top" : "top unchanged"}</text>
              <path d={`M 360 168 C 422 154, 506 154, ${cellX + cellWidth - 12} ${topY}`} markerEnd={arrowId("warning")} />
            </g>
          )}

          {showPop && (
            <g className="stack-pop-note">
              <path d={`M ${cellX + cellWidth - 12} ${topY} C 660 ${topY}, 682 500, 776 500`} markerEnd={arrowId("success")} />
              <rect x="712" y="466" width="206" height="74" rx="16" />
              <text x="815" y="492">{locale === "zh" ? "弹出顺序" : "pop order"}</text>
              <text x="815" y="516">{"18 -> 12"}</text>
            </g>
          )}

          {showBoundary && (
            <g className="stack-boundary-note">
              <rect x="108" y="514" width="324" height="58" rx="16" />
              <text x="270" y="538">{locale === "zh" ? "空栈先判断 isEmpty()" : "check isEmpty() first"}</text>
              <text x="270" y="558">{locale === "zh" ? "pop / peek 走受控边界" : "pop / peek use controlled boundary"}</text>
            </g>
          )}
        </svg>
        <div className="wire-caption stack-caption">
          <span>{readLocalizedText(activeStep.title, locale)}</span>
          <span>{completedSteps}/{simulation.steps.length}</span>
        </div>
      </div>
    </div>
  );
}

function QueueFifoStage({
  simulation,
  locale,
  completedSteps,
  activeStepIndex,
}: {
  simulation: VisualSimulation;
  locale: Locale;
  completedSteps: number;
  activeStepIndex: number;
}) {
  const activeStep = simulation.steps[activeStepIndex];
  const capacity = 5;
  const states = completedSteps >= 5
    ? [
        { slot: 0, value: 33, order: 6 },
        { slot: 2, value: 18, order: 3 },
        { slot: 3, value: 24, order: 4 },
        { slot: 4, value: 27, order: 5 },
      ]
    : completedSteps >= 4
      ? [{ slot: 2, value: 18, order: 3 }]
      : completedSteps >= 2
        ? [
            { slot: 0, value: 7, order: 1 },
            { slot: 1, value: 12, order: 2 },
            { slot: 2, value: 18, order: 3 },
          ]
        : [];
  const headIndex = completedSteps >= 4 ? 2 : 0;
  const tailIndex = completedSteps >= 5 ? 1 : completedSteps >= 2 ? 3 : 0;
  const size = states.length;
  const showEnqueue = completedSteps >= 2;
  const showPeek = completedSteps >= 3;
  const showDequeue = completedSteps >= 4;
  const showWrap = completedSteps >= 5;
  const slotWidth = 138;
  const slotHeight = 92;
  const slotGap = 12;
  const startX = 110;
  const slotY = 274;
  const headX = startX + headIndex * (slotWidth + slotGap) + slotWidth / 2;
  const tailX = startX + tailIndex * (slotWidth + slotGap) + slotWidth / 2;
  const arrowId = (tone: string) => `url(#queue-arrow-${tone})`;
  const valueBySlot = new Map(states.map((item) => [item.slot, item]));
  const orderedValues = [...states].sort((a, b) => a.order - b.order);

  return (
    <div className="visual-stage queue-stage">
      <div className="queue-card">
        <svg
          className="queue-diagram"
          viewBox="0 0 980 650"
          preserveAspectRatio="xMidYMid meet"
          aria-label={readLocalizedText(simulation.title, locale)}
          role="img"
        >
          <defs>
            <filter id="queue-soft-shadow" x="-20%" y="-30%" width="140%" height="160%">
              <feDropShadow dx="0" dy="10" stdDeviation="9" floodOpacity="0.12" />
            </filter>
            {[
              ["brand", "var(--brand)"],
              ["teal", "var(--tertiary)"],
              ["warning", "#f59e0b"],
              ["success", "var(--success)"],
              ["danger", "var(--danger)"],
              ["muted", "color-mix(in srgb, var(--muted) 54%, transparent)"],
            ].map(([tone, fill]) => (
              <marker
                key={tone}
                id={`queue-arrow-${tone}`}
                viewBox="0 0 10 10"
                refX="8"
                refY="5"
                markerWidth="8"
                markerHeight="8"
                orient="auto-start-reverse"
              >
                <path d="M 0 0 L 10 5 L 0 10 z" fill={fill} />
              </marker>
            ))}
          </defs>

          <rect className="queue-bg" x="26" y="24" width="928" height="586" rx="24" />
          <text className="queue-title" x="490" y="76">
            {readLocalizedText(simulation.title, locale)}
          </text>
          <text className="queue-subtitle" x="490" y="108">
            {locale === "zh" ? "head 出队，tail 入队，数组下标按 capacity 取模" : "head dequeues, tail enqueues, indices wrap by capacity"}
          </text>

          <g className="queue-formula">
            <rect x="244" y="134" width="492" height="54" rx="16" />
            <text x="490" y="168">tail = (head + size) % capacity</text>
          </g>

          <g className="queue-slots">
            {Array.from({ length: capacity }).map((_, slot) => {
              const x = startX + slot * (slotWidth + slotGap);
              const item = valueBySlot.get(slot);
              const isHead = slot === headIndex && size > 0;
              const isTail = slot === tailIndex;
              const isWrapped = showWrap && slot === 0;
              const slotClass = [
                "queue-slot",
                item ? "filled" : "",
                isHead ? "head" : "",
                isTail ? "tail" : "",
                isWrapped ? "wrapped" : "",
              ].filter(Boolean).join(" ");

              return (
                <g key={slot} className={slotClass}>
                  <rect x={x} y={slotY} width={slotWidth} height={slotHeight} rx="12" />
                  <text className="queue-slot-value" x={x + slotWidth / 2} y={slotY + 42}>
                    {item?.value ?? ""}
                  </text>
                  <text className="queue-slot-index" x={x + slotWidth / 2} y={slotY + 72}>
                    {`slot ${slot}`}
                  </text>
                </g>
              );
            })}
          </g>

          <g className="queue-head-pointer">
            <rect x={headX - 72} y="208" width="144" height="48" rx="14" />
            <text x={headX} y="238">{`head = ${headIndex}`}</text>
            <path d={`M ${headX} 256 L ${headX} ${slotY - 10}`} markerEnd={arrowId(size > 0 ? "teal" : "muted")} />
          </g>

          <g className="queue-tail-pointer">
            <rect x={tailX - 72} y="398" width="144" height="48" rx="14" />
            <text x={tailX} y="428">{`tail = ${tailIndex}`}</text>
            <path d={`M ${tailX} 398 L ${tailX} ${slotY + slotHeight + 10}`} markerEnd={arrowId(showWrap ? "danger" : "brand")} />
          </g>

          <g className="queue-order">
            <rect x="104" y="500" width="392" height="72" rx="16" />
            <text x="300" y="528">{locale === "zh" ? "逻辑顺序（队首 -> 队尾）" : "Logical order (head -> tail)"}</text>
            <text x="300" y="554">
              {orderedValues.length ? orderedValues.map((item) => item.value).join(" -> ") : "empty"}
            </text>
          </g>

          <g className="queue-size-panel">
            <rect x="606" y="500" width="270" height="72" rx="16" />
            <text x="741" y="528">{`size = ${size}, capacity = ${capacity}`}</text>
            <text x="741" y="554">
              {showWrap
                ? locale === "zh" ? "入队前检查 size < capacity" : "check size < capacity before enqueue"
                : locale === "zh" ? "普通入队/出队 O(1)" : "normal enqueue/dequeue O(1)"}
            </text>
          </g>

          {showEnqueue && (
            <g className="queue-enqueue-note">
              <path d={`M 490 196 C 570 220, 640 228, ${startX + 2.5 * (slotWidth + slotGap)} ${slotY - 16}`} markerEnd={arrowId("teal")} />
              <rect x="598" y="196" width="236" height="56" rx="16" />
              <text x="716" y="220">enqueue(7, 12, 18)</text>
              <text x="716" y="240">{locale === "zh" ? "写入 tail 后移动" : "write tail, then move"}</text>
            </g>
          )}

          {showPeek && (
            <g className="queue-peek-note">
              <rect x="84" y="138" width="214" height="58" rx="16" />
              <text x="191" y="162">peek() = 7</text>
              <text x="191" y="182">{locale === "zh" ? "指针保持" : "pointers unchanged"}</text>
              <path d={`M 298 168 C 340 168, 352 218, ${headX} ${slotY - 16}`} markerEnd={arrowId("warning")} />
            </g>
          )}

          {showDequeue && (
            <g className="queue-dequeue-note">
              <path d={`M ${headX} ${slotY + slotHeight + 14} C ${headX} 430, 430 454, 558 454`} markerEnd={arrowId("success")} />
              <rect x="500" y="416" width="212" height="74" rx="16" />
              <text x="606" y="442">{locale === "zh" ? "出队顺序" : "dequeue order"}</text>
              <text x="606" y="466">{"7 -> 12"}</text>
            </g>
          )}

          {showWrap && (
            <g className="queue-wrap-note">
              <path
                d={`M ${startX + 4 * (slotWidth + slotGap) + slotWidth / 2} ${slotY + 118} C 842 474, 108 474, ${startX + slotWidth / 2} ${slotY + 118}`}
                markerEnd={arrowId("danger")}
              />
              <rect x="342" y="392" width="230" height="54" rx="16" />
              <text x="457" y="416">tail wraps to slot 0</text>
              <text x="457" y="436">{locale === "zh" ? "取模保持连续顺序" : "modulo keeps order"}</text>
            </g>
          )}
        </svg>
        <div className="wire-caption queue-caption">
          <span>{readLocalizedText(activeStep.title, locale)}</span>
          <span>{completedSteps}/{simulation.steps.length}</span>
        </div>
      </div>
    </div>
  );
}

function HashTableBucketStage({
  simulation,
  locale,
  completedSteps,
  activeStepIndex,
}: {
  simulation: VisualSimulation;
  locale: Locale;
  completedSteps: number;
  activeStepIndex: number;
}) {
  const activeStep = simulation.steps[activeStepIndex];
  const capacity = completedSteps >= 5 ? 10 : 5;
  const showInsert = completedSteps >= 2;
  const showLookup = completedSteps >= 3;
  const showDelete = completedSteps >= 4;
  const showResize = completedSteps >= 5;
  const bucketRows = [
    { index: 0, y: 170 },
    { index: 1, y: 248 },
    { index: 2, y: 326 },
    { index: 3, y: 404 },
    { index: 4, y: 482 },
  ];
  const bucketX = 132;
  const bucketWidth = 170;
  const bucketHeight = 54;
  const chainStartX = 392;
  const entryWidth = 132;
  const entryHeight = 48;
  const entryGap = 26;
  const activeEntries = showDelete
    ? [{ key: "grape", value: 7, bucket: 2 }]
    : showInsert
      ? [
          { key: "apple", value: 3, bucket: 2 },
          { key: "grape", value: 7, bucket: 2 },
        ]
      : [];
  const resizeEntries = [
    { key: "grape", value: 7, x: 698, y: 194, bucket: 7 },
    { key: "melon", value: 4, x: 698, y: 278, bucket: 1 },
    { key: "pear", value: 9, x: 698, y: 362, bucket: 4 },
    { key: "kiwi", value: 5, x: 698, y: 446, bucket: 6 },
  ];
  const alpha = showResize ? "4/10 = 0.40" : showDelete ? "1/5 = 0.20" : showInsert ? "2/5 = 0.40" : "0/5 = 0.00";
  const arrowId = (tone: string) => `url(#hash-arrow-${tone})`;

  return (
    <div className="visual-stage hash-table-stage">
      <div className="hash-table-card">
        <svg
          className="hash-table-diagram"
          viewBox="0 0 980 680"
          preserveAspectRatio="xMidYMid meet"
          aria-label={readLocalizedText(simulation.title, locale)}
          role="img"
        >
          <defs>
            <filter id="hash-table-soft-shadow" x="-20%" y="-30%" width="140%" height="160%">
              <feDropShadow dx="0" dy="10" stdDeviation="9" floodOpacity="0.12" />
            </filter>
            {[
              ["brand", "var(--brand)"],
              ["teal", "var(--tertiary)"],
              ["warning", "#f59e0b"],
              ["success", "var(--success)"],
              ["danger", "var(--danger)"],
              ["muted", "color-mix(in srgb, var(--muted) 54%, transparent)"],
            ].map(([tone, fill]) => (
              <marker
                key={tone}
                id={`hash-arrow-${tone}`}
                viewBox="0 0 10 10"
                refX="8"
                refY="5"
                markerWidth="8"
                markerHeight="8"
                orient="auto-start-reverse"
              >
                <path d="M 0 0 L 10 5 L 0 10 z" fill={fill} />
              </marker>
            ))}
          </defs>

          <rect className="hash-table-bg" x="26" y="24" width="928" height="620" rx="24" />
          <text className="hash-table-title" x="490" y="76">
            {readLocalizedText(simulation.title, locale)}
          </text>
          <text className="hash-table-subtitle" x="490" y="108">
            {locale === "zh"
              ? "hash(key) % capacity 定位桶，碰撞项进入同桶链"
              : "hash(key) % capacity selects a bucket; collisions enter the bucket chain"}
          </text>

          <g className="hash-formula">
            <rect x="98" y="126" width="354" height="52" rx="16" />
            <text x="275" y="158">{`bucket = hash(key) % ${capacity}`}</text>
          </g>

          <g className="hash-buckets">
            {bucketRows.map((row) => {
              const active = row.index === 2 && showInsert;
              const x = bucketX;
              const y = row.y;

              return (
                <g
                  key={row.index}
                  className={[
                    "hash-bucket",
                    active ? "active" : "",
                    showResize ? "resized" : "",
                  ].filter(Boolean).join(" ")}
                >
                  <rect x={x} y={y} width={bucketWidth} height={bucketHeight} rx="12" />
                  <text x={x + 42} y={y + 34}>{`[${row.index}]`}</text>
                  <text x={x + 114} y={y + 34}>
                    {active ? "chain" : "empty"}
                  </text>
                  {active && (
                    <path
                      d={`M ${x + bucketWidth} ${y + bucketHeight / 2} L ${chainStartX - 18} ${y + bucketHeight / 2}`}
                      markerEnd={arrowId(showDelete ? "success" : "teal")}
                    />
                  )}
                </g>
              );
            })}
          </g>

          {activeEntries.length > 0 && (
            <g className="hash-chain">
              {activeEntries.map((entry, index) => {
                const x = chainStartX + index * (entryWidth + entryGap);
                const y = bucketRows[2].y + 3;
                const isLookup = showLookup && entry.key === "grape";
                const isDeletedTarget = showDelete && entry.key === "apple";

                return (
                  <g
                    key={entry.key}
                    className={[
                      "hash-entry",
                      isLookup ? "lookup" : "",
                      isDeletedTarget ? "deleted" : "",
                    ].filter(Boolean).join(" ")}
                  >
                    <rect x={x} y={y} width={entryWidth} height={entryHeight} rx="12" />
                    <text className="hash-entry-key" x={x + entryWidth / 2} y={y + 22}>
                      {entry.key}
                    </text>
                    <text className="hash-entry-value" x={x + entryWidth / 2} y={y + 40}>
                      {`value=${entry.value}`}
                    </text>
                    {index < activeEntries.length - 1 && (
                      <path
                        d={`M ${x + entryWidth} ${y + entryHeight / 2} L ${x + entryWidth + entryGap - 8} ${y + entryHeight / 2}`}
                        markerEnd={arrowId("teal")}
                      />
                    )}
                  </g>
                );
              })}
            </g>
          )}

          {showInsert && (
            <g className="hash-insert-note">
              <path d={`M 275 178 C 316 230, 348 292, ${chainStartX + 56} ${bucketRows[2].y - 14}`} markerEnd={arrowId("teal")} />
              <rect x="548" y="138" width="314" height="76" rx="16" />
              <text x="705" y="166">hash(apple) = 17, hash(grape) = 22</text>
              <text x="705" y="190">{locale === "zh" ? "17 % 5 = 2, 22 % 5 = 2" : "17 % 5 = 2, 22 % 5 = 2"}</text>
            </g>
          )}

          {showLookup && (
            <g className="hash-lookup-note">
              <rect x="570" y="404" width="268" height="70" rx="16" />
              <text x="704" y="430">{locale === "zh" ? "lookup(\"grape\")" : "lookup(\"grape\")"}</text>
              <text x="704" y="454">{locale === "zh" ? "定位桶 2 后比较 key" : "jump to bucket 2, compare keys"}</text>
              <path d={`M ${chainStartX + entryWidth + entryGap + entryWidth / 2} ${bucketRows[2].y + 56} C 688 384, 698 404, 704 404`} markerEnd={arrowId("warning")} />
            </g>
          )}

          {showDelete && (
            <g className="hash-delete-note">
              <rect x="346" y="500" width="262" height="70" rx="16" />
              <text x="477" y="526">{locale === "zh" ? "delete(\"apple\")" : "delete(\"apple\")"}</text>
              <text x="477" y="550">{locale === "zh" ? "bucket[2] 保留 grape" : "bucket[2] keeps grape"}</text>
              <path d={`M ${chainStartX + 64} ${bucketRows[2].y + 60} C 468 444, 472 470, 477 500`} markerEnd={arrowId("success")} />
            </g>
          )}

          {showResize && (
            <g className="hash-resize-panel">
              <rect x="646" y="180" width="230" height="342" rx="18" />
              <text className="hash-resize-title" x="761" y="212">{locale === "zh" ? "扩容后 capacity=10" : "after resize capacity=10"}</text>
              {resizeEntries.map((entry) => (
                <g key={entry.key} className="hash-resize-entry">
                  <rect x={entry.x} y={entry.y} width="126" height="44" rx="11" />
                  <text x={entry.x + 63} y={entry.y + 19}>{entry.key}</text>
                  <text x={entry.x + 63} y={entry.y + 36}>{`bucket ${entry.bucket}`}</text>
                </g>
              ))}
              <path d="M 606 354 C 646 332, 658 326, 690 318" markerEnd={arrowId("danger")} />
            </g>
          )}

          <g className="hash-load-panel">
            <rect x="102" y="590" width="364" height="52" rx="16" />
            <text x="284" y="622">{`load factor alpha = ${alpha}`}</text>
          </g>
          <g className="hash-cost-panel">
            <rect x="520" y="590" width="338" height="52" rx="16" />
            <text x="689" y="622">
              {showResize
                ? locale === "zh" ? "resize 后摊还 O(1)" : "amortized O(1) after resize"
                : locale === "zh" ? "桶分布均匀时期望 O(1)" : "expected O(1) with balanced buckets"}
            </text>
          </g>
        </svg>
        <div className="wire-caption hash-table-caption">
          <span>{readLocalizedText(activeStep.title, locale)}</span>
          <span>{completedSteps}/{simulation.steps.length}</span>
        </div>
      </div>
    </div>
  );
}

function SwitchForwardingStage({
  simulation,
  locale,
  completedSteps,
  activeStepIndex,
}: {
  simulation: VisualSimulation;
  locale: Locale;
  completedSteps: number;
  activeStepIndex: number;
}) {
  const activeStep = simulation.steps[activeStepIndex];
  const tableRows = [
    { mac: "AA:AA", vlan: "10", port: "Gi0/1", step: 1 },
    { mac: "BB:BB", vlan: "10", port: "Gi0/3", step: 3 },
  ];
  const floodPorts = [
    { x1: 570, y1: 286, x2: 918, y2: 186, label: "Gi0/2" },
    { x1: 570, y1: 286, x2: 918, y2: 352, label: "Gi0/3" },
    { x1: 570, y1: 286, x2: 918, y2: 438, label: "Gi0/4" },
  ];

  return (
    <div className="visual-stage switch-stage">
      <div className="tcp-handshake-card switch-card">
        <svg
          className="switch-diagram"
          viewBox="0 0 1040 580"
          role="img"
          aria-label={readLocalizedText(simulation.title, locale)}
        >
          <defs>
            {[
              ["switch-arrow-blue", "var(--brand)"],
              ["switch-arrow-yellow", "#f59e0b"],
              ["switch-arrow-teal", "var(--tertiary)"],
              ["switch-arrow-green", "var(--success)"],
              ["switch-arrow-muted", "color-mix(in srgb, var(--muted) 54%, transparent)"],
            ].map(([id, fill]) => (
              <marker
                key={id}
                id={id}
                viewBox="0 0 10 10"
                refX="8.5"
                refY="5"
                markerWidth="8"
                markerHeight="8"
                orient="auto"
              >
                <path d="M 0 0 L 10 5 L 0 10 z" fill={fill} />
              </marker>
            ))}
            <filter id="switch-soft-shadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="10" stdDeviation="10" floodColor="#172033" floodOpacity="0.13" />
            </filter>
          </defs>

          <rect className="switch-bg" x="28" y="24" width="984" height="512" rx="28" />
          <text className="tcp-title switch-title" x="520" y="70">
            {readLocalizedText(simulation.title, locale)}
          </text>
          <text className="tcp-subtitle switch-subtitle" x="520" y="99">
            Learn source MAC / Lookup destination MAC / Flood / Forward
          </text>

          <g className="switch-host host-a">
            <rect x="70" y="246" width="154" height="88" rx="20" />
            <text x="147" y="281">{locale === "zh" ? "主机 A" : "Host A"}</text>
            <text x="147" y="306">MAC AA:AA</text>
            <text x="147" y="326">VLAN 10</text>
          </g>

          <g className="switch-host host-b">
            <rect x="850" y="318" width="154" height="88" rx="20" />
            <text x="927" y="353">{locale === "zh" ? "主机 B" : "Host B"}</text>
            <text x="927" y="378">MAC BB:BB</text>
            <text x="927" y="398">VLAN 10</text>
          </g>

          <g className="switch-host host-c">
            <rect x="850" y="152" width="154" height="70" rx="18" />
            <text x="927" y="184">{locale === "zh" ? "同 VLAN 其他端口" : "Other VLAN port"}</text>
            <text x="927" y="204">Gi0/2</text>
          </g>

          <g className="switch-host host-d">
            <rect x="850" y="424" width="154" height="70" rx="18" />
            <text x="927" y="456">{locale === "zh" ? "同 VLAN 其他端口" : "Other VLAN port"}</text>
            <text x="927" y="476">Gi0/4</text>
          </g>

          <g className="switch-box">
            <rect x="356" y="194" width="230" height="210" rx="24" />
            <text x="471" y="230">{locale === "zh" ? "二层交换机" : "Layer-2 switch"}</text>
            {([
              { label: "Gi0/1", x: 356, y: 286, anchor: "end" },
              { label: "Gi0/2", x: 586, y: 204, anchor: "start" },
              { label: "Gi0/3", x: 586, y: 352, anchor: "start" },
              { label: "Gi0/4", x: 586, y: 438, anchor: "start" },
            ] as const).map((port) => (
              <g key={port.label} className={`switch-port ${completedSteps >= 1 ? "active" : ""}`}>
                <circle cx={port.x} cy={port.y} r="10" />
                <text
                  x={port.anchor === "end" ? port.x - 18 : port.x + 18}
                  y={port.y + 5}
                  textAnchor={port.anchor}
                >
                  {port.label}
                </text>
              </g>
            ))}
            <rect className="switch-vlan-chip" x="404" y="362" width="134" height="30" rx="15" />
            <text className="switch-vlan-label" x="471" y="382">VLAN 10</text>
          </g>

          <g className="mac-table-panel">
            <rect x="330" y="424" width="300" height="86" rx="18" />
            <text className="mac-table-title" x="356" y="450">
              {locale === "zh" ? "MAC 地址表" : "MAC Address Table"}
            </text>
            <text className="mac-table-head" x="356" y="474">MAC</text>
            <text className="mac-table-head" x="460" y="474">VLAN</text>
            <text className="mac-table-head" x="548" y="474">Port</text>
            {tableRows.map((row, index) => (
              <g
                key={row.mac}
                className={`mac-table-row ${completedSteps >= row.step ? "visible" : ""}`}
              >
                <text x="356" y={494 + index * 18}>{row.mac}</text>
                <text x="468" y={494 + index * 18}>{row.vlan}</text>
                <text x="548" y={494 + index * 18}>{row.port}</text>
              </g>
            ))}
          </g>

          <g className={`switch-flow first-frame ${completedSteps >= 1 ? "visible" : ""}`}>
            <path d="M 224 290 L 346 286" markerEnd="url(#switch-arrow-blue)" />
            <rect x="232" y="246" width="106" height="32" rx="16" />
            <text x="285" y="267">src AA:AA</text>
          </g>

          <g className={`switch-flow learn-line ${completedSteps >= 1 ? "visible" : ""}`}>
            <path d="M 386 330 C 384 395 384 416 420 424" markerEnd="url(#switch-arrow-blue)" />
            <rect x="260" y="350" width="180" height="34" rx="17" />
            <text x="350" y="372">
              {locale === "zh" ? "学习 AA:AA -> Gi0/1" : "Learn AA:AA -> Gi0/1"}
            </text>
          </g>

          <g className={`switch-flow flood ${completedSteps >= 2 ? "visible" : ""}`}>
            {floodPorts.map((port) => (
              <path
                key={port.label}
                d={`M ${port.x1} ${port.y1} C 690 ${port.y1}, 750 ${port.y2}, ${port.x2 - 76} ${port.y2}`}
                markerEnd="url(#switch-arrow-yellow)"
              />
            ))}
            <rect x="594" y="246" width="196" height="44" rx="22" />
            <text x="692" y="272">
              {locale === "zh" ? "dst BB:BB 缺失，VLAN 内泛洪" : "dst BB:BB miss, flood in VLAN"}
            </text>
          </g>

          <g className={`switch-flow reply ${completedSteps >= 3 ? "visible" : ""}`}>
            <path d="M 850 362 C 760 360 700 402 628 436" markerEnd="url(#switch-arrow-teal)" />
            <rect x="650" y="384" width="168" height="34" rx="17" />
            <text x="734" y="406">
              {locale === "zh" ? "学习 BB:BB -> Gi0/3" : "Learn BB:BB -> Gi0/3"}
            </text>
          </g>

          <g className={`switch-flow direct ${completedSteps >= 4 ? "visible" : ""}`}>
            <path d="M 224 304 C 318 304 322 258 404 258" markerEnd="url(#switch-arrow-green)" />
            <path d="M 538 258 C 660 258 744 340 850 362" markerEnd="url(#switch-arrow-green)" />
            <rect x="388" y="250" width="170" height="38" rx="19" />
            <text x="473" y="274">
              {locale === "zh" ? "命中 BB:BB -> Gi0/3" : "Hit BB:BB -> Gi0/3"}
            </text>
          </g>

          <g className={`switch-flow filter ${completedSteps >= 5 ? "visible" : ""}`}>
            <path d="M 420 318 C 372 334 372 384 420 396" markerEnd="url(#switch-arrow-muted)" />
            <rect x="90" y="378" width="212" height="50" rx="20" />
            <text x="196" y="400">
              {locale === "zh" ? "同入端口过滤" : "Filter same ingress port"}
            </text>
            <text x="196" y="420">
              {locale === "zh" ? "动态表项按年龄刷新/老化" : "Dynamic entries refresh or age out"}
            </text>
          </g>
        </svg>
        <div className="tcp-handshake-caption switch-caption">
          <strong>{readLocalizedText(activeStep.title, locale)}</strong>
          <span>{completedSteps}/{simulation.steps.length}</span>
        </div>
      </div>
    </div>
  );
}

function EthernetFrameStage({
  simulation,
  locale,
  completedSteps,
  activeStepIndex,
}: {
  simulation: VisualSimulation;
  locale: Locale;
  completedSteps: number;
  activeStepIndex: number;
}) {
  const activeStep = simulation.steps[activeStepIndex];
  const fields = [
    {
      id: "preamble",
      label: "Preamble",
      bytes: "7B",
      x: 54,
      width: 112,
      group: "sync",
      step: 1,
      detailZh: "物理同步",
      detailEn: "Physical sync",
    },
    {
      id: "sfd",
      label: "SFD",
      bytes: "1B",
      x: 166,
      width: 64,
      group: "sync",
      step: 1,
      detailZh: "帧起始",
      detailEn: "Frame start",
    },
    {
      id: "dst",
      label: "Destination MAC",
      bytes: "6B",
      x: 230,
      width: 148,
      group: "header",
      step: 2,
      detailZh: "下一跳接收方",
      detailEn: "Next-hop receiver",
    },
    {
      id: "src",
      label: "Source MAC",
      bytes: "6B",
      x: 378,
      width: 132,
      group: "header",
      step: 2,
      detailZh: "本帧发送方",
      detailEn: "Frame sender",
    },
    {
      id: "vlan",
      label: "802.1Q Tag",
      bytes: "4B",
      x: 510,
      width: 112,
      group: "vlan",
      step: 3,
      detailZh: "可选 VLAN ID",
      detailEn: "Optional VLAN ID",
    },
    {
      id: "type",
      label: "Type / Length",
      bytes: "2B",
      x: 622,
      width: 116,
      group: "type",
      step: 4,
      detailZh: "0x0800 / 0x0806",
      detailEn: "0x0800 / 0x0806",
    },
    {
      id: "payload",
      label: "Payload + Pad",
      bytes: "46-1500B",
      x: 738,
      width: 270,
      group: "payload",
      step: 4,
      detailZh: "IP / ARP / IPv6",
      detailEn: "IP / ARP / IPv6",
    },
    {
      id: "fcs",
      label: "FCS",
      bytes: "4B",
      x: 1008,
      width: 92,
      group: "fcs",
      step: 5,
      detailZh: "CRC 校验",
      detailEn: "CRC check",
    },
  ];
  const groupBands = [
    {
      id: "sync",
      labelZh: "同步",
      labelEn: "Sync",
      x: 54,
      width: 176,
      step: 1,
    },
    {
      id: "header",
      labelZh: "帧头",
      labelEn: "Header",
      x: 230,
      width: 392,
      step: 2,
    },
    {
      id: "data",
      labelZh: "数据",
      labelEn: "Data",
      x: 622,
      width: 386,
      step: 4,
    },
    {
      id: "trailer",
      labelZh: "尾部",
      labelEn: "Trailer",
      x: 1008,
      width: 92,
      step: 5,
    },
  ];
  const callouts = [
    {
      step: 1,
      x: 142,
      y: 156,
      width: 236,
      titleZh: "Preamble + SFD",
      titleEn: "Preamble + SFD",
      bodyZh: "接收端识别帧起始",
      bodyEn: "Receiver finds frame start",
      anchorX: 146,
    },
    {
      step: 2,
      x: 388,
      y: 156,
      width: 238,
      titleZh: "MAC 地址",
      titleEn: "MAC addresses",
      bodyZh: "交换机按目的 MAC 转发",
      bodyEn: "Switch forwards by destination MAC",
      anchorX: 378,
    },
    {
      step: 3,
      x: 566,
      y: 390,
      width: 240,
      titleZh: "802.1Q 插入点",
      titleEn: "802.1Q insertion",
      bodyZh: "Tag 位于源 MAC 与 Type 之间",
      bodyEn: "Tag sits between source MAC and Type",
      anchorX: 566,
    },
    {
      step: 4,
      x: 824,
      y: 156,
      width: 260,
      titleZh: "Type/Length + Payload",
      titleEn: "Type/Length + Payload",
      bodyZh: "决定交给 IPv4、IPv6 或 ARP",
      bodyEn: "Dispatches to IPv4, IPv6, or ARP",
      anchorX: 808,
    },
    {
      step: 5,
      x: 1000,
      y: 390,
      width: 226,
      titleZh: "FCS 校验",
      titleEn: "FCS check",
      bodyZh: "校验失败计入 CRC/FCS 错误",
      bodyEn: "Failures appear as CRC/FCS errors",
      anchorX: 1054,
    },
  ];
  const visibleCallouts = callouts.filter((item) => item.step <= completedSteps);

  return (
    <div className="visual-stage ethernet-frame-stage">
      <div className="tcp-handshake-card ethernet-frame-card">
        <svg
          className="ethernet-frame-diagram"
          viewBox="0 0 1160 560"
          role="img"
          aria-label={readLocalizedText(simulation.title, locale)}
        >
          <defs>
            <marker
              id="ethernet-arrow-brand"
              viewBox="0 0 10 10"
              refX="8.5"
              refY="5"
              markerWidth="8"
              markerHeight="8"
              orient="auto"
            >
              <path d="M 0 0 L 10 5 L 0 10 z" />
            </marker>
            <filter id="ethernet-soft-shadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="10" stdDeviation="10" floodColor="#172033" floodOpacity="0.13" />
            </filter>
          </defs>

          <rect className="ethernet-frame-bg" x="28" y="24" width="1104" height="500" rx="28" />
          <text className="tcp-title ethernet-frame-title" x="580" y="70">
            {readLocalizedText(simulation.title, locale)}
          </text>
          <text className="tcp-subtitle ethernet-frame-subtitle" x="580" y="99">
            Preamble / MAC / 802.1Q / Type / Payload / FCS
          </text>

          <g className="ethernet-frame-groups">
            {groupBands.map((band) => {
              const active = completedSteps >= band.step;

              return (
                <g
                  key={band.id}
                  className={`ethernet-group-band ${band.id} ${active ? "active" : ""}`}
                >
                  <rect x={band.x} y="270" width={band.width} height="58" rx="14" />
                  <text x={band.x + band.width / 2} y="305">
                    {locale === "zh" ? band.labelZh : band.labelEn}
                  </text>
                </g>
              );
            })}
          </g>

          <g className="ethernet-frame-fields">
            {fields.map((field) => {
              const active = completedSteps >= field.step;
              const current = completedSteps === field.step;

              return (
                <g
                  key={field.id}
                  className={`ethernet-field ${field.group} ${active ? "active" : ""} ${
                    current ? "current" : ""
                  }`}
                >
                  <rect x={field.x} y="190" width={field.width} height="86" rx="14" />
                  <text className="ethernet-field-label" x={field.x + field.width / 2} y="220">
                    {field.label}
                  </text>
                  <text className="ethernet-field-bytes" x={field.x + field.width / 2} y="248">
                    {field.bytes}
                  </text>
                  <text className="ethernet-field-detail" x={field.x + field.width / 2} y="265">
                    {locale === "zh" ? field.detailZh : field.detailEn}
                  </text>
                </g>
              );
            })}
          </g>

          {completedSteps >= 3 && (
            <g className="ethernet-vlan-insert active">
              <path d="M 510 178 L 510 146 L 622 146 L 622 178" />
              <rect x="501" y="122" width="130" height="30" rx="15" />
              <text x="566" y="142">TPID + TCI</text>
            </g>
          )}

          {completedSteps >= 4 && (
            <g className="ethernet-dispatch active">
              <path d="M 680 180 C 690 142 735 126 790 126" />
              <path d="M 872 180 C 892 142 932 126 990 126" />
              <rect x="780" y="108" width="226" height="36" rx="18" />
              <text x="893" y="131">
                {locale === "zh" ? "IPv4 / IPv6 / ARP 分发" : "IPv4 / IPv6 / ARP dispatch"}
              </text>
            </g>
          )}

          {completedSteps >= 5 && (
            <g className="ethernet-fcs-loop active">
              <path d="M 1054 282 C 1054 454 356 454 140 340" markerEnd="url(#ethernet-arrow-brand)" />
              <rect x="384" y="430" width="392" height="42" rx="21" />
              <text x="580" y="456">
                {locale === "zh" ? "接收端校验整帧，成功后交付上层" : "Receiver checks the frame, then delivers upward"}
              </text>
            </g>
          )}

          {visibleCallouts.map((item) => (
            <g key={item.titleEn} className={`ethernet-callout step-${item.step}`}>
              <path d={`M ${item.anchorX} 190 L ${item.x} ${item.y + 34}`} />
              <rect x={item.x - item.width / 2} y={item.y} width={item.width} height="68" rx="16" />
              <text className="ethernet-callout-title" x={item.x} y={item.y + 27}>
                {locale === "zh" ? item.titleZh : item.titleEn}
              </text>
              <text className="ethernet-callout-body" x={item.x} y={item.y + 49}>
                {locale === "zh" ? item.bodyZh : item.bodyEn}
              </text>
            </g>
          ))}

          <g className="ethernet-size-note">
            <rect x="66" y="352" width="324" height="86" rx="20" />
            <text x="92" y="382">{locale === "zh" ? "典型数据载荷" : "Typical data payload"}</text>
            <text x="92" y="410">46 - 1500 bytes</text>
            <text x="92" y="430">{locale === "zh" ? "短载荷填充，大载荷受 MTU 约束" : "Short payloads pad; large payloads meet MTU"}</text>
          </g>

          <g className="ethernet-reference-note">
            <rect x="744" y="352" width="326" height="86" rx="20" />
            <text x="770" y="382">{locale === "zh" ? "抓包观察点" : "Packet-inspection points"}</text>
            <text x="770" y="410">{locale === "zh" ? "MAC / VLAN / EtherType / Length" : "MAC / VLAN / EtherType / Length"}</text>
            <text x="770" y="430">{locale === "zh" ? "端口计数器看 CRC/FCS 错误" : "Port counters reveal CRC/FCS errors"}</text>
          </g>
        </svg>
        <div className="tcp-handshake-caption ethernet-frame-caption">
          <strong>{readLocalizedText(activeStep.title, locale)}</strong>
          <span>{completedSteps}/{simulation.steps.length}</span>
        </div>
      </div>
    </div>
  );
}

function TcpHandshakeStage({
  simulation,
  locale,
  completedSteps,
  activeStepIndex,
}: {
  simulation: VisualSimulation;
  locale: Locale;
  completedSteps: number;
  activeStepIndex: number;
}) {
  const activeStep = simulation.steps[activeStepIndex];
  const clientStates = ["CLOSED", "SYN-SENT", "ESTABLISHED"];
  const serverStates = ["LISTEN", "SYN-RCVD", "ESTABLISHED"];
  const clientStateIndex = completedSteps >= 3 ? 2 : completedSteps >= 1 ? 1 : 0;
  const serverStateIndex = completedSteps >= 3 ? 2 : completedSteps >= 1 ? 1 : 0;
  const sequenceRows = [
    {
      fromX: 194,
      fromY: 198,
      toX: 706,
      toY: 272,
      labelX: 450,
      labelY: 217,
      stateX: 176,
      stateY: 235,
      state: "SYN-SENT",
    },
    {
      fromX: 706,
      fromY: 322,
      toX: 194,
      toY: 396,
      labelX: 450,
      labelY: 343,
      stateX: 724,
      stateY: 352,
      state: "SYN-RCVD",
    },
    {
      fromX: 194,
      fromY: 446,
      toX: 706,
      toY: 520,
      labelX: 450,
      labelY: 467,
      stateX: 176,
      stateY: 500,
      state: "ESTABLISHED",
    },
  ];

  return (
    <div className="visual-stage tcp-handshake-stage">
      <div className="tcp-handshake-card">
        <svg
          className="tcp-handshake-diagram"
          viewBox="0 0 900 620"
          role="img"
          aria-label={readLocalizedText(simulation.title, locale)}
        >
          <defs>
            <marker
              id="tcp-arrow-blue"
              viewBox="0 0 10 10"
              refX="8.5"
              refY="5"
              markerWidth="8"
              markerHeight="8"
              orient="auto"
            >
              <path d="M 0 0 L 10 5 L 0 10 z" />
            </marker>
            <marker
              id="tcp-arrow-green"
              viewBox="0 0 10 10"
              refX="8.5"
              refY="5"
              markerWidth="8"
              markerHeight="8"
              orient="auto"
            >
              <path d="M 0 0 L 10 5 L 0 10 z" />
            </marker>
            <marker
              id="tcp-arrow-muted"
              viewBox="0 0 10 10"
              refX="8.5"
              refY="5"
              markerWidth="8"
              markerHeight="8"
              orient="auto"
            >
              <path d="M 0 0 L 10 5 L 0 10 z" />
            </marker>
            <filter id="tcp-soft-shadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="8" stdDeviation="8" floodColor="#172033" floodOpacity="0.14" />
            </filter>
          </defs>

          <rect className="tcp-bg-panel" x="34" y="28" width="832" height="548" rx="30" />
          <text className="tcp-title" x="450" y="72">
            {readLocalizedText(simulation.title, locale)}
          </text>
          <text className="tcp-subtitle" x="450" y="101">
            SYN / SYN-ACK / ACK
          </text>

          <g className="tcp-endpoint client">
            <rect x="74" y="122" width="152" height="72" rx="18" />
            <text x="150" y="152">{locale === "zh" ? "客户端" : "Client"}</text>
            <text x="150" y="176">{locale === "zh" ? "主动打开" : "Active open"}</text>
          </g>
          <g className="tcp-endpoint server">
            <rect x="674" y="122" width="152" height="72" rx="18" />
            <text x="750" y="152">{locale === "zh" ? "服务器" : "Server"}</text>
            <text x="750" y="176">{locale === "zh" ? "监听端口" : "Listening"}</text>
          </g>

          <line className="tcp-lifeline" x1="150" y1="206" x2="150" y2="538" />
          <line className="tcp-lifeline" x1="750" y1="206" x2="750" y2="538" />

          {clientStates.map((state, index) => (
            <g
              className={`tcp-state-pill ${index <= clientStateIndex ? "active" : ""}`}
              key={`client-${state}`}
            >
              <rect x="66" y={214 + index * 132} width="168" height="42" rx="21" />
              <text x="150" y={241 + index * 132}>{state}</text>
            </g>
          ))}
          {serverStates.map((state, index) => (
            <g
              className={`tcp-state-pill ${index <= serverStateIndex ? "active" : ""}`}
              key={`server-${state}`}
            >
              <rect x="666" y={214 + index * 132} width="168" height="42" rx="21" />
              <text x="750" y={241 + index * 132}>{state}</text>
            </g>
          ))}

          {simulation.steps.map((stepItem, index) => {
            const row = sequenceRows[index];
            const isReturn = row.fromX > row.toX;
            const revealed = index < completedSteps;
            const marker = revealed
              ? index === 2
                ? "tcp-arrow-green"
                : "tcp-arrow-blue"
              : "tcp-arrow-muted";

            return (
              <g
                className={`tcp-segment ${isReturn ? "return" : ""} ${
                  revealed ? "revealed" : "pending"
                } ${
                  index === completedSteps - 1 ? "active" : ""
                }`}
                key={readLocalizedText(stepItem.label, locale)}
              >
                <line
                  x1={row.fromX}
                  y1={row.fromY}
                  x2={row.toX}
                  y2={row.toY}
                  markerEnd={`url(#${marker})`}
                />
                <rect x={row.labelX - 156} y={row.labelY - 30} width="312" height="56" rx="16" />
                <text className="tcp-segment-title" x={row.labelX} y={row.labelY - 7}>
                  {readLocalizedText(stepItem.title, locale)}
                </text>
                <text className="tcp-segment-label" x={row.labelX} y={row.labelY + 15}>
                  {readLocalizedText(stepItem.label, locale)}
                </text>
              </g>
            );
          })}

          {completedSteps >= simulation.steps.length && (
            <g className="tcp-established-flow">
              <line x1="260" y1="552" x2="640" y2="552" markerEnd="url(#tcp-arrow-green)" />
              <text x="450" y="539">{locale === "zh" ? "应用数据开始双向传输" : "Application data can flow"}</text>
            </g>
          )}
        </svg>
        <div className="tcp-handshake-caption">
          <strong>{readLocalizedText(activeStep.title, locale)}</strong>
          <span>{completedSteps}/{simulation.steps.length}</span>
        </div>
      </div>
    </div>
  );
}

function TcpWaveStage({
  simulation,
  locale,
  completedSteps,
  activeStepIndex,
}: {
  simulation: VisualSimulation;
  locale: Locale;
  completedSteps: number;
  activeStepIndex: number;
}) {
  const activeStep = simulation.steps[activeStepIndex];
  const clientStates = ["ESTABLISHED", "FIN-WAIT-1", "FIN-WAIT-2", "TIME-WAIT", "CLOSED"];
  const serverStates = ["ESTABLISHED", "CLOSE-WAIT", "LAST-ACK", "CLOSED"];
  const clientStateIndex = completedSteps >= 4 ? 3 : completedSteps >= 2 ? 2 : completedSteps >= 1 ? 1 : 0;
  const serverStateIndex = completedSteps >= 4 ? 3 : completedSteps >= 3 ? 2 : completedSteps >= 2 ? 1 : 0;
  const sequenceRows = [
    {
      fromX: 194,
      fromY: 170,
      toX: 706,
      toY: 230,
      labelX: 450,
      labelY: 188,
      markerTone: "blue",
    },
    {
      fromX: 706,
      fromY: 270,
      toX: 194,
      toY: 330,
      labelX: 450,
      labelY: 289,
      markerTone: "blue",
    },
    {
      fromX: 706,
      fromY: 370,
      toX: 194,
      toY: 430,
      labelX: 450,
      labelY: 389,
      markerTone: "orange",
    },
    {
      fromX: 194,
      fromY: 470,
      toX: 706,
      toY: 530,
      labelX: 450,
      labelY: 489,
      markerTone: "green",
    },
  ];

  return (
    <div className="visual-stage tcp-handshake-stage">
      <div className="tcp-handshake-card tcp-wave-card">
        <svg
          className="tcp-handshake-diagram tcp-wave-diagram"
          viewBox="0 0 900 620"
          role="img"
          aria-label={readLocalizedText(simulation.title, locale)}
        >
          <defs>
            <marker
              id="tcp-wave-arrow-blue"
              viewBox="0 0 10 10"
              refX="8.5"
              refY="5"
              markerWidth="8"
              markerHeight="8"
              orient="auto"
            >
              <path d="M 0 0 L 10 5 L 0 10 z" />
            </marker>
            <marker
              id="tcp-wave-arrow-green"
              viewBox="0 0 10 10"
              refX="8.5"
              refY="5"
              markerWidth="8"
              markerHeight="8"
              orient="auto"
            >
              <path d="M 0 0 L 10 5 L 0 10 z" />
            </marker>
            <marker
              id="tcp-wave-arrow-orange"
              viewBox="0 0 10 10"
              refX="8.5"
              refY="5"
              markerWidth="8"
              markerHeight="8"
              orient="auto"
            >
              <path d="M 0 0 L 10 5 L 0 10 z" />
            </marker>
            <marker
              id="tcp-wave-arrow-muted"
              viewBox="0 0 10 10"
              refX="8.5"
              refY="5"
              markerWidth="8"
              markerHeight="8"
              orient="auto"
            >
              <path d="M 0 0 L 10 5 L 0 10 z" />
            </marker>
            <filter id="tcp-wave-soft-shadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="8" stdDeviation="8" floodColor="#172033" floodOpacity="0.14" />
            </filter>
          </defs>

          <rect className="tcp-bg-panel" x="34" y="28" width="832" height="556" rx="30" />
          <text className="tcp-title" x="450" y="72">
            {readLocalizedText(simulation.title, locale)}
          </text>
          <text className="tcp-subtitle" x="450" y="101">
            FIN / ACK / FIN / ACK
          </text>

          <g className="tcp-endpoint client">
            <rect x="74" y="122" width="152" height="72" rx="18" />
            <text x="150" y="152">{locale === "zh" ? "主动关闭方" : "Active closer"}</text>
            <text x="150" y="176">{locale === "zh" ? "先发 FIN" : "Sends first FIN"}</text>
          </g>
          <g className="tcp-endpoint server">
            <rect x="674" y="122" width="152" height="72" rx="18" />
            <text x="750" y="152">{locale === "zh" ? "被动关闭方" : "Passive closer"}</text>
            <text x="750" y="176">{locale === "zh" ? "等待应用关闭" : "Waits for app"}</text>
          </g>

          <line className="tcp-lifeline" x1="150" y1="206" x2="150" y2="558" />
          <line className="tcp-lifeline" x1="750" y1="206" x2="750" y2="558" />

          {clientStates.map((state, index) => (
            <g
              className={`tcp-state-pill tcp-wave-state ${index <= clientStateIndex ? "active" : ""}`}
              key={`wave-client-${state}`}
            >
              <rect x="54" y={210 + index * 75} width="192" height="40" rx="20" />
              <text x="150" y={236 + index * 75}>{state}</text>
            </g>
          ))}
          {serverStates.map((state, index) => (
            <g
              className={`tcp-state-pill tcp-wave-state ${
                index <= serverStateIndex ? "active" : ""
              }`}
              key={`wave-server-${state}`}
            >
              <rect x="654" y={210 + index * 92} width="192" height="40" rx="20" />
              <text x="750" y={236 + index * 92}>{state}</text>
            </g>
          ))}

          <g className="tcp-half-close-band">
            <rect x="280" y="316" width="340" height="44" rx="22" />
            <text x="450" y="344">
              {locale === "zh" ? "半关闭：被动方仍可发送剩余数据" : "Half-close: passive side may still send"}
            </text>
          </g>

          {simulation.steps.map((stepItem, index) => {
            const row = sequenceRows[index];
            const isReturn = row.fromX > row.toX;
            const revealed = index < completedSteps;
            const marker = revealed ? `tcp-wave-arrow-${row.markerTone}` : "tcp-wave-arrow-muted";

            return (
              <g
                className={`tcp-segment tcp-wave-segment ${isReturn ? "return" : ""} ${
                  revealed ? "revealed" : "pending"
                } ${
                  index === completedSteps - 1 ? "active" : ""
                } tone-${row.markerTone}`}
                key={readLocalizedText(stepItem.label, locale)}
              >
                <line
                  x1={row.fromX}
                  y1={row.fromY}
                  x2={row.toX}
                  y2={row.toY}
                  markerEnd={`url(#${marker})`}
                />
                <rect x={row.labelX - 158} y={row.labelY - 30} width="316" height="56" rx="16" />
                <text className="tcp-segment-title" x={row.labelX} y={row.labelY - 7}>
                  {readLocalizedText(stepItem.title, locale)}
                </text>
                <text className="tcp-segment-label" x={row.labelX} y={row.labelY + 15}>
                  {readLocalizedText(stepItem.label, locale)}
                </text>
              </g>
            );
          })}

          {completedSteps >= simulation.steps.length && (
            <g className="tcp-timewait-note compact">
              <rect x="58" y="478" width="184" height="28" rx="14" />
              <text x="150" y="497">{locale === "zh" ? "2MSL 后进入 CLOSED" : "CLOSED after 2MSL"}</text>
            </g>
          )}
        </svg>
        <div className="tcp-handshake-caption">
          <strong>{readLocalizedText(activeStep.title, locale)}</strong>
          <span>{completedSteps}/{simulation.steps.length}</span>
        </div>
      </div>
    </div>
  );
}

function TcpStateMachineStage({
  simulation,
  locale,
  completedSteps,
  activeStepIndex,
}: {
  simulation: VisualSimulation;
  locale: Locale;
  completedSteps: number;
  activeStepIndex: number;
}) {
  const activeStep = simulation.steps[activeStepIndex];
  const nodes = [
    { id: "closed-start", label: "CLOSED", x: 500, y: 126, width: 150, step: 0, tone: "closed" },
    { id: "listen", label: "LISTEN", x: 215, y: 218, width: 150, step: 1, tone: "setup" },
    { id: "syn-sent", label: "SYN-SENT", x: 785, y: 218, width: 164, step: 2, tone: "setup" },
    { id: "syn-rcvd", label: "SYN-RECEIVED", x: 500, y: 278, width: 186, step: 2, tone: "setup" },
    { id: "established", label: "ESTABLISHED", x: 500, y: 365, width: 178, step: 3, tone: "data" },
    { id: "fin-wait-1", label: "FIN-WAIT-1", x: 245, y: 465, width: 166, step: 4, tone: "active" },
    { id: "fin-wait-2", label: "FIN-WAIT-2", x: 245, y: 545, width: 166, step: 4, tone: "active" },
    { id: "close-wait", label: "CLOSE-WAIT", x: 755, y: 465, width: 166, step: 4, tone: "passive" },
    { id: "closing", label: "CLOSING", x: 500, y: 545, width: 146, step: 5, tone: "special" },
    { id: "last-ack", label: "LAST-ACK", x: 755, y: 545, width: 154, step: 5, tone: "passive" },
    { id: "time-wait", label: "TIME-WAIT", x: 500, y: 625, width: 166, step: 5, tone: "active" },
    { id: "closed-end", label: "CLOSED", x: 500, y: 682, width: 150, step: 6, tone: "closed" },
  ];
  const edges = [
    { id: "closed-listen", path: "M 437 143 C 348 148 260 166 218 194", label: "passive OPEN", x: 312, y: 160, step: 1, tone: "blue" },
    { id: "closed-syn", path: "M 563 143 C 648 148 724 166 784 194", label: "active OPEN / SYN", x: 688, y: 160, step: 2, tone: "blue" },
    { id: "listen-synrcvd", path: "M 284 224 C 350 234 390 252 414 270", label: "rcv SYN / SYN+ACK", x: 340, y: 233, step: 2, tone: "blue" },
    { id: "syn-sent-synrcvd", path: "M 704 224 C 640 235 590 252 586 270", label: "simultaneous SYN", x: 650, y: 233, step: 2, tone: "muted", dashed: true },
    { id: "synrcvd-estab", path: "M 500 301 L 500 340", label: "rcv ACK", x: 570, y: 326, step: 3, tone: "green" },
    { id: "synsent-estab", path: "M 790 241 C 705 290 620 325 574 355", label: "SYN+ACK / ACK", x: 674, y: 300, step: 3, tone: "green" },
    { id: "estab-finwait", path: "M 423 375 C 350 405 286 438 245 442", label: "close / FIN", x: 336, y: 411, step: 4, tone: "orange" },
    { id: "estab-closewait", path: "M 577 375 C 650 405 712 438 755 442", label: "rcv FIN / ACK", x: 664, y: 411, step: 4, tone: "teal" },
    { id: "finwait1-finwait2", path: "M 245 488 L 245 522", label: "rcv ACK", x: 150, y: 510, step: 4, tone: "orange" },
    { id: "closewait-lastack", path: "M 755 488 L 755 522", label: "close / FIN", x: 852, y: 510, step: 5, tone: "teal" },
    { id: "finwait1-closing", path: "M 316 475 C 380 495 426 525 456 535", label: "simultaneous FIN", x: 382, y: 505, step: 5, tone: "muted", dashed: true },
    { id: "closing-timewait", path: "M 500 568 L 500 602", label: "ACK of FIN", x: 584, y: 590, step: 5, tone: "orange" },
    { id: "finwait2-timewait", path: "M 316 556 C 385 577 428 607 456 616", label: "rcv FIN / ACK", x: 350, y: 590, step: 5, tone: "orange" },
    { id: "lastack-closed", path: "M 716 556 C 650 595 592 635 555 660", label: "rcv ACK", x: 666, y: 626, step: 6, tone: "green" },
    { id: "timewait-closed", path: "M 500 648 L 500 659", label: "2MSL timeout", x: 610, y: 655, step: 6, tone: "green" },
  ];
  return (
    <div className="visual-stage tcp-handshake-stage tcp-state-machine-stage">
      <div className="tcp-handshake-card tcp-state-machine-card">
        <svg
          className="tcp-handshake-diagram tcp-state-machine-diagram"
          viewBox="0 0 1000 730"
          role="img"
          aria-label={readLocalizedText(simulation.title, locale)}
        >
          <defs>
            {[
              ["blue", "var(--brand)"],
              ["teal", "var(--tertiary)"],
              ["green", "var(--success)"],
              ["orange", "#f59e0b"],
              ["muted", "color-mix(in srgb, var(--muted) 55%, transparent)"],
            ].map(([tone, fill]) => (
              <marker
                key={tone}
                id={`tcp-fsm-arrow-${tone}`}
                viewBox="0 0 10 10"
                refX="8.5"
                refY="5"
                markerWidth="8"
                markerHeight="8"
                orient="auto"
              >
                <path d="M 0 0 L 10 5 L 0 10 z" fill={fill} />
              </marker>
            ))}
            <filter id="tcp-fsm-soft-shadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="8" stdDeviation="9" floodColor="#172033" floodOpacity="0.13" />
            </filter>
          </defs>

          <rect className="tcp-bg-panel tcp-fsm-bg-panel" x="28" y="24" width="944" height="686" rx="30" />
          <text className="tcp-title" x="500" y="68">
            {readLocalizedText(simulation.title, locale)}
          </text>
          <text className="tcp-subtitle" x="500" y="96">
            OPEN / SYN / ACK / FIN / CLOSE / TIMEOUT
          </text>

          <g className="tcp-fsm-band setup">
            <rect x="72" y="156" width="856" height="146" rx="26" />
            <text x="112" y="184">{locale === "zh" ? "建立连接" : "Connection setup"}</text>
          </g>
          <g className="tcp-fsm-band transfer">
            <rect x="72" y="322" width="856" height="82" rx="26" />
            <text x="112" y="351">{locale === "zh" ? "数据传输" : "Data transfer"}</text>
          </g>
          <g className="tcp-fsm-band teardown">
            <rect x="72" y="420" width="856" height="282" rx="26" />
            <text x="112" y="448">{locale === "zh" ? "释放连接" : "Connection release"}</text>
          </g>

          {edges.map((edge) => {
            const revealed = completedSteps >= edge.step;
            const markerTone = revealed && edge.tone !== "muted" ? edge.tone : "muted";

            return (
              <g
                key={edge.id}
                className={`tcp-fsm-edge tone-${edge.tone} ${revealed ? "revealed" : "pending"} ${
                  completedSteps === edge.step ? "current" : ""
                } ${edge.dashed ? "dashed" : ""}`}
              >
                <path d={edge.path} markerEnd={`url(#tcp-fsm-arrow-${markerTone})`} />
                <rect x={edge.x - 64} y={edge.y - 17} width="128" height="28" rx="14" />
                <text x={edge.x} y={edge.y + 2}>{edge.label}</text>
              </g>
            );
          })}

          {nodes.map((node) => {
            const active = node.step === 0 || completedSteps >= node.step;
            const current = node.step > 0 && completedSteps === node.step;

            return (
              <g
                key={node.id}
                className={`tcp-fsm-node tone-${node.tone} ${active ? "active" : ""} ${
                  current ? "current" : ""
                }`}
              >
                <rect
                  x={node.x - node.width / 2}
                  y={node.y - 23}
                  width={node.width}
                  height="46"
                  rx="15"
                />
                <text x={node.x} y={node.y + 6}>{node.label}</text>
              </g>
            );
          })}

        </svg>
        <div className="tcp-handshake-caption tcp-state-machine-caption">
          <strong>{readLocalizedText(activeStep.title, locale)}</strong>
          <span>{completedSteps}/{simulation.steps.length}</span>
        </div>
      </div>
    </div>
  );
}

function SimulationActorCard({
  actor,
  locale,
  state,
}: {
  actor: SimulationActor;
  locale: Locale;
  state: { zh: string; en: string };
}) {
  const Icon = getActorIcon(actor.kind);

  return (
    <div className={`simulation-actor ${actor.kind}`}>
      <div className="simulation-actor-icon">
        <Icon size={28} />
      </div>
      <div>
        <span>{readLocalizedText(actor.label, locale)}</span>
        <small>{readLocalizedText(actor.detail, locale)}</small>
      </div>
      <code>{readLocalizedText(state, locale)}</code>
    </div>
  );
}

function getActorIcon(kind: ActorKind) {
  if (kind === "client") {
    return Laptop;
  }

  if (kind === "server") {
    return Server;
  }

  if (kind === "database") {
    return Database;
  }

  if (kind === "cache") {
    return MemoryStick;
  }

  if (kind === "queue" || kind === "broker") {
    return Rabbit;
  }

  if (kind === "kernel" || kind === "cpu") {
    return Cpu;
  }

  if (kind === "container") {
    return Container;
  }

  if (kind === "cluster") {
    return Boxes;
  }

  if (kind === "agent" || kind === "model") {
    return Bot;
  }

  if (kind === "tool") {
    return GitBranch;
  }

  if (kind === "security") {
    return ShieldCheck;
  }

  if (kind === "storage" || kind === "data") {
    return Database;
  }

  return Network;
}

export { App };
