# KnowledgeGraph - UI/UX 规格

> 版本：0.1  
> 日期：2026-05-21  
> 关联文档：[产品文档](./product-spec.md)、[项目设计文档](./project-design.md)

## 0. 快速摘要

- 产品一句话：KnowledgeGraph 是面向计算机基础知识学习者的可视化学习网站，用知识图谱和交互模拟器帮助用户理解抽象概念。
- MVP 核心任务：用户从知识图谱找到知识点，阅读详情，并完成一次交互模拟。
- MVP 页面：首页知识图谱 / 知识点详情 / 交互模拟器。
- 设备优先级：电脑网页为主，手机网页保持完整浏览和基础操作能力。
- 技术栈：Vite + React + TypeScript + Tailwind CSS。
- 风格关键词：清爽、专业、克制、可信、学习工具感。
- 视觉基调：浅色专业工具风格，蓝色作为主要强调色。
- 暗黑模式：放入后续版本。

## 1. 范围与原则

### 1.1 本期范围

- 首页知识图谱总览。
- 知识点详情页。
- 交互模拟器页面。
- TCP 三次握手模拟器样板。
- 通用组件规范、布局规范、状态规范。

### 1.2 后续范围

- 账号体系、收藏、学习进度云同步。
- AI 答疑、AI 出题、AI 学习路径推荐。
- 大规模知识内容录入工具。
- 深色主题。

### 1.3 设计原则

1. 每个页面只有一个主操作，用户一眼知道下一步。
2. 图谱负责“找知识”，详情负责“懂概念”，模拟器负责“练过程”。
3. 知识关系优先呈现，装饰元素保持克制。
4. 所有状态变化都有明确反馈。
5. 同类组件使用同一套尺寸、圆角、颜色和交互反馈。

### 1.4 一致性规则

- Token（设计变量：全站统一的颜色、字号、间距等）作为颜色、字号、间距、圆角、阴影的来源。
- 组件作为页面搭建单位，页面通过组件组合实现。
- 新增组件先更新本文第 5 节，再进入页面实现。
- 新增页面先复用第 6 节页面模板，再扩展页面细节。

## 2. 页面结构与导航

### 2.1 导航模型

采用“左侧知识分类 + 中央内容区 + 右侧上下文面板”的混合导航模型。

原因：

- 知识点数量未来会持续增长，左侧分类可以承载长期扩展。
- 图谱需要足够空间展示节点和关系，中央区域保持最大面积。
- 右侧面板承载当前节点摘要和下一步动作，减少页面跳转成本。

### 2.2 Sitemap

| 页面 | 目的 | 入口 | 路由 | 备注 |
| --- | --- | --- | --- | --- |
| 首页知识图谱 | 浏览知识分类、搜索知识点、查看关系 | 默认打开 | `/#/` | MVP 首页 |
| 知识点详情 | 阅读概念、步骤、前置知识和关联知识 | 图谱节点、搜索结果、关联推荐 | `/#/knowledge/:id` | 有模拟器时显示主操作 |
| 交互模拟器 | 通过操作理解流程和状态变化 | 知识点详情、图谱右侧面板 | `/#/simulator/:type/:id` | 首个样板为 TCP 三次握手 |
| 关于项目 | 展示项目目标、内容范围和贡献方式 | 顶部链接或页脚 | `/#/about` | 低优先级页面 |

### 2.3 全局布局骨架

- 顶部栏：产品名、全站搜索、主题入口占位、GitHub 链接。
- 左侧栏：知识分类、分类计数、标签筛选。
- 中央区：当前页面主体内容。
- 右侧栏：当前节点摘要、关联知识、主操作。
- 面包屑：详情页和模拟器页展示。

### 2.4 布局规则

