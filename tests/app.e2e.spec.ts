import { expect, test } from "@playwright/test";

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
