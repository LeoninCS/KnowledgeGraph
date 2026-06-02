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
| CrashLoopBackOff | `state-model` | completed | SVG review captured; PNG blocked by platform permissions | Kubernetes CrashLoopBackOff 重启退避状态模型，覆盖 Pod 启动、进程退出、kubelet restartPolicy、BackOff 延迟、Events/logs 证据链和修复恢复 |
| 镜像层 | `storage-layout` | completed | desktop/mobile captured | Docker 镜像层结构模型，覆盖 Dockerfile 指令、Build Cache、只读层共享、overlay2 和可写层 |
| 桥接网络 | `step-simulation` | completed | desktop/mobile captured | Docker Bridge packet path 模拟器，覆盖 network namespace、veth pair、Linux bridge、内置 DNS、端口发布、DNAT 和 MASQUERADE |
| 端口映射 | `step-simulation` | completed | SVG/HTML review captured; PNG blocked by platform permissions | Docker published port path 模拟器，覆盖 HostIp/HostPort、DNAT、DOCKER-USER、容器监听地址和 EXPOSE 排障 |
| 资源限制 | `state-model` | completed | desktop/mobile captured | Docker cgroup 资源治理状态模型，覆盖 HostConfig、cgroup v2 控制文件、CPU throttle、OOMKilled、docker stats 和运行中调整 |
| MVCC | `state-model` | completed | desktop/mobile captured | MySQL MVCC 版本可见性状态模型，覆盖隐藏列、Undo 版本链、ReadView、可见性判断和长事务 Purge 风险 |
| Redo Log | `state-model` | completed | desktop/mobile captured | MySQL Redo Log WAL 与恢复状态模型，覆盖 redo record、log buffer、write/fsync、checkpoint 和 crash recovery |
| Binlog | `step-simulation` | completed | desktop/mobile captured | MySQL Binlog 提交与复制通道模拟器，覆盖 GTID、Rows Event、Group Commit、Relay Log 和副本应用延迟 |
| 两阶段提交 | `state-model` | completed | desktop/mobile captured | MySQL Two Phase Commit 提交一致性状态模型，覆盖 redo prepare、Binlog Xid、redo commit 和崩溃恢复判定 |
| 死锁 | `state-model` | completed | desktop/mobile captured | MySQL Deadlock 锁等待状态模型，覆盖交叉持锁、wait-for graph 闭环、检测器、victim rollback 和重试分支 |
| EXPLAIN | `state-model` | completed | desktop/mobile captured | MySQL EXPLAIN 执行计划诊断台，覆盖 Visual Explain、type/key/rows/Extra、谓词改写、复合索引和实测校验 |
| 主从复制 | `step-simulation` | completed | SVG review captured; PNG blocked by platform permissions | MySQL Replication 链路模拟器，覆盖 Source commit、Binlog Dump Thread、I/O Receiver、Relay Log、SQL Applier、GTID 差距和复制延迟 |
| GTID | `state-model` | completed | SVG review captured; PNG blocked by platform permissions | MySQL GTID 集合对账状态模型，覆盖 server_uuid:sequence、gtid_executed、gtid_purged、Retrieved/Executed 集合、候选副本对账和自动定位恢复 |
| HPA | `step-simulation` | completed | SVG review captured; PNG blocked by platform permissions | Kubernetes HPA 自动伸缩控制环模拟器，覆盖负载升高、Metrics API、desiredReplicas 公式、Scale 子资源和稳定窗口 |
| Scheduler | `step-simulation` | completed | SVG/HTML review captured; PNG blocked by platform permissions | Kubernetes Scheduler 调度周期模拟器，覆盖 Pending Pod、Scheduling Queue/Profile、Filter/Score 插件、Binding Cycle 和 FailedScheduling 事件 |
| 污点与容忍 | `state-model` | completed | SVG/HTML review captured; PNG blocked by platform permissions | Kubernetes Taints and Tolerations 调度约束状态模型，覆盖 Node taint、Pod toleration、NoSchedule Filter、NoExecute 驱逐、tolerationSeconds 和 FailedScheduling 事件 |
| epoll | `state-model` | completed | SVG review captured; PNG blocked by platform permissions | Linux epoll 事件通知状态模型，覆盖 epoll_create1、epoll_ctl、interest list、socket wait queue、ready list、epoll_wait 批量返回和 LT/ET drain |

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

## MySQL GTID Visualization

### Online Image References

- `source`：Oracle MySQL HA Solutions，https://www.slideshare.net/matkeep/mysql-ha-solutions
  - `image`：第 18 页 GTID 在复制层级中传播，并用 GTID 判断最新副本与缺失事务的图。
  - `role`：main
  - `qualityReason`：图中同时呈现主库、多个副本、GTID 传播和故障切换选择，是 GTID 用于 HA 判断的高密度主构图。
  - `takeaways`：主画布采用 Source、Binary Log、Replica GTID Sets、Candidate Comparison 和 Auto Positioning 五区结构。
  - `originalChanges`：改写为本项目自己的 GTID 集合对账状态模型，加入 `gtid_executed`、`gtid_purged`、`Retrieved_Gtid_Set`、`Executed_Gtid_Set` 和流量闸门信号。
- `source`：MySQL Reference Manual - The GTID Life Cycle，https://dev.mysql.com/doc/refman/8.4/en/replication-gtids-lifecycle.html
  - `image`：官方 GTID 生命周期说明，覆盖事务提交、写入 binary log、传输到副本和执行集合推进。
  - `role`：supporting
  - `qualityReason`：官方定义 GTID 生成、持久化、传输和执行顺序，适合校准五步状态。
  - `takeaways`：交互步骤按生成 GTID、写入 Binlog、副本拉取、候选对账、自动定位恢复推进。
  - `originalChanges`：把文字生命周期转换成可高亮的 token、集合行和缺口路径。
- `source`：MySQL Reference Manual - GTID Format and Storage，https://dev.mysql.com/doc/refman/8.4/en/replication-gtids-concepts.html
  - `image`：官方 GTID 格式与集合存储说明。
  - `role`：supporting
  - `qualityReason`：权威说明 `server_uuid:sequence`、GTID set、`gtid_executed` 与 `gtid_purged`。
  - `takeaways`：Source 面板保留 `server_uuid=uuidA`，底部信号保留 executed/purged 边界。
  - `originalChanges`：用 token 卡片表达 `uuidA:578-581`，用集合行表达区间推进。
- `source`：MySQL Reference Manual - GTID Auto-Positioning，https://dev.mysql.com/doc/refman/8.4/en/replication-gtids-auto-positioning.html
  - `image`：官方 auto-positioning 流程说明。
  - `role`：supporting
  - `qualityReason`：校准新复制连接如何发送自身 GTID 集合并继续拉取缺失范围。
  - `takeaways`：右下角 Auto Positioning 面板展示 `SOURCE_AUTO_POSITION=1` 与缺失范围补齐。
  - `originalChanges`：把连接握手简化为恢复路径和流量闸门，突出故障切换后验收。
- `source`：HackMySQL - MySQL GTID Missing Writes，https://hackmysql.com/mysql-gtid-missing-writes/
  - `image`：文章中的 GTID 缺失写入、集合差异和排查语境。
  - `role`：supporting
  - `qualityReason`：工程案例能解释 errant/missing transaction 对恢复的影响，补足官方文档的排障视角。
  - `takeaways`：Candidate Comparison 和 Set Diff 面板突出 missing range 与 traffic gate。
  - `originalChanges`：用 Replica A/B/C 对账卡片替代长日志输出，保留线上判断口径。

### Reference Breakdown

- 主体布局：上排 Source MySQL、Binary Log、Replica GTID Sets；下排 Candidate Comparison、Set Diff、Auto Positioning；底部四个恢复信号。
- 视觉焦点：`uuidA:581` token 与 `Retrieved_Gtid_Set=uuidA:1-581`、`Executed_Gtid_Set=uuidA:1-579` 的差距。
- 领域对象：server_uuid、GTID event、binary log、gtid_executed、gtid_purged、Retrieved_Gtid_Set、Executed_Gtid_Set、candidate replica、missing range、auto-positioning link。
- 容器层级：Source 负责生成事务身份；Binary Log 保存可复制顺序；Replica Sets 记录接收/执行边界；Candidate Comparison 和 Set Diff 服务切换决策；Auto Positioning 负责恢复连接。
- 连线方向：Source 生成 GTID 后写入 Binlog，副本拉取推进集合，故障切换时从 Replica Sets 回看候选，再由 Auto Positioning 补齐缺失范围。
- 状态表达：五步分别高亮生成、落盘、拉取、对账、恢复；danger 表达缺失范围，success 表达补齐后开放流量。
- 颜色策略：品牌蓝表示 source identity，青色表示 binlog/executed 推进，橙色表示 retrieved 与 apply 差距，红色表示 missing range，绿色表示 auto-positioning 恢复完成。
- 文字密度：桌面画布只保留 GTID 集合关键字段和短标签；详细解释放在右侧面板和底部步骤条。
- 交互节奏：生成 GTID -> 写入 Binlog -> 副本拉取 -> 候选对账 -> 自动定位恢复。
- 原创改造点：把 HA 方案图和官方生命周期文档融合为集合对账模拟器，强调生产恢复时的缺失集合、purged 边界、候选副本和流量闸门。

### Screenshot Review

- 桌面：PNG 捕获受平台权限限制；保存 `.codex-artifacts/visualizations/gtid/desktop.svg`。
- 移动端：PNG 捕获受平台权限限制；保存 `.codex-artifacts/visualizations/gtid/mobile.svg`。
- 截图结论：桌面 SVG 可识别 Source、Binary Log、Replica GTID Sets、Candidate Comparison、Set Diff、Auto Positioning 和底部恢复信号；移动端摘要完整展示五步流程和四个事实卡片。
- 验收备注：Chrome DevTools MCP profile 被占用，Browser 插件返回 in-app browser 不可用，Vite preview 端口监听失败，Playwright Chromium 受 macOS Mach port 权限限制，QuickLook PNG 转换被沙箱初始化拦截；本轮使用 `npm run build`、`npm run test:data -- --grep "mysql GTID"`、完整 `npm run test:data`、`git diff --check` 和本地 SVG 审查图完成验收。

## Kubernetes CrashLoopBackOff Visualization

### Online Image References

- `source`：Komodor - How to Fix CrashLoopBackOff in Kubernetes?，https://komodor.com/learn/how-to-fix-crashloopbackoff-kubernetes-error/
  - `image`：页面中的 CrashLoopBackOff cycle 图，展示 container fails、increasing backoff、restart running 的循环。
  - `role`：main
  - `qualityReason`：图直接呈现 CrashLoopBackOff 的循环本体，容器失败、等待退避、重启运行三个状态清晰，适合作为主构图。
  - `takeaways`：主画布采用 Pod/Container、Process Exit、kubelet restart、BackOff Timer 和 Evidence Timeline 五区结构。
  - `originalChanges`：改造成项目自己的重启退避状态模型，加入 restartCount、lastState.reason、Events、`kubectl logs --previous`、探针失败和 fix gate。
- `source`：Google Cloud - Troubleshoot CrashLoopBackOff events，https://docs.cloud.google.com/kubernetes-engine/docs/troubleshooting/crashloopbackoff-events
  - `image`：页面中的 GKE Interactive Playbook、日志和事件排查路径说明。
  - `role`：supporting
  - `qualityReason`：官方排障文档把 app error、OOMKilled、liveness probe、node disruption 和 previous logs 组织成证据链。
  - `takeaways`：右侧理解重点保留 `kubectl describe pod`、Events、`kubectl logs --previous`、probe failure 和 resource limit。
  - `originalChanges`：把排查清单转成画布右侧 Evidence Stack，并让证据随五步推进逐层点亮。
- `source`：Kubernetes Documentation - Pod Lifecycle，https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle/
  - `image`：Pod phase、container state、restart policy 和 backoff 行为说明。
  - `role`：supporting
  - `qualityReason`：官方定义 Pod 生命周期与容器状态，适合校准 Running、Terminated、Waiting、restartPolicy 和 BackOff 语义。
  - `takeaways`：状态模型按 Start container、Process exits、Restart by policy、Enter backoff、Gather evidence and fix 推进。
  - `originalChanges`：把生命周期文字映射成五个可高亮状态节点和底部事实卡片。
- `source`：Kubernetes Documentation - Configure Liveness, Readiness and Startup Probes，https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/
  - `image`：liveness/readiness/startup probe 配置、失败行为和事件说明。
  - `role`：supporting
  - `qualityReason`：官方探针文档能解释误配 liveness probe 如何触发重启循环。
  - `takeaways`：底部信号保留 `probe failure Events`，画布加入 liveness gate 和 Ready 条件。
  - `originalChanges`：将探针失败作为 BackOff 证据之一，与应用退出码和 previous logs 并列呈现。
- `source`：Sysdig - What is Kubernetes CrashLoopBackOff? And how to fix it，https://www.sysdig.com/blog/debug-kubernetes-crashloopbackoff
  - `image`：页面中的 CrashLoopBackOff explanation diagram。
  - `role`：supporting
  - `qualityReason`：技术博客图解释重启循环与调试顺序，适合补充教学节奏和可视化表达。
  - `takeaways`：采用先识别循环、再看状态、再读日志与事件、最后验证恢复的节奏。
  - `originalChanges`：用本项目 SVG 舞台、蓝/橙/红/绿状态色、右侧任务面板和移动端摘要重绘。

### Reference Breakdown

