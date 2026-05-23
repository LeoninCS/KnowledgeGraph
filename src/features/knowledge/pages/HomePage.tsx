import {
  Background,
  Controls,
  Handle,
  Position,
  ReactFlow,
  ReactFlowProvider,
  type Edge,
  type Node,
  type NodeProps,
  type NodeTypes,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { PlayCircle, Search, Zap } from "lucide-react";
import { type CSSProperties, useMemo, useState } from "react";
import {
  categoryColors,
  knowledgePointsByCategory,
  type GraphKnowledgePoint,
} from "../../../data/knowledge-points";
import type { CategoryId, Difficulty } from "../../../data/types";
import type { Copy } from "../../../app/copy";
import type { GraphBoard, GraphMode, Locale, PointPriority } from "../../../app/ui-types";
import {
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

type KnowledgeGraphNodeData = {
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
  focusedLabel: string;
  onOpenDetail?: (categoryId: CategoryId, pointId: string) => void;
};

type KnowledgeGraphNode = Node<KnowledgeGraphNodeData, "knowledgeGraph">;
type KnowledgeGraphEdge = Edge<
  {
    categoryId: CategoryId;
    relation: KnowledgeGraphRelation;
  }
>;

const knowledgeNodeDimensions: Record<KnowledgeGraphNodeKind, { width: number; height: number }> = {
  category: { width: 96, height: 96 },
  group: { width: 70, height: 70 },
  knowledge: { width: 62, height: 62 },
};

export const graphNodeTypes: NodeTypes = {
  knowledgeGraph: KnowledgeGraphNodeView,
};

function KnowledgeGraphNodeView({ id, data }: NodeProps<KnowledgeGraphNode>) {
  const classes = [
    "graph-node",
    data.kind,
    data.kind === "knowledge" ? data.difficulty : "",
    data.kind === "knowledge" ? data.priority : "",
    data.graphMode === "core" ? "core-mode" : "all-mode",
    data.active ? "active" : "",
    data.kind === "knowledge" && data.hasSearch && data.matched ? "matched" : "",
  ]
    .filter(Boolean)
    .join(" ");
  const canOpen = data.kind === "knowledge";

  return (
    <button
      className={classes}
      style={{ "--category-color": categoryColors[data.categoryId] } as CSSProperties}
      title={data.categoryLabel}
      onClick={() => canOpen && data.onOpenDetail?.(data.categoryId, id)}
    >
      {["top", "right", "bottom", "left"].map((handlePosition) => (
        <Handle
          key={`target-${handlePosition}`}
          id={`target-${handlePosition}`}
          type="target"
          position={handlePositionToReactFlowPosition(handlePosition)}
        />
      ))}
      {["top", "right", "bottom", "left"].map((handlePosition) => (
        <Handle
          key={`source-${handlePosition}`}
          id={`source-${handlePosition}`}
          type="source"
          position={handlePositionToReactFlowPosition(handlePosition)}
        />
      ))}
      {data.visualizable && (
        <span className="visual-node-badge">
          <PlayCircle size={13} fill="currentColor" />
        </span>
      )}
      <span>{data.label}</span>
      {(data.kind === "category" || data.kind === "group") && <small>{data.count}</small>}
      {data.active && (
        <>
          <span className="node-badge">
            <Zap size={16} fill="currentColor" />
          </span>
          <strong>{data.focusedLabel}</strong>
        </>
      )}
    </button>
  );
}

function handlePositionToReactFlowPosition(handlePosition: string) {
  const positions: Record<string, Position> = {
    top: Position.Top,
    right: Position.Right,
    bottom: Position.Bottom,
    left: Position.Left,
  };

  return positions[handlePosition] ?? Position.Right;
}

function toNodeTopLeft(
  kind: KnowledgeGraphNodeKind,
  center: { x: number; y: number },
) {
  const dimensions = knowledgeNodeDimensions[kind];

  return {
    x: center.x - dimensions.width / 2,
    y: center.y - dimensions.height / 2,
  };
}

function layoutKnowledgeGraph(nodes: KnowledgeGraphNode[]) {
  const categoryNode = nodes.find((node) => node.data.kind === "category");
  const groupNodes = nodes.filter((node) => node.data.kind === "group");
  const pointNodes = nodes.filter((node) => node.data.kind === "knowledge");
  const pointsByArea = new Map<string, KnowledgeGraphNode[]>();

  pointNodes.forEach((node) => {
    const area = node.data.area ?? "foundation";
    const group = pointsByArea.get(area) ?? [];

    group.push(node);
    pointsByArea.set(area, group);
  });

  const center = { x: 680, y: 480 };
  const groupRadius = groupNodes.length > 8 ? 360 : 330;
  const positions = new Map<string, { x: number; y: number }>();

  if (categoryNode) {
    positions.set(categoryNode.id, toNodeTopLeft("category", center));
  }

  groupNodes.forEach((groupNode, groupIndex) => {
    const groupAngle =
      (-92 + (360 / Math.max(groupNodes.length, 1)) * groupIndex) * (Math.PI / 180);
    const groupCenter = {
      x: center.x + Math.cos(groupAngle) * groupRadius,
      y: center.y + Math.sin(groupAngle) * groupRadius,
    };
    const areaPoints = pointsByArea.get(groupNode.data.area ?? "foundation") ?? [];

    positions.set(groupNode.id, toNodeTopLeft("group", groupCenter));
    areaPoints.forEach((pointNode, index) => {
      const ring = index < 4 ? 0 : 1;
      const ringStart = ring === 0 ? 0 : 4;
      const ringCount = Math.min(ring === 0 ? 4 : 8, areaPoints.length - ringStart);
      const indexInRing = index - ringStart;
      const spread = Math.min(Math.PI * 0.92, Math.PI * (0.34 + ringCount * 0.1));
      const pointAngle =
        ringCount <= 1
          ? groupAngle
          : groupAngle - spread / 2 + (spread / (ringCount - 1)) * indexInRing;
      const pointRadius = 108 + ring * 92;
      const pointCenter = {
        x: groupCenter.x + Math.cos(pointAngle) * pointRadius,
        y: groupCenter.y + Math.sin(pointAngle) * pointRadius,
      };

      positions.set(pointNode.id, toNodeTopLeft("knowledge", pointCenter));
    });
  });

  return nodes.map((node) => ({
    ...node,
    position: positions.get(node.id) ?? node.position,
  }));
}

function getNodeCenter(node: KnowledgeGraphNode) {
  const dimensions = knowledgeNodeDimensions[node.data.kind];

  return {
    x: node.position.x + dimensions.width / 2,
    y: node.position.y + dimensions.height / 2,
  };
}

function getDirectionalHandle(deltaX: number, deltaY: number) {
  if (Math.abs(deltaX) > Math.abs(deltaY)) {
    return deltaX >= 0 ? "right" : "left";
  }

  return deltaY >= 0 ? "bottom" : "top";
}

function getOppositeHandle(handle: string) {
  const opposites: Record<string, string> = {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right",
  };

  return opposites[handle] ?? "left";
}

function attachEdgeHandles(nodes: KnowledgeGraphNode[], edges: KnowledgeGraphEdge[]) {
  const nodeById = new Map(nodes.map((node) => [node.id, node]));

  return edges.map((edge) => {
    const sourceNode = nodeById.get(edge.source);
    const targetNode = nodeById.get(edge.target);

    if (!sourceNode || !targetNode) {
      return edge;
    }

    const sourceCenter = getNodeCenter(sourceNode);
    const targetCenter = getNodeCenter(targetNode);
    const sourceHandle = getDirectionalHandle(
      targetCenter.x - sourceCenter.x,
      targetCenter.y - sourceCenter.y,
    );

    return {
      ...edge,
      sourceHandle: `source-${sourceHandle}`,
      targetHandle: `target-${getOppositeHandle(sourceHandle)}`,
    };
  });
}

export function buildGraphItems(
  t: Copy,
  locale: Locale,
  selectedCategory: CategoryId,
  selectedKnowledgeId: string,
  graphMode: GraphMode,
  graphBoard: GraphBoard,
  searchQuery: string,
  visualizableIdSet: Set<string>,
  onOpenDetail: (categoryId: CategoryId, pointId: string) => void,
) {
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
  const categoryNode: KnowledgeGraphNode = {
    id: `category-${selectedCategory}`,
    type: "knowledgeGraph",
    position: { x: 0, y: 0 },
    data: {
      label: categoryLabel,
      categoryId: selectedCategory,
      categoryLabel,
      count: graphBoard === "visual" ? boardPoints.length : hasSearch ? points.length : allPoints.length,
      kind: "category",
      active: false,
      matched: true,
      graphMode,
      hasSearch,
      visualizable: false,
      focusedLabel: t.focused,
    },
  };
  const groupNodes: KnowledgeGraphNode[] = groupEntries.map(([area, group]) => (
    {
      id: `group-${area}`,
      type: "knowledgeGraph",
      position: { x: 0, y: 0 },
      data: {
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
        focusedLabel: t.focused,
      },
    }
  ));
  const pointNodes: KnowledgeGraphNode[] = groupEntries.flatMap(([area, group]) =>
    group.map((point) => (
      {
        id: point.id,
        type: "knowledgeGraph",
        position: { x: 0, y: 0 },
        data: {
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
          focusedLabel: t.focused,
          onOpenDetail,
        },
      }
    )),
  );
  const nodes = [categoryNode, ...groupNodes, ...pointNodes];
  const groupNodeByArea = new Map(groupNodes.map((node) => [node.data.area, node]));
  const nodeById = new Map(pointNodes.map((node) => [node.id, node]));
  const edgeKeys = new Set<string>();
  const edges: KnowledgeGraphEdge[] = [];
  const addEdge = (
    sourceId: string,
    targetId: string,
    relation: KnowledgeGraphRelation,
  ) => {
    const orderedKey =
      relation === "related"
        ? [sourceId, targetId].sort().join("::")
        : `${sourceId}->${targetId}`;
    const key = `${relation}:${orderedKey}`;

    if (edgeKeys.has(key)) {
      return;
    }

    edgeKeys.add(key);
    edges.push({
      id: key,
      source: sourceId,
      target: targetId,
      type: "straight",
      data: {
        categoryId: selectedCategory,
        relation,
      },
      animated: false,
      style: {
        "--category-color": categoryColors[selectedCategory],
      } as CSSProperties,
      className: `graph-edge ${relation}`,
    });
  };

  groupEntries.forEach(([area, group]) => {
    const groupNode = groupNodeByArea.get(area);

    if (!groupNode) {
      return;
    }

    addEdge(categoryNode.id, groupNode.id, "category");
    group.forEach((point) => {
      const pointNode = nodeById.get(point.id);

      if (pointNode) {
        addEdge(groupNode.id, pointNode.id, "group");
      }
    });
  });

  boardPoints.forEach((point) => {
    const target = nodeById.get(point.id);

    if (!target) {
      return;
    }

    point.prerequisites.forEach((sourceId) => {
      const source = nodeById.get(sourceId);

      if (source) {
        addEdge(source.id, target.id, "prerequisite");
      }
    });

    point.related.slice(0, 2).forEach((relatedId) => {
      const related = nodeById.get(relatedId);

      if (related) {
        addEdge(target.id, related.id, "related");
      }
    });
  });

  const layoutedNodes = layoutKnowledgeGraph(nodes);

  return {
    nodes: layoutedNodes,
    edges: attachEdgeHandles(layoutedNodes, edges),
  };
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
      buildGraphItems(
        t,
        locale,
        selectedCategory,
        selectedKnowledgeId,
        graphMode,
        graphBoard,
        searchQuery,
        visualizableIdSet,
        onOpenDetail,
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
      onOpenDetail,
    ],
  );
  const hasResults = graph.nodes.some(
    (node) => node.data.kind === "knowledge" && node.data.matched,
  );
  const isEmptySearch = hasSearch && !hasResults;

  return (
    <main className="home-layout page-with-topbar">
      <LearningSidebar
        t={t}
        active={selectedCategory}
        onSelect={onSelectCategory}
      />
      <section className="graph-canvas" aria-label={t.navGraph}>
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
        <div className="graph-hint">
          {graphBoard === "visual" ? t.visualGraphHint : t.graphHint}
        </div>
        <ReactFlowProvider>
          {isEmptySearch ? (
            <div className="graph-empty-state">
              <Search size={28} />
              <h2>{t.noSearchResult}</h2>
              <p>{searchQuery}</p>
            </div>
          ) : (
            <ReactFlow
              key={`${selectedCategory}-${graphMode}-${graphBoard}-${searchQuery}-${selectedKnowledgeId}-${locale}`}
              nodes={graph.nodes}
              edges={graph.edges}
              nodeTypes={graphNodeTypes}
              fitView
              fitViewOptions={{ padding: 0.2, minZoom: 0.32, maxZoom: 1.24 }}
              minZoom={0.2}
              maxZoom={1.8}
              nodesDraggable={false}
              nodesConnectable={false}
              elementsSelectable
              selectNodesOnDrag={false}
              proOptions={{ hideAttribution: true }}
            >
              <Background color="var(--line)" gap={30} size={1} />
              <Controls position="bottom-right" showInteractive={false} />
            </ReactFlow>
          )}
        </ReactFlowProvider>
      </section>
    </main>
  );
}
