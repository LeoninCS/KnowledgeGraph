import { useCallback, useEffect, useState } from "react";
import { loadKnowledgePoints } from "../../data/knowledge-points/loaders";
import type { GraphKnowledgePoint } from "../../data/knowledge-points/types";
import type { CategoryId } from "../../data/types";
import { sortKnowledgePointsByOrder } from "./knowledge-ui";

type CategoryPointCache = Partial<Record<CategoryId, GraphKnowledgePoint[]>>;

export function useKnowledgeCatalog(selectedCategory: CategoryId) {
  const [categoryCache, setCategoryCache] = useState<CategoryPointCache>({});
  const [loadingCategories, setLoadingCategories] = useState<Partial<Record<CategoryId, boolean>>>({});
  const activePoints = categoryCache[selectedCategory] ?? [];
  const isCategoryLoading = Boolean(loadingCategories[selectedCategory]) || !categoryCache[selectedCategory];

  const loadCategory = useCallback((categoryId: CategoryId) => {
    const cached = categoryCache[categoryId];

    if (cached) {
      return Promise.resolve(cached);
    }

    setLoadingCategories((current) => ({ ...current, [categoryId]: true }));

    return loadKnowledgePoints(categoryId)
      .then((points) => {
        const sortedPoints = sortKnowledgePointsByOrder(points);
        setCategoryCache((current) => ({
          ...current,
          [categoryId]: sortedPoints,
        }));
        return sortedPoints;
      })
      .finally(() => {
        setLoadingCategories((current) => ({ ...current, [categoryId]: false }));
      });
  }, [categoryCache]);

  useEffect(() => {
    let isActive = true;

    loadCategory(selectedCategory).then(() => {
      if (!isActive) {
        return;
      }
    });

    return () => {
      isActive = false;
    };
  }, [loadCategory, selectedCategory]);

  return {
    activePoints,
    categoryCache,
    isCategoryLoading,
    loadCategory,
  };
}