- 主体布局：左侧 Pod Sandbox 与 Container Process，中部 kubelet Restart Controller 和 BackOff Timer，右侧 Evidence Stack 与 Fix Gate，底部四个运行信号。
- 视觉焦点：容器从 `Running` 进入 `Terminated: Error`，kubelet 按 `restartPolicy=Always` 重启，连续失败后进入 `Waiting: CrashLoopBackOff`。
- 领域对象：Pod、container process、exit code、kubelet、restartPolicy、restartCount、BackOff delay、Events timeline、previous logs、liveness probe、Ready condition、fix gate。
- 容器层级：Pod 包含主容器和状态条件；kubelet 负责监听退出与执行重启；BackOff Timer 限制下一次启动；Evidence Stack 承载 describe/logs/probe/resource 证据。
- 连线方向：Start container -> Process exits -> kubelet restart -> BackOff wait -> Evidence and fix；修复后从 fix gate 回到 Ready=True。
- 状态表达：五步通过边框色、脉冲圆点、时间线标记、底部信号和修复门禁表达启动、退出、重启、退避、恢复。
- 颜色策略：品牌蓝表示正常启动，红色表示进程退出和错误，橙色表示 BackOff 等待，青色表示证据收集，绿色表示修复后 Ready。
- 文字密度：画布保留状态名、命令读数和短标签；长解释放在右侧面板和底部步骤条。
- 交互节奏：启动容器 -> 进程退出 -> 按策略重启 -> 进入退避 -> 收集证据并修复。
- 原创改造点：把循环参考图和官方排障文档融合为可探索状态模型，强调线上排障的证据顺序、BackOff 读数和恢复验收。

### Screenshot Review

- 桌面：PNG 捕获受平台权限限制；保存 `.codex-artifacts/visualizations/crashloopbackoff/desktop.svg`。
- 移动端：PNG 捕获受平台权限限制；保存 `.codex-artifacts/visualizations/crashloopbackoff/mobile.svg`。
- 截图结论：桌面 SVG 可识别 Pod Sandbox、Container Process、kubelet Restart Controller、BackOff Timer、Events Timeline、Evidence Stack、Fix Gate 和底部信号；移动端摘要完整展示五步流程和四个事实卡片。
- 验收备注：Vite preview 已在 `http://127.0.0.1:4234/KnowledgeGraph/` 启动；Chrome DevTools MCP profile 被占用，Browser 插件返回 in-app browser 不可用，Playwright Chromium 受 macOS Mach port 权限限制，QuickLook PNG 转换被沙箱初始化拦截；本轮使用 `npm run build`、`npm run test:data -- --grep "CrashLoopBackOff"`、完整 `npm run test:data`、`git diff --check` 和本地 SVG 审查图完成验收。

## Deferred

| 知识点 | 原因 | 复查条件 |
|---|---|---|
| 暂无 | 当前暂缓队列为空 | 下一轮优先进入 Docker `CPU 限制` 或 Kubernetes `拓扑分布约束` 找图与设计 |

## Next Candidate

优先选择 Docker `CPU 限制`，备选 Kubernetes `拓扑分布约束`。CPU 限制可承接 Docker 资源限制模型，围绕 CFS period/quota、throttled periods、cpu.shares、CPU set 和延迟排障展开；拓扑分布约束可承接 Scheduler 与污点容忍模型，围绕 `maxSkew`、拓扑域、`whenUnsatisfiable` 和多可用区副本均衡展开。

## Docker Resource Limit Visualization

### Online Image References

- `source`：ENCCS - Namespaces and cgroups，https://enccs.github.io/containers/namespc-cgroup/
  - `image`：页面 `What Are cgroups?` 小节中的 `Namespaces-cgroups_resource-limits.svg` 资源分配图。
  - `role`：main
  - `qualityReason`：图形直观表达 cgroup 把宿主资源按比例划出边界，是资源限制主题最清晰的主构图。
  - `takeaways`：主画布采用宿主资源、cgroup 边界、容器进程、观测指标的分区结构。
  - `originalChanges`：改造成 Docker 语义的五步状态模型，加入 HostConfig、cgroup v2 控制文件、CPU throttle、OOMKilled 和 `docker update` 闭环。
- `source`：NGINX Blog - What Are Namespaces and cgroups, and How Do They Work?，https://www.nginx.com/blog/what-are-namespaces-cgroups-how-do-they-work/
  - `image`：`Namespaces-cgroups_resource-limits.svg` 原图。
  - `role`：supporting
  - `qualityReason`：原图来源清楚，cgroup 与资源份额关系表达稳定。
  - `takeaways`：容器资源边界应作为内核控制面对象呈现。
  - `originalChanges`：把静态比例图扩展为可交互的运行时限制、压力、事件和调参流程。
- `source`：Docker Docs - Resource constraints，https://docs.docker.com/engine/containers/resource_constraints/
  - `image`：页面中的 Memory、CPU、CFS scheduler、`--memory`、`--cpus`、`--cpu-quota` 说明和表格。
  - `role`：supporting
  - `qualityReason`：官方定义 Docker CLI 参数如何影响容器可用 CPU、内存和 OOM 行为。
  - `takeaways`：步骤从 `docker run --memory 512m --cpus 1.5 --pids-limit 100` 开始，并展示 CPU quota 与内存硬上限。
  - `originalChanges`：把长表格压缩为 HostConfig 参数卡和底部四个信号卡。
- `source`：Docker Docs - Runtime metrics，https://docs.docker.com/engine/containers/runmetrics/
  - `image`：页面 `docker stats` 输出、Control groups、cgroup v1/v2 路径与 metrics pseudo-file 说明。
  - `role`：supporting
  - `qualityReason`：官方说明 `docker stats`、`/sys/fs/cgroup` 和容器指标文件之间的关系。
  - `takeaways`：右下角保留 `docker stats` 与 `events/inspect` 合并观察。
  - `originalChanges`：把 metrics 输出转成随步骤变化的 CPU%、MEM%、OOM 和 HostConfig 校验读数。
- `source`：Linux Kernel Docs - Control Group v2，https://www.kernel.org/doc/html/latest/admin-guide/cgroup-v2.html
  - `image`：cgroup v2 controller 文件与 memory/cpu/pids 控制语义说明。
  - `role`：supporting
  - `qualityReason`：权威定义 `memory.max`、`memory.events`、`cpu.max` 等内核控制文件。
  - `takeaways`：中部 cgroup 面板直接展示 `memory.max`、`cpu.max`、`pids.max`、`memory.events`。
  - `originalChanges`：用 Docker 容器路径 `/sys/fs/cgroup/docker/<id>` 连接 daemon 写入和内核执行。

### Reference Breakdown

- 主体布局：左侧 `docker run` 参数与 HostConfig，中上 Docker daemon，中部 cgroup v2 控制文件，左下应用容器，中下内核调度/OOM，右下 `docker stats` 与事件观测，底部四个信号。
- 视觉焦点：`--memory 512m --cpus 1.5` 写入 `memory.max=536870912` 与 `cpu.max=150000 100000`，随后触发 CFS throttle 和 `oom_kill=1`。
- 领域对象：HostConfig、Docker daemon、container cgroup、`memory.max`、`cpu.max`、`pids.max`、`memory.events`、PID 1、worker threads、CFS scheduler、OOM killer、docker stats、docker events、docker inspect。
- 容器层级：CLI 声明边界；daemon/runtime 创建 cgroup；cgroup 控制文件成为内核执行边界；容器负载触发 CPU/内存事件；stats/events/inspect 反馈给调参。
- 连线方向：参数声明 -> daemon 接收 -> cgroup 文件写入 -> 容器压力 -> 内核 throttle/OOM -> 指标观测 -> `docker update` 调整上限。
- 状态表达：五步分别高亮 HostConfig、cgroup 文件、CPU throttle、内存 OOM、stats/update；危险状态使用红色 OOM 路径，恢复状态使用绿色 update 路径。
- 颜色策略：蓝色表示声明配置，青色表示 cgroup 控制面，橙色表示 CPU 节流，红色表示 OOM，绿色表示观测后调参。
- 文字密度：桌面 SVG 只保留参数、文件名、关键数值和状态短语；解释集中在右侧任务面板和底部步骤条。
- 交互节奏：声明资源边界 -> 写入 cgroup 控制文件 -> CPU 超配额节流 -> 内存触顶与 OOM -> 观测并调整。
- 原创改造点：将通用 cgroup 资源份额图、Docker 参数文档和 Linux cgroup v2 文件语义融合为可交互 Docker 资源治理状态模型。

### Screenshot Review

- 桌面：captured `.codex-artifacts/visualizations/resource-limit/desktop.png`。
- 移动端：captured `.codex-artifacts/visualizations/resource-limit/mobile.png`。
- 截图结论：桌面可识别 `docker run` 参数、Docker daemon、cgroup v2 控制文件、应用容器、内核调度/OOM、`docker stats` 和底部四个信号；右侧任务/操作/理解重点完整；移动端使用流程卡与事实卡展示 `memory.max=768MiB`、`cpu.max=1.5 CPU`、`oom_kill=1 event`、`docker stats=CPU 142% MEM 69%`，文字可读。
- 验收备注：Chrome DevTools 在 `http://127.0.0.1:4268/KnowledgeGraph/` 完成 Docker 分类、搜索 `资源限制`、详情页进入、模拟器进入、五步交互到 `观测并调整`，并捕获桌面/移动端截图。

## Kubernetes HPA Visualization

### Online Image References

- `source`：Kubernetes Docs - Horizontal Pod Autoscaling，https://kubernetes.io/docs/concepts/workloads/autoscaling/horizontal-pod-autoscale/
  - `image`：页面中的 HorizontalPodAutoscaler 控制循环、metrics API 与 `desiredReplicas = ceil[currentReplicas * ( currentMetricValue / desiredMetricValue )]` 公式说明。
  - `role`：main
  - `qualityReason`：官方概念页直接定义 HPA 控制循环、指标来源、公式、容忍区间和稳定窗口，是本轮机制建模的权威主参考。
  - `takeaways`：主画布采用 Deployment workload -> Metrics Server / Metrics API -> HPA Controller -> Scale subresource -> Stabilization window 的闭环结构。
  - `originalChanges`：把官方文字流程改造成五步交互模拟，加入 Pod CPU 行、公式计算卡片、Scale 写入路径和底部排障信号。
- `source`：Kubernetes Docs - Horizontal Pod Autoscaling Walkthrough，https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale-walkthrough/
  - `image`：页面中的 PHP Apache HPA 示例、负载生成、`kubectl get hpa` 输出和副本数变化。
  - `role`：supporting
  - `qualityReason`：官方实践样例能校准负载升高、CPU 指标升高、HPA 状态变化和 Deployment 扩容的教学节奏。
  - `takeaways`：步骤按流量升高、指标汇总、公式计算、写入副本数、观察稳定回落推进。
  - `originalChanges`：把命令输出转换为画布中的 `current / target CPU`、`desiredReplicas`、`Scale subresource` 和稳定窗口读数。
- `source`：Kubernetes Docs - Resource Metrics Pipeline，https://kubernetes.io/docs/tasks/debug/debug-cluster/resource-metrics-pipeline/
  - `image`：页面中的 Metrics Server、kubelet、Metrics API 聚合链路说明。
  - `role`：supporting
  - `qualityReason`：官方说明资源指标如何从 kubelet 进入 `metrics.k8s.io`，适合支撑指标采集面板和排障文案。
  - `takeaways`：Metrics Server 面板显示 kubelet summary API 与 `metrics.k8s.io`，并把样本缺失作为 HPA Unknown 的排查线索。
  - `originalChanges`：用单独的指标采集路径和右侧任务文案强调 requests、样本时间戳和 Conditions。
- `source`：Kubernetes API Reference - Scale，https://kubernetes.io/docs/reference/kubernetes-api/workload-resources/scale-v1/
  - `image`：Scale 子资源结构说明，包含 spec.replicas、status.replicas 和 selector。
  - `role`：supporting
  - `qualityReason`：官方 API 结构能校准 HPA 最终写入的对象边界，避免把 HPA 与 Deployment 控制器职责混在一起。
  - `takeaways`：画布保留 Scale subresource 卡片和 `Deployment.scale.spec.replicas` 标签。
  - `originalChanges`：将 API 字段抽象为 `replicas 3 -> 6` 的写入动作和 Deployment ready 状态反馈。
- `source`：Google Kubernetes Engine - Horizontal Pod autoscaling，https://cloud.google.com/kubernetes-engine/docs/concepts/horizontalpodautoscaler
  - `image`：GKE 文档中的 HPA 工作流与指标来源说明。
  - `role`：supporting
  - `qualityReason`：云厂商文档补充生产环境中的 CPU、内存、自定义指标和行为限制口径。
  - `takeaways`：稳定窗口、min/max、scale behavior 与告警阈值放入最后一步理解重点。
  - `originalChanges`：把生产配置建议转为底部 stabilization window 信号和右侧排障重点。

### Reference Breakdown

