import type { CategoryId } from "../types.ts";
import type { GraphKnowledgePoint } from "./types.ts";
import { filterCoreKnowledgePoints } from "./core.ts";

type KnowledgePointModule = {
  goKnowledgePoints?: GraphKnowledgePoint[];
  networkKnowledgePoints?: GraphKnowledgePoint[];
  operatingSystemKnowledgePoints?: GraphKnowledgePoint[];
  dsaKnowledgePoints?: GraphKnowledgePoint[];
  mysqlKnowledgePoints?: GraphKnowledgePoint[];
  redisKnowledgePoints?: GraphKnowledgePoint[];
  rabbitmqKnowledgePoints?: GraphKnowledgePoint[];
  backendKnowledgePoints?: GraphKnowledgePoint[];
  dockerKnowledgePoints?: GraphKnowledgePoint[];
  kubernetesKnowledgePoints?: GraphKnowledgePoint[];
  agentKnowledgePoints?: GraphKnowledgePoint[];
};

const loaders: Record<CategoryId, () => Promise<KnowledgePointModule>> = {
  go: () => import("./go.ts"),
  network: () => import("./network.ts"),
  os: () => import("./os.ts"),
  algorithm: () => import("./algorithm.ts"),
  mysql: () => import("./mysql.ts"),
  redis: () => import("./redis.ts"),
  rabbitmq: () => import("./rabbitmq.ts"),
  backend: () => import("./backend.ts"),
  docker: () => import("./docker.ts"),
  kubernetes: () => import("./kubernetes.ts"),
  agent: () => import("./agent.ts"),
};

const exportNames: Record<CategoryId, keyof KnowledgePointModule> = {
  go: "goKnowledgePoints",
  network: "networkKnowledgePoints",
  os: "operatingSystemKnowledgePoints",
  algorithm: "dsaKnowledgePoints",
  mysql: "mysqlKnowledgePoints",
  redis: "redisKnowledgePoints",
  rabbitmq: "rabbitmqKnowledgePoints",
  backend: "backendKnowledgePoints",
  docker: "dockerKnowledgePoints",
  kubernetes: "kubernetesKnowledgePoints",
  agent: "agentKnowledgePoints",
};

const categoryCache = new Map<CategoryId, Promise<GraphKnowledgePoint[]>>();

export function loadKnowledgePoints(categoryId: CategoryId) {
  const cached = categoryCache.get(categoryId);

  if (cached) {
    return cached;
  }

  const loaded = loaders[categoryId]().then((module) => {
    const points = module[exportNames[categoryId]];

    if (!points) {
      throw new Error(`Knowledge points missing for category: ${categoryId}`);
    }

    return filterCoreKnowledgePoints(categoryId, points);
  });

  categoryCache.set(categoryId, loaded);
  return loaded;
}
