import React from 'react'
import Link from 'next/link'
import useSWR from 'swr'
import PageTitle from '../components/PageTitle'

const fetcher = (...args) => fetch(...args).then(res => res.json())

const Index = () => {
  const { data, error } = useSWR('/api/get-promo', fetcher)
  return (
    <div>
      <PageTitle title='Seja Bem-vindo' />
      <p className='mt-12 text-center'>
        O restaurante X sempre busca por atender melhor seus clientes.<br />
          Por isso, estamos sempre abertos a ouvir a sua opinião
       </p>
      <div className='m-12 text-center'>
        <Link href='/pesquisa'>
          <a className='bg-green-500 px-12 py-4 font-bold rounded-lg shadow-lg hover:shadow'>
            Dar opinião ou sugestão
          </a>
        </Link>
      </div>
      {!data && <p> Carregando...</p>}
      {data && data.showCoupon &&
        <div className="bg-teal-100 border-t-2 border-teal-400 rounded-b text-teal-900 px-2 py-2 shadow-md" role="alert">
          <p className='my-4 text-center'>
            {data.message}
          </p>
        </div>
      }
    </div >
  )
}

export default Index