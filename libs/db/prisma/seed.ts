import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const main = async () => {
  await prisma.user.createMany({
    data: [
      { email: 'alice@prisma.io', name: 'Alice' },
      { email: 'bob@prisma.io', name: 'Bob' },
      { email: 'caarol@prisma.io', name: 'Carol' },
      { email: 'dave@prisma.io', name: 'Dave' },
      { email: 'eve@prisma.io', name: 'Eve' },
    ],
  });
};

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
