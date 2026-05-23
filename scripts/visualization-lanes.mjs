import { cp, mkdir, readFile, rm, symlink } from "node:fs/promises";
import { existsSync } from "node:fs";
import { execFile } from "node:child_process";
import { promisify } from "node:util";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const execFileAsync = promisify(execFile);
const scriptDir = dirname(fileURLToPath(import.meta.url));
const rootDir = resolve(scriptDir, "..");
const repoParent = resolve(rootDir, "..");
const laneRoot = join(repoParent, "KnowledgeGraph-visual-lanes");
const categories = [
  "network",
  "os",
  "algorithm",
  "mysql",
  "redis",
  "rabbitmq",
  "backend",
  "docker",
  "kubernetes",
  "agent",
];
const infraPaths = [
  ".gitignore",
  "package.json",
  "scripts",
  "docs/visualization-workflow.md",
  "src/data/visual-simulations.ts",
];

function printJson(value) {
  process.stdout.write(`${JSON.stringify(value, null, 2)}\n`);
}

function truncate(value, maxLength) {
  const text = value ? String(value) : "";
  return text.length > maxLength ? `${text.slice(0, maxLength - 1)}…` : text;
}

function pad(value, width) {
  const text = truncate(value, width);
  return `${text}${" ".repeat(Math.max(0, width - text.length))}`;
}

function percent(done, total) {
  if (!total) {
    return "0%";
  }
  return `${Math.round((done / total) * 100)}%`;
}

