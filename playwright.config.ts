import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests/ui',
  reporter: 'html',
  use: {
    baseURL: 'https://www.saucedemo.com/',
    browserName: 'chromium',
    headless: true,
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure'
  }
});
