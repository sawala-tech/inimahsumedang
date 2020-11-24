import Image from 'next/image'
import SidebarCss from '../../styles/modules/sidebar.module.scss'
import Link from 'next/link'

export default function MainSidebar() {
   return (
      <div>
         <aside className="w-32 flex flex-col h-screen">
            <div className="h-32 bg-indigo-800 w-full flex items-center justify-center text-white">
               <svg
                  className="w-10 h-10"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                     strokeLinecap="round"
                     strokeLinejoin="round"
                     strokeWidth="2"
                     d="M4 6h16M4 12h16M4 18h7"></path>
               </svg>
            </div>
            <div className="h-full w-full flex flex-col">
               <Link href="/articles">
                  <div className={`${SidebarCss.item} ${SidebarCss.active}`}>
                     <Image src="/img/icon_artikel.png" width={35} height={35}></Image>
                     <span>Artikel</span>
                  </div>
               </Link>
               <Link href="/articles">
                  <div className={`${SidebarCss.item}`}>
                     <Image src="/img/icon_instagram.png" width={35} height={35}></Image>
                     <span>Instagram</span>
                  </div>
               </Link>
               <Link href="/articles">
                  <div className={`${SidebarCss.item}`}>
                     <Image src="/img/icon_youtube.png" width={35} height={35}></Image>
                     <span>Youtube</span>
                  </div>
               </Link>
               <Link href="/articles">
                  <div className={`${SidebarCss.item}`}>
                     <Image src="/img/icon_bisnis.png" width={35} height={35}></Image>
                     <span>Bisnis</span>
                  </div>
               </Link>
            </div>
         </aside>
      </div>
   )
}
