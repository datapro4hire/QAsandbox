import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://tuiopay.com/');
  await page.getByRole('link', { name: 'Private Schools' }).click();
  await page.getByRole('heading', { name: 'No late payments' }).click();
  await page.getByRole('heading', { name: 'Save time' }).click();
  await page.getByRole('heading', { name: 'Earn points' }).click();
  await page.getByRole('heading', { name: 'All-in-one system' }).click();
  await page.getByRole('heading', { name: 'Functionality for Parents' }).click();
  await page.getByRole('link', { name: 'See pricing' }).click();
  await page.getByLabel('Primary').getByRole('link', { name: 'Testimonials' }).click();
  await page.getByLabel('About Us submenu').click();
  await page.getByLabel('before header menu').getByRole('link', { name: 'About Us' }).click();
  await page.locator('#block-3').getByRole('link', { name: 'Blog' }).click();
});