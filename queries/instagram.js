import gql from 'graphql-tag'

const IG_QUERY = gql`
   query Instagrams {
      instagrams {
         id
         ig_username
         location
         media {
            url
            mime
         }
         ig_link
      }
   }
`
export default IG_QUERY
