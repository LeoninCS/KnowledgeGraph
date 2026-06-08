import { readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { categoryIds } from "../src/data/knowledge-points/metadata.ts";
import {
  knowledgePointsByCategory,
} from "../src/data/knowledge-points/index.ts";
import { visualPointIds } from "../src/data/visual-simulations/metadata.ts";

const scriptDir = dirname(fileURLToPath(import.meta.url));
const rootDir = join(scriptDir, "..");
const dataDir = join(rootDir, "src/data/knowledge-points");
const articleProgressPath = join(rootDir, "docs/kg-article-progress.md");
const visualProgressPath = join(rootDir, "docs/kg-visual-progress.md");
const campaignStartDate = "2026-06-05";

const categoryFiles = {
  go: "go.ts",
  network: "network.ts",
  os: "os.ts",
  algorithm: "algorithm.ts",
  redis: "redis.ts",
  mysql: "mysql.ts",
  rabbitmq: "rabbitmq.ts",
  backend: "backend.ts",
  docker: "docker.ts",
  kubernetes: "kubernetes.ts",
  agent: "agent.ts",
};

function parseArgs(argv) {
  const result = {};
  for (let index = 0; index < argv.length; index += 1) {
    const item = argv[index];
    if (!item.startsWith("--")) {
      continue;
    }

    const key = item.slice(2);
    const next = argv[index + 1];
    if (next && !next.startsWith("--")) {
      result[key] = next;
      index += 1;
    } else {
      result[key] = true;
    }
  }
  return result;
}

function today() {
  return new Date().toISOString().slice(0, 10);
}

function articleStatus(marker) {
  if (!marker) {
    return "未开始";
  }

  return marker.date >= campaignStartDate ? "已优化" : "未开始";
}

function parseReviewedMarkers(source) {
  const markersByTitle = new Map();
  const markerPattern = /KG_REVIEWED:\s*(.*?)\s*\|\s*(\d{4}-\d{2}-\d{2})\s*\|\s*source_count=(\d+)/g;
  let match;

  while ((match = markerPattern.exec(source))) {
    markersByTitle.set(match[1].trim(), {
      date: match[2],
      sourceCount: Number(match[3]),
    });
  }

  return markersByTitle;
}

async function readArticleRows() {
  const rowsByCategory = {};

  for (const categoryId of categoryIds) {
    const source = await readFile(join(dataDir, categoryFiles[categoryId]), "utf8");
    const markersByTitle = parseReviewedMarkers(source);
    rowsByCategory[categoryId] = knowledgePointsByCategory[categoryId].map((point) => {
      const marker = markersByTitle.get(point.zh) ?? null;

      return {
        id: point.id,
        zh: point.zh,
        en: point.en,
        status: articleStatus(marker),
        reviewedDate: marker?.date ?? "",
        sourceCount: marker?.sourceCount ?? "",
      };
    });
  }

  return rowsByCategory;
}

function readVisualRows() {
  const rowsByCategory = {};

  for (const categoryId of categoryIds) {
    const visualIds = new Set(visualPointIds[categoryId] ?? []);
    rowsByCategory[categoryId] = knowledgePointsByCategory[categoryId].map((point) => ({
      id: point.id,
      zh: point.zh,
      en: point.en,
      status: visualIds.has(point.id) ? "已可视化" : "未开始",
    }));
  }

  return rowsByCategory;
}

function countByStatus(rows, status) {
  return rows.filter((row) => row.status === status).length;
}

function formatTable(headers, rows) {
  return [
    `| ${headers.join(" | ")} |`,
    `| ${headers.map(() => "---").join(" | ")} |`,
    ...rows.map((row) => `| ${row.join(" | ")} |`),
  ].join("\n");
}

function formatArticleDoc(rowsByCategory, generatedAt) {
  const allRows = Object.values(rowsByCategory).flat();
  const optimized = countByStatus(allRows, "已优化");
  const pending = countByStatus(allRows, "未开始");
  const lines = [
    "# 知识点文章优化进度",
    "",
    `生成日期：${generatedAt}`,
    `本轮起始日期：${campaignStartDate}`,
    "",
    "## 总览",
    "",
    formatTable(
      ["总数", "已优化", "未开始"],
      [[String(allRows.length), String(optimized), String(pending)]],
    ),
    "",
    "## 分类进度",
    "",
    formatTable(
      ["分类", "总数", "已优化", "未开始"],
      categoryIds.map((categoryId) => {
        const rows = rowsByCategory[categoryId];
        return [
          categoryId,
          String(rows.length),
          String(countByStatus(rows, "已优化")),
          String(countByStatus(rows, "未开始")),
        ];
      }),
    ),
    "",
  ];

  for (const categoryId of categoryIds) {
    const rows = rowsByCategory[categoryId];
    lines.push(
      `## ${categoryId}`,
      "",
      formatTable(
        ["状态", "ID", "中文名", "英文名", "Reviewed 日期", "来源数"],
        rows.map((row) => [
          row.status,
          `\`${row.id}\``,
          row.zh,
          row.en,
          row.reviewedDate || "-",
          String(row.sourceCount || "-"),
        ]),
      ),
      "",
    );
  }

  return `${lines.join("\n")}\n`;
}

function formatVisualDoc(rowsByCategory, generatedAt) {
  const allRows = Object.values(rowsByCategory).flat();
  const visualized = countByStatus(allRows, "已可视化");
  const pending = countByStatus(allRows, "未开始");
  const lines = [
    "# 知识点可视化进度",
    "",
    `生成日期：${generatedAt}`,
    "",
    "## 总览",
    "",
    formatTable(
      ["总数", "已可视化", "未开始"],
      [[String(allRows.length), String(visualized), String(pending)]],
    ),
    "",
    "## 分类进度",
    "",
    formatTable(
      ["分类", "总数", "已可视化", "未开始"],
      categoryIds.map((categoryId) => {
        const rows = rowsByCategory[categoryId];
        return [
          categoryId,
          String(rows.length),
          String(countByStatus(rows, "已可视化")),
          String(countByStatus(rows, "未开始")),
        ];
      }),
    ),
    "",
  ];

  for (const categoryId of categoryIds) {
    const rows = rowsByCategory[categoryId];
    lines.push(
      `## ${categoryId}`,
      "",
      formatTable(
        ["状态", "ID", "中文名", "英文名"],
        rows.map((row) => [row.status, `\`${row.id}\``, row.zh, row.en]),
      ),
      "",
    );
  }

  return `${lines.join("\n")}\n`;
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const generatedAt = args.date ?? today();
  const articleRows = await readArticleRows();
  const visualRows = readVisualRows();

  await writeFile(articleProgressPath, formatArticleDoc(articleRows, generatedAt));
  await writeFile(visualProgressPath, formatVisualDoc(visualRows, generatedAt));

  process.stdout.write(JSON.stringify({
    generatedAt,
    files: [
      "docs/kg-article-progress.md",
      "docs/kg-visual-progress.md",
    ],
  }, null, 2));
  process.stdout.write("\n");
}

await main();
