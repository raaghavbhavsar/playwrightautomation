import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://staging-erpjobs.gailabs.com/');
  await expect(page.getByRole('link', { name: 'Client' })).toBeVisible();
  await page.getByRole('link', { name: 'Client' }).click();
  await expect(page.getByText('Company Name *')).toBeVisible();
  await expect(page.getByText('Registered State in the US *')).toBeVisible();
  await expect(page.getByText('Company EIN *')).toBeVisible();
  await expect(page.getByText('Business Email *')).toBeVisible();
  await expect(page.getByText('Password *', { exact: true })).toBeVisible();
  await expect(page.getByText('Confirm Password *')).toBeVisible();
  await expect(page.getByText('I have read and agree to the * Terms and Conditions.')).toBeVisible();
  await expect(page.getByRole('button', { name: 'Create Account' })).toBeVisible();
  await page.getByLabel('Company Name *').click();
  await page.getByLabel('Company Name *').fill('Alpha Technologies');
  await page.getByLabel('Company Name *').press('Tab');
  await page.getByLabel('Registered State in the US *').selectOption('california');
  await page.getByLabel('Company EIN *').click();
  await page.getByLabel('Company EIN *').fill('78-7894561');
  await page.getByLabel('Business Email *').click();
  await page.getByLabel('Business Email *').click();
  await page.getByLabel('Business Email *').click({
  });
  await page.getByLabel('Business Email *').fill('rifihi5383@sgatra.com');
  await page.getByLabel('Password *', { exact: true }).click();
  await page.getByLabel('Password *', { exact: true }).fill('test@123T');
  await page.getByLabel('Password *', { exact: true }).press('Tab');
  await page.getByLabel('Confirm Password *').fill('test@123T');
  await page.getByRole('link', { name: 'Terms and Conditions.' }).click();
  await page.getByRole('button', { name: 'Agree' }).click();
  await page.getByRole('button', { name: 'Create Account' }).click();
  await expect(page.getByLabel('Status message')).toBeVisible();
});