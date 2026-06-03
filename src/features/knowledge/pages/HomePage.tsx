import { ArrowRight, GitBranch, Minus, Plus, RotateCcw, Search } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  TransformComponent,
  TransformWrapper,
  type ReactZoomPanPinchContentRef,
} from "react-zoom-pan-pinch";
import type { Copy } from "../../../app/copy";
import type { GraphBoard, GraphMode, Locale } from "../../../app/ui-types";
import type { GraphKnowledgePoint } from "../../../data/knowledge-points/types";
import type { CategoryId } from "../../../data/types";
import { LearningSidebar } from "../components/LearningSidebar";
import { SphereGraphView } from "../components/SphereGraphView";
import { buildSphereGraphLayout, withFocusedRelations } from "../graph-layout";
import type { CanvasView, SphereGraph } from "../graph-types";
import {
  categoryIcons,
  getAreaLabel,
  getKnowledgeLabel,
  getVisualizablePoints,
  normalizeSearch,
} from "../knowledge-ui";

const defaultCanvasZoom = 0.86;
const defaultCanvasView: CanvasView = { x: 0, y: 0, zoom: defaultCanvasZoom };
const minCanvasZoom = 0.42;
const maxCanvasZoom = 2.35;
const canvasZoomStep = 0.16;
const canvasControlAnimationMs = 180;
const canvasResetAnimationMs = 120;
const desktopSidebarWidth = 264;
const desktopTopbarHeight = 68;
const mobileTopbarHeight = 64;
const fallbackStageRect = { width: 960, height: 620 };
const graphContentPadding = 72;
const graphFitPadding = 24;

const transformExcludedTargets = [
  "graph-toolbar",
  "mobile-category-tabs",
  "search-status",
  "graph-canvas-controls",
  "graph-relation-panel",
];
const panningExcludedTargets = [...transformExcludedTargets, "sphere-node"];

type CanvasStageRect = Pick<DOMRect, "width" | "height">;
type GraphContentBounds = {
  left: number;
  top: number;
  width: number;
  height: number;
};

function getViewportStageRect(): CanvasStageRect {
  if (typeof window === "undefined") {
    return fallbackStageRect;
  }

  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;
  const isMobile = viewportWidth <= 900;
  const isSidebarHidden = viewportWidth <= 1100;
  const canvasWidth = isSidebarHidden ? viewportWidth : viewportWidth - desktopSidebarWidth;
  const canvasHeight = viewportHeight - (isMobile ? mobileTopbarHeight : desktopTopbarHeight);
  const stageInset = isMobile
    ? { top: 118, right: -30, bottom: 106, left: -30 }
    : {
        top: 58,
        right: viewportWidth <= 1180 ? 320 : 360,
        bottom: 106,
        left: 34,
      };

  return {
    width: Math.max(320, canvasWidth - stageInset.left - stageInset.right),
    height: Math.max(320, canvasHeight - stageInset.top - stageInset.bottom),
  };
}

function getDefaultCanvasView(
  rect: CanvasStageRect | undefined | null,
  graph: Pick<SphereGraph, "width" | "height" | "nodes">,
  focusPointId?: string,
  centerFocusNode = false,
): CanvasView {
  const stageRect = rect ?? fallbackStageRect;
  const bounds = getGraphContentBounds(graph);
  const focusedNode = centerFocusNode
    ? graph.nodes.find((node) => node.id === focusPointId && node.kind === "knowledge")
    : undefined;

  if (focusedNode) {
    const box = getGraphNodeBox(focusedNode);
    const zoom = defaultCanvasZoom;

    return {
      x: stageRect.width / 2 - (box.left + box.width / 2) * zoom,
      y: stageRect.height / 2 - (box.top + box.height / 2) * zoom,
      zoom,
    };
  }

  const zoom = getGraphCenteredZoom(stageRect, bounds);

  return {
    x: stageRect.width / 2 - (bounds.left + bounds.width / 2) * zoom,
    y: stageRect.height / 2 - (bounds.top + bounds.height / 2) * zoom,
    zoom,
  };
}

