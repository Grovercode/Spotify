import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
  uri: 'https://api.ss.dev/resource/api',
});

export default client;