function parseArgs(argv) {
  const result = { _: [] };
  for (let index = 0; index < argv.length; index += 1) {
    const item = argv[index];
    if (!item.startsWith("--")) {
      result._.push(item);
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

function splitList(value) {
  if (!value) {
    return [];
  }
  return String(value).split(",").map((item) => item.trim()).filter(Boolean);
}

function selectedCategories(args) {
  const requested = splitList(args.category ?? args.categories);
  return requested.length ? requested : categories;
}

function lanePath(category) {
  return join(laneRoot, category);
}

function laneBranch(category) {
  return `codex/visual-${category}`;
}

async function git(args, cwd = rootDir) {
  const { stdout, stderr } = await execFileAsync("git", args, {
    cwd,
    maxBuffer: 1024 * 1024 * 20,
  });
  return `${stdout}${stderr}`;
}

async function runNode(args, cwd) {
  try {
    const { stdout } = await execFileAsync("node", args, {
      cwd,
      maxBuffer: 1024 * 1024 * 20,
    });
    return JSON.parse(stdout);
  } catch (error) {
    return {
      error: error.message,
      stdout: error.stdout,
      stderr: error.stderr,
    };
  }
}

async function latestCommit(cwd) {
  try {
    return (await git(["log", "-1", "--pretty=format:%h %cr %s"], cwd)).trim();
  } catch {
    return "";
  }
}

async function shortStatus(cwd) {
  try {
    return (await git(["status", "--short"], cwd)).trim();
  } catch {
    return "";
  }
}

async function copyInfra(targetDir) {
  for (const item of infraPaths) {
    const source = join(rootDir, item);
    if (!existsSync(source)) {
      continue;
    }
    const target = join(targetDir, item);
    await mkdir(dirname(target), { recursive: true });
    await cp(source, target, { recursive: true, force: true });
  }
}

async function linkNodeModules(targetDir) {
  const source = join(rootDir, "node_modules");
  const target = join(targetDir, "node_modules");
  if (!existsSync(source) || existsSync(target)) {
    return;
  }
  await symlink(source, target, "dir");
}

async function setup(args) {
  await mkdir(laneRoot, { recursive: true });
  const base = args.base ?? "HEAD";
  const created = [];
  for (const category of selectedCategories(args)) {
    const path = lanePath(category);
    const branch = laneBranch(category);
    if (!existsSync(path)) {
      await git(["worktree", "add", "-B", branch, path, base]);
    }
    await copyInfra(path);
    await linkNodeModules(path);
    created.push({ category, branch, path });
  }
  printJson({ laneRoot, lanes: created });
}

async function status(args) {
  const worktrees = await git(["worktree", "list", "--porcelain"]);
  const lanes = selectedCategories(args).map((category) => ({
    category,
    branch: laneBranch(category),
    path: lanePath(category),
    exists: existsSync(lanePath(category)),
  }));
  printJson({ laneRoot, lanes, worktrees });
}

async function dashboard(args) {
  const lanes = [];
  for (const category of selectedCategories(args)) {
    const path = lanePath(category);
    if (!existsSync(path)) {
      lanes.push({
        category,
        branch: laneBranch(category),
        path,
        exists: false,
      });
      continue;
    }

    const queueStatus = await runNode([
      "scripts/visualization-queue.mjs",
      "status",
      "--category",
      category,
    ], path);
    const research = await runNode([
      "scripts/visualization-queue.mjs",
      "research-list",
    ], path);

    lanes.push({
      category,
      branch: laneBranch(category),
      path,
      exists: true,
      queue: {
        status: queueStatus.status,
        total: queueStatus.total,
        done: queueStatus.done,
        pending: queueStatus.pending,
        next: queueStatus.next
          ? `${queueStatus.next.id} / ${queueStatus.next.zh}`
          : null,
        current: queueStatus.current
          ? `${queueStatus.current.id} / ${queueStatus.current.zh} / ${queueStatus.current.step ?? queueStatus.current.reason ?? ""}`
          : null,
      },
      research: {
        total: research.total ?? 0,
        ready: research.ready ?? 0,
      },
      git: {
        latestCommit: await latestCommit(path),
        dirty: Boolean(await shortStatus(path)),
      },
    });
  }

  printJson({
    generatedAt: new Date().toISOString(),
    laneRoot,
    totals: lanes.reduce((acc, lane) => {
      acc.total += lane.queue?.total ?? 0;
      acc.done += lane.queue?.done ?? 0;
      acc.pending += lane.queue?.pending ?? 0;
      acc.readyResearch += lane.research?.ready ?? 0;
      return acc;
    }, { total: 0, done: 0, pending: 0, readyResearch: 0 }),
    lanes,
  });
}

async function board(args) {
  const lanes = [];
  for (const category of selectedCategories(args)) {
    const path = lanePath(category);
    if (!existsSync(path)) {
      lanes.push({
        category,
        status: "missing",
        done: 0,
        total: 0,
        pending: 0,
        current: "",
        next: "",
        ready: 0,
        git: "",
        dirty: "",
      });
      continue;
    }

    const queueStatus = await runNode([
      "scripts/visualization-queue.mjs",
      "status",
      "--category",
      category,
    ], path);
    const research = await runNode([
      "scripts/visualization-queue.mjs",
      "research-list",
    ], path);
    const latest = await latestCommit(path);
    const dirty = Boolean(await shortStatus(path));

    lanes.push({
      category,
      status: queueStatus.status ?? "unknown",
      done: queueStatus.done ?? 0,
      total: queueStatus.total ?? 0,
      pending: queueStatus.pending ?? 0,
      current: queueStatus.current
        ? `${queueStatus.current.id}:${queueStatus.current.step ?? ""}`
        : "",
      next: queueStatus.next ? queueStatus.next.id : "",
      ready: research.ready ?? 0,
      git: latest.split(" ").slice(0, 3).join(" "),
      dirty: dirty ? "yes" : "",
    });
  }

  const totals = lanes.reduce((acc, lane) => {
    acc.total += lane.total;
    acc.done += lane.done;
    acc.pending += lane.pending;
    acc.ready += lane.ready;
    return acc;
  }, { total: 0, done: 0, pending: 0, ready: 0 });

  const widths = {
    category: 12,
    status: 8,
    progress: 12,
    pending: 7,
    current: 28,
    next: 24,
    ready: 6,
    dirty: 5,
    git: 18,
  };
  const header = [
    pad("category", widths.category),
    pad("status", widths.status),
    pad("progress", widths.progress),
    pad("pending", widths.pending),
    pad("current", widths.current),
    pad("next", widths.next),
    pad("ready", widths.ready),
    pad("dirty", widths.dirty),
    pad("git", widths.git),
  ].join("  ");
  const separator = "-".repeat(header.length);
  const rows = lanes.map((lane) => [
    pad(lane.category, widths.category),
    pad(lane.status, widths.status),
    pad(`${lane.done}/${lane.total} ${percent(lane.done, lane.total)}`, widths.progress),
    pad(lane.pending, widths.pending),
    pad(lane.current, widths.current),
    pad(lane.next, widths.next),
    pad(lane.ready, widths.ready),
    pad(lane.dirty, widths.dirty),
    pad(lane.git, widths.git),
  ].join("  "));

  process.stdout.write([
    `KnowledgeGraph visualization lanes`,
    `Generated: ${new Date().toISOString()}`,
    `Total: ${totals.done}/${totals.total} (${percent(totals.done, totals.total)}) | pending ${totals.pending} | ready research ${totals.ready}`,
    "",
    header,
    separator,
    ...rows,
    "",
    `Lane root: ${laneRoot}`,
  ].join("\n"));
  process.stdout.write("\n");
}

async function ignite(args) {
  const started = [];
  for (const category of selectedCategories(args)) {
    const path = lanePath(category);
    if (!existsSync(path)) {
      started.push({
        category,
        path,
        status: "missing",
      });
      continue;
    }
    const result = await runNode([
      "scripts/visualization-queue.mjs",
      "start",
      "--category",
      category,
    ], path);
    started.push({
      category,
      path,
      status: result.status ?? "unknown",
      current: result.current
        ? `${result.current.id} / ${result.current.zh} / ${result.current.step}`
        : null,
      pending: result.pending,
    });
  }
  printJson({
    generatedAt: new Date().toISOString(),
    started,
  });
}

async function syncInfra(args) {
  const synced = [];
  for (const category of selectedCategories(args)) {
    const path = lanePath(category);
    if (!existsSync(path)) {
      continue;
    }
    await copyInfra(path);
    await linkNodeModules(path);
    synced.push({ category, path });
  }
  printJson({ synced });
}

async function clean(args) {
  const removed = [];
  for (const category of selectedCategories(args)) {
    const path = lanePath(category);
    if (!existsSync(path)) {
      continue;
    }
    await git(["worktree", "remove", "--force", path]);
    removed.push({ category, path });
  }
  if (args.all) {
    await rm(laneRoot, { recursive: true, force: true });
  }
  printJson({ removed });
}

async function main() {
  const [command = "status", ...rest] = process.argv.slice(2);
  const args = parseArgs(rest);
  if (command === "setup") {
    await setup(args);
    return;
  }
  if (command === "status") {
    await status(args);
    return;
  }
  if (command === "dashboard") {
    await dashboard(args);
    return;
  }
  if (command === "board") {
    await board(args);
    return;
  }
  if (command === "ignite") {
    await ignite(args);
    return;
  }
  if (command === "sync") {
    await syncInfra(args);
    return;
  }
  if (command === "clean") {
    await clean(args);
    return;
  }
  throw new Error(`Unknown command: ${command}`);
}

main().catch((error) => {
  process.stderr.write(`${error.stack ?? error.message}\n`);
  process.exit(1);
});
