# Knowledge Visualization Progress

本文件用于跟踪知识点可视化模拟的长期进度。自动化任务每次执行前先读取本文件，执行后更新状态、截图、参考拆解和下一候选。

## Scope

只处理适合可视化的高价值知识点。已有知识点讲解视为完成内容，可作为术语、文案和结构上下文。

适合进入候选池的知识点具备至少一项特征：

- 机制清晰，存在步骤、状态、数据流或控制流
- 结构复杂，适合通过分层、组件关系或存储布局表达
- 工程价值高，常用于排障、设计、面试或生产实践
- 图形化之后能显著提升理解效率

## Visual Types

| 类型 | 适用内容 | 交互重点 |
|---|---|---|
| `step-simulation` | 协议、请求链路、调度、事务、复制、故障恢复 | 步骤推进、状态高亮、任务引导 |
| `state-model` | 生命周期、连接状态、锁状态、事务状态 | 状态迁移、触发条件、边界观察 |
| `data-structure-lab` | B+ 树、跳表、堆、哈希、队列、栈 | 操作路径、局部变化、复杂度提示 |
| `explorable-architecture` | MySQL、Redis、Kubernetes、Docker、操作系统 | 组件职责、连接关系、视角切换 |
| `layered-structure` | 网络分层、存储分层、运行时分层 | 层级职责、上下游关系、数据封装 |
| `storage-layout` | Buffer Pool、页表、LSM、文件系统、镜像层 | 区域划分、数据位置、生命周期 |
| `comparison-lab` | TCP/UDP、进程/线程、索引类型、缓存策略 | 差异维度、适用场景、工程取舍 |

## Quality Gate

每个可视化完成前必须通过以下验收：

- 主题在 10 秒内可识别
- 主画布对象职责清楚，关键对象有明确标签
- 交互动作有视觉反馈，包含 hover、点击、步骤切换或状态高亮
- 右侧面板包含当前任务、操作面板、理解重点
- 底部步骤条或视角切换能表达进度
- 桌面和移动端文字可读，无明显遮挡、溢出或错位
- 视觉风格与现有页面保持一致，主画布具有领域感
- 单个知识点呈现为教学模拟器或可探索结构模型

## Online Image References

每次实现前必须联网搜索并记录 3-5 个高质量图片或截图参考。搜索目标包括官方文档图、技术博客图解、交互教程截图、课程插图和高赞技术图片。先找图，再设计，再编码；找不到足够好的主参考图，本轮进入暂缓。

搜索建议：

- 普通搜索负责筛选候选来源：快速找 10-20 个可能有好图的页面
- Chrome MCP 负责视觉确认：打开候选页面，看图的真实质量、布局、清晰度和上下文
- 最后选主参考图：保存页面 URL、图片 URL 或截图路径，再做拆图和原创实现
- 使用中英文关键词组合，例如 `<知识点> architecture diagram`、`<知识点> visualization`、`<知识点> explained diagram`、`<知识点> 图解`
- 优先打开原始页面确认图片上下文
- 记录可访问的页面 URL，必要时记录图片 URL
- 选择点赞、收藏、引用、传播度或来源权威性较高的参考

来源优先级：

1. 官方文档图
2. 权威英文资料
3. 高质量中文资料
4. 经典技术图解
5. 优秀交互教程或高赞截图

每个参考记录：

- `source`：标题和 URL
- `image`：图片 URL 或页面中图片位置说明
- `role`：`main` 或 `supporting`
- `qualityReason`：选择这张图的原因，例如传播度、权威性、视觉质量、信息密度、可复刻价值
- `takeaways`：可借鉴的信息层级、布局、对象、连线、步骤或交互
- `originalChanges`：本项目采用的原创改造点

## Reference Breakdown

视觉拆解必须在编码前完成，至少覆盖：

- 主体布局：画布、面板、进度区、层级结构
- 领域对象：节点、容器、数据包、队列、状态、存储区域
- 视觉语言：颜色、线条、标签、动效、强调方式
- 教学节奏：任务、步骤、反馈、理解重点
- 原创改造：本项目采用的结构、文案、交互和视觉差异

## Screenshot Review

每个完成项保存至少两张截图：

- 桌面：主画布、右侧面板、底部步骤条完整可见
- 移动端：核心交互可用，文字和控件可读

