import { rest } from 'msw';

const URL = 'http://localhost:3000';

export const handlers = [
  rest.get(`${URL}/trpc/getUsers`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        result: {
          data: [
            {
              id: '72f679e1-112c-41ff-bb36-e4c59b782d36',
              createdAt: '2023-01-03T12:53:13.888Z',
              updatedAt: '2023-01-03T12:53:13.888Z',
              email: 'alice@prisma.io',
              name: 'Alice',
            },
            {
              id: 'ee3eda98-583a-4e55-826c-48fcbeae99c7',
              createdAt: '2023-01-03T12:53:13.888Z',
              updatedAt: '2023-01-03T12:53:13.888Z',
              email: 'bob@prisma.io',
              name: 'Bob',
            },
            {
              id: 'edfa08bc-fc32-45f0-83a2-666c2fdaa778',
              createdAt: '2023-01-03T12:53:13.888Z',
              updatedAt: '2023-01-03T12:53:13.888Z',
              email: 'caarol@prisma.io',
              name: 'Carol',
            },
            {
              id: 'b28edbea-42e6-4a0c-b6c4-d4aa5592ad87',
              createdAt: '2023-01-03T12:53:13.888Z',
              updatedAt: '2023-01-03T12:53:13.888Z',
              email: 'dave@prisma.io',
              name: 'Dave',
            },
            {
              id: 'eaf6051b-90ed-43f5-a461-d05b650ab291',
              createdAt: '2023-01-03T12:53:13.888Z',
              updatedAt: '2023-01-03T12:53:13.888Z',
              email: 'eve@prisma.io',
              name: 'Eve',
            },
          ],
        },
      })
    );
  }),
  rest.get(`${URL}/trpc/getUser`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        result: {
          data: {
            id: '72f679e1-112c-41ff-bb36-e4c59b782d36',
            createdAt: '2023-01-03T12:53:13.888Z',
            updatedAt: '2023-01-03T12:53:13.888Z',
            email: 'alice@prisma.io',
            name: 'Alice',
          },
        },
      })
    );
  }),
  rest.post(`${URL}/trpc/createUser`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({}));
  }),
];
