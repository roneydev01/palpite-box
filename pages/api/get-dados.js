import { GoogleSpreadsheet } from 'google-spreadsheet'
import { fromBase64 } from '../../utils/base64'

//Id da Planllha
const doc = new GoogleSpreadsheet(process.env.SHEET_DOC_ID)

export default async (req, res) => {
  try {
    await doc.useServiceAccountAuth({
      client_email: process.env.SHEET_CLIENT_EMAIL,
      private_key: fromBase64(process.env.SHEET_PRIVATE_KEY)
    })
    await doc.loadInfo()
    //Carrega as informações da Planila
    const sheet = doc.sheetsByIndex[3]
    //Pego as linha da planillha
    const rows = await sheet.getRows()    
    const produtos = rows.map((each) => each.Produtos)

    res.end(JSON.stringify({ produtos }))
  } catch (error) {
    res.end(JSON.stringify({
      produtos: ''
    }))
  }
}