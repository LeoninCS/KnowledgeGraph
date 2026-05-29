import type { Copy } from "../../app/copy";
import type { GraphBoard, GraphMode, Locale } from "../../app/ui-types";
import type { GraphKnowledgePoint } from "../../data/knowledge-points/types";
import type { CategoryId } from "../../data/types";
import {
  getAreaLabel,
  getCategoryLabel,
  getKnowledgeLabel,
  getPointPriority,
  getVisibleGraphPoints,
  normalizeSearch,
  pointMatchesSearch,
} from "./knowledge-ui";
import type {
  KnowledgeGraphNodeKind,
  KnowledgeGraphRelation,
  SphereEdge,
  SphereGraph,
  SphereNode,
} from "./graph-types";

const flowDimensions: Record<GraphMode, { width: number; height: number }> = {
  core: { width: 1620, height: 1080 },
  all: { width: 2600, height: 1480 },
};

const flowNodeSize: Record<GraphMode, Record<KnowledgeGraphNodeKind, { width: number; height: number }>> = {
  core: {
    category: { width: 230, height: 102 },
    group: { width: 158, height: 42 },
    knowledge: { width: 204, height: 92 },
  },
  all: {
    category: { width: 230, height: 102 },
    group: { width: 148, height: 40 },
    knowledge: { width: 172, height: 82 },
  },
};

const flowLaneOrderByCategory: Record<CategoryId, string[]> = {
  go: [
    "foundation",
    "tooling",
    "syntax",
    "type-system",
    "function",
    "concurrency",
    "runtime",
    "testing",
    "performance",
    "web",
  ],
  network: [
    "foundation",
    "physical",
    "data-link",
    "network",
    "transport",
    "application",
    "security",
    "performance",
  ],
  os: [
    "foundation",
    "process",
    "scheduling",
    "concurrency",
    "memory",
    "file-system",
    "io",
    "linux",
  ],
  algorithm: [
    "foundation",
    "linear",
    "technique",
    "hashing",
    "tree",
    "heap",
    "graph",
    "search",
    "sorting",
    "algorithm",
  ],
  mysql: [
    "foundation",
    "sql",
    "engine",
    "index",
    "transaction",
    "lock",
    "log",
    "optimization",
    "replication",
    "operations",
  ],
  redis: [
    "foundation",
    "data-type",
    "persistence",
    "expiration",
    "memory",
    "cache",
    "coordination",
    "high-availability",
    "cluster",
    "observability",
    "operations",
  ],
  rabbitmq: [
    "foundation",
    "exchange",
    "routing",
    "queue",
    "reliability",
    "persistence",
    "dead-letter",
    "delay-retry",
    "engineering",
    "operations",
  ],
  backend: [
    "foundation",
    "api",
    "security",
    "gateway",
    "traffic",
    "resilience",
    "consistency",
    "messaging",
    "cache",
    "observability",
  ],
  docker: [
    "foundation",
    "image",
    "container",
    "build",
    "registry",
    "network",
    "storage",
    "compose",
    "resource",
    "security",
    "deployment",
    "observability",
    "operations",
  ],
  kubernetes: [
    "foundation",
    "control-plane",
    "tooling",
    "multi-tenancy",
    "node",
    "workload",
    "scheduling",
    "autoscaling",
    "configuration",
    "network",
    "storage",
    "security",
    "release",
    "availability",
    "troubleshooting",
    "observability",
    "operations",
  ],
  agent: [
    "foundation",
    "prompting",
    "tools",
    "rag",
    "memory",
    "planning",
    "workflow",
    "multi-agent",
    "evaluation",
    "safety",
    "operations",
  ],
};

const flowAreaByCategoryAndId: Partial<Record<CategoryId, Record<string, string>>> = {
  network: {
    nat: "network",
    port: "transport",
    tls: "security",
    https: "security",
    "http-cache": "application",
    "latency-bandwidth": "performance",
    "load-balancing": "performance",
    observability: "performance",
  },
};

const flowCoreStageByCategoryAndId: Partial<Record<CategoryId, Record<string, number>>> = {
  network: {
    "network-overview": 0,
    "tcp-ip-model": 1,
    ip: 1,
    "mac-address": 1,
    port: 1,
    subnet: 2,
    arp: 2,
    tcp: 2,
    udp: 2,
    dns: 2,
    gateway: 3,
    routing: 3,
    nat: 3,
    "tcp-handshake": 3,
    "tcp-four-way-wave": 3,
    http: 3,
    tls: 3,
    "tcp-state": 4,
    "tcp-retransmission": 4,
    "tcp-flow-control": 4,
    "tcp-congestion-control": 4,
    "http-cache": 4,
    https: 4,
    "latency-bandwidth": 4,
    "load-balancing": 4,
    observability: 5,
  },
};

