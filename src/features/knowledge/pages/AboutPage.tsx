import { ArrowRight } from "lucide-react";
import type { Copy } from "../../../app/copy";
import type { Page } from "../../../app/ui-types";

export function AboutPage({ setPage, t }: { setPage: (page: Page) => void; t: Copy }) {
  return (
    <main className="about-shell page-with-topbar">
      <section className="about-hero">
        <span className="pill">{t.about}</span>
        <h1>{t.aboutTitle}</h1>
        <p>{t.aboutLead}</p>
        <button className="primary-button" onClick={() => setPage("home")}>
          {t.navGraph}
          <ArrowRight size={17} />
        </button>
      </section>
      <section className="about-grid">
        {t.aboutSections.map(([title, body]) => (
          <article className="about-card" key={title}>
            <h2>{title}</h2>
            <p>{body}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
