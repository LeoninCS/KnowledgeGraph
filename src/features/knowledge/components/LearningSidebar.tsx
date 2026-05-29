import type { CategoryId } from "../../../data/types";
import type { Copy } from "../../../app/copy";
import { knowledgePointCounts } from "../../../data/knowledge-points/metadata";
import { categoryIcons } from "../knowledge-ui";

export function LearningSidebar({
  t,
  active,
  onSelect,
}: {
  t: Copy;
  active: CategoryId | "none";
  onSelect?: (categoryId: CategoryId) => void;
}) {
  return (
    <aside className="left-sidebar">
      <div className="path-header">
        <span>{t.learningPath}</span>
        <h2>{t.fundamentals}</h2>
      </div>
      <nav className="category-list">
        {t.categories.map(([id, name], index) => {
          const categoryId = id as CategoryId;
          const Icon = categoryIcons[index];
          const isActive = active === id;
          const count = knowledgePointCounts[categoryId];

          return (
            <button
              key={id}
              className={isActive ? "active" : ""}
              onClick={() => onSelect?.(categoryId)}
            >
              <span className="category-heading">
                <Icon size={19} />
                {name}
              </span>
              <small>{count}</small>
            </button>
          );
        })}
      </nav>
    </aside>
  );
}