推荐目录：

- `.codex-artifacts/visualizations/<point-id>/desktop.png`
- `.codex-artifacts/visualizations/<point-id>/mobile.png`

截图验收重点：

- 主画布主题明确
- 当前任务和选中步骤一致
- 动画或高亮状态可见
- 右侧面板无文字拥挤
- 底部进度条无错位

## Concurrency Control

每次自动化执行开始时检查：

- 当前工作区是否存在进行中的可视化改动
- `.codex-artifacts/visualizations/` 是否有本轮未归档截图
- git diff 中是否包含其他正在处理的 simulation 文件

前一次任务仍在运行或存在冲突风险时，本轮只更新状态说明并退出执行。

## Priority Rules

优先领域：

1. 网络
2. MySQL
3. Redis
4. Kubernetes
5. Docker
6. 操作系统
7. 算法中机制强、动画收益高的知识点

优先知识点特征：

- 能做成步骤式模拟
- 能展示架构分层或关键组件职责
- 能关联真实工程问题
- 能通过点击、切换、播放带来理解增量

## Status

| 知识点 | 类型 | 状态 | 截图 | 备注 |
|---|---|---|---|---|
| TCP/IP 四层模型 | `step-simulation` | candidate | pending | 可作为协议分层标杆模板 |
| Buffer Pool | `storage-layout` | completed | desktop/mobile captured | MySQL Buffer Pool 专用存储布局模拟器，覆盖 LRU 分区、缺页装入、脏页和后台刷盘 |
| 哈希槽 | `step-simulation` | completed-code | blocked by browser sandbox | Redis Cluster 槽位路由模拟器，覆盖 CRC16、Key Tag、槽位归属、ASK 和 MOVED |

## Buffer Pool Visualization

### Online Image References

- `source`：MySQL 8.4 Reference Manual - The InnoDB Buffer Pool，https://dev.mysql.com/doc/refman/8.4/en/innodb-buffer-pool.html
  - `image`：文档中的 `Content of the Buffer Pool List` LRU 示意图。
  - `role`：main
  - `qualityReason`：官方文档图，清晰表达 Buffer Pool LRU List 的 young/old 分段和 midpoint insertion。
  - `takeaways`：主画布采用中心 Buffer Pool 容器、young/old 双分区、midpoint 横线和 page frame 卡片。
  - `originalChanges`：加入读写请求、Free List、Flush List、Page Cleaner、表空间和底部观测指标，把静态 LRU 图扩展为五步教学模拟。
- `source`：MySQL 8.4 Reference Manual - Making the Buffer Pool Scan Resistant，https://dev.mysql.com/doc/refman/8.4/en/innodb-performance-midpoint_insertion.html
  - `image`：页面中的 old sublist / new sublist 访问节奏说明。
  - `role`：supporting
  - `qualityReason`：官方说明 midpoint insertion 如何降低全表扫描污染。
  - `takeaways`：把新装入页面放入 old 区，持续访问后晋升 young 区。
  - `originalChanges`：用橙色晋升箭头和 midpoint 标签表达二次访问晋升。
- `source`：HackMySQL - MySQL Page Flushing，https://hackmysql.com/book-6/
  - `image`：页面刷盘章节的 Buffer Pool、Dirty Pages、Page Flushing 关系图。
  - `role`：supporting
  - `qualityReason`：图解脏页、检查点和后台刷盘链路，适合补足写路径。
  - `takeaways`：Flush List 和 Page Cleaner 应与脏页、表空间连成独立路径。
  - `originalChanges`：右侧管理链表和表空间柱体把刷盘从读路径中拆出。
- `source`：PlanetScale Learn - MySQL for Developers: Buffer pool，https://planetscale.com/learn/courses/mysql-for-developers/database-concepts/buffer-pool
  - `image`：课程页中的 Buffer Pool 教学截图和访问流程。
  - `role`：supporting
  - `qualityReason`：课程化表达清楚，便于转换成右侧任务面板文案。
  - `takeaways`：读请求、命中率、磁盘 I/O 节省是入门理解重点。
  - `originalChanges`：底部指标加入命中率、脏页比例和 checkpoint age。
