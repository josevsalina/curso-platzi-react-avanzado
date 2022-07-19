import React from 'react'
import ReactDom from 'react-dom'
import { App } from './app'
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink, from } from '@apollo/client'
import { AppProvider } from './hooks/useContext'
import { onError } from '@apollo/client/link/error'
import { setContext } from '@apollo/client/link/context'

const authMiddleware = setContext((_, { headers }) => {
  const token = window.sessionStorage.getItem('token')
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ''
    }
  }
})

const httpLink = createHttpLink({
  uri: 'https://petgram-server-valentin.vercel.app/graphql'
})

const errorMiddleware = onError(
  ({ networkError }) => {
    if (networkError && networkError.response.code === 'invalid_token') {
      window.sessionStorage.removeItem('token')
      window.location = '/user'
    }
  }
)

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: from([
    errorMiddleware,
    authMiddleware,
    httpLink
  ])
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
