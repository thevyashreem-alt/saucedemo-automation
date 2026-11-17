import { expect, type Page } from '@playwright/test';

export class CartPage {
  constructor(private readonly page: Page) {}

  get items() { return this.page.locator('.cart_item'); }

  async expectLoaded(): Promise<void> {
    await expect(this.page).toHaveURL(/cart\.html/);
  }

  async expectItemCount(count: number): Promise<void> {
    await expect(this.items).toHaveCount(count);
  }

  async expectProduct(name: string): Promise<void> {
    await expect(this.items.locator('.inventory_item_name').filter({ hasText: name })).toBeVisible();
  }
}
