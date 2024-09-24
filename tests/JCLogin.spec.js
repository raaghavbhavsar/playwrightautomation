import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('about:blank');
  await page.goto('http://staging-jcd-be.gailabs.com/');
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: ' Open the administration' }).click();
  const page1 = await page1Promise;
  await page1.goto('http://staging-jcd-be.gailabs.com/admin/auth/login');
  await expect(page1.getByText('Email*')).toBeVisible();
  await expect(page1.getByText('Password*')).toBeVisible();
  await page1.getByPlaceholder('e.g. kai@doe.com').click();
  await page1.getByPlaceholder('e.g. kai@doe.com').fill('jamcracker@test.com');
  await page1.getByPlaceholder('e.g. kai@doe.com').press('Tab');
  await page1.getByLabel('Password*').fill('Jamcracker123');
  await page1.getByLabel('Password*').press('Enter');
  await expect(page1.locator('h1')).toContainText('Welcome');
  await expect(page1.getByRole('navigation')).toContainText('Content Manager');
});