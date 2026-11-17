import { test } from '../../fixtures/test';
import { users } from '../../data/users';

test('standard user can log in', async ({ loginPage, inventoryPage }) => {
  await loginPage.goto();
  await loginPage.login(users.standard.username, users.standard.password);
  await inventoryPage.expectLoaded();
});
