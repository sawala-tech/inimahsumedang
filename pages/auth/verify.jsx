import React, { useState } from 'react'
import { verify } from '../../utils/strapi-auth'

const Verify = () => {
   const [state, setState] = useState('Menverifikasi')
   const toggleState = () => {
      setState('Autentikasi gagal, menutup browser...')
   }
   /** Verify using our strapi verify */
   verify().then((val) => {
      if (val) {
         if (val === 400) {
            toggleState(false)
            setTimeout(() => {
               window.close()
            }, 2000)
         } else {
            if (process.browser) {
               window.opener.location.reload(true)
               window.close()
            }
         }
      }
   })

   return (
      <div className="w-4/5 mx-auto my-10">
         <span>{state}</span>
      </div>
   )
}

export default Verify
