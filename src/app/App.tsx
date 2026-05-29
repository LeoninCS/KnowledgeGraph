import { lazy, Suspense, useEffect, useRef, useState } from "react";
import type { CategoryId } from "../data/types";
import { findBestSearchMatch } from "../features/knowledge/knowledge-ui";
import { AboutPage } from "../features/knowledge/pages/AboutPage";
import { HomePage } from "../features/knowledge/pages/HomePage";
import { useKnowledgeCatalog } from "../features/knowledge/useKnowledgeCatalog";
import { copy } from "./copy";
import { TopNav } from "./TopNav";
import type { GraphBoard, Locale, Page, Theme } from "./ui-types";

const DetailPage = lazy(() =>
  import("../features/knowledge/pages/DetailPage").then((module) => ({
    default: module.DetailPage,
  })),
);
const SimulatorPage = lazy(() =>
  import("../features/simulation/SimulatorPage").then((module) => ({
    default: module.SimulatorPage,
  })),
);

export function App() {
  const [page, setPage] = useState<Page>("home");
  const [theme, setTheme] = useState<Theme>("light");
  const [locale, setLocale] = useState<Locale>("zh");
  const [selectedCategory, setSelectedCategory] = useState<CategoryId>("go");
  const [selectedKnowledgeId, setSelectedKnowledgeId] = useState("go-overview");
  const [graphBoard, setGraphBoard] = useState<GraphBoard>("knowledge");
  const [searchQuery, setSearchQuery] = useState("");
  const searchRequestRef = useRef(0);
  const t = copy[locale];
  const {
    activePoints,
    categoryCache,
    isCategoryLoading,
  } = useKnowledgeCatalog(selectedCategory);

  useEffect(() => {
    if (
      activePoints.length > 0 &&
      !activePoints.some((point) => point.id === selectedKnowledgeId)
    ) {
      setSelectedKnowledgeId(activePoints[0].id);
    }
  }, [activePoints, selectedKnowledgeId]);

  function showCategoryGraph(categoryId: CategoryId) {
    setSelectedCategory(categoryId);
    setPage("home");
  }

  function openKnowledgeDetail(categoryId: CategoryId, pointId: string) {
    setSelectedCategory(categoryId);
    setSelectedKnowledgeId(pointId);
    setPage("detail");
  }

  function openSimulator(categoryId: CategoryId, pointId: string) {
    setSelectedCategory(categoryId);
    setSelectedKnowledgeId(pointId);
    setPage("simulator");
  }

  async function handleSearch(query: string) {
    const requestId = searchRequestRef.current + 1;
    searchRequestRef.current = requestId;
    setSearchQuery(query);
    const match = await findBestSearchMatch(t, query, categoryCache);

    if (requestId !== searchRequestRef.current) {
      return;
    }

    if (match) {
      setSelectedCategory(match.categoryId);
      setSelectedKnowledgeId(match.pointId);
    }

    setPage("home");
  }

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.lang = locale === "zh" ? "zh-CN" : "en";
  }, [theme, locale]);

  return (
    <div className="app-shell">
      <TopNav
        page={page}
        setPage={setPage}
        theme={theme}
        setTheme={setTheme}
        locale={locale}
        setLocale={setLocale}
        searchQuery={searchQuery}
        setSearchQuery={handleSearch}
        t={t}
      />
      {page === "home" && (
        <HomePage
          t={t}
          locale={locale}
          selectedCategory={selectedCategory}
          selectedKnowledgeId={selectedKnowledgeId}
          points={activePoints}
          isLoading={isCategoryLoading}
          graphBoard={graphBoard}
          searchQuery={searchQuery}
          onChangeGraphBoard={setGraphBoard}
          onSelectCategory={showCategoryGraph}
          onOpenDetail={openKnowledgeDetail}
        />
      )}
      {page === "detail" && (
        <Suspense fallback={<PageFallback />}>
          <DetailPage
            setPage={setPage}
            t={t}
            locale={locale}
            activeCategory={selectedCategory}
            selectedKnowledgeId={selectedKnowledgeId}
            points={activePoints}
            isLoading={isCategoryLoading}
            onSelectCategory={showCategoryGraph}
            onOpenDetail={openKnowledgeDetail}
            onOpenSimulator={openSimulator}
          />
        </Suspense>
      )}
      {page === "simulator" && (
        <Suspense fallback={<PageFallback />}>
          <SimulatorPage
            setPage={setPage}
            t={t}
            locale={locale}
            activeCategory={selectedCategory}
            selectedKnowledgeId={selectedKnowledgeId}
            points={activePoints}
            isLoading={isCategoryLoading}
          />
        </Suspense>
      )}
      {page === "about" && <AboutPage setPage={setPage} t={t} />}
    </div>
  );
}

function PageFallback() {
  return <main className="page-fallback page-with-topbar" />;
}
