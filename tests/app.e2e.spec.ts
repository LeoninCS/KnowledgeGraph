import { expect, test, type Page } from "@playwright/test";

function getScaleFromTransform(transform: string) {
  const matrix = transform.match(/^matrix\(([^,]+)/);

  return matrix ? Number(matrix[1]) : 1;
}

async function getGraphContentCenterDelta(page: Page) {
  return page.locator(".graph-canvas").evaluate((canvasElement) => {
    const canvasBox = canvasElement.getBoundingClientRect();
    const nodeBoxes = Array.from(
      document.querySelectorAll<HTMLElement>(".sphere-node[data-node-id]"),
    ).map((node) => node.getBoundingClientRect());
    const left = Math.min(...nodeBoxes.map((box) => box.left));
    const top = Math.min(...nodeBoxes.map((box) => box.top));
    const right = Math.max(...nodeBoxes.map((box) => box.right));
    const bottom = Math.max(...nodeBoxes.map((box) => box.bottom));

    return {
      x: (left + right) / 2 - (canvasBox.left + canvasBox.width / 2),
      y: (top + bottom) / 2 - (canvasBox.top + canvasBox.height / 2),
    };
  });
}

async function getNodeCenterDelta(
  page: Page,
  selector: string,
) {
  return page.locator(".graph-canvas").evaluate((canvasElement, nodeSelector) => {
    const canvasBox = canvasElement.getBoundingClientRect();
    const node = document.querySelector<HTMLElement>(nodeSelector);
    const nodeBox = node?.getBoundingClientRect();

    if (!nodeBox) {
      throw new Error(`Missing node: ${nodeSelector}`);
    }

    return {
      x: nodeBox.left + nodeBox.width / 2 - (canvasBox.left + canvasBox.width / 2),
      y: nodeBox.top + nodeBox.height / 2 - (canvasBox.top + canvasBox.height / 2),
    };
  }, selector);
}

test("home graph supports search and opens detail", async ({ page }) => {
  await page.goto("/");

  await expect(page.getByRole("button", { name: /KnowledgeGraph/ })).toBeVisible();
  await expect(page.getByRole("button", { name: "Go Module", exact: true })).toBeVisible();

  await page.getByPlaceholder("搜索知识点，比如 TCP、进程、索引").fill("tcp");
  await expect(page.getByText("搜索结果")).toBeVisible();

  await expect(page.getByRole("button", { name: /TCP 当前聚焦/ })).toBeVisible();
  await page.getByRole("button", { name: /^TCP 当前聚焦$/ }).dblclick();
  await expect(page.getByRole("heading", { name: "TCP" })).toBeVisible();
  await expect(page.getByText("讲解")).toBeVisible();
});

test("home graph follows a focused knowledge point and keeps zoom", async ({ page }) => {
  await page.goto("/");

  await expect(page.getByRole("button", { name: "Go Module", exact: true })).toBeVisible();

  const graphCanvas = page.locator(".graph-canvas");
  const graphWorld = page.locator(".sphere-graph-world");
  const functionNode = page.locator(".sphere-node[title='函数']");
  const methodNode = page.locator(".sphere-node[title='方法']");
  const zoomIn = page.getByRole("button", { name: "放大" });

  const initialTransform = await graphWorld.evaluate((element) =>
    getComputedStyle(element).transform,
  );
  const initialScale = getScaleFromTransform(initialTransform);

  await zoomIn.click();
  await page.waitForTimeout(240);
  await zoomIn.click();
  await page.waitForTimeout(240);
  await expect.poll(async () => {
    const transform = await graphWorld.evaluate((element) =>
      getComputedStyle(element).transform,
    );

    return getScaleFromTransform(transform);
  }).toBeGreaterThan(initialScale + 0.2);
  const zoomedTransform = await graphWorld.evaluate((element) =>
    getComputedStyle(element).transform,
  );
  const zoomedScale = getScaleFromTransform(zoomedTransform);

  await methodNode.click();
  await expect(functionNode).toHaveAccessibleName("函数");
  await expect(methodNode).toHaveClass(/relation-focused/);
  await expect.poll(async () => {
    const transform = await graphWorld.evaluate((element) =>
      getComputedStyle(element).transform,
    );

    return getScaleFromTransform(transform);
  }).toBeGreaterThan(initialScale + 0.2);
  const focusedTransform = await graphWorld.evaluate((element) =>
    getComputedStyle(element).transform,
  );
  const focusedScale = getScaleFromTransform(focusedTransform);

  expect(Math.abs(focusedScale - zoomedScale)).toBeLessThan(0.04);

  await page.waitForTimeout(260);
  const stageBox = await graphCanvas.boundingBox();
  const nodeBox = await methodNode.boundingBox();

  expect(stageBox).not.toBeNull();
  expect(nodeBox).not.toBeNull();

  const visibleCanvasCenterX = stageBox!.x + stageBox!.width / 2;
  const visibleCanvasCenterY = stageBox!.y + stageBox!.height / 2;
  const nodeCenterX = nodeBox!.x + nodeBox!.width / 2;
  const nodeCenterY = nodeBox!.y + nodeBox!.height / 2;

  expect(Math.abs(nodeCenterX - visibleCanvasCenterX)).toBeLessThan(110);
  expect(Math.abs(nodeCenterY - visibleCanvasCenterY)).toBeLessThan(150);
});

test("home graph starts centered and clicks focus nodes predictably", async ({ page }) => {
  await page.goto("/");

  await expect(page.getByRole("button", { name: "Go Module", exact: true })).toBeVisible();

  await expect.poll(async () => {
    const delta = await getGraphContentCenterDelta(page);

    return Math.hypot(delta.x, delta.y);
  }).toBeLessThan(36);

  const graphWorld = page.locator(".sphere-graph-world");
  const methodNodeSelector = ".sphere-node[title='方法']";
  const functionNodeSelector = ".sphere-node[title='函数']";
  const methodNode = page.locator(methodNodeSelector);
  const functionNode = page.locator(functionNodeSelector);
  const zoomIn = page.getByRole("button", { name: "放大" });

  await zoomIn.click();
  await page.waitForTimeout(220);
  const zoomedTransform = await graphWorld.evaluate((element) =>
    getComputedStyle(element).transform,
  );
  const zoomedScale = getScaleFromTransform(zoomedTransform);

  await methodNode.click();
  await expect(methodNode).toHaveClass(/relation-focused/);
  await expect.poll(async () => {
    const delta = await getNodeCenterDelta(page, methodNodeSelector);

    return Math.hypot(delta.x, delta.y);
  }).toBeLessThan(42);

  await functionNode.click();
  await expect(functionNode).toHaveClass(/relation-focused/);
  await expect.poll(async () => {
    const delta = await getNodeCenterDelta(page, functionNodeSelector);

    return Math.hypot(delta.x, delta.y);
  }).toBeLessThan(42);

  const focusedTransform = await graphWorld.evaluate((element) =>
    getComputedStyle(element).transform,
  );
  const focusedScale = getScaleFromTransform(focusedTransform);

  expect(Math.abs(focusedScale - zoomedScale)).toBeLessThan(0.04);
});

test("detail page can open a simulation and step through it", async ({ page }) => {
  await page.goto("/");

  await page.getByPlaceholder("搜索知识点，比如 TCP、进程、索引").fill("Go Module");
  const goModuleNode = page.getByRole("button", { name: /Go Module 当前聚焦/ });

  await expect(goModuleNode).toBeVisible();
  await goModuleNode.dblclick();
  await page.getByRole("button", { name: /进入模拟/ }).first().click();

  await expect(page.getByRole("heading", { name: /Go Module 可视化模拟/ })).toBeVisible();
  await expect(page.getByRole("button", { name: /上一步/ })).toBeDisabled();

  const firstAction = page.locator(".sim-action.enabled").first();
  const firstActionLabel = await firstAction.locator("span").innerText();

  await firstAction.click();
  await expect(page.getByText(firstActionLabel)).toBeVisible();
  await expect(page.getByRole("button", { name: /上一步/ })).toBeEnabled();
});

test("mysql crash recovery simulation can be opened and completed", async ({ page }) => {
  await page.goto("/");

  await page.getByPlaceholder("搜索知识点，比如 TCP、进程、索引").fill("崩溃恢复");
  await expect(page.getByRole("button", { name: /崩溃恢复 当前聚焦/ })).toBeVisible();
  await page.getByRole("button", { name: /^崩溃恢复 当前聚焦$/ }).dblclick();
  await page.getByRole("button", { name: /进入模拟/ }).click();

  await expect(page.getByRole("heading", { name: /崩溃恢复 可视化模拟/ })).toBeVisible();
  await expect(page.locator(".crash-recovery-stage")).toBeVisible();

  for (let step = 0; step < 5; step += 1) {
    await page.locator(".sim-action.enabled").click();
  }

  await expect(page.getByText("5/5")).toBeVisible();
  await expect(page.getByText("prepare + Xid => commit")).toBeVisible();
});
