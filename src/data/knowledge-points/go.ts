import type { KnowledgeSourceId } from "./sources.ts";
import type { GraphKnowledgePoint } from "./types.ts";

const goSourceRefs: KnowledgeSourceId[] = [
  "go-docs",
  "go-spec",
  "go-effective-go",
  "go-modules-reference",
  "go-std-lib",
  "go-diagnostics",
  "go-concurrency-pipelines",
];

type GoKnowledgePointInput = Pick<
  GraphKnowledgePoint,
  "id" | "zh" | "en" | "area" | "difficulty" | "concept" | "prerequisites" | "related" | "order"
> & {
  commands?: string[];
  focus: string;
  mechanism: string;
  pitfalls: string;
  scenarios: string[];
  sourceRefs?: KnowledgeSourceId[];
};

function goPoint({
  commands,
  focus,
  mechanism,
  pitfalls,
  scenarios,
  sourceRefs = goSourceRefs,
  ...point
}: GoKnowledgePointInput): GraphKnowledgePoint {
  return {
    ...point,
    sourceRefs,
    explanation: [
      `概念定义：${point.zh}（${point.en}）聚焦${point.concept}Go 以简洁语法、静态类型、编译工具链和轻量并发组织服务端与基础设施程序；理解它时先抓住${focus}。`,
      `工作机制：${mechanism}`,
      `适用场景：${point.zh}常用于${scenarios.join("、")}。学习时把它放回 Go 工程链路中观察，重点看输入、状态变化、输出结果和资源生命周期。`,
      `特殊场景：在并发、网络、I/O、泛型、模块版本或运行时调优中，${point.zh}会和 ${point.related.slice(0, 3).join("、")} 串联出现。此时重点看边界条件、顺序约束、资源消耗和可观测信号。`,
      `常见误区与注意点：实践中容易把${point.zh}当成孤立语法处理，结果遗漏${pitfalls}。落地时用 gofmt、go test、go vet、race detector 和 pprof 验证行为。`,
      "参考来源：本讲解参考 Go 官方文档、语言规范、Effective Go、模块参考、标准库文档、诊断文档和 Go Blog 并发模式，优先采用官方定义、语义约束和工程实践中的稳定结论。",
    ],
    typicalProblems: [
      `${point.zh}解决什么工程问题`,
      `${point.zh}核心机制是什么`,
      `${point.zh}常见边界和排查方式有哪些`,
    ],
    applicationScenarios: scenarios,
    commonCommands: commands,
  };
}

