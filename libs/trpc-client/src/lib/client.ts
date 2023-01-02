import type { AppRouter } from '@nx-trpc/trpc-server';
import { createTRPCReact } from '@trpc/react-query';

export const trpc = createTRPCReact<AppRouter>();
