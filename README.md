# SauceDemo Playwright Interview Project

A small Playwright TypeScript project demonstrating the Page Object Model and the login → add two products → verify the cart flow.

## Run

```powershell
npm install
npx playwright install chromium
npm run typecheck
npm test
```

Use `npm run test:headed` to see the browser while tests run.

## Structure

- `pages/`: login, inventory, and cart page objects
- `tests/ui/`: one simple login test, inventory test, and add-to-cart test
- `fixtures/`: reusable page objects and logged-in setup
- `data/users.ts`: SauceDemo demo account
