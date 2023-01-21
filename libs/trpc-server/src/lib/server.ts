import { t } from './init';
import { createUser, getUser, getUsers } from './user';

const userRouter = t.router({
  getUsers,
  getUser,
  createUser,
});

export const appRouter = t.router({
  user: userRouter,
});

export type AppRouter = typeof appRouter;
