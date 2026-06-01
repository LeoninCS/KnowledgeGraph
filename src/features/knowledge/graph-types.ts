import type { GraphKnowledgePoint } from "../../data/knowledge-points/types";
import type { CategoryId, Difficulty } from "../../data/types";
import type { GraphMode, PointPriority } from "../../app/ui-types";

export type KnowledgeGraphNodeKind = "category" | "group" | "knowledge";
export type KnowledgeGraphRelation = "category" | "group" | "prerequisite" | "related";
export type KnowledgeGraphLayout = "sphere" | "flow";

export type GraphLane = {
  id: string;
  label: string;
  y: number;
  height: number;
};

export type SphereNode = {
  id: string;
  label: string;
  summary?: string;
  categoryId: CategoryId;
  categoryLabel: string;
  count?: number;
  kind: KnowledgeGraphNodeKind;
  area?: string;
  lane?: string;
  column?: number;
  difficulty?: Difficulty;
  priority?: PointPriority;
  active: boolean;
  matched: boolean;
  graphMode: GraphMode;
  hasSearch: boolean;
  visualizable: boolean;
  radius: number;
  width?: number;
  height?: number;
  x: number;
  y: number;
  anchorX: number;
  anchorY: number;
};

export type SphereEdge = {
  id: string;
  source: string;
  target: string;
  relation: KnowledgeGraphRelation;
  categoryId: CategoryId;
  focus?: boolean;
};

export type SphereGraph = {
  layout: KnowledgeGraphLayout;
  nodes: SphereNode[];
  edges: SphereEdge[];
  lanes?: GraphLane[];
  points: GraphKnowledgePoint[];
  width: number;
  height: number;
};

export type CanvasView = {
  x: number;
  y: number;
  zoom: number;
};
