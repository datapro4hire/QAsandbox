import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.codeforbc.ca/');
  await page.getByRole('heading', { name: 'Frequently Asked Questions' }).click();
  await page.getByRole('heading', { name: 'Frequently Asked Questions' }).click();
  await page.getByRole('heading', { name: 'Frequently Asked Questions' }).dblclick();
  await page.locator('div').filter({ hasText: 'Our ProjectsWho We AreJoin Us!' }).click();
  await page.locator('div').filter({ hasText: 'Our ProjectsWho We AreJoin Us!' }).dblclick();
  await page.getByRole('link', { name: 'Join Us!' }).click();
  await page.getByRole('link', { name: 'Our Projects' }).click();
  await page.getByRole('link', { name: 'Our Projects' }).click();
  await page.getByRole('link', { name: 'Who We Are' }).click();
  await page.getByRole('link', { name: 'Join Us!' }).click();
});