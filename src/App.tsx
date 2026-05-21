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
  Layers,
  MemoryStick,
  Moon,
  Network,
  PlayCircle,
  RefreshCw,
  Search,
  Send,
  Server,
  ShieldCheck,
  Sparkles,
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
    search: "搜索知识点...",
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
    upgrade: "升级 Pro",
    focused: "当前聚焦",
    medium: "中等",
    tcpTitle: "TCP 传输控制协议",
    tcpSummary:
      "传输控制协议是一种面向连接、可靠、基于字节流的传输层通信协议。",
    prerequisites: "前置知识",
    related: "相关知识",
    documentation: "文档",
    ipProtocol: "IP 协议",
    networkLayer: "网络层",
    udp: "UDP",
    connectionless: "无连接协议",
    handshake: "三次握手",
    viewDetail: "查看详情",
    breadcrumbGraph: "知识图谱",
    breadcrumbNetwork: "计算机网络",
    detailTitle: "TCP 三次握手",
    detailSubtitle:
      "TCP 三次握手是建立 TCP 连接的过程。该过程确保通信双方具备发送和接收数据的能力，并同步双方的初始序列号。",
    transportLayer: "传输层",
    reliable: "可靠传输",
    coreConcept: "核心概念",
    conceptBody:
      "在复杂的网络环境中，数据包可能会丢失、乱序或延迟。TCP 作为面向连接的协议，会先验证客户端与服务器之间的全双工通信能力。",
    consistency: "连接一致性",
    consistencyBody:
      "确保双方同步初始序列号，为后续的有序传输和重传机制打下基础。",
    initialization: "资源初始化",
    initializationBody: "分配必要的缓存资源，协商窗口大小等传输参数。",
    handshakeSteps: "握手步骤",
    steps: [
      {
        title: "第一次握手：SYN",
        body: "客户端向服务器发送 SYN 报文段，指定初始序列号 seq=x。",
        quote: "我想建立连接，我的初始序列号是 x。",
      },
      {
        title: "第二次握手：SYN-ACK",
        body: "服务器收到 SYN 报文，回复 SYN=1, ACK=1。确认号 ack=x+1，并指定自己的初始序列号 seq=y。",
        quote: "收到你的请求。我同意建立连接，我的序列号是 y。",
      },
      {
        title: "第三次握手：ACK",
        body: "客户端收到服务器的 SYN-ACK，发送 ACK=1。确认号 ack=y+1，序列号 seq=x+1。",
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
    interactiveBody:
      "进入实验室环境，手动构造 TCP 数据包并观察网络状态机的实时演变。",
    startSimulator: "开始模拟",
    contents: "本章目录",
    contentItems: [
      "核心概念",
      "握手步骤详解",
      "序列号同步机制",
      "状态转移矩阵",
      "常见问题：为什么需要三次",
    ],
    nextStep: "下一章节",
    dataTransfer: "TCP 数据传输",
    visualCaption: "查看网络拓扑图，直观理解连接生命周期。",
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
      "请选择客户端发出的第一个报文以开始建立连接。",
      "服务端已收到 SYN。请返回 SYN-ACK 确认报文。",
      "客户端已收到 SYN-ACK。请发送最终 ACK。",
      "连接建立完成，双方进入 ESTABLISHED 状态。",
    ],
    actions: ["发送 SYN", "发送 SYN-ACK", "发送 ACK"],
    invalid: "当前步骤请选择高亮操作。",
    feedbacks: [
      "SYN 报文已到达服务端，客户端状态更新为 SYN-SENT。",
      "SYN-ACK 已返回客户端，服务端状态更新为 SYN-RCVD。",
      "ACK 已到达服务端，双方状态更新为 ESTABLISHED。",
    ],
    historyItems: [
      "客户端发出 SYN (seq=x)",
      "服务端返回 SYN-ACK (seq=y, ack=x+1)",
      "客户端发出 ACK (ack=y+1)",
    ],
    timeline: ["SYN 发送", "SYN-ACK 确认", "ACK 确认", "ESTABLISHED"],
    complete: "完成",
    proAccess: "专业版",
    unlock: "解锁 50+ 图谱可视化",
    privacy: "隐私政策",
    terms: "服务条款",
    feedbackLink: "反馈建议",
  },
  en: {
    appName: "KnowledgeGraph",
    navGraph: "Knowledge Graph",
    github: "GitHub",
    about: "About",
    search: "Search concepts...",
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
    upgrade: "Upgrade Pro",
    focused: "Focused",
    medium: "Medium",
    tcpTitle: "TCP Transmission Control Protocol",
    tcpSummary:
      "Transmission Control Protocol is a connection-oriented, reliable, byte-stream transport protocol.",
    prerequisites: "Prerequisites",
    related: "Related",
    documentation: "Documentation",
    ipProtocol: "IP Protocol",
    networkLayer: "Network Layer",
    udp: "UDP",
    connectionless: "Connectionless",
    handshake: "Three-Way Handshake",
    viewDetail: "View Detail",
    breadcrumbGraph: "Knowledge Graph",
    breadcrumbNetwork: "Computer Networks",
    detailTitle: "TCP Three-Way Handshake",
    detailSubtitle:
      "The TCP three-way handshake establishes a TCP connection, verifies send and receive capability on both sides, and synchronizes initial sequence numbers.",
    transportLayer: "Transport Layer",
    reliable: "Reliable",
    coreConcept: "Core Concept",
    conceptBody:
      "In real networks, packets can be lost, reordered, or delayed. TCP validates full-duplex communication between client and server before data transfer begins.",
    consistency: "Connection Consistency",
    consistencyBody:
      "Both sides synchronize initial sequence numbers for ordered delivery and retransmission.",
    initialization: "Resource Initialization",
    initializationBody:
      "Required buffers and transport parameters such as window size are prepared.",
    handshakeSteps: "Handshake Steps",
    steps: [
      {
        title: "First Handshake: SYN",
        body: "The client sends a SYN segment to the server with initial sequence number seq=x.",
        quote: "I want to connect. My initial sequence number is x.",
      },
      {
        title: "Second Handshake: SYN-ACK",
        body: "The server replies with SYN=1, ACK=1. It sets ack=x+1 and sends its own initial sequence number seq=y.",
        quote: "Request received. I accept and my sequence number is y.",
      },
      {
        title: "Third Handshake: ACK",
        body: "The client receives SYN-ACK and sends ACK=1 with ack=y+1 and seq=x+1.",
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
    interactiveBody:
      "Enter the lab, construct TCP packets manually, and watch the network state machine evolve.",
    startSimulator: "Start Simulation",
    contents: "Contents",
    contentItems: [
      "Core Concept",
      "Handshake Steps",
      "Sequence Number Sync",
      "State Matrix",
      "Why Three Steps",
    ],
    nextStep: "Next Chapter",
    dataTransfer: "TCP Data Transfer",
    visualCaption: "Inspect the network topology and understand the connection lifecycle.",
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
      "Choose the first packet from the client to begin establishing the connection.",
      "The server has received SYN. Return the SYN-ACK confirmation packet.",
      "The client has received SYN-ACK. Send the final ACK.",
      "Connection established. Both sides are now ESTABLISHED.",
    ],
    actions: ["Send SYN", "Send SYN-ACK", "Send ACK"],
    invalid: "Choose the highlighted action for this step.",
    feedbacks: [
      "SYN arrived at the server. Client state changed to SYN-SENT.",
      "SYN-ACK returned to the client. Server state changed to SYN-RCVD.",
      "ACK arrived at the server. Both sides changed to ESTABLISHED.",
    ],
    historyItems: [
      "Client sent SYN (seq=x)",
      "Server returned SYN-ACK (seq=y, ack=x+1)",
      "Client sent ACK (ack=y+1)",
    ],
    timeline: ["SYN Sent", "SYN-ACK Confirmed", "ACK Confirmed", "ESTABLISHED"],
    complete: "Complete",
    proAccess: "Pro Access",
    unlock: "Unlock 50+ graph visualizations",
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
      <div className="filter-block">
        <h3>{t.difficultyFilter}</h3>
        {t.difficulties.map((difficulty, index) => (
          <label key={difficulty}>
            <input type="checkbox" defaultChecked={index === 1} />
            <span>{difficulty}</span>
          </label>
        ))}
      </div>
      <button className="primary-button sidebar-button">
        <Sparkles size={17} />
        {t.upgrade}
      </button>
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
      <div className="panel-section">
        <h3>{t.prerequisites}</h3>
        <MiniConcept
          icon={<Layers size={18} />}
          title={t.ipProtocol}
          subtitle={t.networkLayer}
        />
      </div>
      <div className="panel-section">
        <h3>{t.related}</h3>
        <MiniConcept
          icon={<GitBranch size={18} />}
          title={t.udp}
          subtitle={t.connectionless}
        />
      </div>
      <div className="panel-section">
        <h3>{t.documentation}</h3>
        <div className="image-card">
          <img
            alt={t.handshake}
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCzGnAQbL21qS4j3dqJQVqWcwmU2knTJtSGORr_3XYVT7Sbk9tOni2rZbOaJaAL-cDRYv3bjVWL1ccH-AUES1uKgEaFAYHyhaQncr4cTPT-Qb2ZUpGYT2l6-be6vnvfSwv5HX4W7e1eFRVXRZf0YnW2kG1uxlHqhEN18gHviDdeLBY4BRBwB0MWehl_MjKYYILWWZdYlyXXFqcmzGhzDBQaVDlL9IEqwNLC41mGAoV40525K9MgOrrMzjXszP77OpPQlEKtonYBpnE"
          />
          <span>{t.handshake}</span>
        </div>
      </div>
      <button className="primary-button wide" onClick={() => setPage("detail")}>
        {t.viewDetail}
        <ArrowRight size={17} />
      </button>
    </aside>
  );
}

