import { Minus, Plus, PlayCircle, RotateCcw, Search, Zap } from "lucide-react";
import {
  type CSSProperties,
  type MouseEvent,
  type PointerEvent,
  type WheelEvent,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  categoryColors,
  knowledgePointsByCategory,
  type GraphKnowledgePoint,
} from "../../../data/knowledge-points";
import type { CategoryId, Difficulty } from "../../../data/types";
import type { Copy } from "../../../app/copy";
import type { GraphBoard, GraphMode, Locale, PointPriority } from "../../../app/ui-types";
import {
  categoryIcons,
  getAreaKey,
  getAreaLabel,
  getCategoryLabel,
  getKnowledgeLabel,
  getPointPriority,
  getVisibleGraphPoints,
  getVisualizablePoints,
  normalizeSearch,
  pointMatchesSearch,
} from "../knowledge-ui";
import { LearningSidebar } from "../components/LearningSidebar";

type KnowledgeGraphNodeKind = "category" | "group" | "knowledge";
type KnowledgeGraphRelation = "category" | "group" | "prerequisite" | "related";

type SphereNode = {
  id: string;
  label: string;
  categoryId: CategoryId;
  categoryLabel: string;
  count?: number;
  kind: KnowledgeGraphNodeKind;
  area?: string;
  difficulty?: Difficulty;
  priority?: PointPriority;
  active: boolean;
  matched: boolean;
  graphMode: GraphMode;
  hasSearch: boolean;
  visualizable: boolean;
  radius: number;
  x: number;
  y: number;
  anchorX: number;
  anchorY: number;
};

type SphereEdge = {
  id: string;
  source: string;
  target: string;
  relation: KnowledgeGraphRelation;
  categoryId: CategoryId;
};

type SphereGraph = {
  nodes: SphereNode[];
  edges: SphereEdge[];
  width: number;
  height: number;
};

type CanvasView = {
  x: number;
  y: number;
  zoom: number;
};

type CanvasDrag = {
  pointerId: number;
  startX: number;
  startY: number;
  originX: number;
  originY: number;
  moved: boolean;
};

type ActiveCanvasPointer = {
  x: number;
  y: number;
  pointerType: string;
};

type CanvasPinchGesture = {
  startDistance: number;
  startCenter: { x: number; y: number };
  originView: CanvasView;
};

const graphDimensions: Record<GraphMode, { width: number; height: number }> = {
  core: { width: 1320, height: 980 },
  all: { width: 1560, height: 1140 },
};

const defaultCanvasView: CanvasView = { x: 0, y: -50, zoom: 0.86 };
const minCanvasZoom = 0.56;
const maxCanvasZoom = 1.85;

const sphereRadii: Record<GraphMode, Record<KnowledgeGraphNodeKind, number>> = {
  core: {
    category: 68,
    group: 50,
    knowledge: 40,
  },
  all: {
    category: 62,
    group: 42,
    knowledge: 28,
  },
};

function makeSphereNode(
  node: Omit<SphereNode, "x" | "y" | "anchorX" | "anchorY">,
  center: { x: number; y: number },
): SphereNode {
  return {
    ...node,
    x: center.x,
    y: center.y,
    anchorX: center.x,
    anchorY: center.y,
  };
}

function getRingMeta(index: number, graphMode: GraphMode) {
  const baseCapacity = graphMode === "core" ? 4 : 7;
  let remaining = index;
  let ring = 0;
  let capacity = baseCapacity;

  while (remaining >= capacity) {
    remaining -= capacity;
    ring += 1;
    capacity = baseCapacity + ring * 4;
  }

  return {
    ring,
    indexInRing: remaining,
    capacity,
  };
}

function placeAreaPoint(
  groupCenter: { x: number; y: number },
  groupAngle: number,
  pointIndex: number,
  pointCount: number,
  graphMode: GraphMode,
) {
  const { ring, indexInRing, capacity } = getRingMeta(pointIndex, graphMode);
  let pointsBeforeRing = 0;

  for (let ringIndex = 0; ringIndex < ring; ringIndex += 1) {
    pointsBeforeRing += (graphMode === "core" ? 4 : 7) + ringIndex * 4;
  }

  const ringCount = Math.min(capacity, pointCount - pointsBeforeRing);
  const spread = Math.min(
    Math.PI * (graphMode === "core" ? 0.92 : 1.08),
    Math.PI * (0.42 + ringCount * 0.11),
  );
  const angle =
    ringCount <= 1
      ? groupAngle
      : groupAngle - spread / 2 + (spread / (ringCount - 1)) * indexInRing;
  const distance = (graphMode === "core" ? 118 : 92) + ring * (graphMode === "core" ? 82 : 66);

  return {
    x: groupCenter.x + Math.cos(angle) * distance,
    y: groupCenter.y + Math.sin(angle) * distance,
  };
}

