import css from '../../styles/modules/youtube-card.module.scss'

const YoutubeCard = (props) => {
   return (
      <figure className={css.YoutubeCard}>
         <img src={props.thumbnail} alt="" className="rounded-xl" />
         <figcaption className="mt-3 mb-0 font-black text-indigo-900 font-lotaBold">
            {props.title}
         </figcaption>
         <p className="text-sm text-gray-700">{props.date}</p>
         {/* play button */}
         <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="absolute w-16 h-16 cursor-pointer"
            onClick={props.onClick}
            stroke="white">
            <path
               strokeLinecap="round"
               strokeLinejoin="round"
               strokeWidth="2"
               d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
            />
            <path
               strokeLinecap="round"
               strokeLinejoin="round"
               strokeWidth="2"
               d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
         </svg>
      </figure>
   )
}
export default YoutubeCard
