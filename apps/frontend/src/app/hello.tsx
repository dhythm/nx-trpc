import { trpc } from '@trpc-client';

export const Hello = () => {
  const user = trpc.getUser.useQuery('1');
  console.log({ ...user });
  if (user.isLoading) return <div>Loading...</div>;
  return (
    <div>
      <p>Hello, {user.data?.name ?? 'anonymous'}</p>
    </div>
  );
};
