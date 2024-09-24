import { test, expect } from '@playwright/test';

// Homepage
test('test', async ({ page }) => {
  await page.goto('https://staging-erpjobs.gailabs.com/');
  await expect(page.getByRole('link', { name: 'Home' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Client' })).toBeVisible();
  await expect(page.locator('li').filter({ hasText: 'Sign In' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Search Jobs' }).first()).toBeVisible();
  await expect(page.getByRole('link', { name: 'Post Jobs' }).first()).toBeVisible();
  await expect(page.getByText('Footer logo Footer About us Contact us Help centre © 2024 ERP Contractor. All')).toBeVisible();
});