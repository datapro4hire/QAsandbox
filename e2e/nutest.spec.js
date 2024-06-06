import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.codeforbc.ca/');
  await page.getByRole('link', { name: 'Our Projects' }).click();
  await page.getByRole('link', { name: 'Who We Are' }).click();
  await page.getByRole('link', { name: 'Join Us!' }).click();
  await page.getByRole('link', { name: 'Join Us', exact: true }).click();
});