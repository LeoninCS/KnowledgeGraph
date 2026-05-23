import { ArrowLeft, Moon, Search, Sun, Waypoints } from "lucide-react";
import type { Copy } from "./copy";
import type { Locale, Page, Theme } from "./ui-types";

export function TopNav({
  page,
  setPage,
  theme,
  setTheme,
  locale,
  setLocale,
  searchQuery,
  setSearchQuery,
  t,
}: {
  page: Page;
  setPage: (page: Page) => void;
  theme: Theme;
  setTheme: (theme: Theme) => void;
  locale: Locale;
  setLocale: (locale: Locale) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  t: Copy;
}) {
  const themeLabel = theme === "light" ? t.themeLight : t.themeDark;

  return (
    <header className="top-nav">
      <div className="brand-area">
        <button className="brand" onClick={() => setPage("home")}>
          <Waypoints size={22} />
          <span>{t.appName}</span>
        </button>
        {page === "simulator" ? (
          <button className="nav-link inline-back" onClick={() => setPage("detail")}>
            <ArrowLeft size={16} />
            {t.backDetail}
          </button>
        ) : (
          <nav className="primary-nav">
            <button
              className={page === "home" ? "active" : ""}
              onClick={() => setPage("home")}
            >
              {t.navGraph}
            </button>
            <a
              href="https://github.com/LeoninCS/KnowledgeGraph"
              target="_blank"
              rel="noreferrer"
            >
              {t.github}
            </a>
            <button
              className={page === "about" ? "active" : ""}
              onClick={() => setPage("about")}
            >
              {t.about}
            </button>
          </nav>
        )}
      </div>
      <div className="top-actions">
        {page !== "simulator" && (
          <label className="search-box">
            <Search size={16} />
            <input
              id="knowledge-search"
              name="knowledge-search"
              value={searchQuery}
              onInput={(event) => setSearchQuery(event.currentTarget.value)}
              placeholder={t.searchPlaceholder}
            />
          </label>
        )}
        <button
          className="icon-text-button"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          title={themeLabel}
        >
          {theme === "light" ? <Sun size={17} /> : <Moon size={17} />}
          <span>{themeLabel}</span>
        </button>
        <button
          className="icon-text-button"
          onClick={() => setLocale(locale === "zh" ? "en" : "zh")}
        >
          <span className="language-mark">{locale === "zh" ? "中" : "EN"}</span>
          <span>{t.lang}</span>
        </button>
      </div>
    </header>
  );
}
