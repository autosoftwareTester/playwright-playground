import { test as base, expect } from "@playwright/test";
import { LoginPage } from "../../src/web/pages/loginPage";
import BaseApi from "../../src/api/base/baseApi";

type WorkerFixture = {
  workerData: string;
  loginPage: LoginPage;
  baseApi: BaseApi;
};

const test = base.extend<WorkerFixture>({
  workerData: async ({}, use) => {
    // Setup code for the worker fixture;
    const data = "This is some worker data";
    await use(data);
    // Teardown code for the worker fixture (if needed)
  },
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await use(loginPage);
  },
});

export { test, expect };
