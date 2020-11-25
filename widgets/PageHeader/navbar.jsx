import React from 'react'
// import Image from 'next/image'
import Link from 'next/link'
import { Search } from '../../components/forms'
import { DefaultButton } from '../../components/buttons'

class Navbar extends React.Component {
   render() {
      var resize = this.props.resize
      return (
         <nav
            className="fixed z-20 flex items-center w-9/12 transition-all duration-300 bg-white border-b-2 border-gray-200"
            style={{
               left: resize ? '25%' : '8%',
               width: resize ? '75%' : '92%',
               height: 'calc(7rem - 2px)'
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
               <div className="mx-10">
                  <Search placeholder="Cari artikel"></Search>
               </div>
               <div className="ml-10">
                  <DefaultButton variant="primary" className="rounded-3xl hover:bg-blue-600">
                     Masuk
                  </DefaultButton>
               </div>
            </div>
         </nav>
      )
   }
}

export default Navbar
