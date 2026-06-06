import type { GraphKnowledgePoint } from "./types.ts";

const mysqlKnowledgePointBase = [
  /* <!-- KG_REVIEWED: MySQL 概览 | 2026-06-05 | source_count=17 --> */
  /* <!-- KG_EXPLAINED: MySQL 概览 | 2026-05-23 | source_count=5 --> */
  { sourceRefs: ["mysql-reference","mysql-innodb","xiaolin-mysql","javaguide","cs-notes"], id: "mysql-overview", zh: "MySQL 概览", en: "MySQL Overview", area: "foundation", difficulty: "easy", concept: "MySQL 是常用关系型数据库，核心能力包括 SQL、事务、索引、存储引擎和复制。", explanation: ["核心概念：MySQL 概览（MySQL Overview）聚焦MySQL 是常用关系型数据库，核心能力包括 SQL、事务、索引、存储引擎和复制。。MySQL 通过 SQL、InnoDB、索引、事务、日志和复制支撑关系型数据读写；理解它时先抓住关系模型、表结构、约束和数据类型，再看输入、状态变化、输出结果和失败分支。","适用场景：MySQL 概览常用于业务数据存储、后台系统数据库和OLTP 场景。学习时把它放回MySQL链路中观察，并结合前置知识基础概念判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，MySQL 概览通常会和SQL、InnoDB和事务一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点适合先掌握主流程。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认关系模型、表结构、约束和数据类型是否仍然成立。","常见误区与注意点：实践中容易把MySQL 概览当成孤立概念处理，结果遗漏冗余、主键选择、字段范围、字符集和约束成本。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考MySQL 8.4 Reference Manual、InnoDB 官方文档、小林 coding、JavaGuide 和 CS-Notes，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["MySQL 概览执行原理是什么","MySQL 概览如何影响性能或一致性","MySQL 概览线上问题怎么排查"], useCases: ["业务数据存储","后台系统数据库","OLTP 场景"], prerequisites: [], related: ["sql","innodb","transaction"], order: 1 },
  /* <!-- KG_REVIEWED: SQL | 2026-06-05 | source_count=14 --> */
  /* <!-- KG_EXPLAINED: SQL | 2026-05-23 | source_count=5 --> */
  { sourceRefs: ["mysql-reference","mysql-innodb","xiaolin-mysql","javaguide","cs-notes"], id: "sql", zh: "SQL", en: "SQL", area: "foundation", difficulty: "easy", concept: "SQL 是关系型数据库的查询和操作语言，覆盖查询、写入、更新、删除和结构定义。", explanation: ["核心概念：SQL聚焦SQL 是关系型数据库的查询和操作语言，覆盖查询、写入、更新、删除和结构定义。。MySQL 通过 SQL、InnoDB、索引、事务、日志和复制支撑关系型数据读写；理解它时先抓住关系模型、表结构、约束和数据类型，再看输入、状态变化、输出结果和失败分支。","适用场景：SQL常用于业务查询、数据维护和报表分析。学习时把它放回MySQL链路中观察，并结合前置知识MySQL 概览判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，SQL通常会和SELECT 查询、DDL和DML一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点适合先掌握主流程。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认关系模型、表结构、约束和数据类型是否仍然成立。","常见误区与注意点：实践中容易把SQL当成孤立概念处理，结果遗漏冗余、主键选择、字段范围、字符集和约束成本。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考MySQL 8.4 Reference Manual、InnoDB 官方文档、小林 coding、JavaGuide 和 CS-Notes，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["SQL执行原理是什么","SQL如何影响性能或一致性","SQL线上问题怎么排查"], useCases: ["业务查询","数据维护","报表分析"], prerequisites: ["mysql-overview"], related: ["select","ddl","dml"], order: 2 },
  /* <!-- KG_REVIEWED: 表结构设计 | 2026-06-05 | source_count=14 --> */
  /* <!-- KG_EXPLAINED: 表结构设计 | 2026-05-23 | source_count=5 --> */
  { sourceRefs: ["mysql-reference","mysql-innodb","xiaolin-mysql","javaguide","cs-notes"], id: "schema-design", zh: "表结构设计", en: "Schema Design", area: "foundation", difficulty: "medium", concept: "表结构设计定义实体、字段、主键、约束和关系，直接影响数据质量和查询效率。", explanation: ["核心概念：表结构设计（Schema Design）聚焦表结构设计定义实体、字段、主键、约束和关系，直接影响数据质量和查询效率。。MySQL 通过 SQL、InnoDB、索引、事务、日志和复制支撑关系型数据读写；理解它时先抓住关系模型、表结构、约束和数据类型，再看输入、状态变化、输出结果和失败分支。","适用场景：表结构设计常用于业务建模、数据库初始化和重构老表。学习时把它放回MySQL链路中观察，并结合前置知识SQL判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，表结构设计通常会和范式、主键和外键一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点需要结合流程和指标判断。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认关系模型、表结构、约束和数据类型是否仍然成立。","常见误区与注意点：实践中容易把表结构设计当成孤立概念处理，结果遗漏冗余、主键选择、字段范围、字符集和约束成本。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考MySQL 8.4 Reference Manual、InnoDB 官方文档、小林 coding、JavaGuide 和 CS-Notes，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["表结构设计执行原理是什么","表结构设计如何影响性能或一致性","表结构设计线上问题怎么排查"], useCases: ["业务建模","数据库初始化","重构老表"], prerequisites: ["sql"], related: ["normalization","primary-key","foreign-key"], order: 3 },
  /* <!-- KG_REVIEWED: 范式 | 2026-05-24 | source_count=5 --> */
  /* <!-- KG_EXPLAINED: 范式 | 2026-05-23 | source_count=5 --> */
  { sourceRefs: ["mysql-reference","mysql-innodb","xiaolin-mysql","javaguide","cs-notes"], id: "normalization", zh: "范式", en: "Normalization", area: "foundation", difficulty: "medium", concept: "范式通过拆分实体和关系减少冗余，提升数据一致性。", explanation: ["核心概念：范式（Normalization）聚焦范式通过拆分实体和关系减少冗余，提升数据一致性。。MySQL 通过 SQL、InnoDB、索引、事务、日志和复制支撑关系型数据读写；理解它时先抓住关系模型、表结构、约束和数据类型，再看输入、状态变化、输出结果和失败分支。","适用场景：范式常用于订单模型设计、用户权限模型和主数据治理。学习时把它放回MySQL链路中观察，并结合前置知识表结构设计判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，范式通常会和反范式一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点需要结合流程和指标判断。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认关系模型、表结构、约束和数据类型是否仍然成立。","常见误区与注意点：实践中容易把范式当成孤立概念处理，结果遗漏冗余、主键选择、字段范围、字符集和约束成本。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考MySQL 8.4 Reference Manual、InnoDB 官方文档、小林 coding、JavaGuide 和 CS-Notes，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["范式执行原理是什么","范式如何影响性能或一致性","范式线上问题怎么排查"], useCases: ["订单模型设计","用户权限模型","主数据治理"], prerequisites: ["schema-design"], related: ["denormalization"], order: 4 },
  /* <!-- KG_REVIEWED: 反范式 | 2026-05-24 | source_count=5 --> */
  /* <!-- KG_EXPLAINED: 反范式 | 2026-05-23 | source_count=5 --> */
  { sourceRefs: ["mysql-reference","mysql-innodb","xiaolin-mysql","javaguide","cs-notes"], id: "denormalization", zh: "反范式", en: "Denormalization", area: "foundation", difficulty: "medium", concept: "反范式通过冗余字段减少关联查询，换取读取性能。", explanation: ["核心概念：反范式（Denormalization）聚焦反范式通过冗余字段减少关联查询，换取读取性能。。MySQL 通过 SQL、InnoDB、索引、事务、日志和复制支撑关系型数据读写；理解它时先抓住关系模型、表结构、约束和数据类型，再看输入、状态变化、输出结果和失败分支。","适用场景：反范式常用于高频列表查询、报表宽表和读多写少场景。学习时把它放回MySQL链路中观察，并结合前置知识范式判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，反范式通常会和SQL 优化一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点需要结合流程和指标判断。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认关系模型、表结构、约束和数据类型是否仍然成立。","常见误区与注意点：实践中容易把反范式当成孤立概念处理，结果遗漏冗余、主键选择、字段范围、字符集和约束成本。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考MySQL 8.4 Reference Manual、InnoDB 官方文档、小林 coding、JavaGuide 和 CS-Notes，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["反范式执行原理是什么","反范式如何影响性能或一致性","反范式线上问题怎么排查"], useCases: ["高频列表查询","报表宽表","读多写少场景"], prerequisites: ["normalization"], related: ["sql-optimization"], order: 5 },
  /* <!-- KG_REVIEWED: 数据类型 | 2026-06-05 | source_count=17 --> */
  /* <!-- KG_EXPLAINED: 数据类型 | 2026-05-23 | source_count=5 --> */
  { sourceRefs: ["mysql-reference","mysql-innodb","xiaolin-mysql","javaguide","cs-notes"], id: "data-type", zh: "数据类型", en: "Data Type", area: "foundation", difficulty: "easy", concept: "数据类型决定字段存储方式、范围、比较规则和索引效率。", explanation: ["核心概念：数据类型（Data Type）聚焦数据类型决定字段存储方式、范围、比较规则和索引效率。。MySQL 通过 SQL、InnoDB、索引、事务、日志和复制支撑关系型数据读写；理解它时先抓住关系模型、表结构、约束和数据类型，再看输入、状态变化、输出结果和失败分支。","适用场景：数据类型常用于字段设计、空间优化和精度控制。学习时把它放回MySQL链路中观察，并结合前置知识表结构设计判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，数据类型通常会和varchar、datetime和decimal一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点适合先掌握主流程。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认关系模型、表结构、约束和数据类型是否仍然成立。","常见误区与注意点：实践中容易把数据类型当成孤立概念处理，结果遗漏冗余、主键选择、字段范围、字符集和约束成本。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考MySQL 8.4 Reference Manual、InnoDB 官方文档、小林 coding、JavaGuide 和 CS-Notes，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["数据类型执行原理是什么","数据类型如何影响性能或一致性","数据类型线上问题怎么排查"], useCases: ["字段设计","空间优化","精度控制"], prerequisites: ["schema-design"], related: ["mysql-index","sql-optimization"], order: 6 },
  /* <!-- KG_REVIEWED: 主键 | 2026-06-05 | source_count=17 --> */
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
  /* <!-- KG_REVIEWED: SELECT 查询 | 2026-06-05 | source_count=18 --> */
  /* <!-- KG_EXPLAINED: SELECT 查询 | 2026-05-23 | source_count=5 --> */
  { sourceRefs: ["mysql-reference","mysql-innodb","xiaolin-mysql","javaguide","cs-notes"], id: "select", zh: "SELECT 查询", en: "SELECT Query", area: "sql", difficulty: "easy", concept: "SELECT 用于读取数据，可结合过滤、排序、分组和关联。", explanation: ["核心概念：SELECT 查询（SELECT Query）聚焦SELECT 用于读取数据，可结合过滤、排序、分组和关联。。MySQL 通过 SQL、InnoDB、索引、事务、日志和复制支撑关系型数据读写；理解它时先抓住查询语言、过滤、关联、分组、排序和分页，再看输入、状态变化、输出结果和失败分支。","适用场景：SELECT 查询常用于列表查询、详情查询和报表查询。学习时把它放回MySQL链路中观察，并结合前置知识SQL判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，SELECT 查询通常会和WHERE 条件、JOIN和GROUP BY一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点适合先掌握主流程。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认查询语言、过滤、关联、分组、排序和分页是否仍然成立。","常见误区与注意点：实践中容易把SELECT 查询当成孤立概念处理，结果遗漏隐式转换、NULL、深分页、临时表和排序成本。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考MySQL 8.4 Reference Manual、InnoDB 官方文档、小林 coding、JavaGuide 和 CS-Notes，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["SELECT 查询执行原理是什么","SELECT 查询如何影响性能或一致性","SELECT 查询线上问题怎么排查"], useCases: ["列表查询","详情查询","报表查询"], prerequisites: ["sql"], related: ["where","join","group-by"], order: 13 },
  /* <!-- KG_REVIEWED: WHERE 条件 | 2026-06-05 | source_count=18 --> */
  /* <!-- KG_EXPLAINED: WHERE 条件 | 2026-05-23 | source_count=5 --> */
  { sourceRefs: ["mysql-reference","mysql-innodb","xiaolin-mysql","javaguide","cs-notes"], id: "where", zh: "WHERE 条件", en: "WHERE Clause", area: "sql", difficulty: "easy", concept: "WHERE 用条件过滤行，条件设计影响索引使用和扫描范围。", explanation: ["核心概念：WHERE 条件（WHERE Clause）聚焦WHERE 用条件过滤行，条件设计影响索引使用和扫描范围。。MySQL 通过 SQL、InnoDB、索引、事务、日志和复制支撑关系型数据读写；理解它时先抓住查询语言、过滤、关联、分组、排序和分页，再看输入、状态变化、输出结果和失败分支。","适用场景：WHERE 条件常用于按状态筛选、按时间查询和搜索过滤。学习时把它放回MySQL链路中观察，并结合前置知识SELECT 查询判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，WHERE 条件通常会和索引和范围查询一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点适合先掌握主流程。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认查询语言、过滤、关联、分组、排序和分页是否仍然成立。","常见误区与注意点：实践中容易把WHERE 条件当成孤立概念处理，结果遗漏隐式转换、NULL、深分页、临时表和排序成本。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考MySQL 8.4 Reference Manual、InnoDB 官方文档、小林 coding、JavaGuide 和 CS-Notes，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["WHERE 条件执行原理是什么","WHERE 条件如何影响性能或一致性","WHERE 条件线上问题怎么排查"], useCases: ["按状态筛选","按时间查询","搜索过滤"], prerequisites: ["select"], related: ["mysql-index","range-query"], order: 14 },
  /* <!-- KG_REVIEWED: JOIN | 2026-06-05 | source_count=20 --> */
  /* <!-- KG_EXPLAINED: JOIN | 2026-05-23 | source_count=5 --> */
  { sourceRefs: ["mysql-reference","mysql-innodb","xiaolin-mysql","javaguide","cs-notes"], id: "join", zh: "JOIN", en: "JOIN", area: "sql", difficulty: "medium", concept: "JOIN 用于关联多张表，常见类型包括 INNER JOIN、LEFT JOIN。", explanation: ["核心概念：JOIN聚焦JOIN 用于关联多张表，常见类型包括 INNER JOIN、LEFT JOIN。。MySQL 通过 SQL、InnoDB、索引、事务、日志和复制支撑关系型数据读写；理解它时先抓住查询语言、过滤、关联、分组、排序和分页，再看输入、状态变化、输出结果和失败分支。","适用场景：JOIN常用于订单关联用户、权限关联角色和多表报表。学习时把它放回MySQL链路中观察，并结合前置知识SELECT 查询和表结构设计判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，JOIN通常会和JOIN 顺序和SQL 优化一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点需要结合流程和指标判断。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认查询语言、过滤、关联、分组、排序和分页是否仍然成立。","常见误区与注意点：实践中容易把JOIN当成孤立概念处理，结果遗漏隐式转换、NULL、深分页、临时表和排序成本。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考MySQL 8.4 Reference Manual、InnoDB 官方文档、小林 coding、JavaGuide 和 CS-Notes，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["JOIN执行原理是什么","JOIN如何影响性能或一致性","JOIN线上问题怎么排查"], useCases: ["订单关联用户","权限关联角色","多表报表"], prerequisites: ["select","schema-design"], related: ["join-order","sql-optimization"], order: 15 },
  /* <!-- KG_REVIEWED: GROUP BY | 2026-05-24 | source_count=5 --> */
  /* <!-- KG_EXPLAINED: GROUP BY | 2026-05-23 | source_count=5 --> */
  { sourceRefs: ["mysql-reference","mysql-innodb","xiaolin-mysql","javaguide","cs-notes"], id: "group-by", zh: "GROUP BY", en: "GROUP BY", area: "sql", difficulty: "medium", concept: "GROUP BY 用于分组聚合，常配合 count、sum、avg 等函数。", explanation: ["核心概念：GROUP BY聚焦GROUP BY 用于分组聚合，常配合 count、sum、avg 等函数。。MySQL 通过 SQL、InnoDB、索引、事务、日志和复制支撑关系型数据读写；理解它时先抓住查询语言、过滤、关联、分组、排序和分页，再看输入、状态变化、输出结果和失败分支。","适用场景：GROUP BY常用于统计报表、运营分析和聚合查询。学习时把它放回MySQL链路中观察，并结合前置知识SELECT 查询判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，GROUP BY通常会和临时表和Filesort一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点需要结合流程和指标判断。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认查询语言、过滤、关联、分组、排序和分页是否仍然成立。","常见误区与注意点：实践中容易把GROUP BY当成孤立概念处理，结果遗漏隐式转换、NULL、深分页、临时表和排序成本。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考MySQL 8.4 Reference Manual、InnoDB 官方文档、小林 coding、JavaGuide 和 CS-Notes，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["GROUP BY执行原理是什么","GROUP BY如何影响性能或一致性","GROUP BY线上问题怎么排查"], useCases: ["统计报表","运营分析","聚合查询"], prerequisites: ["select"], related: ["temporary-table","filesort"], order: 16 },
  /* <!-- KG_REVIEWED: ORDER BY | 2026-05-24 | source_count=5 --> */
  /* <!-- KG_EXPLAINED: ORDER BY | 2026-05-23 | source_count=5 --> */
  { sourceRefs: ["mysql-reference","mysql-innodb","xiaolin-mysql","javaguide","cs-notes"], id: "order-by", zh: "ORDER BY", en: "ORDER BY", area: "sql", difficulty: "medium", concept: "ORDER BY 用于排序，可通过索引减少 filesort。", explanation: ["核心概念：ORDER BY聚焦ORDER BY 用于排序，可通过索引减少 filesort。。MySQL 通过 SQL、InnoDB、索引、事务、日志和复制支撑关系型数据读写；理解它时先抓住查询语言、过滤、关联、分组、排序和分页，再看输入、状态变化、输出结果和失败分支。","适用场景：ORDER BY常用于列表排序、排行榜和最新记录查询。学习时把它放回MySQL链路中观察，并结合前置知识SELECT 查询判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，ORDER BY通常会和Filesort和联合索引一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点需要结合流程和指标判断。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认查询语言、过滤、关联、分组、排序和分页是否仍然成立。","常见误区与注意点：实践中容易把ORDER BY当成孤立概念处理，结果遗漏隐式转换、NULL、深分页、临时表和排序成本。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考MySQL 8.4 Reference Manual、InnoDB 官方文档、小林 coding、JavaGuide 和 CS-Notes，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["ORDER BY执行原理是什么","ORDER BY如何影响性能或一致性","ORDER BY线上问题怎么排查"], useCases: ["列表排序","排行榜","最新记录查询"], prerequisites: ["select"], related: ["filesort","composite-index"], order: 17 },
  /* <!-- KG_REVIEWED: LIMIT 分页 | 2026-06-05 | source_count=16 --> */
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
  /* <!-- KG_REVIEWED: JOIN 顺序 | 2026-06-05 | source_count=21 --> */
  /* <!-- KG_EXPLAINED: JOIN 顺序 | 2026-05-23 | source_count=5 --> */
  {
    sourceRefs: [
      "mysql-select-statement",
      "mysql-join-clause",
      "mysql-select-optimization",
      "mysql-nested-loop-joins",
      "mysql-nested-join-optimization",
      "mysql-outer-join-optimization",
      "mysql-outer-join-simplification",
      "mysql-hash-join-optimization",
      "mysql-bnl-bka-joins",
      "mysql-condition-filtering",
      "mysql-controlling-optimizer",
      "mysql-optimizer-hints",
      "mysql-optimizer-statistics",
      "mysql-optimizer-trace",
      "mysql-how-mysql-uses-indexes",
      "mysql-explain-statement",
      "mysql-explain-output",
      "mysql-performance-schema-statement-tables",
      "planetscale-indexing-joins",
      "use-the-index-luke-sql-join",
      "xiaolincoding-mysql-index",
    ],
    id: "join-order",
    zh: "JOIN 顺序",
    en: "Join Order",
    area: "optimization",
    difficulty: "hard",
    concept: "JOIN 顺序是 MySQL 优化器为多表查询选择的物理访问次序，直接决定驱动表、候选行规模、被驱动表查找次数和中间结果成本。",
    explanation: [
      "概念定位：JOIN 顺序（Join Order）解决的是“多张表先访问谁、再访问谁，整体代价最低”的问题。它常出现在多表列表页、权限查询、订单明细、报表维表关联、慢 SQL 治理和执行计划面试题中。\n\nSQL 文本里的表书写顺序表达的是查询语义；MySQL 优化器会根据连接类型、统计信息、索引、过滤条件和代价模型选择物理访问顺序。JOIN 顺序选得好，前面阶段会快速缩小候选行，后续表按索引查找；JOIN 顺序选得差，早期中间结果膨胀，后续查找、排序、临时表、锁等待和网络返回都会被放大。",
      "准确定义：JOIN 顺序是执行计划中多张表被访问的先后次序。第一张被访问的表常称为驱动表（driving table）；后续表是被驱动表（driven table），执行器用上游候选行中的连接 key 继续查找下一张表。\n\n理解它要同时看四组对象：\n- 语义约束：`INNER JOIN`、`LEFT JOIN`、括号嵌套、派生表、半连接和子查询决定哪些重排可行。\n- 代价输入：表行数、索引基数、直方图、条件选择性、连接条件、排序分组和 `LIMIT`。\n- 访问方法：`const`、`eq_ref`、`ref`、`range`、`index`、`ALL`，以及 Nested Loop、Hash Join、Batched Key Access 和 join buffer。\n- 观测证据：`EXPLAIN FORMAT=TREE`、`EXPLAIN ANALYZE`、`optimizer_trace`、慢查询日志和 Performance Schema。",
      "心智模型：把多表 JOIN 想成一条逐步收窄的流水线。\n\n- 驱动表负责产生第一批候选行。\n- 每新增一张表，候选行会被过滤、匹配或扩张。\n- 每条连接边都需要回答：上游有多少行，每行能否用索引找到下游，单次查找大概返回几行。\n- 优化器追求的是整条流水线的总成本，而单张表大小只是其中一个信号。\n\n经验上会说“小表驱动大表”。工程上更精确的表达是：过滤后候选行少、连接边索引质量高、统计估算可信、后续排序聚合成本低的路径更适合作为前缀计划。",
      "主流程机制：MySQL 选择 JOIN 顺序通常沿着这些阶段推进。\n\n1. 解析 SQL，建立表引用树，识别连接类型、`ON` 条件、`WHERE` 条件、派生表、子查询和括号嵌套。\n2. 预处理阶段做名字解析、权限检查、条件归并、外连接依赖判断和可下推条件识别。\n3. 优化器枚举可行的表访问前缀，也就是从一张表开始逐步扩展为两张、三张、多张表的候选顺序。\n4. 对每个前缀估算 `rows`、`filtered`、访问方法、索引查找成本、join buffer/hash join 成本和中间结果大小。\n5. 选择总代价较低的计划，并把最终顺序、访问类型、索引、估算行数和额外操作写入执行计划。\n6. 执行器按计划迭代取行；`EXPLAIN ANALYZE` 会补充实际耗时和实际行数，帮助验证估算是否贴近真实数据。\n\n`INNER JOIN` 通常给优化器更大的重排空间；`LEFT JOIN` 会保留左表语义，外连接依赖会限制部分交换。MySQL 能在满足条件时把外连接简化为内连接，从而释放更多重排空间。",
      "实践例子：下面的三表查询要找近期已支付订单，并展示客户等级和支付金额。优化器的关键任务是选择 `customers`、`orders`、`payments` 的访问顺序。\n\n```sql\nCREATE TABLE customers (\n  id BIGINT PRIMARY KEY,\n  tier VARCHAR(16) NOT NULL,\n  status VARCHAR(16) NOT NULL,\n  KEY idx_tier_status_id (tier, status, id)\n) ENGINE=InnoDB;\n\nCREATE TABLE orders (\n  id BIGINT PRIMARY KEY,\n  customer_id BIGINT NOT NULL,\n  status VARCHAR(16) NOT NULL,\n  created_at DATETIME NOT NULL,\n  KEY idx_status_created_customer (status, created_at, customer_id),\n  KEY idx_customer_created (customer_id, created_at)\n) ENGINE=InnoDB;\n\nCREATE TABLE payments (\n  id BIGINT PRIMARY KEY,\n  order_id BIGINT NOT NULL,\n  paid_at DATETIME NOT NULL,\n  amount DECIMAL(12,2) NOT NULL,\n  KEY idx_order_paid (order_id, paid_at)\n) ENGINE=InnoDB;\n\nEXPLAIN FORMAT=TREE\nSELECT c.id, o.id, p.amount\nFROM customers AS c\nJOIN orders AS o ON o.customer_id = c.id\nJOIN payments AS p ON p.order_id = o.id\nWHERE c.tier = 'VIP'\n  AND c.status = 'ACTIVE'\n  AND o.status = 'PAID'\n  AND o.created_at >= '2026-06-01'\n  AND p.paid_at >= '2026-06-01'\nORDER BY o.created_at DESC\nLIMIT 20;\n\nEXPLAIN ANALYZE\nSELECT c.id, o.id, p.amount\nFROM customers AS c\nJOIN orders AS o ON o.customer_id = c.id\nJOIN payments AS p ON p.order_id = o.id\nWHERE c.tier = 'VIP'\n  AND c.status = 'ACTIVE'\n  AND o.status = 'PAID'\n  AND o.created_at >= '2026-06-01'\n  AND p.paid_at >= '2026-06-01'\nORDER BY o.created_at DESC\nLIMIT 20;\n```\n\n如果 VIP 客户很少，`customers -> orders -> payments` 可能更便宜；如果近期已支付订单很少，`orders -> customers -> payments` 可能更便宜。真正判断要看 `EXPLAIN ANALYZE` 的实际行数、每层循环次数、是否出现临时表或 filesort，以及最终延迟是否稳定。",
      "执行计划解读：JOIN 顺序要按计划行从上到下读，也要看每一层之间的乘法效应。\n\n常用字段和信号包括：\n- `id` / `select_type`：识别查询块、派生表、子查询和 UNION。\n- `table`：当前访问的表，多个表出现的顺序就是该查询块的访问顺序。\n- `type`：访问类型，`const`、`eq_ref`、`ref`、`range` 通常比 `ALL` 更可控。\n- `key`：实际使用的索引，连接列索引决定被驱动表查找成本。\n- `rows` 与 `filtered`：优化器估算的候选行和过滤比例，两者共同影响前缀行数。\n- `Extra`：`Using where`、`Using index`、`Using temporary`、`Using filesort`、`Using join buffer` 等提示后续成本。\n- `EXPLAIN ANALYZE`：展示实际行数、循环次数和耗时，是验证估算偏差的核心证据。\n\n一个有风险的计划通常表现为：早期表 `rows` 很大、被驱动表 `ALL`、`Using join buffer` 高频出现、估算行数和实际行数差距大、JOIN 后又出现 `Using temporary` 或 `Using filesort`。",
      "深层细节：JOIN 顺序质量依赖统计信息、算法选择和代价模型。\n\n- 统计信息：InnoDB 表统计、索引基数和直方图帮助优化器估算选择性；数据分布变化和热点租户会让估算偏离真实情况。\n- 前缀成本：优化器在构造 `t1`、`t1->t2`、`t1->t2->t3` 这类前缀计划时，会持续估算上游行数和下一张表的访问成本。\n- Nested Loop：上游每一行驱动下游查找；下游有唯一索引时常见 `eq_ref`，成本稳定；下游缺少索引时容易放大为扫描。\n- Hash Join：MySQL 8.0 系列在合适场景可以构建哈希表处理等值连接，适合部分缺少高质量索引或成本更低的连接路径。\n- BKA 与 join buffer：Batched Key Access 会批量组织下游 key，改善随机访问局部性；join buffer 能缓解部分无索引连接成本，也会消耗会话内存。\n- 外连接依赖：`LEFT JOIN` 的保留行语义会约束右表提前访问；可被空值过滤条件消除的外连接会被优化器简化。\n- Hint 与强制顺序：`STRAIGHT_JOIN`、`JOIN_ORDER`、`JOIN_PREFIX`、`JOIN_SUFFIX` 等可影响顺序，适合止血或验证假设；长期方案应回到统计信息、索引和 SQL 结构。",
      "工程场景：JOIN 顺序问题在生产里常以慢查询和计划漂移出现。\n\n- 多租户系统：大租户和小租户共用一条 SQL，绑定参数不同会让实际候选行差异巨大。\n- 列表页检索：多个可选条件组合导致优化器在时间索引、状态索引和连接索引之间切换。\n- 报表查询：维表小、事实表大，先过滤事实表还是先过滤维表取决于选择性和连接边索引。\n- 权限查询：用户、角色、资源、组织多表连接，重复行和半连接改写会影响行数估算。\n- 分页排序：JOIN 顺序会影响 `ORDER BY` 是否可借助索引，以及排序发生在过滤前还是过滤后。\n- 多表 UPDATE/DELETE：访问顺序会影响加锁路径、等待链和死锁概率。\n\n常见优化动作是先减少驱动侧候选行，再保证每条连接边有合适索引，最后处理排序、分组和返回列宽度。",
      "边界与故障：JOIN 顺序失效常来自估算偏差和语义约束。\n\n- 统计信息陈旧：表增长、批量导入、归档、冷热数据切换后，`rows` 和真实行数明显偏离。\n- 数据倾斜：少量状态值、热门租户、热门商品会让平均选择性失去代表性。\n- 连接列索引缺失：被驱动表只能扫描或用 join buffer，外层行数越多延迟越高。\n- 隐式转换：连接列类型、字符集、collation 差异会改变比较与索引可用性。\n- 外连接约束：`LEFT JOIN` 保留行语义限制重排，右表条件写在 `ON` 或 `WHERE` 会影响可简化空间和结果语义。\n- 派生表物化：派生表、CTE、聚合子查询可能提前生成临时结果，改变优化器可选顺序。\n- 低效 hint：强制顺序可以临时稳定计划，也会在数据分布变化后固化新的低效路径。\n- 锁定读：`FOR UPDATE`、多表更新和删除会沿访问路径加锁，顺序差会放大锁等待和死锁概率。",
      "排查实践：JOIN 顺序慢查询建议按证据链处理。\n\n1. 固化现场：记录 SQL、绑定参数、返回行数、执行时间、调用入口、事务范围、实例角色和当前 MySQL 版本。\n2. 查看结构：用 `SHOW CREATE TABLE`、`SHOW INDEX` 检查连接列类型、字符集、主键、唯一索引、联合索引顺序和覆盖能力。\n3. 读取计划：先用 `EXPLAIN FORMAT=TREE` 看访问顺序和访问方法，再用 `EXPLAIN ANALYZE` 对比估算行数与实际行数。\n4. 验证选择性：分别统计每个 WHERE 条件、每条连接边和关键参数的候选行数量。\n5. 看优化器依据：开启 `optimizer_trace` 查看考虑过的访问路径、估算行数、成本和被淘汰原因。\n6. 看运行证据：检查慢查询日志、Performance Schema 语句摘要、临时表、filesort、CPU、I/O、Buffer Pool、锁等待和复制延迟。\n7. 小步修复：刷新统计、创建直方图、补连接索引、调整联合索引顺序、改写外连接、预过滤或预聚合，必要时用 hint 临时止血。\n\n```sql\nSHOW CREATE TABLE orders\\G\nSHOW CREATE TABLE customers\\G\nSHOW INDEX FROM orders;\nSHOW INDEX FROM customers;\n\nEXPLAIN FORMAT=TREE <join_sql>;\nEXPLAIN ANALYZE <join_sql>;\n\nSELECT COUNT(*) FROM customers WHERE tier = 'VIP' AND status = 'ACTIVE';\nSELECT COUNT(*) FROM orders WHERE status = 'PAID' AND created_at >= '2026-06-01';\n\nSET optimizer_trace='enabled=on';\nSELECT /* trace join order */ c.id, o.id, p.amount\nFROM customers c\nJOIN orders o ON o.customer_id = c.id\nJOIN payments p ON p.order_id = o.id\nWHERE c.tier = 'VIP' AND o.status = 'PAID'\nLIMIT 20;\nSELECT TRACE FROM information_schema.OPTIMIZER_TRACE\\G\nSET optimizer_trace='enabled=off';\n\nSELECT DIGEST_TEXT, COUNT_STAR, SUM_ROWS_EXAMINED, SUM_ROWS_SENT,\n       SUM_CREATED_TMP_TABLES, SUM_SORT_ROWS, SUM_TIMER_WAIT\nFROM performance_schema.events_statements_summary_by_digest\nWHERE DIGEST_TEXT LIKE 'SELECT%JOIN%'\nORDER BY SUM_TIMER_WAIT DESC\nLIMIT 10;\n```",
      "修复与取舍：优化 JOIN 顺序要先修真实成本信号，再考虑人工干预。\n\n- 刷新统计：`ANALYZE TABLE` 能更新表和索引统计，适合数据量大幅变化后的计划漂移。\n- 创建直方图：对无索引但参与过滤的倾斜列，直方图能改善选择性估算。\n- 补索引：连接列、过滤列、排序列要结合 SQL 组合设计联合索引，避免只补单列索引。\n- 改写 SQL：把高选择性过滤提前到派生查询、改写外连接条件、把一对多表先聚合，再参与主查询。\n- 使用 hint：`JOIN_ORDER`、`JOIN_PREFIX`、`STRAIGHT_JOIN` 可以稳定顺序，适合事故止血、灰度验证和已知统计失真场景。\n- 控制副作用：新增索引会增加写入成本和空间，直方图需要维护，hint 需要版本和数据分布复核，大查询拆分会增加应用复杂度。",
      "操作示例：下面的命令覆盖统计刷新、直方图、强制顺序验证和会话级止血。\n\n```sql\n-- 刷新表统计信息\nANALYZE TABLE customers, orders, payments;\n\n-- 对倾斜过滤列建立直方图，帮助优化器理解分布\nANALYZE TABLE customers UPDATE HISTOGRAM ON tier, status WITH 64 BUCKETS;\nANALYZE TABLE orders UPDATE HISTOGRAM ON status WITH 64 BUCKETS;\n\n-- 用 hint 验证某个 JOIN 顺序是否更稳定\nEXPLAIN ANALYZE\nSELECT /*+ JOIN_ORDER(o, c, p) */ c.id, o.id, p.amount\nFROM orders o\nJOIN customers c ON c.id = o.customer_id\nJOIN payments p ON p.order_id = o.id\nWHERE o.status = 'PAID'\n  AND c.tier = 'VIP';\n\n-- 用 STRAIGHT_JOIN 做短期顺序固定验证\nEXPLAIN ANALYZE\nSELECT c.id, o.id\nFROM orders o\nSTRAIGHT_JOIN customers c ON c.id = o.customer_id\nWHERE o.status = 'PAID'\n  AND c.tier = 'VIP';\n\n-- 查看语句摘要，确认修复后扫描行与耗时下降\nSELECT DIGEST_TEXT, COUNT_STAR, SUM_ROWS_EXAMINED, SUM_ROWS_SENT, SUM_TIMER_WAIT\nFROM performance_schema.events_statements_summary_by_digest\nORDER BY SUM_TIMER_WAIT DESC\nLIMIT 10;\n```",
      "常见误区：JOIN 顺序的正确判断来自语义、选择性、索引和运行证据。\n\n- 小表适合作为候选驱动表，真正决定顺序的是过滤后行数和后续连接成本。\n- SQL 书写顺序只是语义输入，优化器会在可行范围内重排内连接。\n- `EXPLAIN` 的估算行数是决策依据，`EXPLAIN ANALYZE` 的实际行数是校准证据。\n- `Using join buffer` 表示 MySQL 正在用缓冲策略执行连接，排查时继续确认下游索引和外层循环次数。\n- hint 是计划控制工具，长期治理依赖数据模型、索引、统计信息和 SQL 结构。",
      "面试追问：JOIN 顺序题适合按“定义 -> 优化器 -> 证据 -> 故障 -> 取舍”回答。\n\n- JOIN 顺序解决什么问题，驱动表和被驱动表分别是什么？\n- MySQL 为什么会调整 SQL 中多张表的访问顺序？\n- 优化器选择 JOIN 顺序时主要依赖哪些统计信息和成本信号？\n- `INNER JOIN`、`LEFT JOIN`、外连接简化对顺序重排有什么影响？\n- `EXPLAIN` 中如何看 JOIN 顺序、访问类型、索引、`rows`、`filtered` 和 `Extra`？\n- `EXPLAIN ANALYZE` 如何发现估算行数和实际行数偏差？\n- Nested Loop、Hash Join、Batched Key Access 和 join buffer 对 JOIN 顺序有什么影响？\n- 数据倾斜、统计信息陈旧、连接列索引缺失会制造哪些线上现象？\n- 线上 JOIN 计划漂移时，如何用慢查询日志、Performance Schema 和 `optimizer_trace` 定位？\n- `STRAIGHT_JOIN`、`JOIN_ORDER` hint、补索引、直方图和 SQL 改写如何取舍？",
      "参考来源：本讲解主要参考 MySQL 8.4 Reference Manual 的 SELECT、JOIN Clause、Optimizing SELECT Statements、Nested-Loop Join Algorithms、Nested Join Optimization、Outer Join Optimization、Outer Join Simplification、Hash Join Optimization、Block Nested-Loop and Batched Key Access Joins、Condition Filtering、Controlling the Query Optimizer、Optimizer Hints、Optimizer Statistics、Tracing the Optimizer、How MySQL Uses Indexes、EXPLAIN 和 Performance Schema Statement Tables 文档，并结合 PlanetScale 的 Indexing joins、Use The Index, Luke 的 SQL Joins 与小林 coding 的 MySQL 索引文章进行工程表达校准。官方资料用于机制、限制、hint 和观测字段，工程资料用于补充索引设计、排查路径和面试表达。"
    ],
    typicalProblems: [
      "JOIN 顺序解决什么问题，驱动表和被驱动表如何定义？",
      "MySQL 优化器为什么会改写 SQL 文本中的表访问顺序？",
      "优化器选择 JOIN 顺序时会参考哪些统计信息、索引和成本信号？",
      "`INNER JOIN`、`LEFT JOIN`、外连接简化分别怎样影响重排空间？",
      "`EXPLAIN` 中如何读取 JOIN 顺序、访问类型、索引、`rows`、`filtered` 和 `Extra`？",
      "`EXPLAIN ANALYZE` 如何验证估算行数和实际行数的差距？",
      "Nested Loop、Hash Join、Batched Key Access 和 join buffer 分别怎样影响连接成本？",
      "数据倾斜、统计信息陈旧、隐式转换和连接列缺索引会导致哪些计划问题？",
      "线上 JOIN 计划漂移时，如何用慢查询日志、Performance Schema 和 `optimizer_trace` 建立证据链？",
      "`ANALYZE TABLE`、直方图、补联合索引、SQL 改写、`JOIN_ORDER` hint 和 `STRAIGHT_JOIN` 如何取舍？"
    ],
    commonCommands: [
      "EXPLAIN FORMAT=TREE <join_sql>",
      "EXPLAIN ANALYZE <join_sql>",
      "SHOW CREATE TABLE <table>\\G",
      "SHOW INDEX FROM <table>",
      "ANALYZE TABLE <table>",
      "ANALYZE TABLE <table> UPDATE HISTOGRAM ON <column> WITH 64 BUCKETS",
      "SET optimizer_trace='enabled=on'",
      "SELECT TRACE FROM information_schema.OPTIMIZER_TRACE\\G",
      "SELECT /*+ JOIN_ORDER(t1, t2, t3) */ ...",
      "SELECT ... FROM t1 STRAIGHT_JOIN t2 ON ...",
      "SELECT DIGEST_TEXT, COUNT_STAR, SUM_ROWS_EXAMINED, SUM_ROWS_SENT, SUM_TIMER_WAIT FROM performance_schema.events_statements_summary_by_digest ORDER BY SUM_TIMER_WAIT DESC LIMIT 10"
    ],
    useCases: ["多表查询优化", "执行计划分析", "慢 SQL 治理", "权限查询", "报表维表关联", "列表页筛选", "计划漂移排查", "多表更新锁等待分析"],
    prerequisites: ["join", "explain", "mysql-index"],
    related: ["index-selectivity", "sql-optimization", "access-type", "slow-query-log", "composite-index", "leftmost-prefix"],
    order: 64,
  },
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
    sourceRefs: [
      "mysql-reference",
      "mysql-sql-statements",
      "mysql-create-table",
      "mysql-data-types",
      "mysql-choosing-column-types",
      "mysql-create-table-foreign-keys",
      "mysql-show-create-table",
      "mysql-innodb-index-types",
      "mysql-optimization",
      "mysql-planetscale-schema-recap",
      "mysql-planetscale-primary-keys",
      "xiaolincoding-mysql-index",
      "javaguide",
      "mysql-alibaba-java-development-manual",
    ],
    concept:
      "表结构设计是把业务实体、字段、主键、约束、索引和生命周期固化成可维护数据模型的过程，直接影响数据质量、查询效率和后续演进成本。",
    explanation: [
      "概念定位：表结构设计（Schema Design）解决的是“业务事实如何稳定落到关系型数据库表里”的问题。它出现在建库建表、接口开发、订单状态流转、权限模型、历史归档、分库分表、索引优化和线上重构里，是 MySQL 工程质量的起点。\n\n准确地说，表结构设计是在 MySQL 中用 `CREATE TABLE`、字段类型、`PRIMARY KEY`、`UNIQUE`、`FOREIGN KEY`、`CHECK`、默认值、字符集、索引和表选项描述实体、关系、约束和访问模式。优秀的表结构能让数据语义清楚、约束靠近数据、查询路径可预测、DDL 变更可治理、故障排查有证据。",
      "准确定义：MySQL 的表结构由几类对象共同组成。\n\n- 表：承载一个边界清楚的业务实体或关系，例如 `orders`、`order_items`、`users`。\n- 字段：表达实体属性，字段名、类型、长度、`NULL` 语义、默认值、注释和字符集共同构成契约。\n- 主键：唯一标识一行数据，在 InnoDB 中也是聚簇索引组织核心。\n- 约束：用 `NOT NULL`、`UNIQUE`、`FOREIGN KEY`、`CHECK` 等规则保护数据有效性和关系一致性。\n- 索引：服务查询、排序、关联和约束校验，同时增加写入维护成本。\n- 生命周期：创建、扩展、回填、归档、清理、备份恢复和在线 DDL 都属于表结构设计范围。\n\n新手先理解“表是业务对象的长期契约”；老手会继续评估行大小、页分裂、二级索引体积、锁范围、复制延迟和变更成本。",
      "心智模型：把表结构看成数据库里的业务合同。\n\n- 合同对象：表名表达这份合同管理哪类业务事实。\n- 合同条款：字段、类型、默认值、枚举和注释定义每个事实的含义。\n- 身份凭证：主键决定一行数据如何被定位、关联和物理组织。\n- 边界规则：唯一约束、外键、检查约束和状态字段约束数据进入表的方式。\n- 履约成本：索引、行长度、大字段、字符集、事务范围和 DDL 方式决定系统运行成本。\n\n这个模型能解释很多线上问题：字段含义混乱会带来口径争议，主键选择失误会放大索引和写入成本，约束缺失会让脏数据进入核心链路，DDL 设计粗糙会在发布期引发锁等待和复制延迟。",
      "主流程机制：一次表结构设计可以按从业务到物理的顺序推进。\n\n1. 建模业务事实：识别实体、关系、生命周期和读写入口，例如订单、订单明细、支付流水、用户收货地址。\n2. 定义字段契约：为每个属性确定类型、范围、精度、`NULL` 语义、默认值、注释、字符集和时区语义。\n3. 选择主键：优先保证唯一、稳定、短小、可比较，并评估自增 ID、业务 ID、分布式 ID 对写入局部性和二级索引体积的影响。\n4. 添加约束：用 `NOT NULL`、`UNIQUE`、外键或应用层校验表达强规则，确保幂等键、状态唯一性和关联完整性有明确责任边界。\n5. 设计索引：围绕高频 `WHERE`、`JOIN`、`ORDER BY`、分页和唯一校验建立索引，避免把低价值索引长期留在写路径上。\n6. 预估演进：给状态、金额、时间、删除标记、归档字段和大字段拆分留出扩展空间，同时规划在线 DDL、回填、回滚和备份恢复。\n7. 验证证据：用 `SHOW CREATE TABLE`、`SHOW INDEX`、`EXPLAIN`、Information Schema 和线上慢 SQL 样本确认结构与访问路径匹配。\n\n表结构设计的输出是一份可执行、可审查、可演进的 DDL，而质量取决于业务语义、MySQL 机制和线上证据是否对齐。",
      "实践例子：下面用订单模型展示一份可落地的 MySQL 表结构。\n\n```sql\nCREATE TABLE orders (\n  id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '内部主键',\n  order_no VARCHAR(64) NOT NULL COMMENT '业务订单号，接口幂等键',\n  user_id BIGINT UNSIGNED NOT NULL COMMENT '下单用户',\n  status VARCHAR(32) NOT NULL COMMENT '订单状态',\n  amount DECIMAL(12,2) NOT NULL COMMENT '订单金额',\n  paid_at DATETIME NULL COMMENT '支付完成时间',\n  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',\n  updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',\n  deleted_at DATETIME NULL COMMENT '软删除时间',\n  PRIMARY KEY (id),\n  UNIQUE KEY uk_order_no (order_no),\n  KEY idx_user_created (user_id, created_at),\n  KEY idx_status_created (status, created_at),\n  CHECK (amount >= 0)\n) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='订单主表';\n```\n\n这份 DDL 的关键点是：`id` 服务 InnoDB 聚簇索引和内部关联，`order_no` 服务外部幂等与查询，`DECIMAL` 表达金额精度，`created_at/updated_at/deleted_at` 支撑生命周期，两个联合索引覆盖用户列表和状态队列类查询。上线前还要用真实 SQL 样本验证索引顺序和返回列。",
      "深层细节：表结构设计会直接进入 InnoDB 的物理成本模型。\n\n- 主键越长，所有二级索引叶子节点携带的主键值越大；宽主键会放大索引空间、Buffer Pool 压力和缓存未命中。\n- 主键写入顺序影响页分裂和写入局部性；单调递增主键通常更利于追加写入，分布式随机 ID 需要评估热点、排序和空间成本。\n- 字段类型越精确，行记录越紧凑；MySQL 官方建议选择能覆盖取值范围的最精确类型，金额类数据优先使用定点类型表达业务精度。\n- `VARCHAR`、`TEXT`、`JSON` 等可变或大字段会影响行大小、页内可容纳记录数、排序临时表和网络返回量；高频列表页适合拆出详情表或限制返回列。\n- 字符集和排序规则影响比较、索引长度和排序结果；多语言文本通常使用 `utf8mb4`，大小写敏感需求需要明确 collation。\n- `NULL` 是业务语义的一部分；`NULL`、空字符串、零值和缺省值需要各自代表稳定含义。\n- 外键能把引用完整性放在数据库层执行，也会带来索引要求、级联动作、锁等待和跨服务演进约束；大型分片系统常把关系校验放到应用和数据治理链路中。\n\n老手审表时会从“读写成本、约束责任、未来 DDL、数据恢复”四个角度同时检查。",
      "工程场景：不同业务形态对应不同设计重点。\n\n- 订单和支付：幂等键、唯一约束、金额精度、状态流转、事务边界和审计时间最关键。\n- 用户和账号：手机号、邮箱、第三方 open_id 等唯一键要明确归属，脱敏、加密和权限审计要靠字段语义支撑。\n- 权限模型：用户、角色、资源、授权关系适合拆表表达多对多关系，唯一约束保护重复授权。\n- 高频列表：过滤字段、排序字段和分页字段共同决定联合索引；字段过宽会放大回表和网络传输。\n- 报表和宽表：读性能、冗余字段、刷新时延和一致性口径要一起设计，通常配合离线任务或物化汇总。\n- 历史归档：时间字段、分区策略、冷热数据拆分、删除窗口和恢复演练要从建表阶段纳入。",
      "边界与故障模式：表结构问题往往在数据量增长、并发提升和版本演进后暴露。\n\n- 数据脏：缺少唯一约束、状态约束或引用校验，会出现重复订单、重复授权、孤儿明细和统计口径漂移。\n- 查询慢：字段类型错配、索引顺序偏离访问模式、低选择性字段单列索引、宽表回表过多，会导致扫描行数和 I/O 上升。\n- 写入抖：过多二级索引、随机主键、大字段更新和批量回填会放大页分裂、Redo、Undo、Binlog 和复制压力。\n- 发布卡：大表 `ALTER TABLE`、长事务、元数据锁和回填脚本会让 DDL 等待、连接堆积或从库延迟升高。\n- 迁移难：字段复用、枚举含义漂移、缺少注释、时间语义混乱和历史数据格式差异会拖慢重构。\n- 安全风险：敏感字段缺少分级、加密、脱敏、审计和最小权限，会扩大泄露面和合规成本。",
      "排查实践：表结构相关问题建议按证据链定位。\n\n1. 固化结构现场：导出 `SHOW CREATE TABLE`，记录字段、主键、索引、字符集、约束、行格式和表注释。\n2. 还原访问模式：收集慢 SQL、绑定参数、返回行数、调用入口、排序分页方式和事务范围。\n3. 检查索引质量：查看 `SHOW INDEX` 的 `Key_name`、`Column_name`、`Cardinality`，对比 `EXPLAIN` 的 `key`、`rows`、`filtered`、`Extra`。\n4. 检查字段语义：用 Information Schema 查 `DATA_TYPE`、`IS_NULLABLE`、`COLUMN_DEFAULT`、`COLUMN_TYPE`、`COLLATION_NAME`。\n5. 检查数据分布：统计热点值、重复键、空值比例、最大长度、历史状态和异常金额。\n6. 制定修复路径：新建约束或索引、回填字段、拆表、归档、修复脏数据和执行在线 DDL，先在影子库或小流量环境验证。\n\n```sql\nSHOW CREATE TABLE orders\\G\nSHOW INDEX FROM orders;\n\nSELECT COLUMN_NAME, DATA_TYPE, COLUMN_TYPE, IS_NULLABLE, COLUMN_DEFAULT, COLLATION_NAME\nFROM INFORMATION_SCHEMA.COLUMNS\nWHERE TABLE_SCHEMA = DATABASE() AND TABLE_NAME = 'orders'\nORDER BY ORDINAL_POSITION;\n\nEXPLAIN ANALYZE\nSELECT id, order_no, status\nFROM orders\nWHERE user_id = 1001\nORDER BY created_at DESC\nLIMIT 20;\n\nSELECT order_no, COUNT(*) AS cnt\nFROM orders\nGROUP BY order_no\nHAVING cnt > 1;\n```\n\n这些证据能把“表设计有问题”拆成字段、索引、约束、数据分布和访问模式五类事实。",
      "常见误区：表结构设计的核心是业务语义与运行成本同时成立。\n\n- 字段名、注释和枚举值是长期契约，稳定语义能减少接口、报表和排障沟通成本。\n- 主键承担唯一标识、聚簇组织和二级索引引用三项职责，选择主键时要同时看业务稳定性和物理成本。\n- 索引服务读路径，同时进入写路径维护成本；高频查询、唯一校验和排序分页优先，低价值索引应定期清理。\n- 范式保证一致性基础，适度冗余服务明确的读性能目标；冗余字段需要同步机制、校验任务和修复手段。\n- 外键、应用校验和数据治理可以组成多层完整性策略，选择依据是团队控制面、分片架构、变更频率和故障恢复方式。\n- DDL 是生产变更，表结构发布需要评估元数据锁、复制延迟、回填批次、回滚路径和备份恢复点。",
      "面试追问：表结构设计类问题适合按“语义、约束、成本、演进、证据”回答。\n\n- 如何从业务需求推导表、字段、主键、唯一约束和索引？\n- 自增主键、业务主键、UUID、雪花 ID 在 InnoDB 中各自影响什么？\n- 金额、时间、状态、手机号、JSON、大文本字段分别如何选类型？\n- 为什么主键长度会影响二级索引体积和 Buffer Pool 命中？\n- 外键约束、唯一约束和应用层校验如何分工？\n- 高频列表查询的联合索引如何结合过滤、排序、分页和返回列设计？\n- 大表加字段、加索引、回填和回滚如何降低线上影响？\n- 如何用 `SHOW CREATE TABLE`、`SHOW INDEX`、Information Schema、`EXPLAIN ANALYZE` 排查表结构问题？\n- 反范式字段如何保证同步、校验和修复？",
      "参考来源：本讲解主要参考 MySQL 8.4 Reference Manual 的 `CREATE TABLE`、Data Types、Choosing the Right Type、Foreign Key Constraints、`SHOW CREATE TABLE`、InnoDB Clustered and Secondary Indexes、Optimization 文档，并结合 PlanetScale 的 Schema Recap、Primary Keys、小林 coding 的索引文章、JavaGuide 和阿里巴巴 Java 开发手册中的 MySQL 设计规范进行工程表达校准。官方资料用于定义、语法、约束和命令语义，中文资料用于补足命名、字段、主键、索引和面试场景。"
    ],
    typicalProblems: [
      "表结构设计需要从哪些业务信息推导表、字段、主键、约束和索引？",
      "MySQL `CREATE TABLE` 中字段定义、表选项、索引和约束分别承担什么职责？",
      "如何选择金额、时间、状态、手机号、JSON、大文本等字段类型？",
      "InnoDB 中主键为什么会影响聚簇索引、二级索引体积和写入局部性？",
      "唯一约束、外键约束、检查约束和应用层校验如何分工？",
      "高频查询、排序分页和 JOIN 场景下如何从访问模式反推联合索引？",
      "宽表、大字段、随机主键、过多索引会带来哪些性能和运维成本？",
      "大表在线加字段、加索引、回填和回滚需要哪些保护措施？",
      "线上如何用 `SHOW CREATE TABLE`、`SHOW INDEX`、Information Schema 和 `EXPLAIN ANALYZE` 排查表结构问题？",
      "面试中如何解释范式、反范式、主键选择、外键取舍和表结构演进？"
    ],
    commonCommands: [
      "SHOW CREATE TABLE <table>\\G",
      "SHOW INDEX FROM <table>",
      "SELECT COLUMN_NAME, DATA_TYPE, COLUMN_TYPE, IS_NULLABLE, COLUMN_DEFAULT FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_SCHEMA = DATABASE() AND TABLE_NAME = '<table>'",
      "EXPLAIN ANALYZE <sql>",
      "SELECT <unique_key>, COUNT(*) FROM <table> GROUP BY <unique_key> HAVING COUNT(*) > 1"
    ],
    useCases: ["业务建模", "数据库初始化", "表结构重构", "索引设计", "数据质量治理", "大表在线变更", "慢 SQL 排查"],
    prerequisites: ["sql"],
    related: ["data-type", "primary-key", "normalization", "denormalization", "foreign-key", "online-ddl"],
  },
  "data-type": {
    sourceRefs: [
      "mysql-data-types",
      "mysql-choosing-column-types",
      "mysql-storage-requirements",
      "mysql-data-size-optimization",
      "mysql-char-varchar",
      "mysql-datetime-timestamp",
      "mysql-decimal-data-type",
      "mysql-json-data-type",
      "mysql-character-sets",
      "mysql-type-conversion",
      "mysql-innodb-row-format",
      "mysql-innodb-index-types",
      "mysql-planetscale-schema-recap",
      "mysql-planetscale-datetimes",
      "mysql-planetscale-strings",
      "mysql-alibaba-java-development-manual",
      "javaguide",
    ],
    concept:
      "MySQL 数据类型定义字段的取值范围、存储布局、比较规则和索引成本，是表结构设计、查询性能、数据正确性和线上排障的基础契约。",
    explanation: [
      "概念定位：数据类型（Data Type）解决的是“一个字段能存什么、怎么存、怎么比较、用多少空间、如何参与索引和计算”的问题。它出现在建表评审、订单金额、时间字段、手机号、状态枚举、JSON 扩展字段、慢 SQL 排查、字符集迁移和线上数据订正中。\n\nMySQL 的字段类型主要分为数值、字符串、日期时间、JSON、空间和二进制等类别。选择类型时要同时满足业务语义、取值边界、存储空间、索引长度、排序比较、函数计算、时区语义和未来扩展。新手先把类型当作字段的“容器规格”；老手还会继续评估行大小、页内记录数、Buffer Pool 命中、隐式转换、复制兼容和 DDL 成本。",
      "准确定义：MySQL 数据类型是一组在 `CREATE TABLE` 字段定义中声明的约束和物理编码规则。\n\n- 数值类型：`TINYINT`、`INT`、`BIGINT`、`DECIMAL`、`FLOAT`、`DOUBLE`，负责范围、符号位、精度和计算语义。\n- 字符串类型：`CHAR`、`VARCHAR`、`TEXT`、`BLOB`、`ENUM`、`SET`，负责长度、字符集、排序规则和大字段存储。\n- 日期时间类型：`DATE`、`TIME`、`DATETIME`、`TIMESTAMP`、`YEAR`，负责时间范围、显示格式、时区转换和默认值行为。\n- JSON 类型：存储合法 JSON 文档，适合扩展属性、低频筛选和半结构化数据，并可配合生成列或函数索引优化访问。\n- 字符集与排序规则：`CHARACTER SET` 和 `COLLATE` 决定字符编码、大小写/重音敏感性、比较和排序结果。\n\n字段类型和 `NOT NULL`、默认值、索引、约束共同组成数据契约；类型选择一旦进入生产表，修改会牵涉数据重写、索引重建、应用兼容和回滚路径。",
      "心智模型：把数据类型看成仓库货架的规格。\n\n- 货架尺寸：`INT`、`BIGINT`、`VARCHAR(64)`、`DECIMAL(12,2)` 决定能放多大、能放多少。\n- 货物标签：字符集、排序规则、时区和精度决定同一份数据如何被识别和比较。\n- 通道宽度：行长度、索引长度和返回列大小决定扫描、排序、回表和网络传输成本。\n- 入库规则：严格 SQL 模式、范围检查、默认值和 `NULL` 语义决定异常数据如何进入或被拦截。\n- 改造成本：生产表上改类型会影响 DDL 算法、锁、复制延迟、回填和应用发布顺序。\n\n这个模型能解释很多线上现象：手机号用数值类型会丢失前导零，金额用浮点会产生精度误差，字符列和数值参数比较会触发隐式转换，超宽 `VARCHAR` 会增加临时表和索引成本。",
      "主流程机制：字段类型选择可以按从业务语义到物理证据的顺序推进。\n\n1. 定义业务含义：字段表示标识、数量、金额、状态、时间、文本、二进制内容还是扩展属性。\n2. 确定范围和精度：估算当前最大值、三年增长、单位、是否需要符号、是否允许小数和四舍五入规则。\n3. 选择类型族：金额优先 `DECIMAL`，计数和 ID 常用整型，短文本用 `VARCHAR`，大文本用 `TEXT`，事件时间常用 `DATETIME` 或 `TIMESTAMP`，扩展属性可用 JSON。\n4. 明确编码和比较：为字符列确定 `utf8mb4`、业务需要的 collation、大小写敏感性和唯一键比较规则。\n5. 设计空值与默认值：让 `NULL`、空字符串、零值、默认状态各自表达稳定含义，结合严格模式阻止异常截断和越界。\n6. 评估索引成本：宽字段、低选择性字段、大文本前缀索引、字符集长度和主键宽度都会放大二级索引与 Buffer Pool 压力。\n7. 验证访问模式：用 `SHOW CREATE TABLE`、Information Schema、`SHOW INDEX`、`EXPLAIN ANALYZE` 和真实参数确认类型、索引和 SQL 写法匹配。\n\n字段类型的输出是一份可长期演进的契约，质量来自业务边界、MySQL 编码规则和线上查询证据三者一致。",
      "实践例子：下面是一张订单表中常见字段的类型选择。\n\n```sql\nCREATE TABLE orders (\n  id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '内部主键',\n  order_no VARCHAR(64) NOT NULL COMMENT '业务订单号，保留外部格式',\n  user_id BIGINT UNSIGNED NOT NULL COMMENT '用户 ID',\n  status TINYINT UNSIGNED NOT NULL DEFAULT 0 COMMENT '订单状态编码',\n  amount DECIMAL(12,2) NOT NULL COMMENT '订单金额，精确到分',\n  currency CHAR(3) NOT NULL DEFAULT 'CNY' COMMENT 'ISO 货币代码',\n  buyer_phone VARCHAR(32) NOT NULL COMMENT '手机号，按字符串保存',\n  ext JSON NULL COMMENT '低频扩展属性',\n  paid_at DATETIME NULL COMMENT '业务支付时间',\n  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',\n  updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',\n  PRIMARY KEY (id),\n  UNIQUE KEY uk_order_no (order_no),\n  KEY idx_user_created (user_id, created_at),\n  KEY idx_status_created (status, created_at)\n) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;\n```\n\n这份 DDL 的重点是：`BIGINT UNSIGNED` 给 ID 留增长空间，`VARCHAR` 保留订单号和手机号的外部格式，`TINYINT` 承载有限状态，`DECIMAL` 保证金额精度，`CHAR(3)` 表达固定长度货币代码，`JSON` 收纳低频扩展，时间字段使用明确业务语义。上线前要用真实 SQL 检查索引顺序和返回列。",
      "深层细节：数据类型会进入 MySQL 的存储、优化器和执行路径。\n\n- 行大小：定长、变长和大字段共同决定页内可容纳记录数；行越宽，单次扫描需要读取的页越多，Buffer Pool 可缓存的有效行越少。\n- 索引大小：二级索引叶子节点保存索引列和主键值，宽字符列、长主键和多列联合索引会直接放大索引空间与回表成本。\n- 字符比较：`VARCHAR` 的长度单位与字符集相关，`utf8mb4` 字符可能占用多个字节；collation 决定大小写、重音、排序和唯一键判等。\n- 数值精度：`DECIMAL` 适合金额和精确计算，`FLOAT/DOUBLE` 适合近似科学计算；财务字段要把单位、精度和舍入规则写进字段设计。\n- 时间语义：`TIMESTAMP` 会受会话时区影响并转换存储，`DATETIME` 更适合表达业务发生的本地时间；跨时区系统需要统一时区、存储规范和展示转换。\n- 隐式转换：字符串列和数字参数比较、不同字符集比较、函数包裹列、日期字符串格式差异，都可能改变比较结果和索引访问路径。\n- 大字段：`TEXT`、`BLOB`、`JSON` 会放大返回、排序、临时表和复制成本；高频列表页适合只取摘要字段或拆出详情表。\n\n老手做字段评审时会把“语义正确、范围足够、行记录紧凑、索引友好、变更可控”同时纳入判断。",
      "工程场景：不同字段类型有高频的生产取舍。\n\n- ID 与计数：业务增长快、分库分表和外部 ID 场景优先评估 `BIGINT UNSIGNED`，短小主键能降低所有二级索引成本。\n- 金额与费率：金额用 `DECIMAL(p,s)` 或以最小货币单位保存整数，费率要明确精度、舍入和展示口径。\n- 状态与枚举：有限状态可用 `TINYINT` 搭配代码枚举和注释，强语义字段需要在应用层、约束或字典表中保持可读性。\n- 手机号和证件号：外部标识按字符串保存，保留前导零、区号、分隔符和国家差异，并配合脱敏、加密和最小权限。\n- 时间字段：业务事件时间、创建更新时间、过期时间和审计时间要分清来源；跨地区系统建议统一写入时区策略。\n- JSON 扩展：适合低频、非核心、变化快的属性；高频过滤和排序字段适合沉淀为独立列或生成列索引。\n- 大文本与附件：正文、图片、文件优先放对象存储或详情表，主表保留 URL、摘要、状态和元数据。\n\n这些选择决定后续索引、慢查询、数据治理、合规审计和 DDL 演进成本。",
      "边界与故障模式：数据类型问题常表现为写入报错、查询变慢、结果偏差和迁移困难。\n\n- 越界与截断：整型范围、`VARCHAR` 长度、`DECIMAL` 精度和日期合法性会在严格模式下报错，在历史兼容模式下可能产生截断或警告。\n- 精度偏差：浮点金额、单位混乱、四舍五入口径差异会让账务、报表和对账结果漂移。\n- 索引失效：字段类型与参数类型错配、字符集/排序规则不一致、函数包裹索引列、日期字符串格式不稳定，会增加扫描行数。\n- 排序差异：collation 改变大小写敏感、中文排序、唯一键判等和跨库对比结果。\n- 时区错误：`TIMESTAMP`、会话 `time_zone`、应用时区和展示时区混用，会造成跨天统计、延迟任务和审计日志偏差。\n- 宽表膨胀：过大的 `VARCHAR`、大 `JSON`、多余 `TEXT` 和过多宽索引，会放大 I/O、临时表、复制和备份恢复耗时。\n- 类型变更风险：生产表改字段类型需要考虑在线 DDL 能力、锁等待、索引重建、回填批次、双写兼容和回滚方案。",
      "排查实践：字段类型相关问题建议先建立结构、数据、计划和运行证据。\n\n1. 固化表结构：查看字段类型、字符集、排序规则、默认值、主键和索引。\n2. 固化异常样本：记录 SQL、绑定参数类型、报错信息、SQL mode、会话时区和异常数据值。\n3. 检查范围与长度：统计最大值、最小值、最大字符长度、空值比例、重复值和异常格式。\n4. 检查访问路径：用 `EXPLAIN` 或 `EXPLAIN ANALYZE` 看 `key`、`rows`、`filtered`、`Extra` 和真实耗时。\n5. 检查运行影响：观察慢查询日志、Performance Schema 语句摘要、临时表、排序、锁等待、复制延迟和表大小。\n6. 制定修复：先修数据和应用参数，再考虑加生成列、补索引、拆字段、改类型或在线回填，发布前准备兼容读写和回滚。\n\n```sql\nSHOW CREATE TABLE orders\\G\nSHOW FULL COLUMNS FROM orders;\nSHOW INDEX FROM orders;\n\nSELECT COLUMN_NAME, COLUMN_TYPE, CHARACTER_SET_NAME, COLLATION_NAME,\n       IS_NULLABLE, COLUMN_DEFAULT\nFROM INFORMATION_SCHEMA.COLUMNS\nWHERE TABLE_SCHEMA = DATABASE() AND TABLE_NAME = 'orders'\nORDER BY ORDINAL_POSITION;\n\nSELECT MAX(amount), MIN(amount), MAX(CHAR_LENGTH(order_no)),\n       SUM(buyer_phone REGEXP '^[0-9+ -]+$') AS phone_like_rows\nFROM orders;\n\nEXPLAIN ANALYZE\nSELECT id, order_no\nFROM orders\nWHERE order_no = '202606060001';\n\nSELECT @@sql_mode, @@time_zone, @@system_time_zone;\n```\n\n排查的核心是把“字段类型是否合适”落到可验证事实：类型定义、真实数据分布、查询参数类型、执行计划和运行指标。",
      "常见误区：字段类型是业务语义和数据库成本的共同表达。\n\n- `VARCHAR(255)` 是默认上限思维，字段长度应来自业务格式、索引成本和未来增长判断。\n- 手机号、订单号、证件号属于外部标识，字符串能保留格式、前导零和跨地区变化。\n- 金额字段需要精确语义，`DECIMAL` 或最小单位整数能让计算、存储和对账口径稳定。\n- `NULL` 表示未知或缺失，空字符串、零值和默认枚举表示具体业务状态；每种取值都要有清楚含义。\n- JSON 是扩展工具，核心查询字段应沉淀为列、生成列或索引表达式，方便优化器和排障工具观察。\n- 字符集和排序规则是字段契约的一部分，唯一键、排序和大小写敏感需求要在建表阶段确定。\n- 改字段类型是生产数据迁移，评估范围覆盖应用兼容、DDL 锁、复制延迟、数据校验和回滚。",
      "面试追问：数据类型类问题适合按“语义、范围、存储、索引、异常、迁移”回答。\n\n- MySQL 常见数据类型有哪些，分别适合哪些业务字段？\n- `CHAR`、`VARCHAR`、`TEXT`、`BLOB` 在存储、索引和使用场景上有什么差异？\n- 金额为什么常用 `DECIMAL` 或最小单位整数，`FLOAT/DOUBLE` 适合哪些计算？\n- `DATETIME` 和 `TIMESTAMP` 的时区语义、范围和默认值行为如何影响系统设计？\n- `utf8mb4` 和 collation 如何影响字符串长度、排序、唯一键和大小写敏感？\n- 为什么字段类型错配或隐式转换会影响索引访问路径，线上如何验证？\n- 宽字段、大 JSON、多列宽索引如何影响 InnoDB 行格式、Buffer Pool、临时表和复制？\n- 大表字段类型选错后，如何规划数据修复、在线 DDL、回填、双写兼容和回滚？\n- 面试中如何从订单表、用户表、日志表分别说明字段类型选择？",
      "参考来源：本讲解主要参考 MySQL 8.4 Reference Manual 的 Data Types、Choosing the Right Type、Storage Requirements、Optimizing Data Size、`CHAR/VARCHAR`、`DATETIME/TIMESTAMP`、`DECIMAL`、JSON、Character Sets、Type Conversion、InnoDB Row Formats 和 Clustered and Secondary Indexes 文档，并结合 PlanetScale 的 Schema、Strings、Datetimes vs Timestamps、阿里巴巴 Java 开发手册和 JavaGuide 的 MySQL 规范表达进行工程校准。官方资料用于定义、范围、存储、时区和转换语义，工程资料用于补充字段评审、索引成本、排查路径和面试表达。"
    ],
    typicalProblems: [
      "MySQL 数据类型解决什么问题，字段类型如何影响数据正确性和查询性能？",
      "数值、字符串、日期时间、JSON 和二进制类型分别适合哪些业务场景？",
      "如何为订单金额、手机号、状态、时间、扩展字段和大文本选择类型？",
      "`CHAR`、`VARCHAR`、`TEXT`、`BLOB` 在存储、索引和排序上的关键差异是什么？",
      "`DECIMAL`、`FLOAT`、`DOUBLE` 在精度、性能和业务风险上如何取舍？",
      "`DATETIME` 和 `TIMESTAMP` 的时区语义如何影响跨地区系统和审计日志？",
      "字符集和 collation 如何影响唯一键、排序、大小写敏感和索引长度？",
      "隐式类型转换、字段类型错配和函数包裹列为什么会改变执行计划？",
      "线上如何用 `SHOW CREATE TABLE`、Information Schema、`EXPLAIN ANALYZE` 和 SQL mode 排查类型问题？",
      "大表字段类型选错后，在线 DDL、数据回填、应用兼容和回滚如何设计？"
    ],
    commonCommands: [
      "SHOW CREATE TABLE <table>\\G",
      "SHOW FULL COLUMNS FROM <table>",
      "SHOW INDEX FROM <table>",
      "SELECT COLUMN_NAME, COLUMN_TYPE, CHARACTER_SET_NAME, COLLATION_NAME FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_SCHEMA = DATABASE() AND TABLE_NAME = '<table>'",
      "EXPLAIN ANALYZE <sql>",
      "SELECT @@sql_mode, @@time_zone, @@system_time_zone"
    ],
    useCases: ["字段设计", "空间优化", "精度控制", "索引评审", "慢 SQL 排查", "字符集治理", "时间字段治理", "大表类型变更"],
    prerequisites: ["schema-design"],
    related: ["schema-design", "primary-key", "mysql-index", "sql-optimization", "explain", "online-ddl"],
  },
  "primary-key": {
    sourceRefs: [
      "mysql-create-table",
      "mysql-constraint-primary-key",
      "mysql-primary-key-optimization",
      "mysql-innodb-index-types",
      "mysql-innodb-best-practices",
      "mysql-optimizing-innodb-storage-layout",
      "mysql-innodb-auto-increment",
      "mysql-generated-invisible-primary-keys",
      "mysql-sql-require-primary-key",
      "mysql-innodb-row-format",
      "mysql-data-types",
      "mysql-planetscale-primary-keys",
      "mysql-planetscale-primary-key-data-types",
      "mysql-alibaba-java-development-manual",
      "xiaolincoding-mysql-index",
      "javaguide-mysql-index",
      "javaguide",
    ],
    concept:
      "主键是表中稳定、唯一、非空的行标识；在 InnoDB 中它同时决定聚簇索引的数据组织方式、二级索引回表指针和大量读写性能成本。",
    explanation: [
      "概念定位：主键（Primary Key）解决的是“怎样在一张表中准确找到、约束、关联和更新一行数据”的问题。它出现在建表评审、订单号和用户 ID 设计、去重幂等、JOIN、二级索引回表、分库分表、数据修复和线上慢 SQL 排查中。\n\n从 SQL 视角看，主键是一组 `NOT NULL` 且唯一的列约束；从 InnoDB 视角看，主键索引就是聚簇索引（clustered index），叶子节点保存完整行记录。一个主键值短、稳定、递增、业务泄露风险低，会让行定位、索引体积、Buffer Pool 命中、页分裂、复制和排障都更可控。",
      "准确定义：主键由一个或多个字段组成，用 `PRIMARY KEY` 声明，核心语义是非空、唯一和稳定标识。\n\n- 非空：主键列自动具备 `NOT NULL` 语义，每行都必须有可用标识。\n- 唯一：同一张表内主键值唯一，重复写入会触发约束错误。\n- 稳定：主键应在行生命周期内保持稳定，避免修改主键引发删除加插入式的存储移动和关联修复。\n- 聚簇组织：InnoDB 按主键 B+ 树组织表数据，主键叶子节点保存完整记录。\n- 回表指针：InnoDB 的二级索引叶子节点保存二级索引键和主键值，再通过主键回到聚簇索引取整行。\n\n主键和唯一索引都能表达唯一性；主键是表的首要行身份，并直接决定 InnoDB 表的物理访问入口。",
      "心智模型：把主键看成仓库里每件货物的固定货位编号。\n\n- 入库时：数据库先确认编号存在、非空、唯一，再把记录放入主键 B+ 树。\n- 查找时：用编号能直接定位货位；二级索引像“按商品名的目录”，目录项最终仍指向主键编号。\n- 扩容时：短编号让目录更薄、页里能放更多项，缓存能容纳更多有效数据。\n- 排障时：主键值是锁等待、死锁日志、Binlog、修复脚本和审计链路里的核心证据。\n\n这个模型解释了自增整数主键常见的工程优势：值短、写入位置集中、比较快、回表指针小。它也解释了随机 UUID 的典型代价：键长、写入分散、页分裂和二级索引膨胀。",
      "主流程机制：一条带主键的写入会穿过约束检查、聚簇索引插入和二级索引维护。\n\n1. 应用提交 `INSERT`，显式给出主键，或让 `AUTO_INCREMENT` 生成主键。\n2. MySQL 检查主键列是否满足类型、非空、唯一和约束语义。\n3. InnoDB 根据主键值在聚簇索引 B+ 树中定位叶子页，写入完整行记录。\n4. 每个二级索引写入对应条目，条目里包含二级索引列和该行主键值。\n5. 查询命中主键条件时直接走聚簇索引；查询命中二级索引且需要更多列时，先取主键值再回到聚簇索引。\n6. 更新主键值会改变聚簇索引位置，并牵动相关二级索引记录；生产设计中优先保持主键不可变。\n\n主键设计的输出是一套贯穿写入、查询、索引、关联、恢复和治理的行身份契约。",
      "实践例子：下面是一张订单表的常见主键设计，内部主键服务于 InnoDB 和关联查询，业务订单号用唯一索引表达外部唯一性。\n\n```sql\nCREATE TABLE orders (\n  id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '内部主键，短且递增',\n  order_no VARCHAR(64) NOT NULL COMMENT '业务订单号，面向外部系统',\n  user_id BIGINT UNSIGNED NOT NULL,\n  amount DECIMAL(12,2) NOT NULL,\n  status TINYINT UNSIGNED NOT NULL DEFAULT 0,\n  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,\n  updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,\n  PRIMARY KEY (id),\n  UNIQUE KEY uk_order_no (order_no),\n  KEY idx_user_created (user_id, created_at)\n) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;\n```\n\n这份 DDL 把两类身份分开：`id` 是内部行定位和索引组织的主键，`order_no` 是业务唯一键，适合展示、对接和幂等校验。订单表、用户表、流水表通常采用这种模式；多租户或分库分表系统会再结合租户 ID、雪花 ID、路由键和公开 ID 策略做扩展。",
      "深层细节：主键影响 InnoDB 的物理布局、缓存效率、写入放大和公开接口设计。\n\n- 主键长度：二级索引叶子会携带主键值，`BIGINT`、`CHAR(36)` UUID、复合主键在索引体积上的差异会被所有二级索引放大。\n- 写入局部性：自增或大体有序的主键更容易追加到右侧叶子页；随机主键会在 B+ 树多个位置插入，增加页分裂、随机 I/O 和缓存 churn。\n- 聚簇索引选择：InnoDB 表有显式主键时使用主键作为聚簇索引；表缺少显式主键时会选择合适的唯一非空索引，或使用隐藏行 ID。显式主键让数据身份和排障证据更清楚。\n- `AUTO_INCREMENT`：自增主键由 InnoDB 管理，`innodb_autoinc_lock_mode` 会影响并发插入、语句复制安全和批量插入分配方式。\n- 公开 ID：内部自增 ID 适合数据库组织；公开给外部用户时要评估枚举风险、业务泄露、灰度迁移和审计可追踪性。\n- 复合主键：适合强关系表、明细表和天然联合唯一场景；字段顺序会影响索引访问、外键引用、二级索引体积和未来变更。\n- 分布式 ID：雪花 ID、UUIDv7、ULID 等方案会在唯一性、时间有序性、跨节点生成、时钟回拨、可读性和索引局部性之间取舍。\n\n老手评审主键时会同时问：这个主键是否短、稳定、有序、可追踪、可迁移，并且能否支撑未来的索引和分片策略。",
      "工程场景：不同主键方案适合不同系统压力和组织边界。\n\n- 单库 OLTP：`BIGINT UNSIGNED AUTO_INCREMENT` 常用于订单、用户、库存、支付流水等核心表，读写路径简单，二级索引成本低。\n- 业务幂等：内部主键搭配业务唯一键，例如 `uk_order_no`、`uk_request_id`、`uk_user_tenant`，既保留 InnoDB 友好主键，又能阻止业务重复。\n- 多租户表：主键可以保留内部 ID，查询索引用 `(tenant_id, id)` 或 `(tenant_id, created_at)`；强隔离场景会评估复合主键和租户路由。\n- 分库分表：主键和分片键要配合路由、全局唯一、范围查询、热点分布和迁移；雪花 ID 常用于跨节点生成有序唯一 ID。\n- 明细与关联表：`(order_id, sku_id)`、`(user_id, role_id)` 这类复合主键能表达天然关系，同时要评估字段宽度和查询顺序。\n- 对外接口：公开 ID 可以用业务单号、短码、UUID、雪花 ID 或单独的 `public_id`，内部主键继续服务数据库组织。",
      "边界与故障模式：主键问题通常表现为重复写入、写入热点、索引膨胀、页分裂、排障困难和数据修复困难。\n\n- 重复主键：并发重放、幂等键设计缺失、导入脚本使用旧 ID、自增序列回退，会触发 `Duplicate entry`。\n- 主键耗尽：`INT` 自增在高增长表里会触顶，容量评审要结合增长速率、保留周期和未来分片。\n- 随机主键写入抖动：UUIDv4、随机字符串主键会放大页分裂和缓存压力，写入延迟和数据文件增长可能变得明显。\n- 长主键索引膨胀：每个二级索引携带主键值，长字符主键会让索引页变少、层级变深、回表成本上升。\n- 业务主键可变：手机号、邮箱、用户名、外部订单号等业务字段可能发生修正或兼容变化，作为主键会牵动关联表和历史数据。\n- 主键缺失：表身份依赖隐藏行 ID，备份恢复、复制、删除定位、在线变更和排障证据会变弱；部分托管数据库和运维规范会要求每张表有主键。\n- 对外暴露自增：公开连续 ID 会让对象枚举、业务规模推断和越权测试更容易，需要访问控制、公开 ID 或签名策略配合。",
      "排查实践：主键相关线上问题要先把结构、索引、数据分布和运行证据串起来。\n\n1. 看结构：确认主键列、类型、是否自增、复合顺序、唯一键和二级索引数量。\n2. 看容量：确认自增当前值、类型上限、增长速度、历史归档和分库计划。\n3. 看重复：定位 `Duplicate entry` 的 SQL、参数、请求 ID、幂等键和重试链路。\n4. 看索引体积：对比主键长度、二级索引数量、表大小、Buffer Pool 命中和慢查询回表次数。\n5. 看写入形态：确认主键是否递增、是否批量导入、是否随机插入、是否集中打到单页或单分片。\n6. 看锁和回滚：结合 `SHOW ENGINE INNODB STATUS`、Performance Schema、慢日志、Binlog 和变更脚本确认影响范围。\n\n```sql\nSHOW CREATE TABLE orders\\G\nSHOW INDEX FROM orders;\n\nSELECT AUTO_INCREMENT\nFROM INFORMATION_SCHEMA.TABLES\nWHERE TABLE_SCHEMA = DATABASE() AND TABLE_NAME = 'orders';\n\nSELECT COLUMN_NAME, COLUMN_TYPE, EXTRA, COLUMN_KEY\nFROM INFORMATION_SCHEMA.COLUMNS\nWHERE TABLE_SCHEMA = DATABASE() AND TABLE_NAME = 'orders'\nORDER BY ORDINAL_POSITION;\n\nSELECT id, COUNT(*)\nFROM orders\nGROUP BY id\nHAVING COUNT(*) > 1;\n\nEXPLAIN ANALYZE\nSELECT * FROM orders WHERE id = 123456789;\n\nEXPLAIN ANALYZE\nSELECT id, order_no, amount\nFROM orders\nWHERE order_no = '202606060001';\n```\n\n排查结论要落到事实：主键定义、真实数据增长、SQL 访问路径、索引体积、重复写入来源和修复脚本的影响范围。",
      "常见误区：主键是数据库内部组织和业务身份治理的交叉点。\n\n- 主键优先表达稳定行身份，业务唯一性可以通过唯一索引表达。\n- 短主键能降低二级索引、回表、缓存和备份恢复成本。\n- 自增主键适合大量单库 OLTP 表，公开接口可以使用单独的业务 ID 或公开 ID。\n- UUID 和雪花 ID 适合跨节点生成场景，选型重点是有序性、长度、时钟、冲突概率和索引局部性。\n- 复合主键适合天然联合身份，字段顺序要贴合查询前缀和关联路径。\n- 主键变更属于高风险数据迁移，方案要包含应用兼容、回填、校验、双写、外键/引用修复和回滚。",
      "面试追问：主键类问题适合按“定义、InnoDB 组织、索引成本、方案取舍、排障证据”回答。\n\n- 主键、唯一索引、外键分别解决什么问题？\n- InnoDB 为什么说表数据按主键组织，聚簇索引和主键是什么关系？\n- 二级索引叶子节点为什么保存主键值，这对主键长度有什么影响？\n- 自增主键、UUID、雪花 ID、业务单号作为主键分别有什么工程取舍？\n- 为什么主键字段要尽量短、稳定、递增？\n- 复合主键适合哪些场景，字段顺序如何影响查询？\n- 显式主键缺失的 InnoDB 表会怎样，线上运维为什么经常要求每张表有主键？\n- 主键冲突、主键耗尽、随机主键写入抖动分别怎么排查？\n- 分库分表系统如何设计主键和分片键？\n- 大表想更换主键或从业务主键切到代理主键，迁移方案如何设计？",
      "参考来源：本讲解主要参考 MySQL 8.4 Reference Manual 的 `CREATE TABLE`、`PRIMARY KEY`/`UNIQUE` 约束、Primary Key Optimization、InnoDB Clustered and Secondary Indexes、InnoDB Best Practices、InnoDB Storage Layout、`AUTO_INCREMENT` Handling、Generated Invisible Primary Keys 和 `sql_require_primary_key` 文档，并结合 PlanetScale 的 Primary keys、Primary key data types、小林 coding 的 MySQL 索引文章、JavaGuide 的 MySQL 索引讲解和阿里巴巴 Java 开发手册进行工程表达校准。官方资料用于定义、约束、聚簇索引和自增机制，工程资料用于补充主键选型、二级索引成本、排查路径和面试表达。"
    ],
    typicalProblems: [
      "主键在 SQL 约束层和 InnoDB 存储层分别承担什么职责？",
      "为什么 InnoDB 的主键会决定聚簇索引，二级索引为什么保存主键值？",
      "主键字段为什么强调短、稳定、递增、非空、唯一？",
      "自增主键、UUID、雪花 ID、业务单号作为主键分别适合哪些场景？",
      "主键长度如何影响二级索引体积、Buffer Pool 命中和回表成本？",
      "复合主键如何设计字段顺序，和联合索引最左前缀有什么关系？",
      "显式主键缺失的 InnoDB 表会发生什么，`sql_require_primary_key` 和隐藏主键有什么意义？",
      "线上遇到主键冲突、主键耗尽、随机主键写入抖动时如何排查？",
      "分库分表、幂等写入、多租户和对外公开 ID 场景下如何设计主键？",
      "大表更换主键时，应用兼容、在线 DDL、回填校验和回滚如何安排？"
    ],
    commonCommands: [
      "SHOW CREATE TABLE <table>\\G",
      "SHOW INDEX FROM <table>",
      "SELECT AUTO_INCREMENT FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_SCHEMA = DATABASE() AND TABLE_NAME = '<table>'",
      "SELECT COLUMN_NAME, COLUMN_TYPE, EXTRA, COLUMN_KEY FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_SCHEMA = DATABASE() AND TABLE_NAME = '<table>'",
      "EXPLAIN ANALYZE SELECT * FROM <table> WHERE id = ?",
      "SHOW ENGINE INNODB STATUS\\G"
    ],
    useCases: ["业务实体标识", "关联查询", "数据去重", "幂等写入", "聚簇索引设计", "分库分表 ID 设计", "慢 SQL 排查", "数据修复"],
    prerequisites: ["schema-design"],
    related: ["schema-design", "data-type", "clustered-index", "auto-increment", "unique-index", "secondary-index", "sharding", "snowflake-id"],
  },
  "select": {
    sourceRefs: [
      "mysql-select-statement",
      "mysql-select-optimization",
      "mysql-where-optimization",
      "mysql-range-optimization",
      "mysql-how-mysql-uses-indexes",
      "mysql-order-by-optimization",
      "mysql-group-by-optimization",
      "mysql-limit-optimization",
      "mysql-explain-statement",
      "mysql-explain-output",
      "mysql-innodb-consistent-read",
      "mysql-innodb-locking-reads",
      "mysql-slow-query-log",
      "mysql-performance-schema-statement-tables",
      "xiaolincoding-mysql-select",
      "use-the-index-luke-mysql-explain",
      "javaguide-mysql-explain",
      "sqlbolt-sql-tutorial",
    ],
    concept:
      "SELECT 是 MySQL 读取数据的核心语句，用声明式语义描述数据来源、过滤、关联、聚合、排序和分页，并由优化器把语义转化为具体执行计划。",
    explanation: [
      "概念定位：SELECT 查询（SELECT Query）解决的是“应用如何从关系表中取出需要的数据”的问题。它出现在详情页、列表页、后台筛选、报表统计、权限判断、风控校验、缓存回源、读写分离和慢查询治理中，是 MySQL 最常见、最需要工程判断的 SQL 入口。\n\n从语义层看，SELECT 描述要读哪些列、从哪些表读、如何过滤、关联、分组、排序和限制返回量。从执行层看，MySQL 会解析语句、校验权限、选择索引和 JOIN 顺序、调用 InnoDB 读取页、处理排序聚合和返回结果。新手先掌握语法主线；有经验的工程师还要看执行计划、扫描行数、锁范围、快照可见性、临时表、filesort、网络返回和观测证据。",
      "准确定义：SELECT 是 SQL 的查询语句，核心输出是结果集（result set）。一条完整查询通常由这些部分组成。\n\n- `SELECT`：投影列、表达式、聚合函数和别名。\n- `FROM` / `JOIN`：数据来源、表关系和连接条件。\n- `WHERE`：行级过滤条件，直接影响索引访问路径和扫描范围。\n- `GROUP BY` / `HAVING`：分组、聚合和聚合后过滤。\n- `ORDER BY`：结果排序，可能使用索引顺序或 filesort。\n- `LIMIT` / `OFFSET`：限制返回行数，深分页会放大扫描和丢弃成本。\n- `FOR SHARE` / `FOR UPDATE`：锁定读语义，用于并发更新前的行保护。\n\nSELECT 的质量来自三件事：语义正确、访问路径可控、运行证据可解释。",
      "心智模型：把 SELECT 看成一次数据库取货流程。\n\n- 清单：`SELECT id, amount` 指定只取哪些货物字段。\n- 仓库入口：`FROM orders` 指定去哪个仓库。\n- 货架索引：`WHERE user_id = ?` 决定能否走到合适的索引通道。\n- 多仓协作：`JOIN` 决定先从哪张表取、用什么键关联下一张表。\n- 打包加工：`GROUP BY`、聚合函数和 `ORDER BY` 会把原始行加工成统计或有序结果。\n- 出库数量：`LIMIT` 控制最终返回量，`OFFSET` 大时会先跳过大量候选行。\n\n这个模型能解释常见现象：同样返回 20 行，走精确索引和扫描十万行后的前 20 行，资源成本差异很大。",
      "主流程机制：一条 SELECT 从客户端到结果集大致经历这些阶段。\n\n1. 客户端发送 SQL 和参数，MySQL 完成连接状态、字符集、权限和语法语义检查。\n2. 解析器把 SQL 转为内部结构，预处理阶段解析表、列、函数、别名和权限。\n3. 优化器基于统计信息、索引、条件选择性和代价模型选择访问路径，可能改写子查询、下推条件、调整 JOIN 顺序和选择索引。\n4. 执行器按计划迭代取行，调用 InnoDB 读取聚簇索引、二级索引或范围扫描，必要时执行回表、排序、聚合、去重和临时表操作。\n5. InnoDB 根据隔离级别提供快照读或锁定读；普通一致性读通常走 MVCC 快照，`FOR UPDATE` / `FOR SHARE` 进入锁定读路径。\n6. MySQL 把结果集分批返回客户端，并在慢查询日志、Performance Schema、状态变量和监控中留下耗时、扫描行数、等待事件和临时表等证据。\n\n理解 SELECT 要把“SQL 写法、优化器计划、存储引擎读法、观测结果”串成一条链。",
      "实践例子：下面用订单列表查询展示 SELECT、索引、执行计划和分页写法。\n\n```sql\nCREATE TABLE orders (\n  id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,\n  user_id BIGINT UNSIGNED NOT NULL,\n  status VARCHAR(32) NOT NULL,\n  amount DECIMAL(12,2) NOT NULL,\n  created_at DATETIME NOT NULL,\n  PRIMARY KEY (id),\n  KEY idx_user_status_created_id (user_id, status, created_at, id)\n) ENGINE=InnoDB;\n\nEXPLAIN ANALYZE\nSELECT id, amount, created_at\nFROM orders\nWHERE user_id = 1001 AND status = 'PAID'\nORDER BY created_at DESC, id DESC\nLIMIT 20;\n\nEXPLAIN ANALYZE\nSELECT id, amount, created_at\nFROM orders\nWHERE user_id = 1001\n  AND status = 'PAID'\n  AND (created_at, id) < ('2026-06-05 10:00:00', 987654321)\nORDER BY created_at DESC, id DESC\nLIMIT 20;\n```\n\n第一条适合首页列表，第二条是基于游标的 seek 分页。联合索引把等值过滤、排序键和稳定游标放在同一条有序访问路径上，能够减少深分页扫描、filesort 和回表压力。",
      "深层细节：SELECT 的成本主要由访问路径、返回列、排序聚合和一致性语义共同决定。\n\n- 列裁剪：只选择必要列可以减少回表、临时表宽度、网络传输和客户端反序列化成本。\n- 索引选择：`WHERE` 条件的等值、范围、前缀、函数、隐式转换和 collation 会影响优化器选择 `ref`、`range`、`index` 或全表扫描。\n- 覆盖索引：返回列都在二级索引中时，执行器可以直接从索引叶子拿到结果，回表成本显著下降。\n- JOIN：多表 SELECT 的驱动表、连接顺序、连接列类型和索引覆盖度决定中间行数，参数分布偏斜会改变最优计划。\n- 排序与聚合：`ORDER BY`、`GROUP BY`、`DISTINCT` 和窗口类计算可能产生临时表或 filesort；索引顺序、内存限制和返回列宽度决定代价。\n- 分页：`LIMIT 20 OFFSET 100000` 需要先读出并丢弃前面候选行；seek 分页用上次边界键继续范围扫描，更适合大数据量列表。\n- 一致性：InnoDB 普通读使用一致性快照；锁定读会获取锁并影响并发更新路径，事务范围越大，锁和快照影响越长。\n\n老手优化 SELECT 时会先估算候选行数、访问路径和结果宽度，再用 `EXPLAIN ANALYZE` 验证真实行数和耗时。",
      "工程场景：不同 SELECT 场景有不同的关键约束。\n\n- 详情查询：主键或唯一键定位，返回列明确，接口延迟目标稳定。\n- 用户列表：过滤、排序、分页字段共同决定联合索引，游标分页优先服务大数据量。\n- 报表聚合：扫描范围、分组基数、临时表、只读副本、预聚合和时间窗口是重点。\n- 权限判断：唯一键、覆盖索引和短事务能降低每次请求的读放大。\n- 缓存回源：热点 key 查询要控制返回列、超时时间、连接池等待和降级路径。\n- 读写分离：读请求打到副本时要评估复制延迟、读己之写需求和故障切换期间的路由策略。\n- 并发更新前查询：`SELECT ... FOR UPDATE` 适合状态机、库存扣减和任务领取，需要明确索引条件和事务边界。",
      "边界与故障模式：SELECT 线上问题通常集中在慢查询、结果偏差、锁等待和资源抖动。\n\n- 慢查询：全表扫描、索引选择偏差、低选择性条件、回表过多、深分页、大排序、大聚合、返回列过宽。\n- 结果偏差：`NULL` 三值逻辑、时区转换、字符集排序、隐式类型转换、聚合口径、事务隔离快照和副本延迟。\n- 锁等待：锁定读、范围条件、长事务、更新前查询和热点行会让等待链条变长。\n- 资源抖动：大查询污染 Buffer Pool、临时表落盘、filesort 内存不足、网络返回过大、连接池排队。\n- 计划漂移：数据分布变化、统计信息陈旧、参数热点和版本升级会让优化器选择变化。\n- 复制影响：报表 SELECT 打满只读副本 CPU/I/O，副本延迟会影响读一致性和故障切换判断。\n\n处理边界问题时，把 SQL 文本、绑定参数、表结构、索引、数据分布、隔离级别、执行计划和运行指标放到同一份证据包。",
      "排查实践：SELECT 慢查询建议按固定顺序建立证据链。\n\n1. 固化现场：记录 SQL、绑定参数、调用接口、事务范围、返回行数、执行时间、库实例和读写路由。\n2. 看结构：执行 `SHOW CREATE TABLE`、`SHOW INDEX`，确认字段类型、字符集、主键、联合索引顺序和返回列宽度。\n3. 看计划：用 `EXPLAIN FORMAT=TREE` 看估算计划，用 `EXPLAIN ANALYZE` 看真实耗时、循环次数和实际行数。\n4. 看数据分布：统计过滤字段基数、热点值、时间范围、分页深度和返回列大小。\n5. 看运行证据：检查慢查询日志、Performance Schema 语句摘要、临时表、排序、锁等待、CPU、I/O、Buffer Pool 和复制延迟。\n6. 小步修复：列裁剪、补联合索引、改写条件、改游标分页、拆报表、限制单次扫描、调整读路由，并用同一组指标验证收益。\n\n```sql\nSHOW CREATE TABLE orders\\G\nSHOW INDEX FROM orders;\n\nEXPLAIN FORMAT=TREE\nSELECT id, amount\nFROM orders\nWHERE user_id = 1001 AND status = 'PAID'\nORDER BY created_at DESC\nLIMIT 20;\n\nEXPLAIN ANALYZE\nSELECT id, amount\nFROM orders\nWHERE user_id = 1001 AND status = 'PAID'\nORDER BY created_at DESC\nLIMIT 20;\n\nSELECT DIGEST_TEXT, COUNT_STAR, SUM_ROWS_EXAMINED, SUM_ROWS_SENT, SUM_TIMER_WAIT\nFROM performance_schema.events_statements_summary_by_digest\nORDER BY SUM_TIMER_WAIT DESC\nLIMIT 10;\n```\n\n有效排查的标志是：修改前后计划、扫描行数、返回行数、耗时和资源指标都能对齐。",
      "常见误区：SELECT 是声明式查询，最终成本由优化器计划、索引结构、数据分布、隔离级别和返回结果共同决定。\n\n- `SELECT *` 会扩大结果宽度，明确列清单更利于覆盖索引、网络传输和接口契约。\n- 索引命中只是起点，`rows`、`filtered`、回表、临时表、filesort、实际耗时和等待事件同样关键。\n- 逻辑执行顺序帮助理解语义，物理执行顺序来自优化器选择。\n- 深分页的成本来自跳过候选行，seek 分页用有序边界降低扫描量。\n- 普通 SELECT 的快照可见性和锁定读的并发影响属于事务设计的一部分。\n- 查询优化的目标是降低总体成本，索引数量、写入维护、缓存命中、复制延迟和发布风险要一起评估。",
      "面试追问：SELECT 类问题适合按“语义、执行流程、优化器、InnoDB、排查证据、工程取舍”回答。\n\n- 一条 SELECT 的语法组成和逻辑处理顺序是什么？\n- MySQL 执行 SELECT 时，解析器、优化器、执行器和 InnoDB 分别做什么？\n- `WHERE` 条件如何影响索引选择，隐式转换和函数调用会带来什么成本？\n- `JOIN`、`GROUP BY`、`ORDER BY`、`DISTINCT`、`LIMIT` 各自容易产生哪些额外代价？\n- 覆盖索引和回表如何影响 SELECT 性能？\n- 普通快照读、`FOR UPDATE`、`FOR SHARE` 在并发语义上如何区分？\n- 深分页为什么慢，seek 分页如何设计游标和排序键？\n- 如何用 `EXPLAIN`、`EXPLAIN ANALYZE`、慢查询日志和 Performance Schema 定位慢 SELECT？\n- 读写分离场景下 SELECT 如何处理复制延迟和读己之写？\n- 面试中如何把 SELECT、索引、事务隔离、锁和线上排障串成完整答案？",
      "参考来源：本讲解主要参考 MySQL 8.4 Reference Manual 的 SELECT、Optimizing SELECT Statements、WHERE、Range、How MySQL Uses Indexes、ORDER BY、GROUP BY、LIMIT、EXPLAIN、EXPLAIN Output、InnoDB Consistent Reads、Locking Reads、Slow Query Log 和 Performance Schema Statement Tables 文档，并结合小林 coding 的 SELECT 执行流程、Use The Index, Luke 的执行计划阅读、JavaGuide 的 EXPLAIN 讲解和 SQLBolt 的入门语法进行表达校准。官方资料用于定义、语法、优化器、锁定读和观测表语义，工程文章用于补足流程理解、执行计划阅读和中文面试表达。"
    ],
    typicalProblems: [
      "SELECT 查询解决什么问题，常见语法组成有哪些？",
      "一条 SELECT 从客户端到结果集会经历哪些 MySQL 执行阶段？",
      "逻辑执行顺序和优化器生成的物理执行计划如何区分？",
      "`WHERE` 条件、索引选择、回表和覆盖索引如何影响 SELECT 性能？",
      "`JOIN`、`GROUP BY`、`ORDER BY`、`DISTINCT` 和 `LIMIT` 分别有哪些典型成本？",
      "普通快照读、`FOR UPDATE`、`FOR SHARE` 在 InnoDB 中分别适合哪些并发场景？",
      "深分页慢在哪里，基于游标的 seek 分页如何设计？",
      "如何用 `EXPLAIN`、`EXPLAIN ANALYZE`、慢查询日志和 Performance Schema 建立慢 SELECT 证据链？",
      "读写分离和副本延迟会如何影响 SELECT 的一致性判断？",
      "面试中如何把 SELECT、索引、事务隔离、锁和线上排障一起讲清楚？"
    ],
    commonCommands: [
      "EXPLAIN FORMAT=TREE <select_sql>",
      "EXPLAIN ANALYZE <select_sql>",
      "SHOW CREATE TABLE <table>\\G",
      "SHOW INDEX FROM <table>",
      "SELECT DIGEST_TEXT, COUNT_STAR, SUM_ROWS_EXAMINED, SUM_ROWS_SENT, SUM_TIMER_WAIT FROM performance_schema.events_statements_summary_by_digest ORDER BY SUM_TIMER_WAIT DESC LIMIT 10",
      "SELECT * FROM <table> WHERE <indexed_condition> ORDER BY <cursor_key> LIMIT 20",
      "SELECT * FROM <table> WHERE id = ? FOR UPDATE"
    ],
    useCases: ["详情查询", "列表分页", "报表聚合", "权限判断", "缓存回源", "读写分离", "并发更新前锁定读", "慢查询治理"],
    prerequisites: ["sql"],
    related: ["where", "join", "group-by", "order-by", "limit-offset", "explain", "sql-optimization"],
  },
  "where": {
    sourceRefs: [
      "mysql-select-statement",
      "mysql-select-optimization",
      "mysql-where-optimization",
      "mysql-range-optimization",
      "mysql-how-mysql-uses-indexes",
      "mysql-index-condition-pushdown",
      "mysql-comparison-operators",
      "mysql-logical-operators",
      "mysql-working-with-null",
      "mysql-type-conversion",
      "mysql-explain-statement",
      "mysql-explain-output",
      "mysql-slow-query-log",
      "mysql-performance-schema-statement-tables",
      "xiaolincoding-mysql-index",
      "javaguide-mysql-index",
      "use-the-index-luke-where-clause",
      "planetscale-index-obfuscation",
    ],
    concept:
      "WHERE 是 MySQL 查询、更新和删除中的行级过滤条件，用谓词表达业务筛选规则，并直接影响索引访问路径、扫描范围、锁范围和执行计划质量。",
    explanation: [
      "概念定位：WHERE 条件（WHERE Clause）解决的是“从候选行里筛出满足业务规则的数据”的问题。它出现在列表筛选、详情校验、权限判断、库存扣减、状态机更新、数据修复、报表抽取、缓存回源和慢 SQL 排查中，是 SELECT、UPDATE、DELETE 的核心入口。\n\n从语义层看，WHERE 由比较、逻辑、范围、模糊匹配、空值判断和子查询谓词组成，输出是每行的 `TRUE`、`FALSE` 或 `UNKNOWN` 判断。从执行层看，优化器会尝试把谓词转成索引等值查找、范围扫描、索引合并、条件下推或执行器过滤；同一条业务规则写法不同，扫描行数、回表次数、锁范围和延迟会有明显差异。",
      "准确定义：WHERE 是 SQL 语句中的行过滤子句，位于 `FROM` / `JOIN` 之后、`GROUP BY` 之前参与逻辑语义理解。它常见的谓词类型包括：\n\n- 比较谓词：`=`, `<=>`, `<>`, `<`, `<=`, `>`, `>=`。\n- 范围谓词：`BETWEEN`, `IN`, `LIKE 'prefix%'`, 时间区间和数值区间。\n- 空值谓词：`IS NULL`, `IS NOT NULL`，以及空值安全比较 `<=>`。\n- 逻辑组合：`AND`, `OR`, `NOT` 组合多个条件。\n- 子查询谓词：`EXISTS`, `IN (subquery)`, 标量子查询和半连接改写。\n\nWHERE 的工程质量来自三件事：语义精确、谓词可定位、执行证据可验证。",
      "心智模型：把 WHERE 看成仓库入口的筛选闸门。\n\n- 业务规则是筛选卡片，例如“用户 1001、已支付、最近 30 天”。\n- 索引是预先排好序的通道，等值条件能把入口缩小到具体分区。\n- 范围条件像一段货架区间，扫描量取决于边界宽度和数据分布。\n- 表达式、隐式转换和前置通配符会让闸门先接收更多候选行，再逐行判断。\n- `NULL` 像未填写标签，比较结果进入三值逻辑，需要用专门谓词处理。\n\n这个模型能解释一个现象：返回同样 20 行，精确索引范围扫描和全表候选过滤，在 CPU、I/O、锁等待和 Buffer Pool 影响上是两类成本。",
      "主流程机制：一条带 WHERE 的查询通常按下面路径运行。\n\n1. 解析器识别 WHERE 表达式，预处理阶段解析列、函数、类型、字符集、权限和别名。\n2. 优化器做常量折叠、条件化简、等值传播、谓词下推和子查询改写。\n3. 优化器基于索引、统计信息、选择性和代价模型，选择 `const`、`eq_ref`、`ref`、`range`、`index_merge`、`index` 或全表扫描等访问路径。\n4. 存储引擎按访问路径读取索引页和数据页；满足索引条件的记录进入执行器，必要时回表读取整行。\n5. Index Condition Pushdown（ICP）可在存储引擎层用索引列继续过滤，减少回表候选记录。\n6. 执行器完成剩余 WHERE 判断，再把结果交给投影、分组、排序、分页或写入路径。\n7. `EXPLAIN`、慢查询日志和 Performance Schema 记录计划、扫描行数、返回行数、耗时和等待事件。\n\n优化 WHERE 的核心是把业务筛选尽量变成索引能定位的有序范围，再用运行证据验证候选行数量。",
      "实践例子：下面用订单列表展示可定位 WHERE、范围边界和执行计划证据。\n\n```sql\nCREATE TABLE orders (\n  id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,\n  user_id BIGINT UNSIGNED NOT NULL,\n  status VARCHAR(32) NOT NULL,\n  amount DECIMAL(12,2) NOT NULL,\n  created_at DATETIME NOT NULL,\n  PRIMARY KEY (id),\n  KEY idx_user_status_created_id (user_id, status, created_at, id),\n  KEY idx_status_created (status, created_at)\n) ENGINE=InnoDB;\n\nEXPLAIN ANALYZE\nSELECT id, amount, created_at\nFROM orders\nWHERE user_id = 1001\n  AND status = 'PAID'\n  AND created_at >= '2026-06-01 00:00:00'\n  AND created_at <  '2026-07-01 00:00:00'\nORDER BY created_at DESC, id DESC\nLIMIT 20;\n\nEXPLAIN FORMAT=TREE\nSELECT id\nFROM orders\nWHERE status IN ('PAID', 'SHIPPED')\n  AND amount >= 100\n  AND created_at >= '2026-06-01 00:00:00';\n```\n\n`idx_user_status_created_id` 把等值条件放在前面，把时间范围和稳定排序键接在后面，适合用户订单列表。第二条查询需要结合 `rows`、`filtered`、实际耗时和返回行数判断选择性；状态字段低基数时，时间范围、返回列和排序成本会决定整体收益。",
      "深层细节：WHERE 的性能取决于谓词形态、数据分布和索引结构共同作用。\n\n- 可定位谓词：`column = constant`、左前缀 `LIKE 'abc%'`、清晰的时间半开区间、联合索引前缀，通常更容易形成 `ref` 或 `range` 访问。\n- 表达式位置：让索引列保持原值参与比较，例如用半开区间表达某天数据，能够让优化器直接使用有序键。\n- 隐式转换：字符串列和数字参数、不同字符集或 collation 的比较会改变比较规则和索引选择，应用绑定参数类型要和字段类型一致。\n- `NULL` 语义：普通比较遇到 `NULL` 会产生 `UNKNOWN`；业务筛选要明确使用 `IS NULL`、`IS NOT NULL` 或 `<=>`。\n- 联合索引：等值列、范围列、排序列和返回列的顺序要贴合访问模式；范围条件负责定位区间，后续索引列仍可能通过 ICP 参与过滤。\n- `OR` 条件：同列 `OR` 可改写为 `IN`；跨列 `OR` 可能触发 `index_merge` 或更大扫描，热点接口常用拆分查询或 UNION 让路径更清晰。\n- 子查询：`EXISTS`、`IN` 和半连接改写会影响驱动表和候选行数，外层 WHERE 与子查询索引要一起评估。\n\n老手评审 WHERE 时会先估算选择性，再看访问类型、候选行数、回表比例和锁范围。",
      "工程场景：不同 WHERE 场景关注点不同。\n\n- 列表筛选：`tenant_id`、`user_id`、`status`、`created_at` 和排序键决定联合索引设计。\n- 状态机更新：`WHERE id = ? AND status = ?` 表达乐观状态约束，配合受影响行数判断并发竞争。\n- 数据修复：批量 `UPDATE` / `DELETE` 要用主键或时间范围分批，控制单事务锁范围和复制压力。\n- 权限判断：租户、用户、资源和状态条件适合覆盖索引，降低每次请求读放大。\n- 报表抽取：时间范围、分区、只读副本、采样窗口和返回列宽度决定资源影响。\n- 缓存回源：WHERE 要服务高频 key 精确定位，同时设置超时、限流和降级策略。\n- 多租户系统：所有业务查询优先带上租户条件，避免跨租户扫描和权限边界风险。",
      "边界与故障模式：WHERE 问题常表现为扫描量放大、结果偏差、锁范围扩大和计划漂移。\n\n- 扫描量放大：低选择性条件、函数包裹列、前置通配符、宽时间范围、跨列 `OR` 和隐式转换会增加候选行。\n- 结果偏差：`NULL` 三值逻辑、`NOT IN` 遇到空值、时区边界、字符集排序和金额精度会改变业务结果。\n- 锁范围扩大：`UPDATE`、`DELETE`、`SELECT ... FOR UPDATE` 的 WHERE 路径决定锁定记录和范围，索引路径宽会放大等待链条。\n- 计划漂移：数据分布变化、统计信息陈旧、热点参数、版本升级和新索引上线会改变优化器选择。\n- 资源抖动：大范围 WHERE 会拉高 Buffer Pool 读取、临时表、CPU、I/O、网络返回和副本延迟。\n- 安全风险：动态拼接 WHERE 容易引入注入风险，参数化查询和白名单字段能固定查询结构。\n\n处理这些问题时，把 SQL 文本、绑定参数类型、表结构、索引、数据分布、执行计划、锁等待和运行指标放到同一份证据包。",
      "排查实践：WHERE 慢查询或结果异常建议按固定顺序定位。\n\n1. 固化现场：记录 SQL、绑定参数值和类型、调用入口、返回行数、执行时间、事务范围和库实例。\n2. 看结构：执行 `SHOW CREATE TABLE`、`SHOW INDEX`，确认字段类型、字符集、联合索引顺序和是否覆盖返回列。\n3. 看计划：用 `EXPLAIN FORMAT=TREE` 观察访问类型、条件下推和排序路径，用 `EXPLAIN ANALYZE` 对比估算行数与实际行数。\n4. 看数据分布：统计过滤列基数、热点值、空值比例、时间范围、状态分布和租户规模。\n5. 看运行证据：检查慢查询日志、Performance Schema 语句摘要、锁等待、CPU、I/O、Buffer Pool 和复制延迟。\n6. 小步修复：改写谓词、对齐参数类型、补联合索引、拆分 `OR`、缩小时间窗口、分批执行，并用相同 SQL 样本验证收益。\n\n```sql\nSHOW CREATE TABLE orders\\G\nSHOW INDEX FROM orders;\n\nEXPLAIN ANALYZE\nSELECT id, amount\nFROM orders\nWHERE user_id = 1001\n  AND status = 'PAID'\n  AND created_at >= '2026-06-01 00:00:00'\n  AND created_at <  '2026-07-01 00:00:00';\n\nSELECT status, COUNT(*) AS cnt\nFROM orders\nGROUP BY status;\n\nSELECT COUNT(*) AS rows_in_range\nFROM orders\nWHERE created_at >= '2026-06-01 00:00:00'\n  AND created_at <  '2026-07-01 00:00:00';\n\nSELECT DIGEST_TEXT, COUNT_STAR, SUM_ROWS_EXAMINED, SUM_ROWS_SENT, SUM_TIMER_WAIT\nFROM performance_schema.events_statements_summary_by_digest\nWHERE DIGEST_TEXT LIKE 'SELECT%ORDERS%WHERE%'\nORDER BY SUM_TIMER_WAIT DESC\nLIMIT 10;\n```\n\n有效修复会同时体现为候选行数下降、访问类型改善、实际耗时下降、锁等待收敛和业务结果稳定。",
      "常见误区：WHERE 是业务语义和物理访问路径的交汇点。\n\n- 索引命中只是第一层证据，`rows`、`filtered`、回表次数、ICP、等待事件和实际耗时同样关键。\n- `AND` 条件数量多会提升表达精度，真正的性能收益来自高选择性条件和合适索引顺序。\n- 函数、表达式和隐式转换会改变可定位性，把计算放到常量侧或预计算列上更利于稳定计划。\n- `NULL` 需要专门谓词表达，`IS NULL`、`IS NOT NULL` 和 `<=>` 能让语义清楚。\n- 低基数字段适合与租户、用户、时间或排序键组成联合索引，单列索引价值取决于数据分布和查询组合。\n- WHERE 优化要同时评估读成本、写入维护、锁范围、发布风险和回滚路径。",
      "面试追问：WHERE 类问题适合按“语义、索引、优化器、边界、排查、取舍”回答。\n\n- WHERE 在 SELECT、UPDATE、DELETE 中分别承担什么职责？\n- MySQL 如何把 WHERE 谓词转成 `ref`、`range`、`index_merge` 或过滤条件？\n- 什么样的 WHERE 条件更容易使用 B+ 树索引定位？\n- 隐式类型转换、函数包裹列、前置通配符和 collation 会怎样影响访问路径？\n- `NULL`、`IS NULL`、`<=>`、`NOT IN` 在结果语义上有哪些关键边界？\n- 联合索引里等值条件、范围条件、排序列和 ICP 如何协作？\n- 低基数字段、跨列 `OR`、大时间范围分别如何优化？\n- WHERE 在锁定读、UPDATE、DELETE 中如何影响锁范围和死锁概率？\n- 如何用 `EXPLAIN ANALYZE`、慢查询日志和 Performance Schema 排查 WHERE 慢查询？\n- 线上新增索引或改写 WHERE 时，如何评估收益、写入成本和回滚方案？",
      "参考来源：本讲解主要参考 MySQL 8.4 Reference Manual 的 SELECT、Optimizing SELECT Statements、WHERE Clause Optimization、Range Optimization、How MySQL Uses Indexes、Index Condition Pushdown、Comparison Operators、Logical Operators、Working with NULL Values、Type Conversion、EXPLAIN、Slow Query Log 和 Performance Schema Statement Tables 文档，并结合小林 coding 的 MySQL 索引文章、JavaGuide 的 MySQL 索引详解、Use The Index, Luke 的 WHERE 讲解和 PlanetScale 的 Index obfuscation 课程进行工程表达校准。官方资料用于定义、优化器行为、谓词语义和观测字段，工程资料用于补充索引可定位性、写法判断、排查路径和面试表达。"
    ],
    typicalProblems: [
      "WHERE 条件解决什么问题，和 SELECT、UPDATE、DELETE 的关系是什么？",
      "WHERE 谓词如何影响 MySQL 优化器的访问路径选择？",
      "哪些条件更容易形成 `ref` 或 `range` 索引访问？",
      "函数包裹列、隐式类型转换、字符集排序和前置通配符会带来哪些成本？",
      "`NULL`、`IS NULL`、`<=>`、`NOT IN` 的语义边界如何判断？",
      "联合索引中等值条件、范围条件、排序列和 ICP 如何协作？",
      "低基数字段、跨列 `OR`、大时间范围和子查询 WHERE 如何优化？",
      "WHERE 在锁定读、UPDATE 和 DELETE 中如何影响锁范围？",
      "如何用 `EXPLAIN ANALYZE`、慢查询日志和 Performance Schema 建立 WHERE 排查证据链？",
      "线上改写 WHERE 或新增索引时，如何评估收益、写入成本和回滚方案？"
    ],
    commonCommands: [
      "EXPLAIN FORMAT=TREE <sql_with_where>",
      "EXPLAIN ANALYZE <sql_with_where>",
      "SHOW CREATE TABLE <table>\\G",
      "SHOW INDEX FROM <table>",
      "SELECT <cols> FROM <table> WHERE <eq_cols> AND <range_col> >= ? AND <range_col> < ? ORDER BY <range_col> DESC LIMIT 20",
      "SELECT DIGEST_TEXT, COUNT_STAR, SUM_ROWS_EXAMINED, SUM_ROWS_SENT, SUM_TIMER_WAIT FROM performance_schema.events_statements_summary_by_digest ORDER BY SUM_TIMER_WAIT DESC LIMIT 10",
      "UPDATE <table> SET status = ? WHERE id = ? AND status = ?"
    ],
    useCases: ["列表筛选", "详情校验", "权限判断", "状态机更新", "批量数据修复", "报表抽取", "缓存回源", "慢 SQL 治理"],
    prerequisites: ["select"],
    related: ["select", "mysql-index", "range-query", "composite-index", "leftmost-prefix", "index-selectivity", "explain", "slow-query-log"],
  },
  "join": {
    sourceRefs: [
      "mysql-select-statement",
      "mysql-join-clause",
      "mysql-select-optimization",
      "mysql-nested-loop-joins",
      "mysql-nested-join-optimization",
      "mysql-outer-join-optimization",
      "mysql-outer-join-simplification",
      "mysql-hash-join-optimization",
      "mysql-bnl-bka-joins",
      "mysql-how-mysql-uses-indexes",
      "mysql-explain-statement",
      "mysql-explain-output",
      "mysql-slow-query-log",
      "mysql-performance-schema-statement-tables",
      "planetscale-joins-overview",
      "planetscale-indexing-joins",
      "use-the-index-luke-sql-join",
      "sqlbolt-sql-joins",
      "itzhai-mysql-join-optimization",
      "tencentcloud-mysql-join-principle",
    ],
    concept:
      "JOIN 是 MySQL 中把多张表按关联条件合并成结果集的查询能力，核心质量取决于关系语义、驱动表选择、连接条件索引、JOIN 算法和执行计划证据。",
    explanation: [
      "概念定位：JOIN 解决的是“业务对象分散在多张表里，查询时如何按关系拼回完整结果”的问题。它常出现在订单关联用户、订单关联明细、角色权限、商品库存、报表宽表、后台检索和数据订正中。\n\n准确地说，JOIN 是 SQL 的表引用组合能力。MySQL 支持 `INNER JOIN`、`LEFT JOIN`、`RIGHT JOIN`、`CROSS JOIN`、逗号连接和带括号的嵌套连接写法；开发者用 `ON` 或 `USING` 描述行之间的匹配条件，优化器再选择表访问顺序、索引、连接算法和过滤下推方式。JOIN 的难点在于：语义上是多表关系，执行上会变成一系列表访问与中间结果扩张。",
      "准确定义：JOIN 把两个或多个表表达式组合成一个结果集，关键组成包括：\n\n- 左表与右表：语法上的表引用，外连接中会影响保留行语义。\n- 连接条件：`ON a.user_id = u.id` 或 `USING (user_id)` 描述匹配关系。\n- 连接类型：`INNER JOIN` 只保留匹配行；`LEFT JOIN` 保留左表行；`RIGHT JOIN` 保留右表行；`CROSS JOIN` 形成笛卡尔组合。\n- 驱动表：物理执行中先访问、用于驱动下一张表查找的表。\n- 被驱动表：根据上游候选行和连接条件继续查找的表。\n- 结果列：同名列、空值补齐、重复行和聚合前中间结果都需要按业务语义处理。\n\n新手先掌握“用条件把表拼起来”；工程实践里要继续追踪“候选行从哪里来、每行会查几次下一张表、索引是否能定位”。",
      "心智模型：把 JOIN 看成沿着业务关系图走边。\n\n- 表是节点，例如 `orders`、`users`、`order_items`。\n- 外键或业务键是边，例如 `orders.user_id = users.id`。\n- WHERE 是先缩小节点集合的过滤器，ON 是沿边匹配的规则。\n- 好的索引像给每条边建了路标，让一边的 key 能快速找到另一边的行。\n- 中间结果像逐层扩展的候选集合，任何一层膨胀都会放大后续扫描、排序、临时表和网络返回。\n\n这个模型能解释常见事故：单表查询很快，多表 JOIN 变慢，根因通常是上游候选行过多、连接列缺少索引、数据类型不一致、外连接限制了重排空间，或结果集在聚合排序前已经膨胀。",
      "主流程机制：MySQL 执行 JOIN 通常经历 8 个阶段。\n\n1. 解析 SQL，建立表引用树，识别 `INNER`、`LEFT`、`RIGHT`、`CROSS`、`ON`、`USING`、括号嵌套和派生表。\n2. 预处理列名、权限、别名、同名列展开、外连接依赖关系和可下推条件。\n3. 优化器基于统计信息、索引、选择性和代价模型枚举可行 JOIN 顺序；外连接、半连接、派生表和子查询会限制或改变可选计划。\n4. 对每张表选择访问方法，例如 `const`、`eq_ref`、`ref`、`range`、`index`、`ALL`，并估算 `rows`、`filtered` 和成本。\n5. 执行器从驱动表取一批候选行，再按连接条件访问下一张表，典型路径是 Nested Loop Join。\n6. 连接列有高质量索引时，被驱动表可以做等值查找或范围查找；索引缺失时可能使用 JOIN buffer、Block Nested Loop、Batched Key Access 或 Hash Join 等策略。\n7. 外连接在匹配失败时补齐 `NULL`，随后执行 WHERE、GROUP BY、ORDER BY、LIMIT、投影和结果返回。\n8. `EXPLAIN`、`EXPLAIN ANALYZE`、慢查询日志和 Performance Schema 记录访问顺序、访问类型、候选行、实际时间和等待事件。\n\nJOIN 优化的核心是控制每一层候选行数量，并让连接边走可定位索引。",
      "实践例子：订单列表常需要关联用户和订单明细。下面的设计把过滤条件、连接条件和排序路径放到同一条证据链里。\n\n```sql\nCREATE TABLE users (\n  id BIGINT PRIMARY KEY,\n  name VARCHAR(64) NOT NULL,\n  status VARCHAR(16) NOT NULL,\n  KEY idx_status_id (status, id)\n) ENGINE=InnoDB;\n\nCREATE TABLE orders (\n  id BIGINT PRIMARY KEY,\n  user_id BIGINT NOT NULL,\n  status VARCHAR(16) NOT NULL,\n  created_at DATETIME NOT NULL,\n  KEY idx_user_created (user_id, created_at),\n  KEY idx_status_created_user (status, created_at, user_id)\n) ENGINE=InnoDB;\n\nEXPLAIN ANALYZE\nSELECT o.id, o.created_at, u.name\nFROM orders AS o\nJOIN users AS u ON u.id = o.user_id\nWHERE o.status = 'PAID'\n  AND o.created_at >= '2026-06-01 00:00:00'\n  AND o.created_at <  '2026-07-01 00:00:00'\nORDER BY o.created_at DESC\nLIMIT 20;\n```\n\n这条 SQL 的关键判断是：`orders` 上的 `idx_status_created_user` 先缩小已支付订单和时间范围，再用 `user_id` 连接 `users.id`；`users.id` 是主键，适合形成 `eq_ref`。如果 `orders.status` 选择性很低，优化器可能更偏好时间范围或其他路径，需要用 `EXPLAIN ANALYZE` 观察实际扫描行数。",
      "JOIN 类型与语义边界：连接类型会影响结果集和优化空间。\n\n- `INNER JOIN`：只保留两边匹配的行，优化器通常有更多重排 JOIN 顺序的空间。\n- `LEFT JOIN`：保留左表所有候选行，右表匹配失败时补 `NULL`；右表过滤条件放在 `ON` 或 `WHERE` 会改变结果语义。\n- `RIGHT JOIN`：语义等价于换方向的 `LEFT JOIN`，工程上常改写成左连接便于阅读。\n- `CROSS JOIN`：表达笛卡尔组合，结果行数是两边候选行相乘，常用于小维表生成组合或测试数据。\n- 多表 JOIN：每新增一张表都会增加计划搜索、候选行扩张和索引维护要求。\n- 自连接：同一张表用不同别名表达层级、相邻版本或配对关系，别名和索引路径要清楚。\n\n外连接最容易出错的点是空值补齐。右表条件写进 `WHERE` 时，很多业务场景会把补齐后的空值行过滤掉；写在 `ON` 里则属于匹配规则的一部分。",
      "深层细节：MySQL JOIN 性能来自算法、索引、统计信息和内存策略共同作用。\n\n- Nested Loop Join：外层每得到一行，就按连接条件访问内层表；内层连接列有索引时成本接近“外层行数 * 单次索引查找”。\n- JOIN buffer：内层缺少可用索引时，MySQL 可能把外层行放进连接缓冲区，批量和内层扫描匹配；这能减少重复扫描成本，也会消耗内存并放大 CPU 比较。\n- Batched Key Access：把一批外层 key 组织起来访问内层索引，改善随机 I/O 局部性，通常和 Multi-Range Read 思路配合。\n- Hash Join：MySQL 8.0 系列支持在合适场景构建哈希表做等值连接，常见于缺少可用索引或成本模型认为哈希更便宜的连接。\n- 外连接简化：当 WHERE 条件能证明外连接的空值补齐行会被过滤时，优化器可能把外连接简化为内连接，从而释放更多重排空间。\n- 数据类型与字符集：连接列类型、长度、字符集和 collation 要一致，隐式转换会增加比较成本并影响索引使用。\n- 统计信息：表大小、基数、直方图、参数分布和热点租户会影响驱动表选择，计划会随数据变化漂移。\n\n老手看 JOIN 计划时会先估算中间结果规模，再看每条连接边的访问类型和实际行数。",
      "工程场景：JOIN 的使用策略取决于业务关系和系统边界。\n\n- OLTP 详情页：一到三张表的主键/外键关联通常适合 JOIN，重点是限制返回列、保证连接列索引、控制事务范围。\n- 后台检索：多条件筛选加多表关联容易形成大中间结果，先用高选择性条件缩小主表，再关联维表。\n- 权限模型：用户、角色、权限、资源多表查询要防止重复行和权限漏判，常配合 `DISTINCT`、半连接或预聚合。\n- 报表查询：大表 JOIN 常使用只读副本、离线宽表、预聚合或物化结果，避免影响主库延迟。\n- 分库分表：跨分片 JOIN 成本高，常通过冗余字段、服务层聚合、广播小表或离线同步控制复杂度。\n- 缓存回源：高频接口可以缓存 JOIN 后的读模型，但需要设计失效、重建和一致性窗口。\n\n生产设计的常用原则是：核心事务写入链路保持表结构清晰，高频读取链路用索引、缓存、宽表或异步投影降低 JOIN 压力。",
      "边界与故障模式：JOIN 问题通常表现为慢查询、结果行膨胀、内存压力、锁范围扩大或计划漂移。\n\n- 缺少连接索引：`EXPLAIN` 中被驱动表出现 `ALL`、`Using join buffer`、大 `rows`，延迟随外层候选行放大。\n- 结果重复：一对多、多对多关系会放大结果集，分页、计数和权限判断容易被重复行影响。\n- 外连接语义偏差：右表条件位置改变保留行语义，`NULL` 补齐行需要在需求里明确。\n- 隐式转换：连接列类型、字符集或 collation 差异会改变比较方式和索引选择。\n- 排序聚合放大：JOIN 后再 `GROUP BY`、`ORDER BY`、`DISTINCT` 可能产生临时表和 filesort。\n- 锁与事务：锁定读、多表 UPDATE/DELETE 会按访问路径加锁，JOIN 顺序和索引范围会影响等待链。\n- 计划漂移：数据分布变化、统计信息陈旧、新索引上线、版本升级和参数偏斜会改变驱动表选择。\n\n处理 JOIN 故障时，把“每张表候选行数、每条连接边索引、最终返回行数、排序聚合成本”拆开验证。",
      "排查实践：JOIN 慢查询建议按证据链定位。\n\n1. 固化现场：记录 SQL、绑定参数、返回行数、业务入口、事务范围、超时时间和实例角色。\n2. 看表结构：执行 `SHOW CREATE TABLE` 和 `SHOW INDEX`，确认连接列类型、字符集、主键、唯一键和联合索引顺序。\n3. 看计划：用 `EXPLAIN FORMAT=TREE` 观察 JOIN 顺序、访问类型、候选行和 `Extra`，再用 `EXPLAIN ANALYZE` 对比估算与实际。\n4. 看中间结果：分别计算驱动表过滤后行数、每条连接边命中比例、一对多扩张倍数和最终返回行数。\n5. 看运行证据：检查慢查询日志、Performance Schema 语句摘要、等待事件、临时表、排序、Buffer Pool、CPU、I/O 和复制延迟。\n6. 小步修复：补连接列索引、调整联合索引顺序、先过滤再 JOIN、改写外连接条件、预聚合一对多表、拆分大查询或落地读模型。\n\n```sql\nSHOW CREATE TABLE orders\\G\nSHOW CREATE TABLE users\\G\nSHOW INDEX FROM orders;\nSHOW INDEX FROM users;\n\nEXPLAIN FORMAT=TREE\nSELECT o.id, u.name\nFROM orders o\nJOIN users u ON u.id = o.user_id\nWHERE o.status = 'PAID'\n  AND o.created_at >= '2026-06-01';\n\nEXPLAIN ANALYZE\nSELECT o.id, u.name\nFROM orders o\nJOIN users u ON u.id = o.user_id\nWHERE o.status = 'PAID'\n  AND o.created_at >= '2026-06-01';\n\nSELECT COUNT(*) AS filtered_orders\nFROM orders\nWHERE status = 'PAID'\n  AND created_at >= '2026-06-01';\n\nSELECT DIGEST_TEXT, COUNT_STAR, SUM_ROWS_EXAMINED, SUM_ROWS_SENT, SUM_CREATED_TMP_TABLES, SUM_TIMER_WAIT\nFROM performance_schema.events_statements_summary_by_digest\nWHERE DIGEST_TEXT LIKE 'SELECT%JOIN%'\nORDER BY SUM_TIMER_WAIT DESC\nLIMIT 10;\n```\n\n有效优化会体现为访问类型改善、实际扫描行数下降、临时表减少、p95/p99 延迟收敛，并且业务结果行数保持稳定。",
      "常见误区：成熟的 JOIN 判断来自语义、基数和证据。\n\n- JOIN 是关系查询能力，性能质量取决于候选行规模、连接列索引、数据分布和后续排序聚合。\n- 小表驱动大表只是经验入口，真正的驱动表选择来自过滤后行数、连接边索引和整体代价。\n- `LEFT JOIN` 的保留行语义由左表、`ON` 和 `WHERE` 共同决定，右表条件位置要和业务需求一致。\n- `Using join buffer` 表示优化器在用缓冲策略处理连接，排查时继续看内层索引、外层行数和实际耗时。\n- `SELECT *` 会扩大网络、临时表、回表和缓存压力，JOIN 查询更适合只取业务需要的列。\n- 多表查询优化要同时评估读性能、写入索引维护成本、发布风险和回滚路径。",
      "面试追问：JOIN 题适合按“语义 -> 算法 -> 索引 -> 计划 -> 故障 -> 取舍”回答。\n\n- JOIN 解决什么问题，`INNER JOIN`、`LEFT JOIN`、`CROSS JOIN` 分别表达什么语义？\n- `ON` 和 `WHERE` 在外连接里如何影响结果？\n- MySQL 执行 JOIN 时，驱动表、被驱动表和 Nested Loop Join 如何协作？\n- 为什么连接列索引对 JOIN 性能影响很大？联合索引顺序如何设计？\n- `eq_ref`、`ref`、`ALL`、`Using join buffer`、`rows`、`filtered` 分别说明什么？\n- Hash Join、Block Nested Loop、Batched Key Access 分别适合哪些场景？\n- 一对多 JOIN 为什么会造成重复行、分页错觉或聚合成本？\n- 多表 JOIN 慢查询如何用 `EXPLAIN ANALYZE`、慢查询日志和 Performance Schema 建立证据链？\n- 多表 UPDATE、锁定读和 JOIN 顺序如何影响锁范围与死锁概率？\n- 分库分表、读写分离和报表系统里，什么时候用 JOIN，什么时候用宽表、缓存或服务层聚合？",
      "参考来源：本讲解主要参考 MySQL 8.4 Reference Manual 的 SELECT、JOIN Clause、Optimizing SELECT Statements、Nested-Loop Join Algorithms、Nested Join Optimization、Outer Join Optimization、Outer Join Simplification、Hash Join Optimization、Block Nested-Loop and Batched Key Access Joins、How MySQL Uses Indexes、EXPLAIN、Slow Query Log 和 Performance Schema Statement Tables 文档，并结合 PlanetScale 的 JOIN 与索引课程、Use The Index, Luke 的 SQL Joins、SQLBolt 的多表查询教程、IT宅和腾讯云开发者社区的 JOIN 调优文章进行工程表达校准。官方资料用于语法、优化器和算法边界，工程文章用于补充索引设计、执行计划阅读、中文学习路径和排障经验。"
    ],
    typicalProblems: [
      "JOIN 解决什么问题，常见连接类型分别表达什么语义？",
      "`INNER JOIN`、`LEFT JOIN`、`RIGHT JOIN`、`CROSS JOIN` 的结果集如何判断？",
      "`ON` 和 `WHERE` 在外连接中的条件位置会怎样影响保留行？",
      "MySQL 执行 JOIN 时，驱动表、被驱动表、Nested Loop Join 和连接条件如何协作？",
      "连接列索引、联合索引顺序和数据类型一致性如何影响 JOIN 性能？",
      "`EXPLAIN` 中 `eq_ref`、`ref`、`ALL`、`Using join buffer`、`rows`、`filtered` 如何解读？",
      "Hash Join、Block Nested Loop 和 Batched Key Access 的适用场景是什么？",
      "一对多、多对多 JOIN 为什么会造成结果膨胀、分页异常和聚合成本？",
      "线上 JOIN 慢查询如何用 `EXPLAIN ANALYZE`、慢查询日志和 Performance Schema 排查？",
      "分库分表、报表系统和高频读接口中，JOIN、宽表、缓存和服务层聚合如何取舍？"
    ],
    commonCommands: [
      "EXPLAIN FORMAT=TREE <join_sql>",
      "EXPLAIN ANALYZE <join_sql>",
      "SHOW CREATE TABLE <left_table>\\G",
      "SHOW CREATE TABLE <right_table>\\G",
      "SHOW INDEX FROM <table>",
      "SELECT COUNT(*) FROM <driver_table> WHERE <driver_filters>",
      "SELECT DIGEST_TEXT, COUNT_STAR, SUM_ROWS_EXAMINED, SUM_ROWS_SENT, SUM_CREATED_TMP_TABLES, SUM_TIMER_WAIT FROM performance_schema.events_statements_summary_by_digest ORDER BY SUM_TIMER_WAIT DESC LIMIT 10"
    ],
    useCases: ["订单关联用户", "订单关联明细", "角色权限查询", "商品库存查询", "后台多条件检索", "报表维表关联", "数据订正校验", "慢查询治理"],
    prerequisites: ["select", "where", "schema-design"],
    related: ["join-order", "sql-optimization", "composite-index", "mysql-index", "explain", "slow-query-log"],
  },
  "limit-offset": {
    sourceRefs: [
      "mysql-select-statement",
      "mysql-select-optimization",
      "mysql-order-by-optimization",
      "mysql-limit-optimization",
      "mysql-how-mysql-uses-indexes",
      "mysql-explain-statement",
      "mysql-explain-output",
      "mysql-slow-query-log",
      "mysql-performance-schema-statement-tables",
      "mysql-innodb-consistent-read",
      "mysql-innodb-locking-reads",
      "planetscale-mysql-pagination",
      "planetscale-deferred-joins",
      "use-the-index-luke-pagination",
      "xiaolincoding-mysql-select",
      "javaguide-mysql-explain",
    ],
    concept:
      "LIMIT 分页是 MySQL 中用 `LIMIT` 与 `OFFSET` 分批读取有序结果集的查询方式，核心质量取决于稳定排序、索引访问路径、跳过行成本和深分页治理策略。",
    explanation: [
      "概念定位：LIMIT 分页（LIMIT Pagination）解决的是“列表数据如何按页返回给用户或批处理任务”的问题。它常出现在后台列表、订单流水、搜索结果、审计日志、报表明细、管理台导出和开放 API 中。\n\n从语义层看，`LIMIT row_count OFFSET offset` 表示跳过前 `offset` 行，再返回 `row_count` 行。从执行层看，MySQL 仍然要按照 `WHERE`、`ORDER BY` 和执行计划找到前 `offset + row_count` 个候选结果，再丢弃前面的行。浅分页关注语义清楚和排序稳定；深分页关注扫描、回表、排序、临时表、Buffer Pool、慢查询和接口超时。",
      "准确定义：LIMIT 是 MySQL SELECT 语句中的结果行数限制子句，常见写法包括：\n\n- `LIMIT 20`：返回最多 20 行。\n- `LIMIT 20 OFFSET 40`：跳过 40 行，返回最多 20 行。\n- `LIMIT 40, 20`：MySQL 兼容写法，含义等同于 `LIMIT 20 OFFSET 40`。\n- `ORDER BY created_at DESC, id DESC LIMIT 20`：用稳定排序键返回第一页。\n- 带游标条件的 `LIMIT 20`：用上一页最后一行的排序键继续读取下一页。\n\n分页查询的工程质量来自三件事：排序结果稳定、访问路径可控、深分页成本有上限。",
      "心智模型：把 LIMIT 分页看成从一条有序队列里取窗口。\n\n- `ORDER BY` 决定队列顺序，排序键相同的行需要追加主键或唯一键做平局裁决。\n- `WHERE` 决定候选队列范围，过滤越精确，分页越轻。\n- `OFFSET` 像把窗口向后推，推得越远，前面被跳过的候选行越多。\n- 覆盖索引像只看目录页，能减少回表；`SELECT *` 像每个候选都打开完整档案。\n- 游标分页像拿着上一页最后一行的位置继续往后走，适合连续翻页和无限滚动。\n\n这个模型能解释一个常见现象：同样返回 20 行，第一页可能只读几十行，`OFFSET 100000` 可能要先处理十万级候选行。",
      "主流程机制：一条典型 LIMIT 分页查询通常沿着下面路径执行。\n\n1. 客户端传入页大小、页号或游标，服务端校验 `page_size` 上限、排序字段白名单和过滤条件。\n2. MySQL 解析 SELECT，优化器基于统计信息、索引、`WHERE`、`ORDER BY` 和 `LIMIT` 选择访问路径。\n3. 执行器按计划扫描索引或表，满足过滤条件的行进入排序、临时表或直接按索引顺序输出的路径。\n4. 存在 `OFFSET` 时，执行器跳过前 `offset` 个合格结果，继续取后面的 `row_count` 行。\n5. 返回列超出索引覆盖范围时，InnoDB 需要回表读取聚簇索引行；深 offset 会把回表成本放大。\n6. `EXPLAIN`、`EXPLAIN ANALYZE`、慢查询日志和 Performance Schema 留下访问类型、扫描行、返回行、排序、临时表和耗时证据。\n\n`LIMIT` 能让优化器在部分场景提前停止扫描或使用更小的排序结构；当 `OFFSET` 很大时，总处理量仍然跟跳过行数一起增长。",
      "实践例子：下面用订单列表展示三类分页写法。核心目标是让过滤、排序和游标都落在同一条联合索引上。\n\n```sql\nCREATE TABLE orders (\n  id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,\n  user_id BIGINT UNSIGNED NOT NULL,\n  status VARCHAR(16) NOT NULL,\n  amount DECIMAL(12,2) NOT NULL,\n  created_at DATETIME NOT NULL,\n  PRIMARY KEY (id),\n  KEY idx_user_status_created_id (user_id, status, created_at, id)\n) ENGINE=InnoDB;\n\n-- 浅分页：适合第一页和少量跳页\nEXPLAIN ANALYZE\nSELECT id, amount, created_at\nFROM orders\nWHERE user_id = 1001 AND status = 'PAID'\nORDER BY created_at DESC, id DESC\nLIMIT 20 OFFSET 40;\n\n-- 深分页优化：先分页出主键，再回表取完整列\nEXPLAIN ANALYZE\nSELECT o.id, o.amount, o.created_at\nFROM orders AS o\nJOIN (\n  SELECT id\n  FROM orders\n  WHERE user_id = 1001 AND status = 'PAID'\n  ORDER BY created_at DESC, id DESC\n  LIMIT 20 OFFSET 100000\n) AS page_ids USING (id)\nORDER BY o.created_at DESC, o.id DESC;\n\n-- 游标分页：用上一页最后一行继续 seek\nEXPLAIN ANALYZE\nSELECT id, amount, created_at\nFROM orders\nWHERE user_id = 1001\n  AND status = 'PAID'\n  AND (created_at, id) < ('2026-06-05 10:00:00', 987654321)\nORDER BY created_at DESC, id DESC\nLIMIT 20;\n```\n\n第一条保留页码体验；第二条把深 offset 的主要工作限制在较窄索引上；第三条适合连续翻页，通常能把扫描量稳定在页大小附近。",
      "深层细节：LIMIT 分页的成本由排序、扫描、回表和一致性共同决定。\n\n- 稳定排序：`ORDER BY created_at DESC` 在相同时间上存在任意顺序空间，追加 `id DESC` 能让翻页结果可复现。\n- 索引顺序：联合索引需要同时服务等值过滤、排序列和唯一平局列，典型形态是 `(user_id, status, created_at, id)`。\n- 回表放大：深 offset 下，执行器可能先读取大量二级索引记录，再为候选行回表；只取索引覆盖列能显著降低 I/O。\n- Top-N 排序：MySQL 在 `ORDER BY ... LIMIT` 中可利用 `LIMIT` 降低排序工作量，排序键缺少可用索引时仍会产生 filesort。\n- MVCC 可见性：InnoDB 普通 SELECT 使用一致性读；用户连续翻页期间有新写入时，页码分页会出现位置漂移，游标分页会围绕边界键保持方向性。\n- 锁定读：`FOR UPDATE` 分页会沿访问路径加锁，批处理任务要控制页大小、索引范围和事务时长。\n- 复制延迟：读写分离场景中，第一页读主库、后续页读副本可能出现结果跳动；分页上下文要携带路由和一致性策略。\n\n有经验的工程师会先估算 `offset + limit`、返回列宽度和排序路径，再用实际执行数据验证。",
      "工程场景与方案选择：分页方案要和产品体验、数据规模和一致性需求匹配。\n\n- 页码分页：适合后台管理台、浅页跳转、低频筛选和小结果集，优点是实现简单、支持随机跳页。\n- 游标分页：适合信息流、消息列表、订单流水、审计日志和无限滚动，优点是连续翻页成本稳定。\n- 延迟关联：适合需要保留页码体验的大表列表，用覆盖索引先拿主键，再按主键回表取宽列。\n- 最大页深限制：适合搜索和管理后台，把极深页转换成更精确过滤、导出任务或异步报表。\n- 快照型导出：适合强一致分页导出，先固化 ID 集合或时间边界，再分批读取。\n- 分片场景：每个分片独立 offset 后再合并会放大成本，常用全局排序键、游标 token 或搜索引擎承担分页。",
      "边界与故障模式：LIMIT 分页线上问题通常有清晰信号。\n\n- 深分页慢：慢查询日志中 `Rows_examined` 远大于 `Rows_sent`，Performance Schema 的 `SUM_ROWS_EXAMINED` 持续升高。\n- 排序不稳：相同排序键缺少唯一平局列，用户刷新或翻页看到重复行、漏行或位置跳动。\n- 临时表与 filesort：`EXPLAIN` 的 `Extra` 出现 `Using temporary`、`Using filesort`，CPU 和临时文件指标上升。\n- 回表过多：返回列很宽、二级索引无法覆盖、Buffer Pool 命中下降，I/O 和延迟一起上升。\n- 页大小失控：开放 API 接受超大 `limit`，单次请求占用连接、内存、网络和应用反序列化资源。\n- 并发漂移：翻页过程中数据插入、删除、状态变更，页码语义和用户观察结果出现偏移。\n- 批处理锁等待：分页更新或锁定读的事务过长，热点范围内的写入等待增多。\n\n排障时优先把“扫描多少、返回多少、排序如何做、是否回表、是否临时表、是否跨副本”变成证据。",
      "排查实践：LIMIT 分页慢查询建议按固定步骤处理。\n\n1. 固化现场：记录 SQL、绑定参数、页号、页大小、排序字段、返回列、调用入口、执行时间和实例角色。\n2. 看计划：用 `EXPLAIN FORMAT=TREE` 与 `EXPLAIN ANALYZE` 观察访问类型、实际行数、循环次数、排序和耗时。\n3. 看结构：执行 `SHOW CREATE TABLE`、`SHOW INDEX`，确认过滤列、排序列、主键和返回列是否能被联合索引覆盖。\n4. 看数据分布：统计过滤条件候选行、最大页深、热点用户或租户、排序键重复度和时间范围。\n5. 看运行证据：检查慢查询日志、Performance Schema、`Rows_examined`、`Rows_sent`、临时表、sort rows、CPU、I/O 和 Buffer Pool。\n6. 小步修复：追加稳定排序键、收窄返回列、补联合索引、改延迟关联、改游标分页、限制最大页深，并用同一批参数复测。\n\n```sql\nSHOW CREATE TABLE orders\\G\nSHOW INDEX FROM orders;\n\nEXPLAIN FORMAT=TREE\nSELECT id, amount, created_at\nFROM orders\nWHERE user_id = 1001 AND status = 'PAID'\nORDER BY created_at DESC, id DESC\nLIMIT 20 OFFSET 100000;\n\nEXPLAIN ANALYZE\nSELECT id, amount, created_at\nFROM orders\nWHERE user_id = 1001 AND status = 'PAID'\nORDER BY created_at DESC, id DESC\nLIMIT 20 OFFSET 100000;\n\nSELECT DIGEST_TEXT, COUNT_STAR, SUM_ROWS_EXAMINED, SUM_ROWS_SENT,\n       SUM_SORT_ROWS, SUM_CREATED_TMP_TABLES, SUM_TIMER_WAIT\nFROM performance_schema.events_statements_summary_by_digest\nWHERE DIGEST_TEXT LIKE 'SELECT%ORDERS%LIMIT%'\nORDER BY SUM_TIMER_WAIT DESC\nLIMIT 10;\n```\n\n有效修复会体现为扫描行下降、回表减少、filesort 或临时表消失、p95/p99 延迟收敛，业务页序保持稳定。",
      "设计与取舍：分页接口上线前建议固定这些约束。\n\n- 排序契约：公开排序字段白名单，每个排序都追加唯一平局列，例如 `created_at, id`。\n- 页大小上限：面向用户的列表常见 20 到 100；导出任务走异步批处理。\n- 索引契约：每个高频筛选排序组合对应一条可解释的联合索引，写入成本纳入评审。\n- 深页策略：页码分页设定最大页深，超过后引导用户加过滤条件、使用导出或切换游标。\n- 游标 token：包含排序键、方向、过滤条件摘要和签名，避免客户端伪造越权查询。\n- 兼容发布：新索引先灰度建好并验证计划，再切查询写法，保留回滚开关和监控看板。\n\n分页优化的目标是控制每次请求的最大工作量，让数据库、应用和用户体验都可预测。",
      "常见误区：LIMIT 分页的正确判断来自排序、索引和证据。\n\n- `LIMIT 20` 只限制最终返回行，深 offset 的扫描与跳过工作仍然发生。\n- `ORDER BY` 要包含唯一平局列，分页结果才具备稳定顺序。\n- 覆盖索引能降低深分页回表压力，宽列适合在确定主键集合后读取。\n- 游标分页关注连续浏览体验，页码分页关注随机跳页体验，两者服务不同产品目标。\n- `EXPLAIN` 的估算行数用于判断计划方向，`EXPLAIN ANALYZE` 的实际行数用于校准真实成本。\n- 分页 SQL 优化要同时评估新增索引的写入成本、空间成本、复制延迟和发布风险。",
      "面试追问：LIMIT 分页题适合按“语义 -> 成本 -> 优化 -> 一致性 -> 排查”回答。\n\n- `LIMIT 20 OFFSET 100000` 在 MySQL 中大致会做哪些工作？\n- 为什么深分页会变慢，`Rows_examined` 和 `Rows_sent` 能说明什么？\n- `ORDER BY created_at DESC LIMIT 20` 为什么需要追加 `id` 作为平局列？\n- 联合索引如何同时服务 `WHERE`、`ORDER BY` 和分页游标？\n- 覆盖索引、延迟关联和游标分页分别解决哪类成本？\n- 游标分页如何设计下一页条件、排序方向和 token？\n- 数据插入、删除和状态变更会如何影响页码分页结果？\n- `EXPLAIN`、`EXPLAIN ANALYZE`、慢查询日志和 Performance Schema 如何建立排查证据链？\n- 批量分页更新为什么要控制事务长度和锁范围？\n- 开放 API 分页如何设计页大小、最大页深、排序白名单和防滥用策略？",
      "参考来源：本讲解主要参考 MySQL 8.4 Reference Manual 的 SELECT、Optimizing SELECT Statements、ORDER BY Optimization、LIMIT Query Optimization、How MySQL Uses Indexes、EXPLAIN、EXPLAIN Output、Slow Query Log、Performance Schema Statement Tables、InnoDB Consistent Reads 和 InnoDB Locking Reads 文档，并结合 PlanetScale 的 MySQL Pagination、Deferred joins、Use The Index, Luke 的 Paging Through Results、小林 coding 的 SELECT 执行流程和 JavaGuide 的 EXPLAIN 讲解进行工程表达校准。官方资料用于语法、优化器、执行计划和观测字段，工程文章用于补充分页方案选择、深分页优化和中文面试表达。"
    ],
    typicalProblems: [
      "LIMIT 分页解决什么问题，`LIMIT 20 OFFSET 40` 和 `LIMIT 40, 20` 的语义是什么？",
      "MySQL 执行深分页时为什么会出现扫描行远大于返回行？",
      "`ORDER BY` 如何设计稳定排序，为什么常追加主键作为平局列？",
      "联合索引怎样同时覆盖过滤条件、排序字段和分页游标？",
      "深 offset 下回表、filesort、临时表和 Buffer Pool 会带来哪些成本？",
      "覆盖索引、延迟关联、游标分页和最大页深限制分别适合哪些场景？",
      "页码分页和游标分页在产品体验、一致性和随机跳页能力上如何取舍？",
      "数据插入、删除、状态变化和副本延迟会如何影响连续翻页？",
      "如何用 `EXPLAIN ANALYZE`、慢查询日志和 Performance Schema 排查分页慢 SQL？",
      "开放 API 和批处理任务中的分页如何设置页大小、排序白名单、token 和事务边界？"
    ],
    commonCommands: [
      "EXPLAIN FORMAT=TREE <pagination_sql>",
      "EXPLAIN ANALYZE <pagination_sql>",
      "SHOW CREATE TABLE <table>\\G",
      "SHOW INDEX FROM <table>",
      "SELECT <cols> FROM <table> WHERE <filters> ORDER BY <sort_col>, id LIMIT <size> OFFSET <offset>",
      "SELECT <cols> FROM <table> WHERE <filters> AND (<sort_col>, id) < (?, ?) ORDER BY <sort_col> DESC, id DESC LIMIT <size>",
      "SELECT DIGEST_TEXT, COUNT_STAR, SUM_ROWS_EXAMINED, SUM_ROWS_SENT, SUM_SORT_ROWS, SUM_CREATED_TMP_TABLES, SUM_TIMER_WAIT FROM performance_schema.events_statements_summary_by_digest ORDER BY SUM_TIMER_WAIT DESC LIMIT 10"
    ],
    useCases: ["后台列表分页", "订单流水查询", "搜索结果分页", "审计日志浏览", "开放 API 列表", "无限滚动", "批处理分片读取", "慢 SQL 治理"],
    prerequisites: ["select"],
    related: ["cursor-pagination", "sql-optimization", "order-by", "composite-index", "covering-index", "explain", "slow-query-log"],
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
