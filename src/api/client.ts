import { request, APIRequestContext } from '@playwright/test';
import { env } from '../config/env';

export class ApiClient {
  private contextPromise: Promise<APIRequestContext>;

  constructor(token?: string) {
    this.contextPromise = request.newContext({
      baseURL: env.baseUrl,
      extraHTTPHeaders: token
        ? {
            Authorization: `Bearer ${token}`,
          }
        : {},
    });
  }

  async getContext(): Promise<APIRequestContext> {
    return this.contextPromise;
  }
}