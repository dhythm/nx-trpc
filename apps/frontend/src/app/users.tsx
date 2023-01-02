import { trpc } from '@trpc-client';

export const Users = () => {
  const users = trpc.getUsers.useQuery();
  if (!users.data) return <div>Loading...</div>;
  return (
    <div>
      <ul>
        {users.data.map((user) => (
          <li key={user.id}>
            {user.name}: {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};
