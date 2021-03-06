import React from 'react';
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from '@apollo/client';
import { APP_ID } from './src/butler';
import OneGraphAuth from 'onegraph-auth';
import { setContext } from '@apollo/link-context';
import DevCardProvider from './src/context/devcard-context';
const fetch = require('isomorphic-fetch');

const auth =
  typeof window !== 'undefined'
    ? new OneGraphAuth({
        appId: APP_ID,
      })
    : null;

const httpLink = createHttpLink({
  uri: 'https://serve.onegraph.com/dynamic?app_id=' + APP_ID,
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      ...auth.authHeaders(),
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
  fetch,
});

export const wrapRootElement = ({ element }) => (
  <ApolloProvider client={client}>
    <DevCardProvider>{element}</DevCardProvider>
  </ApolloProvider>
);
