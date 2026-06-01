import { PlayCircle, Zap } from "lucide-react";
import type { CSSProperties } from "react";
import { categoryColors } from "../../../data/knowledge-points/sources";
import type { CategoryId } from "../../../data/types";
import type { SphereEdge, SphereGraph, SphereNode } from "../graph-types";

const flowEdgeGap = 8;
const circularEdgeGap = 10;
const minCurveOffset = 28;
const maxCurveOffset = 72;
const smoothStepCorner = 18;

function getNodeById(graph: SphereGraph) {
  return new Map(graph.nodes.map((node) => [node.id, node]));
}

function formatSvgNumber(value: number) {
  return Number(value.toFixed(2));
}

function svgPoint(point: { x: number; y: number }) {
  return `${formatSvgNumber(point.x)} ${formatSvgNumber(point.y)}`;
}

function getNodeBox(node: SphereNode) {
  const width = node.width ?? node.radius * 2;
  const height = node.height ?? node.radius * 2;

  if (node.width && node.height) {
    return {
      x: node.x,
      y: node.y,
      width,
      height,
    };
  }

  return {
    x: node.x - node.radius,
    y: node.y - node.radius,
    width,
    height,
  };
}

function getNodeCenter(node: SphereNode) {
  const box = getNodeBox(node);

  return {
    x: box.x + box.width / 2,
    y: box.y + box.height / 2,
  };
}

function getEdgeSide(edge: SphereEdge) {
  const hash = Array.from(edge.id).reduce((total, character) => total + character.charCodeAt(0), 0);

  return hash % 2 === 0 ? 1 : -1;
}

function getQuadraticEdgePath(edge: SphereEdge, start: { x: number; y: number }, end: { x: number; y: number }) {
  const dx = end.x - start.x;
  const dy = end.y - start.y;
  const distance = Math.max(1, Math.hypot(dx, dy));
  const side = edge.relation === "related" ? getEdgeSide(edge) : 1;
  const relationScale = edge.relation === "category" ? 0.82 : edge.relation === "related" ? 1.18 : 1;
  const offset = Math.min(maxCurveOffset, Math.max(minCurveOffset, distance * 0.12)) * side * relationScale;
  const control = {
    x: (start.x + end.x) / 2 + (-dy / distance) * offset,
    y: (start.y + end.y) / 2 + (dx / distance) * offset,
  };

  return `M ${svgPoint(start)} Q ${svgPoint(control)} ${svgPoint(end)}`;
}

function getSmoothStepEdgePath(edge: SphereEdge, start: { x: number; y: number }, end: { x: number; y: number }) {
  const dx = end.x - start.x;
  const dy = end.y - start.y;

  if (Math.abs(dx) < 36 || Math.abs(dy) < 1) {
    return getQuadraticEdgePath(edge, start, end);
  }

  const directionX = dx > 0 ? 1 : -1;
  const directionY = dy > 0 ? 1 : -1;
  const midX = start.x + dx / 2;
  const corner = Math.min(smoothStepCorner, Math.abs(dx) / 4, Math.abs(dy) / 2);

  return [
    `M ${svgPoint(start)}`,
    `L ${svgPoint({ x: midX - directionX * corner, y: start.y })}`,
    `Q ${svgPoint({ x: midX, y: start.y })} ${svgPoint({ x: midX, y: start.y + directionY * corner })}`,
    `L ${svgPoint({ x: midX, y: end.y - directionY * corner })}`,
    `Q ${svgPoint({ x: midX, y: end.y })} ${svgPoint({ x: midX + directionX * corner, y: end.y })}`,
    `L ${svgPoint(end)}`,
  ].join(" ");
}

