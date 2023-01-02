import { db } from '../src';

const main = async () => {
  await db.user.deleteMany();
  await db.user.createMany({
    data: [
      { email: 'alice@prisma.io', name: 'Alice' },
      { email: 'bob@prisma.io', name: 'Bob' },
      { email: 'caarol@prisma.io', name: 'Carol' },
      { email: 'dave@prisma.io', name: 'Dave' },
      { email: 'eve@prisma.io', name: 'Eve' },
    ],
  });
  console.log('Users are successfully created.');
};

main()
  .then(async () => {
    await db.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await db.$disconnect();
    process.exit(1);
  });
