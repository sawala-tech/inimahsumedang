import React from 'react'
import MainSidebar from '../PageHeader/main-sidebar.jsx'
import SecondarySidebar from '../PageHeader/secondary-sidebar.jsx'
import Navbar from '../PageHeader/navbar.jsx'
import { Transition } from '@headlessui/react'
// import EVENT_QUERY from '../queries/event'
// import apolloClient from '../utils/apollo'

class DefaultLayout extends React.Component {
   constructor(props) {
      super(props)
      this.state = {
         active: false
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
               <div className="fixed top-0 left-0 z-30 flex">
                  <MainSidebar className={this.state.active !== true ? 'shadow-lg' : ''}>
                     {/* Button we needed to show and hide Secondary Sidebar */}
                     <svg
                        className={`w-10 h-10 cursor-pointer ${
                           this.state.active === true ? 'hidden' : ''
                        }`}
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
                     <svg
                        className={`w-10 h-10 cursor-pointer ${
                           this.state.active !== true ? 'hidden' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        onClick={() => this.toggleState()}>
                        <path
                           strokeLinecap="round"
                           strokeLinejoin="round"
                           strokeWidth="2"
                           d="M6 18L18 6M6 6l12 12"></path>
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
               </div>

               <div className="flex-col w-full h-screen">
                  <Navbar resize={this.state.active}></Navbar>
                  <div
                     className={`flex flex-col h-full transition-all duration-500 ${
                        this.state.active === true ? 'w-9/12 ml-auto' : 'w-full'
                     }`}
                     style={{
                        marginTop: '7rem',
                        marginLeft: this.state.active !== true ? '8%' : '',
                        width: this.state.active !== true ? '92%' : ''
                     }}>
                     <main>{this.props.children}</main>
                  </div>
               </div>
            </div>
         </div>
      )
   }
}

export default DefaultLayout