function resolveSphereCollisions(nodes: SphereNode[], width: number, height: number) {
  const padding = 42;

  for (let iteration = 0; iteration < 260; iteration += 1) {
    nodes.forEach((node) => {
      if (node.kind === "category") {
        return;
      }

      node.x += (node.anchorX - node.x) * 0.012;
      node.y += (node.anchorY - node.y) * 0.012;
    });

    for (let aIndex = 0; aIndex < nodes.length; aIndex += 1) {
      for (let bIndex = aIndex + 1; bIndex < nodes.length; bIndex += 1) {
        const a = nodes[aIndex];
        const b = nodes[bIndex];
        const dx = b.x - a.x;
        const dy = b.y - a.y;
        const distance = Math.hypot(dx, dy) || 1;
        const gap = a.kind === "knowledge" && b.kind === "knowledge" ? 14 : 18;
        const minDistance = a.radius + b.radius + gap;

        if (distance >= minDistance) {
          continue;
        }

        const push = (minDistance - distance) / 2;
        const nx = dx / distance;
        const ny = dy / distance;
        const aFixed = a.kind === "category";
        const bFixed = b.kind === "category";

        if (aFixed) {
          b.x += nx * push * 2;
          b.y += ny * push * 2;
        } else if (bFixed) {
          a.x -= nx * push * 2;
          a.y -= ny * push * 2;
        } else {
          a.x -= nx * push;
          a.y -= ny * push;
          b.x += nx * push;
          b.y += ny * push;
        }
      }
    }

    nodes.forEach((node) => {
      node.x = Math.min(width - padding - node.radius, Math.max(padding + node.radius, node.x));
      node.y = Math.min(height - padding - node.radius, Math.max(padding + node.radius, node.y));
    });
  }
}

