import '../styles/styles.scss'

import React from 'react'
import Head from 'next/head'
import { ApolloProvider } from '@apollo/react-hooks'
import withData from '../utils/apollo'

import Layout from '../widgets/layouts/default'

const App = ({ Component, pageProps, apollo }) => {
   if (!apollo) {
      return <Layout>Loading</Layout>
   }
   return (
      <ApolloProvider client={apollo}>
         <Head>
            <title>Strapi blog</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Staatliches" />
            <link
               rel="stylesheet"
               href="https://cdn.jsdelivr.net/npm/uikit@3.2.3/dist/css/uikit.min.css"
            />
            <script src="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.2.0/js/uikit.min.js" />
            <script src="https://cdn.jsdelivr.net/npm/uikit@3.2.3/dist/js/uikit-icons.min.js" />
            <script src="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.2.0/js/uikit.js" />
         </Head>
         <Layout>
            <Component {...pageProps} />
         </Layout>
      </ApolloProvider>
   )
}
export default withData(App)