- 主体布局：左侧 Deployment checkout 与 Pod CPU 行，中部 Metrics Server，右上 HPA Controller，中央下方 Scale 子资源，右下稳定窗口，底部四个排障信号。
- 视觉焦点：`CPU 120% / target 60%` 进入公式 `ceil(3*120/60)=6`，再写入 `Deployment.scale.spec.replicas`。
- 领域对象：Deployment、Pod、CPU request、Metrics Server、`metrics.k8s.io`、HPA Controller、desiredReplicas、Scale subresource、ReplicaSet readiness、stabilization window、HPA Conditions。
- 容器层级：Workload 产生 Pod 资源指标；Metrics Server 暴露 Metrics API；HPA Controller 执行同步循环；Scale 子资源写入副本数；稳定窗口限制缩容抖动。
- 连线方向：业务流量进入 Deployment；Pod 样本进入 Metrics Server；指标送入 HPA；公式结果写入 Scale；Scale 反馈到 Deployment；稳定窗口回看缩容建议。
- 状态表达：五步通过透明度、边框色、箭头和底部信号展示负载升高、指标可用、公式计算、扩容生效和缩容稳定。
- 颜色策略：品牌蓝表示 Workload 与 Scale API，青色表示 Metrics API，橙色表示高负载和公式计算，绿色表示扩容生效，稳定窗口沿用品牌蓝回路。
- 文字密度：桌面 SVG 保留对象名、关键公式和读数；长解释放在右侧任务面板、操作面板和底部步骤条。
- 交互节奏：负载升高 -> 汇总指标 -> 计算期望副本 -> 写入 Scale 子资源 -> 稳定缩容。
- 原创改造点：把官方 HPA 概念和命令输出融合成可交互控制环，强调线上排查的 requests、Metrics API、公式代入、Ready 状态和 scale behavior。

### Screenshot Review

- 桌面：PNG 捕获受平台权限限制；保存 `.codex-artifacts/visualizations/hpa/desktop.svg`。
- 移动端：PNG 捕获受平台权限限制；保存 `.codex-artifacts/visualizations/hpa/mobile.svg`。
- 截图结论：桌面 SVG 可识别 Deployment、Pod CPU 行、Metrics Server、HPA Controller、Scale 子资源、稳定窗口和底部排障信号；移动端摘要完整展示五步流程和四个事实卡片。
- 验收备注：Chrome DevTools MCP profile 被占用，Browser 插件返回 in-app browser 不可用；本轮使用 `npm run build`、`npm run test:data -- --grep "kubernetes HPA"`、完整 `npm run test:data`、`git diff --check` 和本地 SVG 审查图完成验收。

## Kubernetes Scheduler Visualization

### Online Image References

- `source`：Kubernetes Docs - Scheduling Framework，https://kubernetes.io/docs/concepts/scheduling-eviction/scheduling-framework/
  - `image`：`https://kubernetes.io/images/docs/scheduling-framework-extensions.png`
  - `role`：main
  - `qualityReason`：官方图清楚呈现 PreEnqueue、QueueSort、Scheduling Cycle、Binding Cycle 和扩展点顺序，是调度周期主构图的权威参考。
  - `takeaways`：主画布采用 Pending Pod、Scheduling Queue、Framework extension points、Filter、Score、Binding Cycle 的横向推进结构。
  - `originalChanges`：改成本项目的五步交互模拟，加入节点快照、插件结果、Score 条形图、底部诊断信号和移动端流程卡。
- `source`：Kubernetes Docs - Kubernetes Scheduler，https://kubernetes.io/docs/concepts/scheduling-eviction/kube-scheduler/
  - `image`：页面中的 scheduler filter、score、bind 行为说明。
  - `role`：supporting
  - `qualityReason`：官方概念页定义 kube-scheduler 如何过滤节点、给剩余节点打分并选择最高分节点。
  - `takeaways`：步骤保留 Filter feasible nodes、Score and pick Node、Bind and verify 三段主动作。
  - `originalChanges`：把文字流程转换为节点列表、插件行和绑定状态，高亮 `0/N nodes are available` 与 `spec.nodeName` 验收信号。
- `source`：Kubernetes Docs - Assigning Pods to Nodes，https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node/
  - `image`：页面中的 nodeSelector、node affinity 和 preferred weight 示例。
  - `role`：supporting
  - `qualityReason`：官方示例能校准节点标签、硬性约束、软性偏好和权重进入 Filter/Score 的方式。
  - `takeaways`：Filter 插件区展示 NodeAffinity 约束，Score 区展示拓扑和资源权重。
  - `originalChanges`：用 `zone in a,c` 与 `node-c score=92` 表达约束输入和归一化结果。
- `source`：Kubernetes Docs - Taints and Tolerations，https://kubernetes.io/docs/concepts/scheduling-eviction/taint-and-toleration/
  - `image`：页面中的 `kubectl taint`、`NoSchedule` 和 tolerations YAML 示例。
  - `role`：supporting
  - `qualityReason`：官方说明 taint/toleration 如何影响调度可行性，适合补足 Pending 事件中的失败原因。
  - `takeaways`：Filter 插件区加入 `TaintToleration` 失败行，节点快照保留 taints 语义。
  - `originalChanges`：把 taint 结果压缩成 `gpu:NoSchedule fail`，配合 FailedScheduling Events 做排障线索。
- `source`：Kubernetes Docs - Pod Priority and Preemption，https://kubernetes.io/docs/concepts/scheduling-eviction/pod-priority-preemption/
  - `image`：页面中的 priority class 与 preemption 调度说明。
  - `role`：supporting
  - `qualityReason`：官方文档补充 PostFilter/Preemption 作为无可行节点时的调度恢复路径。
  - `takeaways`：右侧理解重点可提示优先级、抢占和 Pending 恢复分支。
  - `originalChanges`：主模拟保持普通 Filter/Score/Bind 链路，底部和任务文案保留 FailedScheduling 与抢占排查入口。

### Reference Breakdown

- 主体布局：左侧 Pending Pod，中部 Scheduling Queue 与 Framework extension points，下方 Filter plugins 和 Node snapshot，右侧 Score plugins 与 Binding Cycle，底部四个诊断信号。
- 视觉焦点：`checkout-7f9c` 从 `activeQ` 进入 `default-scheduler profile`，经过 Filter 选出 `node-a,node-c`，Score 选择 `node-c=92`，Binding 写回 `spec.nodeName=node-c`。
- 领域对象：Pending Pod、Scheduling Queue、scheduler profile、QueueSort、PreFilter、Filter、Score、NormalizeScore、Reserve、Permit、Bind、NodeInfo cache、FailedScheduling Events。
- 容器层级：Pod 输入决定调度上下文；Profile 决定插件链；Filter/Score 使用节点快照；Binding Cycle 写入 API Server；kubelet 接手目标节点启动。
- 连线方向：Pod watch -> activeQ -> profile extension points -> Filter -> Node snapshot -> Score -> Binding Cycle -> kubelet node-c。
- 状态表达：五步通过透明度、边框、箭头、插件行、分数条和底部信号从等待状态推进到 `Scheduled=True`。
- 颜色策略：品牌蓝表示 Pod/Queue，青色表示 Profile 和 Binding 审批，橙色表示 Filter 约束，绿色表示 Score 胜出和绑定完成，红色表示被过滤节点与 Pending 风险。
- 文字密度：桌面 SVG 保留对象名、插件名和关键读数；解释留给右侧任务面板、理解重点和底部步骤条。
- 交互节奏：读取待调度 Pod -> 选择调度 Profile -> 过滤可行节点 -> 打分并选 Node -> 绑定并验证。
- 原创改造点：把官方扩展点图拆成生产排障视角，加入 Pending 事件、节点快照、插件结果、Score 归一化和 Binding 验收信号。

### Screenshot Review

- 桌面：PNG 捕获受平台权限限制；保存 `.codex-artifacts/visualizations/scheduler/desktop.svg` 与 `.codex-artifacts/visualizations/scheduler/desktop.html`。
- 移动端：PNG 捕获受平台权限限制；保存 `.codex-artifacts/visualizations/scheduler/mobile.svg`。
- 截图结论：桌面 SVG 可识别 Pending Pod、Scheduling Queue、Framework extension points、Filter plugins、Node snapshot、Score plugins、Binding Cycle 和底部四个信号；移动端 SVG 展示五步流程和指标摘要。
- 验收备注：Chrome DevTools MCP profile 被占用，Browser 插件返回 in-app browser 不可用，Playwright/Chromium 受平台权限限制；本轮使用官方页面视觉确认、`npm run build`、`npm run test:data -- --grep "kubernetes scheduler"`、完整 `npm run test:data`、`git diff --check` 和真实 React `SimulationStage` 渲染的 SVG/HTML 审查图完成验收。

## Kubernetes Taints and Tolerations Visualization

### Online Image References

- `source`：Kubex - Taints and Tolerations，https://kubex.ai/blog/kubernetes-taints/
  - `image`：`https://kubex.ai/wp-content/uploads/article-k8s-capacity-taint-tollerations.svg`
  - `role`：main
  - `qualityReason`：SVG 图直接表达 Node taint 与 Pod toleration 的匹配关系，适合作为主构图参考；HTTP HEAD 曾返回 `200 image/svg+xml`。
  - `takeaways`：主画布采用 Node taints、Pod tolerations 和匹配判定三段结构。
  - `originalChanges`：扩展为五步排障状态模型，加入 TaintToleration Filter、NoExecute eviction、Events evidence、底部信号和移动端流程卡。
- `source`：Kubernetes Docs - Taints and Tolerations，https://kubernetes.io/docs/concepts/scheduling-eviction/taint-and-toleration/
  - `image`：页面中的 `kubectl taint`、effect、tolerations YAML、`tolerationSeconds` 和 NoExecute 行为示例。
  - `role`：supporting
  - `qualityReason`：官方定义 `NoSchedule`、`PreferNoSchedule`、`NoExecute`、Equal/Exists 和容忍秒数语义。
  - `takeaways`：Filter 面板展示 NoSchedule 硬过滤，YAML 面板展示 `spec.tolerations`，驱逐面板展示 `tolerationSeconds=300`。
  - `originalChanges`：将长文档规则压缩为节点行、Pod 行、Filter 行和底部四个诊断信号。
- `source`：Amazon EKS Best Practices - Hybrid nodes Kubernetes pod failover，https://docs.aws.amazon.com/eks/latest/best-practices/hybrid-nodes-kubernetes-pod-failover.html
  - `image`：页面中的故障转移、节点不可达和 Pod 重新调度语境。
  - `role`：supporting
  - `qualityReason`：生产故障转移文档能校准 NoExecute、节点不可达、容忍时间和重新调度观察点。
  - `takeaways`：右侧 NoExecute eviction 面板使用 `unreachable:NoExecute` 和 reschedule 状态。
  - `originalChanges`：把故障转移语境融合进同一画布，使专用节点隔离和节点故障驱逐共用一条排障链。
- `source`：Komodor - Kubernetes Taints and Tolerations: A Practical Guide，https://komodor.com/learn/kubernetes-taints-and-tolerations-a-practical-guide/
  - `image`：页面中的 taints/tolerations 操作示例、排障语境和常见 effect 说明。
  - `role`：supporting
  - `qualityReason`：实践指南适合补充 `kubectl describe pod`、FailedScheduling 和常见配置错误。
  - `takeaways`：Events evidence 面板保留 `FailedScheduling`、`NodeNotReady`、`Scheduled` 的事件链。
  - `originalChanges`：用项目自己的事件时间线替代表格输出，突出从事件回查节点 taint 和 Pod tolerations 的顺序。
- `source`：Kubecost - Kubernetes Taints and Tolerations，https://www.kubecost.com/kubernetes-devops-tools/kubernetes-taints/
  - `image`：页面中的专用节点、工作负载隔离和调度策略说明。
  - `role`：supporting
  - `qualityReason`：工程语境覆盖成本、专用节点和工作负载放置，适合补足使用场景。
  - `takeaways`：Node taints 面板保留 `dedicated=gpu:NoSchedule`，Pod 面板保留普通 workload 与 gpu workload 对比。
  - `originalChanges`：把场景说明转成 `gpu-job allowed / checkout rejected` 的可视化状态。

### Reference Breakdown

- 主体布局：左侧 Node taints 与 Pod tolerations，中部 TaintToleration Filter 与 `spec.tolerations` YAML，右侧 NoExecute eviction 与 Events evidence，底部四个诊断信号。
- 视觉焦点：`dedicated=gpu:NoSchedule` 通过 Pod `Equal dedicated=gpu` 容忍进入候选节点；普通 `checkout` Pod 被 Filter 拦下并产生 `FailedScheduling`。
- 领域对象：Node、taint key/value/effect、Pod tolerations、Equal/Exists、TaintToleration Filter、NoSchedule、PreferNoSchedule、NoExecute、tolerationSeconds、FailedScheduling Events、node controller、taint manager。
- 容器层级：Node 保存排斥规则；Pod spec 声明可接受规则；Scheduler Filter 在调度周期做可行性判定；Node controller 在节点异常时加 NoExecute；Events 负责验收证据链。
- 连线方向：Node taint 进入 NodeInfo，Pod toleration 进入 Filter，Filter 输出 allow/reject 与 FailedScheduling，NoExecute 进入驱逐计时，Events 回连到 Pod placement 验收。
- 状态表达：五步分别高亮加污点、声明容忍、Filter 判定、NoExecute 驱逐、事件链验证；每步更新节点行、Pod 行、Filter 行、事件行和底部信号。
- 颜色策略：品牌蓝表示 Node taint，青色表示 Pod toleration，橙色表示 Filter/FailedScheduling，红色表示 NoExecute/驱逐，绿色表示最终调度与恢复。
- 文字密度：桌面 SVG 只保留对象名、短读数和关键 effect；规则解释放入右侧任务面板和底部步骤条。
- 交互节奏：给节点加污点 -> 声明 Pod 容忍 -> Filter 判定调度 -> NoExecute 驱逐 -> 验证事件链。
- 原创改造点：把单张 taint/toleration 匹配图、官方 effect 语义和生产 failover 语境融合为定制状态模型，强调 Pending 与节点故障两类排障路径。

### Screenshot Review

