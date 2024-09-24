import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://staging-erpjobs.gailabs.com/');
  await page.getByRole('link', { name: 'Client' }).click();
  await page.getByRole('button', { name: 'Create Account' }).click();
  await expect(page.getByText('Company Name field is')).toBeVisible();
  await expect(page.getByText('Registered State in the US field is required.')).toBeVisible();
  await expect(page.getByText('Company EIN field is required.')).toBeVisible();
  await expect(page.getByText('Please enter a valid business')).toBeVisible();
  await expect(page.getByText('Password field is required.', { exact: true })).toBeVisible();
  await expect(page.getByText('Confirm Password field is')).toBeVisible();
  await expect(page.locator('#edit-terms-container')).toBeVisible();
  await page.getByText('I have read and agree to the * I have read and agree to the field is required.').click();
});