export const goKnowledgePoints = [
  /* <!-- KG_REVIEWED: Go 语言概览 | 2026-05-24 | source_count=7 --> */
  goPoint({ id: "go-overview", zh: "Go 语言概览", en: "Go Overview", area: "foundation", difficulty: "easy", concept: "用一套偏工程化的语言、工具链和运行时构建可维护服务。", focus: "语法简洁、静态类型、包组织、模块依赖、并发模型和运行时调度", mechanism: "Go 源码按 package 组织，go 命令负责格式化、测试、构建和模块解析，编译器生成目标程序，运行时负责 goroutine 调度、GC、网络轮询和栈管理。", scenarios: ["后端服务", "云原生组件", "命令行工具", "基础设施程序"], pitfalls: "包边界、错误处理、上下文取消、并发泄漏和模块版本", commands: ["go version", "go env", "go help"], prerequisites: [], related: ["go-toolchain", "go-module", "goroutine", "go-runtime"], order: 1 }),
  /* <!-- KG_REVIEWED: Go 工具链 | 2026-05-24 | source_count=7 --> */
  goPoint({ id: "go-toolchain", zh: "Go 工具链", en: "Go Toolchain", area: "foundation", difficulty: "easy", concept: "用 go 命令统一完成格式化、依赖、测试、构建和诊断。", focus: "go 命令、环境变量、模块缓存、构建缓存和交叉编译", mechanism: "go 命令读取模块文件和环境配置，解析包图，复用构建缓存，再调用编译、链接、测试和文档等子流程输出结果。", scenarios: ["本地开发", "CI 构建", "交叉编译", "依赖诊断"], pitfalls: "GOROOT、GOPATH、GOMODCACHE、构建缓存和工具链版本差异", commands: ["go env", "go list ./...", "go build ./..."], prerequisites: ["go-overview"], related: ["go-module", "gofmt", "go-test", "go-vet"], order: 2 }),
  /* <!-- KG_REVIEWED: gofmt | 2026-05-24 | source_count=7 --> */
  goPoint({ id: "gofmt", zh: "gofmt", en: "gofmt", area: "tooling", difficulty: "easy", concept: "用标准格式统一 Go 代码风格，降低代码评审噪音。", focus: "格式化规则、导入整理、团队一致性和自动化检查", mechanism: "gofmt 解析 Go 源文件为语法树，再按官方格式重新输出代码；go fmt 会按包范围调用格式化流程。", scenarios: ["提交前格式化", "CI 检查", "团队协作", "代码生成后整理"], pitfalls: "自动化执行位置、生成代码格式、导入分组和编辑器配置", commands: ["gofmt -w .", "go fmt ./..."], prerequisites: ["go-toolchain"], related: ["go-vet", "package", "import"], order: 3 }),
  /* <!-- KG_REVIEWED: Go Module | 2026-05-24 | source_count=7 --> */
  goPoint({ id: "go-module", zh: "Go Module", en: "Go Module", area: "foundation", difficulty: "easy", concept: "用模块路径、版本和 go.sum 管理项目依赖。", focus: "go.mod、语义化版本、依赖图、最小版本选择和校验和", mechanism: "go 命令从 go.mod 读取 module、require、replace、exclude 等指令，按最小版本选择解析依赖图，并用 go.sum 校验下载内容。", scenarios: ["新项目初始化", "依赖升级", "私有模块接入", "可复现构建"], pitfalls: "模块路径变更、replace 残留、间接依赖升级和私有仓库访问", commands: ["go mod init example.com/app", "go mod tidy", "go get example.com/lib@v1.2.3"], prerequisites: ["go-toolchain"], related: ["go-mod-tidy", "package", "import"], order: 4 }),
  /* <!-- KG_REVIEWED: go mod tidy | 2026-05-24 | source_count=7 --> */
  goPoint({ id: "go-mod-tidy", zh: "go mod tidy", en: "go mod tidy", area: "tooling", difficulty: "easy", concept: "同步源码实际使用的依赖到 go.mod 和 go.sum。", focus: "直接依赖、间接依赖、测试依赖和校验和", mechanism: "go mod tidy 扫描当前模块全部包和测试包，根据 import 图补齐缺失依赖，清理冗余依赖，并更新校验文件。", scenarios: ["依赖清理", "CI 校验", "升级后收敛", "提交前检查"], pitfalls: "测试文件依赖、构建标签影响、私有依赖下载和工具依赖管理", commands: ["go mod tidy", "go mod why -m example.com/lib"], prerequisites: ["go-module"], related: ["import", "build-tags", "go-toolchain"], order: 5 }),
  /* <!-- KG_REVIEWED: Package | 2026-05-24 | source_count=7 --> */
  goPoint({ id: "package", zh: "Package", en: "Package", area: "foundation", difficulty: "easy", concept: "用目录级包边界组织代码职责和可见性。", focus: "目录、包名、导入路径、初始化顺序和 API 暴露", mechanism: "同一目录下的 Go 文件属于同一个包，编译时合并为包级作用域；导入路径定位包，首字母大小写决定导出可见性。", scenarios: ["代码分层", "公共库设计", "内部包隔离", "测试包组织"], pitfalls: "循环依赖、包名膨胀、init 副作用和导出 API 过宽", prerequisites: ["go-module"], related: ["import", "visibility", "init-function"], order: 6 }),
  /* <!-- KG_REVIEWED: import | 2026-05-24 | source_count=7 --> */
  goPoint({ id: "import", zh: "import", en: "Import", area: "foundation", difficulty: "easy", concept: "把标准库、第三方库或本地包引入当前文件。", focus: "导入路径、别名导入、空白导入和依赖图", mechanism: "编译器按 import 声明加载被引用包，先编译依赖包，再编译当前包；导入名默认来自被导入包的 package 名。", scenarios: ["复用标准库", "拆分业务包", "注册驱动", "解决包名冲突"], pitfalls: "循环导入、空白导入副作用、别名滥用和路径与包名混淆", prerequisites: ["package"], related: ["visibility", "go-module", "database-sql"], order: 7 }),
  /* <!-- KG_REVIEWED: 可见性 | 2026-05-24 | source_count=7 --> */
  goPoint({ id: "visibility", zh: "可见性", en: "Visibility", area: "foundation", difficulty: "easy", concept: "通过标识符首字母大小写控制包外访问能力。", focus: "导出标识符、包内封装、文档注释和 API 稳定性", mechanism: "首字母大写的标识符可被其他包访问，首字母小写的标识符限制在当前包内；文档工具也围绕导出 API 生成说明。", scenarios: ["公共 API 设计", "封装内部状态", "库文档生成", "接口收敛"], pitfalls: "导出字段过多、命名含糊、注释缺失和兼容性承诺", prerequisites: ["package"], related: ["struct", "interface", "method"], order: 8 }),
  /* <!-- KG_REVIEWED: main 函数 | 2026-05-24 | source_count=7 --> */
  goPoint({ id: "main-function", zh: "main 函数", en: "main Function", area: "foundation", difficulty: "easy", concept: "作为可执行程序入口启动业务逻辑。", focus: "package main、func main、启动配置和退出流程", mechanism: "可执行程序所在包使用 package main，并提供 func main；运行时完成初始化后调用 main，main 返回后进程退出。", scenarios: ["命令行工具", "HTTP 服务启动", "任务程序", "本地示例"], pitfalls: "配置读取时机、资源释放、信号处理和错误退出码", prerequisites: ["package"], related: ["init-function", "defer", "http-server"], order: 9 }),
  /* <!-- KG_REVIEWED: init 函数 | 2026-05-24 | source_count=7 --> */
  goPoint({ id: "init-function", zh: "init 函数", en: "init Function", area: "foundation", difficulty: "medium", concept: "在包初始化阶段执行注册和准备工作。", focus: "包初始化顺序、全局变量、注册副作用和可测试性", mechanism: "运行时按依赖顺序初始化包级变量并执行 init 函数，同一包内多个文件的 init 会在 main 进入前完成。", scenarios: ["驱动注册", "指标注册", "配置默认值", "测试夹具准备"], pitfalls: "隐藏副作用、初始化顺序依赖、启动耗时和测试隔离", prerequisites: ["package"], related: ["main-function", "import", "database-sql"], order: 10 }),
  /* <!-- KG_REVIEWED: 变量 | 2026-05-24 | source_count=7 --> */
  goPoint({ id: "variable", zh: "变量", en: "Variable", area: "syntax", difficulty: "easy", concept: "保存可变状态并通过类型约束读写行为。", focus: "var、短变量声明、零值、作用域和类型推断", mechanism: "变量声明时绑定名称、类型和存储位置；未显式初始化时使用零值，短变量声明在函数内部结合推断创建局部变量。", scenarios: ["局部状态", "配置解析", "循环计算", "返回值接收"], pitfalls: "变量遮蔽、零值语义、指针逃逸和作用域过大", prerequisites: ["go-overview"], related: ["constant", "basic-types", "pointer"], order: 11 }),
  /* <!-- KG_REVIEWED: 常量 | 2026-05-24 | source_count=7 --> */
  goPoint({ id: "constant", zh: "常量", en: "Constant", area: "syntax", difficulty: "easy", concept: "表达编译期稳定值和枚举式业务语义。", focus: "const、无类型常量、iota 和编译期计算", mechanism: "常量在编译期确定，可保持无类型状态直到上下文需要具体类型；iota 在常量组中按行递增，适合表达枚举序列。", scenarios: ["状态枚举", "默认配置", "单位换算", "协议常量"], pitfalls: "iota 插入影响、数值溢出、枚举可读性和跨包暴露", prerequisites: ["variable"], related: ["basic-types", "control-flow"], order: 12 }),
  /* <!-- KG_REVIEWED: 基本类型 | 2026-05-24 | source_count=7 --> */
  goPoint({ id: "basic-types", zh: "基本类型", en: "Basic Types", area: "type-system", difficulty: "easy", concept: "提供布尔、整数、浮点、字符串和字节等基础表达能力。", focus: "零值、显式转换、字符串字节、rune 和可比较性", mechanism: "基本类型由编译器和运行时共同定义大小、运算和转换规则；不同命名类型之间需要显式转换，字符串按字节存储并支持 UTF-8 语义处理。", scenarios: ["业务字段", "协议解析", "数值计算", "文本处理"], pitfalls: "整数溢出、浮点精度、字符串切片、byte 与 rune 混用", prerequisites: ["variable"], related: ["constant", "array-slice", "map"], order: 13 }),
  /* <!-- KG_REVIEWED: 控制流 | 2026-05-24 | source_count=7 --> */
  goPoint({ id: "control-flow", zh: "控制流", en: "Control Flow", area: "syntax", difficulty: "easy", concept: "用 if、for、switch 和 range 描述执行路径。", focus: "条件分支、循环、range 变量、switch 匹配和提前返回", mechanism: "Go 通过少量控制结构表达顺序、分支和循环；for 覆盖传统循环和条件循环，range 按数据结构产生键值或元素。", scenarios: ["业务分支", "集合遍历", "状态机", "输入校验"], pitfalls: "range 变量复用、map 遍历顺序、循环闭包和分支膨胀", prerequisites: ["basic-types"], related: ["error-handling", "function", "map"], order: 14 }),
  /* <!-- KG_REVIEWED: 错误处理 | 2026-05-24 | source_count=7 --> */
  goPoint({ id: "error-handling", zh: "错误处理", en: "Error Handling", area: "syntax", difficulty: "easy", concept: "用显式 error 返回值表达失败路径。", focus: "error 接口、包装、哨兵错误、类型断言和调用栈语义", mechanism: "函数通过返回 error 把失败交给调用方，调用方按错误值、包装链或类型信息判断处理方式；fmt.Errorf 和 errors 包支持上下文追加与匹配。", scenarios: ["输入校验", "I/O 调用", "服务边界", "重试决策"], pitfalls: "错误上下文缺失、吞掉错误、过度包装和日志重复", prerequisites: ["function"], related: ["defer", "panic-recover", "interface"], order: 15 }),
  /* <!-- KG_REVIEWED: defer | 2026-05-24 | source_count=7 --> */
  goPoint({ id: "defer", zh: "defer", en: "defer", area: "syntax", difficulty: "medium", concept: "在函数返回前按后进先出顺序执行清理动作。", focus: "资源释放、参数求值、返回值修改和执行顺序", mechanism: "defer 语句注册延迟调用，参数在注册时求值，函数退出时按栈顺序执行，常用于关闭文件、释放锁和记录耗时。", scenarios: ["文件关闭", "锁释放", "事务回滚", "耗时统计"], pitfalls: "循环内注册过多、参数求值时机、命名返回值修改和锁持有时间", prerequisites: ["function"], related: ["panic-recover", "error-handling", "mutex"], order: 16 }),
  /* <!-- KG_REVIEWED: panic 与 recover | 2026-05-24 | source_count=7 --> */
  goPoint({ id: "panic-recover", zh: "panic 与 recover", en: "panic and recover", area: "syntax", difficulty: "medium", concept: "处理严重异常和局部恢复边界。", focus: "栈展开、defer 执行、恢复位置和服务保护", mechanism: "panic 触发当前 goroutine 栈展开并执行 defer；recover 只能在 defer 调用链中捕获 panic，常用于框架边界保护和错误转换。", scenarios: ["HTTP 中间件保护", "任务隔离", "库边界保护", "测试断言"], pitfalls: "恢复范围过宽、业务错误泛化、goroutine 边界失效和日志缺失", prerequisites: ["defer", "error-handling"], related: ["http-middleware", "goroutine"], order: 17 }),
  /* <!-- KG_REVIEWED: 函数 | 2026-05-24 | source_count=7 --> */
  goPoint({ id: "function", zh: "函数", en: "Function", area: "function", difficulty: "easy", concept: "封装输入、处理和输出，是 Go 代码复用的基本单元。", focus: "参数、返回值、多返回值、可变参数和一等函数", mechanism: "函数声明定义参数和返回值类型，调用时复制参数值；函数值可赋给变量、作为参数传递或作为返回值构造行为。", scenarios: ["业务逻辑封装", "回调", "中间件", "测试替身"], pitfalls: "参数过多、返回值语义含糊、闭包捕获和副作用扩散", prerequisites: ["control-flow"], related: ["closure", "method", "error-handling"], order: 18 }),
  /* <!-- KG_REVIEWED: 闭包 | 2026-05-24 | source_count=7 --> */
  goPoint({ id: "closure", zh: "闭包", en: "Closure", area: "function", difficulty: "medium", concept: "函数值捕获外部变量并延续状态。", focus: "变量捕获、生命周期、循环变量和并发访问", mechanism: "闭包引用外层作用域变量，编译器根据逃逸分析决定变量存储位置；多个闭包可共享同一变量。", scenarios: ["HTTP 中间件", "回调注册", "延迟执行", "状态封装"], pitfalls: "循环变量捕获、共享状态竞争、逃逸成本和可读性下降", prerequisites: ["function", "variable"], related: ["goroutine", "escape-analysis", "http-middleware"], order: 19 }),
  /* <!-- KG_REVIEWED: 指针 | 2026-05-24 | source_count=7 --> */
  goPoint({ id: "pointer", zh: "指针", en: "Pointer", area: "type-system", difficulty: "medium", concept: "保存变量地址，用于共享状态、减少复制和表达可选引用。", focus: "取址、解引用、nil、方法接收者和逃逸分析", mechanism: "指针值指向某个变量地址，函数参数按值传递指针时复制地址，调用方和被调用方可通过同一地址观察或修改同一对象。", scenarios: ["结构体修改", "大对象传递", "可选字段", "方法接收者"], pitfalls: "nil 访问、悬挂共享状态、逃逸成本和并发写入", prerequisites: ["variable", "basic-types"], related: ["struct", "method", "escape-analysis"], order: 20 }),
  /* <!-- KG_REVIEWED: 数组与切片 | 2026-05-24 | source_count=7 --> */
  goPoint({ id: "array-slice", zh: "数组与切片", en: "Array and Slice", area: "type-system", difficulty: "easy", concept: "用固定数组和动态切片管理连续元素。", focus: "len、cap、底层数组、append、切片共享和扩容", mechanism: "数组值包含固定长度元素，切片是指向底层数组的描述符，包含指针、长度和容量；append 在容量充足时复用底层数组，容量增长时分配新数组。", scenarios: ["列表处理", "批量读写", "缓存缓冲区", "序列化"], pitfalls: "底层数组共享、append 后引用变化、越界访问和大切片保留内存", prerequisites: ["basic-types"], related: ["map", "range-loop", "gc"], order: 21 }),
  /* <!-- KG_REVIEWED: range 循环 | 2026-05-24 | source_count=7 --> */
  goPoint({ id: "range-loop", zh: "range 循环", en: "range Loop", area: "syntax", difficulty: "medium", concept: "按集合类型产生遍历变量，简化数组、切片、map、字符串和通道遍历。", focus: "索引和值、变量复用、map 顺序、字符串 rune 和 channel 关闭", mechanism: "range 根据被遍历对象生成迭代值；切片产生索引和值副本，map 产生键值，字符串按 UTF-8 解码 rune，channel 持续接收直到关闭。", scenarios: ["集合遍历", "文本扫描", "管道消费", "批处理"], pitfalls: "值副本修改、循环变量地址、map 遍历顺序和通道退出条件", prerequisites: ["control-flow", "array-slice"], related: ["map", "channel", "closure"], order: 22 }),
  /* <!-- KG_REVIEWED: map | 2026-05-24 | source_count=7 --> */
  goPoint({ id: "map", zh: "map", en: "Map", area: "type-system", difficulty: "easy", concept: "用哈希表按键快速关联值。", focus: "键可比较性、零值读取、comma ok、删除和并发安全", mechanism: "map 根据可比较键计算桶位置并存取值，读取缺失键返回值类型零值，comma ok 可区分缺失和零值。", scenarios: ["索引缓存", "计数统计", "去重", "配置表"], pitfalls: "并发读写、缺失键判断、map 值不可取址和遍历顺序", prerequisites: ["basic-types"], related: ["struct", "sync-map", "range-loop"], order: 23 }),
  /* <!-- KG_REVIEWED: struct | 2026-05-24 | source_count=7 --> */
  goPoint({ id: "struct", zh: "struct", en: "Struct", area: "type-system", difficulty: "easy", concept: "把多个字段组合成业务实体或数据载体。", focus: "字段、标签、嵌入、零值、可比较性和内存布局", mechanism: "struct 按声明字段组合值，字段名和标签参与编码、ORM、验证等反射场景，嵌入字段提供组合式方法提升。", scenarios: ["业务模型", "JSON DTO", "配置结构", "领域实体"], pitfalls: "导出字段、标签拼写、零值含义、复制成本和嵌入冲突", prerequisites: ["basic-types"], related: ["method", "embedding", "json"], order: 24 }),
  /* <!-- KG_REVIEWED: 方法 | 2026-05-24 | source_count=7 --> */
  goPoint({ id: "method", zh: "方法", en: "Method", area: "function", difficulty: "easy", concept: "把函数绑定到具体类型，表达类型行为。", focus: "值接收者、指针接收者、方法集和接口实现", mechanism: "方法在普通函数基础上增加接收者参数，值接收者复制对象，指针接收者共享对象；方法集决定类型是否满足接口。", scenarios: ["实体行为", "接口实现", "链式调用", "封装状态修改"], pitfalls: "接收者选择混乱、值复制、nil 接收者和接口方法集", prerequisites: ["struct", "function"], related: ["interface", "pointer", "receiver"], order: 25 }),
  /* <!-- KG_REVIEWED: 接收者 | 2026-05-24 | source_count=7 --> */
  goPoint({ id: "receiver", zh: "接收者", en: "Receiver", area: "function", difficulty: "medium", concept: "决定方法调用时对象按值复制还是按指针共享。", focus: "值接收者、指针接收者、一致性和接口满足关系", mechanism: "接收者写在方法名前，编译器把方法调用转换成带接收者参数的函数调用；指针接收者可修改原对象并减少复制。", scenarios: ["大结构体方法", "状态修改", "接口适配", "并发对象封装"], pitfalls: "混用接收者、复制锁对象、接口赋值和并发状态暴露", prerequisites: ["method", "pointer"], related: ["interface", "mutex"], order: 26 }),
  /* <!-- KG_REVIEWED: interface | 2026-05-24 | source_count=7 --> */
  goPoint({ id: "interface", zh: "interface", en: "Interface", area: "type-system", difficulty: "medium", concept: "用方法集合描述行为契约，实现隐式多态。", focus: "方法集、隐式实现、小接口、nil 接口和类型断言", mechanism: "类型只要拥有接口要求的方法集即可赋值给接口变量；接口值内部保存动态类型和动态值，类型断言和类型开关可恢复具体类型信息。", scenarios: ["依赖反转", "测试替身", "标准库适配", "插件式扩展"], pitfalls: "大接口、nil 接口陷阱、过早抽象和类型断言分散", prerequisites: ["method"], related: ["type-assertion", "generics", "error-handling"], order: 27 }),
  /* <!-- KG_REVIEWED: 类型断言 | 2026-05-24 | source_count=7 --> */
  goPoint({ id: "type-assertion", zh: "类型断言", en: "Type Assertion", area: "type-system", difficulty: "medium", concept: "从接口值中取回期望的具体类型或接口类型。", focus: "comma ok、type switch、动态类型和错误分支", mechanism: "类型断言检查接口值的动态类型是否满足目标类型，成功时返回目标值；type switch 可按多个候选类型分支处理。", scenarios: ["错误类型识别", "协议解码", "插件返回值处理", "兼容旧接口"], pitfalls: "断言失败 panic、分支膨胀、接口设计过宽和业务类型泄漏", prerequisites: ["interface"], related: ["error-handling", "generics"], order: 28 }),
  /* <!-- KG_REVIEWED: 泛型 | 2026-05-24 | source_count=7 --> */
  goPoint({ id: "generics", zh: "泛型", en: "Generics", area: "type-system", difficulty: "medium", concept: "用类型参数复用算法和容器代码。", focus: "类型参数、约束、类型集合和实例化", mechanism: "函数或类型声明可引入类型参数，约束描述可接受的类型集合，编译器在调用处检查类型实参并生成可执行代码。", scenarios: ["通用集合", "算法复用", "类型安全工具函数", "库代码收敛"], pitfalls: "约束设计过宽、泛型滥用、可读性下降和接口职责混合", prerequisites: ["interface", "function"], related: ["type-constraint", "array-slice", "map"], order: 29 }),
  /* <!-- KG_REVIEWED: 类型约束 | 2026-05-24 | source_count=7 --> */
  goPoint({ id: "type-constraint", zh: "类型约束", en: "Type Constraint", area: "type-system", difficulty: "medium", concept: "限定泛型类型参数可用的操作和类型集合。", focus: "interface 约束、近似类型、联合类型和可比较约束", mechanism: "约束本质上是接口，既可列出方法，也可列出类型集合；编译器依据约束判断泛型函数内部允许的运算。", scenarios: ["数字工具函数", "可比较键", "容器库", "领域泛型抽象"], pitfalls: "约束命名含糊、类型集合泄漏、方法约束混杂和版本兼容", prerequisites: ["generics"], related: ["interface", "basic-types"], order: 30 }),
  /* <!-- KG_REVIEWED: 嵌入 | 2026-05-24 | source_count=7 --> */
  goPoint({ id: "embedding", zh: "嵌入", en: "Embedding", area: "type-system", difficulty: "medium", concept: "通过匿名字段组合结构体或接口能力。", focus: "字段提升、方法提升、组合复用和命名冲突", mechanism: "struct 中嵌入匿名字段后，外层类型可直接访问被提升字段和方法；interface 嵌入可组合多个方法集合。", scenarios: ["组合复用", "接口聚合", "基础能力扩展", "测试替身"], pitfalls: "方法冲突、API 暴露过多、隐式依赖和初始化含糊", prerequisites: ["struct", "interface"], related: ["method", "visibility"], order: 31 }),
  /* <!-- KG_REVIEWED: goroutine | 2026-05-24 | source_count=7 --> */
  goPoint({ id: "goroutine", zh: "goroutine", en: "goroutine", area: "concurrency", difficulty: "easy", concept: "用轻量执行单元并发运行函数。", focus: "go 语句、协作调度、栈增长、生命周期和泄漏治理", mechanism: "go 语句创建 goroutine，运行时把大量 goroutine 调度到有限 OS 线程上执行，并按需要增长栈空间。", scenarios: ["并发请求", "后台任务", "流水线处理", "异步 I/O"], pitfalls: "生命周期失控、阻塞泄漏、panic 边界和共享状态竞争", prerequisites: ["function"], related: ["channel", "scheduler", "context"], order: 32 }),
  /* <!-- KG_REVIEWED: channel | 2026-05-24 | source_count=7 --> */
  goPoint({ id: "channel", zh: "channel", en: "Channel", area: "concurrency", difficulty: "medium", concept: "在 goroutine 之间传递值并同步执行进度。", focus: "无缓冲、缓冲、关闭、方向和阻塞语义", mechanism: "发送和接收在 channel 上配对完成，无缓冲通道同步交接，缓冲通道在容量内暂存值，关闭通道用于广播发送结束。", scenarios: ["任务队列", "结果汇聚", "事件通知", "流水线"], pitfalls: "关闭方职责、阻塞发送、重复关闭、缓冲容量和泄漏", prerequisites: ["goroutine"], related: ["select", "pipeline", "context"], order: 33 }),
  /* <!-- KG_REVIEWED: select | 2026-05-24 | source_count=7 --> */
  goPoint({ id: "select", zh: "select", en: "select", area: "concurrency", difficulty: "medium", concept: "在多个 channel 操作之间选择可执行分支。", focus: "多路复用、超时、取消、default 和公平性", mechanism: "select 同时监听多个发送或接收 case，运行时从就绪 case 中选择执行；default 分支可实现轮询式非阻塞尝试。", scenarios: ["超时控制", "取消监听", "多路事件", "心跳机制"], pitfalls: "default 忙轮询、遗漏取消分支、case 饥饿和 nil channel 控制", prerequisites: ["channel"], related: ["context", "timer-ticker", "pipeline"], order: 34 }),
  /* <!-- KG_REVIEWED: context | 2026-05-24 | source_count=7 --> */
  goPoint({ id: "context", zh: "context", en: "Context", area: "concurrency", difficulty: "medium", concept: "在请求链路中传递取消信号、超时和少量范围值。", focus: "取消树、deadline、超时、请求范围值和 API 约定", mechanism: "context 通过父子关系传播 Done 信号，WithCancel、WithTimeout 和 WithDeadline 创建可取消上下文，调用方负责在链路中传递。", scenarios: ["HTTP 请求", "数据库调用", "RPC 调用", "后台任务取消"], pitfalls: "忘记 cancel、存放业务大对象、超时层级冲突和 goroutine 泄漏", prerequisites: ["goroutine", "select"], related: ["http-server", "database-sql", "pipeline"], order: 35 }),
  /* <!-- KG_REVIEWED: sync.Mutex | 2026-05-24 | source_count=7 --> */
  goPoint({ id: "mutex", zh: "sync.Mutex", en: "sync.Mutex", area: "concurrency", difficulty: "medium", concept: "保护共享状态的互斥访问。", focus: "Lock、Unlock、临界区、defer 解锁和锁复制", mechanism: "Mutex 在同一时刻允许一个 goroutine 进入临界区，其他 goroutine 等待解锁；配合 defer 可保证函数退出时释放锁。", scenarios: ["内存缓存", "计数器保护", "连接状态", "对象内部状态"], pitfalls: "复制锁、锁粒度过大、忘记解锁和死锁顺序", prerequisites: ["goroutine"], related: ["defer", "race-detector", "atomic"], order: 36 }),
  /* <!-- KG_REVIEWED: sync.WaitGroup | 2026-05-24 | source_count=7 --> */
  goPoint({ id: "waitgroup", zh: "sync.WaitGroup", en: "sync.WaitGroup", area: "concurrency", difficulty: "easy", concept: "等待一组 goroutine 完成。", focus: "Add、Done、Wait、计数器和启动顺序", mechanism: "WaitGroup 内部维护计数，Add 增加待完成任务，Done 递减计数，Wait 阻塞到计数归零。", scenarios: ["并发任务汇聚", "批量请求", "并行处理", "测试同步"], pitfalls: "Add 时机、重复 Done、任务 panic 和错误收集缺失", prerequisites: ["goroutine"], related: ["pipeline", "context", "errgroup"], order: 37 }),
  /* <!-- KG_REVIEWED: sync.Once | 2026-05-24 | source_count=7 --> */
  goPoint({ id: "sync-once", zh: "sync.Once", en: "sync.Once", area: "concurrency", difficulty: "medium", concept: "保证初始化逻辑只执行一次。", focus: "懒加载、并发初始化、panic 语义和生命周期", mechanism: "Once 通过内部状态和锁保证 Do 传入的函数在并发调用下只进入一次，后续调用直接返回。", scenarios: ["单例初始化", "配置加载", "连接池准备", "指标注册"], pitfalls: "初始化错误缓存、panic 后状态、测试复用和全局状态污染", prerequisites: ["goroutine", "mutex"], related: ["init-function", "sync-map"], order: 38 }),
  /* <!-- KG_REVIEWED: sync.Map | 2026-05-24 | source_count=7 --> */
  goPoint({ id: "sync-map", zh: "sync.Map", en: "sync.Map", area: "concurrency", difficulty: "medium", concept: "提供并发安全的特定场景 map。", focus: "读多写少、Load、Store、Range 和类型安全", mechanism: "sync.Map 为并发访问做内部同步，适合读多写少、键集合稳定或多个 goroutine 访问互不相交键集合的场景。", scenarios: ["只增缓存", "插件注册表", "连接映射", "跨 goroutine 状态表"], pitfalls: "类型断言分散、写多场景退化、Range 一致性理解和普通 map 替换成本", prerequisites: ["map", "mutex"], related: ["atomic", "race-detector"], order: 39 }),
  /* <!-- KG_REVIEWED: atomic | 2026-05-24 | source_count=7 --> */
  goPoint({ id: "atomic", zh: "atomic", en: "Atomic", area: "concurrency", difficulty: "hard", concept: "用原子操作处理低层共享数值或指针状态。", focus: "Load、Store、CompareAndSwap、内存顺序和可读性", mechanism: "atomic 操作由 CPU 原子指令和运行时封装提供单变量级别的同步语义，常用于计数器、状态位和无锁数据结构片段。", scenarios: ["高频计数", "状态标记", "性能敏感路径", "底层库"], pitfalls: "多变量不变式、可读性下降、内存模型理解和过早优化", prerequisites: ["mutex", "memory-model"], related: ["race-detector", "scheduler"], order: 40 }),
  /* <!-- KG_REVIEWED: race detector | 2026-05-24 | source_count=7 --> */
  goPoint({ id: "race-detector", zh: "race detector", en: "Race Detector", area: "tooling", difficulty: "medium", concept: "在运行测试或程序时发现数据竞争。", focus: "-race、共享变量、测试覆盖和运行开销", mechanism: "race detector 在构建时插桩，运行过程中记录内存访问和同步事件，发现多个 goroutine 对同一地址存在竞争访问时报告栈信息。", scenarios: ["并发测试", "CI 检查", "压测前验证", "线上问题复现"], pitfalls: "覆盖不足、运行开销、竞争报告解读和测试数据规模", commands: ["go test -race ./...", "go run -race ."], prerequisites: ["goroutine", "mutex"], related: ["atomic", "go-test", "memory-model"], order: 41 }),
  /* <!-- KG_REVIEWED: pipeline | 2026-05-24 | source_count=7 --> */
  goPoint({ id: "pipeline", zh: "pipeline", en: "Pipeline", area: "concurrency", difficulty: "medium", concept: "用多个阶段和 channel 组织流式并发处理。", focus: "阶段、fan-out、fan-in、关闭、取消和背压", mechanism: "每个阶段由 goroutine 从输入 channel 接收数据，处理后发送到输出 channel；下游通过关闭、取消或消费速度影响上游生命周期。", scenarios: ["日志处理", "批量转码", "数据清洗", "并发爬取"], pitfalls: "下游提前退出、发送阻塞、关闭顺序、错误传播和 goroutine 泄漏", prerequisites: ["channel", "select", "waitgroup"], related: ["context", "errgroup", "timer-ticker"], order: 42 }),
  /* <!-- KG_REVIEWED: timer 与 ticker | 2026-05-24 | source_count=7 --> */
  goPoint({ id: "timer-ticker", zh: "timer 与 ticker", en: "Timer and Ticker", area: "concurrency", difficulty: "medium", concept: "用时间事件驱动超时、延迟和周期任务。", focus: "time.Timer、time.Ticker、Stop、Reset 和资源释放", mechanism: "Timer 在指定时间后发送一次事件，Ticker 周期性发送事件；调用方需要按生命周期停止计时器或处理通道事件。", scenarios: ["请求超时", "周期刷新", "心跳检测", "重试退避"], pitfalls: "Ticker 泄漏、Reset 竞态、时间漂移和阻塞消费", prerequisites: ["select"], related: ["context", "pipeline"], order: 43 }),
  /* <!-- KG_REVIEWED: errgroup | 2026-05-24 | source_count=7 --> */
  goPoint({ id: "errgroup", zh: "errgroup", en: "errgroup", area: "concurrency", difficulty: "medium", concept: "把并发任务、错误返回和上下文取消组合起来。", focus: "错误收集、上下文取消、任务组和并发边界", mechanism: "errgroup 为一组 goroutine 提供 Go 和 Wait，任一任务返回错误后可触发关联 context 取消，最终由 Wait 返回首个错误。", scenarios: ["并发 RPC", "批量处理", "多阶段服务调用", "任务编排"], pitfalls: "错误覆盖、取消传递、并发数限制和共享变量竞争", prerequisites: ["goroutine", "context", "waitgroup"], related: ["pipeline", "error-handling"], order: 44 }),
  /* <!-- KG_REVIEWED: Go runtime | 2026-05-24 | source_count=7 --> */
  goPoint({ id: "go-runtime", zh: "Go runtime", en: "Go Runtime", area: "runtime", difficulty: "medium", concept: "提供调度、GC、网络轮询、栈管理和反射等基础执行能力。", focus: "GMP 调度、栈增长、GC、netpoll 和运行时诊断", mechanism: "编译后的程序携带 runtime，运行时在进程内管理 goroutine、线程、内存分配、垃圾回收、定时器和网络事件。", scenarios: ["性能分析", "并发调度理解", "内存问题定位", "服务稳定性治理"], pitfalls: "只看业务代码、忽略阻塞点、GC 指标误读和调度延迟", prerequisites: ["go-overview"], related: ["scheduler", "gc", "pprof"], order: 45 }),
  /* <!-- KG_REVIEWED: 调度器 | 2026-05-24 | source_count=7 --> */
  goPoint({ id: "scheduler", zh: "调度器", en: "Scheduler", area: "runtime", difficulty: "hard", concept: "把 goroutine 映射到系统线程执行。", focus: "G、M、P、抢占、阻塞和 GOMAXPROCS", mechanism: "调度器维护 goroutine 队列，P 提供执行资源，M 表示系统线程；运行时在阻塞、系统调用、抢占和网络事件之间切换执行。", scenarios: ["高并发服务", "CPU 占用分析", "阻塞定位", "吞吐调优"], pitfalls: "GOMAXPROCS 理解、长时间 CPU 循环、系统调用阻塞和调度延迟指标", commands: ["GODEBUG=schedtrace=1000 go run ."], prerequisites: ["goroutine", "go-runtime"], related: ["gc", "pprof", "atomic"], order: 46 }),
  /* <!-- KG_REVIEWED: GC | 2026-05-24 | source_count=7 --> */
  goPoint({ id: "gc", zh: "GC", en: "Garbage Collection", area: "runtime", difficulty: "hard", concept: "自动回收不可达对象并控制堆内存增长。", focus: "并发标记清扫、GOGC、堆大小、暂停时间和分配速率", mechanism: "Go GC 根据堆增长目标触发并发标记，识别仍可达对象，清理可回收内存，并用写屏障维护并发阶段正确性。", scenarios: ["内存泄漏排查", "延迟优化", "大对象分配治理", "容量规划"], pitfalls: "把 GC 暂停当作唯一指标、忽略分配速率、保留引用和池化过度", commands: ["GODEBUG=gctrace=1 go test ./...", "go test -bench=. -benchmem"], prerequisites: ["go-runtime"], related: ["escape-analysis", "pprof", "array-slice"], order: 47 }),
  /* <!-- KG_REVIEWED: 逃逸分析 | 2026-05-24 | source_count=7 --> */
  goPoint({ id: "escape-analysis", zh: "逃逸分析", en: "Escape Analysis", area: "runtime", difficulty: "hard", concept: "判断变量放在栈上还是堆上，影响分配和 GC 压力。", focus: "指针返回、接口装箱、闭包捕获和编译器报告", mechanism: "编译器分析变量生命周期和引用路径，发现变量可能在当前栈帧外继续存活时，把它分配到堆上。", scenarios: ["性能优化", "分配次数分析", "热点函数调优", "大对象传递"], pitfalls: "盲目追求零逃逸、接口转换影响、闭包捕获和可读性牺牲", commands: ["go build -gcflags=-m ./..."], prerequisites: ["pointer", "closure"], related: ["gc", "benchmark", "pprof"], order: 48 }),
  /* <!-- KG_REVIEWED: Go 内存模型 | 2026-05-24 | source_count=7 --> */
  goPoint({ id: "memory-model", zh: "Go 内存模型", en: "Go Memory Model", area: "runtime", difficulty: "hard", concept: "定义 goroutine 之间读写可见性和同步关系。", focus: "happens-before、channel、锁、atomic 和数据竞争", mechanism: "内存模型描述同步操作建立的顺序关系，程序通过锁、channel、atomic 等同步手段让一个 goroutine 的写入对另一个 goroutine 可见。", scenarios: ["并发库设计", "竞态排查", "底层优化", "代码审查"], pitfalls: "依赖调度时序、普通变量通信、双重检查和 atomic 混用", prerequisites: ["goroutine", "mutex", "channel"], related: ["atomic", "race-detector"], order: 49 }),
  /* <!-- KG_REVIEWED: go test | 2026-05-24 | source_count=7 --> */
  goPoint({ id: "go-test", zh: "go test", en: "go test", area: "testing", difficulty: "easy", concept: "运行单元测试、示例、基准测试和覆盖率统计。", focus: "测试文件、testing 包、包级运行、缓存和覆盖率", mechanism: "go test 编译待测包和测试文件，执行 Test、Benchmark、Example 等入口，并根据参数输出覆盖率、竞态或性能结果。", scenarios: ["单元测试", "回归测试", "CI 验证", "覆盖率统计"], pitfalls: "测试缓存、并行测试隔离、临时目录清理和外部依赖波动", commands: ["go test ./...", "go test -cover ./..."], prerequisites: ["go-toolchain"], related: ["table-driven-test", "benchmark", "race-detector"], order: 50 }),
  /* <!-- KG_REVIEWED: 表驱动测试 | 2026-05-24 | source_count=7 --> */
  goPoint({ id: "table-driven-test", zh: "表驱动测试", en: "Table-driven Test", area: "testing", difficulty: "easy", concept: "用测试用例表覆盖多组输入、输出和边界条件。", focus: "用例结构、t.Run、子测试、边界覆盖和可读性", mechanism: "把输入、期望结果和说明放入切片表中，循环调用 t.Run 执行每个用例，统一断言主流程和边界行为。", scenarios: ["纯函数测试", "解析器测试", "错误分支覆盖", "兼容性测试"], pitfalls: "用例命名含糊、共享可变状态、并行子测试和断言信息缺失", prerequisites: ["go-test", "struct"], related: ["benchmark", "go-vet"], order: 51 }),
  /* <!-- KG_REVIEWED: benchmark | 2026-05-24 | source_count=7 --> */
  goPoint({ id: "benchmark", zh: "benchmark", en: "Benchmark", area: "testing", difficulty: "medium", concept: "用基准测试评估代码吞吐、延迟和分配。", focus: "Benchmark 函数、b.N、分配统计和稳定输入", mechanism: "go test 按 b.N 反复执行基准函数，自动调整迭代次数，并可输出 ns/op、B/op 和 allocs/op 等指标。", scenarios: ["热点函数优化", "算法对比", "分配治理", "回归检测"], pitfalls: "输入规模失真、编译器优化影响、环境抖动和只看单次结果", commands: ["go test -bench=. -benchmem ./..."], prerequisites: ["go-test"], related: ["pprof", "escape-analysis", "gc"], order: 52 }),
  /* <!-- KG_REVIEWED: pprof | 2026-05-24 | source_count=7 --> */
  goPoint({ id: "pprof", zh: "pprof", en: "pprof", area: "performance", difficulty: "hard", concept: "采集和分析 CPU、内存、阻塞和互斥锁等性能剖面。", focus: "CPU profile、heap profile、block profile、mutex profile 和火焰图", mechanism: "pprof 从运行时或测试中采集采样数据，把函数调用栈聚合成报告，帮助定位 CPU 热点、分配来源和阻塞位置。", scenarios: ["CPU 飙高排查", "内存增长分析", "锁竞争定位", "性能回归"], pitfalls: "采样窗口过短、压测流量失真、profile 类型混淆和优化前后缺少对照", commands: ["go test -cpuprofile cpu.out -bench=.", "go tool pprof cpu.out"], prerequisites: ["benchmark", "go-runtime"], related: ["gc", "scheduler", "http-server"], order: 53 }),
  /* <!-- KG_REVIEWED: go vet | 2026-05-24 | source_count=7 --> */
  goPoint({ id: "go-vet", zh: "go vet", en: "go vet", area: "tooling", difficulty: "easy", concept: "用静态检查发现可疑代码模式。", focus: "格式化字符串、不可达代码、复制锁、结构体标签和常见误用", mechanism: "go vet 基于语法和类型信息执行一组官方分析器，报告编译器可接受但高风险的代码。", scenarios: ["CI 质量检查", "提交前扫描", "重构验证", "库发布前检查"], pitfalls: "只依赖编译通过、忽略检查报告、生成代码噪音和自定义分析缺口", commands: ["go vet ./..."], prerequisites: ["go-toolchain"], related: ["gofmt", "go-test", "staticcheck"], order: 54 }),
  /* <!-- KG_REVIEWED: build tags | 2026-05-24 | source_count=7 --> */
  goPoint({ id: "build-tags", zh: "build tags", en: "Build Tags", area: "tooling", difficulty: "medium", concept: "按平台、环境或自定义条件选择参与构建的文件。", focus: "go:build、文件后缀、平台条件和测试变体", mechanism: "构建系统读取文件顶部的 go:build 条件和文件名后缀，选择符合当前 GOOS、GOARCH 和 tags 的源码参与编译。", scenarios: ["平台适配", "企业版功能", "集成测试开关", "实验特性"], pitfalls: "条件表达式复杂、CI 标签遗漏、文件组合失衡和测试覆盖缺口", commands: ["go test -tags=integration ./...", "GOOS=linux GOARCH=amd64 go build"], prerequisites: ["go-toolchain"], related: ["go-module", "go-test"], order: 55 }),
  /* <!-- KG_REVIEWED: HTTP Server | 2026-05-24 | source_count=7 --> */
  goPoint({ id: "http-server", zh: "HTTP Server", en: "HTTP Server", area: "web", difficulty: "medium", concept: "用 net/http 暴露 HTTP 服务入口。", focus: "Handler、ServeMux、Server、超时、优雅关闭和中间件", mechanism: "net/http 接收连接后解析请求，把请求交给匹配的 Handler；Server 配置读写超时、TLS、连接状态和关闭流程。", scenarios: ["REST API", "内部服务", "健康检查", "Webhook"], pitfalls: "超时缺失、请求体关闭、上下文取消、优雅退出和 panic 保护", commands: ["go test ./...", "curl localhost:8080/health"], prerequisites: ["main-function", "context"], related: ["http-middleware", "json", "http-client"], order: 56 }),
  /* <!-- KG_REVIEWED: HTTP Middleware | 2026-05-24 | source_count=7 --> */
  goPoint({ id: "http-middleware", zh: "HTTP Middleware", en: "HTTP Middleware", area: "web", difficulty: "medium", concept: "在 Handler 链路中统一处理横切逻辑。", focus: "Handler 包装、日志、鉴权、恢复、超时和链路追踪", mechanism: "中间件接收并返回 http.Handler，通过闭包包裹 next，在请求进入业务处理前后执行统一逻辑。", scenarios: ["认证授权", "访问日志", "panic 恢复", "限流超时"], pitfalls: "顺序依赖、ResponseWriter 包装、上下文值滥用和重复写响应", prerequisites: ["http-server", "closure"], related: ["panic-recover", "context", "error-handling"], order: 57 }),
  /* <!-- KG_REVIEWED: HTTP Client | 2026-05-24 | source_count=7 --> */
  goPoint({ id: "http-client", zh: "HTTP Client", en: "HTTP Client", area: "web", difficulty: "medium", concept: "用 net/http 发起外部 HTTP 调用并管理连接复用。", focus: "Client、Transport、超时、连接池、请求上下文和响应体", mechanism: "http.Client 通过 Transport 复用连接并发送请求，调用方通过 context 控制取消，通过关闭响应体归还连接资源。", scenarios: ["调用下游服务", "Webhook 推送", "外部 API 集成", "健康探测"], pitfalls: "超时配置缺失、响应体未关闭、连接池耗尽和重试放大", prerequisites: ["context", "error-handling"], related: ["http-server", "json"], order: 58 }),
  /* <!-- KG_REVIEWED: JSON | 2026-05-24 | source_count=7 --> */
  goPoint({ id: "json", zh: "JSON", en: "JSON", area: "web", difficulty: "easy", concept: "用 encoding/json 在结构体和 JSON 文本之间转换。", focus: "Marshal、Unmarshal、结构体标签、零值和流式解码", mechanism: "encoding/json 通过反射读取导出字段和 json 标签，把 Go 值编码为 JSON，或把 JSON 文本解码到结构体、map 或接口值中。", scenarios: ["REST API", "配置文件", "消息体", "日志字段"], pitfalls: "未导出字段、标签拼写、数字精度、空值语义和未知字段处理", prerequisites: ["struct", "interface"], related: ["http-server", "http-client"], order: 59 }),
  /* <!-- KG_REVIEWED: database/sql | 2026-05-24 | source_count=7 --> */
  goPoint({ id: "database-sql", zh: "database/sql", en: "database/sql", area: "web", difficulty: "medium", concept: "用统一接口访问关系型数据库并管理连接池。", focus: "DB、Tx、Rows、Context、连接池和驱动注册", mechanism: "database/sql 通过驱动提供具体数据库协议实现，DB 管理连接池，Query、Exec、Tx 和 Context 共同控制语句执行、事务和取消。", scenarios: ["业务读写", "事务处理", "连接池调优", "慢查询定位"], pitfalls: "Rows 关闭、事务边界、连接泄漏、上下文超时和 NULL 扫描", prerequisites: ["context", "error-handling", "init-function"], related: ["http-server", "sql-transaction"], order: 60 }),
  /* <!-- KG_REVIEWED: SQL 事务 | 2026-05-24 | source_count=7 --> */
  goPoint({ id: "sql-transaction", zh: "SQL 事务", en: "SQL Transaction", area: "web", difficulty: "medium", concept: "在 Go 代码中用 Tx 明确数据库原子操作边界。", focus: "BeginTx、Commit、Rollback、隔离级别和上下文取消", mechanism: "BeginTx 从连接池中绑定连接并创建事务，业务在 Tx 上执行语句，成功后 Commit，失败路径通过 Rollback 释放事务状态。", scenarios: ["订单创建", "余额变更", "批量写入", "一致性保护"], pitfalls: "混用 DB 与 Tx、Rollback 缺失、长事务、上下文取消和连接占用", prerequisites: ["database-sql", "defer"], related: ["error-handling", "context"], order: 61 }),
  /* <!-- KG_REVIEWED: 配置与环境变量 | 2026-05-24 | source_count=7 --> */
  goPoint({ id: "config-env", zh: "配置与环境变量", en: "Configuration and Environment", area: "tooling", difficulty: "easy", concept: "用环境变量、参数和配置文件把运行差异从代码中分离。", focus: "os.Getenv、flag、配置结构体、默认值和启动校验", mechanism: "程序启动时读取环境变量、命令行参数或配置文件，解析到结构体并做校验，再把配置注入依赖组件。", scenarios: ["服务启动", "多环境部署", "本地调试", "CI 任务"], pitfalls: "默认值含糊、敏感信息泄露、启动后动态变更和配置校验缺失", prerequisites: ["main-function", "struct"], related: ["http-server", "go-test"], order: 62 }),
  /* <!-- KG_REVIEWED: 日志 | 2026-05-24 | source_count=7 --> */
  goPoint({ id: "logging", zh: "日志", en: "Logging", area: "tooling", difficulty: "easy", concept: "记录请求、错误、状态和诊断上下文。", focus: "结构化日志、上下文关联、级别、字段和采样", mechanism: "日志库把时间、级别、消息和字段写入标准输出或文件，服务通过请求 ID、trace ID 和业务字段关联链路。", scenarios: ["接口排查", "任务审计", "错误定位", "性能分析"], pitfalls: "字段缺失、敏感信息、重复日志、阻塞输出和级别混乱", prerequisites: ["error-handling", "context"], related: ["http-middleware", "pprof"], order: 63 }),
  /* <!-- KG_REVIEWED: 静态检查 | 2026-05-24 | source_count=7 --> */
  goPoint({ id: "staticcheck", zh: "静态检查", en: "Static Analysis", area: "tooling", difficulty: "medium", concept: "用额外分析器发现可维护性和正确性风险。", focus: "vet、staticcheck、ineffassign、unused 和 CI 集成", mechanism: "静态检查工具基于语法树、类型信息和控制流分析代码模式，报告冗余、误用、潜在 bug 和风格问题。", scenarios: ["质量门禁", "重构验证", "开源库维护", "团队规范"], pitfalls: "规则噪音、版本漂移、误报处理和本地 CI 配置差异", commands: ["go vet ./...", "staticcheck ./..."], prerequisites: ["go-vet"], related: ["gofmt", "go-test"], order: 64 }),
] satisfies GraphKnowledgePoint[];
