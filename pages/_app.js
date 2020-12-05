import '../styles/styles.scss'

import React from 'react'

import Layout from '../widgets/layouts/default'
function MyApp({ Component, pageProps }) {
   return (
      <Layout>
         <Component {...pageProps} />
      </Layout>
   )
}

export default MyApp
