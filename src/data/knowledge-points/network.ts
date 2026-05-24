import type { GraphKnowledgePoint } from "./types.ts";

const networkKnowledgePointBase = [
  /* <!-- KG_EXPLAINED: 网络基础概览 | 2026-05-23 | source_count=9 --> */
  /* ai-redone: 2026-05-22; sources=rfc1122-internet-layers,cloudflare-how-internet-works,mdn-how-internet-works,cisco-network-basics,microsoft-tcpip-networking,oracle-packet-encapsulation; diagram=network:network-overview */
  /* <!-- KG_REVIEWED: 网络基础概览 | 2026-05-24 | source_count=10 --> */
  { sourceRefs: ["rfc1122-internet-layers", "cloudflare-how-internet-works", "mdn-how-internet-works", "cisco-network-basics", "microsoft-tcpip-networking", "oracle-packet-encapsulation", "xiaolin-what-happen-url", "cs-notes", "javaguide", "xiaolin-coding"], internalTags: ["ai-visualized:2026-05-23", "visual-source:rfc1122-internet-layers", "visual-source:cloudflare-how-internet-works", "visual-source:mdn-how-internet-works"], id: "network-overview", zh: "网络基础概览", en: "Network Overview", layer: "foundation", difficulty: "easy", summary: "从一次网页访问理解主机、链路、设备、协议分层和端到端通信。", explanation: ["概念定义：计算机网络是一套让不同主机交换数据的协作系统。主机负责产生和消费数据，交换机连接同一局域网内的设备，路由器把数据送往其他网络，链路把比特变成电、光或无线信号，协议规定地址、格式、顺序、确认、重传和错误处理。", "工作机制：一次访问网页可以按“域名解析、建立连接、发送请求、逐层封装、逐跳转发、目标解封装、服务端响应”理解。浏览器先通过 DNS 找到服务器 IP，再用 TCP、TLS 或 QUIC 建立通信基础，然后把 HTTP 请求交给下层协议；每层补充自己的头部，接收端按相反方向拆开。", "分层视角：RFC 1122 把互联网主机通信分成应用层、传输层、Internet 层和链路层。应用层表达业务语义，传输层用端口和连接服务进程，Internet 层用 IP 做跨网络寻址和路由，链路层负责把包交给本地下一跳。这个分层让学习、实现和排障都有清晰边界。", "特殊情况：真实链路里会遇到 DNS 缓存和污染、IPv4/IPv6 选择、NAT 改写地址、MTU 过小导致分片或丢包、代理或 CDN 终止连接、TLS 证书异常、路由绕行、拥塞重传和服务端限流。理解网络基础时要把“协议主流程”和“中间设备行为”一起看。", "常见误区与排查：ping 通只说明 ICMP 或到达路径部分可用，HTTP 失败还可能来自端口、TLS、Host、代理、权限和应用状态码。排障时按层收集证据：链路看网卡和错误计数，网络层看 IP、网关、路由和 traceroute，传输层看端口、握手和重传，应用层看 URL、Header、状态码和服务端日志。", "面试抓手：网络基础题常从“输入 URL 到页面展示发生了什么”展开，追问 DNS、TCP/TLS、HTTP、IP 路由、MAC/ARP、缓存、CDN 和故障定位。回答时先讲主链路，再补充每层关键字段和异常分支，最后给排查工具，例如 dig、curl、ping、traceroute、ss 和 tcpdump。", "参考来源：分层依据采用 RFC 1122；端到端访问、packet、protocol、router、switch 和 Web 加载流程参考 Cloudflare 与 MDN；网络设备组成参考 Cisco；TCP/IP 配置排查参考 Microsoft Learn；封装过程参考 Oracle Solaris；中文面试语境和 URL 访问链路参考小林 coding。"], typicalProblems: ["输入 URL 到页面展示经历哪些网络步骤","交换机、路由器、DNS、TCP、TLS、HTTP 在一次访问中分别做什么","ping 通但 HTTP 访问失败怎么分层排查","DNS 缓存、NAT、CDN、代理和 TLS 证书会怎样影响访问结果","抓包时如何把以太网、IP、TCP/UDP 与应用数据对应起来"], prerequisites: [], related: ["osi-model", "tcp-ip-model"], order: 1 },
  /* <!-- KG_EXPLAINED: OSI 七层模型 | 2026-05-23 | source_count=8 --> */
  /* ai-redone: 2026-05-22; sources=itu-x200-osi,iso-7498-1-osi,cloudflare-osi-model,aws-osi-model,fortinet-osi-model; diagram=network:osi-model */
  /* <!-- KG_REVIEWED: OSI 七层模型 | 2026-05-24 | source_count=8 --> */
  { sourceRefs: ["itu-x200-osi", "iso-7498-1-osi", "cloudflare-osi-model", "aws-osi-model", "fortinet-osi-model", "cs-notes", "javaguide", "xiaolin-coding"], internalTags: ["ai-visualized:2026-05-23", "visual-source:iso-7498-1-osi", "visual-source:cloudflare-osi-model", "visual-source:aws-osi-model"], id: "osi-model", zh: "OSI 七层模型", en: "OSI Model", layer: "foundation", difficulty: "easy", summary: "用应用、表示、会话、传输、网络、数据链路、物理七层定位通信职责和故障边界。", explanation: ["概念定义：OSI 七层模型是开放系统互连的基础参考模型，用七个抽象层描述通信系统的职责划分。它提供共同语言：每一层向上提供服务，向下使用服务，并通过同层协议与对端同层协作。", "七层职责：应用层提供应用协议能力；表示层处理编码、压缩和加密等数据表示；会话层管理会话建立、维持和恢复；传输层负责端到端进程通信、分段、可靠性和流控；网络层负责逻辑地址和路由；数据链路层负责同一链路上的帧、MAC 和差错检测；物理层负责把比特变成电、光或无线信号。", "封装流程：发送端通常从第 7 层向第 1 层逐层封装，每层补充本层需要的控制信息；接收端从第 1 层向第 7 层逐层解封装。一次 HTTP 访问可以映射为应用数据进入上三层，TCP 在传输层分段，IP 在网络层寻址，以太网在数据链路层成帧，物理层发送信号。", "流程图读法：本页流程图按应用层、表示层、会话层、传输层、网络层、数据链路层和物理层完整展开。向下看发送端逐层封装，向上看接收端逐层解封装；每一步的标签对应本层新增或解释的控制信息。", "排障用法：OSI 模型适合把问题定位到层。网线、光模块、无线信号对应物理层；MAC、ARP、VLAN 对应数据链路层；IP、路由、网关对应网络层；端口、握手、重传对应传输层；TLS、编码、会话状态、HTTP 状态码和业务响应对应高层。", "参考来源：标准定义以 ITU-T X.200 与 ISO/IEC 7498-1:1994 为准；七层职责和数据流参考 Cloudflare、AWS 与 Fortinet 的 OSI 图解资料整理。"], typicalProblems: ["OSI 七层分别解决什么问题","交换机、路由器、网关分别属于哪一层","如何用七层模型排查网络故障","OSI 七层和 TCP/IP 四层如何对应","HTTP、TLS、TCP、IP、以太网分别落在哪些层"], prerequisites: ["network-overview"], related: ["tcp-ip-model"], order: 2 },
  /* <!-- KG_EXPLAINED: TCP/IP 四层模型 | 2026-05-23 | source_count=9 --> */
  /* ai-redone: 2026-05-23; sources=rfc1122-internet-layers,oracle-packet-encapsulation,cloudflare-network-layer,cloudflare-internet-protocol,aws-osi-model,microsoft-tcpip-networking; diagram=network:tcp-ip-model */
  /* <!-- KG_REVIEWED: TCP/IP 四层模型 | 2026-05-24 | source_count=9 --> */
  { internalTags: ["ai-visualized:2026-05-23", "visual-source:rfc1122-internet-layers", "visual-source:oracle-packet-encapsulation", "visual-source:cloudflare-network-layer", "visual-source:cloudflare-internet-protocol", "visual-source:aws-osi-model", "visual-source:microsoft-tcpip-networking"], sourceRefs: ["rfc1122-internet-layers", "cloudflare-network-layer", "cloudflare-internet-protocol", "aws-osi-model", "microsoft-tcpip-networking", "oracle-packet-encapsulation", "cs-notes", "javaguide", "xiaolin-coding"], id: "tcp-ip-model", zh: "TCP/IP 四层模型", en: "TCP/IP Model", layer: "foundation", difficulty: "easy", summary: "用应用层、传输层、Internet 层和链路层理解真实互联网协议栈。", explanation: ["概念定义：TCP/IP 四层模型是解释互联网协议族的实用分层框架，按应用层、传输层、Internet 层和链路层组织主机通信。RFC 1122 的通信层模型把应用数据、端到端传输、IP 寻址路由和本地链路投递放在四个协作层里。", "四层职责：应用层包含 HTTP、DNS、SMTP、SSH 等协议和业务语义；传输层包含 TCP、UDP、端口、连接状态、可靠性和数据报能力；Internet 层以 IP 为核心，处理源/目的地址、路由、TTL、NAT 和 ICMP 信号；链路层覆盖以太网、Wi-Fi、ARP、MAC、MTU、帧校验和物理介质接入。", "封装流程：发送端应用数据先交给 TCP 或 UDP，形成 segment 或 datagram；Internet 层加上源/目的 IP、TTL 和路由相关字段；链路层写入本地下一跳 MAC、类型和 FCS 并形成帧；接收端按 Link -> Internet -> Transport -> Application 的顺序解封装。Oracle Solaris 的 TCP/IP 封装图适合作为抓包读图模板。", "和 OSI 对照：TCP/IP 的应用层覆盖 OSI 的应用、表示、会话三层，传输层对应 OSI 传输层，Internet 层对应 OSI 网络层的互联网寻址与路由能力，链路层覆盖数据链路和物理实现。Cloudflare 与 AWS 的模型说明都把这种映射用于把七层参考模型落到真实协议栈。", "工程排查：一次访问可以按四层拆成四组信号：应用层看 URL、域名、Header、状态码和日志；传输层看端口、握手、重传、窗口和连接状态；Internet 层看 IP、路由、默认网关、NAT、TTL 和 ICMP；链路层看 MAC、ARP、VLAN、MTU、网卡速率和链路计数。Microsoft Learn 的 TCP/IP 排障材料强调用 IP、子网掩码、默认网关和路由判断主机到达路径。", "参考来源：四层结构采用 RFC 1122 的 link/IP/transport/application 分层；封装顺序参考 Oracle Solaris TCP/IP protocol stack；网络层职责和 IP 包头参考 Cloudflare Network Layer 与 Internet Protocol；OSI 映射参考 AWS OSI Model；网关、子网和路由排查参考 Microsoft Learn。"], typicalProblems: ["TCP/IP 四层和 OSI 七层如何对应","一次 HTTP 请求如何逐层封装","抓包时如何识别 Ethernet、IP、TCP、HTTP","TCP/IP 模型为什么更贴近真实互联网实现","链路层、Internet 层、传输层、应用层分别排查什么"], prerequisites: ["osi-model"], related: ["ip", "tcp", "http"], order: 3 },
  /* <!-- KG_EXPLAINED: 信号与带宽 | 2026-05-23 | source_count=10 --> */
  /* ai-redone: 2026-05-23; sources=khan-bandwidth-latency,cloudflare-latency,ibm-latency,microsoft-latency-throughput,bitag-latency-explained,learnemc-time-frequency-domain,academyofemc-time-vs-frequency-domain; diagram=network:signal */
  /* <!-- KG_REVIEWED: 信号与带宽 | 2026-05-24 | source_count=10 --> */
  { sourceRefs: ["khan-bandwidth-latency", "cloudflare-latency", "ibm-latency", "microsoft-latency-throughput", "bitag-latency-explained", "learnemc-time-frequency-domain", "academyofemc-time-vs-frequency-domain", "cs-notes", "javaguide", "xiaolin-coding"], id: "signal", zh: "信号与带宽", en: "Signal and Bandwidth", layer: "physical", difficulty: "easy", summary: "理解比特如何变成电、光或无线信号，以及带宽、延迟、吞吐和丢包如何影响体验。", explanation: ["概念定义：信号是比特在物理介质中的表现形式，可以是电压变化、光强变化或无线电波。带宽有两个常用含义：信号带宽用 Hz 表示占用的频率范围，网络带宽用 bps、Mbps、Gbps 表示链路单位时间可承载的数据量上限。", "传输过程：发送端把比特编码成可在介质上传播的信号，信号经过双绞线、光纤、无线信道或运营商链路到达接收端，接收端再把信号还原成比特。介质质量、距离、干扰、排队、设备处理和协议开销共同影响最终体验。", "带宽和延迟：带宽决定单位时间能装下多少数据，延迟决定第一个比特或一个往返需要多久。大文件传输更受带宽影响，交互请求、游戏、远程桌面和多轮 API 调用更受延迟影响。高带宽链路也会受到高延迟、丢包、窗口限制和拥塞控制影响。", "吞吐和瓶颈：吞吐通常低于标称带宽，因为链路共享、协议头、重传、拥塞控制、接收窗口、设备 CPU、磁盘、代理和限速策略都会消耗有效能力。带宽、吞吐和延迟要分开观察：带宽是容量，吞吐是实际结果，延迟是时间成本。", "工程排查：物理层和链路质量问题常表现为 CRC 错误、协商速率异常、双工问题、无线信号弱、丢包、抖动和间歇性断连。排查时先看网卡速率、链路状态、错误计数、ping 延迟与丢包，再用 iperf、mtr、tcpdump、交换机端口统计和运营商链路指标定位瓶颈。", "参考来源：比特率、带宽和延迟的入门定义参考 Khan Academy；延迟、带宽、吞吐的区别参考 Cloudflare、IBM 与 Microsoft Learn；排队、缓冲、应用体验和现代网络延迟影响参考 BITAG Latency Explained；时域与频域读图参考 LearnEMC 与 Academy of EMC。"], typicalProblems: ["带宽和延迟分别影响什么","高带宽低吞吐可能是什么原因","物理链路丢包如何排查","带宽、吞吐和延迟如何区分","为什么视频下载快但游戏或 API 调用仍然慢"], prerequisites: ["network-overview"], related: ["latency-bandwidth"], order: 4 },
  /* <!-- KG_EXPLAINED: 以太网物理介质 | 2026-05-23 | source_count=7 --> */
  /* ai-redone: 2026-05-22; sources=ieee-8023-ethernet,cisco-ethernet-autonegotiation,intel-ethernet-speed-duplex,ibm-network-crc-errors; diagram=network:ethernet-physical */
  /* <!-- KG_REVIEWED: 以太网物理介质 | 2026-05-24 | source_count=7 --> */
  { sourceRefs: ["ieee-8023-ethernet", "cisco-ethernet-autonegotiation", "intel-ethernet-speed-duplex", "ibm-network-crc-errors", "cs-notes", "javaguide", "xiaolin-coding"], id: "ethernet-physical", zh: "以太网物理介质", en: "Ethernet Physical Media", layer: "physical", difficulty: "easy", summary: "理解双绞线、光纤、网卡、交换机端口和光模块如何共同承载以太网链路。", explanation: ["概念定义：以太网物理介质包括双绞线、光纤、网卡、交换机端口、光模块和收发器。它们负责把以太网帧转换成可在介质上传播的物理信号，是数据链路层帧投递的底座。", "介质选择：双绞线常用于办公网络、服务器接入和短距离机柜连接，成本低、部署方便；光纤适合机房互联、园区骨干、长距离和高带宽场景，抗电磁干扰能力强。铜缆和光纤都要匹配速率、距离、接口形态和设备能力。", "链路建立：两端设备插入介质后，网卡和交换机端口会协商速率、双工模式和相关能力。常见速率包括 100Mbps、1Gbps、10Gbps、25Gbps、40Gbps 和 100Gbps；自动协商异常会导致速率降级、半双工冲突、丢包和吞吐下降。", "信号传输：发送端把帧编码成电、光或无线信号，经过线缆、光模块、配线架和交换机端口到达对端。线缆质量、光功率、模块兼容性、接口污染、距离超限、弯折半径和端口错误计数都会影响链路稳定性。", "工程排查：链路灯、端口 up/down、CRC/FCS 错误、丢包、抖动、协商速率不一致、双工不匹配和间歇性断连都指向物理层或链路接入问题。排查顺序通常是看端口状态与速率、错误计数、线缆/光模块、对端端口，再做替换验证。", "参考来源：以太网物理层和链路标准参考 IEEE 802.3；速率/双工自动协商和故障现象参考 Cisco 与 Intel 资料；CRC 错误、线缆、端口和模块排查参考 IBM 支持文档整理。"], typicalProblems: ["网卡协商速率异常如何定位","光纤和双绞线适用场景有什么区别","链路频繁 up/down 怎么排查","CRC/FCS 错误通常说明什么","光模块兼容性或光功率异常如何影响链路"], prerequisites: ["signal"], related: ["ethernet-frame"], order: 5 },
  /* <!-- KG_EXPLAINED: MAC 地址 | 2026-05-23 | source_count=5 --> */
  /* ai-redone: 2026-05-22; sources=networkacademy-switching-logic,networklessons-arp; diagram=network:mac-address */
  /* <!-- KG_REVIEWED: MAC 地址 | 2026-05-24 | source_count=5 --> */
  { sourceRefs: ["networkacademy-switching-logic", "networklessons-arp", "cs-notes", "javaguide", "xiaolin-coding"], internalTags: ["ai-visualized:2026-05-22", "visual-source:networkacademy-switching-logic", "visual-source:networklessons-arp"], id: "mac-address", zh: "MAC 地址", en: "MAC Address", layer: "data-link", difficulty: "easy", summary: "用源 MAC、目的 MAC、ARP 缓存和交换机 MAC 表理解局域网内一帧如何到达目标端口。", explanation: ["概念定义：MAC 地址是数据链路层接口标识，常见以太网 MAC 为 48 位。以太网帧头同时携带源 MAC 和目的 MAC：源 MAC 标识本帧从哪个接口发出，目的 MAC 标识本地链路或下一跳要接收这帧的接口。", "工作流程：主机发送 IP 包前先确定下一跳。目标在同一网段时，下一跳就是目标主机；目标在其他网段时，下一跳是默认网关。主机通过 ARP 缓存查找下一跳 MAC，缓存缺失时发送 ARP Request 广播，目标设备返回 ARP Reply，主机写入 ARP 缓存后再封装以太网帧。", "交换机逻辑：交换机收到帧后先学习源 MAC 与入端口的对应关系，再查看目的 MAC。目的 MAC 已在 MAC 表中时，交换机只从对应端口转发；目的 MAC 属于广播、组播或未知单播时，交换机会在同一广播域内泛洪，目标主机回复后，交换机继续学习对端 MAC，后续通信变成定向转发。", "流程图读法：本页可视化复刻 NetworkAcademy 的 Flood and Learn 图形思路，并把 NetworkLessons 的 ARP Request/Reply 过程合并进去。观察顺序是“判断下一跳 -> 广播 ARP -> 写入 ARP 缓存 -> 写入以太网帧头 -> 交换机学习与转发”。", "工程排查：同网段不通时先看本机 IP/掩码、ARP 缓存、交换机 MAC 表和 VLAN；跨网段访问时重点确认帧的目的 MAC 是网关 MAC。抓包时把 Ethernet 头里的源/目的 MAC、ARP 广播 FF:FF:FF:FF:FF:FF、ARP Reply 单播和交换机端口表对应起来。", "参考来源：交换机学习源 MAC、按目的 MAC 查表、未知单播与广播泛洪的流程参考 NetworkAcademy.IO 的 Switching Logic 图解；ARP 缓存、ARP Request 广播、ARP Reply 单播和抓包字段参考 NetworkLessons 的 ARP explained。"], typicalProblems: ["MAC 地址和 IP 地址有什么区别","访问外网时目的 MAC 是谁","交换机如何学习 MAC 地址表","ARP Request 为什么使用广播 MAC","目的 MAC 查不到时交换机会如何处理","如何用 ARP 表和交换机 MAC 表排查同网段不通"], prerequisites: ["ethernet-physical"], related: ["ethernet-frame", "arp", "switch"], order: 6 },
  /* <!-- KG_EXPLAINED: 以太网帧 | 2026-05-23 | source_count=7 --> */
  /* ai-redone: 2026-05-23; sources=geeksforgeeks-ethernet-frame,ibm-ethernet-frame-format,cisco-8021q-frame-format,computernetworkingnotes-ethernet-frame; diagram=network:ethernet-frame */
  /* <!-- KG_REVIEWED: 以太网帧 | 2026-05-24 | source_count=7 --> */
  { sourceRefs: ["geeksforgeeks-ethernet-frame", "ibm-ethernet-frame-format", "cisco-8021q-frame-format", "computernetworkingnotes-ethernet-frame", "cs-notes", "javaguide", "xiaolin-coding"], internalTags: ["ai-visualized:2026-05-23", "visual-source:geeksforgeeks-ethernet-frame", "visual-source:ibm-ethernet-frame-format", "visual-source:cisco-8021q-frame-format", "visual-source:computernetworkingnotes-ethernet-frame"], id: "ethernet-frame", zh: "以太网帧", en: "Ethernet Frame", layer: "data-link", difficulty: "medium", summary: "用目的 MAC、源 MAC、可选 802.1Q Tag、Type/Length、Payload 和 FCS 理解局域网传输格式。", explanation: ["概念定义：以太网帧是数据链路层在本地链路上传输数据的基本格式。典型 Ethernet II 帧围绕目的 MAC、源 MAC、Type/Length、Payload 和 FCS 组织；Preamble 与 SFD帮助接收端完成物理同步和帧起始识别。", "字段结构：目的 MAC 与源 MAC 各 6 字节，决定这一跳的接收接口和发送接口；Type/Length 为 2 字节，在 Ethernet II 中常作为 EtherType，比如 0x0800 表示 IPv4、0x86DD 表示 IPv6、0x0806 表示 ARP；Payload 常见范围是 46 到 1500 字节，短载荷需要填充。", "VLAN Tag：802.1Q 在源 MAC 和 Type/Length 之间插入 4 字节 Tag。Tag 中包含 TPID 与 TCI，TCI 内有优先级、DEI 和 VLAN ID。插入 Tag 后帧内容发生变化，交换设备会重新计算 FCS。", "校验与接收：FCS 是 4 字节帧校验序列，接收网卡用它判断传输过程中帧内容是否损坏。校验通过后，接收端根据 Type/Length 把 Payload 交给 IP、ARP 或其他上层协议；校验失败的帧会被丢弃并体现在错误计数里。", "流程图读法：本页可视化复刻常见以太网帧字段图，把一条帧拆成“同步字段 -> MAC 地址 -> 可选 VLAN Tag -> Type/Length 与 Payload -> FCS 校验”五段。点击步骤时观察字段如何被写入、Tag 插入在哪里、接收端依据哪个字段分发载荷。", "工程排查：抓包和交换机排障时重点看源/目的 MAC、EtherType、VLAN ID、帧长度、MTU、FCS/CRC 错误和丢弃计数。MTU 不一致会造成大包丢弃或分片问题，VLAN Tag 缺失会让流量进入错误广播域，FCS/CRC 错误常指向链路质量。", "参考来源：字段顺序和示意图参考 GeeksForGeeks 的 Ethernet Frame Format；字段字节长度参考 IBM i Ethernet frame format；802.1Q Tag 的插入位置与 FCS 重算参考 Cisco 802.1Q Frame Format；header、data、trailer 三段讲解参考 ComputerNetworkingNotes。"], typicalProblems: ["以太网帧里有哪些关键字段","目的 MAC、源 MAC 和 EtherType 分别承担什么职责","MTU 超限会带来什么问题","VLAN Tag 在帧里插入在哪里","FCS/CRC 错误通常说明什么","抓包时如何识别 IPv4、IPv6 和 ARP 帧"], prerequisites: ["mac-address"], related: ["switch", "vlan"], order: 7 },
  /* <!-- KG_EXPLAINED: 交换机 | 2026-05-23 | source_count=7 --> */
  /* ai-redone: 2026-05-23; sources=networkacademy-switching-logic,cisco-mac-address-table,cisco-network-switching-operation,gfg-switch-functions-layer2; diagram=network:switch */
  /* <!-- KG_REVIEWED: 交换机 | 2026-05-24 | source_count=7 --> */
  { sourceRefs: ["networkacademy-switching-logic", "cisco-mac-address-table", "cisco-network-switching-operation", "gfg-switch-functions-layer2", "cs-notes", "javaguide", "xiaolin-coding"], internalTags: ["ai-visualized:2026-05-23", "visual-source:networkacademy-switching-logic", "visual-source:cisco-mac-address-table", "visual-source:cisco-network-switching-operation", "visual-source:gfg-switch-functions-layer2"], id: "switch", zh: "交换机", en: "Switch", layer: "data-link", difficulty: "easy", summary: "根据源 MAC 学习端口，根据目的 MAC、VLAN 和 MAC 地址表决定过滤、定向转发或泛洪。", explanation: ["概念定义：交换机是二层转发设备，核心数据结构是 MAC 地址表，也常叫 CAM 表。表项通常包含 MAC 地址、VLAN ID、端口和类型；动态表项来自交换机从收到帧的源 MAC 学习，静态表项来自人工配置。", "学习过程：交换机收到一帧后，先读取源 MAC 和入端口，把源 MAC、VLAN 与端口写入 MAC 地址表或刷新已有表项。动态表项有老化时间，主机迁移端口或长时间无流量时，表项会更新或老化消失。", "转发决策：完成源 MAC 学习后，交换机查看目的 MAC。目的 MAC 对应同一个入端口时执行过滤；目的 MAC 在同一 VLAN 的其他端口有表项时定向转发；目的 MAC 属于广播、组播或未知单播时，交换机在同一 VLAN 内向其他端口泛洪。", "VLAN 边界：MAC 地址表和转发决策都带 VLAN 维度。同一个 MAC 可以在不同 VLAN 中作为不同表项存在，泛洪范围也限制在同一 VLAN。Access 口通常只承载一个 VLAN，Trunk 口通过 802.1Q Tag 承载多个 VLAN。", "流程图读法：本页复刻“收到帧 -> 学习源 MAC -> 查目的 MAC -> 命中转发/同端口过滤/未知泛洪 -> 回包学习完成双向表项”的交换机逻辑。推进步骤时观察 MAC 表如何从空表变成双向表项，以及泛洪如何收敛为定向转发。", "工程排查：二层不通时先看接口 up/down、VLAN、MAC 地址表、ARP 表和端口错误计数。大量未知单播泛洪通常来自表项老化、单向流量、VLAN 配置、环路、MAC 漂移或表容量压力；可用 show mac address-table、抓包、端口镜像和交换机日志定位。", "参考来源：交换机学习源 MAC、目的 MAC 查表、未知单播泛洪的图解参考 NetworkAcademy.IO；MAC 地址表字段、动态/静态表项和 VLAN 维度参考 Cisco Catalyst 文档；学习、泛洪和转发过程参考 Cisco Network Switching Operation 与 GeeksForGeeks 二层交换机功能说明。"], typicalProblems: ["交换机如何学习 MAC 地址表","交换机和路由器的核心职责分别是什么","未知单播帧会怎么转发","同一个 MAC 出现在多个端口通常说明什么","广播风暴如何产生和治理","如何用 show mac address-table 排查同网段不通"], prerequisites: ["ethernet-frame"], related: ["vlan"], order: 8 },
  /* <!-- KG_EXPLAINED: VLAN | 2026-05-23 | source_count=7 --> */
  /* ai-redone: 2026-05-23; sources=cisco-access-trunk-interfaces,cisco-8021q-frame-format,networkacademy-vlan-trunking,omnisecu-8021q-tagging; diagram=network:vlan */
  /* <!-- KG_REVIEWED: VLAN | 2026-05-24 | source_count=7 --> */
  { sourceRefs: ["cisco-access-trunk-interfaces", "cisco-8021q-frame-format", "networkacademy-vlan-trunking", "omnisecu-8021q-tagging", "cs-notes", "javaguide", "xiaolin-coding"], internalTags: ["ai-visualized:2026-05-23", "visual-source:cisco-access-trunk-interfaces", "visual-source:cisco-8021q-frame-format", "visual-source:networkacademy-vlan-trunking", "visual-source:omnisecu-8021q-tagging"], id: "vlan", zh: "VLAN", en: "VLAN", layer: "data-link", difficulty: "medium", summary: "用逻辑广播域隔离二层流量，Access 口承载单个 VLAN，Trunk 口用 802.1Q Tag 同时承载多个 VLAN。", explanation: ["概念定义：VLAN 是虚拟局域网，用逻辑方式把同一套交换网络划分成多个二层广播域。每个 VLAN 内的广播、未知单播和二层转发相互独立，不同 VLAN 之间需要三层网关或三层交换能力才能通信。", "Access 端口：Access 口通常连接终端设备，只属于一个访问 VLAN。进入 Access 口的无标签帧会被交换机归入该端口配置的 VLAN；从 Access 口发往终端时，交换机会发送无标签帧。", "Trunk 端口：Trunk 口通常连接交换机、路由器或虚拟化主机，可以同时承载多个 VLAN。802.1Q 会在以太网帧源 MAC 与 Type/Length 之间插入 4 字节 Tag，Tag 中的 VLAN ID 标识该帧所属 VLAN。", "Native VLAN：802.1Q Trunk 可以同时承载有标签和无标签帧。Native VLAN 的帧通常在 Trunk 上以无标签方式发送；Trunk 收到无标签帧时会把它归入 Native VLAN。两端 Native VLAN 配置不一致会造成流量进入错误广播域。", "流程图读法：本页可视化按“Access 入口归类 -> Trunk 加 802.1Q Tag -> 对端按 VLAN ID 分流 -> 出 Access 口去标签 -> 跨 VLAN 交给网关”展开。推进步骤时重点看 VLAN ID 如何跟着帧穿过 Trunk，以及广播域如何被边界限制。", "工程排查：VLAN 问题常表现为同网段不通、广播范围异常、跨交换机只通部分主机、Trunk 未放行 VLAN 或 Native VLAN 不匹配。排查顺序通常是端口模式、Access VLAN、Trunk allowed VLAN、Native VLAN、MAC 表和网关配置。", "参考来源：Access 与 Trunk 行为参考 Cisco Nexus 3000 Layer 2 配置文档；802.1Q Tag 插入位置与 Native VLAN 语义参考 Cisco 802.1Q Frame Format；Trunk 添加与移除 VLAN Tag 的图解参考 NetworkAcademy.IO；802.1Q 字段结构与无标签 Native VLAN 行为参考 OmniSecu。"], typicalProblems: ["VLAN 解决什么问题","Access 口和 Trunk 口有什么区别","802.1Q Tag 插入在帧的哪个位置","Native VLAN 不一致会出现什么现象","跨 VLAN 通信需要什么条件","Trunk 放行 VLAN 配错如何排查"], prerequisites: ["switch"], related: ["subnet"], order: 9 },
  /* <!-- KG_EXPLAINED: ARP | 2026-05-23 | source_count=7 --> */
  /* ai-redone: 2026-05-23; sources=rfc826-arp,networklessons-arp,wireshark-arp,cisco-arp-config; diagram=network:arp */
  /* <!-- KG_REVIEWED: ARP | 2026-05-24 | source_count=7 --> */
  { internalTags: ["ai-visualized:2026-05-23", "visual-source:rfc826-arp", "visual-source:networklessons-arp", "visual-source:wireshark-arp", "visual-source:cisco-arp-config"], sourceRefs: ["rfc826-arp", "networklessons-arp", "wireshark-arp", "cisco-arp-config", "cs-notes", "javaguide", "xiaolin-coding"], id: "arp", zh: "ARP", en: "Address Resolution Protocol", layer: "data-link", difficulty: "medium", summary: "把下一跳 IPv4 地址解析为同一二层链路可投递的 MAC 地址。", explanation: ["概念定义：ARP 是 IPv4 在本地链路上把协议地址映射到硬件地址的解析机制。RFC 826 定义了 sender hardware address、sender protocol address、target hardware address 和 target protocol address 等字段，让主机能用目标 IPv4 地址找到对应的以太网 MAC。", "下一跳判断：主机发送 IP 包前先用自己的 IP、子网掩码和目标 IP 判断下一跳。目标在同一子网时，ARP 查询目标主机 IP；目标在远端网络时，ARP 查询默认网关接口 IP，后续以太网帧的目的 MAC 指向网关，IP 包的目的 IP 仍保持远端主机。", "请求与应答：ARP 缓存缺失时，请求方发送 Ethernet 广播帧，目的 MAC 是 FF:FF:FF:FF:FF:FF，ARP 内容表达“谁拥有这个目标协议地址”。同一广播域内设备都会看到请求，持有目标 IP 的设备返回 ARP Reply，通常用单播把自己的 MAC 告诉请求方。", "缓存与投递：请求方收到 Reply 后把 IP 到 MAC 的映射写入 ARP 缓存，并用解析出的 MAC 封装后续以太网帧。缓存提升性能，也带来陈旧表项、重复 IP、ARP 欺骗和错误网关 MAC 等排障点；Cisco 文档把 ARP 表、静态 ARP 和超时配置作为设备侧常用操作面。", "抓包读法：Wireshark 中重点看 ARP opcode、sender MAC/IP、target MAC/IP，以及外层 Ethernet 目的地址。正常流程先看到广播 Request，再看到目标或网关的 Reply；重复 IP 或投毒场景会出现同一个协议地址对应多个硬件地址的异常信号。", "参考来源：协议字段与 Request/Reply 语义采用 RFC 826；广播请求、单播应答和缓存流程参考 NetworkLessons；抓包字段和显示方式参考 Wireshark ARP 资料；设备 ARP 表和静态/动态表项行为参考 Cisco 配置文档。"], typicalProblems: ["ARP 的完整解析过程","访问外网时 ARP 解析哪个 MAC","ARP Request 为什么使用广播 MAC","ARP Reply 通常怎样返回请求方","ARP 缓存异常或 ARP 欺骗怎么排查"], prerequisites: ["mac-address", "ip"], related: ["gateway"], order: 10 },
  /* <!-- KG_REVIEWED: IP 协议 | 2026-05-24 | source_count=5 --> */
  /* <!-- KG_EXPLAINED: IP 协议 | 2026-05-23 | source_count=5 --> */
  { sourceRefs: ["rfc791-ip", "cloudflare-internet-protocol", "cloudflare-network-layer", "microsoft-tcpip-networking", "xiaolin-coding"], id: "ip", zh: "IP 协议", en: "Internet Protocol", layer: "network", difficulty: "easy", summary: "负责跨网络寻址和分组转发。", explanation: ["核心概念：IP 是互联网层的核心协议，给数据报写入源地址、目的地址、TTL、协议号等字段，让路由器可以按目的地址逐跳转发。RFC 791 把 IPv4 定义为面向分组交换网络的基础互联协议，Cloudflare 也把 IP 解释为让数据包跨网络找到目的地的寻址机制。", "适用场景：IP 负责跨网段通信、路由转发、云 VPC 通信、容器网络、办公网络和公网访问。应用通常只感知域名或连接，真正走到网络层时会变成源 IP、目的 IP、路由表和下一跳选择。", "特殊场景：IP 是尽力而为交付，数据包可能丢失、重复、乱序或被分片；可靠性由 TCP、QUIC 或应用层补足。TTL 每经过一跳递减，用于限制环路；协议号把载荷交给 TCP、UDP、ICMP 等上层协议。", "边界情况：IP 本身只处理网络层寻址和转发，端口、连接状态和重传属于传输层；MAC 投递属于链路层。分片、MTU、NAT、安全组、策略路由和多网卡都会改变实际路径，抓包时要同时看 IP 头和下一跳二层信息。", "常见误区与注意点：ping 通表示 ICMP 路径可达，业务访问还取决于端口、防火墙、TLS 和应用。排查 IP 层先看本机地址、掩码、默认网关、路由表、TTL、回程路由和中间安全策略，再用 ping、traceroute、tcpdump 或云网络流日志确认路径。", "参考来源：IPv4 数据报格式和 TTL 语义采用 RFC 791；IP 寻址与网络层职责参考 Cloudflare Internet Protocol 与 Network Layer；地址、掩码、网关和路由排查参考 Microsoft Learn；中文学习资料参考小林 coding。"], typicalProblems: ["IP 为什么是不可靠交付","TTL 的作用是什么","IP 层如何选择下一跳"], prerequisites: ["tcp-ip-model"], related: ["ipv4", "ipv6", "routing"], order: 11 },
  /* <!-- KG_REVIEWED: IPv4 地址 | 2026-05-24 | source_count=5 --> */
  /* <!-- KG_EXPLAINED: IPv4 地址 | 2026-05-23 | source_count=5 --> */
  { sourceRefs: ["rfc791-ip", "rfc1918-private-address", "microsoft-tcpip-networking", "cloudflare-internet-protocol", "xiaolin-coding"], id: "ipv4", zh: "IPv4 地址", en: "IPv4 Address", layer: "network", difficulty: "easy", summary: "理解 IPv4 地址、子网掩码和地址分类。", explanation: ["核心概念：IPv4 地址是 32 位网络层地址，通常写成点分十进制，例如 192.168.1.10。地址通过子网掩码或 CIDR 前缀拆成网络部分和主机部分，网络部分用于判断本地网段与路由范围。", "适用场景：IPv4 仍广泛用于企业内网、云 VPC、家庭网络、公网访问和服务暴露。主机通信时先用地址和掩码判断目标是否同网段，同网段走 ARP 找目标 MAC，跨网段交给默认网关。", "特殊场景：RFC 1918 定义了私有地址段 10.0.0.0/8、172.16.0.0/12 和 192.168.0.0/16，常配合 NAT 访问公网。0.0.0.0、127.0.0.0/8、广播地址、网络地址和链路本地地址都有特殊用途，配置时要避开业务主机地址。", "边界情况：传统 A/B/C 类地址更多是历史概念，现代网络规划以 CIDR 前缀为主。一个地址能否使用取决于子网范围、网关、广播规则、云厂商保留地址和安全策略；云子网常会额外保留部分地址给平台使用。", "常见误区与注意点：同一个 IP 在不同网络域内可以重复使用，跨 VPC、VPN、专线和 Kubernetes 网络规划要避免地址重叠。排障时同时核对 IP、掩码、网关、ARP、路由、安全组和实际出口 IP，避免只看主机地址。", "参考来源：IPv4 地址和数据报基础采用 RFC 791；私有地址段采用 RFC 1918；子网掩码、默认网关和地址配置参考 Microsoft Learn；IP 地址作用参考 Cloudflare；中文图解参考小林 coding。"], typicalProblems: ["私有地址段有哪些","网络地址和广播地址如何计算","同网段判断依赖哪些配置"], prerequisites: ["ip"], related: ["subnet", "nat"], order: 12 },
  /* <!-- KG_REVIEWED: IPv6 地址 | 2026-05-24 | source_count=5 --> */
  /* <!-- KG_EXPLAINED: IPv6 地址 | 2026-05-23 | source_count=5 --> */
  { sourceRefs: ["rfc8200-ipv6", "rfc4291-ipv6-addressing", "rfc4861-ndp", "rfc4443-icmpv6", "cloudflare-internet-protocol"], id: "ipv6", zh: "IPv6 地址", en: "IPv6 Address", layer: "network", difficulty: "medium", summary: "理解更大的地址空间、简化头部和自动配置。", explanation: ["核心概念：IPv6 使用 128 位地址，采用冒号分隔的十六进制写法，并支持连续 0 压缩。RFC 8200 定义 IPv6 基础头部，RFC 4291 定义地址架构；更大的地址空间让公网直连、层级聚合和自动配置更容易落地。", "适用场景：IPv6 适合公网地址充足、移动网络、云网络、IoT、大规模双栈迁移和需要端到端寻址的场景。常见地址类型包括全局单播、链路本地、组播和回环地址。", "特殊场景：IPv6 没有 IPv4 ARP，邻居发现协议 NDP 基于 ICMPv6 完成邻居解析、路由器发现、前缀发现和重复地址检测。ICMPv6 也是 IPv6 的关键组成部分，路径 MTU 发现、错误报告和邻居发现都依赖它。", "边界情况：双栈环境中 DNS 可能同时返回 A 和 AAAA 记录，客户端地址选择、运营商 IPv6 质量、防火墙策略和应用监听地址会影响实际访问。IPv6 基础头部更简洁，扩展头、分片和安全设备兼容性仍需关注。", "常见误区与注意点：IPv6 地址空间更大，并不自动带来安全；入口规则、出口规则和日志审计仍然要完整配置。排查时确认 DNS AAAA、路由前缀、默认路由、NDP、ICMPv6 放行、应用监听 :: 地址和回退到 IPv4 的行为。", "参考来源：IPv6 协议基础采用 RFC 8200；地址类型与表示法采用 RFC 4291；邻居发现采用 RFC 4861；ICMPv6 角色采用 RFC 4443；IP 基础解释参考 Cloudflare。"], typicalProblems: ["IPv6 和 IPv4 的关键区别","NDP 替代了 IPv4 里的什么机制","双栈环境下访问异常如何排查"], prerequisites: ["ip"], related: ["ipv4"], order: 13 },
  /* <!-- KG_REVIEWED: 子网划分 | 2026-05-24 | source_count=4 --> */
  /* <!-- KG_EXPLAINED: 子网划分 | 2026-05-23 | source_count=4 --> */
  { sourceRefs: ["microsoft-tcpip-networking", "rfc4632-cidr", "aws-vpc-route-tables", "xiaolin-coding"], id: "subnet", zh: "子网划分", en: "Subnetting", layer: "network", difficulty: "medium", summary: "用网络位和主机位规划网络范围。", explanation: ["核心概念：子网划分用掩码或前缀长度把地址空间拆成多个网络范围。主机把本机 IP 和目标 IP 分别与子网掩码计算网络号，网络号相同就按本地链路投递，网络号不同就交给网关。", "适用场景：子网用于隔离广播域、规划机房或办公室网段、划分云 VPC 可用区、控制路由范围和安全边界。合理子网能让网关、路由表、安全组和地址容量保持清晰。", "特殊场景：/31 常用于点到点链路，/32 表示单主机路由，云平台会保留每个子网中的部分地址。IPv4 传统网络地址和广播地址通常分配给网络语义，普通主机地址要避开。", "边界情况：子网过小会导致地址耗尽，子网过大可能扩大广播和故障影响面。跨 VPN、VPC Peering、专线和 Kubernetes Pod/Service 网段时，地址重叠会让路由选择和回程路径变复杂。", "常见误区与注意点：子网掩码配置错误会让主机误判目标位置，进而 ARP 错对象或绕过网关。排障时核对 IP、掩码、网关是否属于同一子网，结合路由表、ARP 表和云子网路由确认实际下一跳。", "参考来源：子网掩码和默认网关基础参考 Microsoft Learn；前缀表示和 CIDR 规则参考 RFC 4632；云子网路由表行为参考 AWS VPC 文档；中文图解参考小林 coding。"], typicalProblems: ["子网掩码如何判断同网段","/24 可用主机数是多少","子网配置错误会导致什么现象"], prerequisites: ["ipv4"], related: ["cidr", "gateway"], order: 14 },
  /* <!-- KG_REVIEWED: CIDR | 2026-05-24 | source_count=4 --> */
  /* <!-- KG_EXPLAINED: CIDR | 2026-05-23 | source_count=4 --> */
  { sourceRefs: ["rfc4632-cidr", "aws-vpc-route-tables", "microsoft-tcpip-networking", "cloudflare-network-layer"], id: "cidr", zh: "CIDR", en: "Classless Inter-Domain Routing", layer: "network", difficulty: "medium", summary: "用前缀长度表示网络范围，提高地址分配效率。", explanation: ["核心概念：CIDR 用地址加斜杠前缀表示网络范围，例如 10.0.0.0/16。前缀越长，网络越小；前缀越短，覆盖地址越多。RFC 4632 把 CIDR 描述为替代传统分类地址和支持路由聚合的机制。", "适用场景：CIDR 用于 VPC、子网、安全组、ACL、BGP 路由、Kubernetes 网络和防火墙白名单。它让地址分配按实际容量规划，也让多条连续网络可以聚合成更短前缀降低路由表规模。", "特殊场景：路由查找采用最长前缀匹配，10.0.1.0/24 会优先于 10.0.0.0/16。默认路由 0.0.0.0/0 表示所有 IPv4 地址，常作为外网或兜底出口。", "边界情况：CIDR 范围重叠会造成路由歧义，尤其在云联网、VPN、专线和多集群互联中影响明显。聚合前缀能减少路由数量，但过度聚合会扩大可达范围和安全影响面。", "常见误区与注意点：/24 表示 24 位网络前缀，实际可用主机数还要考虑网络地址、广播地址和平台保留地址。规划时先估容量和增长，再为可用区、环境、Pod/Service、网关和保留空间分配前缀。", "参考来源：CIDR 定义、聚合和最长前缀匹配参考 RFC 4632；云路由表和默认路由参考 AWS VPC 文档；地址和掩码基础参考 Microsoft Learn；网络层路由职责参考 Cloudflare。"], typicalProblems: ["CIDR 如何计算地址范围","最长前缀匹配是什么","VPC 网段规划为什么要避免重叠"], prerequisites: ["subnet"], related: ["routing"], order: 15 },
  /* <!-- KG_REVIEWED: 网关 | 2026-05-24 | source_count=4 --> */
  /* <!-- KG_EXPLAINED: 网关 | 2026-05-23 | source_count=4 --> */
  { sourceRefs: ["microsoft-tcpip-networking", "aws-vpc-route-tables", "rfc826-arp", "cloudflare-network-layer"], id: "gateway", zh: "网关", en: "Gateway", layer: "network", difficulty: "easy", summary: "连接本地网络和外部网络的出口。", explanation: ["核心概念：网关是主机访问其他网络时交给的下一跳，默认网关处理没有更精确路由匹配的流量。主机把远端 IP 包封装进发往网关 MAC 的二层帧，由网关继续按路由表转发。", "适用场景：办公终端出网、服务器跨子网访问、云子网访问 Internet、NAT 出口、容器节点访问外部服务都依赖网关。网关可以是路由器、三层交换机、防火墙、云路由或虚拟网关。", "特殊场景：同一主机可以有多张网卡和多个路由，默认网关只是兜底路径，更精确的静态路由或策略路由会优先匹配。访问远端时 ARP 查询的是网关接口 IP 的 MAC，IP 包目的地址仍然保持远端地址。", "边界情况：网关地址必须位于本机可达的本地子网内；网关可达也只说明第一跳正常，后续路径、回程路由和安全策略仍可能阻断。云网络里路由表、NAT Gateway、Internet Gateway 和安全组共同决定出口效果。", "常见误区与注意点：默认网关缺失时通常只能访问本地子网。排查跨网段失败时先看默认路由、网关 ARP、网关接口状态、路由表和回程路径，再看防火墙、NAT 和云路由配置。", "参考来源：默认网关和 TCP/IP 配置参考 Microsoft Learn；子网路由表与目标/下一跳模型参考 AWS VPC 文档；ARP 下一跳解析参考 RFC 826；网络层转发职责参考 Cloudflare。"], typicalProblems: ["默认网关的作用是什么","网关配置错误会出现什么现象","跨网段访问时二层目的 MAC 是谁"], prerequisites: ["subnet", "arp"], related: ["routing"], order: 16 },
  /* <!-- KG_REVIEWED: 路由 | 2026-05-24 | source_count=5 --> */
  /* <!-- KG_EXPLAINED: 路由 | 2026-05-23 | source_count=5 --> */
  { sourceRefs: ["rfc791-ip", "rfc4632-cidr", "aws-vpc-route-tables", "cloudflare-network-layer", "microsoft-tcpip-networking"], id: "routing", zh: "路由", en: "Routing", layer: "network", difficulty: "medium", summary: "根据路由表选择分组转发路径。", explanation: ["核心概念：路由是根据目的 IP 选择下一跳和出口接口的过程。路由表通常包含目的前缀、下一跳、出接口和优先级，转发设备按最长前缀匹配选择最具体的可用路径。", "适用场景：主机默认路由、企业内网互联、云 VPC 路由、BGP 公网路由、VPN/专线路由和服务网格底层网络都依赖路由。路由既可以静态配置，也可以由动态路由协议学习。", "特殊场景：默认路由 0.0.0.0/0 承接兜底流量；黑洞路由用于显式丢弃；策略路由可以按源地址、标记或接口选择路径；云路由表还会把目标指向 Internet Gateway、NAT Gateway、Transit Gateway、Peering 或本地目标。", "边界情况：路径可达需要去程和回程都正确。单向不通、非对称路由、防火墙状态表、MTU 问题、NAT 出口和重叠 CIDR 都会让路由排查变复杂。TTL 能限制环路，traceroute 利用 TTL 观察中间路径。", "常见误区与注意点：路由表命中只代表下一跳选择，实际通信还要经过 ARP、链路、ACL、安全组、NAT 和应用监听。排查时按本机路由、默认网关、中间路由、回程路由、云路由表和安全策略逐层确认。", "参考来源：IPv4 转发和 TTL 参考 RFC 791；CIDR 与最长前缀匹配参考 RFC 4632；云路由表目标模型参考 AWS VPC 文档；网络层路由职责参考 Cloudflare；主机 TCP/IP 路由配置参考 Microsoft Learn。"], typicalProblems: ["路由表如何决定下一跳","最长前缀匹配如何工作","单向不通如何排查回程路由"], prerequisites: ["ip", "gateway"], related: ["icmp", "nat"], order: 17 },
  /* <!-- KG_REVIEWED: ICMP | 2026-05-24 | source_count=4 --> */
  /* <!-- KG_EXPLAINED: ICMP | 2026-05-23 | source_count=4 --> */
  { sourceRefs: ["rfc792-icmp", "rfc4443-icmpv6", "cloudflare-network-layer", "xiaolin-coding"], id: "icmp", zh: "ICMP", en: "Internet Control Message Protocol", layer: "network", difficulty: "easy", summary: "用于网络诊断和控制消息，常见工具是 ping。", explanation: ["核心概念：ICMP 是 IP 层的控制和差错报告协议，用于返回目标不可达、超时、参数错误、回显请求和回显应答等消息。RFC 792 定义 IPv4 ICMP，IPv6 中对应 ICMPv6。", "适用场景：ping 使用 Echo Request/Reply 检查基本连通性；traceroute 通过递增 TTL 触发中间路由器返回超时消息；路径 MTU、邻居发现和错误报告也会依赖 ICMP 或 ICMPv6。", "特殊场景：防火墙、云安全组或运营商可能限制 ICMP，使 ping 结果和业务端口结果出现差异。ICMP 目标不可达消息能提示无路由、端口不可达、禁止访问或需要分片等问题。", "边界情况：ICMP 消息通常由网络设备或目标主机生成，反映的是控制面信号。高优先级限速、丢弃策略、NAT、非对称路径和 IPv6 ICMPv6 放行策略都会影响诊断结果。", "常见误区与注意点：ping 成功不能证明 HTTP、TLS 或数据库端口可用；ping 失败也不能直接判定服务宕机。排查时结合 ping、traceroute/mtr、curl/nc、抓包、安全组和服务监听状态一起判断。", "参考来源：IPv4 ICMP 类型和语义采用 RFC 792；ICMPv6 采用 RFC 4443；网络层诊断职责参考 Cloudflare；中文图解和排查思路参考小林 coding。"], typicalProblems: ["ping 的底层过程是什么","ping 不通代表服务一定不可用吗","traceroute 为什么能看到路径"], prerequisites: ["ip"], related: ["routing"], order: 18 },
  /* <!-- KG_REVIEWED: NAT | 2026-05-24 | source_count=4 --> */
  /* <!-- KG_EXPLAINED: NAT | 2026-05-23 | source_count=4 --> */
  { sourceRefs: ["rfc3022-nat", "rfc1918-private-address", "aws-vpc-nat-gateway", "xiaolin-coding"], id: "nat", zh: "NAT", en: "Network Address Translation", layer: "network", difficulty: "medium", summary: "在内网地址和公网地址之间转换。", explanation: ["核心概念：NAT 在报文经过边界设备时改写 IP 地址或端口，并维护映射表让返回流量能找到原始主机。RFC 3022 描述了传统 NAT 的基本模型，常见形态包括 SNAT、DNAT 和端口地址转换 PAT。", "适用场景：私有 IPv4 主机共享公网出口、云私有子网访问互联网、端口映射暴露内网服务、容器或虚拟机出网都常用 NAT。AWS NAT Gateway 就是让私有子网实例向外发起连接的托管 NAT 出口。", "特殊场景：SNAT 改写源地址，常用于出网；DNAT 改写目的地址，常用于端口映射和负载入口；PAT 同时改写端口，让多个内网连接共享一个公网 IP。NAT 映射通常有超时，UDP 映射更依赖应用保活。", "边界情况：NAT 会改变端到端地址可见性，影响日志归因、ACL、P2P、FTP/SIP 等携带地址信息的协议。连接跟踪表容量、端口耗尽、回程路径不一致、多层 NAT 和云安全策略都会造成间歇性失败。", "常见误区与注意点：NAT 解决地址转换和出口复用，安全控制仍需防火墙、安全组和访问控制配合。排障时看转换规则、连接跟踪、源/目的地址变化、出口公网 IP、端口占用、回程路由和应用日志里的真实客户端地址。", "参考来源：NAT 模型和地址/端口转换参考 RFC 3022；私有地址空间参考 RFC 1918；云 NAT Gateway 场景参考 AWS VPC 文档；中文图解和面试资料参考小林 coding。"], typicalProblems: ["SNAT 和 DNAT 有什么区别","多个内网主机如何共享公网 IP","端口映射失败如何排查"], prerequisites: ["ipv4", "gateway"], related: ["tcp", "udp"], order: 19 },
  /* <!-- KG_REVIEWED: 端口 | 2026-05-24 | source_count=4 --> */
  /* <!-- KG_EXPLAINED: 端口 | 2026-05-23 | source_count=4 --> */
  { sourceRefs: ["iana-service-port-registry", "rfc768-udp", "rfc9293-tcp", "microsoft-tcpip-networking"], id: "port", zh: "端口", en: "Port", layer: "transport", difficulty: "easy", summary: "用端口把网络流量分发到具体进程。", explanation: ["核心概念：端口是传输层的逻辑编号，用来把到达同一 IP 的流量分发给不同进程。IP 定位主机或接口，端口定位主机上的服务；TCP 和 UDP 都有 16 位端口空间。", "适用场景：Web 服务常用 80/443，DNS 常用 53，SSH 常用 22，数据库、缓存和消息队列也会监听固定端口。客户端通常使用临时源端口发起连接，服务端使用固定目的端口接收请求。", "特殊场景：操作系统用五元组区分一条 TCP/UDP 流：源 IP、源端口、目的 IP、目的端口、协议。NAT、负载均衡、代理和容器端口映射会改写或转发端口，使应用看到的客户端端口和网络侧端口不同。", "边界情况：端口监听只说明本机进程绑定了地址和端口，实际可达还取决于监听地址、路由、防火墙、安全组、NAT、协议类型和应用握手。0.0.0.0、127.0.0.1、具体网卡 IP 和 IPv6 :: 的监听范围不同。", "常见误区与注意点：同一个数字端口在 TCP 和 UDP 中属于不同协议空间。排查时用 ss/lsof 看监听，用 nc/curl/telnet 测可达，用 tcpdump 看 SYN、RST 或 UDP 响应，再核对防火墙、安全组和容器端口映射。", "参考来源：端口注册与知名服务参考 IANA 端口注册表；UDP 端口字段参考 RFC 768；TCP 端口与连接语义参考 RFC 9293；TCP/IP 配置排查参考 Microsoft Learn。"], typicalProblems: ["IP 和端口分别定位什么","五元组如何唯一标识连接","端口监听正常但访问失败怎么排查"], prerequisites: ["ip"], related: ["tcp", "udp"], order: 20 },
  /* <!-- KG_REVIEWED: UDP | 2026-05-24 | source_count=5 --> */
  /* <!-- KG_EXPLAINED: UDP | 2026-05-23 | source_count=5 --> */
  { sourceRefs: ["rfc768-udp", "rfc1035-dns", "rfc9000-quic", "rfc791-ip", "xiaolin-coding"], id: "udp", zh: "UDP", en: "User Datagram Protocol", layer: "transport", difficulty: "easy", summary: "轻量、低延迟、无连接的传输层协议。", explanation: ["核心概念：UDP 是无连接的数据报协议，头部包含源端口、目的端口、长度和校验和。RFC 768 定义 UDP 只提供最小传输能力，可靠性、顺序、重传和拥塞控制需要上层协议或应用自行设计。", "适用场景：UDP 适合 DNS 查询、实时音视频、游戏、监控上报、日志采集和 QUIC/HTTP/3 等场景。它省去连接建立过程，单次请求延迟低，应用可以按业务容忍丢包或自定义恢复策略。", "特殊场景：DNS 经典查询常用 UDP 53，响应过大或需要区域传输时会使用 TCP；QUIC 基于 UDP 实现连接、可靠传输、拥塞控制和 TLS 集成。NAT 下 UDP 映射依赖超时和保活。", "边界情况：UDP 数据报有边界，应用一次发送对应一个数据报；过大的数据报可能触发 IP 分片，分片丢失会导致整包不可用。UDP 缺少连接状态，防火墙、负载均衡和服务端限流策略要显式支持。", "常见误区与注意点：UDP 轻量并不等于随意使用，公网服务仍需处理放大攻击、伪造源地址、丢包、乱序、重复和拥塞友好。排查 UDP 时重点依赖抓包、服务日志、NAT 映射、MTU、超时和应用层序列号。", "参考来源：UDP 报文格式采用 RFC 768；DNS over UDP/TCP 行为参考 RFC 1035；QUIC over UDP 参考 RFC 9000；IP 分片背景参考 RFC 791；中文图解参考小林 coding。"], typicalProblems: ["UDP 和 TCP 的区别","UDP 如何在应用层实现可靠性","DNS 为什么常用 UDP"], prerequisites: ["port"], related: ["dns", "quic"], order: 21 },
  /* <!-- KG_REVIEWED: TCP | 2026-05-24 | source_count=5 --> */
  /* <!-- KG_EXPLAINED: TCP | 2026-05-23 | source_count=5 --> */
  { sourceRefs: ["rfc9293-tcp", "rfc5681-tcp-congestion", "rfc6298-tcp-rto", "rfc7323-tcp-high-performance", "xiaolin-coding"], id: "tcp", zh: "TCP", en: "Transmission Control Protocol", layer: "transport", difficulty: "medium", summary: "可靠、有序、面向连接的传输层协议。", explanation: ["核心概念：TCP 是面向连接的可靠字节流协议。RFC 9293 定义了端口、序列号、确认号、窗口、控制位和状态机；它通过三次握手建立连接，通过 ACK、重传、滑动窗口和拥塞控制提供可靠有序传输。", "适用场景：TCP 适合 HTTP/1.1、HTTP/2、数据库连接、SSH、SMTP、文件传输和大多数需要可靠传输的业务协议。它把应用写入的字节流切分成段，接收端按序重组后交给应用。", "特殊场景：TCP 是字节流，应用层没有天然消息边界，因此会遇到粘包、半包和拆包问题，需要长度字段、分隔符或协议帧解决。长连接、连接池、keepalive、Nagle、延迟 ACK 和 TLS 叠加都会影响实际行为。", "边界情况：可靠传输并不保证应用成功处理，只保证字节按连接语义送达对端 TCP。连接建立受 SYN 队列、backlog、负载均衡和防火墙影响；吞吐受 RTT、窗口、丢包、拥塞控制和接收端处理能力影响。", "常见误区与注意点：TCP 适合可靠字节流，实时音视频或自定义传输可能选择 UDP/QUIC。排查 TCP 时看三次握手、seq/ack、重传、窗口、拥塞、连接状态、RST/FIN 和应用读取速度，工具包括 ss、tcpdump、Wireshark 和系统内核指标。", "参考来源：TCP 协议和状态机采用 RFC 9293；拥塞控制参考 RFC 5681；重传计时参考 RFC 6298；高性能窗口扩展参考 RFC 7323；中文图解参考小林 coding。"], typicalProblems: ["TCP 如何保证可靠传输","TCP 粘包半包是什么","TCP 和 UDP 如何选择"], prerequisites: ["port", "ip"], related: ["tcp-handshake", "tcp-flow-control"], order: 22 },
  /* <!-- KG_REVIEWED: TCP 三次握手 | 2026-05-24 | source_count=6 --> */
  /* <!-- KG_EXPLAINED: TCP 三次握手 | 2026-05-23 | source_count=6 --> */
  { sourceRefs: ["cloudmylab-tcp-handshake", "guru99-tcp-handshake", "geeksforgeeks-tcp-handshake", "cs-notes", "javaguide", "xiaolin-coding"], id: "tcp-handshake", zh: "TCP 三次握手", en: "TCP Three-Way Handshake", layer: "transport", difficulty: "medium", summary: "通过 SYN、SYN-ACK、ACK 建立可靠连接，同步双方初始序列号并确认收发能力。", explanation: ["概念定义：TCP 三次握手是客户端和服务器在传输应用数据前建立连接的三步协商。第一步客户端发送 SYN 并携带初始序列号 x，第二步服务器返回 SYN-ACK 并携带初始序列号 y 与 ack=x+1，第三步客户端返回 ACK 并确认 ack=y+1。","工作过程：客户端从 CLOSED 进入 SYN-SENT，服务器在 LISTEN 收到 SYN 后进入 SYN-RCVD；客户端收到 SYN-ACK 后发送最终 ACK，双方进入 ESTABLISHED。流程图要同时画报文方向、seq/ack 字段和两端状态变化。","核心价值：三次交互完成两件事：同步双方 ISN，确认客户端到服务器、服务器到客户端两个方向都具备发送和接收能力。第三次 ACK 让服务器确认自己的 SYN 被客户端收到，连接可以承载应用数据。","工程排查：SYN-SENT 堆积重点看客户端到服务端链路、目标端口和防火墙；SYN-RCVD 堆积重点看半连接队列、SYN flood、backlog 和内核参数。抓包时按 SYN、SYN-ACK、ACK 三行检查方向、重传、RST 和耗时。","参考来源：本页流程图参考 CloudMyLab 的 TCP/IP 3-Way Handshake featured diagram 结构，步骤语义结合 Guru99 与 GeeksForGeeks 的三次握手说明整理。"], typicalProblems: ["为什么 TCP 建连需要三次握手","三次握手里的 seq 和 ack 如何计算","第三次 ACK 在连接建立中承担什么作用","SYN flood 的原理是什么","SYN-SENT 或 SYN-RCVD 堆积如何排查"], prerequisites: ["tcp"], related: ["tcp-four-way-wave"], order: 23 },
  /* <!-- KG_REVIEWED: TCP 四次挥手 | 2026-05-24 | source_count=7 --> */
  /* <!-- KG_EXPLAINED: TCP 四次挥手 | 2026-05-23 | source_count=7 --> */
  { sourceRefs: ["geeksforgeeks-tcp-termination", "ipwithease-tcp-termination", "tcpipguide-tcp-termination", "tcpipguide-time-wait", "cs-notes", "javaguide", "xiaolin-coding"], id: "tcp-four-way-wave", zh: "TCP 四次挥手", en: "TCP Four-Way Termination", layer: "transport", difficulty: "medium", summary: "通过 FIN、ACK、FIN、ACK 分别释放 TCP 双向数据流，主动关闭方进入 TIME-WAIT 后完成连接清理。", explanation: ["概念定义：TCP 四次挥手是连接释放流程。TCP 是全双工字节流协议，A 到 B 与 B 到 A 两个方向可以独立关闭；一端发送 FIN 表示本方向发送完毕，另一端返回 ACK 确认收到。", "工作过程：主动关闭方从 ESTABLISHED 发送 FIN 后进入 FIN-WAIT-1；被动关闭方确认后进入 CLOSE-WAIT，主动关闭方收到 ACK 后进入 FIN-WAIT-2；被动关闭方完成剩余数据发送后发 FIN 并进入 LAST-ACK；主动关闭方返回最终 ACK 后进入 TIME-WAIT，被动关闭方进入 CLOSED。", "核心价值：四次挥手把两个半连接逐一释放。第一次 FIN 关闭主动方发送方向，第二次 ACK 确认该方向关闭；第三次 FIN 关闭被动方发送方向，第四次 ACK 确认最终释放。流程图要同时画报文方向、FIN/ACK 字段和两端状态。", "TIME-WAIT：主动关闭方保留 TIME-WAIT，用 2MSL 时间窗口吸收迟到报文，并在最终 ACK 丢失时具备重发空间。大量 TIME-WAIT 常见于短连接和主动关闭侧，需要结合连接复用、端口范围、内核参数和业务关闭模式分析。", "工程排查：CLOSE-WAIT 堆积通常指向应用侧 close 延迟、读写协程退出异常或连接池归还逻辑问题；FIN-WAIT-2 堆积重点看对端是否发出 FIN；LAST-ACK 堆积重点看最终 ACK 是否丢失或链路是否异常。抓包时按 FIN、ACK、FIN、ACK 四行检查方向、重传和状态。", "参考来源：本页流程图参考 GeeksForGeeks 的 TCP Connection Termination 时序图结构，状态细节结合 The TCP/IP Guide 普通释放流程与 TIME-WAIT 页面、IP With Ease 状态表整理。"], typicalProblems: ["为什么 TCP 断连通常是四次挥手", "FIN 和 ACK 分别代表什么", "主动关闭方为什么进入 TIME-WAIT", "CLOSE-WAIT 过多说明什么", "FIN-WAIT-2 或 LAST-ACK 堆积如何排查"], prerequisites: ["tcp-handshake"], related: ["tcp-state"], order: 24 },
  /* <!-- KG_REVIEWED: TCP 状态机 | 2026-05-24 | source_count=7 --> */
  /* <!-- KG_EXPLAINED: TCP 状态机 | 2026-05-23 | source_count=7 --> */
  { sourceRefs: ["rfc9293-tcp-state-machine", "tcpipguide-tcp-fsm", "ibm-tcp-connection-status", "krownet-tcp-states", "cs-notes", "javaguide", "xiaolin-coding"], id: "tcp-state", zh: "TCP 状态机", en: "TCP State Machine", layer: "transport", difficulty: "hard", summary: "把 TCP 连接看成由 OPEN、SYN/ACK/FIN、CLOSE 和超时事件驱动的有限状态机，覆盖建连、传输和释放路径。", explanation: ["概念定义：TCP 状态机描述单条 TCP 连接在生命周期内的状态迁移。RFC 9293 列出 LISTEN、SYN-SENT、SYN-RECEIVED、ESTABLISHED、FIN-WAIT-1、FIN-WAIT-2、CLOSE-WAIT、CLOSING、LAST-ACK、TIME-WAIT 和 CLOSED；CLOSED 表示连接状态为空的起点或终点。", "事件驱动：状态迁移由应用调用和报文事件共同触发。应用侧有 OPEN、SEND、RECEIVE、CLOSE、ABORT、STATUS；报文侧重点看 SYN、ACK、FIN、RST；计时器负责 TIME-WAIT 等超时迁移。", "建连路径：服务端 passive OPEN 创建 TCB 并进入 LISTEN；客户端 active OPEN 发送 SYN 进入 SYN-SENT；服务端收到 SYN 后发送 SYN-ACK 并进入 SYN-RECEIVED；最终 ACK 到达后双方进入 ESTABLISHED。", "关闭路径：主动关闭方从 ESTABLISHED 发送 FIN 进入 FIN-WAIT-1，收到 ACK 后进入 FIN-WAIT-2，收到对端 FIN 后进入 TIME-WAIT；被动关闭方收到 FIN 进入 CLOSE-WAIT，应用调用 close 后发送 FIN 并进入 LAST-ACK，收到最终 ACK 后回到 CLOSED。", "特殊路径与排查：双方同时关闭会经过 CLOSING；TIME-WAIT 承担最终 ACK 重传与迟到报文隔离；CLOSE-WAIT 堆积通常指向本地应用关闭滞后；FIN-WAIT-2 堆积常见于等待对端 FIN。抓包时把状态、方向和标志位一起看。", "参考来源：本页状态图参考 The TCP/IP Guide 的 TCP Finite State Machine 图形布局，状态定义以 RFC 9293 3.3.2 为准，运维状态说明结合 IBM TCP connection status 与交互式 TCP State Transition Diagram 整理。"], typicalProblems: ["TCP 常见状态如何流转","LISTEN、SYN-SENT、SYN-RECEIVED 分别代表什么","ESTABLISHED 到 FIN-WAIT-1、CLOSE-WAIT 的触发条件是什么","TIME-WAIT 和 CLOSE-WAIT 分别如何排查","CLOSING 状态在什么场景出现","如何通过 ss/netstat 观察连接状态定位问题"], prerequisites: ["tcp-handshake", "tcp-four-way-wave"], related: ["tcp-retransmission"], order: 25 },
  /* <!-- KG_REVIEWED: TCP 重传 | 2026-05-24 | source_count=4 --> */
  /* <!-- KG_EXPLAINED: TCP 重传 | 2026-05-23 | source_count=4 --> */
  { sourceRefs: ["rfc9293-tcp", "rfc6298-tcp-rto", "rfc5681-tcp-congestion", "xiaolin-coding"], id: "tcp-retransmission", zh: "TCP 重传", en: "TCP Retransmission", layer: "transport", difficulty: "hard", summary: "通过超时重传和快速重传提升可靠性。", explanation: ["核心概念：TCP 重传是在发送数据未被确认时重新发送对应字节范围，保证可靠传输。发送方根据序列号和 ACK 跟踪已发送未确认数据，超时或重复 ACK 信号会触发恢复动作。", "适用场景：重传处理链路丢包、设备丢弃、ACK 丢失、瞬时拥塞和无线网络波动。它是 TCP 在真实网络里维持字节流可靠性的核心机制。", "特殊场景：超时重传由 RTO 计时器触发，RFC 6298 规定 RTO 根据 RTT 估计动态计算；快速重传通常由重复 ACK 触发，能在超时前恢复缺失段。SACK 允许接收端告知已收到的非连续块，减少无效重传。", "边界情况：重传既可能表示网络丢包，也可能来自接收端处理慢、路径 MTU、乱序、限速、队列溢出或抓包位置导致的假象。过多重传会降低吞吐并触发拥塞控制收缩窗口。", "常见误区与注意点：看到重传要结合 RTT、重复 ACK、SACK、窗口大小、发送速率和丢包位置判断原因。排查时用 tcpdump/Wireshark 观察 seq/ack，结合网卡错误、交换机丢弃、主机 CPU、应用读取和运营商链路指标。", "参考来源：TCP 可靠传输和确认语义采用 RFC 9293；RTO 计算参考 RFC 6298；快速重传和拥塞响应参考 RFC 5681；中文图解参考小林 coding。"], typicalProblems: ["超时重传和快速重传有什么区别","重复 ACK 代表什么","抓包看到大量重传怎么分析"], prerequisites: ["tcp"], related: ["tcp-congestion-control"], order: 26 },
  /* <!-- KG_REVIEWED: TCP 流量控制 | 2026-05-24 | source_count=4 --> */
  /* <!-- KG_EXPLAINED: TCP 流量控制 | 2026-05-23 | source_count=4 --> */
  { sourceRefs: ["rfc9293-tcp", "rfc7323-tcp-high-performance", "microsoft-latency-throughput", "xiaolin-coding"], id: "tcp-flow-control", zh: "TCP 流量控制", en: "TCP Flow Control", layer: "transport", difficulty: "hard", summary: "通过接收窗口控制发送速度。", explanation: ["核心概念：TCP 流量控制用接收窗口 rwnd 限制发送方未确认数据量，保护接收端缓冲区。接收端在 ACK 中通告自己还能接收多少字节，发送方按窗口推进滑动发送区间。", "适用场景：流量控制适用于发送端快、接收端慢、应用读取速度波动、代理转发、移动设备或大文件传输等场景。它让发送方跟随接收端能力，减少接收缓冲区溢出。", "特殊场景：零窗口表示接收端暂时没有可用缓冲，发送方通常发送窗口探测等待恢复。窗口扩大选项可以突破 16 位窗口字段限制，适配高带宽高延迟链路。", "边界情况：吞吐上限受发送窗口、接收窗口、拥塞窗口和 RTT 共同影响。高带宽链路上如果窗口太小，即使链路容量充足，单连接吞吐也会偏低；应用读慢会表现为接收窗口变小。", "常见误区与注意点：流量控制保护接收端，拥塞控制保护网络路径，两者都限制发送速度。排查时看 Window Size、Window Scale、Zero Window、Window Full、应用读取、socket buffer 和系统内核参数。", "参考来源：接收窗口和滑动窗口语义采用 RFC 9293；窗口扩大选项参考 RFC 7323；延迟与吞吐关系参考 Microsoft Learn；中文图解参考小林 coding。"], typicalProblems: ["滑动窗口如何实现流量控制","零窗口代表什么","流量控制和拥塞控制有什么区别"], prerequisites: ["tcp"], related: ["tcp-congestion-control"], order: 27 },
  /* <!-- KG_REVIEWED: TCP 拥塞控制 | 2026-05-24 | source_count=5 --> */
  /* <!-- KG_EXPLAINED: TCP 拥塞控制 | 2026-05-23 | source_count=5 --> */
  { sourceRefs: ["rfc5681-tcp-congestion", "rfc9293-tcp", "rfc6298-tcp-rto", "microsoft-latency-throughput", "xiaolin-coding"], id: "tcp-congestion-control", zh: "TCP 拥塞控制", en: "TCP Congestion Control", layer: "transport", difficulty: "hard", summary: "通过慢启动、拥塞避免等机制保护网络。", explanation: ["核心概念：TCP 拥塞控制通过拥塞窗口 cwnd 控制发送方进入网络的数据量，目标是在提升吞吐的同时避免网络队列和链路被打爆。RFC 5681 定义了慢启动、拥塞避免、快速重传和快速恢复。", "适用场景：拥塞控制在公网、跨地域链路、移动网络、数据中心网络和共享出口中持续发挥作用。发送端会根据 ACK 节奏、丢包、超时和重复 ACK 估计网络容量。", "特殊场景：慢启动阶段 cwnd 快速增长，达到阈值后进入拥塞避免线性增长；出现丢包或超时时会降低 cwnd。不同操作系统可能使用 Reno、CUBIC、BBR 等算法，具体窗口变化会有差异。", "边界情况：单连接吞吐受 cwnd、rwnd、RTT、丢包率和应用发送速度共同限制。跨地域 RTT 高时，需要更大窗口才能填满带宽；轻微丢包也可能让传统拥塞控制大幅降速。", "常见误区与注意点：拥塞控制和流量控制同时生效，实际发送窗口取两者以及实现限制中的较小值。排查低吞吐时同时看 RTT、重传率、丢包、cwnd、接收窗口、限速策略、代理和服务端处理能力。", "参考来源：拥塞控制算法采用 RFC 5681；TCP 基础语义采用 RFC 9293；超时与 RTO 参考 RFC 6298；延迟吞吐关系参考 Microsoft Learn；中文图解参考小林 coding。"], typicalProblems: ["慢启动和拥塞避免如何工作","丢包后拥塞窗口如何变化","跨地域链路吞吐低怎么分析"], prerequisites: ["tcp-retransmission", "tcp-flow-control"], related: ["latency-bandwidth"], order: 28 },
  /* <!-- KG_REVIEWED: DNS | 2026-05-24 | source_count=5 --> */
  /* <!-- KG_EXPLAINED: DNS | 2026-05-23 | source_count=5 --> */
  { sourceRefs: ["rfc1034-dns", "rfc1035-dns", "cloudflare-how-internet-works", "mdn-how-internet-works", "xiaolin-coding"], id: "dns", zh: "DNS", en: "Domain Name System", layer: "application", difficulty: "easy", summary: "把域名解析为 IP 地址。", explanation: ["核心概念：DNS 是分布式层级命名系统，把域名映射到 IP、邮件服务器、文本记录等资源记录。RFC 1034 定义命名空间和解析模型，RFC 1035 定义报文格式与资源记录。", "适用场景：浏览器访问网站、服务发现、邮件投递、CDN 调度、证书验证和内网域名都依赖 DNS。客户端通常先查本地缓存和系统解析器，再由递归解析器查询根、TLD 和权威 DNS。", "特殊场景：递归解析器替客户端完成查询，迭代查询由解析器逐级问下去。A 记录返回 IPv4，AAAA 返回 IPv6，CNAME 指向别名，MX 指向邮件服务器，TXT 常用于域名所有权和安全策略。", "边界情况：DNS 结果受 TTL、缓存、负载均衡、CDN、地理位置、EDNS、双栈地址选择和负缓存影响。UDP 53 常用于普通查询，响应过大、区域传输或部分安全机制会使用 TCP。", "常见误区与注意点：域名解析成功只代表拿到地址，后续连接还要经过路由、端口、TLS 和应用。排查时用 dig/nslookup 查看权威结果、递归结果、TTL、CNAME 链、A/AAAA 差异和本地 hosts 或 DNS 缓存。", "参考来源：DNS 概念和层级模型采用 RFC 1034；报文、资源记录和 UDP/TCP 行为参考 RFC 1035；互联网访问流程参考 Cloudflare 与 MDN；中文图解参考小林 coding。"], typicalProblems: ["DNS 递归解析和迭代解析区别","DNS 缓存会影响哪些问题","域名解析慢或错误如何排查"], prerequisites: ["udp", "ip"], related: ["http", "cdn"], order: 29 },
  /* <!-- KG_REVIEWED: HTTP | 2026-05-24 | source_count=4 --> */
  /* <!-- KG_EXPLAINED: HTTP | 2026-05-23 | source_count=4 --> */
  { sourceRefs: ["rfc9110-http", "mdn-http-caching", "cloudflare-how-internet-works", "xiaolin-coding"], id: "http", zh: "HTTP", en: "Hypertext Transfer Protocol", layer: "application", difficulty: "easy", summary: "Web 应用最常用的请求响应协议。", explanation: ["核心概念：HTTP 是面向资源的应用层请求/响应协议。RFC 9110 定义了方法、状态码、Header、内容协商、缓存语义和连接无关的 HTTP 语义；HTTP 可以运行在 TCP、TLS 或 QUIC 之上。", "适用场景：网页加载、REST API、文件下载、网关代理、微服务通信、Webhook 和开放平台接口都常用 HTTP。客户端用 URL 定位资源，用方法表达动作，用 Header 传递元信息，用 Body 承载数据。", "特殊场景：GET 常用于获取资源，POST 常用于提交处理；PUT、PATCH、DELETE 等方法表达不同资源操作语义。HTTP 本身无状态，登录态通常依赖 Cookie、Session、Token 或双向 TLS 等机制。", "边界情况：状态码描述的是 HTTP 层结果，业务成功还要看响应体和业务码。代理、缓存、重定向、跨域、压缩、分块传输、连接复用和超时会影响真实链路。", "常见误区与注意点：GET/POST 的安全性和幂等性来自语义约定和服务实现，敏感信息应通过 HTTPS 与合适的认证授权保护。排查时看 URL、方法、状态码、Header、Body、重定向链、代理日志和服务端访问日志。", "参考来源：HTTP 语义采用 RFC 9110；缓存相关 Header 参考 MDN HTTP caching；Web 访问流程参考 Cloudflare；中文图解参考小林 coding。"], typicalProblems: ["GET 和 POST 有什么区别","常见 HTTP 状态码含义","HTTP 无状态如何保持登录态"], prerequisites: ["tcp", "dns"], related: ["https", "http-cache"], order: 30 },
  /* <!-- KG_REVIEWED: HTTPS | 2026-05-24 | source_count=4 --> */
  /* <!-- KG_EXPLAINED: HTTPS | 2026-05-23 | source_count=4 --> */
  { sourceRefs: ["rfc9110-http", "rfc8446-tls13", "rfc5280-pkix", "xiaolin-coding"], id: "https", zh: "HTTPS", en: "HTTPS", layer: "security", difficulty: "medium", summary: "在 HTTP 上加入 TLS 加密和身份认证。", explanation: ["核心概念：HTTPS 是 HTTP over TLS，把 HTTP 语义放在加密通道中传输。TLS 提供服务器身份认证、密钥协商、加密和完整性保护，让中间链路难以窃听或篡改应用数据。", "适用场景：网站、API、登录支付、管理后台、移动应用和内部服务通信都应使用 HTTPS。浏览器会校验证书链、域名、有效期和撤销信息，并把安全状态反馈给用户。", "特殊场景：TLS 1.3 简化握手并支持 0-RTT，但 0-RTT 存在重放风险，只适合幂等请求。SNI 让同一 IP 承载多个证书，ALPN 用于协商 HTTP/2 或 HTTP/1.1，HTTP/3 则基于 QUIC 内置 TLS 1.3。", "边界情况：HTTPS 保护传输链路，服务器、客户端、日志、浏览器插件、终端代理和应用自身仍可能泄露数据。证书过期、域名不匹配、中间证书缺失、弱协议、时间错误和代理拦截都会导致握手失败。", "常见误区与注意点：HTTPS 不负责业务鉴权，也不自动防止 XSS、CSRF 或服务端漏洞。排查时看 DNS、SNI、证书链、TLS 版本、Cipher、ALPN、系统时间、代理和服务端 TLS 配置。", "参考来源：HTTP 语义采用 RFC 9110；TLS 1.3 握手和安全属性参考 RFC 8446；证书链验证参考 RFC 5280；中文图解参考小林 coding。"], typicalProblems: ["HTTPS 握手流程是什么","HTTPS 如何防止窃听和篡改","证书不可信或过期怎么排查"], prerequisites: ["http", "tls"], related: ["certificate"], order: 31 },
  /* <!-- KG_REVIEWED: HTTP 缓存 | 2026-05-24 | source_count=4 --> */
  /* <!-- KG_EXPLAINED: HTTP 缓存 | 2026-05-23 | source_count=4 --> */
  { sourceRefs: ["rfc9111-http-cache", "mdn-http-caching", "cloudflare-cache-revalidation", "xiaolin-coding"], id: "http-cache", zh: "HTTP 缓存", en: "HTTP Cache", layer: "application", difficulty: "medium", summary: "通过缓存头减少重复请求和传输成本。", explanation: ["核心概念：HTTP 缓存通过缓存响应副本减少重复请求、降低延迟和节省带宽。RFC 9111 定义了缓存存储、鲜度、验证、失效和共享缓存规则。", "适用场景：静态资源、图片、脚本、样式、API 中相对稳定的数据和 CDN 边缘缓存都依赖 HTTP 缓存。Cache-Control、Expires、ETag、Last-Modified、Age 和 Vary 是常见控制字段。", "特殊场景：强缓存命中时客户端直接使用本地副本；协商缓存会发送 If-None-Match 或 If-Modified-Since，服务器返回 304 表示副本仍可用。共享缓存可用 s-maxage 控制 CDN 或代理缓存时间。", "边界情况：Vary 会让请求头参与缓存键，Cookie、Authorization、查询参数和语言协商会显著影响命中率。stale-while-revalidate、stale-if-error、purge 和 revalidation 常用于 CDN 和高可用场景。", "常见误区与注意点：缓存问题通常来自 cache key、TTL、版本号、ETag 变化、代理层规则和浏览器缓存共同作用。静态资源适合文件名哈希加长 TTL，HTML 和个性化 API 需要谨慎设置 private、no-store 或明确验证策略。", "参考来源：HTTP 缓存标准采用 RFC 9111；浏览器缓存行为参考 MDN；CDN 重新验证参考 Cloudflare Cache Revalidation；中文图解参考小林 coding。"], typicalProblems: ["强缓存和协商缓存区别","ETag 和 Last-Modified 区别","资源更新后缓存不生效怎么处理"], prerequisites: ["http"], related: ["cdn"], order: 32 },
  /* <!-- KG_REVIEWED: HTTP/2 | 2026-05-24 | source_count=4 --> */
  /* <!-- KG_EXPLAINED: HTTP/2 | 2026-05-23 | source_count=4 --> */
  { sourceRefs: ["rfc9113-http2", "rfc9110-http", "mdn-http-caching", "xiaolin-coding"], id: "http2", zh: "HTTP/2", en: "HTTP/2", layer: "application", difficulty: "medium", summary: "支持多路复用、头部压缩和更高效的连接使用。", explanation: ["核心概念：HTTP/2 保留 HTTP 语义，把传输格式改成二进制帧。RFC 9113 定义了连接、流、帧、多路复用、流量控制和 HPACK 头部压缩，让多个请求能共享一条连接。", "适用场景：浏览器到站点、网关到服务、gRPC 和需要大量并发小请求的 Web 应用适合 HTTP/2。它减少 HTTP/1.1 多连接和队头等待带来的开销。", "特殊场景：HTTP/2 中一个 TCP 连接包含多个 stream，每个 stream 由 HEADERS、DATA 等帧组成。优先级、服务端推送和流量控制属于协议能力，但实际浏览器和服务端支持程度不同。", "边界情况：HTTP/2 解决了应用层请求队头阻塞，但运行在 TCP 上时仍受 TCP 层队头阻塞影响；一个包丢失会影响同连接上的多个流。代理、TLS ALPN、最大并发流和流量控制窗口会影响效果。", "常见误区与注意点：HTTP/2 并不自动让所有页面变快，资源数量、服务端配置、TLS、拥塞、缓存和后端处理同样关键。排查时看 ALPN 协商、协议版本、流并发、RST_STREAM、连接窗口和服务端日志。", "参考来源：HTTP/2 帧、多路复用和流量控制采用 RFC 9113；HTTP 语义参考 RFC 9110；缓存行为参考 MDN；中文图解参考小林 coding。"], typicalProblems: ["HTTP/2 相比 HTTP/1.1 改进了什么","多路复用如何工作","HTTP/2 是否还有队头阻塞"], prerequisites: ["http", "tcp"], related: ["http3"], order: 33 },
  /* <!-- KG_REVIEWED: HTTP/3 | 2026-05-24 | source_count=4 --> */
  /* <!-- KG_EXPLAINED: HTTP/3 | 2026-05-23 | source_count=4 --> */
  { sourceRefs: ["rfc9114-http3", "rfc9000-quic", "rfc8446-tls13", "xiaolin-coding"], id: "http3", zh: "HTTP/3", en: "HTTP/3", layer: "application", difficulty: "hard", summary: "基于 QUIC 改善连接建立和弱网表现。", explanation: ["核心概念：HTTP/3 是运行在 QUIC 上的 HTTP 映射。RFC 9114 定义 HTTP/3，QUIC 由 RFC 9000 定义，基于 UDP 实现连接、可靠流、拥塞控制、连接迁移和 TLS 1.3 集成。", "适用场景：HTTP/3 适合移动网络、弱网、跨地域访问、频繁网络切换和需要降低连接建立成本的 Web/API 场景。QUIC 支持连接迁移，客户端 IP 或端口变化时更容易保持连接连续性。", "特殊场景：QUIC 在传输层提供多流能力，单个流丢包只阻塞该流，缓解 TCP 上 HTTP/2 的传输层队头阻塞。TLS 1.3 集成到 QUIC 握手中，重连可配合 0-RTT 降低延迟。", "边界情况：HTTP/3 使用 UDP 443，部分企业网络、老旧防火墙或运营商策略可能限制 UDP，客户端需要回退到 HTTP/2 或 HTTP/1.1。服务端、CDN、负载均衡和观测工具都要支持 QUIC 才能稳定上线。", "常见误区与注意点：HTTP/3 优势在弱网和连接建立，服务端处理慢、缓存差或后端瓶颈仍会主导延迟。排查时看 Alt-Svc、协议协商、UDP 可达性、QUIC 连接 ID、丢包、回退比例和 CDN 配置。", "参考来源：HTTP/3 语义映射采用 RFC 9114；QUIC 传输机制参考 RFC 9000；TLS 1.3 安全集成参考 RFC 8446；中文图解参考小林 coding。"], typicalProblems: ["HTTP/3 为什么基于 QUIC","QUIC 如何改善弱网体验","UDP 443 被拦截会发生什么"], prerequisites: ["http2", "quic"], related: ["udp"], order: 34 },
  /* <!-- KG_REVIEWED: WebSocket | 2026-05-24 | source_count=4 --> */
  /* <!-- KG_EXPLAINED: WebSocket | 2026-05-23 | source_count=4 --> */
  { sourceRefs: ["rfc6455-websocket", "rfc9110-http", "rfc9293-tcp", "xiaolin-coding"], id: "websocket", zh: "WebSocket", en: "WebSocket", layer: "application", difficulty: "medium", summary: "在单个连接上实现双向实时通信。", explanation: ["核心概念：WebSocket 是在单个 TCP 连接上提供全双工消息通信的协议。RFC 6455 定义客户端通过 HTTP Upgrade 完成握手，升级成功后双方用 WebSocket 帧持续收发消息。", "适用场景：聊天室、协同编辑、交易行情、游戏、实时通知、运维控制台和需要低延迟双向通信的页面常用 WebSocket。它减少轮询开销，并允许服务端主动推送。", "特殊场景：握手阶段仍是 HTTP，请求包含 Upgrade、Connection、Sec-WebSocket-Key 等 Header，服务端返回 101 Switching Protocols。生产环境常用 wss:// 通过 TLS 加密。", "边界情况：长连接需要心跳、空闲超时、断线重连、消息幂等和背压处理。代理、负载均衡、NAT、CDN 和服务器连接数限制会影响稳定性；水平扩展时还要处理会话粘性或消息广播。", "常见误区与注意点：WebSocket 适合双向实时流，普通请求响应和可缓存资源继续用 HTTP 更清晰。排查时看握手状态码、Upgrade Header、TLS、代理超时、ping/pong、连接数、消息堆积和服务端事件循环。", "参考来源：WebSocket 握手、帧和关闭语义采用 RFC 6455；HTTP Upgrade 语义参考 RFC 9110；底层 TCP 连接语义参考 RFC 9293；中文图解参考小林 coding。"], typicalProblems: ["WebSocket 和 HTTP 轮询区别","WebSocket 握手如何升级","长连接保活和重连如何设计"], prerequisites: ["http", "tcp"], related: ["load-balancing"], order: 35 },
  /* <!-- KG_REVIEWED: gRPC | 2026-05-24 | source_count=4 --> */
  /* <!-- KG_EXPLAINED: gRPC | 2026-05-23 | source_count=4 --> */
  { sourceRefs: ["grpc-core-concepts", "rfc9113-http2", "protobuf-overview", "rfc8446-tls13"], id: "grpc", zh: "gRPC", en: "gRPC", layer: "application", difficulty: "medium", summary: "基于 HTTP/2 的高性能 RPC 框架。", explanation: ["核心概念：gRPC 是基于接口定义的 RPC 框架，常用 Protocol Buffers 描述服务和消息，并运行在 HTTP/2 之上。客户端像调用本地方法一样调用远端服务，底层由框架处理序列化、连接、状态码和元数据。", "适用场景：gRPC 适合内部微服务、高性能服务间通信、多语言接口、流式数据、移动端到后端和需要强契约的系统。它支持一元调用、服务端流、客户端流和双向流。", "特殊场景：gRPC 借助 HTTP/2 多路复用和流能力承载并发 RPC，元数据通过 Header/Trailer 传递，状态通过 gRPC status 表达。对外开放 API 时常需要 gRPC-Gateway、Envoy 转码或额外 REST 接口。", "边界情况：浏览器原生能力、代理兼容、负载均衡、超时、重试、流控和服务发现都需要按 gRPC 模型设计。Protobuf 字段演进要保持兼容，错误模型和幂等性也要在接口契约中明确。", "常见误区与注意点：gRPC 高效来自二进制编码、HTTP/2 和强契约，调试可读性和网关兼容要提前规划。排查时看 proto、生成代码版本、HTTP/2 支持、TLS/ALPN、deadline、status code、metadata 和服务端日志。", "参考来源：gRPC 调用模型和四种 RPC 模式参考 gRPC 官方 Core concepts；HTTP/2 传输参考 RFC 9113；Protobuf 角色参考官方 Protobuf 文档；TLS 安全参考 RFC 8446。"], typicalProblems: ["gRPC 和 REST 有什么区别","gRPC 为什么适合内部服务通信","gRPC 支持哪些调用模式"], prerequisites: ["http2"], related: ["protobuf"], order: 36 },
  /* <!-- KG_REVIEWED: Protobuf | 2026-05-24 | source_count=3 --> */
  /* <!-- KG_EXPLAINED: Protobuf | 2026-05-23 | source_count=3 --> */
  { sourceRefs: ["protobuf-overview", "grpc-core-concepts", "xiaolin-coding"], id: "protobuf", zh: "Protobuf", en: "Protocol Buffers", layer: "application", difficulty: "medium", summary: "高效的结构化数据序列化格式。", explanation: ["核心概念：Protocol Buffers 是语言无关、平台无关的结构化数据序列化机制。开发者在 .proto 文件中定义 message 和 service，编译器生成多语言代码，运行时按字段编号编码二进制数据。", "适用场景：Protobuf 适合微服务 RPC、移动端通信、日志事件、配置分发、消息队列载荷和需要长期演进的数据协议。相比 JSON，它通常更紧凑、解析更快、类型约束更强。", "特殊场景：字段编号是二进制编码的关键，已发布字段编号要长期保留；删除字段时应使用 reserved 防止复用。新增可选字段通常具备向后兼容性，字段类型、语义和默认值变化要谨慎。", "边界情况：Protobuf 可读性弱于 JSON，线上排查需要配套解码工具和 schema 管理。跨语言时要关注默认值、枚举未知值、时间类型、optional/repeated/map 和生成代码版本。", "常见误区与注意点：兼容演进的核心是稳定字段编号和语义，随意改编号会破坏旧数据。接口设计时把业务含义写进 proto 注释，建立 schema review、版本管理和回放测试。", "参考来源：Protobuf 定义、代码生成和字段编号参考官方文档；gRPC 中 Protobuf 的使用参考 gRPC 官方 Core concepts；中文工程实践参考小林 coding。"], typicalProblems: ["Protobuf 为什么比 JSON 更紧凑","字段编号为什么不能随意改","proto 如何做兼容演进"], prerequisites: ["grpc"], related: ["api-design"], order: 37 },
  /* <!-- KG_REVIEWED: TLS | 2026-05-24 | source_count=4 --> */
  /* <!-- KG_EXPLAINED: TLS | 2026-05-23 | source_count=4 --> */
  { sourceRefs: ["rfc8446-tls13", "rfc5280-pkix", "rfc9110-http", "xiaolin-coding"], id: "tls", zh: "TLS", en: "Transport Layer Security", layer: "security", difficulty: "medium", summary: "提供加密、完整性校验和身份认证。", explanation: ["核心概念：TLS 是传输安全协议，为应用协议提供身份认证、密钥协商、机密性和完整性保护。TLS 1.3 在 RFC 8446 中定义，握手会协商参数、验证证书并生成会话密钥。", "适用场景：HTTPS、gRPC、数据库加密连接、邮件传输、消息队列和内部服务互信都可使用 TLS。常见模式是服务端证书认证，安全要求更高时可使用双向 TLS。", "特殊场景：TLS 使用非对称机制完成身份认证和密钥协商，再用对称加密保护大量数据。TLS 1.3 移除了许多旧算法，减少握手往返，并支持会话恢复和 0-RTT。", "边界情况：TLS 保护传输过程，终端和服务端内存、日志、代理解密点和业务权限仍需安全治理。证书链、SNI、ALPN、协议版本、Cipher、OCSP、系统时间和根证书库都会影响握手。", "常见误区与注意点：证书有效不代表业务可信，TLS 成功也不代表用户有权限。排查时用 openssl s_client、curl -v 或浏览器安全面板查看证书链、TLS 版本、SNI、ALPN、握手错误和中间代理。", "参考来源：TLS 1.3 握手、加密套件和 0-RTT 采用 RFC 8446；证书链基础参考 RFC 5280；HTTP over TLS 上层语义参考 RFC 9110；中文图解参考小林 coding。"], typicalProblems: ["TLS 握手主要做了什么","对称加密和非对称加密如何配合","TLS 1.2 和 TLS 1.3 有什么区别"], prerequisites: ["tcp"], related: ["https", "certificate"], order: 38 },
  /* <!-- KG_REVIEWED: 数字证书 | 2026-05-24 | source_count=4 --> */
  /* <!-- KG_EXPLAINED: 数字证书 | 2026-05-23 | source_count=4 --> */
  { sourceRefs: ["rfc5280-pkix", "rfc8446-tls13", "cloudflare-how-internet-works", "xiaolin-coding"], id: "certificate", zh: "数字证书", en: "Digital Certificate", layer: "security", difficulty: "medium", summary: "用证书链验证服务端身份。", explanation: ["核心概念：数字证书把主体身份、域名、公钥、有效期、用途和签名绑定在一起。X.509 PKI 通过根 CA、中间 CA 和服务器证书构成信任链，客户端用受信任根验证服务器身份。", "适用场景：HTTPS 网站、内部服务 mTLS、代码签名、客户端证书登录和企业代理都依赖证书。浏览器重点校验证书链、域名 SAN、有效期、Key Usage、签名算法和撤销状态。", "特殊场景：通配符证书覆盖同一级子域，多域名证书通过 SAN 覆盖多个名称；中间证书通常由服务器一并发送；自签名证书需要客户端显式信任根。", "边界情况：证书链完整性、域名匹配、系统时间、根证书库、OCSP/CRL、SNI 和负载均衡证书配置都会影响验证。证书轮换要避免旧实例、缓存和中间证书遗漏。", "常见误区与注意点：证书绑定的是身份和公钥，业务授权仍由应用完成。排查证书问题时看 SAN、Issuer、Subject、有效期、链顺序、根信任、SNI 命中和服务端是否发出完整中间证书。", "参考来源：X.509 证书链和验证规则采用 RFC 5280；TLS 握手中的证书认证参考 RFC 8446；互联网访问中的 HTTPS 信任背景参考 Cloudflare；中文图解参考小林 coding。"], typicalProblems: ["证书链如何验证服务端身份","CA 在证书体系里的作用","证书过期或域名不匹配如何定位"], prerequisites: ["tls"], related: ["https"], order: 39 },
  /* <!-- KG_REVIEWED: 防火墙 | 2026-05-24 | source_count=5 --> */
  /* <!-- KG_EXPLAINED: 防火墙 | 2026-05-23 | source_count=5 --> */
  { sourceRefs: ["aws-security-groups", "microsoft-windows-firewall", "rfc791-ip", "rfc9293-tcp", "xiaolin-coding"], id: "firewall", zh: "防火墙", en: "Firewall", layer: "security", difficulty: "medium", summary: "根据规则控制网络流量进出。", explanation: ["核心概念：防火墙根据规则允许、拒绝或记录流量，常见匹配字段包括源/目的 IP、源/目的端口、协议、方向、接口、状态和应用特征。云安全组、网络 ACL、主机防火墙和企业边界防火墙都属于不同层面的流量控制。", "适用场景：防火墙用于公网入口保护、东西向访问控制、办公网隔离、数据库白名单、容器节点保护和合规审计。安全组通常绑定到云资源，主机防火墙保护操作系统本机。", "特殊场景：有状态防火墙会记录连接状态，允许已建立连接的返回流量；无状态 ACL 需要同时配置入站和出站。NAT、负载均衡、代理和容器网络会改变规则看到的地址和端口。", "边界情况：规则顺序、默认策略、临时动态规则、IPv4/IPv6 双栈、ICMP 放行、回程路径和安全组引用都会影响结果。只开放端口还要确认服务监听地址、路由、证书和应用鉴权。", "常见误区与注意点：端口不通要按链路逐段排查：客户端出口、防火墙、云安全组、NACL、负载均衡、主机防火墙、服务监听和回包路径。生产规则要最小权限、可审计、按环境分组，并定期清理过期白名单。", "参考来源：云安全组规则和状态行为参考 AWS VPC 文档；主机防火墙职责参考 Microsoft Learn；IP/TCP 字段基础参考 RFC 791 与 RFC 9293；中文排查思路参考小林 coding。"], typicalProblems: ["防火墙规则通常匹配哪些字段","安全组和主机防火墙如何共同影响访问","端口不通如何排查防火墙"], prerequisites: ["ip", "port"], related: ["nat"], order: 40 },
  /* <!-- KG_REVIEWED: 延迟与带宽 | 2026-05-24 | source_count=5 --> */
  /* <!-- KG_EXPLAINED: 延迟与带宽 | 2026-05-23 | source_count=5 --> */
  { sourceRefs: ["khan-bandwidth-latency", "cloudflare-latency", "microsoft-latency-throughput", "bitag-latency-explained", "rfc5681-tcp-congestion"], id: "latency-bandwidth", zh: "延迟与带宽", en: "Latency and Bandwidth", layer: "performance", difficulty: "easy", summary: "衡量网络性能的两个基础指标。", explanation: ["核心概念：延迟表示数据从一端到另一端或一次往返消耗的时间，带宽表示链路单位时间可承载的数据量上限。吞吐是实际传输结果，通常低于标称带宽。", "适用场景：网页首屏、API 多轮调用、游戏和远程桌面更敏感于延迟；大文件下载、备份、视频分发和批量同步更敏感于带宽。RTT、带宽、丢包和并发连接共同决定体验。", "特殊场景：带宽时延积 BDP 表示填满链路所需的在途数据量，高带宽高 RTT 链路需要足够大的 TCP 窗口和拥塞窗口。少量丢包会让 TCP 降速，导致带宽充足但吞吐偏低。", "边界情况：排队、缓冲膨胀、代理、TLS 握手、DNS、服务端处理、浏览器连接限制和应用串行请求都会增加用户感知延迟。无线网络和跨境链路还会引入抖动与间歇性丢包。", "常见误区与注意点：高带宽不能自动消除慢请求；低延迟也不能保证大文件快。排查时用 ping/mtr 看 RTT 和丢包，用 iperf 看吞吐，用 curl timing 拆 DNS、TCP、TLS、TTFB 和下载时间，再结合服务端指标定位瓶颈。", "参考来源：带宽、比特率和延迟定义参考 Khan Academy；延迟体验参考 Cloudflare；延迟与吞吐关系参考 Microsoft Learn；现代网络延迟因素参考 BITAG；TCP 拥塞响应参考 RFC 5681。"], typicalProblems: ["RTT、带宽、吞吐之间是什么关系","带宽很高但访问慢可能是什么原因","如何用 curl timing 分析网络耗时"], prerequisites: ["signal"], related: ["tcp-congestion-control"], order: 41 },
  /* <!-- KG_EXPLAINED: CDN | 2026-05-23 | source_count=11 --> */
  /* ai-redone: 2026-05-23; sources=cloudflare-cdn-overview,cloudflare-cdn-reference-architecture,aws-cloudfront-delivers-content,aws-cloudfront-origin-shield,akamai-cdn-overview,akamai-content-delivery,mdn-http-caching,cloudflare-cache-revalidation; diagram=network:cdn */
  /* <!-- KG_REVIEWED: CDN | 2026-05-24 | source_count=11 --> */
  { sourceRefs: ["cloudflare-cdn-overview", "cloudflare-cdn-reference-architecture", "aws-cloudfront-delivers-content", "aws-cloudfront-origin-shield", "akamai-cdn-overview", "akamai-content-delivery", "mdn-http-caching", "cloudflare-cache-revalidation", "cs-notes", "javaguide", "xiaolin-coding"], id: "cdn", zh: "CDN", en: "Content Delivery Network", layer: "performance", difficulty: "medium", summary: "通过边缘节点、分层缓存和回源控制加速内容分发并降低源站压力。", explanation: ["概念定义：CDN 是一组分布在不同地域的边缘接入与缓存节点，它以反向代理方式接收用户请求，把可缓存内容放到靠近用户的节点，从而降低往返延迟、节省源站带宽并提升抗突发流量能力。Cloudflare 与 Akamai 都把就近边缘节点、源站保护和内容分发作为 CDN 的核心能力。", "请求路由：网站通常通过 CNAME、权威 DNS、Anycast 或平台调度把用户引导到合适的边缘位置。AWS CloudFront 的请求流强调用户先到边缘站点，边缘节点再按缓存状态决定直接响应、访问区域缓存或回源；Cloudflare 参考架构也把全球边缘网络作为入口层。", "缓存决策：边缘节点会根据 URL、Host、查询参数、Vary 相关请求头、Cookie 策略和自定义缓存规则形成 cache key，再结合 Cache-Control、s-maxage、max-age、ETag、Last-Modified、stale-while-revalidate、purge 或 invalidation 判断 HIT、MISS、EXPIRED、REVALIDATED、STALE 或 BYPASS。MDN 的 HTTP caching 资料提供了这些缓存头与条件请求语义。", "分层回源：首次请求或缓存过期时，边缘节点可能先访问区域缓存、tiered cache 或 Origin Shield，再访问源站。Origin Shield 让多个边缘节点集中回源到一个保护层，减少重复回源、提升缓存命中和保护源站。Akamai 文档也用 edge server 与 origin server 描述这条内容交付链路。", "工程排查：CDN 排查要同时看用户地域、解析结果、边缘节点、缓存状态头、Age、Cache-Control、ETag、命中率、回源耗时、TLS/SNI、WAF 或 Bot 策略、压缩/图片优化和 purge 生效范围。静态版本化资源适合长 TTL；HTML、API 与个性化内容要用明确的 cache key 和 bypass/revalidation 策略。", "参考来源：CDN 定义与边缘缓存模型参考 Cloudflare What is a CDN 与 Akamai What is a CDN；全球边缘入口和分层架构参考 Cloudflare CDN Reference Architecture；CloudFront 边缘、区域缓存与 Origin Shield 请求路径参考 AWS 文档；缓存头、条件请求和 revalidation 语义参考 MDN HTTP caching 与 Cloudflare Cache Revalidation。"], typicalProblems: ["CDN 如何通过边缘节点降低延迟","缓存 HIT、MISS、EXPIRED、REVALIDATED、STALE 和 BYPASS 如何区分","Cache-Control、s-maxage、ETag 和 Vary 如何影响 CDN 缓存","Origin Shield 或 tiered cache 如何减少重复回源","CDN 缓存未刷新、命中率低或回源慢如何排查"], prerequisites: ["dns", "http-cache"], related: ["load-balancing"], order: 42 },
  /* <!-- KG_REVIEWED: 负载均衡 | 2026-05-24 | source_count=4 --> */
  /* <!-- KG_EXPLAINED: 负载均衡 | 2026-05-23 | source_count=4 --> */
  { sourceRefs: ["aws-elb-overview", "nginx-http-load-balancing", "rfc9110-http", "rfc9293-tcp"], id: "load-balancing", zh: "负载均衡", en: "Load Balancing", layer: "performance", difficulty: "medium", summary: "把请求分发到多个后端实例提升可用性和吞吐。", explanation: ["核心概念：负载均衡把客户端流量分发到多个后端实例，提高可用性、扩展吞吐并隔离故障。常见形态包括四层 TCP/UDP 负载均衡和七层 HTTP 负载均衡。", "适用场景：Web 集群、API 网关、微服务入口、数据库读写代理、跨可用区高可用和蓝绿/灰度发布都依赖负载均衡。AWS ELB 把监听器、目标组和健康检查组织成托管入口模型。", "特殊场景：四层负载均衡按连接或流量转发，保留更少应用语义；七层负载均衡能按 Host、Path、Header、Cookie、权重和重写规则路由。常见算法包括轮询、最少连接、哈希、权重和一致性哈希。", "边界情况：长连接、WebSocket、gRPC 流、会话粘性、慢启动、连接排空、后端 keepalive 和 TLS 终止都会影响分发效果。负载均衡自身也有超时、连接上限、队列和跨区流量成本。", "常见误区与注意点：负载均衡能转移流量，后端容量、数据库瓶颈和缓存热点仍需治理。排查时看监听器、目标健康、路由规则、后端状态码、连接数、延迟、超时、TLS、源 IP 透传和访问日志。", "参考来源：ELB 概念和目标组模型参考 AWS 文档；HTTP 负载均衡算法和配置参考 NGINX 文档；HTTP 路由语义参考 RFC 9110；TCP 连接基础参考 RFC 9293。"], typicalProblems: ["负载均衡常见算法有哪些","四层和七层负载均衡区别","后端实例异常时如何摘除流量"], prerequisites: ["http", "tcp"], related: ["health-check"], order: 43 },
  /* <!-- KG_REVIEWED: 健康检查 | 2026-05-24 | source_count=4 --> */
  /* <!-- KG_EXPLAINED: 健康检查 | 2026-05-23 | source_count=4 --> */
  { sourceRefs: ["kubernetes-probes", "aws-elb-overview", "rfc9110-http", "opentelemetry-observability-primer"], id: "health-check", zh: "健康检查", en: "Health Check", layer: "performance", difficulty: "easy", summary: "判断服务实例是否可接收流量。", explanation: ["核心概念：健康检查用探测请求判断实例是否存活、是否就绪以及是否能继续接收流量。负载均衡器、Kubernetes、服务注册中心和运维平台都会根据健康状态摘除或恢复实例。", "适用场景：服务发布、自动扩缩容、故障摘除、容器重启、依赖降级和多可用区高可用都需要健康检查。常见探测包括 HTTP 路径、TCP 端口、命令执行和 gRPC 健康接口。", "特殊场景：Kubernetes 区分 liveness、readiness 和 startup probe：存活检查失败可触发重启，就绪检查失败会停止接收流量，启动检查给慢启动应用更长初始化时间。", "边界情况：健康检查过浅会把业务已坏的实例判为健康，过深会因依赖抖动造成频繁摘除。检查频率、超时、成功/失败阈值和路径开销都会影响稳定性。", "常见误区与注意点：健康检查路径应快速、稳定、可观测，覆盖关键依赖时要区分强依赖和可降级依赖。排查频繁失败时看探测日志、状态码、超时、实例启动时间、线程池、连接池、负载均衡源地址和防火墙规则。", "参考来源：Kubernetes 三类探针参考官方文档；负载均衡健康检查场景参考 AWS ELB 文档；HTTP 状态语义参考 RFC 9110；可观测性闭环参考 OpenTelemetry Observability Primer。"], typicalProblems: ["存活检查和就绪检查区别","健康检查路径如何设计","健康检查频繁失败怎么排查"], prerequisites: ["load-balancing"], related: ["observability"], order: 44 },
  /* <!-- KG_REVIEWED: 网络可观测性 | 2026-05-24 | source_count=4 --> */
  /* <!-- KG_EXPLAINED: 网络可观测性 | 2026-05-23 | source_count=4 --> */
  { sourceRefs: ["opentelemetry-observability-primer", "prometheus-metric-naming", "cloudflare-latency", "microsoft-latency-throughput"], id: "observability", zh: "网络可观测性", en: "Network Observability", layer: "performance", difficulty: "medium", summary: "通过日志、指标、链路追踪定位网络问题。", explanation: ["核心概念：网络可观测性把请求路径中的日志、指标、链路追踪和抓包信号关联起来，让团队能定位 DNS、连接、TLS、代理、负载均衡、后端和外部依赖的耗时与错误。", "适用场景：线上接口慢、跨地域访问差、CDN 命中低、负载均衡 5xx、连接重置、重传增多、服务发布异常和容量规划都需要网络可观测性。核心指标包括请求量、错误率、延迟分位数、连接数、重传率、丢包、DNS 耗时、TLS 耗时和上游耗时。", "特殊场景：链路追踪能把一次请求跨服务的 span 串起来，日志提供具体错误上下文，指标提供趋势和告警，抓包提供协议级证据。客户端 RUM、Synthetic 探测和服务端指标可以覆盖不同视角。", "边界情况：采样、标签基数、隐私数据、跨层时间同步和代理层 Trace 透传都会影响分析质量。加密流量看不到应用内容时，仍可通过 SNI、证书、连接事件、状态码和端点日志定位。", "常见误区与注意点：只看单点日志容易漏掉网络路径问题。建设时统一 traceId、请求 ID、边缘日志、负载均衡日志和应用日志，指标命名保持稳定，告警绑定用户影响和处理手册。", "参考来源：日志、指标和追踪三类信号参考 OpenTelemetry Observability Primer；指标命名和标签基数参考 Prometheus 文档；延迟体验参考 Cloudflare；延迟吞吐关系参考 Microsoft Learn。"], typicalProblems: ["如何定位一次请求的网络瓶颈","哪些指标能反映网络质量","日志、指标、链路追踪如何配合"], prerequisites: ["latency-bandwidth", "http"], related: ["health-check"], order: 45 },
] satisfies GraphKnowledgePoint[];

