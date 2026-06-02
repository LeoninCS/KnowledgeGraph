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
| 哈希槽 | `step-simulation` | completed | desktop/mobile captured | Redis Cluster 槽位路由模拟器，覆盖 CRC16、Key Tag、槽位归属、ASK 和 MOVED |
| 路由 | `step-simulation` | completed | desktop/mobile captured | 网络层 IP 路由逐跳模拟器，覆盖最长前缀匹配、TTL、二层重写和回程路径 |
| Service | `step-simulation` | completed | desktop/mobile captured | Kubernetes Service 数据面转发模拟器，覆盖 selector、EndpointSlice、ClusterIP/DNS、kube-proxy 规则和 Ready Pod |
| Ingress | `step-simulation` | completed | desktop/mobile captured | Kubernetes Ingress 七层入口路由模拟器，覆盖公网入口、Ingress Controller、TLS Secret、host/path 规则和 Service 后端 |
| 镜像层 | `storage-layout` | completed | desktop/mobile captured | Docker 镜像层结构模型，覆盖 Dockerfile 指令、Build Cache、只读层共享、overlay2 和可写层 |
| MVCC | `state-model` | completed | desktop/mobile captured | MySQL MVCC 版本可见性状态模型，覆盖隐藏列、Undo 版本链、ReadView、可见性判断和长事务 Purge 风险 |
| Redo Log | `state-model` | completed | desktop/mobile captured | MySQL Redo Log WAL 与恢复状态模型，覆盖 redo record、log buffer、write/fsync、checkpoint 和 crash recovery |
| Binlog | `step-simulation` | completed | desktop/mobile captured | MySQL Binlog 提交与复制通道模拟器，覆盖 GTID、Rows Event、Group Commit、Relay Log 和副本应用延迟 |
| 两阶段提交 | `state-model` | completed | desktop/mobile captured | MySQL Two Phase Commit 提交一致性状态模型，覆盖 redo prepare、Binlog Xid、redo commit 和崩溃恢复判定 |
| 死锁 | `state-model` | completed | desktop/mobile captured | MySQL Deadlock 锁等待状态模型，覆盖交叉持锁、wait-for graph 闭环、检测器、victim rollback 和重试分支 |

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
| 暂无 | 当前暂缓队列为空 | 下一轮优先进入 MySQL `Deadlock Log` 或 `SHOW ENGINE INNODB STATUS` 找图与设计 |

## Next Candidate

优先选择 MySQL `Deadlock Log` 或 `SHOW ENGINE INNODB STATUS`，它们能把本轮 Deadlock 模拟器延伸到线上排障视角，展示最新死锁段、事务信息、锁对象、SQL 文本和索引诊断。

## MySQL Deadlock Visualization

### Online Image References

- `source`：Microsoft Learn - Analyze and prevent deadlocks in Azure SQL Database，https://learn.microsoft.com/en-us/azure/azure-sql/database/analyze-prevent-deadlocks?tabs=ring-buffer&view=azuresql-db
  - `image`：页面中的 deadlock graph / process-resource-victim 可视化。
  - `role`：main
  - `qualityReason`：图形表达清楚，展示 process oval、resource rectangle、victim 标记、owner/waiter 边和死锁环，适合提炼为主构图。
  - `takeaways`：采用事务节点、资源节点、等待边、victim 选择和诊断信号的四区结构。
  - `originalChanges`：改写为 MySQL InnoDB 行锁语义，主画布使用 T1/T2、orders#42、stock#7、InnoDB Lock Table、Wait-for Graph、Detector 和 retry branch。
- `source`：MySQL 8.4 Reference Manual - Deadlock Detection，https://dev.mysql.com/doc/refman/8.4/en/innodb-deadlock-detection.html
  - `image`：页面中的 deadlock detector、wait-for graph、victim rollback 和 `innodb_deadlock_detect` 说明。
  - `role`：supporting
  - `qualityReason`：官方定义 InnoDB 自动检测死锁、选择回滚事务和 waits-for graph 搜索边界。
  - `takeaways`：加入 Detector 面板、`cycle detected` 状态和 `victim=T2` 信号。
  - `originalChanges`：把官方检测语义转成五步可交互状态模型，突出等待边闭环和回滚分支。
- `source`：MySQL 8.4 Reference Manual - How to Minimize and Handle Deadlocks，https://dev.mysql.com/doc/mysql/en/innodb-deadlocks-handling.html
  - `image`：页面中的死锁处理建议、`SHOW ENGINE INNODB STATUS` 和事务重试语义。
  - `role`：supporting
  - `qualityReason`：官方工程建议说明应用应准备重试、缩短事务、统一访问顺序、使用合适索引。
  - `takeaways`：底部信号保留 `LATEST DEADLOCK`、`retry branch`、lock wait 和索引诊断入口。
  - `originalChanges`：把文字建议压缩成底部观测信号和右侧理解重点。
- `source`：MySQL 8.4 Reference Manual - Locks Set by Different SQL Statements in InnoDB，https://dev.mysql.com/doc/refman/8.4/en/innodb-locks-set.html
  - `image`：页面中的 SQL 加锁范围、record/gap/next-key lock 语义说明。
  - `role`：supporting
  - `qualityReason`：官方解释 UPDATE、索引命中和行锁范围，是锁对象标注的权威依据。
  - `takeaways`：Lock Table 行展示 record X lock、holder/waiter 和索引相关资源。
  - `originalChanges`：主画布保留简化锁表，把详细 SQL 加锁差异放到理解重点与下一候选 Deadlock Log。
- `source`：Wait-for graph，https://en.wikipedia.org/wiki/Wait-for_graph
  - `image`：页面中的 wait-for graph 概念图与有向边解释。
  - `role`：supporting
  - `qualityReason`：经典图论表达清楚，能补足事务依赖边和环检测的抽象层。
  - `takeaways`：下方 Wait-for Graph 使用 `T1 -> T2`、`T2 -> T1` 两条弧线表达闭环。
  - `originalChanges`：采用项目统一色彩、InnoDB 锁表上下文和中文排障文案，聚焦 MySQL 事务行锁死锁。

### Reference Breakdown

- 主体布局：左侧 T1、右侧 T2、中部 InnoDB Lock Table、下方 Wait-for Graph、右下 Detector、底部 LATEST DEADLOCK / victim / lock wait / retry branch 信号。
- 视觉焦点：T1 持有 `orders#42` 等待 `stock#7`，T2 持有 `stock#7` 等待 `orders#42`，两条等待边闭合成 `T1 <-> T2`。
- 领域对象：transaction、record X lock、holder/waiter、lock wait、wait-for edge、cycle、deadlock detector、victim、rollback、idempotent retry。
- 容器层级：事务面板展示业务 SQL；Lock Table 汇总持锁和等待队列；Wait-for Graph 抽象依赖环；Detector 执行检测和 victim 选择；底部信号连接线上排障。
- 连线方向：事务请求进入锁表；锁等待转成 wait-for edge；闭环进入 Detector；Detector 触发 rollback 并释放锁。
- 状态表达：五步通过透明度、边框色、箭头、cycle badge、victim 状态和底部信号显隐表达交叉持锁、T1 等待、T2 等待、检测等待环和回滚牺牲者。
- 颜色策略：品牌蓝表示 T1，橙色表示 T2，青色表示第一条等待边，红色表示闭环和检测，绿色表示回滚释放与可重试分支。
- 文字密度：画布保留 SQL 摘要、资源名、holder/waiter 和关键状态；解释放在右侧任务、操作面板和底部步骤条。
- 交互节奏：五步依次推进“交叉持锁 -> T1 等待库存行 -> T2 等待订单行 -> 检测等待环 -> 回滚牺牲者”。
- 原创改造点：借鉴 deadlock graph 的 process/resource/victim 结构，改造成 MySQL InnoDB 锁等待状态模型，加入 `SHOW ENGINE INNODB STATUS`、lock wait、victim rollback 和 retry branch。

### Screenshot Review

- 桌面：captured `.codex-artifacts/visualizations/deadlock/desktop.png`
- 移动端：captured `.codex-artifacts/visualizations/deadlock/mobile.png`
- 截图结论：桌面画布可识别 T1/T2、InnoDB Lock Table、Wait-for Graph、Detector、rollback path 和底部诊断信号；移动端纵向摘要完整展示四个核心状态和四个排障指标。
- 验收备注：in-app browser 返回不可用；使用本地 Playwright 在 `http://127.0.0.1:4207/KnowledgeGraph/` 完成首页、分类、详情页、模拟器五步交互和桌面/移动端截图验收。

## MySQL Binlog Visualization

### Online Image References

- `source`：MySQL Reference Manual - Replication Implementation Details，https://dev.mysql.com/doc/refman/8.4/en/replication-implementation-details.html
  - `image`：页面中的异步复制结构图，展示 source 执行、写 binary log、提交、replica 读取 relay log、apply 和提交。
  - `role`：main
  - `qualityReason`：官方文档图，直接呈现 Binlog 在 source 到 replica 链路中的位置，结构清楚且对象命名权威。
  - `takeaways`：主画布采用左侧 source 提交、中间 Binlog 文件、右侧复制通道和底部 replica apply 的分层路径。
  - `originalChanges`：扩展为五步交互模拟，加入 GTID、Rows Event、file/pos、Group Commit、relay backlog 和 apply lag。
- `source`：MySQL Reference Manual - The Binary Log，https://dev.mysql.com/doc/refman/8.4/en/binary-log.html
  - `image`：页面中的 binary log 语义、恢复用途和 mysqlbinlog 上下文。
  - `role`：supporting
  - `qualityReason`：官方定义 Binlog 用于复制和按时间点恢复，适合确定右侧理解重点和底部指标。
  - `takeaways`：画布保留 binary log、file/position、事件顺序和恢复入口语言。
  - `originalChanges`：把文档语义转成 `Source file/pos` 和 `GTID event` 信号卡，减少长文本说明。
- `source`：MySQL Reference Manual - Binary Logging Formats，https://dev.mysql.com/doc/refman/8.4/en/replication-formats.html
  - `image`：页面中的 statement、row、mixed 格式说明。
  - `role`：supporting
  - `qualityReason`：官方说明 row-based logging 的行级变化语义，适合补足 `TABLE_MAP_EVENT` 与 `UPDATE_ROWS_EVENT`。
  - `takeaways`：Binlog event 区域展示 GTID、TABLE_MAP、UPDATE_ROWS、XID 四个事务边界对象。
  - `originalChanges`：用简化事件列表突出本模拟关注的一次 UPDATE，而非展开全部格式差异。
- `source`：MySQL Reference Manual - Semisynchronous Replication，https://dev.mysql.com/doc/refman/8.4/en/replication-semisync.html
  - `image`：页面中的半同步提交等待和副本确认语义。
  - `role`：supporting
  - `qualityReason`：官方解释半同步 ACK 对提交返回和复制安全性的影响，适合补充通道状态。
  - `takeaways`：复制通道面板需要表达 relay log 落盘和 ACK 返回。
  - `originalChanges`：把半同步细节压缩为 `ACK=sent`，避免把主画布改成复制模式对比。
