import { expect, test } from "@playwright/test";
import { copy } from "../src/app/copy";
import { loadKnowledgePoints } from "../src/data/knowledge-points/loaders";
import { categoryIds } from "../src/data/knowledge-points/metadata";
import { knowledgeSources } from "../src/data/knowledge-points/sources";
import { buildVisualSimulation } from "../src/data/visual-simulations";
import { visualPointIds } from "../src/data/visual-simulations/metadata";
import { buildSphereGraphLayout, withFocusedRelations } from "../src/features/knowledge/graph-layout";
import {
  essentialKnowledgeIds,
  findBestSearchMatch,
  findFirstSearchMatch,
  getPointSearchScore,
} from "../src/features/knowledge/knowledge-ui";

test("knowledge categories load with valid relationships and sources", async () => {
  const sourceIds = new Set(Object.keys(knowledgeSources));

  for (const categoryId of categoryIds) {
    const points = await loadKnowledgePoints(categoryId);
    const pointIds = new Set(points.map((point) => point.id));

    expect(points.length, `${categoryId} has points`).toBeGreaterThan(0);

    for (const point of points) {
      expect(point.zh, `${categoryId}/${point.id} zh`).toBeTruthy();
      expect(point.en, `${categoryId}/${point.id} en`).toBeTruthy();
      expect(["easy", "medium", "hard"], `${categoryId}/${point.id} difficulty`).toContain(point.difficulty);

      for (const sourceRef of point.sourceRefs ?? []) {
        expect(sourceIds.has(sourceRef), `${categoryId}/${point.id} source ${sourceRef}`).toBe(true);
      }

      for (const prerequisiteId of point.prerequisites) {
        expect(pointIds.has(prerequisiteId), `${categoryId}/${point.id} prerequisite ${prerequisiteId}`).toBe(true);
      }

      for (const relatedId of point.related) {
        expect(pointIds.has(relatedId), `${categoryId}/${point.id} related ${relatedId}`).toBe(true);
      }
    }
  }
});

test("core and visual point lists reference existing knowledge points", async () => {
  for (const categoryId of categoryIds) {
    const points = await loadKnowledgePoints(categoryId);
    const pointIds = new Set(points.map((point) => point.id));

    for (const id of essentialKnowledgeIds[categoryId]) {
      expect(pointIds.has(id), `${categoryId} core ${id}`).toBe(true);
    }

    for (const id of visualPointIds[categoryId] ?? []) {
      expect(pointIds.has(id), `${categoryId} visual ${id}`).toBe(true);
    }
  }
});

test("mysql GTID is backed by a dedicated visual simulation", async () => {
  const points = await loadKnowledgePoints("mysql");
  const gtid = points.find((point) => point.id === "gtid");

  expect(visualPointIds.mysql).toContain("gtid");
  expect(gtid).toBeTruthy();

  const simulation = buildVisualSimulation("mysql", gtid!);

  expect(simulation.key).toBe("mysql:gtid");
  expect(simulation.pattern.zh).toContain("GTID");
  expect(simulation.steps).toHaveLength(5);
  expect(simulation.metrics.map((metric) => metric.en)).toEqual(
    expect.arrayContaining(["gtid_executed", "gtid_purged", "Retrieved_Gtid_Set", "Executed_Gtid_Set"]),
  );
});

test("kubernetes CrashLoopBackOff is backed by a dedicated visual simulation", async () => {
  const points = await loadKnowledgePoints("kubernetes");
  const crashLoopBackOff = points.find((point) => point.id === "crashloopbackoff");

  expect(visualPointIds.kubernetes).toContain("crashloopbackoff");
  expect(crashLoopBackOff).toBeTruthy();

  const simulation = buildVisualSimulation("kubernetes", crashLoopBackOff!);

  expect(simulation.key).toBe("kubernetes:crashloopbackoff");
  expect(simulation.pattern.en).toContain("CrashLoopBackOff");
  expect(simulation.steps).toHaveLength(5);
  expect(simulation.metrics.map((metric) => metric.en)).toEqual(
    expect.arrayContaining(["restartCount", "BackOff delay", "lastState.reason", "kubectl logs --previous"]),
  );
});

test("kubernetes HPA is backed by a dedicated visual simulation", async () => {
  const points = await loadKnowledgePoints("kubernetes");
  const hpa = points.find((point) => point.id === "hpa");

  expect(visualPointIds.kubernetes).toContain("hpa");
  expect(hpa).toBeTruthy();

  const simulation = buildVisualSimulation("kubernetes", hpa!);

  expect(simulation.key).toBe("kubernetes:hpa");
  expect(simulation.pattern.en).toContain("autoscaling control loop");
  expect(simulation.steps).toHaveLength(5);
  expect(simulation.metrics.map((metric) => metric.en)).toEqual(
    expect.arrayContaining(["current / target CPU", "desiredReplicas", "Scale subresource", "stabilization window"]),
  );
});

