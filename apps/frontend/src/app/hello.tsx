import { trpc } from '@trpc-client';

export const Hello = () => {
  const user = trpc.getUser.useQuery('1');
  if (!user.data) return <div>Loading...</div>;
  return (
    <div>
      <p>Hello, {user.data.name}</p>
    </div>
  );
};