- `source`：HackMySQL - MySQL Binary Log Group Commit，https://hackmysql.com/book-4/
  - `image`：页面中的 Binlog Group Commit 阶段图与 flush/sync/commit 队列说明。
  - `role`：supporting
  - `qualityReason`：高质量工程图解，清楚解释组提交队列、fsync 和提交延迟。
  - `takeaways`：中下部加入 `flush -> sync -> commit` 阶段条。
  - `originalChanges`：使用项目统一卡片与高亮节奏，把 Group Commit 作为第三步连接事件写入和复制传输。

### Reference Breakdown

- 主体布局：左上客户端事务，左中 Source MySQL，右上 `mysql-bin.000142` 事件文件，中下 Binlog Group Commit，右下复制通道和 Relay Log，左下 Replica SQL 线程，底部四个复制信号。
- 视觉焦点：一次 `UPDATE orders` 从 source 执行进入 Binlog 事件列表，file position 从 `154` 推进到 `328`，随后 group commit 刷盘、I/O thread 写 relay log、SQL thread 应用 GTID。
- 领域对象：client transaction、Source MySQL、Binary Log、GTID_LOG_EVENT、TABLE_MAP_EVENT、UPDATE_ROWS_EVENT、XID_EVENT、Binlog Group Commit、replication channel、relay log、Replica SQL thread、Executed_Gtid_Set。
- 容器层级：Source MySQL 负责执行与编码事件；Binary Log 负责提交顺序和 file/pos；Group Commit 负责 flush/sync/commit；Replication channel 负责 relay log 和 ACK；Replica 负责顺序应用。
- 连线方向：客户端进入 source；source 写 binlog；binlog 向下进入 group commit；binlog 同时流向复制通道；relay log 回到 replica apply。
- 状态表达：五步通过透明度、边框色、箭头和信号值显隐表达执行、编码、刷盘、传输和应用。
- 颜色策略：品牌蓝表示事务提交和通道，青色表示事件编码，橙色表示刷盘队列，绿色表示副本应用完成。
- 文字密度：画布保留事件名、file/pos、GTID 和延迟指标；解释放在右侧面板与底部步骤条。
- 交互节奏：五步依次推进“执行事务 -> 编码事件 -> 组提交刷盘 -> 传输到 Relay Log -> 副本应用”。
- 原创改造点：把官方复制结构图、Binary Log 语义、row logging、半同步 ACK 和 Group Commit 队列融合成一个可交互复制链路模拟器。

### Screenshot Review

- 桌面：captured `.codex-artifacts/visualizations/binlog/desktop.png`
- 移动端：captured `.codex-artifacts/visualizations/binlog/mobile.png`
- 截图结论：桌面画布可识别 source、binary log、group commit、relay log、replica apply 和底部信号；移动端纵向摘要完整展示五步和四个复制指标。
- 验收备注：本轮 in-app browser 返回不可用，Chrome DevTools MCP profile 被占用；使用构建产物与本地渲染截图完成视觉验收，代码验证以 `npm run build`、`npm run test:data` 和 `git diff --check` 为准。

## MySQL Two Phase Commit Visualization

### Online Image References

- `source`：小林 coding - MySQL 日志，https://xiaolincoding.com/mysql/log/how_update.html
  - `image`：页面中的 redo log、binlog、两阶段提交和崩溃点图解。
  - `role`：main
  - `qualityReason`：高传播中文图解，直接展示 redo prepare、写 Binlog、redo commit 和异常重启判定，最适合做主流程构图。
  - `takeaways`：主画布采用左到右提交时间线，并单独列出 prepare 后、Binlog 后、commit 后三个崩溃点。
  - `originalChanges`：改造为五步状态模型，加入 InnoDB 数据页、Redo Log 状态、Binlog Xid、恢复判定表和底部观测信号。
- `source`：MySQL Reference Manual - Replication Implementation Details，https://dev.mysql.com/doc/refman/8.4/en/replication-implementation-details.html
  - `image`：页面中的 source 写 binary log、replica 读取 relay log 和 apply 的复制结构图。
  - `role`：supporting
  - `qualityReason`：官方复制图说明 Binlog 是复制顺序入口，适合补足 2PC 与复制一致性的关系。
  - `takeaways`：Binlog 面板保留 GTID/Xid 与 file position，并在底部信号展示 replication order。
  - `originalChanges`：把复制链路压缩成提交顺序信号，主画布聚焦单事务提交边界。
- `source`：MySQL Reference Manual - The Binary Log，https://dev.mysql.com/doc/refman/8.4/en/binary-log.html
  - `image`：页面中的 binary log 语义、恢复用途和 mysqlbinlog 上下文。
  - `role`：supporting
  - `qualityReason`：官方定义 Binlog 用于复制和恢复，适合确定 Binlog Xid/GTID 的教学语义。
  - `takeaways`：Binlog 卡片显示 `GTID T42` 与 `Xid=42`，恢复规则使用 Xid/GTID 完整性判定。
  - `originalChanges`：只保留事务边界事件，降低画布文字密度。
- `source`：HackMySQL - MySQL Binary Log Group Commit，https://hackmysql.com/book-4/
  - `image`：页面中的 Binary Log Group Commit 阶段图，展示 flush、sync、commit 队列。
  - `role`：supporting
  - `qualityReason`：工程图解清晰表达 Binlog 刷盘和提交延迟来源，适合补充第三步等待点。
  - `takeaways`：写 Binlog 阶段标注 `flush + sync binlog`，底部信号加入 `group commit fsync`。
  - `originalChanges`：把组提交细节作为延迟信号，避免主画布变成队列内部实现。
- `source`：MySQL Reference Manual - Binary Log Transaction Dependency Tracking，https://dev.mysql.com/doc/refman/8.4/en/replication-options-binary-log.html#sysvar_binlog_transaction_dependency_tracking
  - `image`：页面中的 Binlog 事务依赖与提交顺序配置说明。
  - `role`：supporting
  - `qualityReason`：官方说明 Binlog 事务依赖跟踪和并行复制顺序，适合强化提交顺序与复制应用边界。
  - `takeaways`：底部信号保留 replication order，右侧恢复判定强调提交顺序。
  - `originalChanges`：把配置项语言转成提交顺序观测信号。

### Reference Breakdown

- 主体布局：左上客户端事务，左中 InnoDB 脏页与 undo，右上 Redo Log 状态卡，中右 Binlog 事件卡，左下提交时间线，右下崩溃恢复判定表，底部四个观测信号。
- 视觉焦点：一次 `COMMIT T42` 从数据页变更推进到 `redo PREPARE LSN=8612`，再写入 `GTID T42 / Xid=42`，最后写 `redo COMMIT LSN=8678`。
- 领域对象：Client COMMIT、InnoDB transaction、dirty page、undo before image、Redo Log prepare、Binlog GTID/Xid、Redo Log commit、crash point、recovery decision、replication order。
- 容器层级：InnoDB 管理页修改与 redo 状态；Server 层写 Binlog；恢复流程读取 redo prepare 与 Binlog 事件完整性；底部信号展示 LSN、Xid 和最终判定。
- 连线方向：客户端进入 InnoDB；InnoDB 写 redo prepare；Redo Log 推动 Binlog flush/sync；Binlog 完整后回写 redo commit；恢复扫描从 redo 回到判定表。
- 状态表达：五步通过透明度、边框色、箭头、时间线节点和崩溃判定行显隐表达执行、prepare、Binlog、commit 与恢复。
- 颜色策略：品牌蓝表示事务进入与恢复扫描，青色表示 redo prepare，橙色表示 Binlog 写入和刷盘，绿色表示 redo commit 和确定提交。
- 文字密度：画布保留对象标签、LSN、Xid、关键状态和判定短语；解释放在右侧任务、操作面板和底部步骤条。
- 交互节奏：五步依次推进“修改数据页 -> Redo Prepare -> 写入 Binlog -> Redo Commit -> 恢复判定”。
- 原创改造点：融合中文两阶段提交图、官方复制/Binlog 语义、Group Commit 和事务依赖配置，做成面向崩溃恢复与复制一致性的状态模型。

### Screenshot Review

- 桌面：captured `.codex-artifacts/visualizations/two-phase-commit/desktop.png`
- 移动端：captured `.codex-artifacts/visualizations/two-phase-commit/mobile.png`
- 截图结论：桌面画布可识别客户端事务、InnoDB、Redo Log、Binlog、提交时间线、崩溃恢复判定和底部信号；移动端纵向摘要完整展示五步和四个一致性指标。
- 验收备注：Chrome DevTools MCP profile 被占用；使用构建产物、数据测试和本地渲染截图完成视觉验收。

## MySQL Redo Log Visualization

### Online Image References

- `source`：MySQL Server Doxygen - InnoDB Redo Log，https://dev.mysql.com/doc/dev/mysql-server/latest/PAGE_INNODB_REDO_LOG.html
  - `image`：页面中的 `Architecture of writing redo log` 图，图片 URL：`https://dev.mysql.com/doc/dev/mysql-server/latest/dia_arch_writing.png`。
  - `role`：main
  - `qualityReason`：MySQL 官方工程文档图，直接展示 user threads、log buffer、log writer、log flusher、checkpointer、dirty pages 和 redo log files，是 Redo Log 写入链路的最佳主构图。
  - `takeaways`：主画布采用事务/mtr -> log buffer -> writer/flusher -> redo files -> checkpoint/recovery 的分层路径。
  - `originalChanges`：把内部架构图改造成五步状态模型，加入 LSN 区间、write_lsn/flushed_lsn、checkpoint age 和 crash replay 信号。
- `source`：MySQL Server Doxygen - InnoDB Redo Log，https://dev.mysql.com/doc/dev/mysql-server/latest/PAGE_INNODB_REDO_LOG.html
  - `image`：页面中的 `Architecture of deleting redo log files` 图，图片 URL：`https://dev.mysql.com/doc/dev/mysql-server/latest/dia_arch_deleting.png`。
  - `role`：supporting
  - `qualityReason`：官方图说明 checkpointer 与 redo 文件回收的关系，适合补足日志空间复用和 checkpoint 推进。
  - `takeaways`：底部使用 Checkpoint Ring 表达 reusable、checkpoint 和 active redo 区间。
  - `originalChanges`：把 redo 文件删除/复用流程抽象成一条 checkpoint age 进度带，减少内部线程细节。
- `source`：MySQL 8.4 Reference Manual - The InnoDB Redo Log，https://dev.mysql.com/doc/refman/8.4/en/innodb-redo-log.html
  - `image`：官方文档中的 redo log capacity、active redo log files、LSN 和配置说明。
  - `role`：supporting
  - `qualityReason`：官方用户文档定义 Redo Log、容量、写入策略和文件位置，适合做右侧任务与底部指标文案。
  - `takeaways`：画布保留 `#innodb_redo`、`current_lsn`、`flushed_lsn` 和容量压力语言。
  - `originalChanges`：用项目统一信号卡片表达可观测指标，避免把配置项堆进主画布。
