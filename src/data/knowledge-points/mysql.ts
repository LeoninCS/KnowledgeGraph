import type { GraphKnowledgePoint } from "./types.ts";

const mysqlKnowledgePointBase = [
  /* <!-- KG_REVIEWED: MySQL 概览 | 2026-06-05 | source_count=17 --> */
  /* <!-- KG_EXPLAINED: MySQL 概览 | 2026-05-23 | source_count=5 --> */
  { sourceRefs: ["mysql-reference","mysql-innodb","xiaolin-mysql","javaguide","cs-notes"], id: "mysql-overview", zh: "MySQL 概览", en: "MySQL Overview", area: "foundation", difficulty: "easy", concept: "MySQL 是常用关系型数据库，核心能力包括 SQL、事务、索引、存储引擎和复制。", explanation: ["核心概念：MySQL 概览（MySQL Overview）聚焦MySQL 是常用关系型数据库，核心能力包括 SQL、事务、索引、存储引擎和复制。。MySQL 通过 SQL、InnoDB、索引、事务、日志和复制支撑关系型数据读写；理解它时先抓住关系模型、表结构、约束和数据类型，再看输入、状态变化、输出结果和失败分支。","适用场景：MySQL 概览常用于业务数据存储、后台系统数据库和OLTP 场景。学习时把它放回MySQL链路中观察，并结合前置知识基础概念判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，MySQL 概览通常会和SQL、InnoDB和事务一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点适合先掌握主流程。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认关系模型、表结构、约束和数据类型是否仍然成立。","常见误区与注意点：实践中容易把MySQL 概览当成孤立概念处理，结果遗漏冗余、主键选择、字段范围、字符集和约束成本。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考MySQL 8.4 Reference Manual、InnoDB 官方文档、小林 coding、JavaGuide 和 CS-Notes，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["MySQL 概览执行原理是什么","MySQL 概览如何影响性能或一致性","MySQL 概览线上问题怎么排查"], useCases: ["业务数据存储","后台系统数据库","OLTP 场景"], prerequisites: [], related: ["sql","innodb","transaction"], order: 1 },
  /* <!-- KG_REVIEWED: SQL | 2026-06-05 | source_count=14 --> */
  /* <!-- KG_EXPLAINED: SQL | 2026-05-23 | source_count=5 --> */
  { sourceRefs: ["mysql-reference","mysql-innodb","xiaolin-mysql","javaguide","cs-notes"], id: "sql", zh: "SQL", en: "SQL", area: "foundation", difficulty: "easy", concept: "SQL 是关系型数据库的查询和操作语言，覆盖查询、写入、更新、删除和结构定义。", explanation: ["核心概念：SQL聚焦SQL 是关系型数据库的查询和操作语言，覆盖查询、写入、更新、删除和结构定义。。MySQL 通过 SQL、InnoDB、索引、事务、日志和复制支撑关系型数据读写；理解它时先抓住关系模型、表结构、约束和数据类型，再看输入、状态变化、输出结果和失败分支。","适用场景：SQL常用于业务查询、数据维护和报表分析。学习时把它放回MySQL链路中观察，并结合前置知识MySQL 概览判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，SQL通常会和SELECT 查询、DDL和DML一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点适合先掌握主流程。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认关系模型、表结构、约束和数据类型是否仍然成立。","常见误区与注意点：实践中容易把SQL当成孤立概念处理，结果遗漏冗余、主键选择、字段范围、字符集和约束成本。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考MySQL 8.4 Reference Manual、InnoDB 官方文档、小林 coding、JavaGuide 和 CS-Notes，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["SQL执行原理是什么","SQL如何影响性能或一致性","SQL线上问题怎么排查"], useCases: ["业务查询","数据维护","报表分析"], prerequisites: ["mysql-overview"], related: ["select","ddl","dml"], order: 2 },
  /* <!-- KG_REVIEWED: 表结构设计 | 2026-05-24 | source_count=5 --> */
  /* <!-- KG_EXPLAINED: 表结构设计 | 2026-05-23 | source_count=5 --> */
  { sourceRefs: ["mysql-reference","mysql-innodb","xiaolin-mysql","javaguide","cs-notes"], id: "schema-design", zh: "表结构设计", en: "Schema Design", area: "foundation", difficulty: "medium", concept: "表结构设计定义实体、字段、主键、约束和关系，直接影响数据质量和查询效率。", explanation: ["核心概念：表结构设计（Schema Design）聚焦表结构设计定义实体、字段、主键、约束和关系，直接影响数据质量和查询效率。。MySQL 通过 SQL、InnoDB、索引、事务、日志和复制支撑关系型数据读写；理解它时先抓住关系模型、表结构、约束和数据类型，再看输入、状态变化、输出结果和失败分支。","适用场景：表结构设计常用于业务建模、数据库初始化和重构老表。学习时把它放回MySQL链路中观察，并结合前置知识SQL判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，表结构设计通常会和范式、主键和外键一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点需要结合流程和指标判断。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认关系模型、表结构、约束和数据类型是否仍然成立。","常见误区与注意点：实践中容易把表结构设计当成孤立概念处理，结果遗漏冗余、主键选择、字段范围、字符集和约束成本。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考MySQL 8.4 Reference Manual、InnoDB 官方文档、小林 coding、JavaGuide 和 CS-Notes，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["表结构设计执行原理是什么","表结构设计如何影响性能或一致性","表结构设计线上问题怎么排查"], useCases: ["业务建模","数据库初始化","重构老表"], prerequisites: ["sql"], related: ["normalization","primary-key","foreign-key"], order: 3 },
  /* <!-- KG_REVIEWED: 范式 | 2026-05-24 | source_count=5 --> */
  /* <!-- KG_EXPLAINED: 范式 | 2026-05-23 | source_count=5 --> */
  { sourceRefs: ["mysql-reference","mysql-innodb","xiaolin-mysql","javaguide","cs-notes"], id: "normalization", zh: "范式", en: "Normalization", area: "foundation", difficulty: "medium", concept: "范式通过拆分实体和关系减少冗余，提升数据一致性。", explanation: ["核心概念：范式（Normalization）聚焦范式通过拆分实体和关系减少冗余，提升数据一致性。。MySQL 通过 SQL、InnoDB、索引、事务、日志和复制支撑关系型数据读写；理解它时先抓住关系模型、表结构、约束和数据类型，再看输入、状态变化、输出结果和失败分支。","适用场景：范式常用于订单模型设计、用户权限模型和主数据治理。学习时把它放回MySQL链路中观察，并结合前置知识表结构设计判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，范式通常会和反范式一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点需要结合流程和指标判断。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认关系模型、表结构、约束和数据类型是否仍然成立。","常见误区与注意点：实践中容易把范式当成孤立概念处理，结果遗漏冗余、主键选择、字段范围、字符集和约束成本。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考MySQL 8.4 Reference Manual、InnoDB 官方文档、小林 coding、JavaGuide 和 CS-Notes，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["范式执行原理是什么","范式如何影响性能或一致性","范式线上问题怎么排查"], useCases: ["订单模型设计","用户权限模型","主数据治理"], prerequisites: ["schema-design"], related: ["denormalization"], order: 4 },
  /* <!-- KG_REVIEWED: 反范式 | 2026-05-24 | source_count=5 --> */
  /* <!-- KG_EXPLAINED: 反范式 | 2026-05-23 | source_count=5 --> */
  { sourceRefs: ["mysql-reference","mysql-innodb","xiaolin-mysql","javaguide","cs-notes"], id: "denormalization", zh: "反范式", en: "Denormalization", area: "foundation", difficulty: "medium", concept: "反范式通过冗余字段减少关联查询，换取读取性能。", explanation: ["核心概念：反范式（Denormalization）聚焦反范式通过冗余字段减少关联查询，换取读取性能。。MySQL 通过 SQL、InnoDB、索引、事务、日志和复制支撑关系型数据读写；理解它时先抓住关系模型、表结构、约束和数据类型，再看输入、状态变化、输出结果和失败分支。","适用场景：反范式常用于高频列表查询、报表宽表和读多写少场景。学习时把它放回MySQL链路中观察，并结合前置知识范式判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，反范式通常会和SQL 优化一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点需要结合流程和指标判断。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认关系模型、表结构、约束和数据类型是否仍然成立。","常见误区与注意点：实践中容易把反范式当成孤立概念处理，结果遗漏冗余、主键选择、字段范围、字符集和约束成本。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考MySQL 8.4 Reference Manual、InnoDB 官方文档、小林 coding、JavaGuide 和 CS-Notes，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["反范式执行原理是什么","反范式如何影响性能或一致性","反范式线上问题怎么排查"], useCases: ["高频列表查询","报表宽表","读多写少场景"], prerequisites: ["normalization"], related: ["sql-optimization"], order: 5 },
  /* <!-- KG_REVIEWED: 数据类型 | 2026-05-24 | source_count=5 --> */
  /* <!-- KG_EXPLAINED: 数据类型 | 2026-05-23 | source_count=5 --> */
  { sourceRefs: ["mysql-reference","mysql-innodb","xiaolin-mysql","javaguide","cs-notes"], id: "data-type", zh: "数据类型", en: "Data Type", area: "foundation", difficulty: "easy", concept: "数据类型决定字段存储方式、范围、比较规则和索引效率。", explanation: ["核心概念：数据类型（Data Type）聚焦数据类型决定字段存储方式、范围、比较规则和索引效率。。MySQL 通过 SQL、InnoDB、索引、事务、日志和复制支撑关系型数据读写；理解它时先抓住关系模型、表结构、约束和数据类型，再看输入、状态变化、输出结果和失败分支。","适用场景：数据类型常用于字段设计、空间优化和精度控制。学习时把它放回MySQL链路中观察，并结合前置知识表结构设计判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，数据类型通常会和varchar、datetime和decimal一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点适合先掌握主流程。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认关系模型、表结构、约束和数据类型是否仍然成立。","常见误区与注意点：实践中容易把数据类型当成孤立概念处理，结果遗漏冗余、主键选择、字段范围、字符集和约束成本。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考MySQL 8.4 Reference Manual、InnoDB 官方文档、小林 coding、JavaGuide 和 CS-Notes，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["数据类型执行原理是什么","数据类型如何影响性能或一致性","数据类型线上问题怎么排查"], useCases: ["字段设计","空间优化","精度控制"], prerequisites: ["schema-design"], related: ["mysql-index","sql-optimization"], order: 6 },
  /* <!-- KG_REVIEWED: 主键 | 2026-05-24 | source_count=5 --> */
  /* <!-- KG_EXPLAINED: 主键 | 2026-05-23 | source_count=5 --> */
  { sourceRefs: ["mysql-reference","mysql-innodb","xiaolin-mysql","javaguide","cs-notes"], id: "primary-key", zh: "主键", en: "Primary Key", area: "foundation", difficulty: "easy", concept: "主键唯一标识一行数据，InnoDB 中主键决定聚簇索引组织方式。", explanation: ["核心概念：主键（Primary Key）聚焦主键唯一标识一行数据，InnoDB 中主键决定聚簇索引组织方式。。MySQL 通过 SQL、InnoDB、索引、事务、日志和复制支撑关系型数据读写；理解它时先抓住关系模型、表结构、约束和数据类型，再看输入、状态变化、输出结果和失败分支。","适用场景：主键常用于业务实体标识、关联查询和数据去重。学习时把它放回MySQL链路中观察，并结合前置知识表结构设计判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，主键通常会和聚簇索引和自增 ID一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点适合先掌握主流程。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认关系模型、表结构、约束和数据类型是否仍然成立。","常见误区与注意点：实践中容易把主键当成孤立概念处理，结果遗漏冗余、主键选择、字段范围、字符集和约束成本。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考MySQL 8.4 Reference Manual、InnoDB 官方文档、小林 coding、JavaGuide 和 CS-Notes，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["主键执行原理是什么","主键如何影响性能或一致性","主键线上问题怎么排查"], useCases: ["业务实体标识","关联查询","数据去重"], prerequisites: ["schema-design"], related: ["clustered-index","auto-increment"], order: 7 },
  /* <!-- KG_REVIEWED: 自增 ID | 2026-05-24 | source_count=5 --> */
  /* <!-- KG_EXPLAINED: 自增 ID | 2026-05-23 | source_count=5 --> */
  { sourceRefs: ["mysql-reference","mysql-innodb","xiaolin-mysql","javaguide","cs-notes"], id: "auto-increment", zh: "自增 ID", en: "Auto Increment", area: "foundation", difficulty: "easy", concept: "自增 ID 是常见主键生成方式，写入顺序稳定，适合多数 OLTP 表。", explanation: ["核心概念：自增 ID（Auto Increment）聚焦自增 ID 是常见主键生成方式，写入顺序稳定，适合多数 OLTP 表。。MySQL 通过 SQL、InnoDB、索引、事务、日志和复制支撑关系型数据读写；理解它时先抓住关系模型、表结构、约束和数据类型，再看输入、状态变化、输出结果和失败分支。","适用场景：自增 ID常用于订单表主键、用户表主键和日志表主键。学习时把它放回MySQL链路中观察，并结合前置知识主键判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，自增 ID通常会和雪花 ID一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点适合先掌握主流程。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认关系模型、表结构、约束和数据类型是否仍然成立。","常见误区与注意点：实践中容易把自增 ID当成孤立概念处理，结果遗漏冗余、主键选择、字段范围、字符集和约束成本。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考MySQL 8.4 Reference Manual、InnoDB 官方文档、小林 coding、JavaGuide 和 CS-Notes，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["自增 ID执行原理是什么","自增 ID如何影响性能或一致性","自增 ID线上问题怎么排查"], useCases: ["订单表主键","用户表主键","日志表主键"], prerequisites: ["primary-key"], related: ["snowflake-id"], order: 8 },
  /* <!-- KG_REVIEWED: 雪花 ID | 2026-05-24 | source_count=5 --> */
  /* <!-- KG_EXPLAINED: 雪花 ID | 2026-05-23 | source_count=5 --> */
  { sourceRefs: ["mysql-reference","mysql-innodb","xiaolin-mysql","javaguide","cs-notes"], id: "snowflake-id", zh: "雪花 ID", en: "Snowflake ID", area: "foundation", difficulty: "medium", concept: "雪花 ID 是分布式唯一 ID，通常包含时间戳、机器位和序列号。", explanation: ["核心概念：雪花 ID（Snowflake ID）聚焦雪花 ID 是分布式唯一 ID，通常包含时间戳、机器位和序列号。。MySQL 通过 SQL、InnoDB、索引、事务、日志和复制支撑关系型数据读写；理解它时先抓住关系模型、表结构、约束和数据类型，再看输入、状态变化、输出结果和失败分支。","适用场景：雪花 ID常用于分库分表主键和跨服务唯一标识。学习时把它放回MySQL链路中观察，并结合前置知识主键判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，雪花 ID通常会和自增 ID一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点需要结合流程和指标判断。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认关系模型、表结构、约束和数据类型是否仍然成立。","常见误区与注意点：实践中容易把雪花 ID当成孤立概念处理，结果遗漏冗余、主键选择、字段范围、字符集和约束成本。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考MySQL 8.4 Reference Manual、InnoDB 官方文档、小林 coding、JavaGuide 和 CS-Notes，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["雪花 ID执行原理是什么","雪花 ID如何影响性能或一致性","雪花 ID线上问题怎么排查"], useCases: ["分库分表主键","跨服务唯一标识"], prerequisites: ["primary-key"], related: ["auto-increment"], order: 9 },
  /* <!-- KG_REVIEWED: 外键 | 2026-05-24 | source_count=5 --> */
  /* <!-- KG_EXPLAINED: 外键 | 2026-05-23 | source_count=5 --> */
  { sourceRefs: ["mysql-reference","mysql-innodb","xiaolin-mysql","javaguide","cs-notes"], id: "foreign-key", zh: "外键", en: "Foreign Key", area: "foundation", difficulty: "medium", concept: "外键用于约束表间引用关系，保证引用完整性。", explanation: ["核心概念：外键（Foreign Key）聚焦外键用于约束表间引用关系，保证引用完整性。。MySQL 通过 SQL、InnoDB、索引、事务、日志和复制支撑关系型数据读写；理解它时先抓住关系模型、表结构、约束和数据类型，再看输入、状态变化、输出结果和失败分支。","适用场景：外键常用于强一致关联约束和小型系统建模。学习时把它放回MySQL链路中观察，并结合前置知识表结构设计判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，外键通常会和事务和范式一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点需要结合流程和指标判断。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认关系模型、表结构、约束和数据类型是否仍然成立。","常见误区与注意点：实践中容易把外键当成孤立概念处理，结果遗漏冗余、主键选择、字段范围、字符集和约束成本。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考MySQL 8.4 Reference Manual、InnoDB 官方文档、小林 coding、JavaGuide 和 CS-Notes，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["外键执行原理是什么","外键如何影响性能或一致性","外键线上问题怎么排查"], useCases: ["强一致关联约束","小型系统建模"], prerequisites: ["schema-design"], related: ["transaction","normalization"], order: 10 },
  /* <!-- KG_REVIEWED: DDL | 2026-05-24 | source_count=5 --> */
  /* <!-- KG_EXPLAINED: DDL | 2026-05-23 | source_count=5 --> */
  { sourceRefs: ["mysql-reference","mysql-innodb","xiaolin-mysql","javaguide","cs-notes"], id: "ddl", zh: "DDL", en: "Data Definition Language", area: "sql", difficulty: "easy", concept: "DDL 用于创建和修改数据库对象，例如表、索引和字段。", explanation: ["核心概念：DDL（Data Definition Language）聚焦DDL 用于创建和修改数据库对象，例如表、索引和字段。。MySQL 通过 SQL、InnoDB、索引、事务、日志和复制支撑关系型数据读写；理解它时先抓住查询语言、过滤、关联、分组、排序和分页，再看输入、状态变化、输出结果和失败分支。","适用场景：DDL常用于建表、加字段和加索引。学习时把它放回MySQL链路中观察，并结合前置知识SQL判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，DDL通常会和在线 DDL和表结构设计一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点适合先掌握主流程。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认查询语言、过滤、关联、分组、排序和分页是否仍然成立。","常见误区与注意点：实践中容易把DDL当成孤立概念处理，结果遗漏隐式转换、NULL、深分页、临时表和排序成本。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考MySQL 8.4 Reference Manual、InnoDB 官方文档、小林 coding、JavaGuide 和 CS-Notes，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["DDL执行原理是什么","DDL如何影响性能或一致性","DDL线上问题怎么排查"], useCases: ["建表","加字段","加索引"], prerequisites: ["sql"], related: ["online-ddl","schema-design"], order: 11 },
  /* <!-- KG_REVIEWED: DML | 2026-05-24 | source_count=5 --> */
  /* <!-- KG_EXPLAINED: DML | 2026-05-23 | source_count=5 --> */
  { sourceRefs: ["mysql-reference","mysql-innodb","xiaolin-mysql","javaguide","cs-notes"], id: "dml", zh: "DML", en: "Data Manipulation Language", area: "sql", difficulty: "easy", concept: "DML 用于插入、更新和删除表数据。", explanation: ["核心概念：DML（Data Manipulation Language）聚焦DML 用于插入、更新和删除表数据。。MySQL 通过 SQL、InnoDB、索引、事务、日志和复制支撑关系型数据读写；理解它时先抓住查询语言、过滤、关联、分组、排序和分页，再看输入、状态变化、输出结果和失败分支。","适用场景：DML常用于业务写入、批量更新和数据修复。学习时把它放回MySQL链路中观察，并结合前置知识SQL判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，DML通常会和事务和锁一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点适合先掌握主流程。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认查询语言、过滤、关联、分组、排序和分页是否仍然成立。","常见误区与注意点：实践中容易把DML当成孤立概念处理，结果遗漏隐式转换、NULL、深分页、临时表和排序成本。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考MySQL 8.4 Reference Manual、InnoDB 官方文档、小林 coding、JavaGuide 和 CS-Notes，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["DML执行原理是什么","DML如何影响性能或一致性","DML线上问题怎么排查"], useCases: ["业务写入","批量更新","数据修复"], prerequisites: ["sql"], related: ["transaction","lock"], order: 12 },
  /* <!-- KG_REVIEWED: SELECT 查询 | 2026-05-24 | source_count=5 --> */
  /* <!-- KG_EXPLAINED: SELECT 查询 | 2026-05-23 | source_count=5 --> */
  { sourceRefs: ["mysql-reference","mysql-innodb","xiaolin-mysql","javaguide","cs-notes"], id: "select", zh: "SELECT 查询", en: "SELECT Query", area: "sql", difficulty: "easy", concept: "SELECT 用于读取数据，可结合过滤、排序、分组和关联。", explanation: ["核心概念：SELECT 查询（SELECT Query）聚焦SELECT 用于读取数据，可结合过滤、排序、分组和关联。。MySQL 通过 SQL、InnoDB、索引、事务、日志和复制支撑关系型数据读写；理解它时先抓住查询语言、过滤、关联、分组、排序和分页，再看输入、状态变化、输出结果和失败分支。","适用场景：SELECT 查询常用于列表查询、详情查询和报表查询。学习时把它放回MySQL链路中观察，并结合前置知识SQL判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，SELECT 查询通常会和WHERE 条件、JOIN和GROUP BY一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点适合先掌握主流程。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认查询语言、过滤、关联、分组、排序和分页是否仍然成立。","常见误区与注意点：实践中容易把SELECT 查询当成孤立概念处理，结果遗漏隐式转换、NULL、深分页、临时表和排序成本。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考MySQL 8.4 Reference Manual、InnoDB 官方文档、小林 coding、JavaGuide 和 CS-Notes，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["SELECT 查询执行原理是什么","SELECT 查询如何影响性能或一致性","SELECT 查询线上问题怎么排查"], useCases: ["列表查询","详情查询","报表查询"], prerequisites: ["sql"], related: ["where","join","group-by"], order: 13 },
  /* <!-- KG_REVIEWED: WHERE 条件 | 2026-05-24 | source_count=5 --> */
  /* <!-- KG_EXPLAINED: WHERE 条件 | 2026-05-23 | source_count=5 --> */
  { sourceRefs: ["mysql-reference","mysql-innodb","xiaolin-mysql","javaguide","cs-notes"], id: "where", zh: "WHERE 条件", en: "WHERE Clause", area: "sql", difficulty: "easy", concept: "WHERE 用条件过滤行，条件设计影响索引使用和扫描范围。", explanation: ["核心概念：WHERE 条件（WHERE Clause）聚焦WHERE 用条件过滤行，条件设计影响索引使用和扫描范围。。MySQL 通过 SQL、InnoDB、索引、事务、日志和复制支撑关系型数据读写；理解它时先抓住查询语言、过滤、关联、分组、排序和分页，再看输入、状态变化、输出结果和失败分支。","适用场景：WHERE 条件常用于按状态筛选、按时间查询和搜索过滤。学习时把它放回MySQL链路中观察，并结合前置知识SELECT 查询判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，WHERE 条件通常会和索引和范围查询一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点适合先掌握主流程。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认查询语言、过滤、关联、分组、排序和分页是否仍然成立。","常见误区与注意点：实践中容易把WHERE 条件当成孤立概念处理，结果遗漏隐式转换、NULL、深分页、临时表和排序成本。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考MySQL 8.4 Reference Manual、InnoDB 官方文档、小林 coding、JavaGuide 和 CS-Notes，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["WHERE 条件执行原理是什么","WHERE 条件如何影响性能或一致性","WHERE 条件线上问题怎么排查"], useCases: ["按状态筛选","按时间查询","搜索过滤"], prerequisites: ["select"], related: ["mysql-index","range-query"], order: 14 },
  /* <!-- KG_REVIEWED: JOIN | 2026-05-24 | source_count=5 --> */
  /* <!-- KG_EXPLAINED: JOIN | 2026-05-23 | source_count=5 --> */
  { sourceRefs: ["mysql-reference","mysql-innodb","xiaolin-mysql","javaguide","cs-notes"], id: "join", zh: "JOIN", en: "JOIN", area: "sql", difficulty: "medium", concept: "JOIN 用于关联多张表，常见类型包括 INNER JOIN、LEFT JOIN。", explanation: ["核心概念：JOIN聚焦JOIN 用于关联多张表，常见类型包括 INNER JOIN、LEFT JOIN。。MySQL 通过 SQL、InnoDB、索引、事务、日志和复制支撑关系型数据读写；理解它时先抓住查询语言、过滤、关联、分组、排序和分页，再看输入、状态变化、输出结果和失败分支。","适用场景：JOIN常用于订单关联用户、权限关联角色和多表报表。学习时把它放回MySQL链路中观察，并结合前置知识SELECT 查询和表结构设计判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，JOIN通常会和JOIN 顺序和SQL 优化一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点需要结合流程和指标判断。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认查询语言、过滤、关联、分组、排序和分页是否仍然成立。","常见误区与注意点：实践中容易把JOIN当成孤立概念处理，结果遗漏隐式转换、NULL、深分页、临时表和排序成本。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考MySQL 8.4 Reference Manual、InnoDB 官方文档、小林 coding、JavaGuide 和 CS-Notes，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["JOIN执行原理是什么","JOIN如何影响性能或一致性","JOIN线上问题怎么排查"], useCases: ["订单关联用户","权限关联角色","多表报表"], prerequisites: ["select","schema-design"], related: ["join-order","sql-optimization"], order: 15 },
  /* <!-- KG_REVIEWED: GROUP BY | 2026-05-24 | source_count=5 --> */
  /* <!-- KG_EXPLAINED: GROUP BY | 2026-05-23 | source_count=5 --> */
  { sourceRefs: ["mysql-reference","mysql-innodb","xiaolin-mysql","javaguide","cs-notes"], id: "group-by", zh: "GROUP BY", en: "GROUP BY", area: "sql", difficulty: "medium", concept: "GROUP BY 用于分组聚合，常配合 count、sum、avg 等函数。", explanation: ["核心概念：GROUP BY聚焦GROUP BY 用于分组聚合，常配合 count、sum、avg 等函数。。MySQL 通过 SQL、InnoDB、索引、事务、日志和复制支撑关系型数据读写；理解它时先抓住查询语言、过滤、关联、分组、排序和分页，再看输入、状态变化、输出结果和失败分支。","适用场景：GROUP BY常用于统计报表、运营分析和聚合查询。学习时把它放回MySQL链路中观察，并结合前置知识SELECT 查询判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，GROUP BY通常会和临时表和Filesort一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点需要结合流程和指标判断。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认查询语言、过滤、关联、分组、排序和分页是否仍然成立。","常见误区与注意点：实践中容易把GROUP BY当成孤立概念处理，结果遗漏隐式转换、NULL、深分页、临时表和排序成本。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考MySQL 8.4 Reference Manual、InnoDB 官方文档、小林 coding、JavaGuide 和 CS-Notes，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["GROUP BY执行原理是什么","GROUP BY如何影响性能或一致性","GROUP BY线上问题怎么排查"], useCases: ["统计报表","运营分析","聚合查询"], prerequisites: ["select"], related: ["temporary-table","filesort"], order: 16 },
  /* <!-- KG_REVIEWED: ORDER BY | 2026-05-24 | source_count=5 --> */
  /* <!-- KG_EXPLAINED: ORDER BY | 2026-05-23 | source_count=5 --> */
  { sourceRefs: ["mysql-reference","mysql-innodb","xiaolin-mysql","javaguide","cs-notes"], id: "order-by", zh: "ORDER BY", en: "ORDER BY", area: "sql", difficulty: "medium", concept: "ORDER BY 用于排序，可通过索引减少 filesort。", explanation: ["核心概念：ORDER BY聚焦ORDER BY 用于排序，可通过索引减少 filesort。。MySQL 通过 SQL、InnoDB、索引、事务、日志和复制支撑关系型数据读写；理解它时先抓住查询语言、过滤、关联、分组、排序和分页，再看输入、状态变化、输出结果和失败分支。","适用场景：ORDER BY常用于列表排序、排行榜和最新记录查询。学习时把它放回MySQL链路中观察，并结合前置知识SELECT 查询判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，ORDER BY通常会和Filesort和联合索引一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点需要结合流程和指标判断。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认查询语言、过滤、关联、分组、排序和分页是否仍然成立。","常见误区与注意点：实践中容易把ORDER BY当成孤立概念处理，结果遗漏隐式转换、NULL、深分页、临时表和排序成本。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考MySQL 8.4 Reference Manual、InnoDB 官方文档、小林 coding、JavaGuide 和 CS-Notes，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["ORDER BY执行原理是什么","ORDER BY如何影响性能或一致性","ORDER BY线上问题怎么排查"], useCases: ["列表排序","排行榜","最新记录查询"], prerequisites: ["select"], related: ["filesort","composite-index"], order: 17 },
  /* <!-- KG_REVIEWED: LIMIT 分页 | 2026-05-24 | source_count=5 --> */
  /* <!-- KG_EXPLAINED: LIMIT 分页 | 2026-05-23 | source_count=5 --> */
  { sourceRefs: ["mysql-reference","mysql-innodb","xiaolin-mysql","javaguide","cs-notes"], id: "limit-offset", zh: "LIMIT 分页", en: "LIMIT Pagination", area: "sql", difficulty: "medium", concept: "LIMIT 用于分页，大 offset 会造成扫描和回表成本升高。", explanation: ["核心概念：LIMIT 分页（LIMIT Pagination）聚焦LIMIT 用于分页，大 offset 会造成扫描和回表成本升高。。MySQL 通过 SQL、InnoDB、索引、事务、日志和复制支撑关系型数据读写；理解它时先抓住查询语言、过滤、关联、分组、排序和分页，再看输入、状态变化、输出结果和失败分支。","适用场景：LIMIT 分页常用于后台列表分页和搜索结果分页。学习时把它放回MySQL链路中观察，并结合前置知识SELECT 查询判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，LIMIT 分页通常会和游标分页和SQL 优化一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点需要结合流程和指标判断。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认查询语言、过滤、关联、分组、排序和分页是否仍然成立。","常见误区与注意点：实践中容易把LIMIT 分页当成孤立概念处理，结果遗漏隐式转换、NULL、深分页、临时表和排序成本。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考MySQL 8.4 Reference Manual、InnoDB 官方文档、小林 coding、JavaGuide 和 CS-Notes，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["LIMIT 分页执行原理是什么","LIMIT 分页如何影响性能或一致性","LIMIT 分页线上问题怎么排查"], useCases: ["后台列表分页","搜索结果分页"], prerequisites: ["select"], related: ["cursor-pagination","sql-optimization"], order: 18 },
  /* <!-- KG_REVIEWED: 游标分页 | 2026-05-24 | source_count=5 --> */
  /* <!-- KG_EXPLAINED: 游标分页 | 2026-05-23 | source_count=5 --> */
  { sourceRefs: ["mysql-reference","mysql-innodb","xiaolin-mysql","javaguide","cs-notes"], id: "cursor-pagination", zh: "游标分页", en: "Cursor Pagination", area: "sql", difficulty: "medium", concept: "游标分页用上一次结果的排序键继续查询，适合深分页优化。", explanation: ["核心概念：游标分页（Cursor Pagination）聚焦游标分页用上一次结果的排序键继续查询，适合深分页优化。。MySQL 通过 SQL、InnoDB、索引、事务、日志和复制支撑关系型数据读写；理解它时先抓住查询语言、过滤、关联、分组、排序和分页，再看输入、状态变化、输出结果和失败分支。","适用场景：游标分页常用于信息流翻页、大表分页和日志查询。学习时把它放回MySQL链路中观察，并结合前置知识LIMIT 分页判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，游标分页通常会和索引一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点需要结合流程和指标判断。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认查询语言、过滤、关联、分组、排序和分页是否仍然成立。","常见误区与注意点：实践中容易把游标分页当成孤立概念处理，结果遗漏隐式转换、NULL、深分页、临时表和排序成本。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考MySQL 8.4 Reference Manual、InnoDB 官方文档、小林 coding、JavaGuide 和 CS-Notes，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["游标分页执行原理是什么","游标分页如何影响性能或一致性","游标分页线上问题怎么排查"], useCases: ["信息流翻页","大表分页","日志查询"], prerequisites: ["limit-offset"], related: ["mysql-index"], order: 19 },
  /* <!-- KG_REVIEWED: InnoDB | 2026-05-24 | source_count=5 --> */
  /* <!-- KG_EXPLAINED: InnoDB | 2026-05-23 | source_count=5 --> */
  { sourceRefs: ["mysql-reference","mysql-innodb","xiaolin-mysql","javaguide","cs-notes"], id: "innodb", zh: "InnoDB", en: "InnoDB", area: "engine", difficulty: "medium", concept: "InnoDB 是 MySQL 默认事务型存储引擎，支持事务、行锁、MVCC 和崩溃恢复。", explanation: ["核心概念：InnoDB聚焦InnoDB 是 MySQL 默认事务型存储引擎，支持事务、行锁、MVCC 和崩溃恢复。。MySQL 通过 SQL、InnoDB、索引、事务、日志和复制支撑关系型数据读写；理解它时先抓住InnoDB 页、Buffer Pool、脏页和检查点，再看输入、状态变化、输出结果和失败分支。","适用场景：InnoDB常用于核心业务表、高并发 OLTP和事务一致性。学习时把它放回MySQL链路中观察，并结合前置知识MySQL 概览判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，InnoDB通常会和事务、Buffer Pool和Redo Log一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点需要结合流程和指标判断。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认InnoDB 页、Buffer Pool、脏页和检查点是否仍然成立。","常见误区与注意点：实践中容易把InnoDB当成孤立概念处理，结果遗漏页分裂、刷盘抖动、Buffer Pool 污染和主键设计。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考MySQL 8.4 Reference Manual、InnoDB 官方文档、小林 coding、JavaGuide 和 CS-Notes，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["InnoDB执行原理是什么","InnoDB如何影响性能或一致性","InnoDB线上问题怎么排查"], useCases: ["核心业务表","高并发 OLTP","事务一致性"], prerequisites: ["mysql-overview"], related: ["transaction","buffer-pool","redo-log"], order: 20 },
  /* <!-- KG_REVIEWED: 存储引擎 | 2026-05-24 | source_count=5 --> */
  /* <!-- KG_EXPLAINED: 存储引擎 | 2026-05-23 | source_count=5 --> */
  { sourceRefs: ["mysql-reference","mysql-innodb","xiaolin-mysql","javaguide","cs-notes"], id: "storage-engine", zh: "存储引擎", en: "Storage Engine", area: "engine", difficulty: "medium", concept: "存储引擎负责数据存储、索引实现、锁和事务能力。", explanation: ["核心概念：存储引擎（Storage Engine）聚焦存储引擎负责数据存储、索引实现、锁和事务能力。。MySQL 通过 SQL、InnoDB、索引、事务、日志和复制支撑关系型数据读写；理解它时先抓住InnoDB 页、Buffer Pool、脏页和检查点，再看输入、状态变化、输出结果和失败分支。","适用场景：存储引擎常用于引擎选型和能力差异分析。学习时把它放回MySQL链路中观察，并结合前置知识MySQL 概览判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，存储引擎通常会和InnoDB一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点需要结合流程和指标判断。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认InnoDB 页、Buffer Pool、脏页和检查点是否仍然成立。","常见误区与注意点：实践中容易把存储引擎当成孤立概念处理，结果遗漏页分裂、刷盘抖动、Buffer Pool 污染和主键设计。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考MySQL 8.4 Reference Manual、InnoDB 官方文档、小林 coding、JavaGuide 和 CS-Notes，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["存储引擎执行原理是什么","存储引擎如何影响性能或一致性","存储引擎线上问题怎么排查"], useCases: ["引擎选型","能力差异分析"], prerequisites: ["mysql-overview"], related: ["innodb"], order: 21 },
  /* <!-- KG_REVIEWED: 聚簇索引 | 2026-05-24 | source_count=5 --> */
  /* <!-- KG_EXPLAINED: 聚簇索引 | 2026-05-23 | source_count=5 --> */
  { sourceRefs: ["mysql-reference","mysql-innodb","xiaolin-mysql","javaguide","cs-notes"], id: "clustered-index", zh: "聚簇索引", en: "Clustered Index", area: "engine", difficulty: "medium", concept: "InnoDB 按主键组织数据，主键索引叶子节点存储整行记录。", explanation: ["核心概念：聚簇索引（Clustered Index）聚焦InnoDB 按主键组织数据，主键索引叶子节点存储整行记录。。MySQL 通过 SQL、InnoDB、索引、事务、日志和复制支撑关系型数据读写；理解它时先抓住InnoDB 页、Buffer Pool、脏页和检查点，再看输入、状态变化、输出结果和失败分支。","适用场景：聚簇索引常用于主键查询和表数据组织理解。学习时把它放回MySQL链路中观察，并结合前置知识InnoDB和主键判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，聚簇索引通常会和二级索引和回表一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点需要结合流程和指标判断。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认InnoDB 页、Buffer Pool、脏页和检查点是否仍然成立。","常见误区与注意点：实践中容易把聚簇索引当成孤立概念处理，结果遗漏页分裂、刷盘抖动、Buffer Pool 污染和主键设计。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考MySQL 8.4 Reference Manual、InnoDB 官方文档、小林 coding、JavaGuide 和 CS-Notes，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["聚簇索引执行原理是什么","聚簇索引如何影响性能或一致性","聚簇索引线上问题怎么排查"], useCases: ["主键查询","表数据组织理解"], prerequisites: ["innodb","primary-key"], related: ["secondary-index","back-to-table"], order: 22 },
  /* <!-- KG_REVIEWED: Buffer Pool | 2026-05-24 | source_count=5 --> */
  /* <!-- KG_EXPLAINED: Buffer Pool | 2026-05-23 | source_count=5 --> */
  { sourceRefs: ["mysql-reference","mysql-innodb","xiaolin-mysql","javaguide","cs-notes"], id: "buffer-pool", zh: "Buffer Pool", en: "Buffer Pool", area: "engine", difficulty: "medium", concept: "Buffer Pool 缓存数据页和索引页，减少磁盘 I/O。", explanation: ["核心概念：Buffer Pool聚焦Buffer Pool 缓存数据页和索引页，减少磁盘 I/O。。MySQL 通过 SQL、InnoDB、索引、事务、日志和复制支撑关系型数据读写；理解它时先抓住InnoDB 页、Buffer Pool、脏页和检查点，再看输入、状态变化、输出结果和失败分支。","适用场景：Buffer Pool常用于性能调优、内存配置和热点数据缓存。学习时把它放回MySQL链路中观察，并结合前置知识InnoDB判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，Buffer Pool通常会和数据页和脏页一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点需要结合流程和指标判断。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认InnoDB 页、Buffer Pool、脏页和检查点是否仍然成立。","常见误区与注意点：实践中容易把Buffer Pool当成孤立概念处理，结果遗漏页分裂、刷盘抖动、Buffer Pool 污染和主键设计。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考MySQL 8.4 Reference Manual、InnoDB 官方文档、小林 coding、JavaGuide 和 CS-Notes，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["Buffer Pool执行原理是什么","Buffer Pool如何影响性能或一致性","Buffer Pool线上问题怎么排查"], useCases: ["性能调优","内存配置","热点数据缓存"], prerequisites: ["innodb"], related: ["page","dirty-page"], order: 23 },
  /* <!-- KG_REVIEWED: 数据页 | 2026-05-24 | source_count=5 --> */
  /* <!-- KG_EXPLAINED: 数据页 | 2026-05-23 | source_count=5 --> */
  { sourceRefs: ["mysql-reference","mysql-innodb","xiaolin-mysql","javaguide","cs-notes"], id: "page", zh: "数据页", en: "Page", area: "engine", difficulty: "medium", concept: "页是 InnoDB 磁盘和内存交互的基本单位，默认 16KB。", explanation: ["核心概念：数据页（Page）聚焦页是 InnoDB 磁盘和内存交互的基本单位，默认 16KB。。MySQL 通过 SQL、InnoDB、索引、事务、日志和复制支撑关系型数据读写；理解它时先抓住InnoDB 页、Buffer Pool、脏页和检查点，再看输入、状态变化、输出结果和失败分支。","适用场景：数据页常用于索引结构理解和I/O 成本分析。学习时把它放回MySQL链路中观察，并结合前置知识InnoDB判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，数据页通常会和B+ 树和Buffer Pool一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点需要结合流程和指标判断。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认InnoDB 页、Buffer Pool、脏页和检查点是否仍然成立。","常见误区与注意点：实践中容易把数据页当成孤立概念处理，结果遗漏页分裂、刷盘抖动、Buffer Pool 污染和主键设计。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考MySQL 8.4 Reference Manual、InnoDB 官方文档、小林 coding、JavaGuide 和 CS-Notes，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["数据页执行原理是什么","数据页如何影响性能或一致性","数据页线上问题怎么排查"], useCases: ["索引结构理解","I/O 成本分析"], prerequisites: ["innodb"], related: ["b-plus-tree","buffer-pool"], order: 24 },
  /* <!-- KG_REVIEWED: 脏页 | 2026-05-24 | source_count=5 --> */
  /* <!-- KG_EXPLAINED: 脏页 | 2026-05-23 | source_count=5 --> */
  { sourceRefs: ["mysql-reference","mysql-innodb","xiaolin-mysql","javaguide","cs-notes"], id: "dirty-page", zh: "脏页", en: "Dirty Page", area: "engine", difficulty: "medium", concept: "脏页是内存中已修改但尚未刷盘的数据页。", explanation: ["核心概念：脏页（Dirty Page）聚焦脏页是内存中已修改但尚未刷盘的数据页。。MySQL 通过 SQL、InnoDB、索引、事务、日志和复制支撑关系型数据读写；理解它时先抓住InnoDB 页、Buffer Pool、脏页和检查点，再看输入、状态变化、输出结果和失败分支。","适用场景：脏页常用于刷盘压力排查和写入性能分析。学习时把它放回MySQL链路中观察，并结合前置知识Buffer Pool判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，脏页通常会和Checkpoint和Redo Log一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点需要结合流程和指标判断。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认InnoDB 页、Buffer Pool、脏页和检查点是否仍然成立。","常见误区与注意点：实践中容易把脏页当成孤立概念处理，结果遗漏页分裂、刷盘抖动、Buffer Pool 污染和主键设计。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考MySQL 8.4 Reference Manual、InnoDB 官方文档、小林 coding、JavaGuide 和 CS-Notes，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["脏页执行原理是什么","脏页如何影响性能或一致性","脏页线上问题怎么排查"], useCases: ["刷盘压力排查","写入性能分析"], prerequisites: ["buffer-pool"], related: ["checkpoint","redo-log"], order: 25 },
  /* <!-- KG_REVIEWED: Checkpoint | 2026-05-24 | source_count=5 --> */
  /* <!-- KG_EXPLAINED: Checkpoint | 2026-05-23 | source_count=5 --> */
  { sourceRefs: ["mysql-reference","mysql-innodb","xiaolin-mysql","javaguide","cs-notes"], id: "checkpoint", zh: "Checkpoint", en: "Checkpoint", area: "engine", difficulty: "hard", concept: "Checkpoint 推进脏页刷盘位置，缩短崩溃恢复时间。", explanation: ["核心概念：Checkpoint聚焦Checkpoint 推进脏页刷盘位置，缩短崩溃恢复时间。。MySQL 通过 SQL、InnoDB、索引、事务、日志和复制支撑关系型数据读写；理解它时先抓住InnoDB 页、Buffer Pool、脏页和检查点，再看输入、状态变化、输出结果和失败分支。","适用场景：Checkpoint常用于恢复时间控制和刷盘机制理解。学习时把它放回MySQL链路中观察，并结合前置知识脏页和Redo Log判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，Checkpoint通常会和崩溃恢复一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点风险和细节较多。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认InnoDB 页、Buffer Pool、脏页和检查点是否仍然成立。","常见误区与注意点：实践中容易把Checkpoint当成孤立概念处理，结果遗漏页分裂、刷盘抖动、Buffer Pool 污染和主键设计。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考MySQL 8.4 Reference Manual、InnoDB 官方文档、小林 coding、JavaGuide 和 CS-Notes，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["Checkpoint执行原理是什么","Checkpoint如何影响性能或一致性","Checkpoint线上问题怎么排查"], useCases: ["恢复时间控制","刷盘机制理解"], prerequisites: ["dirty-page","redo-log"], related: ["crash-recovery"], order: 26 },
  /* <!-- KG_REVIEWED: 索引 | 2026-05-24 | source_count=5 --> */
  /* <!-- KG_EXPLAINED: 索引 | 2026-05-23 | source_count=5 --> */
  { sourceRefs: ["mysql-reference","mysql-innodb","xiaolin-mysql","javaguide","cs-notes"], id: "mysql-index", zh: "索引", en: "Index", area: "index", difficulty: "medium", concept: "索引用额外数据结构加速查询，但会增加写入和存储成本。", explanation: ["核心概念：索引（Index）聚焦索引用额外数据结构加速查询，但会增加写入和存储成本。。MySQL 通过 SQL、InnoDB、索引、事务、日志和复制支撑关系型数据读写；理解它时先抓住B+ 树、聚簇索引、二级索引和覆盖索引，再看输入、状态变化、输出结果和失败分支。","适用场景：索引常用于查询加速、排序优化和唯一约束。学习时把它放回MySQL链路中观察，并结合前置知识SELECT 查询和InnoDB判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，索引通常会和B+ 树、联合索引和SQL 优化一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点需要结合流程和指标判断。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认B+ 树、聚簇索引、二级索引和覆盖索引是否仍然成立。","常见误区与注意点：实践中容易把索引当成孤立概念处理，结果遗漏回表、最左前缀、范围条件、低选择性和写入成本。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考MySQL 8.4 Reference Manual、InnoDB 官方文档、小林 coding、JavaGuide 和 CS-Notes，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["索引执行原理是什么","索引如何影响性能或一致性","索引线上问题怎么排查"], useCases: ["查询加速","排序优化","唯一约束"], prerequisites: ["select","innodb"], related: ["b-plus-tree","composite-index","sql-optimization"], order: 27 },
  /* <!-- KG_REVIEWED: B+ 树 | 2026-06-04 | source_count=6 --> */
  /* <!-- KG_EXPLAINED: B+ 树 | 2026-05-23 | source_count=5 --> */
  { sourceRefs: ["mysql-reference","mysql-innodb","xiaolin-mysql","javaguide","cs-notes"], id: "b-plus-tree", zh: "B+ 树", en: "B+ Tree", area: "index", difficulty: "medium", concept: "B+ 树是 MySQL 常用索引结构，适合范围查询和排序。", explanation: ["核心概念：B+ 树（B+ Tree）聚焦B+ 树是 MySQL 常用索引结构，适合范围查询和排序。。MySQL 通过 SQL、InnoDB、索引、事务、日志和复制支撑关系型数据读写；理解它时先抓住B+ 树、聚簇索引、二级索引和覆盖索引，再看输入、状态变化、输出结果和失败分支。","适用场景：B+ 树常用于范围查询、索引原理和磁盘页访问优化。学习时把它放回MySQL链路中观察，并结合前置知识索引判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，B+ 树通常会和聚簇索引和二级索引一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点需要结合流程和指标判断。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认B+ 树、聚簇索引、二级索引和覆盖索引是否仍然成立。","常见误区与注意点：实践中容易把B+ 树当成孤立概念处理，结果遗漏回表、最左前缀、范围条件、低选择性和写入成本。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考MySQL 8.4 Reference Manual、InnoDB 官方文档、小林 coding、JavaGuide 和 CS-Notes，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["B+ 树执行原理是什么","B+ 树如何影响性能或一致性","B+ 树线上问题怎么排查"], useCases: ["范围查询","索引原理","磁盘页访问优化"], prerequisites: ["mysql-index"], related: ["clustered-index","secondary-index"], order: 28 },
  /* <!-- KG_REVIEWED: 二级索引 | 2026-05-24 | source_count=5 --> */
  /* <!-- KG_EXPLAINED: 二级索引 | 2026-05-23 | source_count=5 --> */
  { sourceRefs: ["mysql-reference","mysql-innodb","xiaolin-mysql","javaguide","cs-notes"], id: "secondary-index", zh: "二级索引", en: "Secondary Index", area: "index", difficulty: "medium", concept: "二级索引叶子节点保存主键值，查询整行时可能需要回表。", explanation: ["核心概念：二级索引（Secondary Index）聚焦二级索引叶子节点保存主键值，查询整行时可能需要回表。。MySQL 通过 SQL、InnoDB、索引、事务、日志和复制支撑关系型数据读写；理解它时先抓住B+ 树、聚簇索引、二级索引和覆盖索引，再看输入、状态变化、输出结果和失败分支。","适用场景：二级索引常用于非主键查询和多条件检索。学习时把它放回MySQL链路中观察，并结合前置知识聚簇索引判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，二级索引通常会和回表和覆盖索引一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点需要结合流程和指标判断。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认B+ 树、聚簇索引、二级索引和覆盖索引是否仍然成立。","常见误区与注意点：实践中容易把二级索引当成孤立概念处理，结果遗漏回表、最左前缀、范围条件、低选择性和写入成本。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考MySQL 8.4 Reference Manual、InnoDB 官方文档、小林 coding、JavaGuide 和 CS-Notes，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["二级索引执行原理是什么","二级索引如何影响性能或一致性","二级索引线上问题怎么排查"], useCases: ["非主键查询","多条件检索"], prerequisites: ["clustered-index"], related: ["back-to-table","covering-index"], order: 29 },
  /* <!-- KG_REVIEWED: 回表 | 2026-05-24 | source_count=5 --> */
  /* <!-- KG_EXPLAINED: 回表 | 2026-05-23 | source_count=5 --> */
  { sourceRefs: ["mysql-reference","mysql-innodb","xiaolin-mysql","javaguide","cs-notes"], id: "back-to-table", zh: "回表", en: "Back to Table", area: "index", difficulty: "medium", concept: "回表是通过二级索引找到主键后，再访问聚簇索引获取完整记录。", explanation: ["核心概念：回表（Back to Table）聚焦回表是通过二级索引找到主键后，再访问聚簇索引获取完整记录。。MySQL 通过 SQL、InnoDB、索引、事务、日志和复制支撑关系型数据读写；理解它时先抓住B+ 树、聚簇索引、二级索引和覆盖索引，再看输入、状态变化、输出结果和失败分支。","适用场景：回表常用于查询优化和索引字段选择。学习时把它放回MySQL链路中观察，并结合前置知识二级索引判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，回表通常会和覆盖索引一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点需要结合流程和指标判断。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认B+ 树、聚簇索引、二级索引和覆盖索引是否仍然成立。","常见误区与注意点：实践中容易把回表当成孤立概念处理，结果遗漏回表、最左前缀、范围条件、低选择性和写入成本。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考MySQL 8.4 Reference Manual、InnoDB 官方文档、小林 coding、JavaGuide 和 CS-Notes，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["回表执行原理是什么","回表如何影响性能或一致性","回表线上问题怎么排查"], useCases: ["查询优化","索引字段选择"], prerequisites: ["secondary-index"], related: ["covering-index"], order: 30 },
  /* <!-- KG_REVIEWED: 覆盖索引 | 2026-05-24 | source_count=5 --> */
  /* <!-- KG_EXPLAINED: 覆盖索引 | 2026-05-23 | source_count=5 --> */
  { sourceRefs: ["mysql-reference","mysql-innodb","xiaolin-mysql","javaguide","cs-notes"], id: "covering-index", zh: "覆盖索引", en: "Covering Index", area: "index", difficulty: "medium", concept: "覆盖索引让查询所需字段都能从索引中获得，减少回表。", explanation: ["核心概念：覆盖索引（Covering Index）聚焦覆盖索引让查询所需字段都能从索引中获得，减少回表。。MySQL 通过 SQL、InnoDB、索引、事务、日志和复制支撑关系型数据读写；理解它时先抓住B+ 树、聚簇索引、二级索引和覆盖索引，再看输入、状态变化、输出结果和失败分支。","适用场景：覆盖索引常用于列表查询优化和高频只读查询。学习时把它放回MySQL链路中观察，并结合前置知识二级索引判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，覆盖索引通常会和联合索引和SQL 优化一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点需要结合流程和指标判断。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认B+ 树、聚簇索引、二级索引和覆盖索引是否仍然成立。","常见误区与注意点：实践中容易把覆盖索引当成孤立概念处理，结果遗漏回表、最左前缀、范围条件、低选择性和写入成本。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考MySQL 8.4 Reference Manual、InnoDB 官方文档、小林 coding、JavaGuide 和 CS-Notes，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["覆盖索引执行原理是什么","覆盖索引如何影响性能或一致性","覆盖索引线上问题怎么排查"], useCases: ["列表查询优化","高频只读查询"], prerequisites: ["secondary-index"], related: ["composite-index","sql-optimization"], order: 31 },
  /* <!-- KG_REVIEWED: 联合索引 | 2026-05-24 | source_count=5 --> */
  /* <!-- KG_EXPLAINED: 联合索引 | 2026-05-23 | source_count=5 --> */
  { sourceRefs: ["mysql-reference","mysql-innodb","xiaolin-mysql","javaguide","cs-notes"], id: "composite-index", zh: "联合索引", en: "Composite Index", area: "index", difficulty: "medium", concept: "联合索引包含多个字段，字段顺序影响过滤、排序和覆盖能力。", explanation: ["核心概念：联合索引（Composite Index）聚焦联合索引包含多个字段，字段顺序影响过滤、排序和覆盖能力。。MySQL 通过 SQL、InnoDB、索引、事务、日志和复制支撑关系型数据读写；理解它时先抓住B+ 树、聚簇索引、二级索引和覆盖索引，再看输入、状态变化、输出结果和失败分支。","适用场景：联合索引常用于多条件查询和排序分页优化。学习时把它放回MySQL链路中观察，并结合前置知识索引判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，联合索引通常会和最左前缀和覆盖索引一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点需要结合流程和指标判断。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认B+ 树、聚簇索引、二级索引和覆盖索引是否仍然成立。","常见误区与注意点：实践中容易把联合索引当成孤立概念处理，结果遗漏回表、最左前缀、范围条件、低选择性和写入成本。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考MySQL 8.4 Reference Manual、InnoDB 官方文档、小林 coding、JavaGuide 和 CS-Notes，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["联合索引执行原理是什么","联合索引如何影响性能或一致性","联合索引线上问题怎么排查"], useCases: ["多条件查询","排序分页优化"], prerequisites: ["mysql-index"], related: ["leftmost-prefix","covering-index"], order: 32 },
  /* <!-- KG_REVIEWED: 最左前缀 | 2026-05-24 | source_count=5 --> */
  /* <!-- KG_EXPLAINED: 最左前缀 | 2026-05-23 | source_count=5 --> */
  { sourceRefs: ["mysql-reference","mysql-innodb","xiaolin-mysql","javaguide","cs-notes"], id: "leftmost-prefix", zh: "最左前缀", en: "Leftmost Prefix", area: "index", difficulty: "medium", concept: "最左前缀原则要求联合索引从最左字段开始连续匹配。", explanation: ["核心概念：最左前缀（Leftmost Prefix）聚焦最左前缀原则要求联合索引从最左字段开始连续匹配。。MySQL 通过 SQL、InnoDB、索引、事务、日志和复制支撑关系型数据读写；理解它时先抓住B+ 树、聚簇索引、二级索引和覆盖索引，再看输入、状态变化、输出结果和失败分支。","适用场景：最左前缀常用于联合索引设计和索引失效排查。学习时把它放回MySQL链路中观察，并结合前置知识联合索引判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，最左前缀通常会和范围查询一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点需要结合流程和指标判断。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认B+ 树、聚簇索引、二级索引和覆盖索引是否仍然成立。","常见误区与注意点：实践中容易把最左前缀当成孤立概念处理，结果遗漏回表、最左前缀、范围条件、低选择性和写入成本。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考MySQL 8.4 Reference Manual、InnoDB 官方文档、小林 coding、JavaGuide 和 CS-Notes，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["最左前缀执行原理是什么","最左前缀如何影响性能或一致性","最左前缀线上问题怎么排查"], useCases: ["联合索引设计","索引失效排查"], prerequisites: ["composite-index"], related: ["range-query"], order: 33 },
  /* <!-- KG_REVIEWED: 范围查询 | 2026-05-24 | source_count=5 --> */
  /* <!-- KG_EXPLAINED: 范围查询 | 2026-05-23 | source_count=5 --> */
  { sourceRefs: ["mysql-reference","mysql-innodb","xiaolin-mysql","javaguide","cs-notes"], id: "range-query", zh: "范围查询", en: "Range Query", area: "index", difficulty: "medium", concept: "范围查询会影响联合索引后续字段的使用，需要结合条件选择性设计索引。", explanation: ["核心概念：范围查询（Range Query）聚焦范围查询会影响联合索引后续字段的使用，需要结合条件选择性设计索引。。MySQL 通过 SQL、InnoDB、索引、事务、日志和复制支撑关系型数据读写；理解它时先抓住B+ 树、聚簇索引、二级索引和覆盖索引，再看输入、状态变化、输出结果和失败分支。","适用场景：范围查询常用于时间范围筛选和价格区间查询。学习时把它放回MySQL链路中观察，并结合前置知识最左前缀判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，范围查询通常会和WHERE 条件和ORDER BY一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点需要结合流程和指标判断。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认B+ 树、聚簇索引、二级索引和覆盖索引是否仍然成立。","常见误区与注意点：实践中容易把范围查询当成孤立概念处理，结果遗漏回表、最左前缀、范围条件、低选择性和写入成本。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考MySQL 8.4 Reference Manual、InnoDB 官方文档、小林 coding、JavaGuide 和 CS-Notes，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["范围查询执行原理是什么","范围查询如何影响性能或一致性","范围查询线上问题怎么排查"], useCases: ["时间范围筛选","价格区间查询"], prerequisites: ["leftmost-prefix"], related: ["where","order-by"], order: 34 },
  /* <!-- KG_REVIEWED: 唯一索引 | 2026-05-24 | source_count=5 --> */
  /* <!-- KG_EXPLAINED: 唯一索引 | 2026-05-23 | source_count=5 --> */
  { sourceRefs: ["mysql-reference","mysql-innodb","xiaolin-mysql","javaguide","cs-notes"], id: "unique-index", zh: "唯一索引", en: "Unique Index", area: "index", difficulty: "easy", concept: "唯一索引保证字段值唯一，同时提供查询加速能力。", explanation: ["核心概念：唯一索引（Unique Index）聚焦唯一索引保证字段值唯一，同时提供查询加速能力。。MySQL 通过 SQL、InnoDB、索引、事务、日志和复制支撑关系型数据读写；理解它时先抓住B+ 树、聚簇索引、二级索引和覆盖索引，再看输入、状态变化、输出结果和失败分支。","适用场景：唯一索引常用于手机号唯一、业务单号唯一和幂等约束。学习时把它放回MySQL链路中观察，并结合前置知识索引判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，唯一索引通常会和主键一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点适合先掌握主流程。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认B+ 树、聚簇索引、二级索引和覆盖索引是否仍然成立。","常见误区与注意点：实践中容易把唯一索引当成孤立概念处理，结果遗漏回表、最左前缀、范围条件、低选择性和写入成本。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考MySQL 8.4 Reference Manual、InnoDB 官方文档、小林 coding、JavaGuide 和 CS-Notes，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["唯一索引执行原理是什么","唯一索引如何影响性能或一致性","唯一索引线上问题怎么排查"], useCases: ["手机号唯一","业务单号唯一","幂等约束"], prerequisites: ["mysql-index"], related: ["primary-key"], order: 35 },
  /* <!-- KG_REVIEWED: 索引选择性 | 2026-05-24 | source_count=5 --> */
  /* <!-- KG_EXPLAINED: 索引选择性 | 2026-05-23 | source_count=5 --> */
  { sourceRefs: ["mysql-reference","mysql-innodb","xiaolin-mysql","javaguide","cs-notes"], id: "index-selectivity", zh: "索引选择性", en: "Index Selectivity", area: "index", difficulty: "medium", concept: "索引选择性表示字段区分度，区分度越高越适合作为索引前导列。", explanation: ["核心概念：索引选择性（Index Selectivity）聚焦索引选择性表示字段区分度，区分度越高越适合作为索引前导列。。MySQL 通过 SQL、InnoDB、索引、事务、日志和复制支撑关系型数据读写；理解它时先抓住B+ 树、聚簇索引、二级索引和覆盖索引，再看输入、状态变化、输出结果和失败分支。","适用场景：索引选择性常用于索引字段排序和低效索引治理。学习时把它放回MySQL链路中观察，并结合前置知识索引判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，索引选择性通常会和联合索引一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点需要结合流程和指标判断。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认B+ 树、聚簇索引、二级索引和覆盖索引是否仍然成立。","常见误区与注意点：实践中容易把索引选择性当成孤立概念处理，结果遗漏回表、最左前缀、范围条件、低选择性和写入成本。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考MySQL 8.4 Reference Manual、InnoDB 官方文档、小林 coding、JavaGuide 和 CS-Notes，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["索引选择性执行原理是什么","索引选择性如何影响性能或一致性","索引选择性线上问题怎么排查"], useCases: ["索引字段排序","低效索引治理"], prerequisites: ["mysql-index"], related: ["composite-index"], order: 36 },
  /* <!-- KG_REVIEWED: 事务 | 2026-05-24 | source_count=5 --> */
  /* <!-- KG_EXPLAINED: 事务 | 2026-05-23 | source_count=5 --> */
  { sourceRefs: ["mysql-reference","mysql-innodb","xiaolin-mysql","javaguide","cs-notes"], id: "transaction", zh: "事务", en: "Transaction", area: "transaction", difficulty: "medium", concept: "事务把多个操作组成一个逻辑单元，保证业务状态正确变化。", explanation: ["核心概念：事务（Transaction）聚焦事务把多个操作组成一个逻辑单元，保证业务状态正确变化。。MySQL 通过 SQL、InnoDB、索引、事务、日志和复制支撑关系型数据读写；理解它时先抓住ACID、隔离级别、MVCC 和 ReadView，再看输入、状态变化、输出结果和失败分支。","适用场景：事务常用于订单支付、库存扣减和资金流水。学习时把它放回MySQL链路中观察，并结合前置知识InnoDB和DML判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，事务通常会和ACID、隔离级别和MVCC一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点需要结合流程和指标判断。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认ACID、隔离级别、MVCC 和 ReadView是否仍然成立。","常见误区与注意点：实践中容易把事务当成孤立概念处理，结果遗漏幻读、脏读、长事务、版本链膨胀和锁等待。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考MySQL 8.4 Reference Manual、InnoDB 官方文档、小林 coding、JavaGuide 和 CS-Notes，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["事务执行原理是什么","事务如何影响性能或一致性","事务线上问题怎么排查"], useCases: ["订单支付","库存扣减","资金流水"], prerequisites: ["innodb","dml"], related: ["acid","isolation-level","mvcc"], order: 37 },
  /* <!-- KG_REVIEWED: ACID | 2026-05-24 | source_count=5 --> */
  /* <!-- KG_EXPLAINED: ACID | 2026-05-23 | source_count=5 --> */
  { sourceRefs: ["mysql-reference","mysql-innodb","xiaolin-mysql","javaguide","cs-notes"], id: "acid", zh: "ACID", en: "ACID", area: "transaction", difficulty: "medium", concept: "ACID 描述事务的原子性、一致性、隔离性和持久性。", explanation: ["核心概念：ACID聚焦ACID 描述事务的原子性、一致性、隔离性和持久性。。MySQL 通过 SQL、InnoDB、索引、事务、日志和复制支撑关系型数据读写；理解它时先抓住ACID、隔离级别、MVCC 和 ReadView，再看输入、状态变化、输出结果和失败分支。","适用场景：ACID常用于事务语义理解和一致性设计。学习时把它放回MySQL链路中观察，并结合前置知识事务判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，ACID通常会和Redo Log和Undo Log一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点需要结合流程和指标判断。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认ACID、隔离级别、MVCC 和 ReadView是否仍然成立。","常见误区与注意点：实践中容易把ACID当成孤立概念处理，结果遗漏幻读、脏读、长事务、版本链膨胀和锁等待。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考MySQL 8.4 Reference Manual、InnoDB 官方文档、小林 coding、JavaGuide 和 CS-Notes，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["ACID执行原理是什么","ACID如何影响性能或一致性","ACID线上问题怎么排查"], useCases: ["事务语义理解","一致性设计"], prerequisites: ["transaction"], related: ["redo-log","undo-log"], order: 38 },
  /* <!-- KG_REVIEWED: 隔离级别 | 2026-05-24 | source_count=5 --> */
  /* <!-- KG_EXPLAINED: 隔离级别 | 2026-05-23 | source_count=5 --> */
  { sourceRefs: ["mysql-reference","mysql-innodb","xiaolin-mysql","javaguide","cs-notes"], id: "isolation-level", zh: "隔离级别", en: "Isolation Level", area: "transaction", difficulty: "hard", concept: "隔离级别控制并发事务之间的数据可见性。", explanation: ["核心概念：隔离级别（Isolation Level）聚焦隔离级别控制并发事务之间的数据可见性。。MySQL 通过 SQL、InnoDB、索引、事务、日志和复制支撑关系型数据读写；理解它时先抓住ACID、隔离级别、MVCC 和 ReadView，再看输入、状态变化、输出结果和失败分支。","适用场景：隔离级别常用于并发问题排查和一致性与性能权衡。学习时把它放回MySQL链路中观察，并结合前置知识事务判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，隔离级别通常会和读已提交、可重复读和幻读一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点风险和细节较多。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认ACID、隔离级别、MVCC 和 ReadView是否仍然成立。","常见误区与注意点：实践中容易把隔离级别当成孤立概念处理，结果遗漏幻读、脏读、长事务、版本链膨胀和锁等待。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考MySQL 8.4 Reference Manual、InnoDB 官方文档、小林 coding、JavaGuide 和 CS-Notes，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["隔离级别执行原理是什么","隔离级别如何影响性能或一致性","隔离级别线上问题怎么排查"], useCases: ["并发问题排查","一致性与性能权衡"], prerequisites: ["transaction"], related: ["read-committed","repeatable-read","phantom-read"], order: 39 },
  /* <!-- KG_REVIEWED: 读已提交 | 2026-05-24 | source_count=5 --> */
  /* <!-- KG_EXPLAINED: 读已提交 | 2026-05-23 | source_count=5 --> */
  { sourceRefs: ["mysql-reference","mysql-innodb","xiaolin-mysql","javaguide","cs-notes"], id: "read-committed", zh: "读已提交", en: "Read Committed", area: "transaction", difficulty: "medium", concept: "读已提交只能读到其他事务已提交的数据，每次读可能看到不同版本。", explanation: ["核心概念：读已提交（Read Committed）聚焦读已提交只能读到其他事务已提交的数据，每次读可能看到不同版本。。MySQL 通过 SQL、InnoDB、索引、事务、日志和复制支撑关系型数据读写；理解它时先抓住ACID、隔离级别、MVCC 和 ReadView，再看输入、状态变化、输出结果和失败分支。","适用场景：读已提交常用于Oracle 兼容场景和降低间隙锁影响。学习时把它放回MySQL链路中观察，并结合前置知识隔离级别判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，读已提交通常会和MVCC一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点需要结合流程和指标判断。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认ACID、隔离级别、MVCC 和 ReadView是否仍然成立。","常见误区与注意点：实践中容易把读已提交当成孤立概念处理，结果遗漏幻读、脏读、长事务、版本链膨胀和锁等待。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考MySQL 8.4 Reference Manual、InnoDB 官方文档、小林 coding、JavaGuide 和 CS-Notes，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["读已提交执行原理是什么","读已提交如何影响性能或一致性","读已提交线上问题怎么排查"], useCases: ["Oracle 兼容场景","降低间隙锁影响"], prerequisites: ["isolation-level"], related: ["mvcc"], order: 40 },
  /* <!-- KG_REVIEWED: 可重复读 | 2026-05-24 | source_count=5 --> */
  /* <!-- KG_EXPLAINED: 可重复读 | 2026-05-23 | source_count=5 --> */
  { sourceRefs: ["mysql-reference","mysql-innodb","xiaolin-mysql","javaguide","cs-notes"], id: "repeatable-read", zh: "可重复读", en: "Repeatable Read", area: "transaction", difficulty: "medium", concept: "可重复读保证同一事务内多次一致性读看到相同快照，是 MySQL 默认隔离级别。", explanation: ["核心概念：可重复读（Repeatable Read）聚焦可重复读保证同一事务内多次一致性读看到相同快照，是 MySQL 默认隔离级别。。MySQL 通过 SQL、InnoDB、索引、事务、日志和复制支撑关系型数据读写；理解它时先抓住ACID、隔离级别、MVCC 和 ReadView，再看输入、状态变化、输出结果和失败分支。","适用场景：可重复读常用于默认事务隔离和一致性读场景。学习时把它放回MySQL链路中观察，并结合前置知识隔离级别判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，可重复读通常会和MVCC和Next-Key Lock一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点需要结合流程和指标判断。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认ACID、隔离级别、MVCC 和 ReadView是否仍然成立。","常见误区与注意点：实践中容易把可重复读当成孤立概念处理，结果遗漏幻读、脏读、长事务、版本链膨胀和锁等待。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考MySQL 8.4 Reference Manual、InnoDB 官方文档、小林 coding、JavaGuide 和 CS-Notes，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["可重复读执行原理是什么","可重复读如何影响性能或一致性","可重复读线上问题怎么排查"], useCases: ["默认事务隔离","一致性读场景"], prerequisites: ["isolation-level"], related: ["mvcc","next-key-lock"], order: 41 },
  /* <!-- KG_REVIEWED: 幻读 | 2026-05-24 | source_count=5 --> */
  /* <!-- KG_EXPLAINED: 幻读 | 2026-05-23 | source_count=5 --> */
  { sourceRefs: ["mysql-reference","mysql-innodb","xiaolin-mysql","javaguide","cs-notes"], id: "phantom-read", zh: "幻读", en: "Phantom Read", area: "transaction", difficulty: "hard", concept: "幻读是同一事务中范围查询出现其他事务插入的新记录现象。", explanation: ["核心概念：幻读（Phantom Read）聚焦幻读是同一事务中范围查询出现其他事务插入的新记录现象。。MySQL 通过 SQL、InnoDB、索引、事务、日志和复制支撑关系型数据读写；理解它时先抓住ACID、隔离级别、MVCC 和 ReadView，再看输入、状态变化、输出结果和失败分支。","适用场景：幻读常用于并发插入问题分析和范围锁理解。学习时把它放回MySQL链路中观察，并结合前置知识隔离级别判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，幻读通常会和Next-Key Lock和MVCC一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点风险和细节较多。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认ACID、隔离级别、MVCC 和 ReadView是否仍然成立。","常见误区与注意点：实践中容易把幻读当成孤立概念处理，结果遗漏幻读、脏读、长事务、版本链膨胀和锁等待。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考MySQL 8.4 Reference Manual、InnoDB 官方文档、小林 coding、JavaGuide 和 CS-Notes，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["幻读执行原理是什么","幻读如何影响性能或一致性","幻读线上问题怎么排查"], useCases: ["并发插入问题分析","范围锁理解"], prerequisites: ["isolation-level"], related: ["next-key-lock","mvcc"], order: 42 },
  /* <!-- KG_REVIEWED: MVCC | 2026-06-04 | source_count=7 --> */
  /* <!-- KG_EXPLAINED: MVCC | 2026-05-23 | source_count=5 --> */
  { sourceRefs: ["mysql-reference","mysql-innodb","xiaolin-mysql","javaguide","cs-notes"], id: "mvcc", zh: "MVCC", en: "MVCC", area: "transaction", difficulty: "hard", concept: "MVCC 通过版本链和 ReadView 实现一致性非锁定读。", explanation: ["核心概念：MVCC聚焦MVCC 通过版本链和 ReadView 实现一致性非锁定读。。MySQL 通过 SQL、InnoDB、索引、事务、日志和复制支撑关系型数据读写；理解它时先抓住ACID、隔离级别、MVCC 和 ReadView，再看输入、状态变化、输出结果和失败分支。","适用场景：MVCC常用于并发读写优化和快照读理解。学习时把它放回MySQL链路中观察，并结合前置知识事务和Undo Log判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，MVCC通常会和ReadView和可重复读一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点风险和细节较多。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认ACID、隔离级别、MVCC 和 ReadView是否仍然成立。","常见误区与注意点：实践中容易把MVCC当成孤立概念处理，结果遗漏幻读、脏读、长事务、版本链膨胀和锁等待。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考MySQL 8.4 Reference Manual、InnoDB 官方文档、小林 coding、JavaGuide 和 CS-Notes，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["MVCC执行原理是什么","MVCC如何影响性能或一致性","MVCC线上问题怎么排查"], useCases: ["并发读写优化","快照读理解"], prerequisites: ["transaction","undo-log"], related: ["read-view","repeatable-read"], order: 43 },
  /* <!-- KG_REVIEWED: ReadView | 2026-05-24 | source_count=5 --> */
  /* <!-- KG_EXPLAINED: ReadView | 2026-05-23 | source_count=5 --> */
  { sourceRefs: ["mysql-reference","mysql-innodb","xiaolin-mysql","javaguide","cs-notes"], id: "read-view", zh: "ReadView", en: "ReadView", area: "transaction", difficulty: "hard", concept: "ReadView 定义当前事务可见的版本范围，是 MVCC 可见性判断核心。", explanation: ["核心概念：ReadView聚焦ReadView 定义当前事务可见的版本范围，是 MVCC 可见性判断核心。。MySQL 通过 SQL、InnoDB、索引、事务、日志和复制支撑关系型数据读写；理解它时先抓住ACID、隔离级别、MVCC 和 ReadView，再看输入、状态变化、输出结果和失败分支。","适用场景：ReadView常用于快照读排查和隔离级别理解。学习时把它放回MySQL链路中观察，并结合前置知识MVCC判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，ReadView通常会和Undo Log一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点风险和细节较多。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认ACID、隔离级别、MVCC 和 ReadView是否仍然成立。","常见误区与注意点：实践中容易把ReadView当成孤立概念处理，结果遗漏幻读、脏读、长事务、版本链膨胀和锁等待。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考MySQL 8.4 Reference Manual、InnoDB 官方文档、小林 coding、JavaGuide 和 CS-Notes，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["ReadView执行原理是什么","ReadView如何影响性能或一致性","ReadView线上问题怎么排查"], useCases: ["快照读排查","隔离级别理解"], prerequisites: ["mvcc"], related: ["undo-log"], order: 44 },
  /* <!-- KG_REVIEWED: Redo Log | 2026-05-24 | source_count=5 --> */
  /* <!-- KG_EXPLAINED: Redo Log | 2026-05-23 | source_count=5 --> */
  { sourceRefs: ["mysql-reference","mysql-innodb","xiaolin-mysql","javaguide","cs-notes"], id: "redo-log", zh: "Redo Log", en: "Redo Log", area: "log", difficulty: "hard", concept: "Redo Log 记录物理修改，保证事务提交后的持久性和崩溃恢复。", explanation: ["核心概念：Redo Log聚焦Redo Log 记录物理修改，保证事务提交后的持久性和崩溃恢复。。MySQL 通过 SQL、InnoDB、索引、事务、日志和复制支撑关系型数据读写；理解它时先抓住Redo、Undo、Binlog 和提交一致性，再看输入、状态变化、输出结果和失败分支。","适用场景：Redo Log常用于崩溃恢复和写入性能分析。学习时把它放回MySQL链路中观察，并结合前置知识InnoDB和ACID判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，Redo Log通常会和Binlog和Checkpoint一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点风险和细节较多。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认Redo、Undo、Binlog 和提交一致性是否仍然成立。","常见误区与注意点：实践中容易把Redo Log当成孤立概念处理，结果遗漏刷盘策略、两阶段提交、日志空间和恢复窗口。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考MySQL 8.4 Reference Manual、InnoDB 官方文档、小林 coding、JavaGuide 和 CS-Notes，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["Redo Log执行原理是什么","Redo Log如何影响性能或一致性","Redo Log线上问题怎么排查"], useCases: ["崩溃恢复","写入性能分析"], prerequisites: ["innodb","acid"], related: ["binlog","checkpoint"], order: 45 },
  /* <!-- KG_REVIEWED: Undo Log | 2026-06-04 | source_count=6 --> */
  /* <!-- KG_EXPLAINED: Undo Log | 2026-05-23 | source_count=5 --> */
  { sourceRefs: ["mysql-reference","mysql-innodb","xiaolin-mysql","javaguide","cs-notes"], id: "undo-log", zh: "Undo Log", en: "Undo Log", area: "log", difficulty: "hard", concept: "Undo Log 保存旧版本数据，用于事务回滚和 MVCC 快照读。", explanation: ["核心概念：Undo Log聚焦Undo Log 保存旧版本数据，用于事务回滚和 MVCC 快照读。。MySQL 通过 SQL、InnoDB、索引、事务、日志和复制支撑关系型数据读写；理解它时先抓住Redo、Undo、Binlog 和提交一致性，再看输入、状态变化、输出结果和失败分支。","适用场景：Undo Log常用于事务回滚和版本链分析。学习时把它放回MySQL链路中观察，并结合前置知识事务判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，Undo Log通常会和MVCC和ReadView一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点风险和细节较多。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认Redo、Undo、Binlog 和提交一致性是否仍然成立。","常见误区与注意点：实践中容易把Undo Log当成孤立概念处理，结果遗漏刷盘策略、两阶段提交、日志空间和恢复窗口。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考MySQL 8.4 Reference Manual、InnoDB 官方文档、小林 coding、JavaGuide 和 CS-Notes，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["Undo Log执行原理是什么","Undo Log如何影响性能或一致性","Undo Log线上问题怎么排查"], useCases: ["事务回滚","版本链分析"], prerequisites: ["transaction"], related: ["mvcc","read-view"], order: 46 },
  /* <!-- KG_REVIEWED: Binlog | 2026-06-04 | source_count=6 --> */
  /* <!-- KG_EXPLAINED: Binlog | 2026-05-23 | source_count=5 --> */
  { sourceRefs: ["mysql-reference","mysql-innodb","xiaolin-mysql","javaguide","cs-notes"], id: "binlog", zh: "Binlog", en: "Binary Log", area: "log", difficulty: "medium", concept: "Binlog 记录逻辑变更，用于复制、恢复和数据同步。", explanation: ["核心概念：Binlog（Binary Log）聚焦Binlog 记录逻辑变更，用于复制、恢复和数据同步。。MySQL 通过 SQL、InnoDB、索引、事务、日志和复制支撑关系型数据读写；理解它时先抓住Redo、Undo、Binlog 和提交一致性，再看输入、状态变化、输出结果和失败分支。","适用场景：Binlog常用于主从复制、数据恢复和CDC 同步。学习时把它放回MySQL链路中观察，并结合前置知识MySQL 概览判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，Binlog通常会和主从复制和两阶段提交一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点需要结合流程和指标判断。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认Redo、Undo、Binlog 和提交一致性是否仍然成立。","常见误区与注意点：实践中容易把Binlog当成孤立概念处理，结果遗漏刷盘策略、两阶段提交、日志空间和恢复窗口。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考MySQL 8.4 Reference Manual、InnoDB 官方文档、小林 coding、JavaGuide 和 CS-Notes，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["Binlog执行原理是什么","Binlog如何影响性能或一致性","Binlog线上问题怎么排查"], useCases: ["主从复制","数据恢复","CDC 同步"], prerequisites: ["mysql-overview"], related: ["replication","two-phase-commit"], order: 47 },
  /* <!-- KG_REVIEWED: 两阶段提交 | 2026-06-04 | source_count=6 --> */
  /* <!-- KG_EXPLAINED: 两阶段提交 | 2026-05-23 | source_count=5 --> */
  { sourceRefs: ["mysql-reference","mysql-innodb","xiaolin-mysql","javaguide","cs-notes"], id: "two-phase-commit", zh: "两阶段提交", en: "Two-phase Commit", area: "log", difficulty: "hard", concept: "两阶段提交协调 Redo Log 和 Binlog，保证事务提交和复制日志一致。", explanation: ["核心概念：两阶段提交（Two-phase Commit）聚焦两阶段提交协调 Redo Log 和 Binlog，保证事务提交和复制日志一致。。MySQL 通过 SQL、InnoDB、索引、事务、日志和复制支撑关系型数据读写；理解它时先抓住Redo、Undo、Binlog 和提交一致性，再看输入、状态变化、输出结果和失败分支。","适用场景：两阶段提交常用于主从一致性理解和崩溃恢复分析。学习时把它放回MySQL链路中观察，并结合前置知识Redo Log和Binlog判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，两阶段提交通常会和崩溃恢复一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点风险和细节较多。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认Redo、Undo、Binlog 和提交一致性是否仍然成立。","常见误区与注意点：实践中容易把两阶段提交当成孤立概念处理，结果遗漏刷盘策略、两阶段提交、日志空间和恢复窗口。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考MySQL 8.4 Reference Manual、InnoDB 官方文档、小林 coding、JavaGuide 和 CS-Notes，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["两阶段提交执行原理是什么","两阶段提交如何影响性能或一致性","两阶段提交线上问题怎么排查"], useCases: ["主从一致性理解","崩溃恢复分析"], prerequisites: ["redo-log","binlog"], related: ["crash-recovery"], order: 48 },
  /* <!-- KG_REVIEWED: 崩溃恢复 | 2026-06-04 | source_count=8 --> */
  /* <!-- KG_EXPLAINED: 崩溃恢复 | 2026-05-23 | source_count=5 --> */
  { sourceRefs: ["mysql-reference","mysql-innodb","xiaolin-mysql","javaguide","cs-notes"], id: "crash-recovery", zh: "崩溃恢复", en: "Crash Recovery", area: "log", difficulty: "hard", concept: "崩溃恢复通过 Redo Log、Undo Log 和 Binlog 恢复到一致状态。", explanation: ["核心概念：崩溃恢复（Crash Recovery）聚焦崩溃恢复通过 Redo Log、Undo Log 和 Binlog 恢复到一致状态。。MySQL 通过 SQL、InnoDB、索引、事务、日志和复制支撑关系型数据读写；理解它时先抓住Redo、Undo、Binlog 和提交一致性，再看输入、状态变化、输出结果和失败分支。","适用场景：崩溃恢复常用于异常重启恢复和故障演练。学习时把它放回MySQL链路中观察，并结合前置知识Redo Log和Undo Log判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，崩溃恢复通常会和Checkpoint一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点风险和细节较多。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认Redo、Undo、Binlog 和提交一致性是否仍然成立。","常见误区与注意点：实践中容易把崩溃恢复当成孤立概念处理，结果遗漏刷盘策略、两阶段提交、日志空间和恢复窗口。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考MySQL 8.4 Reference Manual、InnoDB 官方文档、小林 coding、JavaGuide 和 CS-Notes，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["崩溃恢复执行原理是什么","崩溃恢复如何影响性能或一致性","崩溃恢复线上问题怎么排查"], useCases: ["异常重启恢复","故障演练"], prerequisites: ["redo-log","undo-log"], related: ["checkpoint"], order: 49 },
  /* <!-- KG_REVIEWED: 锁 | 2026-05-24 | source_count=5 --> */
  /* <!-- KG_EXPLAINED: 锁 | 2026-05-23 | source_count=5 --> */
  { sourceRefs: ["mysql-reference","mysql-innodb","xiaolin-mysql","javaguide","cs-notes"], id: "lock", zh: "锁", en: "Lock", area: "lock", difficulty: "medium", concept: "锁用于协调并发访问，保证数据修改的正确性。", explanation: ["核心概念：锁（Lock）聚焦锁用于协调并发访问，保证数据修改的正确性。。MySQL 通过 SQL、InnoDB、索引、事务、日志和复制支撑关系型数据读写；理解它时先抓住行锁、间隙锁、Next-Key Lock 和死锁，再看输入、状态变化、输出结果和失败分支。","适用场景：锁常用于并发更新、库存扣减和事务冲突分析。学习时把它放回MySQL链路中观察，并结合前置知识事务判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，锁通常会和行锁、间隙锁和死锁一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点需要结合流程和指标判断。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认行锁、间隙锁、Next-Key Lock 和死锁是否仍然成立。","常见误区与注意点：实践中容易把锁当成孤立概念处理，结果遗漏索引失效导致锁扩大、死锁回滚和长事务阻塞。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考MySQL 8.4 Reference Manual、InnoDB 官方文档、小林 coding、JavaGuide 和 CS-Notes，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["锁执行原理是什么","锁如何影响性能或一致性","锁线上问题怎么排查"], useCases: ["并发更新","库存扣减","事务冲突分析"], prerequisites: ["transaction"], related: ["row-lock","gap-lock","deadlock"], order: 50 },
  /* <!-- KG_REVIEWED: 行锁 | 2026-05-24 | source_count=5 --> */
  /* <!-- KG_EXPLAINED: 行锁 | 2026-05-23 | source_count=5 --> */
  { sourceRefs: ["mysql-reference","mysql-innodb","xiaolin-mysql","javaguide","cs-notes"], id: "row-lock", zh: "行锁", en: "Row Lock", area: "lock", difficulty: "medium", concept: "行锁锁定索引记录，减少并发冲突范围。", explanation: ["核心概念：行锁（Row Lock）聚焦行锁锁定索引记录，减少并发冲突范围。。MySQL 通过 SQL、InnoDB、索引、事务、日志和复制支撑关系型数据读写；理解它时先抓住行锁、间隙锁、Next-Key Lock 和死锁，再看输入、状态变化、输出结果和失败分支。","适用场景：行锁常用于高并发更新和单行状态流转。学习时把它放回MySQL链路中观察，并结合前置知识锁和索引判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，行锁通常会和记录锁和Next-Key Lock一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点需要结合流程和指标判断。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认行锁、间隙锁、Next-Key Lock 和死锁是否仍然成立。","常见误区与注意点：实践中容易把行锁当成孤立概念处理，结果遗漏索引失效导致锁扩大、死锁回滚和长事务阻塞。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考MySQL 8.4 Reference Manual、InnoDB 官方文档、小林 coding、JavaGuide 和 CS-Notes，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["行锁执行原理是什么","行锁如何影响性能或一致性","行锁线上问题怎么排查"], useCases: ["高并发更新","单行状态流转"], prerequisites: ["lock","mysql-index"], related: ["record-lock","next-key-lock"], order: 51 },
  /* <!-- KG_REVIEWED: 记录锁 | 2026-05-24 | source_count=5 --> */
  /* <!-- KG_EXPLAINED: 记录锁 | 2026-05-23 | source_count=5 --> */
  { sourceRefs: ["mysql-reference","mysql-innodb","xiaolin-mysql","javaguide","cs-notes"], id: "record-lock", zh: "记录锁", en: "Record Lock", area: "lock", difficulty: "medium", concept: "记录锁锁定索引中的具体记录。", explanation: ["核心概念：记录锁（Record Lock）聚焦记录锁锁定索引中的具体记录。。MySQL 通过 SQL、InnoDB、索引、事务、日志和复制支撑关系型数据读写；理解它时先抓住行锁、间隙锁、Next-Key Lock 和死锁，再看输入、状态变化、输出结果和失败分支。","适用场景：记录锁常用于精确条件更新和唯一键更新。学习时把它放回MySQL链路中观察，并结合前置知识行锁判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，记录锁通常会和间隙锁一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点需要结合流程和指标判断。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认行锁、间隙锁、Next-Key Lock 和死锁是否仍然成立。","常见误区与注意点：实践中容易把记录锁当成孤立概念处理，结果遗漏索引失效导致锁扩大、死锁回滚和长事务阻塞。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考MySQL 8.4 Reference Manual、InnoDB 官方文档、小林 coding、JavaGuide 和 CS-Notes，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["记录锁执行原理是什么","记录锁如何影响性能或一致性","记录锁线上问题怎么排查"], useCases: ["精确条件更新","唯一键更新"], prerequisites: ["row-lock"], related: ["gap-lock"], order: 52 },
  /* <!-- KG_REVIEWED: 间隙锁 | 2026-05-24 | source_count=5 --> */
  /* <!-- KG_EXPLAINED: 间隙锁 | 2026-05-23 | source_count=5 --> */
  { sourceRefs: ["mysql-reference","mysql-innodb","xiaolin-mysql","javaguide","cs-notes"], id: "gap-lock", zh: "间隙锁", en: "Gap Lock", area: "lock", difficulty: "hard", concept: "间隙锁锁定索引记录之间的范围，防止其他事务插入。", explanation: ["核心概念：间隙锁（Gap Lock）聚焦间隙锁锁定索引记录之间的范围，防止其他事务插入。。MySQL 通过 SQL、InnoDB、索引、事务、日志和复制支撑关系型数据读写；理解它时先抓住行锁、间隙锁、Next-Key Lock 和死锁，再看输入、状态变化、输出结果和失败分支。","适用场景：间隙锁常用于范围并发控制和幻读治理。学习时把它放回MySQL链路中观察，并结合前置知识行锁判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，间隙锁通常会和Next-Key Lock和幻读一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点风险和细节较多。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认行锁、间隙锁、Next-Key Lock 和死锁是否仍然成立。","常见误区与注意点：实践中容易把间隙锁当成孤立概念处理，结果遗漏索引失效导致锁扩大、死锁回滚和长事务阻塞。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考MySQL 8.4 Reference Manual、InnoDB 官方文档、小林 coding、JavaGuide 和 CS-Notes，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["间隙锁执行原理是什么","间隙锁如何影响性能或一致性","间隙锁线上问题怎么排查"], useCases: ["范围并发控制","幻读治理"], prerequisites: ["row-lock"], related: ["next-key-lock","phantom-read"], order: 53 },
  /* <!-- KG_REVIEWED: Next-Key Lock | 2026-05-24 | source_count=5 --> */
  /* <!-- KG_EXPLAINED: Next-Key Lock | 2026-05-23 | source_count=5 --> */
  { sourceRefs: ["mysql-reference","mysql-innodb","xiaolin-mysql","javaguide","cs-notes"], id: "next-key-lock", zh: "Next-Key Lock", en: "Next-Key Lock", area: "lock", difficulty: "hard", concept: "Next-Key Lock 是记录锁和间隙锁组合，用于范围锁定。", explanation: ["核心概念：Next-Key Lock聚焦Next-Key Lock 是记录锁和间隙锁组合，用于范围锁定。。MySQL 通过 SQL、InnoDB、索引、事务、日志和复制支撑关系型数据读写；理解它时先抓住行锁、间隙锁、Next-Key Lock 和死锁，再看输入、状态变化、输出结果和失败分支。","适用场景：Next-Key Lock常用于范围查询加锁和隔离级别分析。学习时把它放回MySQL链路中观察，并结合前置知识间隙锁判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，Next-Key Lock通常会和可重复读和幻读一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点风险和细节较多。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认行锁、间隙锁、Next-Key Lock 和死锁是否仍然成立。","常见误区与注意点：实践中容易把Next-Key Lock当成孤立概念处理，结果遗漏索引失效导致锁扩大、死锁回滚和长事务阻塞。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考MySQL 8.4 Reference Manual、InnoDB 官方文档、小林 coding、JavaGuide 和 CS-Notes，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["Next-Key Lock执行原理是什么","Next-Key Lock如何影响性能或一致性","Next-Key Lock线上问题怎么排查"], useCases: ["范围查询加锁","隔离级别分析"], prerequisites: ["gap-lock"], related: ["repeatable-read","phantom-read"], order: 54 },
  /* <!-- KG_REVIEWED: 死锁 | 2026-06-04 | source_count=7 --> */
  /* <!-- KG_EXPLAINED: 死锁 | 2026-05-23 | source_count=5 --> */
  { sourceRefs: ["mysql-reference","mysql-innodb","mysql-innodb-deadlocks","mysql-innodb-deadlocks-handling","mysql-innodb-deadlock-detection","mysql-innodb-locks-set","azure-sql-analyze-prevent-deadlocks","microsoft-sql-deadlocks-guide","wikipedia-wait-for-graph","sobyte-mysql-innodb-deadlock","oneuptime-mysql-locks","xiaolin-mysql","javaguide","cs-notes"], id: "deadlock", zh: "死锁", en: "Deadlock", area: "lock", difficulty: "hard", concept: "死锁是多个事务相互等待对方持有的锁，MySQL 会检测并回滚其中一个事务。", explanation: ["核心概念：死锁（Deadlock）聚焦死锁是多个事务相互等待对方持有的锁，MySQL 会检测并回滚其中一个事务。。MySQL 通过 SQL、InnoDB、索引、事务、日志和复制支撑关系型数据读写；理解它时先抓住行锁、间隙锁、Next-Key Lock 和死锁，再看输入、状态变化、输出结果和失败分支。","适用场景：死锁常用于并发写故障排查和事务顺序优化。学习时把它放回MySQL链路中观察，并结合前置知识锁判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，死锁通常会和死锁日志和事务一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点风险和细节较多。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认行锁、间隙锁、Next-Key Lock 和死锁是否仍然成立。","常见误区与注意点：实践中容易把死锁当成孤立概念处理，结果遗漏索引失效导致锁扩大、死锁回滚和长事务阻塞。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考MySQL 8.4 Reference Manual、InnoDB 官方文档、小林 coding、JavaGuide 和 CS-Notes，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["死锁执行原理是什么","死锁如何影响性能或一致性","死锁线上问题怎么排查"], useCases: ["并发写故障排查","事务顺序优化"], prerequisites: ["lock"], related: ["deadlock-log","transaction"], order: 55 },
  /* <!-- KG_REVIEWED: 死锁日志 | 2026-05-24 | source_count=5 --> */
  /* <!-- KG_EXPLAINED: 死锁日志 | 2026-05-23 | source_count=5 --> */
  { sourceRefs: ["mysql-reference","mysql-innodb","xiaolin-mysql","javaguide","cs-notes"], id: "deadlock-log", zh: "死锁日志", en: "Deadlock Log", area: "lock", difficulty: "medium", concept: "死锁日志记录死锁涉及的事务、SQL、索引和锁等待信息。", explanation: ["核心概念：死锁日志（Deadlock Log）聚焦死锁日志记录死锁涉及的事务、SQL、索引和锁等待信息。。MySQL 通过 SQL、InnoDB、索引、事务、日志和复制支撑关系型数据读写；理解它时先抓住行锁、间隙锁、Next-Key Lock 和死锁，再看输入、状态变化、输出结果和失败分支。","适用场景：死锁日志常用于死锁定位、SQL 调整和索引优化。学习时把它放回MySQL链路中观察，并结合前置知识死锁判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，死锁日志通常会和InnoDB 状态一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点需要结合流程和指标判断。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认行锁、间隙锁、Next-Key Lock 和死锁是否仍然成立。","常见误区与注意点：实践中容易把死锁日志当成孤立概念处理，结果遗漏索引失效导致锁扩大、死锁回滚和长事务阻塞。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考MySQL 8.4 Reference Manual、InnoDB 官方文档、小林 coding、JavaGuide 和 CS-Notes，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["死锁日志执行原理是什么","死锁日志如何影响性能或一致性","死锁日志线上问题怎么排查"], useCases: ["死锁定位","SQL 调整","索引优化"], prerequisites: ["deadlock"], related: ["show-engine-innodb-status"], order: 56 },
  /* <!-- KG_REVIEWED: SQL 优化 | 2026-05-24 | source_count=5 --> */
  /* <!-- KG_EXPLAINED: SQL 优化 | 2026-05-23 | source_count=5 --> */
  { sourceRefs: ["mysql-reference","mysql-innodb","xiaolin-mysql","javaguide","cs-notes"], id: "sql-optimization", zh: "SQL 优化", en: "SQL Optimization", area: "optimization", difficulty: "hard", concept: "SQL 优化通过索引、执行计划、SQL 改写和数据模型调整降低查询成本。", explanation: ["核心概念：SQL 优化（SQL Optimization）聚焦SQL 优化通过索引、执行计划、SQL 改写和数据模型调整降低查询成本。。MySQL 通过 SQL、InnoDB、索引、事务、日志和复制支撑关系型数据读写；理解它时先抓住执行计划、索引选择、SQL 改写和统计信息，再看输入、状态变化、输出结果和失败分支。","适用场景：SQL 优化常用于慢查询治理、接口响应优化和数据库成本下降。学习时把它放回MySQL链路中观察，并结合前置知识索引和SELECT 查询判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，SQL 优化通常会和EXPLAIN和慢查询日志一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点风险和细节较多。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认执行计划、索引选择、SQL 改写和统计信息是否仍然成立。","常见误区与注意点：实践中容易把SQL 优化当成孤立概念处理，结果遗漏filesort、临时表、扫描行数、Join 顺序和参数偏斜。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考MySQL 8.4 Reference Manual、InnoDB 官方文档、小林 coding、JavaGuide 和 CS-Notes，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["SQL 优化执行原理是什么","SQL 优化如何影响性能或一致性","SQL 优化线上问题怎么排查"], useCases: ["慢查询治理","接口响应优化","数据库成本下降"], prerequisites: ["mysql-index","select"], related: ["explain","slow-query-log"], order: 57 },
  /* <!-- KG_REVIEWED: EXPLAIN | 2026-05-24 | source_count=5 --> */
  /* <!-- KG_EXPLAINED: EXPLAIN | 2026-05-23 | source_count=5 --> */
  { sourceRefs: ["mysql-reference","mysql-innodb","xiaolin-mysql","javaguide","cs-notes"], id: "explain", zh: "EXPLAIN", en: "EXPLAIN", area: "optimization", difficulty: "medium", concept: "EXPLAIN 展示 SQL 执行计划，包括访问类型、索引、扫描行数和额外操作。", explanation: ["核心概念：EXPLAIN聚焦EXPLAIN 展示 SQL 执行计划，包括访问类型、索引、扫描行数和额外操作。。MySQL 通过 SQL、InnoDB、索引、事务、日志和复制支撑关系型数据读写；理解它时先抓住执行计划、索引选择、SQL 改写和统计信息，再看输入、状态变化、输出结果和失败分支。","适用场景：EXPLAIN常用于索引命中分析、JOIN 顺序排查和慢 SQL 定位。学习时把它放回MySQL链路中观察，并结合前置知识SQL 优化判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，EXPLAIN通常会和访问类型和Extra 信息一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点需要结合流程和指标判断。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认执行计划、索引选择、SQL 改写和统计信息是否仍然成立。","常见误区与注意点：实践中容易把EXPLAIN当成孤立概念处理，结果遗漏filesort、临时表、扫描行数、Join 顺序和参数偏斜。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考MySQL 8.4 Reference Manual、InnoDB 官方文档、小林 coding、JavaGuide 和 CS-Notes，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["EXPLAIN执行原理是什么","EXPLAIN如何影响性能或一致性","EXPLAIN线上问题怎么排查"], useCases: ["索引命中分析","JOIN 顺序排查","慢 SQL 定位"], prerequisites: ["sql-optimization"], related: ["access-type","extra"], order: 58 },
  /* <!-- KG_REVIEWED: 访问类型 | 2026-05-24 | source_count=5 --> */
  /* <!-- KG_EXPLAINED: 访问类型 | 2026-05-23 | source_count=5 --> */
  { sourceRefs: ["mysql-reference","mysql-innodb","xiaolin-mysql","javaguide","cs-notes"], id: "access-type", zh: "访问类型", en: "Access Type", area: "optimization", difficulty: "medium", concept: "访问类型表示表访问方式，例如 const、ref、range、index、ALL。", explanation: ["核心概念：访问类型（Access Type）聚焦访问类型表示表访问方式，例如 const、ref、range、index、ALL。。MySQL 通过 SQL、InnoDB、索引、事务、日志和复制支撑关系型数据读写；理解它时先抓住执行计划、索引选择、SQL 改写和统计信息，再看输入、状态变化、输出结果和失败分支。","适用场景：访问类型常用于全表扫描识别和索引效率判断。学习时把它放回MySQL链路中观察，并结合前置知识EXPLAIN判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，访问类型通常会和索引一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点需要结合流程和指标判断。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认执行计划、索引选择、SQL 改写和统计信息是否仍然成立。","常见误区与注意点：实践中容易把访问类型当成孤立概念处理，结果遗漏filesort、临时表、扫描行数、Join 顺序和参数偏斜。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考MySQL 8.4 Reference Manual、InnoDB 官方文档、小林 coding、JavaGuide 和 CS-Notes，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["访问类型执行原理是什么","访问类型如何影响性能或一致性","访问类型线上问题怎么排查"], useCases: ["全表扫描识别","索引效率判断"], prerequisites: ["explain"], related: ["mysql-index"], order: 59 },
  /* <!-- KG_REVIEWED: Extra 信息 | 2026-05-24 | source_count=5 --> */
  /* <!-- KG_EXPLAINED: Extra 信息 | 2026-05-23 | source_count=5 --> */
  { sourceRefs: ["mysql-reference","mysql-innodb","xiaolin-mysql","javaguide","cs-notes"], id: "extra", zh: "Extra 信息", en: "EXPLAIN Extra", area: "optimization", difficulty: "medium", concept: "Extra 显示 Using index、Using filesort、Using temporary 等额外执行信息。", explanation: ["核心概念：Extra 信息（EXPLAIN Extra）聚焦Extra 显示 Using index、Using filesort、Using temporary 等额外执行信息。。MySQL 通过 SQL、InnoDB、索引、事务、日志和复制支撑关系型数据读写；理解它时先抓住执行计划、索引选择、SQL 改写和统计信息，再看输入、状态变化、输出结果和失败分支。","适用场景：Extra 信息常用于排序优化和临时表排查。学习时把它放回MySQL链路中观察，并结合前置知识EXPLAIN判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，Extra 信息通常会和Filesort和临时表一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点需要结合流程和指标判断。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认执行计划、索引选择、SQL 改写和统计信息是否仍然成立。","常见误区与注意点：实践中容易把Extra 信息当成孤立概念处理，结果遗漏filesort、临时表、扫描行数、Join 顺序和参数偏斜。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考MySQL 8.4 Reference Manual、InnoDB 官方文档、小林 coding、JavaGuide 和 CS-Notes，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["Extra 信息执行原理是什么","Extra 信息如何影响性能或一致性","Extra 信息线上问题怎么排查"], useCases: ["排序优化","临时表排查"], prerequisites: ["explain"], related: ["filesort","temporary-table"], order: 60 },
  /* <!-- KG_REVIEWED: Filesort | 2026-05-24 | source_count=5 --> */
  /* <!-- KG_EXPLAINED: Filesort | 2026-05-23 | source_count=5 --> */
  { sourceRefs: ["mysql-reference","mysql-innodb","xiaolin-mysql","javaguide","cs-notes"], id: "filesort", zh: "Filesort", en: "Filesort", area: "optimization", difficulty: "medium", concept: "Filesort 是 MySQL 额外排序过程，可能增加内存和磁盘开销。", explanation: ["核心概念：Filesort聚焦Filesort 是 MySQL 额外排序过程，可能增加内存和磁盘开销。。MySQL 通过 SQL、InnoDB、索引、事务、日志和复制支撑关系型数据读写；理解它时先抓住执行计划、索引选择、SQL 改写和统计信息，再看输入、状态变化、输出结果和失败分支。","适用场景：Filesort常用于排序慢查询优化和排行榜查询优化。学习时把它放回MySQL链路中观察，并结合前置知识ORDER BY和Extra 信息判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，Filesort通常会和联合索引一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点需要结合流程和指标判断。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认执行计划、索引选择、SQL 改写和统计信息是否仍然成立。","常见误区与注意点：实践中容易把Filesort当成孤立概念处理，结果遗漏filesort、临时表、扫描行数、Join 顺序和参数偏斜。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考MySQL 8.4 Reference Manual、InnoDB 官方文档、小林 coding、JavaGuide 和 CS-Notes，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["Filesort执行原理是什么","Filesort如何影响性能或一致性","Filesort线上问题怎么排查"], useCases: ["排序慢查询优化","排行榜查询优化"], prerequisites: ["order-by","extra"], related: ["composite-index"], order: 61 },
  /* <!-- KG_REVIEWED: 临时表 | 2026-05-24 | source_count=5 --> */
  /* <!-- KG_EXPLAINED: 临时表 | 2026-05-23 | source_count=5 --> */
  { sourceRefs: ["mysql-reference","mysql-innodb","xiaolin-mysql","javaguide","cs-notes"], id: "temporary-table", zh: "临时表", en: "Temporary Table", area: "optimization", difficulty: "medium", concept: "临时表用于处理中间结果，常出现在复杂排序、分组和去重场景。", explanation: ["核心概念：临时表（Temporary Table）聚焦临时表用于处理中间结果，常出现在复杂排序、分组和去重场景。。MySQL 通过 SQL、InnoDB、索引、事务、日志和复制支撑关系型数据读写；理解它时先抓住执行计划、索引选择、SQL 改写和统计信息，再看输入、状态变化、输出结果和失败分支。","适用场景：临时表常用于聚合查询优化和报表查询排查。学习时把它放回MySQL链路中观察，并结合前置知识GROUP BY和Extra 信息判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，临时表通常会和SQL 优化一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点需要结合流程和指标判断。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认执行计划、索引选择、SQL 改写和统计信息是否仍然成立。","常见误区与注意点：实践中容易把临时表当成孤立概念处理，结果遗漏filesort、临时表、扫描行数、Join 顺序和参数偏斜。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考MySQL 8.4 Reference Manual、InnoDB 官方文档、小林 coding、JavaGuide 和 CS-Notes，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["临时表执行原理是什么","临时表如何影响性能或一致性","临时表线上问题怎么排查"], useCases: ["聚合查询优化","报表查询排查"], prerequisites: ["group-by","extra"], related: ["sql-optimization"], order: 62 },
  /* <!-- KG_REVIEWED: 慢查询日志 | 2026-05-24 | source_count=5 --> */
  /* <!-- KG_EXPLAINED: 慢查询日志 | 2026-05-23 | source_count=5 --> */
  { sourceRefs: ["mysql-reference","mysql-innodb","xiaolin-mysql","javaguide","cs-notes"], id: "slow-query-log", zh: "慢查询日志", en: "Slow Query Log", area: "optimization", difficulty: "easy", concept: "慢查询日志记录执行时间超过阈值的 SQL，用于定位性能问题。", explanation: ["核心概念：慢查询日志（Slow Query Log）聚焦慢查询日志记录执行时间超过阈值的 SQL，用于定位性能问题。。MySQL 通过 SQL、InnoDB、索引、事务、日志和复制支撑关系型数据读写；理解它时先抓住执行计划、索引选择、SQL 改写和统计信息，再看输入、状态变化、输出结果和失败分支。","适用场景：慢查询日志常用于慢 SQL 收集、性能巡检和优化看板。学习时把它放回MySQL链路中观察，并结合前置知识SQL 优化判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，慢查询日志通常会和EXPLAIN和Performance Schema一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点适合先掌握主流程。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认执行计划、索引选择、SQL 改写和统计信息是否仍然成立。","常见误区与注意点：实践中容易把慢查询日志当成孤立概念处理，结果遗漏filesort、临时表、扫描行数、Join 顺序和参数偏斜。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考MySQL 8.4 Reference Manual、InnoDB 官方文档、小林 coding、JavaGuide 和 CS-Notes，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["慢查询日志执行原理是什么","慢查询日志如何影响性能或一致性","慢查询日志线上问题怎么排查"], useCases: ["慢 SQL 收集","性能巡检","优化看板"], prerequisites: ["sql-optimization"], related: ["explain","performance-schema"], order: 63 },
  /* <!-- KG_REVIEWED: JOIN 顺序 | 2026-05-24 | source_count=5 --> */
  /* <!-- KG_EXPLAINED: JOIN 顺序 | 2026-05-23 | source_count=5 --> */
  { sourceRefs: ["mysql-reference","mysql-innodb","xiaolin-mysql","javaguide","cs-notes"], id: "join-order", zh: "JOIN 顺序", en: "Join Order", area: "optimization", difficulty: "hard", concept: "JOIN 顺序影响驱动表选择、扫描行数和临时结果大小。", explanation: ["核心概念：JOIN 顺序（Join Order）聚焦JOIN 顺序影响驱动表选择、扫描行数和临时结果大小。。MySQL 通过 SQL、InnoDB、索引、事务、日志和复制支撑关系型数据读写；理解它时先抓住执行计划、索引选择、SQL 改写和统计信息，再看输入、状态变化、输出结果和失败分支。","适用场景：JOIN 顺序常用于多表查询优化和执行计划分析。学习时把它放回MySQL链路中观察，并结合前置知识JOIN和EXPLAIN判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，JOIN 顺序通常会和索引选择性一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点风险和细节较多。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认执行计划、索引选择、SQL 改写和统计信息是否仍然成立。","常见误区与注意点：实践中容易把JOIN 顺序当成孤立概念处理，结果遗漏filesort、临时表、扫描行数、Join 顺序和参数偏斜。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考MySQL 8.4 Reference Manual、InnoDB 官方文档、小林 coding、JavaGuide 和 CS-Notes，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["JOIN 顺序执行原理是什么","JOIN 顺序如何影响性能或一致性","JOIN 顺序线上问题怎么排查"], useCases: ["多表查询优化","执行计划分析"], prerequisites: ["join","explain"], related: ["index-selectivity"], order: 64 },
  /* <!-- KG_REVIEWED: 主从复制 | 2026-06-04 | source_count=13 --> */
  /* <!-- KG_EXPLAINED: 主从复制 | 2026-05-23 | source_count=5 --> */
  { sourceRefs: ["mysql-reference","mysql-innodb","mysql-source-replica-replication","mysql-replication-implementation","mysql-replication-threads","mysql-replica-logs-status","mysql-show-replica-status","mysql-semisync-replication","mysql-binary-log","percona-mysql-replication-architecture","xiaolin-mysql","javaguide","cs-notes"], id: "replication", zh: "主从复制", en: "Replication", area: "replication", difficulty: "medium", concept: "主从复制通过 Binlog 把主库变更同步到从库，实现读扩展和高可用基础。", explanation: ["核心概念：主从复制（Replication）聚焦主从复制通过 Binlog 把主库变更同步到从库，实现读扩展和高可用基础。。MySQL 通过 SQL、InnoDB、索引、事务、日志和复制支撑关系型数据读写；理解它时先抓住Binlog 复制、GTID、延迟和故障切换，再看输入、状态变化、输出结果和失败分支。","适用场景：主从复制常用于读写分离、灾备和数据同步。学习时把它放回MySQL链路中观察，并结合前置知识Binlog判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，主从复制通常会和复制延迟和读写分离一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点需要结合流程和指标判断。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认Binlog 复制、GTID、延迟和故障切换是否仍然成立。","常见误区与注意点：实践中容易把主从复制当成孤立概念处理，结果遗漏复制延迟、只读一致性、半同步和切换窗口。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考MySQL 8.4 Reference Manual、InnoDB 官方文档、小林 coding、JavaGuide 和 CS-Notes，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["主从复制执行原理是什么","主从复制如何影响性能或一致性","主从复制线上问题怎么排查"], useCases: ["读写分离","灾备","数据同步"], prerequisites: ["binlog"], related: ["replication-lag","read-write-splitting"], order: 65 },
  /* <!-- KG_REVIEWED: 读写分离 | 2026-05-24 | source_count=5 --> */
  /* <!-- KG_EXPLAINED: 读写分离 | 2026-05-23 | source_count=5 --> */
  { sourceRefs: ["mysql-reference","mysql-innodb","xiaolin-mysql","javaguide","cs-notes"], id: "read-write-splitting", zh: "读写分离", en: "Read Write Splitting", area: "replication", difficulty: "medium", concept: "读写分离将写请求发往主库，读请求发往从库，提升读吞吐。", explanation: ["核心概念：读写分离（Read Write Splitting）聚焦读写分离将写请求发往主库，读请求发往从库，提升读吞吐。。MySQL 通过 SQL、InnoDB、索引、事务、日志和复制支撑关系型数据读写；理解它时先抓住Binlog 复制、GTID、延迟和故障切换，再看输入、状态变化、输出结果和失败分支。","适用场景：读写分离常用于高读流量系统和报表查询隔离。学习时把它放回MySQL链路中观察，并结合前置知识主从复制判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，读写分离通常会和复制延迟一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点需要结合流程和指标判断。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认Binlog 复制、GTID、延迟和故障切换是否仍然成立。","常见误区与注意点：实践中容易把读写分离当成孤立概念处理，结果遗漏复制延迟、只读一致性、半同步和切换窗口。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考MySQL 8.4 Reference Manual、InnoDB 官方文档、小林 coding、JavaGuide 和 CS-Notes，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["读写分离执行原理是什么","读写分离如何影响性能或一致性","读写分离线上问题怎么排查"], useCases: ["高读流量系统","报表查询隔离"], prerequisites: ["replication"], related: ["replication-lag"], order: 66 },
  /* <!-- KG_REVIEWED: 复制延迟 | 2026-06-04 | source_count=12 --> */
  /* <!-- KG_EXPLAINED: 复制延迟 | 2026-05-23 | source_count=5 --> */
  { sourceRefs: ["mysql-reference","mysql-innodb","mysql-replication-implementation","mysql-replication-threads","mysql-replica-logs-status","mysql-show-replica-status","mysql-replication-delayed","mysql-replication-gtid-lifecycle","percona-mysql-replication-architecture","xiaolin-mysql","javaguide","cs-notes"], id: "replication-lag", zh: "复制延迟", en: "Replication Lag", area: "replication", difficulty: "medium", concept: "复制延迟表示从库落后主库的时间或事务差距。", explanation: ["核心概念：复制延迟（Replication Lag）聚焦复制延迟表示从库落后主库的时间或事务差距。。MySQL 通过 SQL、InnoDB、索引、事务、日志和复制支撑关系型数据读写；理解它时先抓住Binlog 复制、GTID、延迟和故障切换，再看输入、状态变化、输出结果和失败分支。","适用场景：复制延迟常用于读到旧数据排查和主从健康监控。学习时把它放回MySQL链路中观察，并结合前置知识主从复制判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，复制延迟通常会和读写分离一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点需要结合流程和指标判断。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认Binlog 复制、GTID、延迟和故障切换是否仍然成立。","常见误区与注意点：实践中容易把复制延迟当成孤立概念处理，结果遗漏复制延迟、只读一致性、半同步和切换窗口。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考MySQL 8.4 Reference Manual、InnoDB 官方文档、小林 coding、JavaGuide 和 CS-Notes，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["复制延迟执行原理是什么","复制延迟如何影响性能或一致性","复制延迟线上问题怎么排查"], useCases: ["读到旧数据排查","主从健康监控"], prerequisites: ["replication"], related: ["read-write-splitting"], order: 67 },
  /* <!-- KG_REVIEWED: GTID | 2026-06-04 | source_count=12 --> */
  /* <!-- KG_EXPLAINED: GTID | 2026-05-23 | source_count=5 --> */
  { sourceRefs: ["mysql-reference","mysql-innodb","mysql-replication-gtid-lifecycle","mysql-replication-gtid-format","mysql-replication-gtid-auto-positioning","mysql-show-replica-status","mysql-replica-logs-status","oracle-mysql-ha-solutions-gtid","hackmysql-gtid-missing-writes","xiaolin-mysql","javaguide","cs-notes"], id: "gtid", zh: "GTID", en: "Global Transaction Identifier", area: "replication", difficulty: "hard", concept: "GTID 为每个事务分配全局唯一编号，简化主从切换和复制定位。", explanation: ["核心概念：GTID（Global Transaction Identifier）聚焦GTID 为每个事务分配全局唯一编号，简化主从切换和复制定位。。MySQL 通过 SQL、InnoDB、索引、事务、日志和复制支撑关系型数据读写；理解它时先抓住Binlog 复制、GTID、延迟和故障切换，再看输入、状态变化、输出结果和失败分支。","适用场景：GTID常用于复制故障恢复和主从切换。学习时把它放回MySQL链路中观察，并结合前置知识主从复制判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，GTID通常会和故障切换一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点风险和细节较多。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认Binlog 复制、GTID、延迟和故障切换是否仍然成立。","常见误区与注意点：实践中容易把GTID当成孤立概念处理，结果遗漏复制延迟、只读一致性、半同步和切换窗口。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考MySQL 8.4 Reference Manual、InnoDB 官方文档、小林 coding、JavaGuide 和 CS-Notes，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["GTID执行原理是什么","GTID如何影响性能或一致性","GTID线上问题怎么排查"], useCases: ["复制故障恢复","主从切换"], prerequisites: ["replication"], related: ["failover"], order: 68 },
  /* <!-- KG_REVIEWED: 故障切换 | 2026-05-24 | source_count=5 --> */
  /* <!-- KG_EXPLAINED: 故障切换 | 2026-05-23 | source_count=5 --> */
  { sourceRefs: ["mysql-reference","mysql-innodb","xiaolin-mysql","javaguide","cs-notes"], id: "failover", zh: "故障切换", en: "Failover", area: "replication", difficulty: "hard", concept: "故障切换在主库不可用时提升从库为新主库，恢复写入能力。", explanation: ["核心概念：故障切换（Failover）聚焦故障切换在主库不可用时提升从库为新主库，恢复写入能力。。MySQL 通过 SQL、InnoDB、索引、事务、日志和复制支撑关系型数据读写；理解它时先抓住Binlog 复制、GTID、延迟和故障切换，再看输入、状态变化、输出结果和失败分支。","适用场景：故障切换常用于数据库高可用和主库故障恢复。学习时把它放回MySQL链路中观察，并结合前置知识主从复制和GTID判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，故障切换通常会和备份恢复一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点风险和细节较多。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认Binlog 复制、GTID、延迟和故障切换是否仍然成立。","常见误区与注意点：实践中容易把故障切换当成孤立概念处理，结果遗漏复制延迟、只读一致性、半同步和切换窗口。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考MySQL 8.4 Reference Manual、InnoDB 官方文档、小林 coding、JavaGuide 和 CS-Notes，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["故障切换执行原理是什么","故障切换如何影响性能或一致性","故障切换线上问题怎么排查"], useCases: ["数据库高可用","主库故障恢复"], prerequisites: ["replication","gtid"], related: ["backup-restore"], order: 69 },
  /* <!-- KG_REVIEWED: 分库分表 | 2026-05-24 | source_count=5 --> */
  /* <!-- KG_EXPLAINED: 分库分表 | 2026-05-23 | source_count=5 --> */
  { sourceRefs: ["mysql-reference","mysql-innodb","xiaolin-mysql","javaguide","cs-notes"], id: "sharding", zh: "分库分表", en: "Sharding", area: "scaling", difficulty: "hard", concept: "分库分表把数据按规则拆到多个库表，突破单库容量和吞吐限制。", explanation: ["核心概念：分库分表（Sharding）聚焦分库分表把数据按规则拆到多个库表，突破单库容量和吞吐限制。。MySQL 通过 SQL、InnoDB、索引、事务、日志和复制支撑关系型数据读写；理解它时先抓住分库分表、分片键、热点和分区表，再看输入、状态变化、输出结果和失败分支。","适用场景：分库分表常用于海量订单、大用户量系统和写入扩展。学习时把它放回MySQL链路中观察，并结合前置知识表结构设计和主键判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，分库分表通常会和分片键和雪花 ID一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点风险和细节较多。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认分库分表、分片键、热点和分区表是否仍然成立。","常见误区与注意点：实践中容易把分库分表当成孤立概念处理，结果遗漏跨分片事务、路由复杂度、热点分片和扩容迁移。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考MySQL 8.4 Reference Manual、InnoDB 官方文档、小林 coding、JavaGuide 和 CS-Notes，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["分库分表执行原理是什么","分库分表如何影响性能或一致性","分库分表线上问题怎么排查"], useCases: ["海量订单","大用户量系统","写入扩展"], prerequisites: ["schema-design","primary-key"], related: ["sharding-key","snowflake-id"], order: 70 },
  /* <!-- KG_REVIEWED: 分片键 | 2026-05-24 | source_count=5 --> */
  /* <!-- KG_EXPLAINED: 分片键 | 2026-05-23 | source_count=5 --> */
  { sourceRefs: ["mysql-reference","mysql-innodb","xiaolin-mysql","javaguide","cs-notes"], id: "sharding-key", zh: "分片键", en: "Sharding Key", area: "scaling", difficulty: "hard", concept: "分片键决定数据路由和查询效率，选择不当会造成热点和跨分片查询。", explanation: ["核心概念：分片键（Sharding Key）聚焦分片键决定数据路由和查询效率，选择不当会造成热点和跨分片查询。。MySQL 通过 SQL、InnoDB、索引、事务、日志和复制支撑关系型数据读写；理解它时先抓住分库分表、分片键、热点和分区表，再看输入、状态变化、输出结果和失败分支。","适用场景：分片键常用于订单按用户分片、租户隔离和路由规则设计。学习时把它放回MySQL链路中观察，并结合前置知识分库分表判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，分片键通常会和热点数据一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点风险和细节较多。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认分库分表、分片键、热点和分区表是否仍然成立。","常见误区与注意点：实践中容易把分片键当成孤立概念处理，结果遗漏跨分片事务、路由复杂度、热点分片和扩容迁移。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考MySQL 8.4 Reference Manual、InnoDB 官方文档、小林 coding、JavaGuide 和 CS-Notes，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["分片键执行原理是什么","分片键如何影响性能或一致性","分片键线上问题怎么排查"], useCases: ["订单按用户分片","租户隔离","路由规则设计"], prerequisites: ["sharding"], related: ["hotspot"], order: 71 },
  /* <!-- KG_REVIEWED: 热点数据 | 2026-05-24 | source_count=5 --> */
  /* <!-- KG_EXPLAINED: 热点数据 | 2026-05-23 | source_count=5 --> */
  { sourceRefs: ["mysql-reference","mysql-innodb","xiaolin-mysql","javaguide","cs-notes"], id: "hotspot", zh: "热点数据", en: "Hotspot Data", area: "scaling", difficulty: "medium", concept: "热点数据是访问高度集中的数据，会导致单库、单表或单行成为瓶颈。", explanation: ["核心概念：热点数据（Hotspot Data）聚焦热点数据是访问高度集中的数据，会导致单库、单表或单行成为瓶颈。。MySQL 通过 SQL、InnoDB、索引、事务、日志和复制支撑关系型数据读写；理解它时先抓住分库分表、分片键、热点和分区表，再看输入、状态变化、输出结果和失败分支。","适用场景：热点数据常用于秒杀库存、热门内容和大客户租户。学习时把它放回MySQL链路中观察，并结合前置知识分库分表判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，热点数据通常会和读写分离一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点需要结合流程和指标判断。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认分库分表、分片键、热点和分区表是否仍然成立。","常见误区与注意点：实践中容易把热点数据当成孤立概念处理，结果遗漏跨分片事务、路由复杂度、热点分片和扩容迁移。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考MySQL 8.4 Reference Manual、InnoDB 官方文档、小林 coding、JavaGuide 和 CS-Notes，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["热点数据执行原理是什么","热点数据如何影响性能或一致性","热点数据线上问题怎么排查"], useCases: ["秒杀库存","热门内容","大客户租户"], prerequisites: ["sharding"], related: ["read-write-splitting"], order: 72 },
  /* <!-- KG_REVIEWED: 分区表 | 2026-05-24 | source_count=5 --> */
  /* <!-- KG_EXPLAINED: 分区表 | 2026-05-23 | source_count=5 --> */
  { sourceRefs: ["mysql-reference","mysql-innodb","xiaolin-mysql","javaguide","cs-notes"], id: "partition-table", zh: "分区表", en: "Partitioned Table", area: "scaling", difficulty: "medium", concept: "分区表把单表数据按范围或规则拆成多个分区，便于管理和裁剪扫描。", explanation: ["核心概念：分区表（Partitioned Table）聚焦分区表把单表数据按范围或规则拆成多个分区，便于管理和裁剪扫描。。MySQL 通过 SQL、InnoDB、索引、事务、日志和复制支撑关系型数据读写；理解它时先抓住分库分表、分片键、热点和分区表，再看输入、状态变化、输出结果和失败分支。","适用场景：分区表常用于按月日志表、历史数据归档和大表维护。学习时把它放回MySQL链路中观察，并结合前置知识表结构设计判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，分区表通常会和范围查询一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点需要结合流程和指标判断。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认分库分表、分片键、热点和分区表是否仍然成立。","常见误区与注意点：实践中容易把分区表当成孤立概念处理，结果遗漏跨分片事务、路由复杂度、热点分片和扩容迁移。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考MySQL 8.4 Reference Manual、InnoDB 官方文档、小林 coding、JavaGuide 和 CS-Notes，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["分区表执行原理是什么","分区表如何影响性能或一致性","分区表线上问题怎么排查"], useCases: ["按月日志表","历史数据归档","大表维护"], prerequisites: ["schema-design"], related: ["range-query"], order: 73 },
  /* <!-- KG_REVIEWED: 备份恢复 | 2026-05-24 | source_count=5 --> */
  /* <!-- KG_EXPLAINED: 备份恢复 | 2026-05-23 | source_count=5 --> */
  { sourceRefs: ["mysql-reference","mysql-innodb","xiaolin-mysql","javaguide","cs-notes"], id: "backup-restore", zh: "备份恢复", en: "Backup and Restore", area: "operations", difficulty: "medium", concept: "备份恢复保障误删、故障和灾难场景下的数据可恢复。", explanation: ["核心概念：备份恢复（Backup and Restore）聚焦备份恢复保障误删、故障和灾难场景下的数据可恢复。。MySQL 通过 SQL、InnoDB、索引、事务、日志和复制支撑关系型数据读写；理解它时先抓住备份恢复、在线 DDL、连接池和性能观测，再看输入、状态变化、输出结果和失败分支。","适用场景：备份恢复常用于灾备演练、误删恢复和迁移回滚。学习时把它放回MySQL链路中观察，并结合前置知识MySQL 概览判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，备份恢复通常会和逻辑备份、物理备份和时间点恢复一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点需要结合流程和指标判断。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认备份恢复、在线 DDL、连接池和性能观测是否仍然成立。","常见误区与注意点：实践中容易把备份恢复当成孤立概念处理，结果遗漏元数据锁、备份一致性、连接耗尽和恢复演练。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考MySQL 8.4 Reference Manual、InnoDB 官方文档、小林 coding、JavaGuide 和 CS-Notes，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["备份恢复执行原理是什么","备份恢复如何影响性能或一致性","备份恢复线上问题怎么排查"], useCases: ["灾备演练","误删恢复","迁移回滚"], prerequisites: ["mysql-overview"], related: ["logical-backup","physical-backup","point-in-time-recovery"], order: 74 },
  /* <!-- KG_REVIEWED: 逻辑备份 | 2026-05-24 | source_count=5 --> */
  /* <!-- KG_EXPLAINED: 逻辑备份 | 2026-05-23 | source_count=5 --> */
  { sourceRefs: ["mysql-reference","mysql-innodb","xiaolin-mysql","javaguide","cs-notes"], id: "logical-backup", zh: "逻辑备份", en: "Logical Backup", area: "operations", difficulty: "easy", concept: "逻辑备份导出 SQL 或逻辑数据，便于跨版本、跨平台迁移。", explanation: ["核心概念：逻辑备份（Logical Backup）聚焦逻辑备份导出 SQL 或逻辑数据，便于跨版本、跨平台迁移。。MySQL 通过 SQL、InnoDB、索引、事务、日志和复制支撑关系型数据读写；理解它时先抓住备份恢复、在线 DDL、连接池和性能观测，再看输入、状态变化、输出结果和失败分支。","适用场景：逻辑备份常用于小库备份、结构迁移和数据抽样。学习时把它放回MySQL链路中观察，并结合前置知识备份恢复判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，逻辑备份通常会和mysqldump一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点适合先掌握主流程。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认备份恢复、在线 DDL、连接池和性能观测是否仍然成立。","常见误区与注意点：实践中容易把逻辑备份当成孤立概念处理，结果遗漏元数据锁、备份一致性、连接耗尽和恢复演练。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考MySQL 8.4 Reference Manual、InnoDB 官方文档、小林 coding、JavaGuide 和 CS-Notes，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["逻辑备份执行原理是什么","逻辑备份如何影响性能或一致性","逻辑备份线上问题怎么排查"], useCases: ["小库备份","结构迁移","数据抽样"], prerequisites: ["backup-restore"], related: ["mysqldump"], order: 75 },
  /* <!-- KG_REVIEWED: mysqldump | 2026-05-24 | source_count=5 --> */
  /* <!-- KG_EXPLAINED: mysqldump | 2026-05-23 | source_count=5 --> */
  { sourceRefs: ["mysql-reference","mysql-innodb","xiaolin-mysql","javaguide","cs-notes"], id: "mysqldump", zh: "mysqldump", en: "mysqldump", area: "operations", difficulty: "easy", concept: "mysqldump 是 MySQL 常用逻辑备份工具，可导出表结构和数据。", explanation: ["核心概念：mysqldump聚焦mysqldump 是 MySQL 常用逻辑备份工具，可导出表结构和数据。。MySQL 通过 SQL、InnoDB、索引、事务、日志和复制支撑关系型数据读写；理解它时先抓住备份恢复、在线 DDL、连接池和性能观测，再看输入、状态变化、输出结果和失败分支。","适用场景：mysqldump常用于开发环境导数据和小型数据库备份。学习时把它放回MySQL链路中观察，并结合前置知识逻辑备份判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，mysqldump通常会和时间点恢复一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点适合先掌握主流程。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认备份恢复、在线 DDL、连接池和性能观测是否仍然成立。","常见误区与注意点：实践中容易把mysqldump当成孤立概念处理，结果遗漏元数据锁、备份一致性、连接耗尽和恢复演练。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考MySQL 8.4 Reference Manual、InnoDB 官方文档、小林 coding、JavaGuide 和 CS-Notes，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["mysqldump执行原理是什么","mysqldump如何影响性能或一致性","mysqldump线上问题怎么排查"], useCases: ["开发环境导数据","小型数据库备份"], prerequisites: ["logical-backup"], related: ["point-in-time-recovery"], order: 76 },
  /* <!-- KG_REVIEWED: 物理备份 | 2026-05-24 | source_count=5 --> */
  /* <!-- KG_EXPLAINED: 物理备份 | 2026-05-23 | source_count=5 --> */
  { sourceRefs: ["mysql-reference","mysql-innodb","xiaolin-mysql","javaguide","cs-notes"], id: "physical-backup", zh: "物理备份", en: "Physical Backup", area: "operations", difficulty: "medium", concept: "物理备份复制数据文件，适合大数据量和快速恢复场景。", explanation: ["核心概念：物理备份（Physical Backup）聚焦物理备份复制数据文件，适合大数据量和快速恢复场景。。MySQL 通过 SQL、InnoDB、索引、事务、日志和复制支撑关系型数据读写；理解它时先抓住备份恢复、在线 DDL、连接池和性能观测，再看输入、状态变化、输出结果和失败分支。","适用场景：物理备份常用于生产全量备份和大库恢复。学习时把它放回MySQL链路中观察，并结合前置知识备份恢复判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，物理备份通常会和时间点恢复一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点需要结合流程和指标判断。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认备份恢复、在线 DDL、连接池和性能观测是否仍然成立。","常见误区与注意点：实践中容易把物理备份当成孤立概念处理，结果遗漏元数据锁、备份一致性、连接耗尽和恢复演练。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考MySQL 8.4 Reference Manual、InnoDB 官方文档、小林 coding、JavaGuide 和 CS-Notes，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["物理备份执行原理是什么","物理备份如何影响性能或一致性","物理备份线上问题怎么排查"], useCases: ["生产全量备份","大库恢复"], prerequisites: ["backup-restore"], related: ["point-in-time-recovery"], order: 77 },
  /* <!-- KG_REVIEWED: 时间点恢复 | 2026-05-24 | source_count=5 --> */
  /* <!-- KG_EXPLAINED: 时间点恢复 | 2026-05-23 | source_count=5 --> */
  { sourceRefs: ["mysql-reference","mysql-innodb","xiaolin-mysql","javaguide","cs-notes"], id: "point-in-time-recovery", zh: "时间点恢复", en: "Point-in-Time Recovery", area: "operations", difficulty: "hard", concept: "时间点恢复通过全量备份和 Binlog 恢复到指定时刻。", explanation: ["核心概念：时间点恢复（Point-in-Time Recovery）聚焦时间点恢复通过全量备份和 Binlog 恢复到指定时刻。。MySQL 通过 SQL、InnoDB、索引、事务、日志和复制支撑关系型数据读写；理解它时先抓住备份恢复、在线 DDL、连接池和性能观测，再看输入、状态变化、输出结果和失败分支。","适用场景：时间点恢复常用于误删数据恢复和灾难恢复演练。学习时把它放回MySQL链路中观察，并结合前置知识Binlog和备份恢复判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，时间点恢复通常会和崩溃恢复一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点风险和细节较多。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认备份恢复、在线 DDL、连接池和性能观测是否仍然成立。","常见误区与注意点：实践中容易把时间点恢复当成孤立概念处理，结果遗漏元数据锁、备份一致性、连接耗尽和恢复演练。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考MySQL 8.4 Reference Manual、InnoDB 官方文档、小林 coding、JavaGuide 和 CS-Notes，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["时间点恢复执行原理是什么","时间点恢复如何影响性能或一致性","时间点恢复线上问题怎么排查"], useCases: ["误删数据恢复","灾难恢复演练"], prerequisites: ["binlog","backup-restore"], related: ["crash-recovery"], order: 78 },
  /* <!-- KG_REVIEWED: 在线 DDL | 2026-05-24 | source_count=5 --> */
  /* <!-- KG_EXPLAINED: 在线 DDL | 2026-05-23 | source_count=5 --> */
  { sourceRefs: ["mysql-reference","mysql-innodb","xiaolin-mysql","javaguide","cs-notes"], id: "online-ddl", zh: "在线 DDL", en: "Online DDL", area: "operations", difficulty: "hard", concept: "在线 DDL 在尽量减少业务影响的情况下修改表结构。", explanation: ["核心概念：在线 DDL（Online DDL）聚焦在线 DDL 在尽量减少业务影响的情况下修改表结构。。MySQL 通过 SQL、InnoDB、索引、事务、日志和复制支撑关系型数据读写；理解它时先抓住备份恢复、在线 DDL、连接池和性能观测，再看输入、状态变化、输出结果和失败分支。","适用场景：在线 DDL常用于生产加字段、在线加索引和大表结构变更。学习时把它放回MySQL链路中观察，并结合前置知识DDL判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，在线 DDL通常会和元数据锁一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点风险和细节较多。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认备份恢复、在线 DDL、连接池和性能观测是否仍然成立。","常见误区与注意点：实践中容易把在线 DDL当成孤立概念处理，结果遗漏元数据锁、备份一致性、连接耗尽和恢复演练。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考MySQL 8.4 Reference Manual、InnoDB 官方文档、小林 coding、JavaGuide 和 CS-Notes，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["在线 DDL执行原理是什么","在线 DDL如何影响性能或一致性","在线 DDL线上问题怎么排查"], useCases: ["生产加字段","在线加索引","大表结构变更"], prerequisites: ["ddl"], related: ["metadata-lock"], order: 79 },
  /* <!-- KG_REVIEWED: 元数据锁 | 2026-05-24 | source_count=5 --> */
  /* <!-- KG_EXPLAINED: 元数据锁 | 2026-05-23 | source_count=5 --> */
  { sourceRefs: ["mysql-reference","mysql-innodb","xiaolin-mysql","javaguide","cs-notes"], id: "metadata-lock", zh: "元数据锁", en: "Metadata Lock", area: "operations", difficulty: "hard", concept: "元数据锁保护表结构一致，长事务可能阻塞 DDL。", explanation: ["核心概念：元数据锁（Metadata Lock）聚焦元数据锁保护表结构一致，长事务可能阻塞 DDL。。MySQL 通过 SQL、InnoDB、索引、事务、日志和复制支撑关系型数据读写；理解它时先抓住备份恢复、在线 DDL、连接池和性能观测，再看输入、状态变化、输出结果和失败分支。","适用场景：元数据锁常用于DDL 卡住排查和长事务治理。学习时把它放回MySQL链路中观察，并结合前置知识在线 DDL和事务判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，元数据锁通常会和连接列表一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点风险和细节较多。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认备份恢复、在线 DDL、连接池和性能观测是否仍然成立。","常见误区与注意点：实践中容易把元数据锁当成孤立概念处理，结果遗漏元数据锁、备份一致性、连接耗尽和恢复演练。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考MySQL 8.4 Reference Manual、InnoDB 官方文档、小林 coding、JavaGuide 和 CS-Notes，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["元数据锁执行原理是什么","元数据锁如何影响性能或一致性","元数据锁线上问题怎么排查"], useCases: ["DDL 卡住排查","长事务治理"], prerequisites: ["online-ddl","transaction"], related: ["show-processlist"], order: 80 },
  /* <!-- KG_REVIEWED: 连接列表 | 2026-05-24 | source_count=5 --> */
  /* <!-- KG_EXPLAINED: 连接列表 | 2026-05-23 | source_count=5 --> */
  { sourceRefs: ["mysql-reference","mysql-innodb","xiaolin-mysql","javaguide","cs-notes"], id: "show-processlist", zh: "连接列表", en: "SHOW PROCESSLIST", area: "operations", difficulty: "easy", concept: "SHOW PROCESSLIST 查看当前连接、SQL 状态和等待信息。", explanation: ["核心概念：连接列表（SHOW PROCESSLIST）聚焦SHOW PROCESSLIST 查看当前连接、SQL 状态和等待信息。。MySQL 通过 SQL、InnoDB、索引、事务、日志和复制支撑关系型数据读写；理解它时先抓住备份恢复、在线 DDL、连接池和性能观测，再看输入、状态变化、输出结果和失败分支。","适用场景：连接列表常用于连接排查、锁等待定位和慢 SQL 观察。学习时把它放回MySQL链路中观察，并结合前置知识MySQL 概览判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，连接列表通常会和元数据锁和死锁日志一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点适合先掌握主流程。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认备份恢复、在线 DDL、连接池和性能观测是否仍然成立。","常见误区与注意点：实践中容易把连接列表当成孤立概念处理，结果遗漏元数据锁、备份一致性、连接耗尽和恢复演练。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考MySQL 8.4 Reference Manual、InnoDB 官方文档、小林 coding、JavaGuide 和 CS-Notes，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["连接列表执行原理是什么","连接列表如何影响性能或一致性","连接列表线上问题怎么排查"], useCases: ["连接排查","锁等待定位","慢 SQL 观察"], prerequisites: ["mysql-overview"], related: ["metadata-lock","deadlock-log"], order: 81 },
  /* <!-- KG_REVIEWED: InnoDB 状态 | 2026-05-24 | source_count=5 --> */
  /* <!-- KG_EXPLAINED: InnoDB 状态 | 2026-05-23 | source_count=5 --> */
  { sourceRefs: ["mysql-reference","mysql-innodb","xiaolin-mysql","javaguide","cs-notes"], id: "show-engine-innodb-status", zh: "InnoDB 状态", en: "SHOW ENGINE INNODB STATUS", area: "operations", difficulty: "medium", concept: "InnoDB 状态输出事务、锁、死锁、Buffer Pool 等内部信息。", explanation: ["核心概念：InnoDB 状态（SHOW ENGINE INNODB STATUS）聚焦InnoDB 状态输出事务、锁、死锁、Buffer Pool 等内部信息。。MySQL 通过 SQL、InnoDB、索引、事务、日志和复制支撑关系型数据读写；理解它时先抓住备份恢复、在线 DDL、连接池和性能观测，再看输入、状态变化、输出结果和失败分支。","适用场景：InnoDB 状态常用于死锁排查、锁等待分析和引擎状态巡检。学习时把它放回MySQL链路中观察，并结合前置知识InnoDB判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，InnoDB 状态通常会和死锁日志和锁一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点需要结合流程和指标判断。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认备份恢复、在线 DDL、连接池和性能观测是否仍然成立。","常见误区与注意点：实践中容易把InnoDB 状态当成孤立概念处理，结果遗漏元数据锁、备份一致性、连接耗尽和恢复演练。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考MySQL 8.4 Reference Manual、InnoDB 官方文档、小林 coding、JavaGuide 和 CS-Notes，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["InnoDB 状态执行原理是什么","InnoDB 状态如何影响性能或一致性","InnoDB 状态线上问题怎么排查"], useCases: ["死锁排查","锁等待分析","引擎状态巡检"], prerequisites: ["innodb"], related: ["deadlock-log","lock"], order: 82 },
  /* <!-- KG_REVIEWED: Performance Schema | 2026-05-24 | source_count=5 --> */
  /* <!-- KG_EXPLAINED: Performance Schema | 2026-05-23 | source_count=5 --> */
  { sourceRefs: ["mysql-reference","mysql-innodb","xiaolin-mysql","javaguide","cs-notes"], id: "performance-schema", zh: "Performance Schema", en: "Performance Schema", area: "operations", difficulty: "hard", concept: "Performance Schema 提供 MySQL 内部性能事件、等待、语句和锁的观测数据。", explanation: ["核心概念：Performance Schema聚焦Performance Schema 提供 MySQL 内部性能事件、等待、语句和锁的观测数据。。MySQL 通过 SQL、InnoDB、索引、事务、日志和复制支撑关系型数据读写；理解它时先抓住备份恢复、在线 DDL、连接池和性能观测，再看输入、状态变化、输出结果和失败分支。","适用场景：Performance Schema常用于性能诊断、等待事件分析和SQL 统计。学习时把它放回MySQL链路中观察，并结合前置知识MySQL 概览判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，Performance Schema通常会和慢查询日志一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点风险和细节较多。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认备份恢复、在线 DDL、连接池和性能观测是否仍然成立。","常见误区与注意点：实践中容易把Performance Schema当成孤立概念处理，结果遗漏元数据锁、备份一致性、连接耗尽和恢复演练。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考MySQL 8.4 Reference Manual、InnoDB 官方文档、小林 coding、JavaGuide 和 CS-Notes，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["Performance Schema执行原理是什么","Performance Schema如何影响性能或一致性","Performance Schema线上问题怎么排查"], useCases: ["性能诊断","等待事件分析","SQL 统计"], prerequisites: ["mysql-overview"], related: ["slow-query-log"], order: 83 },
  /* <!-- KG_REVIEWED: 连接池 | 2026-05-24 | source_count=5 --> */
  /* <!-- KG_EXPLAINED: 连接池 | 2026-05-23 | source_count=5 --> */
  { sourceRefs: ["mysql-reference","mysql-innodb","xiaolin-mysql","javaguide","cs-notes"], id: "connection-pool", zh: "连接池", en: "Connection Pool", area: "operations", difficulty: "medium", concept: "连接池复用数据库连接，控制并发连接数量和等待时间。", explanation: ["核心概念：连接池（Connection Pool）聚焦连接池复用数据库连接，控制并发连接数量和等待时间。。MySQL 通过 SQL、InnoDB、索引、事务、日志和复制支撑关系型数据读写；理解它时先抓住备份恢复、在线 DDL、连接池和性能观测，再看输入、状态变化、输出结果和失败分支。","适用场景：连接池常用于后端服务接入、连接数保护和性能调优。学习时把它放回MySQL链路中观察，并结合前置知识MySQL 概览判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，连接池通常会和连接列表一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点需要结合流程和指标判断。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认备份恢复、在线 DDL、连接池和性能观测是否仍然成立。","常见误区与注意点：实践中容易把连接池当成孤立概念处理，结果遗漏元数据锁、备份一致性、连接耗尽和恢复演练。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考MySQL 8.4 Reference Manual、InnoDB 官方文档、小林 coding、JavaGuide 和 CS-Notes，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["连接池执行原理是什么","连接池如何影响性能或一致性","连接池线上问题怎么排查"], useCases: ["后端服务接入","连接数保护","性能调优"], prerequisites: ["mysql-overview"], related: ["show-processlist"], order: 84 },
] satisfies GraphKnowledgePoint[];

const mysqlKnowledgePointOverrides: Record<string, Partial<GraphKnowledgePoint>> = {
  "mysql-overview": {
    sourceRefs: [
      "mysql-reference",
      "mysql-sql-statements",
      "mysql-innodb",
      "mysql-innodb-architecture",
      "mysql-innodb-index-types",
      "mysql-acid-model",
      "mysql-innodb-transaction-model",
      "mysql-binary-log",
      "mysql-replication-implementation",
      "mysql-optimization",
      "mysql-explain-statement",
      "mysql-performance-schema",
      "mysql-backup-recovery",
      "mysql-security",
      "xiaolin-mysql",
      "javaguide",
      "cs-notes",
    ],
    concept:
      "MySQL 是面向 OLTP 的关系型数据库服务，通过 SQL 层、InnoDB 存储引擎、事务日志、复制和观测体系支撑可靠的业务数据读写。",
    explanation: [
      "概念定位：MySQL 概览（MySQL Overview）解决的是“业务数据如何被可靠地建模、读写、保护和排查”的问题。它常出现在订单、账户、库存、权限、内容、支付流水等核心链路里，承担结构化数据存储、事务一致性、查询优化、主从复制和备份恢复。\n\n准确地说，MySQL 是一个关系型数据库管理系统（RDBMS）。开发者通过 SQL 描述数据结构和读写意图，服务端负责连接认证、语法解析、权限校验、优化执行、存储引擎访问、事务提交、日志持久化、复制分发和性能观测。学习 MySQL 的入口是这条端到端链路，而核心能力集中在 `SQL`、`InnoDB`、索引、事务、Redo/Undo/Binlog、复制和 Performance Schema。",
      "心智模型：把 MySQL 看成一套分层的数据服务流水线。\n\n- `连接与 SQL 层`：处理账号权限、会话变量、SQL 解析、优化器、执行器和结果返回。\n- `InnoDB 引擎层`：用表、页、聚簇索引、二级索引、Buffer Pool、锁、MVCC、Undo Log 和 Redo Log 管理数据。\n- `日志与复制层`：Redo Log 服务崩溃恢复，Binlog 服务复制、恢复和 CDC，同一事务提交路径需要协调引擎日志和服务层日志。\n- `运维与观测层`：慢查询日志、`EXPLAIN`、Performance Schema、`SHOW PROCESSLIST`、备份恢复、账号权限和 TLS 共同构成线上治理工具箱。\n\n新手先把一次 SQL 看成“进入 SQL 层、访问 InnoDB、产生日志、返回结果”的路径；老手会继续追踪锁等待、Buffer Pool 命中、刷盘策略、Binlog 顺序、复制延迟和恢复窗口。",
      "主流程机制：一次典型请求从客户端进入 MySQL 后，会沿着明确的状态变化推进。\n\n1. 客户端通过连接池建立 TCP/MySQL 协议连接，完成认证，继承会话变量，例如 `autocommit`、`transaction_isolation`、`time_zone`、`sql_mode`。\n2. SQL 层解析语句、检查权限、展开视图或表达式，优化器基于统计信息选择索引、JOIN 顺序和访问方法。\n3. 执行器调用存储引擎接口。InnoDB 先查 Buffer Pool，缺页时读取磁盘页；二级索引命中后可能回到聚簇索引取完整行。\n4. 读请求根据隔离级别使用当前读或一致性读；写请求修改记录前生成 Undo，修改页后产生 Redo，必要时加行锁、间隙锁或 Next-Key Lock。\n5. 提交阶段把事务状态、Redo、Binlog 和内存脏页纳入持久化与复制路径。提交完成后结果返回客户端，慢查询日志、Performance Schema、复制线程和监控指标记录对应证据。\n\n这条链路说明了 MySQL 的关键特征：SQL 决定访问意图，索引决定访问路径，事务决定一致性边界，日志决定恢复能力，复制决定读扩展和高可用基础，观测决定排障效率。",
      "实践例子：从一个订单表可以观察 MySQL 的主路径。\n\n```sql\nCREATE TABLE orders (\n  id BIGINT PRIMARY KEY,\n  user_id BIGINT NOT NULL,\n  status VARCHAR(32) NOT NULL,\n  amount DECIMAL(12,2) NOT NULL,\n  created_at DATETIME NOT NULL,\n  KEY idx_user_created (user_id, created_at)\n) ENGINE=InnoDB;\n\nEXPLAIN ANALYZE\nSELECT id, status, amount\nFROM orders\nWHERE user_id = 1001\nORDER BY created_at DESC\nLIMIT 20;\n\nSHOW VARIABLES LIKE 'transaction_isolation';\nSHOW VARIABLES LIKE 'innodb_flush_log_at_trx_commit';\nSHOW VARIABLES LIKE 'sync_binlog';\n```\n\n这个例子里，`ENGINE=InnoDB` 决定事务、行锁和恢复机制；`PRIMARY KEY` 决定聚簇索引组织方式；`idx_user_created` 让高频用户订单列表走有序范围扫描；`EXPLAIN ANALYZE` 能看到实际执行时间、扫描行数和访问路径；两个刷盘变量体现提交延迟与持久性取舍。",
      "工程场景：MySQL 的设计重点取决于业务读写形态和故障目标。\n\n- 建模：核心实体优先明确主键、唯一约束、字段范围、字符集、时间语义和生命周期，给后续索引、分片和归档留下空间。\n- 查询：高频 SQL 先围绕过滤条件、排序条件和返回列设计索引，再用 `EXPLAIN` 校验访问类型、扫描行数、临时表和排序行为。\n- 事务：事务范围越大，锁持有时间、Undo 积压、复制延迟和死锁概率越高；短事务、固定访问顺序和幂等重试能显著降低线上波动。\n- 持久性：`innodb_flush_log_at_trx_commit=1` 与 `sync_binlog=1` 提供强持久化语义，写入延迟和 fsync 压力也会提高。\n- 复制：读写分离能扩展读流量，业务需要识别复制延迟、读己之写、一致性读路由和故障切换窗口。\n- 安全：账号权限、最小授权、TLS、备份加密、审计和脱敏决定数据暴露面。",
      "边界与故障模式：MySQL 线上问题通常能映射到链路中的某一层。\n\n- SQL 层：慢 SQL、全表扫描、隐式类型转换、排序溢出、临时表、统计信息偏差，会表现为 p95/p99 延迟升高和 CPU/I/O 抬升。\n- InnoDB 层：锁等待、死锁、长事务、Buffer Pool 命中率下降、脏页刷盘抖动，会表现为吞吐下降、提交变慢或连接堆积。\n- 日志层：Redo 写入压力、Binlog fsync、磁盘空间紧张，会直接影响提交延迟和恢复时间。\n- 复制层：大事务、单线程瓶颈、网络抖动、从库资源不足，会产生 `Seconds_Behind_Source`、Relay Log 积压和读到旧数据。\n- 运维层：连接池放大、权限配置、备份恢复演练、字符集/排序规则、时区和版本差异，会影响上线、迁移和审计。\n\n排障时先定位层级，再收集该层证据，能把“数据库慢”拆成可验证的事实。",
      "排查实践：一次生产排查可以按证据链推进。\n\n1. 明确症状：看错误码、超时点、慢查询样本、QPS、p95/p99、连接数、复制延迟和磁盘 I/O。\n2. 查现场连接：用 `SHOW PROCESSLIST` 找出长事务、锁等待、复制线程、DDL 等待和连接堆积。\n3. 查执行计划：用 `EXPLAIN` 或 `EXPLAIN ANALYZE` 确认索引、扫描行数、排序、临时表和实际耗时。\n4. 查 InnoDB：用 `SHOW ENGINE INNODB STATUS\\G` 观察死锁、锁等待、History list length、Buffer Pool 和 I/O 状态。\n5. 查性能事件：用 Performance Schema 或 sys schema 汇总语句、等待事件、锁和 I/O 热点。\n6. 查复制与恢复：用 `SHOW REPLICA STATUS\\G`、Binlog 位点、GTID 集合、备份时间点和恢复演练结果确认数据链路。\n\n```sql\nSHOW PROCESSLIST;\nEXPLAIN ANALYZE SELECT * FROM orders WHERE user_id = 1001 ORDER BY created_at DESC LIMIT 20;\nSHOW ENGINE INNODB STATUS\\G\nSHOW REPLICA STATUS\\G\nSELECT * FROM performance_schema.events_statements_summary_by_digest\nORDER BY SUM_TIMER_WAIT DESC\nLIMIT 5;\n```\n\n这些命令覆盖会话、计划、引擎、复制和事件五类证据，适合建立稳定的排查模板。",
      "常见误区：MySQL 性能主要由数据模型、索引、事务范围、I/O、内存、连接数和复制拓扑共同决定。单条 SQL 写法只是入口。\n\n主键是 InnoDB 表的物理组织核心，会影响页分裂、二级索引体积和写入局部性。索引服务查询路径，同时增加写入维护成本和存储占用。事务隔离提供一致性语义，也会带来锁、版本链和清理压力。复制提升读扩展和灾备能力，同时引入延迟、切换和读一致性治理。备份的价值体现在可恢复性，定期恢复演练和校验结果才是生产信心来源。",
      "面试追问：回答 MySQL 概览类问题时，建议按“分层、链路、取舍、证据”组织。\n\n- 定义题：MySQL 是什么，SQL 层和存储引擎各负责什么。\n- 机制题：一条 SELECT 或 UPDATE 从连接进入到结果返回会经历哪些阶段。\n- 事务题：ACID 在 InnoDB 中分别依赖哪些机制，Redo、Undo、锁、MVCC 和 Binlog 承担什么角色。\n- 优化题：慢查询如何定位，`EXPLAIN` 里先看哪些字段，索引设计如何结合过滤、排序和返回列。\n- 排障题：连接打满、死锁、复制延迟、磁盘写满、主库故障分别看哪些指标和命令。\n- 取舍题：强持久化、短事务、读写分离、连接池大小、分库分表和备份恢复各自解决什么工程问题。",
      "参考来源：本讲解主要参考 MySQL 8.4 Reference Manual 的 SQL Statements、InnoDB Storage Engine、InnoDB Architecture、ACID Model、Binary Log、Replication、Optimization、EXPLAIN、Performance Schema、Backup and Recovery、Security 文档，并结合小林 coding、JavaGuide、CS-Notes 中面向中文读者的索引、事务、日志和面试资料进行表达校准。官方文档用于定义、边界和命令语义，中文资料用于补足学习路径、常见问法和实践理解。"
    ],
    typicalProblems: [
      "MySQL 的 SQL 层、优化器、执行器和 InnoDB 存储引擎分别负责什么？",
      "一条 SELECT 从客户端发起到返回结果，完整流程如何描述？",
      "一条 UPDATE 提交时，Undo Log、Redo Log、Binlog、Buffer Pool 和锁分别发挥什么作用？",
      "为什么主键、二级索引和 Buffer Pool 会影响查询和写入性能？",
      "线上慢查询如何用 EXPLAIN、慢查询日志和 Performance Schema 建立证据链？",
      "事务隔离级别、MVCC、锁等待和死锁之间有什么关系？",
      "读写分离和主从复制会带来哪些一致性、延迟和故障切换问题？",
      "如何选择 `innodb_flush_log_at_trx_commit`、`sync_binlog`、连接池大小和事务范围？",
      "MySQL 备份恢复、权限、TLS、字符集和时区在生产系统里分别影响什么？"
    ],
    commonCommands: [
      "EXPLAIN ANALYZE <sql>",
      "SHOW PROCESSLIST",
      "SHOW ENGINE INNODB STATUS\\G",
      "SHOW REPLICA STATUS\\G",
      "SHOW VARIABLES LIKE 'innodb_flush_log_at_trx_commit'",
      "SELECT * FROM performance_schema.events_statements_summary_by_digest ORDER BY SUM_TIMER_WAIT DESC LIMIT 5"
    ],
    useCases: ["核心业务数据存储", "高并发 OLTP", "事务一致性", "读写分离", "备份恢复", "数据库性能排查"],
    related: ["sql", "innodb", "transaction"],
  },
  "sql": {
    sourceRefs: [
      "mysql-reference",
      "mysql-sql-statements",
      "mysql-select-statement",
      "mysql-prepared-statements",
      "mysql-optimization",
      "mysql-explain-statement",
      "mysql-explain-output",
      "sqlbolt-sql-tutorial",
      "use-the-index-luke-mysql-explain",
      "javaguide-mysql-explain",
      "xiaolincoding-mysql-select",
      "xiaolin-mysql",
      "javaguide",
      "cs-notes",
    ],
    concept:
      "SQL 是关系型数据库的声明式操作语言，用结构化语句描述建表、查询、写入、事务控制和权限管理意图。",
    explanation: [
      "概念定位：SQL（Structured Query Language）解决的是“应用如何用统一语言描述关系型数据结构和读写意图”的问题。它出现在后台接口查询、订单写入、报表统计、数据订正、表结构变更、权限管理和事务控制里，是 MySQL、PostgreSQL、SQL Server、Oracle 等关系型数据库的共同入口。\n\n在 MySQL 中，SQL 语句先进入 SQL 层，被解析、校验、优化，再由执行器调用存储引擎。开发者写的是声明式语义：需要哪些列、过滤哪些行、如何关联和聚合；MySQL 负责选择索引、访问顺序、JOIN 算法、临时表、排序和返回方式。掌握 SQL 的关键是同时理解“语义顺序”和“物理执行计划”。",
      "准确定义：SQL 是面向关系模型的结构化查询语言，核心对象是表、行、列、约束、表达式、结果集和事务。\n\n常见分类可以这样记：\n\n- `DDL`（Data Definition Language）：定义结构，例如 `CREATE TABLE`、`ALTER TABLE`、`DROP INDEX`。\n- `DML`（Data Manipulation Language）：修改数据，例如 `INSERT`、`UPDATE`、`DELETE`。\n- `DQL`（Data Query Language）：查询数据，核心是 `SELECT`。\n- `TCL`（Transaction Control Language）：控制事务，例如 `START TRANSACTION`、`COMMIT`、`ROLLBACK`、`SAVEPOINT`。\n- `DCL`（Data Control Language）：控制权限，例如 `GRANT`、`REVOKE`。\n\n新手先把 SQL 看成“描述数据任务的语言”；工程实践里还要把 SQL 看成“会消耗 CPU、内存、锁、I/O、网络和复制资源的执行请求”。",
      "心智模型：一条 SQL 像一份给数据库的工单，写法表达目标，执行计划决定成本。\n\n- 业务语义层：`SELECT id FROM orders WHERE user_id = 1` 表示要取某个用户的订单编号。\n- 逻辑处理层：先确定数据来源，再过滤、分组、聚合、投影、排序和分页。\n- 物理执行层：优化器可能选择索引范围扫描、全表扫描、Nested Loop Join、临时表或 filesort。\n- 存储引擎层：InnoDB 读取页、命中 Buffer Pool、加锁、生成 Undo/Redo，并把结果交回执行器。\n- 观测层：`EXPLAIN`、慢查询日志、Performance Schema 和监控指标展示真实成本证据。\n\n这种模型能解释同样的 SQL 在不同数据量、索引、统计信息、参数和隔离级别下表现差异很大。",
      "主流程机制：以 `SELECT` 为例，可以把语义顺序和 MySQL 执行路径分开理解。\n\n1. 客户端发送 SQL，服务端完成语法解析、对象解析、权限校验和语义检查。\n2. 逻辑语义通常按 `FROM/JOIN -> WHERE -> GROUP BY -> HAVING -> SELECT -> DISTINCT -> ORDER BY -> LIMIT` 理解。\n3. 优化器基于统计信息、索引、条件选择性和代价模型选择访问路径，可能改写子查询、调整 JOIN 顺序、选择索引或放弃索引。\n4. 执行器按物理计划访问存储引擎，读取索引页或数据页，处理过滤、回表、排序、聚合和临时结果。\n5. 结果集返回客户端，慢查询日志、Performance Schema、`EXPLAIN ANALYZE` 等留下执行时间、扫描行数和等待事件。\n\n这也是 SQL 学习的主线：语法决定表达能力，索引和计划决定性能，事务和锁决定并发行为，观测证据决定排障效率。",
      "实践例子：下面的订单查询同时展示建表、写入、查询、执行计划和参数化写法。\n\n```sql\nCREATE TABLE orders (\n  id BIGINT PRIMARY KEY,\n  user_id BIGINT NOT NULL,\n  status VARCHAR(32) NOT NULL,\n  amount DECIMAL(12,2) NOT NULL,\n  created_at DATETIME NOT NULL,\n  KEY idx_user_status_created (user_id, status, created_at)\n) ENGINE=InnoDB;\n\nINSERT INTO orders (id, user_id, status, amount, created_at)\nVALUES (1, 1001, 'PAID', 99.90, '2026-06-05 10:00:00');\n\nEXPLAIN ANALYZE\nSELECT id, amount, created_at\nFROM orders\nWHERE user_id = 1001 AND status = 'PAID'\nORDER BY created_at DESC\nLIMIT 20;\n\nPREPARE stmt FROM\n  'SELECT id, amount FROM orders WHERE user_id = ? AND status = ? ORDER BY created_at DESC LIMIT ?';\n```\n\n`idx_user_status_created` 能同时服务等值过滤和排序分页；`EXPLAIN ANALYZE` 能看到实际耗时和行数；Prepared Statement 把 SQL 模板和参数分开，适合减少拼接错误和注入风险。",
      "深层细节：SQL 的“可读语义”和“执行成本”之间有几类高频差异。\n\n- `SELECT *` 会扩大网络传输、内存占用和回表概率，高频接口更适合列出必要字段。\n- `WHERE` 条件中的函数、隐式类型转换、字符集/排序规则差异，可能让索引使用效果变差。\n- `JOIN` 的驱动表、连接顺序和索引覆盖度会影响扫描行数，数据分布变化会让旧计划失效。\n- `GROUP BY`、`DISTINCT`、`ORDER BY` 常需要临时表或 filesort，组合索引可以把过滤、分组和排序合并到有序扫描里。\n- `LIMIT offset, size` 在深分页下需要跳过大量行，游标分页或基于有序键的 seek 查询更适合大数据量列表。\n- `UPDATE` 和 `DELETE` 也是查询加修改，会先定位行，再持有锁、写 Undo/Redo、影响复制和二级索引维护。\n\n老手写 SQL 时会先估算基数、访问路径、锁范围和返回行数，再用计划和运行时指标验证。",
      "工程场景：SQL 设计需要贴合业务读写形态。\n\n- 后台列表：过滤字段、排序字段和返回字段共同决定联合索引顺序，分页方式决定可扩展性。\n- 交易写入：`INSERT`、`UPDATE` 和唯一约束要承载幂等、状态机和并发控制，事务范围要短。\n- 报表统计：聚合 SQL 要关注扫描范围、临时表、只读副本、离线宽表和预聚合。\n- 数据订正：批量 `UPDATE/DELETE` 要分批、带主键范围、观察锁等待和复制延迟。\n- 灰度发布：DDL 与 DML 的兼容顺序、默认值、回填脚本和回滚方案要提前验证。\n- 安全合规：参数化查询、最小权限、审计日志和脱敏字段能降低注入与越权风险。",
      "边界与故障模式：SQL 问题通常表现为慢、错、堵、抖四类。\n\n- 慢：全表扫描、低选择性索引、大排序、临时表、深分页、回表过多、网络返回过大。\n- 错：`NULL` 三值逻辑、时区转换、隐式类型转换、字符集排序、聚合口径和事务隔离可见性。\n- 堵：长事务持锁、`UPDATE` 扫描范围过大、DDL 等待元数据锁、连接池堆积。\n- 抖：统计信息变化、参数分布偏斜、Buffer Pool 被大查询污染、复制延迟和磁盘 I/O 峰值。\n\n处理边界问题时，先把 SQL 文本、绑定参数、表结构、索引、数据分布、事务隔离级别和执行计划放到同一个证据包里。",
      "排查实践：慢 SQL 排查建议按固定流程执行。\n\n1. 收集 SQL、参数、执行时间、返回行数、调用入口、事务边界和错误码。\n2. 查看表结构与索引：`SHOW CREATE TABLE`、`SHOW INDEX`、字段类型和字符集。\n3. 跑执行计划：先用 `EXPLAIN` 看 `type`、`possible_keys`、`key`、`rows`、`filtered`、`Extra`，再用 `EXPLAIN ANALYZE` 看真实行数和耗时。\n4. 对比数据分布：统计过滤字段基数、热点值、时间范围和返回列大小。\n5. 观察运行证据：慢查询日志、Performance Schema 语句摘要、锁等待、CPU、I/O、临时表和复制延迟。\n6. 小步修复：改索引、改写 SQL、拆批、改分页、限制返回列，验证计划和线上指标后发布。\n\n```sql\nSHOW CREATE TABLE orders\\G\nSHOW INDEX FROM orders;\nEXPLAIN FORMAT=TREE\nSELECT id, amount FROM orders WHERE user_id = 1001 ORDER BY created_at DESC LIMIT 20;\nEXPLAIN ANALYZE\nSELECT id, amount FROM orders WHERE user_id = 1001 ORDER BY created_at DESC LIMIT 20;\nSELECT DIGEST_TEXT, COUNT_STAR, SUM_ROWS_EXAMINED, SUM_TIMER_WAIT\nFROM performance_schema.events_statements_summary_by_digest\nORDER BY SUM_TIMER_WAIT DESC\nLIMIT 10;\n```\n\n稳定的排查流程能避免只凭经验改 SQL，也能把优化收益转化为可复盘的证据。",
      "常见误区：SQL 是声明式语言，数据库执行的是优化器选择出的物理计划。判断一条 SQL 的质量，需要同时看语义正确性、访问路径、扫描行数、锁范围、返回数据量和运行时证据。\n\n索引命中只是起点，`rows`、`filtered`、回表、排序、临时表和实际耗时同样重要。`EXPLAIN` 是估算计划，`EXPLAIN ANALYZE` 能补充真实运行数据。事务内 SQL 的影响会被锁持有时间、隔离级别和提交路径放大。批量 SQL 的风险来自每批影响行数、Undo/Redo、Binlog、复制延迟和回滚成本。",
      "面试追问：SQL 类问题可以按“语法分类、执行流程、性能证据、工程取舍”回答。\n\n- SQL 有哪些分类，DDL、DML、DQL、TCL、DCL 分别解决什么问题？\n- 一条 SELECT 的逻辑执行顺序是什么，MySQL 的物理执行路径如何产生？\n- `WHERE`、`JOIN`、`GROUP BY`、`ORDER BY`、`LIMIT` 分别会带来哪些典型成本？\n- `EXPLAIN` 中 `type`、`key`、`rows`、`filtered`、`Extra` 如何用于判断计划质量？\n- 为什么参数化查询能改善安全性和可维护性，动态拼接 SQL 有哪些风险？\n- 慢查询如何从 SQL 文本、绑定参数、索引、统计信息、锁等待和运行指标建立证据链？\n- 批量更新、深分页、报表查询和线上 DDL 分别需要哪些工程保护？",
      "参考来源：本讲解主要参考 MySQL 8.4 Reference Manual 的 SQL Statements、SELECT、Prepared Statements、Optimization、EXPLAIN 和 EXPLAIN Output 文档，用 SQLBolt 校准入门语法路径，用 Use The Index, Luke、JavaGuide 和小林 coding 补充执行计划阅读、查询流程、索引实践和中文面试表达。官方资料用于定义、语法和命令语义，工程文章用于补足性能判断和排查视角。"
    ],
    typicalProblems: [
      "SQL 是什么，DDL、DML、DQL、TCL、DCL 分别覆盖哪些操作？",
      "一条 SELECT 的逻辑执行顺序是什么，MySQL 实际执行计划如何生成？",
      "为什么同一条 SQL 在不同数据量、索引和参数下性能差异很大？",
      "`WHERE` 条件、隐式类型转换、函数调用和字符集排序如何影响索引使用？",
      "`JOIN`、`GROUP BY`、`ORDER BY`、`LIMIT` 分别有哪些常见性能成本？",
      "如何用 `EXPLAIN`、`EXPLAIN ANALYZE` 和 Performance Schema 排查慢 SQL？",
      "参数化查询如何降低 SQL 注入风险，Prepared Statement 在 MySQL 中如何使用？",
      "批量更新、深分页、报表 SQL 和线上 DDL 分别需要哪些工程保护？",
      "面试中如何把 SQL 语法、优化器、索引、锁和事务联系起来回答？"
    ],
    commonCommands: [
      "SHOW CREATE TABLE <table>\\G",
      "SHOW INDEX FROM <table>",
      "EXPLAIN FORMAT=TREE <sql>",
      "EXPLAIN ANALYZE <sql>",
      "PREPARE stmt FROM '<sql with ?>'",
      "SELECT DIGEST_TEXT, COUNT_STAR, SUM_ROWS_EXAMINED, SUM_TIMER_WAIT FROM performance_schema.events_statements_summary_by_digest ORDER BY SUM_TIMER_WAIT DESC LIMIT 10"
    ],
    useCases: ["业务查询", "数据写入", "报表统计", "数据订正", "事务控制", "权限管理", "慢 SQL 排查"],
    prerequisites: ["mysql-overview"],
    related: ["schema-design", "select", "sql-optimization"],
  },
  "schema-design": {
    prerequisites: ["sql"],
    related: ["data-type", "primary-key"],
  },
  "data-type": {
    prerequisites: ["schema-design"],
    related: ["mysql-index", "sql-optimization"],
  },
  "primary-key": {
    prerequisites: ["schema-design"],
    related: ["clustered-index", "auto-increment"],
  },
  "select": {
    prerequisites: ["sql"],
    related: ["where", "join", "limit-offset"],
  },
  "where": {
    prerequisites: ["select"],
    related: ["mysql-index", "range-query"],
  },
  "join": {
    prerequisites: ["select"],
    related: ["sql-optimization", "composite-index"],
  },
  "limit-offset": {
    prerequisites: ["select"],
    related: ["cursor-pagination", "sql-optimization"],
  },
  "innodb": {
    prerequisites: ["mysql-overview"],
    related: ["clustered-index", "buffer-pool", "transaction"],
  },
  "clustered-index": {
    prerequisites: ["innodb", "primary-key"],
    related: ["b-plus-tree", "secondary-index"],
  },
  "buffer-pool": {
    prerequisites: ["innodb"],
    related: ["dirty-page", "checkpoint", "page"],
  },
  "mysql-index": {
    prerequisites: ["sql"],
    related: ["b-plus-tree", "composite-index", "sql-optimization"],
  },
  "b-plus-tree": {
    sourceRefs: [
      "mysql-innodb-physical-structure",
      "mysql-innodb-architecture",
      "jeremy-cole-innodb-btree",
      "planetscale-btree-indexes",
      "oneuptime-mysql-btree-index",
      "xiaolincoding-mysql-index",
    ],
    prerequisites: ["mysql-index"],
    related: ["clustered-index", "range-query"],
  },
  "secondary-index": {
    sourceRefs: [
      "mysql-innodb-index-types",
      "solarwinds-mysql-indexes",
      "xiaolincoding-mysql-index",
      "planetscale-covering-indexes",
      "jeremy-cole-innodb-btree",
    ],
    prerequisites: ["mysql-index", "clustered-index"],
    related: ["back-to-table", "covering-index"],
  },
  "back-to-table": {
    prerequisites: ["secondary-index"],
    related: ["covering-index", "sql-optimization"],
  },
  "covering-index": {
    prerequisites: ["secondary-index"],
    related: ["back-to-table", "composite-index"],
  },
  "composite-index": {
    prerequisites: ["mysql-index"],
    related: ["leftmost-prefix", "covering-index"],
  },
  "leftmost-prefix": {
    prerequisites: ["composite-index"],
    related: ["range-query", "order-by"],
  },
  "range-query": {
    prerequisites: ["b-plus-tree", "leftmost-prefix"],
    related: ["gap-lock", "index-selectivity"],
  },
  "transaction": {
    prerequisites: ["innodb"],
    related: ["acid", "isolation-level", "redo-log"],
  },
  "acid": {
    prerequisites: ["transaction"],
    related: ["redo-log", "undo-log", "binlog"],
  },
  "isolation-level": {
    prerequisites: ["transaction"],
    related: ["repeatable-read", "mvcc"],
  },
  "repeatable-read": {
    prerequisites: ["isolation-level"],
    related: ["mvcc", "phantom-read", "gap-lock"],
  },
  "phantom-read": {
    prerequisites: ["isolation-level"],
    related: ["repeatable-read", "gap-lock", "next-key-lock"],
  },
  "mvcc": {
    sourceRefs: [
      "mysql-innodb-multi-versioning",
      "mysql-innodb-consistent-read",
      "mysql-innodb-undo-logs",
      "sobyte-mysql-mvcc",
      "javaguide-mysql-mvcc",
      "planetscale-database-transactions",
      "xiaolincoding-mysql-mvcc",
    ],
    prerequisites: ["isolation-level", "undo-log"],
    related: ["read-view", "repeatable-read"],
  },
  "read-view": {
    sourceRefs: [
      "mysql-innodb-consistent-read",
      "mysql-innodb-multi-versioning",
      "sobyte-mysql-mvcc",
      "javaguide-mysql-mvcc",
      "xiaolincoding-mysql-mvcc",
    ],
    prerequisites: ["mvcc"],
    related: ["read-committed", "undo-log"],
  },
  "redo-log": {
    sourceRefs: [
      "mysql-innodb-redo-log",
      "mysql-innodb-recovery",
      "mysql-doxygen-redo-log",
      "oracle-mysql-dynamic-redo-log",
      "xiaolincoding-mysql-log",
    ],
    prerequisites: ["transaction"],
    related: ["two-phase-commit", "crash-recovery"],
  },
  "undo-log": {
    sourceRefs: [
      "mysql-innodb-undo-logs",
      "mysql-innodb-multi-versioning",
      "mydbops-innodb-undo-log",
      "percona-innodb-history-length",
      "sobyte-mysql-mvcc",
      "javaguide-mysql-mvcc",
    ],
    prerequisites: ["transaction"],
    related: ["mvcc", "read-view", "crash-recovery"],
  },
  "binlog": {
    sourceRefs: [
      "mysql-binary-log",
      "mysql-replication-implementation",
      "mysql-semisync-replication",
      "mysql-replication-formats",
      "hackmysql-binary-log-group-commit",
      "xiaolincoding-mysql-log",
    ],
    prerequisites: ["transaction"],
    related: ["two-phase-commit", "replication"],
  },
  "two-phase-commit": {
    sourceRefs: [
      "mysql-replication-implementation",
      "mysql-binary-log",
      "mysql-binary-log-transaction-dependency",
      "mysql-innodb-redo-log",
      "hackmysql-binary-log-group-commit",
      "xiaolincoding-mysql-log",
    ],
    prerequisites: ["redo-log", "binlog"],
    related: ["crash-recovery"],
  },
  "crash-recovery": {
    sourceRefs: [
      "mysql-innodb-architecture",
      "mysql-innodb-recovery",
      "mysql-innodb-redo-log",
      "mysql-innodb-undo-logs",
      "mysql-binary-log",
      "mysql-replication-implementation",
      "percona-mysql-writing-process",
      "xiaolincoding-mysql-log",
    ],
    internalTags: [
      "ai-visualized:2026-06-04",
      "visual-source:mysql-innodb-architecture",
      "visual-source:mysql-innodb-recovery",
    ],
    prerequisites: ["redo-log", "undo-log", "binlog"],
    related: ["checkpoint"],
  },
  "lock": {
    prerequisites: ["transaction"],
    related: ["row-lock", "next-key-lock"],
  },
  "row-lock": {
    prerequisites: ["lock"],
    related: ["record-lock", "gap-lock"],
  },
  "record-lock": {
    prerequisites: ["row-lock"],
    related: ["gap-lock", "next-key-lock"],
  },
  "gap-lock": {
    prerequisites: ["row-lock", "repeatable-read"],
    related: ["next-key-lock", "phantom-read"],
  },
  "next-key-lock": {
    prerequisites: ["gap-lock"],
    related: ["deadlock"],
  },
  "deadlock": {
    sourceRefs: [
      "mysql-innodb-deadlocks",
      "mysql-innodb-deadlocks-handling",
      "mysql-innodb-deadlock-detection",
      "mysql-innodb-locks-set",
      "azure-sql-analyze-prevent-deadlocks",
      "microsoft-sql-deadlocks-guide",
      "wikipedia-wait-for-graph",
    ],
    prerequisites: ["lock"],
    related: ["deadlock-log", "show-engine-innodb-status"],
  },
  "sql-optimization": {
    prerequisites: ["sql", "mysql-index"],
    related: ["explain", "slow-query-log"],
  },
  "explain": {
    sourceRefs: [
      "mysql-workbench-visual-explain",
      "mysql-explain-output",
      "mysql-explain-statement",
      "mysql-reference",
      "xiaolincoding-mysql-log",
    ],
    prerequisites: ["sql-optimization"],
    related: ["access-type", "extra"],
  },
  "access-type": {
    prerequisites: ["explain"],
    related: ["index-selectivity"],
  },
  "slow-query-log": {
    prerequisites: ["sql-optimization"],
    related: ["explain", "show-processlist"],
  },
  "replication": {
    prerequisites: ["binlog"],
    related: ["read-write-splitting", "replication-lag"],
  },
  "read-write-splitting": {
    prerequisites: ["replication"],
    related: ["replication-lag"],
  },
  "replication-lag": {
    prerequisites: ["replication"],
    related: ["read-write-splitting", "gtid"],
  },
  "connection-pool": {
    prerequisites: ["mysql-overview"],
    related: ["show-processlist", "sql-optimization"],
  },
};

export const mysqlKnowledgePoints = mysqlKnowledgePointBase
  .map((point) => ({
    ...point,
    ...mysqlKnowledgePointOverrides[point.id],
  }))
  .sort((a, b) => (a.order ?? 0) - (b.order ?? 0)) satisfies GraphKnowledgePoint[];
