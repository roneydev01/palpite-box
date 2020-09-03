import { GoogleSpreadsheet } from 'google-spreadsheet'
import credentials from '../../credentials.json'

//Id da Planllha
const doc = new GoogleSpreadsheet('1o-eMKiKfNDCbdNtOJtKf2dDQr3OFLNB8jGrWNP1YMDM')

export default async (req, res) => {
  try {
    await doc.useServiceAccountAuth(credentials)
    await doc.loadInfo()
    const sheet = doc.sheetsByIndex[1]
    //Pegando os dados da requisição
    const data = JSON.parse(req.body)

    await sheet.addRow({
      Nome: data.Nome,
      Email: data.Email,
      Whatsapp: data.Whatsapp,
      Cupom: 'dweqw122',
      Promo: 'dsdfdfsa'
    })
    //Enviado dados para a planilha
    res.end(req.body)
  } catch (error) {
    res.end('error')
  }
}