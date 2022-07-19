import React from 'react'
import ReactDom from 'react-dom'
import { App } from './app'
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'
import { AppProvider } from './hooks/useContext'

const client = new ApolloClient({
  uri: 'https://petgram-server-valentin.vercel.app/graphql',
  cache: new InMemoryCache()
})

ReactDom.render(
  <AppProvider>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </AppProvider>
  ,
  document.getElementById('app')
)