test("kubernetes scheduler is backed by a dedicated visual simulation", async () => {
  const points = await loadKnowledgePoints("kubernetes");
  const scheduler = points.find((point) => point.id === "scheduler");

  expect(visualPointIds.kubernetes).toContain("scheduler");
  expect(scheduler).toBeTruthy();

  const simulation = buildVisualSimulation("kubernetes", scheduler!);

  expect(simulation.key).toBe("kubernetes:scheduler");
  expect(simulation.pattern.en).toContain("scheduling cycle");
  expect(simulation.steps).toHaveLength(5);
  expect(simulation.metrics.map((metric) => metric.en)).toEqual(
    expect.arrayContaining(["PodSchedulingContext", "Filter plugins", "Score plugins", "Binding cycle"]),
  );
});

test("kubernetes taints and tolerations is backed by a dedicated visual simulation", async () => {
  const points = await loadKnowledgePoints("kubernetes");
  const taintToleration = points.find((point) => point.id === "taint-toleration");

  expect(visualPointIds.kubernetes).toContain("taint-toleration");
  expect(taintToleration).toBeTruthy();

  const simulation = buildVisualSimulation("kubernetes", taintToleration!);

  expect(simulation.key).toBe("kubernetes:taint-toleration");
  expect(simulation.pattern.en).toContain("taint and toleration");
  expect(simulation.steps).toHaveLength(5);
  expect(simulation.metrics.map((metric) => metric.en)).toEqual(
    expect.arrayContaining(["NoSchedule", "NoExecute", "tolerationSeconds", "FailedScheduling Events"]),
  );
});

test("kubernetes topology spread is backed by a dedicated visual simulation", async () => {
  const points = await loadKnowledgePoints("kubernetes");
  const topologySpread = points.find((point) => point.id === "topology-spread");

  expect(visualPointIds.kubernetes).toContain("topology-spread");
  expect(topologySpread).toBeTruthy();

  const simulation = buildVisualSimulation("kubernetes", topologySpread!);

  expect(simulation.key).toBe("kubernetes:topology-spread");
  expect(simulation.pattern.en).toContain("topology spread scheduler model");
  expect(simulation.steps).toHaveLength(5);
  expect(simulation.metrics.map((metric) => metric.en)).toEqual(
    expect.arrayContaining(["maxSkew", "topologyKey", "eligible domains", "FailedScheduling Events"]),
  );
});

test("kubernetes pod affinity is backed by a dedicated visual simulation", async () => {
  const points = await loadKnowledgePoints("kubernetes");
  const podAffinity = points.find((point) => point.id === "pod-affinity");

  expect(visualPointIds.kubernetes).toContain("pod-affinity");
  expect(podAffinity).toBeTruthy();

  const simulation = buildVisualSimulation("kubernetes", podAffinity!);

  expect(simulation.key).toBe("kubernetes:pod-affinity");
  expect(simulation.pattern.en).toContain("pod affinity scheduler state model");
  expect(simulation.steps).toHaveLength(5);
  expect(simulation.metrics.map((metric) => metric.en)).toEqual(
    expect.arrayContaining(["labelSelector", "topologyKey", "PodAffinity", "PodAntiAffinity"]),
  );
});

test("kubernetes node affinity is backed by a dedicated visual simulation", async () => {
  const points = await loadKnowledgePoints("kubernetes");
  const nodeAffinity = points.find((point) => point.id === "node-affinity");

  expect(visualPointIds.kubernetes).toContain("node-affinity");
  expect(nodeAffinity).toBeTruthy();

  const simulation = buildVisualSimulation("kubernetes", nodeAffinity!);

  expect(simulation.key).toBe("kubernetes:node-affinity");
  expect(simulation.pattern.en).toContain("node affinity scheduler state model");
  expect(simulation.steps).toHaveLength(5);
  expect(simulation.metrics.map((metric) => metric.en)).toEqual(
    expect.arrayContaining(["nodeSelectorTerms", "matchExpressions", "preferred weight", "FailedScheduling Events"]),
  );
});

test("kubernetes preemption is backed by a dedicated visual simulation", async () => {
  const points = await loadKnowledgePoints("kubernetes");
  const preemption = points.find((point) => point.id === "preemption");

  expect(visualPointIds.kubernetes).toContain("preemption");
  expect(preemption).toBeTruthy();

  const simulation = buildVisualSimulation("kubernetes", preemption!);

  expect(simulation.key).toBe("kubernetes:preemption");
  expect(simulation.pattern.en).toContain("priority preemption scheduler model");
  expect(simulation.steps).toHaveLength(5);
  expect(simulation.metrics.map((metric) => metric.en)).toEqual(
    expect.arrayContaining(["PriorityClass", "preemption victims", "nominatedNodeName", "PDB budget"]),
  );
});

