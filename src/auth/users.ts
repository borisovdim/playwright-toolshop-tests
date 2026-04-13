import { env } from '../config/env';

export const users = env.users;

export type UserRole = keyof typeof users; // "user" | "admin" | "guest"