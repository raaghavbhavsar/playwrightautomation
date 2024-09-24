import { test, expect } from '@playwright/test';

// Sign in as Client

test('test', async ({ page }) => {
  await page.goto('https://staging-erpjobs.gailabs.com/');
  await expect(page.locator('li').filter({ hasText: 'Sign In' })).toBeVisible();
  await page.getByRole('link', { name: 'Sign In' }).click();
  await page.getByLabel('Email *').click();
  await page.getByLabel('Email *').fill('raghav.b@gai.co.in');
  await page.getByLabel('Password *').click();
  await page.getByLabel('Password *').fill('test@123T');
  await page.getByLabel('What code is in the image? *').click();
  await page.getByLabel('What code is in the image? *').fill('aYaY3');
  await expect(page.getByText('Email *')).toBeVisible();
  await expect(page.getByText('Password *')).toBeVisible();
  await expect(page.getByRole('button', { name: 'Log In' })).toBeVisible();
  await page.getByRole('button', { name: 'Log In' }).click();
  await expect(page.getByRole('link', { name: 'Dashboard' })).toBeVisible();
});