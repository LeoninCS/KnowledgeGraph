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