test("kubernetes EndpointSlice is backed by a dedicated visual simulation", async () => {
  const points = await loadKnowledgePoints("kubernetes");
  const endpointSlice = points.find((point) => point.id === "endpoint-slice");

  expect(visualPointIds.kubernetes).toContain("endpoint-slice");
  expect(endpointSlice).toBeTruthy();

  const simulation = buildVisualSimulation("kubernetes", endpointSlice!);

  expect(simulation.key).toBe("kubernetes:endpoint-slice");
  expect(simulation.pattern.en).toContain("EndpointSlice fan-out resource model");
  expect(simulation.steps).toHaveLength(5);
  expect(simulation.metrics.map((metric) => metric.en)).toEqual(
    expect.arrayContaining(["slice batch size", "Ready endpoints", "topology hints", "kube-proxy watch"]),
  );
});

test("linux epoll is backed by a dedicated visual simulation", async () => {
  const points = await loadKnowledgePoints("os");
  const epoll = points.find((point) => point.id === "epoll");

  expect(visualPointIds.os).toContain("epoll");
  expect(epoll).toBeTruthy();

  const simulation = buildVisualSimulation("os", epoll!);

  expect(simulation.key).toBe("os:epoll");
  expect(simulation.pattern.en).toContain("event notification");
  expect(simulation.steps).toHaveLength(5);
  expect(simulation.metrics.map((metric) => metric.en)).toEqual(
    expect.arrayContaining(["interest list", "ready list", "epoll_wait batch", "LT / ET mode"]),
  );
});

test("docker bridge network is backed by a dedicated visual simulation", async () => {
  const points = await loadKnowledgePoints("docker");
  const bridgeNetwork = points.find((point) => point.id === "bridge-network");

  expect(visualPointIds.docker).toContain("bridge-network");
  expect(bridgeNetwork).toBeTruthy();

  const simulation = buildVisualSimulation("docker", bridgeNetwork!);

  expect(simulation.key).toBe("docker:bridge-network");
  expect(simulation.pattern.en).toContain("bridge packet path");
  expect(simulation.steps).toHaveLength(5);
  expect(simulation.metrics.map((metric) => metric.en)).toEqual(
    expect.arrayContaining(["network namespace", "veth pair", "embedded DNS", "DNAT / MASQUERADE"]),
  );
});

test("docker port mapping is backed by a dedicated visual simulation", async () => {
  const points = await loadKnowledgePoints("docker");
  const portMapping = points.find((point) => point.id === "port-mapping");

  expect(visualPointIds.docker).toContain("port-mapping");
  expect(portMapping).toBeTruthy();

  const simulation = buildVisualSimulation("docker", portMapping!);

  expect(simulation.key).toBe("docker:port-mapping");
  expect(simulation.pattern.en).toContain("published port path");
  expect(simulation.steps).toHaveLength(5);
  expect(simulation.metrics.map((metric) => metric.en)).toEqual(
    expect.arrayContaining(["host IP:port", "EXPOSE metadata", "DNAT rule", "container listen address"]),
  );
});

test("docker resource limit is backed by a dedicated visual simulation", async () => {
  const points = await loadKnowledgePoints("docker");
  const resourceLimit = points.find((point) => point.id === "resource-limit");

  expect(visualPointIds.docker).toContain("resource-limit");
  expect(resourceLimit).toBeTruthy();

  const simulation = buildVisualSimulation("docker", resourceLimit!);

  expect(simulation.key).toBe("docker:resource-limit");
  expect(simulation.pattern.en).toContain("cgroup resource governor");
  expect(simulation.steps).toHaveLength(5);
  expect(simulation.metrics.map((metric) => metric.en)).toEqual(
    expect.arrayContaining(["memory.max", "cpu.max", "oom_kill", "docker stats"]),
  );
});

test("docker cpu limit is backed by a dedicated visual simulation", async () => {
  const points = await loadKnowledgePoints("docker");
  const cpuLimit = points.find((point) => point.id === "cpu-limit");

  expect(visualPointIds.docker).toContain("cpu-limit");
  expect(cpuLimit).toBeTruthy();

  const simulation = buildVisualSimulation("docker", cpuLimit!);

  expect(simulation.key).toBe("docker:cpu-limit");
  expect(simulation.pattern.en).toContain("CFS CPU bandwidth model");
  expect(simulation.steps).toHaveLength(5);
  expect(simulation.metrics.map((metric) => metric.en)).toEqual(
    expect.arrayContaining(["cpu.max", "CFS period/quota", "cpu.shares", "throttled_usec"]),
  );
});

