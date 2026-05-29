import { PlayCircle, Zap } from "lucide-react";
import type { CSSProperties } from "react";
import { categoryColors } from "../../../data/knowledge-points/sources";
import type { CategoryId } from "../../../data/types";
import type { SphereEdge, SphereGraph, SphereNode } from "../graph-types";

function getNodeById(graph: SphereGraph) {
  return new Map(graph.nodes.map((node) => [node.id, node]));
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

function getEdgePath(edge: SphereEdge, source: SphereNode, target: SphereNode) {
  if (source.width && target.width) {
    const sourceBox = getNodeBox(source);
    const targetBox = getNodeBox(target);
    const sourceX = source.kind === "group" ? sourceBox.x + sourceBox.width : sourceBox.x + sourceBox.width;
    const sourceY = sourceBox.y + sourceBox.height / 2;
    const targetX = targetBox.x;
    const targetY = targetBox.y + targetBox.height / 2;
    const distance = Math.max(80, Math.abs(targetX - sourceX) * 0.48);

    if (edge.relation === "category") {
      return `M ${sourceBox.x + sourceBox.width / 2} ${sourceBox.y + sourceBox.height} C ${sourceBox.x + sourceBox.width / 2} ${sourceBox.y + sourceBox.height + 52}, ${targetBox.x + targetBox.width / 2} ${targetY - 52}, ${targetBox.x + targetBox.width / 2} ${targetY}`;
    }

    if (edge.relation === "group") {
      return `M ${sourceX} ${sourceY} L ${targetX - 22} ${targetY} L ${targetX} ${targetY}`;
    }

    return `M ${sourceX} ${sourceY} C ${sourceX + distance} ${sourceY}, ${targetX - distance} ${targetY}, ${targetX} ${targetY}`;
  }

  return `M ${source.x} ${source.y} L ${target.x} ${target.y}`;
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
  onHoverKnowledge,
}: {
  graph: SphereGraph;
  focusedLabel: string;
  highlightedKnowledgeId?: string;
  onOpenDetail: (categoryId: CategoryId, pointId: string) => void;
  onHoverKnowledge: (pointId?: string) => void;
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
              (edge.source === highlightedKnowledgeId || edge.target === highlightedKnowledgeId),
          );

          return (
            <path
              key={edge.id}
              className={`sphere-edge ${edge.relation} ${isHoveredRelation ? "is-hovered-relation" : ""}`}
              d={getEdgePath(edge, source, target)}
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
