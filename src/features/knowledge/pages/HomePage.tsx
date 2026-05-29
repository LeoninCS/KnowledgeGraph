import { Minus, Plus, RotateCcw, Search } from "lucide-react";
import {
  type MouseEvent,
  type PointerEvent,
  type WheelEvent,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import type { GraphKnowledgePoint } from "../../../data/knowledge-points/types";
import type { CategoryId } from "../../../data/types";
import type { Copy } from "../../../app/copy";
import type { GraphBoard, GraphMode, Locale } from "../../../app/ui-types";
import {
  categoryIcons,
  getVisualizablePoints,
  normalizeSearch,
} from "../knowledge-ui";
import { LearningSidebar } from "../components/LearningSidebar";
import { SphereGraphView } from "../components/SphereGraphView";
import { buildSphereGraphLayout, withFocusedRelations } from "../graph-layout";
import type { CanvasView, SphereGraph } from "../graph-types";

type CanvasDrag = {
  pointerId: number;
  startX: number;
  startY: number;
  originX: number;
  originY: number;
  moved: boolean;
  deferCapture: boolean;
};

type ActiveCanvasPointer = {
  x: number;
  y: number;
  pointerType: string;
};

type CanvasPinchGesture = {
  startDistance: number;
  startCenter: { x: number; y: number };
  originView: CanvasView;
};

const defaultCanvasZoom = 0.86;
const defaultCanvasView: CanvasView = { x: 0, y: 0, zoom: defaultCanvasZoom };
const minCanvasZoom = 0.56;
const maxCanvasZoom = 1.85;

function clampCanvasZoom(value: number) {
  return Math.min(maxCanvasZoom, Math.max(minCanvasZoom, value));
}

function getDefaultCanvasView(
  rect: DOMRect | undefined | null,
  graph: Pick<SphereGraph, "width" | "height" | "nodes">,
  focusPointId?: string,
): CanvasView {
  const zoom = defaultCanvasZoom;
  const focusedNode = graph.nodes.find((node) => node.id === focusPointId && node.kind === "knowledge");

  if (!rect) {
    return { x: 28, y: 26, zoom };
  }

  const scaledWidth = graph.width * zoom;
  const scaledHeight = graph.height * zoom;
  let targetLeft = scaledWidth < rect.width ? (rect.width - scaledWidth) / 2 : 28;
  let targetTop = scaledHeight < rect.height ? (rect.height - scaledHeight) / 2 : 26;

  if (focusedNode) {
    targetLeft = rect.width / 2 - (focusedNode.x + (focusedNode.width ?? 0) / 2) * zoom;
    targetTop = rect.height / 2 - (focusedNode.y + (focusedNode.height ?? 0) / 2) * zoom;
  }

  return {
    x: targetLeft,
    y: targetTop,
    zoom,
  };
}

function getWheelPanUnit(deltaMode: number, rect: DOMRect) {
  if (deltaMode === 1) {
    return 18;
  }

  if (deltaMode === 2) {
    return rect.height;
  }

  return 1;
}

function getWheelZoomDelta(event: WheelEvent<HTMLDivElement>) {
  if (event.deltaMode === 1) {
    return event.deltaY * 0.045;
  }

  if (event.deltaMode === 2) {
    return event.deltaY * 0.35;
  }

  return event.deltaY * 0.0012;
}

function clampCanvasTransform(view: CanvasView): CanvasView {
  return {
    ...view,
    zoom: clampCanvasZoom(view.zoom),
  };
}

function getZoomedCanvasView(
  view: CanvasView,
  nextZoom: number,
  point: { x: number; y: number },
  rect: DOMRect,
) {
  const zoom = clampCanvasZoom(nextZoom);
  const local = {
    x: (point.x - view.x) / view.zoom,
    y: (point.y - view.y) / view.zoom,
  };

  return clampCanvasTransform(
    {
      x: point.x - local.x * zoom,
      y: point.y - local.y * zoom,
      zoom,
    },
  );
}

function getPinchedCanvasView(
  view: CanvasView,
  nextZoom: number,
  startPoint: { x: number; y: number },
  currentPoint: { x: number; y: number },
  rect: DOMRect,
) {
  const zoom = clampCanvasZoom(nextZoom);
  const local = {
    x: (startPoint.x - view.x) / view.zoom,
    y: (startPoint.y - view.y) / view.zoom,
  };

  return clampCanvasTransform(
    {
      x: currentPoint.x - local.x * zoom,
      y: currentPoint.y - local.y * zoom,
      zoom,
    },
  );
}

function getPinchMetrics(pointers: ActiveCanvasPointer[], rect: DOMRect) {
  const [first, second] = pointers;
  const firstPoint = {
    x: first.x - rect.left,
    y: first.y - rect.top,
  };
  const secondPoint = {
    x: second.x - rect.left,
    y: second.y - rect.top,
  };

  return {
    center: {
      x: (firstPoint.x + secondPoint.x) / 2,
      y: (firstPoint.y + secondPoint.y) / 2,
    },
    distance: Math.max(1, Math.hypot(secondPoint.x - firstPoint.x, secondPoint.y - firstPoint.y)),
  };
}

function isCanvasControlTarget(target: EventTarget | null) {
  return (
    target instanceof Element &&
    Boolean(
      target.closest(
        ".graph-toolbar, .mobile-category-tabs, .search-status, .graph-canvas-controls",
      ),
    )
  );
}

function isCanvasNodeTarget(target: EventTarget | null) {
  return target instanceof Element && Boolean(target.closest(".sphere-node"));
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
  const [hoveredKnowledgeId, setHoveredKnowledgeId] = useState<string>();
  const [canvasView, setCanvasView] = useState<CanvasView>(defaultCanvasView);
  const [canvasDrag, setCanvasDrag] = useState<CanvasDrag>();
  const [isCanvasGestureActive, setIsCanvasGestureActive] = useState(false);
  const graphStageRef = useRef<HTMLDivElement>(null);
  const canvasViewRef = useRef(canvasView);
  const activePointersRef = useRef(new Map<number, ActiveCanvasPointer>());
  const pinchGestureRef = useRef<CanvasPinchGesture | null>(null);
  const suppressCanvasClickRef = useRef(false);
  const clickResetTimerRef = useRef<number | null>(null);
  const hasSearch = normalizeSearch(searchQuery).length > 0;
  const visualizablePoints = useMemo(
    () => getVisualizablePoints(selectedCategory, points),
    [selectedCategory, points],
  );
  const visualizableIdSet = useMemo(
    () => new Set(visualizablePoints.map((point) => point.id)),
    [visualizablePoints],
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

      return withFocusedRelations(layout, hoveredKnowledgeId ?? selectedKnowledgeId);
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
      hoveredKnowledgeId,
    ],
  );
  const hasResults = graph.nodes.some(
    (node) => node.kind === "knowledge" && node.matched,
  );
  const isEmptySearch = hasSearch && !hasResults;
  const zoomPercent = `${Math.round(canvasView.zoom * 100)}%`;
  const isCanvasInteracting = isCanvasGestureActive || Boolean(canvasDrag?.moved);

  useEffect(() => {
    canvasViewRef.current = canvasView;
  }, [canvasView]);

  useEffect(() => {
    activePointersRef.current.clear();
    pinchGestureRef.current = null;
    setCanvasView(getDefaultCanvasView(
      graphStageRef.current?.getBoundingClientRect(),
      graph,
      selectedKnowledgeId,
    ));
    setCanvasDrag(undefined);
    setIsCanvasGestureActive(false);
  }, [graph.width, graph.height, selectedCategory, selectedKnowledgeId, graphMode, graphBoard, searchQuery, locale]);

  useEffect(
    () => () => {
      if (clickResetTimerRef.current) {
        window.clearTimeout(clickResetTimerRef.current);
      }
    },
    [],
  );

  function resetCanvasView() {
    activePointersRef.current.clear();
    pinchGestureRef.current = null;
    setCanvasView(getDefaultCanvasView(
      graphStageRef.current?.getBoundingClientRect(),
      graph,
      selectedKnowledgeId,
    ));
    setCanvasDrag(undefined);
    setIsCanvasGestureActive(false);
  }

  function scheduleCanvasClickReset() {
    if (clickResetTimerRef.current) {
      window.clearTimeout(clickResetTimerRef.current);
    }

    clickResetTimerRef.current = window.setTimeout(() => {
      suppressCanvasClickRef.current = false;
    }, 220);
  }

  function startPinchGesture(rect: DOMRect) {
    const pointers = Array.from(activePointersRef.current.values());

    if (pointers.length < 2) {
      pinchGestureRef.current = null;
      return;
    }

    const metrics = getPinchMetrics(pointers.slice(0, 2), rect);
    pinchGestureRef.current = {
      startDistance: metrics.distance,
      startCenter: metrics.center,
      originView: canvasViewRef.current,
    };
    setCanvasDrag(undefined);
    setIsCanvasGestureActive(true);
  }

  function zoomCanvas(multiplier: number) {
    const rect = graphStageRef.current?.getBoundingClientRect();

    setCanvasView((view) => {
      if (!rect) {
        return {
          ...view,
          zoom: clampCanvasZoom(view.zoom * multiplier),
        };
      }

      return getZoomedCanvasView(
        view,
        view.zoom * multiplier,
        { x: rect.width / 2, y: rect.height / 2 },
        rect,
      );
    });
  }

  function handleCanvasWheel(event: WheelEvent<HTMLDivElement>) {
    event.preventDefault();

    const rect = event.currentTarget.getBoundingClientRect();
    const isZoomGesture = event.ctrlKey || event.metaKey;

    if (!isZoomGesture) {
      const panUnit = getWheelPanUnit(event.deltaMode, rect);
      const panX = event.shiftKey && Math.abs(event.deltaX) < 1 ? event.deltaY : event.deltaX;
      const panY = event.shiftKey && Math.abs(event.deltaX) < 1 ? 0 : event.deltaY;

      setCanvasView((view) =>
        clampCanvasTransform(
          {
            ...view,
            x: view.x - panX * panUnit,
            y: view.y - panY * panUnit,
          },
        ),
      );
      return;
    }

    const zoomFactor = Math.exp(-getWheelZoomDelta(event));
    const point = {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    };

    setCanvasView((view) => getZoomedCanvasView(view, view.zoom * zoomFactor, point, rect));
  }

  function handleCanvasPointerDown(event: PointerEvent<HTMLDivElement>) {
    if (event.pointerType === "mouse" && event.button !== 0) {
      return;
    }

    if (isCanvasControlTarget(event.target)) {
      return;
    }

    const deferCapture = isCanvasNodeTarget(event.target);

    if (!deferCapture) {
      event.currentTarget.setPointerCapture(event.pointerId);
    }

    activePointersRef.current.set(event.pointerId, {
      x: event.clientX,
      y: event.clientY,
      pointerType: event.pointerType,
    });

    if (activePointersRef.current.size >= 2) {
      startPinchGesture(event.currentTarget.getBoundingClientRect());
      return;
    }

    pinchGestureRef.current = null;
    setIsCanvasGestureActive(false);
    setCanvasDrag({
      pointerId: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
      originX: canvasView.x,
      originY: canvasView.y,
      moved: false,
      deferCapture,
    });
  }

  function handleCanvasPointerMove(event: PointerEvent<HTMLDivElement>) {
    const activePointer = activePointersRef.current.get(event.pointerId);

    if (activePointer) {
      activePointersRef.current.set(event.pointerId, {
        ...activePointer,
        x: event.clientX,
        y: event.clientY,
      });
    }

    if (activePointersRef.current.size >= 2) {
      event.preventDefault();
      suppressCanvasClickRef.current = true;

      const rect = event.currentTarget.getBoundingClientRect();
      const pointers = Array.from(activePointersRef.current.values()).slice(0, 2);
      const metrics = getPinchMetrics(pointers, rect);

      if (!pinchGestureRef.current) {
        startPinchGesture(rect);
      }

      const gesture = pinchGestureRef.current;

      if (!gesture) {
        return;
      }

      setCanvasView(
        getPinchedCanvasView(
          gesture.originView,
          gesture.originView.zoom * (metrics.distance / gesture.startDistance),
          gesture.startCenter,
          metrics.center,
          rect,
        ),
      );
      return;
    }

    if (!canvasDrag || canvasDrag.pointerId !== event.pointerId) {
      return;
    }

    const rect = event.currentTarget.getBoundingClientRect();
    const dx = event.clientX - canvasDrag.startX;
    const dy = event.clientY - canvasDrag.startY;
    const moved = canvasDrag.moved || Math.hypot(dx, dy) > 4;

    if (!moved) {
      return;
    }

    suppressCanvasClickRef.current = true;
    setIsCanvasGestureActive(true);

    if (canvasDrag.deferCapture && !event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.setPointerCapture(event.pointerId);
    }

    setCanvasView((view) => ({
      ...clampCanvasTransform(
        {
          ...view,
          x: canvasDrag.originX + dx,
          y: canvasDrag.originY + dy,
        },
      ),
    }));

    if (moved && !canvasDrag.moved) {
      setCanvasDrag({ ...canvasDrag, moved: true });
    }
  }

  function handleCanvasPointerUp(event: PointerEvent<HTMLDivElement>) {
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }

    activePointersRef.current.delete(event.pointerId);

    if (activePointersRef.current.size >= 2) {
      startPinchGesture(event.currentTarget.getBoundingClientRect());
      return;
    }

    pinchGestureRef.current = null;

    if (activePointersRef.current.size === 1) {
      const [remainingPointerId, pointer] = Array.from(activePointersRef.current.entries())[0];
      setCanvasDrag({
        pointerId: remainingPointerId,
        startX: pointer.x,
        startY: pointer.y,
        originX: canvasViewRef.current.x,
        originY: canvasViewRef.current.y,
        moved: true,
        deferCapture: false,
      });
      setIsCanvasGestureActive(true);
      return;
    }

    setCanvasDrag(undefined);
    setIsCanvasGestureActive(false);
    scheduleCanvasClickReset();
  }

  function handleCanvasClickCapture(event: MouseEvent<HTMLDivElement>) {
    if (!suppressCanvasClickRef.current) {
      return;
    }

    suppressCanvasClickRef.current = false;
    event.preventDefault();
    event.stopPropagation();
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
          <div
            ref={graphStageRef}
            className="sphere-graph-stage"
            onWheel={handleCanvasWheel}
            onPointerDown={handleCanvasPointerDown}
            onPointerMove={handleCanvasPointerMove}
            onPointerUp={handleCanvasPointerUp}
            onPointerCancel={handleCanvasPointerUp}
            onClickCapture={handleCanvasClickCapture}
            onDoubleClick={resetCanvasView}
          >
            <div
              className="sphere-graph-world"
              style={{
                width: `${graph.width}px`,
                height: `${graph.height}px`,
                transform: `translate3d(${canvasView.x}px, ${canvasView.y}px, 0) scale(${canvasView.zoom})`,
              }}
            >
              <SphereGraphView
                graph={graph}
                focusedLabel={t.focused}
                highlightedKnowledgeId={hoveredKnowledgeId}
                onOpenDetail={onOpenDetail}
                onHoverKnowledge={setHoveredKnowledgeId}
              />
            </div>
          </div>
        )}
        <div className="graph-canvas-controls" aria-label={t.canvasControls}>
          <button
            type="button"
            onClick={() => zoomCanvas(0.86)}
            title={t.zoomOut}
            aria-label={t.zoomOut}
          >
            <Minus size={19} />
          </button>
          <output className="canvas-zoom-readout" aria-live="polite">
            {zoomPercent}
          </output>
          <button
            type="button"
            onClick={() => zoomCanvas(1.16)}
            title={t.zoomIn}
            aria-label={t.zoomIn}
          >
            <Plus size={19} />
          </button>
          <button
            type="button"
            onClick={resetCanvasView}
            title={t.resetView}
            aria-label={t.resetView}
          >
            <RotateCcw size={18} />
          </button>
        </div>
        </section>
      )}
    </main>
  );
}

function PageGraphFallback() {
  return <div className="graph-empty-state" aria-busy="true" />;
}
