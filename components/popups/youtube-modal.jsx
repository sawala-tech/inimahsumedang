export default function YoutubeModal(props) {
   console.log(props)
   return (
      <div className="fixed inset-0 z-50 overflow-y-auto">
         <div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
               <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
               &#8203;
            </span>
            <svg
               xmlns="http://www.w3.org/2000/svg"
               fill="none"
               viewBox="0 0 24 24"
               stroke="white"
               className="absolute w-8 h-8 bg-indigo-900 rounded-full cursor-pointer"
               style={{ top: '16%', right: '21.25%' }}
               onClick={props.close}>
               <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
               />
            </svg>
            {/* Login */}
            <div
               className="relative inline-block overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:align-middle sm:max-w-3xl sm:w-full"
               role="dialog"
               aria-modal="true"
               aria-labelledby="modal-headline">
               <iframe
                  height="500"
                  title="anjay"
                  className="w-full"
                  src={`https://www.youtube.com/embed/${props.ytId}`}></iframe>
            </div>
            {/* End of Login Container */}
         </div>
      </div>
   )
}
