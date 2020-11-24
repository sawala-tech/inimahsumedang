import Image from 'next/image'
import Link from 'next/link'
import { Search } from '../../components/forms'

export default function navbar() {
   return (
      <nav className="h-32 bg-white w-full border-b-2 border-gray-200">
         <div className="w-4/5 mx-auto flex items-center justify-start h-full">
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
               <Search></Search>
            </div>
         </div>
      </nav>
   )
}