function getFocusFlowEdgePath(sourceBox: ReturnType<typeof getNodeBox>, targetBox: ReturnType<typeof getNodeBox>) {
  const sourceCenter = {
    x: sourceBox.x + sourceBox.width / 2,
    y: sourceBox.y + sourceBox.height / 2,
  };
  const targetCenter = {
    x: targetBox.x + targetBox.width / 2,
    y: targetBox.y + targetBox.height / 2,
  };
  const targetIsRight = targetCenter.x >= sourceCenter.x;
  const directionX = targetIsRight ? 1 : -1;
  const start = {
    x: targetIsRight ? sourceBox.x + sourceBox.width + flowEdgeGap : sourceBox.x - flowEdgeGap,
    y: sourceCenter.y,
  };
  const end = {
    x: targetIsRight ? targetBox.x - flowEdgeGap : targetBox.x + targetBox.width + flowEdgeGap,
    y: targetCenter.y,
  };
  const sourceGutterX = start.x + directionX * 26;
  const targetGutterX = end.x - directionX * 26;
  const corridorY = Math.max(18, Math.min(sourceBox.y, targetBox.y) - 20);
  const corner = 12;

  return [
    `M ${svgPoint(start)}`,
    `L ${svgPoint({ x: sourceGutterX - directionX * corner, y: start.y })}`,
    `Q ${svgPoint({ x: sourceGutterX, y: start.y })} ${svgPoint({ x: sourceGutterX, y: start.y - corner })}`,
    `L ${svgPoint({ x: sourceGutterX, y: corridorY + corner })}`,
    `Q ${svgPoint({ x: sourceGutterX, y: corridorY })} ${svgPoint({ x: sourceGutterX + directionX * corner, y: corridorY })}`,
    `L ${svgPoint({ x: targetGutterX - directionX * corner, y: corridorY })}`,
    `Q ${svgPoint({ x: targetGutterX, y: corridorY })} ${svgPoint({ x: targetGutterX, y: corridorY + corner })}`,
    `L ${svgPoint({ x: targetGutterX, y: end.y - corner })}`,
    `Q ${svgPoint({ x: targetGutterX, y: end.y })} ${svgPoint({ x: targetGutterX + directionX * corner, y: end.y })}`,
    `L ${svgPoint(end)}`,
  ].join(" ");
}

function getCircularAnchor(node: SphereNode, toward: { x: number; y: number }) {
  const center = getNodeCenter(node);
  const dx = toward.x - center.x;
  const dy = toward.y - center.y;
  const distance = Math.max(1, Math.hypot(dx, dy));
  const radius = node.radius + circularEdgeGap;

  return {
    x: center.x + (dx / distance) * radius,
    y: center.y + (dy / distance) * radius,
  };
}

function getFlowNodeEdgePath(edge: SphereEdge, source: SphereNode, target: SphereNode) {
  const sourceBox = getNodeBox(source);
  const targetBox = getNodeBox(target);
  const sourceCenter = getNodeCenter(source);
  const targetCenter = getNodeCenter(target);

  if (edge.relation === "category") {
    const start = {
      x: sourceBox.x + sourceBox.width / 2,
      y: sourceBox.y + sourceBox.height + flowEdgeGap,
    };
    const end = {
      x: targetBox.x + targetBox.width / 2,
      y: targetBox.y - flowEdgeGap,
    };

    return `M ${svgPoint(start)} C ${svgPoint({ x: start.x, y: start.y + 56 })}, ${svgPoint({
      x: end.x,
      y: end.y - 56,
    })}, ${svgPoint(end)}`;
  }

  if (edge.relation === "group") {
    const start = {
      x: sourceBox.x + sourceBox.width + flowEdgeGap,
      y: sourceCenter.y,
    };
    const end = {
      x: targetBox.x - flowEdgeGap,
      y: targetCenter.y,
    };
    const elbowX = end.x - 22;

    return `M ${svgPoint(start)} L ${svgPoint({ x: elbowX, y: end.y })} L ${svgPoint(end)}`;
  }

  if (edge.focus) {
    return getFocusFlowEdgePath(sourceBox, targetBox);
  }

  if (Math.abs(targetCenter.x - sourceCenter.x) < 36) {
    const targetIsBelow = targetCenter.y >= sourceCenter.y;
    const start = {
      x: sourceCenter.x,
      y: targetIsBelow ? sourceBox.y + sourceBox.height + flowEdgeGap : sourceBox.y - flowEdgeGap,
    };
    const end = {
      x: targetCenter.x,
      y: targetIsBelow ? targetBox.y - flowEdgeGap : targetBox.y + targetBox.height + flowEdgeGap,
    };

    return getQuadraticEdgePath(edge, start, end);
  }

  const targetIsRight = targetCenter.x > sourceCenter.x;
  const start = {
    x: targetIsRight ? sourceBox.x + sourceBox.width + flowEdgeGap : sourceBox.x - flowEdgeGap,
    y: sourceCenter.y,
  };
  const end = {
    x: targetIsRight ? targetBox.x - flowEdgeGap : targetBox.x + targetBox.width + flowEdgeGap,
    y: targetCenter.y,
  };
  return getSmoothStepEdgePath(edge, start, end);
}