const layoutCache = new Map<string, SphereGraph>();
const maxCachedLayouts = 24;

function makeFlowNode(
  node: Omit<SphereNode, "x" | "y" | "anchorX" | "anchorY" | "radius"> & {
    width: number;
    height: number;
  },
  topLeft: { x: number; y: number },
): SphereNode {
  return {
    ...node,
    radius: Math.max(node.width, node.height) / 2,
    x: topLeft.x,
    y: topLeft.y,
    anchorX: topLeft.x,
    anchorY: topLeft.y,
  };
}

function getLayoutCacheKey({
  categoryId,
  pointIds,
  graphMode,
  graphBoard,
  searchQuery,
  locale,
  selectedKnowledgeId,
}: {
  categoryId: CategoryId;
  pointIds: string;
  graphMode: GraphMode;
  graphBoard: GraphBoard;
  searchQuery: string;
  locale: Locale;
  selectedKnowledgeId: string;
}) {
  return [
    categoryId,
    pointIds,
    graphMode,
    graphBoard,
    normalizeSearch(searchQuery),
    locale,
    selectedKnowledgeId,
  ].join("|");
}

function rememberLayout(key: string, graph: SphereGraph) {
  if (layoutCache.size >= maxCachedLayouts) {
    const firstKey = layoutCache.keys().next().value;

    if (firstKey) {
      layoutCache.delete(firstKey);
    }
  }

  layoutCache.set(key, graph);
  return graph;
}

function getPointSortValue(point: GraphKnowledgePoint) {
  return point.order ?? point.learningPathPosition ?? Number.MAX_SAFE_INTEGER;
}

function addEdge(
  edges: SphereEdge[],
  edgeKeys: Set<string>,
  categoryId: CategoryId,
  source: string,
  target: string,
  relation: KnowledgeGraphRelation,
) {
  const pairKey = relation === "related" ? [source, target].sort().join("::") : `${source}->${target}`;
  const key = `${relation}:${pairKey}`;

  if (edgeKeys.has(key)) {
    return;
  }

  edgeKeys.add(key);
  edges.push({
    id: key,
    source,
    target,
    relation,
    categoryId,
  });
}

function getFlowArea(categoryId: CategoryId, point: GraphKnowledgePoint) {
  return flowAreaByCategoryAndId[categoryId]?.[point.id] ?? point.area ?? point.layer ?? "foundation";
}

function getDependencyColumns(points: GraphKnowledgePoint[]) {
  const pointById = new Map(points.map((point) => [point.id, point]));
  const columnById = new Map<string, number>();
  const visiting = new Set<string>();

  function resolve(point: GraphKnowledgePoint): number {
    const cached = columnById.get(point.id);

    if (cached !== undefined) {
      return cached;
    }

    if (visiting.has(point.id)) {
      return 0;
    }

    visiting.add(point.id);

    const prerequisiteColumns = point.prerequisites
      .map((prerequisiteId) => pointById.get(prerequisiteId))
      .filter((prerequisite): prerequisite is GraphKnowledgePoint => Boolean(prerequisite))
      .map(resolve);
    const column = prerequisiteColumns.length > 0 ? Math.max(...prerequisiteColumns) + 1 : 0;

    visiting.delete(point.id);
    columnById.set(point.id, column);

    return column;
  }

  points.forEach(resolve);

  return columnById;
}

function getFlowColumns(categoryId: CategoryId, points: GraphKnowledgePoint[], graphMode: GraphMode) {
  if (graphMode === "all") {
    return getDependencyColumns(points);
  }

  const fallbackColumns = getDependencyColumns(points);
  const coreStages = flowCoreStageByCategoryAndId[categoryId] ?? {};

  return new Map(
    points.map((point) => [
      point.id,
      coreStages[point.id] ?? Math.min(5, fallbackColumns.get(point.id) ?? 0),
    ]),
  );
}

