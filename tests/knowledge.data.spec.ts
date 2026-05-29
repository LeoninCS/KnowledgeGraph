import { expect, test } from "@playwright/test";
import { copy } from "../src/app/copy";
import { loadKnowledgePoints } from "../src/data/knowledge-points/loaders";
import { categoryIds } from "../src/data/knowledge-points/metadata";
import { knowledgeSources } from "../src/data/knowledge-points/sources";
import { visualPointIds } from "../src/data/visual-simulations/metadata";
import { buildSphereGraphLayout, withFocusedRelations } from "../src/features/knowledge/graph-layout";
import {
  essentialKnowledgeIds,
  findBestSearchMatch,
  findFirstSearchMatch,
  getPointSearchScore,
} from "../src/features/knowledge/knowledge-ui";

test("knowledge categories load with valid relationships and sources", async () => {
  const sourceIds = new Set(Object.keys(knowledgeSources));

  for (const categoryId of categoryIds) {
    const points = await loadKnowledgePoints(categoryId);
    const pointIds = new Set(points.map((point) => point.id));

    expect(points.length, `${categoryId} has points`).toBeGreaterThan(0);

    for (const point of points) {
      expect(point.zh, `${categoryId}/${point.id} zh`).toBeTruthy();
      expect(point.en, `${categoryId}/${point.id} en`).toBeTruthy();
      expect(["easy", "medium", "hard"], `${categoryId}/${point.id} difficulty`).toContain(point.difficulty);

      for (const sourceRef of point.sourceRefs ?? []) {
        expect(sourceIds.has(sourceRef), `${categoryId}/${point.id} source ${sourceRef}`).toBe(true);
      }

      for (const prerequisiteId of point.prerequisites) {
        expect(pointIds.has(prerequisiteId), `${categoryId}/${point.id} prerequisite ${prerequisiteId}`).toBe(true);
      }

      for (const relatedId of point.related) {
        expect(pointIds.has(relatedId), `${categoryId}/${point.id} related ${relatedId}`).toBe(true);
      }
    }
  }
});

test("core and visual point lists reference existing knowledge points", async () => {
  for (const categoryId of categoryIds) {
    const points = await loadKnowledgePoints(categoryId);
    const pointIds = new Set(points.map((point) => point.id));

    for (const id of essentialKnowledgeIds[categoryId]) {
      expect(pointIds.has(id), `${categoryId} core ${id}`).toBe(true);
    }

    for (const id of visualPointIds[categoryId] ?? []) {
      expect(pointIds.has(id), `${categoryId} visual ${id}`).toBe(true);
    }
  }
});

test("search scoring and category lookup find expected topics", async () => {
  const networkPoints = await loadKnowledgePoints("network");
  const tcp = networkPoints.find((point) => point.id === "tcp");

  expect(tcp).toBeTruthy();
  expect(getPointSearchScore(tcp!, "计算机网络", "tcp")).toBeGreaterThan(0);
  await expect(findFirstSearchMatch(copy.zh, "tcp", { network: networkPoints })).resolves.toBe("network");
  await expect(findBestSearchMatch(copy.zh, "tcp", { network: networkPoints })).resolves.toMatchObject({
    categoryId: "network",
    pointId: "tcp",
  });
});

test("graph layout builds cached base graph and focused relation overlay", async () => {
  const points = await loadKnowledgePoints("network");
  const visualizableIdSet = new Set((visualPointIds.network ?? []));
  const graph = buildSphereGraphLayout({
    t: copy.zh,
    locale: "zh",
    selectedCategory: "network",
    selectedKnowledgeId: "tcp",
    allPoints: points,
    graphMode: "core",
    graphBoard: "knowledge",
    searchQuery: "",
    visualizableIdSet,
  });
  const focused = withFocusedRelations(graph, "tcp");

  expect(graph.nodes.some((node) => node.id === "tcp")).toBe(true);
  expect(graph.edges.length).toBeGreaterThan(0);
  expect(focused.edges.length).toBeGreaterThanOrEqual(graph.edges.length);
});
