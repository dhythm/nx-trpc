import { inferAsyncReturnType, initTRPC } from '@trpc/server';
import { CreateFastifyContextOptions } from '@trpc/server/adapters/fastify';

const t = initTRPC.create();

const getEpisodes = t.procedure.query(async () => {
  const episodes = [
    'Episode I - The Phantom Menace',
    'Episode II - Attack of the Clones',
    'Episode III - Revenge of the Sith',
    'Episode IV - A New Hope',
    'Episode V - The Empire Strikes Back',
    'Episode VI - Return of the Jedi',
    'Episode VII - The Force Awakens',
    'Episode VIII - The Last Jedi',
    'Episode IX - The Rise of Skywalker',
  ];
  return episodes;
});

export const appRouter = t.router({
  getEpisodes,
});

export type AppRouter = typeof appRouter;

export function createContext({ req, res }: CreateFastifyContextOptions) {
  const user = { name: req.headers.username ?? 'anonymous' };

  return { req, res, user };
}

export type Context = inferAsyncReturnType<typeof createContext>;
