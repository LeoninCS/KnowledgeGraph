export type CategoryId =
  | "go"
  | "network"
  | "os"
  | "algorithm"
  | "mysql"
  | "redis"
  | "rabbitmq"
  | "backend"
  | "docker"
  | "kubernetes"
  | "agent";

export type Difficulty = "easy" | "medium" | "hard";

export type RelationType =
  | "prerequisite"
  | "related"
  | "next"
  | "deepDive"
  | "compare";

export type SectionKind =
  | "concept"
  | "steps"
  | "table"
  | "code"
  | "pitfall"
  | "summary";

export interface NodePosition {
  x: number;
  y: number;
  group?: "core" | "prerequisite" | "advanced" | "related";
}

export interface Category {
  id: CategoryId;
  title: string;
  description: string;
  icon: string;
  color: string;
  order: number;
}

export interface KnowledgeSection {
  id: string;
  title: string;
  kind: SectionKind;
  body?: string;
  items?: string[];
  code?: {
    language: string;
    source: string;
  };
  table?: {
    headers: string[];
    rows: string[][];
  };
}

export interface SimulatorMeta {
  id: string;
  type: string;
  title: string;
  description: string;
  entryLabel: string;
}

export interface KnowledgeNode {
  id: string;
  title: string;
  summary: string;
  categoryId: CategoryId;
  difficulty: Difficulty;
  tags: string[];
  estimatedMinutes: number;
  prerequisites: string[];
  related: string[];
  importance: number;
  highlights: string[];
  sections: KnowledgeSection[];
  position?: NodePosition;
  simulator?: SimulatorMeta;
}

export interface KnowledgeRelation {
  id: string;
  source: KnowledgeNode["id"];
  target: KnowledgeNode["id"];
  type: RelationType;
  label: string;
  strength: number;
}

export interface KnowledgeGraph {
  categories: Category[];
  nodes: KnowledgeNode[];
  relations: KnowledgeRelation[];
}
