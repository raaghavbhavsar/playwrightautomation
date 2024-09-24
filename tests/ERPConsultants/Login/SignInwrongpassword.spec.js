import { test, expect } from '@playwright/test';

// wrong password validation
test('test', async ({ page }) => {
  await page.goto('https://staging-erpjobs.gailabs.com/');
  await page.getByRole('link', { name: 'Sign In' }).click();
  await page.getByLabel('Email *').click();
  await page.getByLabel('Email *').fill('test@alpha.co.in');
  await page.getByLabel('Password *').fill('test');
  // test.setTimeout(90000);
  await page.getByLabel('What code is in the image? *').click({timeout: 120000});
  await page.getByLabel('What code is in the image? *').fill('ZfBPB');
  await page.getByRole('button', { name: 'Log In' }).click();
  await expect(page.getByText('The password is incorrect.')).toBeVisible();
});