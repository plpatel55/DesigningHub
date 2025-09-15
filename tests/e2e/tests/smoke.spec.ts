import { test, expect } from '@playwright/test'

test('landing loads', async ({ page }) => {
  await page.goto('/')
  await expect(page.locator('button')).toContainText('Add Rectangle')
})
