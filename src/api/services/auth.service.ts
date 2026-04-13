import { ApiClient } from '../client';

/**
 * Работа с пользователем
 */
export class AuthService {
  constructor(private client: ApiClient) {}

  async getProfile() {
    const ctx = await this.client.getContext();
    return ctx.get('/users/me');
  }
}