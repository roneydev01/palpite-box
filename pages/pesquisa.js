import React, { useState } from "react"
import Link from "next/link"

const Pesquisa = () => {
  //Controlando o Formulário por Estado
  const [form, setFom] = useState({
    Nome: '',
    Email: '',
    Whatsapp: ''

  })

  const save = async () => {
    try {
      const response = await fetch('api/save', {
        method: 'POST',
        body: JSON.stringify(form)
      })
      const data = await response.json()
      console.log(data)
    } catch (err) {

    }
  }

  const onChange = evt => {
    //Pega todos os dados do formulário antigo e copia
    const value = evt.target.value
    const key = evt.target.name
    setFom(old => ({
      ...old,
      [key]: value
    }))
  }

  return (
    <div className='pt-6'>
      <h1 className='text-center font-bold my-4 text-2xl text-green-600'>Críticas e sugestões</h1>
      <p className='text-center'>O restaurante X sempre busca por atender melhor seus clientes. <br />
         Por isso, estamos sempre abertos a ouvir a sua opinião.
      </p>
      <div className='w-1/5 mx-auto'>
        <label className='font-bold'>Seu Nome</label>
        <input type='text' className='p-4 block shadow bg-green-200 my-2 rounded ' placeholder='Nome' onChange={onChange} name='Nome' value={form.Nome} />
        <label className='font-bold'>E-mail</label>
        <input type='text' className='p-4 block shadow bg-green-200 my-2 rounded ' placeholder='E-mail' onChange={onChange} name='Email' value={form.Email} />
        <label className='font-bold'>Whatsapp</label>
        <input type='text' className='p-4 block shadow bg-green-200 my-2 rounded ' placeholder='Whatsapp' onChange={onChange} name='Whatsapp' value={form.Whatsapp} />
        <button className='bg-green-500 px-12 py-3 my-2 font-bold rounded-lg shadow-lg hover:shadow' onClick={save}>Salvar</button>
        <pre>{JSON.stringify(form, null, 2)}</pre>
      </div>
    </div>
  )
}

export default Pesquisa