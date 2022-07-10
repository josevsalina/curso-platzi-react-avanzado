import React from 'react'
import ReactDom from 'react-dom'
import { App } from './app'
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
  uri: 'https://petgram-server-valentin.vercel.app/graphql',
  cache: new InMemoryCache()
})

ReactDom.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('app')
)
