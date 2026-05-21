import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Bookmark,
  CheckCircle2,
  CircleHelp,
  Database,
  GitBranch,
  Laptop,
  MemoryStick,
  Moon,
  Network,
  PlayCircle,
  RefreshCw,
  Search,
  Send,
  Server,
  ShieldCheck,
  Sun,
  Waypoints,
  Zap,
  ZoomIn,
  ZoomOut,
} from "lucide-react";
import { type ReactNode, useEffect, useMemo, useState } from "react";

type Locale = "zh" | "en";
type Theme = "light" | "dark";
type Page = "home" | "detail" | "simulator";
type Step = 0 | 1 | 2 | 3;

const copy = {
  zh: {
    appName: "KnowledgeGraph",
    navGraph: "知识图谱",
    github: "GitHub",
    about: "关于",
    search: "搜索",
    themeLight: "浅色",
    themeDark: "深色",
    lang: "中文",
    learningPath: "学习路径",
    fundamentals: "计算机基础",
    categories: [
      ["计算机网络", "24"],
      ["操作系统", "18"],
      ["数据库", "12"],
      ["网络拓扑", "9"],
      ["算法", "32"],
    ],
    difficultyFilter: "难度筛选",
    difficulties: ["简单", "中等", "困难"],
    upgrade: "升级",
    focused: "当前聚焦",
    medium: "中等",
    tcpTitle: "TCP",
    tcpSummary: "可靠连接 · 三次握手 · 有序传输",
    prerequisites: "前置知识",
    related: "相关知识",
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
    themeLight: "Light",
    themeDark: "Dark",
    lang: "English",
    learningPath: "Learning Path",
    fundamentals: "CS Fundamentals",
    categories: [
      ["Computer Networks", "24"],
      ["Operating Systems", "18"],
      ["Databases", "12"],
      ["Network Topology", "9"],
      ["Algorithms", "32"],
    ],
    difficultyFilter: "Difficulty Filter",
    difficulties: ["Easy", "Medium", "Hard"],
    upgrade: "Upgrade",
    focused: "Focused",
    medium: "Medium",
    tcpTitle: "TCP",
    tcpSummary: "Reliable connection · three-step handshake · ordered delivery",
    prerequisites: "Prerequisites",
    related: "Related",
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

const categoryIcons = [Network, MemoryStick, Database, Waypoints, GitBranch];
const graphNodes = [
  { id: "ip", label: "IP", x: 38, y: 36, size: "small" },
  { id: "http", label: "HTTP", x: 68, y: 43, size: "medium" },
  { id: "dns", label: "DNS", x: 53, y: 72, size: "small" },
  { id: "tcp", label: "TCP", x: 50, y: 51, size: "large" },
] as const;

function App() {
  const [page, setPage] = useState<Page>("home");
  const [theme, setTheme] = useState<Theme>("light");
  const [locale, setLocale] = useState<Locale>("zh");
  const t = copy[locale];

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
        t={t}
      />
      {page === "home" && <HomePage setPage={setPage} t={t} />}
      {page === "detail" && <DetailPage setPage={setPage} t={t} />}
      {page === "simulator" && <SimulatorPage setPage={setPage} t={t} />}
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
  t,
}: {
  page: Page;
  setPage: (page: Page) => void;
  theme: Theme;
  setTheme: (theme: Theme) => void;
  locale: Locale;
  setLocale: (locale: Locale) => void;
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
            <a href="https://github.com/" target="_blank" rel="noreferrer">
              {t.github}
            </a>
            <button>{t.about}</button>
          </nav>
        )}
      </div>
      <div className="top-actions">
        {page !== "simulator" && (
          <label className="search-box">
            <Search size={16} />
            <input placeholder={t.search} />
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

function HomePage({ setPage, t }: { setPage: (page: Page) => void; t: Copy }) {
  return (
    <main className="home-layout page-with-topbar">
      <LearningSidebar t={t} active="network" />
      <section className="graph-canvas" aria-label={t.navGraph}>
        <div className="graph-controls">
          <button aria-label="Zoom in">
            <ZoomIn size={18} />
          </button>
          <button aria-label="Zoom out">
            <ZoomOut size={18} />
          </button>
          <button aria-label="Center graph">
            <Waypoints size={18} />
          </button>
        </div>
        <svg className="graph-lines" viewBox="0 0 100 100" preserveAspectRatio="none">
          <line x1="50" y1="51" x2="38" y2="36" />
          <line x1="50" y1="51" x2="68" y2="43" />
          <line x1="50" y1="51" x2="53" y2="72" />
        </svg>
        {graphNodes.map((node) => (
          <button
            key={node.id}
            className={`graph-node ${node.size} ${node.id === "tcp" ? "active" : ""}`}
            style={{ left: `${node.x}%`, top: `${node.y}%` }}
            onClick={() => node.id === "tcp" && setPage("detail")}
          >
            <span>{node.label}</span>
            {node.id === "tcp" && (
              <>
                <span className="node-badge">
                  <Zap size={16} fill="currentColor" />
                </span>
                <strong>{t.focused}</strong>
              </>
            )}
          </button>
        ))}
      </section>
      <KnowledgePanel setPage={setPage} t={t} />
    </main>
  );
}

function LearningSidebar({
  t,
  active,
}: {
  t: Copy;
  active: "network" | "none";
}) {
  return (
    <aside className="left-sidebar">
      <div className="path-header">
        <span>{t.learningPath}</span>
        <h2>{t.fundamentals}</h2>
      </div>
      <nav className="category-list">
        {t.categories.map(([name, count], index) => {
          const Icon = categoryIcons[index];
          const isActive = active === "network" && index === 0;

          return (
            <button key={name} className={isActive ? "active" : ""}>
              <span>
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

function KnowledgePanel({
  setPage,
  t,
}: {
  setPage: (page: Page) => void;
  t: Copy;
}) {
  return (
    <aside className="right-panel">
      <div className="panel-topline">
        <span className="pill">{t.medium}</span>
        <button className="icon-button" aria-label="Bookmark">
          <Bookmark size={18} />
        </button>
      </div>
      <h2>{t.tcpTitle}</h2>
      <p>{t.tcpSummary}</p>
      <div className="panel-meta">
        <span>
          <Network size={16} />
          {t.transportLayer}
        </span>
        <span>
          <ShieldCheck size={16} />
          {t.reliable}
        </span>
      </div>
      <div className="panel-links">
        <h3>{t.related}</h3>
        <button>{t.ipProtocol}</button>
        <button>{t.udp}</button>
        <button>{t.handshake}</button>
      </div>
      <button className="primary-button wide" onClick={() => setPage("detail")}>
        {t.viewDetail}
        <ArrowRight size={17} />
      </button>
    </aside>
  );
}

function DetailPage({ setPage, t }: { setPage: (page: Page) => void; t: Copy }) {
  return (
    <main className="detail-shell page-with-topbar">
      <LearningSidebar t={t} active="network" />
      <div className="detail-content">
        <nav className="breadcrumbs">
          <button onClick={() => setPage("home")}>{t.breadcrumbGraph}</button>
          <ArrowRight size={14} />
          <span>{t.breadcrumbNetwork}</span>
          <ArrowRight size={14} />
          <strong>{t.detailTitle}</strong>
        </nav>
        <div className="detail-grid">
          <article className="article-flow">
            <header className="hero-panel">
              <div className="tag-row">
                <span className="pill accent-teal">{t.medium}</span>
                <span className="pill">{t.transportLayer}</span>
                <span className="pill">{t.reliable}</span>
              </div>
              <h1>{t.detailTitle}</h1>
              <p>{t.detailSubtitle}</p>
            </header>
            <InfoSection title={t.coreConcept}>
              <div className="summary-strip">
                <Network size={20} />
                <p>{t.conceptBody}</p>
              </div>
              <div className="mini-facts">
                <span>{t.consistencyBody}</span>
                <span>{t.initializationBody}</span>
              </div>
            </InfoSection>
            <InfoSection title={t.handshakeSteps}>
              <div className="step-stack">
                {t.steps.map((step, index) => (
                  <div className="detail-step" key={step.title}>
                    <span>{index + 1}</span>
                    <div>
                      <h3>{step.title}</h3>
                      <p>
                        <ProtocolText text={step.body} />
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </InfoSection>
            <InfoSection title={t.stateTable}>
              <div className="table-wrap">
                <table>
                  <thead>
                    <tr>
                      {t.tableHeads.map((head) => (
                        <th key={head}>{head}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {t.tableRows.map((row) => (
                      <tr key={row.join("-")}>
                        {row.map((cell, index) => (
                          <td key={cell} className={index === 0 ? "role-cell" : ""}>
                            {index === 3 ? <code>{cell}</code> : cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </InfoSection>
          </article>
          <aside className="detail-aside">
            <div className="cta-panel">
              <PlayCircle size={34} />
              <h2>{t.interactive}</h2>
              <p>{t.interactiveBody}</p>
              <button onClick={() => setPage("simulator")}>
                {t.startSimulator}
                <ArrowRight size={17} />
              </button>
            </div>
            <div className="contents-panel">
              <h3>{t.contents}</h3>
              {t.contentItems.map((item, index) => (
                <a key={item} className={index === 0 ? "active" : ""} href="#top">
                  {item}
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

function ProtocolText({ text }: { text: string }) {
  const tokens = ["SYN=1, ACK=1", "SYN-ACK", "SYN", "ACK=1", "ACK", "seq=x+1", "seq=x", "seq=y", "ack=x+1", "ack=y+1"];
  const parts: ReactNode[] = [text];

  tokens.forEach((token) => {
    for (let index = 0; index < parts.length; index += 1) {
      const part = parts[index];
      if (typeof part !== "string" || !part.includes(token)) {
        continue;
      }

      const split = part.split(token);
      parts.splice(
        index,
        1,
        ...split.flatMap((chunk, chunkIndex) =>
          chunkIndex === split.length - 1
            ? [chunk]
            : [chunk, <code key={`${token}-${index}-${chunkIndex}`}>{token}</code>],
        ),
      );
      index += split.length;
    }
  });

  return <>{parts}</>;
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