- `source`：OneUptime - How MySQL InnoDB Buffer Pool Works Internally，https://oneuptime.com/blog/post/2026-03-31-mysql-how-mysql-innodb-buffer-pool-works-internally/view
  - `image`：文章中的 Buffer Pool 内部结构和热页流程图。
  - `role`：supporting
  - `qualityReason`：结构图覆盖缓存页、淘汰和刷盘语义，补充工程化语言。
  - `takeaways`：用读写请求串起命中、缺页、淘汰、脏页、刷盘。
  - `originalChanges`：采用项目统一 SVG 舞台、状态高亮、底部步骤条和右侧操作面板。

### Reference Breakdown

- 主体布局：左侧 SQL 请求，中部 Buffer Pool 主容器，右侧 Free List / Flush List / LRU old% 管理面板和表空间，底部观测指标。
- 视觉焦点：中心 LRU young/old 分区和 midpoint 横线；读命中、缺页装入、脏页入队、后台刷盘用不同颜色路径串联。
- 领域对象：page frame、LRU List、Free List、Flush List、Dirty Page、Page Cleaner、Tablespace、checkpoint age。
- 容器层级：Buffer Pool 包含缓存页和 LRU 分区；管理链表独立陈列；表空间作为持久化终点。
- 连线方向：SQL 请求进入 Buffer Pool；Free List 反向供给 frame；脏页进入 Flush List；Page Cleaner 写回表空间。
- 状态表达：每一步通过 `completedSteps` 改变透明度、边框色、箭头和指标值显隐。
- 颜色策略：品牌蓝表示读命中，青色表示缺页装入，橙色表示 midpoint 晋升，红色表示脏页，绿色表示刷盘完成。
- 文字密度：画布只保留对象标签、页号、关键指标；解释放在右侧面板和底部步骤条。
- 交互节奏：五步依次推进“查找缓存页 -> 装入缺失页 -> Midpoint 插入 -> 修改脏页 -> 后台刷盘”。
- 原创改造点：把官方 LRU 图扩展为可交互存储布局模型，同时覆盖读路径、写路径和排障指标。

### Screenshot Review

- 桌面：captured `.codex-artifacts/visualizations/buffer-pool/desktop.png`
- 移动端：captured `.codex-artifacts/visualizations/buffer-pool/mobile.png`
- 截图结论：主题 10 秒内可识别；LRU young/old、midpoint、Free List、Flush List、Page Cleaner 和表空间链路完整；右侧任务、操作面板、理解重点可读；底部五步进度完整；移动端保留核心画布和面板信息。
- 验收备注：Playwright Chromium 在当前 macOS 沙箱中受 Mach port 权限限制；Chrome DevTools MCP 恢复后完成页面交互和截图。代码验证以 `npm run build`、`npm run test:data` 和 `git diff --check` 为准。

## Deferred

| 知识点 | 原因 | 复查条件 |
|---|---|---|
| 哈希槽截图 | 当前 macOS 沙箱阻止 Chromium、系统 Chrome/Edge 和 screencapture 获取页面截图；构建和数据测试已通过 | Chrome DevTools MCP 或浏览器权限恢复后，保存 `.codex-artifacts/visualizations/hash-slot/desktop.png` 与 `mobile.png` |

## Next Candidate

优先选择网络层 `IP 路由`，机制清晰且适合做逐跳路径模拟。

## Hash Slot Visualization

### Online Image References

- `source`：Severalnines Docs - Redis Cluster，https://docs.severalnines.com/clustercontrol/latest/getting-started/tutorials/day-1-operations/your-first-cluster/redis/redis-cluster/
  - `image`：页面中的 Redis Cluster 拓扑图，展示三主三从与 Slot 分布。
  - `role`：main
  - `qualityReason`：集群拓扑图结构清楚，主从节点、槽位分片和客户端访问关系适合作为主画布构图参考。
  - `takeaways`：主画布采用客户端、槽位带、三个主节点和副本的分层布局。
  - `originalChanges`：加入 CRC16 计算、Key Tag 同槽、ASK/MOVED 重定向和迁移窗口，把静态拓扑扩展为五步路由模拟。
