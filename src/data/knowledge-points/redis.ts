import type { GraphKnowledgePoint } from "./types.ts";

const redisKnowledgePointBase = [
  /* <!-- KG_EXPLAINED: Redis 概览 | 2026-05-23 | source_count=5 --> */
  { sourceRefs: ["redis-docs","redis-commands","xiaolin-redis","javaguide","doocs-advanced-java"], id: "redis-overview", zh: "Redis 概览", en: "Redis Overview", area: "foundation", difficulty: "easy", explanation: ["核心概念：Redis 概览（Redis Overview）聚焦Redis 概览是Redis体系中的关键知识点。Redis 围绕内存数据结构、单线程事件循环、持久化、复制和缓存治理提供高性能数据服务；理解它时先抓住命令访问、连接工具和基础运行模型，再看输入、状态变化、输出结果和失败分支。","适用场景：Redis 概览常用于缓存、计数器、排行榜和分布式协调。学习时把它放回Redis链路中观察，并结合前置知识基础概念判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，Redis 概览通常会和Redis 数据类型和缓存策略一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点适合先掌握主流程。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认命令访问、连接工具和基础运行模型是否仍然成立。","常见误区与注意点：实践中容易把Redis 概览当成孤立概念处理，结果遗漏危险命令、生产权限、连接数和慢查询。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考Redis 官方文档、Redis Commands、小林 coding、JavaGuide 和 doocs advanced-java，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["Redis 概览适合什么使用场景","Redis 概览可能带来哪些性能或一致性问题","Redis 概览线上如何排查和治理"], useCases: ["缓存","计数器","排行榜","分布式协调"], prerequisites: [], related: ["redis-data-types","redis-cache"], commonIssues: ["容量规划","缓存与数据库一致性"] },
  /* <!-- KG_EXPLAINED: Redis 常用命令 | 2026-05-23 | source_count=5 --> */
  { sourceRefs: ["redis-docs","redis-commands","xiaolin-redis","javaguide","doocs-advanced-java"], id: "redis-command", zh: "Redis 常用命令", en: "Redis Commands", area: "foundation", difficulty: "easy", explanation: ["核心概念：Redis 常用命令（Redis Commands）聚焦Redis 常用命令是Redis体系中的关键知识点。Redis 围绕内存数据结构、单线程事件循环、持久化、复制和缓存治理提供高性能数据服务；理解它时先抓住命令访问、连接工具和基础运行模型，再看输入、状态变化、输出结果和失败分支。","适用场景：Redis 常用命令常用于日常调试、数据读写和排查线上问题。学习时把它放回Redis链路中观察，并结合前置知识Redis 概览判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，Redis 常用命令通常会和redis-cli和Redis 数据类型一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点适合先掌握主流程。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认命令访问、连接工具和基础运行模型是否仍然成立。","常见误区与注意点：实践中容易把Redis 常用命令当成孤立概念处理，结果遗漏危险命令、生产权限、连接数和慢查询。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考Redis 官方文档、Redis Commands、小林 coding、JavaGuide 和 doocs advanced-java，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["Redis 常用命令适合什么使用场景","Redis 常用命令可能带来哪些性能或一致性问题","Redis 常用命令线上如何排查和治理"], useCases: ["日常调试","数据读写","排查线上问题"], prerequisites: ["redis-overview"], related: ["redis-cli","redis-data-types"], commonIssues: ["危险命令误用","大 Key 查询阻塞"] },
  /* <!-- KG_EXPLAINED: redis-cli | 2026-05-23 | source_count=5 --> */
  { sourceRefs: ["redis-docs","redis-commands","xiaolin-redis","javaguide","doocs-advanced-java"], id: "redis-cli", zh: "redis-cli", en: "redis-cli", area: "foundation", difficulty: "easy", explanation: ["核心概念：redis-cli聚焦redis-cli是Redis体系中的关键知识点。Redis 围绕内存数据结构、单线程事件循环、持久化、复制和缓存治理提供高性能数据服务；理解它时先抓住命令访问、连接工具和基础运行模型，再看输入、状态变化、输出结果和失败分支。","适用场景：redis-cli常用于连接实例、执行命令和监控和排障。学习时把它放回Redis链路中观察，并结合前置知识Redis 常用命令判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，redis-cli通常会和Redis 监控和慢查询日志一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点适合先掌握主流程。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认命令访问、连接工具和基础运行模型是否仍然成立。","常见误区与注意点：实践中容易把redis-cli当成孤立概念处理，结果遗漏危险命令、生产权限、连接数和慢查询。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考Redis 官方文档、Redis Commands、小林 coding、JavaGuide 和 doocs advanced-java，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["redis-cli适合什么使用场景","redis-cli可能带来哪些性能或一致性问题","redis-cli线上如何排查和治理"], useCases: ["连接实例","执行命令","监控和排障"], prerequisites: ["redis-command"], related: ["redis-monitor","slowlog"], commonIssues: ["误连生产实例","monitor 命令影响性能"] },
  /* <!-- KG_EXPLAINED: Redis 数据类型 | 2026-05-23 | source_count=5 --> */
  { sourceRefs: ["redis-docs","redis-commands","xiaolin-redis","javaguide","doocs-advanced-java"], id: "redis-data-types", zh: "Redis 数据类型", en: "Redis Data Types", area: "data-type", difficulty: "easy", explanation: ["核心概念：Redis 数据类型（Redis Data Types）聚焦Redis 数据类型是Redis体系中的关键知识点。Redis 围绕内存数据结构、单线程事件循环、持久化、复制和缓存治理提供高性能数据服务；理解它时先抓住数据类型、编码结构和命令复杂度，再看输入、状态变化、输出结果和失败分支。","适用场景：Redis 数据类型常用于按业务模型选择存储结构。学习时把它放回Redis链路中观察，并结合前置知识Redis 概览判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，Redis 数据类型通常会和String、Hash、List、Set和ZSet一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点适合先掌握主流程。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认数据类型、编码结构和命令复杂度是否仍然成立。","常见误区与注意点：实践中容易把Redis 数据类型当成孤立概念处理，结果遗漏大 Key、热 Key、遍历命令、内存编码和阻塞风险。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考Redis 官方文档、Redis Commands、小林 coding、JavaGuide 和 doocs advanced-java，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["Redis 数据类型适合什么使用场景","Redis 数据类型可能带来哪些性能或一致性问题","Redis 数据类型线上如何排查和治理"], useCases: ["按业务模型选择存储结构"], prerequisites: ["redis-overview"], related: ["redis-string","redis-hash","redis-list","redis-set","redis-zset"], commonIssues: ["类型选择不合理","结构过大导致访问变慢"] },
  /* <!-- KG_EXPLAINED: String | 2026-05-23 | source_count=5 --> */
  { sourceRefs: ["redis-docs","redis-commands","xiaolin-redis","javaguide","doocs-advanced-java"], id: "redis-string", zh: "String", en: "String", area: "data-type", difficulty: "easy", explanation: ["核心概念：String聚焦String是Redis体系中的关键知识点。Redis 围绕内存数据结构、单线程事件循环、持久化、复制和缓存治理提供高性能数据服务；理解它时先抓住数据类型、编码结构和命令复杂度，再看输入、状态变化、输出结果和失败分支。","适用场景：String常用于缓存对象、计数器、分布式锁值和限流计数。学习时把它放回Redis链路中观察，并结合前置知识Redis 数据类型判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，String通常会和redis-counter和分布式锁一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点适合先掌握主流程。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认数据类型、编码结构和命令复杂度是否仍然成立。","常见误区与注意点：实践中容易把String当成孤立概念处理，结果遗漏大 Key、热 Key、遍历命令、内存编码和阻塞风险。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考Redis 官方文档、Redis Commands、小林 coding、JavaGuide 和 doocs advanced-java，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["String适合什么使用场景","String可能带来哪些性能或一致性问题","String线上如何排查和治理"], useCases: ["缓存对象","计数器","分布式锁值","限流计数"], prerequisites: ["redis-data-types"], related: ["redis-lock","expire-policy"], commonIssues: ["value 过大","序列化格式不统一"] },
  /* <!-- KG_EXPLAINED: Hash | 2026-05-23 | source_count=5 --> */
  { sourceRefs: ["redis-docs","redis-commands","xiaolin-redis","javaguide","doocs-advanced-java"], id: "redis-hash", zh: "Hash", en: "Hash", area: "data-type", difficulty: "easy", explanation: ["核心概念：Hash聚焦Hash是Redis体系中的关键知识点。Redis 围绕内存数据结构、单线程事件循环、持久化、复制和缓存治理提供高性能数据服务；理解它时先抓住数据类型、编码结构和命令复杂度，再看输入、状态变化、输出结果和失败分支。","适用场景：Hash常用于对象字段存储、用户信息缓存和配置缓存。学习时把它放回Redis链路中观察，并结合前置知识Redis 数据类型判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，Hash通常会和String一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点适合先掌握主流程。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认数据类型、编码结构和命令复杂度是否仍然成立。","常见误区与注意点：实践中容易把Hash当成孤立概念处理，结果遗漏大 Key、热 Key、遍历命令、内存编码和阻塞风险。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考Redis 官方文档、Redis Commands、小林 coding、JavaGuide 和 doocs advanced-java，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["Hash适合什么使用场景","Hash可能带来哪些性能或一致性问题","Hash线上如何排查和治理"], useCases: ["对象字段存储","用户信息缓存","配置缓存"], prerequisites: ["redis-data-types"], related: ["redis-string"], commonIssues: ["field 数量过多","热 Hash 导致单 key 压力集中"] },
  /* <!-- KG_EXPLAINED: List | 2026-05-23 | source_count=5 --> */
  { sourceRefs: ["redis-docs","redis-commands","xiaolin-redis","javaguide","doocs-advanced-java"], id: "redis-list", zh: "List", en: "List", area: "data-type", difficulty: "easy", explanation: ["核心概念：List聚焦List是Redis体系中的关键知识点。Redis 围绕内存数据结构、单线程事件循环、持久化、复制和缓存治理提供高性能数据服务；理解它时先抓住数据类型、编码结构和命令复杂度，再看输入、状态变化、输出结果和失败分支。","适用场景：List常用于简单队列、最新消息列表和任务缓冲。学习时把它放回Redis链路中观察，并结合前置知识Redis 数据类型判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，List通常会和Stream和发布订阅一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点适合先掌握主流程。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认数据类型、编码结构和命令复杂度是否仍然成立。","常见误区与注意点：实践中容易把List当成孤立概念处理，结果遗漏大 Key、热 Key、遍历命令、内存编码和阻塞风险。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考Redis 官方文档、Redis Commands、小林 coding、JavaGuide 和 doocs advanced-java，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["List适合什么使用场景","List可能带来哪些性能或一致性问题","List线上如何排查和治理"], useCases: ["简单队列","最新消息列表","任务缓冲"], prerequisites: ["redis-data-types"], related: ["redis-stream","redis-pubsub"], commonIssues: ["大 List 删除成本高","阻塞弹出使用不当"] },
  /* <!-- KG_EXPLAINED: Set | 2026-05-23 | source_count=5 --> */
  { sourceRefs: ["redis-docs","redis-commands","xiaolin-redis","javaguide","doocs-advanced-java"], id: "redis-set", zh: "Set", en: "Set", area: "data-type", difficulty: "easy", explanation: ["核心概念：Set聚焦Set是Redis体系中的关键知识点。Redis 围绕内存数据结构、单线程事件循环、持久化、复制和缓存治理提供高性能数据服务；理解它时先抓住数据类型、编码结构和命令复杂度，再看输入、状态变化、输出结果和失败分支。","适用场景：Set常用于去重、共同关注、标签集合和抽奖。学习时把它放回Redis链路中观察，并结合前置知识Redis 数据类型判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，Set通常会和ZSet和Bitmap一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点适合先掌握主流程。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认数据类型、编码结构和命令复杂度是否仍然成立。","常见误区与注意点：实践中容易把Set当成孤立概念处理，结果遗漏大 Key、热 Key、遍历命令、内存编码和阻塞风险。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考Redis 官方文档、Redis Commands、小林 coding、JavaGuide 和 doocs advanced-java，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["Set适合什么使用场景","Set可能带来哪些性能或一致性问题","Set线上如何排查和治理"], useCases: ["去重","共同关注","标签集合","抽奖"], prerequisites: ["redis-data-types"], related: ["redis-zset","bitmap"], commonIssues: ["集合过大","交并差运算阻塞"] },
  /* <!-- KG_EXPLAINED: ZSet | 2026-05-23 | source_count=5 --> */
  { sourceRefs: ["redis-docs","redis-commands","xiaolin-redis","javaguide","doocs-advanced-java"], id: "redis-zset", zh: "ZSet", en: "Sorted Set", area: "data-type", difficulty: "medium", explanation: ["核心概念：ZSet（Sorted Set）聚焦ZSet是Redis体系中的关键知识点。Redis 围绕内存数据结构、单线程事件循环、持久化、复制和缓存治理提供高性能数据服务；理解它时先抓住数据类型、编码结构和命令复杂度，再看输入、状态变化、输出结果和失败分支。","适用场景：ZSet常用于排行榜、延迟队列和带权重排序。学习时把它放回Redis链路中观察，并结合前置知识Redis 数据类型判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，ZSet通常会和skiplist和List一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点需要结合流程和指标判断。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认数据类型、编码结构和命令复杂度是否仍然成立。","常见误区与注意点：实践中容易把ZSet当成孤立概念处理，结果遗漏大 Key、热 Key、遍历命令、内存编码和阻塞风险。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考Redis 官方文档、Redis Commands、小林 coding、JavaGuide 和 doocs advanced-java，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["ZSet适合什么使用场景","ZSet可能带来哪些性能或一致性问题","ZSet线上如何排查和治理"], useCases: ["排行榜","延迟队列","带权重排序"], prerequisites: ["redis-data-types"], related: ["redis-list","geo"], commonIssues: ["分数精度问题","大范围查询成本高"] },
  /* <!-- KG_EXPLAINED: Bitmap | 2026-05-23 | source_count=5 --> */
  { sourceRefs: ["redis-docs","redis-commands","xiaolin-redis","javaguide","doocs-advanced-java"], id: "bitmap", zh: "Bitmap", en: "Bitmap", area: "data-type", difficulty: "medium", explanation: ["核心概念：Bitmap聚焦Bitmap是Redis体系中的关键知识点。Redis 围绕内存数据结构、单线程事件循环、持久化、复制和缓存治理提供高性能数据服务；理解它时先抓住数据类型、编码结构和命令复杂度，再看输入、状态变化、输出结果和失败分支。","适用场景：Bitmap常用于签到、活跃用户统计和布尔状态压缩存储。学习时把它放回Redis链路中观察，并结合前置知识String判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，Bitmap通常会和HyperLogLog一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点需要结合流程和指标判断。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认数据类型、编码结构和命令复杂度是否仍然成立。","常见误区与注意点：实践中容易把Bitmap当成孤立概念处理，结果遗漏大 Key、热 Key、遍历命令、内存编码和阻塞风险。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考Redis 官方文档、Redis Commands、小林 coding、JavaGuide 和 doocs advanced-java，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["Bitmap适合什么使用场景","Bitmap可能带来哪些性能或一致性问题","Bitmap线上如何排查和治理"], useCases: ["签到","活跃用户统计","布尔状态压缩存储"], prerequisites: ["redis-string"], related: ["hyperloglog"], commonIssues: ["offset 过大导致内存突增","统计语义设计错误"] },
  /* <!-- KG_EXPLAINED: HyperLogLog | 2026-05-23 | source_count=5 --> */
  { sourceRefs: ["redis-docs","redis-commands","xiaolin-redis","javaguide","doocs-advanced-java"], id: "hyperloglog", zh: "HyperLogLog", en: "HyperLogLog", area: "data-type", difficulty: "medium", explanation: ["核心概念：HyperLogLog聚焦HyperLogLog是Redis体系中的关键知识点。Redis 围绕内存数据结构、单线程事件循环、持久化、复制和缓存治理提供高性能数据服务；理解它时先抓住数据类型、编码结构和命令复杂度，再看输入、状态变化、输出结果和失败分支。","适用场景：HyperLogLog常用于UV 近似统计和大规模去重计数。学习时把它放回Redis链路中观察，并结合前置知识Redis 数据类型判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，HyperLogLog通常会和Bitmap一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点需要结合流程和指标判断。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认数据类型、编码结构和命令复杂度是否仍然成立。","常见误区与注意点：实践中容易把HyperLogLog当成孤立概念处理，结果遗漏大 Key、热 Key、遍历命令、内存编码和阻塞风险。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考Redis 官方文档、Redis Commands、小林 coding、JavaGuide 和 doocs advanced-java，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["HyperLogLog适合什么使用场景","HyperLogLog可能带来哪些性能或一致性问题","HyperLogLog线上如何排查和治理"], useCases: ["UV 近似统计","大规模去重计数"], prerequisites: ["redis-data-types"], related: ["bitmap"], commonIssues: ["结果有误差","无法取回原始元素"] },
  /* <!-- KG_EXPLAINED: Geo | 2026-05-23 | source_count=5 --> */
  { sourceRefs: ["redis-docs","redis-commands","xiaolin-redis","javaguide","doocs-advanced-java"], id: "geo", zh: "Geo", en: "Geo", area: "data-type", difficulty: "medium", explanation: ["核心概念：Geo聚焦Geo是Redis体系中的关键知识点。Redis 围绕内存数据结构、单线程事件循环、持久化、复制和缓存治理提供高性能数据服务；理解它时先抓住数据类型、编码结构和命令复杂度，再看输入、状态变化、输出结果和失败分支。","适用场景：Geo常用于附近的人、门店距离查询和地理位置排序。学习时把它放回Redis链路中观察，并结合前置知识ZSet判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，Geo通常会和ZSet一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点需要结合流程和指标判断。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认数据类型、编码结构和命令复杂度是否仍然成立。","常见误区与注意点：实践中容易把Geo当成孤立概念处理，结果遗漏大 Key、热 Key、遍历命令、内存编码和阻塞风险。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考Redis 官方文档、Redis Commands、小林 coding、JavaGuide 和 doocs advanced-java，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["Geo适合什么使用场景","Geo可能带来哪些性能或一致性问题","Geo线上如何排查和治理"], useCases: ["附近的人","门店距离查询","地理位置排序"], prerequisites: ["redis-zset"], related: ["redis-zset"], commonIssues: ["精度边界","坐标数据更新频繁"] },
  /* <!-- KG_EXPLAINED: Stream | 2026-05-23 | source_count=5 --> */
  { sourceRefs: ["redis-docs","redis-commands","xiaolin-redis","javaguide","doocs-advanced-java"], id: "redis-stream", zh: "Stream", en: "Stream", area: "data-type", difficulty: "medium", explanation: ["核心概念：Stream聚焦Stream是Redis体系中的关键知识点。Redis 围绕内存数据结构、单线程事件循环、持久化、复制和缓存治理提供高性能数据服务；理解它时先抓住数据类型、编码结构和命令复杂度，再看输入、状态变化、输出结果和失败分支。","适用场景：Stream常用于消息流、消费组和事件日志。学习时把它放回Redis链路中观察，并结合前置知识List判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，Stream通常会和发布订阅和消费组一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点需要结合流程和指标判断。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认数据类型、编码结构和命令复杂度是否仍然成立。","常见误区与注意点：实践中容易把Stream当成孤立概念处理，结果遗漏大 Key、热 Key、遍历命令、内存编码和阻塞风险。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考Redis 官方文档、Redis Commands、小林 coding、JavaGuide 和 doocs advanced-java，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["Stream适合什么使用场景","Stream可能带来哪些性能或一致性问题","Stream线上如何排查和治理"], useCases: ["消息流","消费组","事件日志"], prerequisites: ["redis-list"], related: ["redis-pubsub","consumer-group"], commonIssues: ["消息堆积","消费组确认遗漏"] },
  /* <!-- KG_EXPLAINED: 消费组 | 2026-05-23 | source_count=5 --> */
  { sourceRefs: ["redis-docs","redis-commands","xiaolin-redis","javaguide","doocs-advanced-java"], id: "consumer-group", zh: "消费组", en: "Consumer Group", area: "data-type", difficulty: "medium", explanation: ["核心概念：消费组（Consumer Group）聚焦消费组是Redis体系中的关键知识点。Redis 围绕内存数据结构、单线程事件循环、持久化、复制和缓存治理提供高性能数据服务；理解它时先抓住数据类型、编码结构和命令复杂度，再看输入、状态变化、输出结果和失败分支。","适用场景：消费组常用于多消费者分摊 Stream 消息和可靠消费。学习时把它放回Redis链路中观察，并结合前置知识Stream判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，消费组通常会和消息确认一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点需要结合流程和指标判断。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认数据类型、编码结构和命令复杂度是否仍然成立。","常见误区与注意点：实践中容易把消费组当成孤立概念处理，结果遗漏大 Key、热 Key、遍历命令、内存编码和阻塞风险。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考Redis 官方文档、Redis Commands、小林 coding、JavaGuide 和 doocs advanced-java，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["消费组适合什么使用场景","消费组可能带来哪些性能或一致性问题","消费组线上如何排查和治理"], useCases: ["多消费者分摊 Stream 消息","可靠消费"], prerequisites: ["redis-stream"], related: ["redis-ack"], commonIssues: ["pending 消息堆积","消费者宕机后的消息恢复"] },
  /* <!-- KG_EXPLAINED: 持久化 | 2026-05-23 | source_count=5 --> */
  { sourceRefs: ["redis-docs","redis-commands","xiaolin-redis","javaguide","doocs-advanced-java"], id: "redis-persistence", zh: "持久化", en: "Persistence", area: "persistence", difficulty: "medium", explanation: ["核心概念：持久化（Persistence）聚焦持久化是Redis体系中的关键知识点。Redis 围绕内存数据结构、单线程事件循环、持久化、复制和缓存治理提供高性能数据服务；理解它时先抓住RDB、AOF、重写、fork 和写时复制，再看输入、状态变化、输出结果和失败分支。","适用场景：持久化常用于实例重启恢复、灾难恢复和数据备份。学习时把它放回Redis链路中观察，并结合前置知识Redis 概览判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，持久化通常会和RDB和AOF一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点需要结合流程和指标判断。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认RDB、AOF、重写、fork 和写时复制是否仍然成立。","常见误区与注意点：实践中容易把持久化当成孤立概念处理，结果遗漏fsync 策略、fork 抖动、磁盘压力和恢复时间。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考Redis 官方文档、Redis Commands、小林 coding、JavaGuide 和 doocs advanced-java，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["持久化适合什么使用场景","持久化可能带来哪些性能或一致性问题","持久化线上如何排查和治理"], useCases: ["实例重启恢复","灾难恢复","数据备份"], prerequisites: ["redis-overview"], related: ["rdb","aof"], commonIssues: ["性能和安全性的取舍","恢复时间过长"] },
  /* <!-- KG_EXPLAINED: RDB | 2026-05-23 | source_count=5 --> */
  { sourceRefs: ["redis-docs","redis-commands","xiaolin-redis","javaguide","doocs-advanced-java"], id: "rdb", zh: "RDB", en: "RDB Snapshot", area: "persistence", difficulty: "medium", explanation: ["核心概念：RDB（RDB Snapshot）聚焦RDB是Redis体系中的关键知识点。Redis 围绕内存数据结构、单线程事件循环、持久化、复制和缓存治理提供高性能数据服务；理解它时先抓住RDB、AOF、重写、fork 和写时复制，再看输入、状态变化、输出结果和失败分支。","适用场景：RDB常用于周期性快照、全量备份和快速恢复。学习时把它放回Redis链路中观察，并结合前置知识持久化判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，RDB通常会和AOF和fork 与写时复制一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点需要结合流程和指标判断。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认RDB、AOF、重写、fork 和写时复制是否仍然成立。","常见误区与注意点：实践中容易把RDB当成孤立概念处理，结果遗漏fsync 策略、fork 抖动、磁盘压力和恢复时间。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考Redis 官方文档、Redis Commands、小林 coding、JavaGuide 和 doocs advanced-java，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["RDB适合什么使用场景","RDB可能带来哪些性能或一致性问题","RDB线上如何排查和治理"], useCases: ["周期性快照","全量备份","快速恢复"], prerequisites: ["redis-persistence"], related: ["aof","fork-cow"], commonIssues: ["两次快照之间数据丢失","fork 带来短暂抖动"] },
  /* <!-- KG_EXPLAINED: AOF | 2026-05-23 | source_count=5 --> */
  { sourceRefs: ["redis-docs","redis-commands","xiaolin-redis","javaguide","doocs-advanced-java"], id: "aof", zh: "AOF", en: "Append Only File", area: "persistence", difficulty: "medium", explanation: ["核心概念：AOF（Append Only File）聚焦AOF是Redis体系中的关键知识点。Redis 围绕内存数据结构、单线程事件循环、持久化、复制和缓存治理提供高性能数据服务；理解它时先抓住RDB、AOF、重写、fork 和写时复制，再看输入、状态变化、输出结果和失败分支。","适用场景：AOF常用于更高数据安全性和命令级恢复。学习时把它放回Redis链路中观察，并结合前置知识持久化判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，AOF通常会和AOF 重写和RDB一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点需要结合流程和指标判断。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认RDB、AOF、重写、fork 和写时复制是否仍然成立。","常见误区与注意点：实践中容易把AOF当成孤立概念处理，结果遗漏fsync 策略、fork 抖动、磁盘压力和恢复时间。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考Redis 官方文档、Redis Commands、小林 coding、JavaGuide 和 doocs advanced-java，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["AOF适合什么使用场景","AOF可能带来哪些性能或一致性问题","AOF线上如何排查和治理"], useCases: ["更高数据安全性","命令级恢复"], prerequisites: ["redis-persistence"], related: ["aof-rewrite","rdb"], commonIssues: ["文件膨胀","刷盘策略影响性能"] },
  /* <!-- KG_EXPLAINED: AOF 重写 | 2026-05-23 | source_count=5 --> */
  { sourceRefs: ["redis-docs","redis-commands","xiaolin-redis","javaguide","doocs-advanced-java"], id: "aof-rewrite", zh: "AOF 重写", en: "AOF Rewrite", area: "persistence", difficulty: "hard", explanation: ["核心概念：AOF 重写（AOF Rewrite）聚焦AOF 重写是Redis体系中的关键知识点。Redis 围绕内存数据结构、单线程事件循环、持久化、复制和缓存治理提供高性能数据服务；理解它时先抓住RDB、AOF、重写、fork 和写时复制，再看输入、状态变化、输出结果和失败分支。","适用场景：AOF 重写常用于压缩 AOF 文件和降低恢复成本。学习时把它放回Redis链路中观察，并结合前置知识AOF判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，AOF 重写通常会和fork 与写时复制一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点风险和细节较多。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认RDB、AOF、重写、fork 和写时复制是否仍然成立。","常见误区与注意点：实践中容易把AOF 重写当成孤立概念处理，结果遗漏fsync 策略、fork 抖动、磁盘压力和恢复时间。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考Redis 官方文档、Redis Commands、小林 coding、JavaGuide 和 doocs advanced-java，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["AOF 重写适合什么使用场景","AOF 重写可能带来哪些性能或一致性问题","AOF 重写线上如何排查和治理"], useCases: ["压缩 AOF 文件","降低恢复成本"], prerequisites: ["aof"], related: ["fork-cow"], commonIssues: ["重写期间 I/O 压力","后台重写失败"] },
  /* <!-- KG_EXPLAINED: fork 与写时复制 | 2026-05-23 | source_count=5 --> */
  { sourceRefs: ["redis-docs","redis-commands","xiaolin-redis","javaguide","doocs-advanced-java"], id: "fork-cow", zh: "fork 与写时复制", en: "fork and Copy-on-Write", area: "persistence", difficulty: "hard", explanation: ["核心概念：fork 与写时复制（fork and Copy-on-Write）聚焦fork 与写时复制是Redis体系中的关键知识点。Redis 围绕内存数据结构、单线程事件循环、持久化、复制和缓存治理提供高性能数据服务；理解它时先抓住RDB、AOF、重写、fork 和写时复制，再看输入、状态变化、输出结果和失败分支。","适用场景：fork 与写时复制常用于RDB 生成、AOF 重写和后台子进程任务。学习时把它放回Redis链路中观察，并结合前置知识RDB和AOF 重写判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，fork 与写时复制通常会和Redis 内存管理一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点风险和细节较多。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认RDB、AOF、重写、fork 和写时复制是否仍然成立。","常见误区与注意点：实践中容易把fork 与写时复制当成孤立概念处理，结果遗漏fsync 策略、fork 抖动、磁盘压力和恢复时间。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考Redis 官方文档、Redis Commands、小林 coding、JavaGuide 和 doocs advanced-java，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["fork 与写时复制适合什么使用场景","fork 与写时复制可能带来哪些性能或一致性问题","fork 与写时复制线上如何排查和治理"], useCases: ["RDB 生成","AOF 重写","后台子进程任务"], prerequisites: ["rdb","aof-rewrite"], related: ["redis-memory"], commonIssues: ["内存瞬时放大","fork 阻塞主线程"] },
  /* <!-- KG_EXPLAINED: 过期策略 | 2026-05-23 | source_count=5 --> */
  { sourceRefs: ["redis-docs","redis-commands","xiaolin-redis","javaguide","doocs-advanced-java"], id: "expire-policy", zh: "过期策略", en: "Expiration Policy", area: "expiration", difficulty: "medium", explanation: ["核心概念：过期策略（Expiration Policy）聚焦过期策略是Redis体系中的关键知识点。Redis 围绕内存数据结构、单线程事件循环、持久化、复制和缓存治理提供高性能数据服务；理解它时先抓住过期时间、惰性删除和定期删除，再看输入、状态变化、输出结果和失败分支。","适用场景：过期策略常用于缓存自动失效、会话过期和验证码过期。学习时把它放回Redis链路中观察，并结合前置知识String判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，过期策略通常会和惰性删除和定期删除一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点需要结合流程和指标判断。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认过期时间、惰性删除和定期删除是否仍然成立。","常见误区与注意点：实践中容易把过期策略当成孤立概念处理，结果遗漏集中失效、过期风暴、主从过期传播和内存残留。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考Redis 官方文档、Redis Commands、小林 coding、JavaGuide 和 doocs advanced-java，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["过期策略适合什么使用场景","过期策略可能带来哪些性能或一致性问题","过期策略线上如何排查和治理"], useCases: ["缓存自动失效","会话过期","验证码过期"], prerequisites: ["redis-string"], related: ["lazy-expire","active-expire"], commonIssues: ["大量 key 同时过期","过期 key 未及时释放"] },
  /* <!-- KG_EXPLAINED: 惰性删除 | 2026-05-23 | source_count=5 --> */
  { sourceRefs: ["redis-docs","redis-commands","xiaolin-redis","javaguide","doocs-advanced-java"], id: "lazy-expire", zh: "惰性删除", en: "Lazy Expiration", area: "expiration", difficulty: "easy", explanation: ["核心概念：惰性删除（Lazy Expiration）聚焦惰性删除是Redis体系中的关键知识点。Redis 围绕内存数据结构、单线程事件循环、持久化、复制和缓存治理提供高性能数据服务；理解它时先抓住过期时间、惰性删除和定期删除，再看输入、状态变化、输出结果和失败分支。","适用场景：惰性删除常用于访问 key 时顺便清理过期数据。学习时把它放回Redis链路中观察，并结合前置知识过期策略判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，惰性删除通常会和定期删除一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点适合先掌握主流程。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认过期时间、惰性删除和定期删除是否仍然成立。","常见误区与注意点：实践中容易把惰性删除当成孤立概念处理，结果遗漏集中失效、过期风暴、主从过期传播和内存残留。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考Redis 官方文档、Redis Commands、小林 coding、JavaGuide 和 doocs advanced-java，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["惰性删除适合什么使用场景","惰性删除可能带来哪些性能或一致性问题","惰性删除线上如何排查和治理"], useCases: ["访问 key 时顺便清理过期数据"], prerequisites: ["expire-policy"], related: ["active-expire"], commonIssues: ["长期不访问的过期 key 占内存"] },
  /* <!-- KG_EXPLAINED: 定期删除 | 2026-05-23 | source_count=5 --> */
  { sourceRefs: ["redis-docs","redis-commands","xiaolin-redis","javaguide","doocs-advanced-java"], id: "active-expire", zh: "定期删除", en: "Active Expiration", area: "expiration", difficulty: "medium", explanation: ["核心概念：定期删除（Active Expiration）聚焦定期删除是Redis体系中的关键知识点。Redis 围绕内存数据结构、单线程事件循环、持久化、复制和缓存治理提供高性能数据服务；理解它时先抓住过期时间、惰性删除和定期删除，再看输入、状态变化、输出结果和失败分支。","适用场景：定期删除常用于后台抽样清理过期 key。学习时把它放回Redis链路中观察，并结合前置知识过期策略判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，定期删除通常会和惰性删除一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点需要结合流程和指标判断。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认过期时间、惰性删除和定期删除是否仍然成立。","常见误区与注意点：实践中容易把定期删除当成孤立概念处理，结果遗漏集中失效、过期风暴、主从过期传播和内存残留。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考Redis 官方文档、Redis Commands、小林 coding、JavaGuide 和 doocs advanced-java，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["定期删除适合什么使用场景","定期删除可能带来哪些性能或一致性问题","定期删除线上如何排查和治理"], useCases: ["后台抽样清理过期 key"], prerequisites: ["expire-policy"], related: ["lazy-expire"], commonIssues: ["清理频率影响 CPU","过期风暴"] },
  /* <!-- KG_EXPLAINED: 过期风暴 | 2026-05-23 | source_count=5 --> */
  { sourceRefs: ["redis-docs","redis-commands","xiaolin-redis","javaguide","doocs-advanced-java"], id: "expire-storm", zh: "过期风暴", en: "Expiration Storm", area: "expiration", difficulty: "medium", explanation: ["核心概念：过期风暴（Expiration Storm）聚焦过期风暴是Redis体系中的关键知识点。Redis 围绕内存数据结构、单线程事件循环、持久化、复制和缓存治理提供高性能数据服务；理解它时先抓住过期时间、惰性删除和定期删除，再看输入、状态变化、输出结果和失败分支。","适用场景：过期风暴常用于批量缓存设置过期时间的风险控制。学习时把它放回Redis链路中观察，并结合前置知识过期策略判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，过期风暴通常会和缓存雪崩一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点需要结合流程和指标判断。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认过期时间、惰性删除和定期删除是否仍然成立。","常见误区与注意点：实践中容易把过期风暴当成孤立概念处理，结果遗漏集中失效、过期风暴、主从过期传播和内存残留。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考Redis 官方文档、Redis Commands、小林 coding、JavaGuide 和 doocs advanced-java，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["过期风暴适合什么使用场景","过期风暴可能带来哪些性能或一致性问题","过期风暴线上如何排查和治理"], useCases: ["批量缓存设置过期时间的风险控制"], prerequisites: ["expire-policy"], related: ["cache-avalanche"], commonIssues: ["CPU 飙升","数据库瞬时压力变大"] },
  /* <!-- KG_EXPLAINED: 淘汰策略 | 2026-05-23 | source_count=5 --> */
  { sourceRefs: ["redis-docs","redis-commands","xiaolin-redis","javaguide","doocs-advanced-java"], id: "eviction-policy", zh: "淘汰策略", en: "Eviction Policy", area: "memory", difficulty: "medium", explanation: ["核心概念：淘汰策略（Eviction Policy）聚焦淘汰策略是Redis体系中的关键知识点。Redis 围绕内存数据结构、单线程事件循环、持久化、复制和缓存治理提供高性能数据服务；理解它时先抓住内存上限、淘汰策略、对象编码和热点治理，再看输入、状态变化、输出结果和失败分支。","适用场景：淘汰策略常用于内存达到上限后选择删除哪些 key。学习时把它放回Redis链路中观察，并结合前置知识Redis 内存管理判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，淘汰策略通常会和LRU和LFU一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点需要结合流程和指标判断。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认内存上限、淘汰策略、对象编码和热点治理是否仍然成立。","常见误区与注意点：实践中容易把淘汰策略当成孤立概念处理，结果遗漏碎片率、淘汰抖动、Big Key、Hot Key 和采样误差。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考Redis 官方文档、Redis Commands、小林 coding、JavaGuide 和 doocs advanced-java，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["淘汰策略适合什么使用场景","淘汰策略可能带来哪些性能或一致性问题","淘汰策略线上如何排查和治理"], useCases: ["内存达到上限后选择删除哪些 key"], prerequisites: ["redis-memory"], related: ["lru","lfu"], commonIssues: ["策略选择与业务不匹配","热数据被淘汰"] },
  /* <!-- KG_EXPLAINED: Redis 内存管理 | 2026-05-23 | source_count=5 --> */
  { sourceRefs: ["redis-docs","redis-commands","xiaolin-redis","javaguide","doocs-advanced-java"], id: "redis-memory", zh: "Redis 内存管理", en: "Redis Memory Management", area: "memory", difficulty: "medium", explanation: ["核心概念：Redis 内存管理（Redis Memory Management）聚焦Redis 内存管理是Redis体系中的关键知识点。Redis 围绕内存数据结构、单线程事件循环、持久化、复制和缓存治理提供高性能数据服务；理解它时先抓住内存上限、淘汰策略、对象编码和热点治理，再看输入、状态变化、输出结果和失败分支。","适用场景：Redis 内存管理常用于容量规划、内存优化和大 Key 治理。学习时把它放回Redis链路中观察，并结合前置知识Redis 概览判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，Redis 内存管理通常会和大 Key和淘汰策略一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点需要结合流程和指标判断。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认内存上限、淘汰策略、对象编码和热点治理是否仍然成立。","常见误区与注意点：实践中容易把Redis 内存管理当成孤立概念处理，结果遗漏碎片率、淘汰抖动、Big Key、Hot Key 和采样误差。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考Redis 官方文档、Redis Commands、小林 coding、JavaGuide 和 doocs advanced-java，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["Redis 内存管理适合什么使用场景","Redis 内存管理可能带来哪些性能或一致性问题","Redis 内存管理线上如何排查和治理"], useCases: ["容量规划","内存优化","大 Key 治理"], prerequisites: ["redis-overview"], related: ["big-key","eviction-policy"], commonIssues: ["内存碎片","大 Key 阻塞"] },
  /* <!-- KG_EXPLAINED: LRU | 2026-05-23 | source_count=5 --> */
  { sourceRefs: ["redis-docs","redis-commands","xiaolin-redis","javaguide","doocs-advanced-java"], id: "lru", zh: "LRU", en: "Least Recently Used", area: "memory", difficulty: "medium", explanation: ["核心概念：LRU（Least Recently Used）聚焦LRU是Redis体系中的关键知识点。Redis 围绕内存数据结构、单线程事件循环、持久化、复制和缓存治理提供高性能数据服务；理解它时先抓住内存上限、淘汰策略、对象编码和热点治理，再看输入、状态变化、输出结果和失败分支。","适用场景：LRU常用于淘汰最近最少使用的数据。学习时把它放回Redis链路中观察，并结合前置知识淘汰策略判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，LRU通常会和LFU一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点需要结合流程和指标判断。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认内存上限、淘汰策略、对象编码和热点治理是否仍然成立。","常见误区与注意点：实践中容易把LRU当成孤立概念处理，结果遗漏碎片率、淘汰抖动、Big Key、Hot Key 和采样误差。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考Redis 官方文档、Redis Commands、小林 coding、JavaGuide 和 doocs advanced-java，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["LRU适合什么使用场景","LRU可能带来哪些性能或一致性问题","LRU线上如何排查和治理"], useCases: ["淘汰最近最少使用的数据"], prerequisites: ["eviction-policy"], related: ["lfu"], commonIssues: ["偶发访问影响淘汰判断","近似 LRU 与理论 LRU 差异"] },
  /* <!-- KG_EXPLAINED: LFU | 2026-05-23 | source_count=5 --> */
  { sourceRefs: ["redis-docs","redis-commands","xiaolin-redis","javaguide","doocs-advanced-java"], id: "lfu", zh: "LFU", en: "Least Frequently Used", area: "memory", difficulty: "medium", explanation: ["核心概念：LFU（Least Frequently Used）聚焦LFU是Redis体系中的关键知识点。Redis 围绕内存数据结构、单线程事件循环、持久化、复制和缓存治理提供高性能数据服务；理解它时先抓住内存上限、淘汰策略、对象编码和热点治理，再看输入、状态变化、输出结果和失败分支。","适用场景：LFU常用于淘汰访问频率低的数据。学习时把它放回Redis链路中观察，并结合前置知识淘汰策略判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，LFU通常会和LRU一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点需要结合流程和指标判断。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认内存上限、淘汰策略、对象编码和热点治理是否仍然成立。","常见误区与注意点：实践中容易把LFU当成孤立概念处理，结果遗漏碎片率、淘汰抖动、Big Key、Hot Key 和采样误差。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考Redis 官方文档、Redis Commands、小林 coding、JavaGuide 和 doocs advanced-java，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["LFU适合什么使用场景","LFU可能带来哪些性能或一致性问题","LFU线上如何排查和治理"], useCases: ["淘汰访问频率低的数据"], prerequisites: ["eviction-policy"], related: ["lru"], commonIssues: ["热点变化滞后","计数衰减参数难调"] },
  /* <!-- KG_EXPLAINED: 大 Key | 2026-05-23 | source_count=5 --> */
  { sourceRefs: ["redis-docs","redis-commands","xiaolin-redis","javaguide","doocs-advanced-java"], id: "big-key", zh: "大 Key", en: "Big Key", area: "memory", difficulty: "medium", explanation: ["核心概念：大 Key（Big Key）聚焦大 Key是Redis体系中的关键知识点。Redis 围绕内存数据结构、单线程事件循环、持久化、复制和缓存治理提供高性能数据服务；理解它时先抓住内存上限、淘汰策略、对象编码和热点治理，再看输入、状态变化、输出结果和失败分支。","适用场景：大 Key常用于识别和拆分超大 value 或集合。学习时把它放回Redis链路中观察，并结合前置知识Redis 内存管理和Redis 数据类型判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，大 Key通常会和热 Key一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点需要结合流程和指标判断。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认内存上限、淘汰策略、对象编码和热点治理是否仍然成立。","常见误区与注意点：实践中容易把大 Key当成孤立概念处理，结果遗漏碎片率、淘汰抖动、Big Key、Hot Key 和采样误差。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考Redis 官方文档、Redis Commands、小林 coding、JavaGuide 和 doocs advanced-java，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["大 Key适合什么使用场景","大 Key可能带来哪些性能或一致性问题","大 Key线上如何排查和治理"], useCases: ["识别和拆分超大 value 或集合"], prerequisites: ["redis-memory","redis-data-types"], related: ["hot-key"], commonIssues: ["删除阻塞","网络传输慢","集群槽位压力集中"] },
  /* <!-- KG_EXPLAINED: 热 Key | 2026-05-23 | source_count=5 --> */
  { sourceRefs: ["redis-docs","redis-commands","xiaolin-redis","javaguide","doocs-advanced-java"], id: "hot-key", zh: "热 Key", en: "Hot Key", area: "memory", difficulty: "medium", explanation: ["核心概念：热 Key（Hot Key）聚焦热 Key是Redis体系中的关键知识点。Redis 围绕内存数据结构、单线程事件循环、持久化、复制和缓存治理提供高性能数据服务；理解它时先抓住内存上限、淘汰策略、对象编码和热点治理，再看输入、状态变化、输出结果和失败分支。","适用场景：热 Key常用于识别高频访问 key和热点缓存保护。学习时把它放回Redis链路中观察，并结合前置知识Redis 内存管理判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，热 Key通常会和缓存击穿和负载均衡一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点需要结合流程和指标判断。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认内存上限、淘汰策略、对象编码和热点治理是否仍然成立。","常见误区与注意点：实践中容易把热 Key当成孤立概念处理，结果遗漏碎片率、淘汰抖动、Big Key、Hot Key 和采样误差。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考Redis 官方文档、Redis Commands、小林 coding、JavaGuide 和 doocs advanced-java，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["热 Key适合什么使用场景","热 Key可能带来哪些性能或一致性问题","热 Key线上如何排查和治理"], useCases: ["识别高频访问 key","热点缓存保护"], prerequisites: ["redis-memory"], related: ["cache-breakdown","load-balancing"], commonIssues: ["单节点 CPU 飙升","请求集中导致延迟上升"] },
  /* <!-- KG_EXPLAINED: 缓存策略 | 2026-05-23 | source_count=5 --> */
  { sourceRefs: ["redis-docs","redis-commands","xiaolin-redis","javaguide","doocs-advanced-java"], id: "redis-cache", zh: "缓存策略", en: "Cache Strategy", area: "cache", difficulty: "easy", explanation: ["核心概念：缓存策略（Cache Strategy）聚焦缓存策略是Redis体系中的关键知识点。Redis 围绕内存数据结构、单线程事件循环、持久化、复制和缓存治理提供高性能数据服务；理解它时先抓住缓存模式、一致性和失效治理，再看输入、状态变化、输出结果和失败分支。","适用场景：缓存策略常用于数据库查询加速、热点数据读取和接口性能优化。学习时把它放回Redis链路中观察，并结合前置知识Redis 概览判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，缓存策略通常会和Cache Aside和缓存一致性一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点适合先掌握主流程。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认缓存模式、一致性和失效治理是否仍然成立。","常见误区与注意点：实践中容易把缓存策略当成孤立概念处理，结果遗漏穿透、击穿、雪崩、双写一致性和回源风暴。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考Redis 官方文档、Redis Commands、小林 coding、JavaGuide 和 doocs advanced-java，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["缓存策略适合什么使用场景","缓存策略可能带来哪些性能或一致性问题","缓存策略线上如何排查和治理"], useCases: ["数据库查询加速","热点数据读取","接口性能优化"], prerequisites: ["redis-overview"], related: ["cache-aside","cache-consistency"], commonIssues: ["缓存命中率低","缓存与数据库不一致"] },
  /* <!-- KG_EXPLAINED: Cache Aside | 2026-05-23 | source_count=5 --> */
  { sourceRefs: ["redis-docs","redis-commands","xiaolin-redis","javaguide","doocs-advanced-java"], id: "cache-aside", zh: "Cache Aside", en: "Cache Aside", area: "cache", difficulty: "medium", explanation: ["核心概念：Cache Aside聚焦Cache Aside是Redis体系中的关键知识点。Redis 围绕内存数据结构、单线程事件循环、持久化、复制和缓存治理提供高性能数据服务；理解它时先抓住缓存模式、一致性和失效治理，再看输入、状态变化、输出结果和失败分支。","适用场景：Cache Aside常用于业务代码先读缓存，未命中再读数据库。学习时把它放回Redis链路中观察，并结合前置知识缓存策略判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，Cache Aside通常会和缓存一致性一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点需要结合流程和指标判断。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认缓存模式、一致性和失效治理是否仍然成立。","常见误区与注意点：实践中容易把Cache Aside当成孤立概念处理，结果遗漏穿透、击穿、雪崩、双写一致性和回源风暴。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考Redis 官方文档、Redis Commands、小林 coding、JavaGuide 和 doocs advanced-java，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["Cache Aside适合什么使用场景","Cache Aside可能带来哪些性能或一致性问题","Cache Aside线上如何排查和治理"], useCases: ["业务代码先读缓存，未命中再读数据库"], prerequisites: ["redis-cache"], related: ["cache-consistency"], commonIssues: ["并发回源","写后删除缓存失败"] },
  /* <!-- KG_EXPLAINED: 缓存一致性 | 2026-05-23 | source_count=5 --> */
  { sourceRefs: ["redis-docs","redis-commands","xiaolin-redis","javaguide","doocs-advanced-java"], id: "cache-consistency", zh: "缓存一致性", en: "Cache Consistency", area: "cache", difficulty: "hard", explanation: ["核心概念：缓存一致性（Cache Consistency）聚焦缓存一致性是Redis体系中的关键知识点。Redis 围绕内存数据结构、单线程事件循环、持久化、复制和缓存治理提供高性能数据服务；理解它时先抓住缓存模式、一致性和失效治理，再看输入、状态变化、输出结果和失败分支。","适用场景：缓存一致性常用于保证缓存和数据库最终一致。学习时把它放回Redis链路中观察，并结合前置知识Cache Aside判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，缓存一致性通常会和延迟双删一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点风险和细节较多。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认缓存模式、一致性和失效治理是否仍然成立。","常见误区与注意点：实践中容易把缓存一致性当成孤立概念处理，结果遗漏穿透、击穿、雪崩、双写一致性和回源风暴。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考Redis 官方文档、Redis Commands、小林 coding、JavaGuide 和 doocs advanced-java，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["缓存一致性适合什么使用场景","缓存一致性可能带来哪些性能或一致性问题","缓存一致性线上如何排查和治理"], useCases: ["保证缓存和数据库最终一致"], prerequisites: ["cache-aside"], related: ["delayed-double-delete"], commonIssues: ["更新数据库和删除缓存的时序问题","读写并发导致脏缓存"] },
  /* <!-- KG_EXPLAINED: 延迟双删 | 2026-05-23 | source_count=5 --> */
  { sourceRefs: ["redis-docs","redis-commands","xiaolin-redis","javaguide","doocs-advanced-java"], id: "delayed-double-delete", zh: "延迟双删", en: "Delayed Double Delete", area: "cache", difficulty: "hard", explanation: ["核心概念：延迟双删（Delayed Double Delete）聚焦延迟双删是Redis体系中的关键知识点。Redis 围绕内存数据结构、单线程事件循环、持久化、复制和缓存治理提供高性能数据服务；理解它时先抓住缓存模式、一致性和失效治理，再看输入、状态变化、输出结果和失败分支。","适用场景：延迟双删常用于降低并发读写下脏缓存概率。学习时把它放回Redis链路中观察，并结合前置知识缓存一致性判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，延迟双删通常会和Cache Aside一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点风险和细节较多。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认缓存模式、一致性和失效治理是否仍然成立。","常见误区与注意点：实践中容易把延迟双删当成孤立概念处理，结果遗漏穿透、击穿、雪崩、双写一致性和回源风暴。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考Redis 官方文档、Redis Commands、小林 coding、JavaGuide 和 doocs advanced-java，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["延迟双删适合什么使用场景","延迟双删可能带来哪些性能或一致性问题","延迟双删线上如何排查和治理"], useCases: ["降低并发读写下脏缓存概率"], prerequisites: ["cache-consistency"], related: ["cache-aside"], commonIssues: ["延迟时间难设","依赖业务读写耗时"] },
  /* <!-- KG_EXPLAINED: 缓存穿透 | 2026-05-23 | source_count=5 --> */
  { sourceRefs: ["redis-docs","redis-commands","xiaolin-redis","javaguide","doocs-advanced-java"], id: "cache-penetration", zh: "缓存穿透", en: "Cache Penetration", area: "cache", difficulty: "medium", explanation: ["核心概念：缓存穿透（Cache Penetration）聚焦缓存穿透是Redis体系中的关键知识点。Redis 围绕内存数据结构、单线程事件循环、持久化、复制和缓存治理提供高性能数据服务；理解它时先抓住缓存模式、一致性和失效治理，再看输入、状态变化、输出结果和失败分支。","适用场景：缓存穿透常用于防止不存在的数据反复打到数据库。学习时把它放回Redis链路中观察，并结合前置知识缓存策略判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，缓存穿透通常会和布隆过滤器和空值缓存一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点需要结合流程和指标判断。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认缓存模式、一致性和失效治理是否仍然成立。","常见误区与注意点：实践中容易把缓存穿透当成孤立概念处理，结果遗漏穿透、击穿、雪崩、双写一致性和回源风暴。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考Redis 官方文档、Redis Commands、小林 coding、JavaGuide 和 doocs advanced-java，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["缓存穿透适合什么使用场景","缓存穿透可能带来哪些性能或一致性问题","缓存穿透线上如何排查和治理"], useCases: ["防止不存在的数据反复打到数据库"], prerequisites: ["redis-cache"], related: ["bloom-filter","null-cache"], commonIssues: ["恶意请求不存在 key","空值缓存过期策略"] },
  /* <!-- KG_EXPLAINED: 布隆过滤器 | 2026-05-23 | source_count=5 --> */
  { sourceRefs: ["redis-docs","redis-commands","xiaolin-redis","javaguide","doocs-advanced-java"], id: "bloom-filter", zh: "布隆过滤器", en: "Bloom Filter", area: "cache", difficulty: "medium", explanation: ["核心概念：布隆过滤器（Bloom Filter）聚焦布隆过滤器是Redis体系中的关键知识点。Redis 围绕内存数据结构、单线程事件循环、持久化、复制和缓存治理提供高性能数据服务；理解它时先抓住缓存模式、一致性和失效治理，再看输入、状态变化、输出结果和失败分支。","适用场景：布隆过滤器常用于快速判断 key 是否可能存在。学习时把它放回Redis链路中观察，并结合前置知识缓存穿透判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，布隆过滤器通常会和Bitmap一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点需要结合流程和指标判断。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认缓存模式、一致性和失效治理是否仍然成立。","常见误区与注意点：实践中容易把布隆过滤器当成孤立概念处理，结果遗漏穿透、击穿、雪崩、双写一致性和回源风暴。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考Redis 官方文档、Redis Commands、小林 coding、JavaGuide 和 doocs advanced-java，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["布隆过滤器适合什么使用场景","布隆过滤器可能带来哪些性能或一致性问题","布隆过滤器线上如何排查和治理"], useCases: ["快速判断 key 是否可能存在"], prerequisites: ["cache-penetration"], related: ["bitmap"], commonIssues: ["误判","删除困难","容量预估错误"] },
  /* <!-- KG_EXPLAINED: 空值缓存 | 2026-05-23 | source_count=5 --> */
  { sourceRefs: ["redis-docs","redis-commands","xiaolin-redis","javaguide","doocs-advanced-java"], id: "null-cache", zh: "空值缓存", en: "Null Value Cache", area: "cache", difficulty: "easy", explanation: ["核心概念：空值缓存（Null Value Cache）聚焦空值缓存是Redis体系中的关键知识点。Redis 围绕内存数据结构、单线程事件循环、持久化、复制和缓存治理提供高性能数据服务；理解它时先抓住缓存模式、一致性和失效治理，再看输入、状态变化、输出结果和失败分支。","适用场景：空值缓存常用于缓存不存在结果，保护数据库。学习时把它放回Redis链路中观察，并结合前置知识缓存穿透判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，空值缓存通常会和Cache Aside一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点适合先掌握主流程。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认缓存模式、一致性和失效治理是否仍然成立。","常见误区与注意点：实践中容易把空值缓存当成孤立概念处理，结果遗漏穿透、击穿、雪崩、双写一致性和回源风暴。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考Redis 官方文档、Redis Commands、小林 coding、JavaGuide 和 doocs advanced-java，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["空值缓存适合什么使用场景","空值缓存可能带来哪些性能或一致性问题","空值缓存线上如何排查和治理"], useCases: ["缓存不存在结果，保护数据库"], prerequisites: ["cache-penetration"], related: ["cache-aside"], commonIssues: ["空值过多占内存","短 TTL 设置不合理"] },
  /* <!-- KG_EXPLAINED: 缓存击穿 | 2026-05-23 | source_count=5 --> */
  { sourceRefs: ["redis-docs","redis-commands","xiaolin-redis","javaguide","doocs-advanced-java"], id: "cache-breakdown", zh: "缓存击穿", en: "Cache Breakdown", area: "cache", difficulty: "medium", explanation: ["核心概念：缓存击穿（Cache Breakdown）聚焦缓存击穿是Redis体系中的关键知识点。Redis 围绕内存数据结构、单线程事件循环、持久化、复制和缓存治理提供高性能数据服务；理解它时先抓住缓存模式、一致性和失效治理，再看输入、状态变化、输出结果和失败分支。","适用场景：缓存击穿常用于保护热点 key 过期瞬间的数据库压力。学习时把它放回Redis链路中观察，并结合前置知识热 Key和缓存策略判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，缓存击穿通常会和互斥重建缓存和逻辑过期一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点需要结合流程和指标判断。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认缓存模式、一致性和失效治理是否仍然成立。","常见误区与注意点：实践中容易把缓存击穿当成孤立概念处理，结果遗漏穿透、击穿、雪崩、双写一致性和回源风暴。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考Redis 官方文档、Redis Commands、小林 coding、JavaGuide 和 doocs advanced-java，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["缓存击穿适合什么使用场景","缓存击穿可能带来哪些性能或一致性问题","缓存击穿线上如何排查和治理"], useCases: ["保护热点 key 过期瞬间的数据库压力"], prerequisites: ["hot-key","redis-cache"], related: ["mutex-rebuild","logical-expire"], commonIssues: ["热点 key 同时回源","互斥锁粒度过大"] },
  /* <!-- KG_EXPLAINED: 互斥重建缓存 | 2026-05-23 | source_count=5 --> */
  { sourceRefs: ["redis-docs","redis-commands","xiaolin-redis","javaguide","doocs-advanced-java"], id: "mutex-rebuild", zh: "互斥重建缓存", en: "Mutex Cache Rebuild", area: "cache", difficulty: "medium", explanation: ["核心概念：互斥重建缓存（Mutex Cache Rebuild）聚焦互斥重建缓存是Redis体系中的关键知识点。Redis 围绕内存数据结构、单线程事件循环、持久化、复制和缓存治理提供高性能数据服务；理解它时先抓住缓存模式、一致性和失效治理，再看输入、状态变化、输出结果和失败分支。","适用场景：互斥重建缓存常用于只允许一个请求回源重建热点缓存。学习时把它放回Redis链路中观察，并结合前置知识缓存击穿和分布式锁判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，互斥重建缓存通常会和逻辑过期一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点需要结合流程和指标判断。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认缓存模式、一致性和失效治理是否仍然成立。","常见误区与注意点：实践中容易把互斥重建缓存当成孤立概念处理，结果遗漏穿透、击穿、雪崩、双写一致性和回源风暴。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考Redis 官方文档、Redis Commands、小林 coding、JavaGuide 和 doocs advanced-java，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["互斥重建缓存适合什么使用场景","互斥重建缓存可能带来哪些性能或一致性问题","互斥重建缓存线上如何排查和治理"], useCases: ["只允许一个请求回源重建热点缓存"], prerequisites: ["cache-breakdown","redis-lock"], related: ["logical-expire"], commonIssues: ["锁超时设置不合理","重建失败后请求阻塞"] },
  /* <!-- KG_EXPLAINED: 逻辑过期 | 2026-05-23 | source_count=5 --> */
  { sourceRefs: ["redis-docs","redis-commands","xiaolin-redis","javaguide","doocs-advanced-java"], id: "logical-expire", zh: "逻辑过期", en: "Logical Expiration", area: "cache", difficulty: "medium", explanation: ["核心概念：逻辑过期（Logical Expiration）聚焦逻辑过期是Redis体系中的关键知识点。Redis 围绕内存数据结构、单线程事件循环、持久化、复制和缓存治理提供高性能数据服务；理解它时先抓住缓存模式、一致性和失效治理，再看输入、状态变化、输出结果和失败分支。","适用场景：逻辑过期常用于热点数据后台异步刷新。学习时把它放回Redis链路中观察，并结合前置知识缓存击穿判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，逻辑过期通常会和互斥重建缓存一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点需要结合流程和指标判断。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认缓存模式、一致性和失效治理是否仍然成立。","常见误区与注意点：实践中容易把逻辑过期当成孤立概念处理，结果遗漏穿透、击穿、雪崩、双写一致性和回源风暴。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考Redis 官方文档、Redis Commands、小林 coding、JavaGuide 和 doocs advanced-java，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["逻辑过期适合什么使用场景","逻辑过期可能带来哪些性能或一致性问题","逻辑过期线上如何排查和治理"], useCases: ["热点数据后台异步刷新"], prerequisites: ["cache-breakdown"], related: ["mutex-rebuild"], commonIssues: ["短时间读到旧数据","后台刷新失败"] },
  /* <!-- KG_EXPLAINED: 缓存雪崩 | 2026-05-23 | source_count=5 --> */
  { sourceRefs: ["redis-docs","redis-commands","xiaolin-redis","javaguide","doocs-advanced-java"], id: "cache-avalanche", zh: "缓存雪崩", en: "Cache Avalanche", area: "cache", difficulty: "medium", explanation: ["核心概念：缓存雪崩（Cache Avalanche）聚焦缓存雪崩是Redis体系中的关键知识点。Redis 围绕内存数据结构、单线程事件循环、持久化、复制和缓存治理提供高性能数据服务；理解它时先抓住缓存模式、一致性和失效治理，再看输入、状态变化、输出结果和失败分支。","适用场景：缓存雪崩常用于防止大量 key 同时失效或 Redis 故障导致数据库被打满。学习时把它放回Redis链路中观察，并结合前置知识缓存策略和过期策略判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，缓存雪崩通常会和过期风暴、哨兵和集群一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点需要结合流程和指标判断。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认缓存模式、一致性和失效治理是否仍然成立。","常见误区与注意点：实践中容易把缓存雪崩当成孤立概念处理，结果遗漏穿透、击穿、雪崩、双写一致性和回源风暴。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考Redis 官方文档、Redis Commands、小林 coding、JavaGuide 和 doocs advanced-java，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["缓存雪崩适合什么使用场景","缓存雪崩可能带来哪些性能或一致性问题","缓存雪崩线上如何排查和治理"], useCases: ["防止大量 key 同时失效或 Redis 故障导致数据库被打满"], prerequisites: ["redis-cache","expire-policy"], related: ["expire-storm","redis-sentinel","redis-cluster"], commonIssues: ["TTL 集中失效","缓存集群不可用"] },
  /* <!-- KG_EXPLAINED: 分布式锁 | 2026-05-23 | source_count=5 --> */
  { sourceRefs: ["redis-docs","redis-commands","xiaolin-redis","javaguide","doocs-advanced-java"], id: "redis-lock", zh: "分布式锁", en: "Distributed Lock", area: "coordination", difficulty: "medium", explanation: ["核心概念：分布式锁（Distributed Lock）聚焦分布式锁是Redis体系中的关键知识点。Redis 围绕内存数据结构、单线程事件循环、持久化、复制和缓存治理提供高性能数据服务；理解它时先抓住分布式锁、Lua 原子性和过期释放，再看输入、状态变化、输出结果和失败分支。","适用场景：分布式锁常用于跨进程互斥、防重复执行和库存扣减保护。学习时把它放回Redis链路中观察，并结合前置知识String判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，分布式锁通常会和SET NX EX和Redlock一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点需要结合流程和指标判断。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认分布式锁、Lua 原子性和过期释放是否仍然成立。","常见误区与注意点：实践中容易把分布式锁当成孤立概念处理，结果遗漏锁超时、误删、续期、时钟漂移和 Redlock 取舍。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考Redis 官方文档、Redis Commands、小林 coding、JavaGuide 和 doocs advanced-java，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["分布式锁适合什么使用场景","分布式锁可能带来哪些性能或一致性问题","分布式锁线上如何排查和治理"], useCases: ["跨进程互斥","防重复执行","库存扣减保护"], prerequisites: ["redis-string"], related: ["set-nx-ex","redlock"], commonIssues: ["锁误删","业务执行超过锁过期时间"] },
  /* <!-- KG_EXPLAINED: SET NX EX | 2026-05-23 | source_count=5 --> */
  { sourceRefs: ["redis-docs","redis-commands","xiaolin-redis","javaguide","doocs-advanced-java"], id: "set-nx-ex", zh: "SET NX EX", en: "SET NX EX", area: "coordination", difficulty: "medium", explanation: ["核心概念：SET NX EX聚焦SET NX EX是Redis体系中的关键知识点。Redis 围绕内存数据结构、单线程事件循环、持久化、复制和缓存治理提供高性能数据服务；理解它时先抓住分布式锁、Lua 原子性和过期释放，再看输入、状态变化、输出结果和失败分支。","适用场景：SET NX EX常用于原子加锁并设置过期时间。学习时把它放回Redis链路中观察，并结合前置知识分布式锁判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，SET NX EX通常会和Lua 解锁一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点需要结合流程和指标判断。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认分布式锁、Lua 原子性和过期释放是否仍然成立。","常见误区与注意点：实践中容易把SET NX EX当成孤立概念处理，结果遗漏锁超时、误删、续期、时钟漂移和 Redlock 取舍。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考Redis 官方文档、Redis Commands、小林 coding、JavaGuide 和 doocs advanced-java，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["SET NX EX适合什么使用场景","SET NX EX可能带来哪些性能或一致性问题","SET NX EX线上如何排查和治理"], useCases: ["原子加锁并设置过期时间"], prerequisites: ["redis-lock"], related: ["lua-unlock"], commonIssues: ["过期时间设置过短","客户端崩溃后锁释放语义"] },
  /* <!-- KG_EXPLAINED: Lua 解锁 | 2026-05-23 | source_count=5 --> */
  { sourceRefs: ["redis-docs","redis-commands","xiaolin-redis","javaguide","doocs-advanced-java"], id: "lua-unlock", zh: "Lua 解锁", en: "Lua Unlock", area: "coordination", difficulty: "medium", explanation: ["核心概念：Lua 解锁（Lua Unlock）聚焦Lua 解锁是Redis体系中的关键知识点。Redis 围绕内存数据结构、单线程事件循环、持久化、复制和缓存治理提供高性能数据服务；理解它时先抓住分布式锁、Lua 原子性和过期释放，再看输入、状态变化、输出结果和失败分支。","适用场景：Lua 解锁常用于校验锁值并原子删除锁。学习时把它放回Redis链路中观察，并结合前置知识SET NX EX判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，Lua 解锁通常会和Redlock一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点需要结合流程和指标判断。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认分布式锁、Lua 原子性和过期释放是否仍然成立。","常见误区与注意点：实践中容易把Lua 解锁当成孤立概念处理，结果遗漏锁超时、误删、续期、时钟漂移和 Redlock 取舍。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考Redis 官方文档、Redis Commands、小林 coding、JavaGuide 和 doocs advanced-java，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["Lua 解锁适合什么使用场景","Lua 解锁可能带来哪些性能或一致性问题","Lua 解锁线上如何排查和治理"], useCases: ["校验锁值并原子删除锁"], prerequisites: ["set-nx-ex"], related: ["redlock"], commonIssues: ["直接 DEL 误删他人锁","锁 value 未使用唯一标识"] },
  /* <!-- KG_EXPLAINED: Redlock | 2026-05-23 | source_count=5 --> */
  { sourceRefs: ["redis-docs","redis-commands","xiaolin-redis","javaguide","doocs-advanced-java"], id: "redlock", zh: "Redlock", en: "Redlock", area: "coordination", difficulty: "hard", explanation: ["核心概念：Redlock聚焦Redlock是Redis体系中的关键知识点。Redis 围绕内存数据结构、单线程事件循环、持久化、复制和缓存治理提供高性能数据服务；理解它时先抓住分布式锁、Lua 原子性和过期释放，再看输入、状态变化、输出结果和失败分支。","适用场景：Redlock常用于多 Redis 节点下的分布式锁方案。学习时把它放回Redis链路中观察，并结合前置知识分布式锁和主从复制判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，Redlock通常会和集群一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点风险和细节较多。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认分布式锁、Lua 原子性和过期释放是否仍然成立。","常见误区与注意点：实践中容易把Redlock当成孤立概念处理，结果遗漏锁超时、误删、续期、时钟漂移和 Redlock 取舍。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考Redis 官方文档、Redis Commands、小林 coding、JavaGuide 和 doocs advanced-java，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["Redlock适合什么使用场景","Redlock可能带来哪些性能或一致性问题","Redlock线上如何排查和治理"], useCases: ["多 Redis 节点下的分布式锁方案"], prerequisites: ["redis-lock","redis-replication"], related: ["redis-cluster"], commonIssues: ["时钟漂移","网络分区下的安全性争议"] },
  /* <!-- KG_EXPLAINED: 发布订阅 | 2026-05-23 | source_count=5 --> */
  { sourceRefs: ["redis-docs","redis-commands","xiaolin-redis","javaguide","doocs-advanced-java"], id: "redis-pubsub", zh: "发布订阅", en: "Pub/Sub", area: "messaging", difficulty: "easy", explanation: ["核心概念：发布订阅（Pub/Sub）聚焦发布订阅是Redis体系中的关键知识点。Redis 围绕内存数据结构、单线程事件循环、持久化、复制和缓存治理提供高性能数据服务；理解它时先抓住发布订阅、Stream、消费组和确认语义，再看输入、状态变化、输出结果和失败分支。","适用场景：发布订阅常用于实时通知、简单广播和配置变更推送。学习时把它放回Redis链路中观察，并结合前置知识Redis 概览判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，发布订阅通常会和Stream一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点适合先掌握主流程。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认发布订阅、Stream、消费组和确认语义是否仍然成立。","常见误区与注意点：实践中容易把发布订阅当成孤立概念处理，结果遗漏消息丢失、重复消费、积压、ACK 和消费者故障。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考Redis 官方文档、Redis Commands、小林 coding、JavaGuide 和 doocs advanced-java，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["发布订阅适合什么使用场景","发布订阅可能带来哪些性能或一致性问题","发布订阅线上如何排查和治理"], useCases: ["实时通知","简单广播","配置变更推送"], prerequisites: ["redis-overview"], related: ["redis-stream"], commonIssues: ["消息不持久化","消费者离线丢消息"] },
  /* <!-- KG_EXPLAINED: 消息确认 | 2026-05-23 | source_count=5 --> */
  { sourceRefs: ["redis-docs","redis-commands","xiaolin-redis","javaguide","doocs-advanced-java"], id: "redis-ack", zh: "消息确认", en: "Message Acknowledgement", area: "messaging", difficulty: "medium", explanation: ["核心概念：消息确认（Message Acknowledgement）聚焦消息确认是Redis体系中的关键知识点。Redis 围绕内存数据结构、单线程事件循环、持久化、复制和缓存治理提供高性能数据服务；理解它时先抓住发布订阅、Stream、消费组和确认语义，再看输入、状态变化、输出结果和失败分支。","适用场景：消息确认常用于Stream 消费可靠性和消费失败重试。学习时把它放回Redis链路中观察，并结合前置知识Stream和消费组判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，消息确认通常会和发布订阅一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点需要结合流程和指标判断。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认发布订阅、Stream、消费组和确认语义是否仍然成立。","常见误区与注意点：实践中容易把消息确认当成孤立概念处理，结果遗漏消息丢失、重复消费、积压、ACK 和消费者故障。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考Redis 官方文档、Redis Commands、小林 coding、JavaGuide 和 doocs advanced-java，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["消息确认适合什么使用场景","消息确认可能带来哪些性能或一致性问题","消息确认线上如何排查和治理"], useCases: ["Stream 消费可靠性","消费失败重试"], prerequisites: ["redis-stream","consumer-group"], related: ["redis-pubsub"], commonIssues: ["ack 遗漏","pending list 堆积"] },
  /* <!-- KG_EXPLAINED: 主从复制 | 2026-05-23 | source_count=5 --> */
  { sourceRefs: ["redis-docs","redis-commands","xiaolin-redis","javaguide","doocs-advanced-java"], id: "redis-replication", zh: "主从复制", en: "Master Replica Replication", area: "high-availability", difficulty: "medium", explanation: ["核心概念：主从复制（Master Replica Replication）聚焦主从复制是Redis体系中的关键知识点。Redis 围绕内存数据结构、单线程事件循环、持久化、复制和缓存治理提供高性能数据服务；理解它时先抓住复制、哨兵、故障转移和延迟，再看输入、状态变化、输出结果和失败分支。","适用场景：主从复制常用于读写分离、数据冗余和故障恢复基础。学习时把它放回Redis链路中观察，并结合前置知识持久化判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，主从复制通常会和全量同步、部分同步和复制延迟一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点需要结合流程和指标判断。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认复制、哨兵、故障转移和延迟是否仍然成立。","常见误区与注意点：实践中容易把主从复制当成孤立概念处理，结果遗漏脑裂、复制积压、全量同步、法定票数和数据丢失窗口。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考Redis 官方文档、Redis Commands、小林 coding、JavaGuide 和 doocs advanced-java，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["主从复制适合什么使用场景","主从复制可能带来哪些性能或一致性问题","主从复制线上如何排查和治理"], useCases: ["读写分离","数据冗余","故障恢复基础"], prerequisites: ["redis-persistence"], related: ["full-sync","partial-sync","replication-lag"], commonIssues: ["复制延迟","主从数据短暂不一致"] },
  /* <!-- KG_EXPLAINED: 全量同步 | 2026-05-23 | source_count=5 --> */
  { sourceRefs: ["redis-docs","redis-commands","xiaolin-redis","javaguide","doocs-advanced-java"], id: "full-sync", zh: "全量同步", en: "Full Synchronization", area: "high-availability", difficulty: "medium", explanation: ["核心概念：全量同步（Full Synchronization）聚焦全量同步是Redis体系中的关键知识点。Redis 围绕内存数据结构、单线程事件循环、持久化、复制和缓存治理提供高性能数据服务；理解它时先抓住复制、哨兵、故障转移和延迟，再看输入、状态变化、输出结果和失败分支。","适用场景：全量同步常用于新从节点首次同步主节点数据。学习时把它放回Redis链路中观察，并结合前置知识主从复制和RDB判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，全量同步通常会和部分同步一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点需要结合流程和指标判断。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认复制、哨兵、故障转移和延迟是否仍然成立。","常见误区与注意点：实践中容易把全量同步当成孤立概念处理，结果遗漏脑裂、复制积压、全量同步、法定票数和数据丢失窗口。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考Redis 官方文档、Redis Commands、小林 coding、JavaGuide 和 doocs advanced-java，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["全量同步适合什么使用场景","全量同步可能带来哪些性能或一致性问题","全量同步线上如何排查和治理"], useCases: ["新从节点首次同步主节点数据"], prerequisites: ["redis-replication","rdb"], related: ["partial-sync"], commonIssues: ["网络和磁盘压力","大实例同步耗时"] },
  /* <!-- KG_EXPLAINED: 部分同步 | 2026-05-23 | source_count=5 --> */
  { sourceRefs: ["redis-docs","redis-commands","xiaolin-redis","javaguide","doocs-advanced-java"], id: "partial-sync", zh: "部分同步", en: "Partial Synchronization", area: "high-availability", difficulty: "medium", explanation: ["核心概念：部分同步（Partial Synchronization）聚焦部分同步是Redis体系中的关键知识点。Redis 围绕内存数据结构、单线程事件循环、持久化、复制和缓存治理提供高性能数据服务；理解它时先抓住复制、哨兵、故障转移和延迟，再看输入、状态变化、输出结果和失败分支。","适用场景：部分同步常用于短暂断线后增量追赶复制数据。学习时把它放回Redis链路中观察，并结合前置知识主从复制判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，部分同步通常会和复制积压缓冲区一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点需要结合流程和指标判断。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认复制、哨兵、故障转移和延迟是否仍然成立。","常见误区与注意点：实践中容易把部分同步当成孤立概念处理，结果遗漏脑裂、复制积压、全量同步、法定票数和数据丢失窗口。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考Redis 官方文档、Redis Commands、小林 coding、JavaGuide 和 doocs advanced-java，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["部分同步适合什么使用场景","部分同步可能带来哪些性能或一致性问题","部分同步线上如何排查和治理"], useCases: ["短暂断线后增量追赶复制数据"], prerequisites: ["redis-replication"], related: ["replication-backlog"], commonIssues: ["复制积压缓冲区不足导致退化为全量同步"] },
  /* <!-- KG_EXPLAINED: 复制积压缓冲区 | 2026-05-23 | source_count=5 --> */
  { sourceRefs: ["redis-docs","redis-commands","xiaolin-redis","javaguide","doocs-advanced-java"], id: "replication-backlog", zh: "复制积压缓冲区", en: "Replication Backlog", area: "high-availability", difficulty: "hard", explanation: ["核心概念：复制积压缓冲区（Replication Backlog）聚焦复制积压缓冲区是Redis体系中的关键知识点。Redis 围绕内存数据结构、单线程事件循环、持久化、复制和缓存治理提供高性能数据服务；理解它时先抓住复制、哨兵、故障转移和延迟，再看输入、状态变化、输出结果和失败分支。","适用场景：复制积压缓冲区常用于支持从节点断线后增量同步。学习时把它放回Redis链路中观察，并结合前置知识部分同步判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，复制积压缓冲区通常会和复制延迟一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点风险和细节较多。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认复制、哨兵、故障转移和延迟是否仍然成立。","常见误区与注意点：实践中容易把复制积压缓冲区当成孤立概念处理，结果遗漏脑裂、复制积压、全量同步、法定票数和数据丢失窗口。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考Redis 官方文档、Redis Commands、小林 coding、JavaGuide 和 doocs advanced-java，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["复制积压缓冲区适合什么使用场景","复制积压缓冲区可能带来哪些性能或一致性问题","复制积压缓冲区线上如何排查和治理"], useCases: ["支持从节点断线后增量同步"], prerequisites: ["partial-sync"], related: ["replication-lag"], commonIssues: ["backlog 太小","高写入场景下追不上主库"] },
  /* <!-- KG_EXPLAINED: 复制延迟 | 2026-05-23 | source_count=5 --> */
  { sourceRefs: ["redis-docs","redis-commands","xiaolin-redis","javaguide","doocs-advanced-java"], id: "replication-lag", zh: "复制延迟", en: "Replication Lag", area: "high-availability", difficulty: "medium", explanation: ["核心概念：复制延迟（Replication Lag）聚焦复制延迟是Redis体系中的关键知识点。Redis 围绕内存数据结构、单线程事件循环、持久化、复制和缓存治理提供高性能数据服务；理解它时先抓住复制、哨兵、故障转移和延迟，再看输入、状态变化、输出结果和失败分支。","适用场景：复制延迟常用于评估读从库的一致性风险。学习时把它放回Redis链路中观察，并结合前置知识主从复制判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，复制延迟通常会和哨兵一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点需要结合流程和指标判断。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认复制、哨兵、故障转移和延迟是否仍然成立。","常见误区与注意点：实践中容易把复制延迟当成孤立概念处理，结果遗漏脑裂、复制积压、全量同步、法定票数和数据丢失窗口。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考Redis 官方文档、Redis Commands、小林 coding、JavaGuide 和 doocs advanced-java，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["复制延迟适合什么使用场景","复制延迟可能带来哪些性能或一致性问题","复制延迟线上如何排查和治理"], useCases: ["评估读从库的一致性风险"], prerequisites: ["redis-replication"], related: ["redis-sentinel"], commonIssues: ["读到旧数据","故障切换丢失最新写入"] },
  /* <!-- KG_EXPLAINED: 哨兵 | 2026-05-23 | source_count=5 --> */
  { sourceRefs: ["redis-docs","redis-commands","xiaolin-redis","javaguide","doocs-advanced-java"], id: "redis-sentinel", zh: "哨兵", en: "Redis Sentinel", area: "high-availability", difficulty: "medium", explanation: ["核心概念：哨兵（Redis Sentinel）聚焦哨兵是Redis体系中的关键知识点。Redis 围绕内存数据结构、单线程事件循环、持久化、复制和缓存治理提供高性能数据服务；理解它时先抓住复制、哨兵、故障转移和延迟，再看输入、状态变化、输出结果和失败分支。","适用场景：哨兵常用于监控主从、自动故障转移和服务发现。学习时把它放回Redis链路中观察，并结合前置知识主从复制判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，哨兵通常会和哨兵故障转移和哨兵法定票数一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点需要结合流程和指标判断。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认复制、哨兵、故障转移和延迟是否仍然成立。","常见误区与注意点：实践中容易把哨兵当成孤立概念处理，结果遗漏脑裂、复制积压、全量同步、法定票数和数据丢失窗口。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考Redis 官方文档、Redis Commands、小林 coding、JavaGuide 和 doocs advanced-java，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["哨兵适合什么使用场景","哨兵可能带来哪些性能或一致性问题","哨兵线上如何排查和治理"], useCases: ["监控主从","自动故障转移","服务发现"], prerequisites: ["redis-replication"], related: ["sentinel-failover","quorum"], commonIssues: ["误判主观下线","切换期间短暂不可用"] },
  /* <!-- KG_EXPLAINED: 哨兵故障转移 | 2026-05-23 | source_count=5 --> */
  { sourceRefs: ["redis-docs","redis-commands","xiaolin-redis","javaguide","doocs-advanced-java"], id: "sentinel-failover", zh: "哨兵故障转移", en: "Sentinel Failover", area: "high-availability", difficulty: "hard", explanation: ["核心概念：哨兵故障转移（Sentinel Failover）聚焦哨兵故障转移是Redis体系中的关键知识点。Redis 围绕内存数据结构、单线程事件循环、持久化、复制和缓存治理提供高性能数据服务；理解它时先抓住复制、哨兵、故障转移和延迟，再看输入、状态变化、输出结果和失败分支。","适用场景：哨兵故障转移常用于主节点故障后选举新主节点。学习时把它放回Redis链路中观察，并结合前置知识哨兵判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，哨兵故障转移通常会和哨兵法定票数一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点风险和细节较多。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认复制、哨兵、故障转移和延迟是否仍然成立。","常见误区与注意点：实践中容易把哨兵故障转移当成孤立概念处理，结果遗漏脑裂、复制积压、全量同步、法定票数和数据丢失窗口。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考Redis 官方文档、Redis Commands、小林 coding、JavaGuide 和 doocs advanced-java，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["哨兵故障转移适合什么使用场景","哨兵故障转移可能带来哪些性能或一致性问题","哨兵故障转移线上如何排查和治理"], useCases: ["主节点故障后选举新主节点"], prerequisites: ["redis-sentinel"], related: ["quorum"], commonIssues: ["脑裂","客户端未及时刷新主节点地址"] },
  /* <!-- KG_EXPLAINED: 哨兵法定票数 | 2026-05-23 | source_count=5 --> */
  { sourceRefs: ["redis-docs","redis-commands","xiaolin-redis","javaguide","doocs-advanced-java"], id: "quorum", zh: "哨兵法定票数", en: "Sentinel Quorum", area: "high-availability", difficulty: "medium", explanation: ["核心概念：哨兵法定票数（Sentinel Quorum）聚焦哨兵法定票数是Redis体系中的关键知识点。Redis 围绕内存数据结构、单线程事件循环、持久化、复制和缓存治理提供高性能数据服务；理解它时先抓住复制、哨兵、故障转移和延迟，再看输入、状态变化、输出结果和失败分支。","适用场景：哨兵法定票数常用于控制故障判断和切换条件。学习时把它放回Redis链路中观察，并结合前置知识哨兵判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，哨兵法定票数通常会和哨兵故障转移一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点需要结合流程和指标判断。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认复制、哨兵、故障转移和延迟是否仍然成立。","常见误区与注意点：实践中容易把哨兵法定票数当成孤立概念处理，结果遗漏脑裂、复制积压、全量同步、法定票数和数据丢失窗口。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考Redis 官方文档、Redis Commands、小林 coding、JavaGuide 和 doocs advanced-java，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["哨兵法定票数适合什么使用场景","哨兵法定票数可能带来哪些性能或一致性问题","哨兵法定票数线上如何排查和治理"], useCases: ["控制故障判断和切换条件"], prerequisites: ["redis-sentinel"], related: ["sentinel-failover"], commonIssues: ["票数设置不合理","少量节点故障导致无法切换"] },
  /* <!-- KG_EXPLAINED: 集群 | 2026-05-23 | source_count=5 --> */
  { sourceRefs: ["redis-docs","redis-commands","xiaolin-redis","javaguide","doocs-advanced-java"], id: "redis-cluster", zh: "集群", en: "Redis Cluster", area: "cluster", difficulty: "hard", explanation: ["核心概念：集群（Redis Cluster）聚焦集群是Redis体系中的关键知识点。Redis 围绕内存数据结构、单线程事件循环、持久化、复制和缓存治理提供高性能数据服务；理解它时先抓住哈希槽、分片路由和槽位迁移，再看输入、状态变化、输出结果和失败分支。","适用场景：集群常用于水平扩展容量、分片存储和高可用。学习时把它放回Redis链路中观察，并结合前置知识主从复制和哨兵判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，集群通常会和哈希槽和槽位迁移一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点风险和细节较多。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认哈希槽、分片路由和槽位迁移是否仍然成立。","常见误区与注意点：实践中容易把集群当成孤立概念处理，结果遗漏MOVED/ASK、Key Tag、多 Key 操作和重分片影响。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考Redis 官方文档、Redis Commands、小林 coding、JavaGuide 和 doocs advanced-java，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["集群适合什么使用场景","集群可能带来哪些性能或一致性问题","集群线上如何排查和治理"], useCases: ["水平扩展容量","分片存储","高可用"], prerequisites: ["redis-replication","redis-sentinel"], related: ["hash-slot","resharding"], commonIssues: ["跨槽命令限制","客户端路由复杂"] },
  /* <!-- KG_EXPLAINED: 哈希槽 | 2026-05-23 | source_count=5 --> */
  { sourceRefs: ["redis-docs","redis-commands","xiaolin-redis","javaguide","doocs-advanced-java"], id: "hash-slot", zh: "哈希槽", en: "Hash Slot", area: "cluster", difficulty: "medium", explanation: ["核心概念：哈希槽（Hash Slot）聚焦哈希槽是Redis体系中的关键知识点。Redis 围绕内存数据结构、单线程事件循环、持久化、复制和缓存治理提供高性能数据服务；理解它时先抓住哈希槽、分片路由和槽位迁移，再看输入、状态变化、输出结果和失败分支。","适用场景：哈希槽常用于把 key 映射到 16384 个槽位并分布到节点。学习时把它放回Redis链路中观察，并结合前置知识集群判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，哈希槽通常会和Key Tag一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点需要结合流程和指标判断。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认哈希槽、分片路由和槽位迁移是否仍然成立。","常见误区与注意点：实践中容易把哈希槽当成孤立概念处理，结果遗漏MOVED/ASK、Key Tag、多 Key 操作和重分片影响。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考Redis 官方文档、Redis Commands、小林 coding、JavaGuide 和 doocs advanced-java，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["哈希槽适合什么使用场景","哈希槽可能带来哪些性能或一致性问题","哈希槽线上如何排查和治理"], useCases: ["把 key 映射到 16384 个槽位并分布到节点"], prerequisites: ["redis-cluster"], related: ["key-tag"], commonIssues: ["槽位分布不均","热点槽位"] },
  /* <!-- KG_EXPLAINED: Key Tag | 2026-05-23 | source_count=5 --> */
  { sourceRefs: ["redis-docs","redis-commands","xiaolin-redis","javaguide","doocs-advanced-java"], id: "key-tag", zh: "Key Tag", en: "Key Tag", area: "cluster", difficulty: "medium", explanation: ["核心概念：Key Tag聚焦Key Tag是Redis体系中的关键知识点。Redis 围绕内存数据结构、单线程事件循环、持久化、复制和缓存治理提供高性能数据服务；理解它时先抓住哈希槽、分片路由和槽位迁移，再看输入、状态变化、输出结果和失败分支。","适用场景：Key Tag常用于让多个 key 落到同一个槽位以支持多 key 操作。学习时把它放回Redis链路中观察，并结合前置知识哈希槽判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，Key Tag通常会和集群一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点需要结合流程和指标判断。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认哈希槽、分片路由和槽位迁移是否仍然成立。","常见误区与注意点：实践中容易把Key Tag当成孤立概念处理，结果遗漏MOVED/ASK、Key Tag、多 Key 操作和重分片影响。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考Redis 官方文档、Redis Commands、小林 coding、JavaGuide 和 doocs advanced-java，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["Key Tag适合什么使用场景","Key Tag可能带来哪些性能或一致性问题","Key Tag线上如何排查和治理"], useCases: ["让多个 key 落到同一个槽位以支持多 key 操作"], prerequisites: ["hash-slot"], related: ["redis-cluster"], commonIssues: ["滥用导致槽位热点","命名规范混乱"] },
  /* <!-- KG_EXPLAINED: 槽位迁移 | 2026-05-23 | source_count=5 --> */
  { sourceRefs: ["redis-docs","redis-commands","xiaolin-redis","javaguide","doocs-advanced-java"], id: "resharding", zh: "槽位迁移", en: "Resharding", area: "cluster", difficulty: "hard", explanation: ["核心概念：槽位迁移（Resharding）聚焦槽位迁移是Redis体系中的关键知识点。Redis 围绕内存数据结构、单线程事件循环、持久化、复制和缓存治理提供高性能数据服务；理解它时先抓住哈希槽、分片路由和槽位迁移，再看输入、状态变化、输出结果和失败分支。","适用场景：槽位迁移常用于扩容、缩容和负载均衡。学习时把它放回Redis链路中观察，并结合前置知识哈希槽判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，槽位迁移通常会和MOVED 与 ASK一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点风险和细节较多。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认哈希槽、分片路由和槽位迁移是否仍然成立。","常见误区与注意点：实践中容易把槽位迁移当成孤立概念处理，结果遗漏MOVED/ASK、Key Tag、多 Key 操作和重分片影响。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考Redis 官方文档、Redis Commands、小林 coding、JavaGuide 和 doocs advanced-java，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["槽位迁移适合什么使用场景","槽位迁移可能带来哪些性能或一致性问题","槽位迁移线上如何排查和治理"], useCases: ["扩容","缩容","负载均衡"], prerequisites: ["hash-slot"], related: ["moved-ask"], commonIssues: ["迁移期间延迟抖动","客户端重定向处理异常"] },
  /* <!-- KG_EXPLAINED: MOVED 与 ASK | 2026-05-23 | source_count=5 --> */
  { sourceRefs: ["redis-docs","redis-commands","xiaolin-redis","javaguide","doocs-advanced-java"], id: "moved-ask", zh: "MOVED 与 ASK", en: "MOVED and ASK Redirection", area: "cluster", difficulty: "hard", explanation: ["核心概念：MOVED 与 ASK（MOVED and ASK Redirection）聚焦MOVED 与 ASK是Redis体系中的关键知识点。Redis 围绕内存数据结构、单线程事件循环、持久化、复制和缓存治理提供高性能数据服务；理解它时先抓住哈希槽、分片路由和槽位迁移，再看输入、状态变化、输出结果和失败分支。","适用场景：MOVED 与 ASK常用于客户端定位正确槽位节点和处理迁移中请求。学习时把它放回Redis链路中观察，并结合前置知识集群和槽位迁移判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，MOVED 与 ASK通常会和哈希槽一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点风险和细节较多。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认哈希槽、分片路由和槽位迁移是否仍然成立。","常见误区与注意点：实践中容易把MOVED 与 ASK当成孤立概念处理，结果遗漏MOVED/ASK、Key Tag、多 Key 操作和重分片影响。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考Redis 官方文档、Redis Commands、小林 coding、JavaGuide 和 doocs advanced-java，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["MOVED 与 ASK适合什么使用场景","MOVED 与 ASK可能带来哪些性能或一致性问题","MOVED 与 ASK线上如何排查和治理"], useCases: ["客户端定位正确槽位节点","处理迁移中请求"], prerequisites: ["redis-cluster","resharding"], related: ["hash-slot"], commonIssues: ["客户端槽位缓存过期","重定向风暴"] },
  /* <!-- KG_EXPLAINED: 慢查询日志 | 2026-05-23 | source_count=5 --> */
  { sourceRefs: ["redis-docs","redis-commands","xiaolin-redis","javaguide","doocs-advanced-java"], id: "slowlog", zh: "慢查询日志", en: "Slow Log", area: "observability", difficulty: "easy", explanation: ["核心概念：慢查询日志（Slow Log）聚焦慢查询日志是Redis体系中的关键知识点。Redis 围绕内存数据结构、单线程事件循环、持久化、复制和缓存治理提供高性能数据服务；理解它时先抓住慢查询、监控指标和运行状态，再看输入、状态变化、输出结果和失败分支。","适用场景：慢查询日志常用于定位慢命令和性能排查。学习时把它放回Redis链路中观察，并结合前置知识Redis 常用命令判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，慢查询日志通常会和Redis 监控和大 Key一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点适合先掌握主流程。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认慢查询、监控指标和运行状态是否仍然成立。","常见误区与注意点：实践中容易把慢查询日志当成孤立概念处理，结果遗漏采样盲区、指标滞后、监控命令开销和告警阈值。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考Redis 官方文档、Redis Commands、小林 coding、JavaGuide 和 doocs advanced-java，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["慢查询日志适合什么使用场景","慢查询日志可能带来哪些性能或一致性问题","慢查询日志线上如何排查和治理"], useCases: ["定位慢命令","性能排查"], prerequisites: ["redis-command"], related: ["redis-monitor","big-key"], commonIssues: ["阈值设置过高","只记录命令执行时间不含网络时间"] },
  /* <!-- KG_EXPLAINED: Redis 监控 | 2026-05-23 | source_count=5 --> */
  { sourceRefs: ["redis-docs","redis-commands","xiaolin-redis","javaguide","doocs-advanced-java"], id: "redis-monitor", zh: "Redis 监控", en: "Redis Monitoring", area: "observability", difficulty: "medium", explanation: ["核心概念：Redis 监控（Redis Monitoring）聚焦Redis 监控是Redis体系中的关键知识点。Redis 围绕内存数据结构、单线程事件循环、持久化、复制和缓存治理提供高性能数据服务；理解它时先抓住慢查询、监控指标和运行状态，再看输入、状态变化、输出结果和失败分支。","适用场景：Redis 监控常用于观察 QPS、内存、延迟、连接数和复制状态。学习时把它放回Redis链路中观察，并结合前置知识Redis 概览判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，Redis 监控通常会和慢查询日志和热 Key一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点需要结合流程和指标判断。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认慢查询、监控指标和运行状态是否仍然成立。","常见误区与注意点：实践中容易把Redis 监控当成孤立概念处理，结果遗漏采样盲区、指标滞后、监控命令开销和告警阈值。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考Redis 官方文档、Redis Commands、小林 coding、JavaGuide 和 doocs advanced-java，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["Redis 监控适合什么使用场景","Redis 监控可能带来哪些性能或一致性问题","Redis 监控线上如何排查和治理"], useCases: ["观察 QPS、内存、延迟、连接数和复制状态"], prerequisites: ["redis-overview"], related: ["slowlog","hot-key"], commonIssues: ["指标缺失","告警阈值不合理"] },
  /* <!-- KG_EXPLAINED: 负载均衡 | 2026-05-23 | source_count=5 --> */
  { sourceRefs: ["redis-docs","redis-commands","xiaolin-redis","javaguide","doocs-advanced-java"], id: "load-balancing", zh: "负载均衡", en: "Load Balancing", area: "operations", difficulty: "medium", explanation: ["核心概念：负载均衡（Load Balancing）聚焦负载均衡是Redis体系中的关键知识点。Redis 围绕内存数据结构、单线程事件循环、持久化、复制和缓存治理提供高性能数据服务；理解它时先抓住负载、限流、容量和故障演练，再看输入、状态变化、输出结果和失败分支。","适用场景：负载均衡常用于分散读请求和治理热点访问。学习时把它放回Redis链路中观察，并结合前置知识主从复制和热 Key判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，负载均衡通常会和集群一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点需要结合流程和指标判断。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认负载、限流、容量和故障演练是否仍然成立。","常见误区与注意点：实践中容易把负载均衡当成孤立概念处理，结果遗漏变更风险、回滚、连接风暴和客户端配置。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考Redis 官方文档、Redis Commands、小林 coding、JavaGuide 和 doocs advanced-java，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["负载均衡适合什么使用场景","负载均衡可能带来哪些性能或一致性问题","负载均衡线上如何排查和治理"], useCases: ["分散读请求","治理热点访问"], prerequisites: ["redis-replication","hot-key"], related: ["redis-cluster"], commonIssues: ["读写一致性","客户端路由策略复杂"] },
] satisfies GraphKnowledgePoint[];

const redisKnowledgePointOverrides: Record<string, Partial<GraphKnowledgePoint>> = {
  "redis-overview": {
    order: 1,
    related: ["redis-command", "redis-data-types", "redis-cache"],
  },
  "redis-command": {
    order: 2,
    prerequisites: ["redis-overview"],
    related: ["redis-cli", "slowlog"],
  },
  "redis-cli": {
    order: 3,
    prerequisites: ["redis-command"],
    related: ["redis-monitor", "slowlog"],
  },
  "redis-data-types": {
    order: 4,
    prerequisites: ["redis-overview"],
    related: ["redis-string", "redis-hash", "redis-list", "redis-set", "redis-zset"],
  },
  "redis-string": {
    order: 5,
    prerequisites: ["redis-data-types"],
    related: ["redis-lock", "expire-policy"],
  },
  "redis-hash": {
    order: 6,
    prerequisites: ["redis-data-types"],
    related: ["redis-string", "big-key"],
  },
  "redis-list": {
    order: 7,
    prerequisites: ["redis-data-types"],
    related: ["redis-stream", "redis-pubsub"],
  },
  "redis-set": {
    order: 8,
    prerequisites: ["redis-data-types"],
    related: ["redis-zset", "bitmap"],
  },
  "redis-zset": {
    order: 9,
    prerequisites: ["redis-data-types"],
    related: ["redis-list", "geo"],
  },
  "redis-persistence": {
    order: 10,
    prerequisites: ["redis-overview"],
    related: ["rdb", "aof"],
  },
  "rdb": {
    order: 11,
    prerequisites: ["redis-persistence"],
    related: ["aof", "fork-cow"],
  },
  "aof": {
    order: 12,
    prerequisites: ["redis-persistence"],
    related: ["aof-rewrite", "rdb"],
  },
  "aof-rewrite": {
    order: 13,
    prerequisites: ["aof"],
    related: ["fork-cow"],
  },
  "fork-cow": {
    order: 14,
    prerequisites: ["redis-persistence"],
    related: ["rdb", "aof-rewrite", "big-key"],
  },
  "expire-policy": {
    order: 15,
    prerequisites: ["redis-string"],
    related: ["lazy-expire", "active-expire"],
  },
  "lazy-expire": {
    order: 16,
    prerequisites: ["expire-policy"],
    related: ["active-expire"],
  },
  "active-expire": {
    order: 17,
    prerequisites: ["expire-policy"],
    related: ["expire-storm"],
  },
  "eviction-policy": {
    order: 18,
    prerequisites: ["redis-memory"],
    related: ["lru", "lfu"],
  },
  "redis-memory": {
    order: 19,
    prerequisites: ["redis-overview"],
    related: ["eviction-policy", "big-key", "hot-key"],
  },
  "big-key": {
    order: 20,
    prerequisites: ["redis-memory"],
    related: ["slowlog", "fork-cow"],
  },
  "hot-key": {
    order: 21,
    prerequisites: ["redis-memory"],
    related: ["cache-breakdown", "load-balancing"],
  },
  "redis-cache": {
    order: 22,
    prerequisites: ["redis-overview"],
    related: ["cache-aside", "cache-consistency"],
  },
  "cache-aside": {
    order: 23,
    prerequisites: ["redis-cache"],
    related: ["cache-consistency"],
  },
  "cache-consistency": {
    order: 24,
    prerequisites: ["cache-aside"],
    related: ["delayed-double-delete"],
  },
  "cache-penetration": {
    order: 25,
    prerequisites: ["redis-cache"],
    related: ["bloom-filter", "null-cache"],
  },
  "bloom-filter": {
    order: 26,
    prerequisites: ["cache-penetration"],
    related: ["null-cache"],
  },
  "cache-breakdown": {
    order: 27,
    prerequisites: ["redis-cache"],
    related: ["mutex-rebuild", "logical-expire", "hot-key"],
  },
  "mutex-rebuild": {
    order: 28,
    prerequisites: ["cache-breakdown"],
    related: ["redis-lock"],
  },
  "cache-avalanche": {
    order: 29,
    prerequisites: ["redis-cache"],
    related: ["expire-storm", "redis-replication"],
  },
  "redis-lock": {
    order: 30,
    prerequisites: ["redis-string"],
    related: ["set-nx-ex", "lua-unlock"],
  },
  "set-nx-ex": {
    order: 31,
    prerequisites: ["redis-lock"],
    related: ["lua-unlock"],
  },
  "lua-unlock": {
    order: 32,
    prerequisites: ["redis-lock"],
    related: ["set-nx-ex"],
  },
  "redis-replication": {
    order: 33,
    prerequisites: ["redis-persistence"],
    related: ["full-sync", "partial-sync", "replication-lag"],
  },
  "full-sync": {
    order: 34,
    prerequisites: ["redis-replication", "rdb"],
    related: ["partial-sync"],
  },
  "partial-sync": {
    order: 35,
    prerequisites: ["redis-replication"],
    related: ["replication-backlog"],
  },
  "replication-lag": {
    order: 36,
    prerequisites: ["redis-replication"],
    related: ["redis-sentinel"],
  },
  "redis-sentinel": {
    order: 37,
    prerequisites: ["redis-replication"],
    related: ["sentinel-failover", "quorum"],
  },
  "sentinel-failover": {
    order: 38,
    prerequisites: ["redis-sentinel"],
    related: ["quorum"],
  },
  "redis-cluster": {
    order: 39,
    prerequisites: ["redis-replication", "redis-sentinel"],
    related: ["hash-slot", "resharding"],
  },
  "hash-slot": {
    order: 40,
    prerequisites: ["redis-cluster"],
    related: ["key-tag"],
  },
  "key-tag": {
    order: 41,
    prerequisites: ["hash-slot"],
    related: ["redis-cluster"],
  },
  "slowlog": {
    order: 42,
    prerequisites: ["redis-command"],
    related: ["redis-monitor", "big-key"],
  },
  "redis-monitor": {
    order: 43,
    prerequisites: ["redis-overview"],
    related: ["slowlog", "hot-key"],
  },
  "load-balancing": {
    order: 44,
    prerequisites: ["redis-replication", "hot-key"],
    related: ["redis-cluster"],
  },
  "expire-storm": { order: 51 },
  "lru": { order: 52 },
  "lfu": { order: 53 },
  "delayed-double-delete": { order: 54 },
  "null-cache": { order: 55 },
  "logical-expire": { order: 56 },
  "redlock": { order: 57 },
  "replication-backlog": { order: 58 },
  "quorum": { order: 59 },
  "bitmap": { order: 60 },
  "hyperloglog": { order: 61 },
  "geo": { order: 62 },
  "redis-stream": { order: 63 },
  "consumer-group": { order: 64 },
  "redis-pubsub": { order: 65 },
  "redis-ack": { order: 66 },
  "resharding": { order: 67 },
  "moved-ask": { order: 68 },
};

export const redisKnowledgePoints = redisKnowledgePointBase
  .map((point) => ({
    ...point,
    ...redisKnowledgePointOverrides[point.id],
  }))
  .sort((a, b) => (a.order ?? 0) - (b.order ?? 0)) satisfies GraphKnowledgePoint[];
