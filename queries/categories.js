import gql from 'graphql-tag'

const CATEGORIES = gql`
   query categories {
      categories {
         id
         name
      }
   }
`

export default CATEGORIES
