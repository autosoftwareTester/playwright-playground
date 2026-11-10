import { APIRequestContext, APIResponse } from "@playwright/test";

// Template Method Design Pattern
// Abstract Common Functionalities
abstract class BaseApi {
  protected readonly request: APIRequestContext;
  protected baseUrl: string = "https://reqres.in";
  constructor(request: APIRequestContext) {
    this.request = request;
  }

  // Template Model Design Pattern
  // CRUD - Get, Post, Put, Delete
  protected async get(endpoint: string): Promise<APIResponse> {
   // logger.info(`Sending ${HTTPMethod.GET.toString()} request to ${endpoint}`);
    const response = await this.request.get(this.baseUrl + endpoint, {
      maxRetries: 2,
      ignoreHTTPSErrors: true,
    });
    //this.logResponseStatus(response, HTTPMethod.GET.toString(), endpoint);
    return response;
  }

  protected async post(endpoint: string, body: any): Promise<APIResponse> {
   // logger.info(`Sending ${HTTPMethod.POST.toString()} request to ${endpoint}
   // with ${JSON.stringify(body)}`);
    const response = await this.request.post(this.baseUrl + endpoint, {
      data: body,
    });
   // this.logResponseStatus(response, HTTPMethod.POST.toString(), endpoint);
    return response;
  }

  protected async put(endpoint: string, body: any): Promise<APIResponse> {
    //logger.info(`Sending ${HTTPMethod.PUT.toString()} request to ${endpoint} 
   // with ${JSON.stringify(body)}`);
    const response = await this.request.put(this.baseUrl + endpoint, {
      data: body,
    });
    //this.logResponseStatus(response, HTTPMethod.PUT.toString(), endpoint);
    return response;
  }

  protected async delete(endpoint: string, id: string): Promise<APIResponse> {
   // logger.info(
    //  `Sending ${HTTPMethod.DELETE.toString()} request to ${endpoint}`,
 //   );
    const response = await this.request.delete(this.baseUrl + endpoint + id);
    this.logResponseStatus(response, HTTPMethod.DELETE.toString(), endpoint);
    return response;
  }

  protected logResponseStatus(
    response: APIResponse,
    method: string,
    endpoint: string,
  ): void {
    if (response.ok()) {
      // logger.info(`Response ${method} ${endpoint} :
      //        ${response.status()} - ${response.statusText()}`);
    } else {
      // logger.error(`Response ERROR ${method} ${endpoint}:
      //       ${response
      //         .text()
      //         .then((txt) => {
      //           logger.error(`Error Body- ${txt}`);
      //         })
      //         .catch(() => {})}`);
    }
  }
}

enum HTTPMethod {
  GET,
  POST,
  PUT,
  DELETE,
}

export default BaseApi;
