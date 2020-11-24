import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Search } from '../../components/forms'
import { DefaultButton } from '../../components/buttons'

class Navbar extends React.Component {
   render() {
      return (
         <nav className="flex items-center h-32 bg-white border-b-2 border-gray-200">
            <div className="flex items-center justify-between w-4/5 mx-auto">
               <Image
                  src="/img/logo_inimahsumedang_500x.png"
                  height={45}
                  width={125}
                  layout="fixed"></Image>

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
