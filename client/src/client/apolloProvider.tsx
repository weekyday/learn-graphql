import { ApolloProvider as DefaultApolloProvider } from '@apollo/client';
import client from './apolloClient';

export function ApolloProvider({ children }: { children: React.ReactNode }) {
  return (
    <DefaultApolloProvider client={client}>{children}</DefaultApolloProvider>
  );
}
