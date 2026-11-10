import { Page, Locator } from "@playwright/test";
export class LoginPage {
  username!: Locator;
  password!: Locator;
  page: Page;

  constructor(page: Page) {
    this.page = page;
    this.username = page.locator("#username");
    this.password = page.locator("#password");
  }

  public async navigateToLoginPageAsync() {
    await this.page.goto("https://playwright.dev/");
  }

  
  public async login(username: string, password: string) {
    await this.username.fill(username);
    await this.password.fill(password);

    await this.page.context().storageState({ path: ".auth/auth.json" });
  }
}