- 桌面：PNG 捕获受平台权限限制；保存 `.codex-artifacts/visualizations/taint-toleration/desktop.svg` 与 `.codex-artifacts/visualizations/taint-toleration/desktop.html`。
- 移动端：PNG 捕获受平台权限限制；保存 `.codex-artifacts/visualizations/taint-toleration/mobile.svg`。
- 截图结论：桌面 SVG 可识别 Node taints、Pod tolerations、TaintToleration Filter、spec.tolerations、NoExecute eviction、Events evidence 和底部四个信号；移动端 SVG 展示五步流程和指标摘要。
- 验收备注：本地预览端口监听受沙箱权限限制，`npx vite --host 127.0.0.1 --port 4276` 返回 `listen EPERM`；Chrome DevTools MCP profile 被占用，Browser 插件返回 in-app browser 不可用。本轮使用主参考图 URL/HTTP HEAD、`npm run test:data -- --grep "taints and tolerations"`、`npm run build`、完整 `npm run test:data`、`git diff --check` 和真实 React `SimulationStage` 渲染的 SVG/HTML 审查图完成验收。

## MySQL Replication Visualization

### Online Image References

- `source`：MySQL Reference Manual - Source to Replica Replication，https://dev.mysql.com/doc/refman/8.4/en/group-replication-primary-secondary-replication.html
  - `image`：页面中的 `Figure 20.1 Asynchronous replication` 与 `Figure 20.2 Semisynchronous replication`，展示 source 到 replica 的复制通道和半同步确认节奏。
  - `role`：main
  - `qualityReason`：官方图直接展示 source、replica、异步提交与半同步 ACK，是本轮主从复制链路的最权威主构图。
  - `takeaways`：主画布采用左侧 Source commit、中间复制通道与 ACK、右侧 Replica 接收和应用、底部延迟指标。
  - `originalChanges`：把官方静态复制结构改造成五步交互链路，加入 Retrieved/Executed GTID、Relay backlog 和 `Seconds_Behind_Source` 观测。
- `source`：Percona - MySQL with Diagrams Part One: Replication Architecture，https://www.percona.com/blog/mysql-with-diagrams-part-one-replication-architecture/
  - `image`：文章中的 MySQL replication architecture 图解，覆盖 Binlog、Binlog Dump Thread、Replica I/O Thread、Relay Log 和 SQL Thread。
  - `role`：supporting
  - `qualityReason`：工程图解把复制线程和日志对象分层表达，适合补齐官方图中较少展开的内部线程与 relay log 细节。
  - `takeaways`：画布保留 Dump Thread、I/O Receiver、Relay Log、SQL Applier 四个节点。
  - `originalChanges`：把图解式对象替换成本项目自己的 SVG 面板、颜色体系和中文排障文案。
- `source`：MySQL Reference Manual - Replication Implementation，https://dev.mysql.com/doc/refman/8.4/en/replication-implementation.html
  - `image`：页面中的复制实现说明，覆盖 source binary log、replica relay log 和复制事件流。
  - `role`：supporting
  - `qualityReason`：官方结构说明直接定义 Source 到 Replica 的复制边界，适合校准对象命名和链路方向。
  - `takeaways`：主流程保持 Source -> Binary Log -> Relay Log -> Replica Apply。
  - `originalChanges`：将文字结构转为可逐步高亮的链路模型。
- `source`：MySQL Reference Manual - Replication Threads，https://dev.mysql.com/doc/refman/8.4/en/replication-threads.html
  - `image`：页面中的 source dump thread、replica I/O receiver 和 SQL applier 线程说明。
  - `role`：supporting
  - `qualityReason`：官方线程职责划分清楚，适合校准画布中的 dump、receiver 和 applier 节点。
  - `takeaways`：把读取端和应用端分开呈现，避免把复制延迟混成单一读数。
  - `originalChanges`：用两个面板分别承载 network retrieval lag 和 apply lag，底部指标负责最终判断。
- `source`：MySQL Reference Manual - Replica Logs，https://dev.mysql.com/doc/refman/8.4/en/replica-logs.html
  - `image`：页面中的 relay log 和复制元数据说明。
  - `role`：supporting
  - `qualityReason`：官方定义 relay log 是副本本地复制事件缓存，适合支撑中右侧 relay log 容器。
  - `takeaways`：Relay Log 面板显示 `mysql-relay.000091`、position 和 backlog。
  - `originalChanges`：把日志文件和连接元数据转成可高亮的 receiver state、relay file、relay pos 三行。
- `source`：MySQL Reference Manual - SHOW REPLICA STATUS Statement，https://dev.mysql.com/doc/refman/8.4/en/show-replica-status.html
  - `image`：页面中的 `SHOW REPLICA STATUS` 字段说明。
  - `role`：supporting
  - `qualityReason`：官方字段可直接映射到线上排障读数，尤其是 retrieved/applied GTID、relay log position 和 Seconds_Behind_Source。
  - `takeaways`：底部信号保留 Retrieved GTID、Executed GTID、Relay backlog、Seconds behind。
  - `originalChanges`：把状态字段压缩成四个阶段性指标，随五步推进从落后到收敛。
- `source`：MySQL Reference Manual - Semisynchronous Replication，https://dev.mysql.com/doc/refman/8.4/en/replication-semisync.html
  - `image`：页面中的半同步确认流程说明。
  - `role`：supporting
  - `qualityReason`：补充 ACK 对 source 提交等待和复制可靠性的影响。
  - `takeaways`：网络面板加入 ACK received 状态，解释 source commit wait 与 receiver 已接收的关系。
  - `originalChanges`：只保留半同步 ACK 的关键等待点，主流程仍聚焦普通 source-to-replica 链路。

### Reference Breakdown

- 主体布局：左上应用写入与 Source MySQL，中上 Binary Log Stream，右下 Replica I/O Receiver 与 Relay Log，左下 SQL Applier，中下网络与 ACK，底部四个复制指标。
- 视觉焦点：`T43 COMMIT -> mysql-bin.000143:884 -> mysql-relay.000091:1218 -> Executed_Gtid_Set += uuid:43`。
- 领域对象：Source MySQL、Binary Log、Binlog Dump Thread、Replica I/O Receiver、Relay Log、SQL Applier、Coordinator、worker、Retrieved_Gtid_Set、Executed_Gtid_Set、Seconds_Behind_Source。
- 容器层级：Source 负责提交顺序和 Binlog；Dump Thread 负责顺序推送；Replica I/O Receiver 负责写 relay log；SQL Applier 负责按依赖重放；底部信号负责区分读取延迟和应用延迟。
- 连线方向：应用写入进入 Source；Source 到 Binary Log Stream；Dump Thread 到 Receiver 和 Relay Log；Relay Log 回流到 SQL Applier；Applier 完成后回到副本读可见。
- 状态表达：五步通过 active class 控制节点、箭头、事件行、worker 行和底部指标从灰态到高亮。
- 颜色策略：品牌蓝表示 source commit 与应用可见，青色表示 dump thread 和 binlog stream，橙色表示 receiver/relay/ACK，绿色表示 applier 收敛和延迟归零。
- 文字密度：SVG 保留对象、文件名、GTID 和关键状态；解释放到右侧面板和底部步骤条。
- 交互节奏：五步依次推进“Source 提交 -> 读取 Binlog -> 写入 Relay Log -> Applier 重放 -> 延迟收敛”。
- 原创改造点：融合官方复制结构、复制线程、relay log、SHOW REPLICA STATUS 和半同步 ACK，做成面向读写分离一致性与复制延迟排障的链路模拟器。

### Screenshot Review

- 桌面：PNG 截图受当前平台权限限制；保存本地 SVG 验收图 `.codex-artifacts/visualizations/replication/desktop.svg`。
- 移动端：PNG 截图受当前平台权限限制；保存本地 SVG 验收图 `.codex-artifacts/visualizations/replication/mobile.svg`。
- 截图结论：桌面 SVG 验收图可识别 Source MySQL、Binary Log Stream、Binlog Dump Thread、网络 ACK、Replica I/O Receiver、Relay Log、SQL Applier 和底部复制指标；移动端 SVG 摘要完整展示五步链路和四个延迟读数。
- 验收备注：Chrome DevTools MCP profile 被占用，Browser 插件返回 in-app browser 不可用，Playwright Chromium 受 macOS Mach port 权限限制，QuickLook PNG 转换受沙箱初始化限制；本轮使用构建产物、数据测试、静态 SVG 验收图和代码检查完成验收。

## MySQL EXPLAIN Visualization

### Online Image References

- `source`：MySQL Workbench Manual - Tutorial: Using Explain to Improve Query Performance，https://dev.mysql.com/doc/workbench/en/wb-tutorial-visual-explain-dbt3.html
  - `image`：页面中的 `DBT-3 Explain Tutorial: Visual Explain with Full Table Scan`、`Visual Explain with Index Range Scan`、`Visual Explain with Multiple-Column Index Range Scan`，图片 URL 分别为 `https://dev.mysql.com/doc/workbench/en/images/wb-visual-explain-dbt3-full-table-scan.png`、`https://dev.mysql.com/doc/workbench/en/images/wb-visual-explain-dbt3-index-range-scan.png`、`https://dev.mysql.com/doc/workbench/en/images/wb-visual-explain-dbt3-index-range-scan-best.png`。
  - `role`：main
  - `qualityReason`：官方 Workbench 教程图，连续展示 Visual Explain 从 Full Table Scan 到 Index Range Scan、再到复合索引优化的视觉节点变化和扫描行数变化。
  - `takeaways`：主画布采用上方 Visual Explain 节点链路，下方 Tabular EXPLAIN 对比表，右侧索引改写与验证信号。
  - `originalChanges`：把 Workbench 静态截图改造成五步交互诊断台，使用项目自己的 SVG 卡片、状态高亮、中文排障文案和移动端摘要。
- `source`：MySQL Workbench Manual - Tutorial: Using Explain to Improve Query Performance，https://dev.mysql.com/doc/workbench/en/wb-tutorial-visual-explain-dbt3.html
  - `image`：页面中的 Tabular Explain 对比图与 Query Comparison 表，覆盖 `ALL`、`range`、`possible_keys`、`key`、`Rows Scanned` 和 `Extra info`。
  - `role`：supporting
  - `qualityReason`：同一官方案例给出完整数值变化，能把视觉节点和表格字段对应起来。
  - `takeaways`：表格区保留 `type`、`key`、`rows`、`Extra` 四个核心读数，行数从 `1.50M` 收敛到 `18`。
  - `originalChanges`：将多张表格截图压缩为三行计划快照，突出排障判断顺序。
- `source`：MySQL 8.4 Reference Manual - EXPLAIN Output Format，https://dev.mysql.com/doc/refman/8.4/en/explain-output.html
  - `image`：页面中的 EXPLAIN Output Columns、Join Types、Extra Information 和 Output Interpretation 说明。
  - `role`：supporting
  - `qualityReason`：官方定义 EXPLAIN 输出列语义，明确 `type`、`possible_keys`、`key`、`rows`、`filtered`、`Extra` 的解读依据。
  - `takeaways`：右侧理解重点和底部指标采用官方列名，避免把计划诊断简化成单一索引命中判断。
  - `originalChanges`：将长文档语义拆成可交互读数卡，让用户按访问类型、候选索引、扫描行数和额外操作读计划。
- `source`：MySQL 8.4 Reference Manual - EXPLAIN Statement，https://dev.mysql.com/doc/refman/8.4/en/explain.html
  - `image`：页面中的 `EXPLAIN ANALYZE`、FORMAT 选项和可解释语句说明。
  - `role`：supporting
  - `qualityReason`：官方说明 EXPLAIN 语句能力边界和实测验证入口，适合补足估算与实际耗时对照。
  - `takeaways`：最后一步加入 `EXPLAIN ANALYZE`、慢查询日志和返回行数校验。
  - `originalChanges`：把验证阶段作为闭环步骤，连接计划估算、统计信息和线上延迟证据。

### Reference Breakdown

- 主体布局：左侧慢 SQL 与函数谓词，中上 Visual Explain 节点链，中下 Tabular EXPLAIN 三行对比，右侧谓词改写与复合索引，底部 access type、chosen key、rows estimate、actual time 信号。
- 视觉焦点：`orders` 查询从 `type=ALL / key=NULL / rows=1.50M`，推进到 `range / i_o_orderdate / rows=32642`，最终收敛到 `range / io_clerk_date / rows=18`。
- 领域对象：slow SQL、optimizer、Visual Explain node、Tabular EXPLAIN row、access type、possible key、chosen key、rows estimate、Extra、SARGable predicate、composite index、EXPLAIN ANALYZE。
- 容器层级：慢 SQL 面板展示问题输入；Visual Explain 面板展示访问路径；表格面板展示计划字段；索引面板展示改写动作；底部信号连接线上验证。
- 连线方向：慢 SQL 进入 optimizer；optimizer 输出视觉计划；改写谓词回到索引候选；复合索引影响计划行；最终进入 `EXPLAIN ANALYZE` 校验。
- 状态表达：五步通过透明度、边框色、箭头、表格行和底部信号显隐表达生成计划、识别全表扫描、改写范围谓词、压缩扫描行数和校验估算。
- 颜色策略：品牌蓝表示 EXPLAIN 入口，红色表示全表扫描风险，青色表示 range scan 改进，绿色表示复合索引收敛，橙色表示仍需观察的谓词或估算。
- 文字密度：画布保留 SQL 摘要、列名、索引名和关键数值；详细解释放在右侧任务、操作面板和底部步骤条。
- 交互节奏：五步依次推进“生成执行计划 -> 识别全表扫描 -> 改写范围谓词 -> 压缩扫描行数 -> 校验估算”。
- 原创改造点：借鉴官方 Workbench Visual Explain 的节点变化和表格字段，把静态优化教程改造成面向慢 SQL 排障的执行计划诊断台。

