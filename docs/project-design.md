# KnowledgeGraph 项目设计文档

## 项目定位

KnowledgeGraph 是一个纯前端静态站点，重点是可扩展的知识数据结构、清晰的图谱浏览体验和可复用的交互模拟器框架。项目文档保存在 `docs/`，应用源码保存在 `src/`，构建产物由 GitHub Actions 发布到 GitHub Pages。

## 技术选型

| 模块 | 方案 | 说明 |
| --- | --- | --- |
| 构建工具 | Vite | 启动快，静态站点部署简单 |
| UI 框架 | React | 适合组件化知识页面和模拟器 |
| 类型系统 | TypeScript | 约束知识数据模型和模拟器状态 |
| 路由 | React Router | 支持首页、知识详情页、模拟器页 |
| 图谱渲染 | React Flow | 适合节点、连线、缩放、拖拽和布局 |
| 样式 | CSS Modules 或 Tailwind CSS | 首版推荐 Tailwind CSS，效率高 |
| 图标 | lucide-react | 覆盖导航、控制、状态类图标 |
| 部署 | GitHub Actions + GitHub Pages | 静态构建发布 |

## 目录结构

```text
KnowledgeGraph/
├── docs/
│   ├── README.md
│   ├── product-spec.md
│   ├── project-design.md
│   └── roadmap.md
├── public/
│   └── assets/
├── src/
│   ├── app/
│   │   ├── App.tsx
│   │   └── router.tsx
│   ├── components/
│   │   ├── graph/
│   │   ├── layout/
│   │   └── ui/
│   ├── data/
│   │   ├── categories.ts
│   │   ├── knowledge-points.ts
│   │   └── relations.ts
│   ├── features/
│   │   ├── knowledge-graph/
│   │   ├── knowledge-detail/
│   │   └── simulators/
│   │       └── tcp-handshake/
│   ├── types/
│   │   ├── knowledge.ts
│   │   └── simulator.ts
│   ├── styles/
│   │   └── globals.css
│   └── main.tsx
├── .github/
│   └── workflows/
│       └── pages.yml
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## 路由设计

| 路径 | 页面 | 说明 |
| --- | --- | --- |
| `/` | 知识图谱总览 | 默认入口 |
| `/knowledge/:id` | 知识点详情 | 展示概念、关系和学习建议 |
| `/simulator/:type/:id` | 交互模拟器 | 根据类型加载对应模拟器 |
| `/about` | 项目说明 | 展示项目目标和内容范围 |

GitHub Pages 项目站点建议使用 HashRouter，路径兼容性更稳定：

```text
/#/
/#/knowledge/tcp-three-way-handshake
/#/simulator/tcp/tcp-three-way-handshake
```

## 核心数据模型

```ts
export type KnowledgeDifficulty = 'beginner' | 'basic' | 'advanced';

export type KnowledgeCategory =
  | 'network'
  | 'operating-system'
  | 'database'
  | 'data-structure'
  | 'computer-organization';

export interface KnowledgePoint {
  id: string;
  title: string;
  category: KnowledgeCategory;
  summary: string;
  difficulty: KnowledgeDifficulty;
  tags: string[];
  prerequisites: string[];
  related: string[];
  simulator?: {
    type: string;
    entryLabel: string;
  };
}

export interface KnowledgeRelation {
  source: string;
  target: string;
  type: 'prerequisite' | 'related' | 'extends';
  label?: string;
}
```

## 模拟器框架

模拟器采用“状态机 + UI 组件”结构：

```text
SimulatorShell
├── ScenarioHeader
├── SimulationCanvas
├── ActionPanel
├── FeedbackPanel
└── Timeline
```

通用接口：

```ts
export interface SimulatorStep {
  id: string;
  actor: string;
  action: string;
  expectedState: string;
  message: string;
}

export interface SimulatorState {
  currentStepIndex: number;
  completedStepIds: string[];
  clientState?: string;
  serverState?: string;
  feedback?: {
    type: 'success' | 'warning' | 'error';
    message: string;
  };
}
```

TCP 三次握手样板步骤：

| 步骤 | 执行方 | 动作 | 客户端状态 | 服务端状态 |
| --- | --- | --- | --- | --- |
| 1 | Client | 发送 SYN | SYN_SENT | LISTEN |
| 2 | Server | 发送 SYN + ACK | SYN_SENT | SYN_RECEIVED |
| 3 | Client | 发送 ACK | ESTABLISHED | ESTABLISHED |

## 页面组件规划

| 组件 | 位置 | 职责 |
| --- | --- | --- |
| `AppLayout` | `components/layout` | 全局导航、页面宽度、主题背景 |
| `KnowledgeGraphView` | `features/knowledge-graph` | 图谱节点、连线、筛选和选中态 |
| `KnowledgeDetailView` | `features/knowledge-detail` | 知识点内容、关系、模拟器入口 |
| `SimulatorShell` | `features/simulators` | 模拟器统一容器 |
| `TcpHandshakeSimulator` | `features/simulators/tcp-handshake` | TCP 三次握手交互样板 |
| `NodeInspector` | `components/graph` | 选中节点详情面板 |

## 视觉方向

- 整体风格：学习工具感，信息密度适中，强调清晰关系和操作反馈。
- 颜色策略：浅色背景为主，知识分类使用不同强调色。
- 交互反馈：成功、警告、错误使用明确状态色和图标。
- 图谱节点：分类节点更大，知识点节点紧凑，当前选中节点高亮。
- 模拟器：客户端和服务端左右对称，报文动画沿中线移动，状态标签固定展示。

## 工程规范

- 所有知识点通过数据文件注册。
- 每个模拟器独立目录，包含状态逻辑、组件和测试数据。
- 共享 UI 组件放入 `components/ui`。
- 页面级业务逻辑放入 `features`。
- 类型定义集中放入 `types`。
- 文档变更同步更新 `docs/README.md`。

## 部署设计

GitHub Pages 发布流程：

1. 推送到 `main` 分支。
2. GitHub Actions 执行安装、构建。
3. 构建产物输出到 `dist/`。
4. Pages 发布 `dist/` 静态文件。

推荐 `vite.config.ts` 根据仓库名设置 `base`：

```ts
export default defineConfig({
  base: '/KnowledgeGraph/',
});
```

## 验收标准

- 本地 `npm run dev` 可启动项目。
- 本地 `npm run build` 可生成 `dist/`。
- 首页能显示知识图谱框架。
- 点击节点能显示详情信息。
- TCP 三次握手模拟器能完成正确交互流程。
- GitHub Pages 能访问发布后的站点。
