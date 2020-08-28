import React from 'react'
import '../css/styles.css'
import Header from '../components/Header'

const MyApp = ({ Component, pageProps }) => {
  return (
    <div>
      <Header />
      <div>
        <Component {...pageProps} />
      </div>

    </div>
  )
}

export default MyApp