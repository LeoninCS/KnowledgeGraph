import { networkKnowledgeExplanations } from "../../data/knowledge-points/network";
import type { GraphKnowledgePoint } from "../../data/knowledge-points/types";
import type { CategoryId } from "../../data/types";
import type { Copy } from "../../app/copy";
import type { Locale } from "../../app/ui-types";
import {
  getAreaKey,
  getAreaLabel,
  getCategoryLabel,
  getDifficultyLabel,
  getKnowledgeLabel,
  resolvePointSources,
} from "./knowledge-ui";

type ExplanationItem = {
  title: string;
  body: string;
};

const instructorExplanationTitles = [
  "概念定位",
  "标准答法",
  "核心机制",
  "特殊情况",
  "追问方向",
  "工程实践",
  "掌握标准",
  "常见误区",
  "学习路径",
] as const;

const categoryExplanationFrames: Record<
  CategoryId,
  {
    scope: string;
    mechanism: string;
    interview: string;
    specialCases: string;
    answerPattern: string;
    practice: string;
  }
> = {
  go: {
    scope: "关注源码如何经过包、模块、类型系统、工具链和运行时变成可运行服务。",
    mechanism:
      "分析时从 go.mod 和 package 边界开始，看类型、函数、错误、并发、运行时、测试和性能工具如何协作。",
    interview:
      "面试回答适合把语法语义、并发模型、运行时机制、工程工具和线上排查串成一条服务开发链路。",
    specialCases:
      "特殊情况要覆盖 nil、变量遮蔽、切片共享、map 并发读写、goroutine 泄漏、channel 关闭、context 取消、GC 压力、竞态和依赖版本。",
    answerPattern:
      "标准答法按“语言特性 -> 使用场景 -> 底层机制 -> 边界问题 -> 工具验证 -> 工程实践”展开。",
    practice:
      "工程排查常用 go test、go test -race、go vet、go test -bench、go tool pprof、go build -gcflags=-m 和运行时 GODEBUG 指标。",
  },
  network: {
    scope: "关注数据从应用产生到链路传输的完整路径，核心线索是分层、封装、寻址、连接状态和错误恢复。",
    mechanism:
      "分析时按应用层数据、传输层端口和连接、网络层 IP 与路由、数据链路层 MAC 与帧、物理链路信号的顺序展开。",
    interview:
      "面试回答适合先画出通信链路，再说明协议字段、状态变化、异常分支和常用排查命令。",
    specialCases:
      "特殊情况要覆盖丢包、乱序、重传、超时、半连接队列、MTU、DNS 缓存、证书过期、安全组、防火墙、NAT、代理和负载均衡。",
    answerPattern:
      "标准答法按“它解决什么问题 -> 位于哪一层 -> 关键字段或状态 -> 正常流程 -> 异常分支 -> 排查命令”展开。",
    practice:
      "工程排查常用 ping、traceroute、dig、curl、ss、tcpdump、网关路由表和服务日志，把现象定位到链路、路由、传输连接或应用协议。",
  },
  os: {
    scope: "关注 CPU、内存、文件、设备和网络资源如何被内核抽象并分配给应用程序。",
    mechanism:
      "分析时从用户态请求进入内核开始，看系统调用、调度队列、内核数据结构、资源状态和返回结果如何变化。",
    interview:
      "面试回答适合把概念、状态流转、底层结构、性能代价和 Linux 可观察现象串成一条线。",
    specialCases:
      "特殊情况要覆盖竞争条件、阻塞等待、死锁、饥饿、上下文切换过高、内存泄漏、缺页、文件描述符耗尽、I/O 阻塞和权限边界。",
    answerPattern:
      "标准答法按“内核抽象 -> 数据结构 -> 状态流转 -> 资源代价 -> Linux 命令观测 -> 线上处理”展开。",
    practice:
      "工程排查常用 top、ps、strace、lsof、ss、vmstat、iostat、dmesg、perf 和日志，重点观察 CPU、内存、I/O、上下文切换和阻塞状态。",
  },
  algorithm: {
    scope: "关注数据如何组织、操作如何设计、复杂度如何控制，以及边界条件如何保证正确性。",
    mechanism:
      "分析时先确定输入规模和数据关系，再选择数组、链表、栈、队列、哈希、树、堆、图或动态规划等模型。",
    interview:
      "面试回答适合按问题建模、核心不变量、状态转移或遍历顺序、复杂度、边界用例来展开。",
    specialCases:
      "特殊情况要覆盖空输入、单元素、重复值、负数、溢出、环、连通性、排序稳定性、递归栈深度、剪枝条件和极端规模。",
    answerPattern:
      "标准答法按“题型识别 -> 数据结构选择 -> 不变量或状态定义 -> 转移/遍历顺序 -> 复杂度 -> 边界用例”展开。",
    practice:
      "刷题时要写出模板、手推样例、检查空输入和极端规模，再对比递归、迭代、哈希优化、剪枝和空间压缩方案。",
  },
  mysql: {
    scope: "关注 SQL 进入 MySQL 后如何经过连接器、解析器、优化器、执行器和 InnoDB 完成读写。",
    mechanism:
      "分析时顺着索引结构、Buffer Pool、事务视图、锁、redo log、undo log、binlog 和主从复制观察数据一致性与性能。",
    interview:
      "面试回答适合把执行计划、索引命中、事务隔离、锁冲突、日志恢复和慢查询治理一起说明。",
    specialCases:
      "特殊情况要覆盖索引失效、回表、覆盖索引、间隙锁、幻读、死锁、长事务、主从延迟、崩溃恢复、慢查询和大表变更。",
    answerPattern:
      "标准答法按“SQL 如何执行 -> 索引如何命中 -> 锁和事务如何保证正确性 -> 日志如何恢复 -> 慢查询如何优化”展开。",
    practice:
      "工程排查常用 EXPLAIN、慢查询日志、SHOW ENGINE INNODB STATUS、锁等待、主从延迟、表结构和索引基数来定位问题。",
  },
  redis: {
    scope: "关注内存数据结构、命令复杂度、缓存治理、持久化、高可用和集群路由。",
    mechanism:
      "分析时从命令访问数据结构开始，继续看过期、淘汰、持久化、复制、哨兵或集群槽位如何影响结果。",
    interview:
      "面试回答适合覆盖使用场景、底层编码、时间复杂度、缓存一致性、失效风险和高可用方案。",
    specialCases:
      "特殊情况要覆盖大 Key、热 Key、缓存穿透、击穿、雪崩、过期风暴、淘汰误伤、持久化阻塞、复制延迟、脑裂和锁过期。",
    answerPattern:
      "标准答法按“使用场景 -> 数据结构或命令 -> 时间复杂度 -> 失效风险 -> 高可用方案 -> 线上治理”展开。",
    practice:
      "工程排查常用 INFO、SLOWLOG、MEMORY、MONITOR、big key 与 hot key 分析、命中率、复制延迟和集群槽位状态。",
  },
  rabbitmq: {
    scope: "关注消息从生产者进入交换机、路由到队列、被消费者确认的全过程。",
    mechanism:
      "分析时按生产者确认、交换机类型、绑定关系、路由键、队列持久化、消费者 ack、死信与重试链路展开。",
    interview:
      "面试回答适合说明可靠投递、重复消费、顺序消费、消息积压、削峰填谷和幂等处理。",
    specialCases:
      "特殊情况要覆盖生产者发送失败、路由失败、消息丢失、重复投递、消费超时、队列堆积、死信循环、重试风暴和顺序破坏。",
    answerPattern:
      "标准答法按“消息链路 -> 可靠性保证 -> 消费语义 -> 异常重试 -> 幂等设计 -> 积压治理”展开。",
    practice:
      "工程排查重点看连接数、通道数、队列堆积、消费速率、ack 状态、重试次数、死信队列和业务幂等日志。",
  },
  backend: {
    scope: "关注一次请求在网关、认证、业务、缓存、数据库、消息队列和可观测系统中的完整链路。",
    mechanism:
      "分析时看流量入口、身份校验、限流熔断、事务边界、异步化、缓存策略、监控告警和失败恢复。",
    interview:
      "面试回答适合从目标、架构组件、数据一致性、性能瓶颈、故障场景和降级策略展开。",
    specialCases:
      "特殊情况要覆盖重试放大、雪崩、部分失败、幂等冲突、分布式事务悬挂、缓存一致性、限流误杀、降级兜底和链路盲区。",
    answerPattern:
      "标准答法按“业务目标 -> 架构组件 -> 一致性策略 -> 性能瓶颈 -> 故障预案 -> 可观测验证”展开。",
    practice:
      "工程落地要配合压测、指标、日志、链路追踪、灰度发布、回滚预案和容量规划形成闭环。",
  },
  docker: {
    scope: "关注镜像如何构建、容器如何隔离运行、网络与存储如何挂载，以及应用如何交付。",
    mechanism:
      "分析时按 Dockerfile 分层、构建缓存、容器生命周期、网络命名空间、数据卷、日志和资源限制展开。",
    interview:
      "面试回答适合说明镜像与容器关系、常见指令、Compose 编排、多阶段构建和线上部署注意点。",
    specialCases:
      "特殊情况要覆盖镜像膨胀、缓存失效、端口冲突、挂载覆盖、权限问题、容器退出、日志暴涨、资源限制和网络隔离。",
    answerPattern:
      "标准答法按“镜像构建 -> 容器运行 -> 网络存储 -> 日志资源 -> Compose 编排 -> 部署排障”展开。",
    practice:
      "工程排查常用 docker ps、logs、inspect、exec、stats、events、network inspect 和镜像层分析。",
  },
  kubernetes: {
    scope: "关注声明式资源如何由控制面调谐到集群真实状态。",
    mechanism:
      "分析时从 YAML 提交到 API Server 开始，看控制器、调度器、kubelet、容器运行时、Service 和 Ingress 如何协作。",
    interview:
      "面试回答适合说明资源职责、控制器调谐、Pod 生命周期、服务发现、滚动更新、弹性伸缩和故障定位。",
    specialCases:
      "特殊情况要覆盖镜像拉取失败、调度失败、探针失败、CrashLoopBackOff、OOMKilled、Service 解析失败、滚动更新卡住和资源不足。",
    answerPattern:
      "标准答法按“资源定义 -> 控制器调谐 -> 调度运行 -> 服务访问 -> 弹性发布 -> 故障定位”展开。",
    practice:
      "工程排查常用 kubectl get、describe、logs、events、exec、top、rollout、探针状态、调度条件和控制器日志。",
  },
  agent: {
    scope: "关注大模型如何结合提示词、工具、检索、记忆、规划和评估完成任务。",
    mechanism:
      "分析时看目标理解、上下文构造、工具调用、观察结果、记忆读写、反思修正和安全边界如何形成闭环。",
    interview:
      "面试回答适合覆盖能力边界、失败模式、RAG 质量、工具权限、成本延迟、评估指标和安全治理。",
    specialCases:
      "特殊情况要覆盖幻觉、提示注入、检索召回不足、上下文污染、工具调用失败、权限越界、成本失控、长任务中断和评估漂移。",
    answerPattern:
      "标准答法按“任务目标 -> 上下文来源 -> 工具和检索 -> 规划执行 -> 评估反馈 -> 安全边界”展开。",
    practice:
      "工程落地要记录提示词、检索命中、工具调用轨迹、模型输出、人工反馈、成本、延迟和风险拦截结果。",
  },
};

