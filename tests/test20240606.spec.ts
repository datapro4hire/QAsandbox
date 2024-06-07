import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://qa.interview.tuio.dev/');
  await page.goto('https://qa.interview.tuio.dev/?page=1&limit=25');
  await page.goto('https://qa.interview.tuio.dev/?page=1&limit=25&sortName=id&sortDirection=desc');
  await page.getByRole('button', { name: 'Create transfer' }).click();
  await page.getByLabel('Details *').fill('Test text');
  await page.getByLabel('Price *').click();
  await page.getByLabel('Price *').fill('20000');
  await page.getByRole('button', { name: 'Add' }).click();
  await page.locator('td:nth-child(4)').first().click();
  
});