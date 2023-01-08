import cors from '@fastify/cors';
import ws from '@fastify/websocket';
import { appRouter, createContext } from '@isomorphic-trpc';
import { fastifyTRPCPlugin } from '@trpc/server/adapters/fastify';
import fastify from 'fastify';

const server = fastify({
  maxParamLength: 5000,
});

server.register(ws);

const corsOptions = {
  origin: /http:\/\/localhost:*/,
  optionsSuccessStatus: 200,
};
server.register(cors, corsOptions);

server.register(fastifyTRPCPlugin, {
  prefix: '/trpc',
  useWSS: true,
  trpcOptions: { router: appRouter, createContext },
});

(async () => {
  try {
    await server.listen({ port: 3100 });
    console.log('⚡️ server is running!');
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
})();
