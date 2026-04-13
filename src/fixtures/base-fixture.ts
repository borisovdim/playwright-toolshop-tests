import { test as base } from '@playwright/test';
import { Api } from '../api/api';
import { authManager } from '../auth/auth-manager';
import { users, UserRole } from '../auth/users';

/**
 * Типы наших fixtures
 */
type Fixtures = {
  api: Api;
  role: UserRole;
  users: typeof users;
};

/**
 * Расширяем стандартный test
 */
export const test = base.extend<Fixtures>({
  /**
   * Роль пользователя
   * По умолчанию: user
   */
  role: ['user', { option: true }],

  /**
   * API клиент
   * - получает токен
   * - создаёт Api
   */
  api: async ({ role }, use) => {
    const token = await authManager.getToken(role);
    const api = new Api(token || undefined);

    await use(api);
  },

  /**
   * Все пользователи
   */
  users: async ({}, use) => {
    await use(users);
  },
});

export const expect = test.expect;