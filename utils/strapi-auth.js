import Cookies from 'js-cookie'
import { useRouter } from 'next/router'

const COOKIE_NAME = process.env.COOKIE_NAME || 'user'

/**
 * User has token, use it if necessarry
 */
const USER = Cookies.get(COOKIE_NAME)

/**
 * Check user is Authenticated or Not
 */
const isAuthenticated = () => {
   if (USER) return true
   return false
}
/**
 * Verify user authentication
 */
const verify = () => {
   const Router = useRouter()

   const token = () => {
      if (Router.query.access_token) {
         const JWT = Router.query
         return Object.keys(JWT)
            .map(function (key) {
               return key + '=' + JWT[key]
            })
            .join('&')
      }
   }
   const social = Cookies.get('loginWith')
   const EXP = Router.query['raw[expires_in]']
   const TYPE = Router.query['raw[token_type]']
   /**
    * Fetching and verifying TOKEN
    */
   const fetchToken = async () => {
      if (token()) {
         const res = await fetch(`${process.env.API_URL}/auth/${social}/callback?${token()}`)
         return await res.json()
      }
   }
   return fetchToken().then((user) => {
      if (user && user.statusCode !== 400) {
         Cookies.set(COOKIE_NAME, user, { expires: EXP / (3600 * 24) })
         Cookies.set('token_type', TYPE, { expires: EXP / (3600 * 24) })
         return user
      } else if (user && user.statusCode === 400) {
         return 400
      }
      return null
   })
}
/**
 * Return user Profile
 */
const userProfile = () => {
   if (USER) return JSON.parse(USER)
   return false
}

const login = (social) => {
   const url = `${process.env.API_URL}/connect/${social}`
   Cookies.set('loginWith', social)
   const win = window.open(
      url,
      '_blank',
      'location =yes,height=570,width=520,scrollbars=yes,status=yes'
   )
   win.focus()
}
/**
 * Logout and delete our JWT provided by Strapi
 */
const logout = () => {
   Cookies.remove(COOKIE_NAME)
   window.location.reload()
}
export { isAuthenticated, logout, login, userProfile, verify }
