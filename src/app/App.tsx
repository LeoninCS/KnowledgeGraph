import { lazy, Suspense, useEffect, useState } from "react";
import { knowledgePointsByCategory } from "../data/knowledge-points";
import type { CategoryId } from "../data/types";
import { findFirstSearchMatch } from "../features/knowledge/knowledge-ui";
import { AboutPage } from "../features/knowledge/pages/AboutPage";
import { HomePage } from "../features/knowledge/pages/HomePage";
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
  const [selectedCategory, setSelectedCategory] = useState<CategoryId>("network");
  const [selectedKnowledgeId, setSelectedKnowledgeId] = useState("tcp-handshake");
  const [graphBoard, setGraphBoard] = useState<GraphBoard>("knowledge");
  const [searchQuery, setSearchQuery] = useState("");
  const t = copy[locale];

  function showCategoryGraph(categoryId: CategoryId) {
    setSelectedCategory(categoryId);
    setSelectedKnowledgeId(
      knowledgePointsByCategory[categoryId][0]?.id ?? selectedKnowledgeId,
    );
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

  function handleSearch(query: string) {
    setSearchQuery(query);
    const matchCategory = findFirstSearchMatch(t, query);

    if (matchCategory) {
      setSelectedCategory(matchCategory);
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