function buildSphereGraph(
  t: Copy,
  locale: Locale,
  selectedCategory: CategoryId,
  selectedKnowledgeId: string,
  graphMode: GraphMode,
  graphBoard: GraphBoard,
  searchQuery: string,
  visualizableIdSet: Set<string>,
  relationFocusId: string | undefined,
) {
  const dimensions = graphDimensions[graphMode];
  const radii = sphereRadii[graphMode];
  const categoryLabel = getCategoryLabel(t, selectedCategory);
  const allPoints = knowledgePointsByCategory[selectedCategory];
  const hasSearch = normalizeSearch(searchQuery).length > 0;
  const points = hasSearch
    ? allPoints.filter((point) => pointMatchesSearch(point, categoryLabel, searchQuery))
    : [];
  const boardPoints = getVisibleGraphPoints(
    selectedCategory,
    allPoints,
    points,
    graphMode,
    graphBoard,
    hasSearch,
  );
  const groups = new Map<string, GraphKnowledgePoint[]>();

  boardPoints.forEach((point) => {
    const area = getAreaKey(point);
    const group = groups.get(area) ?? [];

    group.push(point);
    groups.set(area, group);
  });

  const groupEntries = Array.from(groups.entries());
  const center = { x: dimensions.width / 2, y: dimensions.height / 2 - 42 };
  const groupRadius =
    graphMode === "core"
      ? groupEntries.length > 8
        ? 330
        : 300
      : groupEntries.length > 10
        ? 380
        : 340;
  const nodes: SphereNode[] = [
    makeSphereNode(
      {
        id: `category-${selectedCategory}`,
        label: categoryLabel,
        categoryId: selectedCategory,
        categoryLabel,
        count: boardPoints.length,
        kind: "category",
        active: false,
        matched: true,
        graphMode,
        hasSearch,
        visualizable: false,
        radius: radii.category,
      },
      center,
    ),
  ];
  const edges: SphereEdge[] = [];
  const edgeKeys = new Set<string>();
  const addEdge = (source: string, target: string, relation: KnowledgeGraphRelation) => {
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
      categoryId: selectedCategory,
    });
  };

  groupEntries.forEach(([area, group], groupIndex) => {
    const angle =
      (-92 + (360 / Math.max(groupEntries.length, 1)) * groupIndex) * (Math.PI / 180);
    const groupCenter = {
      x: center.x + Math.cos(angle) * groupRadius,
      y: center.y + Math.sin(angle) * groupRadius,
    };
    const groupNodeId = `group-${area}`;

    nodes.push(
      makeSphereNode(
        {
          id: groupNodeId,
          label: getAreaLabel(area, locale),
          categoryId: selectedCategory,
          categoryLabel,
          count: group.length,
          kind: "group",
          area,
          active: false,
          matched: true,
          graphMode,
          hasSearch,
          visualizable: false,
          radius: radii.group,
        },
        groupCenter,
      ),
    );
    addEdge(`category-${selectedCategory}`, groupNodeId, "category");

    group.forEach((point, pointIndex) => {
      const pointCenter = placeAreaPoint(
        groupCenter,
        angle,
        pointIndex,
        group.length,
        graphMode,
      );

      nodes.push(
        makeSphereNode(
          {
            id: point.id,
            label: getKnowledgeLabel(point, locale),
            categoryId: selectedCategory,
            categoryLabel,
            difficulty: point.difficulty,
            priority: getPointPriority(selectedCategory, point, selectedKnowledgeId),
            kind: "knowledge",
            area,
            active: point.id === selectedKnowledgeId,
            matched: hasSearch ? points.includes(point) : true,
            graphMode,
            hasSearch,
            visualizable: visualizableIdSet.has(point.id),
            radius: radii.knowledge,
          },
          pointCenter,
        ),
      );
      addEdge(groupNodeId, point.id, "group");
    });
  });

  const nodeById = new Map(nodes.map((node) => [node.id, node]));
  const pointById = new Map(boardPoints.map((point) => [point.id, point]));
  const focusPoint = relationFocusId ? pointById.get(relationFocusId) : undefined;

  if (focusPoint) {
    focusPoint.prerequisites.forEach((sourceId) => {
      if (nodeById.has(sourceId)) {
        addEdge(sourceId, focusPoint.id, "prerequisite");
      }
    });
    focusPoint.related.slice(0, 2).forEach((relatedId) => {
      if (nodeById.has(relatedId)) {
        addEdge(focusPoint.id, relatedId, "related");
      }
    });
    boardPoints.forEach((point) => {
      if (point.prerequisites.includes(focusPoint.id)) {
        addEdge(focusPoint.id, point.id, "prerequisite");
      }
    });
  }

  resolveSphereCollisions(nodes, dimensions.width, dimensions.height);

  return {
    nodes,
    edges,
    width: dimensions.width,
    height: dimensions.height,
  };
}

function getNodeById(nodes: SphereNode[]) {
  return new Map(nodes.map((node) => [node.id, node]));
}

function clampCanvasZoom(value: number) {
  return Math.min(maxCanvasZoom, Math.max(minCanvasZoom, value));
}

