import type { Difficulty } from "../types.ts";
import type { KnowledgeSourceId } from "./sources.ts";

export interface GraphKnowledgePoint {
  sourceRefs?: KnowledgeSourceId[];
  internalTags?: string[];
  id: string;
  zh: string;
  en: string;
  difficulty: Difficulty;
  summary?: string;
  concept?: string;
  explanation?: string[];
  layer?: string;
  area?: string;
  useCases?: string[];
  typicalProblems?: string[];
  commonCommands?: string[];
  engineeringValue?: string;
  practiceAdvice?: string[];
  opsScenarios?: string[];
  applicationScenarios?: string[];
  prerequisites: string[];
  related: string[];
  order?: number;
  learningPathPosition?: number;
  commonIssues?: string[];
}
