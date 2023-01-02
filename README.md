# Nx + tRPC repository

## Setting up the environment

Create a new repo.

```sh
npx create-nx-workspace@latest

✔ Choose what to create                 · integrated
✔ What to create in the new workspace   · react-monorepo
✔ Repository name                       · nx-trpc
✔ Application name                      · frontend
✔ Default stylesheet format             · @emotion/styled
✔ Enable distributed caching to make your CI faster · No
```

Install tRPC dependencies.

```sh
npm install @trpc/server @trpc/client @trpc/react-query @trpc/next @tanstack/react-query zod
```

You might get error as `Error: You're trying to use @trpc/server in a non-server environment. This is not supported by default.` if client.ts and server.ts are in the same workspace like `trpc`.
So, It would be better to create tRPC client/server libraries both.

```sh
npx nx g @nrwl/workspace:library trpc-client
npx nx g @nrwl/workspace:library trpc-server
```

Install server-side deps and create a server with fastify.

```sh
npm install fastify @fastify/websocket @fastify/cors

npm install --save-dev @nrwl/node
npx nx g @nrwl/node:application bff
```

Install other dependencies.

```sh
npm install --save-dev npm-run-all
```

## Getting Started

```sh
# Install dependencies.
npm install

# Run the app
npm run dev
```
