import React from 'react'
import Link from 'next/link'


const Header = () => {
  return (
    <React.Fragment>
      <div className='bg-green-400 p-4 shadow-md'>
        <div className='container mx-auto'>
          <Link href='/' >
            <a >
              <img className='mx-auto transform motion-reduce:transform-none hover:-translate-y-1 hover:scale-110 transition ease-in-out duration-300' src='/logo_palpitebox.png' alt='PalpiteBox' />
            </a>
          </Link>
        </div>
      </div>
      <div className='bg-green-300 p-4 shadow-md text-center'>
        <Link href='/' >
          <a className='p-2 font-bold hover:text-white ' >Home</a>
        </Link>
        <Link href='/sobre' >
          <a className='p-2 font-bold hover:text-white '>Sobre</a>
        </Link>
        <Link href='/contato' >
          <a className='p-2 font-bold hover:text-white '>Contato</a>
        </Link>
        <Link href='/pesquisa' >
          <a className='p-2 font-bold hover:text-white'>Pesquisa</a>
        </Link>
      </div>
    </React.Fragment>
  )
}

export default Header