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
  /* <!-- KG_REVIEWED: InnoDB | 2026-06-05 | source_count=18 --> */
  /* <!-- KG_EXPLAINED: InnoDB | 2026-05-23 | source_count=5 --> */
  {
    sourceRefs: [
      "mysql-innodb",
      "mysql-innodb-architecture",
      "mysql-innodb-buffer-pool",
      "mysql-innodb-physical-structure",
      "mysql-innodb-row-format",
      "mysql-innodb-index-types",
      "mysql-innodb-multi-versioning",
      "mysql-innodb-consistent-read",
      "mysql-innodb-undo-logs",
      "mysql-innodb-redo-log",
      "mysql-innodb-checkpoints",
      "mysql-innodb-doublewrite-buffer",
      "mysql-innodb-change-buffer",
      "mysql-innodb-transaction-model",
      "mysql-innodb-locking-reads",
      "mysql-show-engine",
      "xiaolincoding-mysql-index",
      "xiaolincoding-mysql-log",
    ],
    id: "innodb",
    zh: "InnoDB",
    en: "InnoDB",
    area: "engine",
    difficulty: "medium",
    concept: "InnoDB 是 MySQL 的默认事务型存储引擎，用页、B+Tree、Buffer Pool、MVCC、锁、Undo 和 Redo 支撑高并发 OLTP 的一致性、性能与崩溃恢复。",
    explanation: [
      "概念定位：InnoDB 解决的是“关系型业务数据怎样在高并发读写下保持正确、可恢复、可排查”的问题。它出现在订单、账户、库存、支付流水、权限、内容和配置等核心表里，是 MySQL 事务、索引、锁、MVCC、Buffer Pool、Redo Log、Undo Log 和崩溃恢复的共同载体。\n\nMySQL 的 SQL 层负责解析、优化和执行请求，InnoDB 负责把行记录组织成页和 B+Tree，管理缓存、并发控制、版本链、日志和恢复。学 InnoDB 要抓住一条主线：数据以页为单位在磁盘和内存之间流动，事务修改先进入内存并写日志，后台刷盘和崩溃恢复保证最终回到一致状态。",
      "准确定义：InnoDB 是 MySQL 8.x 默认的通用存储引擎，面向 OLTP 工作负载设计，核心能力包括事务、行级锁、外键、崩溃恢复、一致性非锁定读和聚簇索引表组织。\n\n可以把它拆成六组关键结构：\n- 表空间与页：`.ibd`、系统表空间、Undo 表空间、Redo 日志文件，以及默认 16KB 的数据页、索引页、Undo 页。\n- 索引组织：主键聚簇索引存整行，二级索引叶子节点存二级键和主键值。\n- 内存缓存：Buffer Pool 缓存数据页和索引页，内部有 LRU、flush list、free list 等管理结构。\n- 事务版本：Undo Log 保存旧版本，Read View 判断可见性，Purge 线程清理无用历史版本。\n- 写入恢复：Redo Log 记录物理修改，Checkpoint 推进可恢复边界，Doublewrite Buffer 降低页写坏风险。\n- 并发控制：意向锁、记录锁、间隙锁、Next-Key Lock、锁等待和死锁检测保护写入正确性。",
      "心智模型：把 InnoDB 想成一个带缓存和账本的页工厂。\n\n- 磁盘上保存的是表空间和 B+Tree 页。\n- Buffer Pool 是车间，热点页在这里被读取、修改和淘汰。\n- Undo 是旧版本账本，服务回滚和一致性读。\n- Redo 是重做账本，服务提交后的崩溃恢复。\n- Checkpoint 是已刷盘进度线，决定异常重启要回放多少日志。\n- 锁是并发闸门，保证多个事务修改同一批记录时顺序清楚。\n\n新手先记住“读写都围绕页展开”；老手继续看页分裂、脏页刷盘、版本链膨胀、锁范围扩大、Redo 空间压力和 Buffer Pool 污染这些生产现象。",
      "主流程机制：一次 InnoDB 读写请求可以按页、锁、版本和日志理解。\n\n1. SQL 层选出执行计划，执行器通过 handler 接口让 InnoDB 访问索引。\n2. InnoDB 根据聚簇索引或二级索引定位页；Buffer Pool 命中时直接读内存，未命中时从表空间读页进内存。\n3. 一致性读会用 Read View 判断记录版本可见性，必要时沿 Undo 版本链构造旧版本。\n4. 当前读或写入会按索引记录加锁；范围更新在可重复读下可能涉及记录锁、间隙锁或 Next-Key Lock。\n5. 写入先生成 Undo，再修改 Buffer Pool 中的页并产生 Redo 记录；被修改的页成为脏页。\n6. 事务提交时 Redo 按刷盘策略持久化，Binlog 与 Redo 共同进入提交链路；脏页由后台线程按 Checkpoint、LRU 和刷盘压力逐步写回。\n7. 实例崩溃后，InnoDB 用 Redo 重放已提交修改，用 Undo 回滚未完成事务，恢复到一致状态。\n\n这条链路解释了 InnoDB 的核心取舍：同步写日志比同步写整页更便宜，后台刷脏页提升吞吐，日志与检查点共同控制恢复时间。",
      "实践例子：下面的订单表能同时观察聚簇索引、二级索引、Buffer Pool、锁、Undo 和 Redo。\n\n```sql\nCREATE TABLE orders (\n  id BIGINT PRIMARY KEY,\n  user_id BIGINT NOT NULL,\n  status VARCHAR(16) NOT NULL,\n  amount DECIMAL(12,2) NOT NULL,\n  version INT NOT NULL DEFAULT 0,\n  created_at DATETIME NOT NULL,\n  KEY idx_user_created (user_id, created_at),\n  KEY idx_status_created (status, created_at)\n) ENGINE=InnoDB;\n\n-- 一致性读：通常走 MVCC 快照，适合普通列表查询\nSELECT id, status, amount\nFROM orders\nWHERE user_id = 1001\nORDER BY created_at DESC\nLIMIT 20;\n\n-- 当前读：读取最新版本并加锁，适合状态流转\nSTART TRANSACTION;\nSELECT id, status, version\nFROM orders\nWHERE id = 90001\nFOR UPDATE;\nUPDATE orders\nSET status = 'PAID', version = version + 1\nWHERE id = 90001 AND status = 'NEW';\nCOMMIT;\n```\n\n`PRIMARY KEY` 决定整行在聚簇索引中的位置，`idx_user_created` 服务用户订单列表，`FOR UPDATE` 进入当前读并持有锁，`UPDATE` 产生 Undo 和 Redo，提交后后台刷盘把脏页写回表空间。",
      "深层细节：InnoDB 的性能和一致性来自几组互相制约的机制。\n\n- 聚簇索引：主键顺序影响写入局部性、页分裂、二级索引体积和范围扫描成本。递增主键通常更利于插入局部性，随机主键会提高页分裂和缓存扰动概率。\n- Buffer Pool：热点页命中率决定读延迟；大查询、全表扫描和低选择性索引会挤出热点页，表现为读 I/O 上升和延迟抖动。\n- Change Buffer：部分二级索引修改可以先缓存在 change buffer，后续读到相关页时合并，适合写多读少的普通二级索引场景。\n- MVCC：一致性读减少读写互相阻塞，长事务会保留旧版本，History list length 升高，Undo 清理变慢。\n- Redo 与 Checkpoint：写入先顺序写日志，脏页异步落盘；Checkpoint 推进慢会拉长恢复窗口，并在日志空间紧张时反向压低写入吞吐。\n- Doublewrite Buffer：脏页写盘前先写到双写区域，降低操作系统或存储故障造成半页写入后的恢复风险。\n- 锁与索引：行锁实际锁在索引记录上，条件无法有效走索引时，扫描范围和锁等待都会放大。",
      "工程场景：InnoDB 的调优常围绕主键、内存、事务、日志和观测展开。\n\n- 核心 OLTP 表：主键要稳定、短、递增或近似递增，字段和索引宽度会直接影响页密度与二级索引空间。\n- 高频查询：联合索引要服务过滤、排序和回表成本，避免让 Buffer Pool 被低效扫描污染。\n- 高并发写入：事务保持短小，按固定顺序访问行，减少长锁、死锁和 Undo 积压。\n- 写入峰值：观察 Redo 写入、脏页比例、fsync 延迟和 Checkpoint 年龄，避免日志空间成为吞吐瓶颈。\n- 混合负载：报表、大导出、批量订正和在线 DDL 要安排批次、限速和只读副本，控制缓存污染、复制延迟和锁等待。\n- 故障恢复：RTO 受 Redo 回放量、脏页、存储吞吐和未完成事务回滚影响，压测与恢复演练能给出真实边界。",
      "边界与故障：InnoDB 问题通常会从某个内部结构外溢成线上症状。\n\n- Buffer Pool 命中率下降：读 I/O、延迟和 CPU 上升，常见原因是索引选择差、全表扫描、大范围导出或热点集超过内存。\n- 脏页刷盘抖动：提交变慢、后台 I/O 打满，常见原因是写入峰值、Checkpoint 追赶和存储 fsync 变慢。\n- 长事务与 Undo 膨胀：History list length 升高，Purge 追不上，快照读要沿更长版本链判断可见性。\n- 锁等待与死锁：连接堆积、超时、事务回滚，常见原因是访问顺序交叉、范围条件过大或索引缺失。\n- 页分裂与碎片：随机主键或频繁更新可变长字段会增加页移动、空间浪费和写放大。\n- Redo 压力：日志写入或 Checkpoint 受阻会让写事务等待，表现为吞吐下降和提交延迟抖动。\n- 崩溃恢复窗口变长：脏页多、Redo 待回放量大、未完成大事务多，会延长实例重启可用时间。",
      "排查实践：生产环境定位 InnoDB 问题建议先建立证据链。\n\n1. 固化症状：记录时间窗口、SQL 样本、QPS、p95/p99、错误码、连接数、CPU、磁盘 I/O、复制延迟和实例版本。\n2. 看会话与锁：用 `SHOW PROCESSLIST`、`performance_schema.data_locks` 和 `data_lock_waits` 定位等待事务、被阻塞 SQL 和锁对象。\n3. 看 InnoDB 全局状态：用 `SHOW ENGINE INNODB STATUS\\G` 观察 `TRANSACTIONS`、`LATEST DETECTED DEADLOCK`、`History list length`、Buffer Pool、I/O 和 SEMAPHORES。\n4. 看 Buffer Pool：检查命中率、脏页、页读写、LRU 淘汰和热点表索引，确认低效扫描或内存不足。\n5. 看日志与刷盘：检查 Redo 写入、Checkpoint 推进、fsync 延迟、脏页比例和存储队列。\n6. 看 SQL 计划：用 `EXPLAIN ANALYZE` 校验扫描行数、索引、排序、临时表和实际耗时。\n7. 小步修复：缩短事务、补索引、拆批、限速、调整 Buffer Pool/Redo 参数、隔离报表负载，并用同一组指标复测。\n\n```sql\nSHOW ENGINE INNODB STATUS\\G\nSHOW PROCESSLIST;\n\nSELECT *\nFROM performance_schema.data_lock_waits\\G\n\nSELECT ENGINE_TRANSACTION_ID, THREAD_ID, EVENT_ID, OBJECT_SCHEMA, OBJECT_NAME,\n       INDEX_NAME, LOCK_TYPE, LOCK_MODE, LOCK_STATUS, LOCK_DATA\nFROM performance_schema.data_locks\\G\n\nSHOW GLOBAL STATUS LIKE 'Innodb_buffer_pool%';\nSHOW GLOBAL STATUS LIKE 'Innodb_data%';\nSHOW GLOBAL STATUS LIKE 'Innodb_log%';\n\nSHOW VARIABLES LIKE 'innodb_buffer_pool_size';\nSHOW VARIABLES LIKE 'innodb_flush_log_at_trx_commit';\nSHOW VARIABLES LIKE 'innodb_redo_log_capacity';\n```",
      "指标与命令速查：InnoDB 排障要把单点命令连成可复核证据。\n\n- `SHOW ENGINE INNODB STATUS\\G`：看死锁、锁等待、长事务、History list length、Buffer Pool、I/O 和后台线程状态。\n- `performance_schema.data_locks`：看锁类型、锁模式、索引名和锁数据。\n- `performance_schema.data_lock_waits`：看阻塞关系，适合构造等待链。\n- `Innodb_buffer_pool_read_requests` 与 `Innodb_buffer_pool_reads`：估算逻辑读和物理读差距。\n- `Innodb_buffer_pool_pages_dirty`：观察脏页规模和刷盘压力。\n- `Innodb_data_reads`、`Innodb_data_writes`、`Innodb_data_fsyncs`：观察 I/O 行为。\n- `innodb_flush_log_at_trx_commit`：控制 Redo 提交刷盘语义，影响持久性和延迟。\n- `innodb_redo_log_capacity`：控制 Redo 日志总容量，影响写入峰值与恢复窗口。",
      "常见误区：InnoDB 的正确理解来自页、索引、事务和日志的组合。\n\n- 行锁锁定的是索引记录，索引选择决定锁范围。\n- 普通 `SELECT` 多数走一致性读，`SELECT ... FOR UPDATE` 和写语句走当前读。\n- 事务提交依赖日志先行，数据页可以稍后刷盘。\n- Buffer Pool 命中率高代表读路径更健康，仍要结合扫描行数、热点分布和脏页压力判断。\n- Redo 保证崩溃后重做已提交修改，Undo 支持回滚和旧版本读取。\n- 主键设计是存储结构设计，影响整行位置、二级索引体积、页分裂和写入局部性。",
      "面试追问：InnoDB 题可以按“结构 -> 读写 -> 并发 -> 恢复 -> 排障 -> 取舍”回答。\n\n- InnoDB 为什么适合作为 MySQL 默认 OLTP 存储引擎？\n- InnoDB 的页、表空间、聚簇索引、二级索引之间是什么关系？\n- 一条普通 `SELECT` 在 InnoDB 中如何读取数据，Buffer Pool 和 MVCC 分别做什么？\n- 一条 `UPDATE` 从定位记录到提交，会产生哪些锁、Undo、Redo 和脏页？\n- Redo Log、Undo Log、Binlog 在职责上怎样区分？\n- Checkpoint、脏页刷盘和崩溃恢复之间有什么关系？\n- 长事务为什么会造成 Undo 积压和 History list length 升高？\n- 为什么索引缺失会放大锁等待和死锁概率？\n- `SHOW ENGINE INNODB STATUS` 里哪些字段最适合排查死锁、长事务、Buffer Pool 和 I/O？\n- 如何在强持久性、写入吞吐、恢复时间和硬件成本之间做取舍？",
      "参考来源：本讲解主要参考 MySQL 8.4 Reference Manual 的 InnoDB Storage Engine、Architecture、Buffer Pool、Physical Structure、Row Formats、Clustered and Secondary Indexes、Multi-Versioning、Consistent Nonlocking Reads、Undo Logs、Redo Log、Checkpoints、Doublewrite Buffer、Change Buffer、Transaction Model、Locking Reads 和 SHOW ENGINE 文档，并结合小林 coding 的 MySQL 索引与日志文章校准中文表达和面试路径。官方资料用于定义、结构、命令和边界，中文资料用于补充学习主线、机制串联和常见问法。"
    ],
    typicalProblems: [
      "InnoDB 解决什么问题，为什么它适合作为 MySQL 默认事务型存储引擎？",
      "InnoDB 的表空间、页、聚簇索引和二级索引如何组织一行数据？",
      "一次普通 SELECT 如何经过执行计划、Buffer Pool、索引页和 MVCC 返回结果？",
      "一次 UPDATE 如何产生 Undo、Redo、脏页、锁和提交动作？",
      "Redo Log、Undo Log、Checkpoint、Doublewrite Buffer 分别承担什么职责？",
      "Buffer Pool 命中率下降、脏页过多和 Redo 压力会造成哪些线上现象？",
      "长事务为什么会导致 History list length 升高，Purge 变慢后如何验证？",
      "为什么 InnoDB 行锁依赖索引，索引缺失会如何放大锁等待和死锁？",
      "如何用 `SHOW ENGINE INNODB STATUS\\G`、Performance Schema 和 `SHOW GLOBAL STATUS` 排查 InnoDB 问题？",
      "主键设计、事务范围、Buffer Pool 大小、Redo 容量和刷盘策略之间如何取舍？"
    ],
    commonCommands: [
      "SHOW ENGINE INNODB STATUS\\G",
      "SHOW PROCESSLIST",
      "SELECT * FROM performance_schema.data_lock_waits\\G",
      "SELECT * FROM performance_schema.data_locks\\G",
      "SHOW GLOBAL STATUS LIKE 'Innodb_buffer_pool%'",
      "SHOW GLOBAL STATUS LIKE 'Innodb_data%'",
      "SHOW GLOBAL STATUS LIKE 'Innodb_log%'",
      "SHOW VARIABLES LIKE 'innodb_buffer_pool_size'",
      "SHOW VARIABLES LIKE 'innodb_flush_log_at_trx_commit'",
      "SHOW VARIABLES LIKE 'innodb_redo_log_capacity'",
      "EXPLAIN ANALYZE <sql>"
    ],
    useCases: ["核心业务表", "高并发 OLTP", "事务一致性", "崩溃恢复", "慢 SQL 排查", "锁等待排查", "写入性能调优", "主键与索引设计"],
    prerequisites: ["mysql-overview"],
    related: ["transaction", "buffer-pool", "redo-log", "undo-log", "mvcc", "clustered-index", "row-lock", "crash-recovery"],
    order: 20,
  },
  /* <!-- KG_REVIEWED: 存储引擎 | 2026-05-24 | source_count=5 --> */
  /* <!-- KG_EXPLAINED: 存储引擎 | 2026-05-23 | source_count=5 --> */
  { sourceRefs: ["mysql-reference","mysql-innodb","xiaolin-mysql","javaguide","cs-notes"], id: "storage-engine", zh: "存储引擎", en: "Storage Engine", area: "engine", difficulty: "medium", concept: "存储引擎负责数据存储、索引实现、锁和事务能力。", explanation: ["核心概念：存储引擎（Storage Engine）聚焦存储引擎负责数据存储、索引实现、锁和事务能力。。MySQL 通过 SQL、InnoDB、索引、事务、日志和复制支撑关系型数据读写；理解它时先抓住InnoDB 页、Buffer Pool、脏页和检查点，再看输入、状态变化、输出结果和失败分支。","适用场景：存储引擎常用于引擎选型和能力差异分析。学习时把它放回MySQL链路中观察，并结合前置知识MySQL 概览判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，存储引擎通常会和InnoDB一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点需要结合流程和指标判断。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认InnoDB 页、Buffer Pool、脏页和检查点是否仍然成立。","常见误区与注意点：实践中容易把存储引擎当成孤立概念处理，结果遗漏页分裂、刷盘抖动、Buffer Pool 污染和主键设计。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考MySQL 8.4 Reference Manual、InnoDB 官方文档、小林 coding、JavaGuide 和 CS-Notes，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["存储引擎执行原理是什么","存储引擎如何影响性能或一致性","存储引擎线上问题怎么排查"], useCases: ["引擎选型","能力差异分析"], prerequisites: ["mysql-overview"], related: ["innodb"], order: 21 },
  /* <!-- KG_REVIEWED: 聚簇索引 | 2026-06-05 | source_count=14 --> */
  /* <!-- KG_EXPLAINED: 聚簇索引 | 2026-05-23 | source_count=5 --> */
  { sourceRefs: ["mysql-reference","mysql-innodb","xiaolin-mysql","javaguide","cs-notes"], id: "clustered-index", zh: "聚簇索引", en: "Clustered Index", area: "engine", difficulty: "medium", concept: "InnoDB 按主键组织数据，主键索引叶子节点存储整行记录。", explanation: ["核心概念：聚簇索引（Clustered Index）聚焦InnoDB 按主键组织数据，主键索引叶子节点存储整行记录。。MySQL 通过 SQL、InnoDB、索引、事务、日志和复制支撑关系型数据读写；理解它时先抓住InnoDB 页、Buffer Pool、脏页和检查点，再看输入、状态变化、输出结果和失败分支。","适用场景：聚簇索引常用于主键查询和表数据组织理解。学习时把它放回MySQL链路中观察，并结合前置知识InnoDB和主键判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，聚簇索引通常会和二级索引和回表一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点需要结合流程和指标判断。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认InnoDB 页、Buffer Pool、脏页和检查点是否仍然成立。","常见误区与注意点：实践中容易把聚簇索引当成孤立概念处理，结果遗漏页分裂、刷盘抖动、Buffer Pool 污染和主键设计。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考MySQL 8.4 Reference Manual、InnoDB 官方文档、小林 coding、JavaGuide 和 CS-Notes，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["聚簇索引执行原理是什么","聚簇索引如何影响性能或一致性","聚簇索引线上问题怎么排查"], useCases: ["主键查询","表数据组织理解"], prerequisites: ["innodb","primary-key"], related: ["secondary-index","back-to-table"], order: 22 },
  /* <!-- KG_REVIEWED: Buffer Pool | 2026-06-05 | source_count=19 --> */
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
  /* <!-- KG_REVIEWED: 索引 | 2026-06-05 | source_count=21 --> */
  /* <!-- KG_EXPLAINED: 索引 | 2026-05-23 | source_count=5 --> */
  { sourceRefs: ["mysql-reference","mysql-innodb","xiaolin-mysql","javaguide","cs-notes"], id: "mysql-index", zh: "索引", en: "Index", area: "index", difficulty: "medium", concept: "索引用额外数据结构加速查询，但会增加写入和存储成本。", explanation: ["核心概念：索引（Index）聚焦索引用额外数据结构加速查询，但会增加写入和存储成本。。MySQL 通过 SQL、InnoDB、索引、事务、日志和复制支撑关系型数据读写；理解它时先抓住B+ 树、聚簇索引、二级索引和覆盖索引，再看输入、状态变化、输出结果和失败分支。","适用场景：索引常用于查询加速、排序优化和唯一约束。学习时把它放回MySQL链路中观察，并结合前置知识SELECT 查询和InnoDB判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，索引通常会和B+ 树、联合索引和SQL 优化一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点需要结合流程和指标判断。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认B+ 树、聚簇索引、二级索引和覆盖索引是否仍然成立。","常见误区与注意点：实践中容易把索引当成孤立概念处理，结果遗漏回表、最左前缀、范围条件、低选择性和写入成本。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考MySQL 8.4 Reference Manual、InnoDB 官方文档、小林 coding、JavaGuide 和 CS-Notes，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["索引执行原理是什么","索引如何影响性能或一致性","索引线上问题怎么排查"], useCases: ["查询加速","排序优化","唯一约束"], prerequisites: ["select","innodb"], related: ["b-plus-tree","composite-index","sql-optimization"], order: 27 },
  /* <!-- KG_REVIEWED: B+ 树 | 2026-06-05 | source_count=19 --> */
  /* <!-- KG_EXPLAINED: B+ 树 | 2026-05-23 | source_count=5 --> */
  { sourceRefs: ["mysql-reference","mysql-innodb","xiaolin-mysql","javaguide","cs-notes"], id: "b-plus-tree", zh: "B+ 树", en: "B+ Tree", area: "index", difficulty: "medium", concept: "B+ 树是 MySQL 常用索引结构，适合范围查询和排序。", explanation: ["核心概念：B+ 树（B+ Tree）聚焦B+ 树是 MySQL 常用索引结构，适合范围查询和排序。。MySQL 通过 SQL、InnoDB、索引、事务、日志和复制支撑关系型数据读写；理解它时先抓住B+ 树、聚簇索引、二级索引和覆盖索引，再看输入、状态变化、输出结果和失败分支。","适用场景：B+ 树常用于范围查询、索引原理和磁盘页访问优化。学习时把它放回MySQL链路中观察，并结合前置知识索引判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，B+ 树通常会和聚簇索引和二级索引一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点需要结合流程和指标判断。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认B+ 树、聚簇索引、二级索引和覆盖索引是否仍然成立。","常见误区与注意点：实践中容易把B+ 树当成孤立概念处理，结果遗漏回表、最左前缀、范围条件、低选择性和写入成本。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考MySQL 8.4 Reference Manual、InnoDB 官方文档、小林 coding、JavaGuide 和 CS-Notes，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["B+ 树执行原理是什么","B+ 树如何影响性能或一致性","B+ 树线上问题怎么排查"], useCases: ["范围查询","索引原理","磁盘页访问优化"], prerequisites: ["mysql-index"], related: ["clustered-index","secondary-index"], order: 28 },
  /* <!-- KG_REVIEWED: 二级索引 | 2026-06-05 | source_count=23 --> */
  /* <!-- KG_EXPLAINED: 二级索引 | 2026-05-23 | source_count=5 --> */
  { sourceRefs: ["mysql-reference","mysql-innodb","xiaolin-mysql","javaguide","cs-notes"], id: "secondary-index", zh: "二级索引", en: "Secondary Index", area: "index", difficulty: "medium", concept: "二级索引叶子节点保存主键值，查询整行时可能需要回表。", explanation: ["核心概念：二级索引（Secondary Index）聚焦二级索引叶子节点保存主键值，查询整行时可能需要回表。。MySQL 通过 SQL、InnoDB、索引、事务、日志和复制支撑关系型数据读写；理解它时先抓住B+ 树、聚簇索引、二级索引和覆盖索引，再看输入、状态变化、输出结果和失败分支。","适用场景：二级索引常用于非主键查询和多条件检索。学习时把它放回MySQL链路中观察，并结合前置知识聚簇索引判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，二级索引通常会和回表和覆盖索引一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点需要结合流程和指标判断。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认B+ 树、聚簇索引、二级索引和覆盖索引是否仍然成立。","常见误区与注意点：实践中容易把二级索引当成孤立概念处理，结果遗漏回表、最左前缀、范围条件、低选择性和写入成本。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考MySQL 8.4 Reference Manual、InnoDB 官方文档、小林 coding、JavaGuide 和 CS-Notes，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["二级索引执行原理是什么","二级索引如何影响性能或一致性","二级索引线上问题怎么排查"], useCases: ["非主键查询","多条件检索"], prerequisites: ["clustered-index"], related: ["back-to-table","covering-index"], order: 29 },
  /* <!-- KG_REVIEWED: 回表 | 2026-06-05 | source_count=23 --> */
  /* <!-- KG_EXPLAINED: 回表 | 2026-05-23 | source_count=5 --> */
  { sourceRefs: ["mysql-reference","mysql-innodb","xiaolin-mysql","javaguide","cs-notes"], id: "back-to-table", zh: "回表", en: "Back to Table", area: "index", difficulty: "medium", concept: "回表是通过二级索引找到主键后，再访问聚簇索引获取完整记录。", explanation: ["核心概念：回表（Back to Table）聚焦回表是通过二级索引找到主键后，再访问聚簇索引获取完整记录。。MySQL 通过 SQL、InnoDB、索引、事务、日志和复制支撑关系型数据读写；理解它时先抓住B+ 树、聚簇索引、二级索引和覆盖索引，再看输入、状态变化、输出结果和失败分支。","适用场景：回表常用于查询优化和索引字段选择。学习时把它放回MySQL链路中观察，并结合前置知识二级索引判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，回表通常会和覆盖索引一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点需要结合流程和指标判断。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认B+ 树、聚簇索引、二级索引和覆盖索引是否仍然成立。","常见误区与注意点：实践中容易把回表当成孤立概念处理，结果遗漏回表、最左前缀、范围条件、低选择性和写入成本。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考MySQL 8.4 Reference Manual、InnoDB 官方文档、小林 coding、JavaGuide 和 CS-Notes，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["回表执行原理是什么","回表如何影响性能或一致性","回表线上问题怎么排查"], useCases: ["查询优化","索引字段选择"], prerequisites: ["secondary-index"], related: ["covering-index"], order: 30 },
  /* <!-- KG_REVIEWED: 覆盖索引 | 2026-06-05 | source_count=28 --> */
  /* <!-- KG_EXPLAINED: 覆盖索引 | 2026-05-23 | source_count=5 --> */
  { sourceRefs: ["mysql-reference","mysql-innodb","xiaolin-mysql","javaguide","cs-notes"], id: "covering-index", zh: "覆盖索引", en: "Covering Index", area: "index", difficulty: "medium", concept: "覆盖索引让查询所需字段都能从索引中获得，减少回表。", explanation: ["核心概念：覆盖索引（Covering Index）聚焦覆盖索引让查询所需字段都能从索引中获得，减少回表。。MySQL 通过 SQL、InnoDB、索引、事务、日志和复制支撑关系型数据读写；理解它时先抓住B+ 树、聚簇索引、二级索引和覆盖索引，再看输入、状态变化、输出结果和失败分支。","适用场景：覆盖索引常用于列表查询优化和高频只读查询。学习时把它放回MySQL链路中观察，并结合前置知识二级索引判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，覆盖索引通常会和联合索引和SQL 优化一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点需要结合流程和指标判断。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认B+ 树、聚簇索引、二级索引和覆盖索引是否仍然成立。","常见误区与注意点：实践中容易把覆盖索引当成孤立概念处理，结果遗漏回表、最左前缀、范围条件、低选择性和写入成本。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考MySQL 8.4 Reference Manual、InnoDB 官方文档、小林 coding、JavaGuide 和 CS-Notes，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["覆盖索引执行原理是什么","覆盖索引如何影响性能或一致性","覆盖索引线上问题怎么排查"], useCases: ["列表查询优化","高频只读查询"], prerequisites: ["secondary-index"], related: ["composite-index","sql-optimization"], order: 31 },
  /* <!-- KG_REVIEWED: 联合索引 | 2026-06-05 | source_count=29 --> */
  /* <!-- KG_EXPLAINED: 联合索引 | 2026-05-23 | source_count=5 --> */
  { sourceRefs: ["mysql-reference","mysql-innodb","xiaolin-mysql","javaguide","cs-notes"], id: "composite-index", zh: "联合索引", en: "Composite Index", area: "index", difficulty: "medium", concept: "联合索引包含多个字段，字段顺序影响过滤、排序和覆盖能力。", explanation: ["核心概念：联合索引（Composite Index）聚焦联合索引包含多个字段，字段顺序影响过滤、排序和覆盖能力。。MySQL 通过 SQL、InnoDB、索引、事务、日志和复制支撑关系型数据读写；理解它时先抓住B+ 树、聚簇索引、二级索引和覆盖索引，再看输入、状态变化、输出结果和失败分支。","适用场景：联合索引常用于多条件查询和排序分页优化。学习时把它放回MySQL链路中观察，并结合前置知识索引判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，联合索引通常会和最左前缀和覆盖索引一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点需要结合流程和指标判断。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认B+ 树、聚簇索引、二级索引和覆盖索引是否仍然成立。","常见误区与注意点：实践中容易把联合索引当成孤立概念处理，结果遗漏回表、最左前缀、范围条件、低选择性和写入成本。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考MySQL 8.4 Reference Manual、InnoDB 官方文档、小林 coding、JavaGuide 和 CS-Notes，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["联合索引执行原理是什么","联合索引如何影响性能或一致性","联合索引线上问题怎么排查"], useCases: ["多条件查询","排序分页优化"], prerequisites: ["mysql-index"], related: ["leftmost-prefix","covering-index"], order: 32 },
  /* <!-- KG_REVIEWED: 最左前缀 | 2026-06-05 | source_count=28 --> */
  /* <!-- KG_EXPLAINED: 最左前缀 | 2026-05-23 | source_count=5 --> */
  { sourceRefs: ["mysql-reference","mysql-innodb","xiaolin-mysql","javaguide","cs-notes"], id: "leftmost-prefix", zh: "最左前缀", en: "Leftmost Prefix", area: "index", difficulty: "medium", concept: "最左前缀原则要求联合索引从最左字段开始连续匹配。", explanation: ["核心概念：最左前缀（Leftmost Prefix）聚焦最左前缀原则要求联合索引从最左字段开始连续匹配。。MySQL 通过 SQL、InnoDB、索引、事务、日志和复制支撑关系型数据读写；理解它时先抓住B+ 树、聚簇索引、二级索引和覆盖索引，再看输入、状态变化、输出结果和失败分支。","适用场景：最左前缀常用于联合索引设计和索引失效排查。学习时把它放回MySQL链路中观察，并结合前置知识联合索引判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，最左前缀通常会和范围查询一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点需要结合流程和指标判断。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认B+ 树、聚簇索引、二级索引和覆盖索引是否仍然成立。","常见误区与注意点：实践中容易把最左前缀当成孤立概念处理，结果遗漏回表、最左前缀、范围条件、低选择性和写入成本。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考MySQL 8.4 Reference Manual、InnoDB 官方文档、小林 coding、JavaGuide 和 CS-Notes，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["最左前缀执行原理是什么","最左前缀如何影响性能或一致性","最左前缀线上问题怎么排查"], useCases: ["联合索引设计","索引失效排查"], prerequisites: ["composite-index"], related: ["range-query"], order: 33 },
  /* <!-- KG_REVIEWED: 范围查询 | 2026-06-05 | source_count=26 --> */
  /* <!-- KG_EXPLAINED: 范围查询 | 2026-05-23 | source_count=5 --> */
  { sourceRefs: ["mysql-reference","mysql-innodb","xiaolin-mysql","javaguide","cs-notes"], id: "range-query", zh: "范围查询", en: "Range Query", area: "index", difficulty: "medium", concept: "范围查询会影响联合索引后续字段的使用，需要结合条件选择性设计索引。", explanation: ["核心概念：范围查询（Range Query）聚焦范围查询会影响联合索引后续字段的使用，需要结合条件选择性设计索引。。MySQL 通过 SQL、InnoDB、索引、事务、日志和复制支撑关系型数据读写；理解它时先抓住B+ 树、聚簇索引、二级索引和覆盖索引，再看输入、状态变化、输出结果和失败分支。","适用场景：范围查询常用于时间范围筛选和价格区间查询。学习时把它放回MySQL链路中观察，并结合前置知识最左前缀判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，范围查询通常会和WHERE 条件和ORDER BY一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点需要结合流程和指标判断。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认B+ 树、聚簇索引、二级索引和覆盖索引是否仍然成立。","常见误区与注意点：实践中容易把范围查询当成孤立概念处理，结果遗漏回表、最左前缀、范围条件、低选择性和写入成本。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考MySQL 8.4 Reference Manual、InnoDB 官方文档、小林 coding、JavaGuide 和 CS-Notes，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["范围查询执行原理是什么","范围查询如何影响性能或一致性","范围查询线上问题怎么排查"], useCases: ["时间范围筛选","价格区间查询"], prerequisites: ["leftmost-prefix"], related: ["where","order-by"], order: 34 },
  /* <!-- KG_REVIEWED: 唯一索引 | 2026-05-24 | source_count=5 --> */
  /* <!-- KG_EXPLAINED: 唯一索引 | 2026-05-23 | source_count=5 --> */
  { sourceRefs: ["mysql-reference","mysql-innodb","xiaolin-mysql","javaguide","cs-notes"], id: "unique-index", zh: "唯一索引", en: "Unique Index", area: "index", difficulty: "easy", concept: "唯一索引保证字段值唯一，同时提供查询加速能力。", explanation: ["核心概念：唯一索引（Unique Index）聚焦唯一索引保证字段值唯一，同时提供查询加速能力。。MySQL 通过 SQL、InnoDB、索引、事务、日志和复制支撑关系型数据读写；理解它时先抓住B+ 树、聚簇索引、二级索引和覆盖索引，再看输入、状态变化、输出结果和失败分支。","适用场景：唯一索引常用于手机号唯一、业务单号唯一和幂等约束。学习时把它放回MySQL链路中观察，并结合前置知识索引判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，唯一索引通常会和主键一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点适合先掌握主流程。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认B+ 树、聚簇索引、二级索引和覆盖索引是否仍然成立。","常见误区与注意点：实践中容易把唯一索引当成孤立概念处理，结果遗漏回表、最左前缀、范围条件、低选择性和写入成本。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考MySQL 8.4 Reference Manual、InnoDB 官方文档、小林 coding、JavaGuide 和 CS-Notes，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["唯一索引执行原理是什么","唯一索引如何影响性能或一致性","唯一索引线上问题怎么排查"], useCases: ["手机号唯一","业务单号唯一","幂等约束"], prerequisites: ["mysql-index"], related: ["primary-key"], order: 35 },
  /* <!-- KG_REVIEWED: 索引选择性 | 2026-05-24 | source_count=5 --> */
  /* <!-- KG_EXPLAINED: 索引选择性 | 2026-05-23 | source_count=5 --> */
  { sourceRefs: ["mysql-reference","mysql-innodb","xiaolin-mysql","javaguide","cs-notes"], id: "index-selectivity", zh: "索引选择性", en: "Index Selectivity", area: "index", difficulty: "medium", concept: "索引选择性表示字段区分度，区分度越高越适合作为索引前导列。", explanation: ["核心概念：索引选择性（Index Selectivity）聚焦索引选择性表示字段区分度，区分度越高越适合作为索引前导列。。MySQL 通过 SQL、InnoDB、索引、事务、日志和复制支撑关系型数据读写；理解它时先抓住B+ 树、聚簇索引、二级索引和覆盖索引，再看输入、状态变化、输出结果和失败分支。","适用场景：索引选择性常用于索引字段排序和低效索引治理。学习时把它放回MySQL链路中观察，并结合前置知识索引判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，索引选择性通常会和联合索引一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点需要结合流程和指标判断。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认B+ 树、聚簇索引、二级索引和覆盖索引是否仍然成立。","常见误区与注意点：实践中容易把索引选择性当成孤立概念处理，结果遗漏回表、最左前缀、范围条件、低选择性和写入成本。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考MySQL 8.4 Reference Manual、InnoDB 官方文档、小林 coding、JavaGuide 和 CS-Notes，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["索引选择性执行原理是什么","索引选择性如何影响性能或一致性","索引选择性线上问题怎么排查"], useCases: ["索引字段排序","低效索引治理"], prerequisites: ["mysql-index"], related: ["composite-index"], order: 36 },
  /* <!-- KG_REVIEWED: 事务 | 2026-06-05 | source_count=19 --> */
  /* <!-- KG_EXPLAINED: 事务 | 2026-05-23 | source_count=5 --> */
  { sourceRefs: ["mysql-reference","mysql-innodb","xiaolin-mysql","javaguide","cs-notes"], id: "transaction", zh: "事务", en: "Transaction", area: "transaction", difficulty: "medium", concept: "事务把多个操作组成一个逻辑单元，保证业务状态正确变化。", explanation: ["核心概念：事务（Transaction）聚焦事务把多个操作组成一个逻辑单元，保证业务状态正确变化。。MySQL 通过 SQL、InnoDB、索引、事务、日志和复制支撑关系型数据读写；理解它时先抓住ACID、隔离级别、MVCC 和 ReadView，再看输入、状态变化、输出结果和失败分支。","适用场景：事务常用于订单支付、库存扣减和资金流水。学习时把它放回MySQL链路中观察，并结合前置知识InnoDB和DML判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，事务通常会和ACID、隔离级别和MVCC一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点需要结合流程和指标判断。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认ACID、隔离级别、MVCC 和 ReadView是否仍然成立。","常见误区与注意点：实践中容易把事务当成孤立概念处理，结果遗漏幻读、脏读、长事务、版本链膨胀和锁等待。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考MySQL 8.4 Reference Manual、InnoDB 官方文档、小林 coding、JavaGuide 和 CS-Notes，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["事务执行原理是什么","事务如何影响性能或一致性","事务线上问题怎么排查"], useCases: ["订单支付","库存扣减","资金流水"], prerequisites: ["innodb","dml"], related: ["acid","isolation-level","mvcc"], order: 37 },
  /* <!-- KG_REVIEWED: ACID | 2026-06-05 | source_count=14 --> */
  /* <!-- KG_EXPLAINED: ACID | 2026-05-23 | source_count=5 --> */
  { sourceRefs: ["mysql-reference","mysql-innodb","xiaolin-mysql","javaguide","cs-notes"], id: "acid", zh: "ACID", en: "ACID", area: "transaction", difficulty: "medium", concept: "ACID 描述事务的原子性、一致性、隔离性和持久性。", explanation: ["核心概念：ACID聚焦ACID 描述事务的原子性、一致性、隔离性和持久性。。MySQL 通过 SQL、InnoDB、索引、事务、日志和复制支撑关系型数据读写；理解它时先抓住ACID、隔离级别、MVCC 和 ReadView，再看输入、状态变化、输出结果和失败分支。","适用场景：ACID常用于事务语义理解和一致性设计。学习时把它放回MySQL链路中观察，并结合前置知识事务判断它解决的具体问题。","特殊场景：在高并发、故障恢复、扩缩容、跨组件协作或线上排障中，ACID通常会和Redo Log和Undo Log一起出现。此时重点看边界条件、顺序约束、资源消耗和异常恢复路径。","边界情况：这个知识点需要结合流程和指标判断。常见边界包括空输入、重复请求、超时、容量上限、权限限制、版本差异和依赖不可用；遇到异常时先确认ACID、隔离级别、MVCC 和 ReadView是否仍然成立。","常见误区与注意点：实践中容易把ACID当成孤立概念处理，结果遗漏幻读、脏读、长事务、版本链膨胀和锁等待。落地时要同时记录配置、指标、日志、链路和回滚手段，用小规模验证确认行为符合预期。","参考来源：本讲解参考MySQL 8.4 Reference Manual、InnoDB 官方文档、小林 coding、JavaGuide 和 CS-Notes，优先采用官方定义、命令语义、工程约束和主流面试资料中的稳定结论。"], typicalProblems: ["ACID执行原理是什么","ACID如何影响性能或一致性","ACID线上问题怎么排查"], useCases: ["事务语义理解","一致性设计"], prerequisites: ["transaction"], related: ["redo-log","undo-log"], order: 38 },
  /* <!-- KG_REVIEWED: 隔离级别 | 2026-06-05 | source_count=15 --> */
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
    sourceRefs: [
      "mysql-innodb-index-types",
      "mysql-primary-key-optimization",
      "mysql-innodb-physical-structure",
      "mysql-innodb-row-format",
      "mysql-innodb-best-practices",
      "mysql-optimizing-innodb-storage-layout",
      "mysql-innodb-buffer-pool",
      "mysql-how-mysql-uses-indexes",
      "mysql-explain-statement",
      "mysql-explain-output",
      "jeremy-cole-innodb-btree",
      "mysql-planetscale-primary-key-data-types",
      "planetscale-uuid-primary-key-mysql",
      "xiaolincoding-mysql-index",
    ],
    concept:
      "聚簇索引是 InnoDB 按主键组织整张表数据的 B+ 树，主键叶子页保存完整行记录，并直接影响查询路径、二级索引体积、写入局部性和线上排障证据。",
    explanation: [
      "概念定位：聚簇索引（Clustered Index）解决的是“表里的行数据按什么顺序组织、从哪里定位、如何和二级索引衔接”的问题。它出现在主键设计、订单详情查询、二级索引回表、深分页优化、随机主键写入抖动、Buffer Pool 命中率下降和大表迁移评审中。\n\n在 InnoDB 中，表数据本身存放在聚簇索引里。主键索引的叶子节点保存完整行记录，二级索引的叶子节点保存二级索引键和主键值。理解聚簇索引以后，才能把“为什么主键要短、稳定、有序”“为什么二级索引会回表”“为什么随机 UUID 写入容易抖动”串成一条工程链路。",
      "准确定义：聚簇索引是 InnoDB 表的数据组织方式，英文通常写作 `clustered index`。\n\n- 有显式 `PRIMARY KEY` 时，InnoDB 使用主键作为聚簇索引。\n- 缺少显式主键时，InnoDB 会选择合适的非空唯一索引；仍然缺少可选索引时，会使用内部隐藏行 ID 组织数据。\n- 聚簇索引叶子节点保存整行记录，非叶子节点保存页内导航需要的键值和指针。\n- 二级索引叶子节点保存二级键和对应主键值，查询整行时再用主键访问聚簇索引。\n- 每张 InnoDB 表只有一套聚簇数据组织，多个二级索引用主键值连接到这套组织。\n\n新手可以先记住：InnoDB 的表是一棵按主键排序的 B+ 树；老手继续关注页、行格式、主键宽度、页分裂、缓存和锁范围。",
      "心智模型：把聚簇索引看成一本按主键排序的档案册。\n\n- 主键目录页负责导航，叶子页就是档案正文，打开叶子页就能看到整行。\n- 二级索引像专题目录，例如按 `user_id` 或 `status` 排序；目录条目会写着主键号。\n- 回表像先查专题目录拿到主键号，再回到主键档案册取完整记录。\n- 主键越短，所有专题目录的条目越轻；主键越随机，新档案越容易插到册子中间。\n- Buffer Pool 像常用页缓存，热点主键范围和热点二级索引页命中率决定大量查询延迟。\n\n这个模型能解释两类常见现象：主键查询通常很直接，非覆盖二级索引查询会多一次聚簇索引访问。",
      "主流程机制：一次读写会沿着聚簇索引、二级索引和页结构推进。\n\n1. 建表时声明 `PRIMARY KEY`，InnoDB 以这个键构造聚簇索引 B+ 树；每个叶子页保存若干完整行记录。\n2. 插入一行时，InnoDB 根据主键定位目标叶子页，把整行写入聚簇索引，同时为每个二级索引写入二级键和主键值。\n3. 主键等值查询时，执行器直接沿聚簇索引从根页、内节点页到叶子页，读取完整行。\n4. 二级索引查询命中非覆盖列时，执行器先从二级索引拿到主键值，再访问聚簇索引叶子页取剩余列。\n5. 更新主键会改变行在聚簇索引中的位置，并牵动二级索引记录；生产系统优先让主键在行生命周期内保持稳定。\n6. 页满后继续插入会触发页分裂或页重组；随机主键更容易把写入分散到多个叶子页，有序主键更容易追加到右侧页。\n7. Buffer Pool 缓存聚簇索引页和二级索引页；查询局部性、主键顺序和返回列宽度共同决定缓存压力。\n\n聚簇索引的输出是一套物理访问路径：主键定位、二级索引回表、页级 I/O、锁定范围和性能证据都围绕它展开。",
      "实践例子：下面用订单表观察聚簇索引和二级索引的区别。\n\n```sql\nCREATE TABLE orders (\n  id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,\n  user_id BIGINT UNSIGNED NOT NULL,\n  status VARCHAR(16) NOT NULL,\n  amount DECIMAL(12,2) NOT NULL,\n  created_at DATETIME NOT NULL,\n  PRIMARY KEY (id),\n  KEY idx_user_created (user_id, created_at, id)\n) ENGINE=InnoDB;\n\n-- 主键查询：直接访问聚簇索引叶子页\nEXPLAIN ANALYZE\nSELECT id, user_id, status, amount, created_at\nFROM orders\nWHERE id = 90001;\n\n-- 二级索引覆盖：需要的列都在 idx_user_created 中\nEXPLAIN ANALYZE\nSELECT id, user_id, created_at\nFROM orders\nWHERE user_id = 1001\nORDER BY created_at DESC\nLIMIT 20;\n\n-- 二级索引回表：amount 不在 idx_user_created 中，需要回到聚簇索引取完整行\nEXPLAIN ANALYZE\nSELECT id, user_id, amount, created_at\nFROM orders\nWHERE user_id = 1001\nORDER BY created_at DESC\nLIMIT 20;\n\nSHOW CREATE TABLE orders\\G\nSHOW INDEX FROM orders;\n```\n\n第一条走主键聚簇索引；第二条可从二级索引拿到全部返回列；第三条每个候选行还要用主键访问聚簇索引。慢 SQL 排查时，`EXPLAIN ANALYZE` 的实际行数、循环次数和耗时能验证这三类路径。",
      "深层细节：聚簇索引把主键选择、页结构、缓存和写入成本连在一起。\n\n- 主键宽度：二级索引叶子会保存主键值，`BIGINT`、`CHAR(36)` UUID、复合主键的体积差异会被所有二级索引放大。\n- 主键顺序：递增或大体有序的主键提高写入局部性；随机主键增加页分裂、随机读写和 Buffer Pool 扰动概率。\n- 行格式：InnoDB 行格式、变长列、长 `VARCHAR`、`BLOB/TEXT` 溢出页会影响叶子页可容纳行数，进而影响树高和 I/O。\n- 二级索引成本：每增加一个二级索引，写入就多一份维护成本；主键越宽，二级索引空间和缓存占用越高。\n- 回表成本：非覆盖二级索引查询的回表次数接近候选行数，深分页、低选择性条件和宽返回列会放大成本。\n- 锁范围：InnoDB 行锁锁在索引记录上，访问路径决定扫描范围，也决定当前读、更新和删除持有的记录锁或 Next-Key Lock 范围。\n- 刷盘和恢复：聚簇索引页被修改后成为脏页，Redo 记录页修改，后台刷盘再把页写回表空间。\n\n经验判断是：高频 OLTP 表优先选择短、稳定、大体有序、业务泄露风险可控的主键，并用覆盖索引减少高频列表回表。",
      "工程场景与取舍：聚簇索引设计通常落在主键方案和查询路径上。\n\n- 自增主键：适合大多数单库 OLTP 表，写入局部性好，排查简单；公开给用户时要评估枚举和业务规模泄露风险。\n- 雪花 ID 或 UUIDv7/ULID：适合分布式生成，保留一定时间有序性，能兼顾跨节点唯一性和索引局部性。\n- 随机 UUID：适合外部不可猜 ID，写入 InnoDB 聚簇索引时要承担更高的页分裂、空间和缓存成本。\n- 复合主键：适合关系明细表和天然联合唯一场景，字段顺序会影响查询、外键、二级索引体积和后续迁移。\n- 业务主键：可读性和幂等性好，稳定性、长度、变更概率和外部泄露风险需要在建模阶段确认。\n- 代理主键加唯一业务键：常用于订单、账户、库存等核心表，用短主键服务 InnoDB 组织，用唯一键服务业务幂等。\n\n主键是存储组织契约，也会影响 API、分片、复制、归档和数据修复。",
      "边界与故障模式：聚簇索引相关问题通常能从 SQL、索引和 InnoDB 证据里看到。\n\n- 随机主键写入抖动：写入延迟升高、页分裂增多、Buffer Pool 命中下降，热点页分散到更多叶子页。\n- 主键过宽：二级索引文件变大，缓存可容纳条目变少，回表和范围扫描的 I/O 压力升高。\n- 缺少显式主键：数据修复、复制、行定位和排障证据变差，部分运维规范会要求所有 InnoDB 表显式声明主键。\n- 低效回表：`Rows_examined` 明显高于 `Rows_sent`，`EXPLAIN` 显示走二级索引但返回列无法覆盖。\n- 深分页放大：二级索引先跳过大量候选，再对宽列回表，慢查询日志和 Performance Schema 能看到扫描行上升。\n- 主键更新：行位置变化并牵动索引维护，容易引入锁等待、写入放大和应用一致性风险。\n- 大表换主键：涉及全表重建、元数据锁、复制延迟、回滚策略和业务写入窗口。\n\n这些故障都可以回到一个核心判断：当前访问路径读取了哪些索引页、哪些聚簇页、多少候选行和多少完整行。",
      "排查实践：聚簇索引类慢 SQL 可以按下面步骤建立证据链。\n\n1. 固化 SQL：记录查询语句、绑定参数、返回列、排序、页码、调用入口和实例角色。\n2. 看表结构：用 `SHOW CREATE TABLE` 确认主键、二级索引、字段宽度、字符集和行格式。\n3. 看索引：用 `SHOW INDEX` 检查二级索引是否包含过滤列、排序列、返回列和主键。\n4. 看计划：用 `EXPLAIN FORMAT=TREE` 与 `EXPLAIN ANALYZE` 观察访问路径、实际行数、回表迹象和耗时。\n5. 看语句统计：用 Performance Schema 汇总 `ROWS_EXAMINED`、`ROWS_SENT`、排序、临时表和总耗时。\n6. 看 InnoDB 状态：观察 Buffer Pool、I/O、锁等待、死锁和脏页刷盘压力。\n7. 小步修复：缩窄返回列、补覆盖索引、改主键方案、限制深分页、分批迁移或重建索引，并用同一批参数复测。\n\n```sql\nSHOW CREATE TABLE orders\\G\nSHOW INDEX FROM orders;\n\nEXPLAIN FORMAT=TREE\nSELECT id, user_id, amount, created_at\nFROM orders\nWHERE user_id = 1001\nORDER BY created_at DESC\nLIMIT 20 OFFSET 100000;\n\nEXPLAIN ANALYZE\nSELECT id, user_id, amount, created_at\nFROM orders\nWHERE user_id = 1001\nORDER BY created_at DESC\nLIMIT 20 OFFSET 100000;\n\nSELECT DIGEST_TEXT, COUNT_STAR, SUM_ROWS_EXAMINED, SUM_ROWS_SENT, SUM_TIMER_WAIT\nFROM performance_schema.events_statements_summary_by_digest\nWHERE DIGEST_TEXT LIKE 'SELECT%ORDERS%'\nORDER BY SUM_TIMER_WAIT DESC\nLIMIT 10;\n\nSHOW ENGINE INNODB STATUS\\G\nSHOW GLOBAL STATUS LIKE 'Innodb_buffer_pool%';\n```\n\n修复有效时，常见表现是实际扫描行下降、回表减少、Buffer Pool 压力下降、p95/p99 延迟收敛。",
      "常见误区：聚簇索引的正确心智模型来自 InnoDB 的表组织事实。\n\n- InnoDB 表数据保存在聚簇索引叶子页中，主键索引就是完整行的主要入口。\n- 二级索引保存主键值，回表成本和主键宽度、候选行数、返回列有关。\n- 主键设计会影响所有二级索引的空间、缓存命中、写入局部性和排障体验。\n- 随机主键的成本主要体现在页分裂、随机 I/O、缓存扰动和索引空间上。\n- 覆盖索引能减少回表，新增索引也会增加写入维护、存储和复制成本。\n- 大表调整主键属于高风险结构变更，需要在线 DDL 策略、影子表方案、复制监控和回滚预案。",
      "面试追问：聚簇索引题适合按“定义 -> 组织 -> 路径 -> 成本 -> 排障 -> 取舍”回答。\n\n- 什么是 InnoDB 聚簇索引，它和主键是什么关系？\n- InnoDB 缺少显式主键时会怎样组织表数据？\n- 聚簇索引和二级索引的叶子节点分别保存什么？\n- 为什么二级索引查询可能需要回表，覆盖索引如何减少回表？\n- 主键长度为什么会影响所有二级索引的体积？\n- 自增 ID、随机 UUID、雪花 ID、复合主键作为聚簇索引键分别有什么取舍？\n- 随机主键为什么可能导致页分裂和 Buffer Pool 扰动？\n- 如何用 `EXPLAIN ANALYZE`、慢查询日志和 Performance Schema 判断回表过多？\n- 更新主键和大表更换主键有哪些线上风险？\n- 聚簇索引、B+ 树、页、Buffer Pool、行锁之间如何串成一次查询或更新链路？",
      "参考来源：本讲解主要参考 MySQL 8.4 Reference Manual 的 Clustered and Secondary Indexes、Primary Key Optimization、InnoDB Row Formats and Physical Structure、InnoDB Row Formats、Best Practices for InnoDB Tables、Optimizing Storage Layout for InnoDB Tables、InnoDB Buffer Pool、How MySQL Uses Indexes、EXPLAIN 文档，并结合 Jeremy Cole 的 InnoDB B+Tree 结构文章、PlanetScale 的主键类型和 UUID 主键工程文章、小林 coding 的 MySQL 索引讲解进行表达校准。官方资料用于定义、表组织、行格式、索引路径和观测命令，工程资料用于补充随机主键、页分裂、回表和面试表达。"
    ],
    typicalProblems: [
      "聚簇索引解决什么问题，为什么说 InnoDB 表数据按主键组织？",
      "聚簇索引和二级索引的叶子节点分别保存什么，回表路径如何发生？",
      "InnoDB 表缺少显式主键时会选择什么作为聚簇索引键？",
      "主键宽度为什么会放大所有二级索引的空间和缓存成本？",
      "自增主键、随机 UUID、雪花 ID、复合主键分别适合哪些场景？",
      "随机主键为什么可能增加页分裂、随机 I/O 和 Buffer Pool 扰动？",
      "如何用覆盖索引、延迟关联和返回列收敛来降低回表成本？",
      "主键更新、大表换主键和在线 DDL 会带来哪些锁、复制和回滚风险？",
      "如何通过 `EXPLAIN ANALYZE`、Performance Schema、慢查询日志和 InnoDB 状态排查聚簇索引相关慢 SQL？",
      "聚簇索引如何影响行锁范围、深分页、分库分表 ID 设计和生产排障？"
    ],
    commonCommands: [
      "SHOW CREATE TABLE <table>\\G",
      "SHOW INDEX FROM <table>",
      "EXPLAIN FORMAT=TREE <sql>",
      "EXPLAIN ANALYZE <sql>",
      "SELECT DIGEST_TEXT, COUNT_STAR, SUM_ROWS_EXAMINED, SUM_ROWS_SENT, SUM_TIMER_WAIT FROM performance_schema.events_statements_summary_by_digest ORDER BY SUM_TIMER_WAIT DESC LIMIT 10",
      "SHOW ENGINE INNODB STATUS\\G",
      "SHOW GLOBAL STATUS LIKE 'Innodb_buffer_pool%'"
    ],
    useCases: [
      "主键查询",
      "表数据组织理解",
      "二级索引回表分析",
      "主键方案评审",
      "随机主键写入调优",
      "深分页优化",
      "慢 SQL 排查",
      "大表结构迁移"
    ],
    prerequisites: ["innodb", "primary-key"],
    related: ["b-plus-tree", "secondary-index", "back-to-table", "covering-index", "primary-key", "page", "buffer-pool", "sql-optimization"],
  },
  "buffer-pool": {
    sourceRefs: [
      "mysql-innodb",
      "mysql-innodb-architecture",
      "mysql-innodb-buffer-pool",
      "mysql-innodb-buffer-pool-resize",
      "mysql-innodb-buffer-pool-flushing",
      "mysql-innodb-performance-midpoint-insertion",
      "mysql-innodb-performance-read-ahead",
      "mysql-innodb-preload-buffer-pool",
      "mysql-information-schema-innodb-buffer-pool-stats",
      "mysql-innodb-physical-structure",
      "mysql-innodb-index-types",
      "mysql-innodb-checkpoints",
      "mysql-innodb-change-buffer",
      "mysql-innodb-redo-log",
      "mysql-show-engine",
      "mysql-performance-schema",
      "mysql-slow-query-log",
      "xiaolin-mysql",
      "cs-notes",
    ],
    concept:
      "Buffer Pool 是 InnoDB 缓存数据页和索引页的核心内存区域，决定热点读命中、脏页刷盘、预读、缓存污染控制和数据库冷启动表现。",
    explanation: [
      "概念定位：Buffer Pool 解决的是“磁盘上的 InnoDB 页怎样以更低延迟、更高吞吐服务在线读写”的问题。它常出现在慢 SQL 排查、数据库内存配置、热点表访问、全表扫描污染、脏页刷盘抖动、实例重启预热、读 I/O 激增和写入峰值治理中。\n\nInnoDB 的表和索引都按页组织，默认页大小常见为 16KB。查询读取索引页和数据页，写入修改内存页并产生 Redo，后台线程再把脏页写回磁盘。Buffer Pool 就是这条路径里的主工作区：热点页留在内存，冷页被淘汰，脏页按检查点和刷盘压力回写。理解 Buffer Pool 后，MySQL 性能排查会从“数据库慢”变成“哪些页、哪些 SQL、哪些刷盘和哪些缓存行为在变慢”。",
      "准确定义：Buffer Pool 是 InnoDB 用来缓存表数据页、索引页和部分内部页的内存区域，英文通常写作 `InnoDB Buffer Pool`。\n\n- `page`：InnoDB 在磁盘与内存之间移动的基本单位，表和索引访问都落到页。\n- `buffer frame`：Buffer Pool 中容纳一个页的内存槽位。\n- `free list`：当前可直接接收新页的空闲 frame 列表。\n- `LRU list`：按冷热管理已缓存页的列表，MySQL 使用 young/old 分段降低大扫描污染热点页的风险。\n- `flush list`：按修改历史组织的脏页列表，后台刷盘和 Checkpoint 推进会消费它。\n- `dirty page`：内存中已被修改、磁盘中旧版本仍待更新的页。\n- `read-ahead`：InnoDB 判断顺序访问趋势后提前把相邻页读入 Buffer Pool。\n- `buffer pool dump/load`：保存和恢复热点页标识，让实例重启后更快预热。\n\n新手可以先记住：Buffer Pool 是 InnoDB 的页缓存；老手继续关注缓存命中率、LRU 污染、脏页比例、刷盘节奏、NUMA/内存压力和恢复窗口。",
      "心智模型：把 Buffer Pool 看成数据库机房里的热页货架。\n\n- 磁盘是仓库，所有表页和索引页最终都在那里。\n- Buffer Pool 是前台货架，最近和高频访问的页放在这里。\n- Free list 像空货位，新读入的页先找空位。\n- LRU list 像热度队列，常访问的页靠前，冷页靠后，old 区承接大扫描带来的临时页。\n- Flush list 像待回仓清单，记录已经修改但尚未写回磁盘的页。\n- Redo Log 像修改凭证，脏页可以晚些写回，崩溃后仍能用日志恢复。\n\n这个模型能解释一个常见现象：同一条 SQL 在热缓存下毫秒返回，在冷缓存或缓存被报表扫描污染后可能出现明显 I/O 延迟。",
      "主流程机制：一次页访问会沿着命中、缺页、淘汰和刷盘链路推进。\n\n1. 执行器通过 InnoDB 访问聚簇索引或二级索引，先判断目标页是否已经在 Buffer Pool。\n2. 命中时，线程直接读取内存页；页会根据访问规则在 LRU list 中调整位置，并受 midpoint insertion 策略保护。\n3. 缺页时，InnoDB 从磁盘读取页到空闲 frame；free list 紧张时，从 LRU 尾部选择可淘汰页。\n4. 被淘汰页如果是干净页，可以直接释放 frame；如果是脏页，需要先刷盘，再释放 frame。\n5. 写入修改 Buffer Pool 中的页，生成 Undo 和 Redo；页成为脏页并进入 flush list。\n6. 后台刷盘线程根据脏页比例、LRU 需求、Checkpoint 年龄和 I/O 能力把脏页写回表空间。\n7. 实例关闭或重启时，可以 dump/load Buffer Pool 中的热点页标识，减少冷启动后的随机读压力。\n\n这条链路的输出是可观测的：逻辑读、物理读、脏页、LRU 淘汰、预读、fsync、Checkpoint 和慢 SQL 指标会一起变化。",
      "实践例子：下面用订单表观察 Buffer Pool 对查询和写入的影响。\n\n```sql\nCREATE TABLE orders (\n  id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,\n  user_id BIGINT UNSIGNED NOT NULL,\n  status VARCHAR(16) NOT NULL,\n  amount DECIMAL(12,2) NOT NULL,\n  created_at DATETIME NOT NULL,\n  PRIMARY KEY (id),\n  KEY idx_user_created (user_id, created_at, id)\n) ENGINE=InnoDB;\n\n-- 高频列表：通常希望 idx_user_created 和相关聚簇页保持热\nEXPLAIN ANALYZE\nSELECT id, amount, created_at\nFROM orders\nWHERE user_id = 1001\nORDER BY created_at DESC\nLIMIT 20;\n\n-- 宽范围扫描：可能把大量低复用页带入 Buffer Pool\nEXPLAIN ANALYZE\nSELECT SUM(amount)\nFROM orders\nWHERE created_at >= '2026-06-01'\n  AND created_at <  '2026-07-01';\n\nSHOW GLOBAL STATUS LIKE 'Innodb_buffer_pool_read%';\nSHOW GLOBAL STATUS LIKE 'Innodb_buffer_pool_pages%';\nSHOW VARIABLES LIKE 'innodb_buffer_pool_size';\nSHOW VARIABLES LIKE 'innodb_old_blocks%';\n```\n\n第一条查询的健康状态是少量索引页和数据页反复命中；第二条查询会读取较宽时间范围，适合放到只读副本、离线任务或更精确的分区/索引路径中评估。",
      "深层细节：Buffer Pool 的性能来自缓存策略和刷盘策略共同作用。\n\n- young/old 分段 LRU：新读入的页先进入 old 区，短时间内再次访问才进入 young 区；`innodb_old_blocks_pct` 和 `innodb_old_blocks_time` 用来控制 old 区比例和晋升等待时间。\n- scan resistance：大表扫描、备份校验或报表查询会读入大量低复用页，old 区能吸收这类页，保护热点页留在 young 区。\n- 预读机制：线性预读和随机预读会提前加载可能被访问的页，顺序扫描受益，误判时会增加无效 I/O 和缓存压力。\n- 脏页刷盘：`innodb_max_dirty_pages_pct`、`innodb_lru_scan_depth`、Checkpoint 年龄和存储 I/O 能力共同影响刷盘节奏。\n- Change Buffer：普通二级索引变更可以先缓存在 change buffer，后续读到相关页时合并，降低部分随机写页读取。\n- 读写耦合：读路径需要空闲 frame，写路径制造脏页；刷盘跟不上时，读缺页、写入提交和后台 I/O 都会互相影响。\n- 热点集大小：工作集超过 Buffer Pool 时，物理读持续增加；新增索引、宽主键、宽行和低选择性扫描都会压缩可缓存的有效业务页。\n- 在线调整：MySQL 支持在线调整 `innodb_buffer_pool_size`，生产变更仍要观察操作系统内存、swap、NUMA、容器限制和实例并发。\n\n经验判断是：Buffer Pool 调优先收集工作集、命中率、脏页和 I/O 证据，再决定加内存、改 SQL、补索引、拆负载或调整刷盘参数。",
      "工程场景与取舍：Buffer Pool 设计要和实例角色、负载形态和恢复目标匹配。\n\n- OLTP 主库：优先保障热点索引页和数据页命中，控制报表扫描、批量导出和大范围修复任务。\n- 只读副本：可承接报表和导出，仍要评估缓存污染、复制 SQL 线程、临时表和磁盘 I/O。\n- 写入高峰：观察脏页比例、Redo 写入、Checkpoint 推进和存储延迟，避免刷盘追赶造成延迟抖动。\n- 实例重启：开启 Buffer Pool dump/load 能保存热点页信息，减少重启后的冷缓存冲击。\n- 内存配置：Buffer Pool 通常是 MySQL 实例最大内存消费者，还要给连接、排序、临时表、Redo、操作系统页缓存和监控代理留空间。\n- 云数据库：参数组、实例规格、存储 IOPS 和自动重启策略会限制可调范围，变更前要确认平台文档与回滚窗口。\n\nBuffer Pool 的目标是让高价值页稳定驻留，把低价值扫描和突发写入的影响控制在可恢复范围内。",
      "边界与故障模式：Buffer Pool 问题通常会在指标、SQL 和 I/O 三处同时留下证据。\n\n- 命中率下降：`Innodb_buffer_pool_reads` 相对 `Innodb_buffer_pool_read_requests` 增长，磁盘读、p95/p99 延迟和 CPU 等待上升。\n- 缓存污染：大范围查询后热点接口变慢，old 区、LRU 淘汰、物理读和慢查询时间窗口能对上。\n- 脏页积压：`Innodb_buffer_pool_pages_dirty` 升高，Checkpoint 推进变慢，写入延迟和后台 I/O 抖动增加。\n- 空闲页紧张：free pages 长期很低，LRU 扫描和脏页刷盘被迫参与前台读缺页路径。\n- 预读误判：预读页大量进入 Buffer Pool 后复用低，物理 I/O 增加，热点命中受到挤压。\n- 冷启动：实例重启、故障切换或扩容后热点页丢失，短时间内物理读和延迟升高。\n- 内存压力：Buffer Pool 配置过大可能挤压 OS、连接线程、临时内存和容器限制，表现为 swap、OOM 或系统级延迟抖动。\n- 参数误调：过度追求高脏页比例会增加恢复窗口和刷盘尖峰，过度刷盘会浪费 I/O 并降低写入吞吐。\n\n排障时把这些现象放到同一时间线，才能区分 SQL 访问路径问题、容量问题和刷盘问题。",
      "排查实践：Buffer Pool 相关慢查询或 I/O 抖动建议按固定证据链定位。\n\n1. 固化时间窗口：记录慢接口、SQL 样本、QPS、p95/p99、实例角色、重启/发布/报表任务和存储 I/O。\n2. 看逻辑读与物理读：比较 `Innodb_buffer_pool_read_requests` 和 `Innodb_buffer_pool_reads`，判断缺页读是否升高。\n3. 看页状态：检查 total/free/data/dirty pages，确认工作集、空闲页和脏页压力。\n4. 看 SQL 来源：用慢查询日志、Performance Schema 和 `EXPLAIN ANALYZE` 找出扫描行、返回行、索引和回表行为。\n5. 看 InnoDB 状态：用 `SHOW ENGINE INNODB STATUS\\G` 观察 Buffer Pool、I/O、Pending reads/writes、LRU 和 flush 信息。\n6. 看配置边界：确认 `innodb_buffer_pool_size`、`innodb_old_blocks_pct`、`innodb_old_blocks_time`、`innodb_max_dirty_pages_pct`、`innodb_lru_scan_depth` 和 dump/load 配置。\n7. 小步修复：收窄 SQL、补覆盖索引、限制导出、迁移报表到副本、增加内存、调整刷盘或预热策略，并用同一组指标复测。\n\n```sql\nSHOW ENGINE INNODB STATUS\\G\n\nSHOW GLOBAL STATUS LIKE 'Innodb_buffer_pool_read%';\nSHOW GLOBAL STATUS LIKE 'Innodb_buffer_pool_pages%';\nSHOW GLOBAL STATUS LIKE 'Innodb_data%';\n\nSHOW VARIABLES LIKE 'innodb_buffer_pool_size';\nSHOW VARIABLES LIKE 'innodb_old_blocks%';\nSHOW VARIABLES LIKE 'innodb_max_dirty_pages_pct';\nSHOW VARIABLES LIKE 'innodb_lru_scan_depth';\nSHOW VARIABLES LIKE 'innodb_buffer_pool_dump%';\nSHOW VARIABLES LIKE 'innodb_buffer_pool_load%';\n\nSELECT POOL_ID, POOL_SIZE, FREE_BUFFERS, DATABASE_PAGES, OLD_DATABASE_PAGES,\n       MODIFIED_DATABASE_PAGES, PENDING_READS, PENDING_FLUSH_LRU,\n       PENDING_FLUSH_LIST, PAGES_MADE_YOUNG, PAGES_NOT_MADE_YOUNG,\n       PAGES_READ, PAGES_CREATED, PAGES_WRITTEN\nFROM information_schema.INNODB_BUFFER_POOL_STATS\\G\n\nSELECT DIGEST_TEXT, COUNT_STAR, SUM_ROWS_EXAMINED, SUM_ROWS_SENT, SUM_TIMER_WAIT\nFROM performance_schema.events_statements_summary_by_digest\nORDER BY SUM_TIMER_WAIT DESC\nLIMIT 10;\n```\n\n有效修复会体现为物理读下降、热点 SQL 延迟收敛、脏页比例平稳、存储 I/O 队列降低和重启后预热时间可预测。",
      "指标与配置速查：Buffer Pool 指标要组合解读。\n\n- `Innodb_buffer_pool_read_requests`：逻辑读请求，代表从 Buffer Pool 读取页的请求规模。\n- `Innodb_buffer_pool_reads`：需要从磁盘读取的页数，持续升高通常指向缺页或缓存污染。\n- `Innodb_buffer_pool_pages_total`：Buffer Pool 总页数，可结合页大小估算容量。\n- `Innodb_buffer_pool_pages_free`：空闲页数量，长期很低时要结合 LRU 和脏页判断压力。\n- `Innodb_buffer_pool_pages_dirty`：脏页数量，影响刷盘压力和恢复窗口。\n- `INNODB_BUFFER_POOL_STATS`：能按 pool 查看 free、old、modified、pending flush/read 和 made young 等更细指标。\n- `innodb_buffer_pool_size`：Buffer Pool 总容量，通常按实例内存和负载预算设置。\n- `innodb_old_blocks_pct`、`innodb_old_blocks_time`：控制 old 区大小和页晋升，适合治理扫描污染。\n- `innodb_max_dirty_pages_pct`、`innodb_lru_scan_depth`：影响刷盘节奏和 LRU 可用页补充。\n- `innodb_buffer_pool_dump_at_shutdown`、`innodb_buffer_pool_load_at_startup`：控制关闭保存和启动加载热点页标识。\n\n命中率可以用 `1 - Innodb_buffer_pool_reads / Innodb_buffer_pool_read_requests` 粗略估算，生产判断还要结合 SQL 访问路径、工作集变化、存储延迟和冷启动状态。",
      "常见误区：Buffer Pool 的正确理解来自页级访问路径。\n\n- Buffer Pool 缓存的是 InnoDB 页，索引页和数据页都会竞争同一类内存预算。\n- 命中率高代表多数页读来自内存，慢 SQL 仍然可能来自锁等待、排序、临时表、CPU 或网络返回。\n- 大范围扫描的代价包括 I/O、CPU、回表、排序和缓存扰动，治理重点是限制工作量和隔离负载。\n- 脏页是正常写入路径的一部分，关键是刷盘节奏、Checkpoint 和恢复窗口保持可控。\n- Buffer Pool 越大，冷启动预热、恢复演练、内存碎片和实例迁移也需要纳入运维计划。\n- 调整内存参数前先确认操作系统和容器边界，避免数据库内存扩大后挤压其他必要内存。",
      "面试追问：Buffer Pool 题适合按“定义 -> 页访问 -> 缓存策略 -> 刷盘 -> 证据 -> 取舍”回答。\n\n- Buffer Pool 解决什么问题，缓存的对象是什么？\n- InnoDB 读取一个索引页时，Buffer Pool 命中和缺页分别会发生什么？\n- Free list、LRU list、flush list 分别解决什么管理问题？\n- young/old 分段 LRU 为什么能降低大表扫描污染？\n- 脏页如何产生，后台刷盘、Checkpoint 和 Redo Log 之间有什么关系？\n- `Innodb_buffer_pool_read_requests` 与 `Innodb_buffer_pool_reads` 如何用于判断物理读压力？\n- 为什么同一条 SQL 在冷缓存和热缓存下延迟差异很大？\n- Buffer Pool 配置过小、过大分别会带来哪些线上表现？\n- 报表查询、备份扫描、批量修复如何影响 Buffer Pool，生产中怎样隔离？\n- 如何设计一次 Buffer Pool 命中率下降或脏页积压的排查路径？",
      "参考来源：本讲解主要参考 MySQL 8.4 Reference Manual 的 InnoDB Storage Engine、Architecture、Buffer Pool、Online Buffer Pool Resizing、Buffer Pool Flushing、Midpoint Insertion、Read-Ahead、Buffer Pool Dump/Load、INNODB_BUFFER_POOL_STATS、Physical Structure、Clustered and Secondary Indexes、Checkpoints、Change Buffer、Redo Log、SHOW ENGINE、Performance Schema 和 Slow Query Log 文档，并结合小林 coding、CS-Notes 的 MySQL 学习资料校准中文表达。官方资料用于定义、列表结构、参数、状态变量和观测表，中文资料用于补充学习路径、面试问法和工程化表达。"
    ],
    typicalProblems: [
      "Buffer Pool 解决什么问题，为什么 InnoDB 以页为单位缓存数据和索引？",
      "一次 SELECT 命中 Buffer Pool 与发生缺页读取时，执行路径分别怎样变化？",
      "Free list、LRU list、flush list、dirty page 分别承担什么职责？",
      "MySQL 的 young/old 分段 LRU 如何缓解大表扫描造成的缓存污染？",
      "预读、Change Buffer、脏页刷盘和 Checkpoint 如何共同影响读写延迟？",
      "如何用 `Innodb_buffer_pool_read_requests`、`Innodb_buffer_pool_reads`、dirty pages 和 `INNODB_BUFFER_POOL_STATS` 判断缓存健康度？",
      "同一条慢 SQL 如何区分索引问题、冷缓存问题、缓存污染问题和刷盘压力问题？",
      "`innodb_buffer_pool_size`、`innodb_old_blocks_pct`、`innodb_old_blocks_time`、`innodb_max_dirty_pages_pct` 各自影响什么？",
      "数据库重启或故障切换后，Buffer Pool dump/load 如何降低冷启动影响？",
      "生产环境如何在内存占用、热点命中、写入吞吐、恢复时间和报表隔离之间做取舍？"
    ],
    commonCommands: [
      "SHOW ENGINE INNODB STATUS\\G",
      "SHOW GLOBAL STATUS LIKE 'Innodb_buffer_pool_read%'",
      "SHOW GLOBAL STATUS LIKE 'Innodb_buffer_pool_pages%'",
      "SHOW VARIABLES LIKE 'innodb_buffer_pool_size'",
      "SHOW VARIABLES LIKE 'innodb_old_blocks%'",
      "SHOW VARIABLES LIKE 'innodb_max_dirty_pages_pct'",
      "SHOW VARIABLES LIKE 'innodb_lru_scan_depth'",
      "SHOW VARIABLES LIKE 'innodb_buffer_pool_dump%'",
      "SHOW VARIABLES LIKE 'innodb_buffer_pool_load%'",
      "SELECT * FROM information_schema.INNODB_BUFFER_POOL_STATS\\G",
      "SELECT DIGEST_TEXT, COUNT_STAR, SUM_ROWS_EXAMINED, SUM_ROWS_SENT, SUM_TIMER_WAIT FROM performance_schema.events_statements_summary_by_digest ORDER BY SUM_TIMER_WAIT DESC LIMIT 10",
      "EXPLAIN ANALYZE <sql>"
    ],
    useCases: [
      "慢 SQL 排查",
      "数据库内存配置",
      "热点数据缓存",
      "大表扫描治理",
      "脏页刷盘调优",
      "实例重启预热",
      "读 I/O 压力分析",
      "报表负载隔离"
    ],
    prerequisites: ["innodb"],
    related: ["page", "dirty-page", "checkpoint", "redo-log", "clustered-index", "mysql-index", "sql-optimization", "slow-query-log"],
  },
  "mysql-index": {
    sourceRefs: [
      "mysql-how-mysql-uses-indexes",
      "mysql-column-indexes",
      "mysql-multiple-column-indexes",
      "mysql-innodb-index-types",
      "mysql-innodb-physical-structure",
      "mysql-innodb-best-practices",
      "mysql-optimizing-innodb-storage-layout",
      "mysql-range-optimization",
      "mysql-index-condition-pushdown",
      "mysql-order-by-optimization",
      "mysql-optimizer-statistics",
      "mysql-analyze-table",
      "mysql-invisible-indexes",
      "mysql-verifying-index-usage",
      "mysql-explain-statement",
      "mysql-explain-output",
      "mysql-slow-query-log",
      "mysql-performance-schema-statement-tables",
      "xiaolincoding-mysql-index",
      "javaguide-mysql-index",
      "solarwinds-mysql-indexes",
    ],
    concept:
      "索引是 MySQL 为加速定位、过滤、排序和约束检查而维护的辅助数据结构；它把读路径从大范围扫描收窄为有序查找，同时增加写入、存储和优化器维护成本。",
    explanation: [
      "概念定位：索引（Index）解决的是“数据库怎样在大量行中快速找到目标数据”的问题。它常出现在详情查询、列表筛选、排序分页、唯一约束、JOIN、慢 SQL 排查、线上锁等待、写入抖动和容量评审中。\n\n从 SQL 层看，索引给优化器提供候选访问路径，让查询可以用 `ref`、`range`、`index` 等方式访问表。从 InnoDB 层看，常见索引是 B+ 树：主键索引叶子保存完整行，二级索引叶子保存索引列和主键值。索引的价值来自减少扫描、回表、排序和锁范围；索引的成本来自额外页、写入维护、统计信息漂移、Buffer Pool 占用和变更发布风险。",
      "准确定义：MySQL 索引是一组按键值组织的数据结构，用来帮助服务器快速查找行、减少比较、辅助排序和维护唯一性。常见类型和术语如下。\n\n- `PRIMARY KEY`：主键索引，在 InnoDB 中也是聚簇索引（clustered index），叶子节点保存完整行。\n- `Secondary Index`：二级索引，叶子节点保存二级索引键和主键值，查询需要更多列时会回到主键索引取整行。\n- `Composite Index`：联合索引，按多个列依次排序，字段顺序决定可定位前缀、排序能力和覆盖能力。\n- `Covering Index`：覆盖索引，查询需要的列都能从索引读取，减少回表。\n- `Unique Index`：唯一索引，既可加速查找，也可维护唯一约束。\n- `Index Condition Pushdown`：索引条件下推，让存储引擎在索引扫描阶段过滤更多候选记录。\n- `Optimizer Statistics`：优化器统计信息，影响索引选择、扫描行数估算和执行计划稳定性。",
      "心智模型：把索引看成按不同维度排好的目录。\n\n- 主键目录按 `id` 排序，目录页最终就是完整货物记录。\n- 二级目录按 `user_id`、`status`、`created_at` 等字段排序，目录项记录目标货物的主键编号。\n- 联合目录像多级字典，先按第一列排序，再在相同第一列内按第二列排序，继续向后排列。\n- 覆盖目录把查询需要的字段也放进目录页，高频列表可以直接从目录返回。\n- 优化器像调度员，会根据目录顺序、数据分布、成本估算和 SQL 条件选择一条路径。\n\n这个模型能解释两个核心现象：索引适合高选择性和有序访问；索引数量和字段宽度会被每次写入、缓存和备份持续支付成本。",
      "主流程机制：一条带索引条件的查询会经历语义解析、路径选择和页访问。\n\n1. SQL 层解析 `WHERE`、`JOIN`、`ORDER BY`、`GROUP BY` 和返回列，识别可能使用的索引。\n2. 优化器读取统计信息，估算候选行数、回表成本、排序成本、临时表成本和不同索引路径的总代价。\n3. 选定索引后，执行器调用 InnoDB 访问 B+ 树，从根页、中间页一路定位到叶子页。\n4. 等值查询把搜索范围缩到具体键值；范围查询在叶子链表上按边界顺序扫描。\n5. 二级索引命中后，如果返回列被覆盖，直接返回索引中的字段；如果需要更多列，用主键值回到聚簇索引读取整行。\n6. ICP 能在索引扫描时继续判断索引列条件，减少回表候选。\n7. `EXPLAIN`、`EXPLAIN ANALYZE`、慢查询日志和 Performance Schema 记录索引选择、估算行数、实际耗时和扫描证据。\n\n索引优化的目标是让高频 SQL 的候选行数、回表次数、排序成本和锁范围都保持可解释、可验证、可回滚。",
      "实践例子：下面用订单列表展示索引如何同时服务过滤、排序和覆盖。\n\n```sql\nCREATE TABLE orders (\n  id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,\n  user_id BIGINT UNSIGNED NOT NULL,\n  status VARCHAR(16) NOT NULL,\n  amount DECIMAL(12,2) NOT NULL,\n  created_at DATETIME NOT NULL,\n  updated_at DATETIME NOT NULL,\n  PRIMARY KEY (id),\n  KEY idx_user_status_created_id (user_id, status, created_at, id),\n  KEY idx_status_created (status, created_at)\n) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;\n\nEXPLAIN ANALYZE\nSELECT id, amount, created_at\nFROM orders\nWHERE user_id = 1001\n  AND status = 'PAID'\n  AND created_at >= '2026-06-01 00:00:00'\n  AND created_at <  '2026-07-01 00:00:00'\nORDER BY created_at DESC, id DESC\nLIMIT 20;\n\nEXPLAIN FORMAT=TREE\nSELECT id\nFROM orders\nWHERE status = 'PAID'\nORDER BY created_at DESC\nLIMIT 20;\n```\n\n`idx_user_status_created_id` 的前两列服务等值过滤，`created_at` 服务范围和排序，`id` 让排序稳定并辅助覆盖。第二条 SQL 使用 `idx_status_created` 时，要结合状态字段选择性和返回量判断收益；低基数字段单独建索引的价值来自它和时间、租户、用户或排序列组合后的访问路径。",
      "深层细节：索引性能取决于 B+ 树结构、字段顺序、数据分布和优化器判断共同作用。\n\n- B+ 树页：InnoDB 表和索引按页组织，页大小、行宽、主键宽度和索引字段宽度会影响树高度、Buffer Pool 命中和随机 I/O。\n- 聚簇索引：主键叶子保存完整行，主键短且大体有序时，二级索引体积、回表成本和页分裂压力更可控。\n- 二级索引：二级索引叶子保存主键值，长主键会放大所有二级索引；查询列被索引覆盖时可减少回表。\n- 联合索引顺序：等值条件、范围条件、排序列和返回列要围绕高频 SQL 设计，字段顺序决定可定位范围和有序输出能力。\n- 选择性：高区分度列通常更适合作为前导列；低基数字段可与租户、用户、时间、状态机条件组合使用。\n- 条件写法：函数包裹列、隐式转换、前置通配符和跨列 `OR` 会降低可定位性，参数类型和字段类型要一致。\n- 统计信息：`ANALYZE TABLE` 能刷新统计信息，数据分布变化、热点参数和版本升级都可能改变执行计划。\n- 不可见索引：Invisible Index 可以让索引继续维护但默认对优化器不可见，适合评估删除索引或验证计划影响。\n- 写入放大：每个 `INSERT`、`UPDATE`、`DELETE` 都要维护相关索引页、Redo、Undo 和锁，索引越多，写入和在线 DDL 成本越高。\n\n老手评审索引时会同时问：这条索引服务哪些 SQL，能减少多少候选行，是否覆盖，是否支撑排序，写入成本多大，删除或回滚路径是否清楚。",
      "工程场景与取舍：索引设计要围绕真实访问模式展开。\n\n- 详情查询：主键或唯一索引让单行定位稳定，适合订单详情、用户详情和幂等校验。\n- 列表分页：联合索引把租户、用户、状态、时间和稳定排序键组织到同一条有序路径，适合游标分页。\n- JOIN：驱动表过滤后，被驱动表关联列需要合适索引，减少嵌套循环中的重复扫描。\n- 排序聚合：索引顺序可减少 `filesort` 和临时表，字段顺序要和 `WHERE`、`ORDER BY`、`GROUP BY` 同时评估。\n- 覆盖查询：高频只读接口可以把返回列放入联合索引，换取更低回表成本和更高缓存效率。\n- 唯一约束：业务单号、手机号、租户内名称等用唯一索引表达约束，同时服务查找和幂等。\n- 大表变更：新增索引会占用 I/O、CPU、临时空间和元数据锁窗口，生产发布要控制时间、监控、回滚和副本延迟。\n- 索引治理：长期未用、重复、前缀重叠和低收益索引会拖慢写入，治理要基于观测数据和灰度验证。",
      "边界与故障模式：索引问题通常表现为慢查询、计划漂移、锁范围扩大和写入变慢。\n\n- 索引缺失：`type=ALL`、扫描行数大、慢日志 `Rows_examined` 高，接口延迟和磁盘读上升。\n- 索引失效：隐式转换、函数包裹列、字符集/排序规则差异、前置 `%LIKE`、跨列 `OR` 会让可定位范围变宽。\n- 回表过多：二级索引筛出大量候选行，再回聚簇索引读取整行，Buffer Pool 与随机 I/O 压力上升。\n- 选择性偏低：单列状态索引、布尔索引、热点租户值可能收益有限，组合条件和数据分布决定最终效果。\n- 计划漂移：统计信息陈旧、数据倾斜、参数值变化、新索引上线和版本升级会让优化器选择不同路径。\n- 写入抖动：索引过多、随机主键、宽索引、批量导入和在线建索引会增加页分裂、Redo、锁等待和复制压力。\n- 锁范围扩大：锁定读、更新和删除依赖索引路径；宽范围扫描会放大记录锁、间隙锁和死锁概率。\n- 索引重复：多个联合索引前缀重叠会增加维护成本，清理前要确认查询覆盖、约束语义和回滚方案。",
      "排查实践：索引相关慢 SQL 要把 SQL、表结构、计划、数据分布和运行指标串起来。\n\n1. 固化 SQL：记录原始 SQL、绑定参数值和类型、调用入口、执行频率、返回行数、事务范围和时间窗口。\n2. 看结构：用 `SHOW CREATE TABLE`、`SHOW INDEX` 查看主键、联合索引顺序、唯一约束、字段类型、字符集和索引基数。\n3. 看计划：用 `EXPLAIN FORMAT=TREE` 看访问路径，用 `EXPLAIN ANALYZE` 对比估算行数和实际行数。\n4. 看数据分布：统计过滤列基数、热点值、时间范围、租户规模和空值比例，判断选择性是否稳定。\n5. 看运行证据：慢查询日志、Performance Schema 语句摘要、Buffer Pool 物理读、锁等待和复制延迟要和慢 SQL 时间线对齐。\n6. 小步修复：改写谓词、补联合索引、减少返回列、设计覆盖索引、刷新统计信息、使用不可见索引灰度评估，并保留回滚脚本。\n\n```sql\nSHOW CREATE TABLE orders\\G\nSHOW INDEX FROM orders;\n\nEXPLAIN FORMAT=TREE\nSELECT id, amount, created_at\nFROM orders\nWHERE user_id = 1001 AND status = 'PAID'\nORDER BY created_at DESC\nLIMIT 20;\n\nEXPLAIN ANALYZE\nSELECT id, amount, created_at\nFROM orders\nWHERE user_id = 1001\n  AND status = 'PAID'\n  AND created_at >= '2026-06-01 00:00:00'\nORDER BY created_at DESC\nLIMIT 20;\n\nANALYZE TABLE orders;\n\nSELECT DIGEST_TEXT, COUNT_STAR, SUM_ROWS_EXAMINED, SUM_ROWS_SENT, SUM_TIMER_WAIT\nFROM performance_schema.events_statements_summary_by_digest\nWHERE DIGEST_TEXT LIKE 'SELECT%ORDERS%'\nORDER BY SUM_TIMER_WAIT DESC\nLIMIT 10;\n\n-- 评估删除索引前，可先把候选索引设为不可见观察计划影响\nALTER TABLE orders ALTER INDEX idx_status_created INVISIBLE;\nALTER TABLE orders ALTER INDEX idx_status_created VISIBLE;\n```\n\n有效修复会体现为扫描行数下降、实际耗时下降、回表减少、排序或临时表消失、锁等待收敛，以及写入和复制指标仍保持稳定。",
      "指标与命令速查：索引优化要用多种证据交叉确认。\n\n- `SHOW INDEX`：查看索引名、列顺序、唯一性、基数、可见性和索引类型。\n- `EXPLAIN` 的 `type`：常见访问类型包括 `const`、`eq_ref`、`ref`、`range`、`index`、`ALL`，用于判断访问路径级别。\n- `possible_keys` / `key`：优化器候选索引与实际使用索引。\n- `key_len`：参与访问路径的索引字节长度，可辅助判断联合索引使用到哪些列。\n- `rows` / `filtered`：估算扫描行数和过滤比例，要和 `EXPLAIN ANALYZE` 的实际行数对比。\n- `Extra`：关注 `Using index`、`Using index condition`、`Using filesort`、`Using temporary` 等信号。\n- 慢查询日志：`Rows_examined`、`Rows_sent` 和查询时间能反映扫描与返回比例。\n- Performance Schema：按 digest 聚合 SQL 次数、耗时、扫描行和返回行，适合找高频高成本语句。\n- `ANALYZE TABLE`：刷新统计信息，适合处理计划估算偏差。\n- Invisible Index：用于灰度评估索引删除或优化器路径变化。",
      "常见误区：索引是访问路径设计工具，也是持续维护成本。\n\n- 索引价值来自减少候选行、回表、排序和锁范围，判断要以 SQL 样本和运行证据为准。\n- 联合索引字段顺序服务访问模式，等值、范围、排序和覆盖要一起设计。\n- 低基数字段可以成为联合索引的一部分，关键是组合后的过滤范围和排序收益。\n- 覆盖索引适合高频只读路径，宽覆盖索引会增加写入、缓存和在线变更成本。\n- 新增索引会改变优化器选择，发布前要比较计划、数据分布、写入指标和回滚路径。\n- 索引治理要保护约束语义、核心 SQL、线上观测和灰度窗口。",
      "面试追问：索引题适合按“定义 -> B+ 树 -> InnoDB 组织 -> 优化器 -> 排查证据 -> 取舍”回答。\n\n- MySQL 索引解决什么问题，为什么能减少查询成本？\n- InnoDB 的聚簇索引和二级索引分别存什么？\n- 为什么二级索引查询可能回表，覆盖索引如何减少回表？\n- 联合索引为什么强调字段顺序，最左前缀和范围条件如何影响访问路径？\n- 选择性、基数、统计信息如何影响优化器选择索引？\n- `EXPLAIN` 里 `type`、`key`、`key_len`、`rows`、`Extra` 分别怎么看？\n- 隐式转换、函数包裹列、前置通配符和跨列 `OR` 为什么会让索引收益下降？\n- 索引越多会带来哪些写入、存储、缓存、锁和发布成本？\n- 线上慢 SQL 如何判断是缺索引、回表多、统计信息偏差、计划漂移还是锁等待？\n- 大表新增、删除或合并索引时，如何设计验证、灰度、监控和回滚？",
      "参考来源：本讲解主要参考 MySQL 8.4 Reference Manual 的 How MySQL Uses Indexes、Column Indexes、Multiple-Column Indexes、Clustered and Secondary Indexes、InnoDB Physical Structure、InnoDB Best Practices、Storage Layout、Range Optimization、Index Condition Pushdown、ORDER BY Optimization、Optimizer Statistics、ANALYZE TABLE、Invisible Indexes、EXPLAIN、EXPLAIN Output、Slow Query Log 和 Performance Schema Statement Tables 文档，并结合小林 coding、JavaGuide 和 SolarWinds 的 MySQL 索引文章校准中文表达、工程案例和排查路径。官方资料用于定义、机制、优化器和命令语义，技术文章用于补充 B+ 树直觉、面试问法和生产治理经验。"
    ],
    typicalProblems: [
      "MySQL 索引解决什么问题，查询加速和写入成本分别来自哪里？",
      "InnoDB 聚簇索引、二级索引、唯一索引、联合索引和覆盖索引分别如何工作？",
      "为什么二级索引叶子节点保存主键值，主键长度如何影响所有二级索引？",
      "联合索引字段顺序如何影响等值过滤、范围查询、排序和覆盖能力？",
      "回表、ICP、覆盖索引和 Buffer Pool 命中如何共同影响慢 SQL？",
      "选择性、统计信息、数据倾斜和 `ANALYZE TABLE` 如何影响优化器选择索引？",
      "如何用 `EXPLAIN`、`EXPLAIN ANALYZE`、慢查询日志和 Performance Schema 建立索引排查证据链？",
      "函数包裹列、隐式转换、前置通配符、跨列 `OR` 和低基数字段分别如何处理？",
      "索引过多、宽索引、随机主键和在线建索引会带来哪些生产成本？",
      "大表索引新增、删除、合并和不可见索引灰度验证如何设计？"
    ],
    commonCommands: [
      "SHOW CREATE TABLE <table>\\G",
      "SHOW INDEX FROM <table>",
      "EXPLAIN FORMAT=TREE <sql>",
      "EXPLAIN ANALYZE <sql>",
      "ANALYZE TABLE <table>",
      "ALTER TABLE <table> ADD INDEX <idx_name> (<columns>)",
      "ALTER TABLE <table> ALTER INDEX <idx_name> INVISIBLE",
      "ALTER TABLE <table> ALTER INDEX <idx_name> VISIBLE",
      "SELECT DIGEST_TEXT, COUNT_STAR, SUM_ROWS_EXAMINED, SUM_ROWS_SENT, SUM_TIMER_WAIT FROM performance_schema.events_statements_summary_by_digest ORDER BY SUM_TIMER_WAIT DESC LIMIT 10"
    ],
    useCases: ["详情查询", "列表筛选", "排序分页", "唯一约束", "JOIN 优化", "覆盖查询", "慢 SQL 排查", "索引治理", "大表变更评审", "锁范围控制"],
    prerequisites: ["sql", "select", "where", "innodb"],
    related: ["b-plus-tree", "clustered-index", "secondary-index", "back-to-table", "covering-index", "composite-index", "leftmost-prefix", "range-query", "index-selectivity", "explain", "sql-optimization"],
  },
  "b-plus-tree": {
    sourceRefs: [
      "mysql-how-mysql-uses-indexes",
      "mysql-column-indexes",
      "mysql-innodb-index-types",
      "mysql-innodb-physical-structure",
      "mysql-innodb-architecture",
      "mysql-innodb-best-practices",
      "mysql-optimizing-innodb-storage-layout",
      "mysql-range-optimization",
      "mysql-index-condition-pushdown",
      "mysql-explain-statement",
      "mysql-explain-output",
      "mysql-slow-query-log",
      "mysql-performance-schema-statement-tables",
      "mysql-innodb-limits",
      "mysql-show-index",
      "jeremy-cole-innodb-btree",
      "planetscale-btree-indexes",
      "xiaolincoding-mysql-index",
      "javaguide-mysql-index",
    ],
    concept:
      "B+ 树是 InnoDB 组织大多数索引的页级有序结构，通过少量层级定位键值，并用叶子页的有序链路支持范围扫描、排序和分页。",
    explanation: [
      "概念定位：B+ 树（B+ Tree）解决的是“磁盘和内存页里怎样高效定位、顺序扫描和维护大量有序键”的问题。它出现在主键查询、二级索引查询、范围筛选、排序分页、联合索引、回表、锁范围、慢 SQL 排查和大表写入抖动中。\n\n在 MySQL InnoDB 里，除空间索引等特殊类型外，常规索引按 B-tree/B+ tree 形态存放在页中。默认索引页大小是 16KB，根页和中间页保存键值边界与子页指针，叶子页保存索引记录。聚簇索引的叶子记录保存完整行，二级索引的叶子记录保存二级键和主键值。B+ 树把随机查找、范围扫描和写入维护统一到同一套页结构里，因此它既是索引原理，也是生产 SQL 性能判断的底座。",
      "准确定义：B+ 树是一种多路平衡搜索树，所有真实数据记录都位于叶子层，非叶子层承担导航，叶子页按键顺序连接，适合磁盘页和 Buffer Pool 管理。\n\n关键术语如下：\n\n- `root page`：根页，索引访问的入口，记录子树边界。\n- `internal page`：中间页，保存分隔键和子页指针，负责把搜索范围缩小到下一级。\n- `leaf page`：叶子页，保存索引记录；聚簇索引叶子保存整行，二级索引叶子保存二级键与主键。\n- `page split`：页空间不足时拆分页面，维护有序性，同时带来写放大和页碎片。\n- `page merge`：页利用率下降到阈值附近时合并页面，回收空间并压缩树结构。\n- `range scan`：定位到范围起点后沿叶子页顺序读取，服务 `BETWEEN`、`>`、`<`、前缀匹配和排序分页。\n- `fan-out`：一个内部页能指向多少个子页，扇出越高，树高度越低，单次查询访问页数越少。",
      "心智模型：把 B+ 树看成一本分层目录。\n\n- 根目录只告诉你目标键大致在哪个分册。\n- 中间目录继续缩小范围，直到找到具体页。\n- 叶子目录按键值排好序，真正的索引记录都在这里。\n- 查一个点，路径是“根页 -> 中间页 -> 叶子页”。\n- 查一段范围，先找到起点叶子页，再沿叶子页顺序读到结束边界。\n\n这个模型能解释两个工程现象：B+ 树点查通常只访问少量页；范围查询、排序和分页的效率来自叶子层有序链路。索引字段越宽、主键越宽、页分裂越频繁，树的页数、缓存占用和写入成本都会上升。",
      "主流程机制：一次 InnoDB B+ 树索引访问可以按页级路径理解。\n\n1. SQL 层解析谓词和排序需求，优化器根据统计信息选择候选索引。\n2. 执行器调用 InnoDB，从索引根页开始读取；页在 Buffer Pool 中命中时直接使用，缺页时从表空间加载。\n3. 根页根据搜索键选择下一层子页，中间页继续用边界键缩小搜索范围。\n4. 到达叶子页后，等值查询在页内定位匹配记录；范围查询先定位起点，再沿叶子页顺序扫描。\n5. 聚簇索引命中后可直接取整行；二级索引命中后根据返回列判断是否覆盖，必要时用主键回到聚簇索引。\n6. 写入、更新和删除会修改相关叶子页，并维护上层边界、Redo、Undo、锁和二级索引记录。\n7. 页空间不足时触发页分裂；删除或变短导致页利用率下降时，InnoDB 可能尝试页合并。\n\n这条路径说明了 B+ 树性能的本质：一次查询的成本主要是访问多少页、扫描多少叶子记录、回表多少次，以及这些页是否在 Buffer Pool 中。",
      "实践例子：下面用订单表观察点查、范围查和覆盖读。\n\n```sql\nCREATE TABLE orders (\n  id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,\n  user_id BIGINT UNSIGNED NOT NULL,\n  status VARCHAR(16) NOT NULL,\n  amount DECIMAL(12,2) NOT NULL,\n  created_at DATETIME NOT NULL,\n  PRIMARY KEY (id),\n  KEY idx_user_status_created_id (user_id, status, created_at, id)\n) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;\n\n-- 主键点查：沿 PRIMARY 的 B+ 树到叶子页，叶子记录就是整行\nEXPLAIN ANALYZE\nSELECT id, user_id, status, amount\nFROM orders\nWHERE id = 90001;\n\n-- 二级索引范围扫描：定位起点后沿叶子页读取，返回列被索引覆盖\nEXPLAIN ANALYZE\nSELECT id, user_id, status, created_at\nFROM orders\nWHERE user_id = 1001\n  AND status = 'PAID'\n  AND created_at >= '2026-06-01 00:00:00'\nORDER BY created_at DESC, id DESC\nLIMIT 20;\n\n-- 返回 amount 时，amount 未在二级索引中，需要额外回到聚簇索引\nEXPLAIN ANALYZE\nSELECT id, user_id, amount, created_at\nFROM orders\nWHERE user_id = 1001 AND status = 'PAID'\nORDER BY created_at DESC, id DESC\nLIMIT 20;\n```\n\n第一条体现聚簇索引点查；第二条体现 B+ 树叶子页有序扫描和覆盖索引；第三条体现二级索引命中后的回表成本。`EXPLAIN ANALYZE` 的实际行数、循环次数和耗时能把这些路径变成可验证证据。",
      "深层细节：B+ 树的优势来自页友好结构，成本也来自页维护。\n\n- 树高度：InnoDB 默认 16KB 页和高扇出让常见索引保持较低高度，点查通常访问根页、中间页和叶子页几个层级。\n- 页内容：索引记录存放在叶子页，页内有记录目录和页头元数据；范围扫描的瓶颈常在连续叶子页数量、过滤比例和回表次数。\n- 聚簇索引：主键决定整表物理组织，主键短且大体递增时，页分裂和二级索引体积更可控。\n- 二级索引：二级索引叶子包含主键值，长主键会复制到每个二级索引记录里，放大页数和缓存占用。\n- 联合索引：B+ 树按列顺序做字典序排序，先比较第一列，再比较第二列，字段顺序决定定位范围和排序能力。\n- 页分裂：随机插入、UUID 主键、热点页更新和宽记录会增加页分裂、Redo、锁等待和复制压力。\n- 页合并：大量删除或更新变短后，页利用率下降，合并能回收空间，也会带来额外维护动作。\n- 索引构建：创建或重建索引时，InnoDB 可按排序方式批量构建 B-tree 页，`innodb_fill_factor` 影响预留空间。\n- 限制条件：InnoDB 二级索引数量、联合索引列数、索引键长度和页大小存在上限，宽字符列和多列索引要按字节评估。",
      "工程场景与取舍：B+ 树设计要围绕访问模式和写入形态做判断。\n\n- 主键查询：主键 B+ 树叶子保存整行，适合订单详情、用户详情和幂等记录定位。\n- 范围查询：时间、金额、版本号、自增主键等有序字段适合范围扫描，扫描边界要足够窄。\n- 排序分页：联合索引把过滤列、排序列和稳定主键放在同一条 B+ 树路径里，可以减少 filesort 和深分页成本。\n- 覆盖查询：高频列表只返回索引列时，二级索引叶子页即可返回结果，降低回表和 Buffer Pool 压力。\n- 写入密集表：每增加一条索引，就增加一棵需要维护的 B+ 树；宽索引和随机键会持续增加写入放大。\n- 大表变更：新增索引、重建索引和主键调整会消耗 I/O、CPU、临时空间和复制带宽，发布前要准备灰度与回滚。",
      "边界与故障模式：B+ 树相关问题通常表现为扫描范围过大、回表过多、页分裂和计划漂移。\n\n- 范围过宽：`rows` 很大、慢日志 `Rows_examined` 明显高于 `Rows_sent`，说明叶子页扫描量偏大。\n- 回表过多：二级索引过滤出大量主键，再访问聚簇索引，随机 I/O、Buffer Pool 压力和延迟都会上升。\n- 写入抖动：随机主键、热点字段更新、宽索引和批量导入会增加页分裂、Redo 和锁等待。\n- 字段过宽：长字符串、多个字符列和长主键降低扇出，增加树高度、页数量和缓存占用。\n- 统计偏差：数据分布变化后，优化器可能选择扫描更多页的索引路径，需要用 `ANALYZE TABLE` 和真实计划验证。\n- 锁范围扩大：更新或锁定读沿索引范围扫描时，扫描边界越宽，记录锁、间隙锁和死锁概率越高。\n- 容量限制：索引键长度、联合索引列数和二级索引数量达到上限时，要调整字段、前缀长度、索引合并策略或查询模型。",
      "排查实践：B+ 树问题要把 SQL 计划、索引结构、页访问和运行指标连起来。\n\n1. 固化现场：记录 SQL、绑定参数、返回列、排序、分页、执行耗时、返回行数和事务范围。\n2. 看索引定义：用 `SHOW CREATE TABLE`、`SHOW INDEX` 查看主键、联合索引顺序、字段类型、基数和索引可见性。\n3. 看执行计划：用 `EXPLAIN FORMAT=TREE` 确认 index lookup、index range scan、covering index lookup 等路径。\n4. 看真实执行：用 `EXPLAIN ANALYZE` 对比估算行数、实际行数、循环次数和耗时。\n5. 看数据分布：统计过滤列基数、热点值、时间窗口、租户规模、空值比例和排序键重复度。\n6. 看运行证据：慢查询日志、Performance Schema、Buffer Pool 读、锁等待、Redo 写入和复制延迟要和慢 SQL 时间线对齐。\n7. 小步修复：收窄范围、调整联合索引顺序、补覆盖列、缩短主键或索引字段、刷新统计、分批写入，并用同一批参数复测。\n\n```sql\nSHOW CREATE TABLE orders\\G\nSHOW INDEX FROM orders;\n\nEXPLAIN FORMAT=TREE\nSELECT id, user_id, created_at\nFROM orders\nWHERE user_id = 1001 AND status = 'PAID'\nORDER BY created_at DESC, id DESC\nLIMIT 20;\n\nEXPLAIN ANALYZE\nSELECT id, user_id, created_at\nFROM orders\nWHERE user_id = 1001\n  AND status = 'PAID'\n  AND created_at >= '2026-06-01 00:00:00'\nORDER BY created_at DESC, id DESC\nLIMIT 20;\n\nANALYZE TABLE orders;\n\nSELECT DIGEST_TEXT, COUNT_STAR, SUM_ROWS_EXAMINED, SUM_ROWS_SENT, SUM_TIMER_WAIT\nFROM performance_schema.events_statements_summary_by_digest\nWHERE DIGEST_TEXT LIKE 'SELECT%ORDERS%'\nORDER BY SUM_TIMER_WAIT DESC\nLIMIT 10;\n\nSHOW GLOBAL STATUS LIKE 'Innodb_buffer_pool_read%';\nSHOW ENGINE INNODB STATUS\\G\n```\n\n有效修复会体现为实际扫描行数下降、回表减少、Buffer Pool 物理读下降、锁等待收敛、p95/p99 延迟降低，并且写入和复制指标保持稳定。",
      "指标与命令速查：判断 B+ 树访问质量时，优先看能证明页访问和扫描范围的证据。\n\n- `SHOW INDEX`：看 `Key_name`、`Seq_in_index`、`Column_name`、`Cardinality`、`Visible`，确认 B+ 树字段顺序和估算基数。\n- `EXPLAIN FORMAT=TREE`：看 index lookup、index range scan、covering index lookup、filter、sort 等执行节点。\n- `EXPLAIN ANALYZE`：看真实行数、循环次数和每个迭代器耗时，校准优化器估算。\n- `Rows_examined` / `Rows_sent`：慢查询日志里的扫描与返回比例，适合识别范围过宽。\n- `SUM_ROWS_EXAMINED` / `SUM_ROWS_SENT`：Performance Schema 按 digest 聚合的扫描证据。\n- `Innodb_buffer_pool_read_requests` / `Innodb_buffer_pool_reads`：逻辑读与物理读，可辅助判断索引页和数据页命中情况。\n- `SHOW ENGINE INNODB STATUS`：观察锁等待、Buffer Pool、I/O、历史列表和最近死锁。\n- `ANALYZE TABLE`：刷新统计信息，适合处理数据分布变化后的计划偏差。\n- InnoDB 限制：默认 16KB 页下索引键长度、二级索引数量和联合索引列数都要纳入设计约束。",
      "常见误区：B+ 树是有序页结构，价值来自低层级定位和叶子层顺序扫描。\n\n- B+ 树服务的是索引访问路径，SQL 质量要用扫描行数、回表次数、排序成本和实际耗时判断。\n- 聚簇索引和二级索引都是 B+ 树，叶子记录内容决定主键查询、回表和覆盖索引的差异。\n- 联合索引按字段顺序形成字典序，字段顺序影响定位、范围、排序和覆盖。\n- 低层级树高来自页扇出，宽字段、宽主键和大量二级索引会降低缓存效率并增加写入成本。\n- 随机插入会增加页分裂概率，主键选择会长期影响写入局部性、表空间和二级索引体积。\n- 线上排查要用 `EXPLAIN ANALYZE`、慢日志、Performance Schema 和 InnoDB 指标共同验证。",
      "面试追问：B+ 树题适合按“结构 -> 查询 -> InnoDB 组织 -> 写入维护 -> 排查证据 -> 取舍”回答。\n\n- B+ 树解决什么问题，为什么适合数据库索引？\n- 根页、中间页和叶子页分别保存什么，叶子页有序链路有什么价值？\n- InnoDB 聚簇索引和二级索引的叶子节点分别存什么？\n- 为什么范围查询、排序分页和最左前缀都能用 B+ 树解释？\n- 主键长度、字段宽度、页大小和扇出如何影响树高度和 Buffer Pool 命中？\n- 页分裂、页合并、随机插入和顺序插入对写入性能有什么影响？\n- 二级索引范围扫描后为什么可能回表，覆盖索引如何减少回表？\n- `EXPLAIN` 中的 index range scan、rows、Extra 和 `EXPLAIN ANALYZE` 实际行数如何解读？\n- 线上慢 SQL 如何判断是范围过宽、回表过多、统计信息偏差、页缓存压力还是锁等待？\n- 大表新增或重建 B+ 树索引时，如何评估 I/O、锁、复制延迟、回滚和验证方案？",
      "参考来源：本讲解主要参考 MySQL 8.4 Reference Manual 的 How MySQL Uses Indexes、Column Indexes、Clustered and Secondary Indexes、InnoDB Architecture、InnoDB Physical Structure、InnoDB Best Practices、Storage Layout、Range Optimization、Index Condition Pushdown、EXPLAIN、EXPLAIN Output、Slow Query Log、Performance Schema Statement Tables、InnoDB Limits 和 SHOW INDEX 文档，并结合 Jeremy Cole 的 InnoDB B+Tree 页结构文章、PlanetScale 的 B-tree 索引课程、小林 coding 与 JavaGuide 的中文索引资料校准结构细节、中文表达和面试问法。官方资料用于定义、限制、页结构和命令语义，工程文章用于补足页级心智模型与生产排查经验。"
    ],
    typicalProblems: [
      "B+ 树为什么适合 MySQL 索引，它解决了点查、范围查和排序中的哪些成本？",
      "InnoDB B+ 树的根页、中间页、叶子页分别存什么，页大小和扇出如何影响树高？",
      "聚簇索引和二级索引都是 B+ 树时，叶子记录内容分别是什么？",
      "为什么联合索引字段顺序、最左前缀和范围查询都可以用 B+ 树字典序解释？",
      "二级索引范围扫描后为什么可能发生回表，覆盖索引如何减少页访问？",
      "顺序主键、随机主键、宽主键和宽联合索引对页分裂、缓存和写入放大有什么影响？",
      "如何用 `EXPLAIN FORMAT=TREE`、`EXPLAIN ANALYZE`、慢查询日志和 Performance Schema 判断 B+ 树访问质量？",
      "页分裂、页合并、统计信息偏差和 Buffer Pool 缺页分别会造成哪些线上现象？",
      "大表新增、重建或删除 B+ 树索引时，需要评估哪些 I/O、锁、复制和回滚风险？",
      "面试中如何把 B+ 树、InnoDB 页、聚簇索引、二级索引、回表和锁范围串成完整答案？"
    ],
    commonCommands: [
      "SHOW CREATE TABLE <table>\\G",
      "SHOW INDEX FROM <table>",
      "EXPLAIN FORMAT=TREE <sql>",
      "EXPLAIN ANALYZE <sql>",
      "ANALYZE TABLE <table>",
      "SHOW GLOBAL STATUS LIKE 'Innodb_buffer_pool_read%'",
      "SHOW ENGINE INNODB STATUS\\G",
      "SELECT DIGEST_TEXT, COUNT_STAR, SUM_ROWS_EXAMINED, SUM_ROWS_SENT, SUM_TIMER_WAIT FROM performance_schema.events_statements_summary_by_digest ORDER BY SUM_TIMER_WAIT DESC LIMIT 10"
    ],
    useCases: ["主键点查", "二级索引查询", "范围扫描", "排序分页", "联合索引设计", "覆盖索引优化", "回表成本分析", "慢 SQL 排查", "主键方案评审", "大表索引变更"],
    prerequisites: ["mysql-index"],
    related: ["mysql-index", "clustered-index", "secondary-index", "back-to-table", "covering-index", "composite-index", "leftmost-prefix", "range-query", "index-selectivity", "buffer-pool", "page", "explain", "sql-optimization"],
  },
  "secondary-index": {
    sourceRefs: [
      "mysql-how-mysql-uses-indexes",
      "mysql-column-indexes",
      "mysql-multiple-column-indexes",
      "mysql-innodb-index-types",
      "mysql-innodb-physical-structure",
      "mysql-innodb-best-practices",
      "mysql-optimizing-innodb-storage-layout",
      "mysql-range-optimization",
      "mysql-index-condition-pushdown",
      "mysql-index-extensions",
      "mysql-innodb-change-buffer",
      "mysql-innodb-locks-set",
      "mysql-explain-statement",
      "mysql-explain-output",
      "mysql-slow-query-log",
      "mysql-performance-schema-statement-tables",
      "mysql-show-index",
      "jeremy-cole-innodb-btree",
      "planetscale-secondary-keys",
      "planetscale-covering-indexes",
      "solarwinds-mysql-indexes",
      "xiaolincoding-mysql-index",
      "javaguide-mysql-index",
    ],
    concept:
      "二级索引是 InnoDB 中除聚簇索引之外的索引结构，叶子记录保存二级键和主键值，用主键把非主键访问路径连接回聚簇索引。",
    explanation: [
      "概念定位：二级索引（Secondary Index）解决的是“业务按非主键字段查数据时怎样快速定位行”的问题。用户按 `email` 登录、订单按 `user_id + status + created_at` 列表分页、后台按 `tenant_id` 筛选、JOIN 按外键关联、慢 SQL 按条件收窄扫描范围，都依赖二级索引。\n\n在 InnoDB 中，聚簇索引按主键组织整行数据；二级索引是一棵独立 B+ 树，叶子记录保存二级索引列和对应主键值。查询命中二级索引后，返回列被索引覆盖时可直接返回；需要整行或更多字段时，再用主键值访问聚簇索引，这条额外访问路径就是回表。二级索引把读性能、主键设计、覆盖索引、锁范围、Change Buffer、写入放大和线上排查连接在一起。",
      "准确定义：二级索引是 InnoDB 表中聚簇索引之外的索引，英文常见说法包括 `secondary index`、`secondary key`、`non-primary index`。它的核心特征如下。\n\n- `secondary key`：业务定义的索引列，例如 `email`、`user_id`、`status`、`created_at`。\n- `primary key payload`：每条二级索引记录都包含该行主键列，用于回到聚簇索引定位整行。\n- `clustered lookup`：根据二级索引拿到主键后访问 `PRIMARY` B+ 树的过程，中文常称回表。\n- `covering index`：查询所需列都在二级索引记录中，结果可从索引树直接返回。\n- `index extension`：InnoDB 自动把主键列追加到二级索引，优化器可利用追加主键做访问、排序、聚合和覆盖判断。\n- `Index Condition Pushdown`：ICP 让存储引擎在二级索引扫描阶段用索引列继续过滤，减少整行读取。\n- `change buffer`：特定配置下缓存二级索引页变更，延后合并，服务 I/O 受限的 DML 工作负载。",
      "心智模型：把 InnoDB 表想成一份主档案和多份业务目录。\n\n- 主档案按 `id` 排序，目录项里放完整资料，这就是聚簇索引。\n- 业务目录按 `email`、`tenant_id`、`status`、`created_at` 排序，目录项里放业务键和档案编号，这就是二级索引。\n- 查目录里已有的信息，直接读目录即可返回。\n- 查目录里缺少的信息，先拿档案编号，再去主档案取完整资料。\n- 主键编号越长，每份业务目录都越厚；业务目录越多，每次写入要维护的结构也越多。\n\n这个模型能解释二级索引的关键取舍：它让非主键查询变快，同时把主键长度、返回列范围、写入频率和缓存命中率变成长期成本。",
      "主流程机制：一次二级索引查询可以按“选索引 -> 读二级树 -> 判断覆盖 -> 回聚簇树 -> 验证证据”理解。\n\n1. SQL 层解析 `WHERE`、`ORDER BY`、`LIMIT` 和返回列，优化器根据统计信息、选择性、排序成本和回表成本选择候选二级索引。\n2. 执行器从二级索引根页进入 B+ 树，按二级键定位到叶子页；范围查询会沿叶子页顺序扫描。\n3. 叶子记录提供二级索引列和主键值，联合索引按字段顺序形成字典序，自动追加的主键也可参与优化器判断。\n4. 返回列全部来自二级索引时，执行器以覆盖索引方式返回，`EXPLAIN Extra` 常见 `Using index`。\n5. 返回列包含索引外字段时，执行器用主键值访问聚簇索引叶子页读取整行，形成回表。\n6. ICP 可在二级索引扫描阶段先判断可用索引列条件，减少后续整行读取，`EXPLAIN Extra` 常见 `Using index condition`。\n7. `SELECT ... FOR UPDATE`、`UPDATE`、`DELETE` 等锁定路径会锁住扫描到的索引记录；使用二级索引且需要排他锁时，还会访问并锁住对应聚簇索引记录。\n8. 慢查询日志、`EXPLAIN ANALYZE`、Performance Schema、Buffer Pool 读和锁等待共同证明这条路径的实际成本。\n\n二级索引优化的目标是让扫描范围、回表次数、排序成本和锁范围都落在业务可承受区间。",
      "实践例子：下面用用户表展示二级索引、覆盖读取、回表和索引扩展。\n\n```sql\nCREATE TABLE users (\n  id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,\n  tenant_id BIGINT UNSIGNED NOT NULL,\n  email VARCHAR(191) NOT NULL,\n  status VARCHAR(16) NOT NULL,\n  nickname VARCHAR(64) NOT NULL,\n  last_login_at DATETIME NULL,\n  created_at DATETIME NOT NULL,\n  PRIMARY KEY (id),\n  UNIQUE KEY uk_email (email),\n  KEY idx_tenant_status_created (tenant_id, status, created_at)\n) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;\n\n-- 二级索引等值查找：uk_email 叶子记录给出 email 和 id，再按返回列判断读取路径\nEXPLAIN ANALYZE\nSELECT id, email\nFROM users\nWHERE email = 'alice@example.com';\n\n-- 返回 nickname 时，nickname 未在 uk_email 中，通常需要用 id 回到 PRIMARY\nEXPLAIN ANALYZE\nSELECT id, email, nickname\nFROM users\nWHERE email = 'alice@example.com';\n\n-- 联合二级索引范围扫描：过滤租户和状态，按创建时间取最近用户\nEXPLAIN FORMAT=TREE\nSELECT id, tenant_id, status, created_at\nFROM users\nWHERE tenant_id = 42 AND status = 'ACTIVE'\nORDER BY created_at DESC, id DESC\nLIMIT 20;\n\n-- 优化器可把追加的主键 id 作为二级索引扩展的一部分参与排序和覆盖判断\nSHOW INDEX FROM users;\nSHOW SESSION STATUS LIKE 'Handler_read%';\n```\n\n第一条查询的返回列被 `uk_email` 与追加主键覆盖时，可从二级索引返回。第二条查询需要 `nickname`，通常会回到聚簇索引。第三条查询展示联合二级索引服务过滤、排序和分页；把稳定主键作为排序尾列能让分页顺序更可控。",
      "深层细节：二级索引的性能来自有序定位，成本来自主键载荷和多棵 B+ 树维护。\n\n- 叶子记录：InnoDB 二级索引记录保存索引列和主键列，主键值是回到聚簇索引的定位入口。\n- 主键宽度：长字符串主键、UUID 主键和多列主键会复制到每个二级索引记录中，增加页数量、树高度、Buffer Pool 占用和备份体积。\n- 索引扩展：优化器默认考虑二级索引中追加的主键列，`key_len`、`ref`、`rows` 和 `Extra` 可能体现更精细的访问路径。\n- 覆盖读取：二级索引包含全部返回列时，查询可减少回表；覆盖列越多，写入成本、缓存占用和 DDL 成本也越高。\n- ICP：二级索引扫描中可用索引列先过滤候选记录，特别适合联合索引前缀定位后仍有索引列条件需要判断的场景。\n- Change Buffer：二级索引页未在 Buffer Pool 中时，变更可被缓存并延后合并；MySQL 8.4 默认 `innodb_change_buffering=none`，启用后要评估合并 I/O、Buffer Pool 占用和重启后的延续影响。\n- 写入放大：每个插入、删除和索引列更新都要维护对应二级索引页、Redo、Undo、锁和统计信息。\n- 锁路径：锁定读和写语句按扫描的索引范围加锁，二级索引排他锁路径还会涉及聚簇索引记录，范围越宽，锁等待和死锁概率越高。\n- 统计信息：基数、直方图、热点租户、状态分布和时间范围会影响优化器选择二级索引、全表扫描或其他路径。\n\n老手评审二级索引时会同时看四件事：这条索引服务哪些 SQL、能减少多少候选行、返回列是否覆盖、写入和锁成本是否可接受。",
      "工程场景与取舍：二级索引要围绕访问模式设计。\n\n- 登录与幂等：`UNIQUE KEY uk_email(email)` 或租户内唯一键可以同时服务查找和约束检查。\n- 列表分页：`(tenant_id, status, created_at, id)` 适合租户内状态列表和时间排序，主键作为尾列可稳定分页顺序。\n- JOIN 关联：外键列和被驱动表关联列需要合适索引，减少嵌套循环中的重复扫描。\n- 覆盖列表：高频只读列表可把少量返回列放入联合二级索引，换取更低回表和更高缓存命中。\n- 状态筛选：低基数字段单独建索引收益有限，和租户、用户、时间、删除标记组合后常能形成有效路径。\n- 搜索接口：前缀匹配、函数索引、生成列索引和全文索引要按查询语义选择，普通二级索引更适合有序前缀和精确条件。\n- 写入密集表：索引数量、字段宽度、随机写入和在线建索引会放大写入延迟、复制延迟和 DDL 风险。\n- 大表治理：新增、合并或删除二级索引要比较执行计划、业务峰值、锁等待、空间增长和回滚脚本。",
      "边界与故障模式：二级索引问题通常表现为慢 SQL、回表风暴、计划漂移、写入抖动和锁扩大。\n\n- 回表过多：二级索引筛出大量主键，再逐行访问聚簇索引，随机 I/O、Buffer Pool 压力和 p99 延迟都会上升。\n- 选择性偏低：布尔、状态、低基数字段在大范围查询中可能扫描大量叶子记录，联合条件和时间边界决定实际收益。\n- 主键过宽：二级索引记录携带主键，宽主键会放大所有二级索引的空间、缓存和写入成本。\n- 返回列过宽：为了覆盖查询把大量列放进索引，会降低页扇出并增加每次 DML 的维护成本。\n- 条件写法偏离索引：隐式类型转换、字符集差异、函数包裹列、前置通配符、跨列 `OR` 会让可定位范围变宽。\n- 统计信息漂移：数据倾斜、热点租户、批量导入和删除后，优化器估算可能偏离真实扫描量。\n- 锁范围扩大：锁定读、更新和删除使用二级索引范围扫描时，扫描到的索引记录和对应聚簇记录都可能参与锁等待。\n- Change Buffer 合并压力：大量二级索引变更积压后，后续合并 I/O 会影响磁盘受限查询。\n- 重复索引：单列索引和联合索引前缀重叠会持续增加维护成本，删除前要验证约束语义、执行计划和回滚路径。",
      "排查实践：二级索引排查要把 SQL、索引定义、真实计划、运行指标和锁证据串起来。\n\n1. 固化现场：记录 SQL、绑定参数、返回列、排序、分页、事务范围、执行频率、耗时分布和返回行数。\n2. 看索引定义：用 `SHOW CREATE TABLE`、`SHOW INDEX` 查看主键、二级索引列顺序、唯一性、基数、可见性和字段类型。\n3. 看计划选择：用 `EXPLAIN FORMAT=TREE` 识别 index lookup、index range scan、covering index lookup、filter、sort 和回表迹象。\n4. 看真实执行：用 `EXPLAIN ANALYZE` 对比估算行数、实际行数、循环次数和每个迭代器耗时。\n5. 看扫描比例：慢查询日志的 `Rows_examined` / `Rows_sent`、Performance Schema 的 `SUM_ROWS_EXAMINED` / `SUM_ROWS_SENT` 能体现回表和扫描压力。\n6. 看缓存与锁：Buffer Pool 物理读、`SHOW ENGINE INNODB STATUS`、`data_locks`、锁等待事件和死锁日志要和慢 SQL 时间线对齐。\n7. 小步修复：收窄范围、调整联合索引顺序、补少量覆盖列、缩短主键、刷新统计信息、用 Invisible Index 灰度、分批写入并复测同一组参数。\n\n```sql\nSHOW CREATE TABLE users\\G\nSHOW INDEX FROM users;\n\nEXPLAIN FORMAT=TREE\nSELECT id, tenant_id, status, created_at\nFROM users\nWHERE tenant_id = 42 AND status = 'ACTIVE'\nORDER BY created_at DESC, id DESC\nLIMIT 20;\n\nEXPLAIN ANALYZE\nSELECT id, email, nickname\nFROM users\nWHERE email = 'alice@example.com';\n\nANALYZE TABLE users;\n\nSELECT DIGEST_TEXT, COUNT_STAR, SUM_ROWS_EXAMINED, SUM_ROWS_SENT, SUM_TIMER_WAIT\nFROM performance_schema.events_statements_summary_by_digest\nWHERE DIGEST_TEXT LIKE 'SELECT%USERS%'\nORDER BY SUM_TIMER_WAIT DESC\nLIMIT 10;\n\nSHOW GLOBAL STATUS LIKE 'Innodb_buffer_pool_read%';\nSHOW ENGINE INNODB STATUS\\G\n\nSELECT NAME, COUNT\nFROM information_schema.INNODB_METRICS\nWHERE NAME LIKE '%ibuf%';\n```\n\n有效修复通常体现为实际扫描行数下降、`Rows_examined` 收敛、回表减少、`Using filesort` 或临时表消失、Buffer Pool 物理读下降、锁等待收敛，以及写入和复制指标保持稳定。",
      "指标与命令速查：二级索引质量要用可观测证据判断。\n\n- `SHOW INDEX`：看 `Key_name`、`Seq_in_index`、`Column_name`、`Non_unique`、`Cardinality`、`Visible`。\n- `EXPLAIN key`：实际选择的索引，确认是否命中目标二级索引。\n- `EXPLAIN key_len`：参与访问的索引字节长度，可辅助判断联合索引和追加主键利用情况。\n- `EXPLAIN rows` / `filtered`：估算扫描量和过滤比例，要和 `EXPLAIN ANALYZE` 校准。\n- `Extra=Using index`：覆盖索引信号，结果可从索引树读取。\n- `Extra=Using index condition`：ICP 信号，存储引擎在索引扫描阶段继续过滤候选。\n- 慢查询日志：`Rows_examined`、`Rows_sent`、`Query_time` 能体现扫描与返回比例。\n- Performance Schema：按 digest 聚合执行次数、耗时、扫描行和返回行，适合识别高频高成本 SQL。\n- `Handler_read%`：会话级或全局读计数可辅助观察索引访问行为。\n- `INNODB_METRICS` 中 `%ibuf%`：启用 Change Buffer 时观察合并与积压线索。\n- `data_locks` / `SHOW ENGINE INNODB STATUS`：确认二级索引路径引发的锁等待、死锁和锁范围。",
      "常见误区：二级索引是访问路径，也是写入与空间成本。\n\n- 二级索引叶子记录保存二级键和主键值，整行数据由聚簇索引承载。\n- 主键设计会影响每一棵二级索引，短且稳定的主键能降低二级索引体积和回表成本。\n- 覆盖索引的价值来自减少回表，覆盖列数量要和写入成本、缓存占用、DDL 风险一起评估。\n- 低基数字段可以放入联合索引，关键是组合后的访问范围、排序能力和业务频率。\n- ICP 是减少整行读取的优化，`Using index condition` 和 `Using index` 表达的执行含义不同。\n- 二级索引优化要基于真实参数和生产指标，单次 `EXPLAIN` 只是证据链的一部分。\n- 删除索引要保护唯一约束、外键需求、高频 SQL、灰度观察和回滚路径。",
      "面试追问：二级索引题适合按“定义 -> 叶子内容 -> 回表 -> 覆盖 -> 优化器 -> 写入成本 -> 排查证据”回答。\n\n- InnoDB 二级索引是什么，和聚簇索引的关系是什么？\n- 二级索引叶子记录保存哪些内容，为什么主键长度会影响所有二级索引？\n- 二级索引查询为什么会发生回表，覆盖索引怎样减少回表？\n- `Using index`、`Using index condition`、`key_len`、`rows` 分别说明什么？\n- 联合二级索引字段顺序如何影响过滤、排序、分页和覆盖能力？\n- 低基数字段、热点租户、时间范围和数据倾斜会怎样影响索引选择？\n- ICP、索引扩展和 Change Buffer 分别解决二级索引路径上的什么问题？\n- 锁定读或更新走二级索引时，为什么要关注扫描范围和聚簇索引记录锁？\n- 线上如何判断慢 SQL 来自缺索引、回表过多、统计信息偏差、Buffer Pool 缺页还是锁等待？\n- 大表新增、删除或合并二级索引时，如何评估写入、空间、复制延迟、DDL 和回滚风险？",
      "参考来源：本讲解主要参考 MySQL 8.4 Reference Manual 的 Clustered and Secondary Indexes、How MySQL Uses Indexes、Column Indexes、Multiple-Column Indexes、Use of Index Extensions、Index Condition Pushdown、Change Buffer、Locks Set by Different SQL Statements、EXPLAIN、EXPLAIN Output、Slow Query Log、Performance Schema Statement Tables 和 SHOW INDEX 文档，并结合 PlanetScale Secondary Keys 与 Covering Indexes、Jeremy Cole 的 InnoDB B+Tree 页结构文章、小林 coding、JavaGuide 和 SolarWinds 的索引资料校准中文表达、案例和面试问法。官方资料用于定义、执行机制、限制、命令和锁行为，工程文章用于补充实践路径、回表直觉和索引治理经验。"
    ],
    typicalProblems: [
      "InnoDB 二级索引解决什么问题，为什么非主键查询通常依赖它？",
      "二级索引叶子记录保存哪些字段，主键值在其中承担什么角色？",
      "为什么主键长度会放大所有二级索引的空间、缓存和写入成本？",
      "二级索引查询的完整路径是什么，什么时候会回表，什么时候可以覆盖读取？",
      "ICP、覆盖索引和索引扩展分别如何减少二级索引路径上的成本？",
      "联合二级索引字段顺序如何影响等值过滤、范围扫描、排序分页和返回列覆盖？",
      "如何用 `EXPLAIN FORMAT=TREE`、`EXPLAIN ANALYZE`、慢查询日志和 Performance Schema 判断回表过多？",
      "低基数字段、隐式转换、函数包裹列、前置通配符和数据倾斜分别会造成什么执行计划风险？",
      "锁定读、更新和删除走二级索引时，为什么要关注扫描范围、间隙锁和聚簇索引记录锁？",
      "大表新增、删除或合并二级索引时，需要评估哪些写入、空间、复制、DDL 和回滚问题？"
    ],
    commonCommands: [
      "SHOW CREATE TABLE <table>\\G",
      "SHOW INDEX FROM <table>",
      "EXPLAIN FORMAT=TREE <sql>",
      "EXPLAIN ANALYZE <sql>",
      "ANALYZE TABLE <table>",
      "SHOW SESSION STATUS LIKE 'Handler_read%'",
      "SHOW GLOBAL STATUS LIKE 'Innodb_buffer_pool_read%'",
      "SHOW ENGINE INNODB STATUS\\G",
      "SELECT DIGEST_TEXT, COUNT_STAR, SUM_ROWS_EXAMINED, SUM_ROWS_SENT, SUM_TIMER_WAIT FROM performance_schema.events_statements_summary_by_digest ORDER BY SUM_TIMER_WAIT DESC LIMIT 10",
      "SELECT NAME, COUNT FROM information_schema.INNODB_METRICS WHERE NAME LIKE '%ibuf%'"
    ],
    useCases: ["非主键等值查询", "租户内列表分页", "状态与时间范围筛选", "JOIN 关联优化", "唯一约束", "覆盖索引优化", "回表成本分析", "慢 SQL 排查", "锁范围控制", "大表索引治理"],
    prerequisites: ["mysql-index", "clustered-index"],
    related: ["b-plus-tree", "clustered-index", "back-to-table", "covering-index", "composite-index", "leftmost-prefix", "range-query", "index-selectivity", "buffer-pool", "explain", "sql-optimization", "lock"],
  },
  "back-to-table": {
    sourceRefs: [
      "mysql-innodb-index-types",
      "mysql-how-mysql-uses-indexes",
      "mysql-column-indexes",
      "mysql-multiple-column-indexes",
      "mysql-index-extensions",
      "mysql-index-condition-pushdown",
      "mysql-range-optimization",
      "mysql-explain-statement",
      "mysql-explain-output",
      "mysql-slow-query-log",
      "mysql-performance-schema-statement-tables",
      "mysql-show-index",
      "mysql-verifying-index-usage",
      "mysql-analyze-table",
      "mysql-optimizer-statistics",
      "mysql-invisible-indexes",
      "mysql-innodb-physical-structure",
      "mysql-innodb-locks-set",
      "jeremy-cole-innodb-btree",
      "planetscale-secondary-keys",
      "planetscale-covering-indexes",
      "xiaolincoding-mysql-index",
      "javaguide-mysql-index",
    ],
    concept:
      "回表是 InnoDB 通过二级索引拿到主键后，再访问聚簇索引读取索引外字段的过程，核心成本来自额外页访问、扫描行数和锁范围。",
    explanation: [
      "概念定位：回表（Back to Table / Bookmark Lookup / Clustered Lookup）解决的是“二级索引已经定位到候选行，SQL 还需要索引外字段时怎样取到完整记录”的问题。它常出现在登录查询补充用户资料、订单列表返回详情字段、后台筛选导出、JOIN 被驱动表访问、深分页和慢 SQL 排查里。\n\n在 InnoDB 中，二级索引叶子记录保存二级索引列和主键值；整行数据保存在聚簇索引叶子记录中。SQL 命中二级索引后，返回列都来自索引时可以覆盖读取；返回列包含索引外字段时，执行器用主键再访问 `PRIMARY` B+ 树，这条额外路径就是回表。回表把索引设计、返回列选择、Buffer Pool 命中、随机 I/O、锁范围和执行计划判断连接在一起。",
      "准确定义：回表是 InnoDB 从二级索引路径转入聚簇索引路径读取整行或索引外列的动作。常见英文表达包括 `clustered index lookup`、`primary key lookup`、`bookmark lookup` 和 `row lookup`。\n\n- `secondary index probe`：按二级索引键定位候选记录，例如 `idx_user_status_created(user_id, status, created_at)`。\n- `primary key payload`：二级索引叶子记录携带该行主键，主键是回到聚簇索引的地址线索。\n- `clustered lookup`：用主键访问聚簇索引叶子页，读取完整行或索引外字段。\n- `covering index`：查询所需列都在二级索引里，执行路径可省掉回表。\n- `Index Condition Pushdown`：存储引擎在二级索引扫描阶段用索引列提前过滤候选，减少后续聚簇索引读取。\n- `Rows_examined`：慢日志和性能汇总中观察扫描压力的重要指标，常和回表成本一起分析。",
      "心智模型：把二级索引想成图书馆的主题目录，把聚簇索引想成书架上的完整书。\n\n- 目录卡片按主题排序，卡片上写着主题信息和书号，这对应二级索引叶子记录。\n- 读者只问主题和书号时，看目录卡片即可回答，这对应覆盖索引。\n- 读者还要作者简介、正文摘要或库存位置时，馆员拿书号去书架取书，这对应回表。\n- 目录命中很多卡片时，馆员要多次往返书架；书架页已经在缓存里时很快，分散在磁盘上时延迟会上升。\n\n这个模型能帮助新手记住：回表本身是正常执行路径，风险来自候选行过多、返回列过宽、缓存命中低和锁定范围扩大。",
      "主流程机制：一次典型回表可以按“二级索引定位 -> 取主键 -> 聚簇索引读取 -> SQL 层过滤和返回 -> 指标验证”理解。\n\n1. 优化器根据 `WHERE`、`ORDER BY`、`LIMIT`、返回列、统计信息和成本模型选择二级索引访问路径。\n2. 执行器进入二级索引 B+ 树，做等值查找、范围扫描或有序扫描，读到二级索引叶子记录。\n3. 叶子记录给出索引列和主键值；联合索引还会体现字段顺序和 InnoDB 自动追加主键的索引扩展效果。\n4. 执行器检查返回列、过滤列和排序列：全部可由二级索引提供时走覆盖读取，`EXPLAIN Extra` 常出现 `Using index`。\n5. 返回列或后续过滤需要索引外字段时，执行器用主键访问聚簇索引，读取整行或目标列，形成回表。\n6. ICP 可在二级索引阶段先判断仍在索引里的条件，`EXPLAIN Extra` 常出现 `Using index condition`，候选减少后再回表。\n7. 锁定读、`UPDATE`、`DELETE` 走二级索引时，扫描到的二级索引记录和对应聚簇索引记录都可能参与加锁。\n8. 慢查询日志、`EXPLAIN ANALYZE`、Performance Schema、Buffer Pool 指标和锁等待日志用于证明回表成本。",
      "实践例子：下面的订单表展示覆盖读取、回表读取和 ICP 过滤。\n\n```sql\nCREATE TABLE orders (\n  id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,\n  user_id BIGINT UNSIGNED NOT NULL,\n  status VARCHAR(16) NOT NULL,\n  amount DECIMAL(12,2) NOT NULL,\n  title VARCHAR(128) NOT NULL,\n  address VARCHAR(255) NOT NULL,\n  created_at DATETIME NOT NULL,\n  PRIMARY KEY (id),\n  KEY idx_user_status_created (user_id, status, created_at)\n) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;\n\n-- 覆盖读取：id 来自 InnoDB 追加到二级索引的主键，其他列都在联合索引中\nEXPLAIN FORMAT=TREE\nSELECT id, user_id, status, created_at\nFROM orders\nWHERE user_id = 1001 AND status = 'PAID'\nORDER BY created_at DESC\nLIMIT 20;\n\n-- 回表读取：amount 和 title 在 idx_user_status_created 外，命中候选后要访问 PRIMARY\nEXPLAIN ANALYZE\nSELECT id, user_id, status, amount, title, created_at\nFROM orders\nWHERE user_id = 1001 AND status = 'PAID'\nORDER BY created_at DESC\nLIMIT 20;\n\n-- ICP 示例：created_at 在索引内可先过滤，address 在索引外，需要回表后才能返回\nEXPLAIN\nSELECT id, address\nFROM orders\nWHERE user_id = 1001\n  AND status = 'PAID'\n  AND created_at >= '2026-06-01 00:00:00'\nORDER BY created_at DESC\nLIMIT 50;\n```\n\n第一条通常可以从二级索引直接返回。第二条需要读取索引外字段，候选行越多，回表次数越多。第三条把时间范围放在联合索引内，能先收窄候选集合，再为 `address` 回表。",
      "深层细节：回表成本取决于候选集合、页局部性、主键设计和执行器真实循环次数。\n\n- 二级索引叶子内容：InnoDB 二级索引记录保存索引列和主键列，聚簇索引叶子记录保存整行。\n- 主键宽度：二级索引携带主键，宽主键会放大二级索引体积；回表时主键也是聚簇索引定位键。\n- 页访问：二级索引页和聚簇索引页是两组 B+ 树页面，候选主键分散时会产生更多随机页访问。\n- 缓存命中：Buffer Pool 命中高时回表主要消耗 CPU 和 latch；命中低时物理读会拉高 p95/p99。\n- 覆盖收益：覆盖索引通过增加索引列减少回表，代价是页扇出下降、写入维护增加、DDL 时间和空间成本上升。\n- ICP 收益：ICP 适合联合索引扫描后仍有索引列条件的场景，它减少的是回表候选数。\n- 计划估算：统计信息、基数、直方图和数据倾斜会影响优化器估算回表成本。\n- 锁路径：锁定读和写语句沿二级索引扫描时，聚簇索引记录访问会进入锁证据链，范围越宽，锁等待概率越高。\n\n有经验的工程师评审回表时会同时看四个量：二级索引扫描多少行、真正回表多少行、返回多少行、这些页是否集中命中缓存。",
      "工程场景与取舍：回表优化要服务具体 SQL，目标是减少必要行数和必要字段。\n\n- 高频详情补充：登录、订单列表、消息列表常先用二级索引定位，再取少量字段；只把高频轻量字段加入覆盖索引。\n- 深分页：`LIMIT 100000, 20` 会扫描并丢弃大量候选，若返回索引外字段，回表压力会被放大；游标分页和延迟关联更稳定。\n- 后台导出：宽字段、大字段和低选择性筛选容易造成回表风暴，分批、只读副本、时间边界和字段裁剪更可控。\n- JOIN：被驱动表按二级索引反复查找时，回表次数会乘上外层行数，要评估驱动顺序和覆盖能力。\n- 状态列表：低基数字段单独建索引价值有限，组合租户、用户、时间和主键尾列后更容易形成小候选集。\n- 写入密集表：为了覆盖查询新增过宽索引会放大写入、Redo、Undo、复制延迟和在线 DDL 风险。\n- 灰度索引：MySQL Invisible Index 可用于评估删除或替换索引后的计划变化。",
      "边界与故障模式：线上回表问题通常表现为慢查询、I/O 抖动、计划漂移和锁等待。\n\n- 候选行过多：二级索引选择性低，`Rows_examined` 远高于 `Rows_sent`，回表循环次数增加。\n- 返回列过宽：`SELECT *`、大 `VARCHAR`、`TEXT`、`JSON` 和很少使用的展示字段会让覆盖机会变小，也增加行读取成本。\n- 排序分页放大：大 offset、宽时间范围、排序键重复和缺少稳定尾列会让扫描和回表持续增长。\n- 统计信息偏差：热点租户、状态值倾斜、批量导入和删除会让优化器低估候选行数。\n- 条件写法偏离索引：隐式类型转换、函数包裹列、前置通配符、字符集差异和跨列 `OR` 会扩大扫描范围。\n- 缓存污染：批量回表读取大量冷页，会挤压 Buffer Pool 中的热点页。\n- 锁范围扩大：`SELECT ... FOR UPDATE`、`UPDATE`、`DELETE` 命中二级索引范围时，扫描路径和聚簇索引记录都会影响锁等待。\n- 修复过度：把大量列塞进覆盖索引可能让读路径变短，同时让写入、空间、备份和变更成本持续升高。",
      "排查实践：回表排查要把 SQL 形状、执行计划、真实循环和运行指标放在同一条证据链里。\n\n1. 固化现场：记录 SQL、绑定参数、返回列、排序、分页、事务范围、执行频率、耗时分位、返回行数和业务入口。\n2. 看表结构：用 `SHOW CREATE TABLE`、`SHOW INDEX` 确认主键、二级索引列顺序、基数、可见性、字段类型和宽字段位置。\n3. 看计划：用 `EXPLAIN FORMAT=TREE` 识别二级索引范围扫描、覆盖读取、排序和过滤位置。\n4. 看真实执行：用 `EXPLAIN ANALYZE` 对比估算行数、实际行数、循环次数和耗时，重点观察聚簇索引 lookup 的次数。\n5. 看慢日志：比较 `Rows_examined`、`Rows_sent`、`Query_time`，确认扫描返回比例和耗时变化。\n6. 看聚合指标：用 Performance Schema 按 digest 找出高频、高扫描、高耗时 SQL。\n7. 看缓存与锁：观察 Buffer Pool 物理读、`SHOW ENGINE INNODB STATUS`、`performance_schema.data_locks` 和死锁日志。\n8. 小步修复：字段裁剪、补少量覆盖列、调整联合索引顺序、改游标分页、刷新统计、用 Invisible Index 灰度、分批导出，并用同一批参数复测。\n\n```sql\nSHOW CREATE TABLE orders\\G\nSHOW INDEX FROM orders;\n\nEXPLAIN FORMAT=TREE\nSELECT id, user_id, status, amount, title, created_at\nFROM orders\nWHERE user_id = 1001 AND status = 'PAID'\nORDER BY created_at DESC\nLIMIT 20;\n\nEXPLAIN ANALYZE\nSELECT id, user_id, status, amount, title, created_at\nFROM orders\nWHERE user_id = 1001 AND status = 'PAID'\nORDER BY created_at DESC\nLIMIT 20;\n\nANALYZE TABLE orders;\n\nSELECT DIGEST_TEXT, COUNT_STAR, SUM_ROWS_EXAMINED, SUM_ROWS_SENT, SUM_TIMER_WAIT\nFROM performance_schema.events_statements_summary_by_digest\nWHERE DIGEST_TEXT LIKE 'SELECT%ORDERS%'\nORDER BY SUM_TIMER_WAIT DESC\nLIMIT 10;\n\nSHOW GLOBAL STATUS LIKE 'Innodb_buffer_pool_read%';\nSHOW ENGINE INNODB STATUS\\G\n```\n\n有效修复会体现为实际扫描行数下降、聚簇索引 lookup 循环减少、`Rows_examined` 收敛、Buffer Pool 物理读下降、锁等待减少，以及写入和复制指标保持稳定。",
      "指标与命令速查：判断回表成本时优先看这些信号。\n\n- `EXPLAIN type`：`ref`、`range`、`index` 表示访问范围差异，要结合 `rows` 判断候选数量。\n- `EXPLAIN key`：确认是否使用目标二级索引。\n- `EXPLAIN Extra=Using index`：覆盖读取信号，通常代表结果可从索引中获得。\n- `EXPLAIN Extra=Using index condition`：ICP 信号，索引阶段仍有条件下推过滤。\n- `EXPLAIN ANALYZE`：看真实行数、循环次数和每个迭代器耗时。\n- 慢查询日志：`Rows_examined` / `Rows_sent` 比值越高，扫描和回表复核价值越高。\n- Performance Schema：`SUM_ROWS_EXAMINED`、`SUM_ROWS_SENT`、`SUM_TIMER_WAIT` 能按 SQL 指纹聚合影响面。\n- `SHOW INDEX Cardinality`：辅助判断选择性，统计信息漂移时配合 `ANALYZE TABLE`。\n- `Innodb_buffer_pool_read%`：物理读变化可反映回表读取冷页的影响。\n- 锁视图和 InnoDB 状态：用于识别锁定读或写语句沿二级索引回表产生的等待。",
      "常见误区：回表是 InnoDB 二级索引查询的常规路径，优化目标是控制次数和成本。\n\n- 回表发生在返回列、过滤列或写入路径需要聚簇索引记录时。\n- 覆盖索引减少回表，覆盖列选择要围绕高频 SQL 和字段宽度做取舍。\n- `SELECT *` 会扩大索引外字段需求，是列表接口回表放大的常见原因。\n- 低选择性二级索引配合宽范围查询时，回表成本常由候选行数决定。\n- `Using index condition` 代表索引条件下推，`Using index` 代表覆盖读取，两者含义不同。\n- 单次 `EXPLAIN` 只提供估算线索，生产判断要结合 `EXPLAIN ANALYZE`、慢日志和性能指标。\n- 加索引前要计算写入、空间、锁、复制延迟和回滚成本。",
      "面试追问：回表题适合按“定义 -> 叶子记录 -> 执行路径 -> 覆盖优化 -> 成本证据 -> 工程取舍”回答。\n\n- InnoDB 中回表是什么，为什么二级索引查询会触发回表？\n- 二级索引叶子记录保存什么，主键值在回表里起什么作用？\n- 聚簇索引和二级索引的叶子记录差异是什么？\n- 覆盖索引怎样减少回表，覆盖列过多会带来哪些成本？\n- ICP 和覆盖索引分别减少哪一类读取成本？\n- `Using index`、`Using index condition`、`rows`、`filtered`、`EXPLAIN ANALYZE` 循环次数如何解读？\n- 深分页、`SELECT *`、低选择性索引和热点租户怎样放大回表？\n- 慢查询日志和 Performance Schema 里哪些字段能支持回表判断？\n- 锁定读或更新走二级索引时，回表路径和锁范围有什么关系？\n- 线上慢 SQL 想减少回表，字段裁剪、覆盖索引、联合索引顺序、游标分页和统计刷新如何取舍？",
      "参考来源：本讲解主要参考 MySQL 8.4 Reference Manual 的 Clustered and Secondary Indexes、How MySQL Uses Indexes、Column Indexes、Multiple-Column Indexes、Use of Index Extensions、Index Condition Pushdown、Range Optimization、Optimizer Statistics、ANALYZE TABLE、Invisible Indexes、EXPLAIN、EXPLAIN Output、Slow Query Log、Performance Schema Statement Tables、SHOW INDEX、InnoDB Physical Structure 和 Locks Set by Different SQL Statements，并结合 PlanetScale Secondary Keys 与 Covering Indexes、Jeremy Cole 的 InnoDB B+Tree 页结构文章、小林 coding 和 JavaGuide 的索引资料校准中文表达、示例和面试问法。官方资料用于定义、执行机制、优化器行为、命令和锁语义，工程文章用于补充回表直觉、覆盖索引取舍和慢 SQL 排查路径。"
    ],
    typicalProblems: [
      "InnoDB 回表是什么，它解决二级索引路径上的哪个读取问题？",
      "二级索引叶子记录保存哪些内容，为什么主键值能把查询带回聚簇索引？",
      "聚簇索引叶子记录和二级索引叶子记录有什么差异？",
      "一次二级索引查询从命中索引到回表读取完整行的步骤是什么？",
      "覆盖索引如何减少回表，覆盖列过多会带来哪些写入和空间成本？",
      "ICP 如何减少回表候选数，它和 `Using index` 的区别是什么？",
      "深分页、低选择性索引、`SELECT *`、热点租户和统计信息偏差分别怎样放大回表？",
      "如何用 `EXPLAIN FORMAT=TREE`、`EXPLAIN ANALYZE`、慢查询日志和 Performance Schema 判断回表过多？",
      "锁定读、更新和删除走二级索引时，回表路径如何影响记录锁、间隙锁和死锁概率？",
      "线上要减少回表时，如何在字段裁剪、覆盖索引、联合索引、游标分页、统计刷新和写入成本之间取舍？"
    ],
    commonCommands: [
      "SHOW CREATE TABLE <table>\\G",
      "SHOW INDEX FROM <table>",
      "EXPLAIN FORMAT=TREE <sql>",
      "EXPLAIN ANALYZE <sql>",
      "ANALYZE TABLE <table>",
      "SHOW GLOBAL STATUS LIKE 'Innodb_buffer_pool_read%'",
      "SHOW ENGINE INNODB STATUS\\G",
      "SELECT DIGEST_TEXT, COUNT_STAR, SUM_ROWS_EXAMINED, SUM_ROWS_SENT, SUM_TIMER_WAIT FROM performance_schema.events_statements_summary_by_digest ORDER BY SUM_TIMER_WAIT DESC LIMIT 10"
    ],
    useCases: ["二级索引查询优化", "覆盖索引设计", "列表接口字段裁剪", "深分页治理", "慢 SQL 排查", "JOIN 被驱动表优化", "后台导出限流", "锁等待分析", "Buffer Pool 压力分析", "大表索引评审"],
    prerequisites: ["secondary-index", "clustered-index"],
    related: ["covering-index", "composite-index", "leftmost-prefix", "range-query", "index-selectivity", "explain", "slow-query-log", "sql-optimization", "buffer-pool", "lock"],
  },
  "covering-index": {
    sourceRefs: [
      "mysql-innodb-index-types",
      "mysql-how-mysql-uses-indexes",
      "mysql-column-indexes",
      "mysql-multiple-column-indexes",
      "mysql-index-extensions",
      "mysql-index-condition-pushdown",
      "mysql-range-optimization",
      "mysql-order-by-optimization",
      "mysql-explain-statement",
      "mysql-explain-output",
      "mysql-slow-query-log",
      "mysql-performance-schema-statement-tables",
      "mysql-show-index",
      "mysql-verifying-index-usage",
      "mysql-analyze-table",
      "mysql-optimizer-statistics",
      "mysql-invisible-indexes",
      "mysql-innodb-physical-structure",
      "mysql-innodb-buffer-pool",
      "mysql-innodb-multi-versioning",
      "mysql-innodb-consistent-read",
      "mysql-innodb-locks-set",
      "mysql-innodb-locking-reads",
      "jeremy-cole-innodb-btree",
      "planetscale-secondary-keys",
      "planetscale-covering-indexes",
      "xiaolincoding-mysql-index",
      "javaguide-mysql-index",
    ],
    concept:
      "覆盖索引是查询所需列都能由同一条索引访问路径提供的执行形态，核心价值是减少聚簇索引读取、回表次数和页访问成本。",
    explanation: [
      "概念定位：覆盖索引（Covering Index / Index-only Access）解决的是“高频查询已经命中索引，结果列还能直接从索引返回”的问题。订单列表、消息列表、用户搜索、租户后台筛选、JOIN 被驱动表小字段读取、深分页延迟关联和慢 SQL 治理都会遇到它。\n\n在 InnoDB 中，二级索引叶子记录保存索引列和主键值，聚簇索引叶子记录保存整行。查询的过滤列、排序列和返回列都能从某棵索引中取得时，执行路径停留在索引树内，`EXPLAIN Extra` 常见 `Using index`，`EXPLAIN FORMAT=TREE` 可能显示 `Covering index lookup`。覆盖索引把字段裁剪、联合索引顺序、回表成本、Buffer Pool 命中、写入放大和线上可观测证据串在一起。",
      "准确定义：覆盖索引描述的是 SQL 与索引之间的匹配关系。一个索引对某条 SQL 具有覆盖性，意味着该 SQL 需要读取的列可以由该索引记录提供。\n\n- `access columns`：用于 `WHERE`、`JOIN`、范围扫描、排序或分组的列。\n- `output columns`：`SELECT` 返回的列，以及执行阶段仍需读取的表达式输入列。\n- `primary key payload`：InnoDB 二级索引记录会携带主键列，`SELECT id` 常可被二级索引自然覆盖。\n- `Using index`：MySQL `EXPLAIN Extra` 中的覆盖读取信号，表示列信息来自索引树。\n- `Index Condition Pushdown`：ICP 在索引扫描阶段用索引列过滤候选；覆盖索引强调结果列也来自索引。\n- `index extension`：优化器会利用 InnoDB 追加到二级索引中的主键列做访问、排序、分组和覆盖判断。\n- `prefix index`：前缀索引只保存列前缀，返回完整列值时仍要读取行记录。\n\n覆盖性由具体 SQL、索引列顺序、主键、返回字段和优化器选择共同决定。",
      "心智模型：把覆盖索引想成一张能直接回答问题的目录卡。\n\n- 普通二级索引像目录，只写分类、页码和书号；读者要正文时还要取书。\n- 覆盖索引像目录卡上同时写了读者需要的摘要字段；读者问摘要时目录卡即可回答。\n- 联合索引字段顺序决定目录如何排序，也决定从哪里开始定位、如何范围扫描、能否顺手排序。\n- 返回列越少，目录卡越容易覆盖；返回大字段越多，取整本书的概率越高。\n- 目录卡越厚，维护成本、缓存占用和写入成本也越高。\n\n这个模型帮助新手记住核心取舍：覆盖索引用更宽的索引记录换取更短的读取路径。",
      "主流程机制：一次覆盖索引查询可以按“列需求分析 -> 索引选择 -> 索引树读取 -> 覆盖判断 -> 证据验证”理解。\n\n1. SQL 层解析 `WHERE`、`JOIN`、`ORDER BY`、`GROUP BY`、`LIMIT` 和 `SELECT` 列，形成访问列与返回列集合。\n2. 优化器根据统计信息、选择性、排序成本、回表成本和索引宽度比较候选索引。\n3. 执行器沿目标索引的 B+ 树定位起点；等值条件收窄前缀，范围条件决定叶子扫描区间。\n4. 叶子记录提供索引列和 InnoDB 追加主键；全部所需列都可获得时，执行器以索引记录返回结果。\n5. 覆盖读取通常减少聚簇索引 lookup、随机页访问、Buffer Pool 冷页读取和 `Rows_examined` 压力。\n6. ICP 可以先用索引列过滤候选，覆盖索引可以继续用同一条索引提供结果列，两者经常同时出现。\n7. MVCC 可见性、删除标记记录、锁定读和写语句会把执行语义带回事务与锁层面，真实行为要用 `EXPLAIN ANALYZE` 和锁证据确认。\n8. 发布后用慢查询日志、Performance Schema、Buffer Pool 读和复制延迟验证收益与副作用。",
      "实践例子：下面的订单列表展示普通二级索引、覆盖读取和宽覆盖索引的取舍。\n\n```sql\nCREATE TABLE orders (\n  id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,\n  user_id BIGINT UNSIGNED NOT NULL,\n  status VARCHAR(16) NOT NULL,\n  amount DECIMAL(12,2) NOT NULL,\n  title VARCHAR(128) NOT NULL,\n  address VARCHAR(255) NOT NULL,\n  created_at DATETIME NOT NULL,\n  PRIMARY KEY (id),\n  KEY idx_user_status_created_id (user_id, status, created_at, id),\n  KEY idx_cover_order_list (user_id, status, created_at, id, amount)\n) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;\n\n-- 列表轻量字段：过滤列、排序列、返回列都来自 idx_user_status_created_id\nEXPLAIN FORMAT=TREE\nSELECT id, user_id, status, created_at\nFROM orders\nWHERE user_id = 1001 AND status = 'PAID'\nORDER BY created_at DESC, id DESC\nLIMIT 20;\n\n-- 金额也成为高频列表字段时，可用更宽的覆盖索引减少聚簇索引读取\nEXPLAIN ANALYZE\nSELECT id, user_id, status, amount, created_at\nFROM orders FORCE INDEX (idx_cover_order_list)\nWHERE user_id = 1001 AND status = 'PAID'\nORDER BY created_at DESC, id DESC\nLIMIT 20;\n\n-- 地址属于低频宽字段，详情页按主键读取更适合\nEXPLAIN ANALYZE\nSELECT id, user_id, status, amount, title, address, created_at\nFROM orders\nWHERE id = 90001;\n```\n\n第一条是典型覆盖列表查询。第二条通过新增少量轻量字段换取少量聚簇索引读取。第三条把宽字段留给详情查询，保护列表索引的页密度和写入成本。",
      "深层细节：覆盖索引的收益来自索引内完成读取，代价来自更宽的索引记录。\n\n- 叶子内容：InnoDB 二级索引叶子记录包含二级键和主键，覆盖查询可直接利用这些列。\n- 主键追加：二级索引隐含携带主键，主键可以参与覆盖、排序和分组判断；宽主键会放大每个二级索引记录。\n- 联合顺序：等值列放前面通常有利于快速定位，范围列决定扫描区间，排序列和返回列决定覆盖收益。\n- `SELECT *`：返回整行会把需求扩展到大量索引外字段，列表接口通常通过字段裁剪获得覆盖机会。\n- 前缀索引：只保存列前缀，适合前缀过滤；返回完整字符串时仍要读取行记录。\n- MVCC 边界：二级索引覆盖读取在干净记录上收益明显；遇到新版本、删除标记或可见性复核时，InnoDB 可能读取聚簇记录判断版本。\n- 锁语义：普通一致性读最容易获得索引内读取收益；`SELECT ... FOR UPDATE`、`UPDATE`、`DELETE` 走二级索引且需要排他锁时，InnoDB 会读取并锁定对应聚簇索引记录。\n- 写入放大：新增覆盖列会降低页扇出，增加索引页数量、Redo、Undo、Buffer Pool 占用、备份体积、在线 DDL 时间和复制压力。\n- 计划稳定性：统计信息、数据倾斜、热点租户和参数分布会影响优化器选择覆盖索引、其他索引或全表扫描。\n\n老手评审覆盖索引时会同时看四个量：索引扫描多少行、节省多少聚簇 lookup、索引记录变宽多少、写入链路增加多少成本。",
      "工程场景与取舍：覆盖索引适合高频、字段少、选择性明确、排序稳定的读路径。\n\n- 订单和消息列表：`(user_id, status, created_at, id)` 覆盖 `id/status/created_at`，适合游标分页和最近记录展示。\n- 后台筛选：租户、状态、时间范围和主键尾列组成联合索引，返回少量展示字段，减少回表和排序。\n- JOIN 被驱动表：被反复 lookup 的小字段可以被索引覆盖，降低嵌套循环的内层读取成本。\n- 延迟关联：深分页先用覆盖索引取主键列表，再按主键回表读取少量详情，适合大 offset 迁移到稳定分页。\n- API 字段裁剪：列表接口只返回必要字段，详情页按主键读取宽字段，让索引服务最频繁路径。\n- 写多读少表：覆盖列选择要更克制，优先保护写入延迟、复制延迟和在线变更窗口。\n- 灰度治理：用 Invisible Index 评估删除或替换宽覆盖索引的计划影响，再观察慢 SQL 和写入指标。",
      "边界与故障模式：覆盖索引问题常表现为计划漂移、索引膨胀、写入变慢和收益失真。\n\n- 扫描范围过宽：覆盖只减少聚簇读取，低选择性或大时间范围仍会扫描大量索引叶子记录。\n- 索引过宽：把大量展示列、长字符串和低频字段放进覆盖索引，会降低页扇出并挤压 Buffer Pool。\n- 排序字段错位：联合索引字段顺序和 `ORDER BY` 方向组合决定排序收益，计划里出现 `Using filesort` 要复核字段顺序。\n- 统计信息漂移：热点租户、状态倾斜、批量导入或删除后，优化器可能低估扫描行数，`ANALYZE TABLE` 能刷新统计线索。\n- 返回列扩张：产品迭代增加列表字段后，原有覆盖关系会变化，慢查询和 `EXPLAIN` 能快速发现。\n- MVCC 与锁定读：普通快照读、当前读和写语句的执行语义不同，覆盖计划在锁场景中的实际成本要结合锁表和事务日志判断。\n- 重复索引：为了覆盖多条相似 SQL 叠加多个宽索引，会长期增加写入、空间、备份和 DDL 成本。\n- 强制索引风险：`FORCE INDEX` 适合临时验证，长期使用要定期复核数据分布和版本变化。",
      "排查实践：覆盖索引排查要把 SQL 形状、索引定义、真实计划和运行指标连成证据链。\n\n1. 固化 SQL：记录绑定参数、返回列、过滤条件、排序、分页、执行频率、p95/p99 和业务入口。\n2. 列出列需求：把 `WHERE`、`JOIN`、`ORDER BY`、`GROUP BY`、`SELECT` 涉及的列分开，确认目标索引是否能提供这些列。\n3. 查看索引定义：用 `SHOW CREATE TABLE`、`SHOW INDEX` 看列顺序、基数、可见性、前缀长度、主键宽度和重复索引。\n4. 查看计划：用 `EXPLAIN FORMAT=TREE`、`EXPLAIN` 观察 `key`、`key_len`、`rows`、`filtered`、`Extra=Using index`、排序和过滤位置。\n5. 查看真实执行：用 `EXPLAIN ANALYZE` 对比估算行数和实际行数，关注覆盖索引 lookup 的循环次数与耗时。\n6. 查看运行面：慢查询日志比较 `Rows_examined` / `Rows_sent`，Performance Schema 按 digest 汇总高频高扫描 SQL。\n7. 查看副作用：观察 Buffer Pool 物理读、Redo 写入、写入延迟、复制延迟、在线 DDL 时间和磁盘增长。\n8. 小步修复：字段裁剪、调整联合索引顺序、补少量轻量覆盖列、拆分详情查询、刷新统计信息、用 Invisible Index 灰度，并用同一批参数复测。\n\n```sql\nSHOW CREATE TABLE orders\\G\nSHOW INDEX FROM orders;\n\nEXPLAIN FORMAT=TREE\nSELECT id, user_id, status, amount, created_at\nFROM orders\nWHERE user_id = 1001 AND status = 'PAID'\nORDER BY created_at DESC, id DESC\nLIMIT 20;\n\nEXPLAIN ANALYZE\nSELECT id, user_id, status, amount, created_at\nFROM orders\nWHERE user_id = 1001 AND status = 'PAID'\nORDER BY created_at DESC, id DESC\nLIMIT 20;\n\nANALYZE TABLE orders;\n\nSELECT DIGEST_TEXT, COUNT_STAR, SUM_ROWS_EXAMINED, SUM_ROWS_SENT, SUM_TIMER_WAIT\nFROM performance_schema.events_statements_summary_by_digest\nWHERE DIGEST_TEXT LIKE 'SELECT%ORDERS%'\nORDER BY SUM_TIMER_WAIT DESC\nLIMIT 10;\n\nSHOW GLOBAL STATUS LIKE 'Innodb_buffer_pool_read%';\nALTER TABLE orders ALTER INDEX idx_cover_order_list INVISIBLE;\nALTER TABLE orders ALTER INDEX idx_cover_order_list VISIBLE;\n```\n\n有效优化通常体现为 `Using index` 出现、实际聚簇 lookup 减少、扫描返回比例收敛、排序或临时表减少、Buffer Pool 物理读下降，同时写入和复制指标保持稳定。",
      "指标与命令速查：覆盖索引质量要用可观测信号判断。\n\n- `SHOW INDEX`：看 `Key_name`、`Seq_in_index`、`Column_name`、`Sub_part`、`Cardinality`、`Visible`。\n- `EXPLAIN key`：确认优化器选择目标索引。\n- `EXPLAIN key_len`：辅助判断联合索引实际参与访问的列范围。\n- `EXPLAIN rows` / `filtered`：估算扫描量和过滤比例。\n- `Extra=Using index`：覆盖读取信号，列信息来自索引树。\n- `Extra=Using index condition`：ICP 信号，索引扫描阶段仍有条件过滤。\n- `EXPLAIN FORMAT=TREE`：观察 `Covering index lookup`、排序、过滤和访问路径。\n- `EXPLAIN ANALYZE`：看真实行数、循环次数和每个迭代器耗时。\n- 慢查询日志：`Rows_examined`、`Rows_sent`、`Query_time` 体现扫描与返回比例。\n- Performance Schema：`SUM_ROWS_EXAMINED`、`SUM_ROWS_SENT`、`SUM_TIMER_WAIT` 按 SQL 指纹衡量影响面。\n- `Innodb_buffer_pool_read%`：观察物理读变化，评估减少聚簇读取后的缓存效果。\n- Invisible Index：灰度验证索引删除、替换或合并后的计划变化。",
      "常见误区：覆盖索引是围绕具体 SQL 的访问路径优化。\n\n- 覆盖性按 SQL 判断，同一条索引可以覆盖轻量列表，也可以在详情查询中产生聚簇读取。\n- `Using index` 是覆盖读取信号，`Using index condition` 是索引条件下推信号，两者可以同时服务同一条 SQL。\n- 二级索引携带主键，返回主键列常能被自然覆盖；主键越宽，所有二级索引越厚。\n- 覆盖索引减少回表，低选择性范围扫描仍需要控制扫描行数。\n- 字段裁剪是覆盖索引设计的一部分，列表接口和详情接口分工越清楚，索引越容易保持轻量。\n- 宽覆盖索引会增加写入、缓存、空间、备份、DDL 和复制成本，收益要用生产频率与指标证明。\n- 前缀索引保存前缀值，完整列返回场景要结合执行计划验证读取路径。\n- 覆盖索引发布后要持续观察计划、统计信息、慢日志和写入指标。",
      "面试追问：覆盖索引题适合按“定义 -> InnoDB 叶子记录 -> 执行计划 -> 回表减少 -> 边界 -> 取舍”回答。\n\n- 覆盖索引解决什么问题，为什么它能减少回表？\n- InnoDB 二级索引叶子记录保存哪些内容，主键为什么常能被覆盖？\n- `Using index`、`Using index condition`、`Covering index lookup` 分别说明什么？\n- 如何根据 `WHERE`、`ORDER BY`、`SELECT` 列设计一条覆盖联合索引？\n- 覆盖索引和联合索引、最左前缀、范围查询之间是什么关系？\n- `SELECT *`、宽字段、前缀索引和低选择性条件会怎样影响覆盖收益？\n- 覆盖索引在 MVCC、锁定读和写语句中有哪些边界？\n- 如何用 `EXPLAIN ANALYZE`、慢查询日志和 Performance Schema 证明回表减少？\n- 为了覆盖查询新增字段时，如何评估写入、空间、缓存、DDL 和复制延迟？\n- 线上出现计划漂移时，如何用统计刷新、Invisible Index、字段裁剪和索引合并治理？",
      "参考来源：本讲解主要参考 MySQL 8.4 Reference Manual 的 How MySQL Uses Indexes、Column Indexes、Multiple-Column Indexes、Clustered and Secondary Indexes、Use of Index Extensions、Index Condition Pushdown、Range Optimization、ORDER BY Optimization、Optimizer Statistics、ANALYZE TABLE、Invisible Indexes、EXPLAIN、EXPLAIN Output、Slow Query Log、Performance Schema Statement Tables、SHOW INDEX、InnoDB Physical Structure、Buffer Pool、Multi-Versioning、Consistent Reads、Locking Reads 和 Locks Set by Different SQL Statements，并结合 PlanetScale Secondary Keys 与 Covering Indexes、Jeremy Cole 的 InnoDB B+Tree 页结构文章、小林 coding 和 JavaGuide 的索引资料校准中文表达、案例和面试问法。官方资料用于定义、执行计划信号、优化器行为、MVCC 与锁边界，工程文章用于补充覆盖索引直觉、回表成本和索引治理取舍。"
    ],
    typicalProblems: [
      "覆盖索引是什么，它解决 MySQL 二级索引路径上的哪个性能问题？",
      "InnoDB 二级索引叶子记录保存哪些内容，为什么主键列常被自然覆盖？",
      "如何从 `WHERE`、`ORDER BY`、`SELECT` 列判断某条 SQL 是否能被覆盖？",
      "`Using index`、`Using index condition` 和 `Covering index lookup` 分别代表什么执行含义？",
      "覆盖索引如何减少回表，减少的是哪些页访问和运行指标？",
      "联合索引字段顺序、最左前缀、范围条件和排序方向如何影响覆盖索引设计？",
      "`SELECT *`、宽字段、前缀索引、低选择性条件和热点租户分别会怎样影响覆盖收益？",
      "MVCC、删除标记记录、锁定读和写语句会给覆盖索引带来哪些边界？",
      "如何用 `EXPLAIN ANALYZE`、慢查询日志、Performance Schema 和 Buffer Pool 指标验证优化结果？",
      "新增宽覆盖索引时，如何评估写入放大、空间增长、在线 DDL、复制延迟和回滚路径？"
    ],
    commonCommands: [
      "SHOW CREATE TABLE <table>\\G",
      "SHOW INDEX FROM <table>",
      "EXPLAIN <sql>",
      "EXPLAIN FORMAT=TREE <sql>",
      "EXPLAIN ANALYZE <sql>",
      "ANALYZE TABLE <table>",
      "SELECT DIGEST_TEXT, COUNT_STAR, SUM_ROWS_EXAMINED, SUM_ROWS_SENT, SUM_TIMER_WAIT FROM performance_schema.events_statements_summary_by_digest ORDER BY SUM_TIMER_WAIT DESC LIMIT 10",
      "SHOW GLOBAL STATUS LIKE 'Innodb_buffer_pool_read%'",
      "ALTER TABLE <table> ALTER INDEX <index_name> INVISIBLE",
      "ALTER TABLE <table> ALTER INDEX <index_name> VISIBLE"
    ],
    useCases: ["高频列表查询", "字段裁剪优化", "回表成本治理", "游标分页", "JOIN 被驱动表优化", "后台筛选", "慢 SQL 排查", "索引合并治理", "Buffer Pool 压力控制", "大表索引评审"],
    prerequisites: ["secondary-index", "back-to-table"],
    related: ["back-to-table", "composite-index", "leftmost-prefix", "range-query", "index-selectivity", "explain", "slow-query-log", "sql-optimization", "buffer-pool"],
  },
  "composite-index": {
    sourceRefs: [
      "mysql-multiple-column-indexes",
      "mysql-how-mysql-uses-indexes",
      "mysql-column-indexes",
      "mysql-innodb-index-types",
      "mysql-index-extensions",
      "mysql-range-optimization",
      "mysql-order-by-optimization",
      "mysql-group-by-optimization",
      "mysql-limit-optimization",
      "mysql-index-condition-pushdown",
      "mysql-explain-statement",
      "mysql-explain-output",
      "mysql-verifying-index-usage",
      "mysql-show-index",
      "mysql-analyze-table",
      "mysql-optimizer-statistics",
      "mysql-invisible-indexes",
      "mysql-innodb-physical-structure",
      "mysql-innodb-buffer-pool",
      "mysql-performance-schema-statement-tables",
      "mysql-slow-query-log",
      "mysql-innodb-locks-set",
      "planetscale-btree-indexes",
      "planetscale-secondary-keys",
      "planetscale-covering-indexes",
      "xiaolincoding-mysql-index",
      "javaguide-mysql-index",
      "use-the-index-luke-where-clause",
      "solarwinds-mysql-indexes",
    ],
    concept:
      "联合索引是按多个列依次排序的复合 B+ 树访问路径，核心价值是把多条件过滤、排序、分组和覆盖读取合并到一条可验证的索引路径中。",
    explanation: [
      "概念定位：联合索引（Composite Index / Multiple-Column Index）解决的是“业务查询同时按多个字段过滤、排序、分页或返回少量列”时的访问路径设计问题。订单列表、租户后台筛选、消息时间线、状态流转查询、JOIN 被驱动表查找、排行榜、报表分组和慢 SQL 治理都会反复用到它。\n\nMySQL 可以创建包含多个列的索引，官方文档把它称为 multiple-column index；InnoDB 中联合二级索引的叶子记录保存联合键列和主键列。联合索引的关键判断集中在四件事：列顺序、最左前缀、范围边界、覆盖收益。它把查询语义、B+ 树排序、优化器成本、Buffer Pool 压力和写入放大串成一条工程取舍链。",
      "准确定义：联合索引是在一个索引定义中按顺序放入多个列，例如 `(tenant_id, status, created_at, id)`。索引记录先按 `tenant_id` 排序，再在相同 `tenant_id` 内按 `status` 排序，再按 `created_at` 和 `id` 排序。\n\n- `leftmost prefix`：优化器可以从索引最左侧连续列构造查找区间，例如 `(a)`、`(a,b)`、`(a,b,c)`。\n- `key part`：联合索引中的单个组成列，`EXPLAIN key_len` 可辅助判断参与访问的 key part 范围。\n- `range interval`：范围访问把联合键元组限制在一个或多个有序区间内。\n- `index extension`：InnoDB 会把主键列追加到二级索引记录中，主键可参与覆盖、排序和执行计划判断。\n- `covering`：过滤列、排序列和返回列都来自同一条联合索引时，`EXPLAIN Extra` 常见 `Using index`。\n- `ICP`：Index Condition Pushdown 能在索引扫描阶段用索引列先过滤候选记录。\n\n联合索引是一条具体 SQL 访问路径的设计结果，评审时要把 `WHERE`、`JOIN`、`ORDER BY`、`GROUP BY`、`LIMIT` 和 `SELECT` 列一起看。",
      "心智模型：把联合索引想成一本多级排序的电话簿。\n\n- 第一列是一级目录，决定先翻到哪个大区间。\n- 第二列是二级目录，只有在一级目录固定后才能快速缩小范围。\n- 范围列像翻到一段连续页码，后续列仍在索引记录里，但更适合作为过滤或覆盖信息。\n- 排序列跟索引顺序一致时，扫描叶子页天然得到目标顺序。\n- 返回列被索引记录包含时，查询可以直接从目录页回答。\n- 索引列越多，目录越厚，写入、缓存、DDL 和复制成本也越高。\n\n这个模型帮助新手记住核心规律：联合索引先服务定位，再服务顺序，最后服务覆盖。",
      "主流程机制：一次联合索引查询可以按“列需求 -> 前缀区间 -> 叶子扫描 -> 过滤排序 -> 返回结果 -> 指标验证”理解。\n\n1. SQL 层收集等值条件、范围条件、连接条件、排序列、分组列、分页和返回列。\n2. 优化器根据统计信息、列选择性、索引顺序、回表成本、排序成本和 LIMIT 成本选择候选索引。\n3. 等值条件从最左列开始连续收窄区间，例如 `tenant_id = 8 AND status = 'PAID'` 定位到一个更小的键范围。\n4. 范围条件把区间变成连续扫描，例如 `created_at >= '2026-06-01'` 决定扫描起止位置。\n5. 后续索引列仍可参与 ICP、覆盖读取、排序判断或过滤，真实使用位置由执行计划体现。\n6. 叶子页按联合键顺序扫描；需要整行字段时用叶子记录中的主键回到聚簇索引读取。\n7. `ORDER BY` 与索引顺序、常量前缀和方向一致时，MySQL 可以用索引顺序减少 `filesort`。\n8. `GROUP BY`、`LIMIT`、覆盖读取和 JOIN 内层 lookup 会进一步影响访问成本。\n9. 发布后用 `EXPLAIN ANALYZE`、慢查询日志、Performance Schema 和 Buffer Pool 指标验证估算与真实行为。",
      "实践例子：下面的订单列表把多条件过滤、排序分页和覆盖读取放到同一条联合索引中。\n\n```sql\nCREATE TABLE orders (\n  id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,\n  tenant_id BIGINT UNSIGNED NOT NULL,\n  user_id BIGINT UNSIGNED NOT NULL,\n  status VARCHAR(16) NOT NULL,\n  amount DECIMAL(12,2) NOT NULL,\n  created_at DATETIME NOT NULL,\n  paid_at DATETIME NULL,\n  PRIMARY KEY (id),\n  KEY idx_tenant_status_created_id (tenant_id, status, created_at DESC, id DESC),\n  KEY idx_tenant_user_created (tenant_id, user_id, created_at DESC, id DESC)\n) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;\n\nEXPLAIN FORMAT=TREE\nSELECT id, tenant_id, status, created_at\nFROM orders\nWHERE tenant_id = 42\n  AND status = 'PAID'\n  AND created_at >= '2026-06-01'\nORDER BY created_at DESC, id DESC\nLIMIT 20;\n\nEXPLAIN ANALYZE\nSELECT id, tenant_id, user_id, created_at\nFROM orders\nWHERE tenant_id = 42\n  AND user_id = 10001\nORDER BY created_at DESC, id DESC\nLIMIT 20;\n```\n\n第一条查询用 `(tenant_id, status)` 做等值前缀，用 `created_at` 做范围和排序，用 `id` 让分页顺序稳定。第二条查询服务用户维度时间线，`tenant_id` 先隔离租户数据，`user_id` 再缩小用户范围。",
      "列顺序设计：联合索引顺序要从业务查询集合和数据分布出发，常用策略是“等值前缀稳定、范围列靠后、排序列连续、返回列克制”。\n\n- 高频入口优先：先服务调用频率高、p95/p99 敏感、扫描行数大的 SQL。\n- 等值列前置：租户、用户、状态、类型等常量条件适合形成连续前缀。\n- 选择性结合场景：高选择性列能快速缩小范围，低选择性列在租户隔离、排序或覆盖场景仍有价值。\n- 范围列控制扫描：时间、金额、分数等范围列通常放在等值前缀之后，决定叶子扫描区间。\n- 排序列保持连续：`ORDER BY created_at DESC, id DESC` 与索引尾列一致时可减少排序成本。\n- 主键尾列稳定分页：把 `id` 放在时间后面可处理相同时间戳下的确定顺序，也便于游标分页。\n- 返回列少量追加：高频列表返回的轻量字段可作为覆盖列，长文本和低频字段交给详情查询。\n- 重复索引治理：`(a,b,c)` 已经服务 `(a)` 和 `(a,b)` 的前缀查询，评审时合并相近索引。",
      "深层细节：联合索引的收益来自有序元组，成本来自更宽的树和更复杂的计划选择。\n\n- B+ 树排序：联合键按字典序排列，最左列决定连续区间的入口。\n- 范围边界：`=`、`<=>`、`IS NULL` 能继续扩展 key part；`>`、`<`、`BETWEEN`、`LIKE 'abc%'` 等范围条件会形成扫描区间。\n- 后续列价值：范围列后的索引列仍可用于 ICP、覆盖、排序细节或回表减少，具体收益要看 `EXPLAIN` 和真实执行。\n- Index Merge 取舍：多个单列索引可能触发 Index Merge；一条匹配查询形状的联合索引通常提供更稳定的过滤顺序和排序能力。\n- 主键追加：InnoDB 二级索引携带主键，主键宽度会放大所有联合二级索引；联合索引尾部显式放主键也能表达业务排序稳定性。\n- 排序方向：MySQL 支持前向或反向扫描；混合 `ASC`/`DESC` 场景要让索引方向与排序同质性匹配。\n- 前缀索引：字符串前缀索引可降低空间，但排序、覆盖和唯一性判断只能基于保存的前缀。\n- NULL 与隐式转换：`NULL`、字符集/排序规则、函数包裹、类型转换会影响范围构造和索引使用。\n- 统计信息：`Cardinality`、直方图、索引 dives 和 `ANALYZE TABLE` 影响优化器估算，数据倾斜会放大估算误差。",
      "工程场景与取舍：联合索引适合把一组稳定查询压缩成少数高质量访问路径。\n\n- 多租户列表：`(tenant_id, status, created_at, id)` 同时隔离租户、过滤状态、按时间倒序分页。\n- 用户时间线：`(tenant_id, user_id, created_at, id)` 服务用户维度消息、订单和审计日志。\n- JOIN 内层查找：被驱动表用 `(foreign_id, status, id)` 降低嵌套循环中的内层扫描。\n- 后台筛选：`(tenant_id, type, created_at, id)` 适合常见枚举过滤加时间范围。\n- 报表分组：分组列与过滤列顺序匹配时，索引可减少临时表和排序压力。\n- 深分页治理：先用联合覆盖索引取主键，再延迟关联读取详情。\n- 写多读少表：索引列数和覆盖列更克制，优先保护写入延迟、Redo、Buffer Pool 和复制延迟。\n- 大表变更：新增或替换联合索引用在线 DDL、Invisible Index、限速发布和回滚计划控制风险。",
      "边界与故障模式：联合索引的线上问题通常表现为扫描变大、排序回归、计划漂移和写入成本升高。\n\n- 前导列缺失：查询从第二列开始过滤时，访问路径会转向全索引扫描、Skip Scan、Index Merge 或其他索引。\n- 范围过宽：时间跨度、状态低选择性、热点租户会让叶子扫描行数远大于返回行数。\n- 排序错位：`ORDER BY` 使用非连续列、表达式、跨表列或方向组合错配时，计划可能出现 `Using filesort`。\n- 返回字段扩张：接口新增列会改变覆盖关系，回表次数和 Buffer Pool 物理读随之上升。\n- 统计信息陈旧：批量导入、删除、归档和租户倾斜会让 `rows` 估算偏离实际，`EXPLAIN ANALYZE` 能暴露差距。\n- 宽索引副作用：长字符串、JSON、低频展示字段进入联合索引后，页密度下降，写入、备份、DDL 和复制压力增加。\n- 重复与交叉索引：多个近似联合索引会提高维护成本，索引评审要保留能覆盖最多高频查询的组合。\n- 锁与写语句：`UPDATE`、`DELETE` 走联合二级索引时会结合隔离级别设置记录锁、间隙锁或 Next-Key Lock，范围越大锁影响越大。",
      "排查实践：联合索引排查要把 SQL 形状、索引结构、优化器估算和真实运行指标放在同一张证据表里。\n\n1. 固化 SQL：记录绑定参数、返回列、过滤条件、排序、分页、执行频率、慢日志样本和业务入口。\n2. 拆列需求：把 `WHERE` 等值列、范围列、JOIN 列、`ORDER BY` 列、`GROUP BY` 列、`SELECT` 列分开。\n3. 对照索引：用 `SHOW CREATE TABLE` 和 `SHOW INDEX` 看 `Seq_in_index`、列顺序、`Sub_part`、`Cardinality`、`Visible` 和主键宽度。\n4. 看计划估算：用 `EXPLAIN` 关注 `type`、`possible_keys`、`key`、`key_len`、`rows`、`filtered`、`Extra`。\n5. 看树形计划：用 `EXPLAIN FORMAT=TREE` 观察 range scan、covering index lookup、filter、sort 和 join 顺序。\n6. 看真实执行：用 `EXPLAIN ANALYZE` 对比估算行数和实际行数，定位扫描放大、回表、排序和循环次数。\n7. 看运行指标：慢查询日志看 `Rows_examined` / `Rows_sent`，Performance Schema 按 digest 汇总影响面。\n8. 看副作用：观察 Buffer Pool 物理读、Redo 写入、写延迟、复制延迟、磁盘增长和在线 DDL 时间。\n9. 小步治理：字段裁剪、调整列顺序、拆分详情查询、补稳定主键尾列、刷新统计信息、合并重复索引、用 Invisible Index 灰度验证。\n\n```sql\nSHOW CREATE TABLE orders\\G\nSHOW INDEX FROM orders;\n\nEXPLAIN\nSELECT id, tenant_id, status, created_at\nFROM orders\nWHERE tenant_id = 42 AND status = 'PAID'\nORDER BY created_at DESC, id DESC\nLIMIT 20;\n\nEXPLAIN FORMAT=TREE\nSELECT id, tenant_id, status, created_at\nFROM orders\nWHERE tenant_id = 42 AND status = 'PAID'\nORDER BY created_at DESC, id DESC\nLIMIT 20;\n\nEXPLAIN ANALYZE\nSELECT id, tenant_id, status, created_at\nFROM orders\nWHERE tenant_id = 42 AND status = 'PAID'\nORDER BY created_at DESC, id DESC\nLIMIT 20;\n\nANALYZE TABLE orders;\n\nSELECT DIGEST_TEXT, COUNT_STAR, SUM_ROWS_EXAMINED, SUM_ROWS_SENT, SUM_TIMER_WAIT\nFROM performance_schema.events_statements_summary_by_digest\nWHERE DIGEST_TEXT LIKE 'SELECT%ORDERS%'\nORDER BY SUM_TIMER_WAIT DESC\nLIMIT 10;\n\nALTER TABLE orders ALTER INDEX idx_tenant_status_created_id INVISIBLE;\nALTER TABLE orders ALTER INDEX idx_tenant_status_created_id VISIBLE;\n```\n\n有效修复通常体现为目标索引稳定命中、`key_len` 对应连续前缀、实际扫描行数下降、`Using filesort` 或临时表减少、`Rows_examined` / `Rows_sent` 收敛，写入链路指标保持在发布前基线附近。",
      "指标与命令速查：联合索引评审要重点看这些信号。\n\n- `SHOW INDEX`：`Seq_in_index` 表示列顺序，`Cardinality` 体现粗略区分度，`Sub_part` 表示前缀索引长度。\n- `EXPLAIN type`：`ref`、`range`、`index`、`ALL` 体现访问方式层级。\n- `EXPLAIN key`：确认选择的联合索引。\n- `EXPLAIN key_len`：辅助判断连续 key part 参与访问的范围。\n- `EXPLAIN rows` / `filtered`：估算扫描量和过滤比例。\n- `Extra=Using index`：覆盖读取信号。\n- `Extra=Using index condition`：索引条件下推信号。\n- `Extra=Using filesort`：排序额外阶段信号。\n- `EXPLAIN FORMAT=TREE`：观察访问路径、排序位置和覆盖 lookup。\n- `EXPLAIN ANALYZE`：真实行数、循环次数和迭代器耗时。\n- 慢查询日志：`Rows_examined`、`Rows_sent`、`Query_time` 体现扫描放大。\n- Performance Schema：`SUM_ROWS_EXAMINED`、`SUM_ROWS_SENT`、`SUM_TIMER_WAIT` 衡量 SQL 指纹影响面。\n- `Innodb_buffer_pool_read%`：观察物理读变化。\n- Invisible Index：灰度验证索引删除、替换和合并。",
      "常见误区：联合索引的正确心智模型是“围绕查询形状设计有序访问路径”。\n\n- 列顺序决定定位区间、排序能力和覆盖收益。\n- 最左前缀关注连续 key part，查询条件书写顺序由优化器规范化，索引定义顺序决定访问能力。\n- 范围列后的索引列仍有过滤、覆盖和排序价值，真实收益由执行计划和指标确认。\n- 多个单列索引与一条联合索引服务的访问形态差异明显，联合索引更适合稳定多条件查询和排序分页。\n- 低选择性列在租户隔离、常量前缀、排序和覆盖场景中仍可能成为合适前导列。\n- `SELECT *` 会扩大列需求，列表接口字段裁剪能显著提升覆盖机会。\n- 宽联合索引会增加写入、缓存、空间、备份、DDL 和复制成本，发布前要用频率与指标证明收益。\n- 联合索引上线后要持续观察统计信息、计划漂移、慢日志和业务参数分布。",
      "面试追问：联合索引题适合按“定义 -> 有序元组 -> 最左前缀 -> 范围边界 -> 排序覆盖 -> 线上验证 -> 取舍”回答。\n\n- 联合索引是什么，和多个单列索引的访问路径有什么差异？\n- 为什么 `(a,b,c)` 能服务 `(a)`、`(a,b)`、`(a,b,c)` 这类前缀查询？\n- 范围条件对联合索引后续列的使用有什么影响？\n- `WHERE a=? AND b BETWEEN ? AND ? ORDER BY c` 如何判断是否需要调整索引？\n- `ORDER BY` 如何利用联合索引顺序减少 `filesort`？\n- 联合索引如何同时服务覆盖索引和游标分页？\n- 低选择性列、租户列、状态列和时间列应该如何排序？\n- 如何通过 `EXPLAIN key_len`、`rows`、`Extra` 和 `EXPLAIN ANALYZE` 验证列顺序有效？\n- 联合索引过宽会带来哪些写入、空间、缓存、DDL 和复制副作用？\n- 线上计划漂移时，如何用统计刷新、Invisible Index、字段裁剪和重复索引合并治理？",
      "参考来源：本讲解主要参考 MySQL 8.4 Reference Manual 的 Multiple-Column Indexes、How MySQL Uses Indexes、Column Indexes、Clustered and Secondary Indexes、Use of Index Extensions、Range Optimization、ORDER BY Optimization、GROUP BY Optimization、LIMIT Query Optimization、Index Condition Pushdown、EXPLAIN、EXPLAIN Output、Verifying Index Usage、SHOW INDEX、ANALYZE TABLE、Optimizer Statistics、Invisible Indexes、InnoDB Physical Structure、Buffer Pool、Slow Query Log、Performance Schema Statement Tables 和 InnoDB Locks Set by Different SQL Statements，并结合 PlanetScale 的 B-tree、Secondary Keys、Covering Indexes，Use The Index, Luke 的 WHERE Clause，小林 coding、JavaGuide 与 SolarWinds 的索引资料校准中文表达、例子和面试问法。官方资料用于定义、优化器行为、执行计划信号和边界说明，工程文章用于补充索引设计直觉、线上治理和取舍经验。"
    ],
    typicalProblems: [
      "联合索引是什么，它解决多条件查询中的哪个访问路径问题？",
      "MySQL 为什么能用 `(a,b,c)` 服务 `(a)`、`(a,b)` 和 `(a,b,c)` 的前缀查询？",
      "联合索引字段顺序如何影响过滤、排序、分组、覆盖和回表？",
      "等值条件、范围条件、`IN`、`LIKE 'abc%'`、`IS NULL` 在联合索引里分别怎样形成扫描区间？",
      "`ORDER BY`、`GROUP BY` 和 `LIMIT` 如何利用联合索引减少排序、临时表和扫描行数？",
      "联合索引和多个单列索引、Index Merge、覆盖索引之间如何取舍？",
      "为什么低选择性状态列有时仍适合作为联合索引前导列？",
      "如何用 `EXPLAIN key_len`、`rows`、`Extra` 和 `EXPLAIN ANALYZE` 验证联合索引真实效果？",
      "联合索引过宽会给写入、缓存、空间、在线 DDL 和复制带来哪些成本？",
      "线上联合索引计划漂移时，如何用统计刷新、Invisible Index、字段裁剪和重复索引合并治理？"
    ],
    commonCommands: [
      "SHOW CREATE TABLE <table>\\G",
      "SHOW INDEX FROM <table>",
      "EXPLAIN <sql>",
      "EXPLAIN FORMAT=TREE <sql>",
      "EXPLAIN ANALYZE <sql>",
      "ANALYZE TABLE <table>",
      "SELECT DIGEST_TEXT, COUNT_STAR, SUM_ROWS_EXAMINED, SUM_ROWS_SENT, SUM_TIMER_WAIT FROM performance_schema.events_statements_summary_by_digest ORDER BY SUM_TIMER_WAIT DESC LIMIT 10",
      "SHOW GLOBAL STATUS LIKE 'Innodb_buffer_pool_read%'",
      "ALTER TABLE <table> ALTER INDEX <index_name> INVISIBLE",
      "ALTER TABLE <table> ALTER INDEX <index_name> VISIBLE"
    ],
    useCases: ["多条件查询优化", "租户列表分页", "用户时间线", "状态流转查询", "排序分页优化", "覆盖索引设计", "JOIN 被驱动表优化", "报表分组", "慢 SQL 排查", "重复索引治理"],
    prerequisites: ["mysql-index", "b-plus-tree", "secondary-index"],
    related: ["leftmost-prefix", "range-query", "covering-index", "index-selectivity", "order-by", "group-by", "explain", "sql-optimization", "slow-query-log", "buffer-pool"],
  },
  "leftmost-prefix": {
    sourceRefs: [
      "mysql-multiple-column-indexes",
      "mysql-how-mysql-uses-indexes",
      "mysql-column-indexes",
      "mysql-range-optimization",
      "mysql-order-by-optimization",
      "mysql-group-by-optimization",
      "mysql-limit-optimization",
      "mysql-index-condition-pushdown",
      "mysql-index-extensions",
      "mysql-explain-statement",
      "mysql-explain-output",
      "mysql-verifying-index-usage",
      "mysql-show-index",
      "mysql-analyze-table",
      "mysql-optimizer-statistics",
      "mysql-invisible-indexes",
      "mysql-innodb-index-types",
      "mysql-innodb-physical-structure",
      "mysql-innodb-buffer-pool",
      "mysql-performance-schema-statement-tables",
      "mysql-slow-query-log",
      "planetscale-btree-indexes",
      "planetscale-secondary-keys",
      "planetscale-covering-indexes",
      "xiaolincoding-mysql-index",
      "javaguide-mysql-index",
      "use-the-index-luke-where-clause",
      "solarwinds-mysql-indexes",
    ],
    concept:
      "最左前缀是联合索引按最左连续列构造有序查找区间的规则，核心价值是判断一条 SQL 能用到联合索引的哪些列、能扫描多窄、能否顺序返回。",
    explanation: [
      "概念定位：最左前缀（Leftmost Prefix / Leftmost Prefix Rule）解决的是“联合索引 `(a,b,c)` 到底能服务哪些查询形状”的判断问题。慢 SQL 排查、索引设计评审、列表排序分页、JOIN 被驱动表查找、范围查询、覆盖索引和面试追问都会反复遇到它。\n\nMySQL 官方 Multiple-Column Indexes 文档说明，多列索引可以被使用在最左连续前缀上；Range Optimization 文档进一步把联合键看成多个 key part 组成的有序元组。对工程师来说，最左前缀的关键价值是把一句模糊的“用上索引”拆成三件可验证的事：定位区间用了哪些连续列、后续列还能提供什么收益、执行计划和真实指标是否支撑这个判断。",
      "准确定义：最左前缀指联合索引从最左列开始、连续参与访问路径构造的索引列序列。例如索引 `KEY idx_tenant_status_time (tenant_id, status, created_at)` 的可定位前缀包括 `(tenant_id)`、`(tenant_id, status)`、`(tenant_id, status, created_at)`。\n\n- `leftmost prefix`：联合索引最左侧连续 key part。\n- `key part`：联合索引中的单个组成列。\n- `search interval`：优化器根据条件在 B+ 树中构造的扫描区间。\n- `equality range`：`=`、`<=>`、`IS NULL` 等条件通常能继续向右扩展连续 key part。\n- `range condition`：`>`、`<`、`BETWEEN`、`LIKE 'abc%'` 等条件形成区间边界。\n- `covering`：后续列即使进入范围边界之后，仍可能作为覆盖列减少回表。\n- `ICP`：Index Condition Pushdown 能在索引扫描阶段用索引列继续过滤候选记录。\n\n最左前缀判断的是访问路径的连续有序定位能力，同时要结合过滤、排序、分组、覆盖和真实计划一起看。",
      "心智模型：把联合索引想成按多级目录排好的纸质通讯录。\n\n- 第一列是一级目录，决定先翻到哪个大区间。\n- 第二列只在第一列确定后才有局部有序意义。\n- 第三列只在前两列形成连续上下文后才适合继续快速定位。\n- 范围条件像翻到一段页码，后续目录项仍在纸上，但主要用于边扫边筛、覆盖返回或辅助顺序判断。\n- 查询条件的书写顺序可以由优化器规范化，索引定义顺序决定目录层级。\n\n这个模型帮助新手抓住本质：最左前缀利用的是联合 B+ 树从左到右的字典序排列。",
      "主流程机制：一次最左前缀判断可以按“索引元组 -> 条件归类 -> 连续前缀 -> 范围边界 -> 执行证据”走完。\n\n1. 读取索引定义，确认 key part 顺序，例如 `(tenant_id, status, created_at, id)`。\n2. 把 SQL 条件归类为等值、范围、排序、分组、返回列、函数表达式、隐式转换和跨表条件。\n3. 从最左 key part 开始寻找连续可定位条件；前导列存在等值条件时继续看下一列。\n4. 遇到范围条件时，优化器通常把当前 key part 构造成扫描区间，后续 key part 的定位能力明显下降。\n5. 后续索引列仍可能参与 ICP、覆盖读取、排序细节、分组和过滤，收益以执行计划为准。\n6. `ORDER BY` 与索引前缀、常量列、方向和连续性匹配时，MySQL 可以按索引顺序返回结果。\n7. `GROUP BY` 和 `LIMIT` 会改变成本模型，优化器可能优先选择能少扫、少排或早停的访问路径。\n8. 用 `EXPLAIN`、`EXPLAIN FORMAT=TREE`、`EXPLAIN ANALYZE`、慢查询日志和 Performance Schema 验证估算与真实行为。",
      "实践例子：下面的订单表展示最左前缀、范围条件、排序分页和覆盖列的综合判断。\n\n```sql\nCREATE TABLE orders (\n  id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,\n  tenant_id BIGINT UNSIGNED NOT NULL,\n  user_id BIGINT UNSIGNED NOT NULL,\n  status VARCHAR(16) NOT NULL,\n  amount DECIMAL(12,2) NOT NULL,\n  created_at DATETIME NOT NULL,\n  PRIMARY KEY (id),\n  KEY idx_tenant_status_time_id (tenant_id, status, created_at DESC, id DESC),\n  KEY idx_tenant_user_time_id (tenant_id, user_id, created_at DESC, id DESC)\n) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;\n\n-- 命中连续前缀 tenant_id + status，并用 created_at 构造范围\nEXPLAIN FORMAT=TREE\nSELECT id, status, created_at\nFROM orders\nWHERE tenant_id = 42\n  AND status = 'PAID'\n  AND created_at >= '2026-06-01'\nORDER BY created_at DESC, id DESC\nLIMIT 20;\n\n-- 缺少最左列 tenant_id，user_id 位于另一条索引的第二列时，需要重新评估访问路径\nEXPLAIN ANALYZE\nSELECT id, tenant_id, user_id, created_at\nFROM orders\nWHERE user_id = 10001\nORDER BY created_at DESC, id DESC\nLIMIT 20;\n\n-- SQL 条件书写顺序变化，连续前缀判断仍以索引定义为准\nEXPLAIN\nSELECT id\nFROM orders\nWHERE status = 'PAID' AND tenant_id = 42;\n```\n\n第一条查询有稳定的最左连续前缀，适合列表分页。第二条查询要么走其他索引，要么扫描更大范围。第三条说明 SQL 文本顺序和索引 key part 顺序是两件事。",
      "深层细节：最左前缀的本质是联合键的字典序区间裁剪，老手需要关注范围、排序、ICP 和统计信息的边界。\n\n- 字典序排列：`(a,b,c)` 先按 `a` 排，再在相同 `a` 中按 `b` 排，再按 `c` 排；跳过 `a` 后，`b` 在全局上失去连续聚集能力。\n- 等值扩展：`a = ? AND b = ?` 能把区间缩到更小的连续范围，`c` 可继续参与范围或排序。\n- 范围边界：`a = ? AND b > ? AND c = ?` 中，`b` 形成范围扫描，`c` 更常见的价值是索引内过滤、ICP 或覆盖。\n- `IN` 条件：`IN` 可被优化为多个等值区间，组合数量会影响范围枚举成本。\n- `LIKE 'abc%'`：前缀匹配可形成字符串范围；前导通配符和函数包裹会破坏可定位表达式。\n- 排序约束：常量前缀后的连续索引列可以服务 `ORDER BY`；混合方向、表达式、跨表列和非连续列会带来额外排序。\n- 分组约束：分组列与最左前缀顺序匹配时，索引顺序可减少临时表和排序压力。\n- 主键扩展：InnoDB 二级索引记录携带主键，优化器可利用主键扩展做覆盖、排序或计划判断。\n- 统计信息：`Cardinality`、索引 dives、直方图和 `ANALYZE TABLE` 影响优化器是否选择这条索引，数据倾斜会放大估算误差。",
      "工程场景与取舍：最左前缀规则服务的是查询集合设计，重点在稳定访问路径和可观测收益。\n\n- 多租户后台：`(tenant_id, status, created_at, id)` 让租户成为前导隔离列，状态和时间继续缩小列表扫描。\n- 用户时间线：`(tenant_id, user_id, created_at, id)` 适合按用户倒序翻页，`id` 让同一时间戳下顺序稳定。\n- 状态流转表：`(tenant_id, status, updated_at, id)` 适合状态看板和待处理任务扫描。\n- JOIN 被驱动表：被驱动表索引通常把连接列和高频过滤列放在最左连续位置，降低嵌套循环内层扫描。\n- 报表分组：过滤列形成常量前缀，分组列保持连续时，索引顺序能减少中间结果成本。\n- 覆盖列表：前缀负责定位和顺序，少量返回列追加到索引尾部获取覆盖收益。\n- 写入敏感表：索引列数更克制，优先服务最频繁和最昂贵的查询，重复索引用合并和 Invisible Index 灰度验证。",
      "边界与故障模式：最左前缀相关故障通常表现为扫描突然变大、排序回归、计划漂移和索引设计冲突。\n\n- 前导列缺失：查询只按 `b` 或 `c` 过滤时，`(a,b,c)` 的有序聚集能力大幅降低，计划可能转向全索引扫描、Index Merge、Skip Scan 或其他索引。\n- 范围过早：把时间范围放在低选择性等值列之前，会让后续条件主要变成过滤，扫描行数增大。\n- 排序错配：`ORDER BY` 使用非连续列、表达式或方向组合错配时，计划可能出现 `Using filesort`。\n- 参数倾斜：热点租户、热门状态和大时间窗口会让同一 SQL 的扫描量差异巨大。\n- 统计陈旧：批量导入、归档、删除和冷热数据迁移后，优化器可能错误估算最左前缀选择性。\n- 隐式转换：字段类型、字符集、排序规则和函数表达式会影响可定位条件构造。\n- 宽索引副作用：为了覆盖多条查询把低频宽字段放进索引，会降低页密度并增加写入、备份、DDL 和复制成本。\n- 锁范围扩大：`UPDATE`、`DELETE` 或锁定读走范围扫描时，扫描区间越宽，记录锁、间隙锁或 Next-Key Lock 的影响面越大。",
      "排查实践：最左前缀排查要用同一批业务参数串起 SQL、索引、计划和运行指标。\n\n1. 固化 SQL：记录完整 SQL、绑定参数、返回列、排序、分页、执行频率、慢日志样本和业务入口。\n2. 拆解条件：把 `WHERE` 等值列、范围列、`IN`、`LIKE`、函数表达式、JOIN 条件、排序列和返回列列出来。\n3. 对照索引：用 `SHOW CREATE TABLE` 和 `SHOW INDEX` 确认 `Seq_in_index`、`Column_name`、`Sub_part`、`Cardinality`、`Visible` 和主键宽度。\n4. 判断连续前缀：从索引第一列开始标记等值、范围和缺失位置，确认范围边界之前有多少 key part 可用于定位。\n5. 看估算计划：用 `EXPLAIN` 关注 `possible_keys`、`key`、`key_len`、`type`、`rows`、`filtered`、`Extra`。\n6. 看树形计划：用 `EXPLAIN FORMAT=TREE` 观察 range scan、index lookup、filter、sort、covering lookup 和 join 顺序。\n7. 看真实执行：用 `EXPLAIN ANALYZE` 对比估算行数与实际行数，定位扫描放大和排序耗时。\n8. 看生产证据：慢查询日志看 `Rows_examined` / `Rows_sent`，Performance Schema 按 digest 汇总扫描量和总耗时。\n9. 小步修复：调整列顺序、增加更贴合查询形状的联合索引、裁剪返回字段、刷新统计信息、合并重复索引、用 Invisible Index 灰度验证。\n\n```sql\nSHOW CREATE TABLE orders\\G\nSHOW INDEX FROM orders;\n\nEXPLAIN\nSELECT id, status, created_at\nFROM orders\nWHERE tenant_id = 42 AND status = 'PAID' AND created_at >= '2026-06-01'\nORDER BY created_at DESC, id DESC\nLIMIT 20;\n\nEXPLAIN FORMAT=TREE\nSELECT id, status, created_at\nFROM orders\nWHERE tenant_id = 42 AND status = 'PAID' AND created_at >= '2026-06-01'\nORDER BY created_at DESC, id DESC\nLIMIT 20;\n\nEXPLAIN ANALYZE\nSELECT id, status, created_at\nFROM orders\nWHERE tenant_id = 42 AND status = 'PAID' AND created_at >= '2026-06-01'\nORDER BY created_at DESC, id DESC\nLIMIT 20;\n\nANALYZE TABLE orders;\n\nSELECT DIGEST_TEXT, COUNT_STAR, SUM_ROWS_EXAMINED, SUM_ROWS_SENT, SUM_TIMER_WAIT\nFROM performance_schema.events_statements_summary_by_digest\nWHERE DIGEST_TEXT LIKE 'SELECT%ORDERS%'\nORDER BY SUM_TIMER_WAIT DESC\nLIMIT 10;\n\nALTER TABLE orders ALTER INDEX idx_tenant_status_time_id INVISIBLE;\nALTER TABLE orders ALTER INDEX idx_tenant_status_time_id VISIBLE;\n```\n\n有效优化通常体现为目标索引稳定命中、`key_len` 与连续前缀相符、实际扫描行数下降、`Using filesort` 或临时表减少、`Rows_examined` / `Rows_sent` 收敛，写入与复制指标保持稳定。",
      "指标与命令速查：最左前缀质量要用执行计划字段和运行指标共同判断。\n\n- `SHOW INDEX.Seq_in_index`：确认联合索引列顺序。\n- `SHOW INDEX.Cardinality`：观察粗略区分度和数据倾斜线索。\n- `EXPLAIN key`：确认优化器选择了哪条索引。\n- `EXPLAIN key_len`：辅助判断连续 key part 参与访问的程度。\n- `EXPLAIN type`：`ref`、`range`、`index`、`ALL` 体现访问方式。\n- `EXPLAIN rows` / `filtered`：估算扫描行数和过滤比例。\n- `Extra=Using index condition`：后续索引列参与 ICP 过滤的信号。\n- `Extra=Using index`：覆盖读取信号。\n- `Extra=Using filesort`：排序额外阶段信号。\n- `EXPLAIN FORMAT=TREE`：观察范围扫描、排序位置和覆盖 lookup。\n- `EXPLAIN ANALYZE`：看真实行数、循环次数和迭代器耗时。\n- 慢查询日志：`Rows_examined`、`Rows_sent`、`Query_time` 衡量扫描放大。\n- Performance Schema：`SUM_ROWS_EXAMINED`、`SUM_ROWS_SENT`、`SUM_TIMER_WAIT` 评估 SQL 指纹影响面。\n- Invisible Index：灰度验证索引替换、删除和合并。",
      "常见误区：最左前缀的正确心智模型是“联合键从左到右构造连续有序区间”。\n\n- 查询条件书写顺序由优化器处理，索引定义顺序决定最左前缀能力。\n- 最左前缀关注定位能力，后续列仍可能提供 ICP、覆盖、过滤和排序收益。\n- 范围条件会改变后续列的角色，真实收益要看 `EXPLAIN` 和指标。\n- 多个单列索引服务的是交叉过滤，联合索引服务的是有序元组路径和顺序返回。\n- 低选择性列在租户隔离、常量前缀、排序分页和覆盖场景中仍可能放在前面。\n- `SELECT *` 会扩大覆盖需求，列表接口字段裁剪能让索引设计更稳定。\n- 宽联合索引带来写入、缓存、空间、在线 DDL 和复制成本，发布前要用业务频率和生产指标证明收益。\n- 最左前缀上线后要持续观察统计信息、参数分布、慢日志和计划漂移。",
      "面试追问：最左前缀题适合按“定义 -> B+ 树字典序 -> 等值扩展 -> 范围边界 -> 排序覆盖 -> 验证取舍”回答。\n\n- 什么是最左前缀，为什么 `(a,b,c)` 可以服务 `(a)` 和 `(a,b)`？\n- SQL 条件顺序和联合索引列顺序分别影响什么？\n- 为什么跳过前导列后，后续列的定位能力会明显下降？\n- 范围条件为什么会改变后续 key part 的使用方式？\n- `IN`、`BETWEEN`、`LIKE 'abc%'`、`IS NULL` 在最左前缀判断中分别怎样处理？\n- `WHERE a=? AND b>? AND c=? ORDER BY c` 如何分析索引使用和排序成本？\n- 最左前缀和覆盖索引、ICP、Index Merge、Skip Scan 有什么关系？\n- 如何用 `EXPLAIN key_len`、`rows`、`Extra` 和 `EXPLAIN ANALYZE` 证明判断成立？\n- 低选择性状态列、租户列、时间列和主键尾列应该如何排序？\n- 线上最左前缀相关慢 SQL 如何用统计刷新、Invisible Index、字段裁剪和索引合并治理？",
      "参考来源：本讲解主要参考 MySQL 8.4 Reference Manual 的 Multiple-Column Indexes、How MySQL Uses Indexes、Column Indexes、Range Optimization、ORDER BY Optimization、GROUP BY Optimization、LIMIT Query Optimization、Index Condition Pushdown、Use of Index Extensions、EXPLAIN、EXPLAIN Output、Verifying Index Usage、SHOW INDEX、ANALYZE TABLE、Optimizer Statistics、Invisible Indexes、Clustered and Secondary Indexes、InnoDB Physical Structure、Buffer Pool、Slow Query Log 和 Performance Schema Statement Tables，并结合 PlanetScale 的 B-tree、Secondary Keys、Covering Indexes，Use The Index, Luke 的 WHERE Clause，小林 coding、JavaGuide 与 SolarWinds 的索引资料校准中文表达、例子和面试问法。官方资料用于定义、范围区间、排序分组优化和执行计划信号，工程文章用于补充索引设计直觉、线上治理和取舍经验。"
    ],
    typicalProblems: [
      "最左前缀是什么，它解决联合索引使用判断中的哪个核心问题？",
      "为什么 `(a,b,c)` 能服务 `(a)`、`(a,b)` 和 `(a,b,c)` 的连续前缀查询？",
      "SQL 条件书写顺序和索引定义顺序分别如何影响执行计划？",
      "等值条件、范围条件、`IN`、`LIKE 'abc%'`、`IS NULL` 如何影响最左前缀区间构造？",
      "范围条件之后的索引列还能在 ICP、覆盖、排序或过滤中发挥什么作用？",
      "`ORDER BY` 和 `GROUP BY` 如何借助最左前缀减少 `filesort` 和临时表？",
      "最左前缀和联合索引、覆盖索引、Index Merge、Skip Scan 之间如何取舍？",
      "如何用 `SHOW INDEX`、`EXPLAIN key_len`、`rows`、`Extra` 和 `EXPLAIN ANALYZE` 验证最左前缀判断？",
      "前导列缺失、范围过早、隐式转换、参数倾斜和统计陈旧会造成哪些线上问题？",
      "设计多租户列表、用户时间线和 JOIN 被驱动表索引时，如何安排最左前缀列顺序？"
    ],
    commonCommands: [
      "SHOW CREATE TABLE <table>\\G",
      "SHOW INDEX FROM <table>",
      "EXPLAIN <sql>",
      "EXPLAIN FORMAT=TREE <sql>",
      "EXPLAIN ANALYZE <sql>",
      "ANALYZE TABLE <table>",
      "SELECT DIGEST_TEXT, COUNT_STAR, SUM_ROWS_EXAMINED, SUM_ROWS_SENT, SUM_TIMER_WAIT FROM performance_schema.events_statements_summary_by_digest ORDER BY SUM_TIMER_WAIT DESC LIMIT 10",
      "ALTER TABLE <table> ALTER INDEX <index_name> INVISIBLE",
      "ALTER TABLE <table> ALTER INDEX <index_name> VISIBLE"
    ],
    useCases: ["联合索引设计", "慢 SQL 排查", "多租户列表分页", "用户时间线查询", "状态筛选", "范围查询优化", "排序分页优化", "JOIN 被驱动表查找", "覆盖索引评审", "重复索引治理"],
    prerequisites: ["composite-index"],
    related: ["composite-index", "range-query", "order-by", "group-by", "covering-index", "index-selectivity", "explain", "sql-optimization", "slow-query-log", "buffer-pool"],
  },
  "range-query": {
    sourceRefs: [
      "mysql-range-optimization",
      "mysql-how-mysql-uses-indexes",
      "mysql-column-indexes",
      "mysql-multiple-column-indexes",
      "mysql-where-optimization",
      "mysql-order-by-optimization",
      "mysql-limit-optimization",
      "mysql-index-condition-pushdown",
      "mysql-explain-statement",
      "mysql-explain-output",
      "mysql-verifying-index-usage",
      "mysql-show-index",
      "mysql-analyze-table",
      "mysql-optimizer-statistics",
      "mysql-optimizer-trace",
      "mysql-invisible-indexes",
      "mysql-innodb-index-types",
      "mysql-innodb-physical-structure",
      "mysql-innodb-buffer-pool",
      "mysql-performance-schema-statement-tables",
      "mysql-slow-query-log",
      "planetscale-btree-indexes",
      "planetscale-index-obfuscation",
      "xiaolincoding-mysql-index",
      "javaguide-mysql-index",
      "use-the-index-luke-where-clause",
    ],
    concept:
      "范围查询把比较谓词转成一个或多个索引值区间，核心价值是控制 B+ 树叶子扫描宽度、排序分页成本和锁影响面。",
    explanation: [
      "概念定位：范围查询（Range Query / Range Access）解决的是“怎样从一大张表里按时间、价格、编号、游标或字符串前缀取出一段数据”的问题。订单列表、账单明细、时间线分页、批量清理、报表窗口、库存区间筛选和锁定读都会遇到它。\n\nMySQL 官方 Range Optimization 文档把 `range` 访问方法定义为使用单个索引读取一个或多个索引值区间内的行；EXPLAIN 文档也把 `type=range` 描述为只取给定范围内的行。工程上看，范围查询的核心目标是把业务筛选变成足够窄、顺序稳定、证据可验证的索引区间。",
      "准确定义：范围查询是 `WHERE` 中可以形成索引值区间的谓词集合。对 B-tree 索引来说，常见形态包括 `>`、`>=`、`<`、`<=`、`BETWEEN`、`LIKE 'abc%'`、`IN (...)`、`=`、`<=>`、`IS NULL`、`IS NOT NULL`，以及由 `AND` / `OR` 组合出来的多个区间。\n\n- `range access`：优化器选择的一种访问路径，表现为 `EXPLAIN type=range`。\n- `index interval`：索引上的起点和终点，例如 `(tenant_id=42, created_at >= '2026-06-01')`。\n- `access predicate`：用于构造扫描起止边界的条件。\n- `filter predicate`：扫描过程中或回表后继续判断的条件。\n- `equality range`：`IN` 或多个 `OR` 等值形成的多个单点区间。\n- `key part`：联合索引中的一个组成列，区间构造按索引定义顺序推进。\n- `ICP`：Index Condition Pushdown，在二级索引扫描阶段用索引列先过滤候选记录。\n\n业务里的“查一段时间”只是表层语义，数据库真正执行的是对索引有序空间的区间裁剪和叶子遍历。",
      "心智模型：把 B+ 树想成一本按索引键排好序的账本。\n\n- 等值条件像先翻到某个章节，例如 `tenant_id = 42`。\n- 范围条件像在章节里划出页码起止，例如 `created_at >= '2026-06-01'`。\n- 扫描从下界页开始，沿叶子页顺序向后读，直到上界结束。\n- 区间越窄，叶子页、回表、排序和锁影响越小。\n- 联合索引里，等值列通常放在范围列前面，让范围扫描发生在更小的局部有序空间里。\n\n这个模型能帮助新手理解范围查询的本质：先定位起点，再顺序扫一段。",
      "主流程机制：MySQL 处理范围查询时，优化器和存储引擎按“抽取区间 -> 估算成本 -> 叶子扫描 -> 剩余过滤”协作。\n\n1. 解析 `WHERE`，识别常量、参数、字段类型、字符集、函数表达式、`AND` / `OR` 结构和候选索引。\n2. 针对每个候选索引抽取可构造区间的条件，保留结果完整性，并把重叠区间合并、空区间消除。\n3. 对联合索引按 key part 顺序构造多列元组区间，等值条件继续向右收窄，范围条件形成上下界。\n4. 对 `IN`、同列 `OR` 等 equality range 估算多段单点区间成本，必要时使用索引 dives 或统计信息。\n5. 结合统计信息、页访问、回表、排序、`LIMIT`、覆盖索引和候选行数，选择 `range`、`ref`、`index_merge`、`index` 或全表访问路径。\n6. 存储引擎定位到区间起点，沿 B+ 树叶子页顺序扫描；二级索引命中后按需回表到聚簇索引。\n7. ICP 可以在二级索引阶段用后续索引列过滤候选记录，减少完整行读取。\n8. 执行器完成剩余 `WHERE`、排序、分组、分页和返回列投影。\n9. 用 `EXPLAIN`、`EXPLAIN FORMAT=TREE`、`EXPLAIN ANALYZE`、慢查询日志和 Performance Schema 验证估算和真实扫描。",
      "实践例子：下面的订单表展示时间范围、半开区间、排序分页和函数改写。\n\n```sql\nCREATE TABLE orders (\n  id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,\n  tenant_id BIGINT UNSIGNED NOT NULL,\n  user_id BIGINT UNSIGNED NOT NULL,\n  status VARCHAR(16) NOT NULL,\n  amount DECIMAL(12,2) NOT NULL,\n  created_at DATETIME NOT NULL,\n  PRIMARY KEY (id),\n  KEY idx_tenant_status_time_id (tenant_id, status, created_at DESC, id DESC),\n  KEY idx_tenant_time_id (tenant_id, created_at DESC, id DESC),\n  KEY idx_tenant_amount_id (tenant_id, amount, id)\n) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;\n\n-- 典型列表：等值前缀 tenant_id + status，把 created_at 范围限制在租户和状态内部\nEXPLAIN FORMAT=TREE\nSELECT id, status, created_at\nFROM orders\nWHERE tenant_id = 42\n  AND status = 'PAID'\n  AND created_at >= '2026-06-01 00:00:00'\n  AND created_at <  '2026-06-08 00:00:00'\nORDER BY created_at DESC, id DESC\nLIMIT 20;\n\n-- 日期查询保持索引列原值，用半开区间表达一天\nEXPLAIN ANALYZE\nSELECT id, amount, created_at\nFROM orders\nWHERE tenant_id = 42\n  AND created_at >= '2026-06-06 00:00:00'\n  AND created_at <  '2026-06-07 00:00:00'\nORDER BY created_at DESC, id DESC\nLIMIT 50;\n\n-- 金额区间适合先按租户收窄，再扫描 amount 叶子范围\nEXPLAIN\nSELECT id, amount\nFROM orders\nWHERE tenant_id = 42\n  AND amount BETWEEN 100 AND 500\nORDER BY amount ASC, id ASC\nLIMIT 30;\n```\n\n半开时间区间让日期边界清晰，`tenant_id` 把扫描限定在租户局部，`id` 让同一时间或金额下的翻页顺序稳定。",
      "深层细节：老手分析范围查询时，重点看“哪个条件负责边界，哪个条件负责过滤”。\n\n- 单列区间：`created_at >= ? AND created_at < ?` 形成一个连续区间，范围宽度直接决定叶子页扫描量。\n- 联合区间：`(tenant_id, status, created_at)` 先用租户和状态缩小局部空间，再由时间形成上下界。\n- 区间宽化：官方文档说明范围抽取后的区间可能比原始 `WHERE` 更宽，执行器会继续检查完整条件。\n- `key_len`：传统 `EXPLAIN` 中的 `key_len` 表示参与访问的最长索引前缀，可辅助判断哪些 key part 进入边界。\n- `IN`：多个值会形成多个 equality range；值很多时，索引 dives、统计信息和 `eq_range_index_dive_limit` 会影响估算成本。\n- 复杂 `OR`：同列区间可合并，跨列条件可能触发 `index_merge` 或更大的扫描计划。\n- `LIKE 'abc%'`：固定前缀可转成字符串范围；业务搜索需求更复杂时，全文索引或搜索引擎更贴合。\n- ICP：范围列之后的索引列仍可在二级索引扫描阶段做过滤，`Extra=Using index condition` 是重要信号。\n- Skip Scan：缺少联合索引前导列时，MySQL 可在特定条件下按前导列不同取值做多段范围扫描，`Extra=Using index for skip scan` 体现该路径。\n- 范围优化内存：大量 `OR` / `IN` 组合会消耗 range optimizer 内存，`range_optimizer_max_mem_size` 触发后计划可能退化，并产生 3170 警告。",
      "工程场景与设计取舍：范围查询设计要围绕访问模式，而非单个 SQL 片段。\n\n- 时间线分页：`(tenant_id, user_id, created_at, id)` 适合按用户读取最近记录，`id` 作为稳定游标尾列。\n- 订单后台：`(tenant_id, status, created_at, id)` 服务状态筛选和时间倒序列表。\n- 金额或库存区间：等值维度在前，数值范围在后，减少扫描候选量。\n- 批量清理：按主键或时间窗口分批 `DELETE`，每批控制扫描和锁范围。\n- 报表窗口：按租户、业务线、时间窗口组合索引，让报表扫描集中在目标区间。\n- 深分页治理：范围游标分页比大 `OFFSET` 更稳定，扫描从上次游标继续推进。\n- 覆盖列表：范围索引尾部追加少量返回列可减少回表，但会增加写入、空间、缓存和 DDL 成本。\n- 统计维护：大批量导入、归档、冷热迁移后，`ANALYZE TABLE` 能帮助优化器恢复更贴近现实的行数估算。",
      "边界与故障模式：范围查询相关问题通常表现为扫描放大、排序回归、锁等待和计划漂移。\n\n- 范围过宽：一天、一个月、全租户窗口差异巨大，同一 SQL 在不同参数下扫描量会相差几个数量级。\n- 范围列前置：联合索引把时间放在租户或状态之前时，后续等值条件更常作为过滤，扫描叶子页增多。\n- 表达式包裹：`DATE(created_at)`、字符串转数字、不同 collation 比较会让可定位条件退化，保持索引列原值参与比较更稳。\n- `BETWEEN` 边界：`BETWEEN` 包含上下界，日期时间字段推荐用半开区间表达自然日。\n- `OR` 组合爆炸：大量动态条件会增加区间枚举、优化器内存和估算成本。\n- 统计陈旧：数据倾斜、热点租户、批量导入会导致优化器低估或高估范围行数。\n- 排序错配：范围扫描方向、`ORDER BY` 列顺序、混合方向和返回列会影响 `Using filesort`。\n- 锁影响面：`UPDATE`、`DELETE`、`SELECT ... FOR UPDATE` 在可重复读下结合范围扫描，容易扩大记录锁、间隙锁或 Next-Key Lock 范围。\n- 缓存压力：宽范围回表会把大量数据页拉入 Buffer Pool，挤压热点页并抬高读放大。",
      "排查实践：范围查询排查要用同一组参数串联 SQL、索引、计划、行数和锁证据。\n\n1. 固化现场：记录 SQL、绑定参数、返回列、排序、分页方式、执行频率、慢日志样本和业务入口。\n2. 拆条件：标出等值列、范围列、`IN`、`OR`、`LIKE`、函数表达式、排序列和返回列。\n3. 对索引：用 `SHOW INDEX` 看 `Seq_in_index`、`Column_name`、`Cardinality`、`Sub_part`、`Visible` 和主键宽度。\n4. 判边界：确认哪些条件构成下界和上界，哪些条件在扫描中继续过滤。\n5. 看计划：用 `EXPLAIN` 检查 `type=range`、`key`、`key_len`、`rows`、`filtered`、`Extra`。\n6. 看真实执行：用 `EXPLAIN ANALYZE` 对比估算行数、实际行数、循环次数和耗时。\n7. 看优化器证据：必要时打开 `optimizer_trace`，观察 range alternatives、index dives、skip scan 和 chosen path。\n8. 看生产指标：慢查询日志看 `Rows_examined` / `Rows_sent`，Performance Schema 按 digest 汇总扫描量和总耗时。\n9. 小步治理：改写半开区间、调整联合索引列序、增加覆盖列、刷新统计、灰度 Invisible Index、拆分大 `OR` 或按游标分批。\n\n```sql\nSHOW CREATE TABLE orders\\G\nSHOW INDEX FROM orders;\n\nEXPLAIN\nSELECT id, status, created_at\nFROM orders\nWHERE tenant_id = 42\n  AND status = 'PAID'\n  AND created_at >= '2026-06-01 00:00:00'\n  AND created_at <  '2026-06-08 00:00:00'\nORDER BY created_at DESC, id DESC\nLIMIT 20;\n\nEXPLAIN FORMAT=TREE\nSELECT id, status, created_at\nFROM orders\nWHERE tenant_id = 42\n  AND status = 'PAID'\n  AND created_at >= '2026-06-01 00:00:00'\n  AND created_at <  '2026-06-08 00:00:00'\nORDER BY created_at DESC, id DESC\nLIMIT 20;\n\nEXPLAIN ANALYZE\nSELECT id, status, created_at\nFROM orders\nWHERE tenant_id = 42\n  AND status = 'PAID'\n  AND created_at >= '2026-06-01 00:00:00'\n  AND created_at <  '2026-06-08 00:00:00'\nORDER BY created_at DESC, id DESC\nLIMIT 20;\n\nSET optimizer_trace='enabled=on';\nSELECT id FROM orders\nWHERE tenant_id = 42 AND created_at >= '2026-06-01' AND created_at < '2026-06-08'\nORDER BY created_at DESC, id DESC LIMIT 20;\nSELECT TRACE FROM information_schema.OPTIMIZER_TRACE\\G\nSET optimizer_trace='enabled=off';\n\nANALYZE TABLE orders;\nSHOW WARNINGS;\n\nSELECT DIGEST_TEXT, COUNT_STAR, SUM_ROWS_EXAMINED, SUM_ROWS_SENT, SUM_TIMER_WAIT\nFROM performance_schema.events_statements_summary_by_digest\nWHERE DIGEST_TEXT LIKE 'SELECT%ORDERS%'\nORDER BY SUM_ROWS_EXAMINED DESC\nLIMIT 10;\n\nALTER TABLE orders ALTER INDEX idx_tenant_status_time_id INVISIBLE;\nALTER TABLE orders ALTER INDEX idx_tenant_status_time_id VISIBLE;\n```",
      "指标与命令速查：范围查询优化要同时看访问路径、扫描规模和运行影响。\n\n- `EXPLAIN type=range`：当前表使用范围访问。\n- `possible_keys` / `key`：候选索引和实际索引选择。\n- `key_len`：参与边界构造的最长索引前缀线索。\n- `rows` / `filtered`：优化器估算扫描行数和过滤比例。\n- `Extra=Using index condition`：ICP 在二级索引上过滤候选记录。\n- `Extra=Using index`：覆盖读取，减少回表。\n- `Extra=Using filesort`：排序阶段额外发生。\n- `Extra=Using MRR`：Multi-Range Read 路径，用于降低部分回表随机读成本。\n- `EXPLAIN FORMAT=TREE`：查看 index range scan、filter、sort、limit 位置。\n- `EXPLAIN ANALYZE`：查看真实行数、循环次数和每个迭代器耗时。\n- `OPTIMIZER_TRACE`：查看区间抽取、候选路径、index dives 和 skip scan 选择。\n- 慢查询日志：`Rows_examined`、`Rows_sent`、`Query_time` 衡量扫描放大。\n- Performance Schema：`SUM_ROWS_EXAMINED`、`SUM_ROWS_SENT`、`SUM_TIMER_WAIT` 衡量 SQL 指纹影响面。\n- `ANALYZE TABLE`：刷新统计信息，校准选择性估算。\n- Invisible Index：灰度验证新旧索引切换。",
      "常见误区：范围查询的正确心智模型是“索引区间宽度决定主要成本，剩余条件决定过滤成本”。\n\n- 等值列放在范围列前面，通常能把范围扫描压缩到更小局部空间。\n- 范围列之后的索引列仍可能提供 ICP、覆盖读取和部分排序收益。\n- `BETWEEN` 包含上下界，时间查询用半开区间表达自然窗口更清晰。\n- `LIKE 'prefix%'` 可转成字符串范围，搜索型模糊匹配适合单独评估全文索引或搜索服务。\n- `key_len` 是边界构造线索，需要结合 `EXPLAIN FORMAT=TREE` 和真实行数判断。\n- 范围命中索引只是起点，宽窗口、低选择性和大量回表仍会造成慢查询。\n- `LIMIT` 会改变成本模型，排序顺序与索引顺序匹配时收益更明显。\n- 锁定读和写操作中的范围扫描需要重点评估间隙、Next-Key Lock 和死锁概率。\n- 上线范围索引时要同时评估写入放大、页密度、Buffer Pool、在线 DDL、备份和复制延迟。",
      "面试追问：范围查询题适合按“定义 -> B+ 树区间 -> 联合索引边界 -> 计划证据 -> 工程取舍”回答。\n\n- MySQL 中 `range` 访问方法解决什么问题？\n- `>`、`BETWEEN`、`IN`、`LIKE 'abc%'`、`IS NULL` 分别如何形成范围条件？\n- 范围查询在 B+ 树叶子页上如何执行？\n- 联合索引 `(a,b,c)` 中 `a=? AND b BETWEEN ? AND ? AND c=?` 如何判断边界和过滤？\n- 为什么等值列常放在范围列之前？\n- `key_len`、`rows`、`filtered`、`Extra=Using index condition` 分别说明什么？\n- `IN` 列表很大时，index dives、统计信息和 range optimizer 内存如何影响计划？\n- 宽范围查询、深分页和 `ORDER BY LIMIT` 如何优化？\n- 范围查询和覆盖索引、ICP、Index Merge、Skip Scan、Invisible Index 如何协作？\n- 线上范围查询慢、锁等待或计划漂移时，如何用慢日志、Performance Schema、`EXPLAIN ANALYZE` 和 `OPTIMIZER_TRACE` 排查？",
      "参考来源：本讲解主要参考 MySQL 8.4 Reference Manual 的 Range Optimization、How MySQL Uses Indexes、Column Indexes、Multiple-Column Indexes、WHERE Clause Optimization、ORDER BY Optimization、LIMIT Query Optimization、Index Condition Pushdown、EXPLAIN、EXPLAIN Output、Verifying Index Usage、SHOW INDEX、ANALYZE TABLE、Optimizer Statistics、Optimizer Trace、Invisible Indexes、InnoDB Index Types、InnoDB Physical Structure、Buffer Pool、Slow Query Log 和 Performance Schema Statement Tables，并结合 PlanetScale 的 B-tree 与索引可用性文章、小林 coding 的联合索引范围条件示例、JavaGuide 的索引资料、Use The Index, Luke 的范围谓词分析校准中文表达和工程判断。官方资料用于定义、区间抽取、成本估算和执行计划信号，工程文章用于补充索引列序、函数改写、排查步骤和面试问法。"
    ],
    typicalProblems: [
      "范围查询是什么，它和 MySQL `range` 访问方法是什么关系？",
      "B+ 树如何执行 `>`、`BETWEEN`、`LIKE 'abc%'` 和时间半开区间？",
      "联合索引中等值列、范围列、排序列和返回列应如何排序？",
      "`IN`、同列 `OR`、跨列 `OR` 会怎样影响范围区间和成本估算？",
      "范围条件之后的索引列还能通过 ICP、覆盖读取或排序发挥什么作用？",
      "如何用 `EXPLAIN key_len`、`type=range`、`rows`、`filtered` 和 `Extra` 证明范围边界？",
      "`EXPLAIN ANALYZE`、慢查询日志和 Performance Schema 如何定位扫描放大？",
      "`range_optimizer_max_mem_size`、`eq_range_index_dive_limit`、统计信息和 `ANALYZE TABLE` 如何影响计划？",
      "宽范围查询、深分页、时间边界、函数包裹和隐式转换分别有哪些工程风险？",
      "范围查询在 `UPDATE`、`DELETE`、锁定读和可重复读下如何影响锁范围和死锁概率？"
    ],
    commonCommands: [
      "SHOW CREATE TABLE <table>\\G",
      "SHOW INDEX FROM <table>",
      "EXPLAIN <sql>",
      "EXPLAIN FORMAT=TREE <sql>",
      "EXPLAIN ANALYZE <sql>",
      "SET optimizer_trace='enabled=on'",
      "SELECT TRACE FROM information_schema.OPTIMIZER_TRACE\\G",
      "SET optimizer_trace='enabled=off'",
      "ANALYZE TABLE <table>",
      "SHOW WARNINGS",
      "SELECT DIGEST_TEXT, COUNT_STAR, SUM_ROWS_EXAMINED, SUM_ROWS_SENT, SUM_TIMER_WAIT FROM performance_schema.events_statements_summary_by_digest ORDER BY SUM_ROWS_EXAMINED DESC LIMIT 10",
      "ALTER TABLE <table> ALTER INDEX <index_name> INVISIBLE",
      "ALTER TABLE <table> ALTER INDEX <index_name> VISIBLE"
    ],
    useCases: ["时间范围筛选", "价格区间查询", "订单列表分页", "用户时间线", "批量清理", "报表窗口", "游标分页", "慢 SQL 排查", "锁范围评估", "范围索引设计"],
    prerequisites: ["b-plus-tree", "leftmost-prefix"],
    related: ["where", "order-by", "limit-offset", "composite-index", "covering-index", "index-selectivity", "explain", "slow-query-log", "gap-lock", "next-key-lock", "buffer-pool"],
  },
  "transaction": {
    sourceRefs: [
      "mysql-innodb-transaction-model",
      "mysql-commit-rollback",
      "mysql-acid-model",
      "mysql-transaction-isolation-levels",
      "mysql-innodb-multi-versioning",
      "mysql-innodb-consistent-read",
      "mysql-innodb-undo-logs",
      "mysql-innodb-redo-log",
      "mysql-binary-log",
      "mysql-innodb-locking-reads",
      "mysql-innodb-locks-set",
      "mysql-innodb-deadlocks",
      "mysql-savepoint",
      "planetscale-database-transactions",
      "spring-transaction-management",
      "spring-declarative-transactions",
      "postgresql-transactions",
      "xiaolincoding-mysql-mvcc",
      "javaguide-mysql-mvcc",
    ],
    concept:
      "事务把一组数据库读写封装成可提交或可回滚的业务原子边界，依靠 ACID、隔离级别、Undo、Redo、锁和 MVCC 让并发系统保持可恢复的一致状态。",
    explanation: [
      "概念定位：事务（Transaction）解决的是“多个 SQL 共同表达一个业务动作时，系统如何让状态一起成功、一起撤销，并在并发和崩溃中保持可解释”的问题。订单创建、库存扣减、余额转账、优惠券核销、状态机流转、批量修复和后台补偿都依赖事务边界。\n\n在 MySQL/InnoDB 中，事务是从 `START TRANSACTION` 或隐式写语句开始，到 `COMMIT`、`ROLLBACK`、连接断开或错误处理结束的一段一致性控制过程。它连接了 SQL 层的语义、InnoDB 的行版本与锁、Undo/Redo 的恢复能力、Binlog 的复制顺序和应用侧的重试策略。",
      "准确定义：事务是一组作为单个逻辑工作单元执行的数据库操作。它的结果只有两类：提交后对外可见并进入持久化与复制路径，回滚后用 Undo 撤销未提交修改。\n\n关键术语要分清：\n\n- `ACID`：原子性、一致性、隔离性、持久性，是事务语义的目标集合。\n- `autocommit`：MySQL 默认每条语句自动提交；显式事务会把多条语句放进同一边界。\n- `consistent read`：普通快照读，InnoDB 通过 MVCC 和 ReadView 读取历史版本。\n- `locking read`：`SELECT ... FOR UPDATE` / `FOR SHARE` 这类当前读，会读取最新已提交版本并加锁。\n- `Undo Log`：保存旧版本，服务回滚与 MVCC。\n- `Redo Log`：记录物理修改，服务已提交事务的崩溃恢复。\n- `Binlog`：记录逻辑变更，服务复制、恢复和 CDC。\n- `savepoint`：事务内部的局部回滚点，适合复杂业务步骤降级。",
      "心智模型：把事务看成一次业务状态迁移的“封闭施工区”。\n\n- 施工区入口是 `START TRANSACTION`，出口是 `COMMIT` 或 `ROLLBACK`。\n- 施工区内的每次修改会留下撤销路线，也就是 Undo。\n- 已完成的关键修改会写入恢复日志，也就是 Redo。\n- 对外广播变更需要进入 Binlog，供副本和下游消费。\n- 并发读写通过 MVCC 与锁决定谁能看见什么、谁需要等待谁。\n- 施工区越大，锁持有时间、Undo 保留时间、复制压力和故障恢复成本越高。\n\n新手先记住“事务是业务原子边界”；老手要继续追问这条边界是否过长、是否可重试、是否会扩大锁范围、是否会阻塞清理和复制。",
      "主流程机制：一次典型 InnoDB 事务可以按“开始 -> 读写 -> 并发控制 -> 提交/回滚 -> 观测”理解。\n\n1. 会话进入事务边界：显式执行 `START TRANSACTION`，或在 `autocommit=1` 下由单条 DML 自动形成短事务。\n2. 读取数据：普通 `SELECT` 在隔离级别下创建或复用 ReadView；锁定读和写语句走当前读路径。\n3. 修改数据：执行器先按索引定位记录，InnoDB 加必要的记录锁、间隙锁或 Next-Key Lock，然后生成 Undo、修改 Buffer Pool 中的数据页，并产生 Redo。\n4. 维护可见性：未提交版本对其他事务保持隔离；普通快照读通过 Undo 版本链还原可见记录。\n5. 提交事务：InnoDB 进入提交路径，Redo、事务状态和 Binlog 按一致性顺序落入日志体系，提交成功后锁释放，变更对后续事务可见。\n6. 回滚事务：InnoDB 使用 Undo 反向撤销未提交修改，释放事务持有的锁，应用层通常把业务状态标记为失败或进入重试。\n7. 后台清理：Purge 线程在没有活跃 ReadView 依赖旧版本后清理 Undo 历史版本。\n8. 生产观测：`information_schema.innodb_trx`、`performance_schema.data_locks`、`SHOW ENGINE INNODB STATUS`、慢查询日志和应用 Trace 共同证明事务是否短、锁是否可控、提交是否稳定。",
      "实践例子：库存扣减和订单创建要放在同一事务里，业务唯一键负责幂等，锁定读负责串行化库存行。\n\n```sql\nCREATE TABLE inventory (\n  sku_id BIGINT PRIMARY KEY,\n  available INT NOT NULL\n) ENGINE=InnoDB;\n\nCREATE TABLE orders (\n  id BIGINT PRIMARY KEY,\n  request_id VARCHAR(64) NOT NULL,\n  sku_id BIGINT NOT NULL,\n  quantity INT NOT NULL,\n  status VARCHAR(16) NOT NULL,\n  created_at DATETIME NOT NULL,\n  UNIQUE KEY uk_request_id (request_id),\n  KEY idx_sku_created (sku_id, created_at)\n) ENGINE=InnoDB;\n\nSTART TRANSACTION;\n\nSELECT available\nFROM inventory\nWHERE sku_id = 1001\nFOR UPDATE;\n\nUPDATE inventory\nSET available = available - 2\nWHERE sku_id = 1001\n  AND available >= 2;\n\nINSERT INTO orders(id, request_id, sku_id, quantity, status, created_at)\nVALUES (90001, 'req-20260605-001', 1001, 2, 'CREATED', NOW());\n\nCOMMIT;\n```\n\n这个事务的关键点是：唯一键 `uk_request_id` 让请求幂等，`FOR UPDATE` 让库存行进入当前读和加锁路径，`UPDATE ... available >= 2` 保留条件校验，`COMMIT` 后订单与库存一起对外可见。应用层要把死锁、锁等待超时和唯一键冲突纳入明确的重试或返回策略。",
      "深层细节：事务质量取决于边界、可见性、锁、日志和应用语义共同配合。\n\n- 原子性依靠 Undo 和事务状态推进；部分 SQL 失败时，应用需要判断是语句级失败、事务仍可继续，还是应整体回滚。\n- 一致性来自数据库约束和应用不变量共同维护，例如唯一键、外键、余额非负、订单状态机和幂等键。\n- 隔离性由隔离级别、MVCC、锁定读和访问路径决定；索引缺失会让扫描范围和锁范围扩大。\n- 持久性由 Redo、刷盘策略、Binlog 同步和存储系统保证；`innodb_flush_log_at_trx_commit` 与 `sync_binlog` 直接影响提交延迟和故障丢失窗口。\n- 普通快照读与当前读混用时，要明确读到的是历史版本还是最新可锁版本。\n- 长事务会持有锁、保留 ReadView、延迟 Undo Purge、抬高 History list length，并拖累备份、DDL、复制和空间回收。\n- DDL、隐式提交语句、连接池复用、事务传播配置和异常吞掉都会改变真实事务边界。\n- 分布式调用放入数据库事务会放大锁时间；更稳的设计是先缩小本地事务，再用幂等消息、事务外盒或补偿流程衔接外部系统。",
      "工程场景与取舍：事务设计要围绕业务不变量和故障恢复目标。\n\n- 资金转账：余额扣减、余额增加、流水写入、幂等键校验属于同一个强一致边界，金额字段、约束和审计日志要一起设计。\n- 库存扣减：热点 SKU 适合短事务、条件更新、固定访问顺序和失败重试，避免把远程调用放在锁持有期间。\n- 状态机流转：用 `WHERE status = 'PENDING'` 这类条件更新保证状态前置条件，再检查影响行数。\n- 批量修复：按主键或时间窗口分批提交，每批设置上限，记录游标和补偿日志。\n- 后台报表：大范围一致性读会保留旧版本，建议走副本、离线快照或分段读取。\n- 读写分离：事务内读己之写优先走主库或同一连接，跨副本读取要处理复制延迟。\n- 框架事务：Spring 这类声明式事务要重点确认传播行为、异常回滚规则、连接绑定和超时时间。",
      "边界与故障模式：事务问题往往表现为锁等待、死锁、长事务、提交抖动和数据语义偏差。\n\n- 锁等待：事务持有热点行锁或范围锁，其他会话卡在 `Lock wait`，接口 p99 和连接数一起上升。\n- 死锁：多个事务以不同顺序访问资源，InnoDB 检测等待环并回滚其中一个事务，应用要按幂等语义重试。\n- 长事务：`trx_started` 很早、`History list length` 升高、Undo 空间增长、DDL 等待和备份变慢。\n- 范围锁扩大：缺少合适索引的 `UPDATE`、`DELETE`、`SELECT ... FOR UPDATE` 会扫描更多记录并扩大锁影响面。\n- 提交抖动：磁盘 fsync、Redo 容量、Binlog 同步、组提交和存储延迟会反映在提交耗时上。\n- 隐式提交：DDL、部分管理语句和会话设置可能切断预期事务边界，上线脚本需要单独评审。\n- 连接池污染：应用归还连接前没有完成事务，后续请求继承未提交状态或隔离级别，容易出现难复现问题。\n- 外部副作用：事务内调用消息、HTTP、缓存删除、文件写入时，数据库回滚无法撤销外部世界，需要幂等和补偿。",
      "排查实践：事务排查要把业务入口、会话、锁、历史版本和日志刷盘串成证据链。\n\n1. 固化现场：记录接口、Trace ID、SQL、绑定参数、事务开始时间、错误码、超时点、隔离级别和实例角色。\n2. 看活跃事务：查 `information_schema.innodb_trx`，定位事务年龄、当前 SQL、等待状态和持有线程。\n3. 看锁关系：查 `performance_schema.data_locks` 与 `data_lock_waits`，确认阻塞方、等待方、索引名、锁模式和锁数据。\n4. 看 InnoDB 状态：用 `SHOW ENGINE INNODB STATUS\\G` 观察 `TRANSACTIONS`、最近死锁、History list length 和锁等待。\n5. 看连接现场：用 `SHOW PROCESSLIST` 或 Performance Schema 线程表定位 Sleep 长事务、DDL 等待和连接池堆积。\n6. 看 SQL 路径：对锁定读和写语句跑 `EXPLAIN`/`EXPLAIN ANALYZE`，确认索引、扫描行数和范围条件。\n7. 看提交链路：观察 Redo/Binlog 相关变量、磁盘 fsync、复制延迟和大事务 Binlog。\n8. 小步修复：缩短事务、拆批、补索引、固定资源访问顺序、设置事务超时、把远程调用移出事务、补幂等重试，并用同一批指标复测。\n\n```sql\nSELECT trx_id, trx_state, trx_started, trx_mysql_thread_id,\n       trx_query, trx_rows_locked, trx_rows_modified\nFROM information_schema.innodb_trx\nORDER BY trx_started\\G\n\nSELECT ENGINE_TRANSACTION_ID, THREAD_ID, OBJECT_SCHEMA, OBJECT_NAME,\n       INDEX_NAME, LOCK_TYPE, LOCK_MODE, LOCK_STATUS, LOCK_DATA\nFROM performance_schema.data_locks\\G\n\nSELECT *\nFROM performance_schema.data_lock_waits\\G\n\nSHOW ENGINE INNODB STATUS\\G\nSHOW PROCESSLIST;\nSHOW VARIABLES LIKE 'transaction_isolation';\nSHOW VARIABLES LIKE 'innodb_flush_log_at_trx_commit';\nSHOW VARIABLES LIKE 'sync_binlog';\n```\n\n有效修复会体现为事务年龄下降、锁等待链缩短、History list length 回落、死锁频率下降、提交耗时稳定和业务重试成功率可控。",
      "指标与命令速查：事务健康度需要同时看边界、锁、版本和提交。\n\n- `information_schema.innodb_trx.trx_started`：判断事务年龄和长事务。\n- `trx_rows_locked` / `trx_rows_modified`：观察锁范围和写入规模。\n- `performance_schema.data_locks`：查看锁对象、索引、锁模式和锁状态。\n- `performance_schema.data_lock_waits`：构造阻塞链。\n- `SHOW ENGINE INNODB STATUS`：查看 `TRANSACTIONS`、死锁、History list length 和等待信息。\n- `SHOW PROCESSLIST`：快速识别 `Sleep` 长事务、锁等待、DDL 等待和慢 SQL。\n- `transaction_isolation`：确认会话和全局隔离级别。\n- `innodb_flush_log_at_trx_commit`：确认 Redo 提交刷盘语义。\n- `sync_binlog`：确认 Binlog 同步策略。\n- `COMMIT` 耗时、死锁次数、锁等待超时、复制延迟、大事务 Binlog 体积：判断事务对业务和复制链路的影响。",
      "常见误区：事务的正确心智模型是“业务不变量的最小可靠边界”。\n\n- 事务边界越小，锁持有、Undo 保留、提交抖动和复制压力越容易控制。\n- 普通快照读适合稳定读取历史版本，锁定读适合保护即将修改的当前版本。\n- 幂等键、唯一约束、条件更新和影响行数检查是事务设计的一部分。\n- 死锁是高并发写入中的可处理失败形态，应用要按业务幂等性设计重试。\n- 长事务的主要代价常体现在旧版本清理、锁等待、DDL 阻塞和复制延迟上。\n- 框架声明式事务的真实边界由连接、传播行为、异常类型和超时共同决定。\n- 本地数据库事务负责本库状态一致，跨服务一致性需要消息、外盒、Saga、补偿或其他分布式事务方案配合。",
      "面试追问：事务题适合按“定义 -> ACID -> InnoDB 机制 -> 并发异常 -> 排查证据 -> 工程取舍”回答。\n\n- 事务是什么，它解决业务系统中的哪个核心问题？\n- `autocommit=1`、`START TRANSACTION`、`COMMIT`、`ROLLBACK` 的行为分别是什么？\n- ACID 在 InnoDB 中分别依赖哪些机制？\n- Undo Log、Redo Log、Binlog、锁、MVCC 和 ReadView 在事务中各负责什么？\n- 普通快照读和 `SELECT ... FOR UPDATE` 的可见性与锁行为有什么差异？\n- MySQL 默认可重复读下，事务如何处理快照读、当前读和范围锁？\n- 长事务为什么会导致 History list length 升高、Undo 积压和 DDL 阻塞？\n- 死锁和锁等待如何区分，应用层如何安全重试？\n- 如何用 `innodb_trx`、`data_locks`、`SHOW ENGINE INNODB STATUS` 找到阻塞源？\n- 资金、库存、状态机、批处理和消息发布场景中，事务边界如何设计？",
      "参考来源：本讲解主要参考 MySQL 8.4 Reference Manual 的 InnoDB Transaction Model、START TRANSACTION/COMMIT/ROLLBACK、InnoDB and the ACID Model、Transaction Isolation Levels、Multi-Versioning、Consistent Nonlocking Reads、Undo Logs、Redo Log、Binary Log、Locking Reads、Locks Set by Different SQL Statements、Deadlocks in InnoDB 与 SAVEPOINT 文档，并结合 PlanetScale 的 Database Transactions、Spring 事务管理文档、PostgreSQL 事务教程、小林 coding 和 JavaGuide 的 MVCC/事务资料校准中文表达、工程例子和面试问法。官方资料用于定义、命令语义、隔离和锁边界；工程文章用于补充事务边界设计、框架落地和排查路径。"
    ],
    typicalProblems: [
      "事务是什么，它把哪些数据库操作组织成一个业务原子边界？",
      "`autocommit`、`START TRANSACTION`、`COMMIT`、`ROLLBACK` 和 `SAVEPOINT` 分别如何影响事务生命周期？",
      "ACID 在 InnoDB 中分别由 Undo、Redo、锁、MVCC、约束和 Binlog 如何支撑？",
      "普通快照读、当前读和锁定读在事务内的可见性与锁行为有什么差异？",
      "MySQL 隔离级别如何影响脏读、不可重复读、幻读、锁范围和并发性能？",
      "一次库存扣减或资金转账事务如何设计幂等键、条件更新、锁顺序和重试策略？",
      "长事务会怎样影响 Undo Purge、History list length、锁等待、DDL、备份和复制？",
      "锁等待、死锁、锁等待超时和提交抖动分别如何排查？",
      "如何用 `information_schema.innodb_trx`、`performance_schema.data_locks`、`data_lock_waits` 和 `SHOW ENGINE INNODB STATUS` 建立事务排查证据链？",
      "本地事务、声明式事务、事务外盒、Saga 和补偿事务分别适合解决哪些一致性问题？"
    ],
    commonCommands: [
      "START TRANSACTION",
      "COMMIT",
      "ROLLBACK",
      "SAVEPOINT <name>",
      "ROLLBACK TO SAVEPOINT <name>",
      "SELECT * FROM information_schema.innodb_trx\\G",
      "SELECT * FROM performance_schema.data_locks\\G",
      "SELECT * FROM performance_schema.data_lock_waits\\G",
      "SHOW ENGINE INNODB STATUS\\G",
      "SHOW PROCESSLIST",
      "SHOW VARIABLES LIKE 'transaction_isolation'",
      "SHOW VARIABLES LIKE 'innodb_flush_log_at_trx_commit'",
      "SHOW VARIABLES LIKE 'sync_binlog'"
    ],
    useCases: ["订单创建", "库存扣减", "资金转账", "状态机流转", "幂等写入", "批量数据修复", "锁等待排查", "长事务治理", "死锁重试", "声明式事务设计"],
    prerequisites: ["innodb"],
    related: ["acid", "isolation-level", "mvcc", "read-view", "undo-log", "redo-log", "binlog", "lock", "row-lock", "deadlock", "two-phase-commit"],
  },
  "acid": {
    sourceRefs: [
      "mysql-acid-model",
      "mysql-innodb-transaction-model",
      "mysql-commit-rollback",
      "mysql-transaction-isolation-levels",
      "mysql-innodb-multi-versioning",
      "mysql-innodb-consistent-read",
      "mysql-innodb-undo-logs",
      "mysql-innodb-redo-log",
      "mysql-binary-log",
      "mysql-innodb-locking-reads",
      "mysql-innodb-locks-set",
      "ibm-acid-properties",
      "planetscale-database-transactions",
      "xiaolincoding-mysql-mvcc",
    ],
    concept:
      "ACID 是事务可靠性的四个目标：原子性保证成组操作整体提交或撤销，一致性保证业务不变量持续成立，隔离性控制并发可见性，持久性保证提交结果可恢复。",
    explanation: [
      "概念定位：ACID 是理解事务可靠性的核心框架，回答的是“数据库怎样让一组读写在并发、失败和重启之后仍然保持业务语义正确”的问题。订单支付、库存扣减、余额转账、优惠券核销、状态机流转和后台批量修复都需要用 ACID 判断事务边界是否可靠。\n\n在 MySQL/InnoDB 中，ACID 贯穿 SQL 事务语义、约束检查、隔离级别、MVCC、锁、Undo Log、Redo Log、Binlog 和刷盘策略。新手先掌握四个字母各自解决的问题；有经验的工程师要继续追问每个性质由哪些机制承担、哪些配置会改变风险窗口、线上证据在哪里。",
      "准确定义：ACID 由四个事务性质组成。\n\n- `Atomicity` 原子性：事务内的操作作为一个逻辑单元推进，提交时整体生效，回滚时通过 Undo 撤销已做修改。\n- `Consistency` 一致性：事务执行前后数据库满足约束和业务不变量，例如唯一键、外键、余额非负、库存非负和状态机合法迁移。\n- `Isolation` 隔离性：并发事务之间的数据可见性由隔离级别、MVCC 和锁控制，避免中间状态被其他事务按错误方式观察。\n- `Durability` 持久性：事务提交成功后，即使数据库进程或主机崩溃，也能通过 Redo、Binlog 和存储系统恢复提交结果。\n\nACID 是目标集合；InnoDB 的日志、锁、版本链、约束和恢复流程是落地机制。",
      "心智模型：把 ACID 看成事务的四道工程护栏。\n\n- 原子性管“这一组动作如何一起完成或一起撤销”。\n- 一致性管“完成以后业务规则是否仍成立”。\n- 隔离性管“并发的人能看到什么、会等待什么”。\n- 持久性管“系统重启以后提交结果还能否找回”。\n\n以转账为例，扣 A 账户、加 B 账户、写流水组成同一个事务。原子性保证三步同进退，一致性保证总金额和账户规则成立，隔离性保证其他事务看到可解释的状态，持久性保证 `COMMIT` 返回后的结果能从日志恢复。",
      "主流程机制：一次符合 ACID 目标的 InnoDB 事务可以按以下路径理解。\n\n1. 进入事务边界：客户端执行 `START TRANSACTION`，或在 `autocommit=1` 下让单条 DML 自动成为短事务。\n2. 读取数据：普通快照读通过 MVCC 和 ReadView 读取可见版本；锁定读和写语句走当前读路径。\n3. 修改数据：InnoDB 按索引定位记录，生成 Undo 旧版本，修改 Buffer Pool 中的数据页，并写入 Redo 记录。\n4. 维护约束：唯一键、外键、非空、检查条件和应用侧状态机共同守住一致性。\n5. 控制并发：隔离级别决定可见性，记录锁、间隙锁、Next-Key Lock 和锁定读决定写冲突与范围保护。\n6. 提交事务：提交路径把事务状态、Redo 和 Binlog 推进到一致顺序，释放锁，让后续事务看到提交结果。\n7. 崩溃恢复：数据库重启时根据 Redo 重放已提交修改，并结合 Undo 清理未提交状态。\n8. 后台清理：Purge 在线程确认旧 ReadView 释放后清理 Undo 历史版本。",
      "实践例子：余额转账可以把 ACID 的四个性质落到具体 SQL 和约束上。\n\n```sql\nCREATE TABLE account (\n  id BIGINT PRIMARY KEY,\n  balance DECIMAL(18,2) NOT NULL,\n  CHECK (balance >= 0)\n) ENGINE=InnoDB;\n\nCREATE TABLE transfer_log (\n  id BIGINT PRIMARY KEY,\n  request_id VARCHAR(64) NOT NULL,\n  from_account BIGINT NOT NULL,\n  to_account BIGINT NOT NULL,\n  amount DECIMAL(18,2) NOT NULL,\n  created_at DATETIME NOT NULL,\n  UNIQUE KEY uk_request_id (request_id)\n) ENGINE=InnoDB;\n\nSTART TRANSACTION;\n\nSELECT id, balance\nFROM account\nWHERE id IN (1001, 2002)\nORDER BY id\nFOR UPDATE;\n\nUPDATE account\nSET balance = balance - 100.00\nWHERE id = 1001\n  AND balance >= 100.00;\n\nUPDATE account\nSET balance = balance + 100.00\nWHERE id = 2002;\n\nINSERT INTO transfer_log(id, request_id, from_account, to_account, amount, created_at)\nVALUES (90001, 'transfer-20260605-001', 1001, 2002, 100.00, NOW());\n\nCOMMIT;\n```\n\n这段流程里，`FOR UPDATE` 和固定顺序锁定账户降低并发冲突概率，`balance >= 100.00` 与 `CHECK` 保证业务不变量，`uk_request_id` 负责幂等，`COMMIT` 后结果进入持久化与复制链路。应用层要检查每个 `UPDATE` 的影响行数，并把死锁、锁等待超时和唯一键冲突映射成明确的重试或业务返回。",
      "四个性质的 InnoDB 落地：ACID 需要数据库机制和应用语义一起完成。\n\n- 原子性：Undo Log 记录旧值，回滚时按反向修改撤销；事务状态决定哪些修改进入提交结果。\n- 一致性：数据库约束提供底线，应用代码负责跨表、跨服务和领域规则；事务只负责在边界内保护这些规则的执行。\n- 隔离性：MVCC 服务普通一致性读，锁服务当前读和写冲突；`READ COMMITTED`、`REPEATABLE READ`、`SERIALIZABLE` 改变 ReadView 创建时机、锁范围和并发代价。\n- 持久性：Redo Log 服务崩溃恢复，Binlog 服务复制与时间点恢复；`innodb_flush_log_at_trx_commit`、`sync_binlog`、存储 fsync 和组提交共同影响提交延迟和故障窗口。\n\n工程判断的关键是把每个业务风险映射到具体机制：资金不变量看约束和事务边界，读写冲突看锁与隔离级别，重启恢复看 Redo 和 Binlog，同步复制看提交链路与副本延迟。",
      "工程场景与取舍：ACID 强度越高，系统越容易解释状态变化，同时也会付出锁、日志和等待成本。\n\n- 资金与资产：优先使用短本地事务、强约束、幂等键、审计流水和明确重试策略。\n- 库存与秒杀：热点行写入要固定资源访问顺序，使用条件更新和限时重试，必要时用分桶库存或异步削峰。\n- 状态机流转：用 `WHERE status = 'PENDING'` 这类前置条件守住合法迁移，再检查影响行数。\n- 批量修复：按主键或时间窗口分批提交，记录游标，控制每批修改行数和 Binlog 体积。\n- 读写分离：事务内读己之写适合走主库或同一连接，副本读要纳入复制延迟判断。\n- 跨服务一致性：本地 ACID 适合保护单库状态，跨消息、缓存、HTTP 和文件系统的副作用需要幂等消息、事务外盒、Saga 或补偿流程。",
      "边界与故障模式：ACID 失效感通常来自事务边界过大、隔离理解偏差、持久化配置取舍和应用副作用。\n\n- 原子性风险：异常被框架吞掉、事务传播配置出错、连接池归还前事务未结束，会让真实边界偏离业务预期。\n- 一致性风险：缺少唯一键、检查条件、影响行数判断或状态机前置条件，会让并发写入突破业务不变量。\n- 隔离性风险：长事务保留旧 ReadView，热点更新扩大锁等待，缺少索引的锁定读会扫描并锁住更大范围。\n- 持久性风险：刷盘策略偏向吞吐时，崩溃窗口要通过业务容忍度、复制策略和恢复演练确认。\n- DDL 与隐式提交：结构变更、部分管理语句和上线脚本会影响事务边界，生产变更要单独评审。\n- 外部副作用：数据库回滚无法撤销已经发出的 MQ、HTTP、缓存删除和文件写入，事件发布要设计可重放、可去重和可补偿。",
      "排查实践：ACID 问题要把业务现象拆到四个性质，再用 MySQL 现场证据验证。\n\n1. 定位性质：重复扣款优先看原子性和幂等；余额为负优先看一致性约束；读到异常中间态优先看隔离级别和读路径；重启后数据缺失优先看持久化和复制。\n2. 查事务边界：确认 `autocommit`、`START TRANSACTION`、`COMMIT`、`ROLLBACK`、框架传播行为和异常回滚规则。\n3. 查隔离配置：确认全局与会话 `transaction_isolation`，区分普通快照读、当前读和锁定读。\n4. 查活跃事务：用 `information_schema.innodb_trx` 找长事务、事务年龄、等待状态和当前 SQL。\n5. 查锁与等待：用 `performance_schema.data_locks`、`data_lock_waits` 和 `SHOW ENGINE INNODB STATUS` 找阻塞链、锁模式、索引名和最近死锁。\n6. 查日志与提交：确认 `innodb_flush_log_at_trx_commit`、`sync_binlog`、磁盘 fsync、Redo 容量、Binlog 体积和复制延迟。\n7. 查 SQL 路径：对锁定读、`UPDATE`、`DELETE` 跑 `EXPLAIN`，确认索引命中、扫描行数和锁范围。\n8. 修复并复测：缩短事务、补约束、补索引、固定访问顺序、设置超时、补幂等重试，并观察锁等待、死锁率、提交耗时和业务错误率。\n\n```sql\nSHOW VARIABLES LIKE 'autocommit';\nSHOW VARIABLES LIKE 'transaction_isolation';\nSHOW VARIABLES LIKE 'innodb_flush_log_at_trx_commit';\nSHOW VARIABLES LIKE 'sync_binlog';\n\nSELECT trx_id, trx_state, trx_started, trx_mysql_thread_id,\n       trx_query, trx_rows_locked, trx_rows_modified\nFROM information_schema.innodb_trx\nORDER BY trx_started\\G\n\nSELECT ENGINE_TRANSACTION_ID, OBJECT_SCHEMA, OBJECT_NAME,\n       INDEX_NAME, LOCK_TYPE, LOCK_MODE, LOCK_STATUS, LOCK_DATA\nFROM performance_schema.data_locks\\G\n\nSELECT * FROM performance_schema.data_lock_waits\\G\nSHOW ENGINE INNODB STATUS\\G\nEXPLAIN FORMAT=TREE UPDATE account SET balance = balance - 100 WHERE id = 1001;\n```",
      "常见误区：ACID 的正确用法是围绕业务不变量设计最小可靠事务边界。\n\n- 一致性需要数据库约束、应用校验、事务边界和补偿流程共同维护。\n- 隔离级别决定并发可见性，也决定锁、等待和吞吐的取舍。\n- 持久性有配置强度，刷盘频率、Binlog 同步和存储可靠性要匹配业务恢复目标。\n- 长事务会增加锁持有、Undo 保留、History list length、DDL 等待和复制压力。\n- 唯一键、条件更新、影响行数检查和幂等重试是 ACID 落地的一部分。\n- 本地事务保护单库内部状态，跨服务副作用需要事件表、消息确认、去重表、补偿任务和人工审计兜底。",
      "面试追问：ACID 可以按“定义 -> InnoDB 机制 -> 场景 -> 故障证据 -> 取舍”组织答案。\n\n- ACID 四个字母分别是什么，各自解决什么问题？\n- 原子性和持久性在 InnoDB 中分别依赖 Undo Log、Redo Log 和事务状态的哪些能力？\n- 一致性由数据库负责哪些部分，应用需要负责哪些业务不变量？\n- 隔离级别、MVCC、ReadView 和锁如何共同实现隔离性？\n- `READ COMMITTED` 和 `REPEATABLE READ` 下 ReadView 创建时机有什么差异？\n- `innodb_flush_log_at_trx_commit` 和 `sync_binlog` 如何影响提交延迟与恢复窗口？\n- 转账、库存、状态机和批量修复分别如何设计事务边界？\n- 如何排查长事务导致的锁等待、Undo 积压和 DDL 阻塞？\n- 死锁、锁等待超时和唯一键冲突在应用层应该如何重试？\n- 本地 ACID 事务和事务外盒、Saga、补偿事务分别解决哪些一致性问题？",
      "参考来源：本讲解主要参考 MySQL 8.4 Reference Manual 的 InnoDB and the ACID Model、InnoDB Transaction Model、START TRANSACTION/COMMIT/ROLLBACK、Transaction Isolation Levels、Multi-Versioning、Consistent Nonlocking Reads、Undo Logs、Redo Log、Binary Log、Locking Reads 和 Locks Set by Different SQL Statements 文档，并结合 IBM 的 ACID properties、PlanetScale 的 Database Transactions、小林 coding 的 MySQL 事务隔离资料校准定义、例子、刷盘取舍、并发可见性和中文面试表达。官方资料用于确定 MySQL/InnoDB 机制边界，工程文章用于补充业务建模、排查路径和实践取舍。"
    ],
    typicalProblems: [
      "ACID 四个性质分别是什么，各自解决事务里的哪类可靠性问题？",
      "InnoDB 如何用 Undo Log、Redo Log、锁、MVCC、约束和 Binlog 支撑 ACID？",
      "原子性和持久性有什么区别，回滚恢复和崩溃恢复分别依赖什么？",
      "一致性为什么需要数据库约束和应用业务不变量共同维护？",
      "隔离级别如何影响脏读、不可重复读、幻读、锁范围和吞吐？",
      "资金转账、库存扣减和状态机流转如何用 ACID 设计事务边界？",
      "长事务怎样影响 Undo Purge、History list length、DDL、锁等待和复制？",
      "`innodb_flush_log_at_trx_commit` 与 `sync_binlog` 如何影响提交延迟和故障窗口？",
      "线上出现重复扣款、余额异常、锁等待或重启后数据异常时如何按 ACID 拆解排查？",
      "本地 ACID 事务、事务外盒、Saga 和补偿任务分别适合哪些一致性边界？"
    ],
    commonCommands: [
      "START TRANSACTION",
      "COMMIT",
      "ROLLBACK",
      "SHOW VARIABLES LIKE 'autocommit'",
      "SHOW VARIABLES LIKE 'transaction_isolation'",
      "SHOW VARIABLES LIKE 'innodb_flush_log_at_trx_commit'",
      "SHOW VARIABLES LIKE 'sync_binlog'",
      "SELECT * FROM information_schema.innodb_trx\\G",
      "SELECT * FROM performance_schema.data_locks\\G",
      "SELECT * FROM performance_schema.data_lock_waits\\G",
      "SHOW ENGINE INNODB STATUS\\G",
      "EXPLAIN FORMAT=TREE <sql>"
    ],
    useCases: ["资金转账", "库存扣减", "订单支付", "状态机流转", "幂等写入", "批量修复", "锁等待排查", "长事务治理", "崩溃恢复评估", "跨服务一致性设计"],
    prerequisites: ["transaction"],
    related: ["isolation-level", "mvcc", "read-view", "undo-log", "redo-log", "binlog", "lock", "row-lock", "deadlock", "two-phase-commit"],
  },
  "isolation-level": {
    sourceRefs: [
      "mysql-transaction-isolation-levels",
      "mysql-innodb-consistent-read",
      "mysql-innodb-multi-versioning",
      "mysql-innodb-undo-logs",
      "mysql-innodb-locking-reads",
      "mysql-innodb-locks-set",
      "mysql-innodb-transaction-model",
      "mysql-commit-rollback",
      "mysql-innodb-deadlocks",
      "mysql-innodb-deadlocks-handling",
      "planetscale-database-transactions",
      "postgresql-transaction-isolation",
      "xiaolincoding-mysql-mvcc",
      "javaguide-mysql-mvcc",
      "sobyte-mysql-mvcc",
    ],
    concept:
      "隔离级别定义并发事务之间的可见性、锁范围和等待行为，是在一致性、吞吐和排障复杂度之间做工程取舍的核心开关。",
    explanation: [
      "概念定位：隔离级别（Isolation Level）解决的是“多个事务同时读写同一批数据时，每个事务能看到什么、会等待什么、会承担多少锁成本”的问题。库存扣减、账户余额、订单状态、后台批量修复、读写分离一致性、慢 SQL 锁等待和死锁排查都会落到隔离级别上。\n\n在 MySQL/InnoDB 中，隔离级别同时影响普通一致性读（consistent read）、锁定读（locking read）、当前读、ReadView、Undo 版本链、记录锁、间隙锁和 Next-Key Lock。新手先掌握四档隔离级别的现象差异；有经验的工程师要继续追踪 ReadView 创建时机、索引访问路径、锁范围、长事务和线上证据。",
      "准确定义：MySQL/InnoDB 支持四个 SQL 事务隔离级别。\n\n- `READ UNCOMMITTED`：普通读可能看到其他事务尚未提交的修改，也就是脏读。\n- `READ COMMITTED`：普通一致性读每次语句读取已经提交的最新快照，同一事务内多次读可能看到不同提交版本。\n- `REPEATABLE READ`：InnoDB 默认级别；同一事务内首次普通一致性读建立快照，后续普通一致性读复用该快照。\n- `SERIALIZABLE`：把并发读写推进到更强的锁语义，普通 `SELECT` 在显式事务中会按共享锁读取，吞吐代价更高。\n\n关键术语要一起理解：\n- `dirty read` 脏读：读取到其他事务未提交修改。\n- `non-repeatable read` 不可重复读：同一事务两次读取同一行，结果随其他事务提交而变化。\n- `phantom read` 幻读：同一事务范围查询中出现其他事务提交的新行。\n- `consistent read` 一致性读：普通快照读，依靠 MVCC、ReadView 和 Undo 版本链返回可见版本。\n- `current read` 当前读：写语句、`SELECT ... FOR UPDATE`、`SELECT ... FOR SHARE` 读取最新可锁版本并设置锁。",
      "心智模型：把隔离级别看成事务的“并发观察镜”和“锁闸门”。\n\n- 观察镜决定普通 `SELECT` 看到哪个历史版本。\n- 锁闸门决定写入、锁定读和范围访问会拦住哪些并发事务。\n- `READ COMMITTED` 像每次语句都换一副新眼镜，看到语句开始时已提交的数据。\n- `REPEATABLE READ` 像事务第一次普通读时定格一张照片，后续普通读继续看同一张照片。\n- 当前读像走到柜台检查最新实物，并为接下来的修改占住位置。\n\n这个模型能解释很多线上现象：同一个事务里普通读和当前读看到不同结果，长事务一直看旧快照，范围更新因索引和隔离级别扩大锁影响面。",
      "主流程机制：一次 InnoDB 读写在隔离级别下可以按以下路径理解。\n\n1. 会话进入事务，继承全局或会话级 `transaction_isolation`，显式事务由 `START TRANSACTION` 开始。\n2. 普通 `SELECT` 进入一致性读路径，InnoDB 根据隔离级别创建或复用 ReadView。\n3. ReadView 根据活跃事务集合、事务 ID 和 Undo 版本链判断哪一个行版本对当前事务可见。\n4. `READ COMMITTED` 每条一致性读语句生成新的 ReadView。\n5. `REPEATABLE READ` 在事务首次一致性读时生成 ReadView，并在后续一致性读中复用。\n6. 写语句和锁定读进入当前读路径，读取最新已提交版本，并按访问路径设置记录锁、间隙锁或 Next-Key Lock。\n7. 范围条件、唯一索引命中、普通索引扫描和全表扫描会产生不同锁范围，索引质量直接影响等待链长度。\n8. 提交事务后，修改对新 ReadView 和当前读可见；回滚事务时，Undo 撤销未提交修改。\n9. 后台 Purge 在线程确认旧 ReadView 释放后清理历史版本；长事务会延长这个窗口。",
      "四档语义速查：隔离级别的差异可以落到可见性、锁和典型用途上。\n\n- `READ UNCOMMITTED`：读取延迟低，业务语义弱，适合临时诊断和低可靠读场景。\n- `READ COMMITTED`：每条语句看到最新已提交快照，读新鲜度高；InnoDB 在搜索和索引扫描中使用更少间隙锁，适合降低范围锁影响、兼容 Oracle 语义和高并发 OLTP。\n- `REPEATABLE READ`：同一事务普通读保持稳定快照，是 MySQL/InnoDB 默认选择；结合 Next-Key Lock 处理范围当前读和写冲突，适合多数业务事务。\n- `SERIALIZABLE`：通过更强锁语义让并发执行更接近串行顺序，适合小范围、高价值、低并发的强约束读写。\n\n工程选择要看业务不变量：读新鲜度、重复读取稳定性、范围插入保护、锁等待、死锁概率、长事务成本和框架默认行为都要一起评估。",
      "实践例子：下面用两个会话观察快照读、当前读和 ReadView 时机。\n\n```sql\nCREATE TABLE account (\n  id BIGINT PRIMARY KEY,\n  balance INT NOT NULL,\n  KEY idx_balance (balance)\n) ENGINE=InnoDB;\n\nINSERT INTO account VALUES (1, 100), (2, 200);\n\n-- 会话 A：开启事务并修改余额，先保持未提交\nSET SESSION TRANSACTION ISOLATION LEVEL REPEATABLE READ;\nSTART TRANSACTION;\nUPDATE account SET balance = 150 WHERE id = 1;\n\n-- 会话 B：分别切换 READ COMMITTED 和 REPEATABLE READ 观察普通一致性读\nSET SESSION TRANSACTION ISOLATION LEVEL READ COMMITTED;\nSTART TRANSACTION;\nSELECT balance FROM account WHERE id = 1;\n-- 会话 A COMMIT 后，再执行一次 SELECT，会话 B 在 READ COMMITTED 下读取新的已提交版本\nSELECT balance FROM account WHERE id = 1;\nCOMMIT;\n\nSET SESSION TRANSACTION ISOLATION LEVEL REPEATABLE READ;\nSTART TRANSACTION;\nSELECT balance FROM account WHERE id = 1;\n-- 会话 A 后续再提交修改，会话 B 的普通一致性读仍复用首次快照\nSELECT balance FROM account WHERE id = 1;\n\n-- 当前读读取最新可锁版本，并可能等待其他事务释放锁\nSELECT balance FROM account WHERE id = 1 FOR UPDATE;\nCOMMIT;\n```\n\n这个实验的重点是三条线：`READ COMMITTED` 每次普通读创建新快照，`REPEATABLE READ` 复用事务内首次快照，`FOR UPDATE` 走当前读和加锁路径。",
      "深层细节：隔离级别的真实行为由 MVCC、锁和访问路径共同决定。\n\n- ReadView 时机：`READ COMMITTED` 以语句为单位，`REPEATABLE READ` 以事务首次一致性读为单位。\n- 版本链成本：长事务保留旧 ReadView，Undo 版本清理延后，`History list length` 升高，备份、DDL 和空间回收都会受影响。\n- 快照读与当前读：普通 `SELECT` 看可见历史版本，写语句和锁定读看最新可锁版本，同一事务内混用时要明确语义。\n- 锁范围：InnoDB 行锁落在索引记录上；范围扫描会带来记录锁、间隙锁或 Next-Key Lock，缺少合适索引会扩大影响面。\n- 唯一命中：唯一索引等值命中通常锁住目标记录；范围条件和非唯一索引需要额外关注间隙。\n- `READ COMMITTED` 锁行为：InnoDB 在该级别下减少搜索和索引扫描中的间隙锁，外键检查和重复键检查仍会用到必要间隙锁。\n- `SERIALIZABLE` 代价：显式事务中的普通读会获取共享锁，读多写多场景的等待和死锁概率会上升。\n- 复制与框架：应用连接池、ORM、Spring 事务传播和读写分离路由会影响真实隔离语义，事务内读己之写优先绑定同一连接或主库。",
      "工程场景与取舍：隔离级别选择要从业务风险和线上成本出发。\n\n- 订单状态流转：`REPEATABLE READ` 配合条件更新、唯一键和短事务，可以提供稳定快照和明确写冲突。\n- 高并发列表与后台查询：`READ COMMITTED` 提供更及时的已提交视图，范围锁影响更小，适合部分读写冲突敏感场景。\n- 资金与库存扣减：关键写路径用短事务、固定锁顺序、条件更新和影响行数检查，隔离级别与索引设计一起评审。\n- 报表与导出：长时间一致性读会持有旧快照，适合放到只读副本、离线快照或分批游标读取。\n- 批量修复：按主键或时间窗口拆批提交，控制每批扫描、锁定、Undo、Redo 和 Binlog 体积。\n- 强串行语义：`SERIALIZABLE` 适合小范围关键校验，发布前用压测确认等待链、死锁率和吞吐。",
      "边界与故障模式：隔离级别问题通常表现为读到旧版本、锁等待扩大、死锁和长事务积压。\n\n- 快照陈旧：`REPEATABLE READ` 长事务持续读取首次快照，业务误以为数据没有变化。\n- 语句间变化：`READ COMMITTED` 同一事务多次普通读可能看到其他事务刚提交的版本，报表口径需要额外稳定边界。\n- 当前读跳变：事务内先普通读再 `FOR UPDATE`，结果可能从历史版本切到最新可锁版本。\n- 范围锁扩大：锁定读、`UPDATE`、`DELETE` 的条件缺少合适索引时，扫描范围和锁范围会同时放大。\n- 幻读语义：普通一致性读由快照稳定结果，当前读和写入依靠锁范围处理并发插入。\n- 长事务积压：活跃事务年龄过长会推高 Undo 历史版本、History list length、DDL 等待和备份时间。\n- 连接池污染：连接归还前保留事务或隔离级别修改，后续请求继承意外会话状态。\n- DDL 与管理语句：部分语句会触发隐式提交，发布脚本要单独评审事务边界。",
      "排查实践：隔离级别排查要把业务现象、会话变量、读路径和锁证据串起来。\n\n1. 固化现场：记录业务入口、Trace ID、SQL、绑定参数、事务开始时间、隔离级别、读写顺序和错误码。\n2. 确认隔离配置：查看全局与会话 `transaction_isolation`，检查连接池初始化 SQL 和框架事务声明。\n3. 区分快照读与当前读：标记普通 `SELECT`、`FOR UPDATE`、`FOR SHARE`、`UPDATE`、`DELETE` 和 DDL。\n4. 查活跃事务：用 `information_schema.innodb_trx` 找长事务、事务年龄、当前 SQL 和等待状态。\n5. 查锁关系：用 `performance_schema.data_locks` 与 `data_lock_waits` 观察锁对象、索引、锁模式、等待方和阻塞方。\n6. 查 InnoDB 状态：用 `SHOW ENGINE INNODB STATUS\\G` 查看 `TRANSACTIONS`、最近死锁和 History list length。\n7. 查访问路径：对锁定读和写语句跑 `EXPLAIN` 或 `EXPLAIN ANALYZE`，确认索引、扫描行数和范围条件。\n8. 修复并复测：缩短事务、补索引、固定访问顺序、拆批、调整隔离级别、设置事务超时，并用同一组指标复核。\n\n```sql\nSHOW VARIABLES LIKE 'transaction_isolation';\nSELECT @@GLOBAL.transaction_isolation, @@SESSION.transaction_isolation;\n\nSELECT trx_id, trx_state, trx_started, trx_mysql_thread_id,\n       trx_isolation_level, trx_query, trx_rows_locked, trx_rows_modified\nFROM information_schema.innodb_trx\nORDER BY trx_started\\G\n\nSELECT ENGINE_TRANSACTION_ID, THREAD_ID, OBJECT_SCHEMA, OBJECT_NAME,\n       INDEX_NAME, LOCK_TYPE, LOCK_MODE, LOCK_STATUS, LOCK_DATA\nFROM performance_schema.data_locks\\G\n\nSELECT *\nFROM performance_schema.data_lock_waits\\G\n\nSHOW ENGINE INNODB STATUS\\G\nEXPLAIN FORMAT=TREE SELECT * FROM account WHERE balance BETWEEN 100 AND 200 FOR UPDATE;\n```\n\n有效修复通常体现为事务年龄下降、锁等待链缩短、History list length 回落、死锁频率下降、扫描行数减少和业务读写语义稳定。",
      "指标与命令速查：隔离级别的线上健康度要同时看配置、事务、锁和 SQL 路径。\n\n- `@@SESSION.transaction_isolation`：确认当前连接真实隔离级别。\n- `information_schema.innodb_trx.trx_isolation_level`：确认活跃事务的隔离级别。\n- `trx_started`：判断事务年龄和长事务风险。\n- `trx_rows_locked` / `trx_rows_modified`：观察锁定规模和写入规模。\n- `performance_schema.data_locks`：查看锁对象、索引、锁模式、锁状态和锁数据。\n- `performance_schema.data_lock_waits`：构造阻塞链。\n- `SHOW ENGINE INNODB STATUS`：观察事务、死锁、History list length 和锁等待。\n- `EXPLAIN` / `EXPLAIN ANALYZE`：确认访问路径是否扩大范围锁。\n- 慢查询日志 `Rows_examined`、`Lock_time`、应用超时和死锁错误码：判断业务影响面。",
      "常见误区：隔离级别的正确理解来自“读视图、当前读、锁范围和事务长度”的组合。\n\n- 普通一致性读读取 MVCC 可见版本，当前读读取最新可锁版本。\n- `READ COMMITTED` 强调每条语句的新快照，`REPEATABLE READ` 强调事务内普通读的稳定快照。\n- 幻读分析要区分快照范围查询和当前读范围锁。\n- 索引设计会决定锁的实际范围，隔离级别只决定基础规则。\n- 长事务的主要成本体现在旧版本保留、锁持有、DDL 等待、备份和复制压力。\n- 隔离级别属于会话状态，连接池需要在借出连接时设置并在归还前恢复。\n- 事务内读己之写、读副本和跨服务调用要放进同一套一致性设计里。",
      "面试追问：隔离级别题适合按“定义 -> 四档语义 -> MVCC -> 锁 -> 场景 -> 排查证据 -> 取舍”组织答案。\n\n- MySQL 的四个隔离级别分别是什么，各自解决哪些并发现象？\n- 脏读、不可重复读和幻读分别如何定义，如何用两个会话复现？\n- InnoDB 在 `READ COMMITTED` 和 `REPEATABLE READ` 下 ReadView 创建时机有什么差异？\n- 普通快照读、当前读、锁定读分别走什么路径？\n- 为什么同一事务里普通读和 `SELECT ... FOR UPDATE` 可能看到不同结果？\n- MySQL 默认 `REPEATABLE READ` 如何配合 Next-Key Lock 处理范围当前读？\n- `READ COMMITTED` 为什么常被用于降低范围锁影响，它会带来哪些读口径变化？\n- `SERIALIZABLE` 会带来哪些锁等待和吞吐代价？\n- 长事务如何影响 Undo、History list length、DDL、备份和复制？\n- 线上出现锁等待、死锁、读到旧数据或报表口径漂移时，如何用 `innodb_trx`、`data_locks` 和 `SHOW ENGINE INNODB STATUS` 排查？",
      "参考来源：本讲解主要参考 MySQL 8.4 Reference Manual 的 Transaction Isolation Levels、Consistent Nonlocking Reads、InnoDB Multi-Versioning、Undo Logs、Locking Reads、Locks Set by Different SQL Statements、InnoDB Transaction Model、START TRANSACTION/COMMIT/ROLLBACK、Deadlocks in InnoDB 与死锁处理文档，并结合 PlanetScale 的 Database Transactions、PostgreSQL Transaction Isolation、小林 coding、JavaGuide 和 SoByte 的 MVCC/隔离级别资料校准定义、实验、ReadView 时机、锁边界和中文面试表达。官方资料用于确定 MySQL/InnoDB 行为边界，工程文章用于补充实践路径、排障证据和取舍经验。"
    ],
    typicalProblems: [
      "隔离级别解决并发事务中的哪个核心问题？",
      "MySQL 的 `READ UNCOMMITTED`、`READ COMMITTED`、`REPEATABLE READ`、`SERIALIZABLE` 分别有什么可见性语义？",
      "脏读、不可重复读和幻读分别如何定义，如何用两个会话复现？",
      "`READ COMMITTED` 和 `REPEATABLE READ` 的 ReadView 创建时机有什么差异？",
      "普通快照读、当前读和锁定读在可见性、加锁和等待上有什么差异？",
      "为什么同一事务中普通 `SELECT` 和 `SELECT ... FOR UPDATE` 可能读取到不同版本？",
      "InnoDB 默认可重复读下，Next-Key Lock 如何服务范围当前读和并发插入控制？",
      "隔离级别、索引访问路径、锁范围、死锁和吞吐之间如何取舍？",
      "长事务为什么会导致 Undo 历史版本积压、History list length 升高和 DDL 等待？",
      "线上如何用 `transaction_isolation`、`innodb_trx`、`data_locks`、`data_lock_waits` 和 `SHOW ENGINE INNODB STATUS` 排查隔离级别相关问题？"
    ],
    commonCommands: [
      "SET SESSION TRANSACTION ISOLATION LEVEL READ COMMITTED",
      "SET SESSION TRANSACTION ISOLATION LEVEL REPEATABLE READ",
      "SHOW VARIABLES LIKE 'transaction_isolation'",
      "SELECT @@GLOBAL.transaction_isolation, @@SESSION.transaction_isolation",
      "START TRANSACTION",
      "SELECT ... FOR UPDATE",
      "SELECT ... FOR SHARE",
      "SELECT * FROM information_schema.innodb_trx\\G",
      "SELECT * FROM performance_schema.data_locks\\G",
      "SELECT * FROM performance_schema.data_lock_waits\\G",
      "SHOW ENGINE INNODB STATUS\\G",
      "EXPLAIN FORMAT=TREE <locking-read-or-write-sql>"
    ],
    useCases: ["并发读写控制", "订单状态流转", "库存扣减", "资金事务", "报表一致性", "读写分离一致性", "锁等待排查", "死锁治理", "长事务治理", "框架事务配置"],
    prerequisites: ["transaction"],
    related: ["read-committed", "repeatable-read", "phantom-read", "mvcc", "read-view", "undo-log", "lock", "row-lock", "gap-lock", "next-key-lock", "deadlock", "sql-optimization"],
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
