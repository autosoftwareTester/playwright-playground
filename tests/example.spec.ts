import { test, expect } from "./my-fixtures/WorkerFixture";

test("has title", async ({ page }) => {
  await page.goto("https://playwright.dev/");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test("get started link", async ({ page }) => {
  await page.goto("https://playwright.dev/");

  // Click the get started link.
  await page.getByRole("link", { name: "Get started" }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(
    page.getByRole("heading", { name: "Installation" }),
  ).toBeVisible();
});

test("API Test", async ({ page, request, workerData, loginPage }) => {
  await loginPage.navigateToLoginPageAsync();

  const response = await request.get("https://reqres.in/api/users", {
    data: {
      apiKey: "reqres_b3ca3a5f722049dd8518013ee0b11f69",
    },
  });

  //Mock the API response using route.fulfill
  await page.route("**/api/users", (route) => {
    route.fulfill({
      status: 200,
      contentType: "application/json",
      body: JSON.stringify({ message: "Mocked response" }),
    });
  });

  expect.soft(response.ok()).toBeTruthy();
  expect(response.status()).toBe(200);
  expect(workerData).toBe("This is some worker data");
  await expect(page).toHaveScreenshot({ maxDiffPixels: 100, fullPage: true });
});
