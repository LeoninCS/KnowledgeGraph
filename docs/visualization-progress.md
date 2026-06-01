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
| 暂无 | 当前暂缓队列为空 | 下一轮优先进入 Docker `镜像层` 或 MySQL `MVCC` 找图与设计 |

## Next Candidate

优先选择 Docker `镜像层` 或 MySQL `MVCC`，两者机制清晰且适合做分层结构或状态模型。

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