- 页面宽度：全宽应用布局，最大内容宽度按页面类型控制。
- 首页三栏：左侧 `260px`，中间 `minmax(0, 1fr)`，右侧 `320px`。
- 详情页两栏：正文 `minmax(0, 760px)`，右侧目录 `280px`。
- 模拟器两栏：画布 `minmax(0, 1fr)`，操作面板 `360px`，底部时间线横跨整页。
- 页面内边距：桌面 `24px`，平板 `20px`，手机 `16px`。
- 区块间距：页面大分区 `32px`，面板内部 `16px`，紧凑元素 `8px`。
- 信息密度：工具型中等密度，标题短、说明清楚、操作紧凑。
- 对齐原则：左对齐为主，状态标签和数值字段使用固定宽度。

## 3. 核心流程与关键状态

### 3.1 核心流程：从图谱到模拟

1. 用户进入首页，看到知识分类和知识图谱。
2. 用户搜索或点击“计算机网络”分类。
3. 用户点击“TCP 三次握手”节点。
4. 右侧面板展示摘要、难度、前置知识和“查看详情”按钮。
5. 用户进入详情页，阅读概念说明和步骤。
6. 用户点击“开始模拟”，进入模拟器页面。
7. 用户依次选择报文动作，系统展示状态变化和反馈。
8. 用户完成模拟后，页面展示完成状态和关联学习入口。

### 3.2 全局状态

- 加载中：图谱和详情使用骨架屏；模拟器使用画布占位和按钮占位。
- 空状态：展示“这里还没有知识点”，主操作为“查看已有分类”。
- 出错：页内提示条展示问题原因，保留用户当前筛选和输入。
- 成功：使用页内成功提示或轻量 toast，模拟器成功状态显示在时间线末尾。

## 4. 设计系统

### 4.1 风格方向

- 风格描述：清爽专业的学习工具，像可靠的知识工作台。界面重点放在关系、状态和下一步操作。
- 关键词：清爽、可信、克制、结构清晰、反馈明确。
- 风格边界：低装饰、低阴影、低渐变，减少大面积插画和营销式布局。
- 组件气质：圆角中等偏小，线框清晰，面板分层靠边框和浅阴影。

### 4.2 颜色 tokens（设计变量）

| Token | Light | 用在哪里 | 使用边界 |
| --- | --- | --- | --- |
| `--color-brand` | `#2563EB` | 主按钮、强调链接、当前节点 | 大段正文使用 `--color-text` |
| `--color-brand-soft` | `#DBEAFE` | 选中背景、轻量提示 | 强提示使用语义色 |
| `--color-bg` | `#F8FAFC` | 页面背景 | 面板使用 `--color-surface` |
| `--color-surface` | `#FFFFFF` | 卡片、面板、弹窗 | 页面底色使用 `--color-bg` |
| `--color-surface-muted` | `#F1F5F9` | 代码块、浅色区域、次级面板 | 主内容卡片使用 `--color-surface` |
| `--color-text` | `#0F172A` | 标题、正文 | 辅助文字使用 `--color-muted` |
| `--color-muted` | `#475569` | 次要说明、元信息 | 正文使用 `--color-text` |
| `--color-border` | `#E2E8F0` | 分割线、输入框、卡片边框 | 强调边框使用品牌色 |
| `--color-success` | `#16A34A` | 正确操作、完成状态 | 普通主操作使用品牌色 |
| `--color-warn` | `#D97706` | 提醒、待处理状态 | 错误状态使用危险色 |
| `--color-danger` | `#DC2626` | 错误操作、错误反馈 | 普通提示使用正文色 |
| `--color-node-network` | `#2563EB` | 网络分类节点 | 分类专属色 |
| `--color-node-os` | `#7C3AED` | 操作系统分类节点 | 分类专属色 |
| `--color-node-db` | `#0891B2` | 数据库分类节点 | 分类专属色 |
| `--color-node-dsa` | `#EA580C` | 数据结构分类节点 | 分类专属色 |
| `--color-node-co` | `#059669` | 组成原理分类节点 | 分类专属色 |

交互状态：

- Hover：背景加深一档或增加 `--color-brand-soft`。
- Active：边框使用 `--color-brand`，背景使用 `--color-brand-soft`。
- Focus：显示 `2px` 品牌色外环。
- Disabled：透明度 `50%`，光标和文本表现为不可操作状态。