### Screenshot Review

- 桌面：captured `.codex-artifacts/visualizations/explain/desktop.png`
- 移动端：captured `.codex-artifacts/visualizations/explain/mobile.png`
- 截图结论：桌面画布可识别 Slow SQL、Visual Explain、Tabular EXPLAIN、索引改写、EXPLAIN ANALYZE、右侧任务面板和底部步骤进度；移动端纵向摘要完整展示五个阶段、四个核心读数、当前任务和步骤进度。
- 验收备注：Chrome DevTools MCP 在 `http://127.0.0.1:4212/KnowledgeGraph/` 完成 Mysql 分类、搜索 `EXPLAIN`、详情页进入、模拟器进入和五步交互验收；最终状态显示 `range`、`io_clerk_date`、`rows=18`、`0.234s checked`。截图尺寸：桌面 2880x1882，移动端 1000x4696。
- 验证结果：`npm run build` 通过；`npm run test:data` 通过 4 项；`git diff --check` 通过。

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

## Linux epoll Visualization

### Online Image References

- `source`：Linux man-pages: epoll(7)，https://man7.org/linux/man-pages/man7/epoll.7.html
  - `image`：官方手册中的 epoll 实例由 interest list 和 ready list 组成的结构说明。
  - `role`：main
  - `qualityReason`：权威定义 epoll instance、interest list、ready list、LT/ET 与 epoll_wait 语义，是本轮结构建模的主依据。
  - `takeaways`：主画布采用 epoll 实例为中心，把 Interest List 和 Ready List 放在同一个内核对象内。
  - `originalChanges`：加入 socket wait queues、callback path、events[] 批量返回和业务 drain/rearm，把文字结构扩展为五步状态模型。
- `source`：Linux man-pages: epoll_ctl(2)，https://man7.org/linux/man-pages/man2/epoll_ctl.2.html
  - `image`：页面中的 `epoll_ctl()` op、fd、events 参数说明。
  - `role`：supporting
  - `qualityReason`：官方校准 fd 注册、事件掩码、EPOLLIN/EPOLLOUT/EPOLLET/EPOLLONESHOT 等标志。
  - `takeaways`：Interest List 行展示 fd、事件 mask 和业务 data。
  - `originalChanges`：把参数表转成 `fd12/fd18/fd31` 三行可高亮注册清单。
- `source`：man7.org Training - epoll API，https://man7.org/training/download/epoll_API.pdf
  - `image`：培训材料中的 epoll API、interest list、ready list、epoll_wait 工作流图。
  - `role`：supporting
  - `qualityReason`：图形化表达清晰，适合验证本项目的布局方向和教学节奏。
  - `takeaways`：左侧应用线程、中心 epoll 实例、右侧 I/O readiness 的方向关系。
  - `originalChanges`：采用项目统一 SVG 舞台，保留方向关系，改造为可交互步骤和底部信号卡片。
- `source`：Arthur Chiao - IO Multiplexing and epoll，https://arthurchiao.art/blog/io-multiplexing-epoll-zh/
  - `image`：文章中的 I/O 多路复用、select/poll/epoll 对比和事件通知结构图。
  - `role`：supporting
  - `qualityReason`：中文深度资料，能补足 callback、就绪队列和实现层视角。
  - `takeaways`：事件到达后由内核通知就绪，应用再批量处理。
  - `originalChanges`：用 socket wait queues 与 ready list 的弯曲箭头表达回调入队。
- `source`：小林 coding - 高性能网络模式，https://xiaolincoding.com/os/8_network_system/selete_poll_epoll.html
  - `image`：页面中的 select/poll/epoll 差异、红黑树与就绪队列图解。
  - `role`：supporting
  - `qualityReason`：高质量中文图解，能帮助学习者理解 epoll 相对轮询扫描的收益。
  - `takeaways`：注册集合持久化、就绪集合单独返回、ET 模式需要 drain 到 EAGAIN。
  - `originalChanges`：把红黑树/链表实现细节抽象为 Interest List / Ready List，并用 LT/ET 信号卡呈现排障重点。

### Reference Breakdown

- 主体布局：左侧事件循环线程，中部 eventpoll 实例，实例内分 Interest List 和 Ready List，右侧 Socket wait queues 与 Worker dispatch，底部四个观测信号。
- 视觉焦点：`epfd=7`、`fd18 EPOLLIN | EPOLLET`、`fd18 -> ready list`、`events[0..2]`、`read until EAGAIN` 依次高亮。
- 领域对象：epoll fd、eventpoll、interest list、ready list、socket wait queue、callback、events 数组、LT/ET、EAGAIN、rearm。
- 容器层级：应用线程持有 epfd；内核 eventpoll 管理关注集合与就绪集合；socket wait queue 负责 I/O 就绪回调；业务 handler 消费事件。
- 连线方向：应用创建 epfd -> 注册 fd 到 Interest List -> socket ready callback 推入 Ready List -> epoll_wait 返回 events[] -> handler drain/rearm。
- 状态表达：每一步通过透明度、边框色、箭头和底部信号值显隐表达当前阶段。
- 颜色策略：品牌蓝表示创建 epfd，青色表示注册关注集合，橙色表示 I/O ready，绿色表示批量返回，红色表示 ET drain 与公平性风险。
- 文字密度：画布保留 fd、mask、callback、events、EAGAIN 等关键短语；解释放在右侧面板和步骤条。
- 交互节奏：创建实例 -> 注册 fd -> 就绪回调 -> epoll_wait 批量取出 -> LT/ET drain 与 rearm。
- 原创改造点：把官方两列表述、培训图和中文实现图解融合为事件通知状态模型，强调高并发服务中“持久注册 + 就绪批量返回 + drain 语义”的工程收益。

### Screenshot Review

- 桌面：PNG 捕获受平台权限限制；保存 `.codex-artifacts/visualizations/epoll/desktop.svg`。
- 移动端：PNG 捕获受平台权限限制；保存 `.codex-artifacts/visualizations/epoll/mobile.svg`。
- 截图结论：桌面 SVG 可识别事件循环线程、eventpoll epfd、Interest List、Ready List、Socket wait queues、Worker dispatch 和底部四个信号；移动端 SVG 展示五步流程卡片。
- 验收备注：新增数据测试先失败于通用 OS 模型，补齐 dedicated builder 后通过；Browser 插件不可用，Playwright Chromium 受 macOS Mach port 权限限制，`sips` 无法从 SVG 提取 PNG；本轮使用本地 SVG 审查图完成截图验收。

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

### 2026-06-02 13:24 CST

- Branch/Pull：当前分支 `main`；`git fetch origin main` 与 `git pull --ff-only origin main` 成功，远端已同步到 `e268109`。
- Existing Work：工作区已有 MySQL `EXPLAIN` 可视化现场，本轮继续验收并提交。
- Selected：MySQL `EXPLAIN`，原因是 Visual Explain、type/key/rows/Extra、谓词可索引性、复合索引和 `EXPLAIN ANALYZE` 能形成高价值慢 SQL 诊断状态模型。
- Candidate Sources：普通搜索与官方页面确认保留 MySQL Workbench Visual Explain 教程为主参考，MySQL EXPLAIN Output Format 与 EXPLAIN Statement 为辅助参考。
- Browser Note：Chrome DevTools MCP 在 `http://127.0.0.1:4212/KnowledgeGraph/` 完成 Mysql 分类、搜索 `EXPLAIN`、详情页进入、模拟器进入、五步交互和桌面/移动端截图验收；验收中修正了 range 阶段 access type 指标。
- Implementation：新增 `mysql:explain` 专用 `state-model` 构建器、EXPLAIN SVG 舞台、移动端纵向摘要、响应式样式和 EXPLAIN 专用来源。
- Screenshot Review：保存 `.codex-artifacts/visualizations/explain/desktop.png`（2880x1882）与 `.codex-artifacts/visualizations/explain/mobile.png`（1000x4696）；桌面和移动端验收图均可读。
- Verification：`npm run build` 通过；`npm run test:data` 通过 4 项；`git diff --check` 通过。
- Commit/Push：功能提交 `37dc753 feat: add explain visualization` 与后续本地进度提交已存在；本轮补充 access type 指标修正与最新浏览器验收记录后继续执行 rebase 和 push。
- Resume Point：同步完成后继续 MySQL `Replication` 或 `Replication Lag` 找图与设计。

### 2026-06-02 14:30 CST

- Branch/Pull：当前分支 `main`；`git fetch origin main` 与 `git pull --ff-only origin main` 成功，远端已同步到 `34da110`。
- Selected：MySQL `Replication`，原因是 Source commit、Binlog Dump Thread、Replica I/O Receiver、Relay Log、SQL Applier、GTID 集合差距和 `Seconds_Behind_Source` 能承接已完成的 Binlog 模拟器，形成强工程排障链路。
- Candidate Sources：普通搜索筛选约 12 个候选来源；保留 MySQL 官方 Source to Replica Replication 异步/半同步图为主参考，Percona Replication Architecture、Replication Implementation、Replication Threads、Replica Logs、SHOW REPLICA STATUS、Semisynchronous Replication 和 Binary Log 为辅助参考。
- Browser Note：Chrome DevTools MCP profile 被占用；Browser 插件返回 in-app browser 不可用；Playwright Chromium 受 macOS Mach port 权限限制；QuickLook PNG 转换受沙箱初始化限制。本轮使用官方页面 URL、搜索结果、构建产物和本地 SVG 验收图完成参考确认与截图验收。
- Implementation：新增 `mysql:replication` 专用 `step-simulation` 构建器、Replication SVG 舞台、移动端纵向摘要、响应式样式，并给 MySQL 主从复制知识点补充官方复制来源引用。
- Screenshot Review：PNG 捕获受平台权限限制；保存 `.codex-artifacts/visualizations/replication/desktop.svg` 与 `.codex-artifacts/visualizations/replication/mobile.svg`；桌面 SVG 可识别 Source、Binary Log Stream、Dump Thread、Receiver、Relay Log、SQL Applier 和底部复制指标，移动端摘要完整展示五步和四个延迟读数。
- Verification：`npm run build` 通过；`npm run test:data` 通过 4 项；`git diff --check` 通过。
- Next Candidate：MySQL `Replication Lag` 或 `GTID`。

### 2026-06-02 15:52 CST

- Branch/Pull：当前分支 `main`；`git fetch origin main` 与 `git pull --ff-only origin main` 成功，远端已同步到 `5cf0cce`。
- Selected：MySQL `Replication Lag`，原因是 Source commit rate、I/O receiver、Relay backlog、SQL applier、GTID gap、`Seconds_Behind_Source` 和读副本旧读风险能承接已完成的 Replication 可视化，形成直接可用的线上排障模型。
- Candidate Sources：普通搜索筛选约 12 个候选来源；Chrome MCP 视觉确认 Percona 复制架构图，保留 1 张主参考图和 4 个辅助参考来源。
- Online Image References：
  - source：Percona - MySQL with Diagrams Part One: Replication Architecture；image：页面首图 `https://www.percona.com/wp-content/uploads/2026/03/mysqlreplication-diagram-1-scaled.png`；role：main；qualityReason：图中清楚呈现 source、binary log、replication receiver、relay log、SQL applier 和 metadata repositories；takeaways：主构图采用 source -> receiver -> relay log -> applier 的横向管线，并把延迟观测放到底部；originalChanges：改造成延迟排障状态模型，突出 Retrieved/Executed GTID 差距、relay backlog、worker wait 和 stale read guard。
  - source：MySQL Reference Manual - SHOW REPLICA STATUS Statement；image：状态字段说明；role：supporting；qualityReason：官方定义 `Seconds_Behind_Source`、`Retrieved_Gtid_Set`、`Executed_Gtid_Set` 等排障字段；takeaways：底部信号区使用 GTID gap、relay backlog、Seconds behind 和 read route；originalChanges：把命令字段转成四个随步骤变化的仪表读数。
  - source：MySQL Reference Manual - Replica Logs and Status；image：relay log 与状态说明；role：supporting；qualityReason：校准 relay log、connection metadata、applier metadata 的角色；takeaways：中部 Relay Backlog 面板使用队列柱表达积压；originalChanges：用队列高度替代表格文字，强调应用瓶颈。
  - source：MySQL Reference Manual - Replication Threads；image：线程职责说明；role：supporting；qualityReason：官方区分 receiver thread、applier coordinator 和 worker；takeaways：下方 SQL Applier 面板展示 coordinator、worker#1、worker#2；originalChanges：把线程状态转成 active worker、lock wait 和 dependency wait。
  - source：MySQL Reference Manual - The GTID Life Cycle；image：GTID 生命周期文字说明；role：supporting；qualityReason：解释 GTID 生成、传播、retrieved、executed 的顺序；takeaways：左上和中上面板保留 Source/Retrieved/Executed GTID 三行；originalChanges：用 GTID 缺口驱动 stale read 风险和追赶收敛。
