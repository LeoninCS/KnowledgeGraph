import type { GraphKnowledgePoint } from "./types.ts";

const operatingSystemKnowledgePointBase = [
  /* <!-- KG_REVIEWED: 操作系统概览 | 2026-06-05 | source_count=15 --> */
  /* <!-- KG_EXPLAINED: 操作系统概览 | 2026-05-23 | source_count=7 --> */
  {
    sourceRefs: [
      "linux-kernel-docs",
      "linux-kernel-scheduler",
      "linux-kernel-mm-docs",
      "linux-kernel-vfs",
      "linux-man-pages",
      "linux-man-syscalls",
      "linux-man-proc",
      "posix-base-spec",
      "gnu-bash-manual",
      "ostep-introduction",
      "brendan-gregg-use-linux",
      "microsoft-linux-performance-bottlenecks",
      "cs-notes",
      "javaguide",
      "xiaolin-coding",
    ],
    id: "os-overview",
    zh: "操作系统概览",
    en: "Operating System Overview",
    area: "foundation",
    difficulty: "easy",
    summary: "理解操作系统如何把 CPU、内存、文件、设备和权限组织成可运行、可隔离、可排查的应用环境。",
    explanation: [
      "概念定位：操作系统概览解决的是“应用怎样安全、稳定、可观测地使用硬件资源”的基础问题。\n\n操作系统（Operating System, OS）位于硬件和应用之间，向上提供进程、线程、虚拟内存、文件、Socket、权限、时间、网络和设备等抽象，向下管理 CPU、内存、磁盘、网卡、终端和中断。它在真实系统里出现在每一次程序启动、系统调用、网络收发、文件读写、容器隔离、性能抖动和线上故障排查中。\n\n入门时先抓住三件事：操作系统给应用提供统一接口，内核集中管理受保护资源，硬件事件和应用请求都会通过受控路径进入内核。",
      "准确定义：从工程视角看，操作系统是一组系统软件：内核（kernel）负责特权资源管理，系统调用（system call）提供用户态访问内核能力的入口，运行时库、Shell、服务管理器和命令行工具把这些能力包装成日常可用的接口。\n\nPOSIX 规范定义了大量可移植的系统接口，Linux man-pages 描述 Linux 上具体系统调用和库接口，Linux Kernel 文档解释调度、内存、文件系统、驱动、网络等内核子系统。学习 OS 的核心收益是形成一套稳定判断框架：\n\n- 应用看到的是抽象：进程、地址空间、文件描述符、路径、Socket、权限位。\n- 内核维护的是状态：调度队列、页表、VMA、inode、dentry、socket buffer、设备队列、cgroup 统计。\n- 硬件执行的是动作：CPU 指令、内存访问、中断、DMA、磁盘 I/O、网卡收发。",
      "心智模型：把操作系统看成“资源管家 + 安全边界 + 证据系统”。\n\n资源管家负责把有限硬件分配给多个程序：CPU 按时间片和优先级轮转，内存按虚拟地址空间隔离，文件系统把块设备组织成目录和文件，网络栈把网卡能力抽象成 Socket。安全边界负责让普通应用通过受控入口请求特权操作，例如 `open`、`read`、`write`、`mmap`、`socket`、`fork`、`execve`。证据系统负责把运行状态暴露给工具，例如 `/proc`、`/sys`、日志、计数器、tracepoint、perf event 和 cgroup 指标。\n\n这个模型适合新手串联知识点，也适合工程师排查“CPU 很高、内存泄漏、文件句柄耗尽、磁盘打满、连接超时、容器被 OOM kill”这类问题。",
      "主流程机制：一次服务进程处理请求可以串起操作系统的关键路径。\n\n1. 启动阶段：Shell 或服务管理器调用 `fork`/`execve` 创建进程，内核建立 `task_struct`、文件描述符表、虚拟地址空间、凭证和调度实体。\n2. 运行阶段：CPU 在用户态执行应用代码；遇到文件、网络、时间、进程控制等特权操作时，应用通过系统调用进入内核态。\n3. 调度阶段：时钟中断、阻塞 I/O、唤醒事件或优先级变化会触发调度器选择下一个可运行任务，产生上下文切换。\n4. 内存阶段：进程访问虚拟地址，MMU 结合页表完成地址转换；缺页时内核分配物理页、加载文件页或触发回收与 swap。\n5. I/O 阶段：文件读写经过 VFS、页缓存、具体文件系统、块层和设备驱动；网络收发经过 Socket、协议栈、队列、驱动和网卡。\n6. 退出阶段：进程释放地址空间、文件描述符和内核对象，父进程回收退出状态，监控系统记录退出码、信号、资源用量和日志。",
      "核心抽象速查：操作系统知识可以按“CPU、内存、I/O、权限、隔离、观测”六条线组织。\n\n```text\nCPU: process, thread, scheduler, context switch, interrupt, signal\nMemory: virtual memory, page table, page fault, mmap, page cache, swap, OOM\nFile/I/O: file descriptor, inode, VFS, pipe, socket, epoll, block device\nSecurity: user/group, permission, capability, namespace, seccomp, LSM\nIsolation: process boundary, cgroup, namespace, container, VM\nObservability: /proc, /sys, top, ps, vmstat, iostat, ss, strace, perf, dmesg\n```\n\n这些抽象共同构成系统排查地图。比如“请求慢”可能是 CPU run queue 长、线程锁竞争、page fault 增多、磁盘 I/O 饱和、Socket 队列积压、连接数耗尽或下游网络超时，需要按证据逐层收敛。",
      "系统调用与边界：系统调用是应用进入内核的主要门，决定了用户态和内核态之间的数据复制、权限校验和错误返回。\n\n```c\nfd = open(\"/var/log/app.log\", O_RDONLY);\nn = read(fd, buf, sizeof(buf));\nclose(fd);\n```\n\n上面三行代码背后包含路径解析、权限检查、文件描述符分配、VFS 调用、页缓存读取和错误码返回。常见错误码本身就是排查线索：`EACCES` 指向权限，`ENOENT` 指向路径，`EMFILE` 指向进程文件描述符上限，`ENOSPC` 指向空间或 inode 耗尽，`EINTR` 指向信号打断，`EAGAIN` 指向非阻塞资源暂时不可用。\n\n性能上，系统调用会发生模式切换、参数检查、可能的数据复制和锁竞争；高频小 I/O、频繁创建线程、过度日志写入和大量短连接都会放大这些成本。",
      "深层机制与取舍：操作系统的设计目标经常相互拉扯，工程实践需要理解这些取舍。\n\n- 抽象提高可用性：文件描述符统一文件、管道、Socket 和设备；代价是必须理解不同对象的阻塞、缓冲和生命周期差异。\n- 隔离提高安全性：进程地址空间、用户权限、namespace 和 cgroup 限制故障影响面；代价是跨边界通信、资源统计和排查链路更复杂。\n- 缓存提高性能：页缓存、dentry cache、buffer、连接池和 DNS 缓存减少慢路径；代价是可见状态和磁盘/网络真实状态存在时间差。\n- 并发提高吞吐：多进程、多线程、异步 I/O 和 epoll 能承载更多连接；代价是竞态、死锁、惊群、调度开销和队列积压。\n- 延迟和吞吐常需分开优化：低延迟关注上下文切换、锁、缺页、队列等待和中断亲和性；高吞吐关注批量、缓存命中、I/O 合并、零拷贝和背压。",
      "工程场景：操作系统能力经常以“现象 + 指标 + 内核状态”的形式影响生产系统。\n\n- Web 服务：线程池、Socket backlog、文件描述符上限、epoll 事件循环、连接复用和内核 TCP 参数共同决定并发能力。\n- 数据库：页缓存、direct I/O、fsync、I/O 调度、NUMA、HugePages 和磁盘延迟直接影响查询尾延迟。\n- 消息队列：磁盘刷盘、网络缓冲、零拷贝、page cache 回写和 fd 数量影响吞吐与恢复速度。\n- 容器平台：namespace 提供进程、网络、挂载和 PID 视图隔离，cgroup 统计和限制 CPU、内存、I/O；OOM、CPU throttling 和文件系统层叠会改变应用现象。\n- 日志系统：顺序写、rotate、inode、磁盘空间、文件句柄和 `fsync` 策略决定可靠性与写入成本。",
      "边界与故障模式：操作系统故障通常表现为资源耗尽、队列堆积、权限失败、内核状态异常或观测盲区。\n\n- CPU：run queue 过长、上下文切换过高、软中断占比异常、锁竞争、cgroup CPU quota 导致 throttling。\n- 内存：RSS 增长、page fault 增多、swap 抖动、page cache 挤压、内存碎片、OOM killer 终止进程。\n- 文件系统：磁盘空间满、inode 耗尽、fd 泄漏、日志文件删除后空间仍被打开句柄占用、只读挂载、权限位错误。\n- I/O：磁盘延迟升高、队列深度过高、写回堵塞、同步刷盘放大尾延迟、网络队列丢包。\n- 进程：僵尸进程未回收、信号处理不当、线程数过多、阻塞系统调用卡住、fork 失败。\n- 安全与隔离：capability 缺失、seccomp 拦截、namespace 视图差异、SELinux/AppArmor 拒绝访问、容器资源限制触发。",
      "排查实践：OS 层排查要从影响面开始，再按 USE 方法观察 utilization、saturation 和 errors，并把进程视角与系统视角对齐。\n\n```bash\n# 1. 总览：负载、CPU、内存、运行时间\nuptime\ntop\nvmstat 1\n\n# 2. 进程：线程、状态、打开文件、系统调用\nps -eo pid,ppid,stat,comm,%cpu,%mem --sort=-%cpu | head\nls /proc/<pid>/fd | wc -l\ncat /proc/<pid>/status\nstrace -tt -p <pid>\n\n# 3. 内存与 OOM 证据\nfree -h\ncat /proc/meminfo\ndmesg -T | grep -i -E 'oom|out of memory|killed process'\n\n# 4. 磁盘与文件系统\ndf -h\ndf -i\niostat -xz 1\nlsof +L1\n\n# 5. 网络与 Socket\nss -s\nss -ltnp\nss -ant state established | wc -l\n```\n\n建议流程：\n\n1. 固定现象：时间窗、主机、容器、进程、版本、流量、错误码和发布记录。\n2. 看系统饱和：CPU run queue、内存可用量、swap、磁盘 util、I/O await、网络重传和 fd 使用率。\n3. 看进程状态：`R/S/D/Z`、线程数、RSS、句柄数、系统调用卡点、信号和退出码。\n4. 看内核证据：`dmesg`、`/proc`、`/sys/fs/cgroup`、perf、trace、OOM 日志和文件系统错误。\n5. 做小实验：降低并发、调整连接池、切换同步/异步 I/O、扩大 fd/线程/内存限制、隔离磁盘或网络路径，验证瓶颈归因。\n6. 固化修复：补监控、告警阈值、资源上限、启动参数、容量水位和回滚脚本。",
      "常见误区：成熟的 OS 理解来自边界、状态和证据的组合判断。\n\n- CPU 使用率低仍可能很慢，因为线程可能在锁、I/O、page fault、网络或 cgroup throttle 上等待。\n- 内存“被占满”需要区分匿名内存、页缓存、slab、buffer、swap 和 cgroup 统计，Linux 会积极使用空闲内存做缓存。\n- 文件删除释放的是目录项引用，仍被进程打开的文件会继续占用磁盘空间，`lsof +L1` 能看到证据。\n- 负载高需要结合 CPU 核数和进程状态判断，`D` 状态任务会推高 load average。\n- 容器里看到的 PID、网络和文件系统是隔离视图，宿主机内核和 cgroup 限制仍决定最终行为。\n- 系统调用失败的 `errno` 是接口契约的一部分，排查时要保留返回值、错误码和调用参数。",
      "面试与复盘抓手：回答操作系统概览题时，建议按“目标 -> 抽象 -> 机制 -> 故障 -> 证据”展开。\n\n高频追问包括：\n\n- 操作系统为什么需要用户态和内核态？一次系统调用经历哪些步骤？\n- 进程、线程、协程、上下文切换和调度器的关系是什么？\n- 虚拟内存解决了什么问题？页表、TLB、缺页异常和 OOM 如何串起来？\n- 文件描述符、inode、VFS、page cache 和磁盘 I/O 的关系是什么？\n- `top` 看到 load 很高但 CPU 使用率不高，如何排查？\n- 线上 fd 泄漏、磁盘空间删除后仍满、容器 OOM、连接超时分别看哪些证据？\n- 操作系统抽象带来哪些性能成本？哪些场景适合批量、缓存、零拷贝、异步 I/O 或限流背压？",
      "参考来源：本文用 OSTEP 的 virtualization、concurrency、persistence 主线组织学习框架；内核职责、调度、内存管理和 VFS 参考 Linux Kernel Documentation；系统调用、`/proc` 和命令语义参考 Linux man-pages；可移植接口参考 POSIX Base Specifications；Shell 与命令执行语义参考 GNU Bash Manual；性能排查方法参考 Brendan Gregg USE Method 与 Microsoft Learn Linux 性能瓶颈排查；中文知识组织和面试表达参考 CS-Notes、JavaGuide 与小林 coding。",
    ],
    typicalProblems: [
      "操作系统解决什么问题？请从资源管理、抽象、安全边界和可观测性四个角度回答。",
      "应用从用户态进入内核态的一次系统调用会经历哪些步骤？返回值和 `errno` 在排查中有什么价值？",
      "进程、线程、调度器、上下文切换、中断和信号之间怎样协作？",
      "虚拟内存、页表、TLB、缺页异常、page cache、swap 和 OOM 如何串成一条内存管理链路？",
      "文件描述符、inode、VFS、页缓存、文件系统和块设备在一次文件读写中分别负责什么？",
      "线上 CPU 使用率低但请求很慢，如何从锁、I/O、缺页、网络、cgroup 和调度队列收集证据？",
      "磁盘空间删除后仍然占满、fd 泄漏、僵尸进程、容器 OOM、CPU throttling 分别看哪些命令和指标？",
      "为什么容器隔离依赖 Linux namespace 和 cgroup？这种隔离对排查和安全有什么影响？",
      "操作系统抽象带来哪些性能成本？批量、缓存、异步 I/O、零拷贝和背压分别适合解决什么问题？",
    ],
    prerequisites: [],
    related: ["kernel", "system-call", "process", "memory-management", "file-system", "io"],
    learningPathPosition: 1,
  },
  /* <!-- KG_REVIEWED: 内核 | 2026-06-05 | source_count=17 --> */
  /* <!-- KG_EXPLAINED: 内核 | 2026-05-23 | source_count=7 --> */
  {
    sourceRefs: [
      "linux-kernel-docs",
      "linux-kernel-scheduler",
      "linux-kernel-mm-docs",
      "linux-kernel-vfs",
      "linux-man-pages",
      "linux-man-syscalls",
      "linux-man-proc",
      "posix-base-spec",
      "ostep-introduction",
      "brendan-gregg-use-linux",
      "microsoft-linux-performance-bottlenecks",
      "ibm-linux-kernel-anatomy",
      "linux-cgroup-v2",
      "linux-man-pages-namespaces",
      "cs-notes",
      "javaguide",
      "xiaolin-coding",
    ],
    id: "kernel",
    zh: "内核",
    en: "Kernel",
    area: "foundation",
    difficulty: "easy",
    summary: "理解内核如何在受保护的特权空间里统一管理 CPU、内存、文件、设备、网络、安全边界和运行证据。",
    explanation: [
      "概念定位：内核解决的是“多个程序怎样安全共享同一台机器的硬件资源”的核心问题。\n\n内核（Kernel）是操作系统中运行在特权执行环境里的核心部分，直接管理 CPU、内存、设备、中断、文件系统、网络协议栈、权限和隔离资源。应用程序运行在用户态，遇到进程创建、文件读写、网络收发、内存映射、时间等待、信号处理和权限操作时，通过系统调用、异常或中断进入内核路径。\n\n在真实系统里，内核出现在每一次 `read`、`write`、`fork`、`execve`、`mmap`、`socket`、`epoll_wait`、包收发、磁盘刷盘、容器限额和 OOM 处理之中。新手先把内核理解为“硬件资源的统一裁判”；经验工程师继续关注内核路径上的状态、锁、队列、缓存、限额和观测证据。",
      "准确定义：Linux 内核是一个模块化单体内核（modular monolithic kernel）。进程管理、内存管理、VFS、网络栈、设备驱动、cgroup、namespace、LSM、调度器和中断处理等能力主要运行在同一内核地址空间，模块机制允许部分驱动和功能按需加载。\n\n这个定义里有三层工程含义：\n\n- 特权边界：内核可以执行特权指令、访问硬件寄存器、维护页表、处理中断和调度任务。\n- 接口边界：用户态主要通过系统调用和虚拟文件接口使用内核能力，例如 `/proc`、`/sys`、netlink 和设备文件。\n- 故障边界：内核态代码共享内核地址空间，驱动缺陷、内核栈溢出、死锁、内存破坏和长时间关中断会影响整机稳定性。",
      "心智模型：把内核看成“带账本的交通枢纽”。\n\n交通枢纽负责把 CPU 时间、物理页、磁盘块、网卡队列和设备中断分配给进程；账本记录每个对象的归属、权限、引用计数、状态和统计数据。应用拿到的文件描述符、PID、虚拟地址、Socket、目录路径和容器视图，都是内核账本里的受控句柄。\n\n这个模型可以指导排查：请求卡住时看任务状态和等待队列；内存异常时看 VMA、RSS、page cache、slab 和 cgroup；文件问题看 fd 表、dentry、inode、挂载点和权限；网络问题看 socket 状态、队列、协议计数器和网卡错误。",
      "主流程机制：一次应用读文件或收网络包，背后会穿过多个内核子系统。\n\n1. 用户态调用 glibc 包装函数，例如 `read(fd, buf, size)` 或 `recvmsg(fd, ...)`。\n2. CPU 通过体系结构定义的系统调用入口切换到内核态，内核保存上下文并根据系统调用号找到处理函数。\n3. 内核校验参数、权限、文件描述符和地址范围，把用户态指针转换为受控的数据复制路径。\n4. VFS 根据 `fd` 找到内核中的 `struct file`，再关联到 dentry、inode、具体文件系统或 socket 操作表。\n5. 数据命中页缓存时直接复制到用户缓冲区；命中网络接收队列时从 socket buffer 取数据；慢路径会触发块 I/O、协议栈等待、设备驱动或进程睡眠。\n6. 调度器把等待 I/O 的任务移出可运行队列，I/O 完成、中断、软中断或唤醒事件到达后再把任务放回可运行队列。\n7. 内核返回读取字节数或错误码，glibc 把失败场景转换为 `-1` 和 `errno`，应用据此重试、降级或报错。\n\n```c\nssize_t n = read(fd, buf, sizeof(buf));\nif (n < 0) {\n  perror(\"read\"); // errno 可能是 EINTR、EAGAIN、EBADF、EIO 等\n}\n```",
      "核心子系统：内核的知识可以按“谁拥有状态、谁改变状态、谁暴露证据”来组织。\n\n```text\nProcess: task_struct, scheduler entity, signal, wait queue, namespace\nMemory: mm_struct, VMA, page table, struct page, slab, page cache, OOM\nFile: fd table, struct file, dentry, inode, superblock, mount namespace\nNetwork: socket, sk_buff, qdisc, netfilter, TCP state, NIC driver\nDevice: interrupt, DMA, block layer, driver, firmware, sysfs\nIsolation: cgroup, namespace, capability, seccomp, LSM\nObservability: /proc, /sys, tracepoint, perf event, eBPF, dmesg\n```\n\n这些结构决定了故障证据的位置。`/proc/<pid>/status` 反映进程与线程状态，`/proc/meminfo` 反映系统内存，`/proc/net/*` 和 `ss` 反映 socket 与协议栈，`/sys/fs/cgroup` 反映容器或服务组的资源限制。",
      "调度、中断与并发：内核通过调度器让多个任务共享 CPU，通过中断和软中断响应硬件与网络事件，通过锁、RCU、原子操作和 per-CPU 数据结构保护共享状态。\n\n关键路径可以这样读：\n\n- 调度器维护可运行任务，结合优先级、调度类、CPU 亲和性、NUMA、cgroup quota 和负载均衡选择下一个任务。\n- 中断处理硬件事件，软中断和工作队列把部分处理放到后续上下文中，网络收包、定时器和块 I/O 都大量依赖这些机制。\n- 上下文切换保存寄存器、内核栈、地址空间和调度状态，过高的切换频率会放大缓存失效和调度开销。\n- 内核并发强调缩短临界区、避免长时间持锁、选择合适上下文。中断上下文、软中断上下文和进程上下文的可睡眠能力与锁选择不同。\n\n生产现象包括 run queue 过长、softirq CPU 占比高、线程长期 `D` 状态、锁竞争热点、CPU throttling 和单核打满。",
      "内存、VFS 与缓存：内核在内存和文件路径上大量使用缓存，性能收益与可见性差异同时出现。\n\nLinux 内存管理覆盖物理页分配、页表、VMA、缺页异常、slab、页回收、swap、HugeTLB、Transparent Huge Pages、page cache 和 OOM。文件系统路径由 VFS 统一抽象，目录项缓存 dcache、inode cache、page cache、superblock 和 `struct file` 共同支撑路径解析、权限判断和读写。\n\n工程判断要抓住三点：\n\n- `free` 看到的 used 包含 page cache 和 buffer，缓存可以提升文件读写性能，并在压力下参与回收。\n- 删除文件释放目录项引用，仍被进程打开的 `struct file` 会继续持有空间，`lsof +L1` 能定位。\n- `fsync`、direct I/O、mmap、writeback、脏页比例和块设备队列会影响数据库、消息队列和日志系统的尾延迟。",
      "隔离、安全与容器：现代生产环境经常通过内核能力把服务装进容器、沙箱或资源组。\n\nnamespace 改变进程看到的 PID、挂载、网络、UTS、IPC、用户和 cgroup 视图；cgroup v2 统计和限制 CPU、内存、I/O、PID 数量与压力信息；capability 把传统 root 权限拆成更细粒度能力；seccomp 和 LSM 控制系统调用和对象访问。\n\n这些机制让容器具备进程隔离、网络隔离、文件系统视图隔离和资源限额。排查时要同时看容器视图与宿主机视图：容器内 `top`、`df`、`ip` 和 `/proc` 看到的是命名空间结果，真正的调度、OOM、I/O 限制和内核日志仍由宿主机内核负责。",
      "性能、安全与取舍：内核设计把性能、安全和通用性放在同一条路径上权衡。\n\n- 性能收益：系统调用提供稳定 ABI，页缓存减少磁盘访问，零拷贝减少数据复制，epoll 降低大量连接的轮询成本，cgroup 把资源争用控制在组内。\n- 性能成本：系统调用有模式切换和参数校验，高频小 I/O、过多线程、锁竞争、频繁缺页、过度日志和驱动慢路径会扩大开销。\n- 安全收益：用户态/内核态隔离、权限、capability、namespace、seccomp、LSM 和审计日志共同缩小攻击面。\n- 安全成本：内核漏洞和驱动漏洞具备高权限影响面，容器逃逸、系统调用暴露面、特权容器和挂载配置需要严格审计。\n- 运维取舍：越多内核参数和隔离层，越需要统一记录版本、配置、指标、日志、trace 和回滚策略。",
      "边界与故障模式：内核问题常以“应用异常 + 系统指标异常 + 内核日志”组合出现。\n\n- 系统调用返回 `EINTR`、`EAGAIN`、`EMFILE`、`ENOSPC`、`ENOMEM`、`EACCES`、`EPERM`、`EIO`，这些错误码直接指向信号、非阻塞资源、fd 上限、空间、内存、权限或设备故障。\n- 任务长期 `D` 状态通常说明阻塞在不可中断 I/O 或内核等待路径，load average 会升高。\n- OOM killer 日志会记录被杀进程、内存水位和 cgroup 信息，容器 OOM 与宿主机 OOM 需要分开核对。\n- 软中断过高、网卡丢包、TCP 重传和 socket backlog 溢出会让应用看到超时或连接重置。\n- 文件系统只读、inode 耗尽、日志文件已删除但 fd 仍打开、脏页回写堵塞会制造磁盘空间和写延迟故障。\n- 内核版本、发行版补丁、驱动、eBPF 程序、LSM 策略和硬件固件差异会改变同一命令的表现。",
      "排查实践：内核层排查优先建立“现象 -> 子系统 -> 证据 -> 小实验”的闭环。\n\n```bash\n# 1. 内核版本、启动参数和近期内核日志\nuname -a\ncat /proc/cmdline\ndmesg -T | tail -100\n\n# 2. 进程、线程、调度和系统调用\nps -eo pid,ppid,stat,wchan:24,comm --sort=stat | head -40\ncat /proc/<pid>/status\ncat /proc/<pid>/stack 2>/dev/null || true\nstrace -tt -f -p <pid>\nperf top\n\n# 3. 内存、cgroup 和 OOM\nfree -h\ncat /proc/meminfo\ncat /sys/fs/cgroup/memory.current 2>/dev/null || true\ndmesg -T | grep -i -E 'oom|out of memory|killed process'\n\n# 4. 文件、fd、磁盘与网络\nls /proc/<pid>/fd | wc -l\nlsof +L1\ndf -h && df -i\niostat -xz 1\nss -s\nip -s link\n```\n\n建议流程：\n\n1. 固定时间线：发布、流量、错误码、主机、容器、内核版本、驱动版本和资源限额。\n2. 定位子系统：CPU 调度、内存、文件系统、块 I/O、网络、权限、cgroup 或设备驱动。\n3. 收集证据：`/proc`、`/sys`、`dmesg`、系统调用 trace、perf/eBPF、服务日志和监控指标。\n4. 做可逆实验：降并发、扩大 fd 或内存限制、关闭某个内核参数灰度、切换节点、隔离磁盘或网络路径。\n5. 固化修复：容量阈值、内核参数、资源上限、驱动版本、告警规则、压测用例和回滚方案。",
      "常见误区：成熟的内核理解来自接口、状态和上下文的同时判断。\n\n- 内核是运行中系统的核心控制面，发行版工具、Shell 和系统服务是用户态配套组件。\n- 系统调用是用户态访问内核能力的稳定入口，glibc 包装函数会处理寄存器传参、返回值和 `errno`。\n- `/proc` 和 `/sys` 是内核状态的观测接口，也可能受 namespace、权限、挂载选项和 cgroup 影响。\n- CPU 高、内存高、磁盘慢和网络慢经常互相放大，内核队列和缓存状态能解释应用日志里的超时。\n- 容器共享宿主机内核，资源限制和命名空间改变可见视图，宿主机内核版本决定很多运行时边界。",
      "面试与复盘抓手：回答内核题时按“职责 -> 边界 -> 子系统 -> 主路径 -> 证据 -> 取舍”组织。\n\n典型深入追问包括：\n\n- Linux 内核设置用户态/内核态边界的目标是什么？一次系统调用经历哪些步骤？\n- 单体内核、模块化内核和微内核的设计差异分别体现在哪里？\n- `task_struct`、调度器、run queue、上下文切换、中断和软中断怎样协作？\n- VFS 如何把 `open/read/write` 映射到具体文件系统、socket 或设备？\n- page cache、slab、VMA、页表、缺页异常和 OOM 怎样串成内存路径？\n- 容器依赖哪些内核能力？namespace、cgroup、capability、seccomp 各自承担什么职责？\n- 线上 load 高、CPU 低、`D` 状态多、OOM、fd 泄漏、磁盘删除后空间仍满分别怎样定位？\n- 内核优化里批量、缓存、零拷贝、异步 I/O、亲和性、限流和背压分别解决什么问题？",
      "参考来源：本文以内核官方文档作为主线，调度参考 Linux Kernel Scheduler 文档，内存参考 Memory Management 文档，文件路径参考 VFS 文档；系统调用和 `/proc` 语义参考 Linux man-pages；内核子系统概览参考 IBM Anatomy of the Linux kernel；操作系统学习框架参考 OSTEP；容器隔离边界参考 cgroup v2 与 namespaces man-page；生产排查方法参考 Brendan Gregg USE Method 与 Microsoft Learn Linux 性能瓶颈排查；中文学习表达参考 CS-Notes、JavaGuide 与小林 coding。",
    ],
    typicalProblems: [
      "内核解决什么问题？请从硬件资源管理、特权边界、接口抽象和运行证据四个角度回答。",
      "Linux 内核的主要子系统有哪些？调度、内存、VFS、网络、设备驱动、cgroup 和 namespace 分别承担什么职责？",
      "一次 `read` 或 `recvmsg` 系统调用从用户态进入内核态后经历哪些关键步骤？",
      "glibc 包装函数、系统调用号、返回值和 `errno` 在应用排障中有什么价值？",
      "调度器、run queue、上下文切换、中断、软中断和工作队列如何协作处理 CPU 与 I/O 事件？",
      "VFS 中 `struct file`、dentry、inode、superblock 和文件描述符之间是什么关系？",
      "Linux 内存管理中的 VMA、页表、page cache、slab、swap、OOM 和 cgroup memory 如何共同影响应用？",
      "容器为什么共享宿主机内核？namespace、cgroup、capability、seccomp 和 LSM 怎样共同形成隔离边界？",
      "线上 load 很高但 CPU 使用率一般，如何用 `ps`、`wchan`、`/proc/<pid>/stack`、`iostat`、`dmesg` 和 trace 定位？",
      "出现 `EMFILE`、`ENOSPC`、`ENOMEM`、`EACCES`、`EIO` 时，分别应该收集哪些内核和应用证据？",
      "内核路径的性能取舍有哪些？系统调用、锁、缓存、零拷贝、epoll、cgroup 和 eBPF 分别带来什么收益与成本？",
    ],
    prerequisites: ["os-overview"],
    related: ["kernel-mode", "system-call", "interrupt", "scheduler", "memory-management", "file-system", "socket"],
    learningPathPosition: 2,
  },
  /* <!-- KG_REVIEWED: 用户态与内核态 | 2026-06-05 | source_count=20 --> */
  /* <!-- KG_EXPLAINED: 用户态与内核态 | 2026-05-23 | source_count=7 --> */
  {
    sourceRefs: [
      "linux-kernel-docs",
      "linux-kernel-entry-exit",
      "linux-kernel-labs-syscalls",
      "linux-man-pages",
      "linux-man-syscalls",
      "linux-man-pages-syscall",
      "linux-man-pages-errno",
      "linux-man-pages-vdso",
      "linux-man-pages-capabilities",
      "linux-man-pages-seccomp",
      "linux-man-pages-strace",
      "linux-kernel-threat-model",
      "posix-base-spec",
      "ostep-introduction",
      "brendan-gregg-use-linux",
      "microsoft-linux-performance-bottlenecks",
      "ruanyifeng-user-kernel-space",
      "xiaolincoding-os-interview",
      "cs-notes",
      "javaguide",
    ],
    id: "kernel-mode",
    zh: "用户态与内核态",
    en: "User Mode and Kernel Mode",
    area: "foundation",
    difficulty: "medium",
    summary: "理解 CPU 特权级如何把应用执行环境和内核资源管理环境分开，并通过系统调用、中断和异常建立受控入口。",
    explanation: [
      "概念定位：用户态与内核态解决的是“应用怎样使用受保护硬件资源，同时让系统保持隔离、稳定和可审计”的问题。\n\n用户态（user mode / user space）是普通应用、运行时库、Shell、数据库、Web 服务和容器进程主要执行的环境；内核态（kernel mode / kernel space）是内核运行的特权环境，负责调度 CPU、维护页表、管理内存、处理文件系统、网络协议栈、设备驱动、中断、权限和隔离。真实系统里，每一次 `read`、`write`、`socket`、`mmap`、`fork`、`execve`、`epoll_wait`、信号处理和网络包收发都会跨过这条边界。\n\n新手先抓住一句话：应用在用户态做业务计算，资源管理集中进入内核态执行。经验工程师继续关注跨边界的参数校验、上下文保存、数据复制、错误码、锁、队列和观测证据。",
      "准确定义：用户态与内核态是 CPU 特权级和操作系统地址空间共同形成的执行边界。\n\n在 Linux 上，用户进程拥有自己的虚拟地址空间、文件描述符表、凭证和运行上下文；内核拥有内核地址空间和特权指令能力。应用通过系统调用、异常、缺页、信号递送和中断返回等路径与内核协作。POSIX 定义可移植接口，Linux man-pages 描述系统调用和错误码，Linux Kernel entry/exit 文档描述进入和退出内核路径时的上下文处理。\n\n这条边界带来三类工程价值：\n\n- 安全：特权操作集中做权限检查，越权访问、非法地址、危险系统调用和对象权限由内核裁决。\n- 稳定：单个进程的用户态崩溃通常表现为进程退出、信号或错误码，系统整体继续运行。\n- 可观测：系统调用、`errno`、`strace`、`/proc`、`dmesg`、perf 和 eBPF 能把跨边界行为转化为证据。",
      "心智模型：把用户态与内核态看成“业务大厅”和“受控机房”。\n\n业务大厅里运行应用逻辑：解析请求、执行业务规则、操作缓存、拼装 SQL、序列化响应。受控机房里管理共享资源：CPU 时间、物理页、磁盘块、网卡队列、进程表、页表、inode、socket buffer、cgroup 统计和安全策略。大厅需要资源时，通过窗口提交请求；窗口就是系统调用、异常和中断入口。\n\n这个模型能帮助排查：\n\n- 应用日志看到超时，内核证据可能落在调度队列、磁盘 I/O、TCP 重传、fd 上限或 cgroup throttle。\n- 应用看到 `EACCES`、`EPERM`、`EMFILE`、`ENOMEM`、`EAGAIN`，边界处的权限、限额和资源状态就是关键线索。\n- 容器里的进程仍然通过宿主机内核完成系统调用，namespace 和 cgroup 改变可见视图与资源配额。",
      "主流程机制：一次 `read(fd, buf, size)` 可以展示用户态进入内核态再返回的完整链路。\n\n1. 用户态应用调用 libc 包装函数，参数包括文件描述符、用户缓冲区地址和长度。\n2. 包装函数按体系结构 ABI 把系统调用号和参数放入寄存器，执行 `syscall`、`sysenter`、`svc` 等陷入指令。\n3. CPU 切换到内核入口，内核保存必要上下文，进入 entry/exit 框架，完成审计、跟踪、抢占、信号和架构相关处理。\n4. 内核根据系统调用号分派到处理函数，校验 fd、权限、地址范围和长度，把用户态指针纳入安全复制路径。\n5. VFS 根据 fd 找到 `struct file`，再进入具体文件系统、页缓存、块设备或 socket 操作。\n6. 快路径命中缓存时复制数据并返回字节数；慢路径可能让任务睡眠，等待磁盘、网络、中断、软中断或唤醒事件。\n7. 内核设置返回值并回到用户态；libc 把失败返回转换为 `-1` 和 `errno`，应用据此重试、降级或记录错误。\n\n```c\n#include <errno.h>\n#include <stdio.h>\n#include <unistd.h>\n\nchar buf[4096];\nssize_t n = read(fd, buf, sizeof(buf));\nif (n == -1) {\n  perror(\"read\"); // 典型 errno: EINTR, EAGAIN, EBADF, EFAULT, EIO\n}\n```\n\n这个流程解释了系统调用成本的来源：模式切换、寄存器与上下文处理、参数校验、权限检查、用户态/内核态数据复制、缓存命中率、锁竞争和等待队列调度。",
      "入口类型：用户态进入内核态主要有系统调用、异常和硬件中断三类路径，它们共同维护系统运行。\n\n```text\nSystem call: open/read/write/socket/clone/execve/mmap/ioctl\nException: page fault, divide error, invalid instruction, breakpoint\nInterrupt: timer, disk, NIC, keyboard, IPI, device completion\nFast path: vDSO maps selected kernel-provided helper into user space\n```\n\n系统调用来自应用主动请求；异常来自 CPU 执行过程中发现的条件，例如缺页异常触发内核补页；中断来自硬件或 CPU 之间的异步事件，例如网卡收包、磁盘完成和定时器 tick。vDSO 是一个重要优化：部分时间读取等操作可以通过内核映射到用户空间的代码完成，减少完整系统调用路径开销。",
      "关键状态与数据结构：跨越用户态/内核态边界时，内核维护一组能解释故障的对象。\n\n- `task_struct`：进程/线程的内核表示，包含调度状态、凭证、信号、命名空间、cgroup 关联等信息。\n- `mm_struct` 与 VMA：描述用户进程虚拟地址空间，缺页、`mmap`、堆栈增长和内存保护都依赖它们。\n- 文件描述符表：把用户态整数 fd 映射到内核 `struct file`，再关联 VFS、inode、socket 或设备。\n- 凭证与能力：UID/GID、capabilities、LSM 标签和 seccomp 策略共同决定系统调用能访问哪些对象。\n- 等待队列与调度实体：I/O、锁、定时器和信号会改变任务状态，`R/S/D/Z` 等状态能帮助判断卡点。\n\n经验判断来自对象链路：`fd -> struct file -> inode/socket`，`virtual address -> VMA -> page table -> struct page`，`PID -> task_struct -> scheduler/cgroup/namespace`。",
      "工程场景：这条边界在高并发服务、数据库、容器、安全沙箱和性能优化里反复出现。\n\n- Web 服务：大量短连接会放大 `accept`、`read`、`write`、`epoll_wait` 和 TCP 队列成本，fd 上限、backlog、TIME_WAIT、软中断和 CPU 亲和性都影响吞吐。\n- 数据库：`pread`、`pwrite`、`fsync`、`mmap`、direct I/O、page cache 和块设备队列决定查询尾延迟与刷盘可靠性。\n- 容器平台：进程在用户态执行业务代码，namespace 改变 PID、网络和挂载视图，cgroup 控制 CPU、内存、I/O，seccomp 和 capability 限制系统调用与特权能力。\n- 安全沙箱：浏览器、CI Runner、在线判题和多租户服务会组合 seccomp、namespace、capability、只读文件系统和资源限额控制攻击面。\n- 性能优化：批量 I/O、连接复用、零拷贝、异步 I/O、vDSO、减少小对象频繁读写，都围绕降低跨边界次数、等待时间和复制成本展开。",
      "边界与故障模式：用户态/内核态问题常以应用错误、系统调用卡点和内核指标组合出现。\n\n- 权限失败：`EACCES`、`EPERM`、SELinux/AppArmor 拒绝、capability 缺失、seccomp 拦截，常见于容器、特权端口、挂载、ptrace 和网络配置。\n- 资源耗尽：`EMFILE`、`ENFILE`、`ENOMEM`、`ENOSPC`、inode 耗尽、PID 上限、cgroup memory 或 pids 限制，表现为创建连接、线程、文件或进程失败。\n- 阻塞等待：线程处于 `D` 状态、`strace` 停在 `futex`、`read`、`fsync`、`connect`、`poll`，通常指向锁、磁盘、网络或下游等待。\n- 参数与地址错误：`EFAULT`、`EINVAL`、`EBADF`、`EPIPE` 表示用户态参数、fd 生命周期、管道/socket 状态与接口契约发生偏离。\n- 性能抖动：高频系统调用、上下文切换过高、缺页增多、软中断占用、page cache 回收、TCP 重传和 cgroup throttle 会把尾延迟推高。\n- 版本差异：内核版本、glibc、架构 ABI、seccomp profile、发行版补丁和容器运行时会影响同一系统调用的可用性与返回细节。",
      "排查实践：跨边界排查要把应用现象、系统调用证据和内核状态对齐。\n\n```bash\n# 1. 确认系统调用卡点和 errno\nstrace -ff -tt -T -p <pid>\nstrace -e trace=file,network,process -o /tmp/trace.log <command>\n\n# 2. 查看进程状态、线程、fd、内存与限制\nps -o pid,ppid,stat,wchan:24,comm -p <pid>\ncat /proc/<pid>/status\ncat /proc/<pid>/limits\nls /proc/<pid>/fd | wc -l\n\n# 3. 观察内核和资源证据\ndmesg -T | tail -100\nvmstat 1\niostat -xz 1\nss -s\ncat /proc/sys/kernel/pid_max\n\n# 4. 容器和安全边界\ncat /proc/<pid>/status | grep -E 'Cap|Seccomp|NoNewPrivs'\ncat /sys/fs/cgroup/memory.current 2>/dev/null || true\ncat /sys/fs/cgroup/cpu.stat 2>/dev/null || true\n```\n\n建议流程：\n\n1. 固定入口：记录报错时间、系统调用名、参数、返回值、`errno`、进程 ID、容器 ID 和内核版本。\n2. 判断类型：权限、限额、阻塞、参数、设备、网络、内存或安全策略。\n3. 收集双视角证据：用户态看日志、栈、配置和重试；内核态看 `/proc`、`/sys`、`dmesg`、perf、eBPF 和系统调用 trace。\n4. 做小实验：提高 fd/进程/内存限额、调整 seccomp/capability、切换节点、降低并发、扩大超时或隔离磁盘网络路径。\n5. 固化修复：把限额、系统调用错误码、阻塞时间、上下文切换、缺页、软中断和 cgroup throttle 纳入监控与压测。",
      "性能、安全与取舍：用户态/内核态边界是性能和安全共同作用的位置。\n\n- 性能收益：边界让内核集中做缓存、调度、I/O 合并、权限检查和错误返回，应用获得稳定 ABI。\n- 性能成本：频繁跨边界会增加模式切换、参数校验、复制、锁和调度成本，高频小 I/O、短连接、频繁 `stat`、过度日志都会放大成本。\n- 安全收益：权限位、UID/GID、capability、seccomp、namespace、cgroup 和 LSM 让应用访问资源时经过统一裁决。\n- 安全成本：系统调用暴露面、特权容器、宽松 capability、挂载宿主机路径和危险 `ioctl` 需要审计与最小授权。\n- 设计取舍：吞吐优先时使用批量、缓存、连接复用、零拷贝和异步 I/O；延迟优先时关注 p99 系统调用耗时、page fault、上下文切换、锁等待和 CPU 亲和性。",
      "常见误区：成熟理解来自“边界、入口、状态、证据”四个维度。\n\n- 用户态和内核态是执行权限、地址空间和接口契约共同形成的边界。\n- 系统调用是应用主动请求内核能力的主入口，异常和中断也会让 CPU 进入内核处理路径。\n- `errno` 是接口语义的一部分，保留系统调用名、参数和错误码能显著缩短排查时间。\n- vDSO、页缓存、epoll、零拷贝和批量 I/O 都是在减少跨边界成本或慢路径等待。\n- 容器共享宿主机内核，安全策略和资源限制决定系统调用能否成功以及能消耗多少资源。\n- 用户态崩溃、内核态崩溃、系统调用失败和系统调用阻塞是四类现象，需要分别收集证据。",
      "面试与复盘抓手：回答用户态与内核态题时，按“为什么需要边界 -> 怎样进入内核 -> 内核做什么 -> 返回什么证据 -> 工程取舍”展开。\n\n高频追问包括：\n\n- 用户态与内核态分别解决什么问题？CPU 特权级、地址空间和系统调用 ABI 各自承担什么职责？\n- 一次 `read`、`write`、`socket` 或 `mmap` 从用户态进入内核态经历哪些步骤？\n- 系统调用、异常、中断和 vDSO 的关系是什么？\n- `errno`、返回值、`strace`、`/proc/<pid>/status` 和 `dmesg` 在排查中怎样配合？\n- 频繁系统调用为什么会影响性能？批量 I/O、缓存、零拷贝、异步 I/O 和连接复用怎样降低成本？\n- 容器里的 seccomp、capability、namespace 和 cgroup 如何影响系统调用结果？\n- 线上线程卡在 `futex`、`read`、`fsync`、`connect` 或 `epoll_wait` 时如何定位？\n- `EACCES`、`EPERM`、`EMFILE`、`ENOMEM`、`EFAULT`、`EAGAIN` 分别指向哪些排查路径？\n- 内核版本、glibc、架构 ABI 和发行版补丁为什么会影响同一段用户态代码的表现？",
      "参考来源：本文用 Linux Kernel entry/exit 文档和 Linux Kernel Labs System Calls 说明进入内核路径；用 Linux man-pages 的 `syscalls(2)`、`syscall(2)`、`errno(3)`、`vdso(7)`、`capabilities(7)`、`seccomp(2)`、`strace(1)` 校准接口、错误码和排查命令；用 Linux Kernel threat model、POSIX、OSTEP 解释安全边界和操作系统设计目标；用 Brendan Gregg USE Method 与 Microsoft Learn Linux 性能瓶颈资料组织生产排查；中文表达参考阮一峰 User space 与 Kernel space、小林 coding、CS-Notes 和 JavaGuide。",
    ],
    typicalProblems: [
      "用户态与内核态分别解决什么问题？请从 CPU 特权级、地址空间、资源管理和安全边界回答。",
      "一次 `read` 系统调用从用户态进入内核态再返回，会经历哪些关键步骤？",
      "系统调用、异常、中断和 vDSO 的区别与联系是什么？",
      "为什么 `errno` 是线上排查的重要证据？`EACCES`、`EPERM`、`EMFILE`、`ENOMEM`、`EAGAIN` 分别指向什么？",
      "频繁跨越用户态/内核态边界会带来哪些性能成本？批量、缓存、零拷贝、异步 I/O 如何优化？",
      "容器中的 namespace、cgroup、capability 和 seccomp 怎样改变系统调用结果和可观测证据？",
      "线程卡在 `futex`、`read`、`fsync`、`connect`、`epoll_wait` 时，如何用 `strace`、`ps`、`/proc`、`dmesg` 定位？",
      "用户态崩溃、系统调用失败、系统调用阻塞和内核故障在现象与证据上怎样区分？",
      "内核版本、glibc、架构 ABI、发行版补丁和 seccomp profile 为什么会影响同一应用的运行表现？",
    ],
    prerequisites: ["kernel"],
    related: ["system-call", "interrupt"],
    learningPathPosition: 3,
  },
  /* <!-- KG_REVIEWED: 系统调用 | 2026-06-05 | source_count=22 --> */
  /* <!-- KG_EXPLAINED: 系统调用 | 2026-05-23 | source_count=7 --> */
  {
    sourceRefs: [
      "linux-kernel-docs",
      "linux-kernel-entry-exit",
      "linux-kernel-labs-syscalls",
      "gnu-libc-system-calls",
      "linux-man-pages",
      "linux-man-syscalls",
      "linux-man-pages-syscall",
      "linux-man-pages-errno",
      "linux-man-pages-vdso",
      "linux-man-pages-strace",
      "linux-man-pages-seccomp",
      "linux-man-pages-capabilities",
      "linux-man-proc",
      "linux-kernel-threat-model",
      "posix-base-spec",
      "ostep-introduction",
      "brendan-gregg-use-linux",
      "microsoft-linux-performance-bottlenecks",
      "ruanyifeng-user-kernel-space",
      "xiaolincoding-os-interview",
      "cs-notes",
      "javaguide",
    ],
    id: "system-call",
    zh: "系统调用",
    en: "System Call",
    area: "foundation",
    difficulty: "medium",
    summary: "理解用户态程序如何通过稳定 ABI 请求内核服务，并用返回值、errno、trace 和内核状态排查真实系统问题。",
    explanation: [
      "概念定位：系统调用解决的是“普通应用怎样安全使用内核能力”的问题。\n\n系统调用（system call / syscall）是用户态进入内核态请求服务的标准入口。文件读写、网络收发、进程创建、内存映射、时间等待、信号处理、权限修改、事件轮询和容器限制都通过系统调用或相关内核入口完成。真实系统里，`open`、`read`、`write`、`socket`、`connect`、`accept`、`clone`、`execve`、`mmap`、`futex`、`epoll_wait`、`ioctl` 是服务性能、稳定性和安全边界的高频证据。\n\n新手先抓住一句话：系统调用是应用向内核提交受控请求的门。经验工程师继续关注系统调用号、ABI、参数复制、权限校验、阻塞等待、错误码、资源限额、trace 和安全策略。",
      "准确定义：系统调用是内核向用户空间暴露的 ABI 契约，libc 包装函数是用户态调用体验。\n\nPOSIX 规定了许多可移植接口，Linux man-pages 记录 Linux 上的系统调用列表、参数、返回值和错误码，GNU C Library 手册说明应用通常通过库函数调用这些能力。直接执行 `syscall(2)` 可以绕过部分包装层；日常 C 程序更多使用 `read(2)`、`write(2)`、`open(2)`、`fork(2)` 等函数，由 libc 按架构 ABI 准备寄存器和陷入指令。\n\n这个定义有三层工程含义：\n\n- 接口层：系统调用名、系统调用号、参数布局、返回值和 `errno` 构成稳定边界。\n- 状态层：内核把 PID、fd、VMA、inode、socket、凭证、cgroup 和 namespace 维护成可检查对象。\n- 证据层：`strace`、`perf trace`、tracepoint、`/proc`、`dmesg` 和 eBPF 能把边界行为转成排查线索。",
      "心智模型：把系统调用看成“带编号的服务窗口”。\n\n应用带着窗口编号和材料到窗口排队：编号是系统调用号，材料是寄存器里的参数、用户态缓冲区地址、文件描述符、路径、flag 和长度。内核窗口先核验身份、权限、参数和资源限额，再把请求交给文件系统、网络栈、调度器、内存管理或设备驱动。完成后，窗口返回结果或错误码。\n\n这个模型能帮助定位问题：\n\n- `open` 失败时看路径、权限、挂载、namespace、LSM 和 fd 限额。\n- `read`/`write` 很慢时看页缓存、磁盘队列、socket 缓冲区、TCP 重传和下游等待。\n- `clone`/`execve` 失败时看进程数、内存、二进制路径、权限和容器限制。\n- `futex` 或 `epoll_wait` 长时间等待时看锁竞争、事件源、超时配置和线程状态。",
      "主流程机制：一次 `read(fd, buf, len)` 可以把系统调用完整路径串起来。\n\n1. 用户态代码调用 libc 的 `read` 包装函数，传入 fd、用户缓冲区地址和长度。\n2. libc 按 CPU 架构 ABI 把系统调用号与参数放入寄存器，执行 `syscall`、`sysenter`、`int 0x80`、`svc` 等入口指令。\n3. CPU 切换到内核入口，内核 entry/exit 框架保存上下文，处理跟踪、审计、抢占、RCU、信号和架构细节。\n4. 内核根据系统调用号分派到实现函数，校验 fd、权限、长度、用户态指针和当前进程状态。\n5. VFS 用 fd 找到 `struct file`，再进入具体文件系统、页缓存、块设备、管道、终端或 socket 路径。\n6. 数据可用时内核通过安全复制路径把数据写入用户缓冲区；数据暂缺时任务进入等待队列，I/O、中断、软中断或唤醒事件到达后继续执行。\n7. 内核返回读取字节数、0 或负错误码；libc 将失败结果转换为 `-1` 和 `errno`，应用按错误类型重试、降级或报错。\n\n```c\n#include <errno.h>\n#include <stdio.h>\n#include <unistd.h>\n\nchar buf[4096];\nssize_t n = read(fd, buf, sizeof(buf));\nif (n == -1) {\n  perror(\"read\"); // 重点记录系统调用名、参数、返回值和 errno\n}\n```\n\n系统调用的成本来自模式切换、寄存器和上下文处理、参数校验、用户态/内核态复制、权限检查、锁、缓存命中率、等待队列和调度唤醒。",
      "接口与 ABI：系统调用同时包含“可移植接口”和“Linux 具体实现”两条线。\n\n```text\nUser API: read(fd, buf, len), open(path, flags), socket(domain, type, proto)\nlibc wrapper: prepare syscall number and arguments, translate error to errno\nKernel ABI: syscall number, register convention, entry instruction, return value\nKernel implementation: sys_read -> VFS -> filesystem/socket/device path\nObservability: strace/perf/eBPF, /proc/<pid>, dmesg, resource counters\n```\n\n同一个高级接口在不同 Unix-like 系统上可能映射到不同内核实现；同一个 Linux 系统调用在不同 CPU 架构上也有不同系统调用号和寄存器约定。glibc、内核版本、发行版补丁和容器 seccomp profile 会影响可用系统调用集合、包装行为和失败细节。工程实践中要把“源码里调用的函数名”和“trace 里看到的系统调用名”同时保存。",
      "返回语义与错误码：返回值和 `errno` 是系统调用的接口合同，也是排查入口。\n\n常见语义可以这样读：\n\n- 成功：返回 fd、PID、字节数、地址、0 或其他非负结果，具体含义由调用定义。\n- EOF：`read` 返回 0 表示到达文件末尾或连接对端完成关闭语义。\n- 可重试：`EINTR` 指向信号打断，`EAGAIN`/`EWOULDBLOCK` 指向非阻塞资源暂时可用性不足。\n- 权限：`EACCES`、`EPERM` 指向权限位、UID/GID、capability、LSM、seccomp、挂载或 namespace。\n- 资源：`EMFILE`、`ENFILE`、`ENOMEM`、`ENOSPC`、`EAGAIN` 指向 fd、系统文件表、内存、磁盘/inode、进程/线程或队列限额。\n- 参数与生命周期：`EBADF`、`EINVAL`、`EFAULT`、`ENOENT`、`EPIPE` 指向 fd 生命周期、flag 组合、用户地址、路径和管道/socket 状态。\n\n排查时保留四元组：系统调用名、关键参数、返回值、`errno`。这比只看应用层异常信息更接近根因。",
      "工程场景：系统调用是很多生产问题的共用底层路径。\n\n- 高并发网络服务：`accept`、`read`、`write`、`sendfile`、`epoll_wait` 贯穿连接接入、事件循环和响应发送，fd 上限、backlog、TCP 队列、软中断和线程模型决定吞吐上限。\n- 数据库与日志系统：`pread`、`pwrite`、`fsync`、`fdatasync`、`mmap`、`fadvise` 影响页缓存、刷盘可靠性和 p99 延迟。\n- 进程生命周期：`clone`、`fork`、`execve`、`wait4` 决定服务拉起、热重启、worker 模型和僵尸进程回收。\n- 内存与共享：`mmap`、`mprotect`、`brk`、`munmap` 支撑堆、共享内存、文件映射、JIT 和内存保护。\n- 并发同步：`futex` 是许多用户态锁和条件变量的内核等待后盾，线程长期卡在 `futex` 常指向锁竞争或唤醒丢失。\n- 容器与沙箱：seccomp 过滤系统调用，capability 控制特权能力，namespace 改变对象视图，cgroup 限制可消耗资源。",
      "边界与故障模式：系统调用问题通常表现为失败、阻塞、抖动、权限拒绝或资源耗尽。\n\n- 失败类：接口返回 `-1` 并设置 `errno`，根因多落在权限、参数、fd 生命周期、路径、资源限额和安全策略。\n- 阻塞类：线程停在 `read`、`write`、`connect`、`accept`、`fsync`、`futex`、`epoll_wait`，需要看等待对象和下游事件源。\n- 抖动类：高频小系统调用、短连接、频繁 `stat`、日志逐行刷盘、页错误增多、上下文切换过高会推高尾延迟。\n- 资源类：fd 泄漏、线程数过多、PID 上限、内存不足、磁盘或 inode 耗尽、socket buffer 饱和会让系统调用集中失败。\n- 安全类：seccomp、capability、SELinux/AppArmor、只读挂载、用户命名空间和特权端口限制会改变返回结果。\n- 版本类：内核版本、架构 ABI、glibc、发行版补丁和容器运行时会改变系统调用可用性与 trace 表现。\n\n生产判断要把应用日志、系统调用 trace、资源计数、线程状态和内核日志放在同一条时间线上。",
      "排查实践：系统调用排查以“先看入口，再看等待对象，再看资源与策略”为主线。\n\n```bash\n# 1. 观察某个进程的系统调用、耗时和错误码\nstrace -ff -tt -T -p <pid>\nstrace -e trace=file,network,process -o /tmp/syscall.log <command>\n\n# 2. 找线程状态、等待点和资源限制\nps -L -o pid,tid,stat,wchan:24,comm -p <pid>\ncat /proc/<pid>/status\ncat /proc/<pid>/limits\nls /proc/<pid>/fd | wc -l\n\n# 3. 对齐内核证据和系统资源\nvmstat 1\niostat -xz 1\nss -s\ndmesg -T | tail -100\n\n# 4. 容器、安全与 cgroup 证据\ncat /proc/<pid>/status | grep -E 'Cap|Seccomp|NoNewPrivs'\ncat /sys/fs/cgroup/cpu.stat 2>/dev/null || true\ncat /sys/fs/cgroup/memory.current 2>/dev/null || true\n```\n\n建议流程：\n\n1. 固定时间窗：记录请求 ID、主机、容器、PID/TID、系统调用名、参数、返回值、`errno` 和耗时。\n2. 分类归因：权限、资源、参数、阻塞、网络、磁盘、内存、安全策略或版本差异。\n3. 验证等待对象：用 `wchan`、线程栈、`strace -T`、I/O 指标、socket 状态和锁指标确认卡点。\n4. 做可逆实验：降低并发、扩大 fd/进程/内存限额、调整 seccomp/capability、切换节点、关闭某个同步刷盘点、复现最小调用。\n5. 固化治理：把系统调用错误率、p99 耗时、fd 使用率、上下文切换、page fault、I/O await、cgroup throttle 和安全拒绝纳入监控。",
      "性能、安全与取舍：系统调用边界把稳定 ABI、安全裁决和性能成本放在同一路径上。\n\n- 性能收益：内核统一调度、缓存、I/O 合并、权限判断和错误返回，应用得到稳定接口和跨硬件抽象。\n- 性能成本：每次调用会付出陷入内核、上下文处理、参数校验、复制、锁竞争和可能的调度等待。\n- 优化方向：批量读写、连接复用、页缓存、零拷贝、`sendfile`、`mmap`、异步 I/O、vDSO、减少逐条 `stat` 和日志合并能降低调用次数或慢路径等待。\n- 安全收益：seccomp、capability、LSM、namespace、cgroup 和权限位让系统调用经过统一裁决。\n- 安全风险：宽松 seccomp、特权容器、过大 capability、危险 `ioctl`、宿主机路径挂载和内核漏洞会扩大影响面。\n- 设计取舍：吞吐优先时关注批量、缓存命中、零拷贝和队列背压；延迟优先时关注单次调用耗时、锁、缺页、I/O await 和调度唤醒。",
      "常见误区：系统调用的成熟理解来自层级、语义和证据三件事。\n\n- libc 函数是用户态接口层，系统调用是内核 ABI 层，trace 证据来自实际进入内核的调用。\n- `errno` 的语义和具体系统调用绑定，读取错误码时要同时保存调用名和返回值。\n- 阻塞系统调用消耗的是等待时间和任务状态，CPU 使用率可能很低，尾延迟仍然很高。\n- 非阻塞 I/O 把等待转成 `EAGAIN` 和事件通知，应用仍需正确处理重试、超时和背压。\n- vDSO 能让部分时间读取走用户空间快路径，性能分析时要结合 libc、vDSO 和内核 trace 一起看。\n- 容器里的系统调用由宿主机内核执行，seccomp、capability、namespace 和 cgroup 决定可访问对象和可消耗资源。",
      "面试与复盘抓手：回答系统调用题时，按“定义 -> ABI -> 主路径 -> 返回语义 -> 故障证据 -> 性能安全取舍”展开。\n\n高频追问包括：\n\n- 系统调用解决什么问题？它和 libc 包装函数、POSIX 接口、内核 ABI 的关系是什么？\n- 一次 `read` 或 `write` 从用户态到内核态再返回经历哪些步骤？\n- 系统调用号、寄存器传参、entry/exit、VFS、等待队列和返回值分别承担什么职责？\n- `EINTR`、`EAGAIN`、`EBADF`、`EFAULT`、`EMFILE`、`ENOMEM`、`EACCES`、`EPERM` 分别指向哪些排查路径？\n- `strace -T`、`ps wchan`、`/proc/<pid>/limits`、`dmesg`、`ss` 和 `iostat` 如何组合定位慢系统调用？\n- 高频系统调用会带来哪些性能成本？批量、缓存、零拷贝、异步 I/O 和 vDSO 分别优化哪一段？\n- 容器中的 seccomp、capability、namespace、cgroup 如何影响系统调用结果？\n- 线上线程长期卡在 `futex`、`epoll_wait`、`read`、`fsync`、`connect` 时，各自优先看哪些证据？\n- 内核版本、CPU 架构 ABI、glibc 和发行版补丁为什么会影响同一段代码的 trace 与行为？",
      "参考来源：本文用 Linux man-pages 的 `syscalls(2)`、`syscall(2)`、`errno(3)`、`vdso(7)`、`strace(1)` 校准系统调用接口、返回语义和排查命令；用 Linux Kernel entry/exit 文档与 Linux Kernel Labs System Calls 说明内核入口、分派和实现路径；用 GNU C Library System Calls 说明 libc 包装层；用 POSIX Base Specifications、OSTEP 和 Linux Kernel threat model 解释接口契约和安全边界；用 Brendan Gregg USE Method 与 Microsoft Learn Linux 性能瓶颈资料组织生产排查；中文表达参考阮一峰、小林 coding、CS-Notes 和 JavaGuide。",
    ],
    typicalProblems: [
      "系统调用解决什么问题？请从用户态/内核态边界、稳定 ABI、资源管理和安全裁决回答。",
      "系统调用、libc 包装函数、POSIX 接口和 Linux 内核 ABI 之间是什么关系？",
      "一次 `read(fd, buf, len)` 从用户态进入内核态再返回，会经历哪些关键步骤？",
      "系统调用号、寄存器传参、entry/exit 框架、系统调用表和内核实现函数分别承担什么职责？",
      "`errno` 为什么是排查系统调用失败的关键证据？常见 `EINTR`、`EAGAIN`、`EBADF`、`EFAULT`、`EMFILE`、`ENOMEM`、`EACCES`、`EPERM` 分别指向什么？",
      "线上线程卡在 `futex`、`epoll_wait`、`read`、`fsync`、`connect` 时，如何用 `strace`、`ps wchan`、`/proc`、`dmesg` 和 I/O 指标定位？",
      "频繁系统调用会产生哪些性能成本？批量、缓存、零拷贝、异步 I/O、vDSO 和连接复用怎样降低成本？",
      "容器里的 seccomp、capability、namespace 和 cgroup 如何改变系统调用结果与可观测证据？",
      "系统调用返回失败、系统调用阻塞、应用线程死锁和内核 I/O 等待在现象上怎样区分？",
      "内核版本、CPU 架构 ABI、glibc、发行版补丁和 seccomp profile 为什么会影响同一应用的系统调用表现？",
    ],
    prerequisites: ["kernel-mode"],
    related: ["file-descriptor", "process"],
    learningPathPosition: 4,
  },
  /* <!-- KG_REVIEWED: 中断 | 2026-05-24 | source_count=7 --> */
  /* <!-- KG_EXPLAINED: 中断 | 2026-05-23 | source_count=7 --> */
  { sourceRefs: ["linux-kernel-docs","linux-man-pages","posix-base-spec","gnu-bash-manual","cs-notes","javaguide","xiaolin-coding"], id: "interrupt", zh: "中断", en: "Interrupt", area: "foundation", difficulty: "medium", summary: "CPU 响应外部设备、时钟和异常事件的机制。", explanation: ["核心概念：中断（Interrupt）聚焦CPU 响应外部设备、时钟和异常事件的机制。。操作系统负责在硬件和应用之间管理 CPU、内存、文件、设备与权限；理解它时先抓住内核边界、系统调用、特权级和中断路径，再看输入、状态变化、输出结果和失败分支。","适用场景：中断常用于用户态进入内核、硬件事件打断执行、内核统一管理资源。学习时把它放回操作系统链路中观察，并结合前置知识用户态与内核态判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，中断通常会和调度器和I/O一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点需要结合流程和指标判断。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认内核边界、系统调用、特权级和中断路径是否仍然成立。","常见误区与注意点：实践中容易把中断当成孤立概念处理，结果遗漏权限切换、异常处理、驱动交互和系统调用开销。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考Linux Kernel 文档、Linux man-pages、POSIX/Open Group 规范、GNU Bash 手册以及 CS-Notes、JavaGuide、小林 coding，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["中断底层机制是什么","中断和相关概念如何区分","中断线上异常如何排查"], prerequisites: ["kernel-mode"], related: ["scheduler","io"], learningPathPosition: 5 },
  /* <!-- KG_REVIEWED: 进程 | 2026-06-05 | source_count=25 --> */
  /* <!-- KG_EXPLAINED: 进程 | 2026-05-23 | source_count=7 --> */
  {
    sourceRefs: [
      "linux-kernel-docs",
      "linux-kernel-scheduler",
      "linux-kernel-mm-docs",
      "linux-man-pages",
      "linux-man-proc",
      "linux-man-pages-fork",
      "linux-man-pages-clone",
      "linux-man-pages-execve",
      "linux-man-pages-wait",
      "linux-man-pages-credentials",
      "linux-man-pages-signal",
      "linux-man-pages-getrlimit",
      "linux-man-pages-ps",
      "linux-man-pages-strace",
      "posix-base-spec",
      "gnu-bash-manual",
      "ostep-introduction",
      "ostep-processes",
      "ostep-process-api",
      "brendan-gregg-use-linux",
      "microsoft-linux-performance-bottlenecks",
      "linux-cgroup-v2",
      "cs-notes",
      "javaguide",
      "xiaolincoding-os-interview",
    ],
    id: "process",
    zh: "进程",
    en: "Process",
    area: "process",
    difficulty: "easy",
    summary: "理解进程如何把一段正在运行的程序组织成拥有地址空间、文件描述符、凭证、调度状态和生命周期的资源容器。",
    explanation: [
      "概念定位：进程解决的是“一个正在运行的程序怎样被操作系统隔离、调度、计费、终止和排查”的问题。\n\n程序是磁盘上的代码和数据，进程（Process）是程序运行后的动态实体。它拥有自己的 PID、虚拟地址空间、文件描述符表、信号处理状态、用户与组凭证、环境变量、当前工作目录、资源限制、调度属性和退出状态。Web 服务、数据库、Shell 命令、后台任务、容器主进程和 worker 都以进程为基本运行单位。\n\n新手要先抓住“进程是程序运行时的资源容器”；经验工程师还要继续看 `fork/clone/execve/wait`、写时复制、fd 继承、僵尸回收、cgroup 限额、线程共享资源和 `/proc` 证据。",
      "准确定义：在 Unix/Linux 语境里，进程是内核调度和资源管理中的任务实体。Linux 用 `task_struct` 表示可调度任务，传统意义上的单进程可以包含一个任务；多线程进程由多个共享同一地址空间和部分资源的任务组成。\n\n几个概念建议成组理解：\n\n- `PID`：进程标识，父子关系通过 `PPID` 串联，进程组和会话支撑作业控制与信号广播。\n- 虚拟地址空间：代码段、数据段、堆、栈、共享库、`mmap` 区和页表组成进程看到的内存世界。\n- 文件描述符表：把整数 fd 映射到内核打开文件对象，文件、管道、socket、终端和设备都可以通过 fd 使用。\n- 凭证与权限：真实/有效用户 ID、组 ID、capability、namespace 与 LSM 共同决定可访问对象。\n- 调度状态：进程处于运行、可运行、睡眠、停止、僵尸等状态，由调度器、信号和等待事件驱动变化。",
      "心智模型：把进程看成“带身份证的运行沙盒”。\n\n身份证是 PID、PPID、UID/GID、进程组、会话和命令行；沙盒里有地址空间、fd 表、环境变量、工作目录、信号处置、资源上限和 cgroup 归属；运行状态由调度器和等待事件持续更新。应用代码只看到自己的虚拟地址和句柄，内核负责把这些句柄翻译成物理页、inode、socket buffer、设备队列和权限裁决。\n\n这个模型能解释生产现象：fd 泄漏会让 `open` 或 `accept` 失败，父进程没有 `wait` 会留下僵尸，CPU quota 会让进程可运行但被限流，容器里 PID 视图会受 PID namespace 影响，删除日志文件后空间仍被打开 fd 占用。",
      "主流程机制：一个常见进程生命周期可以用 `fork -> execve -> run -> wait` 串起来。\n\n1. 父进程调用 `fork()` 或 `clone()` 创建子任务。Linux 通常通过写时复制让子进程先共享父进程的物理页，等双方写入时再复制页面。\n2. 子进程继承大量上下文：地址空间副本、打开的文件描述符、环境变量、当前工作目录、umask、信号处置、资源限制和调度属性。\n3. 子进程调用 `execve()` 把自身地址空间替换为新程序映像，加载可执行文件、解释器、共享库、参数和环境变量；PID 通常保持不变。\n4. 进程运行用户态代码，遇到文件、网络、内存、时间、信号和进程控制操作时通过系统调用进入内核。\n5. 调度器根据任务状态、优先级、调度类、CPU 亲和性、cgroup 和负载选择它何时运行。\n6. 进程调用 `exit()`、收到终止信号或发生致命异常后结束，内核保留退出状态供父进程回收。\n7. 父进程调用 `wait()`/`waitpid()` 读取退出码和资源信息；回收前的已退出子进程表现为僵尸进程。\n\n```c\npid_t pid = fork();\nif (pid == 0) {\n  char *argv[] = {\"/bin/ls\", \"-l\", NULL};\n  execve(argv[0], argv, environ);\n  _exit(127);\n}\nint status = 0;\nwaitpid(pid, &status, 0);\n```",
      "核心结构与证据：进程排查的关键是把用户可见字段映射到内核维护的状态。\n\n```text\nprocess\n  pid/ppid/session/pgrp      -> 身份、父子关系、作业控制、信号范围\n  mm_struct + page table     -> 虚拟地址空间、VMA、RSS、page fault\n  files_struct + fd table    -> 打开的文件、socket、pipe、设备、泄漏风险\n  cred + capability          -> UID/GID、权限、特权能力、安全边界\n  signal handlers            -> SIGTERM、SIGKILL、SIGCHLD、退出与回收\n  sched entity + state       -> R/S/D/T/Z、CPU 时间、优先级、等待点\n  cgroup membership          -> CPU、内存、I/O、PIDs 等资源限制与统计\n```\n\n`/proc/<pid>/status`、`/proc/<pid>/cmdline`、`/proc/<pid>/environ`、`/proc/<pid>/maps`、`/proc/<pid>/fd`、`/proc/<pid>/limits` 和 `/proc/<pid>/stat` 是高价值入口。它们把“进程是谁、在做什么、占了什么、卡在哪里、受什么限制”变成可验证证据。",
      "资源继承与边界：`fork` 创建出的子进程很像父进程，但继承关系里有很多工程细节。\n\n- 地址空间先以写时复制共享物理页，父子任一方写入会触发页面复制；大进程频繁 fork 会带来页表复制、TLB 和内存压力。\n- 文件描述符默认继承，并指向相同的打开文件描述；文件偏移、状态标志和 socket 连接可能被父子进程共同影响。\n- `FD_CLOEXEC` 控制 fd 是否在 `execve` 后关闭；服务热重启、子进程启动和安全沙箱都要明确处理 fd 继承。\n- 信号处置、进程组、会话和控制终端影响 Shell 作业控制、后台进程、守护进程和批量终止。\n- 资源限制如 `RLIMIT_NOFILE`、`RLIMIT_NPROC`、`RLIMIT_AS`、`RLIMIT_CORE` 会改变创建进程、打开 fd、分配内存和生成 core dump 的结果。\n- PID namespace、mount namespace、user namespace 和 cgroup 会改变进程看到的 PID、文件系统、权限与资源统计。",
      "线程、进程与容器：Linux 里的线程本质上也是可调度任务，区别在于通过 `clone()` 选择共享哪些资源。\n\n一个多线程进程内的线程通常共享地址空间、文件描述符表、信号处置和工作目录，各自拥有线程 ID、栈、寄存器上下文、调度状态和部分线程局部数据。因此线程间通信成本低，崩溃、内存破坏、fd 修改和全局变量竞态的影响范围也更大。\n\n容器常把进程放入多个 namespace 和 cgroup 中运行。容器的 PID 1 需要处理信号转发和子进程回收；它接收 SIGTERM 后要优雅退出，同时要避免子进程变成僵尸。生产里常见的“容器停止慢、孤儿子进程、CPU throttling、PIDs 用尽、OOMKilled”都可以回到进程生命周期和资源边界分析。",
      "工程场景：进程模型直接影响服务启动、并发模型、热更新和故障恢复。\n\n- Shell 命令执行：Shell fork 子进程，设置重定向、管道、环境变量和工作目录，再 exec 目标程序，最后 wait 收集退出码。\n- Web 服务：master-worker 模型通过多个进程隔离崩溃影响面，进程间用 socket、pipe、共享内存或消息队列协作。\n- 数据库与消息队列：进程的 RSS、fd、mmap、page fault、I/O 等待和信号处理会影响尾延迟与恢复速度。\n- 守护进程与服务管理：systemd 负责拉起、重启、发送信号、收集退出状态、限制资源和记录日志。\n- 热重启：新旧进程交接监听 socket、配置、连接和信号，重点控制 fd 继承、连接排空、退出超时和回滚路径。",
      "边界与故障模式：进程问题常表现为资源耗尽、生命周期失控、权限失败、状态异常或观测视图差异。\n\n- 创建失败：`fork`/`clone` 返回 `EAGAIN` 或 `ENOMEM`，常见原因是 PID 上限、线程数上限、内存压力、cgroup `pids.max` 或资源限制。\n- 僵尸堆积：子进程退出后父进程长期没有 `wait`，`ps` 里显示 `Z`，PID 资源会持续占用。\n- 孤儿进程：父进程退出后子进程被 init 或子收割进程接管，服务管理和容器 PID 1 要承担回收责任。\n- fd 泄漏：`/proc/<pid>/fd` 数量持续增长，最终触发 `EMFILE`、`ENFILE`、连接失败或日志异常。\n- 内存异常：RSS 增长、minor/major fault 增多、swap 抖动、cgroup OOM 或宿主机 OOM killer 终止进程。\n- 状态异常：大量 `D` 状态任务常指向不可中断 I/O 等待，大量 `R` 状态任务常指向 CPU 饱和或调度限流。\n- 权限异常：UID/GID、capability、SELinux/AppArmor、seccomp、只读挂载和 namespace 视图都会改变进程行为。",
      "排查实践：进程排查要先锁定 PID，再把身份、状态、资源、系统调用和内核证据放到同一时间线。\n\n```bash\n# 1. 找到进程身份、父子关系和状态\nps -eo pid,ppid,pgid,sid,stat,comm,args --sort=ppid | head -40\npstree -ap <pid>\ncat /proc/<pid>/status\n\n# 2. 看资源与限制\ncat /proc/<pid>/limits\nls /proc/<pid>/fd | wc -l\ndu -sh /proc/<pid>/fd 2>/dev/null || true\ncat /proc/<pid>/oom_score /proc/<pid>/oom_score_adj\n\n# 3. 看内存映射、线程和等待点\npmap -x <pid> | tail -20\nps -L -o pid,tid,stat,wchan:24,pcpu,comm -p <pid>\ncat /proc/<pid>/task/<tid>/stack 2>/dev/null || true\n\n# 4. 看系统调用、文件、网络和退出证据\nstrace -ff -tt -T -p <pid>\nlsof -p <pid> | head\nss -tnp | grep \"pid=<pid>\"\ndmesg -T | grep -i -E 'killed process|oom|segfault'\n``` \n\n建议流程：\n\n1. 固定对象：记录主机、容器、PID、命令行、版本、启动时间和最近发布。\n2. 看生命周期：父进程是否存在，子进程是否被回收，退出码和信号是否清楚。\n3. 看状态：`R/S/D/T/Z`、线程数、wchan、CPU 时间、上下文切换和 cgroup throttle。\n4. 看资源：RSS、VMS、fd、socket、内存限制、PID 限制、core 限制和磁盘占用。\n5. 看动作：用 `strace`、日志、trace id、socket 状态、I/O 指标和内核日志确认卡点。\n6. 做验证：降低并发、扩大限制、修复 fd 关闭、增加子进程回收、隔离慢 I/O 或调整 graceful shutdown。",
      "性能、安全与取舍：进程提供强隔离和清晰生命周期，代价是创建、通信和上下文切换成本。\n\n进程隔离让崩溃影响面更小，权限边界更清晰，资源统计更容易归属；同时，进程间通信要经过 pipe、socket、共享内存、消息队列或文件，序列化、复制、同步和上下文切换会增加成本。多进程模型适合强隔离、热重启、故障恢复和多核扩展；多线程模型适合共享内存和低成本协作；事件驱动模型适合大量 I/O 等待连接。\n\n安全上，进程可以结合 UID/GID、capability、seccomp、namespace、chroot、LSM 和 cgroup 降低权限与资源风险。设计时要明确：谁是父进程，谁回收子进程，信号怎样传递，fd 怎样继承，资源上限在哪里，异常退出由谁重启。",
      "常见误区：成熟的进程理解来自生命周期、资源表和证据链。\n\n- 进程是运行实例，程序文件只是启动输入；同一个可执行文件可以同时产生多个进程。\n- PID 只标识当前时刻的进程对象，PID 会复用；监控和脚本要结合启动时间、命令行和父子关系确认对象。\n- 僵尸进程已经结束执行，保留的是退出状态；治理重点是父进程回收逻辑。\n- `kill` 发送的是信号，进程能否及时退出取决于信号类型、处理函数、阻塞点、子进程和清理流程。\n- 容器里的进程仍由宿主机内核调度，容器视图、资源限制和宿主机证据需要一起看。\n- CPU 使用率只是运行消耗的一部分，`D` 状态、锁等待、page fault、I/O wait 和 cgroup throttle 都可能让请求变慢。",
      "面试与复盘抓手：回答进程题时，按“定义 -> 组成 -> 生命周期 -> 资源继承 -> 状态与排查 -> 取舍”展开。\n\n高频追问包括：\n\n- 进程和程序的关系是什么？进程由哪些资源和状态组成？\n- Linux 中 `fork`、`clone`、`execve`、`waitpid` 分别承担什么职责？\n- 写时复制怎样降低 `fork` 成本？大进程频繁 fork 有哪些隐藏代价？\n- 父子进程会继承哪些资源？fd 继承和 `FD_CLOEXEC` 为什么会影响安全与热重启？\n- 僵尸进程、孤儿进程、守护进程和容器 PID 1 分别怎样处理？\n- `R/S/D/T/Z` 状态各自代表什么？线上大量 `D` 或 `Z` 状态怎样排查？\n- 进程、线程、协程在资源共享、调度、隔离和故障影响面上怎样判断？\n- fd 泄漏、PID 用尽、CPU throttling、OOMKilled、进程无法退出分别看哪些证据？\n- 多进程、多线程、事件驱动模型在性能、隔离、可维护性和排障上有哪些取舍？",
      "参考来源：本文用 OSTEP 的 Process 与 Process API 章节组织进程抽象、`fork/exec/wait` 主线；用 Linux man-pages 的 `fork(2)`、`clone(2)`、`execve(2)`、`wait(2)`、`proc(5)`、`credentials(7)`、`signal(7)`、`getrlimit(2)` 和 `ps(1)` 校准接口、状态与排查命令；用 Linux Kernel scheduler、memory management 与 cgroup v2 文档说明任务调度、地址空间和资源限制；用 POSIX 与 GNU Bash 手册补充进程 API、Shell 执行和作业控制语义；用 Brendan Gregg USE Method、Microsoft Linux 性能排查资料、小林 coding、CS-Notes 和 JavaGuide 补充中文表达、生产排障和面试组织方式。",
    ],
    typicalProblems: [
      "进程解决什么问题？请从运行实例、资源容器、隔离边界、调度对象和生命周期回答。",
      "进程和程序的区别是什么？同一个可执行文件为什么可以对应多个进程？",
      "Linux 里 `task_struct`、PID、PPID、进程组、会话、地址空间和文件描述符表分别承担什么职责？",
      "`fork`、`clone`、`execve`、`waitpid` 如何串起一个子进程的创建、替换、运行和回收？",
      "写时复制如何降低 `fork` 成本？大内存进程频繁 fork 会带来哪些页表、内存和延迟风险？",
      "父子进程会继承哪些资源？fd 继承、`FD_CLOEXEC`、环境变量和工作目录在生产中会造成哪些现象？",
      "僵尸进程和孤儿进程怎样形成？容器 PID 1 为什么要处理信号转发和子进程回收？",
      "`R/S/D/T/Z` 状态各自代表什么？大量 `D` 状态或 `Z` 状态应该怎样排查？",
      "fd 泄漏、PID 用尽、OOMKilled、CPU throttling、进程无法退出分别看哪些 `/proc`、日志和命令证据？",
      "进程、线程、协程在资源共享、调度成本、隔离能力、通信成本和故障影响面上怎样取舍？",
      "多进程模型、线程池模型和事件驱动模型分别适合哪些服务场景？如何设计优雅退出和热重启？",
    ],
    prerequisites: ["os-overview"],
    related: ["thread", "process-state", "context-switch", "scheduler", "system-call"],
    learningPathPosition: 6,
  },
  /* <!-- KG_REVIEWED: 进程状态 | 2026-05-24 | source_count=7 --> */
  /* <!-- KG_EXPLAINED: 进程状态 | 2026-05-23 | source_count=7 --> */
  { sourceRefs: ["linux-kernel-docs","linux-man-pages","posix-base-spec","gnu-bash-manual","cs-notes","javaguide","xiaolin-coding"], id: "process-state", zh: "进程状态", en: "Process State", area: "process", difficulty: "easy", summary: "描述进程创建、就绪、运行、阻塞和结束等生命周期状态。", explanation: ["核心概念：进程状态（Process State）聚焦描述进程创建、就绪、运行、阻塞和结束等生命周期状态。。操作系统负责在硬件和应用之间管理 CPU、内存、文件、设备与权限；理解它时先抓住进程、线程、生命周期和执行上下文，再看输入、状态变化、输出结果和失败分支。","适用场景：进程状态常用于服务进程、后台任务、多线程程序和并发请求处理。学习时把它放回操作系统链路中观察，并结合前置知识进程判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，进程状态通常会和调度器和上下文切换一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点适合先掌握主流程。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认进程、线程、生命周期和执行上下文是否仍然成立。","常见误区与注意点：实践中容易把进程状态当成孤立概念处理，结果遗漏创建、阻塞、唤醒、退出、僵尸进程和上下文切换成本。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考Linux Kernel 文档、Linux man-pages、POSIX/Open Group 规范、GNU Bash 手册以及 CS-Notes、JavaGuide、小林 coding，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["进程状态底层机制是什么","进程状态和相关概念如何区分","进程状态线上异常如何排查"], prerequisites: ["process"], related: ["scheduler","context-switch"], learningPathPosition: 7 },
  /* <!-- KG_REVIEWED: 上下文切换 | 2026-05-24 | source_count=7 --> */
  /* <!-- KG_EXPLAINED: 上下文切换 | 2026-05-23 | source_count=7 --> */
  { sourceRefs: ["linux-kernel-docs","linux-man-pages","posix-base-spec","gnu-bash-manual","cs-notes","javaguide","xiaolin-coding"], id: "context-switch", zh: "上下文切换", en: "Context Switch", area: "process", difficulty: "medium", summary: "保存当前执行现场并切换到另一个进程或线程。", explanation: ["核心概念：上下文切换（Context Switch）聚焦保存当前执行现场并切换到另一个进程或线程。。操作系统负责在硬件和应用之间管理 CPU、内存、文件、设备与权限；理解它时先抓住进程、线程、生命周期和执行上下文，再看输入、状态变化、输出结果和失败分支。","适用场景：上下文切换常用于服务进程、后台任务、多线程程序和并发请求处理。学习时把它放回操作系统链路中观察，并结合前置知识进程状态判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，上下文切换通常会和调度器和线程一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点需要结合流程和指标判断。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认进程、线程、生命周期和执行上下文是否仍然成立。","常见误区与注意点：实践中容易把上下文切换当成孤立概念处理，结果遗漏创建、阻塞、唤醒、退出、僵尸进程和上下文切换成本。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考Linux Kernel 文档、Linux man-pages、POSIX/Open Group 规范、GNU Bash 手册以及 CS-Notes、JavaGuide、小林 coding，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["上下文切换底层机制是什么","上下文切换和相关概念如何区分","上下文切换线上异常如何排查"], prerequisites: ["process-state"], related: ["scheduler","thread"], learningPathPosition: 8 },
  /* <!-- KG_REVIEWED: 线程 | 2026-05-24 | source_count=7 --> */
  /* <!-- KG_EXPLAINED: 线程 | 2026-05-23 | source_count=7 --> */
  { sourceRefs: ["linux-kernel-docs","linux-man-pages","posix-base-spec","gnu-bash-manual","cs-notes","javaguide","xiaolin-coding"], id: "thread", zh: "线程", en: "Thread", area: "process", difficulty: "easy", summary: "CPU 调度的基本执行单位，共享所属进程资源。", explanation: ["核心概念：线程（Thread）聚焦CPU 调度的基本执行单位，共享所属进程资源。。操作系统负责在硬件和应用之间管理 CPU、内存、文件、设备与权限；理解它时先抓住进程、线程、生命周期和执行上下文，再看输入、状态变化、输出结果和失败分支。","适用场景：线程常用于服务进程、后台任务、多线程程序和并发请求处理。学习时把它放回操作系统链路中观察，并结合前置知识进程判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，线程通常会和上下文切换和线程安全一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点适合先掌握主流程。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认进程、线程、生命周期和执行上下文是否仍然成立。","常见误区与注意点：实践中容易把线程当成孤立概念处理，结果遗漏创建、阻塞、唤醒、退出、僵尸进程和上下文切换成本。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考Linux Kernel 文档、Linux man-pages、POSIX/Open Group 规范、GNU Bash 手册以及 CS-Notes、JavaGuide、小林 coding，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["线程底层机制是什么","线程和相关概念如何区分","线程线上异常如何排查"], prerequisites: ["process"], related: ["context-switch","thread-safety"], learningPathPosition: 9 },
  /* <!-- KG_REVIEWED: 协程 | 2026-05-24 | source_count=7 --> */
  /* <!-- KG_EXPLAINED: 协程 | 2026-05-23 | source_count=7 --> */
  { sourceRefs: ["linux-kernel-docs","linux-man-pages","posix-base-spec","gnu-bash-manual","cs-notes","javaguide","xiaolin-coding"], id: "coroutine", zh: "协程", en: "Coroutine", area: "process", difficulty: "medium", summary: "用户态调度的轻量执行单元，常用于高并发 I/O。", explanation: ["核心概念：协程（Coroutine）聚焦用户态调度的轻量执行单元，常用于高并发 I/O。。操作系统负责在硬件和应用之间管理 CPU、内存、文件、设备与权限；理解它时先抓住进程、线程、生命周期和执行上下文，再看输入、状态变化、输出结果和失败分支。","适用场景：协程常用于服务进程、后台任务、多线程程序和并发请求处理。学习时把它放回操作系统链路中观察，并结合前置知识线程判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，协程通常会和I/O 多路复用和调度器一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点需要结合流程和指标判断。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认进程、线程、生命周期和执行上下文是否仍然成立。","常见误区与注意点：实践中容易把协程当成孤立概念处理，结果遗漏创建、阻塞、唤醒、退出、僵尸进程和上下文切换成本。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考Linux Kernel 文档、Linux man-pages、POSIX/Open Group 规范、GNU Bash 手册以及 CS-Notes、JavaGuide、小林 coding，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["协程底层机制是什么","协程和相关概念如何区分","协程线上异常如何排查"], prerequisites: ["thread"], related: ["io-multiplexing","scheduler"], learningPathPosition: 10 },
  /* <!-- KG_REVIEWED: 调度器 | 2026-05-24 | source_count=7 --> */
  /* <!-- KG_EXPLAINED: 调度器 | 2026-05-23 | source_count=7 --> */
  { sourceRefs: ["linux-kernel-docs","linux-man-pages","posix-base-spec","gnu-bash-manual","cs-notes","javaguide","xiaolin-coding"], id: "scheduler", zh: "调度器", en: "Scheduler", area: "scheduling", difficulty: "medium", summary: "决定哪个进程或线程获得 CPU 执行时间。", explanation: ["核心概念：调度器（Scheduler）聚焦决定哪个进程或线程获得 CPU 执行时间。。操作系统负责在硬件和应用之间管理 CPU、内存、文件、设备与权限；理解它时先抓住调度策略、时间片、优先级和公平性，再看输入、状态变化、输出结果和失败分支。","适用场景：调度器常用于交互式系统、后台任务、实时任务和多核负载分配。学习时把它放回操作系统链路中观察，并结合前置知识进程状态和上下文切换判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，调度器通常会和时间片和优先级调度一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点需要结合流程和指标判断。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认调度策略、时间片、优先级和公平性是否仍然成立。","常见误区与注意点：实践中容易把调度器当成孤立概念处理，结果遗漏饥饿、优先级反转、抢占时机和 CPU 密集型任务影响。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考Linux Kernel 文档、Linux man-pages、POSIX/Open Group 规范、GNU Bash 手册以及 CS-Notes、JavaGuide、小林 coding，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["调度器底层机制是什么","调度器和相关概念如何区分","调度器线上异常如何排查"], prerequisites: ["process-state","context-switch"], related: ["time-slice","priority-scheduling"], learningPathPosition: 11 },
  /* <!-- KG_REVIEWED: 时间片 | 2026-05-24 | source_count=7 --> */
  /* <!-- KG_EXPLAINED: 时间片 | 2026-05-23 | source_count=7 --> */
  { sourceRefs: ["linux-kernel-docs","linux-man-pages","posix-base-spec","gnu-bash-manual","cs-notes","javaguide","xiaolin-coding"], id: "time-slice", zh: "时间片", en: "Time Slice", area: "scheduling", difficulty: "easy", summary: "分时系统中分配给任务的一段 CPU 时间。", explanation: ["核心概念：时间片（Time Slice）聚焦分时系统中分配给任务的一段 CPU 时间。。操作系统负责在硬件和应用之间管理 CPU、内存、文件、设备与权限；理解它时先抓住调度策略、时间片、优先级和公平性，再看输入、状态变化、输出结果和失败分支。","适用场景：时间片常用于交互式系统、后台任务、实时任务和多核负载分配。学习时把它放回操作系统链路中观察，并结合前置知识调度器判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，时间片通常会和轮转调度一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点适合先掌握主流程。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认调度策略、时间片、优先级和公平性是否仍然成立。","常见误区与注意点：实践中容易把时间片当成孤立概念处理，结果遗漏饥饿、优先级反转、抢占时机和 CPU 密集型任务影响。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考Linux Kernel 文档、Linux man-pages、POSIX/Open Group 规范、GNU Bash 手册以及 CS-Notes、JavaGuide、小林 coding，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["时间片底层机制是什么","时间片和相关概念如何区分","时间片线上异常如何排查"], prerequisites: ["scheduler"], related: ["round-robin"], learningPathPosition: 12 },
  /* <!-- KG_REVIEWED: 轮转调度 | 2026-05-24 | source_count=7 --> */
  /* <!-- KG_EXPLAINED: 轮转调度 | 2026-05-23 | source_count=7 --> */
  { sourceRefs: ["linux-kernel-docs","linux-man-pages","posix-base-spec","gnu-bash-manual","cs-notes","javaguide","xiaolin-coding"], id: "round-robin", zh: "轮转调度", en: "Round Robin Scheduling", area: "scheduling", difficulty: "medium", summary: "按时间片循环分配 CPU，适合交互式任务。", explanation: ["核心概念：轮转调度（Round Robin Scheduling）聚焦按时间片循环分配 CPU，适合交互式任务。。操作系统负责在硬件和应用之间管理 CPU、内存、文件、设备与权限；理解它时先抓住调度策略、时间片、优先级和公平性，再看输入、状态变化、输出结果和失败分支。","适用场景：轮转调度常用于交互式系统、后台任务、实时任务和多核负载分配。学习时把它放回操作系统链路中观察，并结合前置知识时间片判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，轮转调度通常会和优先级调度一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点需要结合流程和指标判断。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认调度策略、时间片、优先级和公平性是否仍然成立。","常见误区与注意点：实践中容易把轮转调度当成孤立概念处理，结果遗漏饥饿、优先级反转、抢占时机和 CPU 密集型任务影响。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考Linux Kernel 文档、Linux man-pages、POSIX/Open Group 规范、GNU Bash 手册以及 CS-Notes、JavaGuide、小林 coding，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["轮转调度底层机制是什么","轮转调度和相关概念如何区分","轮转调度线上异常如何排查"], prerequisites: ["time-slice"], related: ["priority-scheduling"], learningPathPosition: 13 },
  /* <!-- KG_REVIEWED: 优先级调度 | 2026-05-24 | source_count=7 --> */
  /* <!-- KG_EXPLAINED: 优先级调度 | 2026-05-23 | source_count=7 --> */
  { sourceRefs: ["linux-kernel-docs","linux-man-pages","posix-base-spec","gnu-bash-manual","cs-notes","javaguide","xiaolin-coding"], id: "priority-scheduling", zh: "优先级调度", en: "Priority Scheduling", area: "scheduling", difficulty: "medium", summary: "根据任务优先级分配 CPU，常结合抢占机制。", explanation: ["核心概念：优先级调度（Priority Scheduling）聚焦根据任务优先级分配 CPU，常结合抢占机制。。操作系统负责在硬件和应用之间管理 CPU、内存、文件、设备与权限；理解它时先抓住调度策略、时间片、优先级和公平性，再看输入、状态变化、输出结果和失败分支。","适用场景：优先级调度常用于交互式系统、后台任务、实时任务和多核负载分配。学习时把它放回操作系统链路中观察，并结合前置知识调度器判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，优先级调度通常会和优先级反转一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点需要结合流程和指标判断。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认调度策略、时间片、优先级和公平性是否仍然成立。","常见误区与注意点：实践中容易把优先级调度当成孤立概念处理，结果遗漏饥饿、优先级反转、抢占时机和 CPU 密集型任务影响。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考Linux Kernel 文档、Linux man-pages、POSIX/Open Group 规范、GNU Bash 手册以及 CS-Notes、JavaGuide、小林 coding，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["优先级调度底层机制是什么","优先级调度和相关概念如何区分","优先级调度线上异常如何排查"], prerequisites: ["scheduler"], related: ["priority-inversion"], learningPathPosition: 14 },
  /* <!-- KG_REVIEWED: 优先级反转 | 2026-05-24 | source_count=7 --> */
  /* <!-- KG_EXPLAINED: 优先级反转 | 2026-05-23 | source_count=7 --> */
  { sourceRefs: ["linux-kernel-docs","linux-man-pages","posix-base-spec","gnu-bash-manual","cs-notes","javaguide","xiaolin-coding"], id: "priority-inversion", zh: "优先级反转", en: "Priority Inversion", area: "scheduling", difficulty: "hard", summary: "低优先级任务持有资源导致高优先级任务等待。", explanation: ["核心概念：优先级反转（Priority Inversion）聚焦低优先级任务持有资源导致高优先级任务等待。。操作系统负责在硬件和应用之间管理 CPU、内存、文件、设备与权限；理解它时先抓住调度策略、时间片、优先级和公平性，再看输入、状态变化、输出结果和失败分支。","适用场景：优先级反转常用于交互式系统、后台任务、实时任务和多核负载分配。学习时把它放回操作系统链路中观察，并结合前置知识优先级调度和互斥锁判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，优先级反转通常会和死锁一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点风险和细节较多。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认调度策略、时间片、优先级和公平性是否仍然成立。","常见误区与注意点：实践中容易把优先级反转当成孤立概念处理，结果遗漏饥饿、优先级反转、抢占时机和 CPU 密集型任务影响。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考Linux Kernel 文档、Linux man-pages、POSIX/Open Group 规范、GNU Bash 手册以及 CS-Notes、JavaGuide、小林 coding，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["优先级反转底层机制是什么","优先级反转和相关概念如何区分","优先级反转线上异常如何排查"], prerequisites: ["priority-scheduling","mutex"], related: ["deadlock"], learningPathPosition: 15 },
  /* <!-- KG_REVIEWED: 临界区 | 2026-05-24 | source_count=7 --> */
  /* <!-- KG_EXPLAINED: 临界区 | 2026-05-23 | source_count=7 --> */
  { sourceRefs: ["linux-kernel-docs","linux-man-pages","posix-base-spec","gnu-bash-manual","cs-notes","javaguide","xiaolin-coding"], id: "critical-section", zh: "临界区", en: "Critical Section", area: "concurrency", difficulty: "easy", summary: "访问共享资源时需要互斥保护的代码区域。", explanation: ["核心概念：临界区（Critical Section）聚焦访问共享资源时需要互斥保护的代码区域。。操作系统负责在硬件和应用之间管理 CPU、内存、文件、设备与权限；理解它时先抓住共享状态、同步原语和并发正确性，再看输入、状态变化、输出结果和失败分支。","适用场景：临界区常用于多线程服务、生产者消费者、锁保护数据结构和资源池。学习时把它放回操作系统链路中观察，并结合前置知识线程判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，临界区通常会和互斥锁和信号量一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点适合先掌握主流程。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认共享状态、同步原语和并发正确性是否仍然成立。","常见误区与注意点：实践中容易把临界区当成孤立概念处理，结果遗漏竞态、死锁、虚假唤醒、锁粒度和原子性边界。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考Linux Kernel 文档、Linux man-pages、POSIX/Open Group 规范、GNU Bash 手册以及 CS-Notes、JavaGuide、小林 coding，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["临界区底层机制是什么","临界区和相关概念如何区分","临界区线上异常如何排查"], prerequisites: ["thread"], related: ["mutex","semaphore"], learningPathPosition: 16 },
  /* <!-- KG_REVIEWED: 互斥锁 | 2026-05-24 | source_count=7 --> */
  /* <!-- KG_EXPLAINED: 互斥锁 | 2026-05-23 | source_count=7 --> */
  { sourceRefs: ["linux-kernel-docs","linux-man-pages","posix-base-spec","gnu-bash-manual","cs-notes","javaguide","xiaolin-coding"], id: "mutex", zh: "互斥锁", en: "Mutex", area: "concurrency", difficulty: "medium", summary: "保证同一时刻只有一个线程进入临界区。", explanation: ["核心概念：互斥锁（Mutex）聚焦保证同一时刻只有一个线程进入临界区。。操作系统负责在硬件和应用之间管理 CPU、内存、文件、设备与权限；理解它时先抓住共享状态、同步原语和并发正确性，再看输入、状态变化、输出结果和失败分支。","适用场景：互斥锁常用于多线程服务、生产者消费者、锁保护数据结构和资源池。学习时把它放回操作系统链路中观察，并结合前置知识临界区判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，互斥锁通常会和死锁和条件变量一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点需要结合流程和指标判断。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认共享状态、同步原语和并发正确性是否仍然成立。","常见误区与注意点：实践中容易把互斥锁当成孤立概念处理，结果遗漏竞态、死锁、虚假唤醒、锁粒度和原子性边界。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考Linux Kernel 文档、Linux man-pages、POSIX/Open Group 规范、GNU Bash 手册以及 CS-Notes、JavaGuide、小林 coding，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["互斥锁底层机制是什么","互斥锁和相关概念如何区分","互斥锁线上异常如何排查"], prerequisites: ["critical-section"], related: ["deadlock","condition-variable"], learningPathPosition: 17 },
  /* <!-- KG_REVIEWED: 信号量 | 2026-05-24 | source_count=7 --> */
  /* <!-- KG_EXPLAINED: 信号量 | 2026-05-23 | source_count=7 --> */
  { sourceRefs: ["linux-kernel-docs","linux-man-pages","posix-base-spec","gnu-bash-manual","cs-notes","javaguide","xiaolin-coding"], id: "semaphore", zh: "信号量", en: "Semaphore", area: "concurrency", difficulty: "medium", summary: "用计数器控制多个线程对有限资源的访问。", explanation: ["核心概念：信号量（Semaphore）聚焦用计数器控制多个线程对有限资源的访问。。操作系统负责在硬件和应用之间管理 CPU、内存、文件、设备与权限；理解它时先抓住共享状态、同步原语和并发正确性，再看输入、状态变化、输出结果和失败分支。","适用场景：信号量常用于多线程服务、生产者消费者、锁保护数据结构和资源池。学习时把它放回操作系统链路中观察，并结合前置知识临界区判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，信号量通常会和生产者消费者模型一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点需要结合流程和指标判断。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认共享状态、同步原语和并发正确性是否仍然成立。","常见误区与注意点：实践中容易把信号量当成孤立概念处理，结果遗漏竞态、死锁、虚假唤醒、锁粒度和原子性边界。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考Linux Kernel 文档、Linux man-pages、POSIX/Open Group 规范、GNU Bash 手册以及 CS-Notes、JavaGuide、小林 coding，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["信号量底层机制是什么","信号量和相关概念如何区分","信号量线上异常如何排查"], prerequisites: ["critical-section"], related: ["producer-consumer"], learningPathPosition: 18 },
  /* <!-- KG_REVIEWED: 条件变量 | 2026-05-24 | source_count=7 --> */
  /* <!-- KG_EXPLAINED: 条件变量 | 2026-05-23 | source_count=7 --> */
  { sourceRefs: ["linux-kernel-docs","linux-man-pages","posix-base-spec","gnu-bash-manual","cs-notes","javaguide","xiaolin-coding"], id: "condition-variable", zh: "条件变量", en: "Condition Variable", area: "concurrency", difficulty: "medium", summary: "让线程在条件满足前等待，并在条件变化后被唤醒。", explanation: ["核心概念：条件变量（Condition Variable）聚焦让线程在条件满足前等待，并在条件变化后被唤醒。。操作系统负责在硬件和应用之间管理 CPU、内存、文件、设备与权限；理解它时先抓住共享状态、同步原语和并发正确性，再看输入、状态变化、输出结果和失败分支。","适用场景：条件变量常用于多线程服务、生产者消费者、锁保护数据结构和资源池。学习时把它放回操作系统链路中观察，并结合前置知识互斥锁判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，条件变量通常会和生产者消费者模型一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点需要结合流程和指标判断。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认共享状态、同步原语和并发正确性是否仍然成立。","常见误区与注意点：实践中容易把条件变量当成孤立概念处理，结果遗漏竞态、死锁、虚假唤醒、锁粒度和原子性边界。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考Linux Kernel 文档、Linux man-pages、POSIX/Open Group 规范、GNU Bash 手册以及 CS-Notes、JavaGuide、小林 coding，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["条件变量底层机制是什么","条件变量和相关概念如何区分","条件变量线上异常如何排查"], prerequisites: ["mutex"], related: ["producer-consumer"], learningPathPosition: 19 },
  /* <!-- KG_REVIEWED: 生产者消费者模型 | 2026-05-24 | source_count=7 --> */
  /* <!-- KG_EXPLAINED: 生产者消费者模型 | 2026-05-23 | source_count=7 --> */
  { sourceRefs: ["linux-kernel-docs","linux-man-pages","posix-base-spec","gnu-bash-manual","cs-notes","javaguide","xiaolin-coding"], id: "producer-consumer", zh: "生产者消费者模型", en: "Producer Consumer Model", area: "concurrency", difficulty: "medium", summary: "用队列、锁和条件同步协调生产与消费速度。", explanation: ["核心概念：生产者消费者模型（Producer Consumer Model）聚焦用队列、锁和条件同步协调生产与消费速度。。操作系统负责在硬件和应用之间管理 CPU、内存、文件、设备与权限；理解它时先抓住共享状态、同步原语和并发正确性，再看输入、状态变化、输出结果和失败分支。","适用场景：生产者消费者模型常用于多线程服务、生产者消费者、锁保护数据结构和资源池。学习时把它放回操作系统链路中观察，并结合前置知识信号量和条件变量判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，生产者消费者模型通常会和线程安全一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点需要结合流程和指标判断。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认共享状态、同步原语和并发正确性是否仍然成立。","常见误区与注意点：实践中容易把生产者消费者模型当成孤立概念处理，结果遗漏竞态、死锁、虚假唤醒、锁粒度和原子性边界。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考Linux Kernel 文档、Linux man-pages、POSIX/Open Group 规范、GNU Bash 手册以及 CS-Notes、JavaGuide、小林 coding，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["生产者消费者模型底层机制是什么","生产者消费者模型和相关概念如何区分","生产者消费者模型线上异常如何排查"], prerequisites: ["semaphore","condition-variable"], related: ["thread-safety"], learningPathPosition: 20 },
  /* <!-- KG_REVIEWED: 线程安全 | 2026-05-24 | source_count=7 --> */
  /* <!-- KG_EXPLAINED: 线程安全 | 2026-05-23 | source_count=7 --> */
  { sourceRefs: ["linux-kernel-docs","linux-man-pages","posix-base-spec","gnu-bash-manual","cs-notes","javaguide","xiaolin-coding"], id: "thread-safety", zh: "线程安全", en: "Thread Safety", area: "concurrency", difficulty: "medium", summary: "多线程访问共享状态时保持结果正确。", explanation: ["核心概念：线程安全（Thread Safety）聚焦多线程访问共享状态时保持结果正确。。操作系统负责在硬件和应用之间管理 CPU、内存、文件、设备与权限；理解它时先抓住共享状态、同步原语和并发正确性，再看输入、状态变化、输出结果和失败分支。","适用场景：线程安全常用于多线程服务、生产者消费者、锁保护数据结构和资源池。学习时把它放回操作系统链路中观察，并结合前置知识互斥锁和临界区判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，线程安全通常会和竞态条件一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点需要结合流程和指标判断。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认共享状态、同步原语和并发正确性是否仍然成立。","常见误区与注意点：实践中容易把线程安全当成孤立概念处理，结果遗漏竞态、死锁、虚假唤醒、锁粒度和原子性边界。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考Linux Kernel 文档、Linux man-pages、POSIX/Open Group 规范、GNU Bash 手册以及 CS-Notes、JavaGuide、小林 coding，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["线程安全底层机制是什么","线程安全和相关概念如何区分","线程安全线上异常如何排查"], prerequisites: ["mutex","critical-section"], related: ["race-condition"], learningPathPosition: 21 },
  /* <!-- KG_REVIEWED: 竞态条件 | 2026-05-24 | source_count=7 --> */
  /* <!-- KG_EXPLAINED: 竞态条件 | 2026-05-23 | source_count=7 --> */
  { sourceRefs: ["linux-kernel-docs","linux-man-pages","posix-base-spec","gnu-bash-manual","cs-notes","javaguide","xiaolin-coding"], id: "race-condition", zh: "竞态条件", en: "Race Condition", area: "concurrency", difficulty: "medium", summary: "程序结果依赖线程执行时序导致行为不稳定。", explanation: ["核心概念：竞态条件（Race Condition）聚焦程序结果依赖线程执行时序导致行为不稳定。。操作系统负责在硬件和应用之间管理 CPU、内存、文件、设备与权限；理解它时先抓住共享状态、同步原语和并发正确性，再看输入、状态变化、输出结果和失败分支。","适用场景：竞态条件常用于多线程服务、生产者消费者、锁保护数据结构和资源池。学习时把它放回操作系统链路中观察，并结合前置知识线程安全判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，竞态条件通常会和原子操作一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点需要结合流程和指标判断。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认共享状态、同步原语和并发正确性是否仍然成立。","常见误区与注意点：实践中容易把竞态条件当成孤立概念处理，结果遗漏竞态、死锁、虚假唤醒、锁粒度和原子性边界。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考Linux Kernel 文档、Linux man-pages、POSIX/Open Group 规范、GNU Bash 手册以及 CS-Notes、JavaGuide、小林 coding，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["竞态条件底层机制是什么","竞态条件和相关概念如何区分","竞态条件线上异常如何排查"], prerequisites: ["thread-safety"], related: ["atomic-operation"], learningPathPosition: 22 },
  /* <!-- KG_REVIEWED: 原子操作 | 2026-05-24 | source_count=7 --> */
  /* <!-- KG_EXPLAINED: 原子操作 | 2026-05-23 | source_count=7 --> */
  { sourceRefs: ["linux-kernel-docs","linux-man-pages","posix-base-spec","gnu-bash-manual","cs-notes","javaguide","xiaolin-coding"], id: "atomic-operation", zh: "原子操作", en: "Atomic Operation", area: "concurrency", difficulty: "hard", summary: "执行过程中不可被打断的操作，用于构建无锁同步。", explanation: ["核心概念：原子操作（Atomic Operation）聚焦执行过程中不可被打断的操作，用于构建无锁同步。。操作系统负责在硬件和应用之间管理 CPU、内存、文件、设备与权限；理解它时先抓住共享状态、同步原语和并发正确性，再看输入、状态变化、输出结果和失败分支。","适用场景：原子操作常用于多线程服务、生产者消费者、锁保护数据结构和资源池。学习时把它放回操作系统链路中观察，并结合前置知识竞态条件判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，原子操作通常会和互斥锁一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点风险和细节较多。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认共享状态、同步原语和并发正确性是否仍然成立。","常见误区与注意点：实践中容易把原子操作当成孤立概念处理，结果遗漏竞态、死锁、虚假唤醒、锁粒度和原子性边界。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考Linux Kernel 文档、Linux man-pages、POSIX/Open Group 规范、GNU Bash 手册以及 CS-Notes、JavaGuide、小林 coding，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["原子操作底层机制是什么","原子操作和相关概念如何区分","原子操作线上异常如何排查"], prerequisites: ["race-condition"], related: ["mutex"], learningPathPosition: 23 },
  /* <!-- KG_REVIEWED: 死锁 | 2026-05-24 | source_count=7 --> */
  /* <!-- KG_EXPLAINED: 死锁 | 2026-05-23 | source_count=7 --> */
  { sourceRefs: ["linux-kernel-docs","linux-man-pages","posix-base-spec","gnu-bash-manual","cs-notes","javaguide","xiaolin-coding"], id: "deadlock", zh: "死锁", en: "Deadlock", area: "concurrency", difficulty: "medium", summary: "多个任务相互等待资源导致永久阻塞。", explanation: ["核心概念：死锁（Deadlock）聚焦多个任务相互等待资源导致永久阻塞。。操作系统负责在硬件和应用之间管理 CPU、内存、文件、设备与权限；理解它时先抓住共享状态、同步原语和并发正确性，再看输入、状态变化、输出结果和失败分支。","适用场景：死锁常用于多线程服务、生产者消费者、锁保护数据结构和资源池。学习时把它放回操作系统链路中观察，并结合前置知识互斥锁和信号量判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，死锁通常会和死锁四条件和死锁预防与避免一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点需要结合流程和指标判断。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认共享状态、同步原语和并发正确性是否仍然成立。","常见误区与注意点：实践中容易把死锁当成孤立概念处理，结果遗漏竞态、死锁、虚假唤醒、锁粒度和原子性边界。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考Linux Kernel 文档、Linux man-pages、POSIX/Open Group 规范、GNU Bash 手册以及 CS-Notes、JavaGuide、小林 coding，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["死锁底层机制是什么","死锁和相关概念如何区分","死锁线上异常如何排查"], prerequisites: ["mutex","semaphore"], related: ["deadlock-conditions","deadlock-prevention"], learningPathPosition: 24 },
  /* <!-- KG_REVIEWED: 死锁四条件 | 2026-05-24 | source_count=7 --> */
  /* <!-- KG_EXPLAINED: 死锁四条件 | 2026-05-23 | source_count=7 --> */
  { sourceRefs: ["linux-kernel-docs","linux-man-pages","posix-base-spec","gnu-bash-manual","cs-notes","javaguide","xiaolin-coding"], id: "deadlock-conditions", zh: "死锁四条件", en: "Deadlock Conditions", area: "concurrency", difficulty: "medium", summary: "互斥、占有且等待、不可抢占、循环等待共同构成死锁条件。", explanation: ["核心概念：死锁四条件（Deadlock Conditions）聚焦互斥、占有且等待、不可抢占、循环等待共同构成死锁条件。。操作系统负责在硬件和应用之间管理 CPU、内存、文件、设备与权限；理解它时先抓住共享状态、同步原语和并发正确性，再看输入、状态变化、输出结果和失败分支。","适用场景：死锁四条件常用于多线程服务、生产者消费者、锁保护数据结构和资源池。学习时把它放回操作系统链路中观察，并结合前置知识死锁判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，死锁四条件通常会和死锁预防与避免一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点需要结合流程和指标判断。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认共享状态、同步原语和并发正确性是否仍然成立。","常见误区与注意点：实践中容易把死锁四条件当成孤立概念处理，结果遗漏竞态、死锁、虚假唤醒、锁粒度和原子性边界。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考Linux Kernel 文档、Linux man-pages、POSIX/Open Group 规范、GNU Bash 手册以及 CS-Notes、JavaGuide、小林 coding，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["死锁四条件底层机制是什么","死锁四条件和相关概念如何区分","死锁四条件线上异常如何排查"], prerequisites: ["deadlock"], related: ["deadlock-prevention"], learningPathPosition: 25 },
  /* <!-- KG_REVIEWED: 死锁预防与避免 | 2026-05-24 | source_count=7 --> */
  /* <!-- KG_EXPLAINED: 死锁预防与避免 | 2026-05-23 | source_count=7 --> */
  { sourceRefs: ["linux-kernel-docs","linux-man-pages","posix-base-spec","gnu-bash-manual","cs-notes","javaguide","xiaolin-coding"], id: "deadlock-prevention", zh: "死锁预防与避免", en: "Deadlock Prevention and Avoidance", area: "concurrency", difficulty: "hard", summary: "通过破坏条件、资源排序或银行家算法降低死锁风险。", explanation: ["核心概念：死锁预防与避免（Deadlock Prevention and Avoidance）聚焦通过破坏条件、资源排序或银行家算法降低死锁风险。。操作系统负责在硬件和应用之间管理 CPU、内存、文件、设备与权限；理解它时先抓住共享状态、同步原语和并发正确性，再看输入、状态变化、输出结果和失败分支。","适用场景：死锁预防与避免常用于多线程服务、生产者消费者、锁保护数据结构和资源池。学习时把它放回操作系统链路中观察，并结合前置知识死锁四条件判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，死锁预防与避免通常会和优先级反转一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点风险和细节较多。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认共享状态、同步原语和并发正确性是否仍然成立。","常见误区与注意点：实践中容易把死锁预防与避免当成孤立概念处理，结果遗漏竞态、死锁、虚假唤醒、锁粒度和原子性边界。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考Linux Kernel 文档、Linux man-pages、POSIX/Open Group 规范、GNU Bash 手册以及 CS-Notes、JavaGuide、小林 coding，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["死锁预防与避免底层机制是什么","死锁预防与避免和相关概念如何区分","死锁预防与避免线上异常如何排查"], prerequisites: ["deadlock-conditions"], related: ["priority-inversion"], learningPathPosition: 26 },
  /* <!-- KG_REVIEWED: 内存管理 | 2026-05-24 | source_count=7 --> */
  /* <!-- KG_EXPLAINED: 内存管理 | 2026-05-23 | source_count=7 --> */
  { sourceRefs: ["linux-kernel-docs","linux-man-pages","posix-base-spec","gnu-bash-manual","cs-notes","javaguide","xiaolin-coding"], id: "memory-management", zh: "内存管理", en: "Memory Management", area: "memory", difficulty: "easy", summary: "管理物理内存、虚拟地址空间和内存分配。", explanation: ["核心概念：内存管理（Memory Management）聚焦管理物理内存、虚拟地址空间和内存分配。。操作系统负责在硬件和应用之间管理 CPU、内存、文件、设备与权限；理解它时先抓住虚拟地址、页表、缺页、缓存和换页，再看输入、状态变化、输出结果和失败分支。","适用场景：内存管理常用于进程隔离、动态分配、内存映射、页缓存和大内存服务。学习时把它放回操作系统链路中观察，并结合前置知识内核判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，内存管理通常会和虚拟内存和分页一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点适合先掌握主流程。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认虚拟地址、页表、缺页、缓存和换页是否仍然成立。","常见误区与注意点：实践中容易把内存管理当成孤立概念处理，结果遗漏TLB 命中、页表层级、OOM、swap 抖动和内存碎片。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考Linux Kernel 文档、Linux man-pages、POSIX/Open Group 规范、GNU Bash 手册以及 CS-Notes、JavaGuide、小林 coding，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["内存管理底层机制是什么","内存管理和相关概念如何区分","内存管理线上异常如何排查"], prerequisites: ["kernel"], related: ["virtual-memory","paging"], learningPathPosition: 27 },
  /* <!-- KG_REVIEWED: 虚拟内存 | 2026-05-24 | source_count=7 --> */
  /* <!-- KG_EXPLAINED: 虚拟内存 | 2026-05-23 | source_count=7 --> */
  { sourceRefs: ["linux-kernel-docs","linux-man-pages","posix-base-spec","gnu-bash-manual","cs-notes","javaguide","xiaolin-coding"], id: "virtual-memory", zh: "虚拟内存", en: "Virtual Memory", area: "memory", difficulty: "medium", summary: "为进程提供独立连续的虚拟地址空间。", explanation: ["核心概念：虚拟内存（Virtual Memory）聚焦为进程提供独立连续的虚拟地址空间。。操作系统负责在硬件和应用之间管理 CPU、内存、文件、设备与权限；理解它时先抓住虚拟地址、页表、缺页、缓存和换页，再看输入、状态变化、输出结果和失败分支。","适用场景：虚拟内存常用于进程隔离、动态分配、内存映射、页缓存和大内存服务。学习时把它放回操作系统链路中观察，并结合前置知识内存管理判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，虚拟内存通常会和分页和页表一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点需要结合流程和指标判断。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认虚拟地址、页表、缺页、缓存和换页是否仍然成立。","常见误区与注意点：实践中容易把虚拟内存当成孤立概念处理，结果遗漏TLB 命中、页表层级、OOM、swap 抖动和内存碎片。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考Linux Kernel 文档、Linux man-pages、POSIX/Open Group 规范、GNU Bash 手册以及 CS-Notes、JavaGuide、小林 coding，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["虚拟内存底层机制是什么","虚拟内存和相关概念如何区分","虚拟内存线上异常如何排查"], prerequisites: ["memory-management"], related: ["paging","page-table"], learningPathPosition: 28 },
  /* <!-- KG_REVIEWED: 分页 | 2026-05-24 | source_count=7 --> */
  /* <!-- KG_EXPLAINED: 分页 | 2026-05-23 | source_count=7 --> */
  { sourceRefs: ["linux-kernel-docs","linux-man-pages","posix-base-spec","gnu-bash-manual","cs-notes","javaguide","xiaolin-coding"], id: "paging", zh: "分页", en: "Paging", area: "memory", difficulty: "medium", summary: "把虚拟内存和物理内存划分为固定大小页面。", explanation: ["核心概念：分页（Paging）聚焦把虚拟内存和物理内存划分为固定大小页面。。操作系统负责在硬件和应用之间管理 CPU、内存、文件、设备与权限；理解它时先抓住虚拟地址、页表、缺页、缓存和换页，再看输入、状态变化、输出结果和失败分支。","适用场景：分页常用于进程隔离、动态分配、内存映射、页缓存和大内存服务。学习时把它放回操作系统链路中观察，并结合前置知识虚拟内存判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，分页通常会和页表和缺页异常一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点需要结合流程和指标判断。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认虚拟地址、页表、缺页、缓存和换页是否仍然成立。","常见误区与注意点：实践中容易把分页当成孤立概念处理，结果遗漏TLB 命中、页表层级、OOM、swap 抖动和内存碎片。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考Linux Kernel 文档、Linux man-pages、POSIX/Open Group 规范、GNU Bash 手册以及 CS-Notes、JavaGuide、小林 coding，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["分页底层机制是什么","分页和相关概念如何区分","分页线上异常如何排查"], prerequisites: ["virtual-memory"], related: ["page-table","page-fault"], learningPathPosition: 29 },
  /* <!-- KG_REVIEWED: 页表 | 2026-05-24 | source_count=7 --> */
  /* <!-- KG_EXPLAINED: 页表 | 2026-05-23 | source_count=7 --> */
  { sourceRefs: ["linux-kernel-docs","linux-man-pages","posix-base-spec","gnu-bash-manual","cs-notes","javaguide","xiaolin-coding"], id: "page-table", zh: "页表", en: "Page Table", area: "memory", difficulty: "hard", summary: "记录虚拟页到物理页框的映射关系。", explanation: ["核心概念：页表（Page Table）聚焦记录虚拟页到物理页框的映射关系。。操作系统负责在硬件和应用之间管理 CPU、内存、文件、设备与权限；理解它时先抓住虚拟地址、页表、缺页、缓存和换页，再看输入、状态变化、输出结果和失败分支。","适用场景：页表常用于进程隔离、动态分配、内存映射、页缓存和大内存服务。学习时把它放回操作系统链路中观察，并结合前置知识分页判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，页表通常会和TLB一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点风险和细节较多。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认虚拟地址、页表、缺页、缓存和换页是否仍然成立。","常见误区与注意点：实践中容易把页表当成孤立概念处理，结果遗漏TLB 命中、页表层级、OOM、swap 抖动和内存碎片。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考Linux Kernel 文档、Linux man-pages、POSIX/Open Group 规范、GNU Bash 手册以及 CS-Notes、JavaGuide、小林 coding，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["页表底层机制是什么","页表和相关概念如何区分","页表线上异常如何排查"], prerequisites: ["paging"], related: ["tlb"], learningPathPosition: 30 },
  /* <!-- KG_REVIEWED: TLB | 2026-05-24 | source_count=7 --> */
  /* <!-- KG_EXPLAINED: TLB | 2026-05-23 | source_count=7 --> */
  { sourceRefs: ["linux-kernel-docs","linux-man-pages","posix-base-spec","gnu-bash-manual","cs-notes","javaguide","xiaolin-coding"], id: "tlb", zh: "TLB", en: "Translation Lookaside Buffer", area: "memory", difficulty: "hard", summary: "缓存地址转换结果，提高虚拟地址访问速度。", explanation: ["核心概念：TLB（Translation Lookaside Buffer）聚焦缓存地址转换结果，提高虚拟地址访问速度。。操作系统负责在硬件和应用之间管理 CPU、内存、文件、设备与权限；理解它时先抓住虚拟地址、页表、缺页、缓存和换页，再看输入、状态变化、输出结果和失败分支。","适用场景：TLB常用于进程隔离、动态分配、内存映射、页缓存和大内存服务。学习时把它放回操作系统链路中观察，并结合前置知识页表判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，TLB通常会和缺页异常一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点风险和细节较多。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认虚拟地址、页表、缺页、缓存和换页是否仍然成立。","常见误区与注意点：实践中容易把TLB当成孤立概念处理，结果遗漏TLB 命中、页表层级、OOM、swap 抖动和内存碎片。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考Linux Kernel 文档、Linux man-pages、POSIX/Open Group 规范、GNU Bash 手册以及 CS-Notes、JavaGuide、小林 coding，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["TLB底层机制是什么","TLB和相关概念如何区分","TLB线上异常如何排查"], prerequisites: ["page-table"], related: ["page-fault"], learningPathPosition: 31 },
  /* <!-- KG_REVIEWED: 缺页异常 | 2026-05-24 | source_count=7 --> */
  /* <!-- KG_EXPLAINED: 缺页异常 | 2026-05-23 | source_count=7 --> */
  { sourceRefs: ["linux-kernel-docs","linux-man-pages","posix-base-spec","gnu-bash-manual","cs-notes","javaguide","xiaolin-coding"], id: "page-fault", zh: "缺页异常", en: "Page Fault", area: "memory", difficulty: "hard", summary: "访问的页面不在物理内存时触发内核处理。", explanation: ["核心概念：缺页异常（Page Fault）聚焦访问的页面不在物理内存时触发内核处理。。操作系统负责在硬件和应用之间管理 CPU、内存、文件、设备与权限；理解它时先抓住虚拟地址、页表、缺页、缓存和换页，再看输入、状态变化、输出结果和失败分支。","适用场景：缺页异常常用于进程隔离、动态分配、内存映射、页缓存和大内存服务。学习时把它放回操作系统链路中观察，并结合前置知识分页和页表判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，缺页异常通常会和交换空间一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点风险和细节较多。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认虚拟地址、页表、缺页、缓存和换页是否仍然成立。","常见误区与注意点：实践中容易把缺页异常当成孤立概念处理，结果遗漏TLB 命中、页表层级、OOM、swap 抖动和内存碎片。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考Linux Kernel 文档、Linux man-pages、POSIX/Open Group 规范、GNU Bash 手册以及 CS-Notes、JavaGuide、小林 coding，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["缺页异常底层机制是什么","缺页异常和相关概念如何区分","缺页异常线上异常如何排查"], prerequisites: ["paging","page-table"], related: ["swap"], learningPathPosition: 32 },
  /* <!-- KG_REVIEWED: 交换空间 | 2026-05-24 | source_count=7 --> */
  /* <!-- KG_EXPLAINED: 交换空间 | 2026-05-23 | source_count=7 --> */
  { sourceRefs: ["linux-kernel-docs","linux-man-pages","posix-base-spec","gnu-bash-manual","cs-notes","javaguide","xiaolin-coding"], id: "swap", zh: "交换空间", en: "Swap Space", area: "memory", difficulty: "medium", summary: "把暂时不用的内存页写入磁盘扩展可用内存。", explanation: ["核心概念：交换空间（Swap Space）聚焦把暂时不用的内存页写入磁盘扩展可用内存。。操作系统负责在硬件和应用之间管理 CPU、内存、文件、设备与权限；理解它时先抓住虚拟地址、页表、缺页、缓存和换页，再看输入、状态变化、输出结果和失败分支。","适用场景：交换空间常用于进程隔离、动态分配、内存映射、页缓存和大内存服务。学习时把它放回操作系统链路中观察，并结合前置知识缺页异常判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，交换空间通常会和虚拟内存一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点需要结合流程和指标判断。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认虚拟地址、页表、缺页、缓存和换页是否仍然成立。","常见误区与注意点：实践中容易把交换空间当成孤立概念处理，结果遗漏TLB 命中、页表层级、OOM、swap 抖动和内存碎片。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考Linux Kernel 文档、Linux man-pages、POSIX/Open Group 规范、GNU Bash 手册以及 CS-Notes、JavaGuide、小林 coding，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["交换空间底层机制是什么","交换空间和相关概念如何区分","交换空间线上异常如何排查"], prerequisites: ["page-fault"], related: ["virtual-memory"], learningPathPosition: 33 },
  /* <!-- KG_REVIEWED: 堆与栈 | 2026-05-24 | source_count=7 --> */
  /* <!-- KG_EXPLAINED: 堆与栈 | 2026-05-23 | source_count=7 --> */
  { sourceRefs: ["linux-kernel-docs","linux-man-pages","posix-base-spec","gnu-bash-manual","cs-notes","javaguide","xiaolin-coding"], id: "heap-stack", zh: "堆与栈", en: "Heap and Stack", area: "memory", difficulty: "easy", summary: "理解函数调用栈和动态内存分配区域。", explanation: ["核心概念：堆与栈（Heap and Stack）聚焦理解函数调用栈和动态内存分配区域。。操作系统负责在硬件和应用之间管理 CPU、内存、文件、设备与权限；理解它时先抓住虚拟地址、页表、缺页、缓存和换页，再看输入、状态变化、输出结果和失败分支。","适用场景：堆与栈常用于进程隔离、动态分配、内存映射、页缓存和大内存服务。学习时把它放回操作系统链路中观察，并结合前置知识内存管理判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，堆与栈通常会和虚拟内存一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点适合先掌握主流程。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认虚拟地址、页表、缺页、缓存和换页是否仍然成立。","常见误区与注意点：实践中容易把堆与栈当成孤立概念处理，结果遗漏TLB 命中、页表层级、OOM、swap 抖动和内存碎片。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考Linux Kernel 文档、Linux man-pages、POSIX/Open Group 规范、GNU Bash 手册以及 CS-Notes、JavaGuide、小林 coding，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["堆与栈底层机制是什么","堆与栈和相关概念如何区分","堆与栈线上异常如何排查"], prerequisites: ["memory-management"], related: ["virtual-memory"], learningPathPosition: 34 },
  /* <!-- KG_REVIEWED: 文件系统 | 2026-05-24 | source_count=7 --> */
  /* <!-- KG_EXPLAINED: 文件系统 | 2026-05-23 | source_count=7 --> */
  { sourceRefs: ["linux-kernel-docs","linux-man-pages","posix-base-spec","gnu-bash-manual","cs-notes","javaguide","xiaolin-coding"], id: "file-system", zh: "文件系统", en: "File System", area: "file-system", difficulty: "easy", summary: "组织文件、目录、权限和磁盘数据布局。", explanation: ["核心概念：文件系统（File System）聚焦组织文件、目录、权限和磁盘数据布局。。操作系统负责在硬件和应用之间管理 CPU、内存、文件、设备与权限；理解它时先抓住文件、目录、inode、权限和描述符，再看输入、状态变化、输出结果和失败分支。","适用场景：文件系统常用于日志文件、配置文件、链接、管道、socket 文件和权限控制。学习时把它放回操作系统链路中观察，并结合前置知识内核判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，文件系统通常会和inode和文件描述符一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点适合先掌握主流程。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认文件、目录、inode、权限和描述符是否仍然成立。","常见误区与注意点：实践中容易把文件系统当成孤立概念处理，结果遗漏描述符泄漏、链接语义、权限位、缓存一致性和磁盘满。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考Linux Kernel 文档、Linux man-pages、POSIX/Open Group 规范、GNU Bash 手册以及 CS-Notes、JavaGuide、小林 coding，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["文件系统底层机制是什么","文件系统和相关概念如何区分","文件系统线上异常如何排查"], prerequisites: ["kernel"], related: ["inode","file-descriptor"], learningPathPosition: 35 },
  /* <!-- KG_REVIEWED: inode | 2026-05-24 | source_count=7 --> */
  /* <!-- KG_EXPLAINED: inode | 2026-05-23 | source_count=7 --> */
  { sourceRefs: ["linux-kernel-docs","linux-man-pages","posix-base-spec","gnu-bash-manual","cs-notes","javaguide","xiaolin-coding"], id: "inode", zh: "inode", en: "inode", area: "file-system", difficulty: "medium", summary: "Linux 文件元数据结构，记录权限、大小和数据块位置。", explanation: ["核心概念：inode聚焦Linux 文件元数据结构，记录权限、大小和数据块位置。。操作系统负责在硬件和应用之间管理 CPU、内存、文件、设备与权限；理解它时先抓住文件、目录、inode、权限和描述符，再看输入、状态变化、输出结果和失败分支。","适用场景：inode常用于日志文件、配置文件、链接、管道、socket 文件和权限控制。学习时把它放回操作系统链路中观察，并结合前置知识文件系统判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，inode通常会和硬链接和软链接一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点需要结合流程和指标判断。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认文件、目录、inode、权限和描述符是否仍然成立。","常见误区与注意点：实践中容易把inode当成孤立概念处理，结果遗漏描述符泄漏、链接语义、权限位、缓存一致性和磁盘满。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考Linux Kernel 文档、Linux man-pages、POSIX/Open Group 规范、GNU Bash 手册以及 CS-Notes、JavaGuide、小林 coding，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["inode底层机制是什么","inode和相关概念如何区分","inode线上异常如何排查"], prerequisites: ["file-system"], related: ["hard-link","soft-link"], learningPathPosition: 36 },
  /* <!-- KG_REVIEWED: 文件描述符 | 2026-05-24 | source_count=7 --> */
  /* <!-- KG_EXPLAINED: 文件描述符 | 2026-05-23 | source_count=7 --> */
  { sourceRefs: ["linux-kernel-docs","linux-man-pages","posix-base-spec","gnu-bash-manual","cs-notes","javaguide","xiaolin-coding"], id: "file-descriptor", zh: "文件描述符", en: "File Descriptor", area: "file-system", difficulty: "medium", summary: "进程访问文件、管道、Socket 等资源的整数句柄。", explanation: ["核心概念：文件描述符（File Descriptor）聚焦进程访问文件、管道、Socket 等资源的整数句柄。。操作系统负责在硬件和应用之间管理 CPU、内存、文件、设备与权限；理解它时先抓住文件、目录、inode、权限和描述符，再看输入、状态变化、输出结果和失败分支。","适用场景：文件描述符常用于日志文件、配置文件、链接、管道、socket 文件和权限控制。学习时把它放回操作系统链路中观察，并结合前置知识系统调用和文件系统判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，文件描述符通常会和管道和Socket一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点需要结合流程和指标判断。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认文件、目录、inode、权限和描述符是否仍然成立。","常见误区与注意点：实践中容易把文件描述符当成孤立概念处理，结果遗漏描述符泄漏、链接语义、权限位、缓存一致性和磁盘满。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考Linux Kernel 文档、Linux man-pages、POSIX/Open Group 规范、GNU Bash 手册以及 CS-Notes、JavaGuide、小林 coding，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["文件描述符底层机制是什么","文件描述符和相关概念如何区分","文件描述符线上异常如何排查"], prerequisites: ["system-call","file-system"], related: ["pipe","socket"], learningPathPosition: 37 },
  /* <!-- KG_REVIEWED: 硬链接 | 2026-05-24 | source_count=7 --> */
  /* <!-- KG_EXPLAINED: 硬链接 | 2026-05-23 | source_count=7 --> */
  { sourceRefs: ["linux-kernel-docs","linux-man-pages","posix-base-spec","gnu-bash-manual","cs-notes","javaguide","xiaolin-coding"], id: "hard-link", zh: "硬链接", en: "Hard Link", area: "file-system", difficulty: "medium", summary: "多个文件名指向同一个 inode。", explanation: ["核心概念：硬链接（Hard Link）聚焦多个文件名指向同一个 inode。。操作系统负责在硬件和应用之间管理 CPU、内存、文件、设备与权限；理解它时先抓住文件、目录、inode、权限和描述符，再看输入、状态变化、输出结果和失败分支。","适用场景：硬链接常用于日志文件、配置文件、链接、管道、socket 文件和权限控制。学习时把它放回操作系统链路中观察，并结合前置知识inode判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，硬链接通常会和软链接一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点需要结合流程和指标判断。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认文件、目录、inode、权限和描述符是否仍然成立。","常见误区与注意点：实践中容易把硬链接当成孤立概念处理，结果遗漏描述符泄漏、链接语义、权限位、缓存一致性和磁盘满。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考Linux Kernel 文档、Linux man-pages、POSIX/Open Group 规范、GNU Bash 手册以及 CS-Notes、JavaGuide、小林 coding，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["硬链接底层机制是什么","硬链接和相关概念如何区分","硬链接线上异常如何排查"], prerequisites: ["inode"], related: ["soft-link"], learningPathPosition: 38 },
  /* <!-- KG_REVIEWED: 软链接 | 2026-05-24 | source_count=7 --> */
  /* <!-- KG_EXPLAINED: 软链接 | 2026-05-23 | source_count=7 --> */
  { sourceRefs: ["linux-kernel-docs","linux-man-pages","posix-base-spec","gnu-bash-manual","cs-notes","javaguide","xiaolin-coding"], id: "soft-link", zh: "软链接", en: "Symbolic Link", area: "file-system", difficulty: "easy", summary: "保存目标路径的特殊文件。", explanation: ["核心概念：软链接（Symbolic Link）聚焦保存目标路径的特殊文件。。操作系统负责在硬件和应用之间管理 CPU、内存、文件、设备与权限；理解它时先抓住文件、目录、inode、权限和描述符，再看输入、状态变化、输出结果和失败分支。","适用场景：软链接常用于日志文件、配置文件、链接、管道、socket 文件和权限控制。学习时把它放回操作系统链路中观察，并结合前置知识inode判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，软链接通常会和硬链接一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点适合先掌握主流程。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认文件、目录、inode、权限和描述符是否仍然成立。","常见误区与注意点：实践中容易把软链接当成孤立概念处理，结果遗漏描述符泄漏、链接语义、权限位、缓存一致性和磁盘满。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考Linux Kernel 文档、Linux man-pages、POSIX/Open Group 规范、GNU Bash 手册以及 CS-Notes、JavaGuide、小林 coding，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["软链接底层机制是什么","软链接和相关概念如何区分","软链接线上异常如何排查"], prerequisites: ["inode"], related: ["hard-link"], learningPathPosition: 39 },
  /* <!-- KG_REVIEWED: 文件权限 | 2026-05-24 | source_count=7 --> */
  /* <!-- KG_EXPLAINED: 文件权限 | 2026-05-23 | source_count=7 --> */
  { sourceRefs: ["linux-kernel-docs","linux-man-pages","posix-base-spec","gnu-bash-manual","cs-notes","javaguide","xiaolin-coding"], id: "permission", zh: "文件权限", en: "File Permission", area: "file-system", difficulty: "easy", summary: "通过读、写、执行权限控制用户和用户组访问。", explanation: ["核心概念：文件权限（File Permission）聚焦通过读、写、执行权限控制用户和用户组访问。。操作系统负责在硬件和应用之间管理 CPU、内存、文件、设备与权限；理解它时先抓住文件、目录、inode、权限和描述符，再看输入、状态变化、输出结果和失败分支。","适用场景：文件权限常用于日志文件、配置文件、链接、管道、socket 文件和权限控制。学习时把它放回操作系统链路中观察，并结合前置知识文件系统判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，文件权限通常会和Linux 用户与用户组一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点适合先掌握主流程。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认文件、目录、inode、权限和描述符是否仍然成立。","常见误区与注意点：实践中容易把文件权限当成孤立概念处理，结果遗漏描述符泄漏、链接语义、权限位、缓存一致性和磁盘满。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考Linux Kernel 文档、Linux man-pages、POSIX/Open Group 规范、GNU Bash 手册以及 CS-Notes、JavaGuide、小林 coding，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["文件权限底层机制是什么","文件权限和相关概念如何区分","文件权限线上异常如何排查"], prerequisites: ["file-system"], related: ["linux-user-group"], learningPathPosition: 40 },
  /* <!-- KG_REVIEWED: I/O | 2026-05-24 | source_count=7 --> */
  /* <!-- KG_EXPLAINED: I/O | 2026-05-23 | source_count=7 --> */
  { sourceRefs: ["linux-kernel-docs","linux-man-pages","posix-base-spec","gnu-bash-manual","cs-notes","javaguide","xiaolin-coding"], id: "io", zh: "I/O", en: "Input Output", area: "io", difficulty: "easy", summary: "操作系统管理设备输入输出和数据传输。", explanation: ["核心概念：I/O（Input Output）聚焦操作系统管理设备输入输出和数据传输。。操作系统负责在硬件和应用之间管理 CPU、内存、文件、设备与权限；理解它时先抓住设备访问、阻塞模型、事件通知和缓存，再看输入、状态变化、输出结果和失败分支。","适用场景：I/O常用于磁盘读写、网络连接、终端输入和高并发 I/O 服务。学习时把它放回操作系统链路中观察，并结合前置知识内核和中断判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，I/O通常会和阻塞 I/O和缓冲区与页缓存一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点适合先掌握主流程。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认设备访问、阻塞模型、事件通知和缓存是否仍然成立。","常见误区与注意点：实践中容易把I/O当成孤立概念处理，结果遗漏短读短写、EINTR、非阻塞返回、epoll 边缘触发和页缓存影响。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考Linux Kernel 文档、Linux man-pages、POSIX/Open Group 规范、GNU Bash 手册以及 CS-Notes、JavaGuide、小林 coding，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["I/O底层机制是什么","I/O和相关概念如何区分","I/O线上异常如何排查"], prerequisites: ["kernel","interrupt"], related: ["blocking-io","buffer-cache"], learningPathPosition: 41 },
  /* <!-- KG_REVIEWED: 阻塞 I/O | 2026-05-24 | source_count=7 --> */
  /* <!-- KG_EXPLAINED: 阻塞 I/O | 2026-05-23 | source_count=7 --> */
  { sourceRefs: ["linux-kernel-docs","linux-man-pages","posix-base-spec","gnu-bash-manual","cs-notes","javaguide","xiaolin-coding"], id: "blocking-io", zh: "阻塞 I/O", en: "Blocking I/O", area: "io", difficulty: "easy", summary: "调用方等待 I/O 完成后继续执行。", explanation: ["核心概念：阻塞 I/O（Blocking I/O）聚焦调用方等待 I/O 完成后继续执行。。操作系统负责在硬件和应用之间管理 CPU、内存、文件、设备与权限；理解它时先抓住设备访问、阻塞模型、事件通知和缓存，再看输入、状态变化、输出结果和失败分支。","适用场景：阻塞 I/O常用于磁盘读写、网络连接、终端输入和高并发 I/O 服务。学习时把它放回操作系统链路中观察，并结合前置知识I/O判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，阻塞 I/O通常会和非阻塞 I/O一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点适合先掌握主流程。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认设备访问、阻塞模型、事件通知和缓存是否仍然成立。","常见误区与注意点：实践中容易把阻塞 I/O当成孤立概念处理，结果遗漏短读短写、EINTR、非阻塞返回、epoll 边缘触发和页缓存影响。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考Linux Kernel 文档、Linux man-pages、POSIX/Open Group 规范、GNU Bash 手册以及 CS-Notes、JavaGuide、小林 coding，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["阻塞 I/O底层机制是什么","阻塞 I/O和相关概念如何区分","阻塞 I/O线上异常如何排查"], prerequisites: ["io"], related: ["nonblocking-io"], learningPathPosition: 42 },
  /* <!-- KG_REVIEWED: 非阻塞 I/O | 2026-05-24 | source_count=7 --> */
  /* <!-- KG_EXPLAINED: 非阻塞 I/O | 2026-05-23 | source_count=7 --> */
  { sourceRefs: ["linux-kernel-docs","linux-man-pages","posix-base-spec","gnu-bash-manual","cs-notes","javaguide","xiaolin-coding"], id: "nonblocking-io", zh: "非阻塞 I/O", en: "Non-blocking I/O", area: "io", difficulty: "medium", summary: "调用立即返回，应用通过轮询或事件机制获取结果。", explanation: ["核心概念：非阻塞 I/O（Non-blocking I/O）聚焦调用立即返回，应用通过轮询或事件机制获取结果。。操作系统负责在硬件和应用之间管理 CPU、内存、文件、设备与权限；理解它时先抓住设备访问、阻塞模型、事件通知和缓存，再看输入、状态变化、输出结果和失败分支。","适用场景：非阻塞 I/O常用于磁盘读写、网络连接、终端输入和高并发 I/O 服务。学习时把它放回操作系统链路中观察，并结合前置知识阻塞 I/O判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，非阻塞 I/O通常会和I/O 多路复用一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点需要结合流程和指标判断。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认设备访问、阻塞模型、事件通知和缓存是否仍然成立。","常见误区与注意点：实践中容易把非阻塞 I/O当成孤立概念处理，结果遗漏短读短写、EINTR、非阻塞返回、epoll 边缘触发和页缓存影响。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考Linux Kernel 文档、Linux man-pages、POSIX/Open Group 规范、GNU Bash 手册以及 CS-Notes、JavaGuide、小林 coding，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["非阻塞 I/O底层机制是什么","非阻塞 I/O和相关概念如何区分","非阻塞 I/O线上异常如何排查"], prerequisites: ["blocking-io"], related: ["io-multiplexing"], learningPathPosition: 43 },
  /* <!-- KG_REVIEWED: I/O 多路复用 | 2026-05-24 | source_count=7 --> */
  /* <!-- KG_EXPLAINED: I/O 多路复用 | 2026-05-23 | source_count=7 --> */
  { sourceRefs: ["linux-kernel-docs","linux-man-pages","posix-base-spec","gnu-bash-manual","cs-notes","javaguide","xiaolin-coding"], id: "io-multiplexing", zh: "I/O 多路复用", en: "I/O Multiplexing", area: "io", difficulty: "hard", summary: "用 select、poll、epoll 管理大量连接事件。", explanation: ["核心概念：I/O 多路复用（I/O Multiplexing）聚焦用 select、poll、epoll 管理大量连接事件。。操作系统负责在硬件和应用之间管理 CPU、内存、文件、设备与权限；理解它时先抓住设备访问、阻塞模型、事件通知和缓存，再看输入、状态变化、输出结果和失败分支。","适用场景：I/O 多路复用常用于磁盘读写、网络连接、终端输入和高并发 I/O 服务。学习时把它放回操作系统链路中观察，并结合前置知识非阻塞 I/O和文件描述符判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，I/O 多路复用通常会和epoll一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点风险和细节较多。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认设备访问、阻塞模型、事件通知和缓存是否仍然成立。","常见误区与注意点：实践中容易把I/O 多路复用当成孤立概念处理，结果遗漏短读短写、EINTR、非阻塞返回、epoll 边缘触发和页缓存影响。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考Linux Kernel 文档、Linux man-pages、POSIX/Open Group 规范、GNU Bash 手册以及 CS-Notes、JavaGuide、小林 coding，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["I/O 多路复用底层机制是什么","I/O 多路复用和相关概念如何区分","I/O 多路复用线上异常如何排查"], prerequisites: ["nonblocking-io","file-descriptor"], related: ["epoll"], learningPathPosition: 44 },
  /* <!-- KG_REVIEWED: epoll | 2026-06-04 | source_count=5 --> */
  /* <!-- KG_EXPLAINED: epoll | 2026-05-23 | source_count=7 --> */
  { sourceRefs: ["linux-kernel-docs","linux-man-pages","posix-base-spec","gnu-bash-manual","cs-notes","javaguide","xiaolin-coding"], id: "epoll", zh: "epoll", en: "epoll", area: "io", difficulty: "hard", summary: "Linux 高性能事件通知机制，适合高并发网络服务。", explanation: ["核心概念：epoll聚焦Linux 高性能事件通知机制，适合高并发网络服务。。操作系统负责在硬件和应用之间管理 CPU、内存、文件、设备与权限；理解它时先抓住设备访问、阻塞模型、事件通知和缓存，再看输入、状态变化、输出结果和失败分支。","适用场景：epoll常用于磁盘读写、网络连接、终端输入和高并发 I/O 服务。学习时把它放回操作系统链路中观察，并结合前置知识I/O 多路复用判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，epoll通常会和Socket和协程一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点风险和细节较多。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认设备访问、阻塞模型、事件通知和缓存是否仍然成立。","常见误区与注意点：实践中容易把epoll当成孤立概念处理，结果遗漏短读短写、EINTR、非阻塞返回、epoll 边缘触发和页缓存影响。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考Linux Kernel 文档、Linux man-pages、POSIX/Open Group 规范、GNU Bash 手册以及 CS-Notes、JavaGuide、小林 coding，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["epoll底层机制是什么","epoll和相关概念如何区分","epoll线上异常如何排查"], prerequisites: ["io-multiplexing"], related: ["socket","coroutine"], learningPathPosition: 45 },
  /* <!-- KG_REVIEWED: 缓冲区与页缓存 | 2026-05-24 | source_count=7 --> */
  /* <!-- KG_EXPLAINED: 缓冲区与页缓存 | 2026-05-23 | source_count=7 --> */
  { sourceRefs: ["linux-kernel-docs","linux-man-pages","posix-base-spec","gnu-bash-manual","cs-notes","javaguide","xiaolin-coding"], id: "buffer-cache", zh: "缓冲区与页缓存", en: "Buffer and Page Cache", area: "io", difficulty: "medium", summary: "用内存缓存磁盘数据，提升文件 I/O 性能。", explanation: ["核心概念：缓冲区与页缓存（Buffer and Page Cache）聚焦用内存缓存磁盘数据，提升文件 I/O 性能。。操作系统负责在硬件和应用之间管理 CPU、内存、文件、设备与权限；理解它时先抓住设备访问、阻塞模型、事件通知和缓存，再看输入、状态变化、输出结果和失败分支。","适用场景：缓冲区与页缓存常用于磁盘读写、网络连接、终端输入和高并发 I/O 服务。学习时把它放回操作系统链路中观察，并结合前置知识I/O和分页判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，缓冲区与页缓存通常会和文件系统一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点需要结合流程和指标判断。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认设备访问、阻塞模型、事件通知和缓存是否仍然成立。","常见误区与注意点：实践中容易把缓冲区与页缓存当成孤立概念处理，结果遗漏短读短写、EINTR、非阻塞返回、epoll 边缘触发和页缓存影响。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考Linux Kernel 文档、Linux man-pages、POSIX/Open Group 规范、GNU Bash 手册以及 CS-Notes、JavaGuide、小林 coding，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["缓冲区与页缓存底层机制是什么","缓冲区与页缓存和相关概念如何区分","缓冲区与页缓存线上异常如何排查"], prerequisites: ["io","paging"], related: ["file-system"], learningPathPosition: 46 },
  /* <!-- KG_REVIEWED: 虚拟化 | 2026-05-24 | source_count=7 --> */
  /* <!-- KG_EXPLAINED: 虚拟化 | 2026-05-23 | source_count=7 --> */
  { sourceRefs: ["linux-kernel-docs","linux-man-pages","posix-base-spec","gnu-bash-manual","cs-notes","javaguide","xiaolin-coding"], id: "virtualization", zh: "虚拟化", en: "Virtualization", area: "virtualization", difficulty: "medium", summary: "在一台物理机上运行多个隔离的虚拟运行环境。", explanation: ["核心概念：虚拟化（Virtualization）聚焦在一台物理机上运行多个隔离的虚拟运行环境。。操作系统负责在硬件和应用之间管理 CPU、内存、文件、设备与权限；理解它时先抓住虚拟机、容器、Namespace 和 Cgroup 隔离，再看输入、状态变化、输出结果和失败分支。","适用场景：虚拟化常用于多租户部署、容器运行时、资源限制和环境复现。学习时把它放回操作系统链路中观察，并结合前置知识内核和内存管理判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，虚拟化通常会和虚拟机和容器一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点需要结合流程和指标判断。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认虚拟机、容器、Namespace 和 Cgroup 隔离是否仍然成立。","常见误区与注意点：实践中容易把虚拟化当成孤立概念处理，结果遗漏隔离边界、内核共享、资源配额、镜像文件系统和安全权限。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考Linux Kernel 文档、Linux man-pages、POSIX/Open Group 规范、GNU Bash 手册以及 CS-Notes、JavaGuide、小林 coding，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["虚拟化底层机制是什么","虚拟化和相关概念如何区分","虚拟化线上异常如何排查"], prerequisites: ["kernel","memory-management"], related: ["virtual-machine","container"], learningPathPosition: 47 },
  /* <!-- KG_REVIEWED: 虚拟机 | 2026-05-24 | source_count=7 --> */
  /* <!-- KG_EXPLAINED: 虚拟机 | 2026-05-23 | source_count=7 --> */
  { sourceRefs: ["linux-kernel-docs","linux-man-pages","posix-base-spec","gnu-bash-manual","cs-notes","javaguide","xiaolin-coding"], id: "virtual-machine", zh: "虚拟机", en: "Virtual Machine", area: "virtualization", difficulty: "medium", summary: "通过 Hypervisor 模拟完整硬件环境运行操作系统。", explanation: ["核心概念：虚拟机（Virtual Machine）聚焦通过 Hypervisor 模拟完整硬件环境运行操作系统。。操作系统负责在硬件和应用之间管理 CPU、内存、文件、设备与权限；理解它时先抓住虚拟机、容器、Namespace 和 Cgroup 隔离，再看输入、状态变化、输出结果和失败分支。","适用场景：虚拟机常用于多租户部署、容器运行时、资源限制和环境复现。学习时把它放回操作系统链路中观察，并结合前置知识虚拟化判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，虚拟机通常会和容器一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点需要结合流程和指标判断。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认虚拟机、容器、Namespace 和 Cgroup 隔离是否仍然成立。","常见误区与注意点：实践中容易把虚拟机当成孤立概念处理，结果遗漏隔离边界、内核共享、资源配额、镜像文件系统和安全权限。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考Linux Kernel 文档、Linux man-pages、POSIX/Open Group 规范、GNU Bash 手册以及 CS-Notes、JavaGuide、小林 coding，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["虚拟机底层机制是什么","虚拟机和相关概念如何区分","虚拟机线上异常如何排查"], prerequisites: ["virtualization"], related: ["container"], learningPathPosition: 48 },
  /* <!-- KG_REVIEWED: 容器 | 2026-05-24 | source_count=7 --> */
  /* <!-- KG_EXPLAINED: 容器 | 2026-05-23 | source_count=7 --> */
  { sourceRefs: ["linux-kernel-docs","linux-man-pages","posix-base-spec","gnu-bash-manual","cs-notes","javaguide","xiaolin-coding"], id: "container", zh: "容器", en: "Container", area: "virtualization", difficulty: "medium", summary: "基于操作系统内核能力隔离进程、文件系统和资源。", explanation: ["核心概念：容器（Container）聚焦基于操作系统内核能力隔离进程、文件系统和资源。。操作系统负责在硬件和应用之间管理 CPU、内存、文件、设备与权限；理解它时先抓住虚拟机、容器、Namespace 和 Cgroup 隔离，再看输入、状态变化、输出结果和失败分支。","适用场景：容器常用于多租户部署、容器运行时、资源限制和环境复现。学习时把它放回操作系统链路中观察，并结合前置知识进程和虚拟化判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，容器通常会和Namespace和Cgroup一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点需要结合流程和指标判断。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认虚拟机、容器、Namespace 和 Cgroup 隔离是否仍然成立。","常见误区与注意点：实践中容易把容器当成孤立概念处理，结果遗漏隔离边界、内核共享、资源配额、镜像文件系统和安全权限。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考Linux Kernel 文档、Linux man-pages、POSIX/Open Group 规范、GNU Bash 手册以及 CS-Notes、JavaGuide、小林 coding，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["容器底层机制是什么","容器和相关概念如何区分","容器线上异常如何排查"], prerequisites: ["process","virtualization"], related: ["namespace","cgroup"], learningPathPosition: 49 },
  /* <!-- KG_REVIEWED: Namespace | 2026-05-24 | source_count=7 --> */
  /* <!-- KG_EXPLAINED: Namespace | 2026-05-23 | source_count=7 --> */
  { sourceRefs: ["linux-kernel-docs","linux-man-pages","posix-base-spec","gnu-bash-manual","cs-notes","javaguide","xiaolin-coding"], id: "namespace", zh: "Namespace", en: "Namespace", area: "virtualization", difficulty: "hard", summary: "Linux 用于隔离进程视图的内核机制。", explanation: ["核心概念：Namespace聚焦Linux 用于隔离进程视图的内核机制。。操作系统负责在硬件和应用之间管理 CPU、内存、文件、设备与权限；理解它时先抓住虚拟机、容器、Namespace 和 Cgroup 隔离，再看输入、状态变化、输出结果和失败分支。","适用场景：Namespace常用于多租户部署、容器运行时、资源限制和环境复现。学习时把它放回操作系统链路中观察，并结合前置知识容器判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，Namespace通常会和Cgroup一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点风险和细节较多。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认虚拟机、容器、Namespace 和 Cgroup 隔离是否仍然成立。","常见误区与注意点：实践中容易把Namespace当成孤立概念处理，结果遗漏隔离边界、内核共享、资源配额、镜像文件系统和安全权限。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考Linux Kernel 文档、Linux man-pages、POSIX/Open Group 规范、GNU Bash 手册以及 CS-Notes、JavaGuide、小林 coding，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["Namespace底层机制是什么","Namespace和相关概念如何区分","Namespace线上异常如何排查"], prerequisites: ["container"], related: ["cgroup"], learningPathPosition: 50 },
  /* <!-- KG_REVIEWED: Cgroup | 2026-05-24 | source_count=7 --> */
  /* <!-- KG_EXPLAINED: Cgroup | 2026-05-23 | source_count=7 --> */
  { sourceRefs: ["linux-kernel-docs","linux-man-pages","posix-base-spec","gnu-bash-manual","cs-notes","javaguide","xiaolin-coding"], id: "cgroup", zh: "Cgroup", en: "Control Groups", area: "virtualization", difficulty: "hard", summary: "Linux 用于限制和统计进程资源使用的机制。", explanation: ["核心概念：Cgroup（Control Groups）聚焦Linux 用于限制和统计进程资源使用的机制。。操作系统负责在硬件和应用之间管理 CPU、内存、文件、设备与权限；理解它时先抓住虚拟机、容器、Namespace 和 Cgroup 隔离，再看输入、状态变化、输出结果和失败分支。","适用场景：Cgroup常用于多租户部署、容器运行时、资源限制和环境复现。学习时把它放回操作系统链路中观察，并结合前置知识容器判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，Cgroup通常会和Namespace一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点风险和细节较多。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认虚拟机、容器、Namespace 和 Cgroup 隔离是否仍然成立。","常见误区与注意点：实践中容易把Cgroup当成孤立概念处理，结果遗漏隔离边界、内核共享、资源配额、镜像文件系统和安全权限。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考Linux Kernel 文档、Linux man-pages、POSIX/Open Group 规范、GNU Bash 手册以及 CS-Notes、JavaGuide、小林 coding，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["Cgroup底层机制是什么","Cgroup和相关概念如何区分","Cgroup线上异常如何排查"], prerequisites: ["container"], related: ["namespace"], learningPathPosition: 51 },
  /* <!-- KG_REVIEWED: Linux Shell | 2026-05-24 | source_count=7 --> */
  /* <!-- KG_EXPLAINED: Linux Shell | 2026-05-23 | source_count=7 --> */
  { sourceRefs: ["linux-kernel-docs","linux-man-pages","posix-base-spec","gnu-bash-manual","cs-notes","javaguide","xiaolin-coding"], id: "linux-shell", zh: "Linux Shell", en: "Linux Shell", area: "linux", difficulty: "easy", summary: "通过命令行与系统交互，执行程序和管理资源。", explanation: ["核心概念：Linux Shell聚焦通过命令行与系统交互，执行程序和管理资源。。操作系统负责在硬件和应用之间管理 CPU、内存、文件、设备与权限；理解它时先抓住Shell、命令、信号、用户组和进程工具，再看输入、状态变化、输出结果和失败分支。","适用场景：Linux Shell常用于日常运维、脚本自动化、日志排查、权限管理和进程治理。学习时把它放回操作系统链路中观察，并结合前置知识操作系统概览判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，Linux Shell通常会和Linux 常用命令一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点适合先掌握主流程。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认Shell、命令、信号、用户组和进程工具是否仍然成立。","常见误区与注意点：实践中容易把Linux Shell当成孤立概念处理，结果遗漏管道退出码、信号处理、权限继承、环境变量和命令副作用。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考Linux Kernel 文档、Linux man-pages、POSIX/Open Group 规范、GNU Bash 手册以及 CS-Notes、JavaGuide、小林 coding，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["Linux Shell底层机制是什么","Linux Shell和相关概念如何区分","Linux Shell线上异常如何排查"], prerequisites: ["os-overview"], related: ["linux-command"], learningPathPosition: 52 },
  /* <!-- KG_REVIEWED: Linux 常用命令 | 2026-05-24 | source_count=7 --> */
  /* <!-- KG_EXPLAINED: Linux 常用命令 | 2026-05-23 | source_count=7 --> */
  { sourceRefs: ["linux-kernel-docs","linux-man-pages","posix-base-spec","gnu-bash-manual","cs-notes","javaguide","xiaolin-coding"], id: "linux-command", zh: "Linux 常用命令", en: "Common Linux Commands", area: "linux", difficulty: "easy", summary: "掌握文件、进程、网络和系统状态相关命令。", explanation: ["核心概念：Linux 常用命令（Common Linux Commands）聚焦掌握文件、进程、网络和系统状态相关命令。。操作系统负责在硬件和应用之间管理 CPU、内存、文件、设备与权限；理解它时先抓住Shell、命令、信号、用户组和进程工具，再看输入、状态变化、输出结果和失败分支。","适用场景：Linux 常用命令常用于日常运维、脚本自动化、日志排查、权限管理和进程治理。学习时把它放回操作系统链路中观察，并结合前置知识Linux Shell判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，Linux 常用命令通常会和Linux 进程管理一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点适合先掌握主流程。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认Shell、命令、信号、用户组和进程工具是否仍然成立。","常见误区与注意点：实践中容易把Linux 常用命令当成孤立概念处理，结果遗漏管道退出码、信号处理、权限继承、环境变量和命令副作用。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考Linux Kernel 文档、Linux man-pages、POSIX/Open Group 规范、GNU Bash 手册以及 CS-Notes、JavaGuide、小林 coding，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["Linux 常用命令底层机制是什么","Linux 常用命令和相关概念如何区分","Linux 常用命令线上异常如何排查"], prerequisites: ["linux-shell"], related: ["process-management"], learningPathPosition: 53 },
  /* <!-- KG_REVIEWED: Linux 进程管理 | 2026-05-24 | source_count=7 --> */
  /* <!-- KG_EXPLAINED: Linux 进程管理 | 2026-05-23 | source_count=7 --> */
  { sourceRefs: ["linux-kernel-docs","linux-man-pages","posix-base-spec","gnu-bash-manual","cs-notes","javaguide","xiaolin-coding"], id: "process-management", zh: "Linux 进程管理", en: "Linux Process Management", area: "linux", difficulty: "easy", summary: "使用 ps、top、kill、systemctl 等工具查看和管理进程。", explanation: ["核心概念：Linux 进程管理（Linux Process Management）聚焦使用 ps、top、kill、systemctl 等工具查看和管理进程。。操作系统负责在硬件和应用之间管理 CPU、内存、文件、设备与权限；理解它时先抓住Shell、命令、信号、用户组和进程工具，再看输入、状态变化、输出结果和失败分支。","适用场景：Linux 进程管理常用于日常运维、脚本自动化、日志排查、权限管理和进程治理。学习时把它放回操作系统链路中观察，并结合前置知识进程和Linux 常用命令判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，Linux 进程管理通常会和Linux 信号一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点适合先掌握主流程。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认Shell、命令、信号、用户组和进程工具是否仍然成立。","常见误区与注意点：实践中容易把Linux 进程管理当成孤立概念处理，结果遗漏管道退出码、信号处理、权限继承、环境变量和命令副作用。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考Linux Kernel 文档、Linux man-pages、POSIX/Open Group 规范、GNU Bash 手册以及 CS-Notes、JavaGuide、小林 coding，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["Linux 进程管理底层机制是什么","Linux 进程管理和相关概念如何区分","Linux 进程管理线上异常如何排查"], prerequisites: ["process","linux-command"], related: ["signal-linux"], learningPathPosition: 54 },
  /* <!-- KG_REVIEWED: Linux 信号 | 2026-05-24 | source_count=7 --> */
  /* <!-- KG_EXPLAINED: Linux 信号 | 2026-05-23 | source_count=7 --> */
  { sourceRefs: ["linux-kernel-docs","linux-man-pages","posix-base-spec","gnu-bash-manual","cs-notes","javaguide","xiaolin-coding"], id: "signal-linux", zh: "Linux 信号", en: "Linux Signal", area: "linux", difficulty: "medium", summary: "进程间异步通知机制，常用于终止、暂停和自定义处理。", explanation: ["核心概念：Linux 信号（Linux Signal）聚焦进程间异步通知机制，常用于终止、暂停和自定义处理。。操作系统负责在硬件和应用之间管理 CPU、内存、文件、设备与权限；理解它时先抓住Shell、命令、信号、用户组和进程工具，再看输入、状态变化、输出结果和失败分支。","适用场景：Linux 信号常用于日常运维、脚本自动化、日志排查、权限管理和进程治理。学习时把它放回操作系统链路中观察，并结合前置知识Linux 进程管理判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，Linux 信号通常会和中断一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点需要结合流程和指标判断。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认Shell、命令、信号、用户组和进程工具是否仍然成立。","常见误区与注意点：实践中容易把Linux 信号当成孤立概念处理，结果遗漏管道退出码、信号处理、权限继承、环境变量和命令副作用。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考Linux Kernel 文档、Linux man-pages、POSIX/Open Group 规范、GNU Bash 手册以及 CS-Notes、JavaGuide、小林 coding，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["Linux 信号底层机制是什么","Linux 信号和相关概念如何区分","Linux 信号线上异常如何排查"], prerequisites: ["process-management"], related: ["interrupt"], learningPathPosition: 55 },
  /* <!-- KG_REVIEWED: 管道 | 2026-05-24 | source_count=7 --> */
  /* <!-- KG_EXPLAINED: 管道 | 2026-05-23 | source_count=7 --> */
  { sourceRefs: ["linux-kernel-docs","linux-man-pages","posix-base-spec","gnu-bash-manual","cs-notes","javaguide","xiaolin-coding"], id: "pipe", zh: "管道", en: "Pipe", area: "linux", difficulty: "medium", summary: "把一个进程输出连接到另一个进程输入。", explanation: ["核心概念：管道（Pipe）聚焦把一个进程输出连接到另一个进程输入。。操作系统负责在硬件和应用之间管理 CPU、内存、文件、设备与权限；理解它时先抓住Shell、命令、信号、用户组和进程工具，再看输入、状态变化、输出结果和失败分支。","适用场景：管道常用于日常运维、脚本自动化、日志排查、权限管理和进程治理。学习时把它放回操作系统链路中观察，并结合前置知识文件描述符和Linux Shell判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，管道通常会和Socket一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点需要结合流程和指标判断。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认Shell、命令、信号、用户组和进程工具是否仍然成立。","常见误区与注意点：实践中容易把管道当成孤立概念处理，结果遗漏管道退出码、信号处理、权限继承、环境变量和命令副作用。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考Linux Kernel 文档、Linux man-pages、POSIX/Open Group 规范、GNU Bash 手册以及 CS-Notes、JavaGuide、小林 coding，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["管道底层机制是什么","管道和相关概念如何区分","管道线上异常如何排查"], prerequisites: ["file-descriptor","linux-shell"], related: ["socket"], learningPathPosition: 56 },
  /* <!-- KG_REVIEWED: Socket | 2026-05-24 | source_count=7 --> */
  /* <!-- KG_EXPLAINED: Socket | 2026-05-23 | source_count=7 --> */
  { sourceRefs: ["linux-kernel-docs","linux-man-pages","posix-base-spec","gnu-bash-manual","cs-notes","javaguide","xiaolin-coding"], id: "socket", zh: "Socket", en: "Socket", area: "linux", difficulty: "medium", summary: "进程间通信和网络通信的统一抽象。", explanation: ["核心概念：Socket聚焦进程间通信和网络通信的统一抽象。。操作系统负责在硬件和应用之间管理 CPU、内存、文件、设备与权限；理解它时先抓住Shell、命令、信号、用户组和进程工具，再看输入、状态变化、输出结果和失败分支。","适用场景：Socket常用于日常运维、脚本自动化、日志排查、权限管理和进程治理。学习时把它放回操作系统链路中观察，并结合前置知识文件描述符和I/O判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，Socket通常会和epoll一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点需要结合流程和指标判断。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认Shell、命令、信号、用户组和进程工具是否仍然成立。","常见误区与注意点：实践中容易把Socket当成孤立概念处理，结果遗漏管道退出码、信号处理、权限继承、环境变量和命令副作用。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考Linux Kernel 文档、Linux man-pages、POSIX/Open Group 规范、GNU Bash 手册以及 CS-Notes、JavaGuide、小林 coding，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["Socket底层机制是什么","Socket和相关概念如何区分","Socket线上异常如何排查"], prerequisites: ["file-descriptor","io"], related: ["epoll"], learningPathPosition: 57 },
  /* <!-- KG_REVIEWED: Linux 用户与用户组 | 2026-05-24 | source_count=7 --> */
  /* <!-- KG_EXPLAINED: Linux 用户与用户组 | 2026-05-23 | source_count=7 --> */
  { sourceRefs: ["linux-kernel-docs","linux-man-pages","posix-base-spec","gnu-bash-manual","cs-notes","javaguide","xiaolin-coding"], id: "linux-user-group", zh: "Linux 用户与用户组", en: "Linux Users and Groups", area: "linux", difficulty: "easy", summary: "管理用户身份、用户组和访问权限。", explanation: ["核心概念：Linux 用户与用户组（Linux Users and Groups）聚焦管理用户身份、用户组和访问权限。。操作系统负责在硬件和应用之间管理 CPU、内存、文件、设备与权限；理解它时先抓住Shell、命令、信号、用户组和进程工具，再看输入、状态变化、输出结果和失败分支。","适用场景：Linux 用户与用户组常用于日常运维、脚本自动化、日志排查、权限管理和进程治理。学习时把它放回操作系统链路中观察，并结合前置知识文件权限判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，Linux 用户与用户组通常会和文件系统一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点适合先掌握主流程。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认Shell、命令、信号、用户组和进程工具是否仍然成立。","常见误区与注意点：实践中容易把Linux 用户与用户组当成孤立概念处理，结果遗漏管道退出码、信号处理、权限继承、环境变量和命令副作用。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考Linux Kernel 文档、Linux man-pages、POSIX/Open Group 规范、GNU Bash 手册以及 CS-Notes、JavaGuide、小林 coding，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["Linux 用户与用户组底层机制是什么","Linux 用户与用户组和相关概念如何区分","Linux 用户与用户组线上异常如何排查"], prerequisites: ["permission"], related: ["file-system"], learningPathPosition: 58 },
] satisfies GraphKnowledgePoint[];

const operatingSystemKnowledgePointOverrides: Record<string, Partial<GraphKnowledgePoint>> = {
  "os-overview": {
    order: 1,
    related: ["kernel", "process", "memory-management"],
  },
  "kernel": {
    order: 2,
    prerequisites: ["os-overview"],
    related: ["kernel-mode", "system-call", "interrupt"],
  },
  "kernel-mode": {
    order: 3,
    prerequisites: ["kernel"],
    related: ["system-call"],
  },
  "system-call": {
    order: 4,
    prerequisites: ["kernel-mode"],
    related: ["file-descriptor", "process"],
  },
  "process": {
    order: 5,
    prerequisites: ["os-overview"],
    related: ["process-state", "thread"],
  },
  "process-state": {
    order: 6,
    prerequisites: ["process"],
    related: ["scheduler", "context-switch"],
  },
  "thread": {
    order: 7,
    prerequisites: ["process"],
    related: ["context-switch", "thread-safety"],
  },
  "context-switch": {
    order: 8,
    prerequisites: ["process-state", "thread"],
    related: ["scheduler"],
  },
  "scheduler": {
    order: 9,
    prerequisites: ["process-state", "context-switch"],
    related: ["time-slice", "priority-scheduling"],
  },
  "critical-section": {
    order: 10,
    prerequisites: ["thread"],
    related: ["mutex", "semaphore"],
  },
  "mutex": {
    order: 11,
    prerequisites: ["critical-section"],
    related: ["deadlock", "condition-variable"],
  },
  "semaphore": {
    order: 12,
    prerequisites: ["critical-section"],
    related: ["deadlock"],
  },
  "condition-variable": {
    order: 13,
    prerequisites: ["mutex"],
    related: ["thread-safety"],
  },
  "thread-safety": {
    order: 14,
    prerequisites: ["mutex", "critical-section"],
    related: ["race-condition"],
  },
  "race-condition": {
    order: 15,
    prerequisites: ["thread-safety"],
    related: ["deadlock", "atomic-operation"],
  },
  "deadlock": {
    order: 16,
    prerequisites: ["mutex", "semaphore"],
    related: ["deadlock-conditions", "deadlock-prevention"],
  },
  "deadlock-conditions": {
    order: 17,
    prerequisites: ["deadlock"],
    related: ["deadlock-prevention"],
  },
  "deadlock-prevention": {
    order: 18,
    prerequisites: ["deadlock-conditions"],
    related: ["priority-inversion"],
  },
  "memory-management": {
    order: 19,
    prerequisites: ["kernel"],
    related: ["virtual-memory", "heap-stack"],
  },
  "virtual-memory": {
    order: 20,
    prerequisites: ["memory-management"],
    related: ["paging", "page-table"],
  },
  "paging": {
    order: 21,
    prerequisites: ["virtual-memory"],
    related: ["page-table", "page-fault"],
  },
  "page-table": {
    order: 22,
    prerequisites: ["paging"],
    related: ["tlb", "page-fault"],
  },
  "tlb": {
    order: 23,
    prerequisites: ["page-table"],
    related: ["page-fault"],
  },
  "page-fault": {
    order: 24,
    prerequisites: ["paging", "page-table"],
    related: ["swap"],
  },
  "heap-stack": {
    order: 25,
    prerequisites: ["memory-management"],
    related: ["virtual-memory"],
  },
  "file-system": {
    order: 26,
    prerequisites: ["kernel"],
    related: ["inode", "file-descriptor"],
  },
  "file-descriptor": {
    order: 27,
    prerequisites: ["system-call", "file-system"],
    related: ["io", "socket", "pipe"],
  },
  "io": {
    order: 28,
    prerequisites: ["kernel", "file-descriptor"],
    related: ["nonblocking-io", "buffer-cache"],
  },
  "nonblocking-io": {
    order: 29,
    prerequisites: ["io"],
    related: ["io-multiplexing"],
  },
  "io-multiplexing": {
    order: 30,
    prerequisites: ["nonblocking-io", "file-descriptor"],
    related: ["epoll"],
  },
  "epoll": {
    sourceRefs: [
      "linux-man-pages-epoll",
      "linux-man-pages-epoll-ctl",
      "man7-training-epoll",
      "arthurchiao-io-multiplexing",
      "xiaolincoding-socket-c10k",
    ],
    order: 31,
    prerequisites: ["io-multiplexing"],
    related: ["socket"],
  },
  "socket": {
    order: 32,
    prerequisites: ["file-descriptor", "io"],
    related: ["epoll"],
  },
  "linux-shell": {
    order: 33,
    prerequisites: ["os-overview"],
    related: ["linux-command", "pipe"],
  },
  "linux-command": {
    order: 34,
    prerequisites: ["linux-shell"],
    related: ["process-management", "file-system"],
  },
  "interrupt": { order: 41 },
  "coroutine": { order: 42 },
  "time-slice": { order: 43 },
  "round-robin": { order: 44 },
  "priority-scheduling": { order: 45 },
  "priority-inversion": { order: 46 },
  "producer-consumer": { order: 47 },
  "atomic-operation": { order: 48 },
  "swap": { order: 49 },
  "inode": { order: 50 },
  "hard-link": { order: 51 },
  "soft-link": { order: 52 },
  "permission": { order: 53 },
  "blocking-io": { order: 54 },
  "buffer-cache": { order: 55 },
  "virtualization": { order: 56 },
  "virtual-machine": { order: 57 },
  "container": { order: 58 },
  "namespace": { order: 59 },
  "cgroup": { order: 60 },
  "process-management": { order: 61 },
  "signal-linux": { order: 62 },
  "pipe": { order: 63 },
  "linux-user-group": { order: 64 },
};

export const operatingSystemKnowledgePoints = operatingSystemKnowledgePointBase
  .map((point) => ({
    ...point,
    ...operatingSystemKnowledgePointOverrides[point.id],
  }))
  .sort((a, b) => (a.order ?? 0) - (b.order ?? 0)) satisfies GraphKnowledgePoint[];