- `source`：Redis Docs - Redis Cluster specification，https://redis.io/docs/latest/operate/oss_and_stack/reference/cluster-spec/
  - `image`：官方文档中的 hash slot、MOVED、ASK、migrating/importing 文字与示例流程。
  - `role`：supporting
  - `qualityReason`：官方定义权威，覆盖 16384 槽、CRC16、Key Tag、ASKING、MOVED 和迁移状态语义。
  - `takeaways`：步骤文案和状态标签采用官方术语，尤其区分 ASK 临时访问与 MOVED 槽位表刷新。
  - `originalChanges`：用可点亮的迁移窗口展示 `M2 migrating`、`M3 importing` 和 `owner -> M3`。
- `source`：Redis Docs - Scale with Redis Cluster，https://redis.io/docs/latest/operate/oss_and_stack/management/scaling/
  - `image`：官方扩缩容和 resharding 操作上下文。
  - `role`：supporting
  - `qualityReason`：补充生产扩缩容场景中的槽位迁移、拓扑观察和客户端路由语义。
  - `takeaways`：把槽位移动放在运维窗口中表达，并加入排查信号面板。
  - `originalChanges`：右侧信号面板同时展示 slot map、ASK、MOVED 三个线上排查指标。
- `source`：Redis Commands - CLUSTER KEYSLOT，https://redis.io/docs/latest/commands/cluster-keyslot/
  - `image`：命令页面中的槽位计算说明。
  - `role`：supporting
  - `qualityReason`：官方命令页直接说明单 key 槽位调试方式。
  - `takeaways`：用 `user:{42}:cart` 和 `order:{42}:list` 展示 Key Tag 同槽。
  - `originalChanges`：左侧哈希面板列出 key、参与哈希片段和槽位，降低理解门槛。
- `source`：OneUptime - Redis Cluster Architecture Explained，https://oneuptime.com/blog/post/2026-04-01-redis-cluster-architecture-explained/view
  - `image`：文章中的 Redis Cluster 节点和客户端重定向图解。
  - `role`：supporting
  - `qualityReason`：工程化解释覆盖客户端路由、重定向和故障排查语言。
  - `takeaways`：把 MOVED/ASK 呈现为客户端可观测反馈。
  - `originalChanges`：采用本项目统一 SVG 舞台、红色 Redis 主题、底部步骤条和右侧理解重点。

### Reference Breakdown

- 主体布局：左侧客户端与 CRC16 面板，中部 0-16383 槽位带，底部三个 Redis 主节点与副本，右侧迁移窗口和排查信号。
- 视觉焦点：slot 8000 指针从槽位带落到负责主节点；迁移后从 M2 移到 M3，并通过 MOVED 回写客户端槽位表。
- 领域对象：Cluster client、CRC16、Key Tag、hash slot、slot map、primary shard、replica、migrating/importing、ASK、MOVED。
- 容器层级：客户端缓存槽位表；哈希面板负责 key 到 slot；槽位带负责 slot 到主节点；迁移面板展示状态切换。
- 连线方向：客户端到哈希计算，哈希到槽位表，槽位表到主节点；ASK 从源节点指向目标节点；MOVED 从迁移窗口回到客户端。
- 状态表达：每一步通过透明度、边框、箭头和 signal 值显隐表达已完成步骤。
- 颜色策略：红色表示 Redis 主题和 MOVED，蓝色表示计算，青色表示槽位映射，绿色表示命中返回，橙色表示 ASK 迁移窗口。
- 文字密度：画布只保留 key、slot、节点和信号；概念解释放在右侧任务、操作面板和底部步骤条。
- 交互节奏：五步依次推进“计算槽位 -> 定位主节点 -> 命中分片 -> 迁移中 ASK -> 刷新 MOVED”。
- 原创改造点：把参考拓扑图改造成可交互路由模拟器，补充 Key Tag 同槽和迁移期重定向差异。

### Screenshot Review

- 桌面：blocked `.codex-artifacts/visualizations/hash-slot/desktop.png`
- 移动端：blocked `.codex-artifacts/visualizations/hash-slot/mobile.png`
- 截图阻塞：Chrome DevTools MCP 被既有实例占用；in-app browser 返回 `Browser is not available: iab`；Playwright Chromium 和系统 Chrome/Edge 均因 macOS Mach port / crashpad 权限失败；`screencapture` 无法从 display 0 创建图片。
- 代码验收：`npm run build` 通过；`npm run test:data` 通过 4 项；`git diff --check` 通过。前端预览已启动并可访问 `http://127.0.0.1:4174/KnowledgeGraph/`。