function MiniConcept({
  icon,
  title,
  subtitle,
}: {
  icon: ReactNode;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="mini-concept">
      <div>{icon}</div>
      <span>
        <strong>{title}</strong>
        <small>{subtitle}</small>
      </span>
    </div>
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
              <p>{t.conceptBody}</p>
              <div className="concept-grid">
                <div className="concept-card">
                  <Network size={20} />
                  <strong>{t.consistency}</strong>
                  <p>{t.consistencyBody}</p>
                </div>
                <div className="concept-card violet">
                  <ShieldCheck size={20} />
                  <strong>{t.initialization}</strong>
                  <p>{t.initializationBody}</p>
                </div>
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
                      <em>{step.quote}</em>
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
            <button className="next-card">
              <small>{t.nextStep}</small>
              <strong>{t.dataTransfer}</strong>
              <ArrowRight size={18} />
            </button>
            <div className="aside-visual">
              <img
                alt={t.visualCaption}
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC6mn_wGWim2xKzKi6R65M7NTvBckjorskb8SQjm9KxLYES7G5xFNnd-RzSEadl3J8TT5PE14-tP2dd9VBkRvhv3JSmaVFtJ_DWvErMnpqGf_K-12l_-Q7FTrjUXC1zq32sKAcvXOZitTRNN4PvdVWLSsQO0_P28Cah6PTJFZDjM2mO92k_2EqUMRSMJxNHMCFu_sB-AwQN0FZ8yQBJXcrlZT3aoR7dSl_W-FeZzKcbKTo9sFgN2pQFNTL8jbhc7VJLGW0QZ7lsA9I"
              />
              <p>{t.visualCaption}</p>
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
  const packetLabel = step === 1 ? "SYN" : step === 2 ? "SYN-ACK" : step === 3 ? "ACK" : "";
  const packetClass =
    step === 1 ? "packet to-server" : step === 2 ? "packet to-client" : step === 3 ? "packet ack to-server" : "packet";

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
            {packetLabel && (
              <div key={`${packetLabel}-${step}`} className={packetClass}>
                {packetLabel}
              </div>
            )}
            <div className="wire" />
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
