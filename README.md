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

Create tRPC library.

```sh
npx nx g @nrwl/workspace:library trpc
```

Install server-side deps and create a server.

```sh
npm install fastify @fastify/websocket
npm install --save-dev @nrwl/node
npx nx g @nrwl/node:application bff
```

```sh
npm install --save-dev npm-run-all
```

## Getting Started

```sh
# Install dependencies.
npm install

# Run the BFF
npx nx run bff:serve
# Get data from BFF by curl
curl http://localhost:3000/trpc/getUser\?input\=%221%22

# Run the app
npx nx run frontend:serve
```
