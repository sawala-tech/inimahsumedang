import React from 'react'
import MainSidebar from '../PageHeader/main-sidebar.jsx'
import SecondarySidebar from '../PageHeader/secondary-sidebar.jsx'
import Navbar from '../PageHeader/navbar.jsx'
import { Transition } from '@headlessui/react'

class DefaultLayout extends React.Component {
   constructor(props) {
      super(props)
      this.state = {
         active: true
      }
   }
   toggleState() {
      const currentState = this.state.active
      this.setState({ active: !currentState })
   }
   render() {
      return (
         <div>
            <div className="flex w-screen h-24">
               <MainSidebar className={this.state.active !== true ? 'shadow-lg' : ''}>
                  {/* Button we needed to show and hide Secondary Sidebar */}
                  <svg
                     className="w-10 h-10 cursor-pointer"
                     fill="none"
                     stroke="currentColor"
                     viewBox="0 0 24 24"
                     xmlns="http://www.w3.org/2000/svg"
                     onClick={() => this.toggleState()}>
                     <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h7"></path>
                  </svg>
               </MainSidebar>
               <Transition
                  show={this.state.active === true}
                  enter="transition ease-in-out duration-300 transform"
                  enterFrom="-translate-x-full"
                  enterTo="translate-x-0"
                  leave="transition ease-in-out duration-300 transform"
                  leaveFrom="translate-x-0"
                  leaveTo="-translate-x-full">
                  <SecondarySidebar></SecondarySidebar>
               </Transition>

               <div className="flex flex-col w-full h-screen">
                  <Navbar></Navbar>
                  <div className="flex flex-col w-full h-full">
                     <main>{this.props.children}</main>
                  </div>
               </div>
            </div>
         </div>
      )
   }
}

export default DefaultLayout
