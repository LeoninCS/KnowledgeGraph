import {
  Bot,
  Boxes,
  Container,
  Cpu,
  Database,
  GitBranch,
  Laptop,
  MemoryStick,
  Network,
  Rabbit,
  Server,
  ShieldCheck,
} from "lucide-react";
import { type CSSProperties, type ReactNode, useMemo } from "react";
import {
  readLocalizedText,
  type ActorKind,
  type SimulationActor,
  type VisualSimulation,
} from "../../data/visual-simulations";
import type { Locale } from "../../app/ui-types";

export function getSimulationActorStates(simulation: VisualSimulation, completedSteps: number) {
  return simulation.steps.slice(0, completedSteps).reduce(
    (states, currentStep) => ({
      ...states,
      ...currentStep.states,
    }),
    { ...simulation.initialStates },
  );
}

function SvgLabelBox({
  x,
  y,
  width,
  height,
  className,
  children,
}: {
  x: number;
  y: number;
  width: number;
  height: number;
  className: string;
  children: ReactNode;
}) {
  return (
    <foreignObject x={x - width / 2} y={y - height / 2} width={width} height={height}>
      <div className={className}>{children}</div>
    </foreignObject>
  );
}

export function SimulationStage({
  simulation,
  locale,
  completedSteps,
  activeStepIndex,
  actorStates,
}: {
  simulation: VisualSimulation;
  locale: Locale;
  completedSteps: number;
  activeStepIndex: number;
  actorStates: Record<string, { zh: string; en: string }>;
}) {
  if (simulation.key === "network:tcp-handshake") {
    return (
      <TcpHandshakeStage
        simulation={simulation}
        locale={locale}
        completedSteps={completedSteps}
        activeStepIndex={activeStepIndex}
      />
    );
  }

  if (simulation.key === "network:ethernet-frame") {
    return (
      <EthernetFrameStage
        simulation={simulation}
        locale={locale}
        completedSteps={completedSteps}
        activeStepIndex={activeStepIndex}
      />
    );
  }

  if (simulation.key === "network:signal") {
    return (
      <SignalBandwidthStage
        simulation={simulation}
        locale={locale}
        completedSteps={completedSteps}
        activeStepIndex={activeStepIndex}
      />
    );
  }

  if (simulation.key === "network:tcp-ip-model") {
    return (
      <TcpIpModelStage
        simulation={simulation}
        locale={locale}
        completedSteps={completedSteps}
        activeStepIndex={activeStepIndex}
      />
    );
  }

  if (simulation.key === "network:switch") {
    return (
      <SwitchForwardingStage
        simulation={simulation}
        locale={locale}
        completedSteps={completedSteps}
        activeStepIndex={activeStepIndex}
      />
    );
  }

  if (simulation.key === "network:arp") {
    return (
      <ArpResolutionStage
        simulation={simulation}
        locale={locale}
        completedSteps={completedSteps}
        activeStepIndex={activeStepIndex}
      />
    );
  }

  if (simulation.key === "network:routing") {
    return (
      <IpRoutingStage
        simulation={simulation}
        locale={locale}
        completedSteps={completedSteps}
        activeStepIndex={activeStepIndex}
      />
    );
  }

  if (simulation.key === "network:cdn") {
    return (
      <CdnRequestStage
        simulation={simulation}
        locale={locale}
        completedSteps={completedSteps}
        activeStepIndex={activeStepIndex}
      />
    );
  }

  if (simulation.key === "network:tcp-four-way-wave") {
    return (
      <TcpWaveStage
        simulation={simulation}
        locale={locale}
        completedSteps={completedSteps}
        activeStepIndex={activeStepIndex}
      />
    );
  }

  if (simulation.key === "network:tcp-state") {
    return (
      <TcpStateMachineStage
        simulation={simulation}
        locale={locale}
        completedSteps={completedSteps}
        activeStepIndex={activeStepIndex}
      />
    );
  }

  if (simulation.key === "mysql:buffer-pool") {
    return (
      <BufferPoolStage
        simulation={simulation}
        locale={locale}
        completedSteps={completedSteps}
        activeStepIndex={activeStepIndex}
      />
    );
  }

  if (simulation.key === "mysql:mvcc") {
    return (
      <MvccStage
        simulation={simulation}
        locale={locale}
        completedSteps={completedSteps}
        activeStepIndex={activeStepIndex}
      />
    );
  }

  if (simulation.key === "mysql:redo-log") {
    return (
      <RedoLogStage
        simulation={simulation}
        locale={locale}
        completedSteps={completedSteps}
        activeStepIndex={activeStepIndex}
      />
    );
  }

  if (simulation.key === "mysql:undo-log") {
    return (
      <UndoLogStage
        simulation={simulation}
        locale={locale}
        completedSteps={completedSteps}
        activeStepIndex={activeStepIndex}
      />
    );
  }

  if (simulation.key === "mysql:binlog") {
    return (
      <BinlogStage
        simulation={simulation}
        locale={locale}
        completedSteps={completedSteps}
        activeStepIndex={activeStepIndex}
      />
    );
  }

  if (simulation.key === "mysql:replication") {
    return (
      <ReplicationStage
        simulation={simulation}
        locale={locale}
        completedSteps={completedSteps}
        activeStepIndex={activeStepIndex}
      />
    );
  }

  if (simulation.key === "mysql:replication-lag") {
    return (
      <ReplicationLagStage
        simulation={simulation}
        locale={locale}
        completedSteps={completedSteps}
        activeStepIndex={activeStepIndex}
      />
    );
  }

  if (simulation.key === "mysql:gtid") {
    return (
      <GtidStage
        simulation={simulation}
        locale={locale}
        completedSteps={completedSteps}
        activeStepIndex={activeStepIndex}
      />
    );
  }

  if (simulation.key === "mysql:two-phase-commit") {
    return (
      <TwoPhaseCommitStage
        simulation={simulation}
        locale={locale}
        completedSteps={completedSteps}
        activeStepIndex={activeStepIndex}
      />
    );
  }

  if (simulation.key === "mysql:explain") {
    return (
      <ExplainPlanStage
        simulation={simulation}
        locale={locale}
        completedSteps={completedSteps}
        activeStepIndex={activeStepIndex}
      />
    );
  }

  if (simulation.key === "mysql:deadlock") {
    return (
      <DeadlockStage
        simulation={simulation}
        locale={locale}
        completedSteps={completedSteps}
        activeStepIndex={activeStepIndex}
      />
    );
  }

  if (simulation.key === "redis:hash-slot") {
    return (
      <RedisHashSlotStage
        simulation={simulation}
        locale={locale}
        completedSteps={completedSteps}
        activeStepIndex={activeStepIndex}
      />
    );
  }

  if (simulation.key === "redis:aof-rewrite") {
    return (
      <RedisAofRewriteStage
        simulation={simulation}
        locale={locale}
        completedSteps={completedSteps}
        activeStepIndex={activeStepIndex}
      />
    );
  }

  if (simulation.key === "redis:fork-cow") {
    return (
      <RedisForkCowStage
        simulation={simulation}
        locale={locale}
        completedSteps={completedSteps}
        activeStepIndex={activeStepIndex}
      />
    );
  }

  if (simulation.key === "docker:image-layer") {
    return (
      <DockerImageLayerStage
        simulation={simulation}
        locale={locale}
        completedSteps={completedSteps}
        activeStepIndex={activeStepIndex}
      />
    );
  }

  if (simulation.key === "docker:multi-stage-build") {
    return (
      <DockerMultiStageBuildStage
        simulation={simulation}
        locale={locale}
        completedSteps={completedSteps}
        activeStepIndex={activeStepIndex}
      />
    );
  }

  if (simulation.key === "docker:bridge-network") {
    return (
      <DockerBridgeNetworkStage
        simulation={simulation}
        locale={locale}
        completedSteps={completedSteps}
        activeStepIndex={activeStepIndex}
      />
    );
  }

  if (simulation.key === "docker:port-mapping") {
    return (
      <DockerPortMappingStage
        simulation={simulation}
        locale={locale}
        completedSteps={completedSteps}
        activeStepIndex={activeStepIndex}
      />
    );
  }

  if (simulation.key === "docker:resource-limit") {
    return (
      <DockerResourceLimitStage
        simulation={simulation}
        locale={locale}
        completedSteps={completedSteps}
        activeStepIndex={activeStepIndex}
      />
    );
  }

  if (simulation.key === "docker:cpu-limit") {
    return (
      <DockerCpuLimitStage
        simulation={simulation}
        locale={locale}
        completedSteps={completedSteps}
        activeStepIndex={activeStepIndex}
      />
    );
  }

  if (simulation.key === "docker:pids-limit") {
    return (
      <DockerPidsLimitStage
        simulation={simulation}
        locale={locale}
        completedSteps={completedSteps}
        activeStepIndex={activeStepIndex}
      />
    );
  }

  if (simulation.key === "kubernetes:service") {
    return (
      <KubernetesServiceStage
        simulation={simulation}
        locale={locale}
        completedSteps={completedSteps}
        activeStepIndex={activeStepIndex}
      />
    );
  }

  if (simulation.key === "kubernetes:endpoint-slice") {
    return (
      <KubernetesEndpointSliceStage
        simulation={simulation}
        locale={locale}
        completedSteps={completedSteps}
        activeStepIndex={activeStepIndex}
      />
    );
  }

  if (simulation.key === "kubernetes:ingress") {
    return (
      <KubernetesIngressStage
        simulation={simulation}
        locale={locale}
        completedSteps={completedSteps}
        activeStepIndex={activeStepIndex}
      />
    );
  }

  if (simulation.key === "kubernetes:hpa") {
    return (
      <KubernetesHpaStage
        simulation={simulation}
        locale={locale}
        completedSteps={completedSteps}
        activeStepIndex={activeStepIndex}
      />
    );
  }

  if (simulation.key === "kubernetes:scheduler") {
    return (
      <KubernetesSchedulerStage
        simulation={simulation}
        locale={locale}
        completedSteps={completedSteps}
        activeStepIndex={activeStepIndex}
      />
    );
  }

  if (simulation.key === "kubernetes:taint-toleration") {
    return (
      <KubernetesTaintTolerationStage
        simulation={simulation}
        locale={locale}
        completedSteps={completedSteps}
        activeStepIndex={activeStepIndex}
      />
    );
  }

  if (simulation.key === "kubernetes:node-affinity") {
    return (
      <KubernetesNodeAffinityStage
        simulation={simulation}
        locale={locale}
        completedSteps={completedSteps}
        activeStepIndex={activeStepIndex}
      />
    );
  }

  if (simulation.key === "kubernetes:pod-affinity") {
    return (
      <KubernetesPodAffinityStage
        simulation={simulation}
        locale={locale}
        completedSteps={completedSteps}
        activeStepIndex={activeStepIndex}
      />
    );
  }

  if (simulation.key === "kubernetes:topology-spread") {
    return (
      <KubernetesTopologySpreadStage
        simulation={simulation}
        locale={locale}
        completedSteps={completedSteps}
        activeStepIndex={activeStepIndex}
      />
    );
  }

  if (simulation.key === "kubernetes:preemption") {
    return (
      <KubernetesPreemptionStage
        simulation={simulation}
        locale={locale}
        completedSteps={completedSteps}
        activeStepIndex={activeStepIndex}
      />
    );
  }

  if (simulation.key === "kubernetes:crashloopbackoff") {
    return (
      <KubernetesCrashLoopBackOffStage
        simulation={simulation}
        locale={locale}
        completedSteps={completedSteps}
        activeStepIndex={activeStepIndex}
      />
    );
  }

  if (simulation.key === "os:epoll") {
    return (
      <EpollStage
        simulation={simulation}
        locale={locale}
        completedSteps={completedSteps}
        activeStepIndex={activeStepIndex}
      />
    );
  }

  if (simulation.key === "algorithm:array") {
    return (
      <ArrayIndexStage
        simulation={simulation}
        locale={locale}
        completedSteps={completedSteps}
        activeStepIndex={activeStepIndex}
      />
    );
  }

  if (simulation.key === "algorithm:linked-list") {
    return (
      <LinkedListPointerStage
        simulation={simulation}
        locale={locale}
        completedSteps={completedSteps}
        activeStepIndex={activeStepIndex}
      />
    );
  }

  if (simulation.key === "algorithm:stack") {
    return (
      <StackLifoStage
        simulation={simulation}
        locale={locale}
        completedSteps={completedSteps}
        activeStepIndex={activeStepIndex}
      />
    );
  }

  const visibleSteps = simulation.steps.slice(0, completedSteps);
  const activeStep = simulation.steps[activeStepIndex];
  const flowActors = simulation.actors.filter((actorItem) => actorItem.id !== "wire");
  const laneActors = flowActors.length >= 2 ? flowActors : simulation.actors;
  const laneCount = Math.max(laneActors.length, 1);
  const laneWidth = 220;
  const laneGap = laneCount === 1 ? 0 : 260 / Math.max(laneCount - 1, 1);
  const laneTop = 118;
  const stateHeight = 84;
  const stateGap = 0;
  const stateTones = ["blue", "yellow", "orange", "green", "purple", "teal"];
  const statesByActor = useMemo(() => {
    const result = new Map<string, string[]>();

    laneActors.forEach((actorItem) => {
      const states = [
        readLocalizedText(simulation.initialStates[actorItem.id] ?? actorItem.detail, locale),
      ];

      if (simulation.key === "network:tcp-handshake" && actorItem.id === "server") {
        states.unshift("CLOSED");
      }

      simulation.steps.forEach((stepItem) => {
        const nextState = stepItem.states[actorItem.id];

        if (nextState) {
          const label = readLocalizedText(nextState, locale);

          if (states[states.length - 1] !== label) {
            states.push(label);
          }
        }
      });

      result.set(actorItem.id, states);
    });

    return result;
  }, [laneActors, locale, simulation.initialStates, simulation.steps]);
  const maxStateCount = Math.max(
    1,
    ...Array.from(statesByActor.values()).map((states) => states.length),
  );
  const stageWidth = 260 + laneWidth * laneCount + laneGap * Math.max(laneCount - 1, 0);
  const stageHeight = Math.max(
    560,
    laneTop + maxStateCount * (stateHeight + stateGap) + 126,
  );
  const lanePositions = useMemo(() => {
    const positions = new Map<string, { x: number; top: number; width: number }>();

    laneActors.forEach((actorItem, index) => {
      positions.set(actorItem.id, {
        x: 70 + index * (laneWidth + laneGap),
        top: laneTop,
        width: laneWidth,
      });
    });

    return positions;
  }, [laneActors, laneGap]);
  const stateIndexByActor = useMemo(() => {
    const indexes = new Map<string, number>();

    laneActors.forEach((actorItem) => {
      const currentState = readLocalizedText(actorStates[actorItem.id], locale);
      const states = statesByActor.get(actorItem.id) ?? [];
      const index = states.findIndex((label) => label === currentState);

      indexes.set(actorItem.id, Math.max(index, 0));
    });

    return indexes;
  }, [actorStates, laneActors, locale, statesByActor]);

  function getStateCenter(actorId: string, stateIndex: number) {
    const lane = lanePositions.get(actorId) ?? lanePositions.get(laneActors[0]?.id ?? "");
    const safeLane = lane ?? { x: 70, top: laneTop, width: laneWidth };

    return {
      x: safeLane.x + safeLane.width / 2,
      y: safeLane.top + stateIndex * (stateHeight + stateGap) + stateHeight / 2,
    };
  }

  function getStepEndpoints(stepIndex: number) {
    const item = simulation.steps[stepIndex];
    const previousStates = getSimulationActorStates(simulation, stepIndex);
    const nextStates = getSimulationActorStates(simulation, stepIndex + 1);
    const fromActor = lanePositions.has(item.from) ? item.from : laneActors[0]?.id;
    const toActor = lanePositions.has(item.to) ? item.to : laneActors[laneActors.length - 1]?.id ?? fromActor;
    const fromStates = statesByActor.get(fromActor) ?? [];
    const toStates = statesByActor.get(toActor) ?? [];
    const fromStateLabel = readLocalizedText(previousStates[fromActor] ?? simulation.initialStates[fromActor], locale);
    const toStateLabel = readLocalizedText(nextStates[toActor] ?? simulation.initialStates[toActor], locale);
    const fromIndex = Math.max(fromStates.findIndex((label) => label === fromStateLabel), 0);
    const toIndex = Math.max(toStates.findIndex((label) => label === toStateLabel), 0);

    return {
      from: getStateCenter(fromActor, fromIndex),
      to: getStateCenter(toActor, toIndex),
      fromActor,
      toActor,
    };
  }

  return (
    <div className="visual-stage state-flow-stage">
      <div
        className="state-flow-map"
        style={{ aspectRatio: `${stageWidth} / ${stageHeight}` }}
      >
        <svg
          className="packet-sequence state-flow-sequence"
          viewBox={`0 0 ${stageWidth} ${stageHeight}`}
          preserveAspectRatio="xMidYMid meet"
          aria-label={readLocalizedText(simulation.title, locale)}
          role="img"
        >
          <defs>
            {[
              ["packet-arrow-brand", "var(--brand)"],
              ["packet-arrow-teal", "var(--tertiary)"],
              ["packet-arrow-success", "var(--success)"],
              ["packet-arrow-warning", "#f59e0b"],
              ["packet-arrow-danger", "var(--danger)"],
            ].map(([id, fill]) => (
              <marker
                key={id}
                id={id}
                viewBox="0 0 10 10"
                refX="8"
                refY="5"
                markerWidth="7"
                markerHeight="7"
                orient="auto-start-reverse"
              >
                <path d="M 0 0 L 10 5 L 0 10 z" fill={fill} />
              </marker>
            ))}
          </defs>
          <path
            className="data-flow-arrow"
            d={`M ${stageWidth * 0.29} 74 L ${stageWidth * 0.71} 74`}
            markerStart="url(#packet-arrow-success)"
            markerEnd="url(#packet-arrow-success)"
          />
          <SvgLabelBox
            x={stageWidth / 2}
            y={58}
            width={Math.min(620, stageWidth * 0.45)}
            height={42}
            className="data-flow-label-box"
          >
            {readLocalizedText(simulation.pattern, locale)}
          </SvgLabelBox>
          {laneActors.map((actorItem) => {
            const lane = lanePositions.get(actorItem.id) ?? { x: 70, top: laneTop, width: laneWidth };
            const states = statesByActor.get(actorItem.id) ?? [];
            const activeStateIndex = stateIndexByActor.get(actorItem.id) ?? 0;
            const Icon = getActorIcon(actorItem.kind);

            return (
              <g key={actorItem.id} className="state-lane">
                <foreignObject x={lane.x + 42} y="16" width={lane.width - 84} height="58">
                  <div className="state-actor-icon">
                    <Icon size={42} />
                  </div>
                </foreignObject>
                <SvgLabelBox
                  x={lane.x + lane.width / 2}
                  y={104}
                  width={lane.width}
                  height={42}
                  className="state-lane-label-box"
                >
                  {readLocalizedText(actorItem.label, locale)}
                </SvgLabelBox>
                {states.map((stateLabel, index) => {
                  const y = lane.top + index * (stateHeight + stateGap);
                  const active = index <= activeStateIndex;

                  return (
                    <g
                      key={`${actorItem.id}-${stateLabel}-${index}`}
                      className={`state-block ${stateTones[index % stateTones.length]} ${active ? "active" : ""}`}
                    >
                      <rect x={lane.x} y={y} width={lane.width} height={stateHeight} />
                      <SvgLabelBox
                        x={lane.x + lane.width / 2}
                        y={y + stateHeight / 2}
                        width={lane.width - 16}
                        height={stateHeight - 12}
                        className="state-block-label-box"
                      >
                        {stateLabel}
                      </SvgLabelBox>
                    </g>
                  );
                })}
              </g>
            );
          })}
          {visibleSteps.map((item, index) => {
            const tone = item.tone ?? "brand";
            const endpoints = getStepEndpoints(index);
            const sameActor = endpoints.fromActor === endpoints.toActor;
            const rawLabelX = sameActor
              ? endpoints.from.x + 92
              : (endpoints.from.x + endpoints.to.x) / 2;
            const labelX = Math.min(Math.max(rawLabelX, 116), stageWidth - 116);
            const labelY = Math.min(
              Math.max((endpoints.from.y + endpoints.to.y) / 2 - 12, 144),
              stageHeight - 76,
            );
            const path = sameActor
              ? `M ${endpoints.from.x + 36} ${endpoints.from.y} C ${endpoints.from.x + 142} ${endpoints.from.y - 24}, ${endpoints.to.x + 142} ${endpoints.to.y + 24}, ${endpoints.to.x + 36} ${endpoints.to.y}`
              : `M ${endpoints.from.x} ${endpoints.from.y} L ${endpoints.to.x} ${endpoints.to.y}`;

            return (
              <g
                key={`${readLocalizedText(item.label, locale)}-${index}`}
                className={`packet-record ${tone} ${
                  index === completedSteps - 1 ? "active" : ""
                }`}
              >
                <path d={path} markerEnd={`url(#packet-arrow-${tone})`} />
                <SvgLabelBox
                  x={labelX}
                  y={labelY}
                  width={sameActor ? 180 : 230}
                  height={54}
                  className="packet-record-label-box"
                >
                  {readLocalizedText(item.label, locale)}
                </SvgLabelBox>
              </g>
            );
          })}
          {completedSteps >= simulation.steps.length && laneActors.length >= 2 && (
            <>
              <path
                className="data-transfer-arrow"
                d={`M ${stageWidth * 0.34} ${stageHeight - 58} L ${stageWidth * 0.66} ${stageHeight - 58}`}
                markerEnd="url(#packet-arrow-success)"
              />
              <SvgLabelBox
                x={stageWidth / 2}
                y={stageHeight - 78}
                width={260}
                height={42}
                className="data-transfer-label-box"
              >
                {locale === "zh" ? "数据传输" : "Data transfer"}
              </SvgLabelBox>
            </>
          )}
        </svg>
        <div className="wire-caption">
          <span>{readLocalizedText(activeStep.title, locale)}</span>
          <span>{completedSteps}/{simulation.steps.length}</span>
        </div>
      </div>
    </div>
  );
}

function SignalBandwidthStage({
  simulation,
  locale,
  completedSteps,
  activeStepIndex,
}: {
  simulation: VisualSimulation;
  locale: Locale;
  completedSteps: number;
  activeStepIndex: number;
}) {
  const activeStep = simulation.steps[activeStepIndex];
  const label = (zh: string, en: string) => (locale === "zh" ? zh : en);
  const bitPattern = "101100101101";
  const bitCells = bitPattern.split("");
  const signalPath = bitCells.reduce((path, bit, index) => {
    const x = 104 + index * 30;
    const nextX = x + 30;
    const y = bit === "1" ? 360 : 420;
    const previousBit = bitCells[index - 1] ?? bit;
    const previousY = previousBit === "1" ? 360 : 420;
    const prefix = index === 0 ? `M ${x} ${y}` : `${path} L ${x} ${previousY} L ${x} ${y}`;

    return `${prefix} L ${nextX} ${y}`;
  }, "");
  const scenarioRows = [
    {
      id: "lan",
      name: label("低延迟局域网", "Low-latency LAN"),
      value: "1 Gbps / 2 ms",
      width: 120,
      color: "var(--success)",
      active: completedSteps >= 3,
    },
    {
      id: "satellite",
      name: label("高带宽长路径", "High-band long path"),
      value: "200 Mbps / 620 ms",
      width: 94,
      color: "var(--tertiary)",
      active: completedSteps >= 3,
    },
    {
      id: "queue",
      name: label("拥塞排队", "Congested queue"),
      value: "80 Mbps / +95 ms",
      width: 72,
      color: "#f59e0b",
      active: completedSteps >= 4,
    },
    {
      id: "wireless",
      name: label("弱无线链路", "Lossy wireless"),
      value: "42 Mbps / 1.2%",
      width: 54,
      color: "var(--danger)",
      active: completedSteps >= 5,
    },
  ];
  const controls = [
    { name: label("带宽容量", "Capacity"), value: "100 Mbps", fill: 0.78, active: completedSteps >= 2 },
    { name: label("传播延迟", "Delay"), value: "38 ms", fill: 0.42, active: completedSteps >= 3 },
    { name: label("队列深度", "Queue"), value: "6 pkt", fill: 0.58, active: completedSteps >= 4 },
    { name: label("丢包率", "Loss"), value: "1.2%", fill: 0.3, active: completedSteps >= 5 },
    { name: label("消息大小", "Message"), value: "12 KB", fill: 0.66, active: completedSteps >= 1 },
  ];
  const metricRows: Array<{ name: string; value: string; active: boolean }> = [
    { name: label("标称带宽", "Nominal bandwidth"), value: "100 Mbps", active: completedSteps >= 2 },
    { name: label("实测吞吐", "Measured throughput"), value: completedSteps >= 4 ? "72 Mbps" : "--", active: completedSteps >= 4 },
    { name: label("首比特/RTT", "First bit / RTT"), value: completedSteps >= 3 ? "19 ms / 38 ms" : "--", active: completedSteps >= 3 },
    { name: label("抖动", "Jitter"), value: completedSteps >= 5 ? "8 ms" : "--", active: completedSteps >= 5 },
    { name: label("重传成本", "Retry cost"), value: completedSteps >= 5 ? "+1 segment" : "--", active: completedSteps >= 5 },
  ];

  return (
    <div className="visual-stage signal-stage">
      <div className="tcp-handshake-card signal-card">
        <svg
          className="signal-diagram"
          viewBox="0 0 1120 680"
          role="img"
          aria-label={readLocalizedText(simulation.title, locale)}
        >
          <defs>
            {[
              ["signal-arrow-brand", "var(--brand)"],
              ["signal-arrow-teal", "var(--tertiary)"],
              ["signal-arrow-success", "var(--success)"],
              ["signal-arrow-warning", "#f59e0b"],
              ["signal-arrow-danger", "var(--danger)"],
            ].map(([id, fill]) => (
              <marker
                key={id}
                id={id}
                viewBox="0 0 10 10"
                refX="8"
                refY="5"
                markerWidth="7"
                markerHeight="7"
                orient="auto-start-reverse"
              >
                <path d="M 0 0 L 10 5 L 0 10 z" fill={fill} />
              </marker>
            ))}
            <filter id="signal-soft-shadow" x="-20%" y="-30%" width="140%" height="160%">
              <feDropShadow dx="0" dy="10" stdDeviation="10" floodColor="#172033" floodOpacity="0.13" />
            </filter>
            <linearGradient id="signal-band-gradient" x1="0" x2="1" y1="0" y2="0">
              <stop offset="0%" stopColor="var(--brand)" stopOpacity="0.14" />
              <stop offset="50%" stopColor="var(--tertiary)" stopOpacity="0.22" />
              <stop offset="100%" stopColor="var(--success)" stopOpacity="0.14" />
            </linearGradient>
          </defs>

          <rect className="signal-bg" x="24" y="24" width="1072" height="616" rx="30" />
          <text className="signal-title" x="560" y="68">
            {readLocalizedText(simulation.title, locale)}
          </text>
          <text className="signal-subtitle" x="560" y="96">
            {label("时域波形 + 频域带宽 + 端到端体验", "Time waveform + frequency band + end-to-end experience")}
          </text>

          <g className="signal-device sender">
            <rect x="68" y="126" width="192" height="126" rx="22" />
            <text className="signal-device-title" x="164" y="162">{label("发送端", "Sender")}</text>
            <text x="164" y="190">{label("12 KB 消息", "12 KB message")}</text>
            <text x="164" y="216">10110010...</text>
          </g>

          <g className={`signal-link ${completedSteps >= 1 ? "active" : ""}`}>
            <rect x="300" y="145" width="520" height="86" rx="34" />
            <path d="M 322 188 C 392 150, 454 226, 522 188 S 654 150, 732 188 S 792 226, 806 188" />
            <text x="560" y="176">{label("电 / 光 / 无线介质", "Electrical / optical / radio media")}</text>
            <text x="560" y="210">{completedSteps >= 2 ? "occupied band 18-82 MHz" : "awaiting modulation"}</text>
          </g>

          <g className={`signal-device receiver ${completedSteps >= 3 ? "active" : ""}`}>
            <rect x="860" y="126" width="192" height="126" rx="22" />
            <text className="signal-device-title" x="956" y="162">{label("接收端", "Receiver")}</text>
            <text x="956" y="190">{completedSteps >= 3 ? label("首比特已到达", "First bit arrived") : label("等待采样", "Awaiting sample")}</text>
            <text x="956" y="216">{completedSteps >= 4 ? "72 Mbps" : "-- Mbps"}</text>
          </g>

          <path
            className={`signal-main-arrow ${completedSteps >= 1 ? "active" : ""}`}
            d="M 260 188 L 300 188"
            markerEnd="url(#signal-arrow-brand)"
          />
          <path
            className={`signal-main-arrow ${completedSteps >= 3 ? "active success" : ""}`}
            d="M 820 188 L 860 188"
            markerEnd="url(#signal-arrow-success)"
          />

          <g className="signal-control-panel">
            {controls.map((control, index) => {
              const y = 118 + index * 28;
              return (
                <g key={control.name} className={`signal-control ${control.active ? "active" : ""}`}>
                  <text x="330" y={y + 8}>{control.name}</text>
                  <rect x="430" y={y - 4} width="154" height="10" rx="5" />
                  <rect x="430" y={y - 4} width={154 * control.fill} height="10" rx="5" />
                  <text x="604" y={y + 8}>{control.value}</text>
                </g>
              );
            })}
          </g>

          <g className={`signal-panel time ${completedSteps >= 1 ? "active" : ""}`}>
            <rect x="68" y="288" width="490" height="172" rx="22" />
            <text className="signal-panel-title" x="94" y="322">{label("时域波形", "Time-domain waveform")}</text>
            <text className="signal-axis-label" x="512" y="432">time</text>
            <path className="signal-axis" d="M 104 424 L 514 424" markerEnd="url(#signal-arrow-brand)" />
            <path className="signal-axis muted" d="M 104 338 L 104 430" />
            <path className="signal-waveform" d={signalPath} />
            {bitCells.map((bit, index) => (
              <g key={`${bit}-${index}`} className="signal-bit-cell">
                <rect x={104 + index * 30} y="438" width="24" height="18" rx="5" />
                <text x={116 + index * 30} y="452">{bit}</text>
              </g>
            ))}
          </g>

          <g className={`signal-panel spectrum ${completedSteps >= 2 ? "active" : ""}`}>
            <rect x="582" y="288" width="470" height="172" rx="22" />
            <text className="signal-panel-title" x="608" y="322">{label("频域带宽", "Frequency-domain bandwidth")}</text>
            <rect className="signal-band" x="708" y="346" width="192" height="74" rx="18" />
            <path className="signal-spectrum-line" d="M 626 420 C 668 420, 674 394, 704 386 C 744 376, 750 342, 790 342 C 832 342, 840 374, 880 384 C 918 394, 918 420, 1008 420" />
            <path className="signal-axis" d="M 626 424 L 1008 424" markerEnd="url(#signal-arrow-teal)" />
            <text className="signal-axis-label" x="994" y="442">frequency</text>
            <text className="signal-band-label" x="804" y="388">18-82 MHz</text>
          </g>

          <g className={`signal-panel timing ${completedSteps >= 3 ? "active" : ""}`}>
            <rect x="68" y="482" width="490" height="120" rx="22" />
            <text className="signal-panel-title" x="94" y="516">{label("延迟与完成时间", "Latency and completion time")}</text>
            <path className="signal-timeline-base" d="M 104 552 L 512 552" />
            <circle className="signal-timeline-dot start" cx="118" cy="552" r="7" />
            <circle className={`signal-timeline-dot first ${completedSteps >= 3 ? "active" : ""}`} cx="246" cy="552" r="7" />
            <circle className={`signal-timeline-dot full ${completedSteps >= 4 ? "active" : ""}`} cx="484" cy="552" r="7" />
            <path className={`signal-timeline-fill ${completedSteps >= 3 ? "active" : ""}`} d="M 118 552 L 246 552" />
            <path className={`signal-timeline-fill throughput ${completedSteps >= 4 ? "active" : ""}`} d="M 246 552 L 484 552" />
            <text x="118" y="580">{label("发送", "Send")}</text>
            <text x="246" y="580">{label("首比特 19ms", "First bit 19ms")}</text>
            <text x="484" y="580">{label("完成 1.36s", "Done 1.36s")}</text>
          </g>

          <g className="signal-panel metrics">
            <rect x="582" y="482" width="470" height="120" rx="22" />
            <text className="signal-panel-title" x="608" y="516">{label("观测指标", "Observed metrics")}</text>
            {metricRows.map(({ name, value, active }, index) => (
              <g key={name} className={`signal-metric-row ${active ? "active" : ""}`}>
                <text x={608 + (index % 2) * 224} y={544 + Math.floor(index / 2) * 28}>{name}</text>
                <text x={772 + (index % 2) * 224} y={544 + Math.floor(index / 2) * 28}>{value}</text>
              </g>
            ))}
          </g>

          <g className="signal-scenarios">
            {scenarioRows.map((scenario, index) => {
              const x = 74 + index * 258;
              return (
                <g
                  key={scenario.id}
                  className={`signal-scenario ${scenario.active ? "active" : ""}`}
                  style={{ "--signal-tone": scenario.color } as CSSProperties}
                >
                  <rect x={x} y="620" width="232" height="34" rx="12" />
                  <rect x={x + 10} y="640" width={scenario.width} height="5" rx="3" />
                  <text x={x + 16} y="635">{scenario.name}</text>
                  <text x={x + 218} y="635">{scenario.value}</text>
                </g>
              );
            })}
          </g>
        </svg>
        <div className="tcp-handshake-caption signal-caption">
          <strong>{readLocalizedText(activeStep.title, locale)}</strong>
          <span>{completedSteps}/{simulation.steps.length}</span>
        </div>
      </div>
    </div>
  );
}

function ArpResolutionStage({
  simulation,
  locale,
  completedSteps,
  activeStepIndex,
}: {
  simulation: VisualSimulation;
  locale: Locale;
  completedSteps: number;
  activeStepIndex: number;
}) {
  const activeStep = simulation.steps[activeStepIndex];
  const label = (zh: string, en: string) => (locale === "zh" ? zh : en);
  const hostLabel = label("主机 A", "Host A");
  const targetLabel = label("主机 B", "Host B");
  const gatewayLabel = label("默认网关", "Default GW");
  const ownerLabel = completedSteps >= 4 ? targetLabel : label("目标/网关", "Target / GW");
  const sameSubnetActive = completedSteps >= 1;
  const cacheMissActive = completedSteps >= 2;
  const requestActive = completedSteps >= 3;
  const replyActive = completedSteps >= 4;
  const dataFrameActive = completedSteps >= 5;
  const cacheRows = [
    {
      ip: "192.168.1.1",
      mac: "11:11:11:11:11:11",
      state: label("网关表项", "Gateway entry"),
      active: sameSubnetActive,
    },
    {
      ip: "192.168.1.20",
      mac: replyActive ? "BB:BB:BB:BB:BB:BB" : "--",
      state: replyActive ? label("动态表项", "Dynamic entry") : label("缺失", "Missing"),
      active: replyActive,
    },
    {
      ip: "192.168.1.20",
      mac: dataFrameActive ? "66:66:66:66:66:66" : "--",
      state: dataFrameActive ? label("冲突告警", "Conflict alert") : label("监控中", "Watching"),
      active: dataFrameActive,
      danger: true,
    },
  ];
  const headerRows = [
    [label("Ethernet 目的 MAC", "Ethernet dst MAC"), requestActive && !replyActive ? "FF:FF:FF:FF:FF:FF" : dataFrameActive ? "BB:BB:BB:BB:BB:BB" : "--"],
    [label("ARP opcode", "ARP opcode"), requestActive && !replyActive ? "request" : replyActive ? "reply" : "--"],
    [label("sender MAC / IP", "sender MAC / IP"), requestActive ? "AA:AA / 192.168.1.10" : "--"],
    [label("target MAC / IP", "target MAC / IP"), replyActive ? "BB:BB / 192.168.1.20" : requestActive ? "00:00 / 192.168.1.20" : "--"],
  ];
  const diagnostics = [
    { text: label("同网段目标：查目标 IP", "Local target: query target IP"), active: sameSubnetActive },
    { text: label("跨网段目标：查网关 IP", "Remote target: query gateway IP"), active: sameSubnetActive },
    { text: label("广播域限定 Request 范围", "Broadcast domain scopes the request"), active: requestActive },
    { text: label("同 IP 多 MAC 触发告警", "One IP with multiple MACs raises an alert"), active: dataFrameActive },
  ];

  return (
    <div className="visual-stage arp-stage">
      <div className="tcp-handshake-card arp-card">
        <svg
          className="arp-diagram"
          viewBox="0 0 1120 620"
          role="img"
          aria-label={readLocalizedText(simulation.title, locale)}
        >
          <defs>
            {[
              ["arp-arrow-brand", "var(--brand)"],
              ["arp-arrow-teal", "var(--tertiary)"],
              ["arp-arrow-success", "var(--success)"],
              ["arp-arrow-warning", "#f59e0b"],
              ["arp-arrow-danger", "var(--danger)"],
            ].map(([id, fill]) => (
              <marker
                key={id}
                id={id}
                viewBox="0 0 10 10"
                refX="8"
                refY="5"
                markerWidth="7"
                markerHeight="7"
                orient="auto-start-reverse"
              >
                <path d="M 0 0 L 10 5 L 0 10 z" fill={fill} />
              </marker>
            ))}
            <filter id="arp-soft-shadow" x="-20%" y="-30%" width="140%" height="160%">
              <feDropShadow dx="0" dy="10" stdDeviation="10" floodColor="#172033" floodOpacity="0.13" />
            </filter>
          </defs>

          <rect className="arp-bg" x="24" y="24" width="1072" height="558" rx="28" />
          <text className="arp-title" x="560" y="70">
            {readLocalizedText(simulation.title, locale)}
          </text>
          <text className="arp-subtitle" x="560" y="100">
            {label("IPv4 下一跳 IP -> 本地链路 MAC", "IPv4 next-hop IP -> local-link MAC")}
          </text>

          <g className="arp-device host">
            <rect x="72" y="150" width="192" height="116" rx="20" />
            <text className="arp-device-title" x="168" y="184">{hostLabel}</text>
            <text x="168" y="212">192.168.1.10</text>
            <text x="168" y="236">AA:AA:AA:AA:AA:AA</text>
          </g>

          <g className={`arp-next-hop ${sameSubnetActive ? "active" : ""}`}>
            <rect x="72" y="292" width="192" height="92" rx="18" />
            <text x="168" y="322">{label("下一跳选择", "Next-hop choice")}</text>
            <text x="168" y="350">dst 192.168.1.20/24</text>
            <text x="168" y="370">{label("查询 192.168.1.20", "Query 192.168.1.20")}</text>
          </g>

          <g className="arp-switch">
            <rect x="444" y="170" width="232" height="168" rx="26" />
            <text className="arp-device-title" x="560" y="210">{label("交换机 / VLAN 10", "Switch / VLAN 10")}</text>
            <text x="560" y="240">{label("广播域", "Broadcast domain")}</text>
            <text x="560" y="266">FF:FF:FF:FF:FF:FF</text>
            <text x="560" y="292">{requestActive ? label("正在泛洪 Request", "Flooding request") : label("等待广播帧", "Awaiting broadcast frame")}</text>
          </g>

          <g className="arp-device target">
            <rect x="844" y="132" width="198" height="120" rx="20" />
            <text className="arp-device-title" x="943" y="166">{ownerLabel}</text>
            <text x="943" y="195">192.168.1.20</text>
            <text x="943" y="220">BB:BB:BB:BB:BB:BB</text>
          </g>

          <g className="arp-device gateway">
            <rect x="844" y="286" width="198" height="98" rx="20" />
            <text className="arp-device-title" x="943" y="320">{gatewayLabel}</text>
            <text x="943" y="348">192.168.1.1</text>
            <text x="943" y="370">11:11:11:11:11:11</text>
          </g>

          <g className={`arp-packet request ${requestActive ? "active" : ""}`}>
            <path d="M 264 208 C 342 160, 372 160, 444 214" markerEnd="url(#arp-arrow-teal)" />
            <rect x="284" y="130" width="190" height="44" rx="14" />
            <text x="379" y="156">ARP Request</text>
          </g>

          <g className={`arp-broadcast ${requestActive ? "active" : ""}`}>
            <path d="M 676 214 C 736 142, 782 138, 844 178" markerEnd="url(#arp-arrow-teal)" />
            <path d="M 676 254 C 742 300, 782 316, 844 334" markerEnd="url(#arp-arrow-teal)" />
            <path d="M 560 338 C 560 384, 560 402, 560 430" markerEnd="url(#arp-arrow-teal)" />
          </g>

          <g className={`arp-packet reply ${replyActive ? "active" : ""}`}>
            <path d="M 844 212 C 748 406, 388 414, 264 242" markerEnd="url(#arp-arrow-success)" />
            <rect x="560" y="394" width="178" height="44" rx="14" />
            <text x="649" y="420">ARP Reply</text>
          </g>

          <g className={`arp-packet frame ${dataFrameActive ? "active" : ""}`}>
            <path d="M 264 254 C 378 526, 730 528, 844 238" markerEnd="url(#arp-arrow-success)" />
            <rect x="472" y="500" width="216" height="46" rx="15" />
            <text x="580" y="519">Ethernet frame</text>
            <text className="arp-packet-sub" x="580" y="537">dst MAC BB:BB</text>
          </g>

          <g className={`arp-cache-panel ${cacheMissActive ? "active" : ""}`}>
            <rect x="68" y="424" width="382" height="126" rx="20" />
            <text className="arp-panel-title" x="92" y="452">{label("主机 A ARP 缓存", "Host A ARP cache")}</text>
            {cacheRows.map((row, index) => (
              <g
                key={`${row.ip}-${index}`}
                className={`arp-cache-row ${row.active ? "active" : ""} ${row.danger ? "danger" : ""}`}
              >
                <rect x="92" y={466 + index * 28} width="334" height="24" rx="8" />
                <text x="108" y={483 + index * 28}>{row.ip}</text>
                <text x="236" y={483 + index * 28}>{row.mac}</text>
                <text x="372" y={483 + index * 28}>{row.state}</text>
              </g>
            ))}
          </g>

          <g className="arp-header-panel">
            <rect x="704" y="418" width="338" height="132" rx="20" />
            <text className="arp-panel-title" x="728" y="446">{label("抓包字段", "Packet fields")}</text>
            {headerRows.map(([name, value], index) => (
              <g key={name} className={`arp-header-row ${requestActive ? "active" : ""}`}>
                <text x="728" y={474 + index * 24}>{name}</text>
                <text x="1018" y={474 + index * 24}>{value}</text>
              </g>
            ))}
          </g>

          <g className="arp-diagnostics">
            {diagnostics.map((item, index) => (
              <g
                key={item.text}
                className={`arp-diagnostic ${item.active ? "active" : ""} ${index === 3 ? "danger" : ""}`}
              >
                <rect x={330 + index * 142} y="108" width="124" height="42" rx="14" />
                <text x={392 + index * 142} y="127">{item.text}</text>
                <text x={392 + index * 142} y="142">{index + 1}</text>
              </g>
            ))}
          </g>
        </svg>
        <div className="tcp-handshake-caption arp-caption">
          <strong>{readLocalizedText(activeStep.title, locale)}</strong>
          <span>{completedSteps}/{simulation.steps.length}</span>
        </div>
      </div>
    </div>
  );
}

function TcpIpModelStage({
  simulation,
  locale,
  completedSteps,
  activeStepIndex,
}: {
  simulation: VisualSimulation;
  locale: Locale;
  completedSteps: number;
  activeStepIndex: number;
}) {
  const activeStep = simulation.steps[activeStepIndex];
  const layerLabel = (zh: string, en: string) => (locale === "zh" ? zh : en);
  const layers = [
    {
      id: "application",
      zh: "应用层",
      en: "Application",
      examples: "HTTP / DNS / SSH",
      pdu: "Payload",
      y: 116,
      color: "var(--brand)",
      header: "URL / Header / DNS",
    },
    {
      id: "transport",
      zh: "传输层",
      en: "Transport",
      examples: "TCP / UDP",
      pdu: "Segment / Datagram",
      y: 212,
      color: "var(--tertiary)",
      header: "ports / seq / window",
    },
    {
      id: "internet",
      zh: "Internet 层",
      en: "Internet",
      examples: "IP / ICMP",
      pdu: "IP Packet",
      y: 308,
      color: "#f59e0b",
      header: "src IP / dst IP / TTL",
    },
    {
      id: "link",
      zh: "链路层",
      en: "Link",
      examples: "Ethernet / Wi-Fi / ARP",
      pdu: "Frame",
      y: 404,
      color: "var(--success)",
      header: "next-hop MAC / FCS",
    },
  ];
  const packets = [
    { step: 1, x: 160, y: 126, width: 184, label: "App data", detail: "HTTP GET / DNS", tone: "brand" },
    { step: 2, x: 236, y: 222, width: 214, label: "TCP/UDP", detail: "+ payload", tone: "teal" },
    { step: 3, x: 312, y: 318, width: 230, label: "IP packet", detail: "+ segment", tone: "warning" },
    { step: 4, x: 388, y: 414, width: 250, label: "Ethernet frame", detail: "+ IP packet", tone: "success" },
  ];
  const osiRows = [
    { zh: "应用 + 表示 + 会话", en: "Application + Presentation + Session", tcp: "Application", y: 123 },
    { zh: "传输", en: "Transport", tcp: "Transport", y: 219 },
    { zh: "网络", en: "Network", tcp: "Internet", y: 315 },
    { zh: "数据链路 + 物理", en: "Data Link + Physical", tcp: "Link", y: 411 },
  ];
  const troubleshooting = [
    { step: 1, label: "URL / Header / Status" },
    { step: 2, label: "Port / SYN / Window" },
    { step: 3, label: "IP / Route / TTL" },
    { step: 4, label: "MAC / ARP / FCS" },
  ];
  const decapsulationVisible = completedSteps >= 5;

  return (
    <div className="visual-stage tcp-ip-model-stage">
      <div className="tcp-handshake-card tcp-ip-model-card">
        <svg
          className="tcp-ip-model-diagram"
          viewBox="0 0 1120 600"
          role="img"
          aria-label={readLocalizedText(simulation.title, locale)}
        >
          <defs>
            {[
              ["tcp-ip-arrow-brand", "var(--brand)"],
              ["tcp-ip-arrow-teal", "var(--tertiary)"],
              ["tcp-ip-arrow-warning", "#f59e0b"],
              ["tcp-ip-arrow-success", "var(--success)"],
              ["tcp-ip-arrow-muted", "color-mix(in srgb, var(--muted) 72%, transparent)"],
            ].map(([id, fill]) => (
              <marker
                key={id}
                id={id}
                viewBox="0 0 10 10"
                refX="8.5"
                refY="5"
                markerWidth="8"
                markerHeight="8"
                orient="auto"
              >
                <path d="M 0 0 L 10 5 L 0 10 z" fill={fill} />
              </marker>
            ))}
            <filter id="tcp-ip-soft-shadow" x="-20%" y="-30%" width="140%" height="160%">
              <feDropShadow dx="0" dy="10" stdDeviation="10" floodColor="#172033" floodOpacity="0.14" />
            </filter>
          </defs>

          <rect className="tcp-ip-bg" x="24" y="24" width="1072" height="530" rx="28" />
          <text className="tcp-title tcp-ip-title" x="560" y="70">
            {readLocalizedText(simulation.title, locale)}
          </text>
          <text className="tcp-subtitle tcp-ip-subtitle" x="560" y="99">
            {layerLabel(
              "应用数据 -> TCP/UDP -> IP 包 -> 以太网/Wi-Fi 帧 -> 接收端解封装",
              "Application -> TCP/UDP -> IP packet -> Ethernet/Wi-Fi frame -> receiver decapsulation",
            )}
          </text>

          <g className="tcp-ip-host source">
            <rect x="72" y="118" width="112" height="322" rx="28" />
            <text x="128" y="274">{locale === "zh" ? "发送端" : "Sender"}</text>
            <text x="128" y="304">Host A</text>
          </g>

          <g className="tcp-ip-layer-stack">
            {layers.map((layer, index) => {
              const active = completedSteps >= index + 1;

              return (
                <g
                  key={layer.id}
                  className={`tcp-ip-layer ${layer.id} ${active ? "active" : ""}`}
                  style={{ "--layer-color": layer.color } as CSSProperties}
                >
                  <rect x="214" y={layer.y} width="342" height="70" rx="16" />
                  <text className="tcp-ip-layer-title" x="238" y={layer.y + 27}>
                    {locale === "zh" ? layer.zh : layer.en}
                  </text>
                  <text className="tcp-ip-layer-examples" x="238" y={layer.y + 51}>
                    {layer.examples}
                  </text>
                  <text className="tcp-ip-layer-pdu" x="530" y={layer.y + 30}>
                    {layer.pdu}
                  </text>
                  <text className="tcp-ip-layer-header" x="530" y={layer.y + 52}>
                    {layer.header}
                  </text>
                </g>
              );
            })}
          </g>

          <g className="tcp-ip-encapsulation">
            {packets.map((packet) => (
              <g
                key={packet.label}
                className={`tcp-ip-packet ${packet.tone} ${completedSteps >= packet.step ? "visible" : ""}`}
              >
                <rect x={packet.x} y={packet.y} width={packet.width} height="38" rx="19" />
                <text x={packet.x + packet.width / 2} y={packet.y + 17}>{packet.label}</text>
                <text className="tcp-ip-packet-detail" x={packet.x + packet.width / 2} y={packet.y + 31}>{packet.detail}</text>
              </g>
            ))}
            {layers.slice(0, -1).map((layer, index) => (
              <g
                key={`${layer.id}-arrow`}
                className={`tcp-ip-down-arrow ${completedSteps >= index + 2 ? "visible" : ""}`}
              >
                <path
                  d={`M 572 ${layer.y + 70} C 604 ${layer.y + 88}, 604 ${layers[index + 1].y - 18}, 572 ${layers[index + 1].y}`}
                  markerEnd={`url(#tcp-ip-arrow-${packets[index + 1].tone})`}
                />
              </g>
            ))}
          </g>

          <g className={`tcp-ip-wire ${completedSteps >= 4 ? "visible" : ""}`}>
            <path d="M 556 439 C 640 486, 752 486, 838 439" markerEnd="url(#tcp-ip-arrow-success)" />
            <rect x="636" y="466" width="136" height="34" rx="17" />
            <text x="704" y="488">{layerLabel("逐跳投递", "Hop delivery")}</text>
          </g>

          <g className={`tcp-ip-receiver ${decapsulationVisible ? "visible" : ""}`}>
            <rect x="852" y="118" width="146" height="322" rx="28" />
            <text className="tcp-ip-receiver-title" x="925" y="150">
              {layerLabel("接收端解封装", "Receiver decapsulation")}
            </text>
            {layers
              .slice()
              .reverse()
              .map((layer, index) => (
                <g
                  key={`rx-${layer.id}`}
                  className={`tcp-ip-rx-step ${decapsulationVisible ? "active" : ""}`}
                  style={{ "--layer-color": layer.color } as CSSProperties}
                >
                  <rect x="884" y={188 + index * 50} width="82" height="30" rx="15" />
                  <text x="925" y={208}>{layer.pdu}</text>
                </g>
              ))}
            <path
              className="tcp-ip-up-path"
              d="M 925 380 L 925 184"
              markerEnd="url(#tcp-ip-arrow-muted)"
            />
          </g>

          <g className="tcp-ip-osi-map">
            <rect x="604" y="118" width="196" height="322" rx="20" />
            <text className="tcp-ip-panel-title" x="702" y="148">
              {layerLabel("OSI 对照", "OSI Mapping")}
            </text>
            {osiRows.map((row, index) => (
              <g
                key={row.tcp}
                className={`tcp-ip-osi-row ${completedSteps >= index + 1 ? "active" : ""}`}
              >
                <rect x="628" y={row.y + 22} width="148" height="35" rx="12" />
                <text x="702" y={row.y + 44}>{locale === "zh" ? row.zh : row.en}</text>
              </g>
            ))}
          </g>

          <g className="tcp-ip-debug-panel">
            <rect x="200" y="470" width="724" height="58" rx="20" />
            <text className="tcp-ip-panel-title" x="226" y="493">
              {layerLabel("排障观察点", "Troubleshooting signals")}
            </text>
            {troubleshooting.map((item, index) => (
              <g
                key={item.label}
                className={`tcp-ip-debug-chip ${completedSteps >= item.step ? "active" : ""}`}
              >
                <rect x={396 + index * 126} y="482" width="112" height="30" rx="15" />
                <text x={452 + index * 126} y="502">{item.label}</text>
              </g>
            ))}
          </g>
        </svg>
        <div className="tcp-handshake-caption tcp-ip-model-caption">
          <strong>{readLocalizedText(activeStep.title, locale)}</strong>
          <span>{completedSteps}/{simulation.steps.length}</span>
        </div>
      </div>
    </div>
  );
}

function BufferPoolStage({
  simulation,
  locale,
  completedSteps,
  activeStepIndex,
}: {
  simulation: VisualSimulation;
  locale: Locale;
  completedSteps: number;
  activeStepIndex: number;
}) {
  const activeStep = simulation.steps[activeStepIndex];
  const label = (zh: string, en: string) => (locale === "zh" ? zh : en);
  const pageFrames = [
    { id: "P08", x: 242, y: 206, tone: "hot", label: "P08", note: "orders.idx", step: 1 },
    { id: "P12", x: 346, y: 206, tone: "hot", label: "P12", note: "user.pk", step: 3 },
    { id: "P42", x: 450, y: 206, tone: "dirty", label: "P42", note: "dirty", step: 4 },
    { id: "P31", x: 242, y: 338, tone: "warm", label: "P31", note: "old", step: 3 },
    { id: "P77", x: 346, y: 338, tone: "new", label: "P77", note: "miss", step: 2 },
    { id: "P05", x: 450, y: 338, tone: "warm", label: "P05", note: "scan", step: 3 },
  ];
  const listRows = [
    { name: "Free List", zh: "空闲 frame", en: "free frames", value: "18", step: 2, tone: "teal" },
    { name: "Flush List", zh: "脏页队列", en: "dirty queue", value: "P42", step: 4, tone: "danger" },
    { name: "LRU old%", zh: "old 区比例", en: "old ratio", value: "37%", step: 3, tone: "warning" },
  ];
  const metrics = [
    { zh: "命中率", en: "Hit ratio", value: "98.7%", step: 1, tone: "success" },
    { zh: "脏页比例", en: "Dirty ratio", value: "12%", step: 4, tone: "danger" },
    { zh: "checkpoint age", en: "checkpoint age", value: "low", step: 5, tone: "brand" },
  ];

  return (
    <div className="visual-stage buffer-pool-stage">
      <div className="buffer-pool-card">
        <svg
          className="buffer-pool-diagram"
          viewBox="0 0 1120 620"
          role="img"
          aria-label={readLocalizedText(simulation.title, locale)}
        >
          <defs>
            {[
              ["buffer-arrow-brand", "var(--brand)"],
              ["buffer-arrow-teal", "var(--tertiary)"],
              ["buffer-arrow-warning", "#f59e0b"],
              ["buffer-arrow-danger", "var(--danger)"],
              ["buffer-arrow-success", "var(--success)"],
            ].map(([id, fill]) => (
              <marker
                key={id}
                id={id}
                viewBox="0 0 10 10"
                refX="8.5"
                refY="5"
                markerWidth="8"
                markerHeight="8"
                orient="auto"
              >
                <path d="M 0 0 L 10 5 L 0 10 z" fill={fill} />
              </marker>
            ))}
            <filter id="buffer-soft-shadow" x="-20%" y="-30%" width="140%" height="160%">
              <feDropShadow dx="0" dy="10" stdDeviation="10" floodColor="#172033" floodOpacity="0.13" />
            </filter>
          </defs>

          <rect className="buffer-bg" x="24" y="24" width="1072" height="548" rx="28" />
          <text className="buffer-title" x="560" y="70">
            {readLocalizedText(simulation.title, locale)}
          </text>
          <text className="buffer-subtitle" x="560" y="99">
            {label(
              "page hash -> LRU young/old -> Free List -> Flush List -> Page Cleaner",
              "page hash -> LRU young/old -> Free List -> Flush List -> Page Cleaner",
            )}
          </text>

          <g className={`buffer-client ${completedSteps >= 1 ? "active" : ""}`}>
            <rect x="74" y="184" width="124" height="104" rx="20" />
            <text className="buffer-node-title" x="136" y="224">{label("SQL 请求", "SQL request")}</text>
            <text x="136" y="252">SELECT / UPDATE</text>
            <text x="136" y="272">page_id=P42</text>
          </g>

          <g className="buffer-main-panel">
            <rect x="222" y="134" width="392" height="346" rx="24" />
            <text className="buffer-panel-title" x="250" y="170">Buffer Pool</text>
            <text className="buffer-panel-subtitle" x="250" y="194">
              {label("缓存 16KB 数据页和索引页", "Caches 16KB data and index pages")}
            </text>
            <rect className="buffer-lru-young" x="242" y="218" width="292" height="92" rx="18" />
            <rect className="buffer-lru-old" x="242" y="350" width="292" height="92" rx="18" />
            <text className="buffer-zone-title" x="556" y="244">young</text>
            <text className="buffer-zone-title" x="556" y="376">old</text>
            <path className={`buffer-midpoint ${completedSteps >= 3 ? "active" : ""}`} d="M 224 330 L 612 330" />
            <text className={`buffer-midpoint-label ${completedSteps >= 3 ? "active" : ""}`} x="556" y="329">
              midpoint
            </text>
            {pageFrames.map((frame) => (
              <g
                key={frame.id}
                className={`buffer-page-frame ${frame.tone} ${completedSteps >= frame.step ? "active" : ""}`}
              >
                <rect x={frame.x} y={frame.y} width="78" height="72" rx="14" />
                <text className="buffer-page-id" x={frame.x + 39} y={frame.y + 31}>{frame.label}</text>
                <text className="buffer-page-note" x={frame.x + 39} y={frame.y + 53}>{frame.note}</text>
              </g>
            ))}
          </g>

          <g className={`buffer-read-path ${completedSteps >= 1 ? "active" : ""}`}>
            <path d="M 198 236 C 226 236, 216 236, 242 236" markerEnd="url(#buffer-arrow-brand)" />
            <rect x="164" y="305" width="150" height="36" rx="18" />
            <text x="239" y="328">{label("Page hash 命中", "Page hash hit")}</text>
          </g>

          <g className={`buffer-miss-path ${completedSteps >= 2 ? "active" : ""}`}>
            <path d="M 778 452 C 668 452, 608 408, 424 374" markerEnd="url(#buffer-arrow-teal)" />
            <rect x="656" y="496" width="172" height="36" rx="18" />
            <text x="742" y="519">{label("缺页装入 frame", "Miss loads frame")}</text>
          </g>

          <g className={`buffer-promote-path ${completedSteps >= 3 ? "active" : ""}`}>
            <path d="M 386 350 C 374 324, 372 306, 374 278" markerEnd="url(#buffer-arrow-warning)" />
            <rect x="396" y="302" width="136" height="34" rx="17" />
            <text x="464" y="324">{label("二次访问晋升", "Promote on touch")}</text>
          </g>

          <g className="buffer-side-panel">
            <rect x="648" y="134" width="188" height="346" rx="24" />
            <text className="buffer-panel-title" x="676" y="170">{label("管理链表", "Management lists")}</text>
            {listRows.map((row, index) => (
              <g
                key={row.name}
                className={`buffer-list-row ${row.tone} ${completedSteps >= row.step ? "active" : ""}`}
              >
                <rect x="676" y={202 + index * 74} width="132" height="52" rx="15" />
                <text x="692" y={224 + index * 74}>{row.name}</text>
                <text x="692" y={242 + index * 74}>{locale === "zh" ? row.zh : row.en}</text>
                <text x="796" y={233 + index * 74}>{row.value}</text>
              </g>
            ))}
          </g>

          <g className={`buffer-dirty-path ${completedSteps >= 4 ? "active" : ""}`}>
            <path d="M 488 242 C 560 230, 608 314, 676 314" markerEnd="url(#buffer-arrow-danger)" />
            <rect x="506" y="264" width="144" height="34" rx="17" />
            <text x="578" y="286">{label("脏页进入队列", "Dirty page queued")}</text>
          </g>

          <g className="buffer-disk-panel">
            <rect x="876" y="146" width="156" height="252" rx="28" />
            <ellipse cx="954" cy="196" rx="54" ry="22" />
            <path d="M 900 196 L 900 330 C 900 342, 924 352, 954 352 C 984 352, 1008 342, 1008 330 L 1008 196" />
            <ellipse cx="954" cy="330" rx="54" ry="22" />
            <text className="buffer-node-title" x="954" y="247">{label("表空间", "Tablespace")}</text>
            <text x="954" y="274">ibd files</text>
            <text x="954" y="294">page P42</text>
          </g>

          <g className={`buffer-flush-path ${completedSteps >= 5 ? "active" : ""}`}>
            <path d="M 808 314 C 850 312, 860 274, 900 274" markerEnd="url(#buffer-arrow-success)" />
            <rect x="790" y="402" width="190" height="42" rx="21" />
            <text x="885" y="427">Page Cleaner</text>
          </g>

          <g className="buffer-metrics-panel">
            <rect x="168" y="508" width="784" height="48" rx="20" />
            <text className="buffer-panel-title" x="196" y="538">{label("观察指标", "Signals")}</text>
            {metrics.map((metric, index) => (
              <g
                key={metric.zh}
                className={`buffer-metric ${metric.tone} ${completedSteps >= metric.step ? "active" : ""}`}
              >
                <rect x={356 + index * 174} y="518" width="138" height="28" rx="14" />
                <text x={372 + index * 174} y="537">{locale === "zh" ? metric.zh : metric.en}</text>
                <text x={480 + index * 174} y="537">{metric.value}</text>
              </g>
            ))}
          </g>
        </svg>
        <div className="tcp-handshake-caption buffer-pool-caption">
          <strong>{readLocalizedText(activeStep.title, locale)}</strong>
          <span>{completedSteps}/{simulation.steps.length}</span>
        </div>
      </div>
    </div>
  );
}

function RedisHashSlotStage({
  simulation,
  locale,
  completedSteps,
  activeStepIndex,
}: {
  simulation: VisualSimulation;
  locale: Locale;
  completedSteps: number;
  activeStepIndex: number;
}) {
  const activeStep = simulation.steps[activeStepIndex];
  const label = (zh: string, en: string) => (locale === "zh" ? zh : en);
  const showAsk = completedSteps >= 4;
  const showMoved = completedSteps >= 5;
  const activeOwner = showMoved ? "M3" : "M2";
  const keyRows = [
    { key: "user:{42}:cart", hash: "{42}", slot: "8000", active: completedSteps >= 1 },
    { key: "order:{42}:list", hash: "{42}", slot: "8000", active: completedSteps >= 1 },
    { key: "session:8842", hash: "full key", slot: "11400", active: false },
  ];
  const slotRanges = [
    { id: "M1", range: "0-5460", x: 250, width: 154, tone: "brand" },
    { id: "M2", range: showMoved ? "5461-7999" : "5461-10922", x: 404, width: showMoved ? 148 : 300, tone: "teal" },
    { id: "M3", range: showMoved ? "8000-16383" : "10923-16383", x: showMoved ? 552 : 704, width: showMoved ? 402 : 146, tone: "warning" },
  ];
  const nodes = [
    { id: "M1", x: 246, y: 322, range: "0-5460", replica: "R1", step: 2, tone: "brand" },
    { id: "M2", x: 458, y: 322, range: showMoved ? "5461-7999" : "5461-10922", replica: "R2", step: 2, tone: "teal" },
    { id: "M3", x: 670, y: 322, range: showMoved ? "8000-16383" : "10923-16383", replica: "R3", step: 4, tone: "warning" },
  ];
  const signals = [
    { zh: "槽位表", en: "slot map", value: showMoved ? "8000 -> M3" : "8000 -> M2", step: 2, tone: "teal" },
    { zh: "ASK", en: "ASK", value: showAsk ? "one-shot" : "idle", step: 4, tone: "warning" },
    { zh: "MOVED", en: "MOVED", value: showMoved ? "refresh" : "idle", step: 5, tone: "danger" },
  ];

  return (
    <div className="visual-stage redis-hash-slot-stage">
      <div className="redis-hash-slot-card">
        <svg
          className="redis-hash-slot-diagram"
          viewBox="0 0 1120 620"
          role="img"
          aria-label={readLocalizedText(simulation.title, locale)}
        >
          <defs>
            {[
              ["slot-arrow-brand", "var(--brand)"],
              ["slot-arrow-teal", "var(--tertiary)"],
              ["slot-arrow-warning", "#f59e0b"],
              ["slot-arrow-danger", "var(--danger)"],
              ["slot-arrow-success", "var(--success)"],
            ].map(([id, fill]) => (
              <marker
                key={id}
                id={id}
                viewBox="0 0 10 10"
                refX="8.5"
                refY="5"
                markerWidth="8"
                markerHeight="8"
                orient="auto"
              >
                <path d="M 0 0 L 10 5 L 0 10 z" fill={fill} />
              </marker>
            ))}
            <filter id="slot-soft-shadow" x="-20%" y="-30%" width="140%" height="160%">
              <feDropShadow dx="0" dy="10" stdDeviation="10" floodColor="#172033" floodOpacity="0.13" />
            </filter>
          </defs>

          <rect className="slot-bg" x="24" y="24" width="1072" height="548" rx="28" />
          <text className="slot-title" x="560" y="70">
            {readLocalizedText(simulation.title, locale)}
          </text>
          <text className="slot-subtitle" x="560" y="100">
            {label(
              "key -> CRC16 / key tag -> slot 0-16383 -> primary -> ASK / MOVED",
              "key -> CRC16 / key tag -> slot 0-16383 -> primary -> ASK / MOVED",
            )}
          </text>

          <g className={`slot-client ${completedSteps >= 1 ? "active" : ""}`}>
            <rect x="64" y="152" width="164" height="136" rx="22" />
            <text className="slot-node-title" x="146" y="190">{label("集群客户端", "Cluster client")}</text>
            <text x="146" y="220">GET user:{"{42}"}:cart</text>
            <text x="146" y="244">{label("缓存槽位表", "slot map cache")}</text>
            <text className="slot-route-cache" x="146" y="268">slot 8000 {"->"} {showMoved ? "M3" : "M2"}</text>
          </g>

          <g className={`slot-hash-panel ${completedSteps >= 1 ? "active" : ""}`}>
            <rect x="274" y="128" width="230" height="188" rx="22" />
            <text className="slot-panel-title" x="300" y="164">CRC16</text>
            <text className="slot-hash-formula" x="389" y="198">CRC16(key) mod 16384</text>
            {keyRows.map((row, index) => (
              <g key={row.key} className={`slot-key-row ${row.active ? "active" : ""}`}>
                <rect x="298" y={218 + index * 30} width="182" height="24" rx="12" />
                <text x="310" y={235 + index * 30}>{row.key}</text>
                <text x="468" y={235 + index * 30}>{row.slot}</text>
              </g>
            ))}
          </g>

          <g className={`slot-compute-path ${completedSteps >= 1 ? "active" : ""}`}>
            <path d="M 228 220 C 248 220, 250 220, 274 220" markerEnd="url(#slot-arrow-brand)" />
            <rect x="166" y="318" width="178" height="34" rx="17" />
            <text x="255" y="340">{label("有效 tag: {42}", "valid tag: {42}")}</text>
          </g>

          <g className={`slot-band-panel ${completedSteps >= 2 ? "active" : ""}`}>
            <rect x="214" y="372" width="676" height="92" rx="22" />
            <text className="slot-panel-title" x="240" y="404">{label("哈希槽带", "Hash slot band")}</text>
            <text className="slot-band-scale" x="246" y="442">0</text>
            <text className="slot-band-scale" x="542" y="442">8000</text>
            <text className="slot-band-scale" x="842" y="442">16383</text>
            <line className="slot-band-axis" x1="250" y1="424" x2="850" y2="424" />
            {slotRanges.map((range) => (
              <g key={range.id} className={`slot-range ${range.tone} ${range.id === activeOwner ? "owner" : ""}`}>
                <rect x={range.x} y="414" width={range.width} height="30" rx="15" />
                <text x={range.x + range.width / 2} y="434">{range.id} {range.range}</text>
              </g>
            ))}
            <g className={`slot-pointer ${completedSteps >= 2 ? "active" : ""}`}>
              <path d="M 552 408 L 552 448" />
              <circle cx="552" cy="424" r="7" />
              <text x="552" y="482">slot 8000</text>
            </g>
          </g>

          <g className={`slot-map-path ${completedSteps >= 2 ? "active" : ""}`}>
            <path d="M 486 316 C 510 344, 526 352, 552 374" markerEnd="url(#slot-arrow-teal)" />
            <rect x="526" y="320" width="162" height="34" rx="17" />
            <text x="607" y="342">slot 8000 {"->"} {activeOwner}</text>
          </g>

          <g className="slot-nodes-panel">
            <rect x="206" y="492" width="704" height="68" rx="24" />
            {nodes.map((node) => (
              <g
                key={node.id}
                className={`slot-node ${node.tone} ${completedSteps >= node.step ? "active" : ""} ${node.id === activeOwner ? "owner" : ""}`}
              >
                <rect x={node.x} y="510" width="146" height="76" rx="18" />
                <text className="slot-node-title" x={node.x + 73} y="536">{node.id}</text>
                <text x={node.x + 73} y="558">{node.range}</text>
                <text x={node.x + 73} y="576">{node.replica} replica</text>
              </g>
            ))}
          </g>

          <g className={`slot-hit-path ${completedSteps >= 3 ? "active" : ""}`}>
            <path d="M 552 464 C 548 486, 536 498, 531 510" markerEnd="url(#slot-arrow-success)" />
            <rect x="742" y="468" width="152" height="34" rx="17" />
            <text x="818" y="490">{label("负责节点返回值", "owner returns value")}</text>
          </g>

          <g className={`slot-migration-panel ${showAsk || showMoved ? "active" : ""}`}>
            <rect x="770" y="130" width="258" height="218" rx="24" />
            <text className="slot-panel-title" x="798" y="166">{label("槽位迁移窗口", "Resharding window")}</text>
            <g className={`slot-state-chip ${showAsk ? "active warning" : ""}`}>
              <rect x="798" y="190" width="194" height="34" rx="17" />
              <text x="895" y="212">M2 migrating slot 8000</text>
            </g>
            <g className={`slot-state-chip ${showAsk ? "active warning" : ""}`}>
              <rect x="798" y="236" width="194" height="34" rx="17" />
              <text x="895" y="258">M3 importing slot 8000</text>
            </g>
            <g className={`slot-state-chip ${showMoved ? "active danger" : ""}`}>
              <rect x="798" y="282" width="194" height="34" rx="17" />
              <text x="895" y="304">owner {"->"} M3</text>
            </g>
          </g>

          <g className={`slot-ask-path ${showAsk ? "active" : ""}`}>
            <path d="M 590 510 C 660 448, 746 314, 798 254" markerEnd="url(#slot-arrow-warning)" />
            <rect x="598" y="232" width="132" height="34" rx="17" />
            <text x="664" y="254">ASK 8000 M3</text>
          </g>

          <g className={`slot-moved-path ${showMoved ? "active" : ""}`}>
            <path d="M 798 300 C 628 270, 406 168, 228 202" markerEnd="url(#slot-arrow-danger)" />
            <rect x="548" y="146" width="146" height="34" rx="17" />
            <text x="621" y="168">MOVED 8000 M3</text>
          </g>

          <g className="slot-signal-panel">
            <rect x="930" y="384" width="136" height="176" rx="22" />
            <text className="slot-panel-title" x="956" y="418">{label("排查信号", "Signals")}</text>
            {signals.map((signal, index) => (
              <g
                key={signal.zh}
                className={`slot-signal ${signal.tone} ${completedSteps >= signal.step ? "active" : ""}`}
              >
                <rect x="956" y={438 + index * 38} width="84" height="28" rx="14" />
                <text x="966" y={456 + index * 38}>{locale === "zh" ? signal.zh : signal.en}</text>
                <text x="1032" y={456 + index * 38}>{signal.value}</text>
              </g>
            ))}
          </g>
        </svg>
        <div className="tcp-handshake-caption redis-hash-slot-caption">
          <strong>{readLocalizedText(activeStep.title, locale)}</strong>
          <span>{completedSteps}/{simulation.steps.length}</span>
        </div>
      </div>
    </div>
  );
}

function RedisAofRewriteStage({
  simulation,
  locale,
  completedSteps,
  activeStepIndex,
}: {
  simulation: VisualSimulation;
  locale: Locale;
  completedSteps: number;
  activeStepIndex: number;
}) {
  const activeStep = simulation.steps[activeStepIndex];
  const label = (zh: string, en: string) => (locale === "zh" ? zh : en);
  const triggerActive = completedSteps >= 1;
  const forkActive = completedSteps >= 2;
  const dualWriteActive = completedSteps >= 3;
  const baseActive = completedSteps >= 4;
  const switchActive = completedSteps >= 5;
  const bufferRows = [
    { name: "client writes", value: dualWriteActive ? "SET order:9 paid" : "idle", active: dualWriteActive, tone: "brand" },
    { name: "append buffer", value: dualWriteActive ? "current incr +12KB" : "ready", active: dualWriteActive, tone: "teal" },
    { name: "rewrite buffer", value: dualWriteActive ? "+12KB delta" : "empty", active: dualWriteActive, tone: "warning" },
    { name: "fsync", value: switchActive ? "everysec clean" : "policy everysec", active: triggerActive, tone: switchActive ? "success" : "brand" },
  ];
  const fileRows = [
    { name: "old base.rdb", value: switchActive ? "cleanup queue" : "active", active: triggerActive, tone: switchActive ? "danger" : "brand" },
    { name: "old incr.aof", value: dualWriteActive ? "+ live writes" : "active", active: triggerActive, tone: "teal" },
    { name: "temp base", value: baseActive ? "240MB ready" : forkActive ? "writing" : "pending", active: forkActive || baseActive, tone: baseActive ? "success" : "warning" },
    { name: "new incr.aof", value: switchActive ? "open for appends" : "pending", active: switchActive, tone: "success" },
  ];
  const manifestRows = [
    { name: "seq 42", value: switchActive ? "old retired" : "current", active: triggerActive, tone: switchActive ? "danger" : "brand" },
    { name: "seq 43", value: switchActive ? "base + incr" : "staged", active: baseActive || switchActive, tone: switchActive ? "success" : "warning" },
    { name: "replay", value: switchActive ? "base then incr" : "long history", active: switchActive || triggerActive, tone: switchActive ? "success" : "teal" },
  ];
  const signals = [
    { name: "fork COW", value: forkActive ? "18ms / +180MB" : "--", active: forkActive, tone: "teal" },
    { name: "rewrite buffer", value: dualWriteActive ? "12KB" : "0", active: dualWriteActive, tone: "warning" },
    { name: "AOF size", value: switchActive ? "1.8GB -> 286MB" : baseActive ? "temp 240MB" : "1.8GB", active: triggerActive, tone: switchActive ? "success" : "brand" },
    { name: "status", value: switchActive ? "last_bgrewrite=ok" : triggerActive ? "in_progress" : "idle", active: triggerActive, tone: switchActive ? "success" : "brand" },
  ];
  const mobileFlow = [
    { name: "Trigger", value: triggerActive ? "BGREWRITEAOF accepted" : "aof_current_size=1.8GB", active: triggerActive },
    { name: "Fork", value: forkActive ? "child snapshot + COW pages" : "waiting fork", active: forkActive },
    { name: "Dual write", value: dualWriteActive ? "append buffer + rewrite buffer" : "waiting writes", active: dualWriteActive },
    { name: "Base file", value: baseActive ? "temp base ready" : "child writing", active: baseActive },
    { name: "Manifest", value: switchActive ? "base + incr switched" : "old files active", active: switchActive },
  ];

  return (
    <div className="visual-stage redis-aof-stage">
      <div className="redis-aof-card">
        <svg
          className="redis-aof-diagram"
          viewBox="0 0 1120 640"
          role="img"
          aria-label={readLocalizedText(simulation.title, locale)}
        >
          <defs>
            {[
              ["redis-aof-arrow-brand", "var(--brand)"],
              ["redis-aof-arrow-teal", "var(--tertiary)"],
              ["redis-aof-arrow-success", "var(--success)"],
              ["redis-aof-arrow-warning", "#f59e0b"],
              ["redis-aof-arrow-danger", "var(--danger)"],
            ].map(([id, fill]) => (
              <marker
                key={id}
                id={id}
                viewBox="0 0 10 10"
                refX="8.5"
                refY="5"
                markerWidth="8"
                markerHeight="8"
                orient="auto"
              >
                <path d="M 0 0 L 10 5 L 0 10 z" fill={fill} />
              </marker>
            ))}
            <filter id="redis-aof-soft-shadow" x="-20%" y="-30%" width="140%" height="160%">
              <feDropShadow dx="0" dy="10" stdDeviation="10" floodColor="#172033" floodOpacity="0.13" />
            </filter>
          </defs>

          <rect className="redis-aof-bg" x="24" y="24" width="1072" height="584" rx="28" />
          <text className="redis-aof-title" x="560" y="70">
            {readLocalizedText(simulation.title, locale)}
          </text>
          <text className="redis-aof-subtitle" x="560" y="100">
            {label(
              "BGREWRITEAOF -> fork snapshot -> dual write buffers -> compact base -> manifest switch",
              "BGREWRITEAOF -> fork snapshot -> dual write buffers -> compact base -> manifest switch",
            )}
          </text>

          <g className={`redis-aof-parent ${triggerActive ? "active" : ""}`}>
            <rect x="64" y="146" width="250" height="170" rx="24" />
            <text className="redis-aof-panel-title" x="94" y="184">{label("Redis 主进程", "Redis parent")}</text>
            <text className="redis-aof-panel-subtitle" x="94" y="208">{label("事件循环继续接收写命令", "Event loop keeps accepting writes")}</text>
            <g className={`redis-aof-chip brand ${triggerActive ? "active" : ""}`}>
              <rect x="94" y="232" width="172" height="26" rx="13" />
              <text x="180" y="250">BGREWRITEAOF</text>
            </g>
            <g className={`redis-aof-chip warning ${dualWriteActive ? "active" : ""}`}>
              <rect x="94" y="268" width="172" height="26" rx="13" />
              <text x="180" y="286">{dualWriteActive ? "SET order:9 paid" : "writes pending"}</text>
            </g>
          </g>

          <g className={`redis-aof-child ${forkActive ? "active" : ""}`}>
            <rect x="384" y="132" width="244" height="154" rx="24" />
            <text className="redis-aof-panel-title" x="414" y="170">{label("Rewrite 子进程", "Rewrite child")}</text>
            <text className="redis-aof-panel-subtitle" x="414" y="194">{label("读取 fork 快照", "Reads fork snapshot")}</text>
            <g className={`redis-aof-chip teal ${forkActive ? "active" : ""}`}>
              <rect x="414" y="218" width="164" height="26" rx="13" />
              <text x="496" y="236">fork + COW</text>
            </g>
            <g className={`redis-aof-chip success ${baseActive ? "active" : ""}`}>
              <rect x="414" y="250" width="164" height="26" rx="13" />
              <text x="496" y="268">{baseActive ? "base ready" : "compacting"}</text>
            </g>
          </g>

          <g className={`redis-aof-buffers ${dualWriteActive ? "active" : ""}`}>
            <rect x="674" y="126" width="358" height="204" rx="26" />
            <text className="redis-aof-panel-title" x="704" y="164">{label("写入缓冲区", "Write buffers")}</text>
            <text className="redis-aof-panel-subtitle" x="704" y="188">{label("当前增量 AOF 与重写缓冲并行", "Current incr AOF and rewrite buffer in parallel")}</text>
            {bufferRows.map((row, index) => (
              <g key={row.name} className={`redis-aof-row ${row.tone} ${row.active ? "active" : ""}`}>
                <rect x="704" y={212 + index * 34} width="286" height="25" rx="12.5" />
                <text x="720" y={229 + index * 34}>{row.name}</text>
                <text x="974" y={229 + index * 34}>{row.value}</text>
              </g>
            ))}
          </g>

          <g className={`redis-aof-files ${triggerActive ? "active" : ""}`}>
            <rect x="82" y="380" width="402" height="166" rx="26" />
            <text className="redis-aof-panel-title" x="112" y="418">{label("AOF 文件组", "AOF file set")}</text>
            <text className="redis-aof-panel-subtitle" x="112" y="442">{label("旧文件保持可恢复，新基础文件分阶段接入", "Old files remain recoverable while the new base is staged")}</text>
            {fileRows.map((row, index) => (
              <g key={row.name} className={`redis-aof-row ${row.tone} ${row.active ? "active" : ""}`}>
                <rect x="112" y={466 + index * 30} width="316" height="22" rx="11" />
                <text x="128" y={481 + index * 30}>{row.name}</text>
                <text x="408" y={481 + index * 30}>{row.value}</text>
              </g>
            ))}
          </g>

          <g className={`redis-aof-manifest ${baseActive || switchActive ? "active" : ""}`}>
            <rect x="548" y="380" width="238" height="166" rx="26" />
            <text className="redis-aof-panel-title" x="578" y="418">AOF Manifest</text>
            <text className="redis-aof-panel-subtitle" x="578" y="442">{label("文件序列与原子切换", "File sequence and atomic switch")}</text>
            {manifestRows.map((row, index) => (
              <g key={row.name} className={`redis-aof-row ${row.tone} ${row.active ? "active" : ""}`}>
                <rect x="578" y={466 + index * 34} width="170" height="25" rx="12.5" />
                <text x="594" y={483 + index * 34}>{row.name}</text>
                <text x="734" y={483 + index * 34}>{row.value}</text>
              </g>
            ))}
          </g>

          <g className={`redis-aof-recovery ${switchActive ? "active" : ""}`}>
            <rect x="842" y="382" width="210" height="164" rx="26" />
            <text className="redis-aof-panel-title" x="872" y="420">{label("恢复重放", "Recovery replay")}</text>
            <text className="redis-aof-panel-subtitle" x="872" y="444">{label("先 base，再 incr", "Base first, then incr")}</text>
            <g className={`redis-aof-chip success ${switchActive ? "active" : ""}`}>
              <rect x="872" y="474" width="140" height="26" rx="13" />
              <text x="942" y="492">load base</text>
            </g>
            <g className={`redis-aof-chip teal ${switchActive ? "active" : ""}`}>
              <rect x="872" y="512" width="140" height="26" rx="13" />
              <text x="942" y="530">replay incr</text>
            </g>
          </g>

          <g className={`redis-aof-trigger-path ${triggerActive ? "active" : ""}`}>
            <path d="M 314 206 C 340 198, 360 192, 384 190" markerEnd="url(#redis-aof-arrow-brand)" />
            <rect x="294" y="158" width="112" height="30" rx="15" />
            <text x="350" y="178">fork</text>
          </g>
          <g className={`redis-aof-cow-path ${forkActive ? "active" : ""}`}>
            <path d="M 248 316 C 286 356, 344 372, 410 380" markerEnd="url(#redis-aof-arrow-teal)" />
            <rect x="286" y="334" width="134" height="30" rx="15" />
            <text x="353" y="354">COW pages</text>
          </g>
          <g className={`redis-aof-live-path ${dualWriteActive ? "active" : ""}`}>
            <path d="M 314 258 C 428 240, 548 236, 674 238" markerEnd="url(#redis-aof-arrow-warning)" />
            <path d="M 314 282 C 424 318, 548 308, 674 276" markerEnd="url(#redis-aof-arrow-warning)" />
            <rect x="446" y="250" width="142" height="30" rx="15" />
            <text x="517" y="270">dual write</text>
          </g>
          <g className={`redis-aof-base-path ${baseActive ? "active" : ""}`}>
            <path d="M 506 286 C 488 328, 428 362, 362 380" markerEnd="url(#redis-aof-arrow-success)" />
            <rect x="456" y="318" width="146" height="30" rx="15" />
            <text x="529" y="338">temp base</text>
          </g>
          <g className={`redis-aof-switch-path ${switchActive ? "active" : ""}`}>
            <path d="M 484 462 C 510 462, 526 462, 548 462" markerEnd="url(#redis-aof-arrow-danger)" />
            <path d="M 786 466 C 806 464, 822 464, 842 464" markerEnd="url(#redis-aof-arrow-success)" />
            <path d="M 674 330 C 654 352, 656 366, 668 380" markerEnd="url(#redis-aof-arrow-danger)" />
            <rect x="468" y="562" width="184" height="30" rx="15" />
            <text x="560" y="582">manifest switch</text>
          </g>

          <g className="redis-aof-signals">
            {signals.map((signal, index) => (
              <g key={signal.name} className={`redis-aof-signal ${signal.tone} ${signal.active ? "active" : ""}`}>
                <rect x={64 + index * 264} y="570" width="230" height="34" rx="16" />
                <text x={84 + index * 264} y="584">{signal.name}</text>
                <text x={272 + index * 264} y="598">{signal.value}</text>
              </g>
            ))}
          </g>
        </svg>
        <div className="redis-aof-mobile-map">
          <div className="redis-aof-mobile-flow" aria-hidden="true">
            {mobileFlow.map((item) => (
              <div key={item.name} className={`redis-aof-mobile-hop ${item.active ? "active" : ""}`}>
                <span>{item.name}</span>
                <strong>{item.value}</strong>
              </div>
            ))}
          </div>
          <div className="redis-aof-mobile-facts">
            {signals.map((signal) => (
              <div key={signal.name} className={`redis-aof-mobile-fact ${signal.active ? "active" : ""}`}>
                <span>{signal.name}</span>
                <strong>{signal.value}</strong>
              </div>
            ))}
          </div>
        </div>
        <div className="tcp-handshake-caption redis-aof-caption">
          <strong>{readLocalizedText(activeStep.title, locale)}</strong>
          <span>{completedSteps}/{simulation.steps.length}</span>
        </div>
      </div>
    </div>
  );
}

function RedisForkCowStage({
  simulation,
  locale,
  completedSteps,
  activeStepIndex,
}: {
  simulation: VisualSimulation;
  locale: Locale;
  completedSteps: number;
  activeStepIndex: number;
}) {
  const activeStep = simulation.steps[activeStepIndex];
  const label = (zh: string, en: string) => (locale === "zh" ? zh : en);
  const triggerActive = completedSteps >= 1;
  const forkActive = completedSteps >= 2;
  const writeActive = completedSteps >= 3;
  const cowActive = completedSteps >= 4;
  const releaseActive = completedSteps >= 5;
  const pageRows = [
    { id: "A", owner: "shared", value: "keyspace dict", active: forkActive, tone: "brand", x: 692, y: 226 },
    { id: "B", owner: cowActive ? "split" : "shared", value: writeActive ? "hot:user:42" : "hash bucket", active: forkActive, tone: cowActive ? "danger" : "warning", x: 806, y: 226 },
    { id: "C", owner: "shared", value: "listpack", active: forkActive, tone: "teal", x: 920, y: 226 },
  ];
  const metricRows = [
    { name: "latest_fork_usec", value: forkActive ? "18ms" : "0", active: forkActive, tone: "teal" },
    { name: "COW extra", value: cowActive ? "+640MB" : writeActive ? "pending" : "0", active: writeActive || cowActive, tone: cowActive ? "danger" : "warning" },
    { name: "used_memory_rss", value: releaseActive ? "24.4GB" : cowActive ? "25.1GB" : "24.0GB", active: forkActive, tone: releaseActive ? "success" : "brand" },
    { name: "latency event", value: writeActive ? "fork / cow" : "--", active: writeActive, tone: "warning" },
  ];
  const mobileFlow = [
    { name: "Trigger", value: triggerActive ? "BGSAVE/BGREWRITEAOF queued" : "background idle", active: triggerActive },
    { name: "Fork", value: forkActive ? "page tables copied" : "waiting fork", active: forkActive },
    { name: "Write", value: writeActive ? "shared page write fault" : "writes pending", active: writeActive },
    { name: "COW", value: cowActive ? "Page B old/new split" : "no copied pages", active: cowActive },
    { name: "Release", value: releaseActive ? "child exit, RSS returns" : "snapshot retained", active: releaseActive },
  ];

  return (
    <div className="visual-stage redis-cow-stage">
      <div className="redis-cow-card">
        <svg
          className="redis-cow-diagram"
          viewBox="0 0 1120 640"
          role="img"
          aria-label={readLocalizedText(simulation.title, locale)}
        >
          <defs>
            {[
              ["redis-cow-arrow-brand", "var(--brand)"],
              ["redis-cow-arrow-teal", "var(--tertiary)"],
              ["redis-cow-arrow-warning", "#f59e0b"],
              ["redis-cow-arrow-danger", "var(--danger)"],
              ["redis-cow-arrow-success", "var(--success)"],
            ].map(([id, fill]) => (
              <marker
                key={id}
                id={id}
                viewBox="0 0 10 10"
                refX="8.5"
                refY="5"
                markerWidth="8"
                markerHeight="8"
                orient="auto"
              >
                <path d="M 0 0 L 10 5 L 0 10 z" fill={fill} />
              </marker>
            ))}
            <filter id="redis-cow-soft-shadow" x="-20%" y="-30%" width="140%" height="160%">
              <feDropShadow dx="0" dy="10" stdDeviation="10" floodColor="#172033" floodOpacity="0.14" />
            </filter>
          </defs>

          <rect className="redis-cow-bg" x="24" y="24" width="1072" height="584" rx="28" />
          <text className="redis-cow-title" x="560" y="70">
            {readLocalizedText(simulation.title, locale)}
          </text>
          <text className="redis-cow-subtitle" x="560" y="100">
            {label(
              "background job -> fork page tables -> shared pages -> write fault -> COW release",
              "background job -> fork page tables -> shared pages -> write fault -> COW release",
            )}
          </text>

          <g className={`redis-cow-parent ${triggerActive ? "active" : ""}`}>
            <rect x="64" y="142" width="252" height="166" rx="24" />
            <text className="redis-cow-panel-title" x="94" y="180">{label("Redis 主进程", "Redis parent")}</text>
            <text className="redis-cow-panel-subtitle" x="94" y="204">{label("事件循环继续写入", "Event loop keeps writing")}</text>
            <g className={`redis-cow-chip brand ${triggerActive ? "active" : ""}`}>
              <rect x="94" y="228" width="168" height="28" rx="14" />
              <text x="178" y="247">{triggerActive ? "BGSAVE / rewrite" : "background idle"}</text>
            </g>
            <g className={`redis-cow-chip warning ${writeActive ? "active" : ""}`}>
              <rect x="94" y="266" width="168" height="28" rx="14" />
              <text x="178" y="285">{writeActive ? "SET hot:user:42" : "writes pending"}</text>
            </g>
          </g>

          <g className={`redis-cow-child ${forkActive ? "active" : ""}`}>
            <rect x="64" y="382" width="252" height="154" rx="24" />
            <text className="redis-cow-panel-title" x="94" y="420">{label("后台子进程", "Background child")}</text>
            <text className="redis-cow-panel-subtitle" x="94" y="444">{label("读取 fork 时刻快照", "Reads the fork-time snapshot")}</text>
            <g className={`redis-cow-chip teal ${forkActive ? "active" : ""}`}>
              <rect x="94" y="468" width="168" height="28" rx="14" />
              <text x="178" y="487">{forkActive ? "shared mappings" : "waiting fork"}</text>
            </g>
            <g className={`redis-cow-chip success ${releaseActive ? "active" : ""}`}>
              <rect x="94" y="504" width="168" height="28" rx="14" />
              <text x="178" y="523">{releaseActive ? "child exited" : "writing snapshot"}</text>
            </g>
          </g>

          <g className={`redis-cow-pagetable ${forkActive ? "active" : ""}`}>
            <rect x="382" y="142" width="238" height="166" rx="24" />
            <text className="redis-cow-panel-title" x="412" y="180">{label("页表快照", "Page table snapshot")}</text>
            <text className="redis-cow-panel-subtitle" x="412" y="204">{label("虚拟页映射复制", "Virtual mappings copied")}</text>
            {["vpage 18 -> Page A", "vpage 31 -> Page B", "vpage 44 -> Page C"].map((row, index) => (
              <g key={row} className={`redis-cow-row teal ${forkActive ? "active" : ""}`}>
                <rect x="412" y={228 + index * 34} width="176" height="26" rx="13" />
                <text x="428" y={246 + index * 34}>{row}</text>
              </g>
            ))}
          </g>

          <g className={`redis-cow-pages ${forkActive ? "active" : ""}`}>
            <rect x="662" y="142" width="370" height="238" rx="26" />
            <text className="redis-cow-panel-title" x="692" y="180">{label("物理内存页", "Physical memory pages")}</text>
            <text className="redis-cow-panel-subtitle" x="692" y="204">{label("父子初始共享，写入触发分裂", "Initially shared, writes split pages")}</text>
            {pageRows.map((page) => (
              <g key={page.id} className={`redis-cow-page ${page.tone} ${page.active ? "active" : ""} ${page.owner}`}>
                <rect x={page.x} y={page.y} width="116" height="92" rx="18" />
                <text className="redis-cow-page-id" x={page.x + 58} y={page.y + 32}>Page {page.id}</text>
                <text x={page.x + 58} y={page.y + 56}>{page.value}</text>
                <text x={page.x + 58} y={page.y + 76}>{page.owner}</text>
              </g>
            ))}
            <g className={`redis-cow-split ${cowActive ? "active" : ""}`}>
              <rect x="684" y="334" width="108" height="42" rx="16" />
              <text x="738" y="360">old B</text>
              <rect x="808" y="334" width="108" height="42" rx="16" />
              <text x="862" y="360">new B</text>
            </g>
          </g>

          <g className={`redis-cow-writer ${forkActive ? "active" : ""}`}>
            <rect x="382" y="400" width="238" height="136" rx="24" />
            <text className="redis-cow-panel-title" x="412" y="438">{label("RDB/AOF/Full Sync", "RDB / AOF / full sync")}</text>
            <text className="redis-cow-panel-subtitle" x="412" y="462">{label("子进程写快照", "Child writes the snapshot")}</text>
            <g className={`redis-cow-chip success ${releaseActive ? "active" : ""}`}>
              <rect x="412" y="488" width="168" height="28" rx="14" />
              <text x="496" y="507">{releaseActive ? "status=ok" : "snapshot writing"}</text>
            </g>
          </g>

          <g className={`redis-cow-metrics ${triggerActive ? "active" : ""}`}>
            <rect x="662" y="408" width="370" height="166" rx="24" />
            <text className="redis-cow-panel-title" x="692" y="442">{label("排障指标", "Debug metrics")}</text>
            {metricRows.map((row, index) => (
              <g key={row.name} className={`redis-cow-row ${row.tone} ${row.active ? "active" : ""}`}>
                <rect x="692" y={460 + index * 30} width="288" height="24" rx="12" />
                <text x="708" y={476 + index * 30}>{row.name}</text>
                <text x="964" y={476 + index * 30}>{row.value}</text>
              </g>
            ))}
          </g>

          <g className={`redis-cow-trigger-path ${triggerActive ? "active" : ""}`}>
            <path d="M 316 220 C 338 214, 358 212, 382 212" markerEnd="url(#redis-cow-arrow-brand)" />
            <rect x="306" y="178" width="106" height="30" rx="15" />
            <text x="359" y="198">fork</text>
          </g>
          <g className={`redis-cow-share-path ${forkActive ? "active" : ""}`}>
            <path d="M 620 230 C 638 228, 648 228, 662 228" markerEnd="url(#redis-cow-arrow-teal)" />
            <path d="M 190 382 C 218 342, 348 322, 666 286" markerEnd="url(#redis-cow-arrow-teal)" />
            <rect x="470" y="326" width="142" height="30" rx="15" />
            <text x="541" y="346">shared pages</text>
          </g>
          <g className={`redis-cow-write-path ${writeActive ? "active" : ""}`}>
            <path d="M 316 284 C 490 278, 648 270, 806 274" markerEnd="url(#redis-cow-arrow-warning)" />
            <rect x="448" y="250" width="124" height="30" rx="15" />
            <text x="510" y="270">write fault</text>
          </g>
          <g className={`redis-cow-copy-path ${cowActive ? "active" : ""}`}>
            <path d="M 864 318 C 834 330, 780 334, 738 334" markerEnd="url(#redis-cow-arrow-danger)" />
            <path d="M 864 318 C 868 328, 868 334, 862 334" markerEnd="url(#redis-cow-arrow-danger)" />
            <rect x="816" y="296" width="112" height="30" rx="15" />
            <text x="872" y="316">COW copy</text>
          </g>
          <g className={`redis-cow-release-path ${releaseActive ? "active" : ""}`}>
            <path d="M 620 486 C 644 486, 652 486, 662 486" markerEnd="url(#redis-cow-arrow-success)" />
            <rect x="514" y="548" width="136" height="30" rx="15" />
            <text x="582" y="568">release RSS</text>
          </g>
        </svg>
        <div className="redis-cow-mobile-map">
          <div className="redis-cow-mobile-flow" aria-hidden="true">
            {mobileFlow.map((item) => (
              <div key={item.name} className={`redis-cow-mobile-hop ${item.active ? "active" : ""}`}>
                <span>{item.name}</span>
                <strong>{item.value}</strong>
              </div>
            ))}
          </div>
          <div className="redis-cow-mobile-facts">
            {metricRows.map((row) => (
              <div key={row.name} className={`redis-cow-mobile-fact ${row.active ? "active" : ""}`}>
                <span>{row.name}</span>
                <strong>{row.value}</strong>
              </div>
            ))}
          </div>
        </div>
        <div className="tcp-handshake-caption redis-cow-caption">
          <strong>{readLocalizedText(activeStep.title, locale)}</strong>
          <span>{completedSteps}/{simulation.steps.length}</span>
        </div>
      </div>
    </div>
  );
}

function MvccStage({
  simulation,
  locale,
  completedSteps,
  activeStepIndex,
}: {
  simulation: VisualSimulation;
  locale: Locale;
  completedSteps: number;
  activeStepIndex: number;
}) {
  const activeStep = simulation.steps[activeStepIndex];
  const label = (zh: string, en: string) => (locale === "zh" ? zh : en);
  const writeActive = completedSteps >= 1;
  const undoActive = completedSteps >= 2;
  const readViewActive = completedSteps >= 3;
  const visibleActive = completedSteps >= 4;
  const purgeActive = completedSteps >= 5;
  const timelineEvents = [
    { id: "T12", text: "T12 COMMIT", x: 122, active: true, tone: "success" },
    { id: "T17", text: "T17 SELECT", x: 220, active: readViewActive, tone: "warning" },
    { id: "T19", text: "T19 UPDATE", x: 318, active: undoActive, tone: "teal" },
    { id: "T20", text: "T20 UPDATE", x: 416, active: writeActive, tone: "danger" },
  ];
  const versions = [
    {
      id: "v20",
      x: 438,
      y: 164,
      trx: "trx_id=20",
      ptr: "roll_ptr=undo#19",
      value: "amount=140",
      note: label("当前版本", "current"),
      active: writeActive,
      tone: "danger",
    },
    {
      id: "v19",
      x: 438,
      y: 300,
      trx: "trx_id=19",
      ptr: "roll_ptr=undo#12",
      value: "amount=120",
      note: label("undo 旧版本", "undo version"),
      active: undoActive,
      tone: "teal",
    },
    {
      id: "v12",
      x: 438,
      y: 436,
      trx: "trx_id=12",
      ptr: "roll_ptr=null",
      value: "amount=100",
      note: label("快照可见", "snapshot visible"),
      active: visibleActive,
      tone: "success",
    },
  ];
  const readViewRows = [
    { name: "creator_trx_id", value: "17", active: readViewActive, tone: "brand" },
    { name: "m_ids", value: "[17]", active: readViewActive, tone: "warning" },
    { name: "up_limit_id", value: "17", active: readViewActive, tone: "teal" },
    { name: "low_limit_id", value: "18", active: readViewActive, tone: "danger" },
  ];
  const ruleRows = [
    { version: "v20", rule: "20 >= low_limit_id", result: label("跳过", "skip"), active: visibleActive, tone: "danger" },
    { version: "v19", rule: "19 >= low_limit_id", result: label("跳过", "skip"), active: visibleActive, tone: "warning" },
    { version: "v12", rule: "12 < up_limit_id", result: label("可见", "visible"), active: visibleActive, tone: "success" },
  ];
  const signalRows = [
    { name: "trx", value: purgeActive ? "T17 open 4m" : "T17 open", active: readViewActive },
    { name: "undo", value: purgeActive ? "retained v19/v12" : "2 versions", active: undoActive },
    { name: "history list", value: purgeActive ? "growing" : "stable", active: purgeActive },
    { name: "purge", value: purgeActive ? "lag elevated" : "idle", active: purgeActive },
  ];

  return (
    <div className="visual-stage mvcc-stage">
      <div className="mvcc-card">
        <svg
          className="mvcc-diagram"
          viewBox="0 0 1120 640"
          role="img"
          aria-label={readLocalizedText(simulation.title, locale)}
        >
          <defs>
            {[
              ["mvcc-arrow-brand", "var(--brand)"],
              ["mvcc-arrow-teal", "var(--tertiary)"],
              ["mvcc-arrow-warning", "#f59e0b"],
              ["mvcc-arrow-danger", "var(--danger)"],
              ["mvcc-arrow-success", "var(--success)"],
            ].map(([id, fill]) => (
              <marker
                key={id}
                id={id}
                viewBox="0 0 10 10"
                refX="8.5"
                refY="5"
                markerWidth="8"
                markerHeight="8"
                orient="auto"
              >
                <path d="M 0 0 L 10 5 L 0 10 z" fill={fill} />
              </marker>
            ))}
            <filter id="mvcc-soft-shadow" x="-20%" y="-30%" width="140%" height="160%">
              <feDropShadow dx="0" dy="10" stdDeviation="10" floodColor="#172033" floodOpacity="0.13" />
            </filter>
          </defs>

          <rect className="mvcc-bg" x="24" y="24" width="1072" height="568" rx="28" />
          <text className="mvcc-title" x="560" y="70">
            {readLocalizedText(simulation.title, locale)}
          </text>
          <text className="mvcc-subtitle" x="560" y="100">
            {label(
              "clustered record -> DB_ROLL_PTR -> undo chain -> ReadView -> visible version",
              "clustered record -> DB_ROLL_PTR -> undo chain -> ReadView -> visible version",
            )}
          </text>

          <g className={`mvcc-timeline ${writeActive ? "active" : ""}`}>
            <rect x="62" y="134" width="410" height="94" rx="24" />
            <text className="mvcc-panel-title" x="90" y="170">{label("事务时间线", "Transaction timeline")}</text>
            <line className="mvcc-timeline-axis" x1="100" y1="196" x2="434" y2="196" />
            {timelineEvents.map((event) => (
              <g key={event.id} className={`mvcc-timeline-event ${event.tone} ${event.active ? "active" : ""}`}>
                <circle cx={event.x} cy="196" r="10" />
                <text x={event.x} y="178">{event.id}</text>
                <text x={event.x} y="218">{event.text}</text>
              </g>
            ))}
          </g>

          <g className={`mvcc-clustered-record ${writeActive ? "active" : ""}`}>
            <rect x="72" y="272" width="266" height="164" rx="24" />
            <text className="mvcc-panel-title" x="100" y="310">{label("聚簇记录", "Clustered record")}</text>
            <text className="mvcc-panel-subtitle" x="100" y="334">orders#42 current row</text>
            {[
              ["id", "42"],
              ["amount", writeActive ? "140" : "100"],
              ["DB_TRX_ID", writeActive ? "20" : "12"],
              ["DB_ROLL_PTR", writeActive ? "undo#19" : "null"],
            ].map(([name, value], index) => (
              <g key={name} className={`mvcc-record-row ${writeActive || index < 2 ? "active" : ""}`}>
                <rect x="100" y={354 + index * 26} width="198" height="20" rx="10" />
                <text x="114" y={368 + index * 26}>{name}</text>
                <text x="286" y={368 + index * 26}>{value}</text>
              </g>
            ))}
          </g>

          <g className={`mvcc-record-to-version ${writeActive ? "active" : ""}`}>
            <path d="M 338 354 C 366 300, 386 236, 438 214" markerEnd="url(#mvcc-arrow-danger)" />
            <rect x="338" y="252" width="130" height="32" rx="16" />
            <text x="403" y="273">current</text>
          </g>

          <g className="mvcc-version-panel">
            <rect x="386" y="128" width="276" height="404" rx="28" />
            <text className="mvcc-panel-title" x="414" y="166">{label("版本链", "Version chain")}</text>
            <text className="mvcc-panel-subtitle" x="414" y="188">DB_ROLL_PTR follows undo records</text>
            {versions.map((version) => (
              <g key={version.id} className={`mvcc-version-node ${version.tone} ${version.active ? "active" : ""}`}>
                <rect x={version.x} y={version.y} width="172" height="82" rx="18" />
                <text className="mvcc-version-id" x={version.x + 22} y={version.y + 24}>{version.id}</text>
                <text x={version.x + 22} y={version.y + 44}>{version.trx}</text>
                <text x={version.x + 22} y={version.y + 60}>{version.value}</text>
                <text x={version.x + 156} y={version.y + 24}>{version.note}</text>
              </g>
            ))}
            <g className={`mvcc-undo-link ${undoActive ? "active" : ""}`}>
              <path d="M 524 246 C 524 264, 524 278, 524 300" markerEnd="url(#mvcc-arrow-teal)" />
              <path d="M 524 382 C 524 400, 524 414, 524 436" markerEnd="url(#mvcc-arrow-teal)" />
            </g>
          </g>

          <g className={`mvcc-readview-panel ${readViewActive ? "active" : ""}`}>
            <rect x="704" y="126" width="330" height="218" rx="28" />
            <text className="mvcc-panel-title" x="732" y="164">ReadView</text>
            <text className="mvcc-panel-subtitle" x="732" y="186">
              {label("快照边界在首次一致性读创建", "Snapshot bounds created at first consistent read")}
            </text>
            {readViewRows.map((row, index) => (
              <g key={row.name} className={`mvcc-readview-row ${row.tone} ${row.active ? "active" : ""}`}>
                <rect x="732" y={210 + index * 30} width="250" height="22" rx="11" />
                <text x="748" y={225 + index * 30}>{row.name}</text>
                <text x="964" y={225 + index * 30}>{row.value}</text>
              </g>
            ))}
          </g>

          <g className={`mvcc-snapshot-path ${readViewActive ? "active" : ""}`}>
            <path d="M 220 228 C 384 104, 616 102, 732 208" markerEnd="url(#mvcc-arrow-warning)" />
            <rect x="504" y="116" width="160" height="32" rx="16" />
            <text x="584" y="137">snapshot read</text>
          </g>

          <g className={`mvcc-visibility-panel ${visibleActive ? "active" : ""}`}>
            <rect x="704" y="374" width="330" height="158" rx="28" />
            <text className="mvcc-panel-title" x="732" y="412">{label("可见性判断", "Visibility rules")}</text>
            {ruleRows.map((row, index) => (
              <g key={row.version} className={`mvcc-rule-row ${row.tone} ${row.active ? "active" : ""}`}>
                <rect x="732" y={432 + index * 30} width="250" height="22" rx="11" />
                <text x="746" y={447 + index * 30}>{row.version}</text>
                <text x="798" y={447 + index * 30}>{row.rule}</text>
                <text x="968" y={447 + index * 30}>{row.result}</text>
              </g>
            ))}
          </g>

          <g className={`mvcc-visible-path ${visibleActive ? "active" : ""}`}>
            <path d="M 704 464 C 666 480, 638 486, 610 486" markerEnd="url(#mvcc-arrow-success)" />
            <rect x="604" y="536" width="178" height="34" rx="17" />
            <text x="693" y="558">{label("返回 v12: amount=100", "return v12: amount=100")}</text>
          </g>

          <g className={`mvcc-purge-panel ${purgeActive ? "active" : ""}`}>
            <rect x="64" y="474" width="300" height="80" rx="24" />
            <text className="mvcc-panel-title" x="92" y="510">Purge</text>
            <text className="mvcc-panel-subtitle" x="92" y="534">
              {label("长事务保留旧版本，history list 增长", "Long transaction retains old versions; history list grows")}
            </text>
          </g>

          <g className={`mvcc-purge-path ${purgeActive ? "active" : ""}`}>
            <path d="M 438 477 C 382 492, 374 512, 364 516" markerEnd="url(#mvcc-arrow-danger)" />
          </g>

          <g className="mvcc-signals">
            {signalRows.map((signal, index) => (
              <g key={signal.name} className={`mvcc-signal ${signal.active ? "active" : ""}`}>
                <rect x={70 + index * 252} y="560" width="210" height="34" rx="16" />
                <text x={90 + index * 252} y="574">{signal.name}</text>
                <text x={260 + index * 252} y="586">{signal.value}</text>
              </g>
            ))}
          </g>
        </svg>
        <div className="mvcc-mobile-map">
          <div className="mvcc-mobile-flow" aria-hidden="true">
            {[
              { name: "Clustered record", value: writeActive ? "DB_TRX_ID=20, DB_ROLL_PTR=undo#19" : "waiting", active: writeActive },
              { name: "Undo chain", value: undoActive ? "v20 -> v19 -> v12" : "waiting", active: undoActive },
              { name: "ReadView", value: readViewActive ? "creator=17, m_ids=[17], low_limit=18" : "waiting", active: readViewActive },
              { name: "Visible version", value: visibleActive ? "v12 amount=100" : "waiting", active: visibleActive },
              { name: "Purge", value: purgeActive ? "history list grows while T17 stays open" : "stable", active: purgeActive },
            ].map((item) => (
              <div key={item.name} className={`mvcc-mobile-hop ${item.active ? "active" : ""}`}>
                <span>{item.name}</span>
                <strong>{item.value}</strong>
              </div>
            ))}
          </div>
          <div className="mvcc-mobile-facts">
            {signalRows.map((signal) => (
              <div key={signal.name} className={`mvcc-mobile-fact ${signal.active ? "active" : ""}`}>
                <span>{signal.name}</span>
                <strong>{signal.value}</strong>
              </div>
            ))}
          </div>
        </div>
        <div className="tcp-handshake-caption mvcc-caption">
          <strong>{readLocalizedText(activeStep.title, locale)}</strong>
          <span>{completedSteps}/{simulation.steps.length}</span>
        </div>
      </div>
    </div>
  );
}

function RedoLogStage({
  simulation,
  locale,
  completedSteps,
  activeStepIndex,
}: {
  simulation: VisualSimulation;
  locale: Locale;
  completedSteps: number;
  activeStepIndex: number;
}) {
  const activeStep = simulation.steps[activeStepIndex];
  const label = (zh: string, en: string) => (locale === "zh" ? zh : en);
  const recordActive = completedSteps >= 1;
  const lsnActive = completedSteps >= 2;
  const flushActive = completedSteps >= 3;
  const checkpointActive = completedSteps >= 4;
  const recoveryActive = completedSteps >= 5;
  const logBufferBlocks = [
    { id: "blk#421", lsn: "8400", x: 432, active: lsnActive, tone: "brand" },
    { id: "blk#422", lsn: "8480", x: 526, active: lsnActive, tone: "teal" },
    { id: "blk#423", lsn: "8540", x: 620, active: flushActive, tone: "warning" },
  ];
  const redoFileSegments = [
    { label: "reusable", x: 502, width: 116, active: checkpointActive, tone: "success" },
    { label: "checkpoint", x: 622, width: 126, active: checkpointActive, tone: "brand" },
    { label: "active redo", x: 752, width: 176, active: flushActive, tone: "danger" },
  ];
  const signalRows = [
    { name: "current_lsn", value: recoveryActive ? "8540" : lsnActive ? "8540" : "8390", active: lsnActive },
    { name: "write_lsn", value: flushActive ? "8540" : "8400", active: flushActive },
    { name: "flushed_lsn", value: flushActive ? "8540" : "8390", active: flushActive },
    { name: "checkpoint_age", value: checkpointActive ? "60" : "340", active: checkpointActive },
  ];
  const mobileFlow = [
    { name: "UPDATE + dirty page", value: recordActive ? "P42 diff captured" : "waiting", active: recordActive },
    { name: "Mini-transaction", value: lsnActive ? "LSN 8400-8540 reserved" : "pending", active: lsnActive },
    { name: "Log writer / flusher", value: flushActive ? "write_lsn=flushed_lsn=8540" : "idle", active: flushActive },
    { name: "Checkpoint", value: checkpointActive ? "checkpoint_lsn -> 8480" : "stable", active: checkpointActive },
    { name: "Crash recovery", value: recoveryActive ? "redo after checkpoint replays P42" : "ready", active: recoveryActive },
  ];

  return (
    <div className="visual-stage redo-log-stage">
      <div className="redo-log-card">
        <svg
          className="redo-log-diagram"
          viewBox="0 0 1120 640"
          role="img"
          aria-label={readLocalizedText(simulation.title, locale)}
        >
          <defs>
            {[
              ["redo-arrow-brand", "var(--brand)"],
              ["redo-arrow-teal", "var(--tertiary)"],
              ["redo-arrow-warning", "#f59e0b"],
              ["redo-arrow-danger", "var(--danger)"],
              ["redo-arrow-success", "var(--success)"],
            ].map(([id, fill]) => (
              <marker
                key={id}
                id={id}
                viewBox="0 0 10 10"
                refX="8.5"
                refY="5"
                markerWidth="8"
                markerHeight="8"
                orient="auto"
              >
                <path d="M 0 0 L 10 5 L 0 10 z" fill={fill} />
              </marker>
            ))}
            <filter id="redo-soft-shadow" x="-20%" y="-30%" width="140%" height="160%">
              <feDropShadow dx="0" dy="10" stdDeviation="10" floodColor="#172033" floodOpacity="0.13" />
            </filter>
          </defs>

          <rect className="redo-bg" x="24" y="24" width="1072" height="568" rx="28" />
          <text className="redo-title" x="560" y="70">
            {readLocalizedText(simulation.title, locale)}
          </text>
          <text className="redo-subtitle" x="560" y="100">
            {label(
              "dirty page -> mini-transaction -> log buffer -> write/fsync -> checkpoint -> crash recovery",
              "dirty page -> mini-transaction -> log buffer -> write/fsync -> checkpoint -> crash recovery",
            )}
          </text>

          <g className={`redo-transaction-panel ${recordActive ? "active" : ""}`}>
            <rect x="62" y="140" width="250" height="168" rx="24" />
            <text className="redo-panel-title" x="90" y="176">{label("写事务", "Write transaction")}</text>
            <text className="redo-panel-subtitle" x="90" y="200">UPDATE orders SET amount=140</text>
            <g className={`redo-page-card ${recordActive ? "active" : ""}`}>
              <rect x="90" y="224" width="188" height="52" rx="16" />
              <text x="108" y="246">Buffer Pool P42</text>
              <text x="262" y="264">{recordActive ? "dirty" : "clean"}</text>
            </g>
          </g>

          <g className={`redo-mtr-panel ${recordActive ? "active" : ""}`}>
            <rect x="350" y="130" width="300" height="192" rx="26" />
            <text className="redo-panel-title" x="378" y="166">Mini-transaction</text>
            <text className="redo-panel-subtitle" x="378" y="190">{label("把页内修改编码成 redo records", "Encodes page changes into redo records")}</text>
            {[
              ["space_id=7", "page_no=42"],
              ["offset=0x1c8", "field amount"],
              ["before=120", "after=140"],
            ].map(([left, right], index) => (
              <g key={left} className={`redo-record-row ${recordActive ? "active" : ""}`}>
                <rect x="378" y={214 + index * 32} width="228" height="24" rx="12" />
                <text x="394" y={231 + index * 32}>{left}</text>
                <text x="590" y={231 + index * 32}>{right}</text>
              </g>
            ))}
          </g>

          <g className={`redo-record-path ${recordActive ? "active" : ""}`}>
            <path d="M 312 224 C 330 224, 330 224, 350 224" markerEnd="url(#redo-arrow-brand)" />
            <rect x="226" y="326" width="150" height="34" rx="17" />
            <text x="301" y="348">{label("先写日志意图", "record intent first")}</text>
          </g>

          <g className={`redo-buffer-panel ${lsnActive ? "active" : ""}`}>
            <rect x="392" y="376" width="330" height="120" rx="26" />
            <text className="redo-panel-title" x="420" y="414">Log Buffer</text>
            <text className="redo-panel-subtitle" x="420" y="438">mtr_commit reserves LSN range</text>
            {logBufferBlocks.map((block) => (
              <g key={block.id} className={`redo-log-block ${block.tone} ${block.active ? "active" : ""}`}>
                <rect x={block.x} y="456" width="78" height="46" rx="14" />
                <text x={block.x + 39} y="475">{block.id}</text>
                <text x={block.x + 39} y="493">LSN {block.lsn}</text>
              </g>
            ))}
          </g>

          <g className={`redo-lsn-path ${lsnActive ? "active" : ""}`}>
            <path d="M 500 322 C 500 346, 510 358, 528 376" markerEnd="url(#redo-arrow-teal)" />
            <rect x="526" y="334" width="158" height="34" rx="17" />
            <text x="605" y="356">LSN 8400-8540</text>
          </g>

          <g className={`redo-files-panel ${flushActive ? "active" : ""}`}>
            <rect x="770" y="138" width="286" height="218" rx="28" />
            <text className="redo-panel-title" x="798" y="176">#innodb_redo</text>
            <text className="redo-panel-subtitle" x="798" y="200">write_lsn / flushed_to_disk_lsn</text>
            <g className={`redo-file-stack ${flushActive ? "active" : ""}`}>
              <rect x="798" y="224" width="212" height="48" rx="16" />
              <text x="818" y="246">#ib_redo42</text>
              <text x="994" y="264">active</text>
              <rect x="798" y="282" width="212" height="48" rx="16" />
              <text x="818" y="304">#ib_redo43</text>
              <text x="994" y="322">{checkpointActive ? "reusable" : "pending"}</text>
            </g>
          </g>

          <g className={`redo-flush-path ${flushActive ? "active" : ""}`}>
            <path d="M 722 444 C 792 414, 812 328, 832 272" markerEnd="url(#redo-arrow-warning)" />
            <rect x="724" y="364" width="178" height="34" rx="17" />
            <text x="813" y="386">{label("write + fsync", "write + fsync")}</text>
          </g>

          <g className={`redo-checkpoint-panel ${checkpointActive ? "active" : ""}`}>
            <rect x="452" y="528" width="526" height="58" rx="24" />
            <text className="redo-panel-title" x="480" y="562">Checkpoint Ring</text>
            <line className="redo-ring-axis" x1="502" y1="548" x2="928" y2="548" />
            {redoFileSegments.map((segment) => (
              <g key={segment.label} className={`redo-ring-segment ${segment.tone} ${segment.active ? "active" : ""}`}>
                <rect x={segment.x} y="536" width={segment.width} height="24" rx="12" />
                <text x={segment.x + segment.width / 2} y="553">{segment.label}</text>
              </g>
            ))}
            <g className={`redo-checkpoint-pointer ${checkpointActive ? "active" : ""}`}>
              <path d="M 748 522 L 748 572" />
              <circle cx="748" cy="548" r="7" />
            </g>
          </g>

          <g className={`redo-checkpoint-path ${checkpointActive ? "active" : ""}`}>
            <path d="M 878 356 C 836 428, 814 478, 748 528" markerEnd="url(#redo-arrow-success)" />
            <rect x="802" y="474" width="168" height="34" rx="17" />
            <text x="886" y="496">{label("释放旧日志空间", "reclaim old redo")}</text>
          </g>

          <g className={`redo-recovery-panel ${recoveryActive ? "active" : ""}`}>
            <rect x="70" y="420" width="268" height="132" rx="26" />
            <text className="redo-panel-title" x="98" y="458">{label("崩溃恢复", "Crash recovery")}</text>
            <text className="redo-panel-subtitle" x="98" y="482">{label("从 checkpoint 后扫描 redo", "Scan redo after checkpoint")}</text>
            <g className={`redo-replay-chip ${recoveryActive ? "active" : ""}`}>
              <rect x="98" y="504" width="192" height="28" rx="14" />
              <text x="114" y="523">apply P42 amount=140</text>
            </g>
          </g>

          <g className={`redo-recovery-path ${recoveryActive ? "active" : ""}`}>
            <path d="M 748 560 C 526 604, 390 560, 292 506" markerEnd="url(#redo-arrow-danger)" />
            <rect x="348" y="554" width="154" height="34" rx="17" />
            <text x="425" y="576">{label("重放已刷日志", "replay flushed redo")}</text>
          </g>

          <g className="redo-signals">
            {signalRows.map((signal, index) => (
              <g key={signal.name} className={`redo-signal ${signal.active ? "active" : ""}`}>
                <rect x={68 + index * 250} y="588" width="210" height="34" rx="16" />
                <text x={88 + index * 250} y="602">{signal.name}</text>
                <text x={258 + index * 250} y="614">{signal.value}</text>
              </g>
            ))}
          </g>
        </svg>
        <div className="redo-log-mobile-map">
          <div className="redo-log-mobile-flow" aria-hidden="true">
            {mobileFlow.map((item) => (
              <div key={item.name} className={`redo-log-mobile-hop ${item.active ? "active" : ""}`}>
                <span>{item.name}</span>
                <strong>{item.value}</strong>
              </div>
            ))}
          </div>
          <div className="redo-log-mobile-facts">
            {signalRows.map((signal) => (
              <div key={signal.name} className={`redo-log-mobile-fact ${signal.active ? "active" : ""}`}>
                <span>{signal.name}</span>
                <strong>{signal.value}</strong>
              </div>
            ))}
          </div>
        </div>
        <div className="tcp-handshake-caption redo-log-caption">
          <strong>{readLocalizedText(activeStep.title, locale)}</strong>
          <span>{completedSteps}/{simulation.steps.length}</span>
        </div>
      </div>
    </div>
  );
}

function UndoLogStage({
  simulation,
  locale,
  completedSteps,
  activeStepIndex,
}: {
  simulation: VisualSimulation;
  locale: Locale;
  completedSteps: number;
  activeStepIndex: number;
}) {
  const activeStep = simulation.steps[activeStepIndex];
  const label = (zh: string, en: string) => (locale === "zh" ? zh : en);
  const slotActive = completedSteps >= 1;
  const beforeImageActive = completedSteps >= 2;
  const chainActive = completedSteps >= 3;
  const rollbackActive = completedSteps >= 4;
  const purgeActive = completedSteps >= 5;
  const undoRecords = [
    { id: "undo#42", value: "amount=100", trx: "prev trx=31", y: 220, active: beforeImageActive, tone: "teal" },
    { id: "undo#31", value: "amount=80", trx: "prev trx=20", y: 318, active: chainActive, tone: "warning" },
    { id: "undo#20", value: "insert mark", trx: "base image", y: 416, active: chainActive, tone: "brand" },
  ];
  const slotRows = [
    { name: "undo tablespace", value: "undo_001", active: slotActive, tone: "brand" },
    { name: "rollback segment", value: "rseg#12", active: slotActive, tone: "teal" },
    { name: "undo slot", value: slotActive ? "#088 owned" : "#088 free", active: slotActive, tone: "warning" },
    { name: "operation log", value: "UPDATE/DELETE", active: beforeImageActive, tone: "danger" },
  ];
  const signalRows = [
    { name: "trx age", value: purgeActive ? "12m open" : slotActive ? "T42 active" : "idle", active: slotActive },
    { name: "undo entries", value: chainActive ? "3 records" : beforeImageActive ? "1 record" : "0", active: beforeImageActive },
    { name: "history list", value: purgeActive ? "3280 -> 42" : chainActive ? "growing" : "stable", active: chainActive },
    { name: "purge state", value: purgeActive ? "unlinking" : "waiting", active: purgeActive },
  ];
  const mobileFlow = [
    { name: "Transaction", value: slotActive ? "T42 uses rseg#12 slot#088" : "waiting", active: slotActive },
    { name: "Clustered row", value: beforeImageActive ? "amount=140, DB_ROLL_PTR=undo#42" : "amount=100", active: beforeImageActive },
    { name: "Undo chain", value: chainActive ? "undo#42 -> undo#31 -> undo#20" : "empty", active: chainActive },
    { name: "Rollback / ReadView", value: rollbackActive ? "restores or reads amount=100" : "pending", active: rollbackActive },
    { name: "Purge", value: purgeActive ? "history list reclaimed" : "blocked by active snapshots", active: purgeActive },
  ];

  return (
    <div className="visual-stage undo-log-stage">
      <div className="undo-log-card">
        <svg
          className="undo-log-diagram"
          viewBox="0 0 1120 640"
          role="img"
          aria-label={readLocalizedText(simulation.title, locale)}
        >
          <defs>
            {[
              ["undo-arrow-brand", "var(--brand)"],
              ["undo-arrow-teal", "var(--tertiary)"],
              ["undo-arrow-warning", "#f59e0b"],
              ["undo-arrow-danger", "var(--danger)"],
              ["undo-arrow-success", "var(--success)"],
            ].map(([id, fill]) => (
              <marker
                key={id}
                id={id}
                viewBox="0 0 10 10"
                refX="8.5"
                refY="5"
                markerWidth="8"
                markerHeight="8"
                orient="auto"
              >
                <path d="M 0 0 L 10 5 L 0 10 z" fill={fill} />
              </marker>
            ))}
            <filter id="undo-soft-shadow" x="-20%" y="-30%" width="140%" height="160%">
              <feDropShadow dx="0" dy="10" stdDeviation="10" floodColor="#172033" floodOpacity="0.13" />
            </filter>
          </defs>

          <rect className="undo-bg" x="24" y="24" width="1072" height="568" rx="28" />
          <text className="undo-title" x="560" y="70">
            {readLocalizedText(simulation.title, locale)}
          </text>
          <text className="undo-subtitle" x="560" y="100">
            {label(
              "transaction -> rollback segment -> undo slot -> before image chain -> ReadView / rollback -> purge",
              "transaction -> rollback segment -> undo slot -> before image chain -> ReadView / rollback -> purge",
            )}
          </text>

          <g className={`undo-tx-panel ${slotActive ? "active" : ""}`}>
            <rect x="62" y="138" width="254" height="164" rx="24" />
            <text className="undo-panel-title" x="90" y="174">{label("读写事务 T42", "Read-write transaction T42")}</text>
            <text className="undo-panel-subtitle" x="90" y="198">UPDATE orders SET amount=140</text>
            <g className={`undo-sql-card ${slotActive ? "active" : ""}`}>
              <rect x="90" y="224" width="186" height="48" rx="16" />
              <text x="108" y="246">trx_id=42</text>
              <text x="262" y="264">{slotActive ? "active" : "idle"}</text>
            </g>
          </g>

          <g className={`undo-segment-panel ${slotActive ? "active" : ""}`}>
            <rect x="362" y="126" width="282" height="204" rx="26" />
            <text className="undo-panel-title" x="390" y="162">Rollback Segment</text>
            <text className="undo-panel-subtitle" x="390" y="186">undo tablespace / undo slot</text>
            {slotRows.map((row, index) => (
              <g key={row.name} className={`undo-slot-row ${row.tone} ${row.active ? "active" : ""}`}>
                <rect x="390" y={210 + index * 30} width="218" height="22" rx="11" />
                <text x="406" y={225 + index * 30}>{row.name}</text>
                <text x="592" y={225 + index * 30}>{row.value}</text>
              </g>
            ))}
          </g>

          <g className={`undo-slot-path ${slotActive ? "active" : ""}`}>
            <path d="M 316 230 C 336 226, 348 226, 362 226" markerEnd="url(#undo-arrow-brand)" />
            <rect x="254" y="326" width="170" height="34" rx="17" />
            <text x="339" y="348">{label("分配 slot#088", "allocate slot#088")}</text>
          </g>

          <g className={`undo-record-panel ${beforeImageActive ? "active" : ""}`}>
            <rect x="86" y="384" width="286" height="144" rx="26" />
            <text className="undo-panel-title" x="114" y="422">{label("聚簇记录 orders#42", "Clustered record orders#42")}</text>
            <text className="undo-panel-subtitle" x="114" y="446">{label("隐藏列连接历史链", "Hidden columns connect the history chain")}</text>
            {[
              ["amount", beforeImageActive ? "140" : "100"],
              ["DB_TRX_ID", beforeImageActive ? "42" : "31"],
              ["DB_ROLL_PTR", chainActive ? "undo#42" : beforeImageActive ? "undo#42" : "null"],
            ].map(([name, value], index) => (
              <g key={name} className={`undo-record-row ${beforeImageActive ? "active" : ""}`}>
                <rect x="114" y={466 + index * 26} width="202" height="20" rx="10" />
                <text x="128" y={480 + index * 26}>{name}</text>
                <text x="302" y={480 + index * 26}>{value}</text>
              </g>
            ))}
          </g>

          <g className={`undo-before-path ${beforeImageActive ? "active" : ""}`}>
            <path d="M 474 330 C 426 380, 382 422, 316 466" markerEnd="url(#undo-arrow-teal)" />
            <rect x="374" y="354" width="176" height="34" rx="17" />
            <text x="462" y="376">{label("写 before image", "write before image")}</text>
          </g>

          <g className={`undo-chain-panel ${beforeImageActive ? "active" : ""}`}>
            <rect x="462" y="376" width="270" height="176" rx="28" />
            <text className="undo-panel-title" x="490" y="412">{label("Undo 记录链", "Undo record chain")}</text>
            <text className="undo-panel-subtitle" x="490" y="434">before image + prev undo pointer</text>
            {undoRecords.map((record) => (
              <g key={record.id} className={`undo-version-node ${record.tone} ${record.active ? "active" : ""}`}>
                <rect x="506" y={record.y} width="164" height="64" rx="16" />
                <text className="undo-version-id" x="526" y={record.y + 23}>{record.id}</text>
                <text x="526" y={record.y + 42}>{record.value}</text>
                <text x="654" y={record.y + 58}>{record.trx}</text>
              </g>
            ))}
            <g className={`undo-chain-link ${chainActive ? "active" : ""}`}>
              <path d="M 588 284 C 588 298, 588 304, 588 318" markerEnd="url(#undo-arrow-warning)" />
              <path d="M 588 382 C 588 396, 588 402, 588 416" markerEnd="url(#undo-arrow-warning)" />
            </g>
          </g>

          <g className={`undo-rollptr-path ${chainActive ? "active" : ""}`}>
            <path d="M 316 518 C 382 542, 462 520, 506 474" markerEnd="url(#undo-arrow-warning)" />
            <rect x="318" y="552" width="188" height="34" rx="17" />
            <text x="412" y="574">DB_ROLL_PTR {"->"} undo#42</text>
          </g>

          <g className={`undo-readview-panel ${rollbackActive ? "active" : ""}`}>
            <rect x="780" y="138" width="272" height="166" rx="26" />
            <text className="undo-panel-title" x="808" y="174">{label("回滚 / 快照读", "Rollback / snapshot read")}</text>
            <text className="undo-panel-subtitle" x="808" y="198">{label("沿 undo 链恢复或读旧版本", "Follow undo chain to restore or read old versions")}</text>
            <g className={`undo-readview-chip ${rollbackActive ? "active" : ""}`}>
              <rect x="808" y="224" width="190" height="30" rx="15" />
              <text x="824" y="244">ROLLBACK: amount=100</text>
            </g>
            <g className={`undo-readview-chip success ${rollbackActive ? "active" : ""}`}>
              <rect x="808" y="262" width="190" height="30" rx="15" />
              <text x="824" y="282">ReadView sees v31</text>
            </g>
          </g>

          <g className={`undo-read-path ${rollbackActive ? "active" : ""}`}>
            <path d="M 670 252 C 722 216, 746 212, 808 238" markerEnd="url(#undo-arrow-success)" />
            <path d="M 670 352 C 728 360, 768 338, 808 282" markerEnd="url(#undo-arrow-success)" />
          </g>

          <g className={`undo-history-panel ${purgeActive ? "active" : ""}`}>
            <rect x="788" y="370" width="264" height="156" rx="28" />
            <text className="undo-panel-title" x="816" y="408">History List / Purge</text>
            <text className="undo-panel-subtitle" x="816" y="432">{label("ReadView 释放后 unlink 历史版本", "Unlink history after ReadViews close")}</text>
            <g className={`undo-history-bar ${purgeActive ? "active" : ""}`}>
              <rect x="816" y="458" width="188" height="22" rx="11" />
              <rect x="816" y="458" width={purgeActive ? "42" : "150"} height="22" rx="11" />
              <text x="910" y="474">{purgeActive ? "42" : "3280"}</text>
            </g>
            <g className={`undo-purge-chip ${purgeActive ? "active" : ""}`}>
              <rect x="816" y="492" width="182" height="28" rx="14" />
              <text x="832" y="511">purge worker unlinking</text>
            </g>
          </g>

          <g className={`undo-purge-path ${purgeActive ? "active" : ""}`}>
            <path d="M 670 448 C 734 444, 760 448, 816 468" markerEnd="url(#undo-arrow-danger)" />
          </g>

          <g className="undo-signals">
            {signalRows.map((signal, index) => (
              <g key={signal.name} className={`undo-signal ${signal.active ? "active" : ""}`}>
                <rect x={66 + index * 252} y="588" width="210" height="34" rx="16" />
                <text x={86 + index * 252} y="602">{signal.name}</text>
                <text x={256 + index * 252} y="614">{signal.value}</text>
              </g>
            ))}
          </g>
        </svg>
        <div className="undo-log-mobile-map">
          <div className="undo-log-mobile-flow" aria-hidden="true">
            {mobileFlow.map((item) => (
              <div key={item.name} className={`undo-log-mobile-hop ${item.active ? "active" : ""}`}>
                <span>{item.name}</span>
                <strong>{item.value}</strong>
              </div>
            ))}
          </div>
          <div className="undo-log-mobile-facts">
            {signalRows.map((signal) => (
              <div key={signal.name} className={`undo-log-mobile-fact ${signal.active ? "active" : ""}`}>
                <span>{signal.name}</span>
                <strong>{signal.value}</strong>
              </div>
            ))}
          </div>
        </div>
        <div className="tcp-handshake-caption undo-log-caption">
          <strong>{readLocalizedText(activeStep.title, locale)}</strong>
          <span>{completedSteps}/{simulation.steps.length}</span>
        </div>
      </div>
    </div>
  );
}

function BinlogStage({
  simulation,
  locale,
  completedSteps,
  activeStepIndex,
}: {
  simulation: VisualSimulation;
  locale: Locale;
  completedSteps: number;
  activeStepIndex: number;
}) {
  const activeStep = simulation.steps[activeStepIndex];
  const label = (zh: string, en: string) => (locale === "zh" ? zh : en);
  const executeActive = completedSteps >= 1;
  const eventActive = completedSteps >= 2;
  const commitActive = completedSteps >= 3;
  const streamActive = completedSteps >= 4;
  const applyActive = completedSteps >= 5;
  const eventRows = [
    { name: "GTID_LOG_EVENT", value: "uuid:42", active: eventActive, tone: "brand" },
    { name: "TABLE_MAP_EVENT", value: "orders", active: eventActive, tone: "teal" },
    { name: "UPDATE_ROWS_EVENT", value: "amount 120 -> 140", active: eventActive, tone: "warning" },
    { name: "XID_EVENT", value: "commit T42", active: commitActive, tone: "success" },
  ];
  const commitRows = [
    { name: "flush", active: commitActive },
    { name: "sync", active: commitActive },
    { name: "commit", active: commitActive },
  ];
  const signalRows = [
    { name: "Source file/pos", value: eventActive ? "mysql-bin.000142:328" : "mysql-bin.000142:154", active: eventActive },
    { name: "Retrieved GTID", value: streamActive ? "uuid:1-42" : "uuid:1-41", active: streamActive },
    { name: "Relay backlog", value: applyActive ? "0 events" : streamActive ? "4 events" : "idle", active: streamActive },
    { name: "Apply lag", value: applyActive ? "0s" : streamActive ? "2s" : "n/a", active: applyActive },
  ];
  const mobileFlow = [
    { name: "Client transaction", value: executeActive ? "T42 UPDATE orders" : "waiting", active: executeActive },
    { name: "Source binlog", value: eventActive ? "GTID + rows + Xid" : "open file", active: eventActive },
    { name: "Group commit", value: commitActive ? "flush -> sync -> commit" : "queued", active: commitActive },
    { name: "Relay log", value: streamActive ? "mysql-relay.000087:612" : "I/O idle", active: streamActive },
    { name: "Replica apply", value: applyActive ? "Executed_Gtid_Set includes T42" : "SQL thread pending", active: applyActive },
  ];

  return (
    <div className="visual-stage binlog-stage">
      <div className="binlog-card">
        <svg
          className="binlog-diagram"
          viewBox="0 0 1120 640"
          role="img"
          aria-label={readLocalizedText(simulation.title, locale)}
        >
          <defs>
            {[
              ["binlog-arrow-brand", "var(--brand)"],
              ["binlog-arrow-teal", "var(--tertiary)"],
              ["binlog-arrow-warning", "#f59e0b"],
              ["binlog-arrow-success", "var(--success)"],
            ].map(([id, fill]) => (
              <marker
                key={id}
                id={id}
                viewBox="0 0 10 10"
                refX="8.5"
                refY="5"
                markerWidth="8"
                markerHeight="8"
                orient="auto"
              >
                <path d="M 0 0 L 10 5 L 0 10 z" fill={fill} />
              </marker>
            ))}
            <filter id="binlog-soft-shadow" x="-20%" y="-30%" width="140%" height="160%">
              <feDropShadow dx="0" dy="10" stdDeviation="10" floodColor="#172033" floodOpacity="0.13" />
            </filter>
          </defs>

          <rect className="binlog-bg" x="24" y="24" width="1072" height="568" rx="28" />
          <text className="binlog-title" x="560" y="70">
            {readLocalizedText(simulation.title, locale)}
          </text>
          <text className="binlog-subtitle" x="560" y="100">
            {label(
              "source commit order -> binlog events -> group commit -> relay log -> replica apply",
              "source commit order -> binlog events -> group commit -> relay log -> replica apply",
            )}
          </text>

          <g className={`binlog-client-panel ${executeActive ? "active" : ""}`}>
            <rect x="64" y="144" width="222" height="144" rx="24" />
            <text className="binlog-panel-title" x="92" y="180">{label("客户端事务", "Client transaction")}</text>
            <text className="binlog-panel-subtitle" x="92" y="204">UPDATE orders SET amount=140</text>
            <g className={`binlog-sql-chip ${executeActive ? "active" : ""}`}>
              <rect x="92" y="230" width="156" height="32" rx="16" />
              <text x="170" y="251">T42 COMMIT</text>
            </g>
          </g>

          <g className={`binlog-source-panel ${executeActive ? "active" : ""}`}>
            <rect x="344" y="126" width="304" height="190" rx="26" />
            <text className="binlog-panel-title" x="372" y="162">Source MySQL</text>
            <text className="binlog-panel-subtitle" x="372" y="186">{label("执行器修改行，提交阶段编码事件", "Executor changes rows, commit stage encodes events")}</text>
            <g className={`binlog-row-card ${executeActive ? "active" : ""}`}>
              <rect x="372" y="216" width="222" height="54" rx="16" />
              <text x="392" y="238">orders#42 amount</text>
              <text x="580" y="256">{executeActive ? "120 -> 140" : "120"}</text>
            </g>
          </g>

          <g className={`binlog-execute-path ${executeActive ? "active" : ""}`}>
            <path d="M 286 218 C 312 218, 318 218, 344 218" markerEnd="url(#binlog-arrow-brand)" />
            <rect x="238" y="328" width="160" height="34" rx="17" />
            <text x="318" y="350">{label("提交进入 source", "commit enters source")}</text>
          </g>

          <g className={`binlog-file-panel ${eventActive ? "active" : ""}`}>
            <rect x="718" y="122" width="330" height="224" rx="28" />
            <text className="binlog-panel-title" x="746" y="160">mysql-bin.000142</text>
            <text className="binlog-panel-subtitle" x="746" y="184">{"file position 154 -> 328"}</text>
            {eventRows.map((row, index) => (
              <g key={row.name} className={`binlog-event-row ${row.tone} ${row.active ? "active" : ""}`}>
                <rect x="746" y={210 + index * 32} width="244" height="24" rx="12" />
                <text x="762" y={227 + index * 32}>{row.name}</text>
                <text x="974" y={227 + index * 32}>{row.value}</text>
              </g>
            ))}
          </g>

          <g className={`binlog-event-path ${eventActive ? "active" : ""}`}>
            <path d="M 648 218 C 680 212, 696 214, 718 224" markerEnd="url(#binlog-arrow-teal)" />
            <rect x="612" y="324" width="178" height="34" rx="17" />
            <text x="701" y="346">GTID + Rows + Xid</text>
          </g>

          <g className={`binlog-commit-panel ${commitActive ? "active" : ""}`}>
            <rect x="382" y="390" width="280" height="128" rx="26" />
            <text className="binlog-panel-title" x="410" y="428">Binlog Group Commit</text>
            <text className="binlog-panel-subtitle" x="410" y="450">ordered queues keep commit order</text>
            {commitRows.map((row, index) => (
              <g key={row.name} className={`binlog-commit-row ${row.active ? "active" : ""}`}>
                <rect x={410 + index * 78} y="472" width="64" height="28" rx="14" />
                <text x={442 + index * 78} y="490">{row.name}</text>
              </g>
            ))}
          </g>

          <g className={`binlog-commit-path ${commitActive ? "active" : ""}`}>
            <path d="M 842 346 C 792 396, 726 432, 662 456" markerEnd="url(#binlog-arrow-warning)" />
            <rect x="674" y="408" width="160" height="34" rx="17" />
            <text x="754" y="430">{label("刷盘确认顺序", "fsync seals order")}</text>
          </g>

          <g className={`binlog-channel-panel ${streamActive ? "active" : ""}`}>
            <rect x="704" y="410" width="330" height="120" rx="26" />
            <text className="binlog-panel-title" x="732" y="448">{label("复制通道 / Relay Log", "Replication channel / relay log")}</text>
            <text className="binlog-panel-subtitle" x="732" y="472">I/O thread writes mysql-relay.000087</text>
            <g className={`binlog-relay-chip ${streamActive ? "active" : ""}`}>
              <rect x="732" y="492" width="214" height="28" rx="14" />
              <text x="748" y="511">relay pos=612, ACK={streamActive ? "sent" : "waiting"}</text>
            </g>
          </g>

          <g className={`binlog-stream-path ${streamActive ? "active" : ""}`}>
            <path d="M 884 346 C 910 372, 910 392, 878 410" markerEnd="url(#binlog-arrow-brand)" />
            <rect x="912" y="360" width="112" height="34" rx="17" />
            <text x="968" y="382">{label("拉取事件", "pull events")}</text>
          </g>

          <g className={`binlog-replica-panel ${applyActive ? "active" : ""}`}>
            <rect x="82" y="406" width="246" height="132" rx="26" />
            <text className="binlog-panel-title" x="110" y="444">{label("Replica SQL 线程", "Replica SQL thread")}</text>
            <text className="binlog-panel-subtitle" x="110" y="468">{label("按 relay log 顺序应用", "Applies relay log in order")}</text>
            <g className={`binlog-apply-chip ${applyActive ? "active" : ""}`}>
              <rect x="110" y="492" width="172" height="30" rx="15" />
              <text x="126" y="512">Executed_Gtid_Set += T42</text>
            </g>
          </g>

          <g className={`binlog-apply-path ${applyActive ? "active" : ""}`}>
            <path d="M 704 486 C 568 590, 420 568, 282 508" markerEnd="url(#binlog-arrow-success)" />
            <rect x="402" y="548" width="158" height="34" rx="17" />
            <text x="481" y="570">{label("重放事务", "apply transaction")}</text>
          </g>

          <g className="binlog-signals">
            {signalRows.map((signal, index) => (
              <g key={signal.name} className={`binlog-signal ${signal.active ? "active" : ""}`}>
                <rect x={66 + index * 252} y="588" width="210" height="34" rx="16" />
                <text x={86 + index * 252} y="602">{signal.name}</text>
                <text x={256 + index * 252} y="614">{signal.value}</text>
              </g>
            ))}
          </g>
        </svg>
        <div className="binlog-mobile-map">
          <div className="binlog-mobile-flow" aria-hidden="true">
            {mobileFlow.map((item) => (
              <div key={item.name} className={`binlog-mobile-hop ${item.active ? "active" : ""}`}>
                <span>{item.name}</span>
                <strong>{item.value}</strong>
              </div>
            ))}
          </div>
          <div className="binlog-mobile-facts">
            {signalRows.map((signal) => (
              <div key={signal.name} className={`binlog-mobile-fact ${signal.active ? "active" : ""}`}>
                <span>{signal.name}</span>
                <strong>{signal.value}</strong>
              </div>
            ))}
          </div>
        </div>
        <div className="tcp-handshake-caption binlog-caption">
          <strong>{readLocalizedText(activeStep.title, locale)}</strong>
          <span>{completedSteps}/{simulation.steps.length}</span>
        </div>
      </div>
    </div>
  );
}

function ReplicationStage({
  simulation,
  locale,
  completedSteps,
  activeStepIndex,
}: {
  simulation: VisualSimulation;
  locale: Locale;
  completedSteps: number;
  activeStepIndex: number;
}) {
  const activeStep = simulation.steps[activeStepIndex];
  const label = (zh: string, en: string) => (locale === "zh" ? zh : en);
  const commitActive = completedSteps >= 1;
  const dumpActive = completedSteps >= 2;
  const relayActive = completedSteps >= 3;
  const applyActive = completedSteps >= 4;
  const caughtUpActive = completedSteps >= 5;
  const eventRows = [
    { name: "GTID_LOG_EVENT", value: "uuid:43", active: commitActive, tone: "brand" },
    { name: "TABLE_MAP_EVENT", value: "orders", active: dumpActive, tone: "teal" },
    { name: "UPDATE_ROWS_EVENT", value: "status shipped", active: dumpActive, tone: "warning" },
    { name: "XID_EVENT", value: "commit T43", active: relayActive, tone: "success" },
  ];
  const relayRows = [
    { name: "Receiver state", value: relayActive ? "Queueing events" : "Waiting", active: relayActive },
    { name: "Relay file", value: relayActive ? "mysql-relay.000091" : "empty", active: relayActive },
    { name: "Relay pos", value: relayActive ? "1218" : "0", active: relayActive },
  ];
  const workerRows = [
    { name: "Coordinator", value: applyActive ? "dispatch uuid:43" : "idle", active: applyActive },
    { name: "worker#1", value: caughtUpActive ? "commit ok" : applyActive ? "applying" : "idle", active: applyActive },
    { name: "worker#2", value: applyActive ? "dependency wait" : "idle", active: applyActive },
  ];
  const signalRows = [
    { name: "Retrieved GTID", value: relayActive ? "uuid:1-43" : dumpActive ? "uuid:1-42" : "uuid:1-41", active: dumpActive },
    { name: "Executed GTID", value: caughtUpActive ? "uuid:1-43" : applyActive ? "uuid:1-42" : "uuid:1-41", active: applyActive },
    { name: "Relay backlog", value: caughtUpActive ? "0 events" : relayActive ? "3 events" : "idle", active: relayActive },
    { name: "Seconds behind", value: caughtUpActive ? "0s" : relayActive ? "4s" : "n/a", active: caughtUpActive },
  ];
  const mobileFlow = [
    { name: "Source commit", value: commitActive ? "GTID uuid:43" : "waiting", active: commitActive },
    { name: "Dump thread", value: dumpActive ? "mysql-bin.000143:884" : "idle", active: dumpActive },
    { name: "Relay log", value: relayActive ? "receiver persisted events" : "empty", active: relayActive },
    { name: "SQL applier", value: applyActive ? "workers replay transaction" : "pending", active: applyActive },
    { name: "Replica lag", value: caughtUpActive ? "Seconds_Behind_Source=0" : "tracking", active: caughtUpActive },
  ];

  return (
    <div className="visual-stage replication-stage">
      <div className="replication-card">
        <svg
          className="replication-diagram"
          viewBox="0 0 1120 640"
          role="img"
          aria-label={readLocalizedText(simulation.title, locale)}
        >
          <defs>
            {[
              ["replication-arrow-brand", "var(--brand)"],
              ["replication-arrow-teal", "var(--tertiary)"],
              ["replication-arrow-warning", "#f59e0b"],
              ["replication-arrow-success", "var(--success)"],
            ].map(([id, fill]) => (
              <marker
                key={id}
                id={id}
                viewBox="0 0 10 10"
                refX="8.5"
                refY="5"
                markerWidth="8"
                markerHeight="8"
                orient="auto"
              >
                <path d="M 0 0 L 10 5 L 0 10 z" fill={fill} />
              </marker>
            ))}
            <filter id="replication-soft-shadow" x="-20%" y="-30%" width="140%" height="160%">
              <feDropShadow dx="0" dy="10" stdDeviation="10" floodColor="#172033" floodOpacity="0.13" />
            </filter>
          </defs>

          <rect className="replication-bg" x="24" y="24" width="1072" height="568" rx="28" />
          <text className="replication-title" x="560" y="70">
            {readLocalizedText(simulation.title, locale)}
          </text>
          <text className="replication-subtitle" x="560" y="100">
            {label(
              "source commit -> binlog dump -> receiver -> relay log -> SQL applier -> lag metrics",
              "source commit -> binlog dump -> receiver -> relay log -> SQL applier -> lag metrics",
            )}
          </text>

          <g className={`replication-client-panel ${commitActive ? "active" : ""}`}>
            <rect x="64" y="134" width="204" height="122" rx="24" />
            <text className="replication-panel-title" x="92" y="172">{label("应用写入", "Application write")}</text>
            <text className="replication-panel-subtitle" x="92" y="196">UPDATE orders SET status='shipped'</text>
            <g className={`replication-chip brand ${commitActive ? "active" : ""}`}>
              <rect x="92" y="216" width="134" height="30" rx="15" />
              <text x="159" y="236">T43 COMMIT</text>
            </g>
          </g>

          <g className={`replication-source-panel ${commitActive ? "active" : ""}`}>
            <rect x="326" y="118" width="306" height="198" rx="26" />
            <text className="replication-panel-title" x="354" y="158">Source MySQL</text>
            <text className="replication-panel-subtitle" x="354" y="182">{label("提交顺序进入 Binary Log", "Commit order enters the binary log")}</text>
            <g className={`replication-chip brand ${commitActive ? "active" : ""}`}>
              <rect x="354" y="212" width="212" height="34" rx="17" />
              <text x="460" y="234">mysql-bin.000143:884</text>
            </g>
            <g className={`replication-chip teal ${dumpActive ? "active" : ""}`}>
              <rect x="354" y="258" width="212" height="34" rx="17" />
              <text x="460" y="280">Binlog Dump Thread</text>
            </g>
          </g>

          <g className={`replication-commit-path ${commitActive ? "active" : ""}`}>
            <path d="M 268 196 C 294 196, 302 196, 326 196" markerEnd="url(#replication-arrow-brand)" />
            <rect x="244" y="316" width="162" height="32" rx="16" />
            <text x="325" y="337">{label("提交生成 GTID", "commit generates GTID")}</text>
          </g>

          <g className={`replication-binlog-panel ${dumpActive ? "active" : ""}`}>
            <rect x="704" y="114" width="342" height="214" rx="28" />
            <text className="replication-panel-title" x="732" y="154">Binary Log Stream</text>
            <text className="replication-panel-subtitle" x="732" y="178">{label("按 file/pos 或 GTID 连续发送", "Streams by file/pos or GTID")}</text>
            {eventRows.map((row, index) => (
              <g key={row.name} className={`replication-event-row ${row.tone} ${row.active ? "active" : ""}`}>
                <rect x="732" y={204 + index * 32} width="256" height="24" rx="12" />
                <text x="748" y={221 + index * 32}>{row.name}</text>
                <text x="972" y={221 + index * 32}>{row.value}</text>
              </g>
            ))}
          </g>

          <g className={`replication-dump-path ${dumpActive ? "active" : ""}`}>
            <path d="M 632 240 C 668 232, 684 232, 704 240" markerEnd="url(#replication-arrow-teal)" />
            <rect x="606" y="346" width="180" height="32" rx="16" />
            <text x="696" y="367">{label("dump thread 推送", "dump thread streams")}</text>
          </g>

          <g className={`replication-network-panel ${relayActive ? "active" : ""}`}>
            <rect x="474" y="382" width="230" height="116" rx="24" />
            <text className="replication-panel-title" x="502" y="420">{label("网络与 ACK", "Network and ACK")}</text>
            <text className="replication-panel-subtitle" x="502" y="444">{label("半同步在接收后返回确认", "Semisync returns ACK after receipt")}</text>
            <g className={`replication-chip warning ${relayActive ? "active" : ""}`}>
              <rect x="502" y="462" width="152" height="28" rx="14" />
              <text x="578" y="481">{relayActive ? "ACK received" : "ACK pending"}</text>
            </g>
          </g>

          <g className={`replication-relay-panel ${relayActive ? "active" : ""}`}>
            <rect x="736" y="382" width="302" height="150" rx="26" />
            <text className="replication-panel-title" x="764" y="422">Replica I/O Receiver</text>
            <text className="replication-panel-subtitle" x="764" y="446">writes mysql-relay.000091</text>
            {relayRows.map((row, index) => (
              <g key={row.name} className={`replication-relay-row ${row.active ? "active" : ""}`}>
                <rect x="764" y={466 + index * 30} width="216" height="23" rx="11.5" />
                <text x="778" y={482 + index * 30}>{row.name}</text>
                <text x="966" y={482 + index * 30}>{row.value}</text>
              </g>
            ))}
          </g>

          <g className={`replication-relay-path ${relayActive ? "active" : ""}`}>
            <path d="M 874 328 C 858 356, 852 370, 854 382" markerEnd="url(#replication-arrow-warning)" />
            <path d="M 704 444 C 716 444, 724 444, 736 444" markerEnd="url(#replication-arrow-warning)" />
            <rect x="760" y="342" width="146" height="32" rx="16" />
            <text x="833" y="363">{label("接收并落盘", "receive and persist")}</text>
          </g>

          <g className={`replication-applier-panel ${applyActive ? "active" : ""}`}>
            <rect x="72" y="380" width="350" height="156" rx="28" />
            <text className="replication-panel-title" x="100" y="420">SQL Applier</text>
            <text className="replication-panel-subtitle" x="100" y="444">{label("按依赖关系调度 worker", "Schedules workers by dependency")}</text>
            {workerRows.map((row, index) => (
              <g key={row.name} className={`replication-worker-row ${row.active ? "active" : ""}`}>
                <rect x="100" y={466 + index * 32} width="250" height="24" rx="12" />
                <text x="116" y={483 + index * 32}>{row.name}</text>
                <text x="334" y={483 + index * 32}>{row.value}</text>
              </g>
            ))}
          </g>

          <g className={`replication-apply-path ${applyActive ? "active" : ""}`}>
            <path d="M 736 500 C 626 586, 476 584, 352 510" markerEnd="url(#replication-arrow-brand)" />
            <rect x="462" y="548" width="170" height="32" rx="16" />
            <text x="547" y="569">{label("重放 relay log", "replay relay log")}</text>
          </g>

          <g className={`replication-catchup-path ${caughtUpActive ? "active" : ""}`}>
            <path d="M 106 380 C 78 330, 92 280, 132 256" markerEnd="url(#replication-arrow-success)" />
            <rect x="72" y="304" width="154" height="32" rx="16" />
            <text x="149" y="325">{label("副本读可见", "replica read visible")}</text>
          </g>

          <g className="replication-signals">
            {signalRows.map((signal, index) => (
              <g key={signal.name} className={`replication-signal ${signal.active ? "active" : ""}`}>
                <rect x={66 + index * 252} y="588" width="210" height="34" rx="16" />
                <text x={86 + index * 252} y="602">{signal.name}</text>
                <text x={256 + index * 252} y="614">{signal.value}</text>
              </g>
            ))}
          </g>
        </svg>
        <div className="replication-mobile-map">
          <div className="replication-mobile-flow" aria-hidden="true">
            {mobileFlow.map((item) => (
              <div key={item.name} className={`replication-mobile-hop ${item.active ? "active" : ""}`}>
                <span>{item.name}</span>
                <strong>{item.value}</strong>
              </div>
            ))}
          </div>
          <div className="replication-mobile-facts">
            {signalRows.map((signal) => (
              <div key={signal.name} className={`replication-mobile-fact ${signal.active ? "active" : ""}`}>
                <span>{signal.name}</span>
                <strong>{signal.value}</strong>
              </div>
            ))}
          </div>
        </div>
        <div className="tcp-handshake-caption replication-caption">
          <strong>{readLocalizedText(activeStep.title, locale)}</strong>
          <span>{completedSteps}/{simulation.steps.length}</span>
        </div>
      </div>
    </div>
  );
}

function ReplicationLagStage({
  simulation,
  locale,
  completedSteps,
  activeStepIndex,
}: {
  simulation: VisualSimulation;
  locale: Locale;
  completedSteps: number;
  activeStepIndex: number;
}) {
  const activeStep = simulation.steps[activeStepIndex];
  const label = (zh: string, en: string) => (locale === "zh" ? zh : en);
  const sourceActive = completedSteps >= 1;
  const receiverActive = completedSteps >= 2;
  const backlogActive = completedSteps >= 3;
  const staleActive = completedSteps >= 4;
  const caughtUpActive = completedSteps >= 5;
  const queueFill = caughtUpActive ? 0 : backlogActive ? 7 : receiverActive ? 5 : sourceActive ? 2 : 0;
  const lagSeconds = caughtUpActive ? 0 : staleActive ? 18 : backlogActive ? 14 : receiverActive ? 6 : 0;
  const gtidRows = [
    { name: "Source GTID", value: sourceActive ? "uuid:1-560" : "uuid:1-510", active: sourceActive },
    { name: "Retrieved", value: receiverActive ? "uuid:1-560" : "uuid:1-510", active: receiverActive },
    { name: "Executed", value: caughtUpActive ? "uuid:1-560" : backlogActive ? "uuid:1-521" : "uuid:1-510", active: backlogActive },
  ];
  const workerRows = [
    { name: "Coordinator", value: backlogActive ? "dispatch queue" : "idle", active: backlogActive },
    { name: "worker#1", value: staleActive ? "lock wait 12s" : backlogActive ? "large trx" : "idle", active: backlogActive },
    { name: "worker#2", value: caughtUpActive ? "commit ok" : backlogActive ? "dependency wait" : "idle", active: backlogActive },
  ];
  const signalRows = [
    { name: "GTID gap", value: caughtUpActive ? "0" : backlogActive ? "39 trx" : "pending", active: backlogActive },
    { name: "Relay backlog", value: caughtUpActive ? "0 trx" : receiverActive ? `${queueFill * 7} trx` : "0 trx", active: receiverActive },
    { name: "Seconds behind", value: `${lagSeconds}s`, active: staleActive || caughtUpActive },
    { name: "Read route", value: staleActive && !caughtUpActive ? "pin source" : caughtUpActive ? "replica ok" : "watch", active: staleActive || caughtUpActive },
  ];
  const mobileFlow = [
    { name: "Source burst", value: sourceActive ? "uuid:510-560" : "steady", active: sourceActive },
    { name: "I/O receiver", value: receiverActive ? "retrieved latest" : "waiting", active: receiverActive },
    { name: "Relay backlog", value: caughtUpActive ? "drained" : backlogActive ? "queue rising" : "empty", active: backlogActive || caughtUpActive },
    { name: "SQL applier", value: caughtUpActive ? "caught up" : staleActive ? "lock wait" : backlogActive ? "slow apply" : "idle", active: backlogActive || caughtUpActive },
    { name: "Replica read", value: caughtUpActive ? "fresh" : staleActive ? "stale risk" : "safe", active: staleActive || caughtUpActive },
  ];

  return (
    <div className="visual-stage replication-lag-stage">
      <div className="replication-lag-card">
        <svg
          className="replication-lag-diagram"
          viewBox="0 0 1120 640"
          role="img"
          aria-label={readLocalizedText(simulation.title, locale)}
        >
          <defs>
            {[
              ["replication-lag-arrow-brand", "var(--brand)"],
              ["replication-lag-arrow-teal", "var(--tertiary)"],
              ["replication-lag-arrow-warning", "#f59e0b"],
              ["replication-lag-arrow-danger", "var(--danger)"],
              ["replication-lag-arrow-success", "var(--success)"],
            ].map(([id, fill]) => (
              <marker
                key={id}
                id={id}
                viewBox="0 0 10 10"
                refX="8.5"
                refY="5"
                markerWidth="8"
                markerHeight="8"
                orient="auto"
              >
                <path d="M 0 0 L 10 5 L 0 10 z" fill={fill} />
              </marker>
            ))}
            <filter id="replication-lag-soft-shadow" x="-20%" y="-30%" width="140%" height="160%">
              <feDropShadow dx="0" dy="10" stdDeviation="10" floodColor="#172033" floodOpacity="0.13" />
            </filter>
          </defs>

          <rect className="replication-lag-bg" x="24" y="24" width="1072" height="568" rx="28" />
          <text className="replication-lag-title" x="560" y="70">
            {readLocalizedText(simulation.title, locale)}
          </text>
          <text className="replication-lag-subtitle" x="560" y="100">
            {label(
              "commit burst -> retrieved GTID -> relay backlog -> executed GTID -> stale read guard",
              "commit burst -> retrieved GTID -> relay backlog -> executed GTID -> stale read guard",
            )}
          </text>

          <g className={`replication-lag-source-panel ${sourceActive ? "active" : ""}`}>
            <rect x="64" y="134" width="248" height="158" rx="26" />
            <text className="replication-lag-panel-title" x="92" y="174">Source MySQL</text>
            <text className="replication-lag-panel-subtitle" x="92" y="198">{label("提交速率突然升高", "Commit rate spikes")}</text>
            {[0, 1, 2, 3, 4].map((index) => (
              <g key={index} className={`replication-lag-gtid-chip ${sourceActive ? "active" : ""}`}>
                <rect x={92 + index * 40} y="224" width="32" height="34" rx="12" />
                <text x={108 + index * 40} y="247">T{556 + index}</text>
              </g>
            ))}
          </g>

          <g className={`replication-lag-receiver-panel ${receiverActive ? "active" : ""}`}>
            <rect x="380" y="126" width="284" height="166" rx="26" />
            <text className="replication-lag-panel-title" x="408" y="166">I/O Receiver</text>
            <text className="replication-lag-panel-subtitle" x="408" y="190">{label("网络侧已追上 source", "Retrieval side catches up")}</text>
            {gtidRows.map((row, index) => (
              <g key={row.name} className={`replication-lag-gtid-row ${row.active ? "active" : ""}`}>
                <rect x="408" y={214 + index * 34} width="208" height="25" rx="12.5" />
                <text x="422" y={231 + index * 34}>{row.name}</text>
                <text x="602" y={231 + index * 34}>{row.value}</text>
              </g>
            ))}
          </g>

          <g className={`replication-lag-relay-panel ${receiverActive ? "active" : ""}`}>
            <rect x="736" y="126" width="320" height="184" rx="28" />
            <text className="replication-lag-panel-title" x="764" y="166">Relay Backlog</text>
            <text className="replication-lag-panel-subtitle" x="764" y="190">{label("等待 SQL applier 重放", "Waiting for SQL applier")}</text>
            {[0, 1, 2, 3, 4, 5, 6, 7].map((index) => (
              <g key={index} className={`replication-lag-queue-block ${index < queueFill ? "active" : ""}`}>
                <rect x={766 + index * 32} y="222" width="22" height={58 + index * 4} rx="8" />
              </g>
            ))}
            <text className="replication-lag-queue-label" x="900" y="292">
              {caughtUpActive ? "0 trx" : receiverActive ? `${queueFill * 7} trx queued` : "idle"}
            </text>
          </g>

          <g className={`replication-lag-source-path ${sourceActive ? "active" : ""}`}>
            <path d="M 312 212 C 338 212, 352 210, 380 210" markerEnd="url(#replication-lag-arrow-brand)" />
            <rect x="282" y="320" width="150" height="32" rx="16" />
            <text x="357" y="341">{label("写入突增", "write burst")}</text>
          </g>

          <g className={`replication-lag-receiver-path ${receiverActive ? "active" : ""}`}>
            <path d="M 664 214 C 696 214, 710 214, 736 214" markerEnd="url(#replication-lag-arrow-teal)" />
            <rect x="626" y="330" width="160" height="32" rx="16" />
            <text x="706" y="351">{label("拉取已完成", "retrieval caught up")}</text>
          </g>

          <g className={`replication-lag-applier-panel ${backlogActive ? "active" : ""}`}>
            <rect x="92" y="390" width="342" height="152" rx="28" />
            <text className="replication-lag-panel-title" x="120" y="428">SQL Applier</text>
            <text className="replication-lag-panel-subtitle" x="120" y="452">{label("worker 队列与依赖等待", "Worker queue and dependency waits")}</text>
            {workerRows.map((row, index) => (
              <g key={row.name} className={`replication-lag-worker-row ${row.active ? "active" : ""}`}>
                <rect x="120" y={474 + index * 32} width="250" height="24" rx="12" />
                <text x="136" y={491 + index * 32}>{row.name}</text>
                <text x="354" y={491 + index * 32}>{row.value}</text>
              </g>
            ))}
          </g>

          <g className={`replication-lag-stale-panel ${staleActive ? "active" : ""}`}>
            <rect x="508" y="386" width="264" height="158" rx="28" />
            <text className="replication-lag-panel-title" x="536" y="426">{label("读副本风险", "Replica read risk")}</text>
            <text className="replication-lag-panel-subtitle" x="536" y="450">{label("可见版本停在 Executed GTID", "Visible version stops at Executed GTID")}</text>
            <g className={`replication-lag-read-chip ${staleActive && !caughtUpActive ? "active danger" : caughtUpActive ? "active success" : ""}`}>
              <rect x="536" y="478" width="174" height="34" rx="17" />
              <text x="623" y="500">{caughtUpActive ? "fresh read" : staleActive ? "stale read" : "watch route"}</text>
            </g>
          </g>

          <g className={`replication-lag-gauge-panel ${backlogActive ? "active" : ""}`}>
            <rect x="838" y="390" width="210" height="154" rx="28" />
            <text className="replication-lag-panel-title" x="866" y="428">Lag Gauge</text>
            <circle className={`replication-lag-gauge-ring ${caughtUpActive ? "success" : staleActive ? "danger" : "warning"}`} cx="942" cy="486" r="42" />
            <path
              className={`replication-lag-gauge-needle ${caughtUpActive ? "success" : staleActive ? "danger" : "warning"}`}
              d={caughtUpActive ? "M 942 486 L 918 510" : staleActive ? "M 942 486 L 976 468" : "M 942 486 L 950 446"}
            />
            <text className="replication-lag-gauge-value" x="942" y="492">{lagSeconds}s</text>
          </g>

          <g className={`replication-lag-apply-path ${backlogActive ? "active" : ""}`}>
            <path d="M 810 306 C 674 388, 538 452, 434 470" markerEnd="url(#replication-lag-arrow-warning)" />
            <rect x="448" y="330" width="170" height="32" rx="16" />
            <text x="533" y="351">{label("应用成为瓶颈", "apply is bottleneck")}</text>
          </g>

          <g className={`replication-lag-stale-path ${staleActive ? "active" : ""}`}>
            <path d="M 434 470 C 468 466, 486 466, 508 468" markerEnd="url(#replication-lag-arrow-danger)" />
            <rect x="484" y="560" width="150" height="32" rx="16" />
            <text x="559" y="581">{label("旧读保护", "stale-read guard")}</text>
          </g>

          <g className={`replication-lag-catchup-path ${caughtUpActive ? "active" : ""}`}>
            <path d="M 838 496 C 740 584, 526 584, 328 528" markerEnd="url(#replication-lag-arrow-success)" />
          </g>

          <g className="replication-lag-signals">
            {signalRows.map((signal, index) => (
              <g key={signal.name} className={`replication-lag-signal ${signal.active ? "active" : ""}`}>
                <rect x={66 + index * 252} y="588" width="210" height="34" rx="16" />
                <text x={86 + index * 252} y="602">{signal.name}</text>
                <text x={256 + index * 252} y="614">{signal.value}</text>
              </g>
            ))}
          </g>
        </svg>
        <div className="replication-lag-mobile-map">
          <div className="replication-lag-mobile-flow" aria-hidden="true">
            {mobileFlow.map((item) => (
              <div key={item.name} className={`replication-lag-mobile-hop ${item.active ? "active" : ""}`}>
                <span>{item.name}</span>
                <strong>{item.value}</strong>
              </div>
            ))}
          </div>
          <div className="replication-lag-mobile-facts">
            {signalRows.map((signal) => (
              <div key={signal.name} className={`replication-lag-mobile-fact ${signal.active ? "active" : ""}`}>
                <span>{signal.name}</span>
                <strong>{signal.value}</strong>
              </div>
            ))}
          </div>
        </div>
        <div className="tcp-handshake-caption replication-lag-caption">
          <strong>{readLocalizedText(activeStep.title, locale)}</strong>
          <span>{completedSteps}/{simulation.steps.length}</span>
        </div>
      </div>
    </div>
  );
}

function GtidStage({
  simulation,
  locale,
  completedSteps,
  activeStepIndex,
}: {
  simulation: VisualSimulation;
  locale: Locale;
  completedSteps: number;
  activeStepIndex: number;
}) {
  const activeStep = simulation.steps[activeStepIndex];
  const label = (zh: string, en: string) => (locale === "zh" ? zh : en);
  const generatedActive = completedSteps >= 1;
  const loggedActive = completedSteps >= 2;
  const retrievedActive = completedSteps >= 3;
  const comparedActive = completedSteps >= 4;
  const recoveredActive = completedSteps >= 5;
  const gtidTokens = [
    { value: "uuidA:578", active: loggedActive, tone: "brand" },
    { value: "uuidA:579", active: loggedActive, tone: "brand" },
    { value: "uuidA:580", active: comparedActive, tone: "danger" },
    { value: "uuidA:581", active: generatedActive, tone: recoveredActive ? "success" : comparedActive ? "danger" : "teal" },
  ];
  const setRows = [
    { name: "gtid_executed", value: loggedActive ? "uuidA:1-581" : "uuidA:1-580", active: loggedActive, tone: "teal" },
    { name: "gtid_purged", value: loggedActive ? "uuidA:1-240" : "uuidA:1-220", active: loggedActive, tone: "brand" },
    { name: "Retrieved_Gtid_Set", value: retrievedActive ? "uuidA:1-581" : "uuidA:1-579", active: retrievedActive, tone: "warning" },
    { name: "Executed_Gtid_Set", value: recoveredActive ? "uuidA:1-581" : comparedActive ? "uuidA:1-579" : "uuidA:1-578", active: retrievedActive, tone: recoveredActive ? "success" : "danger" },
  ];
  const candidateRows = [
    { name: "Replica A", value: recoveredActive ? "uuidA:1-581" : comparedActive ? "uuidA:1-581" : "waiting", active: comparedActive || recoveredActive, tone: "success" },
    { name: "Replica B", value: comparedActive ? "missing 580-581" : "waiting", active: comparedActive, tone: "danger" },
    { name: "Replica C", value: comparedActive ? "missing 581" : "waiting", active: comparedActive, tone: "warning" },
  ];
  const signalRows = [
    { name: "GTID gap", value: recoveredActive ? "0" : comparedActive ? "2 tx" : "pending", active: comparedActive || recoveredActive },
    { name: "Candidate", value: comparedActive ? "Replica A" : "pending", active: comparedActive },
    { name: "Auto position", value: recoveredActive ? "on" : "standby", active: recoveredActive },
    { name: "Traffic gate", value: recoveredActive ? "open" : comparedActive ? "hold" : "watch", active: comparedActive || recoveredActive },
  ];
  const mobileFlow = [
    { name: "Source UUID", value: generatedActive ? "uuidA:581" : "waiting", active: generatedActive },
    { name: "Binary log", value: loggedActive ? "GTID event persisted" : "idle", active: loggedActive },
    { name: "Replica sets", value: retrievedActive ? "retrieved ahead" : "steady", active: retrievedActive },
    { name: "Candidate check", value: comparedActive ? "Replica A freshest" : "waiting", active: comparedActive },
    { name: "Auto position", value: recoveredActive ? "missing range filled" : "standby", active: recoveredActive },
  ];

  return (
    <div className="visual-stage gtid-stage">
      <div className="gtid-card">
        <svg
          className="gtid-diagram"
          viewBox="0 0 1120 640"
          role="img"
          aria-label={readLocalizedText(simulation.title, locale)}
        >
          <defs>
            {[
              ["gtid-arrow-brand", "var(--brand)"],
              ["gtid-arrow-teal", "var(--tertiary)"],
              ["gtid-arrow-warning", "#f59e0b"],
              ["gtid-arrow-danger", "var(--danger)"],
              ["gtid-arrow-success", "var(--success)"],
            ].map(([id, fill]) => (
              <marker
                key={id}
                id={id}
                viewBox="0 0 10 10"
                refX="8.5"
                refY="5"
                markerWidth="8"
                markerHeight="8"
                orient="auto"
              >
                <path d="M 0 0 L 10 5 L 0 10 z" fill={fill} />
              </marker>
            ))}
            <filter id="gtid-soft-shadow" x="-20%" y="-30%" width="140%" height="160%">
              <feDropShadow dx="0" dy="10" stdDeviation="10" floodColor="#172033" floodOpacity="0.13" />
            </filter>
          </defs>

          <rect className="gtid-bg" x="24" y="24" width="1072" height="568" rx="28" />
          <text className="gtid-title" x="560" y="70">
            {readLocalizedText(simulation.title, locale)}
          </text>
          <text className="gtid-subtitle" x="560" y="100">
            {label(
              "server_uuid:sequence -> gtid_executed -> Retrieved / Executed sets -> candidate diff -> auto position",
              "server_uuid:sequence -> gtid_executed -> Retrieved / Executed sets -> candidate diff -> auto position",
            )}
          </text>

          <g className={`gtid-source-panel ${generatedActive ? "active" : ""}`}>
            <rect x="64" y="136" width="252" height="150" rx="26" />
            <text className="gtid-panel-title" x="92" y="174">Source MySQL</text>
            <text className="gtid-panel-subtitle" x="92" y="198">server_uuid = uuidA</text>
            <g className={`gtid-server-chip ${generatedActive ? "active" : ""}`}>
              <rect x="92" y="224" width="166" height="34" rx="17" />
              <text x="175" y="246">{generatedActive ? "uuidA:581" : "next sequence"}</text>
            </g>
          </g>

          <g className={`gtid-binlog-panel ${loggedActive ? "active" : ""}`}>
            <rect x="382" y="126" width="298" height="172" rx="28" />
            <text className="gtid-panel-title" x="410" y="164">Binary Log</text>
            <text className="gtid-panel-subtitle" x="410" y="188">{label("GTID event 在事务事件前", "GTID event before transaction events")}</text>
            {gtidTokens.map((token, index) => (
              <g key={token.value} className={`gtid-token ${token.tone} ${token.active ? "active" : ""}`}>
                <rect x={410 + index * 58} y="218" width="50" height="48" rx="16" />
                <text x={435 + index * 58} y="239">{token.value.slice(-3)}</text>
                <text x={435 + index * 58} y="255">GTID</text>
              </g>
            ))}
          </g>

          <g className={`gtid-replica-panel ${retrievedActive ? "active" : ""}`}>
            <rect x="742" y="122" width="314" height="210" rx="28" />
            <text className="gtid-panel-title" x="770" y="162">Replica GTID Sets</text>
            <text className="gtid-panel-subtitle" x="770" y="186">{label("接收集合与应用集合分开看", "Separate retrieved and executed sets")}</text>
            {setRows.map((row, index) => (
              <g key={row.name} className={`gtid-set-row ${row.tone} ${row.active ? "active" : ""}`}>
                <rect x="770" y={210 + index * 38} width="240" height="28" rx="14" />
                <text x="786" y={229 + index * 38}>{row.name}</text>
                <text x="998" y={229 + index * 38}>{row.value}</text>
              </g>
            ))}
          </g>

          <g className={`gtid-generate-path ${generatedActive ? "active" : ""}`}>
            <path d="M 316 214 C 344 214, 356 212, 382 212" markerEnd="url(#gtid-arrow-brand)" />
            <rect x="270" y="318" width="150" height="32" rx="16" />
            <text x="345" y="339">{label("生成编号", "assign GTID")}</text>
          </g>

          <g className={`gtid-retrieve-path ${retrievedActive ? "active" : ""}`}>
            <path d="M 680 226 C 708 226, 720 224, 742 224" markerEnd="url(#gtid-arrow-warning)" />
            <rect x="628" y="346" width="166" height="32" rx="16" />
            <text x="711" y="367">{label("集合推进", "sets advance")}</text>
          </g>

          <g className={`gtid-candidate-panel ${comparedActive ? "active" : ""}`}>
            <rect x="90" y="402" width="334" height="152" rx="28" />
            <text className="gtid-panel-title" x="118" y="438">{label("候选副本对账", "Candidate comparison")}</text>
            <text className="gtid-panel-subtitle" x="118" y="462">{label("按 Executed_Gtid_Set 找最新副本", "Use Executed_Gtid_Set to find the freshest replica")}</text>
            {candidateRows.map((row, index) => (
              <g key={row.name} className={`gtid-candidate-row ${row.tone} ${row.active ? "active" : ""}`}>
                <rect x="118" y={484 + index * 32} width="244" height="24" rx="12" />
                <text x="134" y={501 + index * 32}>{row.name}</text>
                <text x="346" y={501 + index * 32}>{row.value}</text>
              </g>
            ))}
          </g>

          <g className={`gtid-gap-panel ${comparedActive ? "active" : ""}`}>
            <rect x="506" y="396" width="270" height="160" rx="28" />
            <text className="gtid-panel-title" x="534" y="436">Set Diff</text>
            <text className="gtid-panel-subtitle" x="534" y="460">{label("缺失范围决定补齐计划", "Missing ranges decide catch-up plan")}</text>
            <g className={`gtid-gap-chip danger ${comparedActive && !recoveredActive ? "active" : ""}`}>
              <rect x="534" y="488" width="184" height="34" rx="17" />
              <text x="626" y="510">{recoveredActive ? "gap = 0" : "missing 580-581"}</text>
            </g>
          </g>

          <g className={`gtid-auto-panel ${recoveredActive ? "active" : ""}`}>
            <rect x="842" y="404" width="210" height="148" rx="28" />
            <text className="gtid-panel-title" x="870" y="440">Auto Positioning</text>
            <text className="gtid-panel-subtitle" x="870" y="464">SOURCE_AUTO_POSITION=1</text>
            <g className={`gtid-auto-chip ${recoveredActive ? "active" : ""}`}>
              <rect x="870" y="492" width="148" height="34" rx="17" />
              <text x="944" y="514">{recoveredActive ? "uuidA:580-581" : "standby"}</text>
            </g>
          </g>

          <g className={`gtid-compare-path ${comparedActive ? "active" : ""}`}>
            <path d="M 856 332 C 718 390, 556 424, 424 458" markerEnd="url(#gtid-arrow-danger)" />
            <rect x="438" y="348" width="166" height="32" rx="16" />
            <text x="521" y="369">{label("比较集合", "compare sets")}</text>
          </g>

          <g className={`gtid-auto-path ${recoveredActive ? "active" : ""}`}>
            <path d="M 776 488 C 802 488, 818 488, 842 488" markerEnd="url(#gtid-arrow-success)" />
            <path d="M 944 404 C 894 346, 846 326, 802 312" markerEnd="url(#gtid-arrow-success)" />
          </g>

          <g className="gtid-signals">
            {signalRows.map((signal, index) => (
              <g key={signal.name} className={`gtid-signal ${signal.active ? "active" : ""}`}>
                <rect x={66 + index * 252} y="588" width="210" height="34" rx="16" />
                <text x={86 + index * 252} y="602">{signal.name}</text>
                <text x={256 + index * 252} y="614">{signal.value}</text>
              </g>
            ))}
          </g>
        </svg>
        <div className="gtid-mobile-map">
          <div className="gtid-mobile-flow" aria-hidden="true">
            {mobileFlow.map((item) => (
              <div key={item.name} className={`gtid-mobile-hop ${item.active ? "active" : ""}`}>
                <span>{item.name}</span>
                <strong>{item.value}</strong>
              </div>
            ))}
          </div>
          <div className="gtid-mobile-facts">
            {signalRows.map((signal) => (
              <div key={signal.name} className={`gtid-mobile-fact ${signal.active ? "active" : ""}`}>
                <span>{signal.name}</span>
                <strong>{signal.value}</strong>
              </div>
            ))}
          </div>
        </div>
        <div className="tcp-handshake-caption gtid-caption">
          <strong>{readLocalizedText(activeStep.title, locale)}</strong>
          <span>{completedSteps}/{simulation.steps.length}</span>
        </div>
      </div>
    </div>
  );
}

function TwoPhaseCommitStage({
  simulation,
  locale,
  completedSteps,
  activeStepIndex,
}: {
  simulation: VisualSimulation;
  locale: Locale;
  completedSteps: number;
  activeStepIndex: number;
}) {
  const activeStep = simulation.steps[activeStepIndex];
  const label = (zh: string, en: string) => (locale === "zh" ? zh : en);
  const executeActive = completedSteps >= 1;
  const prepareActive = completedSteps >= 2;
  const binlogActive = completedSteps >= 3;
  const commitActive = completedSteps >= 4;
  const recoveryActive = completedSteps >= 5;
  const timelineRows = [
    { name: "1", label: label("数据页变更", "page change"), value: executeActive ? "dirty page + undo" : "pending", active: executeActive, tone: "brand" },
    { name: "2", label: "redo prepare", value: prepareActive ? "prepare LSN=8612" : "pending", active: prepareActive, tone: "teal" },
    { name: "3", label: "binlog write", value: binlogActive ? "Xid + GTID persisted" : "pending", active: binlogActive, tone: "warning" },
    { name: "4", label: "redo commit", value: commitActive ? "commit LSN=8678" : "pending", active: commitActive, tone: "success" },
  ];
  const crashRows = [
    {
      name: label("崩溃 A", "Crash A"),
      value: prepareActive ? label("prepare 后，Binlog 缺失：rollback", "after prepare, binary log missing: rollback") : label("等待 prepare", "awaiting prepare"),
      active: prepareActive,
      tone: "teal",
    },
    {
      name: label("崩溃 B", "Crash B"),
      value: binlogActive ? label("Binlog 完整，redo commit 缺失：commit", "binary log complete, redo commit missing: commit") : label("等待 Binlog", "awaiting binary log"),
      active: binlogActive,
      tone: "warning",
    },
    {
      name: label("崩溃 C", "Crash C"),
      value: commitActive ? label("redo commit 已写：commit", "redo commit written: commit") : label("等待 commit", "awaiting commit"),
      active: commitActive,
      tone: "success",
    },
  ];
  const signalRows = [
    { name: "prepare_lsn", value: prepareActive ? "8612" : "pending", active: prepareActive },
    { name: "binlog_xid", value: binlogActive ? "Xid=42" : "pending", active: binlogActive },
    { name: "redo_state", value: commitActive ? "commit" : prepareActive ? "prepare" : "open", active: prepareActive },
    { name: "recovery", value: recoveryActive ? "T42 commit" : "standby", active: recoveryActive },
  ];
  const mobileFlow = [
    { name: "Client COMMIT", value: executeActive ? "T42 UPDATE orders" : "waiting", active: executeActive },
    { name: "Redo prepare", value: prepareActive ? "prepare LSN=8612" : "pending", active: prepareActive },
    { name: "Binary log", value: binlogActive ? "GTID + rows + Xid" : "pending", active: binlogActive },
    { name: "Redo commit", value: commitActive ? "commit LSN=8678" : "pending", active: commitActive },
    { name: "Recovery rule", value: recoveryActive ? "prepared + Xid => commit" : "waiting crash point", active: recoveryActive },
  ];

  return (
    <div className="visual-stage two-phase-stage">
      <div className="two-phase-card">
        <svg
          className="two-phase-diagram"
          viewBox="0 0 1120 640"
          role="img"
          aria-label={readLocalizedText(simulation.title, locale)}
        >
          <defs>
            {[
              ["two-phase-arrow-brand", "var(--brand)"],
              ["two-phase-arrow-teal", "var(--tertiary)"],
              ["two-phase-arrow-warning", "#f59e0b"],
              ["two-phase-arrow-success", "var(--success)"],
            ].map(([id, fill]) => (
              <marker
                key={id}
                id={id}
                viewBox="0 0 10 10"
                refX="8.5"
                refY="5"
                markerWidth="8"
                markerHeight="8"
                orient="auto"
              >
                <path d="M 0 0 L 10 5 L 0 10 z" fill={fill} />
              </marker>
            ))}
            <filter id="two-phase-soft-shadow" x="-20%" y="-30%" width="140%" height="160%">
              <feDropShadow dx="0" dy="10" stdDeviation="10" floodColor="#172033" floodOpacity="0.13" />
            </filter>
          </defs>

          <rect className="two-phase-bg" x="24" y="24" width="1072" height="568" rx="28" />
          <text className="two-phase-title" x="560" y="70">
            {readLocalizedText(simulation.title, locale)}
          </text>
          <text className="two-phase-subtitle" x="560" y="100">
            {label(
              "UPDATE -> redo prepare -> binlog Xid -> redo commit -> crash recovery decision",
              "UPDATE -> redo prepare -> binary-log Xid -> redo commit -> crash recovery decision",
            )}
          </text>

          <g className={`two-phase-client-panel ${executeActive ? "active" : ""}`}>
            <rect x="66" y="140" width="224" height="132" rx="24" />
            <text className="two-phase-panel-title" x="94" y="176">{label("客户端事务", "Client transaction")}</text>
            <text className="two-phase-panel-subtitle" x="94" y="200">COMMIT T42</text>
            <g className={`two-phase-sql-chip ${executeActive ? "active" : ""}`}>
              <rect x="94" y="226" width="160" height="30" rx="15" />
              <text x="174" y="246">UPDATE orders#42</text>
            </g>
          </g>

          <g className={`two-phase-engine-panel ${executeActive ? "active" : ""}`}>
            <rect x="344" y="126" width="266" height="176" rx="26" />
            <text className="two-phase-panel-title" x="372" y="162">InnoDB</text>
            <text className="two-phase-panel-subtitle" x="372" y="186">{label("脏页、undo、事务上下文", "dirty page, undo, trx context")}</text>
            <g className={`two-phase-page-card ${executeActive ? "active" : ""}`}>
              <rect x="372" y="214" width="190" height="52" rx="16" />
              <text x="390" y="236">orders page P42</text>
              <text x="548" y="254">{executeActive ? "120 -> 140" : "120"}</text>
            </g>
          </g>

          <g className={`two-phase-start-path ${executeActive ? "active" : ""}`}>
            <path d="M 290 210 C 312 210, 322 210, 344 210" markerEnd="url(#two-phase-arrow-brand)" />
            <rect x="248" y="318" width="150" height="32" rx="16" />
            <text x="323" y="339">{label("进入提交", "enter commit")}</text>
          </g>

          <g className={`two-phase-redo-panel ${prepareActive ? "active" : ""}`}>
            <rect x="676" y="122" width="180" height="190" rx="26" />
            <text className="two-phase-panel-title" x="704" y="160">Redo Log</text>
            <text className="two-phase-panel-subtitle" x="704" y="184">trx_id=42</text>
            <g className={`two-phase-redo-row teal ${prepareActive ? "active" : ""}`}>
              <rect x="704" y="214" width="126" height="28" rx="14" />
              <text x="720" y="233">PREPARE</text>
              <text x="820" y="233">8612</text>
            </g>
            <g className={`two-phase-redo-row success ${commitActive ? "active" : ""}`}>
              <rect x="704" y="254" width="126" height="28" rx="14" />
              <text x="720" y="273">COMMIT</text>
              <text x="820" y="273">8678</text>
            </g>
          </g>

          <g className={`two-phase-prepare-path ${prepareActive ? "active" : ""}`}>
            <path d="M 610 216 C 636 214, 650 214, 676 220" markerEnd="url(#two-phase-arrow-teal)" />
            <rect x="586" y="324" width="146" height="32" rx="16" />
            <text x="659" y="345">redo prepare</text>
          </g>

          <g className={`two-phase-binlog-panel ${binlogActive ? "active" : ""}`}>
            <rect x="902" y="142" width="156" height="176" rx="26" />
            <text className="two-phase-panel-title" x="930" y="180">Binlog</text>
            <text className="two-phase-panel-subtitle" x="930" y="204">mysql-bin.000142</text>
            <g className={`two-phase-binlog-row brand ${binlogActive ? "active" : ""}`}>
              <rect x="930" y="230" width="98" height="26" rx="13" />
              <text x="944" y="248">GTID T42</text>
            </g>
            <g className={`two-phase-binlog-row warning ${binlogActive ? "active" : ""}`}>
              <rect x="930" y="262" width="98" height="26" rx="13" />
              <text x="944" y="280">Xid=42</text>
            </g>
          </g>

          <g className={`two-phase-binlog-path ${binlogActive ? "active" : ""}`}>
            <path d="M 856 222 C 876 220, 884 220, 902 228" markerEnd="url(#two-phase-arrow-warning)" />
            <rect x="820" y="334" width="164" height="32" rx="16" />
            <text x="902" y="355">flush + sync binlog</text>
          </g>

          <g className={`two-phase-commit-path ${commitActive ? "active" : ""}`}>
            <path d="M 902 280 C 858 336, 810 342, 766 312" markerEnd="url(#two-phase-arrow-success)" />
            <rect x="696" y="350" width="126" height="32" rx="16" />
            <text x="759" y="371">redo commit</text>
          </g>

          <g className={`two-phase-timeline-panel ${executeActive ? "active" : ""}`}>
            <rect x="66" y="394" width="568" height="130" rx="26" />
            <text className="two-phase-panel-title" x="94" y="432">{label("提交时间线", "Commit timeline")}</text>
            <line className="two-phase-timeline-axis" x1="112" y1="472" x2="586" y2="472" />
            {timelineRows.map((row, index) => (
              <g key={row.label} className={`two-phase-timeline-node ${row.tone} ${row.active ? "active" : ""}`}>
                <circle cx={128 + index * 150} cy="472" r="18" />
                <text x={128 + index * 150} y="477">{row.name}</text>
                <text x={96 + index * 150} y="512">{row.label}</text>
                <text x={96 + index * 150} y="532">{row.value}</text>
              </g>
            ))}
          </g>

          <g className={`two-phase-recovery-panel ${recoveryActive ? "active" : ""}`}>
            <rect x="668" y="398" width="394" height="144" rx="26" />
            <text className="two-phase-panel-title" x="696" y="436">{label("崩溃恢复判定", "Crash recovery decision")}</text>
            {crashRows.map((row, index) => (
              <g key={row.name} className={`two-phase-crash-row ${row.tone} ${row.active ? "active" : ""}`}>
                <rect x="696" y={460 + index * 34} width="324" height="26" rx="13" />
                <text x="712" y={478 + index * 34}>{row.name}</text>
                <text x="1000" y={478 + index * 34}>{row.value}</text>
              </g>
            ))}
          </g>

          <g className={`two-phase-recovery-path ${recoveryActive ? "active" : ""}`}>
            <path d="M 778 312 C 760 362, 788 382, 844 398" markerEnd="url(#two-phase-arrow-brand)" />
            <rect x="830" y="362" width="130" height="32" rx="16" />
            <text x="895" y="383">{label("重启扫描", "restart scan")}</text>
          </g>

          <g className="two-phase-signals">
            {signalRows.map((signal, index) => (
              <g key={signal.name} className={`two-phase-signal ${signal.active ? "active" : ""}`}>
                <rect x={66 + index * 252} y="588" width="210" height="34" rx="16" />
                <text x={86 + index * 252} y="602">{signal.name}</text>
                <text x={256 + index * 252} y="614">{signal.value}</text>
              </g>
            ))}
          </g>
        </svg>
        <div className="two-phase-mobile-map">
          <div className="two-phase-mobile-flow" aria-hidden="true">
            {mobileFlow.map((item) => (
              <div key={item.name} className={`two-phase-mobile-hop ${item.active ? "active" : ""}`}>
                <span>{item.name}</span>
                <strong>{item.value}</strong>
              </div>
            ))}
          </div>
          <div className="two-phase-mobile-facts">
            {signalRows.map((signal) => (
              <div key={signal.name} className={`two-phase-mobile-fact ${signal.active ? "active" : ""}`}>
                <span>{signal.name}</span>
                <strong>{signal.value}</strong>
              </div>
            ))}
          </div>
        </div>
        <div className="tcp-handshake-caption two-phase-caption">
          <strong>{readLocalizedText(activeStep.title, locale)}</strong>
          <span>{completedSteps}/{simulation.steps.length}</span>
        </div>
      </div>
    </div>
  );
}

function DeadlockStage({
  simulation,
  locale,
  completedSteps,
  activeStepIndex,
}: {
  simulation: VisualSimulation;
  locale: Locale;
  completedSteps: number;
  activeStepIndex: number;
}) {
  const activeStep = simulation.steps[activeStepIndex];
  const label = (zh: string, en: string) => (locale === "zh" ? zh : en);
  const crossActive = completedSteps >= 1;
  const t1WaitActive = completedSteps >= 2;
  const t2WaitActive = completedSteps >= 3;
  const detectActive = completedSteps >= 4;
  const rollbackActive = completedSteps >= 5;
  const lockRows = [
    { resource: "orders#42", holder: "T1", waiter: rollbackActive ? "-" : t2WaitActive ? "T2" : "-", active: crossActive, tone: "brand" },
    { resource: "stock#7", holder: rollbackActive ? "T1" : "T2", waiter: rollbackActive ? "-" : t1WaitActive ? "T1" : "-", active: crossActive, tone: rollbackActive ? "success" : "warning" },
    { resource: "idx_customer=18", holder: "-", waiter: "-", active: detectActive, tone: "muted" },
  ];
  const graphEdges = [
    { name: "T1 -> T2", value: t1WaitActive ? "waits stock#7" : "pending", active: t1WaitActive },
    { name: "T2 -> T1", value: t2WaitActive ? "waits orders#42" : "pending", active: t2WaitActive },
    { name: "cycle", value: detectActive ? "closed" : "open", active: detectActive },
  ];
  const signalRows = [
    { name: "LATEST DEADLOCK", value: detectActive ? "T1 <-> T2" : "empty", active: detectActive },
    { name: "victim", value: rollbackActive ? "T2 rollback" : detectActive ? "choose T2" : "pending", active: detectActive },
    { name: "lock wait", value: t2WaitActive ? "42 ms" : t1WaitActive ? "18 ms" : "0 ms", active: t1WaitActive },
    { name: "retry branch", value: rollbackActive ? "idempotent retry" : "not yet", active: rollbackActive },
  ];
  const mobileFlow = [
    { name: "T1", value: t1WaitActive ? "holds orders, waits stock" : "holds orders#42", active: crossActive },
    { name: "T2", value: t2WaitActive ? "holds stock, waits orders" : "holds stock#7", active: crossActive },
    { name: "wait graph", value: detectActive ? "cycle closed" : t1WaitActive ? "edge building" : "open", active: t1WaitActive },
    { name: "detector", value: rollbackActive ? "rollback T2" : detectActive ? "victim=T2" : "idle", active: detectActive },
  ];

  return (
    <div className="visual-stage deadlock-stage">
      <div className="deadlock-card">
        <svg
          className="deadlock-diagram"
          viewBox="0 0 1120 640"
          role="img"
          aria-label={readLocalizedText(simulation.title, locale)}
        >
          <defs>
            {[
              ["deadlock-arrow-brand", "var(--brand)"],
              ["deadlock-arrow-teal", "var(--tertiary)"],
              ["deadlock-arrow-warning", "#f59e0b"],
              ["deadlock-arrow-danger", "var(--danger)"],
              ["deadlock-arrow-success", "var(--success)"],
            ].map(([id, fill]) => (
              <marker
                key={id}
                id={id}
                viewBox="0 0 10 10"
                refX="8.5"
                refY="5"
                markerWidth="8"
                markerHeight="8"
                orient="auto"
              >
                <path d="M 0 0 L 10 5 L 0 10 z" fill={fill} />
              </marker>
            ))}
            <filter id="deadlock-soft-shadow" x="-20%" y="-30%" width="140%" height="160%">
              <feDropShadow dx="0" dy="10" stdDeviation="10" floodColor="#172033" floodOpacity="0.13" />
            </filter>
          </defs>

          <rect className="deadlock-bg" x="24" y="24" width="1072" height="588" rx="28" />
          <text className="deadlock-title" x="560" y="70">
            {readLocalizedText(simulation.title, locale)}
          </text>
          <text className="deadlock-subtitle" x="560" y="100">
            {label("opposite lock order -> wait edges -> cycle -> victim rollback", "opposite lock order -> wait edges -> cycle -> victim rollback")}
          </text>

          <g className={`deadlock-tx-panel deadlock-tx1-panel ${crossActive ? "active" : ""}`}>
            <rect x="78" y="142" width="256" height="180" rx="24" />
            <text className="deadlock-panel-title" x="104" y="180">T1</text>
            <text className="deadlock-panel-subtitle" x="104" y="204">UPDATE orders WHERE id=42</text>
            <g className={`deadlock-sql-chip brand ${crossActive ? "active" : ""}`}>
              <rect x="104" y="224" width="198" height="34" rx="17" />
              <text x="203" y="246">{label("持有 orders#42", "holds orders#42")}</text>
            </g>
            <g className={`deadlock-sql-chip teal ${t1WaitActive ? "active" : ""}`}>
              <rect x="104" y="270" width="198" height="34" rx="17" />
              <text x="203" y="292">{label("等待 stock#7", "waits stock#7")}</text>
            </g>
          </g>

          <g className={`deadlock-tx-panel deadlock-tx2-panel ${crossActive ? "active" : ""}`}>
            <rect x="746" y="142" width="256" height="180" rx="24" />
            <text className="deadlock-panel-title" x="772" y="180">T2</text>
            <text className="deadlock-panel-subtitle" x="772" y="204">UPDATE stock WHERE sku=7</text>
            <g className={`deadlock-sql-chip warning ${crossActive && !rollbackActive ? "active" : ""}`}>
              <rect x="772" y="224" width="198" height="34" rx="17" />
              <text x="871" y="246">{label("持有 stock#7", "holds stock#7")}</text>
            </g>
            <g className={`deadlock-sql-chip danger ${t2WaitActive ? "active" : ""}`}>
              <rect x="772" y="270" width="198" height="34" rx="17" />
              <text x="871" y="292">{label("等待 orders#42", "waits orders#42")}</text>
            </g>
          </g>

          <g className={`deadlock-lock-table ${crossActive ? "active" : ""}`}>
            <rect x="382" y="134" width="332" height="196" rx="24" />
            <text className="deadlock-panel-title" x="410" y="174">InnoDB Lock Table</text>
            <text className="deadlock-panel-subtitle" x="410" y="198">record X locks + wait queue</text>
            {lockRows.map((row, index) => (
              <g key={row.resource} className={`deadlock-lock-row ${row.tone} ${row.active ? "active" : ""}`}>
                <rect x="410" y={218 + index * 42} width="276" height="32" rx="16" />
                <text x="428" y={239 + index * 42}>{row.resource}</text>
                <text x="594" y={239 + index * 42}>{`H:${row.holder} W:${row.waiter}`}</text>
              </g>
            ))}
          </g>

          <g className={`deadlock-wait-edge deadlock-edge-t1 ${t1WaitActive ? "active" : ""}`}>
            <path d="M 266 306 C 314 376, 416 394, 500 396" markerEnd="url(#deadlock-arrow-teal)" />
            <rect x="328" y="354" width="128" height="30" rx="15" />
            <text x="392" y="374">{"T1 -> T2"}</text>
          </g>
          <g className={`deadlock-wait-edge deadlock-edge-t2 ${t2WaitActive ? "active" : ""}`}>
            <path d="M 834 306 C 794 376, 690 402, 596 396" markerEnd="url(#deadlock-arrow-warning)" />
            <rect x="674" y="354" width="128" height="30" rx="15" />
            <text x="738" y="374">{"T2 -> T1"}</text>
          </g>

          <g className={`deadlock-graph-panel ${t1WaitActive ? "active" : ""}`}>
            <rect x="358" y="354" width="406" height="148" rx="26" />
            <text className="deadlock-panel-title" x="390" y="392">{label("等待图", "Wait-for graph")}</text>
            <circle className={`deadlock-graph-node brand ${t1WaitActive ? "active" : ""}`} cx="478" cy="438" r="38" />
            <text className="deadlock-node-label" x="478" y="444">T1</text>
            <circle className={`deadlock-graph-node warning ${t2WaitActive ? "active" : ""}`} cx="644" cy="438" r="38" />
            <text className="deadlock-node-label" x="644" y="444">T2</text>
            <g className={`deadlock-cycle-edge teal ${t1WaitActive ? "active" : ""}`}>
              <path d="M 514 426 C 548 402, 594 402, 628 426" markerEnd="url(#deadlock-arrow-teal)" />
            </g>
            <g className={`deadlock-cycle-edge danger ${t2WaitActive ? "active" : ""}`}>
              <path d="M 628 456 C 594 482, 548 482, 514 456" markerEnd="url(#deadlock-arrow-danger)" />
            </g>
            <g className={`deadlock-cycle-badge ${detectActive ? "active" : ""}`}>
              <rect x="518" y="392" width="128" height="30" rx="15" />
              <text x="582" y="412">{label("环已闭合", "cycle closed")}</text>
            </g>
          </g>

          <g className={`deadlock-detector-panel ${detectActive ? "active" : ""}`}>
            <rect x="796" y="368" width="254" height="150" rx="24" />
            <text className="deadlock-panel-title" x="824" y="408">Detector</text>
            <text className="deadlock-panel-subtitle" x="824" y="432">{label("遍历等待边并选择 victim", "walk wait edges and choose victim")}</text>
            {graphEdges.map((row, index) => (
              <g key={row.name} className={`deadlock-detect-row ${row.active ? "active" : ""}`}>
                <rect x="824" y={452 + index * 34} width="190" height="26" rx="13" />
                <text x="838" y={470 + index * 34}>{row.name}</text>
                <text x="1000" y={470 + index * 34}>{row.value}</text>
              </g>
            ))}
          </g>

          <g className={`deadlock-rollback-path ${rollbackActive ? "active" : ""}`}>
            <path d="M 884 368 C 918 324, 916 298, 904 270" markerEnd="url(#deadlock-arrow-success)" />
            <rect x="838" y="320" width="154" height="30" rx="15" />
            <text x="915" y="340">{label("回滚 T2", "rollback T2")}</text>
          </g>

          <g className="deadlock-signals">
            {signalRows.map((signal, index) => (
              <g key={signal.name} className={`deadlock-signal ${signal.active ? "active" : ""}`}>
                <rect x={66 + index * 258} y="550" width="218" height="34" rx="16" />
                <text x={86 + index * 258} y="564">{signal.name}</text>
                <text x={264 + index * 258} y="576">{signal.value}</text>
              </g>
            ))}
          </g>
        </svg>
        <div className="deadlock-mobile-map">
          <div className="deadlock-mobile-flow" aria-hidden="true">
            {mobileFlow.map((item) => (
              <div key={item.name} className={`deadlock-mobile-hop ${item.active ? "active" : ""}`}>
                <span>{item.name}</span>
                <strong>{item.value}</strong>
              </div>
            ))}
          </div>
          <div className="deadlock-mobile-facts">
            {signalRows.map((signal) => (
              <div key={signal.name} className={`deadlock-mobile-fact ${signal.active ? "active" : ""}`}>
                <span>{signal.name}</span>
                <strong>{signal.value}</strong>
              </div>
            ))}
          </div>
        </div>
        <div className="tcp-handshake-caption deadlock-caption">
          <strong>{readLocalizedText(activeStep.title, locale)}</strong>
          <span>{completedSteps}/{simulation.steps.length}</span>
        </div>
      </div>
    </div>
  );
}

function ExplainPlanStage({
  simulation,
  locale,
  completedSteps,
  activeStepIndex,
}: {
  simulation: VisualSimulation;
  locale: Locale;
  completedSteps: number;
  activeStepIndex: number;
}) {
  const activeStep = simulation.steps[activeStepIndex];
  const label = (zh: string, en: string) => (locale === "zh" ? zh : en);
  const planActive = completedSteps >= 1;
  const scanActive = completedSteps >= 2;
  const rangeActive = completedSteps >= 3;
  const compositeActive = completedSteps >= 4;
  const validateActive = completedSteps >= 5;
  const explainRows = [
    {
      stage: "before",
      type: "ALL",
      key: "NULL",
      rows: "1.50M",
      extra: "Using where",
      active: scanActive,
      tone: "danger",
    },
    {
      stage: "range",
      type: "range",
      key: "i_o_orderdate",
      rows: "32642",
      extra: "Using ICP; where",
      active: rangeActive,
      tone: "teal",
    },
    {
      stage: "best",
      type: "range",
      key: "io_clerk_date",
      rows: "18",
      extra: "Using index condition",
      active: compositeActive,
      tone: "success",
    },
  ];
  const planNodes = [
    { name: "SELECT", detail: "orders query", x: 174, y: 190, active: planActive, tone: "brand" },
    { name: scanActive ? "Full Table Scan" : "Plan node", detail: scanActive ? "ALL / 1.50M rows" : "pending", x: 394, y: 190, active: scanActive, tone: "danger" },
    { name: rangeActive ? "Index Range Scan" : "Index candidate", detail: rangeActive ? "i_o_orderdate" : "possible key", x: 644, y: 190, active: rangeActive, tone: "teal" },
    { name: compositeActive ? "Composite Range" : "Composite index", detail: compositeActive ? "io_clerk_date" : "candidate", x: 886, y: 190, active: compositeActive, tone: "success" },
  ];
  const signalRows = [
    { name: "access type", value: rangeActive ? "range" : scanActive ? "ALL" : "pending", active: scanActive, tone: rangeActive ? "success" : "danger" },
    { name: "chosen key", value: compositeActive ? "io_clerk_date" : rangeActive ? "i_o_orderdate" : scanActive ? "NULL" : "pending", active: scanActive, tone: rangeActive ? "teal" : "danger" },
    { name: "rows estimate", value: compositeActive ? "18" : rangeActive ? "32642" : scanActive ? "1.50M" : "pending", active: scanActive, tone: compositeActive ? "success" : "warning" },
    { name: "actual time", value: validateActive ? "0.234s checked" : "pending", active: validateActive, tone: "brand" },
  ];
  const mobileFlow = [
    { name: "slow SQL", value: planActive ? "EXPLAIN SELECT orders" : "pending", active: planActive },
    { name: "bad plan", value: scanActive ? "ALL / key NULL / rows 1.50M" : "pending", active: scanActive },
    { name: "range plan", value: rangeActive ? "BETWEEN uses i_o_orderdate" : "pending", active: rangeActive },
    { name: "best plan", value: compositeActive ? "io_clerk_date rows=18" : "pending", active: compositeActive },
    { name: "verify", value: validateActive ? "EXPLAIN ANALYZE + slow log" : "pending", active: validateActive },
  ];

  return (
    <div className="visual-stage explain-stage">
      <div className="explain-card">
        <svg
          className="explain-diagram"
          viewBox="0 0 1120 640"
          role="img"
          aria-label={readLocalizedText(simulation.title, locale)}
        >
          <defs>
            {[
              ["explain-arrow-brand", "var(--brand)"],
              ["explain-arrow-teal", "var(--tertiary)"],
              ["explain-arrow-warning", "#f59e0b"],
              ["explain-arrow-danger", "var(--danger)"],
              ["explain-arrow-success", "var(--success)"],
            ].map(([id, fill]) => (
              <marker
                key={id}
                id={id}
                viewBox="0 0 10 10"
                refX="8.5"
                refY="5"
                markerWidth="8"
                markerHeight="8"
                orient="auto"
              >
                <path d="M 0 0 L 10 5 L 0 10 z" fill={fill} />
              </marker>
            ))}
            <filter id="explain-soft-shadow" x="-20%" y="-30%" width="140%" height="160%">
              <feDropShadow dx="0" dy="10" stdDeviation="10" floodColor="#172033" floodOpacity="0.13" />
            </filter>
          </defs>

          <rect className="explain-bg" x="24" y="24" width="1072" height="588" rx="28" />
          <text className="explain-title" x="560" y="70">
            {readLocalizedText(simulation.title, locale)}
          </text>
          <text className="explain-subtitle" x="560" y="100">
            {label("slow SQL -> Visual Explain -> tabular columns -> index rewrite -> actual validation", "slow SQL -> Visual Explain -> tabular columns -> index rewrite -> actual validation")}
          </text>

          <g className={`explain-query-panel ${planActive ? "active" : ""}`}>
            <rect x="70" y="130" width="250" height="170" rx="24" />
            <text className="explain-panel-title" x="96" y="166">Slow SQL</text>
            <text className="explain-panel-subtitle" x="96" y="190">SELECT * FROM orders</text>
            <g className={`explain-sql-chip brand ${planActive ? "active" : ""}`}>
              <rect x="96" y="212" width="196" height="34" rx="17" />
              <text x="194" y="234">YEAR(o_orderdate)=1992</text>
            </g>
            <g className={`explain-sql-chip warning ${planActive ? "active" : ""}`}>
              <rect x="96" y="258" width="196" height="34" rx="17" />
              <text x="194" y="280">o_clerk LIKE '%0223'</text>
            </g>
          </g>

          <g className={`explain-visual-panel ${scanActive ? "active" : ""}`}>
            <rect x="366" y="130" width="668" height="170" rx="24" />
            <text className="explain-panel-title" x="394" y="166">Visual Explain</text>
            <text className="explain-panel-subtitle" x="394" y="190">{label("从左到右观察计划节点和访问路径变化", "Read plan nodes and access path changes from left to right")}</text>
            {planNodes.map((node, index) => (
              <g key={node.name} className={`explain-plan-node ${node.tone} ${node.active ? "active" : ""}`}>
                <rect x={node.x - 82} y={node.y + 26} width="164" height="62" rx="18" />
                <text x={node.x} y={node.y + 52}>{node.name}</text>
                <text x={node.x} y={node.y + 74}>{node.detail}</text>
                {index < planNodes.length - 1 && (
                  <path
                    className={`explain-node-link ${node.active ? "active" : ""}`}
                    d={`M ${node.x + 82} ${node.y + 57} C ${node.x + 108} ${node.y + 57}, ${planNodes[index + 1].x - 108} ${node.y + 57}, ${planNodes[index + 1].x - 84} ${node.y + 57}`}
                    markerEnd={index === 1 ? "url(#explain-arrow-teal)" : index === 2 ? "url(#explain-arrow-success)" : "url(#explain-arrow-brand)"}
                  />
                )}
              </g>
            ))}
          </g>

          <g className={`explain-tabular-panel ${scanActive ? "active" : ""}`}>
            <rect x="70" y="336" width="618" height="164" rx="24" />
            <text className="explain-panel-title" x="98" y="372">Tabular EXPLAIN</text>
            <text className="explain-head" x="108" y="404">stage</text>
            <text className="explain-head" x="216" y="404">type</text>
            <text className="explain-head" x="318" y="404">key</text>
            <text className="explain-head" x="462" y="404">rows</text>
            <text className="explain-head" x="554" y="404">Extra</text>
            {explainRows.map((row, index) => (
              <g key={row.stage} className={`explain-row ${row.tone} ${row.active ? "active" : ""}`}>
                <rect x="96" y={420 + index * 40} width="560" height="30" rx="15" />
                <text x="112" y={440 + index * 40}>{row.stage}</text>
                <text x="216" y={440 + index * 40}>{row.type}</text>
                <text x="318" y={440 + index * 40}>{row.key}</text>
                <text x="462" y={440 + index * 40}>{row.rows}</text>
                <text x="554" y={440 + index * 40}>{row.extra}</text>
              </g>
            ))}
          </g>

          <g className={`explain-index-panel ${rangeActive ? "active" : ""}`}>
            <rect x="724" y="336" width="312" height="164" rx="24" />
            <text className="explain-panel-title" x="752" y="372">{label("改写与索引", "Rewrite and index")}</text>
            <g className={`explain-index-chip teal ${rangeActive ? "active" : ""}`}>
              <rect x="752" y="394" width="236" height="32" rx="16" />
              <text x="870" y="415">BETWEEN date range</text>
            </g>
            <g className={`explain-index-chip warning ${rangeActive ? "active" : ""}`}>
              <rect x="752" y="436" width="236" height="32" rx="16" />
              <text x="870" y="457">LIKE full clerk id</text>
            </g>
            <g className={`explain-index-chip success ${compositeActive ? "active" : ""}`}>
              <rect x="752" y="478" width="236" height="32" rx="16" />
              <text x="870" y="499">INDEX(clerk, orderdate)</text>
            </g>
          </g>

          <g className={`explain-optimizer-path ${planActive ? "active" : ""}`}>
            <path d="M 320 214 C 344 214, 350 214, 366 214" markerEnd="url(#explain-arrow-brand)" />
            <rect x="292" y="304" width="168" height="32" rx="16" />
            <text x="376" y="324">optimizer trace</text>
          </g>
          <g className={`explain-range-path ${rangeActive ? "active" : ""}`}>
            <path d="M 754 334 C 704 310, 652 290, 644 278" markerEnd="url(#explain-arrow-teal)" />
          </g>
          <g className={`explain-composite-path ${compositeActive ? "active" : ""}`}>
            <path d="M 900 334 C 914 310, 910 290, 886 278" markerEnd="url(#explain-arrow-success)" />
          </g>

          <g className={`explain-validate-panel ${validateActive ? "active" : ""}`}>
            <rect x="700" y="524" width="338" height="54" rx="22" />
            <text className="explain-panel-title" x="726" y="546">EXPLAIN ANALYZE</text>
            <text x="726" y="568">{label("估算 rows=18 与实际 rows=18 对齐，慢日志耗时回落", "estimated rows=18 matches actual rows=18; slow-log time drops")}</text>
          </g>

          <g className="explain-signals">
            {signalRows.map((signal, index) => (
              <g key={signal.name} className={`explain-signal ${signal.tone} ${signal.active ? "active" : ""}`}>
                <rect x={70 + index * 168} y="524" width="146" height="54" rx="18" />
                <text x={88 + index * 168} y="546">{signal.name}</text>
                <text x={196 + index * 168} y="568">{signal.value}</text>
              </g>
            ))}
          </g>
        </svg>
        <div className="explain-mobile-map">
          <div className="explain-mobile-flow" aria-hidden="true">
            {mobileFlow.map((item) => (
              <div key={item.name} className={`explain-mobile-hop ${item.active ? "active" : ""}`}>
                <span>{item.name}</span>
                <strong>{item.value}</strong>
              </div>
            ))}
          </div>
          <div className="explain-mobile-facts">
            {signalRows.map((signal) => (
              <div key={signal.name} className={`explain-mobile-fact ${signal.active ? "active" : ""}`}>
                <span>{signal.name}</span>
                <strong>{signal.value}</strong>
              </div>
            ))}
          </div>
        </div>
        <div className="tcp-handshake-caption explain-caption">
          <strong>{readLocalizedText(activeStep.title, locale)}</strong>
          <span>{completedSteps}/{simulation.steps.length}</span>
        </div>
      </div>
    </div>
  );
}

function IpRoutingStage({
  simulation,
  locale,
  completedSteps,
  activeStepIndex,
}: {
  simulation: VisualSimulation;
  locale: Locale;
  completedSteps: number;
  activeStepIndex: number;
}) {
  const activeStep = simulation.steps[activeStepIndex];
  const label = (zh: string, en: string) => (locale === "zh" ? zh : en);
  const routeRows = [
    { cidr: "192.168.2.80/29", target: "R2 192.168.12.2", match: "29 bits", step: 2, tone: "success" },
    { cidr: "192.168.2.64/27", target: "R3 192.168.13.2", match: "27 bits", step: 2, tone: "warning" },
    { cidr: "192.168.2.0/24", target: "R4 192.168.14.2", match: "24 bits", step: 2, tone: "brand" },
    { cidr: "0.0.0.0/0", target: "default", match: "fallback", step: 0, tone: "muted" },
  ];
  const hops = [
    { id: "H1", x: 102, y: 304, title: "H1", ip: "192.168.1.1", mac: "fa:87:9c", step: 1 },
    { id: "R1", x: 310, y: 304, title: "R1", ip: "192.168.1.254", mac: "fa:3f:fd", step: 1 },
    { id: "R2", x: 592, y: 304, title: "R2", ip: "192.168.12.2", mac: "fa:01:0c", step: 4 },
    { id: "H2", x: 850, y: 304, title: "H2", ip: "192.168.2.82", mac: "fa:4a:f5", step: 5 },
  ];
  const routeActive = completedSteps >= 2;
  const ttlActive = completedSteps >= 3;
  const rewriteActive = completedSteps >= 4;
  const returnActive = completedSteps >= 5;

  return (
    <div className="visual-stage ip-routing-stage">
      <div className="ip-routing-card">
        <svg
          className="ip-routing-diagram"
          viewBox="0 0 1120 620"
          role="img"
          aria-label={readLocalizedText(simulation.title, locale)}
        >
          <defs>
            {[
              ["ip-route-arrow-brand", "var(--brand)"],
              ["ip-route-arrow-teal", "var(--tertiary)"],
              ["ip-route-arrow-warning", "#f59e0b"],
              ["ip-route-arrow-success", "var(--success)"],
              ["ip-route-arrow-danger", "var(--danger)"],
              ["ip-route-arrow-muted", "color-mix(in srgb, var(--muted) 58%, transparent)"],
            ].map(([id, fill]) => (
              <marker
                key={id}
                id={id}
                viewBox="0 0 10 10"
                refX="8.5"
                refY="5"
                markerWidth="8"
                markerHeight="8"
                orient="auto"
              >
                <path d="M 0 0 L 10 5 L 0 10 z" fill={fill} />
              </marker>
            ))}
            <filter id="ip-route-soft-shadow" x="-20%" y="-30%" width="140%" height="160%">
              <feDropShadow dx="0" dy="10" stdDeviation="10" floodColor="#172033" floodOpacity="0.13" />
            </filter>
          </defs>

          <rect className="ip-route-bg" x="24" y="24" width="1072" height="548" rx="28" />
          <text className="ip-route-title" x="560" y="70">
            {readLocalizedText(simulation.title, locale)}
          </text>
          <text className="ip-route-subtitle" x="560" y="100">
            {label(
              "dst IP -> longest prefix -> next hop -> TTL -1 -> new Ethernet frame -> return route",
              "dst IP -> longest prefix -> next hop -> TTL -1 -> new Ethernet frame -> return route",
            )}
          </text>

          <g className="ip-route-lan left-lan">
            <rect x="60" y="236" width="338" height="154" rx="26" />
            <text x="86" y="266">LAN A 192.168.1.0/24</text>
          </g>
          <g className="ip-route-lan transit-lan">
            <rect x="430" y="236" width="278" height="154" rx="26" />
            <text x="456" y="266">Transit 192.168.12.0/24</text>
          </g>
          <g className="ip-route-lan right-lan">
            <rect x="760" y="236" width="252" height="154" rx="26" />
            <text x="786" y="266">LAN B 192.168.2.80/29</text>
          </g>

          {hops.map((hop) => (
            <g key={hop.id} className={`ip-route-device ${completedSteps >= hop.step ? "active" : ""}`}>
              <rect x={hop.x - 62} y={hop.y - 42} width="124" height="84" rx="18" />
              <text className="ip-route-device-title" x={hop.x} y={hop.y - 14}>{hop.title}</text>
              <text x={hop.x} y={hop.y + 10}>{hop.ip}</text>
              <text x={hop.x} y={hop.y + 32}>MAC {hop.mac}</text>
            </g>
          ))}

          <g className={`ip-route-flow host-gateway ${completedSteps >= 1 ? "active" : ""}`}>
            <path d="M 164 304 C 202 304, 230 304, 248 304" markerEnd="url(#ip-route-arrow-brand)" />
            <rect x="134" y="168" width="250" height="54" rx="18" />
            <text x="259" y="190">{label("远端目标，交给默认网关", "Remote target, use default gateway")}</text>
            <text x="259" y="210">dst IP 192.168.2.82 / MAC R1</text>
          </g>

          <g className={`ip-route-panel route-table ${routeActive ? "active" : ""}`}>
            <rect x="112" y="418" width="456" height="154" rx="22" />
            <text className="ip-route-panel-title" x="140" y="448">{label("R1 路由表：最长前缀匹配", "R1 route table: longest-prefix match")}</text>
            <text className="ip-route-table-head" x="140" y="476">Destination</text>
            <text className="ip-route-table-head" x="318" y="476">Target</text>
            <text className="ip-route-table-head" x="496" y="476">Match</text>
            {routeRows.map((row, index) => (
              <g
                key={row.cidr}
                className={`ip-route-row ${row.tone} ${completedSteps >= row.step ? "active" : ""} ${index === 0 && routeActive ? "winner" : ""}`}
              >
                <rect x="134" y={488 + index * 20} width="410" height="18" rx="9" />
                <text x="148" y={501 + index * 20}>{row.cidr}</text>
                <text x="318" y={501 + index * 20}>{row.target}</text>
                <text x="500" y={501 + index * 20}>{row.match}</text>
              </g>
            ))}
          </g>

          <g className={`ip-route-flow lpm-path ${routeActive ? "active" : ""}`}>
            <path d="M 330 346 C 346 386, 382 404, 430 422" markerEnd="url(#ip-route-arrow-teal)" />
            <rect x="420" y="176" width="216" height="44" rx="17" />
            <text x="528" y="202">{label("/29 胜出，下一跳 R2", "/29 wins, next hop R2")}</text>
          </g>

          <g className={`ip-route-ttl-panel ${ttlActive ? "active" : ""}`}>
            <rect x="648" y="128" width="196" height="94" rx="20" />
            <text className="ip-route-panel-title" x="674" y="160">IP Header</text>
            <text x="676" y="186">TTL 64 {"->"} 63</text>
            <text x="676" y="206">checksum recalculated</text>
            <path d="M 370 276 C 444 210, 572 202, 648 174" markerEnd="url(#ip-route-arrow-warning)" />
          </g>

          <g className={`ip-route-flow rewrite-path ${rewriteActive ? "active" : ""}`}>
            <path d="M 372 304 C 434 304, 484 304, 530 304" markerEnd="url(#ip-route-arrow-success)" />
            <rect x="398" y="332" width="236" height="50" rx="18" />
            <text x="516" y="352">{label("丢弃入站帧，重写二层头", "Discard frame, rewrite L2 header")}</text>
            <text x="516" y="372">MAC R1-out {"->"} R2-in</text>
          </g>

          <g className={`ip-route-flow target-path ${returnActive ? "active" : ""}`}>
            <path d="M 654 304 C 718 304, 748 304, 788 304" markerEnd="url(#ip-route-arrow-success)" />
            <rect x="736" y="410" width="282" height="80" rx="20" />
            <text className="ip-route-panel-title" x="762" y="440">{label("目标网络与回程", "Target network and return")}</text>
            <text x="764" y="466">reply: 192.168.2.82 {"->"} 192.168.1.1</text>
            <text x="764" y="486">{label("需要回程路由和防火墙状态", "needs return route and firewall state")}</text>
          </g>

          <g className={`ip-route-flow return-path ${returnActive ? "active" : ""}`}>
            <path d="M 850 262 C 760 150, 474 146, 310 262" markerEnd="url(#ip-route-arrow-danger)" />
            <rect x="858" y="142" width="172" height="48" rx="18" />
            <text x="944" y="162">traceroute / ICMP</text>
            <text x="944" y="182">return path check</text>
          </g>

          <g className="ip-route-signal-panel">
            <rect x="864" y="126" width="206" height="124" rx="22" />
            <text className="ip-route-panel-title" x="890" y="158">{label("排障读数", "Debug signals")}</text>
            {[
              { label: "route", value: routeActive ? "via R2" : "pending", step: 2, tone: "teal" },
              { label: "TTL", value: ttlActive ? "63 / ICMP" : "idle", step: 3, tone: "warning" },
              { label: "return path", value: returnActive ? "verified" : "pending", step: 5, tone: "danger" },
            ].map((signal, index) => (
              <g key={signal.label} className={`ip-route-signal ${signal.tone} ${completedSteps >= signal.step ? "active" : ""}`}>
                <rect x="890" y={176 + index * 24} width="150" height="18" rx="9" />
                <text x="900" y={189 + index * 24}>{signal.label}</text>
                <text x="1032" y={189 + index * 24}>{signal.value}</text>
              </g>
            ))}
          </g>
        </svg>
        <div className="ip-routing-mobile-map">
          <div className="ip-route-mobile-path" aria-hidden="true">
            {hops.map((hop) => (
              <div key={hop.id} className={`ip-route-mobile-hop ${completedSteps >= hop.step ? "active" : ""}`}>
                <span>{hop.title}</span>
                <strong>{hop.ip}</strong>
                <em>MAC {hop.mac}</em>
              </div>
            ))}
          </div>
          <div className="ip-route-mobile-facts">
            {[
              {
                title: label("最长前缀", "Longest prefix"),
                value: routeActive ? "192.168.2.80/29 -> R2" : "pending",
                active: routeActive,
              },
              {
                title: "TTL",
                value: ttlActive ? "64 -> 63 / checksum recalculated" : "pending",
                active: ttlActive,
              },
              {
                title: label("二层头", "L2 header"),
                value: rewriteActive ? "MAC R1-out -> R2-in" : "pending",
                active: rewriteActive,
              },
              {
                title: label("回程", "Return path"),
                value: returnActive ? "reply route verified" : "pending",
                active: returnActive,
              },
            ].map((fact) => (
              <div key={fact.title} className={`ip-route-mobile-fact ${fact.active ? "active" : ""}`}>
                <span>{fact.title}</span>
                <strong>{fact.value}</strong>
              </div>
            ))}
          </div>
        </div>
        <div className="tcp-handshake-caption ip-routing-caption">
          <strong>{readLocalizedText(activeStep.title, locale)}</strong>
          <span>{completedSteps}/{simulation.steps.length}</span>
        </div>
      </div>
    </div>
  );
}

function KubernetesServiceStage({
  simulation,
  locale,
  completedSteps,
  activeStepIndex,
}: {
  simulation: VisualSimulation;
  locale: Locale;
  completedSteps: number;
  activeStepIndex: number;
}) {
  const activeStep = simulation.steps[activeStepIndex];
  const label = (zh: string, en: string) => (locale === "zh" ? zh : en);
  const selectorActive = completedSteps >= 1;
  const entryActive = completedSteps >= 2;
  const proxyActive = completedSteps >= 3;
  const forwardActive = completedSteps >= 4;
  const diagnoseActive = completedSteps >= 5;
  const pods = [
    { id: "pod-a", name: "checkout-7c9f-a", ip: "10.244.1.7", node: "node-a", ready: true, x: 744, y: 224, active: selectorActive },
    { id: "pod-b", name: "checkout-7c9f-b", ip: "10.244.2.9", node: "node-b", ready: true, x: 914, y: 224, active: forwardActive },
    { id: "pod-c", name: "checkout-7c9f-c", ip: "10.244.3.11", node: "node-c", ready: false, x: 828, y: 356, active: diagnoseActive },
  ];
  const endpointRows = [
    { addr: "10.244.1.7:8080", zone: "node-a", state: "Ready", active: selectorActive, tone: "success" },
    { addr: "10.244.2.9:8080", zone: "node-b", state: "Ready", active: selectorActive, tone: "success" },
    { addr: "10.244.3.11:8080", zone: "node-c", state: "NotReady", active: diagnoseActive, tone: "danger" },
  ];
  const ruleRows = [
    { name: "KUBE-SVC", value: entryActive ? "10.96.12.34:80" : "pending", active: entryActive, tone: "brand" },
    { name: "KUBE-SEP", value: proxyActive ? "2 Ready endpoints" : "pending", active: proxyActive, tone: "warning" },
    { name: "DNAT", value: forwardActive ? "10.244.2.9:8080" : "pending", active: forwardActive, tone: "success" },
  ];
  const signalRows = [
    { name: "endpoints", value: diagnoseActive ? "2/3 Ready" : selectorActive ? "2 Ready" : "pending", active: selectorActive, tone: "success" },
    { name: "policy", value: diagnoseActive ? "allow ns=prod" : "pending", active: diagnoseActive, tone: "danger" },
    { name: "sessionAffinity", value: diagnoseActive ? "ClientIP off" : "pending", active: diagnoseActive, tone: "brand" },
  ];

  return (
    <div className="visual-stage k8s-service-stage">
      <div className="k8s-service-card">
        <svg
          className="k8s-service-diagram"
          viewBox="0 0 1120 620"
          role="img"
          aria-label={readLocalizedText(simulation.title, locale)}
        >
          <defs>
            {[
              ["k8s-service-arrow-brand", "var(--brand)"],
              ["k8s-service-arrow-teal", "var(--tertiary)"],
              ["k8s-service-arrow-warning", "#f59e0b"],
              ["k8s-service-arrow-success", "var(--success)"],
              ["k8s-service-arrow-danger", "var(--danger)"],
            ].map(([id, fill]) => (
              <marker
                key={id}
                id={id}
                viewBox="0 0 10 10"
                refX="8.5"
                refY="5"
                markerWidth="8"
                markerHeight="8"
                orient="auto"
              >
                <path d="M 0 0 L 10 5 L 0 10 z" fill={fill} />
              </marker>
            ))}
            <filter id="k8s-service-soft-shadow" x="-20%" y="-30%" width="140%" height="160%">
              <feDropShadow dx="0" dy="10" stdDeviation="10" floodColor="#172033" floodOpacity="0.13" />
            </filter>
          </defs>

          <rect className="k8s-service-bg" x="24" y="24" width="1072" height="548" rx="28" />
          <text className="k8s-service-title" x="560" y="70">
            {readLocalizedText(simulation.title, locale)}
          </text>
          <text className="k8s-service-subtitle" x="560" y="100">
            {label(
              "selector -> EndpointSlice -> ClusterIP / DNS -> kube-proxy rules -> Ready Pod",
              "selector -> EndpointSlice -> ClusterIP / DNS -> kube-proxy rules -> Ready Pod",
            )}
          </text>

          <g className={`k8s-service-client ${entryActive ? "active" : ""}`}>
            <rect x="64" y="178" width="164" height="112" rx="22" />
            <text className="k8s-service-node-title" x="146" y="214">{label("集群内客户端", "In-cluster client")}</text>
            <text x="146" y="242">GET checkout:80</text>
            <text x="146" y="264">checkout.default.svc</text>
          </g>

          <g className={`k8s-service-entry ${entryActive ? "active" : ""}`}>
            <rect x="290" y="146" width="196" height="130" rx="24" />
            <text className="k8s-service-node-title" x="388" y="184">Service</text>
            <text x="388" y="212">ClusterIP 10.96.12.34</text>
            <text x="388" y="236">port 80 {"->"} targetPort 8080</text>
            <text className="k8s-service-chip-text" x="388" y="260">selector app=checkout</text>
          </g>

          <g className={`k8s-service-endpoints ${selectorActive ? "active" : ""}`}>
            <rect x="276" y="326" width="246" height="178" rx="24" />
            <text className="k8s-service-panel-title" x="304" y="360">EndpointSlice</text>
            <text className="k8s-service-panel-subtitle" x="304" y="382">kubernetes.io/service-name=checkout</text>
            {endpointRows.map((endpoint, index) => (
              <g
                key={endpoint.addr}
                className={`k8s-service-endpoint-row ${endpoint.tone} ${endpoint.active ? "active" : ""}`}
              >
                <rect x="304" y={402 + index * 32} width="188" height="25" rx="13" />
                <text x="318" y={419 + index * 32}>{endpoint.addr}</text>
                <text x="484" y={419 + index * 32}>{endpoint.state}</text>
              </g>
            ))}
          </g>

          <g className={`k8s-service-proxy ${proxyActive ? "active" : ""}`}>
            <rect x="560" y="146" width="154" height="358" rx="24" />
            <text className="k8s-service-node-title" x="637" y="184">kube-proxy</text>
            <text x="637" y="210">node-b</text>
            <text x="637" y="236">watch Service</text>
            <text x="637" y="256">watch EndpointSlice</text>
            <g className="k8s-service-rule-stack">
              {ruleRows.map((rule, index) => (
                <g
                  key={rule.name}
                  className={`k8s-service-rule ${rule.tone} ${rule.active ? "active" : ""}`}
                >
                  <rect x="584" y={300 + index * 48} width="106" height="36" rx="14" />
                  <text x="598" y={315 + index * 48}>{rule.name}</text>
                  <text x="598" y={331 + index * 48}>{rule.value}</text>
                </g>
              ))}
            </g>
          </g>

          <g className="k8s-service-pod-zone">
            <rect x="734" y="146" width="322" height="358" rx="28" />
            <text className="k8s-service-panel-title" x="762" y="184">{label("后端工作负载", "Backend workload")}</text>
            <text className="k8s-service-panel-subtitle" x="762" y="206">Deployment checkout · replicas=3</text>
            {pods.map((pod) => (
              <g
                key={pod.id}
                className={`k8s-service-pod ${pod.ready ? "ready" : "not-ready"} ${pod.active ? "active" : ""}`}
              >
                <rect x={pod.x - 62} y={pod.y - 42} width="124" height="84" rx="18" />
                <text className="k8s-service-pod-name" x={pod.x} y={pod.y - 14}>{pod.name}</text>
                <text x={pod.x} y={pod.y + 9}>{pod.ip}</text>
                <text x={pod.x} y={pod.y + 31}>{pod.ready ? "Ready" : "NotReady"} · {pod.node}</text>
              </g>
            ))}
          </g>

          <g className={`k8s-service-selector-path ${selectorActive ? "active" : ""}`}>
            <path d="M 388 276 C 386 304, 376 312, 376 326" markerEnd="url(#k8s-service-arrow-brand)" />
            <rect x="86" y="334" width="152" height="42" rx="18" />
            <text x="162" y="360">selector app=checkout</text>
          </g>

          <g className={`k8s-service-entry-path ${entryActive ? "active" : ""}`}>
            <path d="M 228 234 C 252 226, 264 214, 290 214" markerEnd="url(#k8s-service-arrow-teal)" />
            <rect x="72" y="120" width="180" height="42" rx="18" />
            <text x="162" y="146">DNS {"->"} ClusterIP</text>
          </g>

          <g className={`k8s-service-sync-path ${proxyActive ? "active" : ""}`}>
            <path d="M 522 412 C 544 392, 550 366, 560 338" markerEnd="url(#k8s-service-arrow-warning)" />
            <path d="M 486 214 C 528 210, 536 210, 560 210" markerEnd="url(#k8s-service-arrow-warning)" />
            <rect x="438" y="516" width="206" height="38" rx="17" />
            <text x="541" y="540">control loop sync rules</text>
          </g>

          <g className={`k8s-service-forward-path ${forwardActive ? "active" : ""}`}>
            <path d="M 714 342 C 752 314, 812 286, 852 252" markerEnd="url(#k8s-service-arrow-success)" />
            <rect x="744" y="520" width="246" height="38" rx="17" />
            <text x="867" y="544">DNAT 10.96.12.34:80 {"->"} 10.244.2.9:8080</text>
          </g>

          <g className={`k8s-service-diagnosis ${diagnoseActive ? "active" : ""}`}>
            <rect x="66" y="402" width="176" height="102" rx="22" />
            <text className="k8s-service-panel-title" x="92" y="434">{label("排障信号", "Debug signals")}</text>
            {signalRows.map((signal, index) => (
              <g
                key={signal.name}
                className={`k8s-service-signal ${signal.tone} ${signal.active ? "active" : ""}`}
              >
                <rect x="92" y={452 + index * 24} width="124" height="18" rx="9" />
                <text x="102" y={465 + index * 24}>{signal.name}</text>
                <text x="210" y={465 + index * 24}>{signal.value}</text>
              </g>
            ))}
          </g>

          <g className={`k8s-service-return-path ${diagnoseActive ? "active" : ""}`}>
            <path d="M 914 182 C 802 78, 306 72, 146 178" markerEnd="url(#k8s-service-arrow-danger)" />
            <rect x="786" y="86" width="226" height="38" rx="17" />
            <text x="899" y="110">response path + NetworkPolicy</text>
          </g>
        </svg>
        <div className="k8s-service-mobile-map">
          <div className="k8s-service-mobile-flow" aria-hidden="true">
            {[
              { name: "Service", value: "checkout.default.svc -> 10.96.12.34", active: entryActive },
              { name: "EndpointSlice", value: selectorActive ? "2 Ready / 1 NotReady" : "pending", active: selectorActive },
              { name: "kube-proxy", value: proxyActive ? "iptables rules synced" : "watching", active: proxyActive },
              { name: "Pod", value: forwardActive ? "10.244.2.9:8080" : "pending", active: forwardActive },
            ].map((item) => (
              <div key={item.name} className={`k8s-service-mobile-hop ${item.active ? "active" : ""}`}>
                <span>{item.name}</span>
                <strong>{item.value}</strong>
              </div>
            ))}
          </div>
          <div className="k8s-service-mobile-facts">
            {signalRows.map((signal) => (
              <div key={signal.name} className={`k8s-service-mobile-fact ${signal.active ? "active" : ""}`}>
                <span>{signal.name}</span>
                <strong>{signal.value}</strong>
              </div>
            ))}
          </div>
        </div>
        <div className="tcp-handshake-caption k8s-service-caption">
          <strong>{readLocalizedText(activeStep.title, locale)}</strong>
          <span>{completedSteps}/{simulation.steps.length}</span>
        </div>
      </div>
    </div>
  );
}

function KubernetesEndpointSliceStage({
  simulation,
  locale,
  completedSteps,
  activeStepIndex,
}: {
  simulation: VisualSimulation;
  locale: Locale;
  completedSteps: number;
  activeStepIndex: number;
}) {
  const activeStep = simulation.steps[activeStepIndex];
  const label = (zh: string, en: string) => (locale === "zh" ? zh : en);
  const serviceActive = completedSteps >= 1;
  const shardActive = completedSteps >= 2;
  const conditionActive = completedSteps >= 3;
  const topologyActive = completedSteps >= 4;
  const watchActive = completedSteps >= 5;
  const podRows = [
    { name: "checkout-7d9-a", ip: "10.244.1.8", zone: "zone-a", state: "Ready", active: serviceActive, tone: "success" },
    { name: "checkout-7d9-b", ip: "10.244.2.11", zone: "zone-b", state: "Ready", active: serviceActive, tone: "success" },
    { name: "checkout-7d9-c", ip: "10.244.3.6", zone: "zone-c", state: "Terminating", active: conditionActive, tone: "warning" },
  ];
  const sliceRows = [
    { name: "checkout-abc", value: shardActive ? "100 endpoints" : "pending", zone: topologyActive ? "zone-a hint" : "IPv4", active: shardActive, tone: "brand" },
    { name: "checkout-def", value: shardActive ? "100 endpoints" : "pending", zone: topologyActive ? "zone-b hint" : "IPv4", active: shardActive, tone: "teal" },
    { name: "checkout-ghi", value: shardActive ? "37 endpoints" : "pending", zone: topologyActive ? "zone-c hint" : "IPv4", active: shardActive, tone: "success" },
  ];
  const conditionRows = [
    { name: "ready", value: conditionActive ? "true" : "pending", active: conditionActive, tone: "success" },
    { name: "serving", value: conditionActive ? "true" : "pending", active: conditionActive, tone: "teal" },
    { name: "terminating", value: conditionActive ? "checkout-7d9-c" : "pending", active: conditionActive, tone: "warning" },
  ];
  const watcherRows = [
    { name: "kube-proxy node-a", value: watchActive ? "same-zone endpoint" : "watching", active: watchActive, tone: "success" },
    { name: "CoreDNS", value: watchActive ? "A records updated" : "watching", active: watchActive, tone: "brand" },
    { name: "controller cache", value: watchActive ? "rv=182291" : "watching", active: watchActive, tone: "teal" },
  ];
  const signals = [
    { name: "slice size", value: shardActive ? "100 max / 3 slices" : "pending", active: shardActive, tone: "brand" },
    { name: "Ready", value: conditionActive ? "236/237 endpoints" : "pending", active: conditionActive, tone: "success" },
    { name: "hints", value: topologyActive ? "forZones set" : "pending", active: topologyActive, tone: "teal" },
    { name: "watch lag", value: watchActive ? "< 1s synced" : "pending", active: watchActive, tone: "warning" },
  ];

  return (
    <div className="visual-stage k8s-endpointslice-stage">
      <div className="k8s-endpointslice-card">
        <svg
          className="k8s-endpointslice-diagram"
          viewBox="0 0 1120 640"
          role="img"
          aria-label={readLocalizedText(simulation.title, locale)}
        >
          <defs>
            {[
              ["k8s-endpointslice-arrow-brand", "var(--brand)"],
              ["k8s-endpointslice-arrow-teal", "var(--tertiary)"],
              ["k8s-endpointslice-arrow-warning", "#f59e0b"],
              ["k8s-endpointslice-arrow-success", "var(--success)"],
              ["k8s-endpointslice-arrow-danger", "var(--danger)"],
            ].map(([id, fill]) => (
              <marker
                key={id}
                id={id}
                viewBox="0 0 10 10"
                refX="8.5"
                refY="5"
                markerWidth="8"
                markerHeight="8"
                orient="auto"
              >
                <path d="M 0 0 L 10 5 L 0 10 z" fill={fill} />
              </marker>
            ))}
            <filter id="k8s-endpointslice-soft-shadow" x="-20%" y="-30%" width="140%" height="160%">
              <feDropShadow dx="0" dy="10" stdDeviation="10" floodColor="#172033" floodOpacity="0.13" />
            </filter>
          </defs>

          <rect className="k8s-endpointslice-bg" x="24" y="24" width="1072" height="568" rx="28" />
          <text className="k8s-endpointslice-title" x="560" y="70">
            {readLocalizedText(simulation.title, locale)}
          </text>
          <text className="k8s-endpointslice-subtitle" x="560" y="100">
            Service selector {"->"} EndpointSlice controller {"->"} shards / conditions / hints {"->"} kube-proxy watch
          </text>

          <g className={`k8s-endpointslice-service ${serviceActive ? "active" : ""}`}>
            <rect x="64" y="146" width="224" height="150" rx="24" />
            <text className="k8s-endpointslice-panel-title" x="92" y="180">Service checkout</text>
            <text x="92" y="206">selector app=checkout</text>
            <text x="92" y="228">ports: http {"->"} 8080</text>
            <text x="92" y="250">addressType: IPv4</text>
            <g className={`k8s-endpointslice-chip brand ${serviceActive ? "active" : ""}`}>
              <rect x="92" y="264" width="158" height="24" rx="12" />
              <text x="104" y="281">owner Service UID</text>
            </g>
          </g>

          <g className={`k8s-endpointslice-controller ${serviceActive ? "active" : ""}`}>
            <rect x="368" y="132" width="222" height="170" rx="24" />
            <text className="k8s-endpointslice-panel-title" x="394" y="166">EndpointSlice Controller</text>
            <text x="394" y="192">watch Service</text>
            <text x="394" y="214">watch Pods + readiness</text>
            <text x="394" y="236">managed-by=endpointslice-controller</text>
            <g className={`k8s-endpointslice-chip teal ${shardActive ? "active" : ""}`}>
              <rect x="394" y="252" width="152" height="24" rx="12" />
              <text x="406" y="269">batch reconcile</text>
            </g>
          </g>

          <g className={`k8s-endpointslice-pods ${serviceActive ? "active" : ""}`}>
            <rect x="64" y="354" width="270" height="178" rx="24" />
            <text className="k8s-endpointslice-panel-title" x="92" y="388">{label("后端 Pod 快照", "Backend Pod snapshot")}</text>
            <text className="k8s-endpointslice-panel-subtitle" x="92" y="410">labels app=checkout · readiness gates</text>
            {podRows.map((pod, index) => (
              <g
                key={pod.name}
                className={`k8s-endpointslice-row ${pod.tone} ${pod.active ? "active" : ""}`}
              >
                <rect x="92" y={430 + index * 34} width="216" height="26" rx="13" />
                <text x="106" y={447 + index * 34}>{pod.ip}</text>
                <text x="300" y={447 + index * 34}>{pod.state}</text>
              </g>
            ))}
          </g>

          <g className={`k8s-endpointslice-slices ${shardActive ? "active" : ""}`}>
            <rect x="654" y="122" width="314" height="238" rx="26" />
            <text className="k8s-endpointslice-panel-title" x="682" y="158">EndpointSlice shards</text>
            <text className="k8s-endpointslice-panel-subtitle" x="682" y="180">discovery.k8s.io/v1 · max 100 endpoints</text>
            {sliceRows.map((slice, index) => (
              <g
                key={slice.name}
                className={`k8s-endpointslice-slice ${slice.tone} ${slice.active ? "active" : ""}`}
              >
                <rect x="682" y={202 + index * 48} width="238" height="36" rx="15" />
                <text x="698" y={217 + index * 48}>{slice.name}</text>
                <text x="698" y={232 + index * 48}>{slice.value} · {slice.zone}</text>
              </g>
            ))}
            <g className={`k8s-endpointslice-chip success ${shardActive ? "active" : ""}`}>
              <rect x="682" y="338" width="188" height="24" rx="12" />
              <text x="694" y="355">labels: service-name=checkout</text>
            </g>
          </g>

          <g className={`k8s-endpointslice-conditions ${conditionActive ? "active" : ""}`}>
            <rect x="394" y="368" width="230" height="164" rx="24" />
            <text className="k8s-endpointslice-panel-title" x="422" y="402">Endpoint conditions</text>
            <text className="k8s-endpointslice-panel-subtitle" x="422" y="424">per endpoint status fields</text>
            {conditionRows.map((row, index) => (
              <g
                key={row.name}
                className={`k8s-endpointslice-condition ${row.tone} ${row.active ? "active" : ""}`}
              >
                <rect x="422" y={444 + index * 32} width="156" height="24" rx="12" />
                <text x="436" y={461 + index * 32}>{row.name}</text>
                <text x="570" y={461 + index * 32}>{row.value}</text>
              </g>
            ))}
          </g>

          <g className={`k8s-endpointslice-topology ${topologyActive ? "active" : ""}`}>
            <rect x="654" y="398" width="168" height="134" rx="24" />
            <text className="k8s-endpointslice-panel-title" x="682" y="432">Topology hints</text>
            <text x="682" y="458">forZones: zone-a</text>
            <text x="682" y="480">local endpoint preferred</text>
            <text x="682" y="502">cross-zone cost lower</text>
          </g>

          <g className={`k8s-endpointslice-watchers ${watchActive ? "active" : ""}`}>
            <rect x="850" y="398" width="190" height="164" rx="24" />
            <text className="k8s-endpointslice-panel-title" x="878" y="432">Watch consumers</text>
            {watcherRows.map((row, index) => (
              <g
                key={row.name}
                className={`k8s-endpointslice-watcher ${row.tone} ${row.active ? "active" : ""}`}
              >
                <rect x="878" y={452 + index * 34} width="136" height="26" rx="13" />
                <text x="892" y={469 + index * 34}>{row.name}</text>
              </g>
            ))}
          </g>

          <g className={`k8s-endpointslice-service-path ${serviceActive ? "active" : ""}`}>
            <path d="M 288 214 C 324 210, 340 210, 368 210" markerEnd="url(#k8s-endpointslice-arrow-brand)" />
            <path d="M 262 354 C 320 318, 376 294, 430 302" markerEnd="url(#k8s-endpointslice-arrow-brand)" />
          </g>

          <g className={`k8s-endpointslice-shard-path ${shardActive ? "active" : ""}`}>
            <path d="M 590 212 C 626 208, 638 208, 654 208" markerEnd="url(#k8s-endpointslice-arrow-teal)" />
            <rect x="504" y="318" width="174" height="36" rx="16" />
            <text x="591" y="341">shard by endpoint count</text>
          </g>

          <g className={`k8s-endpointslice-condition-path ${conditionActive ? "active" : ""}`}>
            <path d="M 654 300 C 616 334, 586 352, 548 368" markerEnd="url(#k8s-endpointslice-arrow-warning)" />
            <rect x="380" y="554" width="210" height="34" rx="16" />
            <text x="485" y="576">ready / serving / terminating</text>
          </g>

          <g className={`k8s-endpointslice-topology-path ${topologyActive ? "active" : ""}`}>
            <path d="M 782 360 C 766 374, 754 384, 740 398" markerEnd="url(#k8s-endpointslice-arrow-success)" />
          </g>

          <g className={`k8s-endpointslice-watch-path ${watchActive ? "active" : ""}`}>
            <path d="M 822 468 C 832 468, 840 468, 850 468" markerEnd="url(#k8s-endpointslice-arrow-danger)" />
            <path d="M 918 398 C 900 334, 882 314, 842 292" markerEnd="url(#k8s-endpointslice-arrow-danger)" />
            <rect x="854" y="328" width="164" height="34" rx="16" />
            <text x="936" y="350">watch fan-out</text>
          </g>

          <g className="k8s-endpointslice-signals">
            {signals.map((signal, index) => (
              <g key={signal.name} className={`k8s-endpointslice-signal ${signal.tone} ${signal.active ? "active" : ""}`}>
                <rect x={64 + index * 252} y="600" width="218" height="30" rx="14" />
                <text x={82 + index * 252} y="619">{signal.name}</text>
                <text x={264 + index * 252} y="619">{signal.value}</text>
              </g>
            ))}
          </g>
        </svg>
        <div className="k8s-endpointslice-mobile-map">
          <div className="k8s-endpointslice-mobile-flow" aria-hidden="true">
            {[
              { name: "Service", value: "selector app=checkout / port http", active: serviceActive },
              { name: "Controller", value: shardActive ? "3 EndpointSlices created" : "watching Pods", active: shardActive },
              { name: "Conditions", value: conditionActive ? "ready + serving + terminating" : "pending", active: conditionActive },
              { name: "Topology", value: topologyActive ? "forZones hints set" : "pending", active: topologyActive },
              { name: "Watchers", value: watchActive ? "kube-proxy rules synced" : "waiting", active: watchActive },
            ].map((item) => (
              <div key={item.name} className={`k8s-endpointslice-mobile-hop ${item.active ? "active" : ""}`}>
                <span>{item.name}</span>
                <strong>{item.value}</strong>
              </div>
            ))}
          </div>
          <div className="k8s-endpointslice-mobile-facts">
            {signals.map((signal) => (
              <div key={signal.name} className={`k8s-endpointslice-mobile-fact ${signal.active ? "active" : ""}`}>
                <span>{signal.name}</span>
                <strong>{signal.value}</strong>
              </div>
            ))}
          </div>
        </div>
        <div className="tcp-handshake-caption k8s-endpointslice-caption">
          <strong>{readLocalizedText(activeStep.title, locale)}</strong>
          <span>{completedSteps}/{simulation.steps.length}</span>
        </div>
      </div>
    </div>
  );
}

function KubernetesIngressStage({
  simulation,
  locale,
  completedSteps,
  activeStepIndex,
}: {
  simulation: VisualSimulation;
  locale: Locale;
  completedSteps: number;
  activeStepIndex: number;
}) {
  const activeStep = simulation.steps[activeStepIndex];
  const label = (zh: string, en: string) => (locale === "zh" ? zh : en);
  const edgeActive = completedSteps >= 1;
  const syncActive = completedSteps >= 2;
  const tlsActive = completedSteps >= 3;
  const routeActive = completedSteps >= 4;
  const backendActive = completedSteps >= 5;
  const ruleRows = [
    { host: "shop.example.com", path: "/api", type: "Prefix", backend: "cart-svc:80", active: routeActive, tone: "success" },
    { host: "shop.example.com", path: "/assets", type: "Prefix", backend: "static-svc:80", active: syncActive, tone: "brand" },
    { host: "admin.example.com", path: "/", type: "Exact", backend: "admin-svc:443", active: syncActive, tone: "warning" },
  ];
  const resourceRows = [
    { name: "Ingress", value: syncActive ? "ingressClassName=nginx" : "pending", active: syncActive, tone: "brand" },
    { name: "TLS Secret", value: tlsActive ? "shop-tls loaded" : "pending", active: tlsActive, tone: "teal" },
    { name: "EndpointSlice", value: backendActive ? "3 Ready endpoints" : "watching", active: syncActive, tone: "success" },
  ];
  const backendRows = [
    { name: "cart-svc", value: backendActive ? "10.244.2.18:8080" : "waiting", active: backendActive, tone: "success" },
    { name: "static-svc", value: routeActive ? "10.244.1.12:8080" : "ready", active: routeActive, tone: "brand" },
    { name: "defaultBackend", value: backendActive ? "404 backend" : "configured", active: syncActive, tone: "warning" },
  ];
  const signalRows = [
    { name: "ADDRESS", value: edgeActive ? "203.0.113.20" : "pending", active: edgeActive, tone: "brand" },
    { name: "Events", value: syncActive ? "Sync: OK" : "pending", active: syncActive, tone: "warning" },
    { name: "TLS", value: tlsActive ? "CN shop.example.com" : "pending", active: tlsActive, tone: "teal" },
    { name: "Upstream", value: backendActive ? "3/3 healthy" : "pending", active: backendActive, tone: "success" },
  ];

  return (
    <div className="visual-stage k8s-ingress-stage">
      <div className="k8s-ingress-card">
        <svg
          className="k8s-ingress-diagram"
          viewBox="0 0 1120 620"
          role="img"
          aria-label={readLocalizedText(simulation.title, locale)}
        >
          <defs>
            {[
              ["k8s-ingress-arrow-brand", "var(--brand)"],
              ["k8s-ingress-arrow-teal", "var(--tertiary)"],
              ["k8s-ingress-arrow-warning", "#f59e0b"],
              ["k8s-ingress-arrow-success", "var(--success)"],
              ["k8s-ingress-arrow-danger", "var(--danger)"],
            ].map(([id, fill]) => (
              <marker
                key={id}
                id={id}
                viewBox="0 0 10 10"
                refX="8.5"
                refY="5"
                markerWidth="8"
                markerHeight="8"
                orient="auto"
              >
                <path d="M 0 0 L 10 5 L 0 10 z" fill={fill} />
              </marker>
            ))}
            <filter id="k8s-ingress-soft-shadow" x="-20%" y="-30%" width="140%" height="160%">
              <feDropShadow dx="0" dy="10" stdDeviation="10" floodColor="#172033" floodOpacity="0.13" />
            </filter>
          </defs>

          <rect className="k8s-ingress-bg" x="24" y="24" width="1072" height="548" rx="28" />
          <text className="k8s-ingress-title" x="560" y="70">
            {readLocalizedText(simulation.title, locale)}
          </text>
          <text className="k8s-ingress-subtitle" x="560" y="100">
            {label(
              "Client -> Public endpoint -> Ingress Controller -> TLS + Host/Path rules -> Service backend",
              "Client -> Public endpoint -> Ingress Controller -> TLS + Host/Path rules -> Service backend",
            )}
          </text>

          <g className={`k8s-ingress-client ${edgeActive ? "active" : ""}`}>
            <rect x="58" y="150" width="186" height="124" rx="24" />
            <text className="k8s-ingress-node-title" x="151" y="187">{label("外部客户端", "External client")}</text>
            <text x="151" y="216">GET /api/cart</text>
            <text x="151" y="238">Host shop.example.com</text>
            <text x="151" y="260">SNI shop.example.com</text>
          </g>

          <g className={`k8s-ingress-edge ${edgeActive ? "active" : ""}`}>
            <rect x="310" y="146" width="190" height="132" rx="24" />
            <text className="k8s-ingress-node-title" x="405" y="183">{label("公网入口 / LB", "Public endpoint / LB")}</text>
            <text x="405" y="212">ADDRESS 203.0.113.20</text>
            <text x="405" y="236">80 / 443</text>
            <text x="405" y="260">externalTrafficPolicy=Local</text>
          </g>

          <g className={`k8s-ingress-controller ${syncActive ? "active" : ""}`}>
            <rect x="562" y="128" width="214" height="178" rx="26" />
            <text className="k8s-ingress-node-title" x="669" y="166">Ingress Controller</text>
            <text x="669" y="192">nginx / envoy / alb</text>
            <text x="669" y="216">config version v42</text>
            <text x="669" y="240">worker reload OK</text>
            <text className="k8s-ingress-chip-text" x="669" y="267">ingressClassName=nginx</text>
          </g>

          <g className={`k8s-ingress-rules ${routeActive ? "active" : ""}`}>
            <rect x="56" y="342" width="448" height="164" rx="24" />
            <text className="k8s-ingress-panel-title" x="88" y="376">{label("Host / Path 规则", "Host / path rules")}</text>
            <text className="k8s-ingress-panel-subtitle" x="88" y="398">{label("先匹配 host，再按 pathType 和路径选择后端", "Match host first, then pathType and path")}</text>
            {ruleRows.map((rule, index) => (
              <g key={`${rule.host}-${rule.path}`} className={`k8s-ingress-row ${rule.tone} ${rule.active ? "active" : ""}`}>
                <rect x="88" y={420 + index * 28} width="376" height="22" rx="11" />
                <text x="102" y={435 + index * 28}>{rule.host}</text>
                <text x="240" y={435 + index * 28}>{rule.path}</text>
                <text x="304" y={435 + index * 28}>{rule.type}</text>
                <text x="452" y={435 + index * 28}>{rule.backend}</text>
              </g>
            ))}
          </g>

          <g className={`k8s-ingress-resources ${syncActive ? "active" : ""}`}>
            <rect x="534" y="342" width="236" height="164" rx="24" />
            <text className="k8s-ingress-panel-title" x="562" y="376">{label("资源缓存", "Resource cache")}</text>
            <text className="k8s-ingress-panel-subtitle" x="562" y="398">Informer + workqueue</text>
            {resourceRows.map((resource, index) => (
              <g key={resource.name} className={`k8s-ingress-row ${resource.tone} ${resource.active ? "active" : ""}`}>
                <rect x="562" y={416 + index * 28} width="178" height="24" rx="12" />
                <text x="576" y={426 + index * 28}>{resource.name}</text>
                <text x="576" y={438 + index * 28}>{resource.value}</text>
              </g>
            ))}
          </g>

          <g className={`k8s-ingress-backends ${backendActive ? "active" : ""}`}>
            <rect x="818" y="128" width="242" height="378" rx="28" />
            <text className="k8s-ingress-panel-title" x="846" y="166">{label("Service 后端", "Service backends")}</text>
            <text className="k8s-ingress-panel-subtitle" x="846" y="188">Service {"->"} EndpointSlice {"->"} Pod</text>
            {backendRows.map((backend, index) => (
              <g key={backend.name} className={`k8s-ingress-backend ${backend.tone} ${backend.active ? "active" : ""}`}>
                <rect x="852" y={220 + index * 66} width="174" height="50" rx="16" />
                <text x="872" y={242 + index * 66}>{backend.name}</text>
                <text x="872" y={260 + index * 66}>{backend.value}</text>
              </g>
            ))}
          </g>

          <g className={`k8s-ingress-edge-path ${edgeActive ? "active" : ""}`}>
            <path d="M 244 212 C 268 208, 286 208, 310 210" markerEnd="url(#k8s-ingress-arrow-brand)" />
            <rect x="142" y="112" width="220" height="34" rx="17" />
            <text x="252" y="133">DNS A {"->"} ADDRESS</text>
          </g>

          <g className={`k8s-ingress-sync-path ${syncActive ? "active" : ""}`}>
            <path d="M 500 212 C 524 208, 538 208, 562 210" markerEnd="url(#k8s-ingress-arrow-warning)" />
            <path d="M 652 306 C 652 322, 652 330, 652 342" markerEnd="url(#k8s-ingress-arrow-warning)" />
          </g>

          <g className={`k8s-ingress-tls-path ${tlsActive ? "active" : ""}`}>
            <path d="M 168 274 C 246 332, 482 332, 624 274" markerEnd="url(#k8s-ingress-arrow-teal)" />
            <rect x="298" y="298" width="214" height="38" rx="17" />
            <text x="405" y="322">TLS Secret shop-tls</text>
          </g>

          <g className={`k8s-ingress-rule-path ${routeActive ? "active" : ""}`}>
            <path d="M 610 306 C 520 348, 500 372, 464 420" markerEnd="url(#k8s-ingress-arrow-success)" />
          </g>

          <g className={`k8s-ingress-backend-path ${backendActive ? "active" : ""}`}>
            <path d="M 776 226 C 794 224, 804 226, 818 232" markerEnd="url(#k8s-ingress-arrow-danger)" />
            <path d="M 464 431 C 626 410, 742 326, 852 246" markerEnd="url(#k8s-ingress-arrow-danger)" />
          </g>

          <g className={`k8s-ingress-diagnosis ${backendActive ? "active" : ""}`}>
            <rect x="850" y="430" width="190" height="44" rx="17" />
            <text x="945" y="449">502/503 diagnostics</text>
            <text x="945" y="465">service, endpoints, readiness</text>
          </g>

          <g className="k8s-ingress-signals">
            {signalRows.map((signal, index) => (
              <g key={signal.name} className={`k8s-ingress-signal ${signal.tone} ${signal.active ? "active" : ""}`}>
                <rect x={70 + index * 250} y="526" width="212" height="32" rx="15" />
                <text x={88 + index * 250} y="539">{signal.name}</text>
                <text x={264 + index * 250} y="552">{signal.value}</text>
              </g>
            ))}
          </g>
        </svg>
        <div className="k8s-ingress-mobile-map">
          <div className="k8s-ingress-mobile-flow" aria-hidden="true">
            {[
              { name: "ADDRESS", value: edgeActive ? "shop.example.com -> 203.0.113.20" : "pending", active: edgeActive },
              { name: "Controller", value: syncActive ? "config v42 reload OK" : "watching", active: syncActive },
              { name: "TLS", value: tlsActive ? "shop-tls, SNI matched" : "pending", active: tlsActive },
              { name: "Rule", value: routeActive ? "shop.example.com /api -> cart-svc" : "pending", active: routeActive },
              { name: "Backend", value: backendActive ? "10.244.2.18:8080 healthy" : "waiting", active: backendActive },
            ].map((item) => (
              <div key={item.name} className={`k8s-ingress-mobile-hop ${item.active ? "active" : ""}`}>
                <span>{item.name}</span>
                <strong>{item.value}</strong>
              </div>
            ))}
          </div>
          <div className="k8s-ingress-mobile-facts">
            {signalRows.map((signal) => (
              <div key={signal.name} className={`k8s-ingress-mobile-fact ${signal.active ? "active" : ""}`}>
                <span>{signal.name}</span>
                <strong>{signal.value}</strong>
              </div>
            ))}
          </div>
        </div>
        <div className="tcp-handshake-caption k8s-ingress-caption">
          <strong>{readLocalizedText(activeStep.title, locale)}</strong>
          <span>{completedSteps}/{simulation.steps.length}</span>
        </div>
      </div>
    </div>
  );
}

export function KubernetesCrashLoopBackOffStage({
  simulation,
  locale,
  completedSteps,
  activeStepIndex,
}: {
  simulation: VisualSimulation;
  locale: Locale;
  completedSteps: number;
  activeStepIndex: number;
}) {
  const activeStep = simulation.steps[activeStepIndex];
  const label = (zh: string, en: string) => (locale === "zh" ? zh : en);
  const startActive = completedSteps >= 1;
  const exitActive = completedSteps >= 2;
  const restartActive = completedSteps >= 3;
  const backoffActive = completedSteps >= 4;
  const fixActive = completedSteps >= 5;
  const eventRows = [
    { time: "10:02:11", reason: "Started", message: "Started container api", active: startActive, tone: "brand" },
    { time: "10:02:17", reason: "Killing", message: exitActive ? "failed liveness probe" : "pending", active: exitActive, tone: "danger" },
    { time: "10:02:20", reason: "Pulled", message: restartActive ? "Container image already present" : "pending", active: restartActive, tone: "warning" },
    { time: "10:03:40", reason: "BackOff", message: backoffActive ? "Back-off restarting failed container" : "pending", active: backoffActive, tone: "warning" },
  ];
  const evidenceRows = [
    { name: "kubectl logs --previous", value: fixActive ? "KeyError DB_URL" : exitActive ? "stack trace captured" : "waiting", active: exitActive, tone: "brand" },
    { name: "kubectl describe pod", value: backoffActive ? "BackOff x12" : "waiting Events", active: backoffActive, tone: "warning" },
    { name: "lastState.reason", value: exitActive ? "Error / exitCode=1" : "none", active: exitActive, tone: "danger" },
    { name: "probe config", value: fixActive ? "startupProbe added" : backoffActive ? "liveness too early" : "waiting", active: backoffActive, tone: "success" },
  ];
  const signalRows = [
    { name: "restartCount", value: fixActive ? "stable at 3" : restartActive ? "3" : "0", active: restartActive, tone: "brand" },
    { name: "BackOff delay", value: fixActive ? "reset" : backoffActive ? "80s" : "0s", active: backoffActive, tone: "warning" },
    { name: "lastState.reason", value: exitActive ? "Error" : "none", active: exitActive, tone: "danger" },
    { name: "Ready", value: fixActive ? "True" : "False", active: fixActive, tone: "success" },
  ];
  const mobileFlow = [
    { name: "Container", value: startActive ? "api starts, env mounted" : "waiting", active: startActive },
    { name: "Exit", value: exitActive ? "exitCode=1, liveness failed" : "pending", active: exitActive },
    { name: "Restart", value: restartActive ? "restartCount=3" : "pending", active: restartActive },
    { name: "BackOff", value: backoffActive ? "delay=80s, event emitted" : "pending", active: backoffActive },
    { name: "Fix gate", value: fixActive ? "DB_URL fixed, Ready=True" : "awaiting evidence", active: fixActive },
  ];

  return (
    <div className="visual-stage k8s-crashloop-stage">
      <div className="k8s-crashloop-card">
        <svg
          className="k8s-crashloop-diagram"
          viewBox="0 0 1120 640"
          role="img"
          aria-label={readLocalizedText(simulation.title, locale)}
        >
          <defs>
            {[
              ["k8s-crashloop-arrow-brand", "var(--brand)"],
              ["k8s-crashloop-arrow-teal", "var(--tertiary)"],
              ["k8s-crashloop-arrow-warning", "#f59e0b"],
              ["k8s-crashloop-arrow-danger", "var(--danger)"],
              ["k8s-crashloop-arrow-success", "var(--success)"],
            ].map(([id, fill]) => (
              <marker
                key={id}
                id={id}
                viewBox="0 0 10 10"
                refX="8.5"
                refY="5"
                markerWidth="8"
                markerHeight="8"
                orient="auto"
              >
                <path d="M 0 0 L 10 5 L 0 10 z" fill={fill} />
              </marker>
            ))}
            <filter id="k8s-crashloop-soft-shadow" x="-20%" y="-30%" width="140%" height="160%">
              <feDropShadow dx="0" dy="10" stdDeviation="10" floodColor="#172033" floodOpacity="0.13" />
            </filter>
          </defs>

          <rect className="k8s-crashloop-bg" x="24" y="24" width="1072" height="588" rx="28" />
          <text className="k8s-crashloop-title" x="560" y="70">
            {readLocalizedText(simulation.title, locale)}
          </text>
          <text className="k8s-crashloop-subtitle" x="560" y="100">
            {label(
              "start -> crash / probe failure -> restartCount -> BackOff event -> evidence-driven fix",
              "start -> crash / probe failure -> restartCount -> BackOff event -> evidence-driven fix",
            )}
          </text>

          <g className={`k8s-crashloop-pod ${startActive ? "active" : ""}`}>
            <rect x="72" y="142" width="258" height="196" rx="24" />
            <text className="k8s-crashloop-panel-title" x="104" y="180">Pod checkout-api-6d8c</text>
            <text className="k8s-crashloop-panel-subtitle" x="104" y="204">container: api · restartPolicy=Always</text>
            <g className={`k8s-crashloop-container-chip brand ${startActive ? "active" : ""}`}>
              <rect x="104" y="232" width="190" height="34" rx="17" />
              <text x="199" y="254">{startActive ? "Running 6s" : "Waiting"}</text>
            </g>
            <g className={`k8s-crashloop-container-chip danger ${exitActive ? "active" : ""}`}>
              <rect x="104" y="276" width="190" height="34" rx="17" />
              <text x="199" y="298">{exitActive ? "Terminated: Error" : "lastState empty"}</text>
            </g>
          </g>

          <g className={`k8s-crashloop-kubelet ${startActive ? "active" : ""}`}>
            <rect x="412" y="136" width="236" height="204" rx="24" />
            <text className="k8s-crashloop-panel-title" x="440" y="174">kubelet</text>
            <text className="k8s-crashloop-panel-subtitle" x="440" y="198">node-a · container runtime</text>
            <g className={`k8s-crashloop-state-row brand ${startActive ? "active" : ""}`}>
              <rect x="440" y="222" width="176" height="28" rx="14" />
              <text x="454" y="241">start container</text>
            </g>
            <g className={`k8s-crashloop-state-row danger ${exitActive ? "active" : ""}`}>
              <rect x="440" y="258" width="176" height="28" rx="14" />
              <text x="454" y="277">capture lastState</text>
            </g>
            <g className={`k8s-crashloop-state-row warning ${restartActive ? "active" : ""}`}>
              <rect x="440" y="294" width="176" height="28" rx="14" />
              <text x="454" y="313">restartCount=3</text>
            </g>
          </g>

          <g className={`k8s-crashloop-backoff ${backoffActive ? "active" : ""}`}>
            <rect x="730" y="142" width="264" height="196" rx="24" />
            <text className="k8s-crashloop-panel-title" x="758" y="180">BackOff Timer</text>
            <text className="k8s-crashloop-panel-subtitle" x="758" y="204">restart loop guard</text>
            <line className="k8s-crashloop-delay-axis" x1="780" y1="258" x2="950" y2="258" />
            {[10, 20, 40, 80].map((delay, index) => (
              <g key={delay} className={`k8s-crashloop-delay-node ${completedSteps >= Math.min(index + 1, 4) ? "active" : ""}`}>
                <circle cx={790 + index * 54} cy="258" r="16" />
                <text x={790 + index * 54} y="264">{delay}</text>
                <text x={790 + index * 54} y="294">s</text>
              </g>
            ))}
            <g className={`k8s-crashloop-status-chip warning ${backoffActive ? "active" : ""}`}>
              <rect x="758" y="306" width="204" height="30" rx="15" />
              <text x="860" y="326">Waiting: CrashLoopBackOff</text>
            </g>
          </g>

          <g className={`k8s-crashloop-start-path ${startActive ? "active" : ""}`}>
            <path d="M 412 238 C 384 234, 360 234, 330 236" markerEnd="url(#k8s-crashloop-arrow-brand)" />
            <rect x="316" y="112" width="176" height="34" rx="17" />
            <text x="404" y="134">container start</text>
          </g>
          <g className={`k8s-crashloop-exit-path ${exitActive ? "active" : ""}`}>
            <path d="M 330 288 C 358 306, 384 300, 412 278" markerEnd="url(#k8s-crashloop-arrow-danger)" />
            <rect x="212" y="358" width="178" height="34" rx="17" />
            <text x="301" y="380">exitCode=1</text>
          </g>
          <g className={`k8s-crashloop-restart-path ${restartActive ? "active" : ""}`}>
            <path d="M 530 340 C 500 388, 222 388, 200 338" markerEnd="url(#k8s-crashloop-arrow-warning)" />
            <rect x="430" y="358" width="174" height="34" rx="17" />
            <text x="517" y="380">restart by policy</text>
          </g>
          <g className={`k8s-crashloop-backoff-path ${backoffActive ? "active" : ""}`}>
            <path d="M 648 250 C 684 248, 700 248, 730 250" markerEnd="url(#k8s-crashloop-arrow-warning)" />
            <rect x="642" y="112" width="168" height="34" rx="17" />
            <text x="726" y="134">BackOff event</text>
          </g>

          <g className={`k8s-crashloop-events ${exitActive ? "active" : ""}`}>
            <rect x="72" y="424" width="480" height="136" rx="24" />
            <text className="k8s-crashloop-panel-title" x="104" y="458">Events Timeline</text>
            {eventRows.map((event, index) => (
              <g key={`${event.time}-${event.reason}`} className={`k8s-crashloop-event-row ${event.tone} ${event.active ? "active" : ""}`}>
                <rect x="104" y={478 + index * 25} width="410" height="20" rx="10" />
                <text x="118" y={492 + index * 25}>{event.time}</text>
                <text x="202" y={492 + index * 25}>{event.reason}</text>
                <text x="500" y={492 + index * 25}>{event.message}</text>
              </g>
            ))}
          </g>

          <g className={`k8s-crashloop-evidence ${fixActive || backoffActive ? "active" : ""}`}>
            <rect x="604" y="398" width="414" height="162" rx="24" />
            <text className="k8s-crashloop-panel-title" x="632" y="434">{label("证据与修复门禁", "Evidence and fix gate")}</text>
            {evidenceRows.map((row, index) => (
              <g key={row.name} className={`k8s-crashloop-evidence-row ${row.tone} ${row.active ? "active" : ""}`}>
                <rect x="632" y={454 + index * 28} width="344" height="22" rx="11" />
                <text x="646" y={469 + index * 28}>{row.name}</text>
                <text x="960" y={469 + index * 28}>{row.value}</text>
              </g>
            ))}
          </g>

          <g className={`k8s-crashloop-fix-path ${fixActive ? "active" : ""}`}>
            <path d="M 818 398 C 820 356, 778 344, 676 322" markerEnd="url(#k8s-crashloop-arrow-success)" />
            <rect x="804" y="358" width="176" height="34" rx="17" />
            <text x="892" y="380">Ready=True</text>
          </g>

          <g className="k8s-crashloop-signals">
            {signalRows.map((signal, index) => (
              <g key={signal.name} className={`k8s-crashloop-signal ${signal.tone} ${signal.active ? "active" : ""}`}>
                <rect x={70 + index * 256} y="584" width="218" height="32" rx="15" />
                <text x={88 + index * 256} y="597">{signal.name}</text>
                <text x={270 + index * 256} y="610">{signal.value}</text>
              </g>
            ))}
          </g>
        </svg>
        <div className="k8s-crashloop-mobile-map">
          <div className="k8s-crashloop-mobile-flow" aria-hidden="true">
            {mobileFlow.map((item) => (
              <div key={item.name} className={`k8s-crashloop-mobile-hop ${item.active ? "active" : ""}`}>
                <span>{item.name}</span>
                <strong>{item.value}</strong>
              </div>
            ))}
          </div>
          <div className="k8s-crashloop-mobile-facts">
            {signalRows.map((signal) => (
              <div key={signal.name} className={`k8s-crashloop-mobile-fact ${signal.active ? "active" : ""}`}>
                <span>{signal.name}</span>
                <strong>{signal.value}</strong>
              </div>
            ))}
          </div>
        </div>
        <div className="tcp-handshake-caption k8s-crashloop-caption">
          <strong>{readLocalizedText(activeStep.title, locale)}</strong>
          <span>{completedSteps}/{simulation.steps.length}</span>
        </div>
      </div>
    </div>
  );
}

export function KubernetesHpaStage({
  simulation,
  locale,
  completedSteps,
  activeStepIndex,
}: {
  simulation: VisualSimulation;
  locale: Locale;
  completedSteps: number;
  activeStepIndex: number;
}) {
  const activeStep = simulation.steps[activeStepIndex];
  const label = (zh: string, en: string) => (locale === "zh" ? zh : en);
  const loadActive = completedSteps >= 1;
  const metricsActive = completedSteps >= 2;
  const calcActive = completedSteps >= 3;
  const scaleActive = completedSteps >= 4;
  const stabilizeActive = completedSteps >= 5;
  const podRows = [
    { name: "checkout-7b9a", cpu: loadActive ? "118%" : "58%", ready: true, active: loadActive, tone: loadActive ? "warning" : "brand" },
    { name: "checkout-82cf", cpu: loadActive ? "124%" : "61%", ready: true, active: loadActive, tone: loadActive ? "warning" : "brand" },
    { name: "checkout-91de", cpu: loadActive ? "119%" : "59%", ready: true, active: loadActive, tone: loadActive ? "warning" : "brand" },
    { name: "checkout-new4", cpu: scaleActive ? "44%" : "pending", ready: scaleActive, active: scaleActive, tone: "success" },
    { name: "checkout-new5", cpu: scaleActive ? "47%" : "pending", ready: scaleActive, active: scaleActive, tone: "success" },
    { name: "checkout-new6", cpu: scaleActive ? "52%" : "pending", ready: stabilizeActive, active: scaleActive, tone: stabilizeActive ? "success" : "teal" },
  ];
  const formulaRows = [
    { name: "currentReplicas", value: "3", active: calcActive, tone: "brand" },
    { name: "currentMetric", value: metricsActive ? "120%" : "pending", active: metricsActive, tone: "warning" },
    { name: "desiredMetric", value: "60%", active: calcActive, tone: "teal" },
    { name: "desiredReplicas", value: calcActive ? "ceil(3*120/60)=6" : "pending", active: calcActive, tone: "success" },
  ];
  const signalRows = [
    { name: "current / target CPU", value: stabilizeActive ? "58% / 60%" : metricsActive ? "120% / 60%" : "waiting", active: metricsActive, tone: stabilizeActive ? "success" : "warning" },
    { name: "desiredReplicas", value: stabilizeActive ? "4" : calcActive ? "6" : "3", active: calcActive, tone: calcActive ? "success" : "brand" },
    { name: "Scale subresource", value: scaleActive ? "replicas=6" : "replicas=3", active: scaleActive, tone: "brand" },
    { name: "stabilization window", value: stabilizeActive ? "scaleDown hold" : "idle", active: stabilizeActive, tone: "teal" },
  ];
  const mobileFlow = [
    { name: "Deployment", value: loadActive ? "3 Pods CPU 120%" : "3 Pods CPU 60%", active: loadActive },
    { name: "Metrics API", value: metricsActive ? "metrics.k8s.io fresh" : "waiting samples", active: metricsActive },
    { name: "HPA formula", value: calcActive ? "desiredReplicas=6" : "target 60%", active: calcActive },
    { name: "Scale", value: scaleActive ? "Deployment replicas 3 -> 6" : "pending scale", active: scaleActive },
    { name: "Stabilize", value: stabilizeActive ? "scaleDown window keeps 4" : "awaiting cooldown", active: stabilizeActive },
  ];

  return (
    <div className="visual-stage k8s-hpa-stage">
      <div className="k8s-hpa-card">
        <svg
          className="k8s-hpa-diagram"
          viewBox="0 0 1120 640"
          role="img"
          aria-label={readLocalizedText(simulation.title, locale)}
        >
          <defs>
            {[
              ["k8s-hpa-arrow-brand", "var(--brand)"],
              ["k8s-hpa-arrow-teal", "var(--tertiary)"],
              ["k8s-hpa-arrow-warning", "#f59e0b"],
              ["k8s-hpa-arrow-success", "var(--success)"],
              ["k8s-hpa-arrow-danger", "var(--danger)"],
            ].map(([id, fill]) => (
              <marker
                key={id}
                id={id}
                viewBox="0 0 10 10"
                refX="8.5"
                refY="5"
                markerWidth="8"
                markerHeight="8"
                orient="auto"
              >
                <path d="M 0 0 L 10 5 L 0 10 z" fill={fill} />
              </marker>
            ))}
            <filter id="k8s-hpa-soft-shadow" x="-20%" y="-30%" width="140%" height="160%">
              <feDropShadow dx="0" dy="10" stdDeviation="10" floodColor="#172033" floodOpacity="0.13" />
            </filter>
          </defs>

          <rect className="k8s-hpa-bg" x="24" y="24" width="1072" height="588" rx="28" />
          <text className="k8s-hpa-title" x="560" y="70">
            {readLocalizedText(simulation.title, locale)}
          </text>
          <text className="k8s-hpa-subtitle" x="560" y="100">
            {label(
              "traffic spike -> metrics.k8s.io -> desiredReplicas formula -> Scale subresource -> stabilization window",
              "traffic spike -> metrics.k8s.io -> desiredReplicas formula -> Scale subresource -> stabilization window",
            )}
          </text>

          <g className={`k8s-hpa-workload ${loadActive ? "active" : ""}`}>
            <rect x="70" y="136" width="318" height="250" rx="24" />
            <text className="k8s-hpa-panel-title" x="98" y="174">Deployment checkout</text>
            <text className="k8s-hpa-panel-subtitle" x="98" y="198">{label("requests.cpu=250m · target averageUtilization=60%", "requests.cpu=250m · target averageUtilization=60%")}</text>
            {podRows.map((pod, index) => (
              <g key={pod.name} className={`k8s-hpa-pod-row ${pod.tone} ${pod.active ? "active" : ""}`}>
                <rect x="98" y={220 + index * 25} width="250" height="20" rx="10" />
                <text x="112" y={234 + index * 25}>{pod.name}</text>
                <text x="336" y={234 + index * 25}>{pod.ready ? pod.cpu : pod.cpu}</text>
              </g>
            ))}
          </g>

          <g className={`k8s-hpa-traffic ${loadActive ? "active" : ""}`}>
            <path d="M 70 262 C 42 262, 42 188, 90 188" markerEnd="url(#k8s-hpa-arrow-warning)" />
            <rect x="62" y="98" width="204" height="34" rx="17" />
            <text x="164" y="120">{loadActive ? "checkout QPS x3" : "steady traffic"}</text>
          </g>

          <g className={`k8s-hpa-metrics ${metricsActive ? "active" : ""}`}>
            <rect x="448" y="132" width="248" height="174" rx="24" />
            <text className="k8s-hpa-panel-title" x="476" y="170">Metrics Server</text>
            <text className="k8s-hpa-panel-subtitle" x="476" y="194">kubelet summary API</text>
            <g className={`k8s-hpa-metric-chip brand ${metricsActive ? "active" : ""}`}>
              <rect x="476" y="220" width="184" height="30" rx="15" />
              <text x="568" y="240">metrics.k8s.io</text>
            </g>
            <g className={`k8s-hpa-metric-chip warning ${metricsActive ? "active" : ""}`}>
              <rect x="476" y="262" width="184" height="30" rx="15" />
              <text x="568" y="282">avg CPU 120%</text>
            </g>
          </g>

          <g className={`k8s-hpa-controller ${calcActive ? "active" : ""}`}>
            <rect x="760" y="116" width="292" height="222" rx="24" />
            <text className="k8s-hpa-panel-title" x="788" y="154">HPA Controller</text>
            <text className="k8s-hpa-panel-subtitle" x="788" y="178">sync loop · tolerance · min/max</text>
            {formulaRows.map((row, index) => (
              <g key={row.name} className={`k8s-hpa-formula-row ${row.tone} ${row.active ? "active" : ""}`}>
                <rect x="788" y={202 + index * 34} width="224" height="26" rx="13" />
                <text x="802" y={220 + index * 34}>{row.name}</text>
                <text x="996" y={220 + index * 34}>{row.value}</text>
              </g>
            ))}
          </g>

          <g className={`k8s-hpa-sample-path ${metricsActive ? "active" : ""}`}>
            <path d="M 388 238 C 420 220, 424 212, 448 214" markerEnd="url(#k8s-hpa-arrow-teal)" />
            <rect x="378" y="400" width="200" height="34" rx="17" />
            <text x="478" y="422">Pod metrics samples</text>
          </g>

          <g className={`k8s-hpa-calc-path ${calcActive ? "active" : ""}`}>
            <path d="M 696 216 C 720 212, 734 212, 760 214" markerEnd="url(#k8s-hpa-arrow-warning)" />
            <rect x="626" y="344" width="252" height="34" rx="17" />
            <text x="752" y="366">ceil(3 * 120 / 60) = 6</text>
          </g>

          <g className={`k8s-hpa-scale ${scaleActive ? "active" : ""}`}>
            <rect x="480" y="430" width="276" height="104" rx="24" />
            <text className="k8s-hpa-panel-title" x="508" y="466">Scale subresource</text>
            <text className="k8s-hpa-panel-subtitle" x="508" y="490">Deployment.scale.spec.replicas</text>
            <g className={`k8s-hpa-scale-chip success ${scaleActive ? "active" : ""}`}>
              <rect x="508" y="506" width="208" height="30" rx="15" />
              <text x="612" y="526">{stabilizeActive ? "replicas=4 stabilized" : "replicas 3 -> 6"}</text>
            </g>
          </g>

          <g className={`k8s-hpa-scale-path ${scaleActive ? "active" : ""}`}>
            <path d="M 846 338 C 802 412, 766 460, 756 482" markerEnd="url(#k8s-hpa-arrow-success)" />
            <path d="M 480 482 C 420 468, 380 404, 332 386" markerEnd="url(#k8s-hpa-arrow-success)" />
          </g>

          <g className={`k8s-hpa-guard ${stabilizeActive ? "active" : ""}`}>
            <rect x="812" y="422" width="246" height="118" rx="24" />
            <text className="k8s-hpa-panel-title" x="840" y="458">{label("稳定窗口", "Stabilization window")}</text>
            <text className="k8s-hpa-panel-subtitle" x="840" y="482">scaleDown policies</text>
            <g className={`k8s-hpa-guard-chip teal ${stabilizeActive ? "active" : ""}`}>
              <rect x="840" y="502" width="172" height="30" rx="15" />
              <text x="926" y="522">{"hold 6 -> 4"}</text>
            </g>
          </g>

          <g className={`k8s-hpa-guard-path ${stabilizeActive ? "active" : ""}`}>
            <path d="M 880 422 C 844 388, 818 370, 778 338" markerEnd="url(#k8s-hpa-arrow-brand)" />
          </g>

          <g className="k8s-hpa-signals">
            {signalRows.map((signal, index) => (
              <g key={signal.name} className={`k8s-hpa-signal ${signal.tone} ${signal.active ? "active" : ""}`}>
                <rect x={70 + index * 256} y="578" width="218" height="34" rx="16" />
                <text x={88 + index * 256} y="592">{signal.name}</text>
                <text x={270 + index * 256} y="606">{signal.value}</text>
              </g>
            ))}
          </g>
        </svg>
        <div className="k8s-hpa-mobile-map">
          <div className="k8s-hpa-mobile-flow" aria-hidden="true">
            {mobileFlow.map((item) => (
              <div key={item.name} className={`k8s-hpa-mobile-hop ${item.active ? "active" : ""}`}>
                <span>{item.name}</span>
                <strong>{item.value}</strong>
              </div>
            ))}
          </div>
          <div className="k8s-hpa-mobile-facts">
            {signalRows.map((signal) => (
              <div key={signal.name} className={`k8s-hpa-mobile-fact ${signal.active ? "active" : ""}`}>
                <span>{signal.name}</span>
                <strong>{signal.value}</strong>
              </div>
            ))}
          </div>
        </div>
        <div className="tcp-handshake-caption k8s-hpa-caption">
          <strong>{readLocalizedText(activeStep.title, locale)}</strong>
          <span>{completedSteps}/{simulation.steps.length}</span>
        </div>
      </div>
    </div>
  );
}

function KubernetesSchedulerStage({
  simulation,
  locale,
  completedSteps,
  activeStepIndex,
}: {
  simulation: VisualSimulation;
  locale: Locale;
  completedSteps: number;
  activeStepIndex: number;
}) {
  const activeStep = simulation.steps[activeStepIndex];
  const label = (zh: string, en: string) => (locale === "zh" ? zh : en);
  const queueActive = completedSteps >= 1;
  const profileActive = completedSteps >= 2;
  const filterActive = completedSteps >= 3;
  const scoreActive = completedSteps >= 4;
  const bindActive = completedSteps >= 5;
  const nodes = [
    { name: "node-a", zone: "zone-a", cpu: "4.1 / 8 CPU", status: filterActive ? "feasible" : "candidate", score: scoreActive ? "76" : "--", tone: "brand", active: filterActive },
    { name: "node-b", zone: "zone-b", cpu: "7.8 / 8 CPU", status: filterActive ? "Insufficient cpu" : "candidate", score: "--", tone: "danger", active: filterActive },
    { name: "node-c", zone: "zone-c", cpu: "3.2 / 8 CPU", status: bindActive ? "Bound" : filterActive ? "feasible" : "candidate", score: scoreActive ? "92" : "--", tone: "success", active: filterActive || bindActive },
  ];
  const pluginRows = [
    { name: "NodeResourcesFit", value: filterActive ? "2/3 pass" : "pending", active: filterActive, tone: "warning" },
    { name: "NodeAffinity", value: filterActive ? "zone in a,c" : "pending", active: filterActive, tone: "brand" },
    { name: "TaintToleration", value: filterActive ? "gpu:NoSchedule fail" : "pending", active: filterActive, tone: "danger" },
    { name: "PodTopologySpread", value: scoreActive ? "spread +18" : "pending", active: scoreActive, tone: "teal" },
  ];
  const scoreRows = [
    { name: "node-c", value: "92", width: 152, active: scoreActive, tone: "success" },
    { name: "node-a", value: "76", width: 126, active: scoreActive, tone: "brand" },
    { name: "node-b", value: "filtered", width: 60, active: filterActive, tone: "danger" },
  ];
  const bindingRows = [
    { name: "Assume", value: scoreActive ? "cache node-c" : "waiting", active: scoreActive, tone: "brand" },
    { name: "Reserve / Permit", value: bindActive ? "approved" : "waiting", active: bindActive, tone: "teal" },
    { name: "Bind", value: bindActive ? "spec.nodeName=node-c" : "waiting", active: bindActive, tone: "success" },
  ];
  const signalRows = [
    { name: "PodSchedulingContext", value: queueActive ? "requests=500m/512Mi" : "waiting", active: queueActive, tone: "brand" },
    { name: "Filter plugins", value: filterActive ? "2 feasible / 1 rejected" : "pending", active: filterActive, tone: "warning" },
    { name: "Score plugins", value: scoreActive ? "node-c=92" : "pending", active: scoreActive, tone: "success" },
    { name: "Binding cycle", value: bindActive ? "Scheduled=True" : "unbound", active: bindActive, tone: "teal" },
  ];
  const extensionPoints = [
    { name: "QueueSort", x: 674, active: queueActive, tone: "brand" },
    { name: "PreFilter", x: 730, active: profileActive, tone: "teal" },
    { name: "Filter", x: 786, active: filterActive, tone: "warning" },
    { name: "Score", x: 842, active: scoreActive, tone: "success" },
    { name: "Reserve", x: 898, active: bindActive, tone: "brand" },
    { name: "Permit", x: 954, active: bindActive, tone: "teal" },
    { name: "Bind", x: 1010, active: bindActive, tone: "success" },
  ];
  const mobileFlow = [
    { name: "Pending Pod", value: queueActive ? "checkout-7f9c enters activeQ" : "awaiting watch", active: queueActive },
    { name: "Profile", value: profileActive ? "default-scheduler plugins loaded" : "waiting profile", active: profileActive },
    { name: "Filter", value: filterActive ? "node-a,node-c pass" : "pending feasible nodes", active: filterActive },
    { name: "Score", value: scoreActive ? "node-c wins with score 92" : "pending normalized scores", active: scoreActive },
    { name: "Bind", value: bindActive ? "spec.nodeName=node-c" : "unbound", active: bindActive },
  ];

  return (
    <div className="visual-stage k8s-scheduler-stage">
      <div className="k8s-scheduler-card">
        <svg
          className="k8s-scheduler-diagram"
          viewBox="0 0 1120 640"
          role="img"
          aria-label={readLocalizedText(simulation.title, locale)}
        >
          <defs>
            {[
              ["k8s-scheduler-arrow-brand", "var(--brand)"],
              ["k8s-scheduler-arrow-teal", "var(--tertiary)"],
              ["k8s-scheduler-arrow-warning", "#f59e0b"],
              ["k8s-scheduler-arrow-success", "var(--success)"],
              ["k8s-scheduler-arrow-danger", "var(--danger)"],
            ].map(([id, fill]) => (
              <marker
                key={id}
                id={id}
                viewBox="0 0 10 10"
                refX="8.5"
                refY="5"
                markerWidth="8"
                markerHeight="8"
                orient="auto"
              >
                <path d="M 0 0 L 10 5 L 0 10 z" fill={fill} />
              </marker>
            ))}
            <filter id="k8s-scheduler-soft-shadow" x="-20%" y="-30%" width="140%" height="160%">
              <feDropShadow dx="0" dy="10" stdDeviation="10" floodColor="#172033" floodOpacity="0.13" />
            </filter>
          </defs>

          <rect className="k8s-scheduler-bg" x="24" y="24" width="1072" height="588" rx="28" />
          <text className="k8s-scheduler-title" x="560" y="70">
            {readLocalizedText(simulation.title, locale)}
          </text>
          <text className="k8s-scheduler-subtitle" x="560" y="100">
            {label(
              "Pending Pod -> Scheduling Queue -> Filter -> Score -> Binding Cycle -> kubelet",
              "Pending Pod -> Scheduling Queue -> Filter -> Score -> Binding Cycle -> kubelet",
            )}
          </text>

          <g className={`k8s-scheduler-pod ${queueActive ? "active" : ""}`}>
            <rect x="64" y="136" width="190" height="144" rx="24" />
            <text className="k8s-scheduler-panel-title" x="92" y="174">Pod checkout-7f9c</text>
            <text className="k8s-scheduler-panel-subtitle" x="92" y="198">spec.nodeName: empty</text>
            <text x="92" y="228">requests.cpu=500m</text>
            <text x="92" y="252">schedulerName=default</text>
          </g>

          <g className={`k8s-scheduler-queue ${queueActive ? "active" : ""}`}>
            <rect x="304" y="126" width="266" height="122" rx="24" />
            <text className="k8s-scheduler-panel-title" x="332" y="164">Scheduling Queue</text>
            <text className="k8s-scheduler-panel-subtitle" x="332" y="188">activeQ · backoffQ · unschedulablePods</text>
            <g className={`k8s-scheduler-chip brand ${queueActive ? "active" : ""}`}>
              <rect x="332" y="210" width="196" height="28" rx="14" />
              <text x="430" y="229">QueueSort checkout-7f9c</text>
            </g>
          </g>

          <g className={`k8s-scheduler-profile ${profileActive ? "active" : ""}`}>
            <rect x="626" y="126" width="420" height="122" rx="24" />
            <text className="k8s-scheduler-panel-title" x="654" y="164">Scheduling Framework extension points</text>
            <text className="k8s-scheduler-panel-subtitle" x="654" y="188">profile=default-scheduler · PodSchedulingContext shared by plugins</text>
            <path className="k8s-scheduler-extension-rail" d="M 672 220 L 1008 220" />
            {extensionPoints.map((point) => (
              <g key={point.name} className={`k8s-scheduler-extension ${point.tone} ${point.active ? "active" : ""}`}>
                <circle cx={point.x} cy="220" r="15" />
                <text x={point.x} y="247">{point.name}</text>
              </g>
            ))}
          </g>

          <g className={`k8s-scheduler-filter ${filterActive ? "active" : ""}`}>
            <rect x="64" y="326" width="316" height="192" rx="24" />
            <text className="k8s-scheduler-panel-title" x="92" y="364">Filter plugins</text>
            {pluginRows.map((row, index) => (
              <g key={row.name} className={`k8s-scheduler-plugin-row ${row.tone} ${row.active ? "active" : ""}`}>
                <rect x="92" y={386 + index * 30} width="238" height="23" rx="12" />
                <text x="106" y={402 + index * 30}>{row.name}</text>
                <text x="318" y={402 + index * 30}>{row.value}</text>
              </g>
            ))}
          </g>

          <g className="k8s-scheduler-node-zone">
            <rect x="430" y="302" width="280" height="236" rx="26" />
            <text className="k8s-scheduler-panel-title" x="458" y="340">{label("节点快照", "Node snapshot")}</text>
            <text className="k8s-scheduler-panel-subtitle" x="458" y="362">NodeInfo cache · allocatable · labels · taints</text>
            {nodes.map((node, index) => (
              <g key={node.name} className={`k8s-scheduler-node-row ${node.tone} ${node.active ? "active" : ""}`}>
                <rect x="458" y={386 + index * 42} width="206" height="32" rx="15" />
                <text x="474" y={401 + index * 42}>{node.name} · {node.zone}</text>
                <text x="474" y={414 + index * 42}>{node.cpu}</text>
                <text x="650" y={407 + index * 42}>{node.status}</text>
              </g>
            ))}
          </g>

          <g className={`k8s-scheduler-score ${scoreActive ? "active" : ""}`}>
            <rect x="750" y="302" width="296" height="154" rx="24" />
            <text className="k8s-scheduler-panel-title" x="778" y="340">Score plugins</text>
            <text className="k8s-scheduler-panel-subtitle" x="778" y="362">NormalizeScore · weights · highest score wins</text>
            {scoreRows.map((row, index) => (
              <g key={row.name} className={`k8s-scheduler-score-row ${row.tone} ${row.active ? "active" : ""}`}>
                <rect x="778" y={384 + index * 28} width={row.width} height="20" rx="10" />
                <text x="790" y={398 + index * 28}>{row.name}</text>
                <text x="1010" y={398 + index * 28}>{row.value}</text>
              </g>
            ))}
          </g>

          <g className={`k8s-scheduler-bind ${bindActive ? "active" : ""}`}>
            <rect x="750" y="478" width="296" height="82" rx="24" />
            <text className="k8s-scheduler-panel-title" x="778" y="512">Binding Cycle</text>
            {bindingRows.map((row, index) => (
              <g key={row.name} className={`k8s-scheduler-bind-row ${row.tone} ${row.active ? "active" : ""}`}>
                <rect x={778 + index * 84} y="526" width="70" height="24" rx="12" />
                <text x={813 + index * 84} y="542">{row.name}</text>
              </g>
            ))}
          </g>

          <g className={`k8s-scheduler-queue-path ${queueActive ? "active" : ""}`}>
            <path d="M 254 202 C 280 198, 288 190, 304 188" markerEnd="url(#k8s-scheduler-arrow-brand)" />
            <rect x="240" y="140" width="144" height="32" rx="16" />
            <text x="312" y="161">watch Pod</text>
          </g>

          <g className={`k8s-scheduler-profile-path ${profileActive ? "active" : ""}`}>
            <path d="M 570 188 C 598 186, 606 184, 626 184" markerEnd="url(#k8s-scheduler-arrow-teal)" />
          </g>

          <g className={`k8s-scheduler-filter-path ${filterActive ? "active" : ""}`}>
            <path d="M 760 248 C 652 278, 534 296, 380 396" markerEnd="url(#k8s-scheduler-arrow-warning)" />
            <path d="M 380 424 C 410 418, 420 410, 430 408" markerEnd="url(#k8s-scheduler-arrow-warning)" />
            <rect x="284" y="286" width="168" height="32" rx="16" />
            <text x="368" y="307">Filter feasible nodes</text>
          </g>

          <g className={`k8s-scheduler-score-path ${scoreActive ? "active" : ""}`}>
            <path d="M 710 410 C 728 402, 736 394, 750 390" markerEnd="url(#k8s-scheduler-arrow-success)" />
            <rect x="610" y="542" width="190" height="32" rx="16" />
            <text x="705" y="563">NormalizeScore result</text>
          </g>

          <g className={`k8s-scheduler-bind-path ${bindActive ? "active" : ""}`}>
            <path d="M 898 456 L 898 478" markerEnd="url(#k8s-scheduler-arrow-teal)" />
            <path d="M 750 522 C 650 594, 258 580, 166 280" markerEnd="url(#k8s-scheduler-arrow-success)" />
            <rect x="936" y="578" width="128" height="30" rx="15" />
            <text x="1000" y="598">kubelet node-c</text>
          </g>

          <g className="k8s-scheduler-signals">
            {signalRows.map((signal, index) => (
              <g key={signal.name} className={`k8s-scheduler-signal ${signal.tone} ${signal.active ? "active" : ""}`}>
                <rect x={64 + index * 258} y="578" width="218" height="34" rx="16" />
                <text x={84 + index * 258} y="592">{signal.name}</text>
                <text x={270 + index * 258} y="606">{signal.value}</text>
              </g>
            ))}
          </g>
        </svg>
        <div className="k8s-scheduler-mobile-map">
          <div className="k8s-scheduler-mobile-flow" aria-hidden="true">
            {mobileFlow.map((item) => (
              <div key={item.name} className={`k8s-scheduler-mobile-hop ${item.active ? "active" : ""}`}>
                <span>{item.name}</span>
                <strong>{item.value}</strong>
              </div>
            ))}
          </div>
          <div className="k8s-scheduler-mobile-facts">
            {signalRows.map((signal) => (
              <div key={signal.name} className={`k8s-scheduler-mobile-fact ${signal.active ? "active" : ""}`}>
                <span>{signal.name}</span>
                <strong>{signal.value}</strong>
              </div>
            ))}
          </div>
        </div>
        <div className="tcp-handshake-caption k8s-scheduler-caption">
          <strong>{readLocalizedText(activeStep.title, locale)}</strong>
          <span>{completedSteps}/{simulation.steps.length}</span>
        </div>
      </div>
    </div>
  );
}

function KubernetesTaintTolerationStage({
  simulation,
  locale,
  completedSteps,
  activeStepIndex,
}: {
  simulation: VisualSimulation;
  locale: Locale;
  completedSteps: number;
  activeStepIndex: number;
}) {
  const activeStep = simulation.steps[activeStepIndex];
  const label = (zh: string, en: string) => (locale === "zh" ? zh : en);
  const taintActive = completedSteps >= 1;
  const tolerationActive = completedSteps >= 2;
  const filterActive = completedSteps >= 3;
  const evictionActive = completedSteps >= 4;
  const validateActive = completedSteps >= 5;
  const nodeRows = [
    { name: "node-gpu", value: taintActive ? "dedicated=gpu:NoSchedule" : "label accelerator=nvidia", active: taintActive, tone: "brand" },
    { name: "node-spot", value: evictionActive ? "unreachable:NoExecute" : "spot=true:PreferNoSchedule", active: evictionActive || taintActive, tone: evictionActive ? "danger" : "warning" },
    { name: "node-system", value: "control-plane taint", active: taintActive, tone: "teal" },
  ];
  const podRows = [
    { name: "gpu-job", value: tolerationActive ? "Equal dedicated=gpu" : "tolerations: pending", active: tolerationActive, tone: "success" },
    { name: "checkout", value: filterActive ? "missing dedicated toleration" : "ordinary workload", active: filterActive, tone: "danger" },
    { name: "node-agent", value: tolerationActive ? "Exists NoSchedule" : "DaemonSet", active: tolerationActive, tone: "teal" },
  ];
  const filterRows = [
    { name: "NoSchedule", value: filterActive ? "gpu pass / checkout fail" : "pending", active: filterActive, tone: "warning" },
    { name: "PreferNoSchedule", value: filterActive ? "soft avoid spot" : "pending", active: filterActive, tone: "teal" },
    { name: "NoExecute", value: evictionActive ? "running pod timed" : "pending", active: evictionActive, tone: "danger" },
  ];
  const evictionRows = [
    { name: "unreachable taint", value: evictionActive ? "NoExecute" : "watching condition", active: evictionActive, tone: "danger" },
    { name: "tolerationSeconds", value: evictionActive ? "300s" : "unset", active: evictionActive, tone: "warning" },
    { name: "reschedule", value: validateActive ? "api -> node-b" : "pending", active: validateActive, tone: "success" },
  ];
  const eventRows = [
    { time: "10:21:04", reason: "Tainted", message: taintActive ? "node-gpu tainted" : "waiting", active: taintActive, tone: "brand" },
    { time: "10:21:18", reason: "FailedScheduling", message: filterActive ? "untolerated dedicated" : "waiting", active: filterActive, tone: "warning" },
    { time: "10:23:02", reason: "NodeNotReady", message: evictionActive ? "unreachable NoExecute" : "waiting", active: evictionActive, tone: "danger" },
    { time: "10:28:02", reason: "Scheduled", message: validateActive ? "gpu-job -> node-gpu" : "waiting", active: validateActive, tone: "success" },
  ];
  const signalRows = [
    { name: "NoSchedule", value: filterActive ? "hard filter" : "idle", active: filterActive, tone: "warning" },
    { name: "NoExecute", value: evictionActive ? "evict running pods" : "idle", active: evictionActive, tone: "danger" },
    { name: "tolerationSeconds", value: evictionActive ? "300s grace" : "unset", active: evictionActive, tone: "teal" },
    { name: "FailedScheduling", value: filterActive ? "untolerated taint" : "none", active: filterActive, tone: "brand" },
  ];
  const mobileFlow = [
    { name: "Node taint", value: taintActive ? "dedicated=gpu:NoSchedule" : "waiting taint", active: taintActive },
    { name: "Pod toleration", value: tolerationActive ? "gpu-job tolerates Equal" : "spec pending", active: tolerationActive },
    { name: "Filter", value: filterActive ? "checkout rejected, gpu-job allowed" : "pending", active: filterActive },
    { name: "NoExecute", value: evictionActive ? "unreachable grace 300s" : "watching node health", active: evictionActive },
    { name: "Validate", value: validateActive ? "events explain placement" : "awaiting describe", active: validateActive },
  ];

  return (
    <div className="visual-stage k8s-taint-stage">
      <div className="k8s-taint-card">
        <svg
          className="k8s-taint-diagram"
          viewBox="0 0 1120 640"
          role="img"
          aria-label={readLocalizedText(simulation.title, locale)}
        >
          <defs>
            {[
              ["k8s-taint-arrow-brand", "var(--brand)"],
              ["k8s-taint-arrow-teal", "var(--tertiary)"],
              ["k8s-taint-arrow-warning", "#f59e0b"],
              ["k8s-taint-arrow-success", "var(--success)"],
              ["k8s-taint-arrow-danger", "var(--danger)"],
            ].map(([id, fill]) => (
              <marker
                key={id}
                id={id}
                viewBox="0 0 10 10"
                refX="8.5"
                refY="5"
                markerWidth="8"
                markerHeight="8"
                orient="auto"
              >
                <path d="M 0 0 L 10 5 L 0 10 z" fill={fill} />
              </marker>
            ))}
            <filter id="k8s-taint-soft-shadow" x="-20%" y="-30%" width="140%" height="160%">
              <feDropShadow dx="0" dy="10" stdDeviation="10" floodColor="#172033" floodOpacity="0.13" />
            </filter>
          </defs>

          <rect className="k8s-taint-bg" x="24" y="24" width="1072" height="588" rx="28" />
          <text className="k8s-taint-title" x="560" y="70">
            {readLocalizedText(simulation.title, locale)}
          </text>
          <text className="k8s-taint-subtitle" x="560" y="100">
            {label(
              "node taint -> pod toleration -> TaintToleration Filter -> NoExecute eviction -> event validation",
              "node taint -> pod toleration -> TaintToleration Filter -> NoExecute eviction -> event validation",
            )}
          </text>

          <g className={`k8s-taint-nodes ${taintActive ? "active" : ""}`}>
            <rect x="64" y="136" width="306" height="204" rx="24" />
            <text className="k8s-taint-panel-title" x="92" y="174">Node taints</text>
            <text className="k8s-taint-panel-subtitle" x="92" y="198">kubectl taint nodes node-gpu dedicated=gpu:NoSchedule</text>
            {nodeRows.map((row, index) => (
              <g key={row.name} className={`k8s-taint-node-row ${row.tone} ${row.active ? "active" : ""}`}>
                <rect x="92" y={222 + index * 38} width="232" height="30" rx="15" />
                <text x="108" y={240 + index * 38}>{row.name}</text>
                <text x="316" y={240 + index * 38}>{row.value}</text>
              </g>
            ))}
          </g>

          <g className={`k8s-taint-pods ${tolerationActive ? "active" : ""}`}>
            <rect x="64" y="382" width="306" height="156" rx="24" />
            <text className="k8s-taint-panel-title" x="92" y="420">Pod tolerations</text>
            {podRows.map((row, index) => (
              <g key={row.name} className={`k8s-taint-pod-row ${row.tone} ${row.active ? "active" : ""}`}>
                <rect x="92" y={442 + index * 30} width="232" height="23" rx="12" />
                <text x="106" y={458 + index * 30}>{row.name}</text>
                <text x="316" y={458 + index * 30}>{row.value}</text>
              </g>
            ))}
          </g>

          <g className={`k8s-taint-filter ${filterActive ? "active" : ""}`}>
            <rect x="438" y="132" width="292" height="228" rx="24" />
            <text className="k8s-taint-panel-title" x="466" y="170">TaintToleration Filter</text>
            <text className="k8s-taint-panel-subtitle" x="466" y="194">Filter plugin · scheduler framework</text>
            {filterRows.map((row, index) => (
              <g key={row.name} className={`k8s-taint-filter-row ${row.tone} ${row.active ? "active" : ""}`}>
                <rect x="466" y={220 + index * 40} width="218" height="30" rx="15" />
                <text x="482" y={238 + index * 40}>{row.name}</text>
                <text x="674" y={238 + index * 40}>{row.value}</text>
              </g>
            ))}
          </g>

          <g className={`k8s-taint-yaml ${tolerationActive ? "active" : ""}`}>
            <rect x="438" y="404" width="292" height="130" rx="24" />
            <text className="k8s-taint-panel-title" x="466" y="442">spec.tolerations</text>
            <text x="466" y="470">key: dedicated</text>
            <text x="466" y="492">operator: Equal</text>
            <text x="466" y="514">effect: NoSchedule</text>
            <text x="606" y="514">value: gpu</text>
          </g>

          <g className={`k8s-taint-eviction ${evictionActive ? "active" : ""}`}>
            <rect x="792" y="132" width="264" height="182" rx="24" />
            <text className="k8s-taint-panel-title" x="820" y="170">NoExecute eviction</text>
            <text className="k8s-taint-panel-subtitle" x="820" y="194">node controller · taint manager</text>
            {evictionRows.map((row, index) => (
              <g key={row.name} className={`k8s-taint-eviction-row ${row.tone} ${row.active ? "active" : ""}`}>
                <rect x="820" y={220 + index * 30} width="194" height="23" rx="12" />
                <text x="834" y={236 + index * 30}>{row.name}</text>
                <text x="1002" y={236 + index * 30}>{row.value}</text>
              </g>
            ))}
          </g>

          <g className={`k8s-taint-events ${filterActive || validateActive ? "active" : ""}`}>
            <rect x="792" y="374" width="264" height="164" rx="24" />
            <text className="k8s-taint-panel-title" x="820" y="412">Events evidence</text>
            {eventRows.map((event, index) => (
              <g key={`${event.time}-${event.reason}`} className={`k8s-taint-event-row ${event.tone} ${event.active ? "active" : ""}`}>
                <rect x="820" y={432 + index * 25} width="202" height="20" rx="10" />
                <text x="834" y={446 + index * 25}>{event.reason}</text>
                <text x="1012" y={446 + index * 25}>{event.message}</text>
              </g>
            ))}
          </g>

          <g className={`k8s-taint-taint-path ${taintActive ? "active" : ""}`}>
            <path d="M 370 228 C 402 222, 418 218, 438 214" markerEnd="url(#k8s-taint-arrow-brand)" />
            <rect x="338" y="112" width="186" height="32" rx="16" />
            <text x="431" y="133">taint enters NodeInfo</text>
          </g>

          <g className={`k8s-taint-toleration-path ${tolerationActive ? "active" : ""}`}>
            <path d="M 370 464 C 402 430, 418 410, 438 360" markerEnd="url(#k8s-taint-arrow-teal)" />
            <rect x="360" y="556" width="166" height="32" rx="16" />
            <text x="443" y="577">Pod spec match</text>
          </g>

          <g className={`k8s-taint-filter-path ${filterActive ? "active" : ""}`}>
            <path d="M 730 242 C 758 238, 774 234, 792 230" markerEnd="url(#k8s-taint-arrow-warning)" />
            <path d="M 730 304 C 756 358, 768 414, 792 448" markerEnd="url(#k8s-taint-arrow-warning)" />
            <rect x="608" y="366" width="164" height="32" rx="16" />
            <text x="690" y="387">FailedScheduling</text>
          </g>

          <g className={`k8s-taint-evict-path ${evictionActive ? "active" : ""}`}>
            <path d="M 918 314 C 920 338, 922 350, 924 374" markerEnd="url(#k8s-taint-arrow-danger)" />
            <rect x="842" y="328" width="176" height="32" rx="16" />
            <text x="930" y="349">timer then evict</text>
          </g>

          <g className={`k8s-taint-validate-path ${validateActive ? "active" : ""}`}>
            <path d="M 792 480 C 642 598, 226 594, 216 538" markerEnd="url(#k8s-taint-arrow-success)" />
            <rect x="606" y="572" width="182" height="30" rx="15" />
            <text x="697" y="592">Ready on right node</text>
          </g>

          <g className="k8s-taint-signals">
            {signalRows.map((signal, index) => (
              <g key={signal.name} className={`k8s-taint-signal ${signal.tone} ${signal.active ? "active" : ""}`}>
                <rect x={64 + index * 258} y="578" width="218" height="34" rx="16" />
                <text x={84 + index * 258} y="592">{signal.name}</text>
                <text x={270 + index * 258} y="606">{signal.value}</text>
              </g>
            ))}
          </g>
        </svg>
        <div className="k8s-taint-mobile-map">
          <div className="k8s-taint-mobile-flow" aria-hidden="true">
            {mobileFlow.map((item) => (
              <div key={item.name} className={`k8s-taint-mobile-hop ${item.active ? "active" : ""}`}>
                <span>{item.name}</span>
                <strong>{item.value}</strong>
              </div>
            ))}
          </div>
          <div className="k8s-taint-mobile-facts">
            {signalRows.map((signal) => (
              <div key={signal.name} className={`k8s-taint-mobile-fact ${signal.active ? "active" : ""}`}>
                <span>{signal.name}</span>
                <strong>{signal.value}</strong>
              </div>
            ))}
          </div>
        </div>
        <div className="tcp-handshake-caption k8s-taint-caption">
          <strong>{readLocalizedText(activeStep.title, locale)}</strong>
          <span>{completedSteps}/{simulation.steps.length}</span>
        </div>
      </div>
    </div>
  );
}

function KubernetesTopologySpreadStage({
  simulation,
  locale,
  completedSteps,
  activeStepIndex,
}: {
  simulation: VisualSimulation;
  locale: Locale;
  completedSteps: number;
  activeStepIndex: number;
}) {
  const activeStep = simulation.steps[activeStepIndex];
  const label = (zh: string, en: string) => (locale === "zh" ? zh : en);
  const constraintActive = completedSteps >= 1;
  const countActive = completedSteps >= 2;
  const filterActive = completedSteps >= 3;
  const scoreActive = completedSteps >= 4;
  const bindActive = completedSteps >= 5;
  const zones = [
    { name: "zone-a", count: bindActive ? "2 Pods" : "2 Pods", x: 90, tone: filterActive ? "danger" : "brand", active: countActive || filterActive },
    { name: "zone-b", count: bindActive ? "2 Pods" : "2 Pods", x: 370, tone: scoreActive ? "warning" : "brand", active: countActive || scoreActive },
    { name: "zone-c", count: bindActive ? "2 Pods" : "1 Pod", x: 650, tone: bindActive ? "success" : "teal", active: countActive || scoreActive || bindActive },
  ];
  const constraintRows = [
    { name: "topologyKey", value: constraintActive ? "topology.kubernetes.io/zone" : "pending", active: constraintActive, tone: "brand" },
    { name: "maxSkew", value: constraintActive ? "1" : "pending", active: constraintActive, tone: "teal" },
    { name: "whenUnsatisfiable", value: filterActive ? "DoNotSchedule" : scoreActive ? "ScheduleAnyway" : "pending", active: filterActive || scoreActive, tone: filterActive ? "warning" : "success" },
    { name: "minDomains", value: countActive ? "3 eligible zones" : "pending", active: countActive, tone: "brand" },
  ];
  const filterRows = [
    { name: "node-a1", value: filterActive ? "zone-a skew=2 blocked" : "pending", active: filterActive, tone: "danger" },
    { name: "node-b1", value: filterActive ? "zone-b skew=2 blocked" : "pending", active: filterActive, tone: "warning" },
    { name: "node-c2", value: filterActive ? "zone-c skew=1 feasible" : "pending", active: filterActive, tone: "success" },
  ];
  const scoreRows = [
    { name: "PodTopologySpread", value: scoreActive ? "zone-c +96" : "waiting", active: scoreActive, tone: "success", width: 180 },
    { name: "NodeResourcesFit", value: scoreActive ? "node-c2 +78" : "waiting", active: scoreActive, tone: "teal", width: 146 },
    { name: "NodeAffinity", value: scoreActive ? "zone-b +62" : "waiting", active: scoreActive, tone: "warning", width: 116 },
  ];
  const signalRows = [
    { name: "maxSkew", value: filterActive ? "hard limit 1" : "pending", active: filterActive, tone: "warning" },
    { name: "topologyKey", value: constraintActive ? "zone label" : "pending", active: constraintActive, tone: "brand" },
    { name: "eligible domains", value: countActive ? "3 zones" : "pending", active: countActive, tone: "teal" },
    { name: "Events", value: bindActive ? "Scheduled node-c2" : filterActive ? "PodTopologySpread" : "none", active: filterActive || bindActive, tone: bindActive ? "success" : "danger" },
  ];
  const mobileFlow = [
    { name: "Constraint", value: constraintActive ? "topologyKey=zone maxSkew=1" : "waiting YAML", active: constraintActive },
    { name: "Counts", value: countActive ? "zone-a=2 zone-b=2 zone-c=1" : "waiting PreFilter", active: countActive },
    { name: "Filter", value: filterActive ? "zone-a blocked, zone-c feasible" : "pending", active: filterActive },
    { name: "Score", value: scoreActive ? "zone-c gets highest score" : "pending", active: scoreActive },
    { name: "Bind", value: bindActive ? "replicas spread 2/2/2" : "unbound", active: bindActive },
  ];

  return (
    <div className="visual-stage k8s-topology-stage">
      <div className="k8s-topology-card">
        <svg
          className="k8s-topology-diagram"
          viewBox="0 0 1120 640"
          role="img"
          aria-label={readLocalizedText(simulation.title, locale)}
        >
          <defs>
            {[
              ["k8s-topology-arrow-brand", "var(--brand)"],
              ["k8s-topology-arrow-teal", "var(--tertiary)"],
              ["k8s-topology-arrow-warning", "#f59e0b"],
              ["k8s-topology-arrow-success", "var(--success)"],
              ["k8s-topology-arrow-danger", "var(--danger)"],
            ].map(([id, fill]) => (
              <marker
                key={id}
                id={id}
                viewBox="0 0 10 10"
                refX="8.5"
                refY="5"
                markerWidth="8"
                markerHeight="8"
                orient="auto"
              >
                <path d="M 0 0 L 10 5 L 0 10 z" fill={fill} />
              </marker>
            ))}
            <filter id="k8s-topology-soft-shadow" x="-20%" y="-30%" width="140%" height="160%">
              <feDropShadow dx="0" dy="10" stdDeviation="10" floodColor="#172033" floodOpacity="0.13" />
            </filter>
          </defs>

          <rect className="k8s-topology-bg" x="24" y="24" width="1072" height="588" rx="28" />
          <text className="k8s-topology-title" x="560" y="70">
            {readLocalizedText(simulation.title, locale)}
          </text>
          <text className="k8s-topology-subtitle" x="560" y="100">
            {label(
              "selector -> topology domain counts -> maxSkew filter -> ScheduleAnyway score -> balanced bind",
              "selector -> topology domain counts -> maxSkew filter -> ScheduleAnyway score -> balanced bind",
            )}
          </text>

          <g className={`k8s-topology-workload ${constraintActive ? "active" : ""}`}>
            <rect x="64" y="126" width="252" height="112" rx="24" />
            <text className="k8s-topology-panel-title" x="92" y="164">Deployment checkout</text>
            <text className="k8s-topology-panel-subtitle" x="92" y="188">replicas=6 · app=checkout</text>
            <g className={`k8s-topology-chip brand ${constraintActive ? "active" : ""}`}>
              <rect x="92" y="206" width="168" height="28" rx="14" />
              <text x="176" y="225">new Pod: checkout-6</text>
            </g>
          </g>

          <g className={`k8s-topology-constraint ${constraintActive ? "active" : ""}`}>
            <rect x="360" y="126" width="318" height="154" rx="24" />
            <text className="k8s-topology-panel-title" x="388" y="164">topologySpreadConstraints</text>
            {constraintRows.map((row, index) => (
              <g key={row.name} className={`k8s-topology-row ${row.tone} ${row.active ? "active" : ""}`}>
                <rect x="388" y={188 + index * 30} width="236" height="23" rx="12" />
                <text x="402" y={204 + index * 30}>{row.name}</text>
                <text x="616" y={204 + index * 30}>{row.value}</text>
              </g>
            ))}
          </g>

          <g className={`k8s-topology-prefilter ${countActive ? "active" : ""}`}>
            <rect x="728" y="126" width="328" height="154" rx="24" />
            <text className="k8s-topology-panel-title" x="756" y="164">PreFilter domain count</text>
            <text className="k8s-topology-panel-subtitle" x="756" y="188">selector app=checkout · eligible domains=3</text>
            <g className={`k8s-topology-chip teal ${countActive ? "active" : ""}`}>
              <rect x="756" y="208" width="236" height="28" rx="14" />
              <text x="874" y="227">global minimum count = 1</text>
            </g>
            <g className={`k8s-topology-chip brand ${bindActive ? "active" : ""}`}>
              <rect x="756" y="242" width="236" height="28" rx="14" />
              <text x="874" y="261">final skew = 0 after bind</text>
            </g>
          </g>

          <g className={`k8s-topology-zones ${countActive ? "active" : ""}`}>
            <rect x="64" y="314" width="836" height="178" rx="26" />
            <text className="k8s-topology-panel-title" x="92" y="350">Topology domains</text>
            <text className="k8s-topology-panel-subtitle" x="92" y="372">topology.kubernetes.io/zone · existing matching Pods</text>
            {zones.map((zone) => (
              <g key={zone.name} className={`k8s-topology-zone ${zone.tone} ${zone.active ? "active" : ""}`}>
                <rect x={zone.x} y="392" width="230" height="72" rx="22" />
                <text x={zone.x + 24} y="418">{zone.name}</text>
                <text x={zone.x + 24} y="442">{zone.count}</text>
                <circle cx={zone.x + 164} cy="428" r="9" />
                <circle cx={zone.x + 188} cy="428" r="9" />
                {zone.name === "zone-c" ? (
                  <circle className={bindActive ? "active" : ""} cx={zone.x + 212} cy="428" r="9" />
                ) : null}
              </g>
            ))}
          </g>

          <g className={`k8s-topology-filter ${filterActive ? "active" : ""}`}>
            <rect x="932" y="314" width="124" height="178" rx="24" />
            <text className="k8s-topology-panel-title" x="994" y="350">Filter</text>
            {filterRows.map((row, index) => (
              <g key={row.name} className={`k8s-topology-filter-row ${row.tone} ${row.active ? "active" : ""}`}>
                <rect x="948" y={374 + index * 35} width="84" height="26" rx="13" />
                <text x="990" y={391 + index * 35}>{row.name}</text>
              </g>
            ))}
          </g>

          <g className={`k8s-topology-score ${scoreActive ? "active" : ""}`}>
            <rect x="64" y="518" width="440" height="70" rx="24" />
            <text className="k8s-topology-panel-title" x="92" y="548">Score plugins</text>
            {scoreRows.map((row, index) => (
              <g key={row.name} className={`k8s-topology-score-row ${row.tone} ${row.active ? "active" : ""}`}>
                <rect x="214" y={526 + index * 19} width={row.width} height="15" rx="8" />
                <text x="224" y={537 + index * 19}>{row.name}</text>
                <text x="480" y={537 + index * 19}>{row.value}</text>
              </g>
            ))}
          </g>

          <g className={`k8s-topology-events ${filterActive || bindActive ? "active" : ""}`}>
            <rect x="548" y="518" width="508" height="70" rx="24" />
            <text className="k8s-topology-panel-title" x="576" y="548">Events and validation</text>
            <text className="k8s-topology-panel-subtitle" x="576" y="570">
              {bindActive ? "Scheduled checkout-6 to node-c2; spread is 2/2/2" : filterActive ? "PodTopologySpread: node(s) did not satisfy max skew" : "waiting for scheduler events"}
            </text>
          </g>

          <g className={`k8s-topology-constraint-path ${constraintActive ? "active" : ""}`}>
            <path d="M 316 182 C 340 180, 348 180, 360 180" markerEnd="url(#k8s-topology-arrow-brand)" />
            <rect x="274" y="250" width="150" height="30" rx="15" />
            <text x="349" y="270">load constraint</text>
          </g>

          <g className={`k8s-topology-count-path ${countActive ? "active" : ""}`}>
            <path d="M 678 204 C 704 204, 714 204, 728 204" markerEnd="url(#k8s-topology-arrow-teal)" />
            <path d="M 892 280 C 830 310, 730 326, 520 362" markerEnd="url(#k8s-topology-arrow-teal)" />
          </g>

          <g className={`k8s-topology-filter-path ${filterActive ? "active" : ""}`}>
            <path d="M 900 406 C 920 400, 926 394, 932 390" markerEnd="url(#k8s-topology-arrow-warning)" />
            <rect x="796" y="294" width="154" height="30" rx="15" />
            <text x="873" y="314">maxSkew check</text>
          </g>

          <g className={`k8s-topology-score-path ${scoreActive ? "active" : ""}`}>
            <path d="M 960 492 C 830 536, 626 546, 504 550" markerEnd="url(#k8s-topology-arrow-success)" />
            <rect x="674" y="492" width="162" height="30" rx="15" />
            <text x="755" y="512">ScheduleAnyway</text>
          </g>

          <g className={`k8s-topology-bind-path ${bindActive ? "active" : ""}`}>
            <path d="M 548 554 C 450 608, 744 608, 762 464" markerEnd="url(#k8s-topology-arrow-success)" />
            <rect x="786" y="468" width="124" height="30" rx="15" />
            <text x="848" y="488">bind node-c2</text>
          </g>

          <g className="k8s-topology-signals">
            {signalRows.map((signal, index) => (
              <g key={signal.name} className={`k8s-topology-signal ${signal.tone} ${signal.active ? "active" : ""}`}>
                <rect x={64 + index * 258} y="592" width="218" height="34" rx="16" />
                <text x={84 + index * 258} y="606">{signal.name}</text>
                <text x={270 + index * 258} y="620">{signal.value}</text>
              </g>
            ))}
          </g>
        </svg>
        <div className="k8s-topology-mobile-map">
          <div className="k8s-topology-mobile-flow" aria-hidden="true">
            {mobileFlow.map((item) => (
              <div key={item.name} className={`k8s-topology-mobile-hop ${item.active ? "active" : ""}`}>
                <span>{item.name}</span>
                <strong>{item.value}</strong>
              </div>
            ))}
          </div>
          <div className="k8s-topology-mobile-facts">
            {signalRows.map((signal) => (
              <div key={signal.name} className={`k8s-topology-mobile-fact ${signal.active ? "active" : ""}`}>
                <span>{signal.name}</span>
                <strong>{signal.value}</strong>
              </div>
            ))}
          </div>
        </div>
        <div className="tcp-handshake-caption k8s-topology-caption">
          <strong>{readLocalizedText(activeStep.title, locale)}</strong>
          <span>{completedSteps}/{simulation.steps.length}</span>
        </div>
      </div>
    </div>
  );
}

function KubernetesPodAffinityStage({
  simulation,
  locale,
  completedSteps,
  activeStepIndex,
}: {
  simulation: VisualSimulation;
  locale: Locale;
  completedSteps: number;
  activeStepIndex: number;
}) {
  const activeStep = simulation.steps[activeStepIndex];
  const label = (zh: string, en: string) => (locale === "zh" ? zh : en);
  const ruleActive = completedSteps >= 1;
  const matchActive = completedSteps >= 2;
  const filterActive = completedSteps >= 3;
  const scoreActive = completedSteps >= 4;
  const bindActive = completedSteps >= 5;
  const ruleRows = [
    { name: "podAffinity", value: ruleActive ? "required app=backend" : "pending", active: ruleActive, tone: "brand" },
    { name: "podAntiAffinity", value: filterActive ? "avoid app=frontend" : "pending", active: filterActive, tone: "danger" },
    { name: "topologyKey", value: ruleActive ? "topology.kubernetes.io/zone" : "pending", active: ruleActive, tone: "teal" },
    { name: "weight", value: scoreActive ? "preferred 80" : "pending", active: scoreActive, tone: "success" },
  ];
  const zones = [
    {
      name: "zone-a",
      x: 88,
      value: bindActive ? "frontend-v2 + backend" : matchActive ? "backend-1, backend-2" : "node-a",
      tone: bindActive ? "success" : "brand",
      active: matchActive || bindActive,
      pods: bindActive ? 3 : 2,
    },
    {
      name: "zone-b",
      x: 366,
      value: matchActive ? "backend-3 + frontend-v1" : "node-b",
      tone: filterActive ? "danger" : "teal",
      active: matchActive || filterActive,
      pods: 2,
    },
    {
      name: "zone-c",
      x: 644,
      value: filterActive ? "no backend match" : "node-c",
      tone: filterActive ? "warning" : "brand",
      active: filterActive,
      pods: 1,
    },
  ];
  const filterRows = [
    { name: "node-a", value: filterActive ? "affinity yes" : "pending", active: filterActive, tone: "success" },
    { name: "node-b", value: filterActive ? "anti-affinity hit" : "pending", active: filterActive, tone: "danger" },
    { name: "node-c", value: filterActive ? "no backend" : "pending", active: filterActive, tone: "warning" },
  ];
  const scoreRows = [
    { name: "InterPodAffinity", value: scoreActive ? "node-a +92" : "waiting", active: scoreActive, tone: "success", width: 184 },
    { name: "NodeResourcesFit", value: scoreActive ? "node-a +76" : "waiting", active: scoreActive, tone: "teal", width: 146 },
    { name: "PodTopologySpread", value: scoreActive ? "zone-a +68" : "waiting", active: scoreActive, tone: "warning", width: 126 },
  ];
  const signalRows = [
    { name: "labelSelector", value: matchActive ? "app=backend" : "pending", active: matchActive, tone: "brand" },
    { name: "topologyKey", value: ruleActive ? "zone" : "pending", active: ruleActive, tone: "teal" },
    { name: "PodAffinity", value: filterActive ? "zone-a feasible" : "pending", active: filterActive, tone: "success" },
    { name: "PodAntiAffinity", value: filterActive ? "zone-b blocked" : "pending", active: filterActive, tone: "danger" },
  ];
  const mobileFlow = [
    { name: "Rules", value: ruleActive ? "required app=backend, topologyKey=zone" : "waiting spec", active: ruleActive },
    { name: "Selector", value: matchActive ? "3 backend Pods matched" : "pending", active: matchActive },
    { name: "Filter", value: filterActive ? "node-a feasible, node-b blocked" : "pending", active: filterActive },
    { name: "Score", value: scoreActive ? "node-a highest InterPodAffinity score" : "pending", active: scoreActive },
    { name: "Bind", value: bindActive ? "frontend-v2 running in zone-a" : "unbound", active: bindActive },
  ];

  return (
    <div className="visual-stage k8s-affinity-stage">
      <div className="k8s-affinity-card">
        <svg
          className="k8s-affinity-diagram"
          viewBox="0 0 1120 640"
          role="img"
          aria-label={readLocalizedText(simulation.title, locale)}
        >
          <defs>
            {[
              ["k8s-affinity-arrow-brand", "var(--brand)"],
              ["k8s-affinity-arrow-teal", "var(--tertiary)"],
              ["k8s-affinity-arrow-warning", "#f59e0b"],
              ["k8s-affinity-arrow-success", "var(--success)"],
              ["k8s-affinity-arrow-danger", "var(--danger)"],
            ].map(([id, fill]) => (
              <marker
                key={id}
                id={id}
                viewBox="0 0 10 10"
                refX="8.5"
                refY="5"
                markerWidth="8"
                markerHeight="8"
                orient="auto"
              >
                <path d="M 0 0 L 10 5 L 0 10 z" fill={fill} />
              </marker>
            ))}
            <filter id="k8s-affinity-soft-shadow" x="-20%" y="-30%" width="140%" height="160%">
              <feDropShadow dx="0" dy="10" stdDeviation="10" floodColor="#172033" floodOpacity="0.13" />
            </filter>
          </defs>

          <rect className="k8s-affinity-bg" x="24" y="24" width="1072" height="588" rx="28" />
          <text className="k8s-affinity-title" x="560" y="70">
            {readLocalizedText(simulation.title, locale)}
          </text>
          <text className="k8s-affinity-subtitle" x="560" y="100">
            {label(
              "pending Pod -> labelSelector -> topologyKey domains -> InterPodAffinity Filter -> weighted score -> bind",
              "pending Pod -> labelSelector -> topologyKey domains -> InterPodAffinity Filter -> weighted score -> bind",
            )}
          </text>

          <g className={`k8s-affinity-workload ${ruleActive ? "active" : ""}`}>
            <rect x="64" y="126" width="266" height="156" rx="24" />
            <text className="k8s-affinity-panel-title" x="92" y="164">Pending Pod</text>
            <text className="k8s-affinity-panel-subtitle" x="92" y="188">frontend-v2 · namespace=prod</text>
            <g className={`k8s-affinity-chip brand ${ruleActive ? "active" : ""}`}>
              <rect x="92" y="212" width="192" height="28" rx="14" />
              <text x="188" y="231">spec.affinity loaded</text>
            </g>
            <g className={`k8s-affinity-chip success ${bindActive ? "active" : ""}`}>
              <rect x="92" y="248" width="192" height="28" rx="14" />
              <text x="188" y="267">{bindActive ? "Running on node-a" : "awaiting bind"}</text>
            </g>
          </g>

          <g className={`k8s-affinity-rules ${ruleActive ? "active" : ""}`}>
            <rect x="386" y="126" width="318" height="180" rx="24" />
            <text className="k8s-affinity-panel-title" x="414" y="164">spec.affinity</text>
            {ruleRows.map((row, index) => (
              <g key={row.name} className={`k8s-affinity-row ${row.tone} ${row.active ? "active" : ""}`}>
                <rect x="414" y={188 + index * 30} width="236" height="23" rx="12" />
                <text x="428" y={204 + index * 30}>{row.name}</text>
                <text x="642" y={204 + index * 30}>{row.value}</text>
              </g>
            ))}
          </g>

          <g className={`k8s-affinity-selector ${matchActive ? "active" : ""}`}>
            <rect x="762" y="126" width="294" height="180" rx="24" />
            <text className="k8s-affinity-panel-title" x="790" y="164">labelSelector match</text>
            <text className="k8s-affinity-panel-subtitle" x="790" y="188">app=backend · namespace=prod</text>
            <g className={`k8s-affinity-chip teal ${matchActive ? "active" : ""}`}>
              <rect x="790" y="214" width="206" height="28" rx="14" />
              <text x="893" y="233">matched Pods = 3</text>
            </g>
            <g className={`k8s-affinity-chip danger ${filterActive ? "active" : ""}`}>
              <rect x="790" y="252" width="206" height="28" rx="14" />
              <text x="893" y="271">frontend conflict in zone-b</text>
            </g>
          </g>

          <g className={`k8s-affinity-domains ${matchActive ? "active" : ""}`}>
            <rect x="64" y="340" width="858" height="162" rx="26" />
            <text className="k8s-affinity-panel-title" x="92" y="376">topologyKey domains</text>
            <text className="k8s-affinity-panel-subtitle" x="92" y="398">topology.kubernetes.io/zone · Pods projected from matching nodes</text>
            {zones.map((zone) => (
              <g key={zone.name} className={`k8s-affinity-zone ${zone.tone} ${zone.active ? "active" : ""}`}>
                <rect x={zone.x} y="420" width="230" height="58" rx="20" />
                <text x={zone.x + 22} y="444">{zone.name}</text>
                <text x={zone.x + 22} y="466">{zone.value}</text>
                {Array.from({ length: zone.pods }).map((_, index) => (
                  <circle
                    key={`${zone.name}-${index}`}
                    className={bindActive && zone.name === "zone-a" && index === 2 ? "active" : ""}
                    cx={zone.x + 154 + index * 24}
                    cy="449"
                    r="8"
                  />
                ))}
              </g>
            ))}
          </g>

          <g className={`k8s-affinity-filter ${filterActive ? "active" : ""}`}>
            <rect x="958" y="340" width="98" height="162" rx="24" />
            <text className="k8s-affinity-panel-title" x="1007" y="376">Filter</text>
            {filterRows.map((row, index) => (
              <g key={row.name} className={`k8s-affinity-filter-row ${row.tone} ${row.active ? "active" : ""}`}>
                <rect x="974" y={400 + index * 34} width="58" height="25" rx="13" />
                <text x="1003" y={417 + index * 34}>{row.name}</text>
              </g>
            ))}
          </g>

          <g className={`k8s-affinity-score ${scoreActive ? "active" : ""}`}>
            <rect x="64" y="526" width="456" height="62" rx="24" />
            <text className="k8s-affinity-panel-title" x="92" y="554">Score plugins</text>
            {scoreRows.map((row, index) => (
              <g key={row.name} className={`k8s-affinity-score-row ${row.tone} ${row.active ? "active" : ""}`}>
                <rect x="220" y={534 + index * 17} width={row.width} height="14" rx="7" />
                <text x="230" y={544 + index * 17}>{row.name}</text>
                <text x="496" y={544 + index * 17}>{row.value}</text>
              </g>
            ))}
          </g>

          <g className={`k8s-affinity-events ${filterActive || bindActive ? "active" : ""}`}>
            <rect x="558" y="526" width="498" height="62" rx="24" />
            <text className="k8s-affinity-panel-title" x="586" y="554">Events and validation</text>
            <text className="k8s-affinity-panel-subtitle" x="586" y="574">
              {bindActive ? "Scheduled frontend-v2 to node-a; colocated with backend Pods" : filterActive ? "InterPodAffinity: node(s) did not match pod affinity rules" : "waiting for scheduler evidence"}
            </text>
          </g>

          <g className={`k8s-affinity-rule-path ${ruleActive ? "active" : ""}`}>
            <path d="M 330 202 C 354 202, 366 202, 386 202" markerEnd="url(#k8s-affinity-arrow-brand)" />
            <rect x="292" y="304" width="150" height="30" rx="15" />
            <text x="367" y="324">parse rules</text>
          </g>

          <g className={`k8s-affinity-match-path ${matchActive ? "active" : ""}`}>
            <path d="M 704 202 C 732 202, 744 202, 762 202" markerEnd="url(#k8s-affinity-arrow-teal)" />
            <path d="M 908 306 C 850 326, 730 340, 560 364" markerEnd="url(#k8s-affinity-arrow-teal)" />
          </g>

          <g className={`k8s-affinity-filter-path ${filterActive ? "active" : ""}`}>
            <path d="M 922 430 C 940 430, 948 430, 958 430" markerEnd="url(#k8s-affinity-arrow-warning)" />
            <rect x="788" y="314" width="164" height="30" rx="15" />
            <text x="870" y="334">required terms</text>
          </g>

          <g className={`k8s-affinity-score-path ${scoreActive ? "active" : ""}`}>
            <path d="M 1006 502 C 836 536, 640 548, 520 556" markerEnd="url(#k8s-affinity-arrow-success)" />
            <rect x="682" y="492" width="174" height="30" rx="15" />
            <text x="769" y="512">preferred weight</text>
          </g>

          <g className={`k8s-affinity-bind-path ${bindActive ? "active" : ""}`}>
            <path d="M 558 558 C 458 618, 230 610, 188 282" markerEnd="url(#k8s-affinity-arrow-success)" />
            <rect x="326" y="594" width="140" height="28" rx="14" />
            <text x="396" y="613">bind node-a</text>
          </g>

          <g className="k8s-affinity-signals">
            {signalRows.map((signal, index) => (
              <g key={signal.name} className={`k8s-affinity-signal ${signal.tone} ${signal.active ? "active" : ""}`}>
                <rect x={64 + index * 258} y="594" width="218" height="32" rx="16" />
                <text x={84 + index * 258} y="607">{signal.name}</text>
                <text x={270 + index * 258} y="620">{signal.value}</text>
              </g>
            ))}
          </g>
        </svg>
        <div className="k8s-affinity-mobile-map">
          <div className="k8s-affinity-mobile-flow" aria-hidden="true">
            {mobileFlow.map((item) => (
              <div key={item.name} className={`k8s-affinity-mobile-hop ${item.active ? "active" : ""}`}>
                <span>{item.name}</span>
                <strong>{item.value}</strong>
              </div>
            ))}
          </div>
          <div className="k8s-affinity-mobile-facts">
            {signalRows.map((signal) => (
              <div key={signal.name} className={`k8s-affinity-mobile-fact ${signal.active ? "active" : ""}`}>
                <span>{signal.name}</span>
                <strong>{signal.value}</strong>
              </div>
            ))}
          </div>
        </div>
        <div className="tcp-handshake-caption k8s-affinity-caption">
          <strong>{readLocalizedText(activeStep.title, locale)}</strong>
          <span>{completedSteps}/{simulation.steps.length}</span>
        </div>
      </div>
    </div>
  );
}

function KubernetesNodeAffinityStage({
  simulation,
  locale,
  completedSteps,
  activeStepIndex,
}: {
  simulation: VisualSimulation;
  locale: Locale;
  completedSteps: number;
  activeStepIndex: number;
}) {
  const activeStep = simulation.steps[activeStepIndex];
  const label = (zh: string, en: string) => (locale === "zh" ? zh : en);
  const ruleActive = completedSteps >= 1;
  const labelActive = completedSteps >= 2;
  const filterActive = completedSteps >= 3;
  const scoreActive = completedSteps >= 4;
  const bindActive = completedSteps >= 5;
  const ruleRows = [
    { name: "required", value: ruleActive ? "zone In [a,b] + accelerator Exists" : "pending", active: ruleActive, tone: "brand" },
    { name: "preferred", value: scoreActive ? "instance=gpu weight 90" : "pending", active: scoreActive, tone: "success" },
    { name: "terms", value: labelActive ? "OR terms=2" : "pending", active: labelActive, tone: "teal" },
    { name: "expressions", value: labelActive ? "AND inside term" : "pending", active: labelActive, tone: "warning" },
  ];
  const nodes = [
    {
      name: "node-a",
      x: 88,
      value: labelActive ? "zone=a · gpu=true" : "labels waiting",
      score: scoreActive ? "+72" : "candidate",
      tone: bindActive ? "teal" : "brand",
      active: labelActive || filterActive || scoreActive,
      feasible: true,
    },
    {
      name: "node-b",
      x: 366,
      value: filterActive ? "zone=b · no accelerator" : labelActive ? "zone=b · cpu" : "labels waiting",
      score: filterActive ? "rejected" : "candidate",
      tone: filterActive ? "danger" : "teal",
      active: labelActive || filterActive,
      feasible: false,
    },
    {
      name: "node-c",
      x: 644,
      value: bindActive ? "zone=a · a100 · low load" : labelActive ? "zone=a · a100" : "labels waiting",
      score: scoreActive ? "+96" : "candidate",
      tone: bindActive ? "success" : scoreActive ? "success" : "brand",
      active: labelActive || filterActive || scoreActive || bindActive,
      feasible: true,
    },
  ];
  const filterRows = [
    { name: "node-a", value: filterActive ? "required pass" : "pending", active: filterActive, tone: "success" },
    { name: "node-b", value: filterActive ? "accelerator missing" : "pending", active: filterActive, tone: "danger" },
    { name: "node-c", value: filterActive ? "required pass" : "pending", active: filterActive, tone: "success" },
  ];
  const scoreRows = [
    { name: "NodeAffinity", value: scoreActive ? "node-c +90" : "waiting", active: scoreActive, tone: "success", width: 184 },
    { name: "NodeResourcesFit", value: scoreActive ? "node-c +82" : "waiting", active: scoreActive, tone: "teal", width: 152 },
    { name: "ImageLocality", value: scoreActive ? "node-a +24" : "waiting", active: scoreActive, tone: "warning", width: 112 },
  ];
  const signalRows = [
    { name: "nodeSelectorTerms", value: labelActive ? "OR across terms" : "pending", active: labelActive, tone: "brand" },
    { name: "matchExpressions", value: labelActive ? "AND within term" : "pending", active: labelActive, tone: "teal" },
    { name: "preferred weight", value: scoreActive ? "90 + merged score" : "pending", active: scoreActive, tone: "success" },
    { name: "Events", value: bindActive ? "Scheduled node-c" : filterActive ? "NodeAffinity mismatch" : "none", active: filterActive || bindActive, tone: bindActive ? "success" : "danger" },
  ];
  const mobileFlow = [
    { name: "Rules", value: ruleActive ? "required zone+accelerator, preferred instance" : "waiting spec", active: ruleActive },
    { name: "Labels", value: labelActive ? "NodeInfo labels indexed, OR/AND evaluated" : "waiting snapshot", active: labelActive },
    { name: "Filter", value: filterActive ? "node-a/node-c pass, node-b rejected" : "pending", active: filterActive },
    { name: "Score", value: scoreActive ? "node-c gets highest preferred weight" : "pending", active: scoreActive },
    { name: "Bind", value: bindActive ? "trainer running on node-c" : "unbound", active: bindActive },
  ];

  return (
    <div className="visual-stage k8s-node-affinity-stage">
      <div className="k8s-node-affinity-card">
        <svg
          className="k8s-node-affinity-diagram"
          viewBox="0 0 1120 640"
          role="img"
          aria-label={readLocalizedText(simulation.title, locale)}
        >
          <defs>
            {[
              ["k8s-node-affinity-arrow-brand", "var(--brand)"],
              ["k8s-node-affinity-arrow-teal", "var(--tertiary)"],
              ["k8s-node-affinity-arrow-warning", "#f59e0b"],
              ["k8s-node-affinity-arrow-success", "var(--success)"],
              ["k8s-node-affinity-arrow-danger", "var(--danger)"],
            ].map(([id, fill]) => (
              <marker
                key={id}
                id={id}
                viewBox="0 0 10 10"
                refX="8.5"
                refY="5"
                markerWidth="8"
                markerHeight="8"
                orient="auto"
              >
                <path d="M 0 0 L 10 5 L 0 10 z" fill={fill} />
              </marker>
            ))}
            <filter id="k8s-node-affinity-soft-shadow" x="-20%" y="-30%" width="140%" height="160%">
              <feDropShadow dx="0" dy="10" stdDeviation="10" floodColor="#172033" floodOpacity="0.13" />
            </filter>
          </defs>

          <rect className="k8s-node-affinity-bg" x="24" y="24" width="1072" height="588" rx="28" />
          <text className="k8s-node-affinity-title" x="560" y="70">
            {readLocalizedText(simulation.title, locale)}
          </text>
          <text className="k8s-node-affinity-subtitle" x="560" y="100">
            {label(
              "pending Pod -> nodeAffinity rules -> NodeInfo labels -> required Filter -> preferred Score -> bind",
              "pending Pod -> nodeAffinity rules -> NodeInfo labels -> required Filter -> preferred Score -> bind",
            )}
          </text>

          <g className={`k8s-node-affinity-workload ${ruleActive ? "active" : ""}`}>
            <rect x="64" y="126" width="266" height="158" rx="24" />
            <text className="k8s-node-affinity-panel-title" x="92" y="164">Pending Pod</text>
            <text className="k8s-node-affinity-panel-subtitle" x="92" y="188">trainer · namespace=ml</text>
            <g className={`k8s-node-affinity-chip brand ${ruleActive ? "active" : ""}`}>
              <rect x="92" y="212" width="196" height="28" rx="14" />
              <text x="190" y="231">spec.affinity loaded</text>
            </g>
            <g className={`k8s-node-affinity-chip success ${bindActive ? "active" : ""}`}>
              <rect x="92" y="248" width="196" height="28" rx="14" />
              <text x="190" y="267">{bindActive ? "Running on node-c" : "awaiting bind"}</text>
            </g>
          </g>

          <g className={`k8s-node-affinity-rules ${ruleActive ? "active" : ""}`}>
            <rect x="386" y="126" width="318" height="188" rx="24" />
            <text className="k8s-node-affinity-panel-title" x="414" y="164">spec.affinity.nodeAffinity</text>
            {ruleRows.map((row, index) => (
              <g key={row.name} className={`k8s-node-affinity-row ${row.tone} ${row.active ? "active" : ""}`}>
                <rect x="414" y={188 + index * 31} width="238" height="24" rx="12" />
                <text x="428" y={205 + index * 31}>{row.name}</text>
                <text x="644" y={205 + index * 31}>{row.value}</text>
              </g>
            ))}
          </g>

          <g className={`k8s-node-affinity-index ${labelActive ? "active" : ""}`}>
            <rect x="762" y="126" width="294" height="188" rx="24" />
            <text className="k8s-node-affinity-panel-title" x="790" y="164">NodeInfo label index</text>
            <text className="k8s-node-affinity-panel-subtitle" x="790" y="188">kubectl get nodes --show-labels</text>
            <g className={`k8s-node-affinity-chip teal ${labelActive ? "active" : ""}`}>
              <rect x="790" y="214" width="206" height="28" rx="14" />
              <text x="893" y="233">zone + accelerator keys</text>
            </g>
            <g className={`k8s-node-affinity-chip warning ${filterActive ? "active" : ""}`}>
              <rect x="790" y="252" width="206" height="28" rx="14" />
              <text x="893" y="271">node-b label mismatch</text>
            </g>
          </g>

          <g className={`k8s-node-affinity-nodes ${labelActive ? "active" : ""}`}>
            <rect x="64" y="346" width="858" height="156" rx="26" />
            <text className="k8s-node-affinity-panel-title" x="92" y="382">Candidate nodes by labels</text>
            <text className="k8s-node-affinity-panel-subtitle" x="92" y="404">topology.kubernetes.io/zone · accelerator · node.kubernetes.io/instance-type</text>
            {nodes.map((node) => (
              <g key={node.name} className={`k8s-node-affinity-node ${node.tone} ${node.active ? "active" : ""}`}>
                <rect x={node.x} y="426" width="230" height="54" rx="20" />
                <text x={node.x + 22} y="449">{node.name}</text>
                <text x={node.x + 22} y="470">{node.value}</text>
                <circle className={node.feasible && filterActive ? "active" : ""} cx={node.x + 166} cy="452" r="8" />
                <text x={node.x + 202} y="456">{node.score}</text>
              </g>
            ))}
          </g>

          <g className={`k8s-node-affinity-filter ${filterActive ? "active" : ""}`}>
            <rect x="958" y="346" width="98" height="156" rx="24" />
            <text className="k8s-node-affinity-panel-title" x="1007" y="382">Filter</text>
            {filterRows.map((row, index) => (
              <g key={row.name} className={`k8s-node-affinity-filter-row ${row.tone} ${row.active ? "active" : ""}`}>
                <rect x="974" y={406 + index * 34} width="58" height="25" rx="13" />
                <text x="1003" y={423 + index * 34}>{row.name}</text>
              </g>
            ))}
          </g>

          <g className={`k8s-node-affinity-score ${scoreActive ? "active" : ""}`}>
            <rect x="64" y="526" width="456" height="62" rx="24" />
            <text className="k8s-node-affinity-panel-title" x="92" y="554">Score plugins</text>
            {scoreRows.map((row, index) => (
              <g key={row.name} className={`k8s-node-affinity-score-row ${row.tone} ${row.active ? "active" : ""}`}>
                <rect x="220" y={534 + index * 17} width={row.width} height="14" rx="7" />
                <text x="230" y={544 + index * 17}>{row.name}</text>
                <text x="496" y={544 + index * 17}>{row.value}</text>
              </g>
            ))}
          </g>

          <g className={`k8s-node-affinity-events ${filterActive || bindActive ? "active" : ""}`}>
            <rect x="558" y="526" width="498" height="62" rx="24" />
            <text className="k8s-node-affinity-panel-title" x="586" y="554">Events and validation</text>
            <text className="k8s-node-affinity-panel-subtitle" x="586" y="574">
              {bindActive ? "Scheduled trainer to node-c; zone and accelerator labels match" : filterActive ? "NodeAffinity: node(s) did not match Pod's node affinity rules" : "waiting for scheduler evidence"}
            </text>
          </g>

          <g className={`k8s-node-affinity-rule-path ${ruleActive ? "active" : ""}`}>
            <path d="M 330 204 C 354 204, 366 204, 386 204" markerEnd="url(#k8s-node-affinity-arrow-brand)" />
            <rect x="292" y="306" width="150" height="30" rx="15" />
            <text x="367" y="326">parse rules</text>
          </g>

          <g className={`k8s-node-affinity-label-path ${labelActive ? "active" : ""}`}>
            <path d="M 704 204 C 732 204, 744 204, 762 204" markerEnd="url(#k8s-node-affinity-arrow-teal)" />
            <path d="M 908 314 C 850 334, 730 348, 560 370" markerEnd="url(#k8s-node-affinity-arrow-teal)" />
          </g>

          <g className={`k8s-node-affinity-filter-path ${filterActive ? "active" : ""}`}>
            <path d="M 922 432 C 940 432, 948 432, 958 432" markerEnd="url(#k8s-node-affinity-arrow-warning)" />
            <rect x="794" y="318" width="160" height="30" rx="15" />
            <text x="874" y="338">required filter</text>
          </g>

          <g className={`k8s-node-affinity-score-path ${scoreActive ? "active" : ""}`}>
            <path d="M 1006 502 C 836 536, 640 548, 520 556" markerEnd="url(#k8s-node-affinity-arrow-success)" />
            <rect x="682" y="492" width="174" height="30" rx="15" />
            <text x="769" y="512">preferred weight</text>
          </g>

          <g className={`k8s-node-affinity-bind-path ${bindActive ? "active" : ""}`}>
            <path d="M 558 558 C 458 618, 670 620, 760 480" markerEnd="url(#k8s-node-affinity-arrow-success)" />
            <rect x="326" y="594" width="140" height="28" rx="14" />
            <text x="396" y="613">bind node-c</text>
          </g>

          <g className="k8s-node-affinity-signals">
            {signalRows.map((signal, index) => (
              <g key={signal.name} className={`k8s-node-affinity-signal ${signal.tone} ${signal.active ? "active" : ""}`}>
                <rect x={64 + index * 258} y="594" width="218" height="32" rx="16" />
                <text x={84 + index * 258} y="607">{signal.name}</text>
                <text x={270 + index * 258} y="620">{signal.value}</text>
              </g>
            ))}
          </g>
        </svg>
        <div className="k8s-node-affinity-mobile-map">
          <div className="k8s-node-affinity-mobile-flow" aria-hidden="true">
            {mobileFlow.map((item) => (
              <div key={item.name} className={`k8s-node-affinity-mobile-hop ${item.active ? "active" : ""}`}>
                <span>{item.name}</span>
                <strong>{item.value}</strong>
              </div>
            ))}
          </div>
          <div className="k8s-node-affinity-mobile-facts">
            {signalRows.map((signal) => (
              <div key={signal.name} className={`k8s-node-affinity-mobile-fact ${signal.active ? "active" : ""}`}>
                <span>{signal.name}</span>
                <strong>{signal.value}</strong>
              </div>
            ))}
          </div>
        </div>
        <div className="tcp-handshake-caption k8s-node-affinity-caption">
          <strong>{readLocalizedText(activeStep.title, locale)}</strong>
          <span>{completedSteps}/{simulation.steps.length}</span>
        </div>
      </div>
    </div>
  );
}

function KubernetesPreemptionStage({
  simulation,
  locale,
  completedSteps,
  activeStepIndex,
}: {
  simulation: VisualSimulation;
  locale: Locale;
  completedSteps: number;
  activeStepIndex: number;
}) {
  const activeStep = simulation.steps[activeStepIndex];
  const label = (zh: string, en: string) => (locale === "zh" ? zh : en);
  const priorityActive = completedSteps >= 1;
  const filterActive = completedSteps >= 2;
  const victimActive = completedSteps >= 3;
  const nominateActive = completedSteps >= 4;
  const bindActive = completedSteps >= 5;
  const queueRows = [
    { name: "api-critical", value: priorityActive ? "priority=1000000000" : "waiting", active: priorityActive, tone: "brand" },
    { name: "checkout", value: filterActive ? "priority=1000" : "normal workload", active: filterActive, tone: "teal" },
    { name: "batch-low", value: victimActive ? "priority=100" : "low priority", active: victimActive, tone: "danger" },
  ];
  const filterRows = [
    { name: "NodeResourcesFit", value: filterActive ? "0/3 fit" : "pending", active: filterActive, tone: "warning" },
    { name: "InterPodAffinity", value: filterActive ? "node-b allowed" : "pending", active: filterActive, tone: "teal" },
    { name: "TaintToleration", value: filterActive ? "passed" : "pending", active: filterActive, tone: "brand" },
  ];
  const nodeRows = [
    { name: "node-a", value: victimActive ? "3 victims / PDB hit" : "cpu 200m free", active: victimActive, tone: "warning" },
    { name: "node-b", value: bindActive ? "api-critical running" : victimActive ? "2 victims feasible" : "cpu 100m free", active: victimActive || bindActive, tone: bindActive ? "success" : "danger" },
    { name: "node-c", value: victimActive ? "affinity mismatch" : "taint dedicated", active: victimActive, tone: "teal" },
  ];
  const victimRows = [
    { name: "batch-low", value: victimActive ? "evict 500m CPU" : "candidate", active: victimActive, tone: "danger" },
    { name: "reports-low", value: victimActive ? "evict 400Mi" : "candidate", active: victimActive, tone: "warning" },
    { name: "checkout", value: victimActive ? "protected by PDB" : "protected", active: victimActive, tone: "teal" },
  ];
  const nominationRows = [
    { name: "nominatedNodeName", value: nominateActive ? "node-b" : "empty", active: nominateActive, tone: "brand" },
    { name: "victims", value: nominateActive ? "terminating" : "waiting", active: nominateActive, tone: "danger" },
    { name: "requeue", value: bindActive ? "bound" : nominateActive ? "after grace" : "pending", active: nominateActive || bindActive, tone: bindActive ? "success" : "teal" },
  ];
  const signalRows = [
    { name: "PriorityClass", value: priorityActive ? "cluster-critical" : "pending", active: priorityActive, tone: "brand" },
    { name: "victims", value: victimActive ? "2 low-priority Pods" : "none", active: victimActive, tone: "danger" },
    { name: "nominatedNodeName", value: nominateActive ? "node-b" : "empty", active: nominateActive, tone: "teal" },
    { name: "PDB budget", value: victimActive ? "1 disruption left" : "unchecked", active: victimActive, tone: "warning" },
  ];
  const mobileFlow = [
    { name: "Priority", value: priorityActive ? "api-critical value=1000000000" : "waiting class", active: priorityActive },
    { name: "Filter", value: filterActive ? "0/3 nodes fit, preemption starts" : "pending", active: filterActive },
    { name: "Victims", value: victimActive ? "node-b works after 2 victims" : "pending", active: victimActive },
    { name: "Nominate", value: nominateActive ? "nominatedNodeName=node-b" : "empty", active: nominateActive },
    { name: "Bind", value: bindActive ? "Scheduled=True on node-b" : "awaiting grace", active: bindActive },
  ];

  return (
    <div className="visual-stage k8s-preemption-stage">
      <div className="k8s-preemption-card">
        <svg
          className="k8s-preemption-diagram"
          viewBox="0 0 1120 640"
          role="img"
          aria-label={readLocalizedText(simulation.title, locale)}
        >
          <defs>
            {[
              ["k8s-preemption-arrow-brand", "var(--brand)"],
              ["k8s-preemption-arrow-teal", "var(--tertiary)"],
              ["k8s-preemption-arrow-warning", "#f59e0b"],
              ["k8s-preemption-arrow-success", "var(--success)"],
              ["k8s-preemption-arrow-danger", "var(--danger)"],
            ].map(([id, fill]) => (
              <marker
                key={id}
                id={id}
                viewBox="0 0 10 10"
                refX="8.5"
                refY="5"
                markerWidth="8"
                markerHeight="8"
                orient="auto"
              >
                <path d="M 0 0 L 10 5 L 0 10 z" fill={fill} />
              </marker>
            ))}
            <filter id="k8s-preemption-soft-shadow" x="-20%" y="-30%" width="140%" height="160%">
              <feDropShadow dx="0" dy="10" stdDeviation="10" floodColor="#172033" floodOpacity="0.13" />
            </filter>
          </defs>

          <rect className="k8s-preemption-bg" x="24" y="24" width="1072" height="588" rx="28" />
          <text className="k8s-preemption-title" x="560" y="70">
            {readLocalizedText(simulation.title, locale)}
          </text>
          <text className="k8s-preemption-subtitle" x="560" y="100">
            {label(
              "PriorityClass -> failed Filter -> preemption simulation -> victims/PDB -> nominatedNodeName -> bind",
              "PriorityClass -> failed Filter -> preemption simulation -> victims/PDB -> nominatedNodeName -> bind",
            )}
          </text>

          <g className={`k8s-preemption-priority ${priorityActive ? "active" : ""}`}>
            <rect x="64" y="132" width="288" height="174" rx="24" />
            <text className="k8s-preemption-panel-title" x="92" y="170">PriorityClass</text>
            <text className="k8s-preemption-panel-subtitle" x="92" y="194">system-cluster-critical · preemptionPolicy=PreemptLowerPriority</text>
            <g className={`k8s-preemption-chip brand ${priorityActive ? "active" : ""}`}>
              <rect x="92" y="218" width="214" height="30" rx="15" />
              <text x="199" y="238">value=1000000000</text>
            </g>
            <g className={`k8s-preemption-chip teal ${priorityActive ? "active" : ""}`}>
              <rect x="92" y="256" width="214" height="30" rx="15" />
              <text x="199" y="276">globalDefault=false</text>
            </g>
          </g>

          <g className={`k8s-preemption-queue ${priorityActive ? "active" : ""}`}>
            <rect x="64" y="340" width="288" height="162" rx="24" />
            <text className="k8s-preemption-panel-title" x="92" y="378">Scheduling Queue</text>
            {queueRows.map((row, index) => (
              <g key={row.name} className={`k8s-preemption-row ${row.tone} ${row.active ? "active" : ""}`}>
                <rect x="92" y={400 + index * 34} width="216" height="25" rx="13" />
                <text x="108" y={417 + index * 34}>{row.name}</text>
                <text x="300" y={417 + index * 34}>{row.value}</text>
              </g>
            ))}
          </g>

          <g className={`k8s-preemption-filter ${filterActive ? "active" : ""}`}>
            <rect x="410" y="132" width="270" height="174" rx="24" />
            <text className="k8s-preemption-panel-title" x="438" y="170">Normal Filter</text>
            <text className="k8s-preemption-panel-subtitle" x="438" y="194">failed scheduling cycle</text>
            {filterRows.map((row, index) => (
              <g key={row.name} className={`k8s-preemption-row ${row.tone} ${row.active ? "active" : ""}`}>
                <rect x="438" y={218 + index * 34} width="190" height="25" rx="13" />
                <text x="452" y={235 + index * 34}>{row.name}</text>
                <text x="620" y={235 + index * 34}>{row.value}</text>
              </g>
            ))}
          </g>

          <g className={`k8s-preemption-nodes ${victimActive ? "active" : ""}`}>
            <rect x="410" y="340" width="270" height="162" rx="24" />
            <text className="k8s-preemption-panel-title" x="438" y="378">Preemption candidates</text>
            {nodeRows.map((row, index) => (
              <g key={row.name} className={`k8s-preemption-row ${row.tone} ${row.active ? "active" : ""}`}>
                <rect x="438" y={400 + index * 34} width="190" height="25" rx="13" />
                <text x="452" y={417 + index * 34}>{row.name}</text>
                <text x="620" y={417 + index * 34}>{row.value}</text>
              </g>
            ))}
          </g>

          <g className={`k8s-preemption-victims ${victimActive ? "active" : ""}`}>
            <rect x="744" y="132" width="292" height="174" rx="24" />
            <text className="k8s-preemption-panel-title" x="772" y="170">Victims and PDB</text>
            <text className="k8s-preemption-panel-subtitle" x="772" y="194">lower-priority Pods · graceful termination</text>
            {victimRows.map((row, index) => (
              <g key={row.name} className={`k8s-preemption-row ${row.tone} ${row.active ? "active" : ""}`}>
                <rect x="772" y={218 + index * 34} width="214" height="25" rx="13" />
                <text x="786" y={235 + index * 34}>{row.name}</text>
                <text x="978" y={235 + index * 34}>{row.value}</text>
              </g>
            ))}
          </g>

          <g className={`k8s-preemption-nomination ${nominateActive ? "active" : ""}`}>
            <rect x="744" y="340" width="292" height="162" rx="24" />
            <text className="k8s-preemption-panel-title" x="772" y="378">Nomination and bind</text>
            {nominationRows.map((row, index) => (
              <g key={row.name} className={`k8s-preemption-row ${row.tone} ${row.active ? "active" : ""}`}>
                <rect x="772" y={400 + index * 34} width="214" height="25" rx="13" />
                <text x="786" y={417 + index * 34}>{row.name}</text>
                <text x="978" y={417 + index * 34}>{row.value}</text>
              </g>
            ))}
          </g>

          <g className={`k8s-preemption-priority-path ${priorityActive ? "active" : ""}`}>
            <path d="M 352 220 C 382 220, 394 220, 410 220" markerEnd="url(#k8s-preemption-arrow-brand)" />
            <path d="M 200 306 L 200 340" markerEnd="url(#k8s-preemption-arrow-brand)" />
          </g>

          <g className={`k8s-preemption-filter-path ${filterActive ? "active" : ""}`}>
            <path d="M 352 422 C 382 370, 394 316, 430 286" markerEnd="url(#k8s-preemption-arrow-warning)" />
            <rect x="320" y="314" width="156" height="30" rx="15" />
            <text x="398" y="334">0/3 nodes fit</text>
          </g>

          <g className={`k8s-preemption-victim-path ${victimActive ? "active" : ""}`}>
            <path d="M 680 226 C 710 226, 728 226, 744 226" markerEnd="url(#k8s-preemption-arrow-danger)" />
            <path d="M 545 306 L 545 340" markerEnd="url(#k8s-preemption-arrow-danger)" />
            <rect x="606" y="314" width="168" height="30" rx="15" />
            <text x="690" y="334">simulate removal</text>
          </g>

          <g className={`k8s-preemption-nominate-path ${nominateActive ? "active" : ""}`}>
            <path d="M 890 306 L 890 340" markerEnd="url(#k8s-preemption-arrow-teal)" />
            <rect x="790" y="314" width="178" height="30" rx="15" />
            <text x="879" y="334">write nomination</text>
          </g>

          <g className={`k8s-preemption-bind-path ${bindActive ? "active" : ""}`}>
            <path d="M 744 450 C 636 570, 300 570, 200 502" markerEnd="url(#k8s-preemption-arrow-success)" />
            <rect x="472" y="542" width="164" height="30" rx="15" />
            <text x="554" y="562">resources released</text>
          </g>

          <g className="k8s-preemption-signals">
            {signalRows.map((signal, index) => (
              <g key={signal.name} className={`k8s-preemption-signal ${signal.tone} ${signal.active ? "active" : ""}`}>
                <rect x={64 + index * 258} y="578" width="218" height="34" rx="16" />
                <text x={84 + index * 258} y="592">{signal.name}</text>
                <text x={270 + index * 258} y="606">{signal.value}</text>
              </g>
            ))}
          </g>
        </svg>
        <div className="k8s-preemption-mobile-map">
          <div className="k8s-preemption-mobile-flow" aria-hidden="true">
            {mobileFlow.map((item) => (
              <div key={item.name} className={`k8s-preemption-mobile-hop ${item.active ? "active" : ""}`}>
                <span>{item.name}</span>
                <strong>{item.value}</strong>
              </div>
            ))}
          </div>
          <div className="k8s-preemption-mobile-facts">
            {signalRows.map((signal) => (
              <div key={signal.name} className={`k8s-preemption-mobile-fact ${signal.active ? "active" : ""}`}>
                <span>{signal.name}</span>
                <strong>{signal.value}</strong>
              </div>
            ))}
          </div>
        </div>
        <div className="tcp-handshake-caption k8s-preemption-caption">
          <strong>{readLocalizedText(activeStep.title, locale)}</strong>
          <span>{completedSteps}/{simulation.steps.length}</span>
        </div>
      </div>
    </div>
  );
}

function DockerImageLayerStage({
  simulation,
  locale,
  completedSteps,
  activeStepIndex,
}: {
  simulation: VisualSimulation;
  locale: Locale;
  completedSteps: number;
  activeStepIndex: number;
}) {
  const activeStep = simulation.steps[activeStepIndex];
  const label = (zh: string, en: string) => (locale === "zh" ? zh : en);
  const buildActive = completedSteps >= 1;
  const cacheActive = completedSteps >= 2;
  const shareActive = completedSteps >= 3;
  const overlayActive = completedSteps >= 4;
  const diagnosisActive = completedSteps >= 5;
  const layerRows = [
    { name: "app src", command: "COPY src /app", size: "18 MB", tone: "brand", active: buildActive },
    { name: "npm deps", command: "RUN npm ci", size: "142 MB", tone: "teal", active: cacheActive },
    { name: "apt libs", command: "RUN apt-get install", size: "86 MB", tone: "warning", active: buildActive },
    { name: "base", command: "FROM node:22-alpine", size: "78 MB", tone: "success", active: buildActive },
  ];
  const dockerfileRows = [
    { line: "FROM node:22-alpine", active: buildActive },
    { line: "COPY package*.json ./", active: cacheActive },
    { line: "RUN npm ci --omit=dev", active: cacheActive },
    { line: "COPY src ./src", active: buildActive },
  ];
  const cacheRows = [
    { name: "base", value: cacheActive ? "HIT" : "pending", active: cacheActive, tone: "success" },
    { name: "deps", value: cacheActive ? "HIT" : "pending", active: cacheActive, tone: "success" },
    { name: "src", value: cacheActive ? "MISS" : "pending", active: cacheActive, tone: "danger" },
  ];
  const overlayRows = [
    { name: "lowerdir", value: "base:deps:app", active: overlayActive },
    { name: "upperdir", value: diagnosisActive ? "+ /tmp/report.log" : "empty", active: overlayActive },
    { name: "merged", value: overlayActive ? "/var/lib/docker/overlay2/.../merged" : "pending", active: overlayActive },
  ];
  const signalRows = [
    { name: "history", value: diagnosisActive ? "RUN npm ci 142 MB" : "--", active: diagnosisActive },
    { name: "inspect", value: buildActive ? "RootFS layers=4" : "--", active: buildActive },
    { name: "system df", value: shareActive ? "shared=306 MB" : "--", active: shareActive },
    { name: "whiteout", value: diagnosisActive ? ".wh.secret" : "--", active: diagnosisActive },
  ];

  return (
    <div className="visual-stage docker-layer-stage">
      <div className="docker-layer-card">
        <svg
          className="docker-layer-diagram"
          viewBox="0 0 1120 640"
          role="img"
          aria-label={readLocalizedText(simulation.title, locale)}
        >
          <defs>
            {[
              ["docker-layer-arrow-brand", "var(--brand)"],
              ["docker-layer-arrow-teal", "var(--tertiary)"],
              ["docker-layer-arrow-success", "var(--success)"],
              ["docker-layer-arrow-warning", "#f59e0b"],
              ["docker-layer-arrow-danger", "var(--danger)"],
            ].map(([id, fill]) => (
              <marker
                key={id}
                id={id}
                viewBox="0 0 10 10"
                refX="8.5"
                refY="5"
                markerWidth="8"
                markerHeight="8"
                orient="auto"
              >
                <path d="M 0 0 L 10 5 L 0 10 z" fill={fill} />
              </marker>
            ))}
            <filter id="docker-layer-soft-shadow" x="-20%" y="-30%" width="140%" height="160%">
              <feDropShadow dx="0" dy="10" stdDeviation="10" floodColor="#172033" floodOpacity="0.13" />
            </filter>
          </defs>

          <rect className="docker-layer-bg" x="24" y="24" width="1072" height="568" rx="28" />
          <text className="docker-layer-title" x="560" y="70">
            {readLocalizedText(simulation.title, locale)}
          </text>
          <text className="docker-layer-subtitle" x="560" y="100">
            {label(
              "Dockerfile -> layer diffs -> shared lowerdir -> upperdir -> merged rootfs",
              "Dockerfile -> layer diffs -> shared lowerdir -> upperdir -> merged rootfs",
            )}
          </text>

          <g className={`docker-layer-dockerfile ${buildActive ? "active" : ""}`}>
            <rect x="56" y="136" width="222" height="216" rx="24" />
            <text className="docker-layer-panel-title" x="84" y="172">Dockerfile</text>
            <text className="docker-layer-panel-subtitle" x="84" y="194">{label("指令顺序决定层边界", "Instruction order defines layer boundaries")}</text>
            {dockerfileRows.map((row, index) => (
              <g key={row.line} className={`docker-layer-code-row ${row.active ? "active" : ""}`}>
                <rect x="82" y={218 + index * 32} width="168" height="24" rx="10" />
                <text x="96" y={234 + index * 32}>{row.line}</text>
              </g>
            ))}
          </g>

          <g className={`docker-layer-cache ${cacheActive ? "active" : ""}`}>
            <rect x="56" y="382" width="222" height="130" rx="24" />
            <text className="docker-layer-panel-title" x="84" y="418">Build Cache</text>
            {cacheRows.map((row, index) => (
              <g key={row.name} className={`docker-layer-cache-row ${row.tone} ${row.active ? "active" : ""}`}>
                <rect x="82" y={436 + index * 28} width="166" height="22" rx="11" />
                <text x="96" y={451 + index * 28}>{row.name}</text>
                <text x="234" y={451 + index * 28}>{row.value}</text>
              </g>
            ))}
          </g>

          <g className={`docker-layer-stack ${buildActive ? "active" : ""}`}>
            <rect x="358" y="128" width="274" height="392" rx="28" />
            <text className="docker-layer-panel-title" x="386" y="166">{label("只读镜像层栈", "Read-only image stack")}</text>
            <text className="docker-layer-panel-subtitle" x="386" y="188">RootFS layers + config history</text>
            {layerRows.map((row, index) => {
              const y = 224 + index * 66;
              return (
                <g key={row.name} className={`docker-layer-row ${row.tone} ${row.active ? "active" : ""}`}>
                  <rect x="394" y={y} width="202" height="48" rx="16" />
                  <text x="416" y={y + 20}>{row.name}</text>
                  <text x="416" y={y + 36}>{row.command}</text>
                  <text x="578" y={y + 30}>{row.size}</text>
                </g>
              );
            })}
            <path className={`docker-layer-midline ${shareActive ? "active" : ""}`} d="M 382 536 L 608 536" />
            <text className={`docker-layer-shared-label ${shareActive ? "active" : ""}`} x="495" y="560">
              {label("shared lower layers", "shared lower layers")}
            </text>
          </g>

          <g className={`docker-layer-containers ${shareActive ? "active" : ""}`}>
            <rect x="694" y="128" width="352" height="188" rx="28" />
            <text className="docker-layer-panel-title" x="722" y="166">{label("多个容器共享镜像层", "Containers share image layers")}</text>
            {[
              { name: "container A", x: 728, upper: diagnosisActive ? "+ log" : "upperdir A" },
              { name: "container B", x: 886, upper: "upperdir B" },
            ].map((container) => (
              <g key={container.name} className={`docker-layer-container ${shareActive ? "active" : ""}`}>
                <rect x={container.x} y="198" width="126" height="78" rx="18" />
                <text x={container.x + 63} y="224">{container.name}</text>
                <text x={container.x + 63} y="246">{container.upper}</text>
                <text x={container.x + 63} y="264">same lowerdir</text>
              </g>
            ))}
          </g>

          <g className={`docker-layer-overlay ${overlayActive ? "active" : ""}`}>
            <rect x="694" y="342" width="352" height="178" rx="28" />
            <text className="docker-layer-panel-title" x="722" y="380">overlay2</text>
            <text className="docker-layer-panel-subtitle" x="722" y="402">{label("组合容器进程看到的根文件系统", "Composes the rootfs seen by the process")}</text>
            {overlayRows.map((row, index) => (
              <g key={row.name} className={`docker-layer-overlay-row ${row.active ? "active" : ""}`}>
                <rect x="728" y={424 + index * 28} width="274" height="22" rx="11" />
                <text x="744" y={439 + index * 28}>{row.name}</text>
                <text x="992" y={439 + index * 28}>{row.value}</text>
              </g>
            ))}
          </g>

          <g className={`docker-layer-build-path ${buildActive ? "active" : ""}`}>
            <path d="M 278 240 C 308 238, 330 238, 358 244" markerEnd="url(#docker-layer-arrow-brand)" />
            <rect x="246" y="198" width="170" height="32" rx="16" />
            <text x="331" y="219">layer diff</text>
          </g>

          <g className={`docker-layer-cache-path ${cacheActive ? "active" : ""}`}>
            <path d="M 278 440 C 326 436, 342 356, 394 314" markerEnd="url(#docker-layer-arrow-teal)" />
            <rect x="264" y="364" width="136" height="32" rx="16" />
            <text x="332" y="385">cache key</text>
          </g>

          <g className={`docker-layer-share-path ${shareActive ? "active" : ""}`}>
            <path d="M 632 290 C 660 272, 676 246, 728 236" markerEnd="url(#docker-layer-arrow-success)" />
            <path d="M 632 340 C 700 330, 770 258, 886 236" markerEnd="url(#docker-layer-arrow-success)" />
          </g>

          <g className={`docker-layer-overlay-path ${overlayActive ? "active" : ""}`}>
            <path d="M 870 316 L 870 342" markerEnd="url(#docker-layer-arrow-warning)" />
            <path d="M 632 440 C 674 442, 700 438, 728 436" markerEnd="url(#docker-layer-arrow-warning)" />
          </g>

          <g className={`docker-layer-cow-path ${diagnosisActive ? "active" : ""}`}>
            <path d="M 916 276 C 978 314, 982 382, 950 424" markerEnd="url(#docker-layer-arrow-danger)" />
            <rect x="866" y="304" width="154" height="34" rx="17" />
            <text x="943" y="326">copy-on-write</text>
          </g>

          <g className="docker-layer-signals">
            {signalRows.map((signal, index) => (
              <g key={signal.name} className={`docker-layer-signal ${signal.active ? "active" : ""}`}>
                <rect x={64 + index * 258} y="536" width="218" height="34" rx="16" />
                <text x={84 + index * 258} y="550">{signal.name}</text>
                <text x={262 + index * 258} y="562">{signal.value}</text>
              </g>
            ))}
          </g>
        </svg>
        <div className="docker-layer-mobile-map">
          <div className="docker-layer-mobile-flow" aria-hidden="true">
            {[
              { name: "Dockerfile", value: buildActive ? "FROM/RUN/COPY -> layer diff" : "pending", active: buildActive },
              { name: "Build Cache", value: cacheActive ? "base/deps HIT, src MISS" : "pending", active: cacheActive },
              { name: "Read-only Layers", value: shareActive ? "base/deps/app shared" : "waiting", active: shareActive },
              { name: "overlay2", value: overlayActive ? "lowerdir + upperdir -> merged" : "waiting", active: overlayActive },
              { name: "Writable Layer", value: diagnosisActive ? "copy-on-write + whiteout visible" : "empty", active: diagnosisActive },
            ].map((item) => (
              <div key={item.name} className={`docker-layer-mobile-hop ${item.active ? "active" : ""}`}>
                <span>{item.name}</span>
                <strong>{item.value}</strong>
              </div>
            ))}
          </div>
          <div className="docker-layer-mobile-facts">
            {signalRows.map((signal) => (
              <div key={signal.name} className={`docker-layer-mobile-fact ${signal.active ? "active" : ""}`}>
                <span>{signal.name}</span>
                <strong>{signal.value}</strong>
              </div>
            ))}
          </div>
        </div>
        <div className="tcp-handshake-caption docker-layer-caption">
          <strong>{readLocalizedText(activeStep.title, locale)}</strong>
          <span>{completedSteps}/{simulation.steps.length}</span>
        </div>
      </div>
    </div>
  );
}

function DockerMultiStageBuildStage({
  simulation,
  locale,
  completedSteps,
  activeStepIndex,
}: {
  simulation: VisualSimulation;
  locale: Locale;
  completedSteps: number;
  activeStepIndex: number;
}) {
  const activeStep = simulation.steps[activeStepIndex];
  const label = (zh: string, en: string) => (locale === "zh" ? zh : en);
  const splitActive = completedSteps >= 1;
  const buildActive = completedSteps >= 2;
  const copyActive = completedSteps >= 3;
  const finalActive = completedSteps >= 4;
  const buildkitActive = completedSteps >= 5;
  const stages = [
    { id: "deps", name: "deps", from: "node:22", y: 134, tone: "brand", active: splitActive, note: label("锁文件 + npm ci", "lockfile + npm ci") },
    { id: "build", name: "build", from: "golang:1.22", y: 210, tone: "teal", active: buildActive, note: label("源码 -> /out/app", "source -> /out/app") },
    { id: "test", name: "test", from: "build", y: 286, tone: "warning", active: buildkitActive, note: label("--target test", "--target test") },
    { id: "runtime", name: "runtime", from: "distroless", y: 362, tone: "success", active: finalActive, note: label("ENTRYPOINT /app", "ENTRYPOINT /app") },
  ];
  const artifacts = [
    { name: "/out/app", detail: "binary", active: buildActive },
    { name: "/etc/ssl/certs", detail: "certs", active: copyActive },
    { name: "/src", detail: "left behind", active: buildActive, muted: true },
    { name: "/root/.cache", detail: "cache mount", active: buildkitActive, muted: true },
  ];
  const finalLayers = [
    { name: "distroless base", size: "28MB", active: finalActive, tone: "success" },
    { name: "/app", size: "17MB", active: copyActive, tone: "teal" },
    { name: "certs + user", size: "3MB", active: finalActive, tone: "brand" },
  ];
  const mobileFlow = [
    { name: "Dockerfile", value: splitActive ? "4 named stages parsed" : "waiting", active: splitActive },
    { name: "Builder", value: buildActive ? "/out/app generated" : "pending", active: buildActive },
    { name: "COPY --from", value: copyActive ? "app + certs only" : "pending", active: copyActive },
    { name: "Final image", value: finalActive ? "48MB runtime" : "pending", active: finalActive },
    { name: "BuildKit", value: buildkitActive ? "skip runtime for --target test" : "DAG pending", active: buildkitActive },
  ];

  return (
    <div className="visual-stage docker-multistage-stage">
      <div className="docker-multistage-card">
        <svg
          className="docker-multistage-diagram"
          viewBox="0 0 1120 640"
          role="img"
          aria-label={readLocalizedText(simulation.title, locale)}
        >
          <defs>
            {[
              ["docker-ms-arrow-brand", "var(--brand)"],
              ["docker-ms-arrow-teal", "var(--tertiary)"],
              ["docker-ms-arrow-warning", "#f59e0b"],
              ["docker-ms-arrow-success", "var(--success)"],
              ["docker-ms-arrow-danger", "var(--danger)"],
            ].map(([id, fill]) => (
              <marker
                key={id}
                id={id}
                viewBox="0 0 10 10"
                refX="8.5"
                refY="5"
                markerWidth="8"
                markerHeight="8"
                orient="auto"
              >
                <path d="M 0 0 L 10 5 L 0 10 z" fill={fill} />
              </marker>
            ))}
            <filter id="docker-ms-soft-shadow" x="-20%" y="-30%" width="140%" height="160%">
              <feDropShadow dx="0" dy="10" stdDeviation="10" floodColor="#172033" floodOpacity="0.13" />
            </filter>
          </defs>

          <rect className="docker-ms-bg" x="24" y="24" width="1072" height="568" rx="28" />
          <text className="docker-ms-title" x="560" y="70">{readLocalizedText(simulation.title, locale)}</text>
          <text className="docker-ms-subtitle" x="560" y="100">
            {label(
              "Dockerfile stages -> builder filesystem -> COPY --from -> final runtime image -> BuildKit DAG",
              "Dockerfile stages -> builder filesystem -> COPY --from -> final runtime image -> BuildKit DAG",
            )}
          </text>

          <g className={`docker-ms-dockerfile ${splitActive ? "active" : ""}`}>
            <rect x="64" y="126" width="260" height="358" rx="24" />
            <text className="docker-ms-panel-title" x="92" y="162">Dockerfile</text>
            <text className="docker-ms-panel-subtitle" x="92" y="186">{label("命名 stage 保持复制关系稳定", "Named stages keep copy relationships stable")}</text>
            {stages.map((stage) => (
              <g key={stage.id} className={`docker-ms-stage-row ${stage.tone} ${stage.active ? "active" : ""}`}>
                <rect x="92" y={stage.y} width="200" height="54" rx="16" />
                <text x="112" y={stage.y + 21}>FROM {stage.from}</text>
                <text x="112" y={stage.y + 40}>AS {stage.name}</text>
                <text x="278" y={stage.y + 32}>{stage.note}</text>
              </g>
            ))}
          </g>

          <g className={`docker-ms-builder ${buildActive ? "active" : ""}`}>
            <rect x="374" y="136" width="260" height="240" rx="26" />
            <text className="docker-ms-panel-title" x="404" y="172">{label("Builder 文件系统", "Builder filesystem")}</text>
            <text className="docker-ms-panel-subtitle" x="404" y="196">{label("工具链、源码和缓存留在前置阶段", "Toolchain, source, and cache stay in earlier stages")}</text>
            {artifacts.map((artifact, index) => (
              <g
                key={artifact.name}
                className={`docker-ms-artifact ${artifact.active ? "active" : ""} ${artifact.muted ? "muted" : ""}`}
              >
                <rect x="404" y={220 + index * 40} width="190" height="30" rx="14" />
                <text x="424" y={240 + index * 40}>{artifact.name}</text>
                <text x="580" y={240 + index * 40}>{artifact.detail}</text>
              </g>
            ))}
          </g>

          <g className={`docker-ms-build-path ${buildActive ? "active" : ""}`}>
            <path d="M 324 238 C 346 238, 352 238, 374 238" markerEnd="url(#docker-ms-arrow-teal)" />
            <rect x="288" y="202" width="134" height="32" rx="16" />
            <text x="355" y="223">{label("执行 build", "run build")}</text>
          </g>

          <g className={`docker-ms-copy-path ${copyActive ? "active" : ""}`}>
            <path d="M 634 254 C 686 254, 710 254, 752 254" markerEnd="url(#docker-ms-arrow-warning)" />
            <path d="M 634 294 C 690 314, 714 336, 752 360" markerEnd="url(#docker-ms-arrow-warning)" />
            <rect x="622" y="186" width="194" height="42" rx="17" />
            <text x="719" y="204">COPY --from=build</text>
            <text x="719" y="221">/out/app /app</text>
          </g>

          <g className={`docker-ms-final ${finalActive ? "active" : ""}`}>
            <rect x="752" y="134" width="288" height="272" rx="28" />
            <text className="docker-ms-panel-title" x="782" y="172">{label("最终运行时镜像", "Final runtime image")}</text>
            <text className="docker-ms-panel-subtitle" x="782" y="196">{label("只保留运行所需层", "Keeps runtime-only layers")}</text>
            {finalLayers.map((layer, index) => (
              <g key={layer.name} className={`docker-ms-final-layer ${layer.tone} ${layer.active ? "active" : ""}`}>
                <rect x="802" y={228 + index * 48} width="184" height="36" rx="14" />
                <text x="822" y={249 + index * 48}>{layer.name}</text>
                <text x="968" y={249 + index * 48}>{layer.size}</text>
              </g>
            ))}
          </g>

          <g className={`docker-ms-size-compare ${finalActive ? "active" : ""}`}>
            <rect x="706" y="432" width="338" height="82" rx="24" />
            <text className="docker-ms-panel-title" x="736" y="464">{label("体积与攻击面", "Size and attack surface")}</text>
            <g className="docker-ms-size-bar builder">
              <rect x="738" y="480" width="212" height="16" rx="8" />
              <text x="968" y="493">builder 1.2GB</text>
            </g>
            <g className="docker-ms-size-bar runtime">
              <rect x="738" y="504" width="54" height="16" rx="8" />
              <text x="810" y="517">runtime 48MB</text>
            </g>
          </g>

          <g className={`docker-ms-buildkit ${buildkitActive ? "active" : ""}`}>
            <rect x="92" y="516" width="570" height="62" rx="24" />
            <text className="docker-ms-panel-title" x="122" y="548">BuildKit DAG / Cache</text>
            {[
              { x: 300, text: "deps cache hit", tone: "brand" },
              { x: 432, text: "--target test", tone: "warning" },
              { x: 562, text: "skip runtime", tone: "danger" },
            ].map((chip) => (
              <g key={chip.text} className={`docker-ms-buildkit-chip ${chip.tone} active`}>
                <rect x={chip.x} y="530" width="108" height="28" rx="14" />
                <text x={chip.x + 54} y="549">{chip.text}</text>
              </g>
            ))}
          </g>

          <g className={`docker-ms-buildkit-path ${buildkitActive ? "active" : ""}`}>
            <path d="M 518 516 C 568 482, 610 430, 752 392" markerEnd="url(#docker-ms-arrow-danger)" />
          </g>
        </svg>
        <div className="docker-multistage-mobile-map">
          <div className="docker-multistage-mobile-flow" aria-hidden="true">
            {mobileFlow.map((item) => (
              <div key={item.name} className={`docker-multistage-mobile-hop ${item.active ? "active" : ""}`}>
                <span>{item.name}</span>
                <strong>{item.value}</strong>
              </div>
            ))}
          </div>
        </div>
        <div className="tcp-handshake-caption docker-multistage-caption">
          <strong>{readLocalizedText(activeStep.title, locale)}</strong>
          <span>{completedSteps}/{simulation.steps.length}</span>
        </div>
      </div>
    </div>
  );
}

function DockerBridgeNetworkStage({
  simulation,
  locale,
  completedSteps,
  activeStepIndex,
}: {
  simulation: VisualSimulation;
  locale: Locale;
  completedSteps: number;
  activeStepIndex: number;
}) {
  const activeStep = simulation.steps[activeStepIndex];
  const label = (zh: string, en: string) => (locale === "zh" ? zh : en);
  const networkActive = completedSteps >= 1;
  const vethActive = completedSteps >= 2;
  const dnsActive = completedSteps >= 3;
  const publishActive = completedSteps >= 4;
  const natActive = completedSteps >= 5;
  const containerRows = [
    { name: "web", ip: "172.18.0.2", port: ":80", active: vethActive || publishActive, tone: "brand" },
    { name: "api", ip: "172.18.0.3", port: ":8080", active: vethActive || dnsActive, tone: "teal" },
  ];
  const ruleRows = [
    { name: "PREROUTING", value: publishActive ? "8080 -> web:80" : "pending", active: publishActive, tone: "warning" },
    { name: "DOCKER-USER", value: publishActive ? "policy checked" : "idle", active: publishActive, tone: "danger" },
    { name: "POSTROUTING", value: natActive ? "MASQUERADE" : "pending", active: natActive, tone: "success" },
  ];
  const signalRows = [
    { name: "netns", value: vethActive ? "web/api isolated" : "--", active: vethActive, tone: "brand" },
    { name: "bridge", value: networkActive ? "br-app 172.18.0.1" : "--", active: networkActive, tone: "teal" },
    { name: "DNS", value: dnsActive ? "api -> 172.18.0.3" : "--", active: dnsActive, tone: "success" },
    { name: "NAT", value: natActive ? "SNAT host eth0" : publishActive ? "DNAT web:80" : "--", active: publishActive || natActive, tone: "warning" },
  ];
  const mobileFlow = [
    { name: "Bridge", value: networkActive ? "app-net / br-app / gateway 172.18.0.1" : "pending", active: networkActive },
    { name: "veth pair", value: vethActive ? "web eth0 <-> vethweb, api eth0 <-> vethapi" : "waiting", active: vethActive },
    { name: "Embedded DNS", value: dnsActive ? "web resolves api to 172.18.0.3" : "waiting", active: dnsActive },
    { name: "Published port", value: publishActive ? "203.0.113.10:8080 -> web:80" : "waiting", active: publishActive },
    { name: "MASQUERADE", value: natActive ? "container egress uses host eth0" : "waiting", active: natActive },
  ];

  return (
    <div className="visual-stage docker-bridge-stage">
      <div className="docker-bridge-card">
        <svg
          className="docker-bridge-diagram"
          viewBox="0 0 1120 640"
          role="img"
          aria-label={readLocalizedText(simulation.title, locale)}
        >
          <defs>
            {[
              ["docker-bridge-arrow-brand", "var(--brand)"],
              ["docker-bridge-arrow-teal", "var(--tertiary)"],
              ["docker-bridge-arrow-success", "var(--success)"],
              ["docker-bridge-arrow-warning", "#f59e0b"],
              ["docker-bridge-arrow-danger", "var(--danger)"],
            ].map(([id, fill]) => (
              <marker
                key={id}
                id={id}
                viewBox="0 0 10 10"
                refX="8.5"
                refY="5"
                markerWidth="8"
                markerHeight="8"
                orient="auto"
              >
                <path d="M 0 0 L 10 5 L 0 10 z" fill={fill} />
              </marker>
            ))}
            <filter id="docker-bridge-soft-shadow" x="-20%" y="-30%" width="140%" height="160%">
              <feDropShadow dx="0" dy="10" stdDeviation="10" floodColor="#172033" floodOpacity="0.13" />
            </filter>
          </defs>

          <rect className="docker-bridge-bg" x="24" y="24" width="1072" height="568" rx="28" />
          <text className="docker-bridge-title" x="560" y="70">
            {readLocalizedText(simulation.title, locale)}
          </text>
          <text className="docker-bridge-subtitle" x="560" y="100">
            {label(
              "netns -> veth pair -> Linux bridge -> DNS / DNAT / MASQUERADE",
              "netns -> veth pair -> Linux bridge -> DNS / DNAT / MASQUERADE",
            )}
          </text>

          <g className={`docker-bridge-client ${publishActive ? "active" : ""}`}>
            <rect x="62" y="188" width="168" height="106" rx="24" />
            <text className="docker-bridge-panel-title" x="88" y="224">{label("外部客户端", "External client")}</text>
            <text x="88" y="250">203.0.113.44</text>
            <text x="88" y="274">GET host:8080</text>
          </g>

          <g className={`docker-bridge-host ${networkActive ? "active" : ""}`}>
            <rect x="292" y="126" width="540" height="412" rx="30" />
            <text className="docker-bridge-panel-title" x="322" y="164">Docker Host</text>
            <text className="docker-bridge-panel-subtitle" x="322" y="188">{label("root network namespace", "root network namespace")}</text>

            <g className={`docker-bridge-bridge ${networkActive ? "active" : ""}`}>
              <rect x="350" y="252" width="424" height="92" rx="24" />
              <text className="docker-bridge-panel-title" x="380" y="288">br-app / docker0</text>
              <text x="380" y="316">gateway 172.18.0.1/16</text>
              <text x="620" y="316">{label("二层转发", "L2 switching")}</text>
            </g>

            <g className={`docker-bridge-firewall ${publishActive || natActive ? "active" : ""}`}>
              <rect x="556" y="374" width="232" height="132" rx="24" />
              <text className="docker-bridge-panel-title" x="584" y="410">Docker NAT / filter</text>
              {ruleRows.map((row, index) => (
                <g key={row.name} className={`docker-bridge-rule-row ${row.tone} ${row.active ? "active" : ""}`}>
                  <rect x="584" y={428 + index * 26} width="176" height="20" rx="10" />
                  <text x="598" y={442 + index * 26}>{row.name}</text>
                  <text x="752" y={442 + index * 26}>{row.value}</text>
                </g>
              ))}
            </g>

            <g className={`docker-bridge-host-iface ${natActive ? "active" : ""}`}>
              <rect x="334" y="394" width="166" height="78" rx="22" />
              <text className="docker-bridge-panel-title" x="360" y="428">eth0</text>
              <text x="360" y="454">203.0.113.10</text>
            </g>
          </g>

          <g className={`docker-bridge-containers ${vethActive ? "active" : ""}`}>
            {containerRows.map((container, index) => {
              const x = 860;
              const y = 166 + index * 178;
              return (
                <g key={container.name} className={`docker-bridge-container ${container.tone} ${container.active ? "active" : ""}`}>
                  <rect x={x} y={y} width="196" height="132" rx="28" />
                  <text className="docker-bridge-panel-title" x={x + 28} y={y + 38}>{container.name} netns</text>
                  <text x={x + 28} y={y + 66}>eth0 {container.ip}</text>
                  <text x={x + 28} y={y + 92}>listen 0.0.0.0{container.port}</text>
                  <text x={x + 28} y={y + 116}>{index === 0 ? "vethweb@if12" : "vethapi@if14"}</text>
                </g>
              );
            })}
          </g>

          <g className={`docker-bridge-veth-path ${vethActive ? "active" : ""}`}>
            <path d="M 774 286 C 812 238, 824 226, 860 226" markerEnd="url(#docker-bridge-arrow-teal)" />
            <path d="M 774 318 C 812 392, 824 404, 860 404" markerEnd="url(#docker-bridge-arrow-teal)" />
            <rect x="748" y="224" width="126" height="28" rx="14" />
            <text x="811" y="243">veth pair</text>
          </g>

          <g className={`docker-bridge-dns-path ${dnsActive ? "active" : ""}`}>
            <path d="M 958 298 C 930 326, 924 344, 958 344" markerEnd="url(#docker-bridge-arrow-success)" />
            <rect x="880" y="306" width="170" height="30" rx="15" />
            <text x="965" y="326">{"api -> 172.18.0.3"}</text>
          </g>

          <g className={`docker-bridge-publish-path ${publishActive ? "active" : ""}`}>
            <path d="M 230 238 C 262 234, 272 218, 292 210" markerEnd="url(#docker-bridge-arrow-warning)" />
            <path d="M 556 430 C 522 374, 706 342, 860 226" markerEnd="url(#docker-bridge-arrow-warning)" />
            <rect x="220" y="180" width="176" height="32" rx="16" />
            <text x="308" y="201">DNAT host:8080</text>
          </g>

          <g className={`docker-bridge-egress-path ${natActive ? "active" : ""}`}>
            <path d="M 860 242 C 782 214, 722 218, 676 252" markerEnd="url(#docker-bridge-arrow-danger)" />
            <path d="M 556 444 C 526 450, 506 446, 500 434" markerEnd="url(#docker-bridge-arrow-danger)" />
            <path d="M 334 432 C 286 430, 250 398, 214 354" markerEnd="url(#docker-bridge-arrow-danger)" />
            <rect x="296" y="340" width="182" height="32" rx="16" />
            <text x="387" y="361">MASQUERADE</text>
          </g>

          <g className="docker-bridge-signals">
            {signalRows.map((signal, index) => (
              <g key={signal.name} className={`docker-bridge-signal ${signal.tone} ${signal.active ? "active" : ""}`}>
                <rect x={64 + index * 258} y="546" width="218" height="34" rx="16" />
                <text x={84 + index * 258} y="560">{signal.name}</text>
                <text x={262 + index * 258} y="572">{signal.value}</text>
              </g>
            ))}
          </g>
        </svg>

        <div className="docker-bridge-mobile-map">
          <div className="docker-bridge-mobile-flow" aria-hidden="true">
            {mobileFlow.map((item) => (
              <div key={item.name} className={`docker-bridge-mobile-hop ${item.active ? "active" : ""}`}>
                <span>{item.name}</span>
                <strong>{item.value}</strong>
              </div>
            ))}
          </div>
          <div className="docker-bridge-mobile-facts">
            {signalRows.map((signal) => (
              <div key={signal.name} className={`docker-bridge-mobile-fact ${signal.active ? "active" : ""}`}>
                <span>{signal.name}</span>
                <strong>{signal.value}</strong>
              </div>
            ))}
          </div>
        </div>
        <div className="tcp-handshake-caption docker-bridge-caption">
          <strong>{readLocalizedText(activeStep.title, locale)}</strong>
          <span>{completedSteps}/{simulation.steps.length}</span>
        </div>
      </div>
    </div>
  );
}

function DockerPortMappingStage({
  simulation,
  locale,
  completedSteps,
  activeStepIndex,
}: {
  simulation: VisualSimulation;
  locale: Locale;
  completedSteps: number;
  activeStepIndex: number;
}) {
  const activeStep = simulation.steps[activeStepIndex];
  const label = (zh: string, en: string) => (locale === "zh" ? zh : en);
  const publishActive = completedSteps >= 1;
  const entryActive = completedSteps >= 2;
  const dnatActive = completedSteps >= 3;
  const listenActive = completedSteps >= 4;
  const debugActive = completedSteps >= 5;
  const ruleRows = [
    { name: "HostConfig.Ports", value: publishActive ? "127.0.0.1:8080" : "pending", active: publishActive, tone: "brand" },
    { name: "DOCKER nat", value: dnatActive ? "DNAT web:80" : "waiting", active: dnatActive, tone: "warning" },
    { name: "DOCKER-USER", value: dnatActive ? "policy pass" : "idle", active: dnatActive, tone: "danger" },
    { name: "conntrack", value: listenActive ? "reply tracked" : "pending", active: listenActive, tone: "success" },
  ];
  const debugRows = [
    { name: "docker ps", value: publishActive ? "127.0.0.1:8080->80/tcp" : "no publish", active: publishActive },
    { name: "docker port", value: publishActive ? "80/tcp -> 127.0.0.1:8080" : "pending", active: publishActive },
    { name: "inspect", value: dnatActive ? "HostPort=8080" : "Ports pending", active: dnatActive },
    { name: "ss -lntp", value: listenActive ? "0.0.0.0:80" : "listener unknown", active: listenActive },
  ];
  const signalRows = [
    { name: "host IP:port", value: entryActive ? "127.0.0.1:8080" : "--", active: entryActive, tone: "teal" },
    { name: "EXPOSE", value: debugActive ? "80/tcp metadata" : "--", active: debugActive, tone: "brand" },
    { name: "DNAT", value: dnatActive ? "172.18.0.2:80" : "--", active: dnatActive, tone: "warning" },
    { name: "listen", value: listenActive ? "0.0.0.0:80" : "--", active: listenActive, tone: "success" },
  ];
  const mobileFlow = [
    { name: "Publish", value: publishActive ? "-p 127.0.0.1:8080:80 recorded" : "pending", active: publishActive },
    { name: "Host entry", value: entryActive ? "loopback client hits host port" : "waiting", active: entryActive },
    { name: "DNAT", value: dnatActive ? "host:8080 -> 172.18.0.2:80" : "waiting", active: dnatActive },
    { name: "Container listen", value: listenActive ? "nginx listens on 0.0.0.0:80" : "waiting", active: listenActive },
    { name: "Debug check", value: debugActive ? "ps / port / inspect / ss aligned" : "waiting", active: debugActive },
  ];

  return (
    <div className="visual-stage docker-port-stage">
      <div className="docker-port-card">
        <svg
          className="docker-port-diagram"
          viewBox="0 0 1120 640"
          role="img"
          aria-label={readLocalizedText(simulation.title, locale)}
        >
          <defs>
            {[
              ["docker-port-arrow-brand", "var(--brand)"],
              ["docker-port-arrow-teal", "var(--tertiary)"],
              ["docker-port-arrow-success", "var(--success)"],
              ["docker-port-arrow-warning", "#f59e0b"],
              ["docker-port-arrow-danger", "var(--danger)"],
            ].map(([id, fill]) => (
              <marker key={id} id={id} viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="8" markerHeight="8" orient="auto">
                <path d="M 0 0 L 10 5 L 0 10 z" fill={fill} />
              </marker>
            ))}
            <filter id="docker-port-soft-shadow" x="-20%" y="-30%" width="140%" height="160%">
              <feDropShadow dx="0" dy="10" stdDeviation="10" floodColor="#172033" floodOpacity="0.13" />
            </filter>
          </defs>

          <rect className="docker-port-bg" x="24" y="24" width="1072" height="568" rx="28" />
          <text className="docker-port-title" x="560" y="70">
            {readLocalizedText(simulation.title, locale)}
          </text>
          <text className="docker-port-subtitle" x="560" y="100">
            {label(
              "client -> host bind -> Docker NAT/proxy -> container IP:port -> app listener",
              "client -> host bind -> Docker NAT/proxy -> container IP:port -> app listener",
            )}
          </text>

          <g className={`docker-port-client ${entryActive ? "active" : ""}`}>
            <rect x="58" y="190" width="174" height="120" rx="24" />
            <text className="docker-port-panel-title" x="86" y="228">{label("外部客户端", "External client")}</text>
            <text x="86" y="254">curl 127.0.0.1:8080</text>
            <text x="86" y="280">{entryActive ? "SYN -> host port" : "waiting"}</text>
          </g>

          <g className={`docker-port-host ${publishActive ? "active" : ""}`}>
            <rect x="292" y="134" width="274" height="230" rx="28" />
            <text className="docker-port-panel-title" x="324" y="174">Docker Host</text>
            <text className="docker-port-panel-subtitle" x="324" y="198">{label("root network namespace", "root network namespace")}</text>
            <g className={`docker-port-publish-row brand ${publishActive ? "active" : ""}`}>
              <rect x="324" y="226" width="210" height="30" rx="15" />
              <text x="342" y="246">-p 127.0.0.1:8080:80</text>
            </g>
            <g className={`docker-port-bind ${entryActive ? "active" : ""}`}>
              <rect x="324" y="282" width="210" height="46" rx="16" />
              <text x="342" y="302">host bind</text>
              <text x="342" y="322">127.0.0.1:8080/tcp</text>
            </g>
          </g>

          <g className={`docker-port-rules ${dnatActive ? "active" : ""}`}>
            <rect x="626" y="134" width="286" height="230" rx="28" />
            <text className="docker-port-panel-title" x="658" y="174">Docker NAT / proxy</text>
            <text className="docker-port-panel-subtitle" x="658" y="198">iptables/nftables + conntrack</text>
            {ruleRows.map((row, index) => (
              <g key={row.name} className={`docker-port-rule-row ${row.tone} ${row.active ? "active" : ""}`}>
                <rect x="658" y={222 + index * 32} width="214" height="24" rx="12" />
                <text x="674" y={238 + index * 32}>{row.name}</text>
                <text x="860" y={238 + index * 32}>{row.value}</text>
              </g>
            ))}
          </g>

          <g className={`docker-port-container ${listenActive ? "active" : ""}`}>
            <rect x="806" y="404" width="248" height="116" rx="26" />
            <text className="docker-port-panel-title" x="836" y="442">web container netns</text>
            <text x="836" y="468">eth0 172.18.0.2</text>
            <text x="836" y="494">{listenActive ? "nginx listen 0.0.0.0:80" : "listener pending"}</text>
          </g>

          <g className={`docker-port-debug ${debugActive ? "active" : ""}`}>
            <rect x="292" y="404" width="450" height="116" rx="26" />
            <text className="docker-port-panel-title" x="324" y="442">{label("排障对照表", "Debug checklist")}</text>
            {debugRows.map((row, index) => (
              <g key={row.name} className={`docker-port-debug-row ${row.active ? "active" : ""}`}>
                <rect x={324 + (index % 2) * 210} y={458 + Math.floor(index / 2) * 30} width="180" height="22" rx="11" />
                <text x={338 + (index % 2) * 210} y={473 + Math.floor(index / 2) * 30}>{row.name}</text>
                <text x={496 + (index % 2) * 210} y={473 + Math.floor(index / 2) * 30}>{row.value}</text>
              </g>
            ))}
          </g>

          <g className={`docker-port-publish-path ${publishActive ? "active" : ""}`}>
            <path d="M 430 364 C 498 392, 570 388, 674 364" markerEnd="url(#docker-port-arrow-brand)" />
            <rect x="458" y="368" width="176" height="32" rx="16" />
            <text x="546" y="389">publish config</text>
          </g>
          <g className={`docker-port-entry-path ${entryActive ? "active" : ""}`}>
            <path d="M 232 250 C 254 244, 270 232, 292 226" markerEnd="url(#docker-port-arrow-teal)" />
            <rect x="196" y="204" width="160" height="32" rx="16" />
            <text x="276" y="225">host IP:port</text>
          </g>
          <g className={`docker-port-dnat-path ${dnatActive ? "active" : ""}`}>
            <path d="M 566 256 C 596 252, 606 250, 626 250" markerEnd="url(#docker-port-arrow-warning)" />
            <path d="M 790 364 C 830 380, 858 390, 894 404" markerEnd="url(#docker-port-arrow-warning)" />
            <rect x="720" y="372" width="190" height="32" rx="16" />
            <text x="815" y="393">DNAT 172.18.0.2:80</text>
          </g>
          <g className={`docker-port-listen-path ${listenActive ? "active" : ""}`}>
            <path d="M 928 404 C 922 372, 902 360, 872 342" markerEnd="url(#docker-port-arrow-success)" />
            <rect x="910" y="348" width="126" height="30" rx="15" />
            <text x="973" y="368">app replies</text>
          </g>
          <g className={`docker-port-debug-path ${debugActive ? "active" : ""}`}>
            <path d="M 812 520 C 680 576, 510 570, 416 520" markerEnd="url(#docker-port-arrow-danger)" />
            <rect x="526" y="540" width="170" height="32" rx="16" />
            <text x="611" y="561">verify all signals</text>
          </g>

          <g className="docker-port-signals">
            {signalRows.map((signal, index) => (
              <g key={signal.name} className={`docker-port-signal ${signal.tone} ${signal.active ? "active" : ""}`}>
                <rect x={62 + index * 258} y="546" width="218" height="34" rx="16" />
                <text x={84 + index * 258} y="560">{signal.name}</text>
                <text x={262 + index * 258} y="572">{signal.value}</text>
              </g>
            ))}
          </g>
        </svg>
        <div className="docker-port-mobile-map">
          <div className="docker-port-mobile-flow" aria-hidden="true">
            {mobileFlow.map((item) => (
              <div key={item.name} className={`docker-port-mobile-hop ${item.active ? "active" : ""}`}>
                <span>{item.name}</span>
                <strong>{item.value}</strong>
              </div>
            ))}
          </div>
          <div className="docker-port-mobile-facts">
            {signalRows.map((signal) => (
              <div key={signal.name} className={`docker-port-mobile-fact ${signal.active ? "active" : ""}`}>
                <span>{signal.name}</span>
                <strong>{signal.value}</strong>
              </div>
            ))}
          </div>
        </div>
        <div className="tcp-handshake-caption docker-port-caption">
          <strong>{readLocalizedText(activeStep.title, locale)}</strong>
          <span>{completedSteps}/{simulation.steps.length}</span>
        </div>
      </div>
    </div>
  );
}

function DockerResourceLimitStage({
  simulation,
  locale,
  completedSteps,
  activeStepIndex,
}: {
  simulation: VisualSimulation;
  locale: Locale;
  completedSteps: number;
  activeStepIndex: number;
}) {
  const activeStep = simulation.steps[activeStepIndex];
  const label = (zh: string, en: string) => (locale === "zh" ? zh : en);
  const flagsActive = completedSteps >= 1;
  const cgroupActive = completedSteps >= 2;
  const cpuActive = completedSteps >= 3;
  const memoryActive = completedSteps >= 4;
  const statsActive = completedSteps >= 5;
  const controlRows = [
    { name: "memory.max", value: statsActive ? "805306368" : cgroupActive ? "536870912" : "max", active: cgroupActive, tone: memoryActive ? "danger" : "brand" },
    { name: "cpu.max", value: cgroupActive ? "150000 100000" : "max 100000", active: cgroupActive, tone: cpuActive ? "warning" : "teal" },
    { name: "pids.max", value: cgroupActive ? "100" : "max", active: cgroupActive, tone: "success" },
    { name: "memory.events", value: memoryActive ? "oom_kill 1" : "oom_kill 0", active: memoryActive, tone: "danger" },
  ];
  const workloadRows = [
    { name: "worker threads", value: cpuActive ? "CPU demand 220%" : "idle", active: cpuActive, tone: "warning" },
    { name: "rss + cache", value: memoryActive ? "531MiB / 512MiB" : "128MiB / 512MiB", active: flagsActive, tone: memoryActive ? "danger" : "brand" },
    { name: "process count", value: cgroupActive ? "42 / 100" : "pending", active: cgroupActive, tone: "success" },
  ];
  const signalRows = [
    { name: "memory.max", value: statsActive ? "768MiB" : cgroupActive ? "512MiB" : "--", active: cgroupActive, tone: memoryActive ? "danger" : "brand" },
    { name: "cpu.max", value: cpuActive ? "1.5 CPU" : cgroupActive ? "quota set" : "--", active: cgroupActive, tone: "warning" },
    { name: "oom_kill", value: memoryActive ? "1 event" : "0", active: memoryActive, tone: "danger" },
    { name: "docker stats", value: statsActive ? "CPU 142% MEM 69%" : cpuActive ? "CPU 150% MEM 99%" : "--", active: cpuActive || statsActive, tone: statsActive ? "success" : "teal" },
  ];
  const mobileFlow = [
    { name: "HostConfig", value: flagsActive ? "--memory 512m / --cpus 1.5 / --pids-limit 100" : "pending flags", active: flagsActive },
    { name: "cgroup v2", value: cgroupActive ? "memory.max, cpu.max, pids.max written" : "waiting runtime", active: cgroupActive },
    { name: "CPU quota", value: cpuActive ? "CFS period exhausted, throttled periods rise" : "waiting workload", active: cpuActive },
    { name: "Memory limit", value: memoryActive ? "oom_kill=1, container exits 137" : "headroom available", active: memoryActive },
    { name: "Observe/update", value: statsActive ? "stats + events + inspect, update to 768MiB" : "pending review", active: statsActive },
  ];

  return (
    <div className="visual-stage docker-resource-stage">
      <div className="docker-resource-card">
        <svg
          className="docker-resource-diagram"
          viewBox="0 0 1120 640"
          role="img"
          aria-label={readLocalizedText(simulation.title, locale)}
        >
          <defs>
            {[
              ["docker-resource-arrow-brand", "var(--brand)"],
              ["docker-resource-arrow-teal", "var(--tertiary)"],
              ["docker-resource-arrow-success", "var(--success)"],
              ["docker-resource-arrow-warning", "#f59e0b"],
              ["docker-resource-arrow-danger", "var(--danger)"],
            ].map(([id, fill]) => (
              <marker key={id} id={id} viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="8" markerHeight="8" orient="auto">
                <path d="M 0 0 L 10 5 L 0 10 z" fill={fill} />
              </marker>
            ))}
            <filter id="docker-resource-soft-shadow" x="-20%" y="-30%" width="140%" height="160%">
              <feDropShadow dx="0" dy="10" stdDeviation="10" floodColor="#172033" floodOpacity="0.13" />
            </filter>
          </defs>

          <rect className="docker-resource-bg" x="24" y="24" width="1072" height="584" rx="28" />
          <text className="docker-resource-title" x="560" y="70">
            {readLocalizedText(simulation.title, locale)}
          </text>
          <text className="docker-resource-subtitle" x="560" y="100">
            {label(
              "docker flags -> HostConfig -> cgroup files -> scheduler / OOM -> stats / update",
              "docker flags -> HostConfig -> cgroup files -> scheduler / OOM -> stats / update",
            )}
          </text>

          <g className={`docker-resource-cli ${flagsActive ? "active" : ""}`}>
            <rect x="58" y="142" width="238" height="194" rx="24" />
            <text className="docker-resource-panel-title" x="88" y="180">docker run</text>
            <text className="docker-resource-panel-subtitle" x="88" y="204">HostConfig</text>
            {[
              "--memory 512m",
              "--cpus 1.5",
              "--pids-limit 100",
            ].map((flag, index) => (
              <g key={flag} className={`docker-resource-flag-row ${flagsActive ? "active" : ""}`}>
                <rect x="88" y={228 + index * 34} width="174" height="24" rx="12" />
                <text x="104" y={244 + index * 34}>{flag}</text>
              </g>
            ))}
          </g>

          <g className={`docker-resource-daemon ${flagsActive ? "active" : ""}`}>
            <rect x="356" y="142" width="210" height="134" rx="24" />
            <text className="docker-resource-panel-title" x="386" y="180">Docker daemon</text>
            <text x="386" y="214">{flagsActive ? "create container" : "idle"}</text>
            <text x="386" y="244">{cgroupActive ? "runtime writes files" : "await limits"}</text>
          </g>

          <g className={`docker-resource-cgroup ${cgroupActive ? "active" : ""}`}>
            <rect x="632" y="126" width="332" height="254" rx="28" />
            <text className="docker-resource-panel-title" x="662" y="164">cgroup v2</text>
            <text className="docker-resource-panel-subtitle" x="662" y="188">/sys/fs/cgroup/docker/&lt;id&gt;</text>
            {controlRows.map((row, index) => (
              <g key={row.name} className={`docker-resource-control-row ${row.tone} ${row.active ? "active" : ""}`}>
                <rect x="662" y={216 + index * 38} width="266" height="28" rx="14" />
                <text x="680" y={235 + index * 38}>{row.name}</text>
                <text x="910" y={235 + index * 38}>{row.value}</text>
              </g>
            ))}
          </g>

          <g className={`docker-resource-container ${flagsActive ? "active" : ""}`}>
            <rect x="76" y="396" width="310" height="152" rx="26" />
            <text className="docker-resource-panel-title" x="106" y="434">{label("应用容器", "App container")}</text>
            <text className="docker-resource-panel-subtitle" x="106" y="458">PID 1 + workers</text>
            {workloadRows.map((row, index) => (
              <g key={row.name} className={`docker-resource-workload-row ${row.tone} ${row.active ? "active" : ""}`}>
                <rect x="106" y={478 + index * 30} width="236" height="22" rx="11" />
                <text x="122" y={493 + index * 30}>{row.name}</text>
                <text x="330" y={493 + index * 30}>{row.value}</text>
              </g>
            ))}
          </g>

          <g className={`docker-resource-kernel ${cpuActive || memoryActive ? "active" : ""}`}>
            <rect x="454" y="412" width="252" height="136" rx="26" />
            <text className="docker-resource-panel-title" x="484" y="450">{label("内核调度 / OOM", "Kernel scheduling / OOM")}</text>
            <g className={`docker-resource-kernel-chip warning ${cpuActive ? "active" : ""}`}>
              <rect x="486" y="474" width="174" height="26" rx="13" />
              <text x="573" y="492">{cpuActive ? "CFS throttled" : "quota waiting"}</text>
            </g>
            <g className={`docker-resource-kernel-chip danger ${memoryActive ? "active" : ""}`}>
              <rect x="486" y="510" width="174" height="26" rx="13" />
              <text x="573" y="528">{memoryActive ? "OOMKilled exit 137" : "reclaim ready"}</text>
            </g>
          </g>

          <g className={`docker-resource-stats ${statsActive || cpuActive || memoryActive ? "active" : ""}`}>
            <rect x="766" y="424" width="282" height="124" rx="26" />
            <text className="docker-resource-panel-title" x="796" y="462">docker stats</text>
            <text x="796" y="492">{statsActive ? "CPU 142%   MEM 530MiB / 768MiB" : cpuActive ? "CPU 150%   MEM 508MiB / 512MiB" : "metrics pending"}</text>
            <text x="796" y="520">{memoryActive ? "events: oom_kill=1, die exitCode=137" : statsActive ? "inspect HostConfig aligned" : "events pending"}</text>
          </g>

          <g className={`docker-resource-flags-path ${flagsActive ? "active" : ""}`}>
            <path d="M 296 220 C 322 214, 334 206, 356 204" markerEnd="url(#docker-resource-arrow-brand)" />
            <rect x="278" y="172" width="136" height="30" rx="15" />
            <text x="346" y="192">HostConfig</text>
          </g>
          <g className={`docker-resource-cgroup-path ${cgroupActive ? "active" : ""}`}>
            <path d="M 566 210 C 600 204, 610 202, 632 202" markerEnd="url(#docker-resource-arrow-teal)" />
            <rect x="540" y="166" width="144" height="30" rx="15" />
            <text x="612" y="186">write files</text>
          </g>
          <g className={`docker-resource-cpu-path ${cpuActive ? "active" : ""}`}>
            <path d="M 386 478 C 430 464, 438 458, 454 456" markerEnd="url(#docker-resource-arrow-warning)" />
            <path d="M 632 286 C 566 324, 548 380, 568 412" markerEnd="url(#docker-resource-arrow-warning)" />
            <rect x="430" y="330" width="158" height="30" rx="15" />
            <text x="509" y="350">quota throttle</text>
          </g>
          <g className={`docker-resource-memory-path ${memoryActive ? "active" : ""}`}>
            <path d="M 386 520 C 432 530, 438 528, 454 522" markerEnd="url(#docker-resource-arrow-danger)" />
            <path d="M 786 380 C 752 420, 720 456, 706 494" markerEnd="url(#docker-resource-arrow-danger)" />
            <rect x="608" y="386" width="154" height="30" rx="15" />
            <text x="685" y="406">memory.max</text>
          </g>
          <g className={`docker-resource-stats-path ${statsActive ? "active" : ""}`}>
            <path d="M 706 490 C 736 486, 746 484, 766 484" markerEnd="url(#docker-resource-arrow-success)" />
            <path d="M 836 424 C 790 394, 834 372, 878 380" markerEnd="url(#docker-resource-arrow-success)" />
            <path d="M 766 512 C 590 606, 210 608, 162 548" markerEnd="url(#docker-resource-arrow-success)" />
            <rect x="538" y="568" width="178" height="30" rx="15" />
            <text x="627" y="588">docker update</text>
          </g>

          <g className="docker-resource-signals">
            {signalRows.map((signal, index) => (
              <g key={signal.name} className={`docker-resource-signal ${signal.tone} ${signal.active ? "active" : ""}`}>
                <rect x={62 + index * 264} y="566" width="224" height="34" rx="16" />
                <text x={82 + index * 264} y="580">{signal.name}</text>
                <text x={264 + index * 264} y="594">{signal.value}</text>
              </g>
            ))}
          </g>
        </svg>
        <div className="docker-resource-mobile-map">
          <div className="docker-resource-mobile-flow" aria-hidden="true">
            {mobileFlow.map((item) => (
              <div key={item.name} className={`docker-resource-mobile-hop ${item.active ? "active" : ""}`}>
                <span>{item.name}</span>
                <strong>{item.value}</strong>
              </div>
            ))}
          </div>
          <div className="docker-resource-mobile-facts">
            {signalRows.map((signal) => (
              <div key={signal.name} className={`docker-resource-mobile-fact ${signal.active ? "active" : ""}`}>
                <span>{signal.name}</span>
                <strong>{signal.value}</strong>
              </div>
            ))}
          </div>
        </div>
        <div className="tcp-handshake-caption docker-resource-caption">
          <strong>{readLocalizedText(activeStep.title, locale)}</strong>
          <span>{completedSteps}/{simulation.steps.length}</span>
        </div>
      </div>
    </div>
  );
}

function DockerCpuLimitStage({
  simulation,
  locale,
  completedSteps,
  activeStepIndex,
}: {
  simulation: VisualSimulation;
  locale: Locale;
  completedSteps: number;
  activeStepIndex: number;
}) {
  const activeStep = simulation.steps[activeStepIndex];
  const label = (zh: string, en: string) => (locale === "zh" ? zh : en);
  const flagsActive = completedSteps >= 1;
  const cgroupActive = completedSteps >= 2;
  const throttleActive = completedSteps >= 3;
  const sharesActive = completedSteps >= 4;
  const tuneActive = completedSteps >= 5;
  const flagRows = [
    "--cpus 1.5",
    "--cpu-quota 150000",
    "--cpu-period 100000",
    "--cpu-shares 512",
    "--cpuset-cpus 0-1",
  ];
  const controlRows = [
    { name: "cpu.max", value: tuneActive ? "200000 100000" : cgroupActive ? "150000 100000" : "max 100000", active: cgroupActive, tone: "brand" },
    { name: "cpu.weight", value: sharesActive ? "50" : cgroupActive ? "50" : "100", active: cgroupActive, tone: sharesActive ? "danger" : "teal" },
    { name: "cpuset.cpus", value: cgroupActive ? "0-1" : "all", active: cgroupActive, tone: "success" },
    { name: "cpu.stat", value: tuneActive ? "throttled_usec 420000" : throttleActive ? "nr_throttled 7" : "0", active: throttleActive || tuneActive, tone: "warning" },
  ];
  const timeSlices = [
    { name: "0-40ms", value: "run", width: 116, active: cgroupActive, tone: "brand" },
    { name: "40-75ms", value: "quota burn", width: 128, active: throttleActive, tone: "warning" },
    { name: "75-100ms", value: "throttle", width: 98, active: throttleActive, tone: "danger" },
    { name: "next period", value: tuneActive ? "refill 200ms" : "refill", width: 132, active: tuneActive || throttleActive, tone: "success" },
  ];
  const workerRows = [
    { name: "api worker #1", value: throttleActive ? "runnable" : "idle", active: throttleActive, tone: "brand" },
    { name: "api worker #2", value: throttleActive ? "runnable" : "idle", active: throttleActive, tone: "teal" },
    { name: "api worker #3", value: throttleActive ? "waiting quota" : "idle", active: throttleActive, tone: "warning" },
    { name: "batch worker", value: sharesActive ? "weight 512" : "idle", active: sharesActive, tone: "danger" },
  ];
  const schedulerRows = [
    { name: "runqueue", value: throttleActive ? "4 runnable" : "empty", active: throttleActive, tone: "warning" },
    { name: "throttled list", value: throttleActive ? "api cgroup" : "empty", active: throttleActive, tone: "danger" },
    { name: "shares split", value: sharesActive ? "web:batch ~= 2:1" : "pending", active: sharesActive, tone: "brand" },
    { name: "period refill", value: tuneActive ? "2 CPU budget" : "1.5 CPU budget", active: tuneActive || cgroupActive, tone: "success" },
  ];
  const signalRows = [
    { name: "cpu.max", value: tuneActive ? "2.0 CPU" : cgroupActive ? "1.5 CPU" : "--", active: cgroupActive, tone: "brand" },
    { name: "CFS period/quota", value: cgroupActive ? "100ms / 150ms" : "--", active: cgroupActive, tone: "teal" },
    { name: "cpu.shares", value: sharesActive ? "512 vs 1024" : "--", active: sharesActive, tone: "danger" },
    { name: "throttled_usec", value: tuneActive ? "420ms" : throttleActive ? "rising" : "--", active: throttleActive || tuneActive, tone: tuneActive ? "success" : "warning" },
  ];
  const mobileFlow = [
    { name: "Docker flags", value: flagsActive ? "--cpus 1.5, shares 512, cpuset 0-1" : "pending", active: flagsActive },
    { name: "cgroup CPU", value: cgroupActive ? "cpu.max=150000 100000" : "waiting runtime", active: cgroupActive },
    { name: "CFS period", value: throttleActive ? "quota exhausted inside 100ms" : "waiting load", active: throttleActive },
    { name: "Shares", value: sharesActive ? "relative weight under contention" : "waiting contention", active: sharesActive },
    { name: "Tune", value: tuneActive ? "cpu.stat + latency -> --cpus 2.0" : "awaiting metrics", active: tuneActive },
  ];

  return (
    <div className="visual-stage docker-cpu-stage">
      <div className="docker-cpu-card">
        <svg
          className="docker-cpu-diagram"
          viewBox="0 0 1120 640"
          role="img"
          aria-label={readLocalizedText(simulation.title, locale)}
        >
          <defs>
            {[
              ["docker-cpu-arrow-brand", "var(--brand)"],
              ["docker-cpu-arrow-teal", "var(--tertiary)"],
              ["docker-cpu-arrow-success", "var(--success)"],
              ["docker-cpu-arrow-warning", "#f59e0b"],
              ["docker-cpu-arrow-danger", "var(--danger)"],
            ].map(([id, fill]) => (
              <marker key={id} id={id} viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="8" markerHeight="8" orient="auto">
                <path d="M 0 0 L 10 5 L 0 10 z" fill={fill} />
              </marker>
            ))}
            <filter id="docker-cpu-soft-shadow" x="-20%" y="-30%" width="140%" height="160%">
              <feDropShadow dx="0" dy="10" stdDeviation="10" floodColor="#172033" floodOpacity="0.13" />
            </filter>
          </defs>

          <rect className="docker-cpu-bg" x="24" y="24" width="1072" height="584" rx="28" />
          <text className="docker-cpu-title" x="560" y="70">
            {readLocalizedText(simulation.title, locale)}
          </text>
          <text className="docker-cpu-subtitle" x="560" y="100">
            {label(
              "Docker CPU flags -> cgroup cpu controller -> CFS period/quota -> throttling -> stats driven tuning",
              "Docker CPU flags -> cgroup CPU controller -> CFS period/quota -> throttling -> stats-driven tuning",
            )}
          </text>

          <g className={`docker-cpu-flags ${flagsActive ? "active" : ""}`}>
            <rect x="58" y="136" width="244" height="224" rx="24" />
            <text className="docker-cpu-panel-title" x="88" y="174">docker run</text>
            <text className="docker-cpu-panel-subtitle" x="88" y="198">HostConfig CPU fields</text>
            {flagRows.map((flag, index) => (
              <g key={flag} className={`docker-cpu-flag-row ${flagsActive ? "active" : ""}`}>
                <rect x="88" y={220 + index * 30} width="178" height="22" rx="11" />
                <text x="104" y={235 + index * 30}>{flag}</text>
              </g>
            ))}
          </g>

          <g className={`docker-cpu-cgroup ${cgroupActive ? "active" : ""}`}>
            <rect x="358" y="128" width="286" height="232" rx="26" />
            <text className="docker-cpu-panel-title" x="388" y="166">cgroup CPU controller</text>
            <text className="docker-cpu-panel-subtitle" x="388" y="190">/sys/fs/cgroup/docker/&lt;id&gt;</text>
            {controlRows.map((row, index) => (
              <g key={row.name} className={`docker-cpu-control-row ${row.tone} ${row.active ? "active" : ""}`}>
                <rect x="388" y={216 + index * 34} width="218" height="25" rx="13" />
                <text x="404" y={233 + index * 34}>{row.name}</text>
                <text x="592" y={233 + index * 34}>{row.value}</text>
              </g>
            ))}
          </g>

          <g className={`docker-cpu-timeline ${cgroupActive ? "active" : ""}`}>
            <rect x="694" y="128" width="354" height="232" rx="26" />
            <text className="docker-cpu-panel-title" x="724" y="166">CFS bandwidth period</text>
            <text className="docker-cpu-panel-subtitle" x="724" y="190">period=100ms · quota=150ms CPU time</text>
            <line className="docker-cpu-axis" x1="730" y1="248" x2="1010" y2="248" />
            {timeSlices.map((slice, index) => (
              <g key={slice.name} className={`docker-cpu-time-slice ${slice.tone} ${slice.active ? "active" : ""}`}>
                <rect x={730 + index * 68} y="218" width={slice.width} height="42" rx="16" />
                <text x={730 + index * 68 + slice.width / 2} y="238">{slice.name}</text>
                <text x={730 + index * 68 + slice.width / 2} y="254">{slice.value}</text>
              </g>
            ))}
            <g className={`docker-cpu-throttle-badge danger ${throttleActive ? "active" : ""}`}>
              <rect x="766" y="288" width="220" height="32" rx="16" />
              <text x="876" y="309">{throttleActive ? "cgroup throttled until refill" : "budget available"}</text>
            </g>
          </g>

          <g className={`docker-cpu-workers ${throttleActive ? "active" : ""}`}>
            <rect x="74" y="406" width="278" height="142" rx="24" />
            <text className="docker-cpu-panel-title" x="104" y="444">{label("容器工作线程", "Container workers")}</text>
            {workerRows.map((row, index) => (
              <g key={row.name} className={`docker-cpu-worker-row ${row.tone} ${row.active ? "active" : ""}`}>
                <rect x="104" y={466 + index * 24} width="208" height="19" rx="10" />
                <text x="118" y={479 + index * 24}>{row.name}</text>
                <text x="300" y={479 + index * 24}>{row.value}</text>
              </g>
            ))}
          </g>

          <g className={`docker-cpu-scheduler ${throttleActive || sharesActive ? "active" : ""}`}>
            <rect x="414" y="396" width="292" height="154" rx="24" />
            <text className="docker-cpu-panel-title" x="444" y="434">Linux CFS scheduler</text>
            {schedulerRows.map((row, index) => (
              <g key={row.name} className={`docker-cpu-scheduler-row ${row.tone} ${row.active ? "active" : ""}`}>
                <rect x="444" y={456 + index * 28} width="220" height="21" rx="11" />
                <text x="458" y={470 + index * 28}>{row.name}</text>
                <text x="650" y={470 + index * 28}>{row.value}</text>
              </g>
            ))}
          </g>

          <g className={`docker-cpu-observe ${tuneActive || throttleActive ? "active" : ""}`}>
            <rect x="764" y="402" width="284" height="148" rx="24" />
            <text className="docker-cpu-panel-title" x="794" y="440">{label("观测与调参", "Observe and tune")}</text>
            <text x="794" y="470">{throttleActive ? "docker stats CPU 148%" : "metrics pending"}</text>
            <text x="794" y="498">{tuneActive ? "cpu.stat throttled_usec=420ms" : throttleActive ? "nr_throttled rising" : "cpu.stat waiting"}</text>
            <g className={`docker-cpu-update-chip success ${tuneActive ? "active" : ""}`}>
              <rect x="794" y="516" width="206" height="28" rx="14" />
              <text x="897" y="535">docker update --cpus 2.0</text>
            </g>
          </g>

          <g className={`docker-cpu-flags-path ${flagsActive ? "active" : ""}`}>
            <path d="M 302 238 C 328 232, 340 228, 358 226" markerEnd="url(#docker-cpu-arrow-brand)" />
            <rect x="284" y="184" width="132" height="30" rx="15" />
            <text x="350" y="204">HostConfig</text>
          </g>
          <g className={`docker-cpu-cgroup-path ${cgroupActive ? "active" : ""}`}>
            <path d="M 644 236 C 668 228, 680 224, 694 222" markerEnd="url(#docker-cpu-arrow-teal)" />
            <rect x="616" y="184" width="144" height="30" rx="15" />
            <text x="688" y="204">write cpu.max</text>
          </g>
          <g className={`docker-cpu-throttle-path ${throttleActive ? "active" : ""}`}>
            <path d="M 352 478 C 386 468, 396 462, 414 458" markerEnd="url(#docker-cpu-arrow-warning)" />
            <path d="M 824 360 C 762 384, 700 408, 652 456" markerEnd="url(#docker-cpu-arrow-warning)" />
            <rect x="514" y="364" width="158" height="30" rx="15" />
            <text x="593" y="384">quota exhausted</text>
          </g>
          <g className={`docker-cpu-shares-path ${sharesActive ? "active" : ""}`}>
            <path d="M 560 550 C 512 600, 250 602, 210 548" markerEnd="url(#docker-cpu-arrow-danger)" />
            <rect x="232" y="574" width="168" height="30" rx="15" />
            <text x="316" y="594">shares under load</text>
          </g>
          <g className={`docker-cpu-observe-path ${tuneActive ? "active" : ""}`}>
            <path d="M 706 486 C 734 480, 748 478, 764 476" markerEnd="url(#docker-cpu-arrow-success)" />
            <path d="M 848 402 C 808 370, 848 348, 924 360" markerEnd="url(#docker-cpu-arrow-success)" />
            <path d="M 794 550 C 638 610, 212 606, 168 548" markerEnd="url(#docker-cpu-arrow-success)" />
            <rect x="556" y="574" width="172" height="30" rx="15" />
            <text x="642" y="594">tune budget</text>
          </g>

          <g className="docker-cpu-signals">
            {signalRows.map((signal, index) => (
              <g key={signal.name} className={`docker-cpu-signal ${signal.tone} ${signal.active ? "active" : ""}`}>
                <rect x={62 + index * 264} y="566" width="224" height="34" rx="16" />
                <text x={82 + index * 264} y="580">{signal.name}</text>
                <text x={264 + index * 264} y="594">{signal.value}</text>
              </g>
            ))}
          </g>
        </svg>
        <div className="docker-cpu-mobile-map">
          <div className="docker-cpu-mobile-flow" aria-hidden="true">
            {mobileFlow.map((item) => (
              <div key={item.name} className={`docker-cpu-mobile-hop ${item.active ? "active" : ""}`}>
                <span>{item.name}</span>
                <strong>{item.value}</strong>
              </div>
            ))}
          </div>
          <div className="docker-cpu-mobile-facts">
            {signalRows.map((signal) => (
              <div key={signal.name} className={`docker-cpu-mobile-fact ${signal.active ? "active" : ""}`}>
                <span>{signal.name}</span>
                <strong>{signal.value}</strong>
              </div>
            ))}
          </div>
        </div>
        <div className="tcp-handshake-caption docker-cpu-caption">
          <strong>{readLocalizedText(activeStep.title, locale)}</strong>
          <span>{completedSteps}/{simulation.steps.length}</span>
        </div>
      </div>
    </div>
  );
}

function DockerPidsLimitStage({
  simulation,
  locale,
  completedSteps,
  activeStepIndex,
}: {
  simulation: VisualSimulation;
  locale: Locale;
  completedSteps: number;
  activeStepIndex: number;
}) {
  const activeStep = simulation.steps[activeStepIndex];
  const label = (zh: string, en: string) => (locale === "zh" ? zh : en);
  const flagsActive = completedSteps >= 1;
  const cgroupActive = completedSteps >= 2;
  const growthActive = completedSteps >= 3;
  const rejectActive = completedSteps >= 4;
  const tuneActive = completedSteps >= 5;
  const controlRows = [
    { name: "pids.max", value: tuneActive ? "96" : cgroupActive ? "64" : "max", active: cgroupActive || tuneActive, tone: tuneActive ? "success" : "brand" },
    { name: "pids.current", value: rejectActive ? "64" : growthActive ? "63" : cgroupActive ? "17" : "0", active: cgroupActive || growthActive || rejectActive, tone: rejectActive ? "danger" : growthActive ? "warning" : "teal" },
    { name: "pids.events", value: tuneActive ? "max 0" : rejectActive ? "max 4" : "max 0", active: rejectActive || tuneActive, tone: rejectActive ? "danger" : "success" },
    { name: "HostConfig", value: flagsActive ? "PidsLimit=64" : "pending", active: flagsActive, tone: "brand" },
  ];
  const taskRows = [
    { name: "PID 1", value: flagsActive ? "app server" : "idle", active: flagsActive, tone: "brand" },
    { name: "worker threads", value: growthActive ? "48 active" : cgroupActive ? "8 active" : "idle", active: cgroupActive || growthActive, tone: growthActive ? "warning" : "teal" },
    { name: "child processes", value: rejectActive ? "spawn failed" : growthActive ? "14 active" : "2 active", active: cgroupActive || growthActive || rejectActive, tone: rejectActive ? "danger" : "teal" },
    { name: "health probe", value: rejectActive ? "thread create failed" : "ok", active: flagsActive || rejectActive, tone: rejectActive ? "danger" : "success" },
  ];
  const kernelRows = [
    { name: "fork()", value: rejectActive ? "EAGAIN" : growthActive ? "allowed" : "waiting", active: growthActive || rejectActive, tone: rejectActive ? "danger" : "teal" },
    { name: "clone()", value: rejectActive ? "cap reached" : growthActive ? "task +1" : "waiting", active: growthActive || rejectActive, tone: rejectActive ? "danger" : "warning" },
    { name: "task accounting", value: tuneActive ? "headroom restored" : rejectActive ? "64 / 64" : growthActive ? "63 / 64" : "17 / 64", active: cgroupActive || growthActive || rejectActive || tuneActive, tone: tuneActive ? "success" : rejectActive ? "danger" : growthActive ? "warning" : "brand" },
  ];
  const signalRows = [
    { name: "pids.max", value: tuneActive ? "96" : cgroupActive ? "64" : "--", active: cgroupActive || tuneActive, tone: tuneActive ? "success" : "brand" },
    { name: "pids.current", value: rejectActive ? "64 / 64" : growthActive ? "63 / 64" : cgroupActive ? "17 / 64" : "--", active: cgroupActive || growthActive || rejectActive, tone: rejectActive ? "danger" : growthActive ? "warning" : "teal" },
    { name: "pids.events max", value: tuneActive ? "0" : rejectActive ? "4" : "0", active: rejectActive || tuneActive, tone: rejectActive ? "danger" : "success" },
    { name: "docker stats PIDS", value: tuneActive ? "58 / 96" : growthActive ? "63 / 64" : "--", active: growthActive || tuneActive, tone: tuneActive ? "success" : "warning" },
  ];
  const mobileFlow = [
    { name: "HostConfig", value: flagsActive ? "--pids-limit 64 -> PidsLimit=64" : "pending flag", active: flagsActive },
    { name: "pids controller", value: cgroupActive ? "pids.max=64, pids.current=17" : "waiting runtime", active: cgroupActive },
    { name: "task growth", value: growthActive ? "threads + children raise current to 63" : "normal worker pool", active: growthActive },
    { name: "fork boundary", value: rejectActive ? "fork/clone rejected, pids.events max=4" : "new tasks allowed", active: rejectActive },
    { name: "tune cap", value: tuneActive ? "baseline 41, peak 58, update to 96" : "waiting evidence", active: tuneActive },
  ];

  return (
    <div className="visual-stage docker-pids-stage">
      <div className="docker-pids-card">
        <svg
          className="docker-pids-diagram"
          viewBox="0 0 1120 640"
          role="img"
          aria-label={readLocalizedText(simulation.title, locale)}
        >
          <defs>
            {[
              ["docker-pids-arrow-brand", "var(--brand)"],
              ["docker-pids-arrow-teal", "var(--tertiary)"],
              ["docker-pids-arrow-success", "var(--success)"],
              ["docker-pids-arrow-warning", "#f59e0b"],
              ["docker-pids-arrow-danger", "var(--danger)"],
            ].map(([id, fill]) => (
              <marker key={id} id={id} viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="8" markerHeight="8" orient="auto">
                <path d="M 0 0 L 10 5 L 0 10 z" fill={fill} />
              </marker>
            ))}
            <filter id="docker-pids-soft-shadow" x="-20%" y="-30%" width="140%" height="160%">
              <feDropShadow dx="0" dy="10" stdDeviation="10" floodColor="#172033" floodOpacity="0.13" />
            </filter>
          </defs>

          <rect className="docker-pids-bg" x="24" y="24" width="1072" height="584" rx="28" />
          <text className="docker-pids-title" x="560" y="70">
            {readLocalizedText(simulation.title, locale)}
          </text>
          <text className="docker-pids-subtitle" x="560" y="100">
            {label(
              "docker run -> HostConfig.PidsLimit -> pids.max/current/events -> fork boundary -> stats/top tuning",
              "docker run -> HostConfig.PidsLimit -> pids.max/current/events -> fork boundary -> stats/top tuning",
            )}
          </text>

          <g className={`docker-pids-flags ${flagsActive ? "active" : ""}`}>
            <rect x="58" y="136" width="246" height="184" rx="24" />
            <text className="docker-pids-panel-title" x="88" y="174">docker run</text>
            <text className="docker-pids-panel-subtitle" x="88" y="198">HostConfig boundary</text>
            {["--pids-limit 64", "--memory 512m", "--read-only"].map((flag, index) => (
              <g key={flag} className={`docker-pids-flag-row ${flagsActive ? "active" : ""}`}>
                <rect x="88" y={224 + index * 34} width="178" height="24" rx="12" />
                <text x="104" y={240 + index * 34}>{flag}</text>
              </g>
            ))}
          </g>

          <g className={`docker-pids-daemon ${flagsActive ? "active" : ""}`}>
            <rect x="364" y="144" width="208" height="126" rx="24" />
            <text className="docker-pids-panel-title" x="394" y="182">Docker daemon</text>
            <text x="394" y="214">{flagsActive ? "PidsLimit=64" : "await flag"}</text>
            <text x="394" y="240">{cgroupActive ? "runtime applied" : "container create"}</text>
          </g>

          <g className={`docker-pids-cgroup ${cgroupActive ? "active" : ""}`}>
            <rect x="638" y="126" width="332" height="236" rx="28" />
            <text className="docker-pids-panel-title" x="668" y="164">cgroup pids controller</text>
            <text className="docker-pids-panel-subtitle" x="668" y="188">/sys/fs/cgroup/docker/&lt;id&gt;</text>
            {controlRows.map((row, index) => (
              <g key={row.name} className={`docker-pids-control-row ${row.tone} ${row.active ? "active" : ""}`}>
                <rect x="668" y={214 + index * 38} width="266" height="28" rx="14" />
                <text x="686" y={233 + index * 38}>{row.name}</text>
                <text x="916" y={233 + index * 38}>{row.value}</text>
              </g>
            ))}
          </g>

          <g className={`docker-pids-container ${flagsActive ? "active" : ""}`}>
            <rect x="72" y="388" width="326" height="164" rx="26" />
            <text className="docker-pids-panel-title" x="102" y="426">{label("应用容器", "App container")}</text>
            <text className="docker-pids-panel-subtitle" x="102" y="450">PID namespace view + task count</text>
            {taskRows.map((row, index) => (
              <g key={row.name} className={`docker-pids-task-row ${row.tone} ${row.active ? "active" : ""}`}>
                <rect x="102" y={470 + index * 28} width="250" height="21" rx="11" />
                <text x="118" y={484 + index * 28}>{row.name}</text>
                <text x="338" y={484 + index * 28}>{row.value}</text>
              </g>
            ))}
          </g>

          <g className={`docker-pids-kernel ${growthActive || rejectActive ? "active" : ""}`}>
            <rect x="454" y="394" width="270" height="152" rx="26" />
            <text className="docker-pids-panel-title" x="484" y="432">Linux task creation</text>
            {kernelRows.map((row, index) => (
              <g key={row.name} className={`docker-pids-kernel-row ${row.tone} ${row.active ? "active" : ""}`}>
                <rect x="484" y={456 + index * 32} width="190" height="24" rx="12" />
                <text x="500" y={472 + index * 32}>{row.name}</text>
                <text x="660" y={472 + index * 32}>{row.value}</text>
              </g>
            ))}
          </g>

          <g className={`docker-pids-observe ${growthActive || rejectActive || tuneActive ? "active" : ""}`}>
            <rect x="776" y="396" width="292" height="150" rx="26" />
            <text className="docker-pids-panel-title" x="806" y="434">{label("观测证据", "Observation evidence")}</text>
            <text x="806" y="464">{growthActive ? "docker stats PIDS 63 / 64" : "metrics pending"}</text>
            <text x="806" y="494">{rejectActive ? "pids.events: max 4" : tuneActive ? "events cleared after update" : "events pending"}</text>
            <text x="806" y="524">{tuneActive ? "docker update --pids-limit 96" : rejectActive ? "docker top + thread dump" : "docker top pending"}</text>
          </g>

          <g className={`docker-pids-flags-path ${flagsActive ? "active" : ""}`}>
            <path d="M 304 214 C 330 208, 344 204, 364 202" markerEnd="url(#docker-pids-arrow-brand)" />
            <rect x="286" y="168" width="138" height="30" rx="15" />
            <text x="355" y="188">HostConfig</text>
          </g>
          <g className={`docker-pids-cgroup-path ${cgroupActive ? "active" : ""}`}>
            <path d="M 572 206 C 604 198, 618 196, 638 196" markerEnd="url(#docker-pids-arrow-teal)" />
            <rect x="548" y="164" width="148" height="30" rx="15" />
            <text x="622" y="184">write pids.max</text>
          </g>
          <g className={`docker-pids-growth-path ${growthActive ? "active" : ""}`}>
            <path d="M 398 474 C 434 458, 446 450, 454 450" markerEnd="url(#docker-pids-arrow-warning)" />
            <path d="M 662 362 C 628 382, 612 402, 604 430" markerEnd="url(#docker-pids-arrow-warning)" />
            <rect x="432" y="346" width="164" height="30" rx="15" />
            <text x="514" y="366">pids.current rises</text>
          </g>
          <g className={`docker-pids-reject-path ${rejectActive ? "active" : ""}`}>
            <path d="M 398 526 C 438 528, 446 520, 454 512" markerEnd="url(#docker-pids-arrow-danger)" />
            <path d="M 724 470 C 754 466, 764 464, 776 464" markerEnd="url(#docker-pids-arrow-danger)" />
            <rect x="588" y="562" width="160" height="30" rx="15" />
            <text x="668" y="582">fork EAGAIN</text>
          </g>
          <g className={`docker-pids-tune-path ${tuneActive ? "active" : ""}`}>
            <path d="M 876 396 C 826 366, 854 344, 912 362" markerEnd="url(#docker-pids-arrow-success)" />
            <path d="M 806 546 C 660 610, 210 610, 166 552" markerEnd="url(#docker-pids-arrow-success)" />
            <rect x="518" y="604" width="184" height="30" rx="15" />
            <text x="610" y="624">baseline + headroom</text>
          </g>

          <g className="docker-pids-signals">
            {signalRows.map((signal, index) => (
              <g key={signal.name} className={`docker-pids-signal ${signal.tone} ${signal.active ? "active" : ""}`}>
                <rect x={62 + index * 264} y="566" width="224" height="34" rx="16" />
                <text x={82 + index * 264} y="580">{signal.name}</text>
                <text x={264 + index * 264} y="594">{signal.value}</text>
              </g>
            ))}
          </g>
        </svg>
        <div className="docker-pids-mobile-map">
          <div className="docker-pids-mobile-flow" aria-hidden="true">
            {mobileFlow.map((item) => (
              <div key={item.name} className={`docker-pids-mobile-hop ${item.active ? "active" : ""}`}>
                <span>{item.name}</span>
                <strong>{item.value}</strong>
              </div>
            ))}
          </div>
          <div className="docker-pids-mobile-facts">
            {signalRows.map((signal) => (
              <div key={signal.name} className={`docker-pids-mobile-fact ${signal.active ? "active" : ""}`}>
                <span>{signal.name}</span>
                <strong>{signal.value}</strong>
              </div>
            ))}
          </div>
        </div>
        <div className="tcp-handshake-caption docker-pids-caption">
          <strong>{readLocalizedText(activeStep.title, locale)}</strong>
          <span>{completedSteps}/{simulation.steps.length}</span>
        </div>
      </div>
    </div>
  );
}

function EpollStage({
  simulation,
  locale,
  completedSteps,
  activeStepIndex,
}: {
  simulation: VisualSimulation;
  locale: Locale;
  completedSteps: number;
  activeStepIndex: number;
}) {
  const activeStep = simulation.steps[activeStepIndex];
  const label = (zh: string, en: string) => (locale === "zh" ? zh : en);
  const createActive = completedSteps >= 1;
  const registerActive = completedSteps >= 2;
  const callbackActive = completedSteps >= 3;
  const waitActive = completedSteps >= 4;
  const drainActive = completedSteps >= 5;
  const interestRows = [
    { fd: "fd12", mask: "EPOLLIN", active: registerActive, tone: "brand" },
    { fd: "fd18", mask: "EPOLLIN | EPOLLET", active: registerActive, tone: callbackActive ? "warning" : "teal" },
    { fd: "fd31", mask: "EPOLLOUT", active: registerActive, tone: "success" },
  ];
  const socketRows = [
    { name: "socket fd12", value: registerActive ? "callback armed" : "pending", active: registerActive, tone: "brand" },
    { name: "socket fd18", value: callbackActive ? "readable" : "callback armed", active: registerActive, tone: callbackActive ? "warning" : "teal" },
    { name: "socket fd31", value: callbackActive ? "writable" : "callback armed", active: registerActive, tone: "success" },
  ];
  const readyRows = [
    { name: "fd18", active: callbackActive, tone: "warning" },
    { name: "fd31", active: callbackActive, tone: "success" },
    { name: "fd12", active: waitActive, tone: "brand" },
  ];
  const signalRows = [
    { name: "interest list", value: registerActive ? "3 watched fd" : "empty", active: registerActive },
    { name: "ready list", value: callbackActive ? "2 ready events" : "empty", active: callbackActive },
    { name: "epoll_wait batch", value: waitActive ? "events[0..2]" : "blocked", active: waitActive },
    { name: "LT / ET mode", value: drainActive ? "ET drained" : "EPOLLET armed", active: drainActive },
  ];
  const mobileFlow = [
    { name: "epoll_create1", value: createActive ? "epfd=7 / eventpoll object" : "pending", active: createActive },
    { name: "epoll_ctl", value: registerActive ? "fd12 fd18 fd31 registered" : "waiting fd mask", active: registerActive },
    { name: "callback", value: callbackActive ? "socket wait queue -> ready list" : "waiting I/O", active: callbackActive },
    { name: "epoll_wait", value: waitActive ? "events batch copied to user space" : "blocked", active: waitActive },
    { name: "drain/rearm", value: drainActive ? "read until EAGAIN, then wait" : "pending handler", active: drainActive },
  ];

  return (
    <div className="visual-stage epoll-stage">
      <div className="epoll-card">
        <svg
          className="epoll-diagram"
          viewBox="0 0 1120 640"
          role="img"
          aria-label={readLocalizedText(simulation.title, locale)}
        >
          <defs>
            {[
              ["epoll-arrow-brand", "var(--brand)"],
              ["epoll-arrow-teal", "var(--tertiary)"],
              ["epoll-arrow-success", "var(--success)"],
              ["epoll-arrow-warning", "#f59e0b"],
              ["epoll-arrow-danger", "var(--danger)"],
            ].map(([id, fill]) => (
              <marker key={id} id={id} viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="8" markerHeight="8" orient="auto">
                <path d="M 0 0 L 10 5 L 0 10 z" fill={fill} />
              </marker>
            ))}
            <filter id="epoll-soft-shadow" x="-20%" y="-30%" width="140%" height="160%">
              <feDropShadow dx="0" dy="10" stdDeviation="10" floodColor="#172033" floodOpacity="0.13" />
            </filter>
          </defs>

          <rect className="epoll-bg" x="24" y="24" width="1072" height="584" rx="28" />
          <text className="epoll-title" x="560" y="70">
            {readLocalizedText(simulation.title, locale)}
          </text>
          <text className="epoll-subtitle" x="560" y="100">
            {label(
              "epfd -> interest list -> socket wait queues -> ready list -> epoll_wait -> handler",
              "epfd -> interest list -> socket wait queues -> ready list -> epoll_wait -> handler",
            )}
          </text>

          <g className={`epoll-app ${createActive ? "active" : ""}`}>
            <rect x="58" y="142" width="236" height="230" rx="24" />
            <text className="epoll-panel-title" x="86" y="180">{label("事件循环线程", "Event loop thread")}</text>
            <text className="epoll-panel-subtitle" x="86" y="204">nonblocking sockets</text>
            {[
              { text: "epoll_create1()", active: createActive },
              { text: "epoll_ctl(ADD)", active: registerActive },
              { text: "epoll_wait(events)", active: waitActive },
            ].map((row, index) => (
              <g key={row.text} className={`epoll-code-row ${row.active ? "active" : ""}`}>
                <rect x="86" y={230 + index * 42} width="174" height="30" rx="14" />
                <text x="102" y={250 + index * 42}>{row.text}</text>
              </g>
            ))}
          </g>

          <g className={`epoll-instance ${createActive ? "active" : ""}`}>
            <rect x="356" y="132" width="346" height="304" rx="28" />
            <text className="epoll-panel-title" x="386" y="170">eventpoll epfd=7</text>
            <text className="epoll-panel-subtitle" x="386" y="194">{label("内核持久化关注集合和就绪集合", "Kernel-persistent watched and ready sets")}</text>
            <g className={`epoll-interest ${registerActive ? "active" : ""}`}>
              <rect x="386" y="222" width="286" height="116" rx="20" />
              <text className="epoll-section-title" x="410" y="248">Interest List</text>
              {interestRows.map((row, index) => (
                <g key={row.fd} className={`epoll-interest-row ${row.tone} ${row.active ? "active" : ""}`}>
                  <rect x="410" y={266 + index * 26} width="226" height="20" rx="10" />
                  <text x="424" y={280 + index * 26}>{row.fd}</text>
                  <text x="622" y={280 + index * 26}>{row.mask}</text>
                </g>
              ))}
            </g>
            <g className={`epoll-ready ${callbackActive ? "active" : ""}`}>
              <rect x="386" y="354" width="286" height="72" rx="20" />
              <text className="epoll-section-title" x="410" y="380">Ready List</text>
              {readyRows.map((row, index) => (
                <g key={row.name} className={`epoll-ready-chip ${row.tone} ${row.active ? "active" : ""}`}>
                  <rect x={410 + index * 86} y="394" width="72" height="22" rx="11" />
                  <text x={446 + index * 86} y="409">{row.name}</text>
                </g>
              ))}
            </g>
          </g>

          <g className={`epoll-waitqueues ${registerActive ? "active" : ""}`}>
            <rect x="782" y="142" width="292" height="196" rx="24" />
            <text className="epoll-panel-title" x="812" y="180">Socket wait queues</text>
            <text className="epoll-panel-subtitle" x="812" y="204">{label("I/O readiness callback path", "I/O readiness callback path")}</text>
            {socketRows.map((row, index) => (
              <g key={row.name} className={`epoll-socket-row ${row.tone} ${row.active ? "active" : ""}`}>
                <rect x="812" y={228 + index * 36} width="220" height="26" rx="13" />
                <text x="828" y={246 + index * 36}>{row.name}</text>
                <text x="1018" y={246 + index * 36}>{row.value}</text>
              </g>
            ))}
          </g>

          <g className={`epoll-dispatch ${drainActive ? "active" : ""}`}>
            <rect x="782" y="404" width="292" height="112" rx="24" />
            <text className="epoll-panel-title" x="812" y="442">{label("业务处理", "Worker dispatch")}</text>
            <text className="epoll-panel-subtitle" x="812" y="466">{"read(fd18) -> EAGAIN -> rearm"}</text>
            <g className={`epoll-dispatch-chip danger ${drainActive ? "active" : ""}`}>
              <rect x="812" y="482" width="220" height="28" rx="14" />
              <text x="922" y="501">{drainActive ? "drain + fairness guard" : "handler pending"}</text>
            </g>
          </g>

          <g className={`epoll-create-path ${createActive ? "active" : ""}`}>
            <path d="M 294 250 C 326 238, 332 228, 356 218" markerEnd="url(#epoll-arrow-brand)" />
            <rect x="252" y="188" width="154" height="32" rx="16" />
            <text x="329" y="209">epfd=7</text>
          </g>
          <g className={`epoll-register-path ${registerActive ? "active" : ""}`}>
            <path d="M 702 264 C 738 254, 752 240, 782 238" markerEnd="url(#epoll-arrow-teal)" />
            <rect x="670" y="218" width="170" height="32" rx="16" />
            <text x="755" y="239">attach callback</text>
          </g>
          <g className={`epoll-ready-path ${callbackActive ? "active" : ""}`}>
            <path d="M 888 338 C 872 394, 760 420, 672 404" markerEnd="url(#epoll-arrow-warning)" />
            <rect x="724" y="374" width="168" height="32" rx="16" />
            <text x="808" y="395">fd ready</text>
          </g>
          <g className={`epoll-wait-path ${waitActive ? "active" : ""}`}>
            <path d="M 410 426 C 316 476, 214 430, 202 372" markerEnd="url(#epoll-arrow-success)" />
            <rect x="240" y="444" width="184" height="32" rx="16" />
            <text x="332" y="465">events[0..2]</text>
          </g>
          <g className={`epoll-drain-path ${drainActive ? "active" : ""}`}>
            <path d="M 294 318 C 470 540, 650 500, 782 474" markerEnd="url(#epoll-arrow-danger)" />
            <rect x="526" y="514" width="172" height="32" rx="16" />
            <text x="612" y="535">read until EAGAIN</text>
          </g>

          <g className="epoll-signals">
            {signalRows.map((signal, index) => (
              <g key={signal.name} className={`epoll-signal ${signal.active ? "active" : ""}`}>
                <rect x={62 + index * 264} y="558" width="224" height="34" rx="16" />
                <text x={82 + index * 264} y="572">{signal.name}</text>
                <text x={264 + index * 264} y="586">{signal.value}</text>
              </g>
            ))}
          </g>
        </svg>
        <div className="epoll-mobile-map">
          <div className="epoll-mobile-flow" aria-hidden="true">
            {mobileFlow.map((item) => (
              <div key={item.name} className={`epoll-mobile-hop ${item.active ? "active" : ""}`}>
                <span>{item.name}</span>
                <strong>{item.value}</strong>
              </div>
            ))}
          </div>
          <div className="epoll-mobile-facts">
            {signalRows.map((signal) => (
              <div key={signal.name} className={`epoll-mobile-fact ${signal.active ? "active" : ""}`}>
                <span>{signal.name}</span>
                <strong>{signal.value}</strong>
              </div>
            ))}
          </div>
        </div>
        <div className="tcp-handshake-caption epoll-caption">
          <strong>{readLocalizedText(activeStep.title, locale)}</strong>
          <span>{completedSteps}/{simulation.steps.length}</span>
        </div>
      </div>
    </div>
  );
}

function ArrayIndexStage({
  simulation,
  locale,
  completedSteps,
  activeStepIndex,
}: {
  simulation: VisualSimulation;
  locale: Locale;
  completedSteps: number;
  activeStepIndex: number;
}) {
  const activeStep = simulation.steps[activeStepIndex];
  const values = [4, 8, 15, 16, 23];
  const insertedValues = [4, 8, 99, 15, 16, 23];
  const showAddress = completedSteps >= 1;
  const showRead = completedSteps >= 2;
  const showInsert = completedSteps >= 3;
  const showCheck = completedSteps >= 4;
  const cells = showInsert ? insertedValues : values;
  const cellWidth = showInsert ? 118 : 128;
  const startX = showInsert ? 108 : 140;
  const gap = 10;
  const cellsY = 230;
  const addressY = 354;
  const targetIndex = 2;
  const highlightIndex = targetIndex;
  const suffixStart = showInsert ? 3 : 2;
  const selectedX = startX + highlightIndex * (cellWidth + gap) + cellWidth / 2;
  const insertX = startX + targetIndex * (cellWidth + gap) + cellWidth / 2;

  return (
    <div className="visual-stage array-stage">
      <div className="array-card">
        <svg
          className="array-diagram"
          viewBox="0 0 980 620"
          preserveAspectRatio="xMidYMid meet"
          aria-label={readLocalizedText(simulation.title, locale)}
          role="img"
        >
          <defs>
            <filter id="array-soft-shadow" x="-20%" y="-30%" width="140%" height="160%">
              <feDropShadow dx="0" dy="10" stdDeviation="9" floodOpacity="0.14" />
            </filter>
            <marker
              id="array-arrow-brand"
              viewBox="0 0 10 10"
              refX="8"
              refY="5"
              markerWidth="8"
              markerHeight="8"
              orient="auto-start-reverse"
            >
              <path d="M 0 0 L 10 5 L 0 10 z" />
            </marker>
            <marker
              id="array-arrow-warning"
              viewBox="0 0 10 10"
              refX="8"
              refY="5"
              markerWidth="8"
              markerHeight="8"
              orient="auto-start-reverse"
            >
              <path d="M 0 0 L 10 5 L 0 10 z" />
            </marker>
          </defs>
          <rect className="array-bg" x="26" y="24" width="928" height="572" rx="24" />
          <text className="array-title" x="490" y="76">
            {readLocalizedText(simulation.title, locale)}
          </text>
          <text className="array-subtitle" x="490" y="108">
            {locale === "zh" ? "base=1000, elementSize=4, index i=2" : "base=1000, elementSize=4, index i=2"}
          </text>

          <g className={`array-formula ${showAddress ? "visible" : ""}`}>
            <rect x="116" y="138" width="748" height="58" rx="16" />
            <text x="490" y="174">
              {locale === "zh" ? "address(a[i]) = base + i * elementSize" : "address(a[i]) = base + i * elementSize"}
            </text>
          </g>

          <g className="array-cells">
            {cells.map((value, index) => {
              const x = startX + index * (cellWidth + gap);
              const isInserted = showInsert && value === 99;
              const isTarget = index === highlightIndex && showRead;
              const isSuffix = showInsert && index >= suffixStart;
              const cellClass = [
                "array-cell",
                isTarget ? "target" : "",
                isInserted ? "inserted" : "",
                isSuffix ? "shifted" : "",
              ].filter(Boolean).join(" ");

              return (
                <g key={`${value}-${index}`} className={cellClass}>
                  <rect x={x} y={cellsY} width={cellWidth} height="86" rx="10" />
                  <text className="array-cell-value" x={x + cellWidth / 2} y={cellsY + 38}>
                    {value}
                  </text>
                  <text className="array-cell-index" x={x + cellWidth / 2} y={cellsY + 66}>
                    a[{index}]
                  </text>
                  <text className="array-cell-address" x={x + cellWidth / 2} y={addressY}>
                    {1000 + index * 4}
                  </text>
                </g>
              );
            })}
          </g>

          {showRead && (
            <g className="array-read-pointer">
              <path d={`M 490 196 L ${selectedX} 224`} markerEnd="url(#array-arrow-brand)" />
              <rect x={selectedX - 106} y="404" width="212" height="58" rx="14" />
              <text x={selectedX} y="428">a[2] = 15</text>
              <text x={selectedX} y="448">O(1)</text>
            </g>
          )}

          {showInsert && (
            <>
              <g className="array-insert-marker">
                <path d={`M ${insertX} 214 L ${insertX} 142`} markerEnd="url(#array-arrow-warning)" />
                <rect x={insertX - 84} y="122" width="168" height="44" rx="12" />
                <text x={insertX} y="150">
                  {locale === "zh" ? "插入 99" : "insert 99"}
                </text>
              </g>
              <g className="array-shift-arrows">
                {[3, 4, 5].map((index) => {
                  const x = startX + index * (cellWidth + gap) + cellWidth / 2;
                  return (
                    <path
                      key={index}
                      d={`M ${x - 56} ${cellsY - 22} L ${x + 48} ${cellsY - 22}`}
                      markerEnd="url(#array-arrow-warning)"
                    />
                  );
                })}
                <rect x="590" y="404" width="250" height="58" rx="14" />
                <text x="715" y="428">{locale === "zh" ? "后缀右移" : "suffix shifts right"}</text>
                <text x="715" y="448">O(n)</text>
              </g>
            </>
          )}

          <g className={`array-boundary ${showCheck ? "visible" : ""}`}>
            <rect x="122" y="502" width="736" height="54" rx="16" />
            <text x="490" y="535">
              {locale === "zh"
                ? "边界：0 <= i < length，插入时还要检查容量"
                : "Bounds: 0 <= i < length; insertion also checks capacity"}
            </text>
          </g>
        </svg>
        <div className="wire-caption array-caption">
          <span>{readLocalizedText(activeStep.title, locale)}</span>
          <span>{completedSteps}/{simulation.steps.length}</span>
        </div>
      </div>
    </div>
  );
}

function LinkedListPointerStage({
  simulation,
  locale,
  completedSteps,
  activeStepIndex,
}: {
  simulation: VisualSimulation;
  locale: Locale;
  completedSteps: number;
  activeStepIndex: number;
}) {
  const activeStep = simulation.steps[activeStepIndex];
  const baseNodes = [
    { id: "A", value: 7, x: 128, y: 238 },
    { id: "B", value: 12, x: 328, y: 238 },
    { id: "C", value: 18, x: 528, y: 238 },
    { id: "D", value: 24, x: 728, y: 238 },
  ];
  const insertedNode = { id: "X", value: 99, x: 528, y: 370 };
  const nodes = completedSteps >= 3
    ? [baseNodes[0], baseNodes[1], insertedNode, baseNodes[2], baseNodes[3]]
    : baseNodes;
  const showTraversal = completedSteps >= 2;
  const showInsert = completedSteps >= 3;
  const showReverse = completedSteps >= 4;
  const headTarget = showReverse ? insertedNode : baseNodes[0];
  const arrowId = (tone: string) => `url(#linked-list-arrow-${tone})`;

  function pointerPath(from: { x: number; y: number }, to: { x: number; y: number }) {
    const startX = from.x + 126;
    const startY = from.y + 42;
    const endX = to.x - 14;
    const endY = to.y + 42;
    const curve = Math.abs(endY - startY) > 80
      ? `C ${startX + 44} ${startY}, ${endX - 44} ${endY}, ${endX} ${endY}`
      : `L ${endX} ${endY}`;

    return `M ${startX} ${startY} ${curve}`;
  }

  function renderNode(node: { id: string; value: number; x: number; y: number }) {
    const inserted = node.id === "X";
    const reversedHead = showReverse && node.id === "X";
    const active = showTraversal && ["B", "C"].includes(node.id);

    return (
      <g
        key={node.id}
        className={[
          "linked-node",
          inserted ? "inserted" : "",
          reversedHead ? "reversed-head" : "",
          active ? "active" : "",
        ].filter(Boolean).join(" ")}
      >
        <rect x={node.x} y={node.y} width="146" height="86" rx="12" />
        <line x1={node.x + 88} y1={node.y} x2={node.x + 88} y2={node.y + 86} />
        <text className="linked-node-id" x={node.x + 44} y={node.y + 34}>
          {node.id}
        </text>
        <text className="linked-node-value" x={node.x + 44} y={node.y + 62}>
          {node.value}
        </text>
        <text className="linked-node-next" x={node.x + 117} y={node.y + 51}>
          next
        </text>
      </g>
    );
  }

  return (
    <div className="visual-stage linked-list-stage">
      <div className="linked-list-card">
        <svg
          className="linked-list-diagram"
          viewBox="0 0 980 650"
          preserveAspectRatio="xMidYMid meet"
          aria-label={readLocalizedText(simulation.title, locale)}
          role="img"
        >
          <defs>
            <filter id="linked-list-soft-shadow" x="-20%" y="-30%" width="140%" height="160%">
              <feDropShadow dx="0" dy="10" stdDeviation="9" floodOpacity="0.13" />
            </filter>
            {[
              ["brand", "var(--brand)"],
              ["teal", "var(--tertiary)"],
              ["warning", "#f59e0b"],
              ["success", "var(--success)"],
              ["muted", "color-mix(in srgb, var(--muted) 54%, transparent)"],
            ].map(([tone, fill]) => (
              <marker
                key={tone}
                id={`linked-list-arrow-${tone}`}
                viewBox="0 0 10 10"
                refX="8"
                refY="5"
                markerWidth="8"
                markerHeight="8"
                orient="auto-start-reverse"
              >
                <path d="M 0 0 L 10 5 L 0 10 z" fill={fill} />
              </marker>
            ))}
          </defs>

          <rect className="linked-list-bg" x="26" y="24" width="928" height="586" rx="24" />
          <text className="linked-list-title" x="490" y="76">
            {readLocalizedText(simulation.title, locale)}
          </text>
          <text className="linked-list-subtitle" x="490" y="108">
            {locale === "zh" ? "node = value + next, head 是唯一入口" : "node = value + next, head is the entry"}
          </text>

          <g className="linked-head-pointer">
            <rect x="58" y="146" width="156" height="54" rx="14" />
            <text x="136" y="180">{showReverse ? "head -> X" : "head -> A"}</text>
            <path
              d={`M 214 173 C 250 173, ${headTarget.x - 48} ${headTarget.y + 12}, ${headTarget.x + 16} ${headTarget.y + 22}`}
              markerEnd={arrowId(showReverse ? "success" : "brand")}
            />
          </g>

          <g className="linked-nodes">
            {nodes.map(renderNode)}
          </g>

          <g className="linked-next-links">
            {!showReverse && (
              <>
                <path d={pointerPath(baseNodes[0], baseNodes[1])} markerEnd={arrowId("brand")} />
                {showInsert ? (
                  <>
                    <path d={pointerPath(baseNodes[1], insertedNode)} markerEnd={arrowId("warning")} />
                    <path d={pointerPath(insertedNode, baseNodes[2])} markerEnd={arrowId("warning")} />
                  </>
                ) : (
                  <path d={pointerPath(baseNodes[1], baseNodes[2])} markerEnd={arrowId("brand")} />
                )}
                <path d={pointerPath(baseNodes[2], baseNodes[3])} markerEnd={arrowId("brand")} />
              </>
            )}
            {showReverse && (
              <>
                <path d={pointerPath(insertedNode, baseNodes[1])} markerEnd={arrowId("success")} />
                <path d={pointerPath(baseNodes[1], baseNodes[0])} markerEnd={arrowId("success")} />
                <path d={pointerPath(baseNodes[2], baseNodes[3])} markerEnd={arrowId("brand")} />
                <path
                  className="linked-remainder-link"
                  d={`M ${baseNodes[0].x + 52} ${baseNodes[0].y + 96} C 360 560, 474 552, ${baseNodes[2].x + 36} ${baseNodes[2].y + 96}`}
                  markerEnd={arrowId("teal")}
                />
              </>
            )}
          </g>

          {showTraversal && (
            <g className="linked-traversal">
              <path d="M 174 210 L 374 210 L 574 210" markerEnd={arrowId("teal")} />
              <rect x="426" y="136" width="182" height="52" rx="14" />
              <text x="517" y="158">curr = C</text>
              <text x="517" y="178">{"A -> B -> C"}</text>
            </g>
          )}

          {showInsert && (
            <g className="linked-insert-note">
              <rect x="622" y="394" width="242" height="76" rx="14" />
              <text x="743" y="420">X.next = C</text>
              <text x="743" y="444">B.next = X</text>
              <text x="743" y="464">O(1)</text>
            </g>
          )}

          {showReverse && (
            <g className="linked-reverse-note">
              <rect x="94" y="494" width="360" height="68" rx="16" />
              <text x="274" y="521">{locale === "zh" ? "保存 next，再执行 curr.next = prev" : "save next, then curr.next = prev"}</text>
              <text x="274" y="544">prev = X, curr = C</text>
            </g>
          )}

          <g className="linked-null-tail">
            <path
              d={`M ${baseNodes[3].x + 126} ${baseNodes[3].y + 42} L 910 ${baseNodes[3].y + 42}`}
              markerEnd={arrowId("muted")}
            />
            <text x="928" y={baseNodes[3].y + 48}>null</text>
          </g>
        </svg>
        <div className="wire-caption linked-list-caption">
          <span>{readLocalizedText(activeStep.title, locale)}</span>
          <span>{completedSteps}/{simulation.steps.length}</span>
        </div>
      </div>
    </div>
  );
}

function StackLifoStage({
  simulation,
  locale,
  completedSteps,
  activeStepIndex,
}: {
  simulation: VisualSimulation;
  locale: Locale;
  completedSteps: number;
  activeStepIndex: number;
}) {
  const activeStep = simulation.steps[activeStepIndex];
  const capacity = 5;
  const pushedValues = [7, 12, 18];
  const visibleValues = completedSteps >= 5
    ? []
    : completedSteps >= 4
      ? [7]
      : completedSteps >= 2
        ? pushedValues
        : [];
  const topIndex = visibleValues.length - 1;
  const showPush = completedSteps >= 2;
  const showPeek = completedSteps >= 3;
  const showPop = completedSteps >= 4;
  const showBoundary = completedSteps >= 5;
  const cellX = 340;
  const cellY = 468;
  const cellWidth = 270;
  const cellHeight = 70;
  const cellGap = 10;
  const stackHeight = capacity * (cellHeight + cellGap) - cellGap;
  const topY = topIndex >= 0
    ? cellY - topIndex * (cellHeight + cellGap) + cellHeight / 2
    : cellY + cellHeight / 2;
  const topLabel = topIndex >= 0 ? `top -> ${visibleValues[topIndex]}` : "top = -1";
  const arrowId = (tone: string) => `url(#stack-arrow-${tone})`;

  return (
    <div className="visual-stage stack-stage">
      <div className="stack-card">
        <svg
          className="stack-diagram"
          viewBox="0 0 980 650"
          preserveAspectRatio="xMidYMid meet"
          aria-label={readLocalizedText(simulation.title, locale)}
          role="img"
        >
          <defs>
            <filter id="stack-soft-shadow" x="-20%" y="-30%" width="140%" height="160%">
              <feDropShadow dx="0" dy="10" stdDeviation="9" floodOpacity="0.12" />
            </filter>
            {[
              ["brand", "var(--brand)"],
              ["teal", "var(--tertiary)"],
              ["warning", "#f59e0b"],
              ["success", "var(--success)"],
              ["danger", "var(--danger)"],
              ["muted", "color-mix(in srgb, var(--muted) 54%, transparent)"],
            ].map(([tone, fill]) => (
              <marker
                key={tone}
                id={`stack-arrow-${tone}`}
                viewBox="0 0 10 10"
                refX="8"
                refY="5"
                markerWidth="8"
                markerHeight="8"
                orient="auto-start-reverse"
              >
                <path d="M 0 0 L 10 5 L 0 10 z" fill={fill} />
              </marker>
            ))}
          </defs>

          <rect className="stack-bg" x="26" y="24" width="928" height="586" rx="24" />
          <text className="stack-title" x="490" y="76">
            {readLocalizedText(simulation.title, locale)}
          </text>
          <text className="stack-subtitle" x="490" y="108">
            {locale === "zh" ? "bottom 固定，所有操作都发生在 top" : "bottom stays fixed; every operation touches top"}
          </text>

          <g className="stack-frame" transform={`translate(${cellX}, ${cellY - stackHeight + cellHeight})`}>
            <path d={`M 0 0 L 0 ${stackHeight + 16} L ${cellWidth} ${stackHeight + 16} L ${cellWidth} 0`} />
            {Array.from({ length: capacity }).map((_, slot) => {
              const valueIndex = capacity - 1 - slot;
              const value = visibleValues[valueIndex];
              const y = slot * (cellHeight + cellGap);
              const isTop = valueIndex === topIndex;

              return (
                <g
                  key={slot}
                  className={[
                    "stack-slot",
                    value !== undefined ? "filled" : "",
                    isTop ? "top" : "",
                  ].filter(Boolean).join(" ")}
                >
                  <rect x="12" y={y} width={cellWidth - 24} height={cellHeight} rx="10" />
                  <text x={cellWidth / 2} y={y + 44}>
                    {value !== undefined ? value : ""}
                  </text>
                </g>
              );
            })}
            <text className="stack-bottom-label" x={cellWidth / 2} y={stackHeight + 46}>
              bottom
            </text>
          </g>

          <g className="stack-top-pointer">
            <rect x="90" y={topY - 26} width="154" height="52" rx="14" />
            <text x="167" y={topY + 5}>{topLabel}</text>
            <path
              d={`M 244 ${topY} C 282 ${topY}, 306 ${topY}, ${cellX + 16} ${topY}`}
              markerEnd={arrowId(showBoundary ? "danger" : topIndex >= 0 ? "teal" : "muted")}
            />
          </g>

          <g className="stack-operation-panel">
            <rect x="690" y="154" width="210" height="280" rx="18" />
            <text className="stack-operation-title" x="795" y="194">
              {locale === "zh" ? "操作序列" : "Operation trace"}
            </text>
            {[
              [1, "init", locale === "zh" ? "top=-1" : "top=-1"],
              [2, "push", "push(7), push(12), push(18)"],
              [3, "peek", locale === "zh" ? "peek() -> 18" : "peek() -> 18"],
              [4, "pop", locale === "zh" ? "pop() -> 18, 12" : "pop() -> 18, 12"],
              [5, "empty", "isEmpty()"],
            ].map(([stepNumber, label, detail]) => (
              <g
                key={label}
                className={`stack-operation-row ${completedSteps >= Number(stepNumber) ? "active" : ""}`}
              >
                <circle cx="716" cy={196 + Number(stepNumber) * 38} r="8" />
                <text x="742" y={202 + Number(stepNumber) * 38}>{detail}</text>
              </g>
            ))}
          </g>

          {showPush && (
            <g className="stack-push-path">
              <path d={`M 490 142 C 490 182, 490 208, 490 ${topY - 44}`} markerEnd={arrowId("teal")} />
              <rect x="410" y="122" width="180" height="44" rx="12" />
              <text x="500" y="151">{locale === "zh" ? "push 写入 top+1" : "push writes top+1"}</text>
            </g>
          )}

          {showPeek && (
            <g className="stack-peek-note">
              <rect x="122" y="132" width="238" height="70" rx="16" />
              <text x="241" y="160">peek() = 18</text>
              <text x="241" y="184">{locale === "zh" ? "不移动 top" : "top unchanged"}</text>
              <path d={`M 360 168 C 422 154, 506 154, ${cellX + cellWidth - 12} ${topY}`} markerEnd={arrowId("warning")} />
            </g>
          )}

          {showPop && (
            <g className="stack-pop-note">
              <path d={`M ${cellX + cellWidth - 12} ${topY} C 660 ${topY}, 682 500, 776 500`} markerEnd={arrowId("success")} />
              <rect x="712" y="466" width="206" height="74" rx="16" />
              <text x="815" y="492">{locale === "zh" ? "弹出顺序" : "pop order"}</text>
              <text x="815" y="516">{"18 -> 12"}</text>
            </g>
          )}

          {showBoundary && (
            <g className="stack-boundary-note">
              <rect x="108" y="514" width="324" height="58" rx="16" />
              <text x="270" y="538">{locale === "zh" ? "空栈先判断 isEmpty()" : "check isEmpty() first"}</text>
              <text x="270" y="558">{locale === "zh" ? "pop / peek 走受控边界" : "pop / peek use controlled boundary"}</text>
            </g>
          )}
        </svg>
        <div className="wire-caption stack-caption">
          <span>{readLocalizedText(activeStep.title, locale)}</span>
          <span>{completedSteps}/{simulation.steps.length}</span>
        </div>
      </div>
    </div>
  );
}

function SwitchForwardingStage({
  simulation,
  locale,
  completedSteps,
  activeStepIndex,
}: {
  simulation: VisualSimulation;
  locale: Locale;
  completedSteps: number;
  activeStepIndex: number;
}) {
  const activeStep = simulation.steps[activeStepIndex];
  const tableRows = [
    { mac: "AA:AA", vlan: "10", port: "Gi0/1", step: 1 },
    { mac: "BB:BB", vlan: "10", port: "Gi0/3", step: 3 },
  ];
  const floodPorts = [
    { x1: 570, y1: 286, x2: 918, y2: 186, label: "Gi0/2" },
    { x1: 570, y1: 286, x2: 918, y2: 352, label: "Gi0/3" },
    { x1: 570, y1: 286, x2: 918, y2: 438, label: "Gi0/4" },
  ];

  return (
    <div className="visual-stage switch-stage">
      <div className="tcp-handshake-card switch-card">
        <svg
          className="switch-diagram"
          viewBox="0 0 1040 580"
          role="img"
          aria-label={readLocalizedText(simulation.title, locale)}
        >
          <defs>
            {[
              ["switch-arrow-blue", "var(--brand)"],
              ["switch-arrow-yellow", "#f59e0b"],
              ["switch-arrow-teal", "var(--tertiary)"],
              ["switch-arrow-green", "var(--success)"],
              ["switch-arrow-muted", "color-mix(in srgb, var(--muted) 54%, transparent)"],
            ].map(([id, fill]) => (
              <marker
                key={id}
                id={id}
                viewBox="0 0 10 10"
                refX="8.5"
                refY="5"
                markerWidth="8"
                markerHeight="8"
                orient="auto"
              >
                <path d="M 0 0 L 10 5 L 0 10 z" fill={fill} />
              </marker>
            ))}
            <filter id="switch-soft-shadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="10" stdDeviation="10" floodColor="#172033" floodOpacity="0.13" />
            </filter>
          </defs>

          <rect className="switch-bg" x="28" y="24" width="984" height="512" rx="28" />
          <text className="tcp-title switch-title" x="520" y="70">
            {readLocalizedText(simulation.title, locale)}
          </text>
          <text className="tcp-subtitle switch-subtitle" x="520" y="99">
            Learn source MAC / Lookup destination MAC / Flood / Forward
          </text>

          <g className="switch-host host-a">
            <rect x="70" y="246" width="154" height="88" rx="20" />
            <text x="147" y="281">{locale === "zh" ? "主机 A" : "Host A"}</text>
            <text x="147" y="306">MAC AA:AA</text>
            <text x="147" y="326">VLAN 10</text>
          </g>

          <g className="switch-host host-b">
            <rect x="850" y="318" width="154" height="88" rx="20" />
            <text x="927" y="353">{locale === "zh" ? "主机 B" : "Host B"}</text>
            <text x="927" y="378">MAC BB:BB</text>
            <text x="927" y="398">VLAN 10</text>
          </g>

          <g className="switch-host host-c">
            <rect x="850" y="152" width="154" height="70" rx="18" />
            <text x="927" y="184">{locale === "zh" ? "同 VLAN 其他端口" : "Other VLAN port"}</text>
            <text x="927" y="204">Gi0/2</text>
          </g>

          <g className="switch-host host-d">
            <rect x="850" y="424" width="154" height="70" rx="18" />
            <text x="927" y="456">{locale === "zh" ? "同 VLAN 其他端口" : "Other VLAN port"}</text>
            <text x="927" y="476">Gi0/4</text>
          </g>

          <g className="switch-box">
            <rect x="356" y="194" width="230" height="210" rx="24" />
            <text x="471" y="230">{locale === "zh" ? "二层交换机" : "Layer-2 switch"}</text>
            {([
              { label: "Gi0/1", x: 356, y: 286, anchor: "end" },
              { label: "Gi0/2", x: 586, y: 204, anchor: "start" },
              { label: "Gi0/3", x: 586, y: 352, anchor: "start" },
              { label: "Gi0/4", x: 586, y: 438, anchor: "start" },
            ] as const).map((port) => (
              <g key={port.label} className={`switch-port ${completedSteps >= 1 ? "active" : ""}`}>
                <circle cx={port.x} cy={port.y} r="10" />
                <text
                  x={port.anchor === "end" ? port.x - 18 : port.x + 18}
                  y={port.y + 5}
                  textAnchor={port.anchor}
                >
                  {port.label}
                </text>
              </g>
            ))}
            <rect className="switch-vlan-chip" x="404" y="362" width="134" height="30" rx="15" />
            <text className="switch-vlan-label" x="471" y="382">VLAN 10</text>
          </g>

          <g className="mac-table-panel">
            <rect x="330" y="424" width="300" height="86" rx="18" />
            <text className="mac-table-title" x="356" y="450">
              {locale === "zh" ? "MAC 地址表" : "MAC Address Table"}
            </text>
            <text className="mac-table-head" x="356" y="474">MAC</text>
            <text className="mac-table-head" x="460" y="474">VLAN</text>
            <text className="mac-table-head" x="548" y="474">Port</text>
            {tableRows.map((row, index) => (
              <g
                key={row.mac}
                className={`mac-table-row ${completedSteps >= row.step ? "visible" : ""}`}
              >
                <text x="356" y={494 + index * 18}>{row.mac}</text>
                <text x="468" y={494 + index * 18}>{row.vlan}</text>
                <text x="548" y={494 + index * 18}>{row.port}</text>
              </g>
            ))}
          </g>

          <g className={`switch-flow first-frame ${completedSteps >= 1 ? "visible" : ""}`}>
            <path d="M 224 290 L 346 286" markerEnd="url(#switch-arrow-blue)" />
            <rect x="232" y="246" width="106" height="32" rx="16" />
            <text x="285" y="267">src AA:AA</text>
          </g>

          <g className={`switch-flow learn-line ${completedSteps >= 1 ? "visible" : ""}`}>
            <path d="M 386 330 C 384 395 384 416 420 424" markerEnd="url(#switch-arrow-blue)" />
            <rect x="260" y="350" width="180" height="34" rx="17" />
            <text x="350" y="372">
              {locale === "zh" ? "学习 AA:AA -> Gi0/1" : "Learn AA:AA -> Gi0/1"}
            </text>
          </g>

          <g className={`switch-flow flood ${completedSteps >= 2 ? "visible" : ""}`}>
            {floodPorts.map((port) => (
              <path
                key={port.label}
                d={`M ${port.x1} ${port.y1} C 690 ${port.y1}, 750 ${port.y2}, ${port.x2 - 76} ${port.y2}`}
                markerEnd="url(#switch-arrow-yellow)"
              />
            ))}
            <rect x="594" y="246" width="196" height="44" rx="22" />
            <text x="692" y="272">
              {locale === "zh" ? "dst BB:BB 缺失，VLAN 内泛洪" : "dst BB:BB miss, flood in VLAN"}
            </text>
          </g>

          <g className={`switch-flow reply ${completedSteps >= 3 ? "visible" : ""}`}>
            <path d="M 850 362 C 760 360 700 402 628 436" markerEnd="url(#switch-arrow-teal)" />
            <rect x="650" y="384" width="168" height="34" rx="17" />
            <text x="734" y="406">
              {locale === "zh" ? "学习 BB:BB -> Gi0/3" : "Learn BB:BB -> Gi0/3"}
            </text>
          </g>

          <g className={`switch-flow direct ${completedSteps >= 4 ? "visible" : ""}`}>
            <path d="M 224 304 C 318 304 322 258 404 258" markerEnd="url(#switch-arrow-green)" />
            <path d="M 538 258 C 660 258 744 340 850 362" markerEnd="url(#switch-arrow-green)" />
            <rect x="388" y="250" width="170" height="38" rx="19" />
            <text x="473" y="274">
              {locale === "zh" ? "命中 BB:BB -> Gi0/3" : "Hit BB:BB -> Gi0/3"}
            </text>
          </g>

          <g className={`switch-flow filter ${completedSteps >= 5 ? "visible" : ""}`}>
            <path d="M 420 318 C 372 334 372 384 420 396" markerEnd="url(#switch-arrow-muted)" />
            <rect x="90" y="378" width="212" height="50" rx="20" />
            <text x="196" y="400">
              {locale === "zh" ? "同入端口过滤" : "Filter same ingress port"}
            </text>
            <text x="196" y="420">
              {locale === "zh" ? "动态表项按年龄刷新/老化" : "Dynamic entries refresh or age out"}
            </text>
          </g>
        </svg>
        <div className="tcp-handshake-caption switch-caption">
          <strong>{readLocalizedText(activeStep.title, locale)}</strong>
          <span>{completedSteps}/{simulation.steps.length}</span>
        </div>
      </div>
    </div>
  );
}

function EthernetFrameStage({
  simulation,
  locale,
  completedSteps,
  activeStepIndex,
}: {
  simulation: VisualSimulation;
  locale: Locale;
  completedSteps: number;
  activeStepIndex: number;
}) {
  const activeStep = simulation.steps[activeStepIndex];
  const fields = [
    {
      id: "preamble",
      label: "Preamble",
      bytes: "7B",
      x: 54,
      width: 112,
      group: "sync",
      step: 1,
      detailZh: "物理同步",
      detailEn: "Physical sync",
    },
    {
      id: "sfd",
      label: "SFD",
      bytes: "1B",
      x: 166,
      width: 64,
      group: "sync",
      step: 1,
      detailZh: "帧起始",
      detailEn: "Frame start",
    },
    {
      id: "dst",
      label: "Destination MAC",
      bytes: "6B",
      x: 230,
      width: 148,
      group: "header",
      step: 2,
      detailZh: "下一跳接收方",
      detailEn: "Next-hop receiver",
    },
    {
      id: "src",
      label: "Source MAC",
      bytes: "6B",
      x: 378,
      width: 132,
      group: "header",
      step: 2,
      detailZh: "本帧发送方",
      detailEn: "Frame sender",
    },
    {
      id: "vlan",
      label: "802.1Q Tag",
      bytes: "4B",
      x: 510,
      width: 112,
      group: "vlan",
      step: 3,
      detailZh: "可选 VLAN ID",
      detailEn: "Optional VLAN ID",
    },
    {
      id: "type",
      label: "Type / Length",
      bytes: "2B",
      x: 622,
      width: 116,
      group: "type",
      step: 4,
      detailZh: "0x0800 / 0x0806",
      detailEn: "0x0800 / 0x0806",
    },
    {
      id: "payload",
      label: "Payload + Pad",
      bytes: "46-1500B",
      x: 738,
      width: 270,
      group: "payload",
      step: 4,
      detailZh: "IP / ARP / IPv6",
      detailEn: "IP / ARP / IPv6",
    },
    {
      id: "fcs",
      label: "FCS",
      bytes: "4B",
      x: 1008,
      width: 92,
      group: "fcs",
      step: 5,
      detailZh: "CRC 校验",
      detailEn: "CRC check",
    },
  ];
  const groupBands = [
    {
      id: "sync",
      labelZh: "同步",
      labelEn: "Sync",
      x: 54,
      width: 176,
      step: 1,
    },
    {
      id: "header",
      labelZh: "帧头",
      labelEn: "Header",
      x: 230,
      width: 392,
      step: 2,
    },
    {
      id: "data",
      labelZh: "数据",
      labelEn: "Data",
      x: 622,
      width: 386,
      step: 4,
    },
    {
      id: "trailer",
      labelZh: "尾部",
      labelEn: "Trailer",
      x: 1008,
      width: 92,
      step: 5,
    },
  ];
  const callouts = [
    {
      step: 1,
      x: 142,
      y: 156,
      width: 236,
      titleZh: "Preamble + SFD",
      titleEn: "Preamble + SFD",
      bodyZh: "接收端识别帧起始",
      bodyEn: "Receiver finds frame start",
      anchorX: 146,
    },
    {
      step: 2,
      x: 388,
      y: 156,
      width: 238,
      titleZh: "MAC 地址",
      titleEn: "MAC addresses",
      bodyZh: "交换机按目的 MAC 转发",
      bodyEn: "Switch forwards by destination MAC",
      anchorX: 378,
    },
    {
      step: 3,
      x: 566,
      y: 390,
      width: 240,
      titleZh: "802.1Q 插入点",
      titleEn: "802.1Q insertion",
      bodyZh: "Tag 位于源 MAC 与 Type 之间",
      bodyEn: "Tag sits between source MAC and Type",
      anchorX: 566,
    },
    {
      step: 4,
      x: 824,
      y: 156,
      width: 260,
      titleZh: "Type/Length + Payload",
      titleEn: "Type/Length + Payload",
      bodyZh: "决定交给 IPv4、IPv6 或 ARP",
      bodyEn: "Dispatches to IPv4, IPv6, or ARP",
      anchorX: 808,
    },
    {
      step: 5,
      x: 1000,
      y: 390,
      width: 226,
      titleZh: "FCS 校验",
      titleEn: "FCS check",
      bodyZh: "校验失败计入 CRC/FCS 错误",
      bodyEn: "Failures appear as CRC/FCS errors",
      anchorX: 1054,
    },
  ];
  const visibleCallouts = callouts.filter((item) => item.step <= completedSteps);

  return (
    <div className="visual-stage ethernet-frame-stage">
      <div className="tcp-handshake-card ethernet-frame-card">
        <svg
          className="ethernet-frame-diagram"
          viewBox="0 0 1160 560"
          role="img"
          aria-label={readLocalizedText(simulation.title, locale)}
        >
          <defs>
            <marker
              id="ethernet-arrow-brand"
              viewBox="0 0 10 10"
              refX="8.5"
              refY="5"
              markerWidth="8"
              markerHeight="8"
              orient="auto"
            >
              <path d="M 0 0 L 10 5 L 0 10 z" />
            </marker>
            <filter id="ethernet-soft-shadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="10" stdDeviation="10" floodColor="#172033" floodOpacity="0.13" />
            </filter>
          </defs>

          <rect className="ethernet-frame-bg" x="28" y="24" width="1104" height="500" rx="28" />
          <text className="tcp-title ethernet-frame-title" x="580" y="70">
            {readLocalizedText(simulation.title, locale)}
          </text>
          <text className="tcp-subtitle ethernet-frame-subtitle" x="580" y="99">
            Preamble / MAC / 802.1Q / Type / Payload / FCS
          </text>

          <g className="ethernet-frame-groups">
            {groupBands.map((band) => {
              const active = completedSteps >= band.step;

              return (
                <g
                  key={band.id}
                  className={`ethernet-group-band ${band.id} ${active ? "active" : ""}`}
                >
                  <rect x={band.x} y="270" width={band.width} height="58" rx="14" />
                  <text x={band.x + band.width / 2} y="305">
                    {locale === "zh" ? band.labelZh : band.labelEn}
                  </text>
                </g>
              );
            })}
          </g>

          <g className="ethernet-frame-fields">
            {fields.map((field) => {
              const active = completedSteps >= field.step;
              const current = completedSteps === field.step;

              return (
                <g
                  key={field.id}
                  className={`ethernet-field ${field.group} ${active ? "active" : ""} ${
                    current ? "current" : ""
                  }`}
                >
                  <rect x={field.x} y="190" width={field.width} height="86" rx="14" />
                  <text className="ethernet-field-label" x={field.x + field.width / 2} y="220">
                    {field.label}
                  </text>
                  <text className="ethernet-field-bytes" x={field.x + field.width / 2} y="248">
                    {field.bytes}
                  </text>
                  <text className="ethernet-field-detail" x={field.x + field.width / 2} y="265">
                    {locale === "zh" ? field.detailZh : field.detailEn}
                  </text>
                </g>
              );
            })}
          </g>

          {completedSteps >= 3 && (
            <g className="ethernet-vlan-insert active">
              <path d="M 510 178 L 510 146 L 622 146 L 622 178" />
              <rect x="501" y="122" width="130" height="30" rx="15" />
              <text x="566" y="142">TPID + TCI</text>
            </g>
          )}

          {completedSteps >= 4 && (
            <g className="ethernet-dispatch active">
              <path d="M 680 180 C 690 142 735 126 790 126" />
              <path d="M 872 180 C 892 142 932 126 990 126" />
              <rect x="780" y="108" width="226" height="36" rx="18" />
              <text x="893" y="131">
                {locale === "zh" ? "IPv4 / IPv6 / ARP 分发" : "IPv4 / IPv6 / ARP dispatch"}
              </text>
            </g>
          )}

          {completedSteps >= 5 && (
            <g className="ethernet-fcs-loop active">
              <path d="M 1054 282 C 1054 454 356 454 140 340" markerEnd="url(#ethernet-arrow-brand)" />
              <rect x="384" y="430" width="392" height="42" rx="21" />
              <text x="580" y="456">
                {locale === "zh" ? "接收端校验整帧，成功后交付上层" : "Receiver checks the frame, then delivers upward"}
              </text>
            </g>
          )}

          {visibleCallouts.map((item) => (
            <g key={item.titleEn} className={`ethernet-callout step-${item.step}`}>
              <path d={`M ${item.anchorX} 190 L ${item.x} ${item.y + 34}`} />
              <rect x={item.x - item.width / 2} y={item.y} width={item.width} height="68" rx="16" />
              <text className="ethernet-callout-title" x={item.x} y={item.y + 27}>
                {locale === "zh" ? item.titleZh : item.titleEn}
              </text>
              <text className="ethernet-callout-body" x={item.x} y={item.y + 49}>
                {locale === "zh" ? item.bodyZh : item.bodyEn}
              </text>
            </g>
          ))}

          <g className="ethernet-size-note">
            <rect x="66" y="352" width="324" height="86" rx="20" />
            <text x="92" y="382">{locale === "zh" ? "典型数据载荷" : "Typical data payload"}</text>
            <text x="92" y="410">46 - 1500 bytes</text>
            <text x="92" y="430">{locale === "zh" ? "短载荷填充，大载荷受 MTU 约束" : "Short payloads pad; large payloads meet MTU"}</text>
          </g>

          <g className="ethernet-reference-note">
            <rect x="744" y="352" width="326" height="86" rx="20" />
            <text x="770" y="382">{locale === "zh" ? "抓包观察点" : "Packet-inspection points"}</text>
            <text x="770" y="410">{locale === "zh" ? "MAC / VLAN / EtherType / Length" : "MAC / VLAN / EtherType / Length"}</text>
            <text x="770" y="430">{locale === "zh" ? "端口计数器看 CRC/FCS 错误" : "Port counters reveal CRC/FCS errors"}</text>
          </g>
        </svg>
        <div className="tcp-handshake-caption ethernet-frame-caption">
          <strong>{readLocalizedText(activeStep.title, locale)}</strong>
          <span>{completedSteps}/{simulation.steps.length}</span>
        </div>
      </div>
    </div>
  );
}

function TcpHandshakeStage({
  simulation,
  locale,
  completedSteps,
  activeStepIndex,
}: {
  simulation: VisualSimulation;
  locale: Locale;
  completedSteps: number;
  activeStepIndex: number;
}) {
  const activeStep = simulation.steps[activeStepIndex];
  const clientStates = ["CLOSED", "SYN-SENT", "ESTABLISHED"];
  const serverStates = ["LISTEN", "SYN-RCVD", "ESTABLISHED"];
  const clientStateIndex = completedSteps >= 3 ? 2 : completedSteps >= 1 ? 1 : 0;
  const serverStateIndex = completedSteps >= 3 ? 2 : completedSteps >= 1 ? 1 : 0;
  const sequenceRows = [
    {
      fromX: 194,
      fromY: 198,
      toX: 706,
      toY: 272,
      labelX: 450,
      labelY: 217,
      stateX: 176,
      stateY: 235,
      state: "SYN-SENT",
    },
    {
      fromX: 706,
      fromY: 322,
      toX: 194,
      toY: 396,
      labelX: 450,
      labelY: 343,
      stateX: 724,
      stateY: 352,
      state: "SYN-RCVD",
    },
    {
      fromX: 194,
      fromY: 446,
      toX: 706,
      toY: 520,
      labelX: 450,
      labelY: 467,
      stateX: 176,
      stateY: 500,
      state: "ESTABLISHED",
    },
  ];

  return (
    <div className="visual-stage tcp-handshake-stage">
      <div className="tcp-handshake-card">
        <svg
          className="tcp-handshake-diagram"
          viewBox="0 0 900 620"
          role="img"
          aria-label={readLocalizedText(simulation.title, locale)}
        >
          <defs>
            <marker
              id="tcp-arrow-blue"
              viewBox="0 0 10 10"
              refX="8.5"
              refY="5"
              markerWidth="8"
              markerHeight="8"
              orient="auto"
            >
              <path d="M 0 0 L 10 5 L 0 10 z" />
            </marker>
            <marker
              id="tcp-arrow-green"
              viewBox="0 0 10 10"
              refX="8.5"
              refY="5"
              markerWidth="8"
              markerHeight="8"
              orient="auto"
            >
              <path d="M 0 0 L 10 5 L 0 10 z" />
            </marker>
            <marker
              id="tcp-arrow-muted"
              viewBox="0 0 10 10"
              refX="8.5"
              refY="5"
              markerWidth="8"
              markerHeight="8"
              orient="auto"
            >
              <path d="M 0 0 L 10 5 L 0 10 z" />
            </marker>
            <filter id="tcp-soft-shadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="8" stdDeviation="8" floodColor="#172033" floodOpacity="0.14" />
            </filter>
          </defs>

          <rect className="tcp-bg-panel" x="34" y="28" width="832" height="548" rx="30" />
          <text className="tcp-title" x="450" y="72">
            {readLocalizedText(simulation.title, locale)}
          </text>
          <text className="tcp-subtitle" x="450" y="101">
            SYN / SYN-ACK / ACK
          </text>

          <g className="tcp-endpoint client">
            <rect x="74" y="122" width="152" height="72" rx="18" />
            <text x="150" y="152">{locale === "zh" ? "客户端" : "Client"}</text>
            <text x="150" y="176">{locale === "zh" ? "主动打开" : "Active open"}</text>
          </g>
          <g className="tcp-endpoint server">
            <rect x="674" y="122" width="152" height="72" rx="18" />
            <text x="750" y="152">{locale === "zh" ? "服务器" : "Server"}</text>
            <text x="750" y="176">{locale === "zh" ? "监听端口" : "Listening"}</text>
          </g>

          <line className="tcp-lifeline" x1="150" y1="206" x2="150" y2="538" />
          <line className="tcp-lifeline" x1="750" y1="206" x2="750" y2="538" />

          {clientStates.map((state, index) => (
            <g
              className={`tcp-state-pill ${index <= clientStateIndex ? "active" : ""}`}
              key={`client-${state}`}
            >
              <rect x="66" y={214 + index * 132} width="168" height="42" rx="21" />
              <text x="150" y={241 + index * 132}>{state}</text>
            </g>
          ))}
          {serverStates.map((state, index) => (
            <g
              className={`tcp-state-pill ${index <= serverStateIndex ? "active" : ""}`}
              key={`server-${state}`}
            >
              <rect x="666" y={214 + index * 132} width="168" height="42" rx="21" />
              <text x="750" y={241 + index * 132}>{state}</text>
            </g>
          ))}

          {simulation.steps.map((stepItem, index) => {
            const row = sequenceRows[index];
            const isReturn = row.fromX > row.toX;
            const revealed = index < completedSteps;
            const marker = revealed
              ? index === 2
                ? "tcp-arrow-green"
                : "tcp-arrow-blue"
              : "tcp-arrow-muted";

            return (
              <g
                className={`tcp-segment ${isReturn ? "return" : ""} ${
                  revealed ? "revealed" : "pending"
                } ${
                  index === completedSteps - 1 ? "active" : ""
                }`}
                key={readLocalizedText(stepItem.label, locale)}
              >
                <line
                  x1={row.fromX}
                  y1={row.fromY}
                  x2={row.toX}
                  y2={row.toY}
                  markerEnd={`url(#${marker})`}
                />
                <rect x={row.labelX - 156} y={row.labelY - 30} width="312" height="56" rx="16" />
                <text className="tcp-segment-title" x={row.labelX} y={row.labelY - 7}>
                  {readLocalizedText(stepItem.title, locale)}
                </text>
                <text className="tcp-segment-label" x={row.labelX} y={row.labelY + 15}>
                  {readLocalizedText(stepItem.label, locale)}
                </text>
              </g>
            );
          })}

          {completedSteps >= simulation.steps.length && (
            <g className="tcp-established-flow">
              <line x1="260" y1="552" x2="640" y2="552" markerEnd="url(#tcp-arrow-green)" />
              <text x="450" y="539">{locale === "zh" ? "应用数据开始双向传输" : "Application data can flow"}</text>
            </g>
          )}
        </svg>
        <div className="tcp-handshake-caption">
          <strong>{readLocalizedText(activeStep.title, locale)}</strong>
          <span>{completedSteps}/{simulation.steps.length}</span>
        </div>
      </div>
    </div>
  );
}

function CdnRequestStage({
  simulation,
  locale,
  completedSteps,
  activeStepIndex,
}: {
  simulation: VisualSimulation;
  locale: Locale;
  completedSteps: number;
  activeStepIndex: number;
}) {
  const activeStep = simulation.steps[activeStepIndex];
  const label = (zh: string, en: string) => (locale === "zh" ? zh : en);
  const regions = [
    { name: "Tokyo", x: 158, y: 148, latency: "38 ms", active: completedSteps >= 1 },
    { name: "Frankfurt", x: 136, y: 234, latency: "52 ms", active: completedSteps >= 1 },
    { name: "Virginia", x: 180, y: 320, latency: "71 ms", active: completedSteps >= 1 },
  ];
  const cacheStatuses = [
    { label: "HIT", value: completedSteps >= 3 ? "edge" : "--", tone: "success", active: completedSteps >= 3 },
    { label: "EXPIRED", value: completedSteps >= 4 ? "ETag" : "--", tone: "warning", active: completedSteps >= 4 },
    { label: "MISS", value: completedSteps >= 5 ? "shield" : "--", tone: "teal", active: completedSteps >= 5 },
    { label: "BYPASS", value: completedSteps >= 6 ? "api" : "--", tone: "danger", active: completedSteps >= 6 },
  ];
  const controls = [
    { name: "max-age", value: "300s", fill: 0.58, active: completedSteps >= 2 },
    { name: "s-maxage", value: "1h", fill: 0.78, active: completedSteps >= 2 },
    { name: "stale-while-revalidate", value: "30s", fill: 0.42, active: completedSteps >= 4 },
    { name: "Vary", value: "Accept-Encoding", fill: 0.66, active: completedSteps >= 2 },
    { name: "Purge", value: completedSteps >= 6 ? "v42 -> v43" : "idle", fill: completedSteps >= 6 ? 0.9 : 0.18, active: completedSteps >= 6 },
  ];
  const metricRows = [
    { name: label("边缘 TTFB", "Edge TTFB"), value: completedSteps >= 3 ? "42 ms" : "--", active: completedSteps >= 3 },
    { name: label("缓存状态", "Cache status"), value: completedSteps >= 5 ? "MISS -> HIT" : completedSteps >= 3 ? "HIT" : "--", active: completedSteps >= 3 },
    { name: label("命中率", "Hit ratio"), value: completedSteps >= 6 ? "91%" : "--", active: completedSteps >= 6 },
    { name: label("回源请求", "Origin requests"), value: completedSteps >= 5 ? "-68%" : "--", active: completedSteps >= 5 },
    { name: label("新鲜度", "Freshness"), value: completedSteps >= 4 ? "ETag 304" : "--", active: completedSteps >= 4 },
  ];
  const requestPath = [
    { id: "route", d: "M 250 232 C 310 150, 382 132, 448 184", marker: "brand", active: completedSteps >= 1 },
    { id: "key", d: "M 560 214 C 594 228, 608 248, 620 282", marker: "teal", active: completedSteps >= 2 },
    { id: "hit", d: "M 452 278 C 352 338, 292 330, 226 270", marker: "success", active: completedSteps >= 3 },
    { id: "revalidate", d: "M 602 338 C 660 362, 704 360, 762 330", marker: "warning", active: completedSteps >= 4 },
    { id: "miss", d: "M 818 312 C 884 280, 928 250, 974 204", marker: "teal", active: completedSteps >= 5 },
    { id: "fill", d: "M 974 244 C 914 402, 728 422, 580 356", marker: "success", active: completedSteps >= 5 },
  ];

  return (
    <div className="visual-stage cdn-stage">
      <div className="tcp-handshake-card cdn-card">
        <svg
          className="cdn-diagram"
          viewBox="0 0 1120 650"
          role="img"
          aria-label={readLocalizedText(simulation.title, locale)}
        >
          <defs>
            {[
              ["cdn-arrow-brand", "var(--brand)"],
              ["cdn-arrow-teal", "var(--tertiary)"],
              ["cdn-arrow-success", "var(--success)"],
              ["cdn-arrow-warning", "#f59e0b"],
              ["cdn-arrow-danger", "var(--danger)"],
            ].map(([id, fill]) => (
              <marker
                key={id}
                id={id}
                viewBox="0 0 10 10"
                refX="8.5"
                refY="5"
                markerWidth="8"
                markerHeight="8"
                orient="auto"
              >
                <path d="M 0 0 L 10 5 L 0 10 z" fill={fill} />
              </marker>
            ))}
            <filter id="cdn-soft-shadow" x="-20%" y="-30%" width="140%" height="160%">
              <feDropShadow dx="0" dy="10" stdDeviation="10" floodColor="#172033" floodOpacity="0.14" />
            </filter>
            <linearGradient id="cdn-edge-gradient" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0%" stopColor="var(--brand)" stopOpacity="0.14" />
              <stop offset="54%" stopColor="var(--tertiary)" stopOpacity="0.18" />
              <stop offset="100%" stopColor="var(--success)" stopOpacity="0.13" />
            </linearGradient>
          </defs>

          <rect className="cdn-bg" x="24" y="24" width="1072" height="582" rx="30" />
          <text className="cdn-title" x="560" y="70">
            {readLocalizedText(simulation.title, locale)}
          </text>
          <text className="cdn-subtitle" x="560" y="99">
            {label(
              "用户 -> DNS/Anycast -> 边缘缓存 -> 区域缓存 / Origin Shield -> 源站",
              "User -> DNS / Anycast -> edge cache -> regional cache / Origin Shield -> origin",
            )}
          </text>

          <g className="cdn-users">
            <rect x="70" y="116" width="190" height="248" rx="24" />
            <text className="cdn-panel-title" x="96" y="148">{label("用户地域", "User regions")}</text>
            {regions.map((region) => (
              <g key={region.name} className={`cdn-region ${region.active ? "active" : ""}`}>
                <circle cx={region.x} cy={region.y} r="11" />
                <text x={region.x + 22} y={region.y + 5}>{region.name}</text>
                <text x="228" y={region.y + 5}>{region.latency}</text>
              </g>
            ))}
            <g className={`cdn-asset ${completedSteps >= 1 ? "active" : ""}`}>
              <rect x="96" y="286" width="138" height="48" rx="15" />
              <text x="165" y="306">/assets/app.js</text>
              <text x="165" y="324">v42 · 118 KB</text>
            </g>
          </g>

          <g className={`cdn-routing ${completedSteps >= 1 ? "active" : ""}`}>
            <rect x="410" y="132" width="184" height="108" rx="24" />
            <text className="cdn-node-title" x="502" y="166">{label("DNS / Anycast", "DNS / Anycast")}</text>
            <text x="502" y="194">{label("低 RTT 边缘", "low-RTT edge")}</text>
            <text x="502" y="216">CNAME cdn.example</text>
          </g>

          <g className={`cdn-edge ${completedSteps >= 2 ? "active" : ""}`}>
            <rect x="400" y="282" width="230" height="142" rx="28" />
            <text className="cdn-node-title" x="515" y="316">{label("边缘缓存 PoP", "Edge cache PoP")}</text>
            <text x="515" y="344">key: host + path + vary</text>
            <text x="515" y="370">{completedSteps >= 3 ? "CF-Cache-Status: HIT" : "lookup pending"}</text>
            <text x="515" y="396">{completedSteps >= 4 ? "ETag: \"v42\" / 304" : "TTL: s-maxage=3600"}</text>
          </g>

          <g className={`cdn-shield ${completedSteps >= 4 ? "active" : ""}`}>
            <rect x="732" y="278" width="182" height="140" rx="26" />
            <text className="cdn-node-title" x="823" y="314">{label("区域缓存", "Regional cache")}</text>
            <text x="823" y="342">Origin Shield</text>
            <text x="823" y="368">{completedSteps >= 5 ? "coalesced MISS" : "conditional GET"}</text>
            <text x="823" y="394">If-None-Match</text>
          </g>

          <g className={`cdn-origin ${completedSteps >= 5 ? "active" : ""}`}>
            <rect x="944" y="144" width="126" height="132" rx="26" />
            <text className="cdn-node-title" x="1007" y="180">{label("源站", "Origin")}</text>
            <text x="1007" y="210">v42</text>
            <text x="1007" y="236">{completedSteps >= 6 ? label("回源 -68%", "origin -68%") : "200 OK"}</text>
          </g>

          <g className="cdn-paths">
            {requestPath.map((path) => (
              <path
                key={path.id}
                className={`cdn-path ${path.marker} ${path.active ? "active" : ""}`}
                d={path.d}
                markerEnd={`url(#cdn-arrow-${path.marker})`}
              />
            ))}
          </g>

          <g className="cdn-status-panel">
            <rect x="70" y="402" width="300" height="146" rx="22" />
            <text className="cdn-panel-title" x="96" y="434">{label("缓存状态分支", "Cache status branches")}</text>
            {cacheStatuses.map((status, index) => (
              <g key={status.label} className={`cdn-status ${status.tone} ${status.active ? "active" : ""}`}>
                <rect x={96 + (index % 2) * 132} y={456 + Math.floor(index / 2) * 42} width="112" height="30" rx="15" />
                <text x={116 + (index % 2) * 132} y={476 + Math.floor(index / 2) * 42}>{status.label}</text>
                <text x={198 + (index % 2) * 132} y={476 + Math.floor(index / 2) * 42}>{status.value}</text>
              </g>
            ))}
          </g>

          <g className="cdn-control-panel">
            <rect x="400" y="454" width="304" height="116" rx="22" />
            <text className="cdn-panel-title" x="426" y="486">{label("缓存控制", "Cache controls")}</text>
            {controls.map((control, index) => {
              const y = 510 + index * 18;
              return (
                <g key={control.name} className={`cdn-control ${control.active ? "active" : ""}`}>
                  <text x="426" y={y + 5}>{control.name}</text>
                  <rect x="558" y={y - 4} width="74" height="7" rx="4" />
                  <rect x="558" y={y - 4} width={74 * control.fill} height="7" rx="4" />
                  <text x="670" y={y + 5}>{control.value}</text>
                </g>
              );
            })}
          </g>

          <g className="cdn-metrics-panel">
            <rect x="732" y="454" width="338" height="116" rx="22" />
            <text className="cdn-panel-title" x="758" y="486">{label("观测指标", "Observed metrics")}</text>
            {metricRows.map((metric, index) => (
              <g key={metric.name} className={`cdn-metric ${metric.active ? "active" : ""}`}>
                <text x={758 + (index % 2) * 164} y={514 + Math.floor(index / 2) * 24}>{metric.name}</text>
                <text x={878 + (index % 2) * 164} y={514 + Math.floor(index / 2) * 24}>{metric.value}</text>
              </g>
            ))}
          </g>

          <g className={`cdn-purge-band ${completedSteps >= 6 ? "active" : ""}`}>
            <rect x="882" y="102" width="166" height="34" rx="17" />
            <text x="965" y="124">{label("Purge / versioned URL", "Purge / versioned URL")}</text>
          </g>
        </svg>
        <div className="tcp-handshake-caption cdn-caption">
          <strong>{readLocalizedText(activeStep.title, locale)}</strong>
          <span>{completedSteps}/{simulation.steps.length}</span>
        </div>
      </div>
    </div>
  );
}

function TcpWaveStage({
  simulation,
  locale,
  completedSteps,
  activeStepIndex,
}: {
  simulation: VisualSimulation;
  locale: Locale;
  completedSteps: number;
  activeStepIndex: number;
}) {
  const activeStep = simulation.steps[activeStepIndex];
  const clientStates = ["ESTABLISHED", "FIN-WAIT-1", "FIN-WAIT-2", "TIME-WAIT", "CLOSED"];
  const serverStates = ["ESTABLISHED", "CLOSE-WAIT", "LAST-ACK", "CLOSED"];
  const clientStateIndex = completedSteps >= 4 ? 3 : completedSteps >= 2 ? 2 : completedSteps >= 1 ? 1 : 0;
  const serverStateIndex = completedSteps >= 4 ? 3 : completedSteps >= 3 ? 2 : completedSteps >= 2 ? 1 : 0;
  const sequenceRows = [
    {
      fromX: 194,
      fromY: 170,
      toX: 706,
      toY: 230,
      labelX: 450,
      labelY: 188,
      markerTone: "blue",
    },
    {
      fromX: 706,
      fromY: 270,
      toX: 194,
      toY: 330,
      labelX: 450,
      labelY: 289,
      markerTone: "blue",
    },
    {
      fromX: 706,
      fromY: 370,
      toX: 194,
      toY: 430,
      labelX: 450,
      labelY: 389,
      markerTone: "orange",
    },
    {
      fromX: 194,
      fromY: 470,
      toX: 706,
      toY: 530,
      labelX: 450,
      labelY: 489,
      markerTone: "green",
    },
  ];

  return (
    <div className="visual-stage tcp-handshake-stage">
      <div className="tcp-handshake-card tcp-wave-card">
        <svg
          className="tcp-handshake-diagram tcp-wave-diagram"
          viewBox="0 0 900 620"
          role="img"
          aria-label={readLocalizedText(simulation.title, locale)}
        >
          <defs>
            <marker
              id="tcp-wave-arrow-blue"
              viewBox="0 0 10 10"
              refX="8.5"
              refY="5"
              markerWidth="8"
              markerHeight="8"
              orient="auto"
            >
              <path d="M 0 0 L 10 5 L 0 10 z" />
            </marker>
            <marker
              id="tcp-wave-arrow-green"
              viewBox="0 0 10 10"
              refX="8.5"
              refY="5"
              markerWidth="8"
              markerHeight="8"
              orient="auto"
            >
              <path d="M 0 0 L 10 5 L 0 10 z" />
            </marker>
            <marker
              id="tcp-wave-arrow-orange"
              viewBox="0 0 10 10"
              refX="8.5"
              refY="5"
              markerWidth="8"
              markerHeight="8"
              orient="auto"
            >
              <path d="M 0 0 L 10 5 L 0 10 z" />
            </marker>
            <marker
              id="tcp-wave-arrow-muted"
              viewBox="0 0 10 10"
              refX="8.5"
              refY="5"
              markerWidth="8"
              markerHeight="8"
              orient="auto"
            >
              <path d="M 0 0 L 10 5 L 0 10 z" />
            </marker>
            <filter id="tcp-wave-soft-shadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="8" stdDeviation="8" floodColor="#172033" floodOpacity="0.14" />
            </filter>
          </defs>

          <rect className="tcp-bg-panel" x="34" y="28" width="832" height="556" rx="30" />
          <text className="tcp-title" x="450" y="72">
            {readLocalizedText(simulation.title, locale)}
          </text>
          <text className="tcp-subtitle" x="450" y="101">
            FIN / ACK / FIN / ACK
          </text>

          <g className="tcp-endpoint client">
            <rect x="74" y="122" width="152" height="72" rx="18" />
            <text x="150" y="152">{locale === "zh" ? "主动关闭方" : "Active closer"}</text>
            <text x="150" y="176">{locale === "zh" ? "先发 FIN" : "Sends first FIN"}</text>
          </g>
          <g className="tcp-endpoint server">
            <rect x="674" y="122" width="152" height="72" rx="18" />
            <text x="750" y="152">{locale === "zh" ? "被动关闭方" : "Passive closer"}</text>
            <text x="750" y="176">{locale === "zh" ? "等待应用关闭" : "Waits for app"}</text>
          </g>

          <line className="tcp-lifeline" x1="150" y1="206" x2="150" y2="558" />
          <line className="tcp-lifeline" x1="750" y1="206" x2="750" y2="558" />

          {clientStates.map((state, index) => (
            <g
              className={`tcp-state-pill tcp-wave-state ${index <= clientStateIndex ? "active" : ""}`}
              key={`wave-client-${state}`}
            >
              <rect x="54" y={210 + index * 75} width="192" height="40" rx="20" />
              <text x="150" y={236 + index * 75}>{state}</text>
            </g>
          ))}
          {serverStates.map((state, index) => (
            <g
              className={`tcp-state-pill tcp-wave-state ${
                index <= serverStateIndex ? "active" : ""
              }`}
              key={`wave-server-${state}`}
            >
              <rect x="654" y={210 + index * 92} width="192" height="40" rx="20" />
              <text x="750" y={236 + index * 92}>{state}</text>
            </g>
          ))}

          <g className="tcp-half-close-band">
            <rect x="280" y="316" width="340" height="44" rx="22" />
            <text x="450" y="344">
              {locale === "zh" ? "半关闭：被动方仍可发送剩余数据" : "Half-close: passive side may still send"}
            </text>
          </g>

          {simulation.steps.map((stepItem, index) => {
            const row = sequenceRows[index];
            const isReturn = row.fromX > row.toX;
            const revealed = index < completedSteps;
            const marker = revealed ? `tcp-wave-arrow-${row.markerTone}` : "tcp-wave-arrow-muted";

            return (
              <g
                className={`tcp-segment tcp-wave-segment ${isReturn ? "return" : ""} ${
                  revealed ? "revealed" : "pending"
                } ${
                  index === completedSteps - 1 ? "active" : ""
                } tone-${row.markerTone}`}
                key={readLocalizedText(stepItem.label, locale)}
              >
                <line
                  x1={row.fromX}
                  y1={row.fromY}
                  x2={row.toX}
                  y2={row.toY}
                  markerEnd={`url(#${marker})`}
                />
                <rect x={row.labelX - 158} y={row.labelY - 30} width="316" height="56" rx="16" />
                <text className="tcp-segment-title" x={row.labelX} y={row.labelY - 7}>
                  {readLocalizedText(stepItem.title, locale)}
                </text>
                <text className="tcp-segment-label" x={row.labelX} y={row.labelY + 15}>
                  {readLocalizedText(stepItem.label, locale)}
                </text>
              </g>
            );
          })}

          {completedSteps >= simulation.steps.length && (
            <g className="tcp-timewait-note compact">
              <rect x="58" y="478" width="184" height="28" rx="14" />
              <text x="150" y="497">{locale === "zh" ? "2MSL 后进入 CLOSED" : "CLOSED after 2MSL"}</text>
            </g>
          )}
        </svg>
        <div className="tcp-handshake-caption">
          <strong>{readLocalizedText(activeStep.title, locale)}</strong>
          <span>{completedSteps}/{simulation.steps.length}</span>
        </div>
      </div>
    </div>
  );
}

function TcpStateMachineStage({
  simulation,
  locale,
  completedSteps,
  activeStepIndex,
}: {
  simulation: VisualSimulation;
  locale: Locale;
  completedSteps: number;
  activeStepIndex: number;
}) {
  const activeStep = simulation.steps[activeStepIndex];
  const nodes = [
    { id: "closed-start", label: "CLOSED", x: 500, y: 126, width: 150, step: 0, tone: "closed" },
    { id: "listen", label: "LISTEN", x: 215, y: 218, width: 150, step: 1, tone: "setup" },
    { id: "syn-sent", label: "SYN-SENT", x: 785, y: 218, width: 164, step: 2, tone: "setup" },
    { id: "syn-rcvd", label: "SYN-RECEIVED", x: 500, y: 278, width: 186, step: 2, tone: "setup" },
    { id: "established", label: "ESTABLISHED", x: 500, y: 365, width: 178, step: 3, tone: "data" },
    { id: "fin-wait-1", label: "FIN-WAIT-1", x: 245, y: 465, width: 166, step: 4, tone: "active" },
    { id: "fin-wait-2", label: "FIN-WAIT-2", x: 245, y: 545, width: 166, step: 4, tone: "active" },
    { id: "close-wait", label: "CLOSE-WAIT", x: 755, y: 465, width: 166, step: 4, tone: "passive" },
    { id: "closing", label: "CLOSING", x: 500, y: 545, width: 146, step: 5, tone: "special" },
    { id: "last-ack", label: "LAST-ACK", x: 755, y: 545, width: 154, step: 5, tone: "passive" },
    { id: "time-wait", label: "TIME-WAIT", x: 500, y: 625, width: 166, step: 5, tone: "active" },
    { id: "closed-end", label: "CLOSED", x: 500, y: 682, width: 150, step: 6, tone: "closed" },
  ];
  const edges = [
    { id: "closed-listen", path: "M 437 143 C 348 148 260 166 218 194", label: "passive OPEN", x: 312, y: 160, step: 1, tone: "blue" },
    { id: "closed-syn", path: "M 563 143 C 648 148 724 166 784 194", label: "active OPEN / SYN", x: 688, y: 160, step: 2, tone: "blue" },
    { id: "listen-synrcvd", path: "M 284 224 C 350 234 390 252 414 270", label: "rcv SYN / SYN+ACK", x: 340, y: 233, step: 2, tone: "blue" },
    { id: "syn-sent-synrcvd", path: "M 704 224 C 640 235 590 252 586 270", label: "simultaneous SYN", x: 650, y: 233, step: 2, tone: "muted", dashed: true },
    { id: "synrcvd-estab", path: "M 500 301 L 500 340", label: "rcv ACK", x: 570, y: 326, step: 3, tone: "green" },
    { id: "synsent-estab", path: "M 790 241 C 705 290 620 325 574 355", label: "SYN+ACK / ACK", x: 674, y: 300, step: 3, tone: "green" },
    { id: "estab-finwait", path: "M 423 375 C 350 405 286 438 245 442", label: "close / FIN", x: 336, y: 411, step: 4, tone: "orange" },
    { id: "estab-closewait", path: "M 577 375 C 650 405 712 438 755 442", label: "rcv FIN / ACK", x: 664, y: 411, step: 4, tone: "teal" },
    { id: "finwait1-finwait2", path: "M 245 488 L 245 522", label: "rcv ACK", x: 150, y: 510, step: 4, tone: "orange" },
    { id: "closewait-lastack", path: "M 755 488 L 755 522", label: "close / FIN", x: 852, y: 510, step: 5, tone: "teal" },
    { id: "finwait1-closing", path: "M 316 475 C 380 495 426 525 456 535", label: "simultaneous FIN", x: 382, y: 505, step: 5, tone: "muted", dashed: true },
    { id: "closing-timewait", path: "M 500 568 L 500 602", label: "ACK of FIN", x: 584, y: 590, step: 5, tone: "orange" },
    { id: "finwait2-timewait", path: "M 316 556 C 385 577 428 607 456 616", label: "rcv FIN / ACK", x: 350, y: 590, step: 5, tone: "orange" },
    { id: "lastack-closed", path: "M 716 556 C 650 595 592 635 555 660", label: "rcv ACK", x: 666, y: 626, step: 6, tone: "green" },
    { id: "timewait-closed", path: "M 500 648 L 500 659", label: "2MSL timeout", x: 610, y: 655, step: 6, tone: "green" },
  ];
  return (
    <div className="visual-stage tcp-handshake-stage tcp-state-machine-stage">
      <div className="tcp-handshake-card tcp-state-machine-card">
        <svg
          className="tcp-handshake-diagram tcp-state-machine-diagram"
          viewBox="0 0 1000 730"
          role="img"
          aria-label={readLocalizedText(simulation.title, locale)}
        >
          <defs>
            {[
              ["blue", "var(--brand)"],
              ["teal", "var(--tertiary)"],
              ["green", "var(--success)"],
              ["orange", "#f59e0b"],
              ["muted", "color-mix(in srgb, var(--muted) 55%, transparent)"],
            ].map(([tone, fill]) => (
              <marker
                key={tone}
                id={`tcp-fsm-arrow-${tone}`}
                viewBox="0 0 10 10"
                refX="8.5"
                refY="5"
                markerWidth="8"
                markerHeight="8"
                orient="auto"
              >
                <path d="M 0 0 L 10 5 L 0 10 z" fill={fill} />
              </marker>
            ))}
            <filter id="tcp-fsm-soft-shadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="8" stdDeviation="9" floodColor="#172033" floodOpacity="0.13" />
            </filter>
          </defs>

          <rect className="tcp-bg-panel tcp-fsm-bg-panel" x="28" y="24" width="944" height="686" rx="30" />
          <text className="tcp-title" x="500" y="68">
            {readLocalizedText(simulation.title, locale)}
          </text>
          <text className="tcp-subtitle" x="500" y="96">
            OPEN / SYN / ACK / FIN / CLOSE / TIMEOUT
          </text>

          <g className="tcp-fsm-band setup">
            <rect x="72" y="156" width="856" height="146" rx="26" />
            <text x="112" y="184">{locale === "zh" ? "建立连接" : "Connection setup"}</text>
          </g>
          <g className="tcp-fsm-band transfer">
            <rect x="72" y="322" width="856" height="82" rx="26" />
            <text x="112" y="351">{locale === "zh" ? "数据传输" : "Data transfer"}</text>
          </g>
          <g className="tcp-fsm-band teardown">
            <rect x="72" y="420" width="856" height="282" rx="26" />
            <text x="112" y="448">{locale === "zh" ? "释放连接" : "Connection release"}</text>
          </g>

          {edges.map((edge) => {
            const revealed = completedSteps >= edge.step;
            const markerTone = revealed && edge.tone !== "muted" ? edge.tone : "muted";

            return (
              <g
                key={edge.id}
                className={`tcp-fsm-edge tone-${edge.tone} ${revealed ? "revealed" : "pending"} ${
                  completedSteps === edge.step ? "current" : ""
                } ${edge.dashed ? "dashed" : ""}`}
              >
                <path d={edge.path} markerEnd={`url(#tcp-fsm-arrow-${markerTone})`} />
                <rect x={edge.x - 64} y={edge.y - 17} width="128" height="28" rx="14" />
                <text x={edge.x} y={edge.y + 2}>{edge.label}</text>
              </g>
            );
          })}

          {nodes.map((node) => {
            const active = node.step === 0 || completedSteps >= node.step;
            const current = node.step > 0 && completedSteps === node.step;

            return (
              <g
                key={node.id}
                className={`tcp-fsm-node tone-${node.tone} ${active ? "active" : ""} ${
                  current ? "current" : ""
                }`}
              >
                <rect
                  x={node.x - node.width / 2}
                  y={node.y - 23}
                  width={node.width}
                  height="46"
                  rx="15"
                />
                <text x={node.x} y={node.y + 6}>{node.label}</text>
              </g>
            );
          })}

        </svg>
        <div className="tcp-handshake-caption tcp-state-machine-caption">
          <strong>{readLocalizedText(activeStep.title, locale)}</strong>
          <span>{completedSteps}/{simulation.steps.length}</span>
        </div>
      </div>
    </div>
  );
}

function SimulationActorCard({
  actor,
  locale,
  state,
}: {
  actor: SimulationActor;
  locale: Locale;
  state: { zh: string; en: string };
}) {
  const Icon = getActorIcon(actor.kind);

  return (
    <div className={`simulation-actor ${actor.kind}`}>
      <div className="simulation-actor-icon">
        <Icon size={28} />
      </div>
      <div>
        <span>{readLocalizedText(actor.label, locale)}</span>
        <small>{readLocalizedText(actor.detail, locale)}</small>
      </div>
      <code>{readLocalizedText(state, locale)}</code>
    </div>
  );
}

function getActorIcon(kind: ActorKind) {
  if (kind === "client") {
    return Laptop;
  }

  if (kind === "server") {
    return Server;
  }

  if (kind === "database") {
    return Database;
  }

  if (kind === "cache") {
    return MemoryStick;
  }

  if (kind === "queue" || kind === "broker") {
    return Rabbit;
  }

  if (kind === "kernel" || kind === "cpu") {
    return Cpu;
  }

  if (kind === "container") {
    return Container;
  }

  if (kind === "cluster") {
    return Boxes;
  }

  if (kind === "agent" || kind === "model") {
    return Bot;
  }

  if (kind === "tool") {
    return GitBranch;
  }

  if (kind === "security") {
    return ShieldCheck;
  }

  if (kind === "storage" || kind === "data") {
    return Database;
  }

  return Network;
}