### 4.3 字体与排版 tokens

- 字体：标题和正文使用 `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`；中文跟随系统字体。
- 字重策略：页面标题 `700`，区块标题 `600`，正文 `400`，按钮 `600`。

| Token | 字号 | 行高 | 字重 | 用途 |
| --- | ---: | ---: | ---: | --- |
| `--text-h1` | `30px` | `38px` | `700` | 页面主标题 |
| `--text-h2` | `22px` | `30px` | `700` | 大区块标题 |
| `--text-h3` | `18px` | `26px` | `600` | 面板标题 |
| `--text-body` | `15px` | `24px` | `400` | 正文 |
| `--text-small` | `13px` | `20px` | `400` | 辅助说明 |
| `--text-code` | `13px` | `20px` | `500` | 协议字段、状态名、代码 |

### 4.4 间距和布局 tokens

| Token | px | 用途 |
| --- | ---: | --- |
| `--space-1` | `4` | 图标与文字间距 |
| `--space-2` | `8` | 紧凑控件间距 |
| `--space-3` | `12` | 表单行内间距 |
| `--space-4` | `16` | 面板内边距 |
| `--space-5` | `20` | 平板页面内边距 |
| `--space-6` | `24` | 桌面页面内边距 |
| `--space-8` | `32` | 页面区块间距 |
| `--space-10` | `40` | 大型说明区间距 |

响应式断点：

- 手机：`< 768px`
- 平板：`768px - 1023px`
- 桌面：`>= 1024px`
- 宽屏：`>= 1440px`

### 4.5 圆角、阴影、边框 tokens

| Token | 值 | 用途 |
| --- | --- | --- |
| `--radius-sm` | `6px` | 小按钮、标签 |
| `--radius-md` | `8px` | 卡片、输入框、面板 |
| `--radius-lg` | `12px` | 抽屉、弹窗、大面板 |

| Token | 值 | 用途 |
| --- | --- | --- |
| `--shadow-sm` | `0 1px 2px rgb(15 23 42 / 0.06)` | 普通面板 |
| `--shadow-md` | `0 12px 30px rgb(15 23 42 / 0.12)` | 弹窗、移动端抽屉 |

边框规则：

- 普通边框：`1px solid var(--color-border)`。
- 选中边框：`1px solid var(--color-brand)`。
- 模拟器连线：默认 `2px`，活跃报文 `3px`。

### 4.6 动效 tokens

| Token | 值 | 用途 |
| --- | --- | --- |
| `--motion-fast` | `120ms` | 按钮 hover、标签切换 |
| `--motion-base` | `180ms` | 面板状态、节点选中 |
| `--motion-slow` | `260ms` | 抽屉、模拟报文移动 |
| `--ease-standard` | `cubic-bezier(0.2, 0, 0, 1)` | 默认缓动 |

动效规则：

- 报文动画表达方向和时序。
- 节点选中使用颜色和边框变化。
- 页面切换保持轻量，优先保障信息稳定。

### 4.7 图标规范

- 图标库：`lucide-react`。
- 常用尺寸：导航 `20px`，按钮 `16px`，空状态 `32px`。
- 线宽：`2px`。
- 图标颜色默认继承文字色。

### 4.8 Tokens 导出

```css
:root {
  --color-brand: #2563eb;
  --color-brand-soft: #dbeafe;
  --color-bg: #f8fafc;
  --color-surface: #ffffff;
  --color-surface-muted: #f1f5f9;
  --color-text: #0f172a;
  --color-muted: #475569;
  --color-border: #e2e8f0;
  --color-success: #16a34a;
  --color-warn: #d97706;
  --color-danger: #dc2626;
  --color-node-network: #2563eb;
  --color-node-os: #7c3aed;
  --color-node-db: #0891b2;
  --color-node-dsa: #ea580c;
  --color-node-co: #059669;

  --radius-sm: 6px;
  --radius-md: 8px;
  --radius-lg: 12px;

  --shadow-sm: 0 1px 2px rgb(15 23 42 / 0.06);
  --shadow-md: 0 12px 30px rgb(15 23 42 / 0.12);

  --motion-fast: 120ms;
  --motion-base: 180ms;
  --motion-slow: 260ms;
  --ease-standard: cubic-bezier(0.2, 0, 0, 1);
}
```

