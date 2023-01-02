import { trpc } from '@nx-trpc/trpc';

export const Hello = () => {
  const user = trpc.userById.useQuery('1');
  if (!user.data) return <div>Loading...</div>;
  return (
    <div>
      <p>Hello, {user.data.name}</p>
    </div>
  );
};
