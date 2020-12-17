import dynamic from 'next/dynamic'
import apolloClient from '../../utils/apollo'
import { useRouter } from 'next/router'
import { Select, Dropzone, Input } from '../../components/forms'
const Editor = dynamic(() => import('../../components/mdeditor'), { ssr: false })
import CATEGORIES_QUERY from '../../queries/categories'
import { isAuthenticated, userProfile } from '../../utils/strapi-auth'
import { useState } from 'react'

const CreateArticle = ({ categories }) => {
   const { user } = userProfile()
   const isLogin = isAuthenticated()
   const Router = useRouter()
   // if user is not login, then throw it
   if (!isLogin && process.browser) {
      Router.push('/403')
   }

   const cats = categories
   let input = {
      title: '',
      content: '',
      category: '',
      thumbnail: ''
   }
   const statusCode = {
      0: 'Loading',
      400: 'Error',
      500: 'Error',
      403: 'Akses ditolak, log masuk diperlukan',
      200: `Berhasil`,
      100: 'Publikasi'
   }
   const [createState, setCreateState] = useState(100)
   const { jwt } = userProfile()
   const axios = require('axios')
   const options = {
      headers: {
         Authorization: `Bearer ${jwt}`
         // 'Content-Type': 'multipart/form-data'
      }
   }
   const uploadImage = (id, file) => {
      const formData = new FormData()
      formData.append('files', file)
      formData.append('ref', 'articles')
      formData.append('refId', id)
      formData.append('field', 'thumbnail')
      axios
         .post(`${process.env.API_URL}/upload`, formData, options)
         .then(() => {
            setCreateState(200)
         })
         .catch((e) => {
            console.log(e)
         })
   }
   const onSubmit = (e) => {
      e.preventDefault()
      const formData = new FormData(e.target)
      input = {
         title: formData.get('title'),
         content: formData.get('content'),
         author: user.id,
         categories: [formData.get('kategori')]
      }
      axios
         .post(`${process.env.API_URL}/articles`, input, options)
         .then((res) => {
            if (formData.get('file').size > 0) {
               setCreateState(0)
               uploadImage(res.data.id, formData.get('file'))
            } else {
               setCreateState(200)
            }
         })
         .catch((e) => {
            setCreateState(400)
            console.log(e)
         })
   }

   return (
      <>
         <style jsx global>{`
            body {
               background: rgba(0, 0, 0, 0.05);
            }
         `}</style>
         <div className="w-4/5 p-10 mx-auto my-10 bg-white shadow-sm rounded-2xl">
            <div className="flex justify-end text-right">
               <button onClick={() => Router.back()}>
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     fill="none"
                     viewBox="0 0 24 24"
                     className="inline w-6 h-6 mr-3"
                     stroke="currentColor">
                     <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M7 16l-4-4m0 0l4-4m-4 4h18"
                     />
                  </svg>
                  Kembali
               </button>
            </div>
            {/* CREATE NEW ARTICLE CONTENT */}
            <div className="mt-10">
               <form onSubmit={onSubmit} encType="multipart/form-data">
                  <span id="listbox-span" className="block mb-2 text-sm font-medium text-gray-700">
                     Judul
                  </span>
                  <Input
                     type="text"
                     name="title"
                     placeholder="Judul artikel"
                     className="mb-3"></Input>
                  {/* editor */}
                  <span id="listbox-span" className="block mb-2 text-sm font-medium text-gray-700">
                     Konten
                  </span>
                  <Editor height="300px" name="content"></Editor>
                  <Dropzone name="file"></Dropzone>
                  <Select
                     className="mt-5"
                     label="Kategori"
                     options={cats}
                     name="kategori[]"></Select>
                  <div className="flex justify-end space-x-3">
                     <button
                        type="submit"
                        className={`${
                           createState === 200 ? 'bg-green-600' : 'bg-indigo-500'
                        } flex items-center px-5 py-2 mt-5 text-white rounded-md`}>
                        {createState === 0 && (
                           <svg
                              className="w-5 h-5 mr-3 -ml-1 text-white animate-spin"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24">
                              <circle
                                 className="opacity-25"
                                 cx="12"
                                 cy="12"
                                 r="10"
                                 stroke="currentColor"
                                 strokeWidth="4"></circle>
                              <path
                                 className="opacity-75"
                                 fill="currentColor"
                                 d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                           </svg>
                        )}
                        {createState === 200 && (
                           <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              className="inline w-6 h-6 mr-2"
                              fill="currentColor">
                              <path
                                 fillRule="evenodd"
                                 d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                 clipRule="evenodd"
                              />
                           </svg>
                        )}
                        {statusCode[createState]}
                     </button>
                  </div>
               </form>
            </div>
            {/* ENDOF ARTICLE CREATING */}
         </div>
      </>
   )
}

export const getStaticProps = async () => {
   const { data } = await apolloClient.query({
      query: CATEGORIES_QUERY
   })

   return {
      props: {
         categories: data.categories
      }
   }
}

export default CreateArticle
