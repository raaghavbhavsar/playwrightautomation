import { test, expect } from '@playwright/test';

// Admin user add/delete/edit permissions

test('test', async ({ page }) => {
  // await page.goto('https://staging-erpjobs.gailabs.com/');
  await page.goto('https://staging-erpjobs.gailabs.com/user/login');
  await page.getByLabel('Username *').fill('admin');
  await page.getByLabel('Username *').press('Tab');
  await page.getByLabel('Password *').fill('admin@erp');
  await page.getByLabel('Password *').press('Enter');
  await page.getByRole('link', { name: 'People' }).click();
  await expect(page.getByRole('link', { name: '+Add user' })).toBeVisible();
  await page.getByRole('link', { name: '+Add user' }).click();
  await page.getByLabel('Toolbar items').getByRole('link', { name: 'People' }).click();
  await page.getByLabel('Edit test', { exact: true }).click();
  await expect(page.getByRole('link', { name: 'Cancel account' })).toBeVisible();
  await expect(page.getByRole('group', { name: 'Roles' })).toBeVisible();
  await expect(page.getByRole('group', { name: 'Status' })).toBeVisible();
  await page.getByRole('link', { name: 'Content', exact: true }).click();
  await expect(page.getByRole('link', { name: '+Add content' })).toBeVisible();
  await page.getByLabel('Edit Homepage').click();
  await expect(page.locator('#edit-delete')).toBeVisible();
  await page.getByRole('link', { name: 'Content', exact: true }).click();
  await page.getByRole('link', { name: '+Add content' }).click();
  await expect(page.getByRole('link', { name: 'Article' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Basic page' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Landing Page' })).toBeVisible();
});