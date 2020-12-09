import gql from 'graphql-tag'

const EVENTS_QUERY = gql`
   query Events {
      events {
         id
         title
         date
         link
      }
   }
`

export default EVENTS_QUERY