function getGraphNodeBox(node: SphereGraph["nodes"][number]) {
  const width = node.width ?? node.radius * 2;
  const height = node.height ?? node.radius * 2;

  if (node.width && node.height) {
    return {
      left: node.x,
      top: node.y,
      width,
      height,
    };
  }

  return {
    left: node.x - node.radius,
    top: node.y - node.radius,
    width,
    height,
  };
}

function getGraphContentBounds(
  graph: Pick<SphereGraph, "width" | "height" | "nodes">,
): GraphContentBounds {
  if (graph.nodes.length === 0) {
    return {
      left: 0,
      top: 0,
      width: Math.max(1, graph.width),
      height: Math.max(1, graph.height),
    };
  }

  const boxes = graph.nodes.map(getGraphNodeBox);
  const left = Math.min(...boxes.map((box) => box.left));
  const top = Math.min(...boxes.map((box) => box.top));
  const right = Math.max(...boxes.map((box) => box.left + box.width));
  const bottom = Math.max(...boxes.map((box) => box.top + box.height));
  const paddedLeft = Math.max(0, left - graphContentPadding);
  const paddedTop = Math.max(0, top - graphContentPadding);
  const paddedRight = Math.min(graph.width, right + graphContentPadding);
  const paddedBottom = Math.min(graph.height, bottom + graphContentPadding);

  return {
    left: paddedLeft,
    top: paddedTop,
    width: Math.max(1, paddedRight - paddedLeft),
    height: Math.max(1, paddedBottom - paddedTop),
  };
}

function getGraphCenteredZoom(rect: CanvasStageRect, bounds: GraphContentBounds) {
  const availableWidth = Math.max(1, rect.width - graphFitPadding * 2);
  const availableHeight = Math.max(1, rect.height - graphFitPadding * 2);
  const fitZoom = Math.min(availableWidth / bounds.width, availableHeight / bounds.height);

  return Math.min(maxCanvasZoom, Math.max(minCanvasZoom, Math.min(defaultCanvasZoom, fitZoom)));
}

function PageGraphFallback() {
  return <div className="graph-empty-state" aria-busy="true" />;
}

type GraphRelationItem = {
  point: GraphKnowledgePoint;
  relation: "prerequisite" | "dependent" | "related";
};

function getGraphRelationItems(points: GraphKnowledgePoint[], focusPointId: string) {
  const pointById = new Map(points.map((point) => [point.id, point]));
  const focusPoint = pointById.get(focusPointId) ?? points[0];

  if (!focusPoint) {
    return {
      focusPoint: undefined,
      prerequisites: [],
      dependents: [],
      related: [],
    };
  }

  return {
    focusPoint,
    prerequisites: focusPoint.prerequisites
      .map((id) => pointById.get(id))
      .filter((point): point is GraphKnowledgePoint => Boolean(point))
      .map((point) => ({ point, relation: "prerequisite" as const })),
    dependents: points
      .filter((point) => point.prerequisites.includes(focusPoint.id))
      .map((point) => ({ point, relation: "dependent" as const })),
    related: focusPoint.related
      .map((id) => pointById.get(id))
      .filter((point): point is GraphKnowledgePoint => Boolean(point))
      .map((point) => ({ point, relation: "related" as const })),
  };
}