```js
// tailwind.config.js
export default {
  theme: {
    extend: {
      colors: {
        brand: '#2563EB',
        'brand-soft': '#DBEAFE',
        bg: '#F8FAFC',
        surface: '#FFFFFF',
        'surface-muted': '#F1F5F9',
        text: '#0F172A',
        muted: '#475569',
        border: '#E2E8F0',
        success: '#16A34A',
        warn: '#D97706',
        danger: '#DC2626',
      },
      borderRadius: {
        sm: '6px',
        md: '8px',
        lg: '12px',
      },
      boxShadow: {
        sm: '0 1px 2px rgb(15 23 42 / 0.06)',
        md: '0 12px 30px rgb(15 23 42 / 0.12)',
      },
    },
  },
};
```

## 5. 组件规范

### 5.1 组件清单

| 组件 | variant（同一组件的不同样式） | 尺寸 | 状态 | 备注 |
| --- | --- | --- | --- | --- |
| Button | primary / secondary / ghost / danger | sm / md | default / hover / active / disabled / loading | 页面主操作使用 primary |
| Input | default / search | md | default / focus / error / disabled | 搜索框和表单输入 |
| Select | default | md | default / focus / disabled | 分类、标签、难度筛选 |
| Badge | category / difficulty / status | sm | default / active | 标签、难度、协议状态 |
| Panel | default / muted / selected | md | default / selected / loading | 右侧详情、操作面板 |
| GraphNode | category / knowledge / focused | md / lg | default / hover / selected | 图谱节点 |
| Timeline | horizontal | md | upcoming / current / done / error | 模拟步骤 |
| Toast | success / warn / danger | md | enter / visible / exit | 全局反馈 |

### 5.2 基础 UI 配方

页面容器：

```txt
min-h-screen bg-bg text-text
```

内容面板：

```txt
rounded-md border border-border bg-surface shadow-sm
```

页面头部：

```txt
flex items-start justify-between gap-4
```

工具栏：

```txt
flex flex-wrap items-center gap-2
```

主按钮 base：

```txt
inline-flex items-center justify-center gap-2 rounded-md px-4 py-2 text-sm font-semibold
transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2
focus-visible:ring-brand focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50
```

主按钮 primary：

```txt
bg-brand text-white hover:bg-blue-700 active:bg-blue-800
```

次按钮 secondary：

```txt
border border-border bg-surface text-text hover:bg-surface-muted active:bg-brand-soft
```

幽灵按钮 ghost：

```txt
bg-transparent text-muted hover:bg-surface-muted hover:text-text
```

输入框：

```txt
h-10 w-full rounded-md border border-border bg-surface px-3 text-sm text-text
placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2
disabled:cursor-not-allowed disabled:opacity-50
```

空状态：

```txt
rounded-md border border-dashed border-border bg-bg p-8 text-center
```

页内提示：

```txt
rounded-md border border-border bg-surface-muted px-3 py-2 text-sm text-text
```

### 5.3 Button

- primary：每页主操作，比如“查看详情”“开始模拟”“下一步”。
- secondary：次级操作，比如“返回图谱”“重置模拟”。
- ghost：低权重操作，比如“清除筛选”“展开更多”。
- danger：风险操作，比如“重置全部进度”。
- 文案规则：动词开头，控制在 2-6 个汉字。
- 主操作规则：同一页面主视觉区域只放一个 primary。

### 5.4 Input 和筛选

- 搜索框占满可用宽度，左侧放搜索图标。
- 分类筛选使用 Select 或分段按钮。
- 标签筛选使用 Badge，多选状态用品牌色浅底。
- 输入错误时边框使用 `--color-danger`，说明文案放在输入框下方。

