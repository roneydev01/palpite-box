import React from 'react'

import '../css/styles.css'

const MyApp = ({ Component, pageProps }) => {
  return (
    <div>
      <h1 className='bg-red-400 md:bg-green-500 sm:bg-purple-700 p-8'>MyApp</h1>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp