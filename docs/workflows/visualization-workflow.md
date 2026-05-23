# Visualization Workflow

This project treats visualization work as a resumable queue. The source of truth for completed items is the internal tag `ai-visualized:YYYY-MM-DD` on each knowledge point.

## Commands

```bash
npm run visual:status
npm run visual:start
npm run visual:update -- --step implementation --sources source-id-a,source-id-b
npm run visual:handoff
npm run visual:validate
npm run visual:research:claim -- --worker worker-a
npm run visual:research:save -- --worker worker-a --ready --sources source-id-a,source-id-b
npm run visual:research:list
npm run visual:implementation:claim -- --worker implementation-a
npm run visual:implementation:release -- --worker implementation-a
npm run visual:complete -- --sources source-id-a,source-id-b
npm run visual:fail -- --reason "Chrome MCP disconnected"
```

`visual:start` writes the active item to `.visualization-progress.json` with a focused search query. `visual:update` records references, selected source IDs, current step, notes, and verification status. `visual:handoff` prints the resume packet for context handoff. `visual:validate` checks the queue and tag metadata. `visual:complete` writes `ai-visualized:YYYY-MM-DD` to the knowledge point, verifies the write, and clears the active item. `visual:fail` records the breakpoint for the next run.

## Per-Item Loop

1. Run `npm run visual:start`.
2. Use Chrome MCP to search the `searchQuery` from the command output.
3. Pick high-quality articles, diagrams, or images as references.
4. Record selected references with `npm run visual:update -- --references "Title=https://example.com" --sources source-id-a,source-id-b`.
5. Add or refine the interactive visualization and the point explanation.
6. Run `npm run build`.
7. Verify desktop and mobile layouts in Chrome MCP.
8. Record verification with `npm run visual:update -- --build passed --desktop passed --mobile passed`.
9. Run `npm run visual:complete -- --sources source-id-a,source-id-b`.
10. Run `npm run visual:start` for the next item.

Keep command output narrow. Prefer `npm run visual:status`, targeted `rg`, and small `sed` windows over broad file dumps.

## Parallel Mode

Run several research workers in parallel. Each worker claims a different pending knowledge point and saves a ready research packet:

```bash
npm run visual:research:claim -- --worker worker-a
npm run visual:research:save -- --worker worker-a --references "Title=https://example.com" --sources source-id-a --visual-plan "..." --explanation-plan "..." --ready
```

The implementation worker then consumes ready packets one at a time:

```bash
npm run visual:research:list
npm run visual:implementation:claim -- --worker implementation-a
npm run visual:start -- --category network --id tcp-ip-model
npm run visual:implementation:release -- --worker implementation-a
```

This keeps browser research parallel and source edits serialized through one implementation lane.

## Fastest Mode

Use category lanes when speed is the priority. Each lane runs in its own git worktree and filters the queue by category:

```bash
npm run visual:lanes:setup
npm run visual:lanes:status
npm run visual:lanes:dashboard
npm run visual:lanes:board
npm run visual:lanes:ignite
npm run visual:start -- --category network
npm run visual:research:claim -- --worker network-research --category network
npm run visual:validate -- --category network
```

Worktrees allow source edits to happen in parallel. Merge category branches back after each lane builds and validates.

## Context Handoff

Run this before a long session approaches the context limit:

```bash
npm run visual:handoff
```

The output includes completed knowledge points, the active item, selected references, verification status, and the next pending items.