export function HomePage({
  t,
  locale,
  selectedCategory,
  selectedKnowledgeId,
  points,
  isLoading,
  graphBoard,
  searchQuery,
  onChangeGraphBoard,
  onSelectCategory,
  onOpenDetail,
}: {
  t: Copy;
  locale: Locale;
  selectedCategory: CategoryId;
  selectedKnowledgeId: string;
  points: GraphKnowledgePoint[];
  isLoading: boolean;
  graphBoard: GraphBoard;
  searchQuery: string;
  onChangeGraphBoard: (graphBoard: GraphBoard) => void;
  onSelectCategory: (categoryId: CategoryId) => void;
  onOpenDetail: (categoryId: CategoryId, pointId: string) => void;
}) {
  const [graphMode, setGraphMode] = useState<GraphMode>("core");
  const [focusedKnowledgeId, setFocusedKnowledgeId] = useState(selectedKnowledgeId);
  const [canvasView, setCanvasView] = useState<CanvasView>(defaultCanvasView);
  const [isCanvasGestureActive, setIsCanvasGestureActive] = useState(false);
  const transformRef = useRef<ReactZoomPanPinchContentRef | null>(null);
  const hasSearch = normalizeSearch(searchQuery).length > 0;
  const visualizablePoints = useMemo(
    () => getVisualizablePoints(selectedCategory, points),
    [selectedCategory, points],
  );
  const visualizableIdSet = useMemo(
    () => new Set(visualizablePoints.map((point) => point.id)),
    [visualizablePoints],
  );
  const graphFocusId = points.some((point) => point.id === focusedKnowledgeId)
    ? focusedKnowledgeId
    : selectedKnowledgeId;
  const relationPanel = useMemo(
    () => getGraphRelationItems(points, graphFocusId),
    [points, graphFocusId],
  );
  const graph = useMemo(
    () => {
      const layout = buildSphereGraphLayout({
        t,
        locale,
        selectedCategory,
        selectedKnowledgeId,
        allPoints: points,
        graphMode,
        graphBoard,
        searchQuery,
        visualizableIdSet,
      });

      return withFocusedRelations(layout, graphFocusId);
    },
    [
      t,
      locale,
      selectedCategory,
      selectedKnowledgeId,
      points,
      graphMode,
      graphBoard,
      searchQuery,
      visualizableIdSet,
      graphFocusId,
    ],
  );
  const graphTransformKey = [
    selectedCategory,
    selectedKnowledgeId,
    graphMode,
    graphBoard,
    searchQuery,
    locale,
    points.length,
    graph.width,
    graph.height,
  ].join(":");
  const shouldCenterFocusNode = hasSearch || graphFocusId !== selectedKnowledgeId;
  const initialCanvasView = useMemo(
    () => getDefaultCanvasView(getViewportStageRect(), graph, graphFocusId, shouldCenterFocusNode),
    [graph, graphFocusId, shouldCenterFocusNode],
  );
  const hasResults = graph.nodes.some(
    (node) => node.kind === "knowledge" && node.matched,
  );
  const isEmptySearch = hasSearch && !hasResults;
  const zoomPercent = `${Math.round(canvasView.zoom * 100)}%`;
  const canZoomOut = canvasView.zoom > minCanvasZoom + 0.01;
  const canZoomIn = canvasView.zoom < maxCanvasZoom - 0.01;
  const isCanvasInteracting = isCanvasGestureActive;

  useEffect(() => {
    setFocusedKnowledgeId(selectedKnowledgeId);
  }, [selectedCategory, selectedKnowledgeId]);

  useEffect(() => {
    const ref = transformRef.current;

    if (!ref || isEmptySearch) {
      return;
    }

    window.requestAnimationFrame(() => {
      applyCanvasView(ref, getDefaultTransform(ref), canvasControlAnimationMs);
    });
  }, [graphTransformKey, graphFocusId, shouldCenterFocusNode, isEmptySearch]);

  function getDefaultTransform(ref: ReactZoomPanPinchContentRef | null) {
    return getDefaultCanvasView(
      ref?.instance.wrapperComponent?.getBoundingClientRect(),
      graph,
      graphFocusId,
      shouldCenterFocusNode,
    );
  }

  function applyCanvasView(
    ref: ReactZoomPanPinchContentRef | null,
    view: CanvasView,
    animationTime = 0,
  ) {
    setCanvasView(view);
    ref?.setTransform(view.x, view.y, view.zoom, animationTime, "easeOut");
  }

  function handleTransformInit(ref: ReactZoomPanPinchContentRef) {
    transformRef.current = ref;
    window.requestAnimationFrame(() => {
      applyCanvasView(ref, getDefaultTransform(ref));
    });
  }

  function resetCanvasView(animationTime = canvasResetAnimationMs) {
    const ref = transformRef.current;
    applyCanvasView(ref, getDefaultTransform(ref), animationTime);
    setIsCanvasGestureActive(false);
  }

  return (
    <main className="home-layout page-with-topbar">
      <LearningSidebar
        t={t}
        active={selectedCategory}
        onSelect={onSelectCategory}
      />
      {isLoading ? (
        <section className="graph-canvas" aria-label={t.navGraph}>
          <PageGraphFallback />
        </section>
      ) : (
        <section
          className={`graph-canvas ${isCanvasInteracting ? "is-panning" : ""}`}
          aria-label={t.navGraph}
        >
          <div className="mobile-category-tabs" aria-label={t.learningPath}>
            {t.categories.map(([id, name], index) => {
              const categoryId = id as CategoryId;
              const Icon = categoryIcons[index];

              return (
                <button
                  key={id}
                  className={selectedCategory === id ? "active" : ""}
                  onClick={() => onSelectCategory(categoryId)}
                >
                  <Icon size={16} />
                  <span>{name}</span>
                </button>
              );
            })}
          </div>
          {hasSearch && (
            <div className="search-status">
              <Search size={16} />
              <span>{hasResults ? t.searchResults : t.noSearchResult}</span>
              <strong>{searchQuery}</strong>
            </div>
          )}
          <div className="graph-toolbar">
            <div className="graph-mode-switch" aria-label={t.graphBoard}>
              <button
                className={graphBoard === "knowledge" ? "active" : ""}
                onClick={() => onChangeGraphBoard("knowledge")}
              >
                {t.knowledgeBoard}
              </button>
              <button
                className={graphBoard === "visual" ? "active" : ""}
                onClick={() => onChangeGraphBoard("visual")}
              >
                {t.visualBoard}
              </button>
            </div>
            <div className="graph-mode-switch scope-switch" aria-label={t.graphMode}>
              <button
                className={graphMode === "core" ? "active" : ""}
                onClick={() => setGraphMode("core")}
              >
                {t.coreMode}
              </button>
              <button
                className={graphMode === "all" ? "active" : ""}
                onClick={() => setGraphMode("all")}
              >
                {t.allMode}
              </button>
            </div>
          </div>
          {isEmptySearch ? (
            <div className="graph-empty-state">
              <Search size={28} />
              <h2>{t.noSearchResult}</h2>
              <p>{searchQuery}</p>
            </div>
          ) : (
            <TransformWrapper
              key={graphTransformKey}
              ref={transformRef}
              initialScale={initialCanvasView.zoom}
              initialPositionX={initialCanvasView.x}
              initialPositionY={initialCanvasView.y}
              minScale={minCanvasZoom}
              maxScale={maxCanvasZoom}
              limitToBounds={false}
              centerZoomedOut={false}
              wheel={{
                step: 0.0022,
                excluded: transformExcludedTargets,
              }}
              panning={{
                excluded: panningExcludedTargets,
                velocityDisabled: false,
              }}
              pinch={{
                step: 6,
                excluded: transformExcludedTargets,
              }}
              doubleClick={{
                step: 0.24,
                mode: "zoomIn",
                animationTime: canvasControlAnimationMs,
                animationType: "easeOut",
                excluded: panningExcludedTargets,
              }}
              zoomAnimation={{
                size: 0.18,
                animationTime: canvasControlAnimationMs,
                animationType: "easeOut",
              }}
              velocityAnimation={{
                sensitivityMouse: 1,
                sensitivityTouch: 1.15,
                maxStrengthMouse: 16,
                maxStrengthTouch: 32,
                inertia: 0.78,
                animationTime: 260,
                maxAnimationTime: 520,
                animationType: "easeOut",
              }}
              onInit={handleTransformInit}
              onTransform={(_, state) =>
                setCanvasView({
                  x: state.positionX,
                  y: state.positionY,
                  zoom: state.scale,
                })
              }
              onPanningStart={() => setIsCanvasGestureActive(true)}
              onPanningStop={() => setIsCanvasGestureActive(false)}
              onPinchStart={() => setIsCanvasGestureActive(true)}
              onPinchStop={() => setIsCanvasGestureActive(false)}
            >
              {({ zoomIn, zoomOut }) => (
                <>
                  <TransformComponent
                    wrapperClass="sphere-graph-stage"
                    contentClass="sphere-graph-world"
                    contentStyle={{
                      width: `${graph.width}px`,
                      height: `${graph.height}px`,
                    }}
                  >
                    <SphereGraphView
                      graph={graph}
                      focusedLabel={t.focused}
                      highlightedKnowledgeId={graphFocusId}
                      onOpenDetail={onOpenDetail}
                      onFocusKnowledge={setFocusedKnowledgeId}
                    />
                  </TransformComponent>
                  <GraphRelationPanel
                    t={t}
                    locale={locale}
                    categoryId={selectedCategory}
                    focusPoint={relationPanel.focusPoint}
                    prerequisites={relationPanel.prerequisites}
                    dependents={relationPanel.dependents}
                    related={relationPanel.related}
                    onFocusKnowledge={setFocusedKnowledgeId}
                    onOpenDetail={onOpenDetail}
                  />
                  <div className="graph-canvas-controls" aria-label={t.canvasControls}>
                    <button
                      type="button"
                      onClick={() => zoomOut(canvasZoomStep, canvasControlAnimationMs, "easeOut")}
                      title={t.zoomOut}
                      aria-label={t.zoomOut}
                      disabled={!canZoomOut}
                    >
                      <Minus size={19} />
                    </button>
                    <output className="canvas-zoom-readout" aria-live="polite">
                      {zoomPercent}
                    </output>
                    <button
                      type="button"
                      onClick={() => zoomIn(canvasZoomStep, canvasControlAnimationMs, "easeOut")}
                      title={t.zoomIn}
                      aria-label={t.zoomIn}
                      disabled={!canZoomIn}
                    >
                      <Plus size={19} />
                    </button>
                    <button
                      type="button"
                      onClick={() => resetCanvasView()}
                      title={t.resetView}
                      aria-label={t.resetView}
                    >
                      <RotateCcw size={18} />
                    </button>
                  </div>
                </>
              )}
            </TransformWrapper>
          )}
        </section>
      )}
    </main>
  );
}