- Reference Breakdown：主体布局为上排 Source MySQL、I/O Receiver、Relay Backlog，下排 SQL Applier、读副本风险、Lag Gauge，底部展示 GTID gap、Relay backlog、Seconds behind、Read route；视觉焦点是 `Retrieved uuid:1-560` 与 `Executed uuid:1-521` 的差距；交互节奏按写入突增、I/O 追上、Applier 积压、读到旧数据、追赶收敛推进。
- Implementation：新增 `mysql:replication-lag` 专用 `state-model` 构建器、Replication Lag SVG 舞台、移动端纵向摘要、响应式样式，并给 MySQL 复制延迟知识点补充官方复制状态、延迟和 GTID 来源引用。
- Screenshot Review：Chrome DevTools MCP 在 `http://127.0.0.1:4222/KnowledgeGraph/` 完成 Mysql 分类、搜索 `复制延迟`、详情页进入、模拟器进入、五步交互和桌面/移动端截图验收；保存 `.codex-artifacts/visualizations/replication-lag/desktop.png`（2880x1882）与 `.codex-artifacts/visualizations/replication-lag/mobile.png`（1000x4692），桌面可识别 GTID gap、Relay Backlog、SQL Applier、Lag Gauge 和 stale read guard，移动端五步流程和四个事实卡片可读。
- Verification：`npm run build` 通过；`npm run test:data` 通过 4 项；`git diff --check` 通过。
- Commit/Push Plan：提交 `feat: add replication lag visualization`，再执行 `git pull --rebase origin main` 与 `git push origin main`。
- Next Candidate：MySQL `GTID` 或 `Failover`。

### 2026-06-02 16:12 CST

- Branch/Pull：当前分支 `main`；`git fetch origin main` 与 `git pull --ff-only origin main` 成功，远端已同步到 `144de19`。
- Selected：MySQL `GTID`，原因是 server_uuid:sequence、GTID event、`gtid_executed`、`gtid_purged`、Retrieved/Executed 集合、候选副本对账和 auto-positioning 恢复能承接已完成的 Replication 与 Replication Lag 可视化，形成主从切换定位模型。
- Candidate Sources：普通搜索筛选约 12 个候选来源；Chrome DevTools MCP profile 占用，Browser 插件不可用，本轮用搜索结果、页面 URL 和可访问资料确认 1 张主参考图与 4 个辅助来源。
- Main Reference：Oracle MySQL HA Solutions，第 18 页 GTID failover / latest replica / missing transactions 图。
- Supporting References：MySQL GTID Life Cycle、GTID Format and Storage、GTID Auto-Positioning、HackMySQL GTID Missing Writes。
- Reference Breakdown：采用上排 Source / Binary Log / Replica Sets，下排 Candidate Comparison / Set Diff / Auto Positioning，底部 GTID gap、Candidate、Auto position、Traffic gate 四个信号；视觉焦点是 `Retrieved_Gtid_Set=uuidA:1-581` 与 `Executed_Gtid_Set=uuidA:1-579` 的集合差距。
- Implementation：新增 `mysql:gtid` 专用 `state-model` 构建器、GTID SVG 舞台、移动端纵向摘要、响应式样式、GTID 专用来源和数据测试，并把 GTID 加入 MySQL 核心/可视化清单。
- Screenshot Review：保存 `.codex-artifacts/visualizations/gtid/desktop.svg` 与 `.codex-artifacts/visualizations/gtid/mobile.svg`；PNG 捕获受平台权限限制；桌面 SVG 可识别 GTID token、集合行、候选副本对账、缺失范围和自动定位恢复，移动端五步流程与四个事实卡片可读。
- Browser Note：Chrome DevTools MCP profile 被占用；Browser 插件返回 in-app browser 不可用；Vite preview 端口监听失败；Playwright Chromium 受 macOS Mach port 权限限制；QuickLook PNG 转换被沙箱初始化拦截。
- Verification：新增测试先失败于 `visualPointIds.mysql` 缺少 `gtid`，补实现后 `npm run test:data -- --grep "mysql GTID"` 通过 1 项；`npm run build` 通过；完整 `npm run test:data` 通过 5 项；`git diff --check` 通过。
- Commit/Push Plan：提交 `feat: add gtid visualization`，再执行 `git pull --rebase origin main` 与 `git push origin main`。
- Next Candidate：MySQL `Failover` 或 Kubernetes `CrashLoopBackOff`。

### 2026-06-02 17:16 CST

- Branch/Pull：当前分支 `main`；`git fetch origin main` 与 `git pull --ff-only origin main` 成功，远端已同步到 `c760622`。
- Selected：Kubernetes `CrashLoopBackOff`，原因是 Pod/container 启动、进程退出、kubelet restartPolicy、BackOff 延迟、Events/logs 证据链和修复恢复能形成高价值排障状态模型。
- Candidate Sources：普通搜索筛选约 12 个候选来源；保留 Komodor CrashLoopBackOff cycle 图为主参考，GKE CrashLoopBackOff 排障文档、Kubernetes Pod Lifecycle、Kubernetes probes 和 Sysdig CrashLoopBackOff explanation diagram 为辅助参考。
- Main Reference：Komodor - How to Fix CrashLoopBackOff in Kubernetes? 页面中的 CrashLoopBackOff cycle 图。
- Supporting References：Google Cloud GKE CrashLoopBackOff events、Kubernetes Pod Lifecycle、Kubernetes Liveness/Readiness/Startup Probes、Sysdig CrashLoopBackOff explanation diagram。
- Reference Breakdown：采用左侧 Pod/Container，中部 kubelet Restart Controller 与 BackOff Timer，右侧 Evidence Stack 与 Fix Gate，底部 restartCount、BackOff delay、lastState.reason、Ready condition 四个信号；视觉焦点是 `Running -> Terminated: Error -> Waiting: CrashLoopBackOff -> Ready=True` 的状态迁移。
- Implementation：新增 `kubernetes:crashloopbackoff` 专用 `state-model` 构建器、CrashLoopBackOff SVG 舞台、移动端纵向摘要、响应式样式、CrashLoopBackOff 专用来源和数据测试，并把 CrashLoopBackOff 加入 Kubernetes 核心/可视化清单。
- Screenshot Review：保存 `.codex-artifacts/visualizations/crashloopbackoff/desktop.svg` 与 `.codex-artifacts/visualizations/crashloopbackoff/mobile.svg`；PNG 捕获受平台权限限制；桌面 SVG 可识别 Pod、Container Process、kubelet、BackOff、Events、Evidence 和 Fix Gate，移动端五步流程与四个事实卡片可读。
- Browser Note：Vite preview 已在 `http://127.0.0.1:4234/KnowledgeGraph/` 启动；Chrome DevTools MCP profile 被占用；Browser 插件返回 in-app browser 不可用；Playwright Chromium 受 macOS Mach port 权限限制；QuickLook PNG 转换被沙箱初始化拦截。
- Verification：新增测试先失败于 `visualPointIds.kubernetes` 缺少 `crashloopbackoff`，补实现后 `npm run test:data -- --grep "CrashLoopBackOff"` 通过 1 项；`npm run build` 通过；完整 `npm run test:data` 通过 6 项；`git diff --check` 通过。
- Commit/Push：功能提交 `2026ab3 feat: add crashloopbackoff visualization` 已推送到 `origin/main`。
- Cleanup Note：Vite preview 进程 `node` PID `98500` 仍监听 `tcp:4234`；`kill 98500` 受当前沙箱权限限制返回 `operation not permitted`。
- Next Candidate：Kubernetes `Horizontal Pod Autoscaler` 或 Docker `容器网络`。

### 2026-06-02 19:12 CST

- Branch/Pull：当前分支 `main`；`git fetch origin main` 成功，本地 `HEAD` 与 `origin/main` 均为 `22d3df2` 后通过同步门禁。
- Existing Work：工作区已有 Kubernetes `HPA` 可视化现场，本轮继续补齐来源、进度记录、验收和提交。
- Selected：Kubernetes `Horizontal Pod Autoscaler`，原因是负载升高、Metrics API、desiredReplicas 公式、Scale 子资源和稳定窗口形成清晰的控制环模拟。
- Candidate Sources：普通搜索筛选约 12 个候选来源；保留 Kubernetes HPA 概念页为主参考，HPA walkthrough、Resource Metrics Pipeline、Scale API 和 GKE HPA 文档为辅助参考。
- Reference Breakdown：采用左侧 Deployment 与 Pod CPU 行、中部 Metrics Server、右上 HPA Controller、中下 Scale 子资源、右下稳定窗口、底部四个排障信号；视觉焦点是 `CPU 120% / target 60% -> ceil(3*120/60)=6 -> replicas 3 -> 6`。
- Implementation：新增 `kubernetes:hpa` 专用 `step-simulation` 构建器、HPA SVG 舞台、移动端纵向摘要、响应式样式、HPA 专用来源和数据测试，并给 HPA 知识点补充官方来源引用。
- Screenshot Review：保存 `.codex-artifacts/visualizations/hpa/desktop.svg` 与 `.codex-artifacts/visualizations/hpa/mobile.svg`；PNG 捕获受平台权限限制；桌面 SVG 可识别 Deployment、Pod CPU 行、Metrics Server、HPA Controller、Scale 子资源、稳定窗口和底部排障信号，移动端五步流程与四个事实卡片可读。
- Browser Note：Chrome DevTools MCP profile 被占用；Browser 插件返回 in-app browser 不可用；本轮使用本地 SVG 审查图完成截图验收。
- Verification：`npm run test:data -- --grep "kubernetes HPA"` 通过 1 项；`npm run build` 通过；完整 `npm run test:data` 通过 7 项；`git diff --check` 通过。
- Commit/Push：功能提交 `90e46eb feat: add hpa visualization` 已推送到 `origin/main`；推送后本地 `HEAD` 与 `origin/main` 均为 `90e46eb`。
- Post-push Check：`git ls-remote --heads origin main` 返回 `Could not resolve host: github.com`，但 `git push origin main` 已返回 `22d3df2..90e46eb main -> main`。
- Next Candidate：Docker `容器网络` 或 Kubernetes `Pod 调度`。

### 2026-06-02 20:18 CST

- Branch/Pull：当前分支 `main`；`git fetch origin main` 与 `git pull --ff-only origin main` 成功，开始时本地 `HEAD` 与 `origin/main` 均为 `381b8e0`。
- Selected：Linux `epoll`，原因是 epoll instance、interest list、ready list、socket wait queue callback、`epoll_wait` 批量返回和 LT/ET drain 能形成高价值高并发 I/O 状态模型。
- Candidate Sources：普通搜索筛选约 12 个候选来源；保留 Linux man-pages epoll(7) 为主参考，epoll_ctl(2)、man7 epoll API 培训材料、Arthur Chiao I/O multiplexing、和小林 coding 高性能网络模式为辅助参考。
- Browser Note：Chrome DevTools MCP profile 被占用；Browser 插件返回 in-app browser 不可用；Vite preview 可访问 `http://127.0.0.1:4243/KnowledgeGraph/`；Playwright Chromium 受 macOS Mach port 权限限制；`sips` 无法把 SVG 转成 PNG。
- Reference Breakdown：采用左侧事件循环线程、中部 eventpoll epfd 与 Interest/Ready 双列表、右侧 Socket wait queues 与 Worker dispatch、底部四个信号；视觉焦点是 `fd18 EPOLLIN | EPOLLET -> ready list -> events[0..2] -> read until EAGAIN`。
- Implementation：新增 `os:epoll` 专用 `state-model` 构建器、Epoll SVG 舞台、移动端纵向摘要、响应式样式、epoll 专用来源和数据测试，并给 epoll 知识点补充官方与图解来源引用。
- Screenshot Review：保存 `.codex-artifacts/visualizations/epoll/desktop.svg` 与 `.codex-artifacts/visualizations/epoll/mobile.svg`；PNG 捕获受平台权限限制；桌面 SVG 可识别事件循环、eventpoll、Interest List、Ready List、Socket wait queues、Worker dispatch 和底部信号，移动端五步流程卡片可读。
- Verification：新增测试先失败于通用 OS 模型，补实现后 `npm run test:data -- --grep "linux epoll"` 通过 1 项；`npm run build` 通过；完整 `npm run test:data` 通过 8 项；继续执行 `git diff --check`、rebase 和 push。
- Commit/Push Plan：提交 `feat: add epoll visualization`，再执行 `git pull --rebase origin main` 与 `git push origin main`。
- Next Candidate：Docker `容器网络` 或 Kubernetes `Pod 调度`。

### 2026-06-02 21:03 CST

- Branch/Pull：当前分支 `main`；`git fetch origin main` 成功，本地 `HEAD` 与 `origin/main` 均为 `19443ee`；`git pull --ff-only origin main` 失败，原因是 `Could not resolve host: github.com`。
- Working Tree：进入同步门禁时工作区干净；本条记录写入后仅 `docs/visualization-progress.md` 发生变化。
- Action：本轮停在同步门禁，跳过找图、拆图、编码、截图、测试、提交和推送。
- Resume Point：下一轮先重试 `git pull --ff-only origin main`；同步成功后继续 Docker `容器网络` 或 Kubernetes `Pod 调度` 找图与设计。

### 2026-06-02 21:37 CST

