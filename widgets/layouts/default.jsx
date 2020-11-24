import MainSidebar from '../PageHeader/main-sidebar.jsx'
import SecondarySidebar from '../PageHeader/secondary-sidebar.jsx'
import Navbar from '../PageHeader/navbar.jsx'

export default function DefaultNavbar({ children }) {
   return (
      <div>
         <div className="w-screen h-24 flex">
            <MainSidebar></MainSidebar>
            <SecondarySidebar></SecondarySidebar>

            <div className="w-full flex flex-col h-screen">
               <Navbar></Navbar>
               <div className="h-full w-full flex flex-col">
                  <main>{children}</main>
               </div>
            </div>
         </div>
      </div>
   )
}