- `source`：Oracle MySQL Blog - Dynamic redo log sizing，https://blogs.oracle.com/mysql/post/dynamic-innodb-redo-log-in-mysql-80
  - `image`：文章中的 redo log resize、active files 和 checkpoint 相关示意。
  - `role`：supporting
  - `qualityReason`：官方博客面向 MySQL 8.0 动态 redo 容量，补充线上容量调整和日志空间压力视角。
  - `takeaways`：Redo Log 容量、checkpoint age 和日志空间回收应一起呈现。
  - `originalChanges`：底部信号将容量主题压缩为 checkpoint age 和恢复窗口。
- `source`：小林 coding - MySQL 日志，https://xiaolincoding.com/mysql/log/how_update.html
  - `image`：页面中的 redo log、binlog、两阶段提交和 WAL 图解。
  - `role`：supporting
  - `qualityReason`：高传播中文图解，便于把 WAL、redo、崩溃恢复和两阶段提交语义转成中文教学表达。
  - `takeaways`：步骤文案突出先写 redo、提交刷盘和崩溃后重放。
  - `originalChanges`：本轮聚焦 Redo Log 单点机制，保留 Binlog 为后续 Two-Phase Commit 可视化候选。

### Reference Breakdown

- 主体布局：左上写事务和脏页，中上 mini-transaction 记录页级 diff，中下 Log Buffer，右上 redo log files，底部 Checkpoint Ring，左下 Crash Recovery。
- 视觉焦点：一次 UPDATE 先形成 `page P42 diff`，mtr 提交时预留 `LSN 8400-8540`，log writer/flusher 推进 `write_lsn` 与 `flushed_lsn`，checkpoint 释放旧区间，崩溃后从 checkpoint 扫描并重放 P42。
- 领域对象：redo record、mini-transaction、Log Buffer、LSN、log writer、log flusher、redo log files、write_lsn、flushed_lsn、checkpoint_lsn、checkpoint age、dirty page、crash recovery。
- 容器层级：Buffer Pool 脏页属于内存数据页；mini-transaction 收集 redo records；Log Buffer 按 LSN 排队；redo files 持久化日志；checkpoint 决定恢复扫描起点和日志复用边界。
- 连线方向：写事务从左到右进入 mtr；mtr 向下写入 Log Buffer；Log Buffer 向右写入 redo files；files 向下推进 checkpoint；checkpoint 向左回到 crash recovery。
- 状态表达：五步通过透明度、边框、箭头、LSN 块和信号值显隐表达记录生成、LSN 分配、刷盘、checkpoint 推进和崩溃恢复。
- 颜色策略：品牌蓝表示 redo record 生成，青色表示 LSN/log buffer，橙色表示 write/fsync，绿色表示 checkpoint 回收，红色表示 crash recovery 风险。
- 文字密度：画布保留关键字段、LSN、线程名和指标；长解释放在右侧任务、操作面板和底部步骤条。
- 交互节奏：五步依次推进“生成 redo record -> 预留 LSN 区间 -> 写入并 fsync -> 推进 checkpoint -> 崩溃后重放”。
- 原创改造点：融合官方 Doxygen 写入/删除架构图、MySQL 8.4 用户文档、动态 redo 容量博客和中文 WAL 图解，做成面向提交延迟、日志空间和崩溃恢复的状态模型。

### Screenshot Review

- 桌面：captured `.codex-artifacts/visualizations/redo-log/desktop.png`
- 移动端：captured `.codex-artifacts/visualizations/redo-log/mobile.png`
- 截图结论：桌面本地渲染图包含写事务、mini-transaction、Log Buffer、redo log files、Checkpoint Ring、Crash Recovery 和底部 LSN 指标；移动端本地渲染图采用纵向步骤摘要，UPDATE、mtr、log writer/flusher、checkpoint、crash recovery 和四个观测指标可读。
- 验收备注：Chrome DevTools MCP profile 被占用，in-app browser 返回不可用，Playwright Chromium 受 macOS Mach port 权限限制；本轮使用构建产物、数据测试、静态渲染 PNG 和代码检查完成验收。

## MySQL MVCC Visualization

### Online Image References

- `source`：SoByte - MVCC in MySQL，https://www.sobyte.net/post/2022-04/mysql-mvcc/
  - `image`：页面中的隐藏列、事务 ReadView 与 undo log 版本链示意图。
  - `role`：main
  - `qualityReason`：图中同时展示 DB_TRX_ID、DB_ROLL_PTR、ReadView 和旧版本链路，最适合转成 MVCC 可见性主构图。
  - `takeaways`：主画布采用当前聚簇记录、Undo 版本链、ReadView 面板和可见性判断表四区结构。
  - `originalChanges`：把静态版本链图改造成五步状态模型：写入当前版本、串起 Undo、创建 ReadView、沿链判断可见、观察长事务 Purge 影响。
- `source`：MySQL 8.4 Reference Manual - InnoDB Multi-Versioning，https://dev.mysql.com/doc/refman/8.4/en/innodb-multi-versioning.html
  - `image`：官方页面中的隐藏系统列、roll pointer 和 undo log 说明。
  - `role`：supporting
  - `qualityReason`：官方定义权威，明确 InnoDB 给行添加事务 ID 和 roll pointer，并用 undo log 重建旧版本。
  - `takeaways`：聚簇记录面板保留 `DB_TRX_ID` 和 `DB_ROLL_PTR`，版本节点展示 `trx_id` 与行值。
  - `originalChanges`：把官方文字定义转成可视化字段卡片和链路箭头，便于快速识别 MVCC 入口。
- `source`：MySQL 8.4 Reference Manual - Consistent Nonlocking Reads，https://dev.mysql.com/doc/refman/8.4/en/innodb-consistent-read.html
  - `image`：官方一致性非锁定读和 ReadView 语义说明。
  - `role`：supporting
  - `qualityReason`：官方解释快照读如何在事务隔离级别下读取一致快照，适合补足 ReadView 创建时机。
  - `takeaways`：ReadView 面板展示 `creator_trx_id`、`m_ids`、`up_limit_id` 和 `low_limit_id`，并在步骤中区分可重复读和读已提交。
  - `originalChanges`：把隔离级别差异压缩到右侧理解重点，主画布聚焦一次快照读的可见性路径。
- `source`：JavaGuide - InnoDB 存储引擎对 MVCC 的实现，https://javaguide.cn/database/mysql/innodb-implementation-of-mvcc.html
  - `image`：文章中的版本链、ReadView 字段与可见性规则图解。
  - `role`：supporting
  - `qualityReason`：中文资料对版本链字段和可见性判断规则拆解细，便于迁移到教学面板。
  - `takeaways`：可见性判断表使用 `v20/v19 skipped, v12 visible` 的逐行判断表达。
  - `originalChanges`：采用项目统一表格和状态高亮，减少长篇规则文字，保留工程排查信号。
- `source`：小林 coding - 事务隔离级别是怎么实现的？https://xiaolincoding.com/mysql/transaction/mvcc.html
  - `image`：页面中的 ReadView、事务 ID 和版本链图解。
  - `role`：supporting
  - `qualityReason`：中文图解传播度高，重点解释 ReadView 与隔离级别关系。
  - `takeaways`：步骤节奏强调快照创建、版本比较、旧版本回退和长事务导致历史版本保留。
  - `originalChanges`：加入 Purge 和 `history list length` 信号，把面试型图解扩展成线上排障模型。

### Reference Breakdown

- 主体布局：左上事务时间线，左下当前聚簇记录，中部 Undo 版本链，右上 ReadView 边界，右下可见性判断表，底部排障信号。
- 视觉焦点：当前行版本 `v20` 通过 `DB_ROLL_PTR=undo#19` 指向 `v19`，再指向 `v12`；ReadView 让快照读跳过新版本并返回 `v12 amount=100`。
- 领域对象：Transaction ID、DB_TRX_ID、DB_ROLL_PTR、Undo before image、版本链、ReadView、m_ids、up_limit_id、low_limit_id、consistent read、Purge、history list length。
- 容器层级：聚簇记录保存当前版本和隐藏列；Undo 存储旧版本；ReadView 保存快照边界；Purge 根据活跃快照决定历史版本释放。
- 连线方向：写入从时间线到聚簇记录；当前记录指向版本链；ReadView 从快照读创建；可见性判断从 ReadView 指向版本链；Purge 从旧版本链指向清理信号。
- 状态表达：五步通过透明度、边框、箭头和规则表值显隐表达当前版本写入、Undo 链形成、ReadView 创建、可见版本命中和长事务滞留。
- 颜色策略：红色表示当前新版本和长事务风险，青色表示 Undo 回溯，橙色表示 ReadView 快照边界，绿色表示可见版本命中，蓝色表示诊断信号。
- 文字密度：画布保留字段名、事务 ID、版本号和判断结果；细节解释放在右侧任务、操作面板和底部步骤条。
- 交互节奏：五步依次推进“写入当前版本 -> 串起 Undo 版本 -> 创建 ReadView -> 沿链判断可见 -> 观察长事务影响”。
- 原创改造点：融合官方隐藏列/一致性读定义、SoByte 版本链图、JavaGuide 和小林 coding 可见性规则，做成面向快照读和长事务排障的状态模型。

### Screenshot Review

- 桌面：captured `.codex-artifacts/visualizations/mvcc/desktop.png`
- 移动端：captured `.codex-artifacts/visualizations/mvcc/mobile.png`
- 截图结论：桌面本地渲染图包含事务时间线、聚簇记录、Undo 版本链、ReadView、可见性判断、Purge 和底部排障信号；移动端本地渲染图采用纵向流程摘要和信号卡片，文字可读且无明显溢出。
- 验收备注：Chrome DevTools MCP profile 锁定，in-app browser 返回不可用，Playwright Chromium 和系统 Chrome/Edge 受 macOS Mach port 或平台权限限制；本轮使用构建产物、数据测试、静态渲染 PNG 和代码检查完成验收。

## Docker Image Layer Visualization

### Online Image References

- `source`：Docker Docs - Understanding image layers，https://docs.docker.com/get-started/docker-concepts/building-images/understanding-image-layers/
  - `image`：页面中的 `Container layers` 图，图片 URL：`https://docs.docker.com/get-started/docker-concepts/building-images/images/container-layers.webp`。
  - `role`：main
  - `qualityReason`：Docker 官方教学图，直接展示容器可写层位于只读镜像层之上，是表达镜像层和容器层关系的最佳主构图。
  - `takeaways`：主画布采用垂直 layer stack，中间突出 base/deps/app 只读层，上方放置容器 upperdir。
  - `originalChanges`：把静态上下层结构扩展为五步模型：指令生成 diff、缓存命中、共享只读层、overlay2 合并、写时复制与 whiteout 排障。
