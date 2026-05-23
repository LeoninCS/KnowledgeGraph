import { ArrowRight, ExternalLink, GitCommitHorizontal, Network, PlayCircle } from "lucide-react";
import type { ReactNode } from "react";
import { getAlgorithmExampleProblems } from "../../../data/algorithm-example-problems";
import { knowledgePointsByCategory } from "../../../data/knowledge-points";
import type { CategoryId } from "../../../data/types";
import { readLocalizedText } from "../../../data/visual-simulations/metadata";
import { buildVisualSimulation } from "../../../data/visual-simulations";
import type { Copy } from "../../../app/copy";
import type { Locale, Page } from "../../../app/ui-types";
import {
  buildDetailedExplanationItems,
  getPointCoreText,
  getPointLabelsByIds,
  getPointScenarioItems,
} from "../explanations";
import {
  getAreaKey,
  getAreaLabel,
  getCategoryLabel,
  getDifficultyLabel,
  getKnowledgeLabel,
  resolvePointSources,
} from "../knowledge-ui";
import { LearningSidebar } from "../components/LearningSidebar";

export function DetailPage({
  setPage,
  t,
  locale,
  activeCategory,
  selectedKnowledgeId,
  onSelectCategory,
  onOpenDetail,
  onOpenSimulator,
}: {
  setPage: (page: Page) => void;
  t: Copy;
  locale: Locale;
  activeCategory: CategoryId;
  selectedKnowledgeId: string;
  onSelectCategory: (categoryId: CategoryId) => void;
  onOpenDetail: (categoryId: CategoryId, pointId: string) => void;
  onOpenSimulator: (categoryId: CategoryId, pointId: string) => void;
}) {
  const points = knowledgePointsByCategory[activeCategory];
  const point =
    points.find((item) => item.id === selectedKnowledgeId) ?? points[0];
  const categoryLabel = getCategoryLabel(t, activeCategory);
  const pointTitle = point ? getKnowledgeLabel(point, locale) : categoryLabel;
  const pointSummary = point ? getPointCoreText(point, t) : t.sourceDescription;
  const explanationItems = point
    ? buildDetailedExplanationItems(point, activeCategory, locale, t)
    : [];
  const areaLabel = point ? getAreaLabel(getAreaKey(point), locale) : categoryLabel;
  const pointSources = resolvePointSources(activeCategory, point);
  const prerequisiteLabels = point
    ? getPointLabelsByIds(point.prerequisites, points, locale)
    : [];
  const relatedLabels = point ? getPointLabelsByIds(point.related, points, locale) : [];
  const scenarioItems = point ? getPointScenarioItems(point) : [];
  const exampleProblems =
    activeCategory === "algorithm" && point ? getAlgorithmExampleProblems(point) : [];
  const learningOrder = point?.order ?? point?.learningPathPosition;
  const simulation = point ? buildVisualSimulation(activeCategory, point) : undefined;

  return (
    <main className="detail-shell page-with-topbar">
      <LearningSidebar
        t={t}
        active={activeCategory}
        onSelect={onSelectCategory}
      />
      <div className="detail-content">
        <nav className="breadcrumbs">
          <button onClick={() => setPage("home")}>{t.breadcrumbGraph}</button>
          <ArrowRight size={14} />
          <span>{categoryLabel}</span>
          <ArrowRight size={14} />
          <strong>{pointTitle}</strong>
        </nav>
        <div className="detail-grid">
          <article className="article-flow">
            <header className="hero-panel">
              <div className="tag-row">
                {point && (
                  <span className="pill accent-teal">
                    {getDifficultyLabel(point.difficulty, t)}
                  </span>
                )}
                <span className="pill">{areaLabel}</span>
                {learningOrder && <span className="pill">#{learningOrder}</span>}
              </div>
              <h1>{pointTitle}</h1>
              <p>{pointSummary}</p>
              <div className="hero-facts">
                <span>
                  <Network size={17} />
                  {categoryLabel}
                </span>
                <span>{areaLabel}</span>
                {point?.en && <span>{point.en}</span>}
              </div>
            </header>
            {point && simulation && (
              <SimulationCta
                className="mobile-detail-cta"
                t={t}
                locale={locale}
                simulation={simulation}
                onOpen={() => onOpenSimulator(activeCategory, point.id)}
              />
            )}
            {explanationItems.length > 0 && (
              <InfoSection title={t.explanation}>
                <div className="explanation-flow">
                  {explanationItems.map((item) => (
                    <section key={item.title} className="explanation-card">
                      <h3>{item.title}</h3>
                      <p>{item.body}</p>
                    </section>
                  ))}
                </div>
              </InfoSection>
            )}
            <InfoSection title={t.prerequisites}>
              <div className="chip-list">
                {(prerequisiteLabels.length ? prerequisiteLabels : [categoryLabel]).map((label) => (
                  <span key={label}>{label}</span>
                ))}
              </div>
            </InfoSection>
            <InfoSection title={t.related}>
              <div className="chip-list">
                {(relatedLabels.length ? relatedLabels : [areaLabel]).map((label) => (
                  <span key={label}>{label}</span>
                ))}
              </div>
            </InfoSection>
            {scenarioItems.length > 0 && (
              <InfoSection title={t.scenarioExamples}>
                <div className="detail-list">
                  {scenarioItems.slice(0, 8).map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </InfoSection>
            )}
            {exampleProblems.length > 0 && (
              <InfoSection title={t.exampleProblems}>
                <div className="example-problem-list">
                  {exampleProblems.map((problem) => (
                    <a
                      key={problem.id}
                      className="example-problem-card"
                      href={problem.url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span>
                        <strong>{problem.title[locale]}</strong>
                        <p>{problem.reason[locale]}</p>
                      </span>
                      <small>
                        {problem.source}
                        <ExternalLink size={14} />
                      </small>
                    </a>
                  ))}
                </div>
              </InfoSection>
            )}
          </article>
          <aside className="detail-aside">
            {point && simulation && (
              <SimulationCta
                t={t}
                locale={locale}
                simulation={simulation}
                onOpen={() => onOpenSimulator(activeCategory, point.id)}
              />
            )}
            {simulation && (
              <div className="contents-panel simulation-signals">
                <h3>{t.simulationMetrics}</h3>
                {simulation.metrics.map((metric) => (
                  <span key={readLocalizedText(metric, locale)}>
                    <GitCommitHorizontal size={14} />
                    {readLocalizedText(metric, locale)}
                  </span>
                ))}
              </div>
            )}
            <div className="contents-panel">
              <h3>{t.sourceReferences}</h3>
              <p>{t.sourceDescription}</p>
              {pointSources.map((source) =>
                source.found ? (
                  <a
                    key={source.id}
                    href={source.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {source.title}
                    <ExternalLink size={14} />
                  </a>
                ) : (
                  <span className="missing-source" key={source.id}>
                    {source.title}
                  </span>
                ),
              )}
            </div>
          </aside>
        </div>
        <footer className="footer-line">
          <span>© 2026 KnowledgeGraph Academic</span>
          <a>{t.privacy}</a>
          <a>{t.terms}</a>
          <a>{t.feedbackLink}</a>
        </footer>
      </div>
    </main>
  );
}

function SimulationCta({
  t,
  locale,
  simulation,
  onOpen,
  className = "",
}: {
  t: Copy;
  locale: Locale;
  simulation: NonNullable<ReturnType<typeof buildVisualSimulation>>;
  onOpen: () => void;
  className?: string;
}) {
  return (
    <div className={`cta-panel ${className}`.trim()}>
      <PlayCircle size={34} />
      <h2>{readLocalizedText(simulation.title, locale)}</h2>
      <p>{readLocalizedText(simulation.subtitle, locale)}</p>
      <div className="simulation-meta-list">
        <span>{t.visualPattern}</span>
        <strong>{readLocalizedText(simulation.pattern, locale)}</strong>
      </div>
      <button onClick={onOpen}>
        {readLocalizedText(simulation.entryLabel, locale)}
        <ArrowRight size={17} />
      </button>
    </div>
  );
}

function InfoSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="info-section">
      <header>{title}</header>
      <div>{children}</div>
    </section>
  );
}
