import cors from '@fastify/cors';
import fastify from 'fastify';
import ws from '@fastify/websocket';
import { API_URL } from '@env';
import { appRouter, createContext } from '@trpc-server';
import { fastifyTRPCPlugin } from '@trpc/server/adapters/fastify';

const server = fastify({
  maxParamLength: 5000,
});

server.register(ws);

console.log(API_URL)

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
    await server.listen({ port: 3000 });
    console.log('⚡️ server is running!');
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
})();
