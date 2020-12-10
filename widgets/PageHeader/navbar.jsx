import React, { useState } from 'react'
// import Image from 'next/image'
import Link from 'next/link'
import { Search } from '../../components/forms'
// import { DefaultButton } from '../../components/buttons'
import { LoginModal as Modal } from '../../components/popups'
import { Transition } from '@headlessui/react'
// import { useRouter } from 'next/router'
// import { useAuth } from 'use-auth0-hooks'

const Navbar = (props) => {
   const [state, setState] = useState(false)
   const toggleLoginModal = () => {
      setState(!state)
   }
   const resize = props.resize
   // const { pathname, query } = useRouter()
   // const { isAuthenticated, isLoading, login, logout } = useAuth()
   // console.log(isAuthenticated)
   return (
      <nav
         className="fixed z-50 flex items-center w-9/12 transition-all duration-300 bg-white border-b-2 border-gray-200"
         style={{
            left: resize ? 'calc(27% - 5px)' : '9%',
            width: resize ? '73%' : '91%',
            height: 'calc(7rem - 3px)'
         }}>
         <div className="flex items-center justify-between w-4/5 mx-auto">
            <Link href="/">
               <img src="/img/logo.png" width="100px" alt="inimahlogo" />
            </Link>

            <div className="mx-10">
               <ul>
                  <li className="inline mx-5">
                     <Link href="#!">Info</Link>
                  </li>
                  <li className="inline mx-5">
                     <Link href="#!">Merchandise</Link>
                  </li>
                  <li className="inline mx-5">
                     <Link href="#!">Tentang</Link>
                  </li>
               </ul>
            </div>
            <div className="ml-10">
               <Search placeholder="Cari artikel"></Search>
            </div>
            {/* <div className="ml-10">
               {!isLoading &&
                  (isAuthenticated ? (
                     <button
                        className="flex items-center"
                        onClick={() => logout({ appState: { returnTo: { pathname, query } } })}>
                        Keluar
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           fill="none"
                           viewBox="0 0 24 24"
                           className="inline w-6 h-6 ml-2"
                           stroke="currentColor">
                           <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                           />
                        </svg>
                     </button>
                  ) : (
                     <DefaultButton
                        variant="primary"
                        className="rounded-3xl hover:bg-blue-600"
                        onClick={() => login({ returnTo: 'http://localhost:3000' })}>
                        Masuk
                     </DefaultButton>
                  ))}
            </div> */}
         </div>
         {/* Login Popups */}
         <Transition
            show={state}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0">
            <Modal close={() => toggleLoginModal()}></Modal>
         </Transition>
      </nav>
   )
}

export default Navbar
