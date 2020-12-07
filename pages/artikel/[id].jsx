import gql from 'graphql-tag'
import apolloClient from '../../utils/apollo'
import ARTICLES_QUERY from '../../queries/articles'
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'
import md from '../../styles/modules/md.module.scss'

const Post = ({ article }) => {
   return (
      <article className="mx-auto my-10 sm:full lg:w-3/5">
         <div className="flex flex-col justify-center">
            {/* single article header */}
            <div>
               <img
                  src={article.thumbnail.url}
                  alt=""
                  className="object-cover w-full mb-5 rounded-lg"
               />
               <h1 className="mb-3 text-3xl font-lotaBold">{article.title}</h1>
               <div className="flex items-center justify-between">
                  <div className="flex items-center">
                     <img
                        src={
                           article.author.avatar?.url ||
                           'https://ui-avatars.com/api/?background=random&name=' +
                              article.author.fullname.split(' ').join('-')
                        }
                        className="w-10 h-10 mr-3 rounded-full"
                        alt=""
                     />
                     <span className="mr-2">{article.author.fullname}</span>
                     <span className="text-gray-600">
                        {new Date(article.createdAt).toLocaleDateString('id-ID', {
                           weekday: 'long',
                           year: 'numeric',
                           month: 'long',
                           day: 'numeric'
                        })}
                     </span>
                  </div>
                  <div>
                     <button>
                        <svg width="25" height="25" className="r">
                           <g fillRule="evenodd">
                              <path d="M15.6 5a.42.42 0 0 0 .17-.3.42.42 0 0 0-.12-.33l-2.8-2.79a.5.5 0 0 0-.7 0l-2.8 2.8a.4.4 0 0 0-.1.32c0 .12.07.23.16.3h.02a.45.45 0 0 0 .57-.04l2-2V10c0 .28.23.5.5.5s.5-.22.5-.5V2.93l2.02 2.02c.08.07.18.12.3.13.11.01.21-.02.3-.08v.01"></path>
                              <path d="M18 7h-1.5a.5.5 0 0 0 0 1h1.6c.5 0 .9.4.9.9v10.2c0 .5-.4.9-.9.9H6.9a.9.9 0 0 1-.9-.9V8.9c0-.5.4-.9.9-.9h1.6a.5.5 0 0 0 .35-.15A.5.5 0 0 0 9 7.5a.5.5 0 0 0-.15-.35A.5.5 0 0 0 8.5 7H7a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h11a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2"></path>
                           </g>
                        </svg>
                     </button>
                  </div>
               </div>
            </div>
            {/* end of single article header */}

            <section className={`mt-5 leading-6 ${md.markdown}`}>
               <ReactMarkdown plugins={[gfm]} source={article.content} />
            </section>
         </div>
      </article>
   )
}

const Query = (id) => {
   return gql`
      query Article {
        article(id: "${id}") {
          id
          title
          content
          thumbnail {
            url
          }
          categories {
            name
          }
          author {
            fullname
            username
            avatar {
              url
            }
          }
          createdAt
        }
      }
    `
}

export const getStaticPaths = async () => {
   const article = await apolloClient.query({
      query: ARTICLES_QUERY
   })
   const IDs = article.data.articles.map((article) => {
      return { params: { id: article.id } }
   })
   return {
      paths: IDs,
      fallback: false
   }
}
export const getStaticProps = async ({ params }) => {
   const id = params.id
   const articles = await apolloClient.query({
      query: Query(id)
   })
   return {
      props: {
         article: articles.data.article
      }
   }
}

export default Post