### 5.5 GraphNode

- 分类节点：尺寸更大，显示分类图标、分类名、知识点数量。
- 知识点节点：显示标题、难度点、是否带模拟器图标。
- 选中节点：边框使用品牌色，背景使用 `--color-brand-soft`。
- 有模拟器节点：右上角显示小闪电图标或播放图标。
- 关系线：前置关系用实线，关联关系用虚线，扩展关系用细线。

### 5.6 SimulatorPanel

- 操作面板顶部展示当前任务。
- 中部展示可选动作按钮，每个动作按钮固定高度 `40px`。
- 反馈区展示正确、提醒、错误三类状态。
- 历史区按时间倒序展示用户动作。
- 完成状态展示“模拟完成”与“返回详情”按钮。

### 5.7 Timeline

- 当前步骤：品牌色圆点和粗线。
- 已完成步骤：成功色圆点。
- 待执行步骤：灰色圆点。
- 错误步骤：危险色圆点，并在步骤说明下展示错误原因。

## 6. 页面规格

### 6.1 页面：首页知识图谱

- 目的：让用户快速看到知识体系、找到知识点、理解节点关系。
- 入口：打开网站默认进入。
- 主操作：查看详情。
- 页面骨架：
  - 顶部栏：产品名、全站搜索、GitHub 链接。
  - 左侧栏：分类列表、标签筛选、难度筛选。
  - 中央图谱：节点、连线、缩放控件、重置视图按钮。
  - 右侧面板：选中节点摘要、前置知识、关联知识、查看详情按钮。
- 布局配方：

```txt
grid min-h-screen grid-cols-[260px_minmax(0,1fr)_320px] bg-bg text-text
```

- 区块顺序：顶部栏 / 分类筛选 / 图谱画布 / 节点详情面板。
- 关键文案：
  - 搜索 placeholder：`搜索知识点，比如 TCP、进程、索引`
  - 空状态标题：`这里还没有知识点`
  - 主按钮：`查看详情`
- 交互规则：
  - 点击节点后，右侧面板更新为当前节点。
  - 双击节点进入详情页。
  - 搜索时图谱高亮匹配节点。
  - 分类切换时中央图谱聚焦该分类。
- 状态与反馈：
  - 加载中：图谱区域显示节点骨架和连线占位。
  - 空状态：中央展示空状态面板，左侧分类保留。
  - 出错：中央显示页内提示条，提供“重新加载”按钮。
  - 成功：节点选中、面板更新、URL 保持首页。
- 响应式：
  - 电脑：三栏布局。
  - 平板：左侧栏收成分类抽屉，右侧面板保留。
  - 手机：顶部搜索 + 分类横滑 + 图谱 + 底部详情抽屉。

### 6.2 页面：知识点详情

- 目的：让用户理解一个知识点的概念、步骤、关系和下一步操作。
- 入口：图谱节点、右侧面板、搜索结果。
- 主操作：开始模拟。
- 页面骨架：
  - 面包屑：知识图谱 / 计算机网络 / TCP 三次握手。
  - 顶部标题区：标题、摘要、难度、标签、学习时长。
  - 正文区：概念说明、流程步骤、状态变化、常见误区。
  - 右侧目录：页面锚点、前置知识、关联知识、主操作按钮。
- 布局配方：

```txt
mx-auto grid max-w-6xl grid-cols-[minmax(0,760px)_280px] gap-8 px-6 py-6
```

- 区块顺序：标题摘要 / 关键概念 / 步骤说明 / 状态表 / 关联知识。
- 关键文案：
  - 主按钮：`开始模拟`
  - 次按钮：`返回图谱`
  - 关联标题：`下一步可以学`
- 交互规则：
  - 点击目录锚点平滑滚动到对应区块。
  - 点击前置知识进入对应详情页。
  - 有模拟器时右侧显示固定主按钮。