function joinReadable(values: string[], emptyText: string, limit = 4) {
  const trimmed = values.filter(Boolean).slice(0, limit);

  if (!trimmed.length) {
    return emptyText;
  }

  return trimmed.join("、");
}

export function getPointScenarioItems(point: GraphKnowledgePoint) {
  return (
    point.typicalProblems ??
    point.useCases ??
    point.commonCommands ??
    point.practiceAdvice ??
    point.opsScenarios ??
    point.applicationScenarios ??
    point.commonIssues ??
    []
  );
}

export function getPointCoreText(point: GraphKnowledgePoint, t: Copy) {
  const listValue =
    point.useCases ??
    point.practiceAdvice ??
    point.opsScenarios ??
    point.applicationScenarios ??
    point.commonIssues ??
    point.commonCommands;

  return (
    point.summary ??
    point.concept ??
    point.engineeringValue ??
    (listValue?.length ? listValue.join("、") : undefined) ??
    t.sourceDescription
  );
}

function ensureSentence(value: string) {
  const trimmed = value.trim();

  if (!trimmed) {
    return trimmed;
  }

  return /[。.!！？?]$/.test(trimmed) ? trimmed : `${trimmed}。`;
}

export function getPointLabelsByIds(
  ids: string[],
  points: GraphKnowledgePoint[],
  locale: Locale,
) {
  return ids
    .map((id) => points.find((item) => item.id === id))
    .filter((item): item is GraphKnowledgePoint => Boolean(item))
    .map((item) => getKnowledgeLabel(item, locale));
}