const networkKnowledgePointOverrides: Record<string, Partial<GraphKnowledgePoint>> = {
  "network-overview": {
    order: 1,
    related: ["tcp-ip-model", "dns", "http"],
  },
  "tcp-ip-model": {
    order: 2,
    prerequisites: ["network-overview"],
    related: ["ip", "tcp", "http"],
  },
  "ip": {
    order: 3,
    prerequisites: ["tcp-ip-model"],
    related: ["subnet", "routing", "icmp"],
  },
  "subnet": {
    order: 4,
    prerequisites: ["ip"],
    related: ["gateway", "cidr"],
  },
  "gateway": {
    order: 5,
    prerequisites: ["subnet", "arp"],
    related: ["routing", "nat"],
  },
  "routing": {
    order: 6,
    prerequisites: ["ip", "gateway"],
    related: ["icmp", "nat"],
  },
  "mac-address": {
    order: 7,
    prerequisites: ["tcp-ip-model"],
    related: ["arp", "ethernet-frame", "switch"],
  },
  "arp": {
    order: 8,
    prerequisites: ["ip"],
    related: ["mac-address", "gateway"],
  },
  "nat": {
    order: 9,
    prerequisites: ["ip", "gateway", "port"],
    related: ["tcp", "udp", "firewall"],
  },
  "port": {
    order: 10,
    prerequisites: ["ip"],
    related: ["tcp", "udp", "nat"],
  },
  "tcp": {
    order: 11,
    prerequisites: ["ip", "port"],
    related: ["tcp-handshake", "tcp-flow-control", "http"],
  },
  "tcp-handshake": {
    order: 12,
    prerequisites: ["tcp"],
    related: ["tcp-state", "tls"],
  },
  "tcp-four-way-wave": {
    order: 13,
    prerequisites: ["tcp"],
    related: ["tcp-state"],
  },
  "tcp-state": {
    order: 14,
    prerequisites: ["tcp-handshake", "tcp-four-way-wave"],
    related: ["tcp-retransmission"],
  },
  "tcp-retransmission": {
    order: 15,
    prerequisites: ["tcp"],
    related: ["tcp-congestion-control", "latency-bandwidth"],
  },
  "tcp-flow-control": {
    order: 16,
    prerequisites: ["tcp"],
    related: ["tcp-congestion-control"],
  },
  "tcp-congestion-control": {
    order: 17,
    prerequisites: ["tcp-retransmission", "tcp-flow-control"],
    related: ["latency-bandwidth"],
  },
  "udp": {
    order: 18,
    prerequisites: ["ip", "port"],
    related: ["dns", "quic"],
  },
  "dns": {
    order: 19,
    prerequisites: ["udp", "ip"],
    related: ["http", "cdn"],
  },
  "http": {
    order: 20,
    prerequisites: ["tcp", "dns"],
    related: ["http-cache", "tls", "https"],
  },
  "http-cache": {
    order: 21,
    prerequisites: ["http"],
    related: ["cdn"],
  },
  "tls": {
    order: 22,
    prerequisites: ["tcp-handshake"],
    related: ["https", "certificate"],
  },
  "https": {
    order: 23,
    prerequisites: ["http", "tls"],
    related: ["certificate", "load-balancing"],
  },
  "latency-bandwidth": {
    order: 24,
    prerequisites: ["tcp-congestion-control", "dns", "http"],
    related: ["observability"],
  },
  "load-balancing": {
    order: 25,
    prerequisites: ["http", "tcp"],
    related: ["health-check", "observability"],
  },
  "observability": {
    order: 26,
    prerequisites: ["latency-bandwidth", "http", "load-balancing"],
    related: ["health-check"],
  },
  "osi-model": { order: 31 },
  "signal": { order: 32 },
  "ethernet-physical": { order: 33 },
  "ethernet-frame": { order: 35 },
  "switch": { order: 36 },
  "vlan": { order: 37 },
  "ipv4": { order: 38 },
  "ipv6": { order: 39 },
  "cidr": { order: 40 },
  "icmp": { order: 41 },
  "firewall": { order: 43 },
  "certificate": { order: 44 },
  "cdn": { order: 46 },
  "http2": { order: 47 },
  "http3": { order: 48 },
  "websocket": { order: 49 },
  "grpc": { order: 50 },
  "protobuf": { order: 51 },
  "health-check": { order: 52 },
};