- 状态与反馈：
  - 加载中：标题、正文段落、右侧目录显示骨架。
  - 空状态：正文显示“内容正在整理”，保留关系和模拟入口。
  - 出错：显示页内提示条和返回图谱按钮。
  - 成功：正文渲染完成，目录自动生成。
- 响应式：
  - 电脑：正文 + 右侧目录。
  - 平板：右侧目录移到正文顶部。
  - 手机：单列布局，主按钮固定在底部操作条。

### 6.3 页面：交互模拟器

- 目的：让用户通过主动选择动作理解流程和状态变化。
- 入口：知识点详情页、图谱右侧面板。
- 主操作：执行当前动作。
- 页面骨架：
  - 顶部：返回详情、模拟器标题、当前进度、重置按钮。
  - 左侧画布：客户端、服务端、报文动画、当前状态。
  - 右侧操作面板：任务说明、动作选项、反馈、历史。
  - 底部时间线：步骤进度、完成状态、错误标记。
- 布局配方：

```txt
grid min-h-screen grid-rows-[auto_minmax(0,1fr)_96px] bg-bg
```

主体：

```txt
grid grid-cols-[minmax(0,1fr)_360px] gap-4 px-6 py-4
```

- 区块顺序：标题栏 / 模拟画布 + 操作面板 / 时间线。
- TCP 三次握手关键文案：
  - 当前任务：`选择下一步应该发送的报文`
  - 正确反馈：`动作正确，状态已更新`
  - 错误反馈：`这一步的发送方或报文类型有误`
  - 完成反馈：`连接已建立`
- 交互规则：
  - 用户点击动作按钮后，系统立即判断。
  - 正确动作推进时间线和状态。
  - 错误动作保持当前步骤，并在反馈区解释原因。
  - 点击重置后回到初始状态。
- 状态与反馈：
  - 加载中：画布和按钮显示骨架。
  - 空状态：显示“这个知识点还没有模拟器”，主操作为返回详情。
  - 出错：显示页内提示条，保留用户已完成步骤。
  - 成功：时间线全部完成，反馈区展示完成卡片。
- 响应式：
  - 电脑：画布 + 右侧操作面板。
  - 平板：操作面板宽度 `320px`。
  - 手机：画布在上，操作面板在下，时间线改为竖向列表。

## 7. 文案与语气

- 整体语气：专业、清楚、直接，帮助用户判断下一步。
- 按钮文案：动词开头，比如“查看详情”“开始模拟”“重置模拟”“返回图谱”。
- 状态文案：
  - 成功：`动作正确，状态已更新`
  - 警告：`先观察当前发送方，再选择报文`
  - 错误：`这一步的发送方或报文类型有误`
  - 空状态：`这里还没有知识点`
- 知识解释文案：优先短句，关键协议字段使用等宽字体。

## 8. 可访问性与可用性

- 所有按钮、节点、筛选项支持键盘聚焦。
- 焦点样式使用品牌色外环，保持可见。
- 正文和背景保持足够对比度。
- 手机点击热区至少 `44px`。
- 图谱节点选中状态同时使用颜色、边框和文本提示。
- 模拟器反馈同时使用图标、颜色和文字。

## 9. 设计验收清单

- [ ] 页面使用本文定义的颜色、字号、间距、圆角和阴影。
- [ ] 同类按钮、输入框、标签、面板样式一致。
- [ ] 首页、详情页、模拟器页都有加载中、空状态、出错、成功状态。
- [ ] 每个页面主视觉区域只有一个 primary 操作。
- [ ] 图标来自 `lucide-react`，尺寸和线宽一致。
- [ ] 电脑、平板、手机布局规则清楚。
- [ ] 图谱节点状态和模拟器状态都有明确反馈。
- [ ] 文案短、直接、动作清晰。

## 10. 待确认的问题

1. 品牌名最终显示为 `KnowledgeGraph` 还是中文名。
2. Logo 形式：纯文字、图标加文字、或后续单独设计。
3. 首版是否展示“关于项目”页面。
4. 后续暗黑模式的优先级。
