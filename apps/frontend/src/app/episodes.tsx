import { AppRouter } from "@isomorphic-trpc";
import { createTRPCReact, httpLink } from "@trpc/react-query";


export const trpc = createTRPCReact<AppRouter>()
export const trpcClient = trpc.createClient({
  links: [
    httpLink({
      url: 'http://localhost:3100/trpc',
    }),
  ],
});

export const Episodes = () => {
  const episodes = trpc.getEpisodes.useQuery();
  if (!episodes.data) return <div>Loading...</div>;
  return (
    <div>
      <ul>
        {episodes.data.map((episode) => (
          <li key={episode}>{episode}</li>
        ))}
      </ul>
    </div>
  );
};
