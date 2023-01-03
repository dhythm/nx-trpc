import styled from '@emotion/styled';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { trpc, trpcClient as initialTrpcClient } from '@trpc-client';
import { useState } from 'react';
import { Hello } from './hello';
import { Users } from './users';

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  const [queryClient] = useState(() => new QueryClient());
  const [trpcClient] = useState(() => initialTrpcClient);
  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <StyledApp>
          <Hello />
          <Users />
        </StyledApp>
      </QueryClientProvider>
    </trpc.Provider>
  );
}

export default App;
