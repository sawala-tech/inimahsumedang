import gql from 'graphql-tag'
import apolloClient from '../../utils/apollo'
import ARTICLES_QUERY from '../../queries/articles'
import { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'
import md from '../../styles/modules/md.module.scss'
import { Transition } from '@headlessui/react'
import { Facebook, Whatsapp, Twitter } from '../../components/social'

const Post = ({ article }) => {
   const [state, setstate] = useState(false)
   const sharePost = () => {
      setstate(!state)
   }

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
                  <div className="flex">
                     <Transition
                        show={state}
                        enter="transition ease-in-out duration-100 transform"
                        enterFrom="translate-y-full opacity-0"
                        enterTo="translate-y-0 opacity-100"
                        leave="transition ease-in-out opacity-0 duration-200 transform"
                        leaveFrom="-translate-y-0"
                        leaveTo="translate-y-full">
                        <Facebook className="inline w-6 h-6 mr-2"></Facebook>
                        <Whatsapp className="inline w-6 h-6 mr-2"></Whatsapp>
                        <Twitter className="inline w-6 h-6 mr-2"></Twitter>
                     </Transition>
                     <button
                        onClick={() => sharePost()}
                        className="ml-2 transition-all duration-200 ease-in-out ">
                        {!state ? (
                           <svg width="25" height="25">
                              <g fillRule="evenodd">
                                 <path d="M15.6 5a.42.42 0 0 0 .17-.3.42.42 0 0 0-.12-.33l-2.8-2.79a.5.5 0 0 0-.7 0l-2.8 2.8a.4.4 0 0 0-.1.32c0 .12.07.23.16.3h.02a.45.45 0 0 0 .57-.04l2-2V10c0 .28.23.5.5.5s.5-.22.5-.5V2.93l2.02 2.02c.08.07.18.12.3.13.11.01.21-.02.3-.08v.01"></path>
                                 <path d="M18 7h-1.5a.5.5 0 0 0 0 1h1.6c.5 0 .9.4.9.9v10.2c0 .5-.4.9-.9.9H6.9a.9.9 0 0 1-.9-.9V8.9c0-.5.4-.9.9-.9h1.6a.5.5 0 0 0 .35-.15A.5.5 0 0 0 9 7.5a.5.5 0 0 0-.15-.35A.5.5 0 0 0 8.5 7H7a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h11a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2"></path>
                              </g>
                           </svg>
                        ) : (
                           <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="22"
                              height="22"
                              viewBox="0 0 496 496">
                              <g>
                                 <g>
                                    <g>
                                       <path d="M248,0C111.033,0,0,111.033,0,248s111.033,248,248,248s248-111.033,248-248C495.841,111.099,384.901,0.159,248,0z      M248,480C119.87,480,16,376.13,16,248S119.87,16,248,16s232,103.87,232,232C479.859,376.072,376.072,479.859,248,480z" />
                                       <path d="M361.136,134.864c-3.124-3.123-8.188-3.123-11.312,0L248,236.688L146.176,134.864c-3.069-3.178-8.134-3.266-11.312-0.197     c-3.178,3.069-3.266,8.134-0.197,11.312c0.064,0.067,0.13,0.132,0.197,0.197L236.688,248L134.864,349.824     c-3.178,3.07-3.266,8.134-0.196,11.312c3.07,3.178,8.134,3.266,11.312,0.196c0.067-0.064,0.132-0.13,0.196-0.196L248,259.312     l101.824,101.824c3.178,3.07,8.242,2.982,11.312-0.196c2.995-3.1,2.995-8.016,0-11.116L259.312,248l101.824-101.824     C364.259,143.052,364.259,137.988,361.136,134.864z" />
                                    </g>
                                 </g>
                              </g>
                           </svg>
                        )}
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