function clampValue(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

function getCanvasPanLimit(length: number, zoom: number) {
  return Math.max(180, length * 0.32 + Math.max(0, zoom - 1) * length * 0.5);
}

function clampCanvasTransform(view: CanvasView, rect?: DOMRect | null): CanvasView {
  const zoom = clampCanvasZoom(view.zoom);

  if (!rect) {
    return { ...view, zoom };
  }

  const maxX = getCanvasPanLimit(rect.width, zoom);
  const maxY = getCanvasPanLimit(rect.height, zoom);

  return {
    x: clampValue(view.x, -maxX, maxX),
    y: clampValue(view.y, -maxY, maxY),
    zoom,
  };
}

function getZoomedCanvasView(
  view: CanvasView,
  nextZoom: number,
  point: { x: number; y: number },
  rect: DOMRect,
) {
  const zoom = clampCanvasZoom(nextZoom);
  const origin = { x: rect.width / 2, y: rect.height / 2 };
  const local = {
    x: origin.x + (point.x - origin.x - view.x) / view.zoom,
    y: origin.y + (point.y - origin.y - view.y) / view.zoom,
  };

  return clampCanvasTransform(
    {
      x: point.x - origin.x - (local.x - origin.x) * zoom,
      y: point.y - origin.y - (local.y - origin.y) * zoom,
      zoom,
    },
    rect,
  );
}

function getPinchedCanvasView(
  view: CanvasView,
  nextZoom: number,
  startPoint: { x: number; y: number },
  currentPoint: { x: number; y: number },
  rect: DOMRect,
) {
  const zoom = clampCanvasZoom(nextZoom);
  const origin = { x: rect.width / 2, y: rect.height / 2 };
  const local = {
    x: origin.x + (startPoint.x - origin.x - view.x) / view.zoom,
    y: origin.y + (startPoint.y - origin.y - view.y) / view.zoom,
  };

  return clampCanvasTransform(
    {
      x: currentPoint.x - origin.x - (local.x - origin.x) * zoom,
      y: currentPoint.y - origin.y - (local.y - origin.y) * zoom,
      zoom,
    },
    rect,
  );
}

function getPinchMetrics(pointers: ActiveCanvasPointer[], rect: DOMRect) {
  const [first, second] = pointers;
  const firstPoint = {
    x: first.x - rect.left,
    y: first.y - rect.top,
  };
  const secondPoint = {
    x: second.x - rect.left,
    y: second.y - rect.top,
  };

  return {
    center: {
      x: (firstPoint.x + secondPoint.x) / 2,
      y: (firstPoint.y + secondPoint.y) / 2,
    },
    distance: Math.max(1, Math.hypot(secondPoint.x - firstPoint.x, secondPoint.y - firstPoint.y)),
  };
}

function isCanvasControlTarget(target: EventTarget | null) {
  return (
    target instanceof Element &&
    Boolean(
      target.closest(
        ".graph-toolbar, .mobile-category-tabs, .search-status, .graph-canvas-controls",
      ),
    )
  );
}

function SphereGraphView({
  graph,
  focusedLabel,
  onOpenDetail,
  onHoverKnowledge,
}: {
  graph: SphereGraph;
  focusedLabel: string;
  onOpenDetail: (categoryId: CategoryId, pointId: string) => void;
  onHoverKnowledge: (pointId?: string) => void;
}) {
  const nodeById = getNodeById(graph.nodes);

  return (
    <svg
      className="sphere-graph"
      viewBox={`0 0 ${graph.width} ${graph.height}`}
      role="img"
      aria-label="knowledge graph"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <filter id="sphereLineGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="1.8" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <g className="sphere-edge-layer">
        {graph.edges.map((edge) => {
          const source = nodeById.get(edge.source);
          const target = nodeById.get(edge.target);

          if (!source || !target) {
            return null;
          }

          return (
            <line
              key={edge.id}
              className={`sphere-edge ${edge.relation}`}
              x1={source.x}
              y1={source.y}
              x2={target.x}
              y2={target.y}
              style={{ "--category-color": categoryColors[edge.categoryId] } as CSSProperties}
            />
          );
        })}
      </g>
      <g className="sphere-node-layer">
        {graph.nodes.map((node) => {
          const canOpen = node.kind === "knowledge";
          const classes = [
            "sphere-node",
            node.kind,
            node.difficulty ?? "",
            node.priority ?? "",
            node.graphMode === "core" ? "core-mode" : "all-mode",
            node.active ? "active" : "",
            node.kind === "knowledge" && node.hasSearch && node.matched ? "matched" : "",
          ]
            .filter(Boolean)
            .join(" ");

          return (
            <foreignObject
              key={node.id}
              x={node.x - node.radius}
              y={node.y - node.radius}
              width={node.radius * 2}
              height={node.radius * 2}
              className="sphere-node-shell"
            >
              <button
                className={classes}
                style={{ "--category-color": categoryColors[node.categoryId] } as CSSProperties}
                title={node.label}
                type="button"
                onClick={() => canOpen && onOpenDetail(node.categoryId, node.id)}
                onMouseEnter={() => canOpen && onHoverKnowledge(node.id)}
                onMouseLeave={() => canOpen && onHoverKnowledge()}
                onFocus={() => canOpen && onHoverKnowledge(node.id)}
                onBlur={() => canOpen && onHoverKnowledge()}
              >
                {node.visualizable && (
                  <span className="visual-node-badge">
                    <PlayCircle size={13} fill="currentColor" />
                  </span>
                )}
                {node.active && (
                  <span className="node-badge">
                    <Zap size={14} fill="currentColor" />
                  </span>
                )}
                <span className="sphere-label">{node.label}</span>
                {(node.kind === "category" || node.kind === "group") && (
                  <small>{node.count}</small>
                )}
                {node.active && <strong>{focusedLabel}</strong>}
              </button>
            </foreignObject>
          );
        })}
      </g>
    </svg>
  );
}

export function HomePage({
  t,
  locale,
  selectedCategory,
  selectedKnowledgeId,
  graphBoard,
  searchQuery,
  onChangeGraphBoard,
  onSelectCategory,
  onOpenDetail,
}: {
  t: Copy;
  locale: Locale;
  selectedCategory: CategoryId;
  selectedKnowledgeId: string;
  graphBoard: GraphBoard;
  searchQuery: string;
  onChangeGraphBoard: (graphBoard: GraphBoard) => void;
  onSelectCategory: (categoryId: CategoryId) => void;
  onOpenDetail: (categoryId: CategoryId, pointId: string) => void;
}) {
  const [graphMode, setGraphMode] = useState<GraphMode>("core");
  const [hoveredKnowledgeId, setHoveredKnowledgeId] = useState<string>();
  const [canvasView, setCanvasView] = useState<CanvasView>(defaultCanvasView);
  const [canvasDrag, setCanvasDrag] = useState<CanvasDrag>();
  const [isCanvasGestureActive, setIsCanvasGestureActive] = useState(false);
  const graphStageRef = useRef<HTMLDivElement>(null);
  const canvasViewRef = useRef(canvasView);
  const activePointersRef = useRef(new Map<number, ActiveCanvasPointer>());
  const pinchGestureRef = useRef<CanvasPinchGesture | null>(null);
  const suppressCanvasClickRef = useRef(false);
  const clickResetTimerRef = useRef<number | null>(null);
  const hasSearch = normalizeSearch(searchQuery).length > 0;
  const visualizablePoints = useMemo(
    () => getVisualizablePoints(selectedCategory),
    [selectedCategory],
  );
  const visualizableIdSet = useMemo(
    () => new Set(visualizablePoints.map((point) => point.id)),
    [visualizablePoints],
  );
  const graph = useMemo(
    () =>
      buildSphereGraph(
        t,
        locale,
        selectedCategory,
        selectedKnowledgeId,
        graphMode,
        graphBoard,
        searchQuery,
        visualizableIdSet,
        hoveredKnowledgeId ?? selectedKnowledgeId,
      ),
    [
      t,
      locale,
      selectedCategory,
      selectedKnowledgeId,
      graphMode,
      graphBoard,
      searchQuery,
      visualizableIdSet,
      hoveredKnowledgeId,
    ],
  );
  const hasResults = graph.nodes.some(
    (node) => node.kind === "knowledge" && node.matched,
  );
  const isEmptySearch = hasSearch && !hasResults;
  const zoomPercent = `${Math.round(canvasView.zoom * 100)}%`;
  const isCanvasInteracting = isCanvasGestureActive || Boolean(canvasDrag?.moved);

  useEffect(() => {
    canvasViewRef.current = canvasView;
  }, [canvasView]);

  useEffect(() => {
    activePointersRef.current.clear();
    pinchGestureRef.current = null;
    setCanvasView(defaultCanvasView);
    setCanvasDrag(undefined);
    setIsCanvasGestureActive(false);
  }, [selectedCategory, graphMode, graphBoard, searchQuery, locale]);

  useEffect(
    () => () => {
      if (clickResetTimerRef.current) {
        window.clearTimeout(clickResetTimerRef.current);
      }
    },
    [],
  );

  function resetCanvasView() {
    activePointersRef.current.clear();
    pinchGestureRef.current = null;
    setCanvasView(defaultCanvasView);
    setCanvasDrag(undefined);
    setIsCanvasGestureActive(false);
  }

  function scheduleCanvasClickReset() {
    if (clickResetTimerRef.current) {
      window.clearTimeout(clickResetTimerRef.current);
    }

    clickResetTimerRef.current = window.setTimeout(() => {
      suppressCanvasClickRef.current = false;
    }, 220);
  }

  function startPinchGesture(rect: DOMRect) {
    const pointers = Array.from(activePointersRef.current.values());

    if (pointers.length < 2) {
      pinchGestureRef.current = null;
      return;
    }

    const metrics = getPinchMetrics(pointers.slice(0, 2), rect);
    pinchGestureRef.current = {
      startDistance: metrics.distance,
      startCenter: metrics.center,
      originView: canvasViewRef.current,
    };
    setCanvasDrag(undefined);
    setIsCanvasGestureActive(true);
  }

  function zoomCanvas(multiplier: number) {
    const rect = graphStageRef.current?.getBoundingClientRect();

    setCanvasView((view) => {
      if (!rect) {
        return {
          ...view,
          zoom: clampCanvasZoom(view.zoom * multiplier),
        };
      }

      return getZoomedCanvasView(
        view,
        view.zoom * multiplier,
        { x: rect.width / 2, y: rect.height / 2 },
        rect,
      );
    });
  }

  function handleCanvasWheel(event: WheelEvent<HTMLDivElement>) {
    event.preventDefault();

    const rect = event.currentTarget.getBoundingClientRect();
    const isPanGesture = event.shiftKey || Math.abs(event.deltaX) > Math.abs(event.deltaY) * 1.35;

    if (isPanGesture) {
      setCanvasView((view) =>
        clampCanvasTransform(
          {
            ...view,
            x: view.x - event.deltaX,
            y: view.y - event.deltaY,
          },
          rect,
        ),
      );
      return;
    }

    const zoomFactor = Math.exp(-event.deltaY * (event.deltaMode === 1 ? 0.045 : 0.0012));
    const point = {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    };

    setCanvasView((view) => getZoomedCanvasView(view, view.zoom * zoomFactor, point, rect));
  }

  function handleCanvasPointerDown(event: PointerEvent<HTMLDivElement>) {
    if (event.pointerType === "mouse" && event.button !== 0) {
      return;
    }

    if (isCanvasControlTarget(event.target)) {
      return;
    }

    event.currentTarget.setPointerCapture(event.pointerId);
    activePointersRef.current.set(event.pointerId, {
      x: event.clientX,
      y: event.clientY,
      pointerType: event.pointerType,
    });

    if (activePointersRef.current.size >= 2) {
      startPinchGesture(event.currentTarget.getBoundingClientRect());
      return;
    }

    pinchGestureRef.current = null;
    setIsCanvasGestureActive(false);
    setCanvasDrag({
      pointerId: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
      originX: canvasView.x,
      originY: canvasView.y,
      moved: false,
    });
  }

  function handleCanvasPointerMove(event: PointerEvent<HTMLDivElement>) {
    const activePointer = activePointersRef.current.get(event.pointerId);

    if (activePointer) {
      activePointersRef.current.set(event.pointerId, {
        ...activePointer,
        x: event.clientX,
        y: event.clientY,
      });
    }

    if (activePointersRef.current.size >= 2) {
      event.preventDefault();
      suppressCanvasClickRef.current = true;

      const rect = event.currentTarget.getBoundingClientRect();
      const pointers = Array.from(activePointersRef.current.values()).slice(0, 2);
      const metrics = getPinchMetrics(pointers, rect);

      if (!pinchGestureRef.current) {
        startPinchGesture(rect);
      }

      const gesture = pinchGestureRef.current;

      if (!gesture) {
        return;
      }

      setCanvasView(
        getPinchedCanvasView(
          gesture.originView,
          gesture.originView.zoom * (metrics.distance / gesture.startDistance),
          gesture.startCenter,
          metrics.center,
          rect,
        ),
      );
      return;
    }

    if (!canvasDrag || canvasDrag.pointerId !== event.pointerId) {
      return;
    }

    const rect = event.currentTarget.getBoundingClientRect();
    const dx = event.clientX - canvasDrag.startX;
    const dy = event.clientY - canvasDrag.startY;
    const moved = canvasDrag.moved || Math.hypot(dx, dy) > 4;

    if (moved) {
      suppressCanvasClickRef.current = true;
      setIsCanvasGestureActive(true);
    }

    setCanvasView((view) => ({
      ...clampCanvasTransform(
        {
          ...view,
          x: canvasDrag.originX + dx,
          y: canvasDrag.originY + dy,
        },
        rect,
      ),
    }));

    if (moved && !canvasDrag.moved) {
      setCanvasDrag({ ...canvasDrag, moved: true });
    }
  }

  function handleCanvasPointerUp(event: PointerEvent<HTMLDivElement>) {
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }

    activePointersRef.current.delete(event.pointerId);

    if (activePointersRef.current.size >= 2) {
      startPinchGesture(event.currentTarget.getBoundingClientRect());
      return;
    }

    pinchGestureRef.current = null;

    if (activePointersRef.current.size === 1) {
      const [remainingPointerId, pointer] = Array.from(activePointersRef.current.entries())[0];
      setCanvasDrag({
        pointerId: remainingPointerId,
        startX: pointer.x,
        startY: pointer.y,
        originX: canvasViewRef.current.x,
        originY: canvasViewRef.current.y,
        moved: true,
      });
      setIsCanvasGestureActive(true);
      return;
    }

    setCanvasDrag(undefined);
    setIsCanvasGestureActive(false);
    scheduleCanvasClickReset();
  }

  function handleCanvasClickCapture(event: MouseEvent<HTMLDivElement>) {
    if (!suppressCanvasClickRef.current) {
      return;
    }

    suppressCanvasClickRef.current = false;
    event.preventDefault();
    event.stopPropagation();
  }

  return (
    <main className="home-layout page-with-topbar">
      <LearningSidebar
        t={t}
        active={selectedCategory}
        onSelect={onSelectCategory}
      />
      <section
        className={`graph-canvas ${isCanvasInteracting ? "is-panning" : ""}`}
        aria-label={t.navGraph}
      >
        <div className="mobile-category-tabs" aria-label={t.learningPath}>
          {t.categories.map(([id, name], index) => {
            const categoryId = id as CategoryId;
            const Icon = categoryIcons[index];

            return (
              <button
                key={id}
                className={selectedCategory === id ? "active" : ""}
                onClick={() => onSelectCategory(categoryId)}
              >
                <Icon size={16} />
                <span>{name}</span>
              </button>
            );
          })}
        </div>
        {hasSearch && (
          <div className="search-status">
            <Search size={16} />
            <span>{hasResults ? t.searchResults : t.noSearchResult}</span>
            <strong>{searchQuery}</strong>
          </div>
        )}
        <div className="graph-toolbar">
          <div className="graph-mode-switch" aria-label={t.graphBoard}>
            <button
              className={graphBoard === "knowledge" ? "active" : ""}
              onClick={() => onChangeGraphBoard("knowledge")}
            >
              {t.knowledgeBoard}
            </button>
            <button
              className={graphBoard === "visual" ? "active" : ""}
              onClick={() => onChangeGraphBoard("visual")}
            >
              {t.visualBoard}
            </button>
          </div>
          <div className="graph-mode-switch scope-switch" aria-label={t.graphMode}>
            <button
              className={graphMode === "core" ? "active" : ""}
              onClick={() => setGraphMode("core")}
            >
              {t.coreMode}
            </button>
            <button
              className={graphMode === "all" ? "active" : ""}
              onClick={() => setGraphMode("all")}
            >
              {t.allMode}
            </button>
          </div>
        </div>
        {isEmptySearch ? (
          <div className="graph-empty-state">
            <Search size={28} />
            <h2>{t.noSearchResult}</h2>
            <p>{searchQuery}</p>
          </div>
        ) : (
          <div
            ref={graphStageRef}
            className="sphere-graph-stage"
            onWheel={handleCanvasWheel}
            onPointerDown={handleCanvasPointerDown}
            onPointerMove={handleCanvasPointerMove}
            onPointerUp={handleCanvasPointerUp}
            onPointerCancel={handleCanvasPointerUp}
            onClickCapture={handleCanvasClickCapture}
            onDoubleClick={resetCanvasView}
          >
            <div
              className="sphere-graph-world"
              style={{
                transform: `translate3d(${canvasView.x}px, ${canvasView.y}px, 0) scale(${canvasView.zoom})`,
              }}
            >
              <SphereGraphView
                graph={graph}
                focusedLabel={t.focused}
                onOpenDetail={onOpenDetail}
                onHoverKnowledge={setHoveredKnowledgeId}
              />
            </div>
          </div>
        )}
        <div className="graph-canvas-controls" aria-label={t.canvasControls}>
          <button
            type="button"
            onClick={() => zoomCanvas(0.86)}
            title={t.zoomOut}
            aria-label={t.zoomOut}
          >
            <Minus size={19} />
          </button>
          <output className="canvas-zoom-readout" aria-live="polite">
            {zoomPercent}
          </output>
          <button
            type="button"
            onClick={() => zoomCanvas(1.16)}
            title={t.zoomIn}
            aria-label={t.zoomIn}
          >
            <Plus size={19} />
          </button>
          <button
            type="button"
            onClick={resetCanvasView}
            title={t.resetView}
            aria-label={t.resetView}
          >
            <RotateCcw size={18} />
          </button>
        </div>
      </section>
    </main>
  );
}
