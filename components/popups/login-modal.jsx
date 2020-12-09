// import auth0 from '../../utils/auth0'
// import { useRouter } from 'next/router'

// import { useAuth } from 'use-auth0-hooks'

export default function LoginModal(props) {
   // const { pathname, query } = useRouter()
   // const { isAuthenticated, accessToken, login, logout } = useAuth()
   // console.log(accessToken)
   return (
      <div className="fixed inset-0 z-50 overflow-y-auto">
         <div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
               <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
               &#8203;
            </span>
            {/* Login */}
            <div
               className="relative inline-block overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:align-middle sm:max-w-2xl sm:w-full"
               role="dialog"
               aria-modal="true"
               aria-labelledby="modal-headline">
               <div className="px-4 py-10 bg-white">
                  <div className="sm:flex sm:items-start">
                     <div className="flex flex-col items-center justify-center w-full">
                        <div className="w-full max-w-md space-y-8">
                           <div className="absolute" style={{ top: '2rem', right: '2rem' }}>
                              <svg
                                 xmlns="http://www.w3.org/2000/svg"
                                 fill="none"
                                 viewBox="0 0 24 24"
                                 stroke="currentColor"
                                 className="w-8 h-8 cursor-pointer"
                                 onClick={props.close}>
                                 <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                 />
                              </svg>
                           </div>
                           <div>
                              <img
                                 className="w-auto h-12 mx-auto"
                                 src="/img/logo.png"
                                 alt="Workflow"></img>
                           </div>
                           <div>
                              <span className="text-sm font-bold text-gray-700">
                                 Masuk Menggunakan
                              </span>
                              <div className="flex mt-3">
                                 <button className="w-full py-1 mr-5 border-2 border-gray-500 rounded-lg opacity-50 hover:opacity-100">
                                    <svg
                                       xmlns="http://www.w3.org/2000/svg"
                                       stroke="currentColor"
                                       viewBox="0 0 512 512"
                                       className="w-6 h-6 mx-auto">
                                       <path d="m512 256c0-141.4-114.6-256-256-256s-256 114.6-256 256 114.6 256 256 256c1.5 0 3 0 4.5-.1v-199.2h-55v-64.1h55v-47.2c0-54.7 33.4-84.5 82.2-84.5 23.4 0 43.5 1.7 49.3 2.5v57.2h-33.6c-26.5 0-31.7 12.6-31.7 31.1v40.8h63.5l-8.3 64.1h-55.2v189.5c107-30.7 185.3-129.2 185.3-246.1z" />
                                    </svg>
                                 </button>
                                 <button className="w-full py-1 mr-5 border-2 border-gray-500 rounded-lg opacity-50 hover:opacity-100">
                                    <svg
                                       xmlns="http://www.w3.org/2000/svg"
                                       stroke="currentColor"
                                       viewBox="0 0 512 512"
                                       className="w-6 h-6 mx-auto">
                                       <g>
                                          <g>
                                             <path d="M512,97.248c-19.04,8.352-39.328,13.888-60.48,16.576c21.76-12.992,38.368-33.408,46.176-58.016    c-20.288,12.096-42.688,20.64-66.56,25.408C411.872,60.704,384.416,48,354.464,48c-58.112,0-104.896,47.168-104.896,104.992    c0,8.32,0.704,16.32,2.432,23.936c-87.264-4.256-164.48-46.08-216.352-109.792c-9.056,15.712-14.368,33.696-14.368,53.056    c0,36.352,18.72,68.576,46.624,87.232c-16.864-0.32-33.408-5.216-47.424-12.928c0,0.32,0,0.736,0,1.152    c0,51.008,36.384,93.376,84.096,103.136c-8.544,2.336-17.856,3.456-27.52,3.456c-6.72,0-13.504-0.384-19.872-1.792    c13.6,41.568,52.192,72.128,98.08,73.12c-35.712,27.936-81.056,44.768-130.144,44.768c-8.608,0-16.864-0.384-25.12-1.44    C46.496,446.88,101.6,464,161.024,464c193.152,0,298.752-160,298.752-298.688c0-4.64-0.16-9.12-0.384-13.568    C480.224,136.96,497.728,118.496,512,97.248z" />
                                          </g>
                                       </g>
                                    </svg>
                                 </button>
                                 <button className="w-full py-1 border-2 border-gray-500 rounded-lg opacity-50 hover:opacity-100">
                                    <svg
                                       xmlns="http://www.w3.org/2000/svg"
                                       id="Bold"
                                       enableBackground="new 0 0 24 24"
                                       viewBox="0 0 24 24"
                                       className="w-6 h-6 mx-auto">
                                       <path d="m12 24c6.624 0 12-5.376 12-12s-5.376-12-12-12-12 5.376-12 12 5.376 12 12 12zm4.283-12.857h1.718v-1.717h1.718v1.718h1.703v1.718h-1.703v1.718h-1.718v-1.718h-1.718zm-7.704-5.144c1.514 0 2.908.533 4.017 1.563l-1.626 1.578c-.639-.625-1.514-.924-2.391-.924-2.076 0-3.736 1.718-3.736 3.779s1.655 3.779 3.736 3.779c1.577 0 3.14-.924 3.392-2.579h-3.392v-2.061h5.657c.063.329.092.658.092 1.001 0 3.426-2.299 5.864-5.749 5.864v.001c-3.329 0-6.001-2.686-6.001-6.001s2.672-6 6.001-6z" />
                                    </svg>
                                 </button>
                              </div>
                           </div>
                        </div>
                        <div className="flex items-center w-full max-w-md mt-5 mb-0">
                           <span className="w-full h-px bg-gray-500"></span>
                           <p className="mx-5 text-sm font-bold text-gray-700">Atau</p>
                           <span className="w-full h-px bg-gray-500"></span>
                        </div>
                        <form className="w-full max-w-md space-y-6" action="#" method="POST">
                           <input type="hidden" name="remember" value="true" />
                           <div className="-space-y-px rounded-md shadow-sm">
                              <div>
                                 <label htmlFor="email-address" className="sr-only">
                                    Email address
                                 </label>
                                 <input
                                    id="email-address"
                                    name="email"
                                    type="email"
                                    required
                                    className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="Email address"
                                 />
                              </div>
                              <div>
                                 <label htmlFor="password" className="sr-only">
                                    Password
                                 </label>
                                 <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    required
                                    className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="Password"
                                 />
                              </div>
                           </div>
                           <div className="flex items-center justify-between">
                              <div className="flex items-center">
                                 <input
                                    id="remember_me"
                                    type="checkbox"
                                    className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                                 />
                                 <label
                                    htmlFor="remember_me"
                                    className="block ml-2 text-sm text-gray-900">
                                    Remember me
                                 </label>
                              </div>

                              <div className="text-sm">
                                 <a
                                    href="#!"
                                    className="font-medium text-indigo-600 hover:text-indigo-500">
                                    Forgot your password?
                                 </a>
                              </div>
                           </div>
                           <div>
                              <button
                                 type="submit"
                                 className="relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md group hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                 <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                    <svg
                                       className="w-5 h-5 text-indigo-300 group-hover:text-indigo-400"
                                       xmlns="http://www.w3.org/2000/svg"
                                       viewBox="0 0 20 20"
                                       fill="currentColor"
                                       aria-hidden="true">
                                       <path
                                          fillRule="evenodd"
                                          d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                                          clipRule="evenodd"
                                       />
                                    </svg>
                                 </span>
                                 Sign in
                              </button>
                           </div>
                        </form>
                     </div>
                  </div>
               </div>
            </div>
            {/* End of Login Container */}
         </div>
      </div>
   )
}