- `source`：Docker Docs - Understanding image layers，https://docs.docker.com/get-started/docker-concepts/building-images/understanding-image-layers/
  - `image`：页面中的 `Sharing layers` 图，图片 URL：`https://docs.docker.com/get-started/docker-concepts/building-images/images/sharing-layers.webp`。
  - `role`：supporting
  - `qualityReason`：官方图清晰表达多个容器共享同一批只读镜像层，各自拥有独立可写层。
  - `takeaways`：画布右上展示 container A/B 同时引用 same lowerdir，并用独立 upperdir 表达运行期差异。
  - `originalChanges`：用信号面板加入 `system df shared`，把共享层从概念图扩展到磁盘占用排查。
- `source`：Docker Docs - OverlayFS storage driver，https://docs.docker.com/engine/storage/drivers/overlayfs-driver/
  - `image`：页面中的 `How Docker constructs map to OverlayFS constructs` 图，图片 URL：`https://docs.docker.com/engine/storage/drivers/images/overlay_constructs.webp`。
  - `role`：supporting
  - `qualityReason`：官方图把 image layer、container layer、lowerdir、upperdir、workdir 和 merged 映射到 OverlayFS 术语。
  - `takeaways`：右下 overlay2 面板列出 lowerdir、upperdir、merged 三行，并用箭头表示容器进程看到 merged rootfs。
  - `originalChanges`：把驱动术语压缩到可读表格，同时保留 copy-on-write 路径和 whiteout 信号。
- `source`：Docker Docs - Build cache，https://docs.docker.com/build/cache/
  - `image`：页面中的构建缓存层级图和说明，展示缓存如何按指令与上下文匹配。
  - `role`：supporting
  - `qualityReason`：官方构建缓存资料适合解释层顺序、依赖层复用和源码变化导致局部重建。
  - `takeaways`：左下 Build Cache 面板展示 base/deps HIT、src MISS；路径连接 Dockerfile 与层栈。
  - `originalChanges`：用 package lock unchanged 与 COPY src 触发重建表达真实工程优化点。
- `source`：OCI Image Specification，https://github.com/opencontainers/image-spec/blob/main/spec.md
  - `image`：规范中的 image manifest、config、layers 结构说明。
  - `role`：supporting
  - `qualityReason`：OCI 规范补充镜像 manifest/config/layers 结构，便于把 Docker layer 放入标准镜像模型。
  - `takeaways`：只读层栈标题加入 `RootFS layers + config history`，底部信号展示 `inspect RootFS layers=4`。
  - `originalChanges`：保持 UI 聚焦层存储布局，把规范术语作为排障信号辅助呈现。

### Reference Breakdown

- 主体布局：左侧 Dockerfile 和 Build Cache，中间只读镜像层栈，右上两个容器共享层，右下 overlay2 面板，底部排障信号。
- 视觉焦点：层栈从 base、apt libs、npm deps 到 app src 逐层叠加；共享箭头指向 container A/B；overlay2 把 lowerdir 与 upperdir 合并为 merged rootfs。
- 领域对象：Dockerfile、build context、layer diff、Build Cache、read-only layers、RootFS、lowerdir、upperdir、workdir、merged、container writable layer、copy-on-write、whiteout、docker history。
- 容器层级：Dockerfile 指令产生 diff；layer stack 作为镜像不可变层；多个容器引用同一 lower layers；upperdir 保存容器差异；merged 暴露给容器进程。
- 连线方向：Dockerfile 指令进入层栈；缓存路径回到依赖层；只读层共享给两个容器；层栈和 upperdir 一起进入 overlay2；copy-on-write 从容器写入回到 upperdir。
- 状态表达：五步通过 `completedSteps` 控制 Dockerfile 行、缓存 HIT/MISS、共享箭头、overlay2 表格、copy-on-write 虚线和诊断信号显隐。
- 颜色策略：品牌蓝表示层 diff，青色表示 Build Cache，绿色表示共享层，橙色表示 overlay2 合并，红色表示写入与排障风险。
- 文字密度：画布保留指令、层名、大小、lowerdir/upperdir/merged 和排障命令；解释放到右侧任务、操作面板和底部进度。
- 交互节奏：五步依次推进“生成层差异 -> 命中构建缓存 -> 共享只读层 -> 合并文件系统 -> 写入与排障”。
- 原创改造点：融合 Docker 官方 layer 图、sharing 图、OverlayFS 映射图、Build Cache 说明和 OCI 结构，做成面向构建优化与磁盘排障的存储布局模拟器。

### Screenshot Review

- 桌面：captured `.codex-artifacts/visualizations/image-layer/desktop.png`
- 移动端：captured `.codex-artifacts/visualizations/image-layer/mobile.png`
- 截图结论：桌面本地渲染图包含 Dockerfile、Build Cache、只读层栈、container A/B、overlay2 和底部排障信号；移动端本地渲染图采用纵向层级摘要和信号卡片，文字可读且无明显溢出。
- 验收备注：in-app browser 返回不可用，Chrome DevTools MCP profile 锁定，Playwright Chromium 受 macOS Mach port 权限限制；本轮使用构建产物、数据测试、静态渲染 PNG 和代码检查完成验收。

## Kubernetes Ingress Visualization

### Online Image References

- `source`：Kubernetes Docs - Ingress，https://kubernetes.io/docs/concepts/services-networking/ingress/
  - `image`：页面中的 `Ingress` 官方 SVG 图，图片 URL：`https://kubernetes.io/docs/images/ingress.svg`。
  - `role`：main
  - `qualityReason`：官方概念图直接展示外部客户端、Ingress、Service 和 Pod 的入口关系，且页面同时覆盖 host/path、TLS、defaultBackend 和规则字段。
  - `takeaways`：主画布采用左到右的外部请求 -> 公网入口 -> Ingress Controller -> Service backend 路径，保留 Ingress rules 作为核心决策面板。
  - `originalChanges`：把官方静态入口图扩展为五步模拟：ADDRESS/DNS、Controller 同步、TLS Secret、host/path 匹配、Service 后端健康。
- `source`：Kubernetes Docs - Ingress Controllers，https://kubernetes.io/docs/concepts/services-networking/ingress-controllers/
  - `image`：页面中的控制器列表和 `ingressClassName` 说明。
  - `role`：supporting
  - `qualityReason`：官方明确 Ingress 需要控制器落地，并说明多控制器和 IngressClass 选择。
  - `takeaways`：模拟器把 `ingressClassName=nginx` 放入控制器同步阶段，强调资源只有被正确控制器接管后才会生效。
  - `originalChanges`：用右侧任务和画布资源缓存表达多控制器选择，把 Ingress 放入入口控制链路讲解。
- `source`：NGINX Docs - The design of NGINX Ingress Controller，https://docs.nginx.com/nginx-ingress-controller/overview/design/
  - `image`：页面中的 `ic-high-level.png`、`ic-pod.png`、`control-loop.png` 和 `controller-sync.png`。
  - `role`：supporting
  - `qualityReason`：图像分辨率高，覆盖公网入口、Kubernetes API、Ingress Controller pod、NGINX worker、control loop、config reload 和 TLS Secret 文件同步。
  - `takeaways`：在模拟器中加入 Controller 资源缓存、配置版本、worker reload、TLS Secret 加载和 Events 信号。
  - `originalChanges`：把 NGINX 内部设计抽象成通用 Ingress Controller 模型，兼容 NGINX、Envoy 和云 ALB 语义。
- `source`：Ingress-NGINX Controller - How it works，https://kubernetes.github.io/ingress-nginx/how-it-works/
  - `image`：页面中的 NGINX model、workqueue、reload 条件和 endpoint 变化说明。
  - `role`：supporting
  - `qualityReason`：解释控制器如何用 Informer、workqueue 和模型比较生成 NGINX 配置，适合补足动态同步机制。
  - `takeaways`：资源缓存面板列出 Ingress、TLS Secret、EndpointSlice，并展示 `Informer + workqueue`。
  - `originalChanges`：把模型构建和 reload 条件浓缩为一步“同步规则”，突出线上排查可观察信号。
- `source`：Amazon EKS - Route application and HTTP traffic with Application Load Balancers，https://docs.aws.amazon.com/eks/latest/userguide/alb-ingress.html
  - `image`：页面中的 AWS ALB Ingress 示例、L7/L4 对比、target type、IngressGroup 和 `kubectl get ingress` 输出。
  - `role`：supporting
  - `qualityReason`：生产环境常见云入口实现，补充 ADDRESS、ALB、instance/IP targets、IngressGroup 和 controller logs 等工程信号。
  - `takeaways`：诊断面板加入 ADDRESS、Events、TLS、Upstream，并把 502/503 与 Service、EndpointSlice、readiness 关联。
  - `originalChanges`：把云厂商实现抽象成“公网入口 / LB”对象，主线保持 Kubernetes 通用 Ingress 机制。
- `source`：AWS Load Balancer Controller - Ingress specification，https://kubernetes-sigs.github.io/aws-load-balancer-controller/latest/guide/ingress/spec/
  - `image`：页面中的 Ingress manifest、host、pathType、backend service 和规则排序说明。
  - `role`：supporting
  - `qualityReason`：明确 Exact、Prefix、ImplementationSpecific 的排序和后端 service 约束，适合补充 host/path 规则表。
  - `takeaways`：规则表展示 host、path、pathType 和 backend 四列，把 `/api Prefix -> cart-svc:80` 作为选中行。
  - `originalChanges`：采用项目统一表格和状态高亮表达规则优先级，把 manifest 字段转成可交互决策模型。

### Reference Breakdown

- 主体布局：左侧外部客户端，中部公网入口 / LB 与 Ingress Controller，底部 Host/Path 规则和资源缓存，右侧 Service 后端和排障信号。
- 视觉焦点：外部 HTTPS 请求从 `shop.example.com` 进入 ADDRESS，经 Controller 同步配置和 TLS Secret，命中 `/api` 规则后代理到 `cart-svc` Ready Pod。
- 领域对象：Client、DNS/ADDRESS、LoadBalancer/NodePort、Ingress Controller、IngressClass、TLS Secret、Host、Path、pathType、defaultBackend、Service、EndpointSlice、Pod readiness、Events、reload。
- 容器层级：公网入口承接外部连接；控制器监听 Kubernetes API 并生成代理配置；规则表做七层决策；Service 后端承接实际业务流量。
- 连线方向：外部请求左到右；资源同步从 Controller 指向资源缓存；TLS 弧线回到 Controller；规则命中从 Controller 指向 Host/Path 表，再转向 Service 后端。
- 状态表达：五步通过透明度、边框、箭头、规则行和诊断值显隐表达入口就绪、配置同步、TLS 终止、路由匹配和后端转发。
- 颜色策略：品牌蓝表示公网入口和 DNS，橙色表示控制器同步与 reload，青色表示 TLS，绿色表示规则命中，红色表示 502/503 和后端健康风险。
- 文字密度：画布保留 Host、Path、pathType、Service、ADDRESS、Events 和 Upstream；详细解释放在右侧任务、操作面板和底部步骤条。
- 交互节奏：五步依次推进“暴露入口 -> 同步规则 -> 终止 TLS -> 匹配路由 -> 转发后端”。
- 原创改造点：融合官方 Ingress 概念图、NGINX Controller 内部设计、ingress-nginx 同步模型和 AWS ALB 生产信号，做成通用七层入口排障模拟器。