test("docker pids limit is backed by a dedicated visual simulation", async () => {
  const points = await loadKnowledgePoints("docker");
  const pidsLimit = points.find((point) => point.id === "pids-limit");

  expect(visualPointIds.docker).toContain("pids-limit");
  expect(pidsLimit).toBeTruthy();

  const simulation = buildVisualSimulation("docker", pidsLimit!);

  expect(simulation.key).toBe("docker:pids-limit");
  expect(simulation.pattern.en).toContain("PIDs cgroup containment model");
  expect(simulation.steps).toHaveLength(5);
  expect(simulation.metrics.map((metric) => metric.en)).toEqual(
    expect.arrayContaining(["pids.max", "pids.current", "pids.events max", "docker stats PIDS"]),
  );
});

test("docker multi-stage build is backed by a dedicated visual simulation", async () => {
  const points = await loadKnowledgePoints("docker");
  const multiStageBuild = points.find((point) => point.id === "multi-stage-build");

  expect(visualPointIds.docker).toContain("multi-stage-build");
  expect(multiStageBuild).toBeTruthy();

  const simulation = buildVisualSimulation("docker", multiStageBuild!);

  expect(simulation.key).toBe("docker:multi-stage-build");
  expect(simulation.pattern.en).toContain("multi-stage image assembly");
  expect(simulation.steps).toHaveLength(5);
  expect(simulation.metrics.map((metric) => metric.en)).toEqual(
    expect.arrayContaining(["COPY --from", "target stage", "final image size", "BuildKit skip"]),
  );
});

test("network TCP/IP model is backed by a dedicated visual simulation", async () => {
  const points = await loadKnowledgePoints("network");
  const tcpIpModel = points.find((point) => point.id === "tcp-ip-model");

  expect(visualPointIds.network).toContain("tcp-ip-model");
  expect(tcpIpModel).toBeTruthy();

  const simulation = buildVisualSimulation("network", tcpIpModel!);

  expect(simulation.key).toBe("network:tcp-ip-model");
  expect(simulation.pattern.en).toContain("four-layer encapsulation");
  expect(simulation.steps).toHaveLength(5);
  expect(simulation.metrics.map((metric) => metric.en)).toEqual(
    expect.arrayContaining([
      "Application protocol",
      "Ports / connections",
      "IP / routing",
      "MAC / ARP / MTU",
      "OSI mapping",
    ]),
  );
});

test("redis AOF rewrite is backed by a dedicated visual simulation", async () => {
  const points = await loadKnowledgePoints("redis");
  const aofRewrite = points.find((point) => point.id === "aof-rewrite");

  expect(visualPointIds.redis).toContain("aof-rewrite");
  expect(aofRewrite).toBeTruthy();

  const simulation = buildVisualSimulation("redis", aofRewrite!);

  expect(simulation.key).toBe("redis:aof-rewrite");
  expect(simulation.pattern.en).toContain("AOF rewrite state model");
  expect(simulation.steps).toHaveLength(5);
  expect(simulation.metrics.map((metric) => metric.en)).toEqual(
    expect.arrayContaining([
      "rewrite buffer",
      "temporary base file",
      "AOF manifest",
      "fork COW",
      "recovery replay size",
    ]),
  );
});

test("search scoring and category lookup find expected topics", async () => {
  const networkPoints = await loadKnowledgePoints("network");
  const tcp = networkPoints.find((point) => point.id === "tcp");

  expect(tcp).toBeTruthy();
  expect(getPointSearchScore(tcp!, "计算机网络", "tcp")).toBeGreaterThan(0);
  await expect(findFirstSearchMatch(copy.zh, "tcp", { network: networkPoints })).resolves.toBe("network");
  await expect(findBestSearchMatch(copy.zh, "tcp", { network: networkPoints })).resolves.toMatchObject({
    categoryId: "network",
    pointId: "tcp",
  });
});

test("graph layout builds cached base graph and focused relation overlay", async () => {
  const points = await loadKnowledgePoints("network");
  const visualizableIdSet = new Set((visualPointIds.network ?? []));
  const graph = buildSphereGraphLayout({
    t: copy.zh,
    locale: "zh",
    selectedCategory: "network",
    selectedKnowledgeId: "tcp",
    allPoints: points,
    graphMode: "core",
    graphBoard: "knowledge",
    searchQuery: "",
    visualizableIdSet,
  });
  const focused = withFocusedRelations(graph, "tcp");

  expect(graph.nodes.some((node) => node.id === "tcp")).toBe(true);
  expect(graph.edges.length).toBeGreaterThan(0);
  expect(focused.edges.length).toBeGreaterThanOrEqual(graph.edges.length);
});
