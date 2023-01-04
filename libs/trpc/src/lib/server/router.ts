import { t } from './init';
import { createUser, getUser, getUsers } from './user';

export const appRouter = t.router({
  getUsers,
  getUser,
  createUser,
});

export type AppRouter = typeof appRouter;
