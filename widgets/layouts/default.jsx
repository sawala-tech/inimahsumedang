import MainSidebar from '../PageHeader/main-sidebar.jsx'
import SecondarySidebar from '../PageHeader/secondary-sidebar.jsx'
import Navbar from '../PageHeader/navbar.jsx'

export default function DefaultNavbar({ children }) {
   return (
      <div>
         <div className="flex w-screen h-24">
            <MainSidebar></MainSidebar>
            <SecondarySidebar></SecondarySidebar>

            <div className="flex flex-col w-full h-screen">
               <Navbar></Navbar>
               <div className="flex flex-col w-full h-full">
                  <main>{children}</main>
               </div>
            </div>
         </div>
      </div>
   )
}
