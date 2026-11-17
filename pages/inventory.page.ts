import { expect, type Page } from '@playwright/test';

export class InventoryPage {
  constructor(private readonly page: Page) {}

  get products() { return this.page.locator('.inventory_item'); }

  async expectLoaded(): Promise<void> {
    await expect(this.page).toHaveURL(/inventory\.html/);
    await expect(this.page.locator('.title')).toHaveText('Products');
  }

  async addProduct(name: string): Promise<void> {
    const product = this.products.filter({ hasText: name });
    await product.locator('button').click();
  }

  async openCart(): Promise<void> {
    await this.page.locator('.shopping_cart_link').click();
  }
}
