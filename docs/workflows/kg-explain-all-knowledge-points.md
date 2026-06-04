# 全量知识点文章化讲解流程

## 目标

把 `src/data/knowledge-points/` 中的知识点逐个升级为优秀中文技术文章。每篇文章都要做到：资料可靠、来源可追溯、结构清晰、格式清楚、解释透彻、例子具体、工程判断充分，达到“新手学会、老手学精”的效果。

“新手学会”表示读者能理解这个知识点解决什么问题、核心机制如何运转、实际系统里如何使用、常见故障如何验证。“老手学精”表示读者能获得实现细节、边界条件、性能代价、生产排障经验、设计取舍或面试追问深度。

每次只处理一个知识点。完成一个知识点的资料调研、来源登记、文章改写、`KG_REVIEWED` 标记和校验后，再进入下一个知识点。

## 资料检索

1. 使用 Chrome DevTools 或浏览器检索知识点中文名、英文名、官方术语、常见面试关键词、实现细节关键词、性能关键词、排障关键词和边界情况关键词。
2. 每个知识点建议选择 4-8 个来源，复杂工程知识点可以更多。来源组合要覆盖权威定义、实践解释和工程经验。
3. 资料优先级：
   - 官方文档、标准文档、RFC、权威项目文档、源码级设计文档、云厂商或数据库/中间件厂商文档。
   - 热门且高质量的中文技术博客、中文教程、中文技术社区长文，优先选择解释清晰、有例子、有图、有工程场景的文章。
   - 权威英文资料、经典教材资料、工程实践文章、设计文档、故障复盘、性能分析文章。
   - 高质量问答和案例文章，用于补充常见误区、排查路径和真实问题。
4. 中文资料用于贴近读者表达，官方与权威英文资料用于校准定义、机制、限制、版本差异和边界情况。
5. 引用来源写入 `knowledgeSources`，知识点通过 `sourceRefs` 关联来源。source id 要稳定、清晰、可读；标题和 URL 要能在详情页右侧支持溯源。
6. 文章里的关键定义、机制、限制和排查建议都要能追溯到 `sourceRefs` 中的来源。

## 写作框架

每个知识点按“研究型文章”写作，混合使用 Diátaxis 的四种文档能力：

- Explanation：解释概念、机制、边界和原理。
- Tutorial：用小例子带新手走通主路径。
- How-to：给出排查、使用、设计或判断步骤。
- Reference：列出关键字段、命令、指标、配置、状态或复杂度。

建议 `explanation` 至少包含这些段落，复杂知识点可以扩展：

1. 概念定位：说明它解决什么问题、为什么重要、在真实系统哪里出现。
2. 准确定义：用中文讲清定义，并保留关键英文术语。
3. 心智模型：给新手一个容易记住的模型或类比。
4. 主流程机制：按输入、状态变化、关键结构或字段、输出和下游影响展开。
5. 例子或场景：给出实际请求、命令、配置、伪流程、数据结构或工程案例。
6. 深层细节：补充实现细节、不变量、性能特征、并发/一致性、安全、版本差异或设计取舍。
7. 边界与故障：列出容易被忽略的异常分支、容量限制、超时重试、数据不一致、权限、网络抖动、资源耗尽等问题。
8. 排查与实践：给出可执行的命令、指标、日志、抓包字段、EXPLAIN、trace、监控或验证方法。
9. 常见误区：用直接的正向表述说明正确理解。
10. 参考来源：说明主要参考了哪些官方资料、技术文章和工程资料。

`summary` 或 `concept` 用一句话说明知识点解决的问题。`typicalProblems` 至少覆盖定义、机制、对比、场景、排查、边界、取舍和深入追问。需要时补充 `applicationScenarios`、`commonIssues`、`practiceAdvice`、`commonCommands` 等已有字段。

## 格式要求

知识点讲解需要在详情页呈现为格式化文章。`explanation` 数组中的每个字符串代表一个文章小节，推荐使用 `标题：正文` 作为小节标题。正文可以包含以下轻量 Markdown 结构：

- 空行分隔多个自然段。
- `- ` 或 `* ` 开头的项目列表。
- `1. `、`2. ` 开头的编号步骤。
- 三个反引号包裹命令、配置、SQL、YAML、Go 代码或伪代码。
- 使用反引号标记命令、字段、状态、配置项和指标。

格式化文章应避免单个小节塞成一整段长文本。复杂机制、排查流程和配置示例优先使用列表、步骤或代码块。每个知识点至少包含一种列表或编号步骤；涉及命令、配置、SQL、YAML、Go、Docker、Kubernetes、MySQL、Redis、网络抓包或算法伪代码时，优先加入代码块。

## 写作标准

