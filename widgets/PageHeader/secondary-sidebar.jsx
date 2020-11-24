// import Image from 'next/image'
import SidebarCss from '../../styles/modules/sidebar.module.scss'
// import Link from 'next/link'

export default function secondarySidebar() {
   return (
      <div>
         <aside className="flex flex-col w-64 h-screen">
            <div className="flex items-center w-full h-32 bg-gray-200">
               <h1 className="px-5 text-xl font-bold text-indigo-900">Events</h1>
            </div>
            <div className="flex flex-col w-full h-full">
               <div className={`${SidebarCss.eventItem}`}>
                  <h1 className="text-lg font-bold">Inimahaward 2020</h1>
                  <h2 className="text-lg font-bold">Coming Soon</h2>
                  <span className="text-sm">20 Maret 2020</span>
               </div>
               <div className={`${SidebarCss.eventItem}`}>
                  <h1 className="text-lg font-bold">Inimahaward 2020</h1>
                  <h2 className="text-lg font-bold">Coming Soon</h2>
                  <span className="text-sm">20 Maret 2020</span>
               </div>
               <div className={`${SidebarCss.eventItem}`}>
                  <h1 className="text-lg font-bold">Inimahaward 2020</h1>
                  <h2 className="text-lg font-bold">Coming Soon</h2>
                  <span className="text-sm">20 Maret 2020</span>
               </div>
               <div className={`${SidebarCss.eventItem}`}>
                  <h1 className="text-lg font-bold">Inimahaward 2020</h1>
                  <h2 className="text-lg font-bold">Coming Soon</h2>
                  <span className="text-sm">20 Maret 2020</span>
               </div>
               <div className={`${SidebarCss.eventItem}`}>
                  <span className="flex items-center font-semibold">
                     <svg
                        className="w-6 h-6 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                           strokeLinecap="round"
                           strokeLinejoin="round"
                           strokeWidth="2"
                           d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                     </svg>
                     Selengkapnya
                  </span>
               </div>
            </div>
         </aside>
      </div>
   )
}