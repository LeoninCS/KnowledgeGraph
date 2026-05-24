# 全量知识点讲解流程

## 目标

把 `src/data/knowledge-points/` 中所有知识点讲解一遍。每个知识点都要做到：资料可靠、讲解通俗、内容透彻、篇幅克制、引用可追溯，帮助中文用户用较少精力建立完整理解。

## 资料检索

1. 使用 Chrome DevTools 打开搜索页和资料页，围绕知识点中文名、英文名、官方术语、常见面试关键词检索。
2. 资料优先级：
   - 官方文档、标准文档、权威项目文档
   - 高质量中文博客、中文教程、中文技术社区长文
   - 权威英文资料、经典教材资料、工程实践文章
   - 高质量问答和案例文章
3. 每个知识点建议选 3-6 个来源。基础概念可少一些，复杂工程概念可多一些。
4. 中文资料优先，英文资料用于校准定义、边界和关键细节。
5. 引用来源写入 `knowledgeSources`，知识点通过 `sourceRefs` 关联来源，详情页右侧用于展示标题和链接。

## 讲解结构

每个知识点建议覆盖这些内容：

1. `summary` 或 `concept`：一句话说明这个知识点解决什么问题。
2. `explanation`：
   - 概念定义：直接说清它是什么、解决什么问题。
   - 工作机制：按输入、处理过程、输出结果讲清主流程。
   - 适用场景：说明它通常用在哪里。
   - 特殊情况：列出容易被忽略的分支、异常、边界条件和工程限制。
   - 常见误区：指出学习和面试中容易混淆的点。
   - 实战排查或使用建议：给出可落地的判断方法、命令、指标或设计注意点。
   - 参考来源：说明本讲解主要参考了哪些资料。
3. `typicalProblems`：列出面试中常见问法，覆盖定义、机制、对比、场景、排查和边界。
4. 需要时补充 `applicationScenarios`、`commonIssues`、`practiceAdvice` 等已有字段。

## 写作标准

- 面向中国学习者，用中文表达，术语保留常见英文名。
- 先给可理解的主线，再补充细节。
- 讲解保持信息密度，避免堆砌百科式背景。
- 复杂知识点用流程、因果和例子讲清。
- 特殊情况要具体，例如超时、重试、缓存失效、并发竞争、版本差异、容量上限、权限、网络抖动、数据不一致。
- 面试问法要贴近真实提问，例如“为什么”“怎么实现”“怎么排查”“和 X 区别”“有哪些坑”。
- 右侧引用源必须能支撑讲解中的关键定义、机制和边界。

## 单个知识点处理步骤

1. 在 `src/data/knowledge-points/` 中选择一个尚未完成 `KG_REVIEWED` 标记的知识点。
2. 阅读已有字段：`id`、`zh`、`en`、`summary/concept`、`explanation`、`typicalProblems`、`sourceRefs`、`related`、`prerequisites`。
3. 使用 Chrome DevTools 检索并打开 3-6 个优质来源。
4. 从资料中提取定义、机制、适用场景、边界情况、面试高频点。
5. 更新 `knowledgeSources`，保持 source id 稳定、标题清晰、URL 可访问。
6. 更新知识点的 `sourceRefs`，确保每个 source id 都存在于 `knowledgeSources`。
7. 改写 `summary/concept`、`explanation`、`typicalProblems`，让内容更准确、更容易理解。
8. 在知识点对象上方添加标记：

```ts
/* <!-- KG_REVIEWED: 知识点名称 | yyyy-mm-dd | source_count=N --> */
```

9. 运行构建或类型检查，确认数据结构有效。
10. 继续处理下一个知识点，直到所有知识点都有 `KG_REVIEWED` 标记。

## 辅助命令

```bash
npm run kg:review:status
npm run kg:review:start
npm run kg:review:batch -- --limit 5
npm run kg:review:complete -- --source-count 5
npm run kg:review:mark
npm run kg:review:autopass -- --limit 10
npm run kg:review:handoff
npm run kg:review:validate
npm run kg:review:fail -- --reason "Chrome DevTools disconnected"
```

`kg:review:start` 会选择下一个没有 `KG_REVIEWED` 标记的知识点，并写入 `.kg-review-progress.json`。`kg:review:complete` 会在当前知识点上方写入 `KG_REVIEWED` 标记，并清空当前进度。

`kg:review:batch -- --limit 5` 会领取下一批知识点，适合共享同一组资料一起审阅。审阅和改写完成后运行 `npm run kg:review:mark`，脚本会给当前批次逐个写入 `KG_REVIEWED` 标记。也可以用 `npm run kg:review:mark -- --ids network/tcp-ip-model,network/signal` 指定批量标记。

`kg:review:autopass -- --limit 10` 是自动快车道：对已经满足来源数、讲解段落数和面试题数量门槛的知识点批量写入 `KG_REVIEWED`。默认门槛是来源不少于 3 个、讲解不少于 5 段、面试题不少于 3 个。复杂、过时或来源较弱的知识点继续使用 Chrome DevTools 人工复核。

推荐自动运行节奏：

```bash
npm run kg:review:autopass -- --limit 20
npm run kg:review:validate
npm run build
```

## 完成标准

- 每个知识点都有清晰讲解和 `KG_REVIEWED` 标记。
- 每个 `sourceRefs` 都能在 `knowledgeSources` 中找到对应来源。
- 右侧引用源标题和链接完整。
- 讲解能覆盖主流程、特殊情况、常见误区和面试问法。
- 资料以中文优质内容为主，并用官方或权威英文资料校准关键事实。
- 项目构建通过。
