import React from 'react'

const Footer = () => {
  return (
    <div className='bg-green-400 p-4'>
      <div className='container mx-auto text-center font-bold text-white'>
        Projeto Desenvolvido por:
        <a className='px-2 hover:underline' href='http://roneyfreitas.com' target='blank'>Roney Freitas</a> /
        <a className='px-2 hover:underline' href='https://linkedin.com' target='blank'>Linkedin</a> /
        <a className='px-2 hover:underline' href='https://github.com/roneydev01' target='blank'> GitHub </a>
        <div className='mt-2'>
          <img className='inline p-4' src='/logo_semana_fsm.png' />
          <img className='inline p-4' src='/logo_devpleno.png' />
        </div>
        <div className='mt-2'>
          <p> Versão do <strong>PalpiteBox</strong>, utilizando <strong>NextJs, TailwindCSS </strong> e integração com o <strong>Google Spreadsheet</strong>.</p>
          <p>Este projeto foi construído no Fullstack Master Premium.</p>
        </div>

      </div>
    </div>
  )
}

export default Footer