import type { GraphKnowledgePoint } from "../data/knowledge-points/types";

export type Locale = "zh" | "en";
export type Theme = "light" | "dark";
export type Page = "home" | "detail" | "simulator" | "about";
export type Step = number;
export type GraphMode = "core" | "all";
export type GraphBoard = "knowledge" | "visual";
export type PointPriority = "primary" | "secondary";

export type CategoryCopy = {
  categories: readonly (readonly [string, string])[];
  difficulties: readonly string[];
};

export type KnowledgeSourceView = {
  id: string;
  title: string;
  url: string;
  found: boolean;
};

export type KnowledgePointViewModel = {
  point: GraphKnowledgePoint;
  title: string;
  summary: string;
  areaLabel: string;
  sources: KnowledgeSourceView[];
};
