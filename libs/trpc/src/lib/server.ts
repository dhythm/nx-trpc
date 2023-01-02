import { initTRPC } from '@trpc/server';
import { z } from 'zod';

const t = initTRPC.create();

type User = {
  id: string;
  name: string;
};

const userList: User[] = [
  {
    id: '1',
    name: 'KATT',
  },
];

export const appRouter = t.router({
  getUser: t.procedure.input(z.string()).query((req) => {
    const input = req.input;
    const user = userList.find((it) => it.id === input);
    return user;
  }),
  createUser: t.procedure
    .input(z.object({ name: z.string() }))
    .mutation((req) => {
      const id = `${Math.random()}`;
      const user: User = {
        id,
        name: req.input.name,
      };
      userList.push(user);
      return user;
    }),
});

export type AppRouter = typeof appRouter;