- 面向中文技术读者，用准确、清晰、精炼的中文表达，关键术语保留常见英文名。
- 先建立主线，再逐步深入。新手先读懂，老手继续获得细节。
- 保持信息密度，避免百科式背景堆砌。
- 复杂知识点用流程、因果、例子、指标和故障证据讲清。
- 使用格式化内容承载复杂信息，优先把流程写成编号步骤，把排查证据写成列表，把命令和配置写成代码块。
- 文章要体现实践判断：什么时候用、怎么用、哪里会出问题、如何证明判断成立。
- 高质量文章需要有原创整理和综合分析，不能只拼接资料。
- 常见误区用正向表述，直接说明正确心智模型和判断方法。
- 面试问法要贴近真实提问，例如“为什么”“怎么实现”“怎么排查”“和 X 区别”“有哪些坑”“线上怎么验证”“性能取舍是什么”。
- 右侧引用源必须支撑讲解中的关键定义、机制、边界和工程建议。

## 文章质量自检

标记 `KG_REVIEWED` 前逐项检查：

1. 新手层：读者能说清它解决什么问题、如何工作、用在哪里、会出什么故障、如何验证。
2. 老手层：文章至少提供一个有价值的实现细节、边界判断、性能取舍、生产排障经验或设计权衡。
3. 面试层：读者能回答基础问题和深入追问，并能给出证据或例子。
4. 来源层：`sourceRefs` 同时包含权威资料和高质量技术文章，关键结论可追溯。
5. 结构层：文章有自然段落流，段落标题清楚，例子和实践建议具体。
6. 可信层：定义、版本、限制、命令和指标经过官方或权威资料校准。
7. 格式层：至少包含列表、编号步骤或代码块，详情页阅读时呈现为格式化文章。

## 单个知识点处理步骤

1. 运行 `npm run kg:review:status` 查看队列。
2. 使用 `npm run kg:review:start` 领取一个尚未完成 `KG_REVIEWED` 标记的知识点。所有知识点都已 reviewed 时，选择短、浅、来源弱或缺少工程深度的知识点做二次升级。
3. 阅读已有字段：`id`、`zh`、`en`、`summary/concept`、`explanation`、`typicalProblems`、`sourceRefs`、`related`、`prerequisites`。
4. 检索并阅读官方资料、标准/RFC、热门中文技术博客和高质量英文资料。
5. 先形成资料卡片：定义、机制、关键字段/结构、例子、边界、故障、排查、性能、安全、面试追问和来源链接。
6. 更新 `knowledgeSources`，保持 source id 稳定、标题清晰、URL 可访问。
7. 更新知识点的 `sourceRefs`，确保每个 source id 都存在于 `knowledgeSources`。
8. 改写 `summary/concept`、`explanation`、`typicalProblems`，让内容成为一篇紧凑完整、格式清楚的技术文章。
9. 在 `explanation` 中加入“参考来源”或“资料来源”段，点名主要参考资料。
10. 运行严格校验：

```bash
npm run kg:review:validate -- --strict-article --ids category/id
```

11. 在知识点对象上方添加或更新标记：

```ts
/* <!-- KG_REVIEWED: 知识点名称 | yyyy-mm-dd | source_count=N --> */
```

12. 同步来源数量并运行校验：

```bash
npm run kg:review:sync-counts -- --ids category/id
npm run kg:review:validate
npm run test:data
```

13. 如果改了 TypeScript、脚本、样式或详情页 UI，继续运行：

```bash
npm run build
```

## 辅助命令

```bash
npm run kg:review:status
npm run kg:review:start
npm run kg:review:batch -- --limit 5
npm run kg:review:complete -- --source-count 5
npm run kg:review:mark
npm run kg:review:sync-counts
npm run kg:review:autopass -- --limit 10
npm run kg:review:handoff
npm run kg:review:validate
npm run kg:review:validate -- --strict-article --ids network/tcp
npm run test:review
npm run kg:review:fail -- --reason "Chrome DevTools disconnected"
```

`kg:review:start` 会选择下一个没有 `KG_REVIEWED` 标记的知识点，并写入 `.kg-review-progress.json`。`kg:review:complete` 会在当前知识点上方写入 `KG_REVIEWED` 标记，并清空当前进度。

`kg:review:batch -- --limit 5` 适合共享同一组资料一起审阅。文章化升级优先使用单知识点流程。

`kg:review:sync-counts` 会扫描已有 `KG_REVIEWED` 标记的知识点，把标记里的 `source_count` 同步为实际 `sourceRefs` 数量。新增或删除引用来源后先运行这个命令，再运行校验。

`kg:review:autopass` 只适合旧标准下已经满足基础门槛的知识点。文章化升级时优先人工或自动化逐点复核。

推荐自动运行节奏：

```bash
npm run kg:review:status
npm run kg:review:start
npm run kg:review:validate -- --strict-article --ids category/id
npm run kg:review:sync-counts -- --ids category/id
npm run kg:review:validate
npm run test:data
```

## 完成标准

- 每个知识点都有文章级讲解和 `KG_REVIEWED` 标记。
- 每个 `sourceRefs` 都能在 `knowledgeSources` 中找到对应来源。
- 右侧引用源标题和链接完整，能支撑关键定义、机制、边界和工程建议。
- 讲解覆盖主流程、例子、工程场景、边界情况、常见误区、排查方法、性能/安全/取舍和面试追问。
- 资料以官方文档、高质量中文技术文章和权威英文资料共同支撑。
- 新手读完能建立完整理解，老手读完能获得工程洞察。
- 项目校验通过。