export const networkKnowledgePoints = networkKnowledgePointBase
  .map((point) => ({
    ...point,
    ...networkKnowledgePointOverrides[point.id],
  }))
  .sort((a, b) => (a.order ?? 0) - (b.order ?? 0)) satisfies GraphKnowledgePoint[];

export const networkKnowledgeExplanations: Record<string, string[]> = {
  "network-overview": networkKnowledgePoints[0].explanation ?? [],
  "osi-model": [
    ...(networkKnowledgePoints.find((point) => point.id === "osi-model")?.explanation ?? []),
  ],
  "tcp-ip-model": [
    ...(networkKnowledgePoints.find((point) => point.id === "tcp-ip-model")?.explanation ?? []),
  ],
  "signal": [
    ...(networkKnowledgePoints.find((point) => point.id === "signal")?.explanation ?? []),
  ],
  "ethernet-physical": [
    ...(networkKnowledgePoints.find((point) => point.id === "ethernet-physical")?.explanation ?? []),
  ],
  "mac-address": [
    "概念定义：MAC 地址是数据链路层地址，通常是 48 位，用十六进制表示。它标识局域网中的网络接口，用于同一二层网络内的帧投递。",
    "工作过程：主机发送以太网帧时，会在帧头写入源 MAC 和目的 MAC。交换机根据目的 MAC 查 MAC 地址表，把帧转发到对应端口；查不到时会在广播域内泛洪。",
    "面试要点：IP 地址用于跨网络寻址，MAC 地址用于局域网内交付。访问外网时，以太网帧的目的 MAC 通常是默认网关的 MAC，IP 头里的目的 IP 仍然是目标服务器。",
    "工程排查：MAC 表异常会导致局域网转发问题。可以通过 ARP 缓存、交换机 MAC 地址表、抓包中的源/目的 MAC 判断数据是否发往正确下一跳。"
  ],
  "ethernet-frame": [
    ...(networkKnowledgePoints.find((point) => point.id === "ethernet-frame")?.explanation ?? []),
  ],
  "switch": [
    "概念定义：交换机是二层网络设备，核心能力是根据 MAC 地址表转发以太网帧。它把多个主机连接到同一个或多个广播域中。",
    "工作过程：交换机收到帧后学习源 MAC 与入端口的对应关系，再根据目的 MAC 查表转发。目的 MAC 未知时会泛洪，广播帧会发往同一 VLAN 的多个端口。",
    "面试要点：交换机隔离冲突域，路由器隔离广播域。交换机主要看 MAC，路由器主要看 IP。三层交换机具备路由能力，可以实现跨 VLAN 通信。",
    "工程排查：交换机相关问题包括 MAC 表漂移、环路广播风暴、端口 VLAN 配置错误、STP 收敛异常和端口限速。排查时看 MAC 表、端口状态、VLAN 和错误包计数。"
  ],
  "vlan": [
    "概念定义：VLAN 是虚拟局域网，用逻辑方式把同一物理交换网络划分为多个广播域。不同 VLAN 之间默认二层隔离。",
    "工作过程：交换机通过 VLAN ID 标记流量。Access 端口通常属于单个 VLAN，Trunk 端口可携带多个 VLAN 的流量，并通过 802.1Q Tag 区分。",
    "面试要点：VLAN 解决广播域过大、安全隔离和网络规划问题。跨 VLAN 通信需要三层网关，比如路由器、三层交换机或网关设备。",
    "工程排查：VLAN 配错会导致同网段不通、广播异常或流量进入错误网络。重点检查端口模式、允许通过的 VLAN、网关地址和交换机 trunk 配置。"
  ],
  "arp": [
    "概念定义：ARP 用于在 IPv4 网络中根据目标 IP 获取目标 MAC。它连接了三层 IP 寻址和二层以太网投递。",
    "工作过程：主机先判断目标 IP 是否同网段。同网段就查询目标主机 MAC；跨网段就查询默认网关 MAC。缓存缺失时发送 ARP Request 广播，对应设备返回 ARP Reply。",
    "面试要点：ARP 是局域网内协议，依赖广播。访问外网时 ARP 解析的是网关 MAC，IP 包目的地址仍然是远端服务器。ARP 缓存可以减少重复广播。",
    "工程排查：ARP 异常会导致同网段通信失败或网关不可达。常见问题包括 ARP 缓存错误、IP 冲突、ARP 欺骗和网关 MAC 异常。"
  ],
  "ip": [
    "概念定义：IP 协议位于网络层，负责逻辑寻址和跨网络转发。它让数据包能够从源主机经过多个路由器到达目标主机。",
    "工作过程：发送端构造 IP 数据报，写入源 IP、目的 IP、TTL、协议号等字段。每经过一个路由器，TTL 减一，路由器根据目的 IP 查路由表选择下一跳。",
    "面试要点：IP 提供尽力而为交付，负责把包送出去，可靠性由 TCP 或应用层处理。协议号用于标识上层协议，例如 TCP 是 6，UDP 是 17，ICMP 是 1。",
    "工程排查：IP 层问题常见于地址配置、子网掩码、默认网关、路由表和安全策略。可以用 ip addr、ip route、ping、traceroute、tcpdump 逐步定位。"
  ],
  "ipv4": [
    "概念定义：IPv4 是 32 位地址协议，通常写作点分十进制。地址由网络部分和主机部分组成，子网掩码决定边界。",
    "工作过程：主机发送数据前会用子网掩码判断目标是否同网段。同网段走 ARP 找目标 MAC，跨网段走 ARP 找网关 MAC，再由网关继续路由。",
    "面试要点：常考私有地址、子网掩码、网关、广播地址、网络地址、可用主机数。私有地址段包括 10.0.0.0/8、172.16.0.0/12、192.168.0.0/16。",
    "工程排查：IPv4 配置错误常表现为同机房部分可达、跨网段失败或网关不可达。排查时看 IP、掩码、路由、ARP 和安全组。"
  ],
  "ipv6": [
    "概念定义：IPv6 使用 128 位地址，解决 IPv4 地址空间不足问题。它采用冒号分隔的十六进制表示，并支持地址压缩写法。",
    "工作过程：IPv6 简化了头部结构，常配合邻居发现协议 NDP 完成地址解析和自动配置。它通常在双栈环境中与 IPv4 同时运行。",
    "面试要点：IPv6 地址空间巨大，头部设计更简洁，支持无状态地址自动配置。IPv4 的 ARP 在 IPv6 中由 NDP 取代。",
    "工程排查：IPv6 问题常出现在 DNS 解析返回 AAAA、双栈优先级、网络出口策略和防火墙规则。排查时要确认应用是否监听 IPv6 地址。"
  ],
  "subnet": [
    "概念定义：子网划分通过调整网络前缀长度，把一个地址段拆成多个更小的网络。它决定哪些地址属于同一二层广播域或同一路由范围。",
    "工作过程：主机把自己的 IP 和目标 IP 分别与子网掩码做按位与，结果相同表示同网段，结果不同表示需要交给网关转发。",
    "面试要点：会计算网络地址、广播地址、可用主机数和网段范围。/24 常有 256 个地址，去掉网络地址和广播地址后通常有 254 个可用主机地址。",
    "工程排查：子网掩码配置错误会导致主机误判同网段或跨网段，表现为 ARP 找错对象、网关未使用或访问异常。云网络规划也高度依赖子网划分。"
  ],
  "cidr": [
    "概念定义：CIDR 用斜杠前缀表示网络范围，例如 192.168.1.0/24。它打破传统 A/B/C 类地址限制，让地址分配和路由聚合更灵活。",
    "工作过程：前缀越长，网络越小；前缀越短，地址范围越大。路由器可以用更短前缀聚合多条路由，减少路由表规模。",
    "面试要点：/24、/16、/8 是高频例子。需要熟悉地址数量计算：地址总数等于 2 的主机位数量次方。",
    "工程排查：CIDR 经常用于 VPC、子网、安全组和路由表。配置重叠网段会导致路由冲突，配置范围过大可能带来安全风险。"
  ],
  "gateway": [
    "概念定义：网关是主机访问其他网段的出口，通常是本机所在子网中的一个路由接口地址。默认网关用于处理没有更精确路由匹配的流量。",
    "工作过程：当目标 IP 不在本地子网内，主机把数据包交给网关。二层帧目的 MAC 是网关 MAC，三层 IP 目的地址仍然是最终目标 IP。",
    "面试要点：网关工作在三层转发视角，ARP 解析的是下一跳 MAC。默认网关缺失时，主机通常只能访问同网段资源。",
    "工程排查：网关问题会导致跨网段或外网访问失败。可以检查默认路由、网关 ARP、网关连通性、安全策略和上游路由。"
  ],
  "routing": [
    "概念定义：路由是为 IP 数据包选择下一跳和出口接口的过程。路由表记录目的网段、下一跳、出接口和优先级。",
    "工作过程：路由器收到 IP 包后，根据目的 IP 做最长前缀匹配，选择最具体的路由项进行转发。没有匹配路由时通常丢弃或走默认路由。",
    "面试要点：最长前缀匹配是核心原则。静态路由由人工配置，动态路由由协议学习。TTL 用于避免环路，traceroute 利用 TTL 观察路径。",
    "工程排查：路由异常会表现为单向不通、绕路、时延高或目标不可达。排查时看本机路由、网关路由、回程路由和中间安全策略。"
  ],
  "icmp": [
    "概念定义：ICMP 是网络层控制协议，用于差错报告和诊断。常见消息包括 Echo、目标不可达、超时和重定向。",
    "工作过程：ping 发送 ICMP Echo Request，目标返回 Echo Reply。traceroute 通过逐步增加 TTL，让中间路由器返回超时消息，从而观察路径。",
    "面试要点：ICMP 本身承载在 IP 之上，常用于连通性检查。ping 不通只能说明 ICMP 或路径异常，业务端口是否可用还要用 TCP/UDP 工具验证。",
    "工程排查：许多防火墙会限制 ICMP，因此 ping 失败并不等价于服务不可达。结合 curl、telnet/nc、traceroute 和抓包判断更可靠。"
  ],
  "nat": [
    "概念定义：NAT 是网络地址转换，把内网私有地址转换成公网地址或其他地址。它常用于内网访问外网、端口映射和云网络出口。",
    "工作过程：源 NAT 会改写源 IP 和源端口，并在转换表中记录映射。响应包回来时，NAT 设备根据映射表把目的地址改回内网主机。",
    "面试要点：NAT 缓解 IPv4 地址不足，但会破坏端到端直连特性。常见类型包括 SNAT、DNAT、PAT，端口映射本质上是 DNAT。",
    "工程排查：NAT 问题常见于端口未映射、连接表满、回程路径不一致和安全策略限制。排查时看 NAT 表、连接跟踪、出口 IP 和端口占用。"
  ],
  "port": [
    "概念定义：端口是传输层用来区分应用进程的逻辑编号。IP 定位主机，端口定位主机上的服务进程。",
    "工作过程：客户端发起连接时使用临时源端口，服务端使用固定监听端口。操作系统根据五元组：源 IP、源端口、目的 IP、目的端口、协议，区分连接。",
    "面试要点：TCP 和 UDP 都有端口空间。常见端口包括 HTTP 80、HTTPS 443、DNS 53、SSH 22、MySQL 3306、Redis 6379。",
    "工程排查：端口问题常见于服务未监听、防火墙拦截、端口占用、监听地址错误。可以用 ss -lntup、lsof、nc、curl 检查。"
  ],
  "udp": [
    "概念定义：UDP 是无连接传输协议，头部简单，开销低，发送前无需握手。它提供数据报能力，不保证可靠、有序或不重复。",
    "工作过程：应用把数据交给 UDP，UDP 加上源端口、目的端口、长度和校验和后交给 IP。接收端按端口把数据报交给应用。",
    "面试要点：UDP 适合 DNS、直播、游戏、实时音视频等低延迟场景。可靠性可以在应用层自行实现，例如序列号、ACK、重传和前向纠错。",
    "工程排查：UDP 排查更依赖抓包，因为没有 TCP 连接状态。常见问题包括防火墙丢弃、NAT 映射超时、包过大、丢包和应用层重试不足。"
  ],
  "tcp": [
    "概念定义：TCP 是面向连接的可靠字节流协议，提供有序、可靠、拥塞友好的传输能力。它位于应用层和 IP 层之间，屏蔽了底层丢包和乱序。",
    "工作过程：TCP 先通过三次握手建立连接，再用序列号、确认应答、重传、滑动窗口保证可靠传输，最后通过四次挥手释放连接。",
    "面试要点：TCP 高频问题包括三次握手、四次挥手、TIME-WAIT、可靠传输、流量控制、拥塞控制、粘包半包。回答时要围绕序列号、ACK、窗口和状态机。",
    "工程排查：TCP 问题可从状态和抓包入手。SYN 堆积看连接建立，重传看链路质量或服务处理，CLOSE-WAIT 看应用关闭连接，TIME-WAIT 看主动关闭和连接复用。"
  ],
  "tcp-handshake": [
    "概念定义：三次握手是 TCP 建立连接的过程，用于同步双方初始序列号，并确认客户端和服务端都具备发送、接收能力。",
    "工作过程：第一次客户端发送 SYN 并进入 SYN-SENT；第二次服务端返回 SYN-ACK 并进入 SYN-RCVD；第三次客户端发送 ACK，双方进入 ESTABLISHED。",
    "面试要点：三次的必要性在于双方都要确认自己的发送能力和对方的接收能力。两次握手容易让服务端因历史重复 SYN 建立无效连接，造成资源浪费。",
    "工程排查：SYN-SENT 多通常表示目标不可达或被拦截；SYN-RCVD 多可能是 SYN flood 或服务端半连接队列压力；握手耗时高通常与网络 RTT、丢包或负载均衡链路有关。"
  ],
  "tcp-four-way-wave": [
    "概念定义：四次挥手是 TCP 释放连接的过程。由于 TCP 是全双工协议，两个方向的数据流需要分别关闭。",
    "工作过程：主动关闭方发送 FIN，对端 ACK 确认；对端处理完剩余数据后发送 FIN，主动关闭方 ACK 确认。主动关闭方通常进入 TIME-WAIT。",
    "面试要点：四次挥手比三次握手多一次，是因为收到 FIN 只表示对方不再发送数据，对方仍可能继续接收或发送剩余数据。TIME-WAIT 用于处理延迟报文和保证最后 ACK 可重传。",
    "工程排查：大量 CLOSE-WAIT 往往表示应用没有正确关闭连接；大量 TIME-WAIT 通常来自主动关闭多。需要结合连接复用、超时设置和应用关闭逻辑分析。"
  ],
  "tcp-state": [
    "概念定义：TCP 状态机描述连接从监听、建立、传输到关闭的生命周期。常见状态包括 LISTEN、SYN-SENT、SYN-RCVD、ESTABLISHED、FIN-WAIT、CLOSE-WAIT、TIME-WAIT。",
    "工作过程：服务端监听端口处于 LISTEN；客户端发 SYN 进入 SYN-SENT；连接建立后双方进入 ESTABLISHED；关闭阶段按主动方和被动方进入不同状态。",
    "面试要点：要能解释 TIME-WAIT 和 CLOSE-WAIT。TIME-WAIT 在主动关闭方，用于等待 2MSL；CLOSE-WAIT 在被动关闭方，通常等待应用调用 close。",
    "工程排查：用 ss 或 netstat 观察状态分布可以快速定位问题。SYN-RCVD 多看半连接队列，ESTABLISHED 多看长连接数量，CLOSE-WAIT 多看应用资源释放。"
  ],
  "tcp-retransmission": [
    "概念定义：TCP 重传用于在丢包或 ACK 丢失时恢复数据。发送方维护未确认数据，超时或收到重复 ACK 后会重新发送。",
    "工作过程：超时重传依赖 RTO 计时器；快速重传通常由多个重复 ACK 触发。SACK 机制还能告诉发送方哪些数据块已收到，从而减少无效重传。",
    "面试要点：重传保证可靠性，但会降低吞吐、增加延迟。重复 ACK、超时、快速重传、SACK 是常见关键词。",
    "工程排查：抓包中大量 Retransmission 往往说明链路丢包、拥塞、接收端处理慢或中间设备异常。需要结合 RTT、窗口大小和服务端负载一起看。"
  ],
  "tcp-flow-control": [
    "概念定义：TCP 流量控制用于保护接收端，避免发送方发送速度超过接收端处理和缓存能力。核心机制是接收窗口 rwnd。",
    "工作过程：接收方在 ACK 中通告可接收窗口大小。发送方最多只能发送窗口允许范围内的未确认数据。窗口变小会限制发送速度，窗口为 0 时发送方暂停并进行窗口探测。",
    "面试要点：流量控制针对接收端能力，拥塞控制针对网络路径能力。滑动窗口、接收缓冲区、零窗口、窗口探测是常见考点。",
    "工程排查：如果抓包看到 Zero Window，通常说明接收端应用读取慢或缓冲区不足。可以检查应用消费速度、系统 buffer、GC 或线程阻塞。"
  ],
  "tcp-congestion-control": [
    "概念定义：TCP 拥塞控制用于保护网络路径，避免发送方把中间链路打满。核心变量是拥塞窗口 cwnd。",
    "工作过程：发送方从慢启动开始指数增长 cwnd，到阈值后进入拥塞避免线性增长。检测到丢包后降低窗口，通过快速重传、快速恢复或超时重传调整速率。",
    "面试要点：流量控制看接收端窗口 rwnd，拥塞控制看网络拥塞窗口 cwnd。慢启动、拥塞避免、快速重传、快速恢复是标准答案主干。",
    "工程排查：吞吐上不去可能与 RTT、丢包、拥塞窗口、接收窗口和带宽延迟积有关。跨地域链路尤其容易受 RTT 和丢包影响。"
  ],
  "dns": [
    "概念定义：DNS 是域名系统，用于把人类可读的域名转换成 IP 地址。它是互联网访问的入口基础设施。",
    "工作过程：解析通常经过浏览器缓存、操作系统缓存、本地 DNS、根服务器、顶级域服务器和权威 DNS。最终得到 A、AAAA 或 CNAME 等记录。",
    "面试要点：递归查询由本地 DNS 帮客户端查到底，迭代查询由上级 DNS 告诉下一步问谁。常见记录类型包括 A、AAAA、CNAME、MX、TXT、NS。",
    "工程排查：DNS 问题会导致首包前延迟、域名无法访问或解析到错误 IP。可以用 dig、nslookup、host 检查记录、TTL、权威 DNS 和本地缓存。"
  ],
  "http": [
    "概念定义：HTTP 是应用层请求响应协议，定义客户端和服务端之间如何表达资源请求、状态和内容。它通常运行在 TCP 或 TLS 之上。",
    "工作过程：客户端发送请求行、请求头和可选请求体；服务端返回状态行、响应头和响应体。HTTP 本身无状态，Cookie、Session、Token 常用于维持用户状态。",
    "面试要点：高频内容包括 GET/POST 区别、状态码、Header、Cookie 与 Session、长连接、缓存、HTTP/1.1 与 HTTP/2 区别。状态码要熟悉 2xx、3xx、4xx、5xx。",
    "工程排查：HTTP 排查重点看 URL、方法、状态码、响应时间、Header、网关日志和服务日志。curl -v 能显示连接、TLS、请求头和响应头全过程。"
  ],
  "https": [
    "概念定义：HTTPS 是 HTTP over TLS。它用 TLS 为 HTTP 提供加密传输、完整性校验和服务端身份认证。",
    "工作过程：客户端先和服务端进行 TLS 握手，验证证书、协商密钥，然后在加密通道里发送 HTTP 请求和响应。TLS 1.3 进一步减少握手往返。",
    "面试要点：HTTPS 解决窃听、篡改和冒充问题。要能解释证书链、CA、公钥加密用于协商或认证、对称加密用于传输数据。",
    "工程排查：HTTPS 问题常见于证书过期、证书链缺失、域名不匹配、协议版本不兼容和中间代理。可用 openssl s_client、curl -v 检查。"
  ],
  "http-cache": [
    "概念定义：HTTP 缓存通过缓存响应资源减少重复请求，提高页面加载速度并降低服务端压力。缓存控制主要依赖响应头。",
    "工作过程：强缓存命中时浏览器直接使用本地缓存；协商缓存会向服务端发送 If-None-Match 或 If-Modified-Since，服务端可返回 304 表示资源未变化。",
    "面试要点：Cache-Control 优先级高于 Expires；ETag 通常比 Last-Modified 更精确。强缓存和协商缓存的区别是是否需要向服务端发请求。",
    "工程排查：缓存问题常见于资源更新后不生效、缓存命中率低和动态接口被误缓存。排查时看 Cache-Control、ETag、Age、304 和 CDN 缓存状态。"
  ],
  "http2": [
    "概念定义：HTTP/2 是 HTTP 协议的性能升级版本，引入二进制分帧、多路复用、头部压缩和流优先级等能力。",
    "工作过程：多个请求可以在同一个 TCP 连接上并发传输，每个请求响应属于一个 stream。HPACK 压缩重复头部，减少 Header 传输开销。",
    "面试要点：HTTP/2 解决 HTTP/1.1 队头阻塞和连接过多问题，但由于基于 TCP，发生丢包时仍可能出现 TCP 层队头阻塞。",
    "工程排查：HTTP/2 相关问题常见于网关协议降级、服务端配置、连接复用和代理兼容性。浏览器开发者工具可以查看请求协议版本。"
  ],
  "http3": [
    "概念定义：HTTP/3 基于 QUIC，QUIC 运行在 UDP 上，并内置 TLS 1.3、安全握手、多路复用和拥塞控制。",
    "工作过程：QUIC 在用户态实现连接管理，不依赖 TCP。多个流在 QUIC 内部独立传输，单个流丢包对其他流影响更小。",
    "面试要点：HTTP/3 重点改善连接建立速度、弱网表现和 TCP 队头阻塞。它仍然提供 HTTP 语义，只是底层传输从 TCP/TLS 换成 QUIC。",
    "工程排查：HTTP/3 依赖 UDP 通路，企业网络或防火墙可能限制 UDP。排查时看浏览器协议、服务端 QUIC 配置、UDP 443 连通性和回退情况。"
  ],
  "websocket": [
    "概念定义：WebSocket 是应用层全双工通信协议，允许客户端和服务端在一个长连接上互相主动发送消息。",
    "工作过程：连接从 HTTP Upgrade 握手开始，服务端返回 101 Switching Protocols 后升级为 WebSocket。之后双方通过帧传输文本或二进制消息。",
    "面试要点：WebSocket 适合聊天、通知、行情、协作编辑等实时场景。和 HTTP 轮询相比，它减少重复请求和头部开销，实时性更好。",
    "工程排查：WebSocket 要关注心跳、断线重连、连接数、负载均衡粘性、代理超时和消息积压。Nginx 等网关需要正确配置 Upgrade 头。"
  ],
  "grpc": [
    "概念定义：gRPC 是高性能 RPC 框架，使用 Protobuf 定义接口和消息，通常基于 HTTP/2 传输。它强调强契约、多语言和高效通信。",
    "工作过程：服务端和客户端根据 proto 文件生成代码。调用时对象被序列化为 Protobuf，经 HTTP/2 stream 发送，服务端处理后返回结果。",
    "面试要点：gRPC 支持一元调用、服务端流、客户端流和双向流。相比 REST，它接口契约更强，序列化更紧凑，更适合内部服务通信。",
    "工程排查：gRPC 排查关注 proto 兼容性、状态码、超时、重试、负载均衡、TLS 和网关转码。抓包时二进制内容需要配合 proto 解析。"
  ],
  "protobuf": [
    "概念定义：Protobuf 是语言无关、平台无关的结构化数据序列化协议。它用 schema 定义消息结构，并用字段编号进行二进制编码。",
    "工作过程：开发者编写 .proto 文件，再生成各语言代码。序列化时字段按编号编码成紧凑二进制，反序列化时按 schema 还原对象。",
    "面试要点：字段编号比字段名更关键，接口演进要保持兼容。新增字段通常安全，删除字段要 reserved，修改字段类型和编号风险较高。",
    "工程排查：Protobuf 问题常见于客户端服务端 proto 版本不一致、默认值误解、字段编号复用和网关 JSON 转换差异。"
  ],
  "tls": [
    "概念定义：TLS 是传输层安全协议，为应用数据提供加密、完整性和身份认证。HTTPS、gRPC、数据库安全连接都常用 TLS。",
    "工作过程：TLS 握手阶段完成协议版本协商、证书验证、密钥交换和会话密钥生成。数据传输阶段使用对称加密保护应用数据。",
    "面试要点：非对称加密常用于身份认证和密钥协商，对称加密用于大量数据传输。证书链用于证明公钥属于目标域名。TLS 1.3 简化握手并提升安全性。",
    "工程排查：TLS 问题包括证书过期、CA 不可信、SNI 错误、协议或 cipher 不兼容。openssl s_client 是常用诊断工具。"
  ],
  "certificate": [
    "概念定义：数字证书把域名、主体信息、公钥和签发机构绑定起来。浏览器通过证书链验证服务端身份。",
    "工作过程：服务端在 TLS 握手中发送证书链，客户端检查域名匹配、有效期、签名链和吊销状态。验证通过后才继续建立安全连接。",
    "面试要点：证书由 CA 签发，根 CA 由操作系统或浏览器信任。中间证书用于形成信任链，证书里的公钥用于验证身份和参与密钥协商。",
    "工程排查：常见问题包括证书过期、缺少中间证书、域名不匹配、自签证书不受信任。生产环境要监控证书到期时间。"
  ],
  "firewall": [
    "概念定义：防火墙根据规则控制网络流量进出，可以部署在主机、网关、云安全组或网络边界。规则通常匹配 IP、端口、协议和连接状态。",
    "工作过程：流量进入防火墙后按规则链匹配，命中允许、拒绝、丢弃或记录等动作。状态防火墙还会跟踪连接状态，允许已建立连接的回包。",
    "面试要点：安全组、ACL、iptables/nftables 都属于访问控制手段。允许入站端口和允许出站回包是服务可访问的基础。",
    "工程排查：端口不通时要同时查应用监听、主机防火墙、云安全组、负载均衡规则和中间网络策略。防火墙丢弃通常在应用日志里没有记录。"
  ],
  "latency-bandwidth": [
    "概念定义：延迟是数据从源到目的所需时间，带宽是单位时间内可传输的数据量。二者分别影响交互速度和吞吐上限。",
    "工作过程：实际传输时间由传播延迟、排队延迟、处理延迟、发送延迟组成。大带宽链路如果 RTT 很高，小请求仍然可能慢。",
    "面试要点：RTT 是往返时间，吞吐不等于带宽，丢包会显著降低 TCP 吞吐。带宽延迟积表示链路上可容纳的在途数据量。",
    "工程排查：网络慢要分别看 DNS、TCP 握手、TLS 握手、首字节时间、下载时间、丢包和重传。mtr、ping、curl timing、抓包都很有用。"
  ],
  "cdn": [
    "概念定义：CDN 是全球分布的反向代理缓存网络，把内容放在靠近用户的边缘节点，降低用户到源站的距离和源站负载。",
    "工作过程：用户通过 DNS、CNAME、Anycast 或调度策略进入边缘节点。边缘节点先计算 cache key，再判断 HIT、MISS、EXPIRED、REVALIDATED、STALE 或 BYPASS。",
    "分层回源：缓存缺失或过期时，请求可经过区域缓存、tiered cache 或 Origin Shield，再访问源站并把响应写回缓存层。",
    "面试要点：CDN 关键变量包括 cache key、TTL、Cache-Control、s-maxage、ETag、Vary、purge/invalidation、命中率、TTFB、回源率和源站保护。",
    "工程排查：CDN 问题常见于地域调度异常、缓存状态异常、回源慢、证书或 SNI 配置错误、动态内容误缓存、purge 范围过窄和压缩/图片优化策略不一致。响应头里的 Age、X-Cache、CF-Cache-Status 和日志能辅助定位。"
  ],
  "load-balancing": [
    "概念定义：负载均衡把流量分发到多个后端实例，提升系统吞吐、可用性和扩展能力。它可以工作在四层或七层。",
    "工作过程：四层负载均衡按 IP 和端口转发 TCP/UDP 流量；七层负载均衡理解 HTTP，可按域名、路径、Header 等规则转发。健康检查决定实例是否参与分流。",
    "面试要点：常见算法包括轮询、加权轮询、最少连接、源地址哈希、一致性哈希。会话保持、健康检查、故障摘除和慢启动是工程重点。",
    "工程排查：负载均衡问题可能表现为部分请求失败、实例流量不均、健康检查失败或真实客户端 IP 丢失。要查看转发规则、后端状态、访问日志和健康检查日志。"
  ],
  "health-check": [
    "概念定义：健康检查用于判断服务实例是否具备接收流量的能力。它是负载均衡、高可用和自动恢复的基础机制。",
    "工作过程：检查器周期性访问实例的 TCP 端口或 HTTP 路径，根据状态码、超时和失败次数判断健康状态。不健康实例会从流量池中摘除。",
    "面试要点：存活检查判断进程是否活着，就绪检查判断是否可以接流量。业务级健康检查应覆盖关键依赖，但要避免检查过重导致误杀。",
    "工程排查：健康检查失败要看检查路径、端口、超时时间、依赖状态、实例启动时间和防火墙。发布时合理设置预热和延迟可以减少抖动。"
  ],
  "observability": [
    "概念定义：网络可观测性通过日志、指标、链路追踪和抓包来理解网络状态。它解决的是系统变复杂后如何快速定位网络瓶颈。",
    "工作过程：指标提供趋势和告警，日志提供离散事件，链路追踪串起一次请求路径，抓包还原协议细节。四者结合能覆盖从宏观到微观的排查需求。",
    "面试要点：常见网络指标包括延迟、吞吐、错误率、重传率、连接数、DNS 耗时、TLS 耗时和上游响应时间。Trace ID 可以把网关、服务和下游调用串起来。",
    "工程排查：复杂故障要从用户侧、网关、服务端、依赖和基础网络多点采集证据。先用指标缩小范围，再用日志和抓包验证具体原因。"
  ]
};