function getEdgePath(edge: SphereEdge, source: SphereNode, target: SphereNode) {
  if (source.width && target.width) {
    return getFlowNodeEdgePath(edge, source, target);
  }

  const sourceCenter = getNodeCenter(source);
  const targetCenter = getNodeCenter(target);
  const start = getCircularAnchor(source, targetCenter);
  const end = getCircularAnchor(target, sourceCenter);

  return getQuadraticEdgePath(edge, start, end);
}

function getSummaryText(summary: string | undefined) {
  if (!summary) {
    return "";
  }

  return summary.replace(/。$/, "");
}

export function SphereGraphView({
  graph,
  focusedLabel,
  highlightedKnowledgeId,
  onOpenDetail,
  onFocusKnowledge,
}: {
  graph: SphereGraph;
  focusedLabel: string;
  highlightedKnowledgeId?: string;
  onOpenDetail: (categoryId: CategoryId, pointId: string) => void;
  onFocusKnowledge: (pointId: string) => void;
}) {
  const nodeById = getNodeById(graph);

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
        <marker
          id="flowArrow"
          markerHeight="10"
          markerUnits="strokeWidth"
          markerWidth="10"
          orient="auto"
          refX="9"
          refY="5"
        >
          <path d="M 0 0 L 10 5 L 0 10 z" />
        </marker>
      </defs>
      {graph.layout === "flow" && (
        <g className="flow-lane-layer">
          {graph.lanes?.map((lane) => (
            <g key={lane.id} className="flow-lane">
              <rect x="18" y={lane.y} width={graph.width - 36} height={lane.height} rx="8" />
              <text x="44" y={lane.y + 30}>
                {lane.label}
              </text>
            </g>
          ))}
        </g>
      )}
      <g className="sphere-edge-layer">
        {graph.edges.map((edge) => {
          const source = nodeById.get(edge.source);
          const target = nodeById.get(edge.target);

          if (!source || !target) {
            return null;
          }

          const isHoveredRelation = Boolean(
            highlightedKnowledgeId &&
              !edge.focus &&
              (edge.source === highlightedKnowledgeId || edge.target === highlightedKnowledgeId),
          );

          const edgePath = getEdgePath(edge, source, target);
          const edgeClassName = [
            edge.relation,
            edge.focus ? "focus-relation" : "",
            isHoveredRelation ? "is-hovered-relation" : "",
          ]
            .filter(Boolean)
            .join(" ");

          return (
            <g
              key={edge.id}
              className={`sphere-edge-wrap ${edgeClassName}`}
              style={{ "--category-color": categoryColors[edge.categoryId] } as CSSProperties}
            >
              <path className="sphere-edge-halo" d={edgePath} />
              <path className={`sphere-edge ${edgeClassName}`} d={edgePath} />
            </g>
          );
        })}
      </g>
      {graph.layout === "flow" && (
        <g className="sphere-node-occluder-layer">
          {graph.nodes.map((node) => {
            const box = getNodeBox(node);

            return (
              <rect
                key={`occluder-${node.id}`}
                x={box.x - 3}
                y={box.y - 3}
                width={box.width + 6}
                height={box.height + 6}
                rx={node.kind === "knowledge" ? 15 : 18}
                className={`sphere-node-occluder ${node.kind}`}
              />
            );
          })}
        </g>
      )}
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
            node.kind === "knowledge" && node.id === highlightedKnowledgeId ? "relation-focused" : "",
            node.kind === "knowledge" && node.hasSearch && node.matched ? "matched" : "",
          ]
            .filter(Boolean)
            .join(" ");
          const box = getNodeBox(node);
          const summary = getSummaryText(node.summary);
          const accessibleLabel = node.active ? `${node.label} ${focusedLabel}` : node.label;

          return (
            <foreignObject
              key={node.id}
              x={box.x}
              y={box.y}
              width={box.width}
              height={box.height}
              className="sphere-node-shell"
            >
              <button
                className={classes}
                aria-label={accessibleLabel}
                style={{ "--category-color": categoryColors[node.categoryId] } as CSSProperties}
                title={node.label}
                type="button"
                onClick={() => {
                  if (canOpen) {
                    onFocusKnowledge(node.id);
                  }
                }}
                onDoubleClick={() => canOpen && onOpenDetail(node.categoryId, node.id)}
                onFocus={() => canOpen && onFocusKnowledge(node.id)}
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
                {summary && <span className="sphere-summary">{summary}</span>}
                {node.kind === "knowledge" && node.difficulty && (
                  <span className="flow-node-meta">
                    <span>{node.difficulty}</span>
                    {node.visualizable && <span>Visual</span>}
                  </span>
                )}
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
