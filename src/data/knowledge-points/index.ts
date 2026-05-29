import type { CategoryId } from "../types.ts";
import type { GraphKnowledgePoint } from "./types.ts";
import { filterCoreKnowledgePoints } from "./core.ts";
import { goKnowledgePoints } from "./go.ts";
import { networkKnowledgePoints } from "./network.ts";
import { operatingSystemKnowledgePoints } from "./os.ts";
import { dsaKnowledgePoints } from "./algorithm.ts";
import { mysqlKnowledgePoints } from "./mysql.ts";
import { redisKnowledgePoints } from "./redis.ts";
import { rabbitmqKnowledgePoints } from "./rabbitmq.ts";
import { backendKnowledgePoints } from "./backend.ts";
import { dockerKnowledgePoints } from "./docker.ts";
import { kubernetesKnowledgePoints } from "./kubernetes.ts";
import { agentKnowledgePoints } from "./agent.ts";

export { categoryColors, categorySourceRefs, knowledgeSources, type KnowledgeSourceId } from "./sources.ts";
export { coreKnowledgePointIdsByCategory } from "./core.ts";
export type { GraphKnowledgePoint } from "./types.ts";
export { goKnowledgePoints } from "./go.ts";
export { networkKnowledgeExplanations, networkKnowledgePoints } from "./network.ts";
export { operatingSystemKnowledgePoints } from "./os.ts";
export { dsaKnowledgePoints } from "./algorithm.ts";
export { redisKnowledgePoints } from "./redis.ts";
export { mysqlKnowledgePoints } from "./mysql.ts";
export { rabbitmqKnowledgePoints } from "./rabbitmq.ts";
export { backendKnowledgePoints } from "./backend.ts";
export { dockerKnowledgePoints } from "./docker.ts";
export { kubernetesKnowledgePoints } from "./kubernetes.ts";
export { agentKnowledgePoints } from "./agent.ts";

export const knowledgePointsByCategory: Record<CategoryId, GraphKnowledgePoint[]> = {
  go: filterCoreKnowledgePoints("go", goKnowledgePoints),
  network: filterCoreKnowledgePoints("network", networkKnowledgePoints),
  os: filterCoreKnowledgePoints("os", operatingSystemKnowledgePoints),
  algorithm: filterCoreKnowledgePoints("algorithm", dsaKnowledgePoints),
  mysql: filterCoreKnowledgePoints("mysql", mysqlKnowledgePoints),
  redis: filterCoreKnowledgePoints("redis", redisKnowledgePoints),
  rabbitmq: filterCoreKnowledgePoints("rabbitmq", rabbitmqKnowledgePoints),
  backend: filterCoreKnowledgePoints("backend", backendKnowledgePoints),
  docker: filterCoreKnowledgePoints("docker", dockerKnowledgePoints),
  kubernetes: filterCoreKnowledgePoints("kubernetes", kubernetesKnowledgePoints),
  agent: filterCoreKnowledgePoints("agent", agentKnowledgePoints),
};