- Branch/Pull：当前分支 `main`；先读取自动化记忆，`git fetch origin main` 成功，本地 `HEAD` 与 `origin/main` 均为 `19443ee`；`git pull --ff-only origin main` 成功。上一轮 docs-only DNS 阻塞记录已提交并推送为 `952eb02 docs: record visualization sync blocker`，随后从干净工作区继续。
- Selected：Docker `桥接网络`，原因是 network namespace、veth pair、Linux bridge、内置 DNS、DNAT、MASQUERADE 和防火墙链形成清晰的单机容器网络包路径，能承接已完成的 Docker 镜像层可视化。
- Candidate Sources：普通搜索筛选约 12 个候选来源；Chrome DevTools 视觉确认 DockerLabs bridge/NAT 三张图、Docker 官方 bridge 与 packet filtering 页面、iximiuz container networking 教程中的 namespace/veth/NAT/port publishing 图。
- Online Image References：
  - source：DockerLabs - Docker Bridge Network Driver Architecture，https://dockerlabs.collabnix.com/networking/concepts/05-bridge-networks.html；image：`bridge1.png`、`bridge2.png`、`nat.png`；role：main；qualityReason：三张图清楚展示 default bridge、user-defined bridge、容器 veth、host eth0、端口映射和 masquerading；takeaways：主构图采用左侧外部客户端、中部 Docker Host / bridge / NAT、右侧容器 netns 的横向包路径；originalChanges：改成本项目的五步交互式 packet path，加入右侧任务面板、底部信号和移动端流程卡。
  - source：Docker Docs - Bridge network driver，https://docs.docker.com/engine/network/drivers/bridge/；image：页面行为说明和 usage examples；role：supporting；qualityReason：官方定义用户自定义 bridge、同网络互通、内置 DNS、网络隔离和 published ports；takeaways：步骤覆盖 create network、connect containers、service-name DNS 和同网络访问；originalChanges：把文档字段转为 `br-app 172.18.0.1`、`web/api netns` 和 `api -> 172.18.0.3` 状态。
  - source：Docker Docs - Packet filtering and firewalls，https://docs.docker.com/engine/network/packet-filtering-firewalls/；image：Docker NAT/filter/firewall chain 说明；role：supporting；qualityReason：官方校准 Docker 管理 iptables/nftables、DNAT、FORWARD、DOCKER-USER 与 gateway mode 语义；takeaways：右下规则面板展示 PREROUTING、DOCKER-USER、POSTROUTING；originalChanges：用可高亮规则行展示 published port 与出站 SNAT 两条路径。
  - source：Docker Docs - Port publishing and mapping，https://docs.docker.com/engine/network/port-publishing/；image：端口发布行为说明；role：supporting；qualityReason：官方说明 host IP:port 如何映射到容器端口；takeaways：端口发布步骤使用 `-p 8080:80` 与 `host:8080 -> web:80`；originalChanges：把发布端口和监听地址排障提示放入右侧理解重点。
  - source：iximiuz Labs - Container Networking From Scratch，https://labs.iximiuz.com/tutorials/container-networking-from-scratch；image：`linux-network-environment.png`、`network-namespace.png`、veth、bridge、NAT、port publishing 相关图；role：supporting；qualityReason：高质量交互教程从 Linux 原语解释 Docker-like bridge 网络；takeaways：容器网络由 netns、veth、bridge、routing、iptables 和 NAT 组合而成；originalChanges：用 Docker 语义重命名对象，保留底层原语作为画布对象和指标。
- Reference Breakdown：主体布局为左侧 External client，中部 Docker Host 容器，Host 内含 `br-app/docker0`、`eth0`、Docker NAT/filter，右侧 `web netns` 与 `api netns`；视觉焦点是 `netns -> veth pair -> Linux bridge -> DNS / DNAT / MASQUERADE`；领域对象包括 container network namespace、eth0、veth peer、Linux bridge、embedded DNS、PREROUTING、DOCKER-USER、POSTROUTING、DNAT、MASQUERADE、host eth0；连线方向按 create bridge、attach veth、web->api、external->host:8080、web->Internet 推进；颜色策略用青色表示 veth/bridge，绿色表示 DNS 与同网络访问，橙色表示 DNAT，红色虚线表示 MASQUERADE；移动端使用五个流程卡和四个信号卡保留关键读数。
- Implementation：新增 `docker:bridge-network` 专用 `step-simulation` 构建器、Bridge Network SVG 舞台、移动端纵向摘要、响应式样式、sourceRefs 和数据测试，并把 `bridge-network` 加入 Docker 可视化清单。
- Browser Note：Browser 插件 in-app browser 返回不可用；Chrome DevTools 在 `http://127.0.0.1:4251/KnowledgeGraph/` 完成 Docker 分类、搜索 `桥接网络`、详情页进入、模拟器进入、五步交互到 `出站 MASQUERADE`，最终指标为 `netns=web/api isolated`、`bridge=br-app 172.18.0.1`、`DNS=api -> 172.18.0.3`、`NAT=SNAT host eth0`。
- Screenshot Review：保存 `.codex-artifacts/visualizations/bridge-network/desktop.png`（2880x1882）与 `.codex-artifacts/visualizations/bridge-network/mobile.png`（1000x4696）；桌面可识别 External client、Docker Host、br-app/docker0、NAT/filter、web/api netns、veth、DNAT 和 MASQUERADE，右侧任务/操作/理解重点完整；移动端五步流程、信号卡、右侧面板和底部进度可读。
- Verification：新增测试先失败于 `visualPointIds.docker` 缺少 `bridge-network`，补实现后 `npm run test:data -- --grep "docker bridge network"` 通过 1 项；`npm run build` 通过；完整 `npm run test:data` 通过 9 项；继续执行 `git diff --check`、rebase 和 push。
- Commit/Push Plan：提交 `feat: add bridge network visualization`，再执行 `git pull --rebase origin main` 与 `git push origin main`。
- Next Candidate：Kubernetes `Pod 调度` 或 Docker `端口映射`。

### 2026-06-02 23:06 CST

- Branch/Pull：当前分支 `main`；先读取自动化记忆，`git fetch origin main` 与 `git pull --ff-only origin main` 成功，本地 `HEAD` 与 `origin/main` 均为 `08fa06d`，从干净工作区继续。
- Selected：Docker `端口映射`，原因是 HostIp/HostPort、宿主入口、Docker NAT/proxy、DNAT、DOCKER-USER、容器监听地址和 EXPOSE 元数据构成高频生产排障链路，能承接已完成的 Bridge Network 可视化。
- Candidate Sources：普通搜索筛选约 12 个候选来源；Chrome DevTools MCP profile 占用，Browser 插件不可用，本轮使用搜索结果、可访问页面、HTTP head 和图片 URL 确认 1 张主参考图与 4 个辅助来源。
- Online Image References：
  - source：iximiuz - How To Publish Container Ports with Docker，https://iximiuz.com/en/posts/docker-publish-container-ports/；image：`https://iximiuz.com/docker-publish-container-ports/docker-engine-port-publishing-2000-opt.png`；role：main；qualityReason：图中直接展示 client、Docker host、host port、container IP:port 与 Docker Engine published port path；takeaways：主构图采用左侧客户端、中部宿主入口/NAT、右侧容器监听端口；originalChanges：改成本项目的五步交互式 published port path，加入 DOCKER-USER、EXPOSE、`docker ps/port/inspect/ss` 排障表和移动端流程卡。
  - source：Docker Docs - Port publishing and mapping，https://docs.docker.com/engine/network/port-publishing/；image：页面端口发布行为说明；role：supporting；qualityReason：官方定义 HostIp、HostPort、ContainerPort、协议、loopback bind 和 direct routing 语义；takeaways：步骤使用 `127.0.0.1:8080:80` 表达绑定地址和访问面；originalChanges：底部信号区突出 `host IP:port` 与公网暴露边界。
  - source：Docker Docs - Publishing and exposing ports，https://docs.docker.com/get-started/docker-concepts/running-containers/publishing-ports/；image：getting started 端口发布教程截图与命令；role：supporting；qualityReason：官方入门教程清楚区分 publish 与 EXPOSE；takeaways：右侧排障表保留 `EXPOSE 80/tcp metadata`；originalChanges：将 EXPOSE 放入最终校验步骤，强调它是协作元数据。
  - source：Docker Docs - Packet filtering and firewalls，https://docs.docker.com/engine/network/packet-filtering-firewalls/；image：Docker iptables/nftables、NAT、DOCKER-USER 说明；role：supporting；qualityReason：官方校准 published port 经过 NAT/filter 和 DOCKER-USER 策略；takeaways：中部规则面板展示 `DOCKER nat`、`DOCKER-USER`、`conntrack`；originalChanges：用可高亮规则行表达 DNAT 命中、策略通过和回包追踪。
  - source：iximiuz - Multiple Containers On The Same Port With a Reverse Proxy，https://iximiuz.com/en/posts/multiple-containers-same-port-reverse-proxy/；image：`https://iximiuz.com/multiple-containers-same-port-reverse-proxy/multiple-containers-same-port-iptables-2000-opt.png`；role：supporting；qualityReason：图中把同端口多容器、iptables DNAT 和反向代理边界画清楚；takeaways：端口冲突与多服务入口应交给反向代理或不同宿主端口；originalChanges：在理解重点和排障信号中保留 host port 冲突与入口治理语义。
- Reference Breakdown：主体布局为左侧 External client，中部 Docker Host 与 `127.0.0.1:8080/tcp` 绑定入口，右上 Docker NAT/proxy 规则面板，右下 `web container netns 172.18.0.2` 和 `nginx 0.0.0.0:80`，中下排障对照表，底部四个信号；视觉焦点是 `client -> host bind -> Docker NAT/proxy -> container IP:port -> app listener`；领域对象包括 HostIp、HostPort、ContainerPort、protocol、PREROUTING/OUTPUT、DOCKER nat、DOCKER-USER、conntrack、bridge/veth、container listener、EXPOSE metadata；连线方向按 publish config、client hit、DNAT rewrite、container listen、debug checklist 推进；颜色策略用蓝色表示发布配置，青色表示宿主入口，橙色表示 DNAT，绿色表示应用响应，红色表示最终核对；移动端使用五个流程卡和四个事实卡保留关键读数。
- Implementation：新增 `docker:port-mapping` 专用 `step-simulation` 构建器、Port Mapping SVG 舞台、移动端纵向摘要、响应式样式、Iximiuz 来源、sourceRefs 和数据测试，并把 `port-mapping` 加入 Docker 可视化清单。
- Screenshot Review：PNG 捕获受平台权限限制；保存本地 review 产物 `.codex-artifacts/visualizations/port-mapping/desktop.svg`、`.codex-artifacts/visualizations/port-mapping/desktop.html` 与 `.codex-artifacts/visualizations/port-mapping/mobile.html`；桌面 SVG 可识别 External client、Docker Host、NAT/proxy、DNAT、DOCKER-USER、web container netns、排障表和底部四个信号；移动 HTML 可读五步流程卡和四个事实卡。
- Browser Note：本地预览 `http://127.0.0.1:4262/KnowledgeGraph/` 可访问；Chrome DevTools MCP profile 占用，Browser 插件返回 in-app browser 不可用；Playwright Chromium 受 macOS Mach port 权限限制，报 `bootstrap_check_in ... Permission denied`；本轮使用 Vite SSR 渲染真实 `SimulationStage` 产出审查文件。
- Verification：新增测试先失败于 `visualPointIds.docker` 缺少 `port-mapping`，补实现后 `npm run test:data -- --grep "docker port mapping"` 通过 1 项；`npm run build` 通过；完整 `npm run test:data` 通过 10 项；`git diff --check` 通过。
- Commit/Push Plan：提交 `feat: add port mapping visualization`，再执行 `git pull --rebase origin main` 与 `git push origin main`。
- Next Candidate：Kubernetes `Pod 调度` 或 Docker `资源限制`。

### 2026-06-03 01:21 CST

- Branch/Pull：当前分支 `main`；先读取自动化记忆，`git fetch origin main` 与 `git pull --ff-only origin main` 成功，本地 `HEAD` 与 `origin/main` 均为 `c118450`，从干净跟踪状态继续，工作区已有 Scheduler 测试现场。
- Selected：Kubernetes `Scheduler`，原因是 Pending Pod、Scheduling Queue/Profile、Filter/Score 插件、Binding Cycle 和 FailedScheduling 事件能形成高价值调度周期模拟。
- Candidate Sources：普通搜索筛选约 12 个候选来源；保留 Kubernetes Scheduling Framework 官方扩展点图为主参考，Kubernetes Scheduler、Assigning Pods to Nodes、Taints and Tolerations、Pod Priority and Preemption 为辅助参考。
- Main Reference：Kubernetes Docs - Scheduling Framework，主图为 `https://kubernetes.io/images/docs/scheduling-framework-extensions.png`，HTTP HEAD 返回 `200 image/png`。
- Supporting References：Kubernetes Scheduler、Assigning Pods to Nodes、Taints and Tolerations、Pod Priority and Preemption。
- Reference Breakdown：采用左侧 Pending Pod，中部 Scheduling Queue 与 Framework extension points，下方 Filter plugins 和 Node snapshot，右侧 Score plugins 与 Binding Cycle，底部四个诊断信号；视觉焦点是 `activeQ -> profile -> Filter -> Score -> spec.nodeName=node-c`。
- Implementation：新增 `kubernetes:scheduler` 专用 `step-simulation` 构建器、Scheduler SVG 舞台、移动端纵向摘要、响应式样式、Scheduler sourceRefs、数据测试，并把 Assigning Pods to Nodes 来源 URL 更新到当前官方路径。
- Screenshot Review：保存 `.codex-artifacts/visualizations/scheduler/desktop.svg`、`.codex-artifacts/visualizations/scheduler/mobile.svg` 与 `.codex-artifacts/visualizations/scheduler/desktop.html`；桌面 SVG 可识别 Pending Pod、Scheduling Queue、Framework extension points、Filter plugins、Node snapshot、Score plugins、Binding Cycle 和底部信号；移动端 SVG 展示五步流程和指标摘要。
- Browser Note：Chrome DevTools MCP profile 被占用；Browser 插件返回 in-app browser 受限；本轮使用 Kubernetes 官方主图 URL、HTTP HEAD、项目数据测试、生产构建和真实 React `SimulationStage` 渲染的 SVG/HTML 完成验收。
- Verification：`npm run test:data -- --grep "kubernetes scheduler"` 通过 1 项；`npm run build` 通过；完整 `npm run test:data` 通过 11 项；`git diff --check` 通过。
- Commit/Push：功能提交 `0238376 feat: add scheduler visualization` 已推送到 `origin/main`；推送输出为 `c118450..0238376 main -> main`。Post-push `git ls-remote --heads origin main` 遇到 `Could not resolve host: github.com`，本地 `HEAD` 与 `origin/main` 均为 `0238376`。
- Commit/Push Plan：本条 run log 作为独立 docs 提交推送。
- Next Candidate：Docker `资源限制` 或 Kubernetes `污点与容忍`。

