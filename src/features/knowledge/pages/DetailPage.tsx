import { ArrowRight, ExternalLink, GitCommitHorizontal, Network, PlayCircle } from "lucide-react";
import type { ReactNode } from "react";
import { getAlgorithmExampleProblems } from "../../../data/algorithm-example-problems";
import type { GraphKnowledgePoint } from "../../../data/knowledge-points/types";
import type { CategoryId } from "../../../data/types";
import { readLocalizedText } from "../../../data/visual-simulations/metadata";
import { buildVisualSimulation } from "../../../data/visual-simulations";
import type { Copy } from "../../../app/copy";
import type { Locale, Page } from "../../../app/ui-types";
import {
  buildDetailedExplanationItems,
  getPointCoreText,
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
  points,
  isLoading,
  onSelectCategory,
  onOpenDetail,
  onOpenSimulator,
}: {
  setPage: (page: Page) => void;
  t: Copy;
  locale: Locale;
  activeCategory: CategoryId;
  selectedKnowledgeId: string;
  points: GraphKnowledgePoint[];
  isLoading: boolean;
  onSelectCategory: (categoryId: CategoryId) => void;
  onOpenDetail: (categoryId: CategoryId, pointId: string) => void;
  onOpenSimulator: (categoryId: CategoryId, pointId: string) => void;
}) {
  const point =
    points.find((item) => item.id === selectedKnowledgeId) ?? points[0];
  const categoryLabel = getCategoryLabel(t, activeCategory);
  const pointTitle = point ? getKnowledgeLabel(point, locale) : categoryLabel;
  const pointSummary = point ? getPointCoreText(point, t) : t.sourceDescription;
  const explanationItems = point
    ? buildDetailedExplanationItems(point, activeCategory, locale, t, points)
    : [];
  const areaLabel = point ? getAreaLabel(getAreaKey(point), locale) : categoryLabel;
  const pointSources = resolvePointSources(activeCategory, point);
  const scenarioItems = point ? getPointScenarioItems(point) : [];
  const exampleProblems =
    activeCategory === "algorithm" && point ? getAlgorithmExampleProblems(point) : [];
  const learningOrder = point?.order ?? point?.learningPathPosition;
  const simulation = point ? buildVisualSimulation(activeCategory, point) : undefined;

  if (isLoading || !point) {
    return <main className="page-fallback page-with-topbar" />;
  }

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
                      <RichExplanation body={item.body} />
                    </section>
                  ))}
                </div>
              </InfoSection>
            )}
            <InfoSection title={t.prerequisites}>
              <div className="chip-list">
                {point.prerequisites.length ? (
                  point.prerequisites.map((id) => (
                    <KnowledgeChip
                      key={id}
                      id={id}
                      fallback={categoryLabel}
                      locale={locale}
                      points={points}
                      onOpenDetail={() => onOpenDetail(activeCategory, id)}
                    />
                  ))
                ) : (
                  <span>{categoryLabel}</span>
                )}
              </div>
            </InfoSection>
            <InfoSection title={t.related}>
              <div className="chip-list">
                {point.related.length ? (
                  point.related.map((id) => (
                    <KnowledgeChip
                      key={id}
                      id={id}
                      fallback={areaLabel}
                      locale={locale}
                      points={points}
                      onOpenDetail={() => onOpenDetail(activeCategory, id)}
                    />
                  ))
                ) : (
                  <span>{areaLabel}</span>
                )}
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

function RichExplanation({ body }: { body: string }) {
  const blocks = parseRichBlocks(body);

  return (
    <div className="rich-explanation">
      {blocks.map((block, index) => {
        const key = `${block.type}-${index}`;

        if (block.type === "code") {
          return (
            <pre key={key}>
              <code>{block.content}</code>
            </pre>
          );
        }

        if (block.type === "ordered-list") {
          return (
            <ol key={key}>
              {block.items.map((item) => (
                <li key={item}>{renderInlineCode(item)}</li>
              ))}
            </ol>
          );
        }

        if (block.type === "unordered-list") {
          return (
            <ul key={key}>
              {block.items.map((item) => (
                <li key={item}>{renderInlineCode(item)}</li>
              ))}
            </ul>
          );
        }

        return <p key={key}>{renderInlineCode(block.content)}</p>;
      })}
    </div>
  );
}

type RichBlock =
  | { type: "paragraph"; content: string }
  | { type: "code"; content: string }
  | { type: "ordered-list"; items: string[] }
  | { type: "unordered-list"; items: string[] };

function parseRichBlocks(body: string): RichBlock[] {
  const blocks: RichBlock[] = [];
  const lines = body.split("\n");
  let paragraph: string[] = [];
  let listType: "ordered-list" | "unordered-list" | null = null;
  let listItems: string[] = [];
  let codeLines: string[] = [];
  let inCodeBlock = false;

  const flushParagraph = () => {
    if (!paragraph.length) {
      return;
    }
    blocks.push({ type: "paragraph", content: paragraph.join(" ").trim() });
    paragraph = [];
  };

  const flushList = () => {
    if (!listType || !listItems.length) {
      return;
    }
    blocks.push({ type: listType, items: listItems });
    listType = null;
    listItems = [];
  };

  for (const line of lines) {
    const trimmed = line.trimEnd();

    if (trimmed.trim().startsWith("```")) {
      flushParagraph();
      flushList();
      if (inCodeBlock) {
        blocks.push({ type: "code", content: codeLines.join("\n") });
        codeLines = [];
        inCodeBlock = false;
      } else {
        inCodeBlock = true;
      }
      continue;
    }

    if (inCodeBlock) {
      codeLines.push(trimmed);
      continue;
    }

    if (!trimmed.trim()) {
      flushParagraph();
      flushList();
      continue;
    }

    const unorderedMatch = trimmed.match(/^\s*[-*]\s+(.+)$/);
    if (unorderedMatch) {
      flushParagraph();
      if (listType !== "unordered-list") {
        flushList();
        listType = "unordered-list";
      }
      listItems.push(unorderedMatch[1]);
      continue;
    }

    const orderedMatch = trimmed.match(/^\s*\d+\.\s+(.+)$/);
    if (orderedMatch) {
      flushParagraph();
      if (listType !== "ordered-list") {
        flushList();
        listType = "ordered-list";
      }
      listItems.push(orderedMatch[1]);
      continue;
    }

    flushList();
    paragraph.push(trimmed.trim());
  }

  if (inCodeBlock && codeLines.length) {
    blocks.push({ type: "code", content: codeLines.join("\n") });
  }
  flushParagraph();
  flushList();

  return blocks.length ? blocks : [{ type: "paragraph", content: body }];
}

function renderInlineCode(text: string) {
  return text.split(/(`[^`]+`)/g).map((part, index) => {
    if (part.startsWith("`") && part.endsWith("`")) {
      return <code key={`${part}-${index}`}>{part.slice(1, -1)}</code>;
    }

    return part;
  });
}

function KnowledgeChip({
  id,
  fallback,
  locale,
  points,
  onOpenDetail,
}: {
  id: string;
  fallback: string;
  locale: Locale;
  points: GraphKnowledgePoint[];
  onOpenDetail: () => void;
}) {
  const point = points.find((item) => item.id === id);

  if (!point) {
    return <span>{fallback}</span>;
  }

  return (
    <button type="button" className="knowledge-chip" onClick={onOpenDetail}>
      {getKnowledgeLabel(point, locale)}
      <ArrowRight size={13} />
    </button>
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
