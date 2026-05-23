import {
  ArrowLeft,
  BookOpen,
  CheckCircle2,
  CircleHelp,
  RefreshCw,
  Send,
  Zap,
} from "lucide-react";
import { useEffect, useState } from "react";
import { knowledgePointsByCategory } from "../../data/knowledge-points";
import type { CategoryId } from "../../data/types";
import { readLocalizedText } from "../../data/visual-simulations/metadata";
import { buildVisualSimulation } from "../../data/visual-simulations";
import type { Copy } from "../../app/copy";
import type { Locale, Page, Step } from "../../app/ui-types";
import { getSimulationActorStates, SimulationStage } from "./stages";

export function SimulatorPage({
  setPage,
  t,
  locale,
  activeCategory,
  selectedKnowledgeId,
}: {
  setPage: (page: Page) => void;
  t: Copy;
  locale: Locale;
  activeCategory: CategoryId;
  selectedKnowledgeId: string;
}) {
  const points = knowledgePointsByCategory[activeCategory];
  const point = points.find((item) => item.id === selectedKnowledgeId) ?? points[0];
  const simulation = buildVisualSimulation(activeCategory, point);
  const [step, setStep] = useState<Step>(0);
  const [error, setError] = useState(false);

  useEffect(() => {
    setStep(0);
    setError(false);
  }, [simulation?.key]);

  if (!simulation) {
    return (
      <main className="simulator-empty page-with-topbar">
        <button className="secondary-button" onClick={() => setPage("detail")}>
          <ArrowLeft size={16} />
          {t.backDetail}
        </button>
        <h1>{t.visualizablePoints}</h1>
        <p>{t.visualizableIntro}</p>
      </main>
    );
  }

  const completedSteps = Math.min(step, simulation.steps.length);
  const activeStep = simulation.steps[Math.min(step, simulation.steps.length - 1)];
  const activeStepIndex = Math.min(step, simulation.steps.length - 1);
  const isComplete = step >= simulation.steps.length;
  const history = simulation.steps.slice(0, completedSteps);
  const actorStates = getSimulationActorStates(simulation, completedSteps);
  const progress = Math.round((completedSteps / simulation.steps.length) * 100);

  function reset() {
    setStep(0);
    setError(false);
  }

  function goBack() {
    setStep((currentStep) => Math.max(currentStep - 1, 0));
    setError(false);
  }

  function handleAction(actionIndex: number) {
    if (actionIndex !== step || isComplete) {
      setError(true);
      window.setTimeout(() => setError(false), 1200);
      return;
    }

    setError(false);
    setStep(step + 1);
  }

  return (
    <main className="simulator-shell page-with-topbar">
      <section className="simulator-canvas">
        <div className="sim-top-row">
          <span className="sim-context">{readLocalizedText(simulation.pattern, locale)}</span>
          <div>
            <h1>{readLocalizedText(simulation.title, locale)}</h1>
            <p>{readLocalizedText(simulation.subtitle, locale)}</p>
          </div>
          <div className="sim-control-group">
            <button className="secondary-button" onClick={goBack} disabled={step <= 0}>
              <ArrowLeft size={16} />
              {t.previousAction}
            </button>
            <button className="secondary-button" onClick={reset}>
              <RefreshCw size={16} />
              {t.reset}
            </button>
          </div>
        </div>
        <SimulationStage
          simulation={simulation}
          locale={locale}
          completedSteps={completedSteps}
          activeStepIndex={activeStepIndex}
          actorStates={actorStates}
        />
      </section>
      <aside className="simulator-panel">
        <section>
          <h2>
            <BookOpen size={18} />
            {t.currentTask}
          </h2>
          <p className="task-text">
            {isComplete
              ? t.complete
              : readLocalizedText(activeStep.description, locale)}
          </p>
          <div className="progress-meter" aria-label={t.progress}>
            <span style={{ width: `${progress}%` }} />
          </div>
        </section>
        <section className="action-section">
          <h2>
            <Zap size={18} />
            {t.actionPanel}
          </h2>
          {simulation.steps.map((item, index) => {
            const enabled = index === step && !isComplete;

            return (
              <button
                key={readLocalizedText(item.action, locale)}
                className={enabled ? "sim-action enabled" : "sim-action"}
                disabled={!enabled}
                onClick={() => handleAction(index)}
              >
                <span>{readLocalizedText(item.action, locale)}</span>
                {completedSteps > index ? <CheckCircle2 size={17} /> : <Send size={17} />}
              </button>
            );
          })}
        </section>
        <section className="feedback-card">
          <h2>
            <CircleHelp size={18} />
            {t.stepInsight}
          </h2>
          <div className={error ? "feedback error" : completedSteps > 0 ? "feedback success" : "feedback"}>
            {error ? (
              <>
                <CircleHelp size={28} />
                <strong>{t.invalid}</strong>
              </>
            ) : completedSteps > 0 ? (
              <>
                <CheckCircle2 size={28} />
                <strong>
                  {readLocalizedText(simulation.steps[completedSteps - 1].insight, locale)}
                </strong>
              </>
            ) : (
              <>
                <CircleHelp size={28} />
                <strong>{t.waitingFeedback}</strong>
              </>
            )}
          </div>
        </section>
        <section className="history-card">
          <h2>{t.history}</h2>
          {history.length ? (
            history.map((item, index) => (
              <p key={`${readLocalizedText(item.title, locale)}-${index}`}>
                <strong>{index + 1}.</strong> {readLocalizedText(item.title, locale)}
              </p>
            ))
          ) : (
            <p className="muted">{t.waitingAction}</p>
          )}
        </section>
      </aside>
      <footer className="timeline">
        {simulation.steps.map((item, index) => {
          const done = completedSteps > index;
          const active = step === index && !isComplete;

          return (
            <div
              className={`timeline-item ${done ? "done" : ""} ${active ? "active" : ""}`}
              key={readLocalizedText(item.title, locale)}
            >
              <span>{done ? <CheckCircle2 size={18} /> : index + 1}</span>
              <small>{readLocalizedText(item.title, locale)}</small>
            </div>
          );
        })}
      </footer>
    </main>
  );
}
