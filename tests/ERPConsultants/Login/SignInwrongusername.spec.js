import { test, expect } from '@playwright/test';

// wrong username validation
test('test', async ({ page }) => {
  await page.goto('https://staging-erpjobs.gailabs.com/');
  await page.getByRole('link', { name: 'Sign In' }).click();
  await page.getByLabel('Email *').click();
  await page.getByLabel('Email *').fill('abc@test.com');
  await page.getByLabel('Password *').click();
  await page.getByLabel('Password *').fill('test@123T');
  await page.getByLabel('What code is in the image? *').click();
  await page.getByLabel('What code is in the image? *').fill('tjmPt');
  await page.getByRole('button', { name: 'Log In' }).click();
  await expect(page.locator('#business-login-form div').filter({ hasText: 'No account found with this' }).nth(3)).toBeVisible();
});