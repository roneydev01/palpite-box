import React from "react"
import Link from "next/link"

const Pesquisa = () => {
  return (
    <div className='pt-6'>
      <h1 className='text-center font-bold my-4 text-2xl text-green-600'>Críticas e sugestões</h1>
      <p className='text-center'>O restaurante X sempre busca por atender melhor seus clientes. <br />
         Por isso, estamos sempre abertos a ouvir a sua opinião.
      </p>
      <div className='w-1/5 mx-auto'>
        <label className='font-bold'>Seu Nome</label>
        <input type='text' className='p-4 block shadow bg-green-200 my-2 rounded ' />
      </div>
    </div>
  )
}

export default Pesquisa