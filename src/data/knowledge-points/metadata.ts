import type { CategoryId } from "../types.ts";
import { coreKnowledgePointIdsByCategory } from "./core.ts";

export const categoryIds = [
  "go",
  "network",
  "os",
  "algorithm",
  "mysql",
  "redis",
  "rabbitmq",
  "backend",
  "docker",
  "kubernetes",
  "agent",
] as const satisfies CategoryId[];

export const knowledgePointCounts = Object.fromEntries(
  categoryIds.map((categoryId) => [categoryId, coreKnowledgePointIdsByCategory[categoryId].length]),
) as Record<CategoryId, number>;
