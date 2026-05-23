# 图谱知识点讲解续跑流程

## 目标

逐一完善 `src/data/knowledge-points/` 中的图谱知识点讲解，优先保证准确性、清晰度、引用质量和可续跑能力。

## 源文件

- 图谱知识点：`src/data/knowledge-points/`
- 来源字典：`knowledgeSources`
- 知识点字段：`sourceRefs`、`summary` 或 `concept`、`explanation`、`typicalProblems`、`applicationScenarios`、`commonIssues`
- 详情页引用展示：`src/features/knowledge/pages/DetailPage.tsx` 会根据 `sourceRefs` 在侧边栏列出来源标题和链接。

## 续跑标记

每完成一个知识点，在对应对象上方添加 HTML 注释标记：

```ts
/* <!-- KG_REVIEWED: 知识点名称 | yyyy-mm-dd | source_count=N --> */
```

`KG_REVIEWED` 表示该知识点已经按本流程完成准确性、清晰度和引用质量检查。已有 `KG_EXPLAINED` 标记保持原状；新续跑以 `KG_REVIEWED` 为准。

## 命令

```bash
npm run kg:explain:status
npm run kg:explain:start
npm run kg:explain:complete -- --source-count 3
npm run kg:explain:handoff
npm run kg:explain:validate
npm run kg:explain:fail -- --reason "Chrome DevTools disconnected"
```

`kg:explain:start` 会选择下一个没有 `KG_REVIEWED` 标记的知识点，并写入 `.kg-explain-progress.json`。`kg:explain:complete` 会给当前知识点写入 `KG_REVIEWED` 标记并清空当前项。`kg:explain:status` 和 `kg:explain:handoff` 用于中断后续跑。

## 每个知识点处理流程

1. 运行 `npm run kg:explain:start`，读取当前知识点、已有来源、已有讲解和搜索关键词。
2. 使用 Chrome DevTools 在线检索资料。
3. 资料优先级：
   - 官方文档
   - 高质量中文资料
   - 权威英文资料
   - 高质量技术博客或工程实践文章
4. 在 `knowledgeSources` 中补充缺失来源，来源包含稳定 `source id`、标题和链接。
5. 在知识点对象中更新 `sourceRefs`，确保侧边栏能显示本知识点引用。
6. 改写或补充 `explanation`，覆盖：
   - 核心概念
   - 适用场景
   - 特殊场景
   - 边界情况
   - 常见误区
   - 实际使用注意点
   - 参考来源说明
7. 根据需要更新 `summary` 或 `concept`、`typicalProblems`、`applicationScenarios`、`commonIssues`。
8. 运行 `npm run build` 验证 TypeScript 和前端构建。
9. 运行 `npm run kg:explain:complete -- --source-count N` 写入 `KG_REVIEWED` 标记。
10. 继续运行 `npm run kg:explain:start` 处理下一个知识点。

## 分组策略

- 复杂、独立、容易误解的知识点逐个处理。
- 简单且强相关的知识点以 2-4 个为一组处理。
- 强关联概念保持术语统一，避免重复解释。

## 质量标准

- 讲解准确，有可靠来源支撑。
- 表达精炼，优先讲清关键点。
- 复杂概念包含特殊场景和边界情况。
- `sourceRefs` 都能在 `knowledgeSources` 中找到来源。
- 侧边栏引用来源标题和链接完整。
- 已处理知识点具备 `KG_REVIEWED` 续跑标记。
- `npm run build` 通过。

## 自动续跑 Goal

```text
按 docs/workflows/kg-explain-graph-points.md 自动续跑 src/data/knowledge-points/ 中的图谱知识点讲解。每次先运行 npm run kg:explain:start 获取下一个未 KG_REVIEWED 的知识点；使用 Chrome DevTools 检索资料；更新 knowledgeSources、sourceRefs、summary/concept、explanation、typicalProblems 等字段；运行 npm run build；完成后运行 npm run kg:explain:complete -- --source-count N；继续处理下一个知识点，直到 npm run kg:explain:start 返回 complete。中断后再次从 npm run kg:explain:status 和 npm run kg:explain:start 继续。
```