### 2026-06-03 02:17 CST

- Branch/Pull：当前分支 `main`；先读取自动化记忆，`git fetch origin main` 与 `git pull --ff-only origin main` 成功，本地 `HEAD` 与 `origin/main` 均为 `23fc82c`，从干净工作区继续。
- Selected：Docker `资源限制`，原因是 Docker run flags、HostConfig、cgroup v2 控制文件、CPU throttle、OOMKilled、`docker stats` 和运行中调参能形成直接可用的资源治理状态模型。
- Candidate Sources：普通搜索筛选约 12 个候选来源；Chrome DevTools 视觉确认 ENCCS 页面中的 cgroup resource limit SVG，Docker Resource constraints、Runtime metrics 和 Linux cgroup v2 文档作为辅助来源。
- Main Reference：ENCCS - Namespaces and cgroups，主图为 `https://www.nginx.com/wp-content/uploads/2021/07/Namespaces-cgroups_resource-limits.svg`，本地参考截图保存到 `.codex-artifacts/reference-checks/resource-limit-enccs.png`。
- Supporting References：NGINX Namespaces/cgroups 原图来源、Docker Resource constraints、Docker Runtime metrics、Linux Kernel cgroup v2。
- Reference Breakdown：采用左侧 HostConfig 参数、中上 Docker daemon、中部 cgroup v2 控制文件、左下应用容器、中下内核调度/OOM、右下 stats/events/inspect，底部 `memory.max`、`cpu.max`、`oom_kill`、`docker stats` 四个信号；视觉焦点是 `--memory 512m --cpus 1.5` 写入 `memory.max` / `cpu.max` 后触发 CPU throttle 和 OOMKilled。
- Implementation：新增 `docker:resource-limit` 专用 `state-model` 构建器、Resource Limit SVG 舞台、移动端纵向摘要、响应式样式、ENCCS/NGINX 来源、Docker sourceRefs 和数据测试。
- Browser Note：Chrome DevTools 在 `http://127.0.0.1:4268/KnowledgeGraph/` 完成 Docker 分类、搜索 `资源限制`、详情页进入、模拟器进入、五步交互到 `观测并调整`，最终指标为 `memory.max=768MiB`、`cpu.max=1.5 CPU`、`oom_kill=1 event`、`docker stats=CPU 142% MEM 69%`。
- Screenshot Review：保存 `.codex-artifacts/visualizations/resource-limit/desktop.png` 与 `.codex-artifacts/visualizations/resource-limit/mobile.png`；桌面可识别 HostConfig、daemon、cgroup v2、容器负载、kernel OOM/stats 路径和底部信号，移动端流程卡与事实卡可读。
- Verification：新增测试先失败于通用 Docker `Runtime attachment` 模型，补实现后 `npm run test:data -- --grep "docker resource limit"` 通过 1 项；`npm run build` 通过；完整 `npm run test:data` 通过 12 项；`git diff --check` 通过。
- Commit/Push Plan：提交 `feat: add resource limit visualization`，再执行 `git pull --rebase origin main` 与 `git push origin main`。
- Next Candidate：Kubernetes `污点与容忍` 或 Docker `CPU 限制`。

### 2026-06-03 03:18 CST

- Branch/Pull：当前分支 `main`；先读取自动化记忆，`git fetch origin main` 与 `git pull --ff-only origin main` 成功，开始时本地 `HEAD` 与 `origin/main` 均为 `0002eee`。
- Selected：Kubernetes `污点与容忍`，原因是 Node taint、Pod toleration、NoSchedule Filter、NoExecute 驱逐、`tolerationSeconds` 和 FailedScheduling 事件能形成清晰的调度约束与故障转移状态模型。
- Candidate Sources：普通搜索筛选约 12 个候选来源；保留 Kubex taint/toleration SVG 为主参考，Kubernetes 官方 Taints and Tolerations、Amazon EKS hybrid pod failover、Komodor practical guide、Kubecost guide 为辅助参考。
- Main Reference：Kubex - Taints and Tolerations，主图为 `https://kubex.ai/wp-content/uploads/article-k8s-capacity-taint-tollerations.svg`，HTTP HEAD 曾返回 `200 image/svg+xml`；后续 DNS 间歇失败，保留已确认 URL 与页面来源。
- Supporting References：Kubernetes Docs Taints and Tolerations、Amazon EKS Hybrid nodes Kubernetes pod failover、Komodor Kubernetes Taints and Tolerations、Kubecost Kubernetes Taints and Tolerations。
- Reference Breakdown：采用左侧 Node taints/Pod tolerations，中部 TaintToleration Filter 与 YAML，右侧 NoExecute eviction 与 Events evidence，底部 NoSchedule、NoExecute、tolerationSeconds、FailedScheduling 四个信号；视觉焦点是 `dedicated=gpu:NoSchedule` 与 Pod `Equal dedicated=gpu` 匹配，以及普通 Pod 的 FailedScheduling 分支。
- Implementation：新增 `kubernetes:taint-toleration` 专用 `state-model` 构建器、Taints and Tolerations SVG 舞台、移动端纵向摘要、响应式样式、来源引用和数据测试，并把 `taint-toleration` 加入 Kubernetes 可视化清单。
- Browser Note：本地 Vite 监听受沙箱权限限制，`npx vite --host 127.0.0.1 --port 4276` 返回 `listen EPERM`；Chrome DevTools MCP profile 被占用；Browser 插件返回 in-app browser 不可用；本轮使用官方/参考页面 URL、HTTP HEAD、项目数据测试、生产构建和真实 React `SimulationStage` 渲染的 SVG/HTML 完成验收。
- Screenshot Review：保存 `.codex-artifacts/visualizations/taint-toleration/desktop.svg`、`.codex-artifacts/visualizations/taint-toleration/mobile.svg` 与 `.codex-artifacts/visualizations/taint-toleration/desktop.html`；桌面 SVG 可识别 Node taints、Pod tolerations、TaintToleration Filter、spec.tolerations、NoExecute eviction、Events evidence 和底部信号；移动端 SVG 展示五步流程和指标摘要。
- Verification：新增测试先失败于 `visualPointIds.kubernetes` 缺少 `taint-toleration`，补实现后 `npm run test:data -- --grep "taints and tolerations"` 通过 1 项；`npm run build` 通过；完整 `npm run test:data` 通过 13 项；`git diff --check` 通过。
- Commit/Push Plan：提交 `feat: add taint toleration visualization`，再执行 `git pull --rebase origin main` 与 `git push origin main`。
- Next Candidate：Docker `CPU 限制` 或 Kubernetes `拓扑分布约束`。

### 2026-06-03 04:03 CST

- Branch/Fetch：当前分支 `main`；先读取自动化记忆，`git fetch origin main` 成功，本地 `HEAD` 与 `origin/main` 均为 `d8834df7e5ff8c2cd3b585fcc8d01fad14a06519`。
- Pull Gate：`git pull --ff-only origin main` 失败，原因是 `Could not resolve host: github.com`。
- Working Tree：进入同步门禁时工作区干净；本条记录写入后仅 `docs/visualization-progress.md` 发生变化。
- Action：本轮停在同步门禁，跳过找图、拆图、编码、截图、测试、提交和推送。
- Resume Point：下一轮先重试 `git pull --ff-only origin main`；同步成功后提交本条 docs-only 阻塞记录，再继续 Docker `CPU 限制` 或 Kubernetes `拓扑分布约束` 找图与设计。

### 2026-06-03 05:16 CST

- Branch/Pull：当前分支 `main`；先读取自动化记忆，`git fetch origin main` 与 `git pull --ff-only origin main` 成功；先提交并推送上一轮 DNS 阻塞记录 `1cb1e42 docs: record visualization sync blocker`，再从干净跟踪状态继续。
- Selected：Kubernetes `拓扑分布约束`，原因是 `topologySpreadConstraints`、label selector、拓扑域计数、`maxSkew`、`whenUnsatisfiable`、`minDomains`、Filter/Score 插件和 FailedScheduling 事件能形成强调度排障模型，并能承接 Scheduler 与污点容忍可视化。
- Candidate Sources：普通搜索筛选约 12 个候选来源；保留 Kubernetes 官方 Pod Topology Spread Constraints 文档中的 zone/node/Pod Mermaid 示例图为主参考，Kubernetes PodTopologySpread 博客、AWS EKS 高可用 workload spread 指南、Kubernetes Scheduler/Assigning Pods to Nodes、CAST AI 拓扑分布文章为辅助参考；Chrome DevTools MCP profile 被占用，使用搜索结果、页面 URL、HTTP HEAD 成功记录和本地 HTML/SVG 审查替代浏览器视觉确认。
- Online Image References：
  - source：Kubernetes Docs - Pod Topology Spread Constraints，https://kubernetes.io/docs/concepts/scheduling-eviction/topology-spread-constraints/；image：页面中 `graph BT` Mermaid 示例，展示 zone、node 与 Pod 的拓扑关系；role：main；qualityReason：官方图直接呈现拓扑域、节点和 Pod 分布，适合作为 `maxSkew` 与域计数的主构图；takeaways：采用三组 zone、每组 node、Pod 副本计数和新增 Pod 落点；originalChanges：改造成项目自己的五步交互式调度画布，加入 PreFilter 计数、DoNotSchedule Filter、ScheduleAnyway Score、底部信号和移动端摘要。
  - source：Kubernetes Blog - Introducing PodTopologySpread，https://kubernetes.io/blog/2020/05/introducing-podtopologyspread/；image：博客中的 PodTopologySpread 示例图与 YAML 场景；role：supporting；qualityReason：解释该特性引入背景、区域分散和调度策略；takeaways：补充软硬约束、skew 和多域高可用表达；originalChanges：把博客场景落到 `checkout` Deployment 和 2/2/1 -> 2/2/2 的状态变化。
  - source：AWS Prescriptive Guidance - Spread workloads across Availability Zones，https://docs.aws.amazon.com/prescriptive-guidance/latest/ha-resiliency-amazon-eks-apps/spread-workloads.html；image：跨 Availability Zone 高可用说明；role：supporting；qualityReason：补充生产中跨 AZ 均衡部署的业务目标；takeaways：强调 eligible domains、可用区故障面和副本均衡验收；originalChanges：把 AWS 场景转成 `zone-a/zone-b/zone-c` 的可读域计数。
  - source：Kubernetes Docs - Kubernetes Scheduler 与 Assigning Pods to Nodes；image：调度器与节点分配官方说明；role：supporting；qualityReason：校准拓扑分布在调度周期中的 Filter/Score 位置；takeaways：把 PodTopologySpread 放入 PreFilter、Filter、Score、Bind 链路；originalChanges：复用本项目 Scheduler 风格，但画布聚焦 topology spread 插件。
  - source：CAST AI - Kubernetes Topology Spread Constraints；image：文章中的拓扑分布与可用性解释；role：supporting；qualityReason：补充成本与可用性视角，帮助理解软约束与资源压力；takeaways：软约束适合容量紧张场景；originalChanges：用 `ScheduleAnyway` Score 体现软约束下仍可调度的工程语义。
- Reference Breakdown：主体布局为左上 Deployment、新 Pod 与 selector，中上 `topologySpreadConstraints` YAML 字段，右上 PreFilter domain count，中部三组 zone 域计数，右侧 Filter 候选节点，底部 Score 插件、Events evidence 和四个信号；视觉焦点是 `zone-a=2 zone-b=2 zone-c=1` 经过 `maxSkew=1` 后把新 Pod 绑定到 `zone-c`，最终变成 `2/2/2`；交互节奏按读取约束、统计拓扑域、硬约束过滤、软约束打分、绑定验收推进。
- Implementation：新增 `kubernetes:topology-spread` 专用 `state-model` 构建器、Topology Spread SVG 舞台、移动端纵向摘要、响应式样式、来源引用和数据测试，并把 `topology-spread` 加入 Kubernetes core 与可视化清单。
- Browser Note：Chrome DevTools MCP profile 被占用；Playwright Chromium 截图失败于 macOS Mach port 权限 `bootstrap_check_in ... Permission denied`；本轮使用官方/参考页面 URL、HTTP HEAD 成功记录、项目数据测试、生产构建和真实 React `SimulationStage` SSR 渲染的 SVG/HTML 审查图完成验收。
- Screenshot Review：PNG 捕获受平台权限限制；保存 `.codex-artifacts/visualizations/topology-spread/desktop.svg`、`.codex-artifacts/visualizations/topology-spread/mobile.svg` 与 `.codex-artifacts/visualizations/topology-spread/desktop.html`；桌面 SVG 可识别 Deployment checkout、topologySpreadConstraints、PreFilter domain count、zone-a/zone-b/zone-c、PodTopologySpread Score、Events 和底部四个信号，移动端 SVG 展示五步流程与关键指标摘要。
- Verification：新增测试先失败于 `visualPointIds.kubernetes` 缺少 `topology-spread`，补 core/visual 清单与专用 builder 后 `npm run test:data -- --grep "topology spread"` 通过 1 项；`npm run build` 通过；完整 `npm run test:data` 通过 14 项；`git diff --check` 通过。
- Commit/Push Plan：提交 `feat: add topology spread visualization`，再执行 `git pull --rebase origin main` 与 `git push origin main`。
- Next Candidate：Kubernetes `PriorityClass/抢占` 或 Docker `CPU 限制`。