### Screenshot Review

- 桌面：captured `.codex-artifacts/visualizations/ingress/desktop.png`
- 移动端：captured `.codex-artifacts/visualizations/ingress/mobile.png`
- 截图结论：Chrome DevTools MCP 进入 Kubernetes `Ingress` 详情页和模拟器，推进到第 5 步“转发后端”；桌面主画布、右侧任务面板和底部五步进度清晰可读；移动端切换为纵向摘要，ADDRESS、Controller、TLS、Rule、Backend 和诊断信号完整。
- 验收备注：桌面截图尺寸 2880 x 1882，移动端截图尺寸 1000 x 4728；`npm run build`、`npm run test:data` 和 `git diff --check` 均通过。

## Kubernetes Service Visualization

### Online Image References

- `source`：Kubernetes Docs - Virtual IPs and Service Proxies，https://kubernetes.io/docs/reference/networking/virtual-ips/
  - `image`：页面中的 `Virtual IP mechanism for Services, using iptables mode` SVG 图，图片 URL：`https://kubernetes.io/images/docs/services-iptables-overview.svg`。
  - `role`：main
  - `qualityReason`：官方图直接展示 Service 虚拟 IP、kube-proxy、iptables 转发规则和后端 endpoint，是 Service 数据面构图的权威主参考。
  - `takeaways`：主画布采用左侧客户端和 Service，中心 kube-proxy 规则，右侧后端 Pod 的横向流量路径。
  - `originalChanges`：把官方静态 iptables 图扩展为五步交互：selector 匹配、ClusterIP/DNS、规则同步、DNAT 转发、排障信号。
- `source`：Kubernetes Docs - Service，https://kubernetes.io/docs/concepts/services-networking/service/
  - `image`：Service 概念页中的 selector、port、targetPort、ClusterIP 和后端 Pod 说明。
  - `role`：supporting
  - `qualityReason`：官方概念页覆盖 Service API 字段和稳定入口语义，适合补充右侧任务文案和画布标签。
  - `takeaways`：画布明确写出 `port 80 -> targetPort 8080`，并把 DNS/ClusterIP 作为稳定入口。
  - `originalChanges`：用项目统一表格和高亮表达 port/targetPort 映射，降低字段理解门槛。
- `source`：Kubernetes Docs - EndpointSlices，https://kubernetes.io/docs/concepts/services-networking/endpoint-slices/
  - `image`：EndpointSlice 文档中的可扩展 endpoint 集合、地址类型、条件和服务关联说明。
  - `role`：supporting
  - `qualityReason`：官方解释 EndpointSlice 如何发布后端地址和就绪状态，补齐 selector 到转发目标之间的资源模型。
  - `takeaways`：画布加入 EndpointSlice 面板，列出两个 Ready endpoint 和一个 NotReady endpoint。
  - `originalChanges`：把 EndpointSlice 从背景资源提升为模拟器中间层，连接控制面对象和数据面规则。
- `source`：The Kubernetes Networking Guide - ClusterIP，https://www.tkng.io/services/clusterip/
  - `image`：ClusterIP 章节中的 Service 5 行 YAML 到控制面/数据面状态扩展的讲解结构。
  - `role`：supporting
  - `qualityReason`：工程化讲解强调一个简短 Service YAML 会在所有节点生成数据面状态，适合表达 kube-proxy 每节点同步。
  - `takeaways`：把 `control loop sync rules` 放在 kube-proxy 与 EndpointSlice 之间，突出 Watch 和同步成本。
  - `originalChanges`：右侧排障信号同时展示 endpoints、NetworkPolicy、sessionAffinity，把教程型说明改造成线上排查面板。

### Reference Breakdown

- 主体布局：左侧集群内客户端，中部 Service 和 EndpointSlice，中心 kube-proxy 节点规则，右侧后端工作负载 Pod，左下排障信号。
- 视觉焦点：访问路径从 DNS/ClusterIP 进入 Service，经 kube-proxy 同步规则和 DNAT，最终落到 Ready Pod B；回程与策略信号用红色虚线强调。
- 领域对象：Service selector、ClusterIP、DNS、EndpointSlice、Ready/NotReady endpoint、kube-proxy、iptables/nftables/IPVS、DNAT、targetPort、NetworkPolicy、sessionAffinity。
- 容器层级：Service 提供稳定入口；EndpointSlice 发布后端集合；kube-proxy 在节点上维护规则；Pod 是真实业务终点。
- 连线方向：selector 到 EndpointSlice，客户端到 Service，EndpointSlice/Service 到 kube-proxy，kube-proxy 到 Pod，Pod 到排障信号。
- 状态表达：每一步通过透明度、边框、箭头和规则面板值显隐表达控制面对象和数据面路径的推进。
- 颜色策略：品牌蓝表示稳定入口，青色表示 DNS/ClusterIP，橙色表示规则同步，绿色表示 Ready endpoint 转发，红色表示策略和异常观察。
- 文字密度：画布保留 Service 字段、endpoint 地址、规则名和排障读数；概念解释放在右侧任务、操作面板和底部步骤条。
- 交互节奏：五步依次推进“匹配后端 -> 稳定入口 -> 同步规则 -> 转发到 Pod -> 观察异常”。
- 原创改造点：融合官方虚拟 IP 图、EndpointSlice 资源模型和 TKNG 控制面/数据面视角，做成可操作的 Service 排障模拟器。

### Screenshot Review

- 桌面：captured `.codex-artifacts/visualizations/service/desktop.png`
- 移动端：captured `.codex-artifacts/visualizations/service/mobile.png`
- 截图结论：本地 Playwright 进入 Kubernetes `Service` 详情页和模拟器，推进到第 5 步“观察异常”；桌面截图包含 Service、EndpointSlice、kube-proxy、后端 Pod、排障信号、右侧任务面板和底部五步进度；移动端采用纵向摘要，Service、EndpointSlice、kube-proxy、Pod 和排障读数完整可读。
- 代码验收：`npm run build` 通过；`npm run test:data` 通过 4 项；`git diff --check` 通过；截图文件尺寸为 desktop `2880 x 1880`、mobile `1000 x 4392`。

## IP Routing Visualization

### Online Image References

- `source`：NetworkLessons - IP Routing Explained，https://networklessons.com/cisco/ccna-200-301/ip-routing-explained
  - `image`：页面中的 `two hosts two routers ip mac addresses` 拓扑图，以及 H1->R1、R1->R2、R2->H2 的以太网帧示意图。
  - `role`：main
  - `qualityReason`：图中同时展示两台主机、两台路由器、每段 IP/MAC 地址和逐跳封装变化，最适合转换成教学模拟器主舞台。
  - `takeaways`：采用 H1、R1、R2、H2 的横向路径；每一跳突出 IP 目的地址保持不变、MAC 目的地址随下一跳变化、TTL 递减和 ARP 查下一跳 MAC。
  - `originalChanges`：把静态拓扑扩展为五步交互：主机选网关、最长前缀匹配、TTL 递减、二层头重写、回程路径验证。
- `source`：NetworkLessons - Longest Prefix Match Routing，https://networklessons.com/cisco/ccna-200-301/longest-prefix-match-routing
  - `image`：页面中的 `Four Routers With Switch Middle` 拓扑图、二进制前缀匹配表和 Cisco `show ip route` 输出。
  - `role`：supporting
  - `qualityReason`：清晰表达多个前缀同时命中时选择最长前缀，例如 `/29` 优先于 `/27` 和 `/24`。
  - `takeaways`：右下路由表面板列出 `192.168.2.80/29`、`192.168.2.64/27`、`192.168.2.0/24` 和默认路由，并高亮最具体命中。
  - `originalChanges`：用项目统一表格、颜色和步骤高亮表达 LPM，形成独立于 Cisco 输出的教学样式。
- `source`：AWS VPC - How route priority works，https://docs.aws.amazon.com/vpc/latest/userguide/route-tables-priority.html
  - `image`：页面中的 VPC route table 示例表，覆盖 destination、target、local route、0.0.0.0/0 和更具体前缀。
  - `role`：supporting
  - `qualityReason`：官方文档直接说明最长前缀匹配和重叠路由优先级，工程排查价值高。
  - `takeaways`：把 `destination -> target` 概念放进路由表面板，并把默认路由作为兜底路径。
  - `originalChanges`：用传统路由器路径结合云路由 target 语言，让模拟器同时服务主机网络和 VPC 排障。
- `source`：AWS VPC - Example routing options，https://docs.aws.amazon.com/vpc/latest/userguide/route-table-options.html
  - `image`：页面中的 internet gateway、NAT、peering、middlebox appliance 路由表和中间设备路径图。
  - `role`：supporting
  - `qualityReason`：覆盖生产环境常见 target 类型和中间设备场景，可补足回程、NAT 和安全设备排查语言。
  - `takeaways`：右侧排障信号加入 `return path`，强调去程和回程都要检查。
  - `originalChanges`：聚焦“target/回程/安全策略”作为可迁移排查概念，画面保持在逐跳路由主线。
- `source`：Cloudflare Learning Center - What is routing? | IP routing，https://www.cloudflare.com/en-ca/learning/network-layer/what-is-routing/
  - `image`：页面中的 `ip routing diagram`，展示 Computer A 到 Computer B 的多网络候选路径。
  - `role`：supporting
  - `qualityReason`：高层路径选择图直观，适合补充“路由是在多条网络路径中选择转发方向”的整体心智模型。
  - `takeaways`：主画布顶部用路径箭头表达从源到目的的跨网络选择。
  - `originalChanges`：把高层路径选择下沉到可操作的逐跳路由表、TTL 和 MAC 重写机制。

### Reference Breakdown

