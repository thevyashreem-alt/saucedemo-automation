import { test, expect } from '../../fixtures/test';

test('displays products after login', async ({ loggedIn, inventoryPage }) => {
  await expect(inventoryPage.products.first()).toBeVisible();
});
