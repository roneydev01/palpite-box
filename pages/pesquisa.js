import React, { useState } from "react"
import Link from "next/link"

const Pesquisa = () => {
  //Controlando o Formulário por Estado
  const [form, setFom] = useState({
    Nome: '',
    Email: '',
    Whatsapp: '',
    Nota: 0

  })

  const notas = [0, 1, 2, 3, 4, 5]
  const [sucess, setSucccess] = useState(false)
  const [retorno, setRetorno] = useState({})

  const save = async () => {
    try {
      const response = await fetch('api/save', {
        method: 'POST',
        body: JSON.stringify(form)
      })
      const data = await response.json()
      setSucccess(true)
      setRetorno(data)
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
      {!sucess &&
        <div className='w-1/5 mx-auto'>
          <label className='font-bold'>Seu Nome</label>
          <input type='text' className='p-4 block shadow bg-green-200 my-2 rounded ' placeholder='Nome' onChange={onChange} name='Nome' value={form.Nome} />
          <label className='font-bold'>E-mail</label>
          <input type='text' className='p-4 block shadow bg-green-200 my-2 rounded ' placeholder='E-mail' onChange={onChange} name='Email' value={form.Email} />
          <label className='font-bold'>Whatsapp</label>
          <input type='text' className='p-4 block shadow bg-green-200 my-2 rounded ' placeholder='Whatsapp' onChange={onChange} name='Whatsapp' value={form.Whatsapp} />
          <label className='font-bold'>Nota</label>
          <div className='flex py-4'>
            {
              notas.map(nota => {
                return (<label className='block w-1/6'>
                  {nota} <br />
                  <input type='radio' name='Nota' value={nota} onChange={onChange} />
                </label>)
              })
            }
          </div>
          <button className='bg-green-500 px-12 py-3 my-2 font-bold rounded-lg shadow-lg hover:shadow' onClick={save}>Salvar</button>
        </div>
      }
      {sucess &&
        <div className='w-1/5 mx-auto'>
          <p className='m-6 text-center bg-green-100 border-t border-b border-green-500 text-blue-700 px-4 py-3'>
            Obrigado por contribuir com sua sugestão ou critica.
          </p>
          {
            retorno.showCupom &&
            <div className='text-center border mb-4'>
              <p className='text-green-700 font-bold text-2xl'> Seu cupom: </p> <br />
              <span className='font-bold text-2xl'> {retorno.Cupom} </span>
            </div>
          }
          {
            retorno.showCupom &&
            <div className='text-center border mb-4'>
              <span className='font-bold'> {retorno.Promo} </span>
              <br />
              <span className='italic'>Tire um print ou foto desta tela e apresente ao garçam.</span>
            </div>
          }
        </div>}
    </div>
  )
}

export default Pesquisa