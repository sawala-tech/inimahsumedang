import React from 'react'
// import Image from 'next/image'
import SidebarCss from '../../styles/modules/sidebar.module.scss'
import Router, { useRouter } from 'next/router'

const MyClassWithRouter = (props) => {
   const router = useRouter()
   return <MainSidebar {...props} router={router} />
}

class MainSidebar extends React.Component {
   constructor(props) {
      super(props)
      this.state = {
         active_menu: props.router.pathname
      }
   }
   toggleMenu(name) {
      this.setState({ active_menu: name })
      Router.push(name)
   }

   render() {
      const activeMenu = this.state.active_menu
      const menu = [
         {
            name: '/',
            text: 'Artikel',
            icon: require('../../public/img/icon_artikel.png')
         },
         {
            name: '/instagram',
            text: 'Instagram',
            icon: require('../../public/img/icon_instagram.png')
         },
         {
            name: '/youtube',
            text: 'youtube',
            icon: require('../../public/img/icon_youtube.png')
         },
         {
            name: '/bisnis',
            text: 'Bisnis',
            icon: require('../../public/img/icon_bisnis.png')
         }
      ]
      const menuList = menu.map((list, i) => (
         <button key={i} onClick={() => this.toggleMenu(list.name)}>
            <div
               className={`${SidebarCss.item} ${
                  activeMenu === list.name ? SidebarCss.active : ''
               }`}>
               <img src={list.icon} width={35} height={35} alt=""></img>
               <span>{list.text}</span>
            </div>
         </button>
      ))

      return (
         <div key={activeMenu}>
            <aside className={`flex flex-col w-32 h-screen ${this.props.className}`}>
               <div className="z-50 flex items-center justify-center w-full h-32 text-white bg-indigo-800">
                  {this.props.children}
               </div>
               <div className="z-40 flex flex-col w-full h-full bg-white">{menuList}</div>
            </aside>
         </div>
      )
   }
}

export default MyClassWithRouter
