import React from 'react'
import '../css/styles.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

const MyApp = ({ Component, pageProps }) => {
  return (
    <div>
      <Header />
      <div>
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
  )
}

export default MyApp