function buildFlowGraph({
  locale,
  selectedCategory,
  selectedKnowledgeId,
  boardPoints,
  graphMode,
  categoryLabel,
  hasSearch,
  matchedPoints,
  visualizableIdSet,
}: {
  locale: Locale;
  selectedCategory: CategoryId;
  selectedKnowledgeId: string;
  boardPoints: GraphKnowledgePoint[];
  graphMode: GraphMode;
  categoryLabel: string;
  hasSearch: boolean;
  matchedPoints: GraphKnowledgePoint[];
  visualizableIdSet: Set<string>;
}): SphereGraph {
  const sizes = flowNodeSize[graphMode];
  const dimensions = flowDimensions[graphMode];
  const columnById = getFlowColumns(selectedCategory, boardPoints, graphMode);
  const areas = Array.from(new Set(boardPoints.map((point) => getFlowArea(selectedCategory, point))));
  const configuredLaneOrder = flowLaneOrderByCategory[selectedCategory];
  const laneIds = configuredLaneOrder
    .filter((area) => areas.includes(area))
    .concat(areas.filter((area) => !configuredLaneOrder.includes(area)));
  const minLaneHeight = graphMode === "core" ? 108 : 118;
  const laneGap = graphMode === "core" ? 22 : 24;
  const topPadding = 148;
  const leftPadding = 90;
  const columnGap = graphMode === "core" ? 214 : 214;
  const laneSlotCountByColumn = new Map<string, Map<number, number>>();

  boardPoints.forEach((point) => {
    const laneId = getFlowArea(selectedCategory, point);
    const column = columnById.get(point.id) ?? 0;
    const columnCounts = laneSlotCountByColumn.get(laneId) ?? new Map<number, number>();

    columnCounts.set(column, (columnCounts.get(column) ?? 0) + 1);
    laneSlotCountByColumn.set(laneId, columnCounts);
  });

  let laneY = topPadding;
  const lanes = laneIds.map((laneId) => {
    const maxSlots = Math.max(1, ...Array.from(laneSlotCountByColumn.get(laneId)?.values() ?? [1]));
    const height = Math.max(
      minLaneHeight,
      28 + maxSlots * sizes.knowledge.height + Math.max(0, maxSlots - 1) * 16,
    );
    const lane = {
      id: laneId,
      label: getAreaLabel(laneId, locale),
      y: laneY,
      height,
    };

    laneY += height + laneGap;

    return lane;
  });
  const laneById = new Map(lanes.map((lane) => [lane.id, lane]));
  const nodes: SphereNode[] = [
    makeFlowNode(
      {
        id: `category-${selectedCategory}`,
        label: categoryLabel,
        summary: `${boardPoints.length}`,
        categoryId: selectedCategory,
        categoryLabel,
        count: boardPoints.length,
        kind: "category",
        lane: "summary",
        column: -1,
        active: false,
        matched: true,
        graphMode,
        hasSearch,
        visualizable: false,
        width: sizes.category.width,
        height: sizes.category.height,
      },
      { x: leftPadding, y: 34 },
    ),
  ];
  const edges: SphereEdge[] = [];
  const edgeKeys = new Set<string>();
  const sortedPoints = [...boardPoints].sort((a, b) => getPointSortValue(a) - getPointSortValue(b));
  const occupiedByLaneColumn = new Map<string, number>();
  const pointIdSet = new Set(boardPoints.map((point) => point.id));

  laneIds.forEach((laneId, laneIndex) => {
    const lane = lanes[laneIndex];

    nodes.push(
      makeFlowNode(
        {
          id: `group-${laneId}`,
          label: lane.label,
          categoryId: selectedCategory,
          categoryLabel,
          count: sortedPoints.filter((point) => getFlowArea(selectedCategory, point) === laneId).length,
          kind: "group",
          area: laneId,
          lane: laneId,
          column: -1,
          active: false,
          matched: true,
          graphMode,
          hasSearch,
          visualizable: false,
          width: sizes.group.width,
          height: sizes.group.height,
        },
        { x: 28, y: lane.y + 34 },
      ),
    );
    addEdge(edges, edgeKeys, selectedCategory, `category-${selectedCategory}`, `group-${laneId}`, "category");
  });

  sortedPoints.forEach((point) => {
    const laneId = getFlowArea(selectedCategory, point);
    const lane = laneById.get(laneId) ?? lanes[0];
    const column = columnById.get(point.id) ?? 0;
    const key = `${laneId}:${column}`;
    const slot = occupiedByLaneColumn.get(key) ?? 0;
    const nodeX = leftPadding + 210 + column * columnGap;
    const nodeY = lane.y + 14 + slot * (sizes.knowledge.height + 16);

    occupiedByLaneColumn.set(key, slot + 1);
    nodes.push(
      makeFlowNode(
        {
          id: point.id,
          label: getKnowledgeLabel(point, locale),
          summary: point.summary ?? point.concept,
          categoryId: selectedCategory,
          categoryLabel,
          difficulty: point.difficulty,
          priority: getPointPriority(selectedCategory, point, selectedKnowledgeId),
          kind: "knowledge",
          area: laneId,
          lane: laneId,
          column,
          active: point.id === selectedKnowledgeId,
          matched: hasSearch ? matchedPoints.includes(point) : true,
          graphMode,
          hasSearch,
          visualizable: visualizableIdSet.has(point.id),
          width: sizes.knowledge.width,
          height: sizes.knowledge.height,
        },
        { x: nodeX, y: nodeY },
      ),
    );
    addEdge(edges, edgeKeys, selectedCategory, `group-${laneId}`, point.id, "group");

    point.prerequisites.forEach((prerequisiteId) => {
      if (pointIdSet.has(prerequisiteId)) {
        addEdge(edges, edgeKeys, selectedCategory, prerequisiteId, point.id, "prerequisite");
      }
    });
  });

  const maxNodeX = nodes.reduce((max, node) => Math.max(max, node.x + (node.width ?? 0)), 0);
  const maxNodeY = nodes.reduce((max, node) => Math.max(max, node.y + (node.height ?? 0)), 0);

  return {
    layout: "flow",
    nodes,
    edges,
    lanes,
    points: boardPoints,
    width: Math.max(dimensions.width, maxNodeX + 120),
    height: Math.max(dimensions.height, maxNodeY + 90),
  };
}

