import { InstagramCard } from '../../components/cards'
import apolloClient from '../../utils/apollo'
import IG_QUERY from '../../queries/instagram'

export default function articles({ posts }) {
   return (
      <div className="w-4/5 mx-auto my-10">
         <div className="flex items-center justify-between">
            <h1 className="ml-2 text-3xl font-semibold">Instagram</h1>
         </div>
         <div className="mt-10">
            <div className="flex flex-wrap">
               {posts.map(function (post, i) {
                  return (
                     <div className="w-2/6 px-2 mb-3" key={i}>
                        <InstagramCard
                           username={post.ig_username}
                           location={post.location}
                           media={post.media}
                           link={post.ig_link}></InstagramCard>
                     </div>
                  )
               })}
            </div>
         </div>
      </div>
   )
}

export const getStaticProps = async () => {
   const { data } = await apolloClient.query({
      query: IG_QUERY
   })

   return {
      props: {
         posts: data.instagrams
      }
   }
}
