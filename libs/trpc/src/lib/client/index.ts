import { httpLink } from '@trpc/client';
import { createTRPCReact } from '@trpc/react-query';
import type { AppRouter } from '../server';

export const trpc = createTRPCReact<AppRouter>();

export const trpcClient = trpc.createClient({
  links: [
    httpLink({
      url: 'http://localhost:3000/trpc',
    }),
    // httpBatchLink({
    //   url: 'http://localhost:3000/trpc',
    // }),
  ],
});
