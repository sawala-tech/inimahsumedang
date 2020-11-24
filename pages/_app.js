import { Component } from 'react'
import '../styles/styles.scss'
import PropTypes from 'prop-types'

function MyApp({ pageProps }) {
   return <Component {...pageProps} />
}

MyApp.propTypes = {
   pageProps: PropTypes.any
}

export default MyApp
