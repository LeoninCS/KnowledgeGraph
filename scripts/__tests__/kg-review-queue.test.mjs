import assert from "node:assert/strict";
import { mkdtemp, readFile, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { test } from "node:test";
import { execFile } from "node:child_process";
import { promisify } from "node:util";

const execFileAsync = promisify(execFile);
const repoRoot = join(import.meta.dirname, "../..");

async function git(args, options = {}) {
  return execFileAsync("git", args, {
    cwd: repoRoot,
    maxBuffer: 1024 * 1024 * 10,
    ...options,
  });
}

async function node(args, options = {}) {
  return execFileAsync("node", args, {
    maxBuffer: 1024 * 1024 * 10,
    ...options,
  });
}

test("sync-counts updates stale KG_REVIEWED source counts", async () => {
  const worktree = await mkdtemp(join(tmpdir(), "kg-review-sync-"));
  await rm(worktree, { recursive: true, force: true });

  try {
    await git(["worktree", "add", "--detach", worktree, "HEAD"]);
    await writeFile(
      join(worktree, "scripts/kg-review-queue.mjs"),
      await readFile(join(repoRoot, "scripts/kg-review-queue.mjs"), "utf8"),
    );

    const networkPath = join(worktree, "src/data/knowledge-points/network.ts");
    const original = await readFile(networkPath, "utf8");
    const stale = original.replace(
      /KG_REVIEWED: TCP 拥塞控制 \| \d{4}-\d{2}-\d{2} \| source_count=\d+/,
      "KG_REVIEWED: TCP 拥塞控制 | 2026-05-30 | source_count=1",
    );
    assert.notEqual(stale, original);
    await writeFile(networkPath, stale);

    await assert.rejects(
      node(["scripts/kg-review-queue.mjs", "validate"], { cwd: worktree }),
      (error) => error.stdout.includes("marker-source-count-mismatch"),
    );

    const { stdout } = await node(["scripts/kg-review-queue.mjs", "sync-counts", "--date", "2026-06-04"], {
      cwd: worktree,
    });
    const result = JSON.parse(stdout);

    assert.equal(result.synced.length, 1);
    assert.deepEqual(result.synced[0], {
      item: "network/tcp-congestion-control",
      markerSourceCount: 1,
      actualSourceCount: 7,
    });

    const fixed = await readFile(networkPath, "utf8");
    assert.match(
      fixed,
      /KG_REVIEWED: TCP 拥塞控制 \| 2026-06-04 \| source_count=7/,
    );

    await node(["scripts/kg-review-queue.mjs", "validate"], { cwd: worktree });
  } finally {
    await git(["worktree", "remove", "--force", worktree]).catch(() => {});
  }
});

test("strict article validation flags shallow reviewed explanations", async () => {
  const worktree = await mkdtemp(join(tmpdir(), "kg-review-article-"));
  await rm(worktree, { recursive: true, force: true });

  try {
    await git(["worktree", "add", "--detach", worktree, "HEAD"]);
    await writeFile(
      join(worktree, "scripts/kg-review-queue.mjs"),
      await readFile(join(repoRoot, "scripts/kg-review-queue.mjs"), "utf8"),
    );

    const networkPath = join(worktree, "src/data/knowledge-points/network.ts");
    const original = await readFile(networkPath, "utf8");
    const shallow = original.replace(
      /explanation: \[\n      "概念定义：计算机网络[\s\S]*?      "参考来源：分层和主机\/路由器模型采用 RFC 1122；互联网组成、packet、protocol、router、switch 和 Web 加载流程参考 Cloudflare、MDN 与 Cisco；IP、子网、网关和路由排查参考 Microsoft Learn；TCP\/IP 封装过程参考 Oracle Solaris；中文 URL 访问链路参考小林 coding。",\n    \]/,
      `explanation: [
      "概念定义：网络基础概览帮助理解主机之间如何通信。",
      "核心机制：应用数据经过协议栈发送到对端。",
    ]`,
    );
    assert.notEqual(shallow, original);
    await writeFile(networkPath, shallow);

    await assert.rejects(
      node(["scripts/kg-review-queue.mjs", "validate", "--strict-article", "--ids", "network/network-overview"], {
        cwd: worktree,
      }),
      (error) =>
        error.stdout.includes("article-explanation-too-short") &&
        error.stdout.includes("article-source-note-missing") &&
        error.stdout.includes("article-format-structure-missing") &&
        error.stdout.includes("article-practice-or-troubleshooting-missing"),
    );
  } finally {
    await git(["worktree", "remove", "--force", worktree]).catch(() => {});
  }
});
