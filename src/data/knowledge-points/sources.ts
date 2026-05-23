import type { CategoryId } from "../types.ts";

export const knowledgeSources = {
  "cs-notes": {
    title: "CS-Notes 技术面试必备基础知识",
    url: "https://github.com/CyC2018/CS-Notes",
  },
  javaguide: {
    title: "JavaGuide Java 面试与后端通用面试指南",
    url: "https://github.com/Snailclimb/JavaGuide",
  },
  "nist-dads-array": {
    title: "NIST DADS: array",
    url: "https://xlinux.nist.gov/dads/HTML/array.html",
  },
  "oracle-java-arrays": {
    title: "Oracle Java Tutorials: Arrays",
    url: "https://docs.oracle.com/javase/tutorial/java/nutsandbolts/arrays.html",
  },
  "open-data-structures-arrays": {
    title: "Open Data Structures: Array-Based Lists",
    url: "https://opendatastructures.org/newhtml/ods/latex/arrays.html",
  },
  "nist-dads-linked-list": {
    title: "NIST DADS: linked list",
    url: "https://xlinux.nist.gov/dads/HTML/linkedList.html",
  },
  "open-data-structures-linked-lists": {
    title: "Open Data Structures: Linked Lists",
    url: "https://opendatastructures.org/newhtml/ods/latex/linkedlists.html",
  },
  "oracle-java-linked-list": {
    title: "Oracle Java API: LinkedList",
    url: "https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/util/LinkedList.html",
  },
  "libretexts-stack": {
    title: "Engineering LibreTexts: Stack Data Structure",
    url: "https://eng.libretexts.org/Courses/Delta_College/C_-_Data_Structures/09%3A_Lesson_5_-_Stack_Data_Structure/9.01%3A_Lesson_5-1_-_Stacks",
  },
  "warwick-stacks-queues": {
    title: "Warwick Guide: Stacks and Queues",
    url: "https://warwick.guide/modules/CS126/Primary_Notes/stacks-and-queues",
  },
  "weber-stack-operations": {
    title: "Weber State CS1410: Stacks And Stack Operations",
    url: "https://icarus.cs.weber.edu/~dab/cs1410/textbook/7.Arrays/stack.html",
  },
  "yale-cpsc223-stack": {
    title: "Yale CPSC 223: Stack implementation notes",
    url: "https://www.cs.yale.edu/homes/aspnes/classes/223/notes.html",
  },
  "nist-dads-fifo": {
    title: "NIST DADS: first-in, first-out",
    url: "https://xlinux.nist.gov/dads/HTML/firstinfrstt.html",
  },
  "nist-dads-circular-queue": {
    title: "NIST DADS: circular queue",
    url: "https://xlinux.nist.gov/dads/HTML/circularQueue.html",
  },
  "oracle-java-queue": {
    title: "Oracle Java API: Queue",
    url: "https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/util/Queue.html",
  },
  "open-data-structures-arrayqueue": {
    title: "Open Data Structures: ArrayQueue",
    url: "https://opendatastructures.org/newhtml/ods/latex/arrays.html#SECTION00530000000000000000",
  },
  "nist-dads-hash-table": {
    title: "NIST DADS: hash table",
    url: "https://xlinux.nist.gov/dads/HTML/hashtab.html",
  },
  "nist-dads-load-factor": {
    title: "NIST DADS: load factor",
    url: "https://xlinux.nist.gov/dads/HTML/loadfactor.html",
  },
  "open-data-structures-chained-hash-table": {
    title: "Open Data Structures: Hashing with Chaining",
    url: "https://opendatastructures.org/ods-cpp/5_1_Hashing_with_Chaining.html",
  },
  "oracle-java-hashmap": {
    title: "Oracle Java API: HashMap",
    url: "https://docs.oracle.com/javase/8/docs/api/java/util/HashMap.html",
  },
  "xiaolin-coding": {
    title: "小林 coding 图解网络与操作系统",
    url: "https://xiaolincoding.com/",
  },
  "rfc1122-internet-layers": {
    title: "RFC 1122 Requirements for Internet Hosts: Communication Layers",
    url: "https://www.rfc-editor.org/rfc/rfc1122#page-8",
  },
  "cloudflare-how-internet-works": {
    title: "Cloudflare Learning Center: How does the Internet work?",
    url: "https://www.cloudflare.com/learning/network-layer/how-does-the-internet-work/",
  },
  "mdn-how-internet-works": {
    title: "MDN Web Docs: How does the Internet work?",
    url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Web_mechanics/How_does_the_Internet_work",
  },
  "cisco-network-basics": {
    title: "Cisco: Networking Basics",
    url: "https://www.cisco.com/site/us/en/learn/topics/small-business/networking-basics.html",
  },
  "microsoft-tcpip-networking": {
    title: "Microsoft Learn: Introduction to TCP/IP networking",
    url: "https://learn.microsoft.com/en-us/troubleshoot/windows-client/networking/tcpip-addressing-and-subnetting",
  },
  "oracle-packet-encapsulation": {
    title: "Oracle Solaris: Data Encapsulation and the TCP/IP Protocol Stack",
    url: "https://docs.oracle.com/pls/topic/lookup?ctx=E23823&id=SYSADV3ipov-32",
  },
  "itu-x200-osi": {
    title: "ITU-T X.200: Open Systems Interconnection Basic Reference Model",
    url: "https://www.itu.int/rec/T-REC-X.200-199407-I/en",
  },
  "iso-7498-1-osi": {
    title: "ISO/IEC 7498-1:1994 OSI Basic Reference Model",
    url: "https://www.iso.org/standard/20269.html",
  },
  "cloudflare-osi-model": {
    title: "Cloudflare Learning Center: What is the OSI Model?",
    url: "https://www.cloudflare.com/learning/ddos/glossary/open-systems-interconnection-model-osi/",
  },
  "aws-osi-model": {
    title: "AWS: What is the OSI Model?",
    url: "https://aws.amazon.com/what-is/osi-model/",
  },
  "cloudflare-network-layer": {
    title: "Cloudflare Learning Center: What is the network layer?",
    url: "https://www.cloudflare.com/learning/network-layer/what-is-the-network-layer/",
  },
  "cloudflare-internet-protocol": {
    title: "Cloudflare Learning Center: What is the Internet Protocol?",
    url: "https://www.cloudflare.com/learning/network-layer/internet-protocol/",
  },
  "rfc791-ip": {
    title: "RFC 791: Internet Protocol",
    url: "https://www.rfc-editor.org/rfc/rfc791",
  },
  "rfc8200-ipv6": {
    title: "RFC 8200: Internet Protocol, Version 6 (IPv6) Specification",
    url: "https://www.rfc-editor.org/rfc/rfc8200",
  },
  "rfc4443-icmpv6": {
    title: "RFC 4443: Internet Control Message Protocol (ICMPv6)",
    url: "https://www.rfc-editor.org/rfc/rfc4443",
  },
  "rfc4291-ipv6-addressing": {
    title: "RFC 4291: IPv6 Addressing Architecture",
    url: "https://www.rfc-editor.org/rfc/rfc4291",
  },
  "rfc4861-ndp": {
    title: "RFC 4861: Neighbor Discovery for IPv6",
    url: "https://www.rfc-editor.org/rfc/rfc4861",
  },
  "rfc4632-cidr": {
    title: "RFC 4632: Classless Inter-domain Routing (CIDR)",
    url: "https://www.rfc-editor.org/rfc/rfc4632",
  },
  "rfc1918-private-address": {
    title: "RFC 1918: Address Allocation for Private Internets",
    url: "https://www.rfc-editor.org/rfc/rfc1918",
  },
  "rfc792-icmp": {
    title: "RFC 792: Internet Control Message Protocol",
    url: "https://www.rfc-editor.org/rfc/rfc792",
  },
  "rfc3022-nat": {
    title: "RFC 3022: Traditional IP Network Address Translator",
    url: "https://www.rfc-editor.org/rfc/rfc3022",
  },
  "aws-vpc-route-tables": {
    title: "AWS VPC: Subnet route tables",
    url: "https://docs.aws.amazon.com/vpc/latest/userguide/subnet-route-tables.html",
  },
  "aws-vpc-nat-gateway": {
    title: "AWS VPC: NAT gateways",
    url: "https://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-gateway.html",
  },
  "rfc768-udp": {
    title: "RFC 768: User Datagram Protocol",
    url: "https://www.rfc-editor.org/rfc/rfc768",
  },
  "iana-service-port-registry": {
    title: "IANA: Service Name and Transport Protocol Port Number Registry",
    url: "https://www.iana.org/assignments/service-names-port-numbers/service-names-port-numbers.xhtml",
  },
  "rfc9293-tcp": {
    title: "RFC 9293: Transmission Control Protocol (TCP)",
    url: "https://www.rfc-editor.org/rfc/rfc9293",
  },
  "rfc6298-tcp-rto": {
    title: "RFC 6298: Computing TCP's Retransmission Timer",
    url: "https://www.rfc-editor.org/rfc/rfc6298",
  },
  "rfc5681-tcp-congestion": {
    title: "RFC 5681: TCP Congestion Control",
    url: "https://www.rfc-editor.org/rfc/rfc5681",
  },
  "rfc7323-tcp-high-performance": {
    title: "RFC 7323: TCP Extensions for High Performance",
    url: "https://www.rfc-editor.org/rfc/rfc7323",
  },
  "rfc1034-dns": {
    title: "RFC 1034: Domain Names - Concepts and Facilities",
    url: "https://www.rfc-editor.org/rfc/rfc1034",
  },
  "rfc1035-dns": {
    title: "RFC 1035: Domain Names - Implementation and Specification",
    url: "https://www.rfc-editor.org/rfc/rfc1035",
  },
  "rfc9110-http": {
    title: "RFC 9110: HTTP Semantics",
    url: "https://www.rfc-editor.org/rfc/rfc9110",
  },
  "rfc9111-http-cache": {
    title: "RFC 9111: HTTP Caching",
    url: "https://www.rfc-editor.org/rfc/rfc9111",
  },
  "rfc9113-http2": {
    title: "RFC 9113: HTTP/2",
    url: "https://www.rfc-editor.org/rfc/rfc9113",
  },
  "rfc9114-http3": {
    title: "RFC 9114: HTTP/3",
    url: "https://www.rfc-editor.org/rfc/rfc9114",
  },
  "rfc9000-quic": {
    title: "RFC 9000: QUIC",
    url: "https://www.rfc-editor.org/rfc/rfc9000",
  },
  "rfc8446-tls13": {
    title: "RFC 8446: TLS 1.3",
    url: "https://www.rfc-editor.org/rfc/rfc8446",
  },
  "rfc5280-pkix": {
    title: "RFC 5280: Internet X.509 PKI Certificate and CRL Profile",
    url: "https://www.rfc-editor.org/rfc/rfc5280",
  },
  "rfc6455-websocket": {
    title: "RFC 6455: The WebSocket Protocol",
    url: "https://www.rfc-editor.org/rfc/rfc6455",
  },
  "grpc-core-concepts": {
    title: "gRPC Docs: Core concepts, architecture and lifecycle",
    url: "https://grpc.io/docs/what-is-grpc/core-concepts/",
  },
  "protobuf-overview": {
    title: "Protocol Buffers Documentation: Overview",
    url: "https://protobuf.dev/overview/",
  },
  "aws-elb-overview": {
    title: "AWS Elastic Load Balancing: What is Elastic Load Balancing?",
    url: "https://docs.aws.amazon.com/elasticloadbalancing/latest/userguide/what-is-load-balancing.html",
  },
  "nginx-http-load-balancing": {
    title: "NGINX Documentation: HTTP Load Balancing",
    url: "https://docs.nginx.com/nginx/admin-guide/load-balancer/http-load-balancer/",
  },
  "kubernetes-probes": {
    title: "Kubernetes Docs: Configure Liveness, Readiness and Startup Probes",
    url: "https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/",
  },
  "aws-security-groups": {
    title: "AWS VPC: Control traffic using security groups",
    url: "https://docs.aws.amazon.com/vpc/latest/userguide/vpc-security-groups.html",
  },
  "microsoft-windows-firewall": {
    title: "Microsoft Learn: Windows Firewall overview",
    url: "https://learn.microsoft.com/en-us/windows/security/operating-system-security/network-security/windows-firewall/",
  },
  "opentelemetry-observability-primer": {
    title: "OpenTelemetry Docs: Observability Primer",
    url: "https://opentelemetry.io/docs/concepts/observability-primer/",
  },
  "prometheus-metric-naming": {
    title: "Prometheus Docs: Metric and label naming",
    url: "https://prometheus.io/docs/practices/naming/",
  },
  "khan-bandwidth-latency": {
    title: "Khan Academy: Bit rate, bandwidth, and latency",
    url: "https://www.khanacademy.org/a/bit-rate-bandwidth-and-latency",
  },
  "cloudflare-latency": {
    title: "Cloudflare Learning Center: What is latency?",
    url: "https://www.cloudflare.com/learning/performance/glossary/what-is-latency/",
  },
  "ibm-latency": {
    title: "IBM Think: What is latency?",
    url: "https://www.ibm.com/think/topics/latency",
  },
  "microsoft-latency-throughput": {
    title: "Microsoft Learn: Network Latency and Throughput",
    url: "https://learn.microsoft.com/en-us/windows/win32/rpc/network-latency-and-throughput",
  },
  "bitag-latency-explained": {
    title: "BITAG: Latency Explained",
    url: "https://www.bitag.org/documents/BITAG_latency_explained.pdf",
  },
  "learnemc-time-frequency-domain": {
    title: "LearnEMC: Time and Frequency Domain",
    url: "https://learnemc.com/time-frequency-domain",
  },
  "academyofemc-time-vs-frequency-domain": {
    title: "Academy of EMC: Time vs Frequency Domain",
    url: "https://www.academyofemc.com/time-vs-frequency-domain",
  },
  "ieee-8023-ethernet": {
    title: "IEEE 802.3 Ethernet Working Group",
    url: "https://www.ieee802.org/3/",
  },
  "cisco-ethernet-autonegotiation": {
    title: "Cisco: Troubleshooting Ethernet Autonegotiation",
    url: "https://www.cisco.com/c/en/us/support/docs/lan-switching/ethernet/10561-3.html",
  },
  "intel-ethernet-speed-duplex": {
    title: "Intel Ethernet Products: Speed and Duplex Configuration",
    url: "https://www.intel.com/content/www/us/en/support/articles/000006967/ethernet-products.html",
  },
  "ibm-network-crc-errors": {
    title: "IBM Support: Network CRC Errors and Link Issues",
    url: "https://www.ibm.com/support/pages/ethernet-crc-errors-and-troubleshooting",
  },
  "networkacademy-switching-logic": {
    title: "NetworkAcademy.IO: Overview of Switching Logic",
    url: "https://www.networkacademy.io/ccna/ethernet/switching-logic",
  },
  "cisco-mac-address-table": {
    title: "Cisco Catalyst 3560: Managing the MAC Address Table",
    url: "https://www.cisco.com/c/en/us/td/docs/switches/lan/catalyst3560/software/release/15-0_2_se/configuration/guide/scg3560/swadmin.html",
  },
  "cisco-network-switching-operation": {
    title: "Cisco Community: Network Switching Operation",
    url: "https://community.cisco.com/t5/networking-knowledge-base/network-switching-operation/ta-p/4193160",
  },
  "gfg-switch-functions-layer2": {
    title: "GeeksForGeeks: Switch functions at layer 2",
    url: "https://www.geeksforgeeks.org/computer-networks/switch-functions-at-layer-2/",
  },
  "networklessons-arp": {
    title: "NetworkLessons: ARP explained",
    url: "https://networklessons.com/ip-services/arp-address-resolution-protocol-explained",
  },
  "rfc826-arp": {
    title: "RFC 826: An Ethernet Address Resolution Protocol",
    url: "https://www.rfc-editor.org/rfc/rfc826",
  },
  "wireshark-arp": {
    title: "Wireshark Wiki: Address Resolution Protocol",
    url: "https://wiki.wireshark.org/AddressResolutionProtocol",
  },
  "cisco-arp-config": {
    title: "Cisco: Configuring ARP",
    url: "https://www.cisco.com/c/en/us/td/docs/routers/asr920/configuration/guide/ip/ip-arp.html",
  },
  "geeksforgeeks-ethernet-frame": {
    title: "GeeksForGeeks: Ethernet Frame Format",
    url: "https://www.geeksforgeeks.org/computer-networks/ethernet-frame-format/",
  },
  "ibm-ethernet-frame-format": {
    title: "IBM i: Ethernet frame format",
    url: "https://www.ibm.com/docs/en/i/7.6.0?topic=support-ethernet-frame-format",
  },
  "cisco-8021q-frame-format": {
    title: "Cisco: Inter-Switch Link and IEEE 802.1Q Frame Format",
    url: "https://www.cisco.com/c/en/us/support/docs/lan-switching/8021q/17056-741-4.html",
  },
  "cisco-access-trunk-interfaces": {
    title: "Cisco Nexus 3000: Configuring Access and Trunk Interfaces",
    url: "https://www.cisco.com/c/en/us/td/docs/switches/datacenter/nexus3000/sw/layer2/503_U3_1/b_Cisco_n3k_Layer_2_Switching_Config_503_U31_chapter_0111.html",
  },
  "networkacademy-vlan-trunking": {
    title: "NetworkAcademy.IO: VLAN Trunking",
    url: "https://www.networkacademy.io/ccna/ethernet/vlan-trunking",
  },
  "omnisecu-8021q-tagging": {
    title: "OmniSecu: IEEE 802.1Q VLAN Tagging",
    url: "https://www.omnisecu.com/cisco-certified-network-associate-ccna/ieee-802.1q-vlan-tagging.php",
  },
  "computernetworkingnotes-ethernet-frame": {
    title: "ComputerNetworkingNotes: Ethernet Frame Format Explained",
    url: "https://www.computernetworkingnotes.com/ccna-study-guide/ethernet-frame-format-explained.html",
  },
  "fortinet-osi-model": {
    title: "Fortinet: What Is the OSI Model?",
    url: "https://www.fortinet.com/resources/cyberglossary/osi-model",
  },
  "cloudmylab-tcp-handshake": {
    title: "CloudMyLab TCP 3-Way Handshake: SYN, SYN-ACK, ACK Explained",
    url: "https://blog.cloudmylab.com/tcp-ip-3-way-handshake",
  },
  "guru99-tcp-handshake": {
    title: "Guru99 TCP 3-Way Handshake",
    url: "https://www.guru99.com/tcp-3-way-handshake.html",
  },
  "geeksforgeeks-tcp-handshake": {
    title: "GeeksForGeeks TCP 3-Way Handshake Process",
    url: "https://www.geeksforgeeks.org/computer-networks/tcp-3-way-handshake-process/",
  },
  "geeksforgeeks-tcp-termination": {
    title: "GeeksForGeeks TCP Connection Termination",
    url: "https://www.geeksforgeeks.org/computer-networks/tcp-connection-termination/",
  },
  "ipwithease-tcp-termination": {
    title: "IP With Ease TCP Connection Termination",
    url: "https://ipwithease.com/tcp-connection-termination/",
  },
  "tcpipguide-tcp-termination": {
    title: "The TCP/IP Guide TCP Connection Termination",
    url: "http://www.tcpipguide.com/free/t_TCPConnectionTermination-2.htm",
  },
  "tcpipguide-time-wait": {
    title: "The TCP/IP Guide The TIME-WAIT State",
    url: "http://www.tcpipguide.com/free/t_TCPConnectionTermination-3.htm",
  },
  "rfc9293-tcp-state-machine": {
    title: "RFC 9293 State Machine Overview",
    url: "https://www.rfc-editor.org/info/rfc9293/#section-3.3.2",
  },
  "tcpipguide-tcp-fsm": {
    title: "The TCP/IP Guide TCP Finite State Machine",
    url: "http://www.tcpipguide.com/free/t_TCPOperationalOverviewandtheTCPFiniteStateMachineF-2.htm",
  },
  "ibm-tcp-connection-status": {
    title: "IBM TCP Connection Status",
    url: "https://www.ibm.com/docs/en/zos/2.1.0?topic=SSLTBW_2.1.0/com.ibm.zos.v2r1.halu101/constatus.html",
  },
  "krownet-tcp-states": {
    title: "TCP State Transition Diagram",
    url: "https://srg-ics-uplb.github.io/krownet/modules/tcp-states/index.html",
  },
  "cloudflare-cdn-overview": {
    title: "Cloudflare Learning Center: What is a CDN?",
    url: "https://www.cloudflare.com/learning/cdn/what-is-a-cdn/",
  },
  "cloudflare-cdn-reference-architecture": {
    title: "Cloudflare Reference Architecture: CDN",
    url: "https://developers.cloudflare.com/reference-architecture/architectures/cdn/",
  },
  "aws-cloudfront-delivers-content": {
    title: "AWS CloudFront: How CloudFront Delivers Content",
    url: "https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/HowCloudFrontWorks.html",
  },
  "aws-cloudfront-origin-shield": {
    title: "AWS CloudFront: Origin Shield",
    url: "https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/origin-shield.html",
  },
  "akamai-cdn-overview": {
    title: "Akamai: What is a CDN?",
    url: "https://www.akamai.com/our-thinking/cdn/what-is-a-cdn",
  },
  "akamai-content-delivery": {
    title: "Akamai TechDocs: How Akamai Works",
    url: "https://techdocs.akamai.com/start/docs/how-akamai-works",
  },
  "mdn-http-caching": {
    title: "MDN Web Docs: HTTP caching",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Caching",
  },
  "cloudflare-cache-revalidation": {
    title: "Cloudflare Cache: Revalidation",
    url: "https://developers.cloudflare.com/cache/concepts/revalidation/",
  },
  "xiaolin-mysql": {
    title: "小林 coding 图解 MySQL",
    url: "https://www.xiaolincoding.com/mysql/",
  },
  "xiaolin-redis": {
    title: "小林 coding Redis 面试题",
    url: "https://xiaolincoding.com/redis/base/redis_interview.html",
  },
  "doocs-advanced-java": {
    title: "doocs advanced-java",
    url: "https://github.com/doocs/advanced-java",
  },
  "rabbitmq-exchanges": {
    title: "RabbitMQ Docs: Exchanges",
    url: "https://www.rabbitmq.com/docs/exchanges",
  },
  "rabbitmq-amqp-concepts": {
    title: "RabbitMQ Tutorials: AMQP 0-9-1 Model Explained",
    url: "https://www.rabbitmq.com/tutorials/amqp-concepts",
  },
  "rabbitmq-alternate-exchanges": {
    title: "RabbitMQ Docs: Alternate Exchanges",
    url: "https://www.rabbitmq.com/docs/ae",
  },
  "rabbitmq-exchange-to-exchange-bindings": {
    title: "RabbitMQ Docs: Exchange to Exchange Bindings",
    url: "https://www.rabbitmq.com/docs/e2e",
  },
  "devinterview-docker": {
    title: "Devinterview Docker Interview Questions",
    url: "https://github.com/Devinterview-io/docker-interview-questions",
  },
  "devinterview-kubernetes": {
    title: "Devinterview Kubernetes Interview Questions",
    url: "https://github.com/Devinterview-io/kubernetes-interview-questions",
  },
  "kubernetes-components": {
    title: "Kubernetes Docs: Kubernetes Components",
    url: "https://kubernetes.io/docs/concepts/overview/components/",
  },
  "kubernetes-architecture": {
    title: "Kubernetes Docs: Cluster Architecture",
    url: "https://kubernetes.io/docs/concepts/architecture/",
  },
  "kubernetes-service": {
    title: "Kubernetes Docs: Service",
    url: "https://kubernetes.io/docs/concepts/services-networking/service/",
  },
  "kubernetes-dns": {
    title: "Kubernetes Docs: DNS for Services and Pods",
    url: "https://kubernetes.io/docs/concepts/services-networking/dns-pod-service/",
  },
  "kubernetes-scheduler": {
    title: "Kubernetes Docs: Kubernetes Scheduler",
    url: "https://kubernetes.io/docs/concepts/scheduling-eviction/kube-scheduler/",
  },
  "kubernetes-scheduling-framework": {
    title: "Kubernetes Docs: Scheduling Framework",
    url: "https://kubernetes.io/docs/concepts/scheduling-eviction/scheduling-framework/",
  },
  "kubernetes-assign-pod-node": {
    title: "Kubernetes Docs: Assigning Pods to Nodes",
    url: "https://kubernetes.io/docs/concepts/configuration/assign-pod-node/",
  },
  "kubernetes-taints-tolerations": {
    title: "Kubernetes Docs: Taints and Tolerations",
    url: "https://kubernetes.io/docs/concepts/scheduling-eviction/taint-and-toleration/",
  },
  "kubernetes-priority-preemption": {
    title: "Kubernetes Docs: Pod Priority and Preemption",
    url: "https://kubernetes.io/docs/concepts/scheduling-eviction/pod-priority-preemption/",
  },
  "dair-prompt-guide": {
    title: "DAIR.AI Prompt Engineering Guide",
    url: "https://github.com/dair-ai/Prompt-Engineering-Guide",
  },
  "awesome-context-engineering": {
    title: "Awesome Context Engineering",
    url: "https://github.com/Meirtz/Awesome-Context-Engineering",
  },
  "openai-structured-outputs": {
    title: "OpenAI: Introducing Structured Outputs in the API",
    url: "https://openai.com/index/introducing-structured-outputs-in-the-api/",
  },
  "anthropic-tool-use": {
    title: "Claude API Docs: How tool use works",
    url: "https://platform.claude.com/docs/en/agents-and-tools/tool-use/how-tool-use-works",
  },
  "langchain-tool-calling": {
    title: "LangChain Docs: Models - Tool calling",
    url: "https://docs.langchain.com/oss/python/langchain-models#tool-calling",
  },
  "linux-man-pages": {
    title: "Linux man-pages project",
    url: "https://www.kernel.org/doc/man-pages/",
  },
  "linux-kernel-docs": {
    title: "The Linux Kernel documentation",
    url: "https://docs.kernel.org/",
  },
  "gnu-bash-manual": {
    title: "GNU Bash Reference Manual",
    url: "https://www.gnu.org/software/bash/manual/bash.html",
  },
  "posix-base-spec": {
    title: "The Open Group Base Specifications Issue 8",
    url: "https://pubs.opengroup.org/onlinepubs/9799919799/",
  },
  "cp-algorithms": {
    title: "cp-algorithms",
    url: "https://cp-algorithms.com/",
  },
  "visualgo": {
    title: "VisuAlgo",
    url: "https://visualgo.net/en",
  },
  "redis-docs": {
    title: "Redis Documentation",
    url: "https://redis.io/docs/latest/",
  },
  "redis-commands": {
    title: "Redis Commands",
    url: "https://redis.io/docs/latest/commands/",
  },
  "mysql-reference": {
    title: "MySQL 8.4 Reference Manual",
    url: "https://dev.mysql.com/doc/refman/8.4/en/",
  },
  "mysql-innodb": {
    title: "MySQL Reference Manual: InnoDB Storage Engine",
    url: "https://dev.mysql.com/doc/refman/8.4/en/innodb-storage-engine.html",
  },
  "rabbitmq-docs": {
    title: "RabbitMQ Documentation",
    url: "https://www.rabbitmq.com/docs",
  },
  "docker-docs": {
    title: "Docker Docs",
    url: "https://docs.docker.com/",
  },
  "dockerfile-reference": {
    title: "Dockerfile reference",
    url: "https://docs.docker.com/reference/dockerfile/",
  },
  "kubernetes-docs": {
    title: "Kubernetes Documentation",
    url: "https://kubernetes.io/docs/home/",
  },
  "opentelemetry-docs": {
    title: "OpenTelemetry Documentation",
    url: "https://opentelemetry.io/docs/",
  },
  "openai-agents-guide": {
    title: "OpenAI Platform Docs: Agents",
    url: "https://platform.openai.com/docs/guides/agents",
  },
  "openai-prompt-engineering": {
    title: "OpenAI Platform Docs: Prompt engineering",
    url: "https://platform.openai.com/docs/guides/prompt-engineering",
  },
  "openai-retrieval": {
    title: "OpenAI Platform Docs: File search",
    url: "https://platform.openai.com/docs/guides/tools-file-search",
  },
  "nist-ai-rmf": {
    title: "NIST AI Risk Management Framework",
    url: "https://www.nist.gov/itl/ai-risk-management-framework",
  },
} as const;

export type KnowledgeSourceId = keyof typeof knowledgeSources;

export const categoryColors: Record<CategoryId, string> = {
  network: "#2563eb",
  os: "#7c3aed",
  algorithm: "#ea580c",
  mysql: "#0891b2",
  redis: "#dc2626",
  rabbitmq: "#f59e0b",
  backend: "#059669",
  docker: "#0284c7",
  kubernetes: "#4f46e5",
  agent: "#9333ea",
};

export const categorySourceRefs: Record<CategoryId, KnowledgeSourceId[]> = {
  network: ["cs-notes", "javaguide", "xiaolin-coding"],
  os: ["cs-notes", "javaguide", "xiaolin-coding"],
  algorithm: ["cs-notes", "javaguide"],
  mysql: ["javaguide", "xiaolin-mysql", "cs-notes"],
  redis: ["javaguide", "xiaolin-redis", "doocs-advanced-java"],
  rabbitmq: ["javaguide", "doocs-advanced-java"],
  backend: ["javaguide", "doocs-advanced-java", "cs-notes"],
  docker: ["javaguide", "devinterview-docker"],
  kubernetes: ["devinterview-kubernetes"],
  agent: ["dair-prompt-guide", "awesome-context-engineering"],
};
