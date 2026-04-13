import dotenv from 'dotenv';

dotenv.config();

export const env = {
  baseUrl: process.env.BASE_URL!,

  users: {
    admin: {
      email: process.env.ADMIN_EMAIL!,
      password: process.env.ADMIN_PASSWORD!,
    },
    user: {
      email: process.env.USER_EMAIL!,
      password: process.env.USER_PASSWORD!,
    },
    guest: {
      email: '',
      password: '',
    },
  },
};