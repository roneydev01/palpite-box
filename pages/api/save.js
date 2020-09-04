import { GoogleSpreadsheet } from 'google-spreadsheet'
import moment from 'moment'
import credentials from '../../credentials.json'

//Id da Planllha
const doc = new GoogleSpreadsheet('1o-eMKiKfNDCbdNtOJtKf2dDQr3OFLNB8jGrWNP1YMDM')

//Gera Cupom
const genCupom = () => {
  //Gera cupom a partir da data e converte para hexadecimal
  const code = parseInt(moment().format('YYMMDHHmmsSSS')).toString(16)
  //Retorna com os traços
  return code.substr(0, 4) + '-' + code.substr(4, 4) + '-' + code.substr(8, 4)
}

export default async (req, res) => {
  try {
    await doc.useServiceAccountAuth(credentials)
    await doc.loadInfo()
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