import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://192.168.5.120:4000/',
  cache: new InMemoryCache({ addTypename: false }),
});

export default client;
