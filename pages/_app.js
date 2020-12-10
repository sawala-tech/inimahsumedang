import React from 'react'
// import EVENT_QUERY from '../queries/event'
// import apolloClient from '../utils/apollo'
import '../styles/styles.scss'
import Layout from '../widgets/layouts/default'
import { Auth0Provider } from 'use-auth0-hooks'
import { useRouter, withRouter } from 'next/router'
import App from 'next/app'

/**
 * Where to send the user after they have signed in.
 */
// const onRedirectCallback = (appState) => {

// }

/**
 * When it hasn't been possible to retrieve a new access token.
 * @param {Error} err
 * @param {AccessTokenRequestOptions} options
 */
const onAccessTokenError = (err) => {
   console.error('Failed to retrieve access token: ', err)
}

/**
 * When signing in fails for some reason, we want to show it here.
 * @param {Error} err
 */
const onLoginError = (err) => {
   const Router = useRouter()

   Router.push({
      pathname: '/oops',
      query: {
         message: err.error_description || err.message
      }
   })
}

/**
 * When redirecting to the login page you'll end up in this state where the login page is still loading.
 * You can render a message to show that the user is being redirected.
 */
const onRedirecting = () => {
   return (
      <div className="mx-auto my-10 sm:full lg:w-3/5">
         <h1>Signing you in</h1>
         <p>
            In order to access this page you will need to sign in. Please wait while we redirect you
            to the login page...
         </p>
      </div>
   )
}

/**
 * Create a page which wraps the Auth0 provider.
 */
class Root extends App {
   render() {
      const { Component, pageProps } = this.props

      return (
         <Auth0Provider
            domain={'inimahsumedang.us.auth0.com'}
            clientId={'ImhlEukIri6oHQtTeLkSY4GvEhpgXjH1'}
            redirectUri={'http://localhost:3000/'}
            onLoginError={onLoginError}
            onAccessTokenError={onAccessTokenError}
            onRedirecting={onRedirecting}>
            <Layout>
               <Component {...pageProps} />
            </Layout>
         </Auth0Provider>
      )
   }
}
export default withRouter(Root)
