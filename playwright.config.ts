import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  reporter: "list",
  use: {
    baseURL: "http://127.0.0.1:4174/KnowledgeGraph/",
    trace: "on-first-retry",
  },
  projects: [
    {
      name: "data",
      testMatch: /.*\.data\.spec\.ts/,
    },
    {
      name: "chromium",
      testMatch: /.*\.e2e\.spec\.ts/,
      use: { ...devices["Desktop Chrome"] },
    },
  ],
  webServer: {
    command: "npm run preview -- --host 127.0.0.1 --port 4174 --strictPort",
    url: "http://127.0.0.1:4174/KnowledgeGraph/",
    reuseExistingServer: false,
  },
});