- 主体布局：左侧源主机 H1，中间 R1 与 R2，右侧目标 H2；底部是 R1 路由表；顶部和右侧是 TTL、traceroute/ICMP 和回程检查信号。
- 视觉焦点：路径箭头从 H1 到 R1，再经 R1 路由表命中 `/29`，转发到 R2，最终到 H2；回程用红色虚线弧线表达。
- 领域对象：源主机、默认网关、路由表、CIDR 前缀、最长前缀匹配、下一跳、TTL、IPv4 头部校验、ARP、二层帧、回程路由、ICMP。
- 容器层级：三个网段背景分别表示 LAN A、Transit、LAN B；设备节点位于各自网段中；路由表和排障信号独立面板化。
- 连线方向：去程为左到右实线；LPM 从 R1 指向路由表；TTL 从 R1 指向 IP Header；回程为右到左红色虚线。
- 状态表达：每一步通过 `completedSteps` 控制设备、路径、路由表命中行、TTL 面板、二层重写和回程信号显隐。
- 颜色策略：品牌蓝表示主机到网关，青色表示 LPM，橙色表示 TTL/ICMP，绿色表示成功转发，红色表示回程/风险信号。
- 文字密度：画布保留 IP、MAC、CIDR、next hop、TTL 和排障命令；长解释放在右侧任务与理解重点。
- 交互节奏：五步依次推进“判断下一跳 -> 最长前缀匹配 -> 递减 TTL -> 重写二层头 -> 验证回程”。
- 原创改造点：把传统 H1-R1-R2-H2 静态图和云路由表优先级融合成可交互逐跳模拟器，强调主机、路由器和云网络共同适用的排障路径。

### Screenshot Review

- 桌面：captured `.codex-artifacts/visualizations/routing/desktop.png`
- 移动端：captured `.codex-artifacts/visualizations/routing/mobile.png`
- 截图结论：Chrome DevTools MCP 进入 `路由` 详情页和模拟器，推进到第 5 步“验证回程”；桌面截图包含完整 H1/R1/R2/H2 拓扑、路由表、TTL、排障信号、右侧任务面板和底部五步进度；移动端采用纵向路径摘要，H1/R1/R2/H2、最长前缀、TTL、二层头和回程读数完整可读。
- 代码验收：`npm run build` 通过；`npm run test:data` 通过 4 项；截图文件尺寸为 desktop `2880 x 1882`、mobile `1000 x 4748`。

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

- 桌面：captured `.codex-artifacts/visualizations/hash-slot/desktop.png`
- 移动端：captured `.codex-artifacts/visualizations/hash-slot/mobile.png`
- 截图结论：Chrome DevTools MCP 已恢复；从搜索进入 `哈希槽` 详情页，再进入模拟器并推进到第 5 步“刷新 MOVED”；桌面截图包含主画布、右侧当前任务/操作面板/理解重点和底部五步进度；移动端截图可读，核心画布和面板纵向排列完整。
- 代码验收：`npm run build` 通过；`npm run test:data` 通过 4 项；`git diff --check` 通过。前端预览可访问 `http://127.0.0.1:4174/KnowledgeGraph/`。

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

### 2026-06-01 17:02 CST

- Branch/Pull：当前分支 `main`；`git pull --ff-only origin main` 中止，原因是本地 `main` 与 `origin/main` 已分叉。
- Divergence：本地独有提交为 `444f74f feat: add hash-slot visualization`；远端独有提交为 `9c004e5 feat: add hash-slot visualization`；两者来自同一哈希槽可视化提交链的 amend 差异。
- Working Tree：仅有未跟踪验收产物 `.codex-artifacts/` 和 `test-results/`。
- Action：本轮按同步门禁停止新增找图、设计和编码，保留本地现场。
- Resume Point：下一轮先处理哈希槽提交分叉，可执行 `git push --force-with-lease origin main` 完成 amend 版本推送；浏览器权限恢复后补齐哈希槽桌面与移动截图。

### 2026-06-01 18:03 CST

- Branch/Pull：当前分支 `main`；`git pull --ff-only origin main` 仍中止，原因是本地 `main` 与 `origin/main` 已分叉。
- Divergence：本地独有提交为 `444f74f feat: add hash-slot visualization`；远端独有提交为 `9c004e5 feat: add hash-slot visualization`；代码文件一致，差异集中在进度文档 6 行记录。
- Push Attempt：执行 `git push --force-with-lease origin main`，失败原因是 `Could not resolve host: github.com`。
- Working Tree：`docs/visualization-progress.md` 保留本轮记录；`.codex-artifacts/` 和 `test-results/` 仍为本地验收产物。
- Action：本轮按同步门禁停止新增找图、设计和编码，保留本地 `hash-slot` amend 提交。
- Resume Point：DNS 恢复后先执行 `git push --force-with-lease origin main`；推送成功后补齐哈希槽浏览器截图，再进入网络层 `IP 路由` 候选。

### 2026-06-01 18:20 CST

- Fix：DNS 已恢复，执行 `git push --force-with-lease origin main` 成功，将远端 `main` 从 `9c004e5` 更新到本地 `444f74f`。
- Pull Gate：随后执行 `git pull --ff-only origin main`，结果为 `Already up to date`。
- Workspace Hygiene：新增 `.gitignore` 规则忽略 `.codex-artifacts/` 和 `test-results/`，避免本地验收产物持续触发并发控制。
- Result：下一轮自动化可从同步后的 `main` 继续，优先补齐哈希槽截图；浏览器仍受限时进入网络层 `IP 路由` 候选。

### 2026-06-01 18:27 CST

- Branch/Pull：当前分支 `main`；`git pull --ff-only origin main` 成功，远端已同步。
- Screenshot Review：Chrome DevTools MCP 恢复，打开 `http://127.0.0.1:4174/KnowledgeGraph/`，搜索 `哈希槽`，进入详情和模拟器，推进到第 5 步“刷新 MOVED”。
- Artifacts：保存 `.codex-artifacts/visualizations/hash-slot/desktop.png` 和 `.codex-artifacts/visualizations/hash-slot/mobile.png`；截图为本地验收产物。
- Verification：`npm run build` 通过；`npm run test:data` 通过 4 项。
- Action：将哈希槽状态更新为 completed，清空暂缓截图项。
- Next Candidate：网络层 `IP 路由`。

### 2026-06-01 19:02 CST

- Branch/Pull：当前分支 `main`；`git pull --ff-only origin main` 成功，远端已同步。
- Selected：网络层 `路由`，原因是最长前缀匹配、下一跳、TTL、二层头重写和回程路径具备清晰步骤与排障价值。
- Image Search：围绕 `IP routing explained diagram`、`longest prefix match routing`、`AWS VPC route priority`、`route table target diagram`、`IP routing 图解` 筛选 12 个候选来源，确认 1 个主参考和 4 个辅助参考。
- Implementation：新增 `network:routing` 专用 `step-simulation` 构建器、IP 路由 SVG 舞台、移动端纵向路径摘要、响应式样式和 5 个路由可视化来源。
- Screenshot Review：保存 `.codex-artifacts/visualizations/routing/desktop.png` 与 `.codex-artifacts/visualizations/routing/mobile.png`；桌面和移动端验收图均可读。
- Verification：`npm run build` 通过；`npm run test:data` 通过 4 项。
- Next Candidate：Kubernetes `Service`。

### 2026-06-01 19:40 CST

- Branch/Pull：当前分支 `main`；`git pull --ff-only origin main` 成功，远端已同步。
- Selected：Kubernetes `Service`，原因是 selector、EndpointSlice、ClusterIP/DNS、kube-proxy 和 Ready Pod 形成清晰控制面到数据面的转发链路。
- Image Search：围绕 `Kubernetes Service EndpointSlice kube-proxy diagram`、`ClusterIP traffic flow diagram`、`Service virtual IP iptables diagram` 筛选候选来源，确认 1 个官方主参考和 3 个辅助参考。
- Implementation：新增 `kubernetes:service` 专用 `step-simulation` 构建器、Service SVG 舞台、移动端纵向摘要、响应式样式和 3 个 Kubernetes 可视化来源。
- Screenshot Review：保存 `.codex-artifacts/visualizations/service/desktop.png` 与 `.codex-artifacts/visualizations/service/mobile.png`；桌面和移动端验收图均可读。
- Verification：`npm run build` 通过；`npm run test:data` 通过 4 项；`git diff --check` 通过。
- Browser Note：Chrome DevTools MCP profile 锁定，in-app browser 返回不可用；本轮使用本地 Playwright 完成页面交互和截图验收。
- Next Candidate：Kubernetes `Ingress`。

### 2026-06-01 20:01 CST

- Branch/Pull：当前分支 `main`；`git pull --ff-only origin main` 失败，原因是 `Could not resolve host: github.com`。
- Action：本轮停在同步门禁，未进入找图、拆图、编码和验证环节。
- Working Tree：开始时仓库保持上一轮提交状态，未发现需要接管的可视化现场。
- Resume Point：下一轮先重试 `git pull --ff-only origin main`；同步成功后继续 Kubernetes `Ingress` 找图与设计。

### 2026-06-01 21:30 CST

- Branch/Pull：当前分支 `main`；`git pull --ff-only origin main` 成功。
- Selected：Kubernetes `Ingress`，原因是七层入口、控制器同步、TLS、Host/Path 规则和 Service 后端共同构成清晰的生产排障路径。
- Candidate Sources：普通搜索和浏览器视觉确认筛选约 14 个候选来源，保留 1 张主参考图和 5 个辅助参考来源。
- Main Reference：Kubernetes Docs - Ingress，主图为 `https://kubernetes.io/docs/images/ingress.svg`。
- Supporting References：Kubernetes Ingress Controllers、NGINX Ingress Controller design、Ingress-NGINX How it works、Amazon EKS ALB Ingress、AWS Load Balancer Controller Ingress specification。
- Reference Breakdown：采用左到右入口流量路径，底部规则/资源缓存做七层决策面板，右侧 Service 后端和 502/503 诊断信号表达线上排查重点。
- Implementation：新增 `kubernetes:ingress` 专用 `step-simulation` 构建器、Ingress SVG 舞台、移动端纵向摘要、响应式样式和 6 个 Kubernetes Ingress 来源。
- Screenshot Review：保存 `.codex-artifacts/visualizations/ingress/desktop.png` 与 `.codex-artifacts/visualizations/ingress/mobile.png`；桌面和移动端验收图均可读。
- Verification：`npm run build` 通过；`npm run test:data` 通过 4 项；`git diff --check` 通过。
- Browser Note：Chrome DevTools MCP 完成页面搜索、详情页进入、五步交互和桌面/移动截图验收。
- Next Candidate：Docker `镜像层` 或 MySQL `MVCC`。

### 2026-06-01 22:10 CST

- Branch/Pull：当前分支 `main`；`git pull --ff-only origin main` 成功。
- Selected：Docker `镜像层`，原因是只读层栈、构建缓存、共享 layer、overlay2 和容器可写层具有清晰结构和工程排障价值。
- Candidate Sources：普通搜索筛选约 12 个候选来源，保留 Docker 官方 `Understanding image layers` 主参考图和 4 个辅助参考来源。
- Browser Note：in-app browser 返回不可用，Chrome DevTools MCP profile 锁定；本轮使用 Docker 官方图片 URL、页面上下文和搜索结果完成参考确认。
- Main Reference：Docker Docs - Understanding image layers，主图为 `container-layers.webp`。
- Supporting References：Docker `sharing-layers.webp`、OverlayFS `overlay_constructs.webp`、Docker Build cache、OCI Image Specification。
- Reference Breakdown：采用左侧构建输入、中间只读层栈、右侧共享容器与 overlay2、底部排障信号的存储布局。
- Implementation：新增 `docker:image-layer` 专用 `storage-layout` 构建器、Docker 镜像层 SVG 舞台、移动端纵向摘要、响应式样式和进度记录。
- Screenshot Review：保存 `.codex-artifacts/visualizations/image-layer/desktop.png` 与 `.codex-artifacts/visualizations/image-layer/mobile.png`；截图为本地渲染验收图。
- Verification：`npm run build` 通过；`npm run test:data` 通过 4 项；`git diff --check` 通过。
- Next Candidate：MySQL `MVCC`。

