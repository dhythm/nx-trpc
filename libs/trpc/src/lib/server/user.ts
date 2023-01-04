import { db } from '@db';
import { z } from 'zod';
import { t } from './init';

export const getUsers = t.procedure.query(async () => {
  const users = await db.user.findMany();
  return users;
});
export const getUser = t.procedure.input(z.string()).query(async (req) => {
  const id = req.input;
  const user = await db.user.findFirst({ where: { id } });
  return user;
});
export const createUser = t.procedure
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
  });
