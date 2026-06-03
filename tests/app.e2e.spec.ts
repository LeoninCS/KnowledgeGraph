import { expect, test } from "@playwright/test";

function getScaleFromTransform(transform: string) {
  const matrix = transform.match(/^matrix\(([^,]+)/);

  return matrix ? Number(matrix[1]) : 1;
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

  const graphStage = page.locator(".sphere-graph-stage");
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
  const stageBox = await graphStage.boundingBox();
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

test("detail page can open a simulation and step through it", async ({ page }) => {
  await page.goto("/");

  await page.getByRole("button", { name: "Go Module", exact: true }).dblclick();
  await page.getByRole("button", { name: /进入模拟/ }).first().click();

  await expect(page.getByRole("heading", { name: /Go Module 可视化模拟/ })).toBeVisible();
  await expect(page.getByRole("button", { name: /上一步/ })).toBeDisabled();

  const firstAction = page.locator(".sim-action.enabled").first();
  const firstActionLabel = await firstAction.locator("span").innerText();

  await firstAction.click();
  await expect(page.getByText(firstActionLabel)).toBeVisible();
  await expect(page.getByRole("button", { name: /上一步/ })).toBeEnabled();
});
