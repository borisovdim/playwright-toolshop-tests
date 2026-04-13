import { request } from '@playwright/test';
import { users, UserRole } from './users';
import { env } from '../config/env';

export class AuthManager {
  private tokenCache: Partial<Record<UserRole, string>> = {};

  async getToken(role: UserRole): Promise<string | null> {
    if (role === 'guest') return null;

    if (this.tokenCache[role]) {
      return this.tokenCache[role]!;
    }

    const user = users[role];

    const apiContext = await request.newContext({
      baseURL: env.baseUrl,
    });

    const response = await apiContext.post('/users/login', {
      data: {
        email: user.email,
        password: user.password,
      },
    });

    const body = await response.json();

    const token = body.access_token;

    this.tokenCache[role] = token;

    return token;
  }
}

export const authManager = new AuthManager();