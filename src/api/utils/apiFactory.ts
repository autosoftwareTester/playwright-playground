// import { APIRequestContext } from "@playwright/test";
// import { IApiFactory } from "./iapiFactory";

// // Factory Design Pattern
// export class APIFactory implements IApiFactory {
//   public getApi<T>(
//     apiName: string,
//     requestContext: APIRequestContext,
//   ): Promise<T> {
//     switch (apiName) {
//       case "UserApi":
//         return Promise.resolve(new UserApi(requestContext) as T);

//       case "RegisterApi":
//         return Promise.resolve(new RegisterApi(requestContext) as T);

//       default:
//         throw new Error(`API "${apiName}" not found in the Factory`);
//     }
//   }

//   public static async getApiFactory(
//     apiName: string,
//     request: APIRequestContext,
//   ): Promise<Object> {
//     switch (apiName) {
//       case "UserApi":
//         return new UserApi(request);

//       case "RegisterApi":
//         return new RegisterApi(request);

//       default:
//         throw new Error(`API "${apiName}" not found in the Factory`);
//     }
//   }
// }
