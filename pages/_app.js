import '../styles/styles.scss'

import React from 'react'
import App from 'next/app'

import Layout from '../widgets/layouts/default'

class MyApp extends App {
   render() {
      const { Component, appProps } = this.props
      // Workaround for https://github.com/zeit/next.js/issues/8592
      const { err } = this.props
      const modifiedPageProps = { ...appProps, err }
      return (
         <Layout>
            <Component {...modifiedPageProps} />
         </Layout>
      )
   }
}

export default MyApp
