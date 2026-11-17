import { test } from '../../fixtures/test';
import { users } from '../../data/users';

test('logs in and verifies two products in the cart', async ({ loginPage, inventoryPage, cartPage }) => {
  await loginPage.goto();
  await loginPage.login(users.standard.username, users.standard.password);
  await inventoryPage.expectLoaded();

  await inventoryPage.addProduct('Sauce Labs Backpack');
  await inventoryPage.addProduct('Sauce Labs Bike Light');

  await inventoryPage.openCart();
  await cartPage.expectLoaded();
  await cartPage.expectItemCount(2);
  await cartPage.expectProduct('Sauce Labs Backpack');
  await cartPage.expectProduct('Sauce Labs Bike Light');
});
