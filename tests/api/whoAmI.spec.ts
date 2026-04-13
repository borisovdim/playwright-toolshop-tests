import { test, expect } from '../../src/fixtures/base-fixture';

test.use({ role: 'admin' });

test('Get profile as admin', async ({ api }) => {
  const response = await api.auth.getProfile();

  expect(response.ok()).toBeTruthy();
});