import type { GraphKnowledgePoint } from "./types.ts";

const networkKnowledgePointBase = [
  /* <!-- KG_EXPLAINED: 网络基础概览 | 2026-05-23 | source_count=9 --> */
  /* ai-redone: 2026-05-22; sources=rfc1122-internet-layers,cloudflare-how-internet-works,mdn-how-internet-works,cisco-network-basics,microsoft-tcpip-networking,oracle-packet-encapsulation; diagram=network:network-overview */
  /* <!-- KG_REVIEWED: 网络基础概览 | 2026-05-30 | source_count=10 --> */
  {
    sourceRefs: [
      "rfc1122-internet-layers",
      "cloudflare-how-internet-works",
      "mdn-how-internet-works",
      "cisco-network-basics",
      "microsoft-tcpip-networking",
      "oracle-packet-encapsulation",
      "xiaolin-what-happen-url",
      "cs-notes",
      "javaguide",
      "xiaolin-coding",
    ],
    internalTags: [
      "ai-visualized:2026-05-23",
      "visual-source:rfc1122-internet-layers",
      "visual-source:cloudflare-how-internet-works",
      "visual-source:mdn-how-internet-works",
    ],
    id: "network-overview",
    zh: "网络基础概览",
    en: "Network Overview",
    layer: "foundation",
    difficulty: "easy",
    summary: "用一次网页访问串起主机、链路、交换机、路由器、DNS、TCP/TLS、HTTP 和分层封装。",
    explanation: [
      "概念定义：计算机网络是由主机、链路、网络设备和协议共同完成数据交换的系统。主机产生和消费数据，交换机在局域网内转发帧，路由器在不同网络之间转发 IP 包，链路承载比特，协议规定地址、格式、顺序、确认、重传、加密和错误反馈。",
      "工作机制：输入 URL 后，浏览器解析地址，系统查询 DNS，客户端确定目标 IP 和端口，再建立 TCP/TLS 或 QUIC 通信基础，随后生成 HTTP 请求。操作系统把应用数据封装成 TCP/UDP 段、IP 包和链路层帧；中间设备按各自层级处理下一跳；接收端反向解封装，把数据交给目标应用。",
      "分层视角：RFC 1122 把互联网主机通信划分为应用层、传输层、Internet 层和链路层；OSI 七层常作为排障定位语言。学习时抓住四个问题：应用层表达业务语义，传输层定位进程并处理端到端传输，Internet 层负责跨网段寻址和路由，链路层负责本地下一跳交付。",
      "特殊情况：真实访问链路会叠加 DNS 缓存、IPv4/IPv6 双栈选择、NAT、代理、CDN、负载均衡、TLS 终止、MTU/PMTU、丢包重传、拥塞控制、非对称路由、防火墙、安全组和服务端限流。一次访问失败通常来自其中某一层或某个中间设备的行为变化。",
      "常见误区与排查：ping 通只说明 ICMP 或部分路径可达，HTTP 还要看端口监听、TLS 握手、Host、代理、认证、状态码和应用日志。排查时按证据分层：先确认本机地址、网关和路由，再看 DNS 结果、TCP/UDP 连接、TLS 证书、HTTP Header/Body 和服务端日志。",
      "实战工具：常用组合是 ip addr/ip route 看本机网络，dig/nslookup 看解析，ping/traceroute/mtr 看基础路径，ss/lsof 看监听和连接，curl -v/openssl s_client 看 HTTP 与 TLS，tcpdump/Wireshark 看封装、重传和返回码。先定位失败阶段，再深入对应层。",
      "参考来源：分层和主机/路由器模型采用 RFC 1122；互联网组成、packet、protocol、router、switch 和 Web 加载流程参考 Cloudflare、MDN 与 Cisco；IP、子网、网关和路由排查参考 Microsoft Learn；TCP/IP 封装过程参考 Oracle Solaris；中文 URL 访问链路参考小林 coding。",
    ],
    typicalProblems: [
      "输入 URL 到页面展示的主链路是什么",
      "DNS、TCP/TLS、HTTP、IP、MAC/ARP 在一次访问中分别负责什么",
      "ping 通但 curl 失败如何按层排查",
      "NAT、代理、CDN、负载均衡会怎样改变端到端访问链路",
      "抓包时如何从 Ethernet/IP/TCP/HTTP 判断问题所在层",
      "IPv4/IPv6、MTU、TLS 证书、防火墙和安全组会引入哪些特殊情况",
    ],
    prerequisites: [],
    related: ["osi-model", "tcp-ip-model", "dns", "tcp", "tls", "http"],
    order: 1,
  },
  /* <!-- KG_EXPLAINED: OSI 七层模型 | 2026-05-23 | source_count=8 --> */
  /* ai-redone: 2026-05-22; sources=itu-x200-osi,iso-7498-1-osi,cloudflare-osi-model,aws-osi-model,fortinet-osi-model; diagram=network:osi-model */
  /* <!-- KG_REVIEWED: OSI 七层模型 | 2026-05-30 | source_count=8 --> */
  {
    sourceRefs: ["itu-x200-osi", "iso-7498-1-osi", "cloudflare-osi-model", "aws-osi-model", "fortinet-osi-model", "cs-notes", "javaguide", "xiaolin-coding"],
    internalTags: ["ai-visualized:2026-05-23", "visual-source:iso-7498-1-osi", "visual-source:cloudflare-osi-model", "visual-source:aws-osi-model"],
    id: "osi-model",
    zh: "OSI 七层模型",
    en: "OSI Model",
    layer: "foundation",
    difficulty: "easy",
    summary: "用物理、数据链路、网络、传输、会话、表示、应用七层定位通信职责、封装路径和故障边界。",
    explanation: [
      "概念定义：OSI 七层模型是开放系统互连的基础参考模型，用七个抽象层描述网络通信职责。它的价值在于提供统一定位语言：每层向上提供服务，向下使用服务，同层之间通过协议语义协作。",
      "七层职责：物理层传输比特信号；数据链路层组织帧、MAC、VLAN 和差错检测；网络层处理 IP 地址、路由和跨网段转发；传输层处理端口、连接、可靠性、流控和拥塞；会话层管理会话状态；表示层处理编码、压缩、加密和数据格式；应用层承载 HTTP、DNS、SMTP 等面向应用的协议语义。",
      "封装流程：发送端从应用层向物理层逐层封装，每层补充本层需要的控制信息；接收端从物理层向应用层逐层解封装。一次 HTTPS 访问可以映射为 HTTP 语义、TLS 加密表示、TCP 连接、IP 寻址、以太网成帧和物理信号发送。",
      "工程映射：现实系统常把上三层能力合并在应用栈或库里，比如 TLS 处理加密和身份认证，HTTP/2、HTTP/3、gRPC 处理会话复用和流控制。网络设备也会跨层工作：交换机重点看二层，路由器重点看三层，L4 负载均衡看地址和端口，L7 网关看 Host、Path、Header 和协议内容。",
      "特殊情况：VPN、隧道、NAT、代理、CDN、WAF、Service Mesh、TLS 终止和 QUIC 会让一条链路出现多次封装、解封装或跨层处理。定位问题时要同时看外层路径和内层业务协议，尤其关注 MTU、证书、SNI、ALPN、连接复用和中间代理日志。",
      "排障用法：七层模型适合把证据归位。物理层看链路灯、速率和错误计数；二层看 MAC、ARP、VLAN、FCS；三层看 IP、路由、网关、TTL；四层看端口、握手、重传、窗口；高层看 TLS、编码、Header、状态码、业务错误和服务日志。",
      "参考来源：标准定义以 ITU-T X.200 与 ISO/IEC 7498-1:1994 为准；七层职责、封装方向和排障价值参考 Cloudflare、AWS 与 Fortinet 的 OSI 模型资料；中文学习语境参考 CS-Notes、JavaGuide 与小林 coding。",
    ],
    typicalProblems: [
      "OSI 七层各自解决什么问题",
      "一次 HTTPS 请求如何映射到七层模型",
      "交换机、路由器、L4 负载均衡、L7 网关分别主要观察哪些层",
      "如何用七层模型排查网络故障",
      "OSI 七层和 TCP/IP 四层如何对应",
      "TLS、QUIC、代理、CDN 会怎样改变分层视角",
    ],
    prerequisites: ["network-overview"],
    related: ["tcp-ip-model", "ethernet-frame", "ip", "routing", "tcp", "tls", "http"],
    order: 2,
  },
  /* <!-- KG_EXPLAINED: TCP/IP 四层模型 | 2026-05-23 | source_count=9 --> */
  /* ai-redone: 2026-05-23; sources=rfc1122-internet-layers,oracle-packet-encapsulation,cloudflare-network-layer,cloudflare-internet-protocol,aws-osi-model,microsoft-tcpip-networking; diagram=network:tcp-ip-model */
  /* <!-- KG_REVIEWED: TCP/IP 四层模型 | 2026-05-30 | source_count=9 --> */
  {
    internalTags: ["ai-visualized:2026-05-23", "visual-source:rfc1122-internet-layers", "visual-source:oracle-packet-encapsulation", "visual-source:cloudflare-network-layer", "visual-source:cloudflare-internet-protocol", "visual-source:aws-osi-model", "visual-source:microsoft-tcpip-networking"],
    sourceRefs: ["rfc1122-internet-layers", "cloudflare-network-layer", "cloudflare-internet-protocol", "aws-osi-model", "microsoft-tcpip-networking", "oracle-packet-encapsulation", "cs-notes", "javaguide", "xiaolin-coding"],
    id: "tcp-ip-model",
    zh: "TCP/IP 四层模型",
    en: "TCP/IP Model",
    layer: "foundation",
    difficulty: "easy",
    summary: "用应用层、传输层、Internet 层和链路层理解真实互联网协议栈、抓包字段和排障边界。",
    explanation: [
      "概念定义：TCP/IP 四层模型是解释互联网协议族的实用分层框架。RFC 1122 将主机通信组织为应用层、传输层、Internet 层和链路层，让应用数据、端到端传输、IP 寻址路由和本地链路投递各自承担清晰职责。",
      "四层职责：应用层包含 HTTP、DNS、SMTP、SSH 等协议和业务语义；传输层包含 TCP、UDP、端口、连接状态、可靠性、流控和数据报能力；Internet 层以 IP 为核心，处理源/目的地址、路由、TTL、ICMP 和跨网段转发；链路层覆盖以太网、Wi-Fi、ARP、MAC、VLAN、MTU、帧校验和介质接入。",
      "封装流程：发送端应用数据先交给 TCP 或 UDP，形成 segment 或 datagram；Internet 层加上源/目的 IP、TTL 和协议号；链路层写入本地下一跳 MAC、EtherType、Payload 和 FCS，形成帧。接收端按 Link -> Internet -> Transport -> Application 的顺序解封装，Oracle Solaris 的封装图适合作为抓包读图模板。",
      "OSI 映射：TCP/IP 应用层覆盖 OSI 的应用、表示、会话三层；传输层对应 OSI 传输层；Internet 层对应 OSI 网络层的互联网寻址与路由能力；链路层覆盖数据链路和物理实现。很多教材使用五层模型，把链路层拆成数据链路层和物理层，便于讲以太网帧和信号。",
      "特殊情况：ARP 位于链路交付和 IP 寻址的交界处；ICMP 为 IP 提供控制和诊断信号；NAT、隧道、VPN、容器网络和 Service Mesh 会改变地址、端口或封装层级；QUIC 运行在 UDP 之上，同时承担连接、可靠传输、安全握手和多路复用能力。",
      "工程排查：一次访问可以按四层拆证据：应用层看 URL、域名、Header、状态码和日志；传输层看端口、握手、重传、窗口和连接状态；Internet 层看 IP、路由、网关、TTL、NAT 和 ICMP；链路层看 MAC、ARP、VLAN、MTU、网卡速率和错误计数。",
      "参考来源：四层结构采用 RFC 1122 的 link/IP/transport/application 分层；封装顺序参考 Oracle Solaris TCP/IP protocol stack；网络层职责和 IP 包头参考 Cloudflare Network Layer 与 Internet Protocol；OSI 映射参考 AWS OSI Model；网关、子网和路由排查参考 Microsoft Learn。",
    ],
    typicalProblems: [
      "TCP/IP 四层分别解决什么问题",
      "一次 HTTP 请求如何逐层封装成帧",
      "抓包时如何识别 Ethernet、IP、TCP/UDP、HTTP",
      "TCP/IP 四层和 OSI 七层如何对应",
      "ARP、ICMP、NAT、QUIC 分别放在什么位置理解",
      "链路层、Internet 层、传输层、应用层分别排查哪些证据",
    ],
    prerequisites: ["osi-model"],
    related: ["ethernet-frame", "ip", "port", "tcp", "udp", "dns", "http"],
    order: 3,
  },
  /* <!-- KG_EXPLAINED: 信号与带宽 | 2026-05-23 | source_count=10 --> */
  /* ai-redone: 2026-05-23; sources=khan-bandwidth-latency,cloudflare-latency,ibm-latency,microsoft-latency-throughput,bitag-latency-explained,learnemc-time-frequency-domain,academyofemc-time-vs-frequency-domain; diagram=network:signal */
  /* <!-- KG_REVIEWED: 信号与带宽 | 2026-05-30 | source_count=10 --> */
  {
    sourceRefs: ["khan-bandwidth-latency", "cloudflare-latency", "ibm-latency", "microsoft-latency-throughput", "bitag-latency-explained", "learnemc-time-frequency-domain", "academyofemc-time-vs-frequency-domain", "cs-notes", "javaguide", "xiaolin-coding"],
    id: "signal",
    zh: "信号与带宽",
    en: "Signal and Bandwidth",
    layer: "physical",
    difficulty: "easy",
    summary: "理解比特如何变成电、光或无线信号，并区分信号带宽、链路带宽、吞吐、延迟、抖动和丢包。",
    explanation: [
      "概念定义：信号是比特在物理介质中的表现形式，可以是电压变化、光强变化或无线电磁波变化。带宽有两个常用语境：信号带宽用 Hz 表示占用频率范围，网络带宽用 bps、Mbps、Gbps 表示链路单位时间可承载的数据量上限。",
      "传输过程：发送端把比特编码、调制或映射成可传播信号，信号经过双绞线、光纤、无线信道、交换设备或运营商链路到达接收端，接收端再把信号恢复成比特。距离、介质质量、干扰、衰减、噪声、排队、设备处理和协议开销共同影响最终体验。",
      "性能关系：带宽表示容量，吞吐表示实际传输结果，延迟表示到达耗时，抖动表示延迟波动，丢包表示数据在路径中丢失。大文件、备份和视频分发更受带宽影响；游戏、远程桌面、语音会议、网页首包和多轮 API 调用更受延迟和抖动影响。",
      "特殊情况：标称带宽高时，单连接吞吐仍会受 RTT、TCP 窗口、拥塞控制、丢包、限速、代理、磁盘、CPU 和服务端发送能力限制。低空闲延迟也可能在下载或上传占满链路时变成高加载延迟，表现为视频会议卡顿、网页点击响应慢和游戏漂移。",
      "物理层故障：线缆老化、光功率异常、模块兼容、双工协商、无线干扰、接口错误、CRC/FCS 计数、队列溢出和运营商拥塞都会造成间歇性断连、丢包、重传和吞吐下降。物理问题常表现为随机、时段性、负载相关或只在大包场景出现。",
      "工程排查：先看网卡速率、链路状态、错误计数和交换机端口统计，再用 ping/mtr 观察 RTT、抖动和丢包，用 iperf 测吞吐，用 tcpdump/Wireshark 看重传和窗口，用 curl timing 拆 DNS、TCP、TLS、TTFB 和下载时间。把容量、时延和丢包分开验证。",
      "参考来源：比特率、带宽和延迟定义参考 Khan Academy；延迟、吞吐和用户体验参考 Cloudflare、IBM 与 Microsoft Learn；缓冲、排队和加载延迟参考 BITAG Latency Explained；信号的时域与频域视角参考 LearnEMC 与 Academy of EMC。",
    ],
    typicalProblems: [
      "信号带宽和网络带宽分别是什么意思",
      "带宽、吞吐、延迟、抖动、丢包如何区分",
      "高带宽低吞吐可能来自哪些原因",
      "为什么下载占满后视频会议或游戏会变卡",
      "物理链路丢包和 CRC/FCS 错误如何排查",
      "如何用 iperf、mtr、tcpdump、curl timing 判断瓶颈",
    ],
    prerequisites: ["network-overview"],
    related: ["ethernet-physical", "latency-bandwidth", "tcp-retransmission", "tcp-flow-control", "tcp-congestion-control"],
    order: 4,
  },
  /* <!-- KG_EXPLAINED: 以太网物理介质 | 2026-05-23 | source_count=7 --> */
  /* ai-redone: 2026-05-22; sources=ieee-8023-ethernet,cisco-ethernet-autonegotiation,intel-ethernet-speed-duplex,ibm-network-crc-errors; diagram=network:ethernet-physical */
  /* <!-- KG_REVIEWED: 以太网物理介质 | 2026-05-30 | source_count=7 --> */
  {
    sourceRefs: ["ieee-8023-ethernet", "cisco-ethernet-autonegotiation", "intel-ethernet-speed-duplex", "ibm-network-crc-errors", "cs-notes", "javaguide", "xiaolin-coding"],
    id: "ethernet-physical",
    zh: "以太网物理介质",
    en: "Ethernet Physical Media",
    layer: "physical",
    difficulty: "easy",
    summary: "理解双绞线、光纤、网卡、交换机端口、速率/双工协商和链路错误如何共同影响以太网可用性。",
    explanation: [
      "概念定义：以太网物理介质包括双绞线、光纤、网卡、交换机端口、光模块、DAC/AOC 线缆和收发器。它们把以太网帧转换成电信号、光信号或背板信号，是数据链路层完成本地帧投递的底座。",
      "介质选择：双绞线常用于办公终端、服务器接入和短距离机柜连接；光纤常用于机房互联、园区骨干、长距离和高带宽场景；DAC/AOC 常用于机柜内高速互联。选型要同时匹配速率、距离、接口形态、线缆等级、模块规格和设备支持矩阵。",
      "链路建立：两端设备插入介质后，会通过物理层和自动协商确定速率、双工、流控和部分高速链路能力。常见速率包括 100Mbps、1Gbps、10Gbps、25Gbps、40Gbps、100Gbps、400Gbps；协商结果会直接影响吞吐、稳定性和错误计数。",
      "特殊情况：一端强制速率/双工、另一端自动协商时，容易出现双工不一致、半双工回退、碰撞、丢包和吞吐下降。光纤链路还要关注单模/多模、波长、光功率、收发方向、模块兼容、端面污染和弯折半径；铜缆链路要关注线序、线缆等级、长度和电磁干扰。",
      "故障表现：链路 up/down 抖动、协商到低速、单向丢包、CRC/FCS 错误、input error、alignment error、光功率告警、模块温度告警和只在高流量时掉速，都指向物理层或接入链路。此类问题通常先从端口统计和替换验证开始。",
      "工程排查：先看两端端口状态、协商速率、双工、光功率、错误计数和日志；再检查线缆、光模块、跳线、配线架和对端端口；最后用 ethtool、交换机 show interface、端口镜像、iperf 和抓包确认是否有重传、丢包或窗口受限。替换同规格线缆/模块是高效验证方法。",
      "参考来源：以太网物理层、MAC 和不同速率介质能力参考 IEEE 802.3；自动协商和双工不一致现象参考 Cisco 文档；网卡速率/双工配置参考 Intel 文档；CRC 错误、线缆、端口和连接排查参考 IBM 支持资料。",
    ],
    typicalProblems: [
      "以太网物理介质包括哪些组件",
      "自动协商如何影响速率和双工",
      "双工不一致会出现哪些现象",
      "链路频繁 up/down 如何排查",
      "CRC/FCS 错误通常指向哪些问题",
      "光模块、线缆、端口和网卡如何做替换验证",
    ],
    prerequisites: ["signal"],
    related: ["ethernet-frame", "mac-address", "switch", "vlan", "latency-bandwidth"],
    order: 5,
  },
  /* <!-- KG_EXPLAINED: MAC 地址 | 2026-05-23 | source_count=5 --> */
  /* ai-redone: 2026-05-22; sources=networkacademy-switching-logic,networklessons-arp; diagram=network:mac-address */
  /* <!-- KG_REVIEWED: MAC 地址 | 2026-05-30 | source_count=5 --> */
  {
    sourceRefs: ["networkacademy-switching-logic", "networklessons-arp", "cs-notes", "javaguide", "xiaolin-coding"],
    internalTags: ["ai-visualized:2026-05-22", "visual-source:networkacademy-switching-logic", "visual-source:networklessons-arp"],
    id: "mac-address",
    zh: "MAC 地址",
    en: "MAC Address",
    layer: "data-link",
    difficulty: "easy",
    summary: "用源 MAC、目的 MAC、ARP 缓存和交换机 MAC 表理解一帧在本地链路如何到达下一跳。",
    explanation: [
      "概念定义：MAC 地址是数据链路层接口标识，常见以太网 MAC 为 48 位。以太网帧头同时携带源 MAC 和目的 MAC：源 MAC 表示这一跳从哪个接口发出，目的 MAC 表示这一跳要交给本地链路上的哪个接口。",
      "下一跳规则：主机发送 IP 包前先判断目标是否位于同一子网。同网段访问时，帧的目的 MAC 是目标主机 MAC；跨网段访问时，帧的目的 MAC 是默认网关 MAC，IP 包里的目的 IP 仍然是远端目标。理解这一点就能读懂访问外网时抓包里的 MAC 与 IP。",
      "ARP 配合：主机通过 ARP 缓存查找下一跳 MAC；缓存缺失时发送 ARP Request 广播，目标设备或网关返回 ARP Reply，主机写入缓存后再封装以太网帧。ARP 请求的外层目的 MAC 常见为 FF:FF:FF:FF:FF:FF，应答通常为单播。",
      "交换机逻辑：交换机收到帧后先学习源 MAC 与入端口的对应关系，再查看目的 MAC。目的 MAC 命中 MAC 表时，交换机定向转发；目的 MAC 属于广播、组播或未知单播时，交换机在同一 VLAN 内泛洪，回包到达后表项逐步收敛。",
      "特殊情况：MAC 表会老化，主机迁移端口、虚拟机漂移、网卡绑定、容器桥接、VLAN 配错、环路、MAC 欺骗和重复 IP 都会改变二层现象。云网络和虚拟交换机还可能用封装、代理 ARP 或安全策略隐藏真实物理 MAC。",
      "工程排查：同网段不通先看本机 IP/掩码、ARP 缓存、交换机 MAC 表、VLAN 和端口错误计数；跨网段不通重点确认下一跳网关 MAC、默认路由、网关 ARP 和回程路径。抓包时把 Ethernet 源/目的 MAC、ARP Request/Reply、VLAN ID 和交换机端口表对应起来。",
      "参考来源：交换机学习源 MAC、按目的 MAC 查表、未知单播与广播泛洪的流程参考 NetworkAcademy.IO；ARP 缓存、广播 Request、单播 Reply 和抓包字段参考 NetworkLessons；中文学习语境参考 CS-Notes、JavaGuide 与小林 coding。",
    ],
    typicalProblems: [
      "MAC 地址和 IP 地址分别定位什么",
      "同网段访问和跨网段访问时目的 MAC 分别是谁",
      "访问外网时 IP 目的地址和二层目的 MAC 为什么不同",
      "交换机如何学习 MAC 地址表",
      "未知单播、广播、组播分别会怎样转发",
      "如何用 ARP 表和交换机 MAC 表排查同网段不通",
    ],
    prerequisites: ["ethernet-physical"],
    related: ["ethernet-frame", "arp", "switch", "vlan", "gateway", "ip"],
    order: 6,
  },
  /* <!-- KG_EXPLAINED: 以太网帧 | 2026-05-23 | source_count=7 --> */
  /* ai-redone: 2026-05-23; sources=geeksforgeeks-ethernet-frame,ibm-ethernet-frame-format,cisco-8021q-frame-format,computernetworkingnotes-ethernet-frame; diagram=network:ethernet-frame */
  /* <!-- KG_REVIEWED: 以太网帧 | 2026-05-30 | source_count=7 --> */
  {
    sourceRefs: ["geeksforgeeks-ethernet-frame", "ibm-ethernet-frame-format", "cisco-8021q-frame-format", "computernetworkingnotes-ethernet-frame", "cs-notes", "javaguide", "xiaolin-coding"],
    internalTags: ["ai-visualized:2026-05-23", "visual-source:geeksforgeeks-ethernet-frame", "visual-source:ibm-ethernet-frame-format", "visual-source:cisco-8021q-frame-format", "visual-source:computernetworkingnotes-ethernet-frame"],
    id: "ethernet-frame",
    zh: "以太网帧",
    en: "Ethernet Frame",
    layer: "data-link",
    difficulty: "medium",
    summary: "用目的 MAC、源 MAC、可选 802.1Q Tag、Type/Length、Payload、FCS 和 MTU 理解局域网传输格式。",
    explanation: [
      "概念定义：以太网帧是数据链路层在本地链路上传输数据的基本格式。典型 Ethernet II 帧围绕目的 MAC、源 MAC、Type/Length、Payload 和 FCS 组织；Preamble 与 SFD 位于帧前导部分，帮助接收端完成物理同步和帧起始识别。",
      "字段结构：目的 MAC 与源 MAC 各 6 字节，决定这一跳的接收接口和发送接口；Type/Length 为 2 字节，在 Ethernet II 中常作为 EtherType，例如 0x0800 表示 IPv4，0x86DD 表示 IPv6，0x0806 表示 ARP；Payload 常见范围是 46 到 1500 字节，短载荷会填充到最小长度。",
      "VLAN Tag：802.1Q 在源 MAC 和 Type/Length 之间插入 4 字节 Tag，包含 TPID、优先级、DEI/CFI 和 VLAN ID。插入 Tag 后帧内容改变，交换设备会重新计算 FCS；Trunk 链路依靠 VLAN ID 在同一物理链路上承载多个广播域。",
      "FCS 与错误：FCS 是 4 字节帧校验序列，接收网卡用它发现传输过程中损坏的帧。校验通过后，接收端根据 Type/Length 把 Payload 交给 IPv4、IPv6、ARP 或其他上层协议；校验失败通常体现为 CRC/FCS 错误计数。",
      "特殊情况：标准以太网 MTU 常见为 1500 字节，Jumbo Frame 会扩大 Payload 上限；不同链路上的 MTU、隧道、VLAN Tag、QinQ 和加密封装都会影响实际可承载载荷。抓包工具常从二层头开始展示，前导码、SFD、FCS 可能由网卡硬件处理后隐藏。",
      "工程排查：抓包时先看源/目的 MAC、EtherType、VLAN ID、帧长度和上层协议，再结合交换机端口的 CRC/FCS、丢弃、MTU、VLAN 放行和 MAC 表。MTU 不一致会造成大包丢弃或分片，VLAN Tag 缺失会让流量进入错误广播域，FCS/CRC 错误常指向链路质量。",
      "参考来源：字段顺序和示意图参考 GeeksForGeeks Ethernet Frame Format；字段字节长度和 Payload 范围参考 IBM i Ethernet frame format；802.1Q Tag 插入位置与 FCS 重算参考 Cisco 802.1Q Frame Format；header、data、trailer 三段讲解参考 ComputerNetworkingNotes。",
    ],
    typicalProblems: [
      "以太网帧有哪些关键字段",
      "目的 MAC、源 MAC 和 EtherType 分别承担什么职责",
      "Payload 46-1500 字节和 MTU 有什么关系",
      "802.1Q VLAN Tag 插入在帧的哪个位置",
      "FCS/CRC 错误通常说明什么",
      "抓包时如何识别 IPv4、IPv6、ARP 和 VLAN 帧",
    ],
    prerequisites: ["mac-address"],
    related: ["switch", "vlan", "arp", "ip", "ipv4", "ipv6"],
    order: 7,
  },
  /* <!-- KG_EXPLAINED: 交换机 | 2026-05-23 | source_count=7 --> */
  /* ai-redone: 2026-05-23; sources=networkacademy-switching-logic,cisco-mac-address-table,cisco-network-switching-operation,gfg-switch-functions-layer2; diagram=network:switch */
  /* <!-- KG_REVIEWED: 交换机 | 2026-05-30 | source_count=7 --> */
  {
    sourceRefs: ["networkacademy-switching-logic", "cisco-mac-address-table", "cisco-network-switching-operation", "gfg-switch-functions-layer2", "cs-notes", "javaguide", "xiaolin-coding"],
    internalTags: ["ai-visualized:2026-05-23", "visual-source:networkacademy-switching-logic", "visual-source:cisco-mac-address-table", "visual-source:cisco-network-switching-operation", "visual-source:gfg-switch-functions-layer2"],
    id: "switch",
    zh: "交换机",
    en: "Switch",
    layer: "data-link",
    difficulty: "easy",
    summary: "根据源 MAC 学习端口，根据目的 MAC、VLAN 和 MAC 表决定过滤、定向转发或泛洪。",
    explanation: [
      "概念定义：交换机是二层转发设备，核心数据结构是 MAC 地址表，也常叫 CAM 表。表项通常包含 MAC 地址、VLAN ID、端口和类型；动态表项来自交换机从收到帧的源 MAC 学习，静态表项来自人工配置。",
      "学习过程：交换机收到帧后先读取源 MAC、入端口和 VLAN，把它们写入 MAC 地址表或刷新已有表项。动态表项有老化时间；主机迁移端口、虚拟机漂移或长时间无流量时，表项会更新、迁移或老化消失。",
      "转发决策：学习源 MAC 后，交换机查看目的 MAC。目的 MAC 对应同一个入端口时执行过滤；目的 MAC 在同一 VLAN 的其他端口有表项时定向转发；目的 MAC 属于广播、组播或未知单播时，交换机在同一 VLAN 内向其他端口泛洪。",
      "VLAN 边界：MAC 地址表和转发决策都带 VLAN 维度。同一个 MAC 可以在不同 VLAN 中作为不同表项存在，泛洪范围也限制在同一 VLAN。Access 口通常承载一个 VLAN，Trunk 口通过 802.1Q Tag 承载多个 VLAN。",
      "特殊情况：未知单播泛洪是学习过程的一部分；表项老化、单向流量、非对称路径、STP 拓扑变化、MAC 漂移、环路、端口安全限制和 MAC 表耗尽都会放大泛洪。MAC flooding 攻击会制造大量源 MAC，占用表项并扩大未知单播流量。",
      "工程排查：二层不通时先看接口 up/down、速率/双工、VLAN、MAC 地址表、ARP 表和端口错误计数。常用命令是 show mac address-table、show interface、show vlan、show spanning-tree、端口镜像抓包和交换机日志；定位时把 MAC、VLAN、端口、ARP 和网关对应起来。",
      "参考来源：交换机学习源 MAC、目的 MAC 查表、未知单播泛洪的图解参考 NetworkAcademy.IO；MAC 地址表字段、动态/静态表项和老化时间参考 Cisco 文档；学习、泛洪和转发过程参考 Cisco Network Switching Operation 与 GeeksForGeeks 二层交换机说明。",
    ],
    typicalProblems: [
      "交换机如何学习 MAC 地址表",
      "目的 MAC 命中、同端口命中、未知单播分别如何处理",
      "交换机和路由器的核心职责分别是什么",
      "同一个 MAC 出现在多个端口通常说明什么",
      "未知单播泛洪、广播风暴和 MAC flooding 如何产生",
      "如何用 show mac address-table 排查同网段不通",
    ],
    prerequisites: ["ethernet-frame"],
    related: ["mac-address", "vlan", "arp", "ethernet-physical", "gateway", "routing"],
    order: 8,
  },
  /* <!-- KG_EXPLAINED: VLAN | 2026-05-23 | source_count=7 --> */
  /* ai-redone: 2026-05-23; sources=cisco-access-trunk-interfaces,cisco-8021q-frame-format,networkacademy-vlan-trunking,omnisecu-8021q-tagging; diagram=network:vlan */
  /* <!-- KG_REVIEWED: VLAN | 2026-05-30 | source_count=7 --> */
  {
    sourceRefs: ["cisco-access-trunk-interfaces", "cisco-8021q-frame-format", "networkacademy-vlan-trunking", "omnisecu-8021q-tagging", "cs-notes", "javaguide", "xiaolin-coding"],
    internalTags: ["ai-visualized:2026-05-23", "visual-source:cisco-access-trunk-interfaces", "visual-source:cisco-8021q-frame-format", "visual-source:networkacademy-vlan-trunking", "visual-source:omnisecu-8021q-tagging"],
    id: "vlan",
    zh: "VLAN",
    en: "VLAN",
    layer: "data-link",
    difficulty: "medium",
    summary: "用逻辑广播域隔离二层流量，Access 口承载单个 VLAN，Trunk 口用 802.1Q Tag 承载多个 VLAN。",
    explanation: [
      "概念定义：VLAN 是虚拟局域网，用逻辑方式把同一套交换网络划分成多个二层广播域。每个 VLAN 内的广播、未知单播、ARP 和二层转发相互独立；不同 VLAN 之间通信需要三层网关、三层交换机或路由器参与。",
      "Access 端口：Access 口通常连接终端设备，只属于一个访问 VLAN。进入 Access 口的无标签帧会被交换机归入该端口配置的 VLAN；从 Access 口发往终端时，交换机会发送无标签帧，终端感知到的是普通以太网。",
      "Trunk 端口：Trunk 口通常连接交换机、路由器、防火墙或虚拟化主机，可以在同一物理链路上承载多个 VLAN。802.1Q 会在以太网帧源 MAC 与 Type/Length 之间插入 4 字节 Tag，Tag 中的 VLAN ID 标识该帧所属 VLAN，接收端按 VLAN ID 分流。",
      "Native VLAN：802.1Q Trunk 可以同时承载有标签和无标签帧。Native VLAN 的帧通常在 Trunk 上以无标签方式发送；Trunk 收到无标签帧时会把它归入 Native VLAN。两端 Native VLAN 配置不一致会导致无标签流量进入错误广播域。",
      "特殊情况：Trunk allowed VLAN 控制哪些 VLAN 可以通过；语音 VLAN、管理 VLAN、QinQ、虚拟交换机和容器/云网络会带来额外标签或映射规则。STP、端口安全、私有 VLAN 和动态协商协议也会影响真实转发路径。",
      "工程排查：VLAN 问题常表现为同网段不通、跨交换机只通部分主机、ARP 看不到、广播范围异常、Native VLAN 告警或 Trunk 未放行。排查顺序是端口模式、Access VLAN、Trunk 状态、allowed VLAN、Native VLAN、MAC 表、ARP 表、网关 SVI/子接口和三层路由。",
      "参考来源：Access 与 Trunk 行为参考 Cisco Nexus 3000 Layer 2 配置文档；802.1Q Tag 插入位置、4 字节 Tag 和 Native VLAN 语义参考 Cisco 802.1Q Frame Format；Trunk 添加与移除 VLAN Tag 的图解参考 NetworkAcademy.IO；802.1Q 字段结构与无标签 Native VLAN 行为参考 OmniSecu。",
    ],
    typicalProblems: [
      "VLAN 解决什么问题",
      "Access 口和 Trunk 口有什么区别",
      "802.1Q Tag 插入在帧的哪个位置",
      "Native VLAN 不一致会出现什么现象",
      "跨 VLAN 通信需要什么条件",
      "Trunk 放行 VLAN 配错如何排查",
    ],
    prerequisites: ["switch"],
    related: ["ethernet-frame", "mac-address", "arp", "subnet", "gateway", "routing"],
    order: 9,
  },
  /* <!-- KG_EXPLAINED: ARP | 2026-05-23 | source_count=7 --> */
  /* ai-redone: 2026-05-23; sources=rfc826-arp,networklessons-arp,wireshark-arp,cisco-arp-config; diagram=network:arp */
  /* <!-- KG_REVIEWED: ARP | 2026-05-30 | source_count=7 --> */
  {
    internalTags: ["ai-visualized:2026-05-23", "visual-source:rfc826-arp", "visual-source:networklessons-arp", "visual-source:wireshark-arp", "visual-source:cisco-arp-config"],
    sourceRefs: ["rfc826-arp", "networklessons-arp", "wireshark-arp", "cisco-arp-config", "cs-notes", "javaguide", "xiaolin-coding"],
    id: "arp",
    zh: "ARP",
    en: "Address Resolution Protocol",
    layer: "data-link",
    difficulty: "medium",
    summary: "把下一跳 IPv4 地址解析为同一二层广播域内可投递的 MAC 地址。",
    explanation: [
      "概念定义：ARP 是 IPv4 在本地链路上把协议地址映射到硬件地址的解析机制。RFC 826 定义了 sender hardware address、sender protocol address、target hardware address、target protocol address 和 opcode，让主机能用下一跳 IPv4 地址找到以太网 MAC。",
      "下一跳判断：主机发送 IP 包前先用本机 IP、子网掩码和目标 IP 判断下一跳。同一子网访问时，ARP 查询目标主机 IP；远端网络访问时，ARP 查询默认网关接口 IP，后续以太网帧的目的 MAC 指向网关，IP 包目的地址保持远端目标。",
      "请求与应答：ARP 缓存缺失时，请求方发送 Ethernet 广播帧，外层目的 MAC 是 FF:FF:FF:FF:FF:FF，ARP 内容表达“谁拥有这个目标协议地址”。同一广播域内设备都会收到请求，持有目标 IP 的设备返回 ARP Reply，通常用单播把自己的 MAC 告诉请求方。",
      "缓存与投递：请求方收到 Reply 后把 IP 到 MAC 的映射写入 ARP 缓存，并用解析出的 MAC 封装后续以太网帧。动态 ARP 表项会老化，静态 ARP 可固定映射；缓存提升性能，也带来陈旧表项、重复 IP、错误网关 MAC 和迁移延迟等排障点。",
      "特殊情况：Gratuitous ARP 可用于地址冲突检测、主机迁移和通知邻居更新缓存；Proxy ARP 让设备代替其他主机回答 ARP；ARP 欺骗会伪造 IP-MAC 映射，影响网关流量和中间人攻击风险。IPv6 使用 NDP 承担类似邻居解析能力。",
      "抓包与排查：Wireshark 中重点看 opcode、sender MAC/IP、target MAC/IP 和外层 Ethernet 目的地址。正常流程先看到广播 Request，再看到目标或网关 Reply；重复 IP 或投毒场景会出现同一协议地址对应多个硬件地址。排查命令包括 ip neigh、arp -a、arping、show arp、清理缓存和端口镜像抓包。",
      "参考来源：协议字段、opcode 和 Request/Reply 语义采用 RFC 826；广播请求、单播应答和缓存流程参考 NetworkLessons；抓包字段和显示过滤参考 Wireshark；静态/动态 ARP、超时和 Proxy ARP 参考 Cisco 配置文档。",
    ],
    typicalProblems: [
      "ARP 的完整解析过程是什么",
      "访问外网时 ARP 解析哪个 IP 对应的 MAC",
      "ARP Request 为什么使用广播 MAC",
      "ARP Reply 通常怎样返回请求方",
      "Gratuitous ARP、Proxy ARP 和 ARP 欺骗分别是什么",
      "ARP 缓存异常、重复 IP 或错误网关 MAC 如何排查",
    ],
    prerequisites: ["mac-address", "ip"],
    related: ["ipv4", "subnet", "gateway", "switch", "vlan"],
    order: 10,
  },
  /* <!-- KG_REVIEWED: IP 协议 | 2026-05-30 | source_count=5 --> */
  /* <!-- KG_EXPLAINED: IP 协议 | 2026-05-23 | source_count=5 --> */
  {
    sourceRefs: ["rfc791-ip", "cloudflare-internet-protocol", "cloudflare-network-layer", "microsoft-tcpip-networking", "xiaolin-coding"],
    id: "ip",
    zh: "IP 协议",
    en: "Internet Protocol",
    layer: "network",
    difficulty: "easy",
    summary: "用源/目的地址、TTL、协议号、分片和路由表理解跨网络分组转发。",
    explanation: [
      "核心概念：IP 是互联网层的核心协议，把上层数据封装成独立数据报，并写入源地址、目的地址、TTL、协议号、分片信息和头部校验等字段。路由器根据目的地址逐跳转发，让数据报穿过多个网络到达目标主机。",
      "工作机制：发送端把 TCP、UDP 或 ICMP 载荷交给 IP，IP 根据目标地址和路由表选择下一跳，再交给链路层封装成本地帧。每经过一个路由器，TTL 会递减，路由器重新选择下一跳；到达目标主机后，协议号把载荷交给 TCP、UDP、ICMP 等上层模块。",
      "核心特性：IP 提供尽力而为的数据报服务，每个数据报独立转发。端到端可靠性、顺序、重传、流控和拥塞处理由 TCP、QUIC 或应用层补足；IP 层负责把包送向目的地，并通过 ICMP 报告部分差错和控制信息。",
      "特殊情况：IPv4 支持分片与重组，MTU 过小时会触发分片或依赖路径 MTU 发现；NAT 会改写地址或端口；策略路由、多网卡、隧道、VPN、安全组、防火墙和云路由表都会改变实际路径。IPv6 头部、地址长度和邻居发现机制与 IPv4 有明显差异。",
      "抓包读法：看 IP 包时重点观察源/目的地址、TTL、Protocol、Identification、Fragment Offset、DF 标志、Header Checksum 和包长。TTL 快速下降提示经过多跳；分片字段可暴露 MTU 问题；Protocol 字段能把载荷对应到 TCP、UDP 或 ICMP。",
      "工程排查：先确认本机 IP、掩码、默认网关、路由表和 DNS 结果，再用 ping、traceroute/mtr、ip route get、tcpdump、云流日志和安全组/ACL 日志定位路径。ping 通只证明 ICMP 或部分路径可达，业务访问还要看端口、防火墙、TLS、应用监听和回程路径。",
      "参考来源：IPv4 数据报、寻址、分片、TTL、协议层级和尽力而为语义采用 RFC 791；IP 寻址与网络层职责参考 Cloudflare Internet Protocol 与 Network Layer；地址、掩码、网关和路由排查参考 Microsoft Learn；中文学习语境参考小林 coding。",
    ],
    typicalProblems: [
      "IP 协议在网络层解决什么问题",
      "源 IP、目的 IP、TTL 和 Protocol 字段分别有什么作用",
      "路由器转发 IP 包时会改哪些字段",
      "MTU、分片和路径 MTU 发现如何影响访问",
      "ping 通但业务端口失败如何分层排查",
      "IPv4、IPv6、NAT、隧道和安全组会怎样改变 IP 层现象",
    ],
    prerequisites: ["tcp-ip-model"],
    related: ["ipv4", "ipv6", "subnet", "cidr", "gateway", "routing", "icmp", "nat", "tcp", "udp"],
    order: 11,
  },
  /* <!-- KG_REVIEWED: IPv4 地址 | 2026-05-30 | source_count=5 --> */
  /* <!-- KG_EXPLAINED: IPv4 地址 | 2026-05-23 | source_count=5 --> */
  {
    sourceRefs: ["rfc791-ip", "rfc1918-private-address", "microsoft-tcpip-networking", "cloudflare-internet-protocol", "xiaolin-coding"],
    id: "ipv4",
    zh: "IPv4 地址",
    en: "IPv4 Address",
    layer: "network",
    difficulty: "easy",
    summary: "理解 32 位 IPv4 地址、CIDR/子网掩码、私有地址、特殊地址和同网段判断。",
    explanation: [
      "核心概念：IPv4 地址是 32 位网络层地址，通常写成点分十进制，例如 192.168.1.10。地址通过子网掩码或 CIDR 前缀拆成网络部分和主机部分，网络部分用于判断本地网段、路由命中和下一跳。",
      "工作机制：主机发送数据前，用本机地址、掩码和目标地址计算网络号。网络号相同就走本地链路，通过 ARP 找目标 MAC；网络号不同就交给默认网关，通过 ARP 找网关 MAC。路由表会用最长前缀匹配决定更精确的下一跳。",
      "私有地址：RFC 1918 定义三段私有 IPv4 地址：10.0.0.0/8、172.16.0.0/12、192.168.0.0/16。它们常用于企业内网、家庭网络、云 VPC、容器网络和实验环境，出公网时通常配合 NAT 或代理。",
      "特殊地址：0.0.0.0 常用于默认路由或监听所有 IPv4 地址；127.0.0.0/8 是本机回环；169.254.0.0/16 常见于链路本地自动配置；网络地址和广播地址承载子网语义；224.0.0.0/4 是组播范围。业务主机分配要避开这些语义地址。",
      "规划边界：传统 A/B/C 类地址主要用于理解历史和默认掩码，现代网络规划以 CIDR 为主。云平台常在每个子网内保留若干地址，VPN、专线、VPC Peering、Kubernetes Pod/Service 网段和办公网互联要提前避免地址重叠。",
      "工程排查：排查时同时核对 IP、前缀/掩码、默认网关、ARP、路由表、安全组和实际出口 IP。掩码错误会让主机误判同网段，可能 ARP 错对象或把本该交给网关的流量留在本地广播域；地址冲突会造成间歇性掉线和 ARP 表抖动。",
      "参考来源：IPv4 地址和数据报基础采用 RFC 791；私有地址段采用 RFC 1918；子网掩码、默认网关和地址配置参考 Microsoft Learn；IP 地址与包寻址作用参考 Cloudflare；中文图解参考小林 coding。",
    ],
    typicalProblems: [
      "IPv4 地址为什么是 32 位",
      "私有 IPv4 地址段有哪些",
      "主机如何判断目标是否同网段",
      "网络地址、广播地址、0.0.0.0、127.0.0.1 分别有什么用途",
      "子网掩码配置错误会造成什么现象",
      "云 VPC、VPN、Kubernetes 网络为什么要避免地址重叠",
    ],
    prerequisites: ["ip"],
    related: ["subnet", "cidr", "gateway", "arp", "routing", "nat", "ipv6"],
    order: 12,
  },
  /* <!-- KG_REVIEWED: IPv6 地址 | 2026-05-30 | source_count=5 --> */
  /* <!-- KG_EXPLAINED: IPv6 地址 | 2026-05-23 | source_count=5 --> */
  {
    sourceRefs: ["rfc8200-ipv6", "rfc4291-ipv6-addressing", "rfc4861-ndp", "rfc4443-icmpv6", "cloudflare-internet-protocol"],
    id: "ipv6",
    zh: "IPv6 地址",
    en: "IPv6 Address",
    layer: "network",
    difficulty: "medium",
    summary: "理解 128 位 IPv6 地址、地址类型、基础头部、NDP、ICMPv6、双栈和路径 MTU。",
    explanation: [
      "核心概念：IPv6 使用 128 位地址，采用冒号分隔的十六进制写法，并支持连续 0 压缩。RFC 8200 定义 IPv6 基础头部，RFC 4291 定义地址架构；更大的地址空间支持层级聚合、端到端寻址和自动配置。",
      "头部机制：IPv6 基础头部包含 Version、Traffic Class、Flow Label、Payload Length、Next Header、Hop Limit、Source Address 和 Destination Address。Next Header 指向 TCP、UDP、ICMPv6 或扩展头；Hop Limit 承担类似 IPv4 TTL 的防环路作用。",
      "地址类型：常见 IPv6 地址包括全局单播、链路本地、唯一ULA、本机回环 ::1、未指定地址 ::、组播和任播。链路本地地址通常用于本地链路通信、路由器发现和邻居发现；全局单播用于跨网络可达通信。",
      "NDP 与 ICMPv6：IPv6 使用邻居发现协议 NDP 完成邻居解析、路由器发现、前缀发现、地址自动配置辅助、邻居可达性检测和重复地址检测。NDP 基于 ICMPv6，ICMPv6 还承担错误报告、ping6 和 Packet Too Big 等路径 MTU 信号。",
      "特殊情况：双栈环境中 DNS 可能同时返回 A 和 AAAA 记录，客户端地址选择、Happy Eyeballs、运营商 IPv6 质量、防火墙、ICMPv6 放行和应用监听地址会影响实际访问。扩展头、分片、安全设备兼容性和隧道封装也会改变排查方式。",
      "工程排查：排查时确认 DNS AAAA、地址作用域、默认路由、路由前缀、NDP 表、RA、ICMPv6 放行、路径 MTU、应用监听 :: 地址和 IPv4 回退行为。常用命令包括 ip -6 addr、ip -6 route、ip -6 neigh、ping6、traceroute6、dig AAAA、curl -6 和 tcpdump icmp6。",
      "参考来源：IPv6 基础头部、Next Header、Hop Limit 和 128 位地址采用 RFC 8200；地址类型与表示法采用 RFC 4291；邻居发现、路由器发现和重复地址检测采用 RFC 4861；ICMPv6 错误、诊断和 Packet Too Big 参考 RFC 4443；IP 基础解释参考 Cloudflare。",
    ],
    typicalProblems: [
      "IPv6 和 IPv4 的关键区别是什么",
      "IPv6 地址如何压缩和展开",
      "Global、Link-local、ULA、Multicast、Loopback 分别用于什么场景",
      "NDP 替代 IPv4 中哪些机制",
      "ICMPv6 为什么对 IPv6 可用性很关键",
      "双栈环境下访问异常如何排查",
    ],
    prerequisites: ["ip"],
    related: ["ipv4", "icmp", "dns", "routing", "gateway"],
    order: 13,
  },
  /* <!-- KG_REVIEWED: 子网划分 | 2026-05-30 | source_count=4 --> */
  /* <!-- KG_EXPLAINED: 子网划分 | 2026-05-23 | source_count=4 --> */
  {
    sourceRefs: ["microsoft-tcpip-networking", "rfc4632-cidr", "aws-vpc-route-tables", "xiaolin-coding"],
    id: "subnet",
    zh: "子网划分",
    en: "Subnetting",
    layer: "network",
    difficulty: "medium",
    summary: "用网络位和主机位把地址空间切成可路由、可隔离、可容量规划的网络范围。",
    explanation: [
      "核心概念：子网划分用子网掩码或 CIDR 前缀把 IP 地址拆成网络部分和主机部分。主机把 IP 与掩码按位与得到网络号；本机和目标网络号相同就按本地链路投递，网络号不同就交给网关。",
      "计算方法：前缀越长，网络位越多，子网越小；前缀越短，主机位越多，子网越大。IPv4 中常见可用主机数约为 2 的主机位数次方减去网络地址和广播地址，云平台还会保留额外地址给网关、DNS 或平台服务。",
      "使用场景：子网用于隔离广播域、规划办公网和机房网段、划分云 VPC 可用区、绑定路由表、安全组和网络 ACL。一个清晰的子网规划能让地址容量、故障范围、路由边界和安全边界保持可控。",
      "特殊情况：/31 常用于点到点链路，/32 表示单主机路由；公有云子网常与可用区、路由表和网关强绑定；Kubernetes、VPN、专线、VPC Peering 和多集群互联都需要避免 CIDR 重叠。",
      "常见问题：子网过小会导致地址耗尽；子网过大可能扩大广播和故障影响面；掩码配置错误会让主机误判目标位置，表现为 ARP 错对象、绕过网关、只能访问部分主机或回程路径异常。",
      "工程排查：核对本机 IP、前缀/掩码、网关是否在本地子网，计算目标是否同网段，再结合路由表、ARP 表、VLAN、云子网路由和安全策略确认下一跳。常用命令包括 ip addr、ip route、ip route get、arp -a/ip neigh 和云控制台路由表。",
      "参考来源：子网掩码、本地/远端判断和错误掩码影响参考 Microsoft Learn；前缀表示和 CIDR 规则参考 RFC 4632；云子网与路由表关联参考 AWS VPC 文档；中文图解参考小林 coding。",
    ],
    typicalProblems: [
      "子网掩码如何判断同网段",
      "网络号、主机位、广播地址如何计算",
      "/24、/26、/31、/32 分别适合什么场景",
      "子网配置错误会导致什么现象",
      "云子网为什么要同时看路由表和可用区",
      "跨 VPC、VPN、Kubernetes 网络为什么要避免地址重叠",
    ],
    prerequisites: ["ipv4"],
    related: ["cidr", "gateway", "routing", "arp", "vlan", "nat"],
    order: 14,
  },
  /* <!-- KG_REVIEWED: CIDR | 2026-05-30 | source_count=4 --> */
  /* <!-- KG_EXPLAINED: CIDR | 2026-05-23 | source_count=4 --> */
  {
    sourceRefs: ["rfc4632-cidr", "aws-vpc-route-tables", "microsoft-tcpip-networking", "cloudflare-network-layer"],
    id: "cidr",
    zh: "CIDR",
    en: "Classless Inter-Domain Routing",
    layer: "network",
    difficulty: "medium",
    summary: "用斜杠前缀表示地址范围，并用最长前缀匹配支撑路由选择和路由聚合。",
    explanation: [
      "核心概念：CIDR 用地址加斜杠前缀表示网络范围，例如 10.0.0.0/16。前缀长度表示网络位数量；前缀越长，范围越小，匹配越精确；前缀越短，范围越大，覆盖地址越多。",
      "计算方法：IPv4 是 32 位地址，/24 表示前 24 位是网络前缀，剩余 8 位是主机空间；10.0.0.0/16 覆盖 10.0.0.0 到 10.0.255.255。实际可用主机数还要考虑网络地址、广播地址和云平台保留地址。",
      "路由选择：路由表按最长前缀匹配选择最精确的路由。10.0.2.15/32 比 10.0.2.0/24 精确，10.0.2.0/24 比 10.0.0.0/16 精确，0.0.0.0/0 覆盖所有 IPv4 地址，常作为默认出口。",
      "使用场景：CIDR 用于 VPC、子网、安全组、ACL、BGP 路由、Kubernetes Pod/Service 网段、防火墙白名单和网段规划。它让地址分配按容量切分，也让连续网络可以聚合成更短前缀，降低路由表规模。",
      "特殊情况：聚合前缀能减少路由数量，也会扩大可达范围；更具体路由可以覆盖聚合路由的一部分；黑洞路由和本地路由也用 CIDR 表达。云路由表里每条路由通常由 destination CIDR 和 target 组成，子网关联的路由表决定出口方向。",
      "边界与排查：CIDR 重叠会造成路由歧义，常见于 VPC Peering、VPN、专线、多集群、容器网络和收购整合后的办公网。排查时列出所有本地路由、云路由、远端宣告和安全策略，按最长前缀匹配判断实际下一跳。",
      "参考来源：CIDR 定义、地址聚合和最长前缀匹配参考 RFC 4632；AWS VPC 路由表资料用于校准 destination CIDR、target、local route 和最长前缀优先级；地址和掩码基础参考 Microsoft Learn；网络层路由职责参考 Cloudflare。",
    ],
    typicalProblems: [
      "CIDR 如何计算地址范围",
      "/16、/24、/32、0.0.0.0/0 分别表示什么",
      "最长前缀匹配如何决定路由",
      "路由聚合为什么能减少路由表规模",
      "VPC、VPN、Kubernetes 网段规划为什么要避免重叠",
      "CIDR 重叠导致访问异常时如何排查下一跳",
    ],
    prerequisites: ["subnet"],
    related: ["routing", "gateway", "ipv4", "nat", "firewall"],
    order: 15,
  },
  /* <!-- KG_REVIEWED: 网关 | 2026-05-30 | source_count=4 --> */
  /* <!-- KG_EXPLAINED: 网关 | 2026-05-23 | source_count=4 --> */
  {
    sourceRefs: ["microsoft-tcpip-networking", "aws-vpc-route-tables", "rfc826-arp", "cloudflare-network-layer"],
    id: "gateway",
    zh: "网关",
    en: "Gateway",
    layer: "network",
    difficulty: "easy",
    summary: "作为本地网络通向其他网络的下一跳，承接默认路由、跨网段转发和云网络出口。",
    explanation: [
      "核心概念：网关是主机访问其他网络时交给的下一跳。默认网关处理没有更精确路由匹配的流量；主机把远端 IP 包封装进发往网关 MAC 的二层帧，由网关继续按路由表转发。",
      "工作机制：主机先用掩码判断目标是否位于本地子网。本地目标直接 ARP 目标 MAC；远端目标查路由表，常命中默认路由，再 ARP 网关接口 MAC。二层帧的目的 MAC 是网关，IP 包的目的 IP 保持远端目标。",
      "使用场景：办公终端出网、服务器跨子网访问、云私有子网访问 NAT Gateway、公共子网访问 Internet Gateway、容器节点访问外部服务、VPN/专线出口都依赖网关。网关可以是路由器、三层交换机、防火墙、云路由、NAT 设备或虚拟网关。",
      "特殊情况：同一主机可以有多张网卡和多个路由，更精确的静态路由或策略路由会优先于默认网关。云网络里路由表由 destination CIDR 和 target 组成，target 可以是 local、Internet Gateway、NAT Gateway、Transit Gateway、Peering、网卡或中间设备。",
      "边界情况：网关地址需要位于本机可达的本地子网内；网关 ARP 成功只说明第一跳可达，后续路径、回程路由、NAT、防火墙、安全组、ACL 和应用监听仍会影响访问结果。非对称路由和状态防火墙会让单向可达变成业务失败。",
      "工程排查：先看 ip route、ip route get、默认路由、网关 ARP、网关接口状态和本机掩码，再看中间路由、回程路由、云路由表、NAT/IGW/TGW 目标、安全组和防火墙日志。抓包时确认帧目的 MAC 是否为网关 MAC，IP 目的地址是否保持远端地址。",
      "参考来源：默认网关、本地/远端判断和 TCP/IP 配置参考 Microsoft Learn；VPC route table 的 destination、target、local route、IGW/NAT/TGW 目标参考 AWS VPC 文档；下一跳 MAC 解析参考 RFC 826；网络层转发职责参考 Cloudflare。",
    ],
    typicalProblems: [
      "默认网关的作用是什么",
      "跨网段访问时二层目的 MAC 是谁",
      "网关地址为什么要在本地子网内",
      "默认路由和更精确静态路由如何共同生效",
      "云网络里 Internet Gateway、NAT Gateway、Transit Gateway 分别作为什么目标",
      "网关可达但业务失败如何排查后续路径和回程路由",
    ],
    prerequisites: ["subnet", "arp"],
    related: ["routing", "cidr", "ipv4", "nat", "firewall"],
    order: 16,
  },
  /* <!-- KG_REVIEWED: 路由 | 2026-06-04 | source_count=10 --> */
  /* <!-- KG_EXPLAINED: 路由 | 2026-05-23 | source_count=5 --> */
  {
    sourceRefs: [
      "rfc791-ip",
      "rfc4632-cidr",
      "networklessons-ip-routing",
      "networklessons-longest-prefix",
      "aws-vpc-route-priority",
      "aws-vpc-route-options",
      "cloudflare-ip-routing",
      "aws-vpc-route-tables",
      "cloudflare-network-layer",
      "microsoft-tcpip-networking",
    ],
    id: "routing",
    zh: "路由",
    en: "Routing",
    layer: "network",
    difficulty: "medium",
    summary: "根据目的前缀、最长前缀匹配、下一跳/目标和优先级选择 IP 分组转发路径。",
    explanation: [
      "核心概念：路由是根据目的 IP 选择下一跳和出口接口的过程。路由表通常包含目的前缀、下一跳或目标、出接口、来源和优先级；转发设备按最长前缀匹配选择最具体的可用路径。",
      "工作机制：主机或路由器收到要发送的 IP 包后，查询路由表。命中本地直连前缀时走本地接口和 ARP/NDP；命中静态路由或动态路由时交给对应下一跳；命中默认路由 0.0.0.0/0 或 ::/0 时交给兜底出口。",
      "路由来源：路由可以来自直连网段、静态配置、默认网关、动态路由协议、BGP、VPN/专线传播、云控制面或容器网络插件。云路由表常把 destination CIDR 指向 Internet Gateway、NAT Gateway、Transit Gateway、Peering、网卡、中间设备或 local 目标。",
      "特殊场景：黑洞路由用于显式丢弃或目标不可用；策略路由可以按源地址、标记、入接口或路由表选择路径；ECMP 会在多条等价路径间分流；Anycast 依赖路由把同一 IP 引向拓扑上合适的位置。",
      "边界情况：通信可用需要去程和回程都正确。单向不通、非对称路由、状态防火墙、NAT 出口、MTU 问题、重叠 CIDR、路由传播优先级和云路由表关联错误都会让排查复杂。TTL/Hop Limit 能限制环路，traceroute/mtr 利用它观察中间路径。",
      "工程排查：按本机路由、默认网关、下一跳 ARP/NDP、中间路由、回程路由、云路由表、安全组/ACL、防火墙和 NAT 顺序确认。常用命令包括 ip route、ip route get、traceroute/mtr、ping、tcpdump、云 Reachability Analyzer、流日志和路由传播状态。",
      "参考来源：IPv4 转发和 TTL 参考 RFC 791；CIDR、路由聚合和最长前缀匹配参考 RFC 4632；AWS VPC 文档用于校准 destination/target、local route、route priority 和 blackhole 概念；网络层路由职责参考 Cloudflare；主机 TCP/IP 路由配置参考 Microsoft Learn。",
    ],
    typicalProblems: [
      "路由表如何决定下一跳",
      "最长前缀匹配如何工作",
      "默认路由、静态路由、动态路由分别是什么",
      "黑洞路由、策略路由、ECMP、Anycast 分别用于什么场景",
      "单向异常如何排查回程路由",
      "云 VPC 路由表 target 配错如何定位",
    ],
    prerequisites: ["ip", "gateway"],
    related: ["cidr", "icmp", "nat", "firewall", "subnet"],
    order: 17,
  },
  /* <!-- KG_REVIEWED: ICMP | 2026-05-30 | source_count=4 --> */
  /* <!-- KG_EXPLAINED: ICMP | 2026-05-23 | source_count=4 --> */
  {
    sourceRefs: ["rfc792-icmp", "rfc4443-icmpv6", "cloudflare-network-layer", "xiaolin-coding"],
    id: "icmp",
    zh: "ICMP",
    en: "Internet Control Message Protocol",
    layer: "network",
    difficulty: "easy",
    summary: "用控制和差错消息支撑 ping、traceroute、路径 MTU 发现、不可达反馈和 IPv6 邻居发现。",
    explanation: [
      "核心概念：ICMP 是 IP 层的控制和差错报告协议，用于返回 Destination Unreachable、Time Exceeded、Parameter Problem、Echo Request、Echo Reply 等消息。IPv4 ICMP 由 RFC 792 定义，IPv6 中对应 ICMPv6，由 RFC 4443 定义。",
      "ping 机制：ping 发送 Echo Request，目标主机返回 Echo Reply，用 RTT 和丢包率观察基础可达性。ping 成功说明 ICMP Echo 路径可用，业务访问还要继续验证 DNS、路由、端口、TLS、应用监听和服务日志。",
      "traceroute 机制：traceroute 发送 TTL/Hop Limit 递增的探测包，中间路由器在 TTL 归零时返回 ICMP Time Exceeded，客户端据此看到路径上的跳点。不同系统可能使用 UDP、ICMP 或 TCP 探测，因此防火墙策略会影响结果。",
      "路径 MTU：IPv4 中 DF 位和 Fragmentation Needed，IPv6 中 Packet Too Big，都会通过 ICMP/ICMPv6 把可用 MTU 信息反馈给发送端。过滤这些消息会导致大包黑洞，表现为小请求正常、大响应或 TLS/SSH/文件传输卡住。",
      "特殊情况：ICMP 常被防火墙、云安全组、ACL、运营商或路由器控制面限速，导致 ping 或 traceroute 出现星号、跳点缺失、延迟异常或与业务端口结果不同。NAT、隧道、负载均衡、非对称路由和 IPv6 ICMPv6 放行策略也会改变诊断信号。",
      "工程排查：把 ICMP 当作路径信号之一，与 curl/nc、tcpdump、mtr、traceroute、ip route、安全组、ACL、服务监听和应用日志一起看。IPv6 排查尤其要确认 ICMPv6 Neighbor Discovery、Router Advertisement 和 Packet Too Big 没有被拦截。",
      "参考来源：IPv4 ICMP 类型和语义采用 RFC 792；ICMPv6 Destination Unreachable、Packet Too Big、Time Exceeded 和 Echo 消息采用 RFC 4443；网络层诊断职责参考 Cloudflare；中文图解和排查思路参考小林 coding。",
    ],
    typicalProblems: [
      "ping 的底层过程是什么",
      "ping 通说明哪些信息",
      "traceroute 为什么能看到中间路径",
      "ICMP Destination Unreachable 和 Time Exceeded 分别代表什么",
      "Path MTU Discovery 为什么依赖 ICMP 或 ICMPv6",
      "ICMP 被过滤或限速时如何继续排查业务问题",
    ],
    prerequisites: ["ip"],
    related: ["routing", "ipv6", "firewall", "latency-bandwidth", "observability"],
    order: 18,
  },
  /* <!-- KG_REVIEWED: NAT | 2026-05-30 | source_count=4 --> */
  /* <!-- KG_EXPLAINED: NAT | 2026-05-23 | source_count=4 --> */
  {
    sourceRefs: ["rfc3022-nat", "rfc1918-private-address", "aws-vpc-nat-gateway", "xiaolin-coding"],
    id: "nat",
    zh: "NAT",
    en: "Network Address Translation",
    layer: "network",
    difficulty: "medium",
    summary: "在边界设备上改写地址或端口，用映射表让私有 IPv4 主机共享出口或暴露入口。",
    explanation: [
      "核心概念：NAT 在报文经过边界设备时改写 IP 地址或传输层端口，并维护映射表让返回流量找到原始主机。RFC 3022 描述传统 NAT 模型，常见形态包括 SNAT、DNAT 和端口地址转换 PAT/NAPT。",
      "工作机制：出站访问时，SNAT 把内网源地址改成出口地址；返回包到达 NAT 设备后，再按映射表还原到内网主机。PAT 同时改写源端口，让多个内网连接共享同一个公网 IP；映射表通常以协议、源/目的地址和端口为键维护连接状态。",
      "使用场景：私有 IPv4 主机共享公网出口、云私有子网访问互联网、容器或虚拟机出网、端口映射暴露内网服务、负载入口转发都常见 NAT。AWS NAT Gateway 让私有子网实例主动访问 VPC 外服务，外部服务无法主动向这些实例发起连接。",
      "类型区分：SNAT 改写源地址，常用于出网；DNAT 改写目的地址，常用于端口映射和入口转发；PAT/NAPT 同时改写地址和端口；NAT64/DNS64 可帮助 IPv6-only 环境访问 IPv4 资源。",
      "边界情况：NAT 会改变端到端地址可见性，影响日志归因、ACL、P2P、FTP/SIP 等携带地址信息的协议。连接跟踪表容量、端口耗尽、UDP 映射超时、回程路径不一致、多层 NAT、可用区级 NAT 设计和云安全策略都会造成间歇性失败。",
      "工程排查：看转换规则、连接跟踪表、源/目的地址变化、出口公网 IP、端口占用、NAT 网关指标、丢弃计数、回程路由、防火墙和应用日志里的真实客户端地址。云环境还要确认私有子网默认路由指向 NAT Gateway，NAT 所在公共子网有到 Internet Gateway 的出口。",
      "参考来源：NAT 地址/端口转换和传统 NAT 模型参考 RFC 3022；私有 IPv4 地址空间参考 RFC 1918；AWS NAT Gateway 的私有子网出站访问、公有/私有 NAT 和返回流量转换参考 AWS VPC 文档；中文图解参考小林 coding。",
    ],
    typicalProblems: [
      "SNAT、DNAT、PAT 分别解决什么问题",
      "多个内网主机如何共享一个公网 IP",
      "AWS NAT Gateway 为什么常放在公共子网",
      "NAT 为什么会影响真实客户端 IP 和日志归因",
      "NAT 端口耗尽、UDP 映射超时和回程不一致如何排查",
      "端口映射失败如何从路由、防火墙和连接跟踪定位",
    ],
    prerequisites: ["ipv4", "gateway"],
    related: ["port", "tcp", "udp", "firewall", "load-balancing"],
    order: 19,
  },
  /* <!-- KG_REVIEWED: 端口 | 2026-05-30 | source_count=4 --> */
  /* <!-- KG_EXPLAINED: 端口 | 2026-05-23 | source_count=4 --> */
  {
    sourceRefs: ["iana-service-port-registry", "rfc768-udp", "rfc9293-tcp", "microsoft-tcpip-networking"],
    id: "port",
    zh: "端口",
    en: "Port",
    layer: "transport",
    difficulty: "easy",
    summary: "用 16 位端口把到达同一 IP 的 TCP/UDP 流量分发到具体进程和服务。",
    explanation: [
      "核心概念：端口是传输层的逻辑编号，用来把到达同一 IP 的流量分发给不同进程。IP 定位主机或接口，端口定位主机上的服务；TCP 和 UDP 都使用 16 位端口字段，端口范围是 0 到 65535。",
      "端口范围：IANA 注册表把端口分为 System Ports 0-1023、User Ports 1024-49151、Dynamic/Private Ports 49152-65535。Web 常见 80/443，DNS 常见 53，SSH 常见 22；注册端口只说明约定用途，安全判断仍要看真实流量和服务配置。",
      "连接识别：操作系统用协议、源 IP、源端口、目的 IP、目的端口识别一条 TCP/UDP 流。客户端通常使用临时源端口发起连接，服务端使用固定目的端口监听；同一个数字端口在 TCP 和 UDP 中属于不同协议空间。",
      "监听地址：端口监听还要看绑定地址。127.0.0.1 只接受本机回环访问，0.0.0.0 表示绑定所有 IPv4 地址，具体网卡 IP 只接受该接口地址访问，IPv6 :: 表示 IPv6 监听范围。容器、反向代理和负载均衡还会引入端口映射和转发。",
      "特殊情况：NAT、负载均衡、代理、Kubernetes Service、Docker -p 和安全设备可能改写或转发端口，使应用看到的客户端端口和网络侧端口不同。端口耗尽、TIME-WAIT 堆积、临时端口范围过小和连接跟踪表满都会影响高并发访问。",
      "工程排查：端口监听正常只说明本机进程绑定了地址和端口，实际可达还取决于路由、防火墙、安全组、NAT、协议类型、TLS 和应用握手。常用 ss -lntup/lsof 看监听，用 nc/curl/telnet 测可达，用 tcpdump 看 SYN、RST、UDP 响应，再核对安全策略和端口映射。",
      "参考来源：端口注册、端口范围和服务名参考 IANA Service Name and Transport Protocol Port Number Registry；UDP 源/目的端口字段参考 RFC 768；TCP 源/目的端口和连接语义参考 RFC 9293；TCP/IP 配置排查参考 Microsoft Learn。",
    ],
    typicalProblems: [
      "IP 和端口分别定位什么",
      "System/User/Dynamic 端口范围分别是什么",
      "五元组如何唯一标识连接",
      "TCP 80 和 UDP 80 为什么属于不同协议空间",
      "0.0.0.0、127.0.0.1、具体网卡 IP、:: 监听范围有什么区别",
      "端口监听正常但外部访问失败如何排查",
    ],
    prerequisites: ["ip"],
    related: ["tcp", "udp", "nat", "firewall", "load-balancing", "http", "dns"],
    order: 20,
  },
  /* <!-- KG_REVIEWED: UDP | 2026-05-30 | source_count=5 --> */
  /* <!-- KG_EXPLAINED: UDP | 2026-05-23 | source_count=5 --> */
  {
    sourceRefs: ["rfc768-udp", "rfc1035-dns", "rfc9000-quic", "rfc791-ip", "xiaolin-coding"],
    id: "udp",
    zh: "UDP",
    en: "User Datagram Protocol",
    layer: "transport",
    difficulty: "easy",
    summary: "用最小头部提供无连接数据报传输，把可靠性、顺序和拥塞友好交给上层设计。",
    explanation: [
      "核心概念：UDP 是无连接的数据报协议，RFC 768 定义的头部只有源端口、目的端口、长度和校验和四个字段，最小长度 8 字节。它保留消息边界，应用一次发送通常对应一个 UDP 数据报。",
      "工作机制：发送端把一段应用消息交给 UDP，UDP 加上端口、长度和校验和后交给 IP；接收端根据目的端口把数据报交给对应进程。UDP 本身提供最小传输能力，顺序、重传、去重、流控、拥塞控制和会话状态由应用或上层协议设计。",
      "使用场景：UDP 常用于 DNS 查询、实时音视频、游戏、监控上报、日志采集、隧道和 QUIC/HTTP/3。它省去连接建立过程，单次请求延迟低，应用可以按业务特性选择丢弃、补偿、重试或前向纠错。",
      "典型案例：DNS 经典查询使用 UDP 53，响应过大或区域传输等场景会使用 TCP；QUIC 基于 UDP 构建连接、可靠流、拥塞控制、TLS 集成和连接迁移，说明 UDP 可以作为更高层传输协议的承载底座。",
      "边界情况：UDP 数据报过大可能触发 IP 分片，任一分片丢失会导致整包不可用；NAT 下 UDP 映射依赖超时和保活；防火墙、负载均衡、运营商策略和企业网络可能限制 UDP；公网 UDP 服务还要处理放大攻击、伪造源地址、乱序、重复和限速。",
      "工程排查：排查 UDP 重点依赖抓包、服务日志、NAT 映射、MTU、超时、应用层序列号和服务端限流。用 tcpdump 看数据报是否到达，用 ss -u 看监听，用 dig/nc/socat 做探测，用 mtr/ping 观察路径质量，再结合应用日志判断丢包或超时发生在哪一段。",
      "参考来源：UDP 报文格式、长度和校验和采用 RFC 768；DNS over UDP/TCP、TC 截断位和 53 端口行为参考 RFC 1035；QUIC over UDP 的可靠流、低延迟建连和连接迁移参考 RFC 9000；IP 分片背景参考 RFC 791；中文图解参考小林 coding。",
    ],
    typicalProblems: [
      "UDP 头部有哪些字段",
      "UDP 和 TCP 的核心差异是什么",
      "UDP 如何在应用层实现可靠性",
      "DNS 为什么常用 UDP，什么时候会用 TCP",
      "QUIC 为什么可以基于 UDP 实现可靠传输",
      "UDP 分片、NAT 超时和防火墙限制如何排查",
    ],
    prerequisites: ["port"],
    related: ["dns", "quic", "nat", "tcp", "firewall", "latency-bandwidth"],
    order: 21,
  },
  /* <!-- KG_REVIEWED: TCP | 2026-05-30 | source_count=5 --> */
  /* <!-- KG_EXPLAINED: TCP | 2026-05-23 | source_count=5 --> */
  {
    sourceRefs: ["rfc9293-tcp", "rfc5681-tcp-congestion", "rfc6298-tcp-rto", "rfc7323-tcp-high-performance", "xiaolin-coding"],
    id: "tcp",
    zh: "TCP",
    en: "Transmission Control Protocol",
    layer: "transport",
    difficulty: "medium",
    summary: "用连接、字节流、序列号、ACK、窗口、重传和拥塞控制提供可靠有序传输。",
    explanation: [
      "核心概念：TCP 是面向连接的可靠字节流协议。RFC 9293 定义了端口、序列号、确认号、窗口、控制位、状态机和连接语义；它把应用字节流切分成段，在接收端按序重组后交给应用。",
      "工作机制：连接建立时通过 SYN、SYN-ACK、ACK 同步双方初始序列号和收发能力；传输时用 sequence number 标识字节位置，用 ACK 表示下一个期望字节，用窗口控制未确认数据量；丢包或超时后触发重传。",
      "可靠性来源：TCP 通过确认、重传、校验、按序交付、流量控制和拥塞控制提供可靠有序传输。RFC 5681 定义慢启动、拥塞避免、快速重传和快速恢复；RFC 6298 定义 RTO 计算；RFC 7323 用 Window Scale 支持高带宽高延迟链路。",
      "使用场景：TCP 适合 HTTP/1.1、HTTP/2、数据库连接、SSH、SMTP、文件传输、消息队列和多数需要可靠传输的业务协议。它让应用专注协议语义，把丢包恢复、乱序整理和传输节奏交给传输层。",
      "特殊情况：TCP 是字节流，应用层需要自己定义消息边界，因此会遇到粘包、半包和拆包，需要长度字段、分隔符或协议帧解决。长连接、连接池、keepalive、Nagle、延迟 ACK、TLS、代理和负载均衡都会影响实际行为。",
      "工程排查：连接失败看 SYN、SYN-ACK、ACK、RST 和防火墙；慢连接看 RTT、重传、窗口、cwnd/rwnd、拥塞算法和应用读取速度；连接泄漏看状态机、TIME-WAIT、CLOSE-WAIT 和文件描述符。常用 ss、tcpdump、Wireshark、mtr、iperf 和内核指标。",
      "参考来源：TCP 协议、状态机、序列号、ACK、窗口和连接语义采用 RFC 9293；拥塞控制参考 RFC 5681；重传计时参考 RFC 6298；高带宽高延迟窗口扩展参考 RFC 7323；中文图解参考小林 coding。",
    ],
    typicalProblems: [
      "TCP 如何保证可靠有序传输",
      "TCP 为什么是字节流，粘包半包如何处理",
      "三次握手里的 seq/ack 有什么作用",
      "流量控制和拥塞控制分别保护什么",
      "重传、零窗口、RST、TIME-WAIT、CLOSE-WAIT 如何排查",
      "TCP 和 UDP/QUIC 如何选择",
    ],
    prerequisites: ["port", "ip"],
    related: ["tcp-handshake", "tcp-state", "tcp-retransmission", "tcp-flow-control", "tcp-congestion-control", "udp", "http"],
    order: 22,
  },
  /* <!-- KG_REVIEWED: TCP 三次握手 | 2026-05-30 | source_count=7 --> */
  /* <!-- KG_EXPLAINED: TCP 三次握手 | 2026-05-23 | source_count=6 --> */
  {
    sourceRefs: ["rfc9293-tcp", "cloudmylab-tcp-handshake", "guru99-tcp-handshake", "geeksforgeeks-tcp-handshake", "cs-notes", "javaguide", "xiaolin-coding"],
    id: "tcp-handshake",
    zh: "TCP 三次握手",
    en: "TCP Three-Way Handshake",
    layer: "transport",
    difficulty: "medium",
    summary: "通过 SYN、SYN-ACK、ACK 同步双方初始序列号，确认双向收发能力并进入 ESTABLISHED。",
    explanation: [
      "概念定义：TCP 三次握手是 TCP 连接在传输应用数据前的建立流程。双方要交换并确认各自的初始序列号 ISN，确保后续字节流可以用 sequence number 和 ACK 可靠定位。",
      "三步过程：第一步客户端主动打开连接，发送 SYN，seq=x，进入 SYN-SENT；第二步服务器在 LISTEN 收到 SYN 后返回 SYN-ACK，seq=y，ack=x+1，进入 SYN-RECEIVED；第三步客户端返回 ACK，ack=y+1，连接进入 ESTABLISHED。",
      "官方语义：RFC 9293 把双方同步 ISN 的过程拆成“我发 SYN、你确认我的 SYN、你发 SYN、我确认你的 SYN”。其中服务器确认客户端 SYN 与发送自身 SYN 可以合并到一个 SYN-ACK 报文里，因此形成三次消息交换。",
      "核心价值：握手同时完成两件事：同步客户端和服务器各自的初始序列号，确认客户端到服务器、服务器到客户端两个方向都具备发送和接收能力。第三次 ACK 让服务器确认自己的 SYN 已被客户端收到。",
      "特殊情况：SYN 可以携带选项，例如 MSS、Window Scale、SACK Permitted、Timestamp；TLS 会在 TCP 建连之后继续完成安全握手；TCP Fast Open 等机制可能让部分数据更早出现；SYN flood 会让服务器半连接队列、backlog 或 SYN cookie 策略成为关键。",
      "工程排查：SYN-SENT 堆积重点看客户端出口、目标 IP/端口、路由、防火墙和安全组；SYN-RECEIVED 堆积重点看服务端 backlog、半连接队列、SYN flood、防火墙和回包路径。抓包时按 SYN、SYN-ACK、ACK 三行检查方向、seq/ack、重传、RST 和耗时。",
      "参考来源：ISN 同步、SYN/ACK 合并为 three-way handshake、SYN-SENT/SYN-RECEIVED/ESTABLISHED 状态采用 RFC 9293；流程图和图解辅助参考 CloudMyLab、Guru99、GeeksForGeeks；中文学习语境参考 CS-Notes、JavaGuide 与小林 coding。",
    ],
    typicalProblems: [
      "为什么 TCP 建连需要三次握手",
      "三次握手里的 seq 和 ack 如何计算",
      "SYN、SYN-ACK、ACK 分别让两端确认了什么",
      "第三次 ACK 在连接建立中承担什么作用",
      "SYN 选项、MSS、Window Scale、SACK 在握手中如何协商",
      "SYN flood、SYN-SENT 或 SYN-RECEIVED 堆积如何排查",
    ],
    prerequisites: ["tcp"],
    related: ["tcp-four-way-wave", "tcp-state", "tcp-retransmission", "firewall", "load-balancing"],
    order: 23,
  },
  /* <!-- KG_REVIEWED: TCP 四次挥手 | 2026-05-30 | source_count=8 --> */
  /* <!-- KG_EXPLAINED: TCP 四次挥手 | 2026-05-23 | source_count=7 --> */
  {
    sourceRefs: ["rfc9293-tcp", "geeksforgeeks-tcp-termination", "ipwithease-tcp-termination", "tcpipguide-tcp-termination", "tcpipguide-time-wait", "cs-notes", "javaguide", "xiaolin-coding"],
    id: "tcp-four-way-wave",
    zh: "TCP 四次挥手",
    en: "TCP Four-Way Termination",
    layer: "transport",
    difficulty: "medium",
    summary: "通过 FIN/ACK 分别关闭 TCP 双向字节流，并用 TIME-WAIT 吸收迟到报文和最终 ACK 丢失。",
    explanation: [
      "概念定义：TCP 四次挥手是 TCP 连接的正常关闭流程。TCP 是全双工字节流，A 到 B 和 B 到 A 两个发送方向可以独立关闭；一端发送 FIN 表示本方向字节发送完毕，另一端返回 ACK 确认收到。",
      "常见流程：主动关闭方从 ESTABLISHED 发送 FIN 后进入 FIN-WAIT-1；被动关闭方确认 FIN 后进入 CLOSE-WAIT；主动关闭方收到 ACK 后进入 FIN-WAIT-2；被动关闭方应用完成收尾后发送 FIN 并进入 LAST-ACK；主动关闭方返回最终 ACK 后进入 TIME-WAIT。",
      "四步原因：第一次 FIN 关闭主动方发送方向，第二次 ACK 确认该方向关闭；被动方仍可能继续发送剩余数据，所以第三次 FIN 由被动方在应用 close 后发出，第四次 ACK 确认最终释放。ACK 和 FIN 也可能在部分实现和时机下合并，状态语义仍围绕两个方向独立关闭。",
      "TIME-WAIT：主动关闭方进入 TIME-WAIT，等待 2MSL 时间窗口，确保对端收到最终 ACK，并隔离旧连接的迟到报文。短连接、高并发客户端或代理容易产生大量 TIME-WAIT，需要结合连接复用、临时端口范围、keepalive 和关闭方向分析。",
      "特殊情况：双方同时关闭会经过 CLOSING；RST 表示异常中止，会直接丢弃连接状态；半关闭允许一端停止发送但继续接收；FIN 丢失、最终 ACK 丢失和链路重传会延长关闭过程。",
      "工程排查：CLOSE-WAIT 堆积通常指向本地应用收到 FIN 后没有及时 close；FIN-WAIT-2 堆积重点看对端是否发送 FIN；LAST-ACK 堆积重点看最终 ACK 或链路；TIME-WAIT 过多重点看主动关闭侧、短连接比例和端口复用。抓包时按 FIN、ACK、FIN、ACK、RST 和状态变化检查。",
      "参考来源：正常关闭序列、同步关闭、TIME-WAIT 状态和 RST 异常关闭采用 RFC 9293；图解辅助参考 GeeksForGeeks、The TCP/IP Guide、IP With Ease；中文学习语境参考 CS-Notes、JavaGuide 与小林 coding。",
    ],
    typicalProblems: [
      "TCP 关闭为什么常见为四次挥手",
      "FIN 和 ACK 分别代表什么",
      "主动关闭方为什么进入 TIME-WAIT",
      "CLOSE-WAIT 过多通常说明什么",
      "FIN-WAIT-2 或 LAST-ACK 堆积如何排查",
      "RST 异常关闭和 FIN 正常关闭有什么区别",
    ],
    prerequisites: ["tcp-handshake"],
    related: ["tcp-state", "tcp", "tcp-retransmission", "port", "http"],
    order: 24,
  },
  /* <!-- KG_REVIEWED: TCP 状态机 | 2026-05-30 | source_count=7 --> */
  /* <!-- KG_EXPLAINED: TCP 状态机 | 2026-05-23 | source_count=7 --> */
  {
    sourceRefs: ["rfc9293-tcp-state-machine", "tcpipguide-tcp-fsm", "ibm-tcp-connection-status", "krownet-tcp-states", "cs-notes", "javaguide", "xiaolin-coding"],
    id: "tcp-state",
    zh: "TCP 状态机",
    en: "TCP State Machine",
    layer: "transport",
    difficulty: "hard",
    summary: "把 TCP 连接看成由应用调用、SYN/ACK/FIN/RST 报文和计时器驱动的有限状态机。",
    explanation: [
      "概念定义：TCP 状态机描述一条 TCP 连接从创建到释放的状态迁移。RFC 9293 列出 LISTEN、SYN-SENT、SYN-RECEIVED、ESTABLISHED、FIN-WAIT-1、FIN-WAIT-2、CLOSE-WAIT、CLOSING、LAST-ACK、TIME-WAIT 和 CLOSED；CLOSED 表示没有 TCB 和连接状态。",
      "事件来源：状态迁移由应用调用和报文事件共同触发。应用侧有 active OPEN、passive OPEN、SEND、RECEIVE、CLOSE、ABORT、STATUS；报文侧重点看 SYN、ACK、FIN、RST；计时器负责重传、保活和 TIME-WAIT 等超时迁移。",
      "建连路径：服务端 passive OPEN 后进入 LISTEN，等待连接请求；客户端 active OPEN 发送 SYN 后进入 SYN-SENT；服务端收到 SYN 并发送 SYN-ACK 后进入 SYN-RECEIVED；客户端返回 ACK，双方进入 ESTABLISHED，应用数据可以正常传输。",
      "关闭路径：主动关闭方从 ESTABLISHED 发送 FIN 进入 FIN-WAIT-1，收到 ACK 后进入 FIN-WAIT-2，收到对端 FIN 后进入 TIME-WAIT；被动关闭方收到 FIN 进入 CLOSE-WAIT，应用调用 close 后发送 FIN 并进入 LAST-ACK，最终 ACK 到达后进入 CLOSED。",
      "特殊路径：双方同时关闭会经过 CLOSING；RST 会中止连接并清理状态；TIME-WAIT 用于吸收迟到报文和处理最终 ACK 丢失；SYN-RECEIVED 大量堆积常见于半连接压力、SYN flood、回包失败或 backlog 紧张。",
      "工程排查：LISTEN 看服务是否绑定地址和端口；SYN-SENT 看客户端到服务端路径和防火墙；SYN-RECEIVED 看服务端半连接队列和回包；CLOSE-WAIT 看本地应用是否及时 close；FIN-WAIT-2 看对端是否发 FIN；TIME-WAIT 看主动关闭侧、短连接比例和端口压力。常用 ss -ant、netstat、lsof、tcpdump 和连接状态指标。",
      "参考来源：状态列表、状态含义和状态迁移采用 RFC 9293 3.3.2；状态图辅助参考 The TCP/IP Guide 与 Krow Network TCP 状态图；运维监控和实时状态计数参考 IBM TCP connection status 资料；中文学习语境参考 CS-Notes、JavaGuide 与小林 coding。",
    ],
    typicalProblems: [
      "TCP 常见状态如何流转",
      "LISTEN、SYN-SENT、SYN-RECEIVED、ESTABLISHED 分别代表什么",
      "ESTABLISHED 到 FIN-WAIT-1、CLOSE-WAIT 的触发条件是什么",
      "TIME-WAIT、CLOSE-WAIT、FIN-WAIT-2、LAST-ACK 分别如何排查",
      "CLOSING 和 RST 在什么场景出现",
      "如何通过 ss/netstat、抓包和连接状态指标定位问题",
    ],
    prerequisites: ["tcp-handshake", "tcp-four-way-wave"],
    related: ["tcp-retransmission", "tcp", "port", "observability"],
    order: 25,
  },
  /* <!-- KG_REVIEWED: TCP 重传 | 2026-05-30 | source_count=5 --> */
  /* <!-- KG_EXPLAINED: TCP 重传 | 2026-05-23 | source_count=4 --> */
  {
    sourceRefs: ["rfc9293-tcp", "rfc6298-tcp-rto", "rfc5681-tcp-congestion", "rfc2018-tcp-sack", "xiaolin-coding"],
    id: "tcp-retransmission",
    zh: "TCP 重传",
    en: "TCP Retransmission",
    layer: "transport",
    difficulty: "hard",
    summary: "用 ACK、RTO、重复 ACK 与 SACK 恢复丢失字节流。",
    explanation: [
      "核心概念：TCP 重传是在某段字节没有得到确认时，再次发送对应序列号范围。发送方用 sequence number 标识字节位置，用 cumulative ACK 推进已确认边界，重传让可靠字节流能穿过会丢包、乱序和拥塞的网络。",
      "触发机制：超时重传由 RTO 计时器触发，RFC 6298 规定 RTO 基于 RTT 采样、平滑 RTT 和 RTT 抖动动态计算。快速重传通常由多个重复 ACK 触发，发送方据此推断中间某段缺失，并在等待超时前补发。",
      "SACK 场景：Selective ACK 让接收端告诉发送方已经收到哪些非连续字节块。开启 SACK 后，发送方能更准确地补发缺口，在连续丢包或乱序明显的链路上减少重复发送和恢复时间。",
      "拥塞影响：重传经常表示路径出现丢包、队列溢出或接收端处理压力。RFC 5681 把重传信号和拥塞控制联动，超时、重复 ACK、快速恢复都会影响拥塞窗口，最终改变吞吐。",
      "排查方法：抓包时先看重传类型、seq/ack、重复 ACK、SACK block、RTT、窗口大小和发生位置，再结合网卡错误、交换机丢弃、无线质量、限速策略、路径 MTU、应用读取速度和服务端负载判断根因。抓包点靠近发送端或接收端，看到的重传数量可能不同。",
      "参考来源：TCP 序列号、ACK 与重传语义采用 RFC 9293；RTO 算法参考 RFC 6298；快速重传和拥塞响应参考 RFC 5681；SACK 选项参考 RFC 2018；中文图解参考小林 coding。"
    ],
    typicalProblems: [
      "超时重传和快速重传分别由什么触发",
      "重复 ACK、乱序和丢包如何区分",
      "SACK 为什么能提升多段丢包恢复效率",
      "大量 TCP Retransmission 常见根因有哪些",
      "抓包点位置为什么会影响重传判断",
      "重传率升高为什么会拉低吞吐",
    ],
    prerequisites: ["tcp"],
    related: ["tcp-congestion-control", "tcp-flow-control", "tcp-state", "latency-bandwidth", "observability"],
    order: 26,
  },
  /* <!-- KG_REVIEWED: TCP 流量控制 | 2026-05-30 | source_count=4 --> */
  /* <!-- KG_EXPLAINED: TCP 流量控制 | 2026-05-23 | source_count=4 --> */
  {
    sourceRefs: ["rfc9293-tcp", "rfc7323-tcp-high-performance", "microsoft-latency-throughput", "xiaolin-coding"],
    id: "tcp-flow-control",
    zh: "TCP 流量控制",
    en: "TCP Flow Control",
    layer: "transport",
    difficulty: "hard",
    summary: "用接收窗口把发送速度约束在接收端可承受范围内。",
    explanation: [
      "核心概念：TCP 流量控制由接收端主导，接收端在 ACK 的 Window 字段中通告还能接收的字节数。发送端据此维护发送窗口，让未确认数据量跟随接收端缓冲能力变化。",
      "滑动窗口：发送窗口会随着 ACK 推进，已确认字节离开窗口，新字节进入窗口。应用读取快、内核缓冲充足时，接收窗口通常变大；应用读取慢或缓冲紧张时，接收窗口会缩小。",
      "特殊场景：零窗口表示接收端暂时没有可用接收空间，发送方会进入等待并通过窗口探测确认窗口是否恢复。Window Scale 选项在握手阶段协商，把 16 位窗口字段放大，支撑高带宽高 RTT 链路中的大窗口传输。",
      "吞吐影响：单连接吞吐受接收窗口、拥塞窗口、发送缓冲、RTT 和应用读写速度共同限制。高带宽时延积链路需要足够大的在途数据量，窗口过小会让链路空转，表现为带宽充足但单连接速度低。",
      "排查方法：抓包看 advertised window、calculated window、window scale、zero window、window update 和 window full；主机侧看 socket buffer、自动调优、应用读取、内核参数和内存压力。代理、TLS 终止、负载均衡和中间设备也可能改变窗口表现。",
      "参考来源：接收窗口、发送窗口和窗口管理采用 RFC 9293；Window Scale 选项参考 RFC 7323；延迟、吞吐和窗口关系参考 Microsoft Learn；中文图解参考小林 coding。"
    ],
    typicalProblems: [
      "接收窗口如何限制发送方",
      "Zero Window 和 Window Update 分别表示什么",
      "Window Scale 为什么需要在握手阶段协商",
      "高 RTT 链路单连接吞吐低如何分析",
      "流量控制和拥塞控制如何共同限制发送窗口",
      "应用读取慢为什么会导致接收窗口缩小",
    ],
    prerequisites: ["tcp"],
    related: ["tcp-congestion-control", "tcp-retransmission", "latency-bandwidth", "observability"],
    order: 27,
  },
  /* <!-- KG_REVIEWED: TCP 拥塞控制 | 2026-05-30 | source_count=5 --> */
  /* <!-- KG_EXPLAINED: TCP 拥塞控制 | 2026-05-23 | source_count=5 --> */
  {
    sourceRefs: ["rfc5681-tcp-congestion", "rfc9293-tcp", "rfc6298-tcp-rto", "microsoft-latency-throughput", "xiaolin-coding"],
    id: "tcp-congestion-control",
    zh: "TCP 拥塞控制",
    en: "TCP Congestion Control",
    layer: "transport",
    difficulty: "hard",
    summary: "用拥塞窗口根据 ACK、丢包和超时调节进入网络的数据量。",
    explanation: [
      "核心概念：TCP 拥塞控制由发送端维护拥塞窗口 cwnd，限制同一时刻进入网络的未确认数据。实际可发送窗口通常受 cwnd、接收窗口 rwnd、发送缓冲和实现限制共同约束。",
      "四个基本算法：RFC 5681 定义慢启动、拥塞避免、快速重传和快速恢复。慢启动用 ACK 节奏快速探测容量，拥塞避免让窗口更平滑增长，快速重传用重复 ACK 提前补发缺失段，快速恢复在丢包后逐步回到稳定发送。",
      "丢包信号：重复 ACK 常表示某段数据缺失且后续数据仍在到达，RTO 超时表示恢复信号更弱、路径拥塞或 ACK 中断更明显。两类事件都会让发送端降低 cwnd，RTO 通常带来更剧烈的恢复过程。",
      "工程边界：不同系统可能采用 Reno、CUBIC、BBR 等算法，窗口增长、丢包响应和带宽探测方式会不同。跨地域、高 RTT、轻微丢包、无线抖动、缓冲膨胀、限速队列和中间代理都会显著改变吞吐曲线。",
      "排查方法：低吞吐要同时看 RTT、重传率、重复 ACK、RTO、cwnd、rwnd、MSS、BDP、限速策略、队列丢弃、应用发送速度和服务端处理能力。iperf、ss、tcpdump、Wireshark、系统 TCP 指标和链路监控适合组合使用。",
      "参考来源：慢启动、拥塞避免、快速重传和快速恢复采用 RFC 5681；TCP 基础与重传语义参考 RFC 9293；RTO 计算参考 RFC 6298；延迟与吞吐关系参考 Microsoft Learn；中文图解参考小林 coding。"
    ],
    typicalProblems: [
      "cwnd、rwnd 和实际发送窗口是什么关系",
      "慢启动为什么增长很快",
      "拥塞避免如何稳定探测带宽",
      "重复 ACK 和 RTO 对窗口变化有什么影响",
      "CUBIC、Reno、BBR 的排查表现可能有哪些差异",
      "高 RTT 链路为什么需要结合 BDP 分析吞吐",
    ],
    prerequisites: ["tcp-retransmission", "tcp-flow-control"],
    related: ["latency-bandwidth", "observability"],
    order: 28,
  },
  /* <!-- KG_REVIEWED: DNS | 2026-05-30 | source_count=5 --> */
  /* <!-- KG_EXPLAINED: DNS | 2026-05-23 | source_count=5 --> */
  {
    sourceRefs: ["rfc1034-dns", "rfc1035-dns", "cloudflare-how-internet-works", "mdn-how-internet-works", "xiaolin-coding"],
    id: "dns",
    zh: "DNS",
    en: "Domain Name System",
    layer: "application",
    difficulty: "easy",
    summary: "把域名解析成地址和其他资源记录的分布式命名系统。",
    explanation: [
      "核心概念：DNS 是分布式层级命名系统，负责把域名映射到 IP、邮件服务器、别名、文本校验等资源记录。RFC 1034 定义命名空间、区域、解析器和权威服务器模型，RFC 1035 定义 DNS 报文与资源记录格式。",
      "解析链路：客户端通常先问本机 stub resolver，本机再把请求交给递归解析器。递归解析器按根服务器、TLD 服务器、权威服务器的链路逐级获取答案，并把结果按 TTL 缓存后返回客户端。",
      "记录类型：A 记录返回 IPv4，AAAA 返回 IPv6，CNAME 指向规范名称，MX 指向邮件服务器，TXT 常用于域名所有权、SPF、DKIM 等文本声明，NS 和 SOA 描述区域授权与管理信息。",
      "缓存与生效：TTL 决定递归解析器、本机和浏览器缓存一条记录的时间。域名修改后的可见时间取决于旧记录剩余 TTL、各级缓存策略、权威服务器同步、负缓存和客户端本地缓存。",
      "特殊场景：普通查询多用 UDP 53，响应较大、区域传输、DNSSEC 或部分回退场景会使用 TCP。CNAME 链、A/AAAA 双栈、CDN 调度、EDNS Client Subnet、split-horizon DNS 和本地 hosts 都会影响最终解析结果。",
      "排查方法：用 dig/nslookup 分别查询递归解析器和权威服务器，观察 ANSWER、AUTHORITY、TTL、CNAME 链、A/AAAA 差异和返回码；再结合本机缓存、浏览器缓存、运营商 DNS、CDN 控制台和应用日志定位问题。",
      "参考来源：DNS 层级模型、区域和解析器采用 RFC 1034；报文格式、资源记录和 UDP/TCP 规则参考 RFC 1035；Web 访问流程参考 Cloudflare 与 MDN；中文图解参考小林 coding。"
    ],
    typicalProblems: [
      "递归解析器和权威 DNS 分别负责什么",
      "TTL 为什么会影响域名修改生效时间",
      "A、AAAA、CNAME、MX、TXT 常见用途是什么",
      "DNS 查询什么时候会走 TCP",
      "解析结果在不同地区不一致怎么排查",
      "域名解析成功后访问仍然失败该继续看哪些层",
    ],
    prerequisites: ["udp", "ip"],
    related: ["http", "cdn", "tls", "observability"],
    order: 29,
  },
  /* <!-- KG_REVIEWED: HTTP | 2026-05-30 | source_count=5 --> */
  /* <!-- KG_EXPLAINED: HTTP | 2026-05-23 | source_count=4 --> */
  {
    sourceRefs: ["rfc9110-http", "mdn-http-overview", "mdn-http-caching", "cloudflare-how-internet-works", "xiaolin-coding"],
    id: "http",
    zh: "HTTP",
    en: "Hypertext Transfer Protocol",
    layer: "application",
    difficulty: "easy",
    summary: "用请求、响应和语义规则在 Web 中传递资源状态。",
    explanation: [
      "核心概念：HTTP 是应用层请求/响应协议，客户端用 URL 定位资源，用方法表达意图，用 Header 传递元信息，用 Body 承载表示数据。RFC 9110 定义 HTTP 语义，这些语义可以运行在 TCP、TLS、HTTP/2 或 QUIC 等不同传输之上。",
      "请求结构：一个 HTTP 请求通常由方法、路径、协议版本、Header 和可选 Body 组成。GET 常用于获取资源，POST 常用于提交处理，PUT/PATCH/DELETE 用于表达资源更新或删除，具体幂等性和副作用由服务端实现与接口约定共同决定。",
      "响应结构：响应包含状态码、Header 和可选 Body。2xx 表示请求已被处理，3xx 表示重定向或缓存相关结果，4xx 表示客户端侧请求条件存在问题，5xx 表示服务端处理链路出现故障。",
      "状态与会话：HTTP 语义本身按单次请求建模，登录态通常由 Cookie、Session、Bearer Token、mTLS 或网关鉴权维护。缓存、压缩、内容协商、Range、重定向和连接复用都会影响真实访问体验。",
      "工程边界：状态码只描述 HTTP 层结果，业务成功还要看响应体、业务码和副作用。代理、CDN、浏览器缓存、CORS、限流、超时、TLS、DNS、连接池和后端依赖都会改变同一个请求的最终表现。",
      "排查方法：从 URL、方法、状态码、Header、Body、重定向链、缓存命中、Cookie/Authorization、CORS、代理日志、服务端访问日志和链路追踪逐层检查。curl -v、浏览器 Network 面板和网关日志是最常用入口。",
      "参考来源：HTTP 方法、状态码、Header 和语义采用 RFC 9110；入门解释参考 MDN HTTP overview；缓存行为参考 MDN HTTP caching；Web 请求流程参考 Cloudflare；中文图解参考小林 coding。"
    ],
    typicalProblems: [
      "HTTP 请求和响应分别由哪些部分组成",
      "GET、POST、PUT、PATCH、DELETE 的语义如何区分",
      "2xx、3xx、4xx、5xx 状态码分别表示什么",
      "HTTP 如何通过 Cookie 或 Token 维持登录态",
      "缓存、代理和重定向为什么会影响接口结果",
      "排查一次慢请求要看哪些 HTTP 信息",
    ],
    prerequisites: ["tcp", "dns"],
    related: ["https", "http-cache", "http2", "websocket", "load-balancing"],
    order: 30,
  },
  /* <!-- KG_REVIEWED: HTTPS | 2026-05-30 | source_count=4 --> */
  /* <!-- KG_EXPLAINED: HTTPS | 2026-05-23 | source_count=4 --> */
  {
    sourceRefs: ["rfc9110-http", "rfc8446-tls13", "rfc5280-pkix", "xiaolin-coding"],
    id: "https",
    zh: "HTTPS",
    en: "HTTPS",
    layer: "security",
    difficulty: "medium",
    summary: "把 HTTP 放进 TLS 加密通道，提供身份认证与传输保护。",
    explanation: [
      "核心概念：HTTPS 是 HTTP over TLS，HTTP 负责资源语义，TLS 负责服务器身份认证、密钥协商、加密和完整性保护。浏览器看到 HTTPS 时，会先完成 TLS 安全通道，再在通道内发送 HTTP 请求。",
      "握手流程：客户端发送 ClientHello，携带支持的 TLS 版本、加密套件、SNI 和 ALPN 等信息；服务端返回证书和协商结果，双方完成密钥交换并派生会话密钥。TLS 1.3 把握手往返压缩得更短，并支持会话恢复。",
      "证书校验：客户端会验证证书链是否能连到受信任根 CA，检查域名是否匹配 SAN、证书是否在有效期内、用途是否合适、签名算法和撤销状态是否满足策略。中间证书缺失、域名错配和系统时间错误是高频故障。",
      "特殊场景：SNI 让同一 IP 可以承载多个站点证书，ALPN 用于协商 HTTP/2 或 HTTP/1.1。TLS 1.3 的 0-RTT 可以减少重连延迟，但存在重放风险，适合幂等请求和严格服务端保护策略。",
      "安全边界：HTTPS 保护传输链路上的数据机密性与完整性；业务鉴权、XSS、CSRF、服务端漏洞、终端恶意软件和日志脱敏仍需要应用层安全设计。企业代理或调试代理可能以受信根证书方式终止 TLS。",
      "排查方法：先确认 DNS 指向和目标端口，再看 SNI、证书链、SAN、有效期、TLS 版本、Cipher、ALPN、OCSP、系统时间、代理和负载均衡证书配置。curl -v、openssl s_client 和浏览器安全面板很实用。",
      "参考来源：HTTP 语义采用 RFC 9110；TLS 1.3 握手、会话恢复和 0-RTT 参考 RFC 8446；证书链与验证规则参考 RFC 5280；中文图解参考小林 coding。"
    ],
    typicalProblems: [
      "HTTPS 握手主要协商哪些内容",
      "证书链如何证明服务器身份",
      "SNI 和 ALPN 在 HTTPS 中有什么作用",
      "TLS 1.3 的 0-RTT 有哪些使用边界",
      "证书过期、域名不匹配和中间证书缺失如何排查",
      "HTTPS 已启用后还需要哪些应用层安全措施",
    ],
    prerequisites: ["http", "tls"],
    related: ["certificate", "http2", "http3", "dns", "observability"],
    order: 31,
  },
  /* <!-- KG_REVIEWED: HTTP 缓存 | 2026-05-30 | source_count=4 --> */
  /* <!-- KG_EXPLAINED: HTTP 缓存 | 2026-05-23 | source_count=4 --> */
  {
    sourceRefs: ["rfc9111-http-cache", "mdn-http-caching", "cloudflare-cache-revalidation", "xiaolin-coding"],
    id: "http-cache",
    zh: "HTTP 缓存",
    en: "HTTP Cache",
    layer: "application",
    difficulty: "medium",
    summary: "用缓存副本、鲜度和验证机制降低重复传输成本。",
    explanation: [
      "核心概念：HTTP 缓存把响应副本保存在浏览器、代理或 CDN 中，后续请求可直接复用或向源站验证。RFC 9111 定义缓存存储、鲜度、验证、失效、共享缓存和私有缓存语义。",
      "鲜度控制：Cache-Control 是核心控制头，max-age 表示副本可直接复用的秒数，s-maxage 面向共享缓存，public/private 决定共享范围，no-store 表示敏感响应应避免存储，no-cache 表示使用前要向源站验证。",
      "验证缓存：ETag 配合 If-None-Match，Last-Modified 配合 If-Modified-Since。服务器返回 304 时，客户端继续使用本地副本并更新元信息，适合 HTML、API 或更新时间可变的资源。",
      "缓存键与 Vary：缓存命中取决于 cache key，常见组成包括 URL、Host、查询参数和 Vary 指定的请求头。Accept-Encoding、Accept-Language、Cookie、Authorization 和自定义 Header 都可能让同一资源形成多个缓存副本。",
      "CDN 场景：共享缓存还会关注 Age、Surrogate-Control、stale-while-revalidate、stale-if-error、purge、invalidation 和回源验证。静态资源常用文件名哈希加长 TTL，HTML 与个性化接口需要精确的 private、no-store 或验证策略。",
      "排查方法：浏览器 Network 面板看 from memory/disk cache、304、Age、Cache-Control、ETag、Vary 和 CDN 状态头；服务端看版本号、缓存键、回源日志、purge 范围和边缘节点命中率。",
      "参考来源：HTTP 缓存标准采用 RFC 9111；浏览器缓存行为和字段解释参考 MDN；CDN revalidation 参考 Cloudflare；中文图解参考小林 coding。"
    ],
    typicalProblems: [
      "强缓存和验证缓存分别如何工作",
      "Cache-Control 中 max-age、no-cache、no-store、private、s-maxage 如何使用",
      "ETag 和 Last-Modified 的验证流程是什么",
      "Vary 为什么会影响缓存命中率",
      "静态资源和 HTML 页面应该采用什么缓存策略",
      "CDN 缓存未刷新或命中率低如何排查",
    ],
    prerequisites: ["http"],
    related: ["cdn", "http", "observability"],
    order: 32,
  },
  /* <!-- KG_REVIEWED: HTTP/2 | 2026-05-30 | source_count=4 --> */
  /* <!-- KG_EXPLAINED: HTTP/2 | 2026-05-23 | source_count=4 --> */
  {
    sourceRefs: ["rfc9113-http2", "rfc9110-http", "mdn-http-caching", "xiaolin-coding"],
    id: "http2",
    zh: "HTTP/2",
    en: "HTTP/2",
    layer: "application",
    difficulty: "medium",
    summary: "用二进制帧、stream 多路复用和头部压缩提升连接利用率。",
    explanation: [
      "核心概念：HTTP/2 保留 HTTP 方法、状态码、Header 等语义，把传输格式改成二进制帧。RFC 9113 定义连接、stream、frame、多路复用、优先级、流量控制和 HPACK 头部压缩。",
      "连接模型：一个 HTTP/2 连接中可以同时存在多个 stream，每个 stream 由 HEADERS、DATA、RST_STREAM 等帧组成。帧可以交错发送，接收端按 stream ID 重新组装请求和响应。",
      "性能收益：多路复用减少 HTTP/1.1 中多个连接和串行等待带来的开销，HPACK 减少重复 Header 传输，连接复用也能降低 TLS 与 TCP 建连成本。gRPC 常基于 HTTP/2 使用长连接和流式能力。",
      "流量控制：HTTP/2 有连接级和 stream 级流量控制窗口，接收端通过 WINDOW_UPDATE 调整可接收数据量。大响应、慢消费者或代理缓冲策略都可能让某些 stream 被窗口限制。",
      "边界情况：HTTP/2 运行在 TCP 上时，同一连接里的所有 stream 共享底层字节流；TCP 包丢失会影响该连接上的多个 stream。TLS ALPN、最大并发流、代理实现、服务端推送支持和优先级策略都会影响体验。",
      "排查方法：确认 ALPN 协商结果、协议版本、并发 stream 数、RST_STREAM/GOAWAY、连接窗口、stream 窗口、Header 压缩异常、服务端日志和代理配置。页面性能还要结合缓存、资源拆分、后端耗时和网络丢包分析。",
      "参考来源：HTTP/2 帧、stream、多路复用和流量控制采用 RFC 9113；HTTP 语义参考 RFC 9110；缓存行为参考 MDN；中文图解参考小林 coding。"
    ],
    typicalProblems: [
      "HTTP/2 的 frame、stream、connection 分别是什么",
      "多路复用如何减少请求排队",
      "HPACK 为什么能降低 Header 开销",
      "HTTP/2 流量控制窗口如何影响大响应",
      "TCP 丢包为什么会影响同连接多个 stream",
      "排查 HTTP/2 问题要看哪些协议指标",
    ],
    prerequisites: ["http", "tcp", "tls"],
    related: ["http3", "grpc", "https", "tcp-flow-control", "observability"],
    order: 33,
  },
  /* <!-- KG_REVIEWED: HTTP/3 | 2026-05-30 | source_count=4 --> */
  /* <!-- KG_EXPLAINED: HTTP/3 | 2026-05-23 | source_count=4 --> */
  {
    sourceRefs: ["rfc9114-http3", "rfc9000-quic", "rfc8446-tls13", "xiaolin-coding"],
    id: "http3",
    zh: "HTTP/3",
    en: "HTTP/3",
    layer: "application",
    difficulty: "hard",
    summary: "把 HTTP 语义运行在 QUIC 上，改善建连、弱网和连接迁移体验。",
    explanation: [
      "核心概念：HTTP/3 是 HTTP 语义到 QUIC 的映射。RFC 9114 定义 HTTP/3，RFC 9000 定义 QUIC；QUIC 基于 UDP 实现连接、可靠多流、拥塞控制、丢包恢复、连接迁移和 TLS 1.3 集成。",
      "连接建立：QUIC 把传输握手和 TLS 1.3 握手结合起来，首次连接通常减少往返开销，恢复连接可配合 0-RTT 发送早期数据。0-RTT 有重放风险，服务端要把它限制在适合重复执行的请求上。",
      "多流能力：QUIC 在传输层提供独立 stream。某个 stream 的数据丢失会影响该 stream 的交付，其他 stream 可以继续推进，因此 HTTP/3 在弱网下更容易保持并发请求体验。",
      "连接迁移：QUIC 使用连接 ID 识别连接，客户端从 Wi-Fi 切到蜂窝网络、IP 或端口变化时，连接仍有机会延续。这对移动端、跨网络切换和 NAT 端口变化场景很有价值。",
      "部署边界：HTTP/3 常用 UDP 443，防火墙、企业代理、运营商策略、负载均衡、CDN 和观测系统都要支持 QUIC。客户端通常通过 Alt-Svc 或协议协商发现 HTTP/3，再按可达性回退到 HTTP/2 或 HTTP/1.1。",
      "排查方法：看 Alt-Svc、协议版本、UDP 443 可达性、QUIC 连接 ID、握手失败、0-RTT 命中、丢包率、回退比例、CDN 配置和服务端 QUIC 日志。后端慢、缓存差和应用排队仍会主导端到端延迟。",
      "参考来源：HTTP/3 语义映射采用 RFC 9114；QUIC 连接、多流、丢包恢复和连接迁移参考 RFC 9000；TLS 1.3 与 0-RTT 安全属性参考 RFC 8446；中文图解参考小林 coding。"
    ],
    typicalProblems: [
      "HTTP/3 和 QUIC 的关系是什么",
      "QUIC 为什么能减少连接建立成本",
      "QUIC 多流如何缓解传输层队头阻塞",
      "连接 ID 如何支持网络切换",
      "0-RTT 为什么要限制请求类型",
      "UDP 443 受限时 HTTP/3 如何回退与排查",
    ],
    prerequisites: ["http2", "quic", "udp", "tls"],
    related: ["http2", "https", "latency-bandwidth", "observability"],
    order: 34,
  },
  /* <!-- KG_REVIEWED: WebSocket | 2026-05-30 | source_count=5 --> */
  /* <!-- KG_EXPLAINED: WebSocket | 2026-05-23 | source_count=4 --> */
  {
    sourceRefs: ["rfc6455-websocket", "rfc9110-http", "mdn-http-101", "rfc9293-tcp", "xiaolin-coding"],
    id: "websocket",
    zh: "WebSocket",
    en: "WebSocket",
    layer: "application",
    difficulty: "medium",
    summary: "在单条连接上提供低延迟、全双工的消息通信。",
    explanation: [
      "核心概念：WebSocket 是一种在单个连接上进行全双工消息通信的协议。RFC 6455 定义客户端先用 HTTP opening handshake 请求升级，服务端返回 101 Switching Protocols 后，双方用 WebSocket frame 持续收发消息。",
      "握手过程：客户端请求包含 Upgrade、Connection、Sec-WebSocket-Key、Sec-WebSocket-Version 等 Header；服务端根据 Key 计算 Sec-WebSocket-Accept 并返回 101。生产环境通常使用 wss://，由 TLS 保护握手和后续帧。",
      "消息模型：WebSocket 以 frame 承载文本、二进制、Ping、Pong 和 Close 等类型。应用可以双向主动发送消息，适合聊天室、行情推送、协同编辑、游戏、通知和运维终端。",
      "长连接治理：稳定 WebSocket 需要心跳、空闲超时、断线重连、消息序号、幂等处理、背压、发送队列和连接限额。客户端网络切换、NAT 老化、移动端后台和代理超时都会影响连接寿命。",
      "集群与代理：负载均衡、反向代理、CDN 和网关要支持 Upgrade 和长连接超时配置。多实例部署时，房间广播、用户在线状态、会话粘性、消息总线和水平扩容策略会成为核心工程问题。",
      "排查方法：先看握手状态码、Upgrade Header、TLS、代理日志和 101 返回；连接建立后看 Ping/Pong、Close code、断开时间、消息堆积、服务端事件循环、连接数、内存和后端广播链路。",
      "参考来源：WebSocket opening handshake、帧、Ping/Pong 和关闭语义采用 RFC 6455；HTTP Upgrade 语义参考 RFC 9110；101 状态码解释参考 MDN；底层连接语义参考 RFC 9293；中文图解参考小林 coding。"
    ],
    typicalProblems: [
      "WebSocket 握手为什么需要 HTTP Upgrade",
      "101 Switching Protocols 表示什么",
      "Ping/Pong 和应用层心跳如何配合",
      "代理或负载均衡为什么会导致长连接断开",
      "WebSocket 集群如何处理广播和会话",
      "断线重连如何保证消息顺序与幂等",
    ],
    prerequisites: ["http", "tcp", "tls"],
    related: ["load-balancing", "http", "https", "observability"],
    order: 35,
  },
  /* <!-- KG_REVIEWED: gRPC | 2026-05-30 | source_count=6 --> */
  /* <!-- KG_EXPLAINED: gRPC | 2026-05-23 | source_count=4 --> */
  {
    sourceRefs: ["grpc-core-concepts", "grpc-deadlines", "grpc-error-handling", "rfc9113-http2", "protobuf-overview", "rfc8446-tls13"],
    id: "grpc",
    zh: "gRPC",
    en: "gRPC",
    layer: "application",
    difficulty: "medium",
    summary: "基于接口契约、HTTP/2 和 Protobuf 的高性能 RPC 框架。",
    explanation: [
      "核心概念：gRPC 以 .proto 定义 service、method 和 message，客户端调用远端方法时由框架完成序列化、连接复用、metadata、状态码和错误传播。常见默认编码是 Protocol Buffers，传输层通常使用 HTTP/2。",
      "调用模式：gRPC 支持一元调用、服务端流、客户端流和双向流。一元调用适合普通请求响应，流式调用适合日志推送、实时状态、批量上传和长时间交互。",
      "HTTP/2 关系：gRPC 借助 HTTP/2 的 stream、多路复用、Header/Trailer 和流量控制承载并发 RPC。TLS 场景中 ALPN 协商协议，服务间通信常配合 mTLS 做身份认证。",
      "契约与演进：Protobuf 字段编号是兼容演进核心，新增字段、保留字段、枚举扩展和默认值都要按兼容规则设计。跨语言生成代码版本、proto 包名和依赖管理会影响长期维护。",
      "超时与错误：每个 RPC 都应设置 deadline，服务端可以读取剩余时间并及时释放资源。gRPC status code 表达调用结果，metadata 和 trailer 可承载诊断信息；重试要结合幂等性、deadline 和退避策略。",
      "工程边界：浏览器直连、HTTP 代理、负载均衡、服务发现、连接池、流控、消息大小、反压和可观测性都要按 gRPC 模型设计。对外开放常配合 gRPC-Gateway、Envoy 转码或独立 REST API。",
      "排查方法：看 proto、生成代码版本、HTTP/2 和 ALPN、TLS/mTLS、deadline、status code、metadata/trailer、消息大小、流控窗口、服务端日志和 trace。抓包时二进制载荷需要 schema 才能高效解码。",
      "参考来源：gRPC 调用模型和四种 RPC 模式参考官方 Core concepts；deadline 与错误模型参考 gRPC 官方指南；HTTP/2 传输参考 RFC 9113；Protobuf 参考官方文档；TLS 安全参考 RFC 8446。"
    ],
    typicalProblems: [
      "gRPC 的 service、method、message 如何组织接口契约",
      "一元调用、服务端流、客户端流、双向流分别适合什么场景",
      "gRPC 为什么依赖 HTTP/2 的 stream 和 trailer",
      "deadline 与普通超时配置有什么关系",
      "gRPC status code 和业务错误如何配合设计",
      "gRPC 对外开放时为什么常配合网关转码",
    ],
    prerequisites: ["http2", "protobuf"],
    related: ["protobuf", "load-balancing", "tls", "observability"],
    order: 36,
  },
  /* <!-- KG_REVIEWED: Protobuf | 2026-05-30 | source_count=5 --> */
  /* <!-- KG_EXPLAINED: Protobuf | 2026-05-23 | source_count=3 --> */
  {
    sourceRefs: ["protobuf-overview", "protobuf-proto3-guide", "protobuf-encoding", "grpc-core-concepts", "xiaolin-coding"],
    id: "protobuf",
    zh: "Protobuf",
    en: "Protocol Buffers",
    layer: "application",
    difficulty: "medium",
    summary: "用 schema 和字段编号高效编码结构化数据。",
    explanation: [
      "核心概念：Protocol Buffers 是语言无关、平台无关的结构化数据序列化机制。开发者在 .proto 中定义 message、field、enum 和 service，编译器生成多语言代码，运行时把数据按字段编号和 wire type 编码成二进制。",
      "编码模型：二进制数据里保存的是字段编号、wire type 和值。字段名主要服务于代码生成和可读 schema，线上数据依赖字段编号识别含义，因此字段编号是长期兼容性的核心资产。",
      "常见结构：proto3 支持标量字段、message 嵌套、repeated、map、oneof、enum、optional 和 well-known types。gRPC 常用 Protobuf 描述请求、响应和服务接口，形成跨语言强契约。",
      "兼容演进：新增字段通常可以被旧客户端跳过，删除字段要用 reserved 保留编号和名称，避免未来复用导致历史数据被误读。字段类型、编号、语义、默认值和 oneof 结构变化都要做兼容评估。",
      "工程边界：Protobuf 的二进制可读性弱，排查需要 proto schema、解码工具和版本管理。跨语言时要关注默认值、未知枚举值、时间类型、整数溢出、optional 语义、生成代码版本和 JSON 映射差异。",
      "实践建议：把业务语义写进 proto 注释，建立 schema review、兼容性检查、reserved 规范和回放测试。对外协议需要稳定包名、版本策略和清晰的弃用流程。",
      "参考来源：Protobuf 定义和代码生成参考官方 Overview；proto3 字段、reserved 和语言规则参考官方 Language Guide；wire format 参考官方 Encoding；gRPC 使用方式参考官方 Core concepts；中文工程实践参考小林 coding。"
    ],
    typicalProblems: [
      "Protobuf 为什么依赖字段编号而非字段名",
      "wire type 在编码中起什么作用",
      "repeated、map、oneof、optional 分别适合什么结构",
      "删除字段为什么要 reserved",
      "新增字段如何保持向后兼容",
      "线上排查 Protobuf 数据为什么需要 schema",
    ],
    prerequisites: ["grpc"],
    related: ["grpc", "api-design", "observability"],
    order: 37,
  },
  /* <!-- KG_REVIEWED: TLS | 2026-05-30 | source_count=6 --> */
  /* <!-- KG_EXPLAINED: TLS | 2026-05-23 | source_count=4 --> */
  {
    sourceRefs: ["rfc8446-tls13", "rfc5280-pkix", "mdn-tls", "mozilla-ssl-config", "rfc9110-http", "xiaolin-coding"],
    id: "tls",
    zh: "TLS",
    en: "Transport Layer Security",
    layer: "security",
    difficulty: "medium",
    summary: "为应用连接提供身份认证、密钥协商、加密和完整性保护。",
    explanation: [
      "核心概念：TLS 是传输安全协议，应用协议把明文数据交给 TLS，TLS 负责认证对端、协商密钥、加密记录并校验完整性。HTTPS、gRPC、数据库连接、消息队列和内部服务互信都常用 TLS。",
      "握手流程：TLS 1.3 中客户端和服务端通过 ClientHello/ServerHello 协商版本、加密套件、密钥交换参数、SNI 和 ALPN，服务端发送证书链证明身份，双方根据握手数据派生会话密钥。",
      "密码机制：握手阶段主要完成身份认证和密钥协商，应用数据阶段使用对称加密保护大量数据。TLS 1.3 精简旧算法，减少握手往返，并支持会话恢复和 0-RTT。",
      "双向认证：常见 HTTPS 只验证服务端证书；mTLS 会同时验证客户端证书，适合服务网格、内部 RPC、金融接口和高安全管理面。mTLS 需要证书签发、轮换、吊销和身份映射策略配套。",
      "边界情况：TLS 保护传输过程，终端、服务端内存、日志、代理解密点和业务权限仍要单独治理。证书链、SNI、ALPN、协议版本、Cipher、OCSP、系统时间、根证书库和中间代理都会影响握手。",
      "排查方法：用 openssl s_client、curl -v、浏览器安全面板或网关日志查看证书链、SAN、TLS 版本、Cipher、SNI、ALPN、OCSP、握手错误和中间证书。上线配置可参考 Mozilla SSL Configuration Generator 的现代配置建议。",
      "参考来源：TLS 1.3 握手、密钥派生和 0-RTT 采用 RFC 8446；证书链验证参考 RFC 5280；浏览器安全背景参考 MDN；部署配置参考 Mozilla SSL Configuration Generator；HTTP over TLS 语义参考 RFC 9110；中文图解参考小林 coding。"
    ],
    typicalProblems: [
      "TLS 握手阶段主要协商什么",
      "证书链在 TLS 认证中起什么作用",
      "对称加密和非对称机制如何配合",
      "TLS 1.3 为什么能减少握手开销",
      "mTLS 适合哪些服务间通信场景",
      "TLS 握手失败如何从证书、SNI、ALPN 和 Cipher 排查",
    ],
    prerequisites: ["tcp"],
    related: ["https", "certificate", "http2", "grpc", "observability"],
    order: 38,
  },
  /* <!-- KG_REVIEWED: 数字证书 | 2026-05-30 | source_count=6 --> */
  /* <!-- KG_EXPLAINED: 数字证书 | 2026-05-23 | source_count=4 --> */
  {
    sourceRefs: ["rfc5280-pkix", "rfc8446-tls13", "cloudflare-ssl-certificate", "cloudflare-ssl-concepts", "cloudflare-how-internet-works", "xiaolin-coding"],
    id: "certificate",
    zh: "数字证书",
    en: "Digital Certificate",
    layer: "security",
    difficulty: "medium",
    summary: "用受信任 CA 签名把身份、域名和公钥绑定起来。",
    explanation: [
      "核心概念：数字证书把主体身份、域名、公钥、有效期、用途和签名绑定在一起。X.509 PKI 通过根 CA、中间 CA 和服务器证书形成证书链，客户端用本地信任库中的根证书验证链路。",
      "证书内容：常见字段包括 Subject、Issuer、Subject Alternative Name、Serial Number、Validity、Public Key、Key Usage、Extended Key Usage 和 Signature。浏览器校验域名时重点看 SAN。",
      "信任链：服务器通常发送服务器证书和中间证书，客户端用 Issuer/Subject、签名和有效期逐级验证到受信任根。中间证书缺失、链顺序异常或根证书缺失都会导致验证失败。",
      "常见类型：单域名证书覆盖一个名称，通配符证书覆盖同一级子域，多域名证书通过 SAN 覆盖多个名称。自签名证书适合受控环境，需要客户端显式信任根或证书。",
      "轮换风险：证书轮换要覆盖所有负载均衡、CDN、Ingress、边缘节点和旧实例，同时关注中间证书、私钥匹配、SNI 命中、OCSP/CRL、系统时间和缓存。大规模系统适合自动签发与到期告警。",
      "排查方法：用浏览器证书面板、openssl s_client、curl -v 查看 SAN、Issuer、Subject、有效期、链顺序、Key Usage、SNI、OCSP 和服务端发送的中间证书。域名匹配、过期、私钥错配和中间证书缺失是高频问题。",
      "参考来源：X.509 证书结构和路径验证采用 RFC 5280；TLS 握手中的证书认证参考 RFC 8446；证书概念和信任模型参考 Cloudflare SSL 资料；互联网访问背景参考 Cloudflare；中文图解参考小林 coding。"
    ],
    typicalProblems: [
      "证书链如何从服务器证书验证到受信任根",
      "Subject、Issuer 和 SAN 分别表示什么",
      "中间证书缺失为什么会导致浏览器报错",
      "通配符证书和多域名证书适合什么场景",
      "证书轮换要检查哪些部署点",
      "证书过期、域名不匹配、私钥错配如何排查",
    ],
    prerequisites: ["tls"],
    related: ["https", "tls", "dns", "observability"],
    order: 39,
  },
  /* <!-- KG_REVIEWED: 防火墙 | 2026-05-30 | source_count=5 --> */
  /* <!-- KG_EXPLAINED: 防火墙 | 2026-05-23 | source_count=5 --> */
  {
    sourceRefs: ["aws-security-groups", "microsoft-windows-firewall", "rfc791-ip", "rfc9293-tcp", "xiaolin-coding"],
    id: "firewall",
    zh: "防火墙",
    en: "Firewall",
    layer: "security",
    difficulty: "medium",
    summary: "按地址、端口、协议、方向和连接状态控制流量。",
    explanation: [
      "核心概念：防火墙根据规则决定流量允许、拒绝或记录。常见匹配字段包括源/目的 IP、源/目的端口、协议、方向、接口、连接状态、应用特征和安全组引用。",
      "部署层次：云安全组绑定云资源或网卡，主机防火墙运行在操作系统，网络 ACL 和边界防火墙控制子网或出口入口。一次访问常同时经过客户端出口、云网络、负载均衡、主机和应用网关。",
      "状态模型：有状态防火墙会跟踪连接，已建立连接的返回流量按状态放行；无状态规则需要同时规划入站和出站。AWS 安全组是有状态模型，主机防火墙也常按配置维护连接状态。",
      "规则细节：规则顺序、默认策略、IPv4/IPv6 双栈、ICMP、临时端口、源地址变化、NAT、代理、容器网络和负载均衡源 IP 透传都会影响命中结果。安全组引用在云内服务互访中很常见。",
      "排查路径：端口访问失败按链路逐段确认：DNS 与目标 IP、路由、客户端出口、云安全组/NACL、负载均衡、主机防火墙、服务监听地址、应用鉴权和回包路径。抓包能帮助判断请求到达了哪一段。",
      "治理建议：生产规则按最小权限、分环境、可审计和可回滚设计。为临时白名单设置到期时间，记录规则变更原因，定期清理宽泛网段和过期端口。",
      "参考来源：云安全组状态行为和规则模型参考 AWS 文档；主机防火墙职责参考 Microsoft Learn；IP/TCP 字段基础参考 RFC 791 与 RFC 9293；中文排查思路参考小林 coding。"
    ],
    typicalProblems: [
      "防火墙规则通常匹配哪些字段",
      "云安全组和主机防火墙如何共同影响访问",
      "有状态规则和无状态 ACL 有什么工程差异",
      "NAT、代理和负载均衡为什么会改变规则看到的源地址",
      "端口放行后仍访问失败该继续看哪些层",
      "生产防火墙规则如何做最小权限治理",
    ],
    prerequisites: ["ip", "port", "tcp"],
    related: ["nat", "load-balancing", "observability"],
    order: 40,
  },
  /* <!-- KG_REVIEWED: 延迟与带宽 | 2026-05-30 | source_count=5 --> */
  /* <!-- KG_EXPLAINED: 延迟与带宽 | 2026-05-23 | source_count=5 --> */
  {
    sourceRefs: ["khan-bandwidth-latency", "cloudflare-latency", "microsoft-latency-throughput", "bitag-latency-explained", "rfc5681-tcp-congestion"],
    id: "latency-bandwidth",
    zh: "延迟与带宽",
    en: "Latency and Bandwidth",
    layer: "performance",
    difficulty: "easy",
    summary: "延迟决定等待时间，带宽决定容量上限，吞吐反映实际传输结果。",
    explanation: [
      "核心概念：延迟表示数据从一端到另一端或一次往返消耗的时间，常用 RTT 衡量；带宽表示链路单位时间可承载的数据量上限；吞吐表示应用实际拿到的传输速率。",
      "体验差异：网页首屏、API 多轮调用、游戏、语音和远程桌面对延迟更敏感；大文件下载、备份、视频分发和批量同步对带宽更敏感。抖动表示延迟变化幅度，会影响实时音视频和交互体验。",
      "BDP 模型：带宽时延积 BDP 表示填满链路需要多少在途数据。高带宽高 RTT 链路需要足够大的发送窗口、接收窗口和拥塞窗口，窗口偏小会让链路容量闲置。",
      "丢包影响：TCP 会把丢包、重复 ACK 和 RTO 作为拥塞信号，触发重传和窗口收缩。很小的丢包率也可能显著降低传统 TCP 吞吐，尤其在跨地域和无线网络中更明显。",
      "真实边界：排队、缓冲膨胀、限速、代理、TLS 握手、DNS、服务端处理、浏览器连接限制、HTTP 串行依赖和应用线程池都会增加用户感知延迟。下载测速高和单个接口慢可以同时出现。",
      "排查方法：ping/mtr 看 RTT、抖动和丢包，iperf 看链路吞吐，curl timing 拆 DNS、TCP、TLS、TTFB 和下载时间，浏览器 Network 看瀑布图，服务端指标看排队、CPU、数据库和下游依赖。",
      "参考来源：带宽、比特率和延迟定义参考 Khan Academy；延迟体验参考 Cloudflare；延迟与吞吐关系参考 Microsoft Learn；现代网络延迟因素参考 BITAG；TCP 拥塞响应参考 RFC 5681。"
    ],
    typicalProblems: [
      "延迟、RTT、带宽、吞吐分别表示什么",
      "为什么下载测速很高但接口仍然慢",
      "BDP 如何解释高 RTT 链路吞吐问题",
      "丢包为什么会让 TCP 吞吐明显下降",
      "抖动对实时音视频有什么影响",
      "如何用 ping、mtr、iperf、curl timing 和瀑布图定位性能瓶颈",
    ],
    prerequisites: ["signal"],
    related: ["tcp-congestion-control", "tcp-flow-control", "tcp-retransmission", "http", "observability"],
    order: 41,
  },
  /* <!-- KG_EXPLAINED: CDN | 2026-05-23 | source_count=11 --> */
  /* ai-redone: 2026-05-23; sources=cloudflare-cdn-overview,cloudflare-cdn-reference-architecture,aws-cloudfront-delivers-content,aws-cloudfront-origin-shield,akamai-cdn-overview,akamai-content-delivery,mdn-http-caching,cloudflare-cache-revalidation; diagram=network:cdn */
  /* <!-- KG_REVIEWED: CDN | 2026-05-30 | source_count=11 --> */
  {
    sourceRefs: ["cloudflare-cdn-overview", "cloudflare-cdn-reference-architecture", "aws-cloudfront-delivers-content", "aws-cloudfront-origin-shield", "akamai-cdn-overview", "akamai-content-delivery", "mdn-http-caching", "cloudflare-cache-revalidation", "cs-notes", "javaguide", "xiaolin-coding"],
    id: "cdn",
    zh: "CDN",
    en: "Content Delivery Network",
    layer: "performance",
    difficulty: "medium",
    summary: "用全球边缘节点、缓存和回源控制降低访问延迟与源站压力。",
    explanation: [
      "核心概念：CDN 是分布在多个地域的边缘接入与缓存网络，通常以反向代理方式接收用户请求，把可缓存内容放在靠近用户的位置。它降低 RTT、节省源站带宽，并提升抗突发流量能力。",
      "请求路由：网站常通过 CNAME、权威 DNS、Anycast 或平台调度把用户引到合适边缘节点。用户先到边缘，边缘再按缓存状态选择直接响应、访问上级缓存或回源。",
      "缓存决策：边缘节点根据 cache key 判断命中，常见 key 由 Host、URL、查询参数、Vary 相关请求头、Cookie 策略和自定义规则组成。Cache-Control、s-maxage、ETag、Last-Modified、Age 和 Vary 决定鲜度、验证和共享缓存行为。",
      "分层回源：首次请求或缓存过期时，边缘节点可能访问区域缓存、tiered cache 或 Origin Shield，再访问源站。分层回源能减少重复回源，提升命中率，并在热点流量下保护源站。",
      "特殊场景：动态内容也可以通过 CDN 做 TLS 终止、WAF、Bot 防护、压缩、图片优化、HTTP/2/HTTP/3 接入和边缘计算。HTML、API 和个性化内容要精确设计 cache key、bypass、private 和 revalidation 策略。",
      "排查方法：同时看用户地域、DNS 解析、边缘节点、缓存状态头、Age、Cache-Control、ETag、命中率、回源耗时、TLS/SNI、WAF 命中、压缩/图片优化和 purge/invalidation 生效范围。",
      "参考来源：CDN 定义与边缘缓存模型参考 Cloudflare 与 Akamai；全球边缘入口和分层架构参考 Cloudflare CDN Reference Architecture；CloudFront 边缘、区域缓存与 Origin Shield 请求路径参考 AWS 文档；缓存头和 revalidation 语义参考 MDN 与 Cloudflare。"
    ],
    typicalProblems: [
      "CDN 如何通过边缘节点降低 RTT",
      "HIT、MISS、EXPIRED、REVALIDATED、STALE 和 BYPASS 如何区分",
      "Cache-Control、s-maxage、ETag 和 Vary 如何影响缓存",
      "Origin Shield 或 tiered cache 如何减少重复回源",
      "静态资源、HTML 和 API 分别适合什么缓存策略",
      "CDN 缓存未刷新、命中率低或回源慢如何排查",
    ],
    prerequisites: ["dns", "http-cache"],
    related: ["load-balancing", "latency-bandwidth", "http3", "observability"],
    order: 42,
  },
  /* <!-- KG_REVIEWED: 负载均衡 | 2026-05-30 | source_count=5 --> */
  /* <!-- KG_EXPLAINED: 负载均衡 | 2026-05-23 | source_count=4 --> */
  {
    sourceRefs: ["aws-elb-overview", "aws-elb-target-groups", "nginx-http-load-balancing", "rfc9110-http", "rfc9293-tcp"],
    id: "load-balancing",
    zh: "负载均衡",
    en: "Load Balancing",
    layer: "performance",
    difficulty: "medium",
    summary: "把流量分发到多个后端实例，提升可用性、吞吐和故障隔离能力。",
    explanation: [
      "核心概念：负载均衡位于客户端和后端实例之间，接收请求或连接后按规则选择目标实例。它让服务可以横向扩容、跨可用区部署、灰度发布，并在实例异常时减少影响范围。",
      "四层与七层：四层负载均衡按 TCP/UDP 连接和地址端口转发，关注连接与流量；七层负载均衡理解 HTTP 语义，可以按 Host、Path、Header、Cookie、方法、权重和重写规则路由。",
      "核心组件：托管负载均衡通常包含监听器、路由规则、目标组和健康检查。目标组维护后端实例集合，健康检查决定实例是否接收新流量。",
      "分发算法：常见策略包括轮询、最少连接、加权、哈希、IP hash 和一致性哈希。长连接、WebSocket、gRPC 流、慢请求和大响应会让简单轮询出现负载倾斜，算法要结合业务流量形态选择。",
      "特殊场景：会话粘性、TLS 终止、源 IP 透传、连接排空、慢启动、后端 keepalive、跨区流量、限流和超时都会影响最终效果。发布和扩缩容时，连接排空能让旧实例平滑退出。",
      "排查方法：看监听器、路由规则、目标健康、后端状态码、连接数、请求量、延迟、超时、TLS、源 IP、访问日志、目标组权重和实例容量。负载均衡能分流请求，数据库瓶颈、缓存热点和应用线程池仍需要单独治理。",
      "参考来源：ELB 概念、监听器、目标组和健康检查参考 AWS 文档；HTTP 负载均衡算法和配置参考 NGINX 文档；HTTP 路由语义参考 RFC 9110；TCP 连接基础参考 RFC 9293。"
    ],
    typicalProblems: [
      "四层和七层负载均衡分别适合什么场景",
      "监听器、路由规则、目标组和健康检查如何配合",
      "轮询、最少连接、权重和哈希算法如何选择",
      "WebSocket 和 gRPC 流为什么会影响分发均衡",
      "连接排空和会话粘性解决什么问题",
      "后端实例异常时如何定位负载均衡链路",
    ],
    prerequisites: ["http", "tcp"],
    related: ["health-check", "websocket", "grpc", "cdn", "observability"],
    order: 43,
  },
  /* <!-- KG_REVIEWED: 健康检查 | 2026-05-30 | source_count=5 --> */
  /* <!-- KG_EXPLAINED: 健康检查 | 2026-05-23 | source_count=4 --> */
  {
    sourceRefs: ["kubernetes-probes", "aws-elb-health-checks", "aws-elb-overview", "rfc9110-http", "opentelemetry-observability-primer"],
    id: "health-check",
    zh: "健康检查",
    en: "Health Check",
    layer: "performance",
    difficulty: "easy",
    summary: "用周期性探测判断实例是否存活、就绪并适合接收流量。",
    explanation: [
      "核心概念：健康检查通过 HTTP、TCP、命令执行或 gRPC 探测判断实例状态。负载均衡器、Kubernetes、服务注册中心和运维平台会根据结果摘除、恢复、重启或告警。",
      "探针类型：Kubernetes 区分 liveness、readiness 和 startup probe。liveness 用于发现进程卡死并触发重启，readiness 用于决定是否接收流量，startup 用于给慢启动应用更长初始化窗口。",
      "负载均衡场景：负载均衡健康检查会按 interval、timeout、healthy threshold 和 unhealthy threshold 统计结果，目标异常时停止分配新请求，恢复后重新加入目标组。",
      "检查深度：浅检查只确认进程或端口可达，成本低、稳定；深检查覆盖数据库、缓存或下游依赖，能发现更多业务故障，也更容易因依赖抖动造成误摘除。关键是区分强依赖和可降级依赖。",
      "特殊情况：启动慢、GC 暂停、线程池耗尽、连接池耗尽、探针路径依赖登录、健康检查源地址被防火墙拦截、所有目标同时异常和 fail-open 策略都会影响切流行为。",
      "排查方法：看探测状态码、超时、失败阈值、探测日志、实例启动耗时、CPU/内存、线程池、连接池、负载均衡源地址、防火墙规则、目标组状态和发布时间线。",
      "参考来源：Kubernetes 三类探针参考官方文档；负载均衡健康检查、阈值和目标状态参考 AWS ELB 文档；HTTP 状态语义参考 RFC 9110；可观测性闭环参考 OpenTelemetry Observability Primer。"
    ],
    typicalProblems: [
      "liveness、readiness、startup probe 分别解决什么问题",
      "HTTP、TCP、命令和 gRPC 探测如何选择",
      "健康检查路径应该覆盖哪些依赖",
      "失败阈值和超时时间如何影响切流速度",
      "实例频繁被摘除通常有哪些原因",
      "所有目标异常时负载均衡可能如何处理",
    ],
    prerequisites: ["load-balancing"],
    related: ["observability", "load-balancing", "grpc", "http"],
    order: 44,
  },
  /* <!-- KG_REVIEWED: 网络可观测性 | 2026-05-30 | source_count=6 --> */
  /* <!-- KG_EXPLAINED: 网络可观测性 | 2026-05-23 | source_count=4 --> */
  {
    sourceRefs: ["opentelemetry-observability-primer", "opentelemetry-semantics", "google-sre-monitoring", "prometheus-metric-naming", "cloudflare-latency", "microsoft-latency-throughput"],
    id: "observability",
    zh: "网络可观测性",
    en: "Network Observability",
    layer: "performance",
    difficulty: "medium",
    summary: "把日志、指标、链路追踪、探测和抓包关联起来定位网络问题。",
    explanation: [
      "核心概念：网络可观测性关注一次请求从客户端到边缘、DNS、TCP/TLS、代理、负载均衡、应用和下游依赖的完整路径。日志给上下文，指标看趋势和告警，链路追踪串联跨服务耗时，抓包提供协议级证据。",
      "核心信号：Google SRE 的四个黄金信号是延迟、流量、错误和饱和度；网络场景还常看连接数、重传率、丢包率、RTT、DNS 耗时、TLS 耗时、TTFB、CDN 命中率、上游耗时和健康检查状态。",
      "追踪模型：OpenTelemetry 用 trace、span、attribute 和 context propagation 描述请求链路。边缘、网关、服务和下游都透传 trace context 时，才能把一次慢请求定位到 DNS、握手、排队、后端或外部依赖。",
      "指标治理：指标命名要稳定，标签要控制基数。高基数标签会推高存储和查询成本，常见风险包括用户 ID、完整 URL、请求体、随机错误信息和动态实例名。",
      "特殊场景：加密流量中抓包难以看到应用内容，但仍可观察 SNI、证书、IP、端口、连接状态、握手失败、重传和时延。客户端 RUM、synthetic probing、边缘日志、负载均衡日志和服务端指标提供不同视角。",
      "排查路径：先用指标确认影响范围和时间窗口，再用 trace 找最慢 span，用日志看错误上下文，用抓包或网络指标验证协议层问题，最后把结论回写到告警、仪表盘和 runbook。",
      "参考来源：日志、指标和追踪三类信号参考 OpenTelemetry Observability Primer；语义字段参考 OpenTelemetry Semantic Conventions；黄金信号参考 Google SRE；指标命名和标签基数参考 Prometheus；延迟体验和吞吐关系参考 Cloudflare 与 Microsoft Learn。"
    ],
    typicalProblems: [
      "日志、指标、链路追踪和抓包分别解决什么问题",
      "延迟、流量、错误和饱和度如何用于网络告警",
      "一次慢请求如何从 DNS、TCP、TLS、代理和后端逐层定位",
      "trace context 为什么要在网关和服务之间透传",
      "高基数标签为什么会影响可观测系统",
      "加密流量下还能观察哪些网络信号",
    ],
    prerequisites: ["latency-bandwidth", "http"],
    related: ["health-check", "load-balancing", "cdn", "tls", "tcp-retransmission"],
    order: 45,
  },
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
    related: ["dns", "http3"],
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
  "http3": {
    order: 48,
    prerequisites: ["http2", "udp"],
  },
  "websocket": { order: 49 },
  "grpc": { order: 50 },
  "protobuf": {
    order: 51,
    prerequisites: ["grpc"],
    related: ["grpc"],
  },
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
