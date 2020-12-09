import React from 'react'
import SidebarCss from '../../styles/modules/sidebar.module.scss'
// import Link from 'next/link'

class SecondarySidebar extends React.Component {
   constructor(props) {
      super(props)
   }
   render() {
      const eventList = [
         {
            title: 'HUT Sawala Space',
            date: '13 Desember 2020'
         }
      ]
      const events = eventList.map((list, i) => {
         return (
            <div key={i} className={`${SidebarCss.eventItem}`}>
               <h1 className="text-lg font-lotaSemiBold">{list.title}</h1>
               <h2 className="text-md font-lotaSemiBold">{list.date}</h2>
               <span className="text-sm">{list.date}</span>
            </div>
         )
      })
      return (
         <aside className="relative z-50 flex flex-col w-64 h-screen">
            <div className="flex items-center w-full h-32 bg-gray-200">
               <h1 className="px-5 text-xl text-indigo-900 font-lotaSemiBold">Events</h1>
            </div>
            <div className="flex flex-col w-full h-full">
               {events}
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
      )
   }
}

export default SecondarySidebar
