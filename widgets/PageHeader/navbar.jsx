import React, { useState } from 'react'
// import Image from 'next/image'
import Link from 'next/link'
import { Search } from '../../components/forms'
import { DefaultButton, Dropdown, DropdownItem } from '../../components/buttons'
import { LoginModal as Modal } from '../../components/popups'
import { Transition } from '@headlessui/react'
import { useRouter } from 'next/router'
// import { useAuth } from 'use-auth0-hooks'
import { isAuthenticated, logout, userProfile } from '../../utils/strapi-auth'

const Navbar = (props) => {
   const [state, setState] = useState(false)
   const toggleLoginModal = () => {
      setState(!state)
   }
   const Router = useRouter()
   const href = (url) => {
      Router.push(url)
   }
   const { user } = userProfile()
   const resize = props.resize
   // const { pathname, query } = useRouter()
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
            <div className="ml-10">
               {isAuthenticated() ? (
                  <Dropdown>
                     <div>
                        <span className="font-semibold cursor-pointer select-none">
                           {user.fullname}
                           <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="inline w-5 h-5 ml-2"
                              viewBox="0 0 20 20"
                              fill="currentColor">
                              <path
                                 fillRule="evenodd"
                                 d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                 clipRule="evenodd"
                              />
                           </svg>
                        </span>
                     </div>
                     <div>
                        <DropdownItem>
                           <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="inline w-4 h-4 mr-2"
                              viewBox="0 0 20 20"
                              fill="currentColor">
                              <path
                                 fillRule="evenodd"
                                 d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                                 clipRule="evenodd"
                              />
                           </svg>
                           Profil
                        </DropdownItem>
                        <DropdownItem onClick={() => href('/artikel/create')}>
                           <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="inline w-4 h-4 mr-2"
                              viewBox="0 0 20 20"
                              fill="currentColor">
                              <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                              <path
                                 fillRule="evenodd"
                                 d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                                 clipRule="evenodd"
                              />
                           </svg>
                           Tulis Artikel
                        </DropdownItem>
                        <DropdownItem onClick={() => logout()}>
                           <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              className="inline w-4 h-4 mr-2"
                              fill="red">
                              <path
                                 fillRule="evenodd"
                                 d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                                 clipRule="evenodd"
                              />
                           </svg>
                           <span className="text-red-600">Logout</span>
                        </DropdownItem>
                     </div>
                  </Dropdown>
               ) : (
                  <DefaultButton
                     variant="primary"
                     className="rounded-3xl hover:bg-blue-600"
                     onClick={() => toggleLoginModal()}>
                     Masuk
                  </DefaultButton>
               )}
            </div>
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