function GraphRelationPanel({
  t,
  locale,
  categoryId,
  focusPoint,
  prerequisites,
  dependents,
  related,
  onFocusKnowledge,
  onOpenDetail,
}: {
  t: Copy;
  locale: Locale;
  categoryId: CategoryId;
  focusPoint?: GraphKnowledgePoint;
  prerequisites: GraphRelationItem[];
  dependents: GraphRelationItem[];
  related: GraphRelationItem[];
  onFocusKnowledge: (pointId: string) => void;
  onOpenDetail: (categoryId: CategoryId, pointId: string) => void;
}) {
  if (!focusPoint) {
    return null;
  }

  const title = getKnowledgeLabel(focusPoint, locale);
  const areaLabel = getAreaLabel(focusPoint.area ?? focusPoint.layer ?? "foundation", locale);

  return (
    <aside className="graph-relation-panel" aria-label={`${title} ${t.related}`}>
      <header>
        <span>
          <GitBranch size={15} />
          {t.related}
        </span>
        <h2>{title}</h2>
        <p>{focusPoint.summary ?? focusPoint.concept ?? areaLabel}</p>
        <button type="button" onClick={() => onOpenDetail(categoryId, focusPoint.id)}>
          {t.viewDetail}
          <ArrowRight size={15} />
        </button>
      </header>
      <GraphRelationSection
        title={t.prerequisites}
        items={prerequisites}
        locale={locale}
        emptyText={areaLabel}
        onFocusKnowledge={onFocusKnowledge}
      />
      <GraphRelationSection
        title={locale === "zh" ? "后续知识" : "Next"}
        items={dependents}
        locale={locale}
        emptyText={areaLabel}
        onFocusKnowledge={onFocusKnowledge}
      />
      <GraphRelationSection
        title={t.related}
        items={related}
        locale={locale}
        emptyText={areaLabel}
        onFocusKnowledge={onFocusKnowledge}
      />
    </aside>
  );
}

function GraphRelationSection({
  title,
  items,
  locale,
  emptyText,
  onFocusKnowledge,
}: {
  title: string;
  items: GraphRelationItem[];
  locale: Locale;
  emptyText: string;
  onFocusKnowledge: (pointId: string) => void;
}) {
  return (
    <section>
      <h3>{title}</h3>
      {items.length > 0 ? (
        <div className="graph-relation-list">
          {items.slice(0, 8).map(({ point, relation }) => (
            <button
              key={`${relation}:${point.id}`}
              type="button"
              onClick={() => onFocusKnowledge(point.id)}
            >
              <span>{getKnowledgeLabel(point, locale)}</span>
              <small>{getAreaLabel(point.area ?? point.layer ?? "foundation", locale)}</small>
            </button>
          ))}
        </div>
      ) : (
        <p className="graph-relation-empty">{emptyText}</p>
      )}
    </section>
  );
}