export function buildDetailedExplanationItems(
  point: GraphKnowledgePoint,
  activeCategory: CategoryId,
  locale: Locale,
  t: Copy,
  points: GraphKnowledgePoint[],
) {
  if (locale === "zh" && point.explanation?.length) {
    return point.explanation.map((body, index) => {
      const [rawTitle, ...rest] = body.split("：");
      const hasTitlePrefix = rest.length > 0 && rawTitle.length <= 12;

      return {
        title: hasTitlePrefix
          ? rawTitle
          : instructorExplanationTitles[index] ?? `${t.explanation} ${index + 1}`,
        body: hasTitlePrefix ? rest.join("：") : body,
      };
    });
  }

  const frame = categoryExplanationFrames[activeCategory];
  const categoryLabel = getCategoryLabel(t, activeCategory);
  const pointTitle = getKnowledgeLabel(point, locale);
  const areaLabel = getAreaLabel(getAreaKey(point), locale);
  const difficulty = getDifficultyLabel(point.difficulty, t);
  const coreText = ensureSentence(getPointCoreText(point, t));
  const prerequisiteLabels = getPointLabelsByIds(point.prerequisites, points, locale);
  const relatedLabels = getPointLabelsByIds(point.related, points, locale);
  const scenarioItems = getPointScenarioItems(point);
  const sourceTitles = resolvePointSources(activeCategory, point)
    .filter((source) => source.found)
    .map((source) => source.title);
  const networkNotes =
    activeCategory === "network" ? networkKnowledgeExplanations[point.id] : undefined;
  const commandText = point.commonCommands?.length
    ? `常用命令可以从 ${joinReadable(point.commonCommands, "命令集合")} 开始练习。`
    : "";
  const issueText = point.commonIssues?.length
    ? `常见问题包括 ${joinReadable(point.commonIssues, "配置、容量、延迟和一致性问题")}。`
    : "";
  const scenarioText = scenarioItems.length
    ? `典型追问可以围绕 ${joinReadable(scenarioItems, "核心机制、边界条件和工程排查")} 展开。`
    : "典型追问通常围绕核心机制、边界条件、性能影响和工程排查展开。";
  const sourceText = sourceTitles.length
    ? `当前内容参考 ${joinReadable(sourceTitles, "项目资料", 3)} 的八股文与面试资料整理。`
    : t.sourceDescription;
  const networkDetail = networkNotes?.length
    ? `计网专项补充：${networkNotes.slice(0, 2).join(" ")}`
    : "";
  const masteryText = [
    `能用自己的话解释 ${pointTitle} 解决的核心问题`,
    `能画出 ${pointTitle} 的关键流程或数据结构`,
    `能说清 ${pointTitle} 的边界条件、性能影响和失败场景`,
    `能把 ${pointTitle} 和 ${joinReadable(relatedLabels, "相关知识", 2)} 放在同一条链路里分析`,
  ];
  const pitfallText = [
    `只背定义，缺少流程和状态变化`,
    `只讲正常路径，遗漏异常分支和恢复方式`,
    `只说结论，缺少命令、指标或案例支撑`,
  ];
  const interviewQuestions = scenarioItems.length
    ? scenarioItems.slice(0, 5)
    : [
        `${pointTitle}解决什么问题`,
        `${pointTitle}核心流程是什么`,
        `${pointTitle}有哪些边界条件`,
        `${pointTitle}线上异常怎么排查`,
      ];

  return [
    {
      title: instructorExplanationTitles[0],
      body: `${pointTitle}（${point.en}）属于${categoryLabel}的${areaLabel}主题，难度为${difficulty}。先让同学记住一句主线：${coreText}${frame.scope}面试中先讲“为什么需要它”，再讲“它靠什么机制工作”，最后补充“异常时怎么处理”。`,
    },
    {
      title: instructorExplanationTitles[1],
      body: `可以按这个口径回答：${frame.answerPattern}具体到 ${pointTitle}，开头先说它解决的核心问题，再把 ${joinReadable(prerequisiteLabels, categoryLabel, 3)} 作为前置背景，随后串到 ${joinReadable(relatedLabels, areaLabel, 3)}。这样答会显得有层次，面试官继续追问时也方便展开。`,
    },
    {
      title: instructorExplanationTitles[2],
      body: `${frame.mechanism}放到 ${pointTitle} 上，要重点讲清四件事：输入是什么、内部状态怎样变化、关键结构或协议字段是什么、输出如何被下一环节使用。${networkDetail}理解原理时可以画一条从“请求进入”到“结果返回”的链路，每个节点标出状态、代价和失败点。`,
    },
    {
      title: instructorExplanationTitles[3],
      body: `${frame.specialCases}落到 ${pointTitle} 上，至少要准备正常路径、失败路径、高并发路径和恢复路径。回答时可以主动补一句：真实线上问题通常出在边界条件，比如超时、重试、资源耗尽、状态残留、并发竞争或依赖服务异常。`,
    },
    {
      title: instructorExplanationTitles[4],
      body: `${frame.interview}回答 ${pointTitle} 时，先给定义，再讲流程或数据结构，随后补充和 ${joinReadable(relatedLabels, "相关概念")} 的联系。高频追问包括：${interviewQuestions.join("；")}。${scenarioText}`,
    },
    {
      title: instructorExplanationTitles[5],
      body: `${frame.practice}${commandText}${issueText}排查时按“现象范围 -> 关键指标 -> 日志或状态 -> 最小复现 -> 修复验证”走。讲给面试官时要说清你看什么指标、用什么命令、如何证明问题已经解决。`,
    },
    {
      title: instructorExplanationTitles[6],
      body: `学到可以面试输出的程度，至少要做到：${masteryText.join("；")}。课堂上我会要求同学用 1 分钟说定义、2 分钟讲机制、1 分钟讲特殊情况，再用 1 分钟给工程排查案例。这个节奏最适合面试现场。`,
    },
    {
      title: instructorExplanationTitles[7],
      body: `复习 ${pointTitle} 时常见失分点包括：${pitfallText.join("；")}。遇到追问时，把现象、原因、验证方式和解决方案按顺序说出来。回答越像一次完整排障，可信度越高。`,
    },
    {
      title: instructorExplanationTitles[8],
      body: `学习 ${pointTitle} 前先掌握 ${joinReadable(prerequisiteLabels, categoryLabel)}，学完后继续串联 ${joinReadable(relatedLabels, areaLabel)}。${sourceText}`,
    },
  ];
}
