import css from '../../styles/modules/instagram-card.module.scss'

const instagramCard = ({ username, location, media, link }) => {
   return (
      <div className={`w-full ${css.instagramCard}`}>
         <figure className={css.filter}>
            <img
               src={media.url}
               width="100%"
               className={`object-cover h-full ${css.thumbnail}`}
               alt="instagram"
            />
         </figure>

         <div className={css.cardWrapper}>
            <div className={css.cardContent}>
               <div className="mx-auto text-center">
                  <a
                     href={link}
                     className="px-5 py-2 mt-3 transition-all duration-200 border border-dashed hover:bg-white hover:bg-opacity-25"
                     target="_blank"
                     rel="noreferrer">
                     Buka di Instagram
                  </a>
               </div>
            </div>
            <div className={css.cardFooter}>
               <div className="mb-2">
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 512.00096 512.00096"
                     className="inline w-5 h-5 mr-2"
                     fill="#fff">
                     <path d="m373.40625 0h-234.8125c-76.421875 0-138.59375 62.171875-138.59375 138.59375v234.816406c0 76.417969 62.171875 138.589844 138.59375 138.589844h234.816406c76.417969 0 138.589844-62.171875 138.589844-138.589844v-234.816406c0-76.421875-62.171875-138.59375-138.59375-138.59375zm108.578125 373.410156c0 59.867188-48.707031 108.574219-108.578125 108.574219h-234.8125c-59.871094 0-108.578125-48.707031-108.578125-108.574219v-234.816406c0-59.871094 48.707031-108.578125 108.578125-108.578125h234.816406c59.867188 0 108.574219 48.707031 108.574219 108.578125zm0 0" />
                     <path d="m256 116.003906c-77.195312 0-139.996094 62.800782-139.996094 139.996094s62.800782 139.996094 139.996094 139.996094 139.996094-62.800782 139.996094-139.996094-62.800782-139.996094-139.996094-139.996094zm0 249.976563c-60.640625 0-109.980469-49.335938-109.980469-109.980469 0-60.640625 49.339844-109.980469 109.980469-109.980469 60.644531 0 109.980469 49.339844 109.980469 109.980469 0 60.644531-49.335938 109.980469-109.980469 109.980469zm0 0" />
                     <path d="m399.34375 66.285156c-22.8125 0-41.367188 18.558594-41.367188 41.367188 0 22.8125 18.554688 41.371094 41.367188 41.371094s41.371094-18.558594 41.371094-41.371094-18.558594-41.367188-41.371094-41.367188zm0 52.71875c-6.257812 0-11.351562-5.09375-11.351562-11.351562 0-6.261719 5.09375-11.351563 11.351562-11.351563 6.261719 0 11.355469 5.089844 11.355469 11.351563 0 6.257812-5.09375 11.351562-11.355469 11.351562zm0 0" />
                  </svg>
                  <a
                     href={`https://instagram.com/${username}`}
                     className="text-xs font-bold text-white"
                     target="_blank"
                     rel="noreferrer">
                     {username}
                  </a>
               </div>
               {location !== null ? (
                  <div>
                     <p className="flex items-center text-xs text-white">
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           className="inline w-5 h-5 mr-2"
                           viewBox="0 0 20 20"
                           fill="currentColor">
                           <path
                              fillRule="evenodd"
                              d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                              clipRule="evenodd"
                           />
                        </svg>
                        {location}
                     </p>
                  </div>
               ) : (
                  ''
               )}
            </div>
         </div>
      </div>
   )
}

export default instagramCard
