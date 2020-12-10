import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { createHttpLink } from 'apollo-link-http'
import fetch from 'isomorphic-unfetch'

// Update the GraphQL endpoint to any instance of GraphQL that you like
const GRAPHQL_URL = process.env.API_URL || 'http://localhost:1337'
const link = createHttpLink({
   fetch, // Switches between unfetch & node-fetch for client & server.
   uri: GRAPHQL_URL + '/graphql'
})

// Export a HOC from next-with-apollo
// Docs: https://www.npmjs.com/package/next-with-apollo
const apolloClient = new ApolloClient({
   link: link,
   ssrMode: true,
   cache: new InMemoryCache()
})

export default apolloClient