## Run Log

### 2026-06-01 14:28 CST

- Branch/Pull：当前分支 `main`；`git pull --ff-only origin main` 成功，远端已同步。
- Concurrency Check：工作区包含 `src/data/visual-simulations/metadata.ts` 改动，内容为 MySQL 可视化清单新增 `buffer-pool`。
- Local Artifacts：`.codex-artifacts/` 中已有多张图谱截图；`test-results/.last-run.json` 存在。
- Action：本轮按并发控制停止新增找图和编码，记录现有现场。
- Resume Point：优先确认 `buffer-pool` 可视化入口是否属于上一轮待完成项；若继续该项，先补齐在线图片参考、拆图记录、模拟数据、桌面/移动截图、验证、提交和推送。

### 2026-06-01 14:54 CST

- Branch/Pull：当前分支 `main`；`git pull --ff-only origin main` 成功，远端已同步。
- Selected：继续上一轮遗留的 MySQL `buffer-pool`，原因是入口改动已存在，机制清晰且存储布局可视化收益高。
- Image Search：围绕 `InnoDB buffer pool architecture diagram`、`LRU free list flush list`、`Buffer Pool 图解` 等关键词筛选候选来源，确认 1 个官方主参考和 4 个辅助参考。
- Implementation：新增 `mysql:buffer-pool` 专用 `storage-layout` 构建器、SVG 舞台和响应式样式。
- Verification：`npm run build` 通过。
- Next Step：启动前端页面，保存桌面和移动端截图，完成最终状态记录、提交、rebase 和推送。

### 2026-06-01 15:34 CST

- Branch/Pull：当前分支 `main`；`git pull --ff-only origin main` 成功，远端已同步。
- Selected：完成 MySQL `buffer-pool` 遗留项，采用 `storage-layout` 类型。
- Screenshot Review：保存 `.codex-artifacts/visualizations/buffer-pool/desktop.png` 与 `.codex-artifacts/visualizations/buffer-pool/mobile.png`；桌面和移动端验收图均可读。
- Browser Review：Chrome DevTools MCP 恢复后进入 `http://127.0.0.1:4174/KnowledgeGraph/`，搜索 Buffer Pool、打开详情、进入模拟器并推进到第 4 步“后台刷盘”。
- Verification：`npm run build` 通过；`npm run test:data` 通过 4 项；`git diff --check` 通过。
- Next Candidate：网络层 `IP 路由` 或 Redis `hash-slot`。

### 2026-06-01 16:19 CST

- Branch/Pull：当前分支 `main`；`git pull --ff-only origin main` 成功，远端已同步。
- Selected：Redis `hash-slot`，原因是 Redis Cluster 槽位路由、Key Tag、ASK/MOVED 和 resharding 具备明确步骤、状态和排障价值。
- Image Search：围绕 `Redis Cluster hash slots diagram`、`MOVED ASK diagram`、`resharding diagram`、`Redis Cluster 图解` 筛选候选来源，确认 1 个主参考和 4 个辅助参考。
- Implementation：新增 `redis:hash-slot` 专用 `step-simulation` 构建器、SVG 舞台、响应式样式和 Redis Cluster 可视化来源。
- Screenshot Review：截图阻塞；Chromium、系统 Chrome/Edge、Chrome DevTools MCP、in-app browser 与 `screencapture` 均受当前平台权限限制。
- Verification：`npm run build` 通过；`npm run test:data` 通过 4 项；`git diff --check` 通过。
- Commit/Push：首次提交 `9c004e5 feat: add hash-slot visualization` 已推送到 `origin/main`；随后修正进度记录并 amend 为本地提交 `c1dedfc`。
- Push Blocker：`git push --force-with-lease origin main` 连续失败，原因是 `Could not resolve host: github.com`。本地 `main` 保留 amend 提交，当前相对 `origin/main` 显示 ahead 1 / behind 1。
- Resume Point：网络恢复后执行 `git push --force-with-lease origin main`；浏览器权限恢复后，进入 `http://127.0.0.1:4174/KnowledgeGraph/`，搜索 `哈希槽`，打开模拟器并保存桌面/移动截图。
- Next Candidate：网络层 `IP 路由`。
