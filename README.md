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
