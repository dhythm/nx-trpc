import { db } from '@db';
import { initTRPC } from '@trpc/server';
import { z } from 'zod';

const t = initTRPC.create();

export const appRouter = t.router({
  getUsers: t.procedure.query(async () => {
    const users = await db.user.findMany();
    return users;
  }),
  getUser: t.procedure.input(z.string()).query(async (req) => {
    const id = req.input;
    const user = await db.user.findFirst({ where: { id } });
    return user;
  }),
  createUser: t.procedure
    .input(z.object({ email: z.string().email(), name: z.string() }))
    .mutation(async (req) => {
      const { email, name } = req.input;
      const user = await db.user.create({
        data: {
          email,
          name,
        },
      });
      return user;
    }),
});

export type AppRouter = typeof appRouter;