export function buildSphereGraphLayout({
  t,
  locale,
  selectedCategory,
  selectedKnowledgeId,
  allPoints,
  graphMode,
  graphBoard,
  searchQuery,
  visualizableIdSet,
}: {
  t: Copy;
  locale: Locale;
  selectedCategory: CategoryId;
  selectedKnowledgeId: string;
  allPoints: GraphKnowledgePoint[];
  graphMode: GraphMode;
  graphBoard: GraphBoard;
  searchQuery: string;
  visualizableIdSet: Set<string>;
}) {
  const categoryLabel = getCategoryLabel(t, selectedCategory);
  const hasSearch = normalizeSearch(searchQuery).length > 0;
  const matchedPoints = hasSearch
    ? allPoints.filter((point) => pointMatchesSearch(point, categoryLabel, searchQuery))
    : [];
  const boardPoints = getVisibleGraphPoints(
    selectedCategory,
    allPoints,
    matchedPoints,
    graphMode,
    graphBoard,
    hasSearch,
  );
  const cacheKey = getLayoutCacheKey({
    categoryId: selectedCategory,
    pointIds: boardPoints.map((point) => point.id).join(","),
    graphMode,
    graphBoard,
    searchQuery,
    locale,
    selectedKnowledgeId,
  });
  const cached = layoutCache.get(cacheKey);

  if (cached) {
    return cached;
  }

  return rememberLayout(
    cacheKey,
    buildFlowGraph({
      locale,
      selectedCategory,
      selectedKnowledgeId,
      boardPoints,
      graphMode,
      categoryLabel,
      hasSearch,
      matchedPoints,
      visualizableIdSet,
    }),
  );
}

export function withFocusedRelations(
  graph: SphereGraph,
  relationFocusId: string | undefined,
): SphereGraph {
  const nodeById = new Map(graph.nodes.map((node) => [node.id, node]));
  const pointById = new Map(graph.points.map((point) => [point.id, point]));
  const focusPoint = relationFocusId ? pointById.get(relationFocusId) : undefined;
  const categoryId = graph.nodes[0]?.categoryId;

  if (!focusPoint || !categoryId) {
    return graph;
  }

  const edges = [...graph.edges];
  const edgeKeys = new Set(edges.map((edge) => edge.id));

  focusPoint.prerequisites.forEach((sourceId) => {
    if (nodeById.has(sourceId)) {
      addEdge(edges, edgeKeys, categoryId, sourceId, focusPoint.id, "prerequisite");
    }
  });

  focusPoint.related.slice(0, 2).forEach((relatedId) => {
    if (nodeById.has(relatedId)) {
      addEdge(edges, edgeKeys, categoryId, focusPoint.id, relatedId, "related");
    }
  });

  graph.points.forEach((point) => {
    if (point.prerequisites.includes(focusPoint.id)) {
      addEdge(edges, edgeKeys, categoryId, focusPoint.id, point.id, "prerequisite");
    }
  });

  return {
    ...graph,
    edges,
  };
}