### 2026-06-01 23:23 CST

- Branch/Pull：当前分支 `main`；`git pull --ff-only origin main` 成功。
- Selected：MySQL `MVCC`，原因是隐藏列、Undo 版本链、ReadView 可见性和长事务 Purge 风险形成清晰状态模型。
- Candidate Sources：普通搜索筛选约 12 个候选来源，保留 SoByte MVCC 版本链图为主参考，MySQL 官方 Multi-Versioning、Consistent Nonlocking Reads、Undo Logs、JavaGuide 和小林 coding 为辅助来源。
- Browser Note：Chrome DevTools MCP profile 锁定，in-app browser 返回不可用，Playwright Chromium 与系统 Chrome/Edge 受 macOS Mach port 或平台权限限制；本轮使用页面 URL、搜索结果、官方资料和本地渲染图完成参考确认与截图验收。
- Main Reference：SoByte - MVCC in MySQL，主图为页面中的隐藏列、事务 ReadView 和 undo log 版本链图。
- Supporting References：MySQL InnoDB Multi-Versioning、Consistent Nonlocking Reads、Undo Logs、JavaGuide InnoDB MVCC、小林 coding MVCC。
- Reference Breakdown：采用左上事务时间线、左下聚簇记录、中部版本链、右上 ReadView、右下可见性判断和底部排障信号。
- Implementation：新增 `mysql:mvcc` 专用 `state-model` 构建器、MVCC SVG 舞台、移动端纵向摘要、响应式样式和 MVCC 专用来源。
- Screenshot Review：保存 `.codex-artifacts/visualizations/mvcc/desktop.png` 与 `.codex-artifacts/visualizations/mvcc/mobile.png`；截图为本地渲染验收图。
- Verification：`npm run build` 通过；`npm run test:data` 通过 4 项；`git diff --check` 通过。
- Next Candidate：MySQL `Redo Log`。

### 2026-06-02 00:12 CST

- Branch/Pull：当前分支 `main`；`git pull --ff-only origin main` 成功。
- Selected：MySQL `Redo Log`，原因是 mini-transaction、redo record、LSN、log buffer、write/fsync、checkpoint 和 crash recovery 形成清晰 WAL 状态模型。
- Candidate Sources：普通搜索筛选约 12 个候选来源，保留 MySQL Doxygen `Architecture of writing redo log` 为主参考，Doxygen redo file deleting、MySQL 8.4 Redo Log、Oracle Dynamic Redo Log 和小林 coding MySQL 日志为辅助参考。
- Browser Note：Chrome DevTools MCP profile 被占用，in-app browser 返回不可用，Playwright Chromium 受 macOS Mach port 权限限制；本轮使用页面 URL、官方资料、搜索结果和本地渲染图完成参考确认与截图验收。
- Main Reference：MySQL Server Doxygen - InnoDB Redo Log，主图为 `https://dev.mysql.com/doc/dev/mysql-server/latest/dia_arch_writing.png`。
- Supporting References：`dia_arch_deleting.png`、MySQL 8.4 The InnoDB Redo Log、Oracle Dynamic redo log sizing、小林 coding MySQL 日志。
- Reference Breakdown：采用左上写事务、上中 mtr、下中 Log Buffer、右上 redo files、底部 Checkpoint Ring、左下 Crash Recovery 的状态模型。
- Implementation：新增 `mysql:redo-log` 专用 `state-model` 构建器、Redo Log SVG 舞台、移动端纵向摘要、响应式样式和 Redo Log 专用来源。
- Screenshot Review：保存 `.codex-artifacts/visualizations/redo-log/desktop.png` 与 `.codex-artifacts/visualizations/redo-log/mobile.png`；截图为本地渲染验收图。
- Verification：`npm run build` 通过；`npm run test:data` 通过 4 项。
- Next Candidate：MySQL `Undo Log` 或 `Binlog`。

### 2026-06-02 01:02 CST

- Branch/Pull：当前分支 `main`；`git pull --ff-only origin main` 失败，原因是 `Could not resolve host: github.com`。
- Action：本轮停在同步门禁，跳过找图、拆图、编码、截图、测试、提交和推送。
- Working Tree：开始时 `main...origin/main` 干净；本条记录写入后仅 `docs/visualization-progress.md` 发生变化。
- Resume Point：下一轮先重试 `git pull --ff-only origin main`；同步成功后继续 MySQL `Undo Log` 或 `Binlog` 候选。

### 2026-06-02 02:01 CST

- Branch/Pull：当前分支 `main`；`git pull --ff-only origin main` 成功，远端已同步。
- Selected：MySQL `Undo Log`，原因是 rollback segment、undo slot、before image、DB_ROLL_PTR、history list 和 Purge 形成清晰回滚与快照读状态模型。
- Candidate Sources：普通搜索与 Chrome MCP 视觉确认筛选约 12 个候选来源，保留 1 张主参考图和 4 个辅助参考来源。
- Online Image References：
  - source：Mydbops - An Overview to InnoDB Undo Log；image：页面 `Undo Log Chain` 图；role：main；qualityReason：清晰展示 clustered record、ROLL_PTR、undo record prev 指针和历史版本链；takeaways：主构图采用当前行到 undo 链的纵向版本追踪；originalChanges：改为事务、回滚段、Purge 三栏状态模型，并加入底部排障信号。
  - source：Mydbops - An Overview to InnoDB Undo Log；image：页面 `InnoDB Row Structure` 图；role：supporting；qualityReason：隐藏列 DB_TRX_ID、DB_ROLL_PTR、DB_ROW_ID 表达直观；takeaways：聚簇记录卡片保留隐藏列；originalChanges：用动态状态展示 amount、trx_id 和 roll pointer。
  - source：Mydbops - An Overview to InnoDB Undo Log；image：页面事务 T1/T2/T3 读旧版本图；role：supporting；qualityReason：说明 undo 为一致性读提供旧行镜像；takeaways：右侧加入 Rollback / snapshot read 面板；originalChanges：合并回滚恢复和 ReadView 读取两个用途。
  - source：MySQL Reference Manual - Undo Logs；image：页面结构说明；role：supporting；qualityReason：官方定义 undo log、undo log segment、rollback segment、undo tablespace 和并发事务容量边界；takeaways：中部使用 undo tablespace / rollback segment / undo slot 层级；originalChanges：将表格公式转成容量风险读数。
  - source：Percona - Chasing a Hung MySQL Transaction；image：`innodb_history_length` 图；role：supporting；qualityReason：展示长事务导致 history length 增长的生产症状；takeaways：底部信号强调 history list length、trx age、Purge lag；originalChanges：用简化进度条表达回收前后变化。
- Reference Breakdown：主体布局为左侧 T42 事务和聚簇记录，中部 rollback segment 与 undo 记录链，右侧回滚/快照读与 History List / Purge，底部展示 trx age、undo entries、history list、purge state；视觉焦点是 `DB_ROLL_PTR -> undo#42 -> undo#31 -> undo#20`；交互节奏按分配 slot、写 before image、连接版本链、服务回滚/快照读、Purge 回收推进。
- Implementation：新增 `mysql:undo-log` 专用 `state-model` 构建器、Undo Log SVG 舞台、移动端纵向摘要、响应式样式和 Undo Log 专用来源。
- Screenshot Review：保存 `.codex-artifacts/visualizations/undo-log/desktop.png`（2880x1882）与 `.codex-artifacts/visualizations/undo-log/mobile.png`（1000x4696）；桌面画布可识别 rollback segment、undo chain、ReadView/Purge 和底部信号，移动端纵向摘要可读。
- Browser Note：Chrome DevTools MCP 在 `http://127.0.0.1:4199/KnowledgeGraph/` 完成搜索 `Undo Log`、详情页进入、模拟器进入、五步交互和桌面/移动截图验收；旧预览端口 `4180` 载入旧构建，改用 strict port `4199` 验收。
- Verification：`npm run build` 通过；`npm run test:data` 通过 4 项；`git diff --check` 通过。
- Next Candidate：MySQL `Binlog` 或 `Two Phase Commit`。

### 2026-06-02 02:03 CST

- Branch/Pull：当前分支 `main`；`git pull --ff-only origin main` 失败，原因是 `Could not resolve host: github.com`。
- Existing Work：工作区已有未提交的 MySQL `Undo Log` 可视化现场，涉及 `docs/visualization-progress.md`、`src/data/knowledge-points/mysql.ts`、`src/data/knowledge-points/sources.ts`、`src/data/visual-simulations/index.ts`、`src/features/simulation/stages.tsx`、`src/styles/responsive.css`、`src/styles/simulation.css`。
- Action：本轮停在同步门禁，仅记录阻塞和恢复点；保留现有 Undo Log 实现现场。
- Resume Point：下一轮先重试 `git pull --ff-only origin main`；同步成功后继续完成 Undo Log 截图验收、`npm run test:data`、`git diff --check`、提交、rebase 和推送。

### 2026-06-02 03:02 CST

- Branch/Pull：当前分支 `main`；`git pull --ff-only origin main` 失败，原因是 `Could not resolve host: github.com`。
- Working Tree：开始时 `main...origin/main` 工作区干净；本条记录写入后仅 `docs/visualization-progress.md` 发生变化。
- Action：本轮停在同步门禁，跳过找图、拆图、编码、截图、测试、提交和推送。
- Resume Point：下一轮先重试 `git pull --ff-only origin main`；同步成功后继续 MySQL `Binlog` 或 `Two Phase Commit` 候选。

### 2026-06-02 04:14 CST

- Branch/Pull：当前分支 `main`；`git pull --ff-only origin main` 成功，远端已同步。
- Selected：MySQL `Binlog`，原因是 source commit order、GTID、Rows Event、Group Commit、relay log 和 replica apply 形成清晰复制链路。
- Candidate Sources：普通搜索筛选约 12 个候选来源，保留 MySQL 官方复制结构图为主参考，Binary Log、Binary Logging Formats、Semisynchronous Replication、HackMySQL Group Commit 和小林 coding MySQL 日志为辅助参考。
- Browser Note：in-app browser 返回不可用，Chrome DevTools MCP profile 被占用；Playwright Chromium 受 macOS Mach port 权限限制，本轮使用页面 URL、官方资料和本地渲染图完成参考确认与截图验收。
- Implementation：新增 `mysql:binlog` 专用 `step-simulation` 构建器、Binlog SVG 舞台、移动端纵向摘要、响应式样式和 Binlog 专用来源。
- Screenshot Review：保存 `.codex-artifacts/visualizations/binlog/desktop.png`（2880x1882）与 `.codex-artifacts/visualizations/binlog/mobile.png`（1000x2200）；桌面和移动端验收图均可读。
- Verification：`npm run build` 通过；`npm run test:data` 通过 4 项；`git diff --check` 通过。
- Next Candidate：MySQL `Two Phase Commit`。

