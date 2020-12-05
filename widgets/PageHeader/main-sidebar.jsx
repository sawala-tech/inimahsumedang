import React from 'react'
// import Image from 'next/image'
import SidebarCss from '../../styles/modules/sidebar.module.scss'
import Link from 'next/link'

class MainSidebar extends React.Component {
   constructor() {
      super()
   }
   render() {
      return (
         <div>
            <aside className={`flex flex-col w-32 h-screen ${this.props.className}`}>
               <div className="z-50 flex items-center justify-center w-full h-32 text-white bg-indigo-800">
                  {this.props.children}
               </div>
               <div className="z-40 flex flex-col w-full h-full bg-white">
                  <Link href="/artikel">
                     <div className={`${SidebarCss.item} ${SidebarCss.active} `}>
                        <img
                           src={require('../../public/img/icon_artikel.png')}
                           width={35}
                           height={35}
                           alt=""></img>
                        <span>Artikel</span>
                     </div>
                  </Link>
                  <Link href="/instagram">
                     <div className={`${SidebarCss.item} `}>
                        <img
                           src={require('../../public/img/icon_instagram.png')}
                           width={35}
                           height={35}
                           alt=""></img>
                        <span>Instagram</span>
                     </div>
                  </Link>
                  <Link href="/youtube">
                     <div className={`${SidebarCss.item} `}>
                        <img
                           src={require('../../public/img/icon_youtube.png')}
                           width={35}
                           height={35}
                           alt=""></img>
                        <span>Youtube</span>
                     </div>
                  </Link>
                  <Link href="/bisnis">
                     <div className={`${SidebarCss.item} `}>
                        <img
                           src={require('../../public//img/icon_bisnis.png')}
                           width={35}
                           height={35}
                           alt=""></img>
                        <span>Bisnis</span>
                     </div>
                  </Link>
               </div>
            </aside>
         </div>
      )
   }
}

export default MainSidebar
