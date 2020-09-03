import { GoogleSpreadsheet } from 'google-spreadsheet'
import credentials from '../../credentials.json'

//Id da Planllha
const doc = new GoogleSpreadsheet('1o-eMKiKfNDCbdNtOJtKf2dDQr3OFLNB8jGrWNP1YMDM')

export default async (req, res) => {
  try {
    await doc.useServiceAccountAuth(credentials)
    await doc.loadInfo()

    const sheet = doc.sheetsByIndex[2]
    await sheet.loadCells('A4:B4')

    const mostrarPromocalCell = sheet.getCell(3, 0)
    const textoCell = sheet.getCell(3, 1)

    res.end(JSON.stringify({
      showCoupon: mostrarPromocalCell.value === 'VERDADEIRO',
      message: textoCell.value
    }))

  } catch (error) {
    res.end(JSON.stringify({
      showCoupon: false,
      message: ''
    }))
  }
}