### 2026-06-02 05:13 CST

- Branch/Pull：当前分支 `main`；`git pull --ff-only origin main` 成功，远端已同步。
- Selected：MySQL `Two Phase Commit`，原因是 redo prepare、Binlog Xid、redo commit 和崩溃恢复判定能串联已完成的 Redo Log 与 Binlog。
- Candidate Sources：普通搜索筛选约 12 个候选来源，保留小林 coding MySQL 日志中的两阶段提交图为主参考，MySQL 官方复制实现、Binary Log、Binlog 事务依赖跟踪和 HackMySQL Group Commit 为辅助参考。
- Browser Note：Chrome DevTools MCP profile 被占用，Playwright Chromium 受 macOS Mach port 权限限制；本轮使用页面 URL、官方资料、构建产物和本地渲染图完成参考确认与截图验收。
- Implementation：新增 `mysql:two-phase-commit` 专用 `state-model` 构建器、Two Phase Commit SVG 舞台、移动端纵向摘要、响应式样式和 Two Phase Commit 专用来源。
- Screenshot Review：保存 `.codex-artifacts/visualizations/two-phase-commit/desktop.png`（2880x1882）与 `.codex-artifacts/visualizations/two-phase-commit/mobile.png`（1000x2200）；桌面和移动端验收图均可读。
- Verification：`npm run build` 通过；`npm run test:data` 通过 4 项；`git diff --check` 通过。
- Commit/Push：首版提交 `5af77bb feat: add two phase commit visualization` 已推送到 `origin/main`；随后把本轮 run log amend 到本地提交 `9c71695`。`git push --force-with-lease origin main` 失败，原因是 `Could not resolve host: github.com`；当前本地 `main` 相对 `origin/main` 显示 ahead 1 / behind 1。
- Next Candidate：MySQL `Deadlock`。

### 2026-06-02 06:02 CST

- Branch/Pull：当前分支 `main`；`git pull --ff-only origin main` 中止，原因是本地 `main` 与 `origin/main` 已分叉。
- Divergence：本地 `HEAD` 为 `28f4124 feat: add two phase commit visualization`；远端 `origin/main` 为 `5af77bb feat: add two phase commit visualization`。
- Working Tree：进入同步门禁时工作区干净；本条记录写入后仅 `docs/visualization-progress.md` 发生变化。
- Action：本轮停在同步门禁，跳过找图、拆图、编码、截图、测试、提交和推送。
- Resume Point：下一轮先处理 Two Phase Commit amend 分叉；可执行 `git push --force-with-lease origin main` 推送本地 run log 版本，成功后继续 MySQL `Deadlock` 找图与设计。

### 2026-06-02 07:02 CST

- Branch/Pull：当前分支 `main`；`git pull --ff-only origin main` 中止，原因是本地 `main` 与 `origin/main` 已分叉。
- Divergence：本地 `HEAD` 为 `28f4124 feat: add two phase commit visualization`；远端 `origin/main` 为 `5af77bb feat: add two phase commit visualization`。
- Recovery Attempt：执行 `git push --force-with-lease origin main`，失败原因是 `Could not resolve host: github.com`。
- Working Tree：本轮仅追加同步门禁记录，当前 `docs/visualization-progress.md` 有本地修改。
- Action：本轮停在同步门禁，跳过找图、拆图、编码、截图、测试、提交和推送。
- Resume Point：下一轮先重试 `git push --force-with-lease origin main`；推送成功后执行 `git pull --ff-only origin main`，再继续 MySQL `Deadlock` 找图与设计。

### 2026-06-02 08:02 CST

- Branch/Pull：当前分支 `main`；`git pull --ff-only origin main` 中止，原因是本地 `main` 与 `origin/main` 已分叉。
- Divergence：本地 `HEAD` 为 `28f4124 feat: add two phase commit visualization`；远端 `origin/main` 为 `5af77bb feat: add two phase commit visualization`。
- Working Tree：进入同步门禁前已有 `docs/visualization-progress.md` 本地修改，内容为前两轮同步阻塞记录；本轮继续追加当前阻塞记录。
- Action：本轮停在同步门禁，跳过找图、拆图、编码、截图、测试、提交和推送。
- Resume Point：下一轮先重试 `git push --force-with-lease origin main` 推送本地 Two Phase Commit run log 版本；推送成功后执行 `git pull --ff-only origin main`，再继续 MySQL `Deadlock` 找图与设计。

### 2026-06-02 09:02 CST

- Branch/Pull：当前分支 `main`；`git pull --ff-only origin main` 中止，原因是本地 `main` 与 `origin/main` 已分叉。
- Divergence：本地 `HEAD` 为 `28f4124 feat: add two phase commit visualization`；远端 `origin/main` 为 `5af77bb feat: add two phase commit visualization`。
- Recovery Attempt：执行 `git push --force-with-lease origin main`，失败原因是 `Could not resolve host: github.com`。
- Working Tree：进入同步门禁前已有 `docs/visualization-progress.md` 本地修改，内容为 06:02、07:02、08:02 同步阻塞记录；本轮继续追加当前阻塞记录。
- Action：本轮停在同步门禁，跳过找图、拆图、编码、截图、测试、提交和推送。
- Resume Point：下一轮先重试 `git push --force-with-lease origin main` 推送本地 Two Phase Commit run log 版本；推送成功后执行 `git pull --ff-only origin main`，再继续 MySQL `Deadlock` 找图与设计。

### 2026-06-02 10:03 CST

- Branch/Pull：当前分支 `main`；`git pull --ff-only origin main` 中止，原因是本地 `main` 与 `origin/main` 已分叉。
- Divergence：本地 `HEAD` 为 `28f4124 feat: add two phase commit visualization`；远端 `origin/main` 为 `5af77bb feat: add two phase commit visualization`。
- Recovery Attempt：执行 `git push --force-with-lease origin main`，失败原因是 `Could not resolve host: github.com`。
- Working Tree：进入同步门禁前已有 `docs/visualization-progress.md` 本地修改，内容为 06:02、07:02、08:02、09:02 同步阻塞记录；本轮继续追加当前阻塞记录。
- Action：本轮停在同步门禁，跳过找图、拆图、编码、截图、测试、提交和推送。
- Resume Point：下一轮先重试 `git push --force-with-lease origin main` 推送本地 Two Phase Commit run log 版本；推送成功后执行 `git pull --ff-only origin main`，再继续 MySQL `Deadlock` 找图与设计。

### 2026-06-02 11:04 CST

- Branch/Pull：当前分支 `main`；`git fetch origin main` 与 `git pull --ff-only origin main` 成功，远端已同步。
- Selected：MySQL `Deadlock`，原因是事务持锁、交叉等待、wait-for graph 闭环、InnoDB detector、victim rollback 和幂等重试能形成强机制状态模型。
- Candidate Sources：普通搜索筛选约 12 个候选来源；主参考图采用 Microsoft SQL Server deadlock graph 的 process/resource/victim 构图；辅助参考采用 MySQL 官方 Deadlock Detection、Deadlock Handling、Locks Set by SQL Statements 和 Wait-for graph 概念图。
- Online Image References：
  - source：Microsoft Learn - Analyze and prevent deadlocks in Azure SQL Database；image：页面 deadlock graph / process-resource-victim 可视化；role：main；qualityReason：清楚展示进程节点、资源节点、等待边、victim 标记和等待环；takeaways：采用事务节点、资源/锁表节点、wait-for graph 和 victim detector 的四区结构；originalChanges：改写为 MySQL InnoDB 行锁语义，加入 `SHOW ENGINE INNODB STATUS` 与应用重试信号。
  - source：MySQL Reference Manual - Deadlocks in InnoDB；image：官方死锁定义与最小化建议；role：supporting；qualityReason：权威说明死锁会发生、事务需重试、应用应按常规处理；takeaways：右侧面板强调 deadlock 是可预期并发分支；originalChanges：把文字建议落成底部 retry branch 和 lock order 信号。
  - source：MySQL Reference Manual - InnoDB Deadlock Detection；image：官方 deadlock detector 说明；role：supporting；qualityReason：校准检测器遍历等待关系、选择 victim、禁用检测时依赖超时的边界；takeaways：加入 Detector 面板和 victim=T2 状态；originalChanges：把检测逻辑转成可逐步高亮的等待图。
  - source：MySQL Reference Manual - Locks Set by Different SQL Statements in InnoDB；image：锁类型与 SQL 加锁范围说明；role：supporting；qualityReason：解释 record/gap/next-key lock 与索引命中对锁范围的影响；takeaways：锁表行使用 record X lock 和索引信号；originalChanges：底部保留 lock wait 和 indexed predicate 诊断口径。
  - source：Wait-for graph；image：页面 wait-for graph 概念图与有向边解释；role：supporting；qualityReason：补充事务依赖边和环检测的抽象层；takeaways：中部图使用 `T1 -> T2`、`T2 -> T1` 闭环；originalChanges：用项目自己的颜色、InnoDB 锁表上下文和中文排障文案表达。
- Reference Breakdown：主体布局为左侧 T1、右侧 T2、中部 InnoDB Lock Table、下方 Wait-for Graph、右下 Detector、底部 LATEST DEADLOCK / victim / lock wait / retry branch 信号；视觉焦点是 `T1 -> T2 -> T1` 闭环；交互节奏按交叉持锁、T1 等待、T2 等待、检测等待环、回滚牺牲者推进。
- Implementation：新增 `mysql:deadlock` 专用 `state-model` 构建器、Deadlock SVG 舞台、移动端纵向摘要、响应式样式，并给 MySQL 死锁知识点补充官方与图形来源引用。
- Screenshot Review：保存 `.codex-artifacts/visualizations/deadlock/desktop.png`（2880x1882）与 `.codex-artifacts/visualizations/deadlock/mobile.png`（1000x4544）；桌面画布可识别 T1/T2、InnoDB Lock Table、wait-for graph、Detector 和底部排障信号，移动端切换为 4 个流程卡片与 4 个事实卡片。
- Browser Note：in-app browser 返回不可用；本轮使用本地 Playwright 在 `http://127.0.0.1:4207/KnowledgeGraph/` 从首页进入 Mysql 分类、打开 MySQL 死锁详情、进入模拟器、推进 5 步，并完成桌面/移动端截图验收。
- Verification：`npm run build` 通过；`npm run test:data` 通过 4 项；`git diff --check` 通过。
- Next Candidate：MySQL `Deadlock Log` 或 `SHOW ENGINE INNODB STATUS`。
