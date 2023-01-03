# Nx + tRPC (+ Prisma)

## Setting up the environment

### Create repo

```sh
npx create-nx-workspace@latest

✔ Choose what to create                 · integrated
✔ What to create in the new workspace   · react-monorepo
✔ Repository name                       · nx-trpc
✔ Application name                      · frontend
✔ Default stylesheet format             · @emotion/styled
✔ Enable distributed caching to make your CI faster · No
```

### Install tRPC libraries.

```sh
npm install @trpc/server @trpc/client @trpc/react-query @trpc/next @tanstack/react-query zod
```

You might get error as `Error: You're trying to use @trpc/server in a non-server environment. This is not supported by default.` if client.ts and server.ts are in the same workspace.
So, It would be better to create tRPC client/server libraries each.

```sh
npx nx g @nrwl/workspace:library --importPath=@trpc-client trpc-client
npx nx g @nrwl/workspace:library --importPath=@trpc-server trpc-server
```

### Setting up the server-side

Install fastify and create a workspace.

```sh
npm install fastify @fastify/websocket @fastify/cors

npm install --save-dev @nrwl/node
npx nx g @nrwl/node:application bff
```

### NPM scripts

```sh
npm install --save-dev npm-run-all
```

### Database (optional)

Install prisma and create a workspace.

```sh
npm install @prisma/client
npm install prisma --save-dev
npx nx g @nrwl/workspace:library --importPath=@db db
cd libs/db
npx prisma init --datasource-provider postgresql
cd -
```

Run DB in container.

```sh
touch libs/db/docker-compose.yml
touch libs/db/.env

npx nx run db:create
npx nx run db:migrate-dev
npx nx run db:migrate
npx nx run db:delete
```

Seeding database.

```sh
npm install --save-dev ts-node @types/node
touch libs/db/prisma/seed.ts
npx nx run db:seed
```

Login to database.

```sh
docker exec -it $(docker ps -q -f 'NAME=db_postgres') psql -U postgres postgres
```

### Development

Install MSW to mock http requests.

```sh
npm install --save-dev msw

npx nx g @nrwl/workspace:library --importPath=@mock mock
```

## Getting started

```sh
# Install dependencies.
npm install

# Run DB on the local
touch libs/db/.env
npx nx run db:create
npx nx run db:migrate
npx nx run db:seed

# Run the app
npm run dev
```

## References

- https://github.com/joselevelsup/nx-trpc-nextjs-starter
- https://github.com/nowlena/nx-trpc-test
