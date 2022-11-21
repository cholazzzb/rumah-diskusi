import { expect, test } from '@playwright/test';

test('about page has expected h1', async ({ page }) => {
  await page.goto('/questions/ask');
  expect(await page.textContent('h1')).toBe('Write A Question');
});
