import { isAuthenticated } from '../utils/strapi-auth'
import { useRouter } from 'next/router'
const Forbidden = () => {
   const isLogin = isAuthenticated()
   const Router = useRouter()
   if (isLogin) {
      Router.push('/')
   }
   return (
      <div className="w-4/5 p-10 mx-auto my-10 text-center">
         <h1 className="text-5xl">Eh</h1>
         <span>Halaman yang kamu coba masuk memerlukan akses, masuk dulu yuk!</span>
         <img
            src={require('../public/img/curved_arrow.png')}
            style={{
               right: '7.5rem',
               position: 'absolute',
               transform: 'scaleX(-1) rotate(-50deg)',
               width: '10rem',
               pointerEvents: 'none',
               top: '8rem',
               opacity: '.5'
            }}
            alt=""
         />
      </div>
   )
}

export default Forbidden
