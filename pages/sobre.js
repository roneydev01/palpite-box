import React from "react"
import Link from "next/link"
import PageTitle from '../components/PageTitle'

const Sobre = () => {
  return (
    <div>
      <PageTitle title='Sobre' />
      <div className="m-4 text-center md:mt-0 md:ml-6">
        <div className=" m-2 uppercase tracking-wide text-sm text-green-600 font-bold">
          Palpite-Box
        </div>
        <p className="block mt-1 text-lg leading-tight font-semibold text-gray-900 ">
          Incentiva Usuários a Darem Notas e Sujestões ao Estabeleciemento!
        </p>
        <p className="m-2 text-gray-600">
          Usuários podem receber cupons de descontos, para utilizarem em determinados produtos ou serviços no estabelecimento e tudo isso muito fácil, apenas preenchendo um simples cadastro.
            <Link href='/pesquisa'>
            <a className='px-2 hover:underline'>Clicando aqui </a>
          </Link>
        </p>
      </div>
    </div >
  )
}

export default Sobre