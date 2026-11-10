import { APIRequestContext } from "@playwright/test";
export class IApiFactory {
  public getApi<T>(
    apiName: string,
    requestContext: APIRequestContext,
  ): Promise<T> {
    throw new Error("Method not implemented.");
  }
}
