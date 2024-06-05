const { test, expect } = require('@playwright/test');

test('Customer can access booking page and select a flight', async ({ page }) => {
  // Navigate to the home page
  await page.goto('https://example.com');

  // Find and click the booking page link
  await page.click('text=Book a Flight');

  // Wait for the booking page to load
  await page.waitForSelector('text=Select Your Flight');

  // Verify that the booking page has loaded
  await expect(page).toHaveURL('https://example.com/booking');
  await expect(page.locator('h1')).toContainText('Select Your Flight');

  // Select a flight (assuming there is a list of flights and a button to select one)
  await page.click('text=Flight 1234');

  // Verify the selection (assuming there's some confirmation message or next step)
  await expect(page.locator('text=Flight 1234 selected')).toBeVisible();
  
  // You can add more steps here if there are additional interactions on the booking page
});
