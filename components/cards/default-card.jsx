// import Image from 'next/image'
import CardStyle from '../../styles/modules/card.module.scss'
import { useState } from 'react'

const DefaultCard = ({ author, thumbnail, title, date, categories = { name: '' } }) => {
   const [filled, setFilled] = useState(false)
   const fillLove = () => {
      setFilled(!filled)
   }
   categories = categories.map((val) => {
      return val.name
   })
   // check if image is loaded from internal or from backend
   return (
      <div className={`w-full rounded-lg ${CardStyle.defaultCard}`}>
         <img
            src={thumbnail}
            width="100%"
            height="100%"
            className={`rounded-lg object-cover h-full ${CardStyle.thumbnail}`}
            alt={title}
         />
         <div className={CardStyle.cardWrapper}>
            <div className={CardStyle.cardContent}>
               <span className={CardStyle.category}>{categories.join(', ')}</span>
               <h1 className={CardStyle.title}>{title}</h1>
               <div className={CardStyle.footer}>
                  <div className="flex items-center ">
                     <img
                        className="w-10 h-10 mr-4 rounded-full"
                        layout="responsive"
                        width="100%"
                        height="100%"
                        src={
                           author.avatar?.url ||
                           'https://ui-avatars.com/api/?background=random&name=' +
                              author.username.split(' ').join('-')
                        }
                        alt={author.username}></img>
                     <div className={CardStyle.author}>
                        <p className="font-semibold leading-none text-white">{author.username}</p>
                        <p className="text-sm font-light text-gray-300">
                           {new Date(date).toLocaleDateString('id-ID', {
                              weekday: 'long',
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric'
                           })}
                        </p>
                     </div>
                  </div>
                  <div className="flex">
                     <button className="ml-3">
                        <svg
                           className="w-6 h-6"
                           fill="none"
                           stroke="currentColor"
                           viewBox="0 0 24 24"
                           xmlns="http://www.w3.org/2000/svg">
                           <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path>
                        </svg>
                     </button>
                     <button className="ml-3">
                        <svg
                           className="w-6 h-6"
                           fill={filled ? 'white' : 'none'}
                           onClick={fillLove}
                           stroke="currentColor"
                           viewBox="0 0 24 24"
                           xmlns="http://www.w3.org/2000/svg">
                           <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                        </svg>
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default DefaultCard
