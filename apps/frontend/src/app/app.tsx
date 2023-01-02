import styled from '@emotion/styled';
import { trpc } from '@nx-trpc/trpc';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { httpBatchLink } from '@trpc/client';
import { useState } from 'react';
import { Hello } from './hello';

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  const [queryClient] = useState(() => new QueryClient());
  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [
        httpBatchLink({
          url: 'http://localhost:5000/trpc',
        }),
      ],
    })
  );
  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <StyledApp>
          <Hello />
        </StyledApp>
      </QueryClientProvider>
    </trpc.Provider>
  );
}

export default App;
