import Image from 'next/image'
import SidebarCss from '../../styles/modules/sidebar.module.scss'
import Link from 'next/link'

export default function MainSidebar() {
   return (
      <div>
         <aside className="flex flex-col w-32 h-screen">
            <div className="flex items-center justify-center w-full h-32 text-white bg-indigo-800">
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
            <div className="flex flex-col w-full h-full">
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
