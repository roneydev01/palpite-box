import { GoogleSpreadsheet } from 'google-spreadsheet'
import moment from 'moment'
import { fromBase64 } from '../../utils/base64'

//Id da Planllha
const doc = new GoogleSpreadsheet(process.env.SHEET_DOC_ID)

//Gera Cupom
const genCupom = () => {
  //Gera cupom a partir da data e converte para hexadecimal
  const code = parseInt(moment().format('YYMMDHHmmsSSS')).toString(16)
  //Retorna com os traços
  return code.substr(0, 4) + '-' + code.substr(4, 4) + '-' + code.substr(8, 4)
}

export default async (req, res) => {
  try {
    await doc.useServiceAccountAuth({
      client_email: process.env.SHEET_CLIENT_EMAIL,
      private_key: fromBase64(process.env.SHEET_PRIVATE_KEY)
    })
    await doc.loadInfo()
    //Carrega as informações da planillha
    const sheet = doc.sheetsByIndex[1]
    //Pegando os dados da requisição
    const data = JSON.parse(req.body)

    //Dados da Planilha 2
    const sheetConfig = doc.sheetsByIndex[2]
    await sheetConfig.loadCells('A4:B4')

    const mostrarPromocalCell = sheetConfig.getCell(3, 0)
    const textoCell = sheetConfig.getCell(3, 1)

    let Cupom = ''
    let Promo = ''

    if (mostrarPromocalCell.value === 'VERDADEIRO') {
      //Chama a Função genCupon
      Cupom = genCupom()
      Promo = textoCell.value
    }

    await sheet.addRow({
      Nome: data.Nome,
      Email: data.Email,
      Whatsapp: data.Whatsapp,
      Nota: parseInt(data.Nota),
      Produto: data.Produto,
      'Data': moment().format('DD/MM/YYYY HH:mm:ss'),
      Cupom,
      Promo
    })
    //Enviado dados para a planilha
    res.end(JSON.stringify({
      showCupom: Cupom !== '',
      Cupom,
      Promo
    }))
  } catch (error) {
    res.end('error')
  }
}