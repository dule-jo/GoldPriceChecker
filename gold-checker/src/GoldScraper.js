import axios from 'axios'
import { safeParseFloatStrict } from '@/helper.js'

export async function ScrapeGoldWebsite (url) {
  try {
    const { data } = await axios.get(url)

    const parser = new DOMParser()
    const doc = parser.parseFromString(data, 'text/html')

    const tables = doc.querySelectorAll('.rats')

    if (tables.length >= 2) {
      const extractPrice = (table) => {
        const priceTD = table.querySelector('tr:nth-child(2) td:nth-child(3)')
        return priceTD ? priceTD.textContent.trim() : 'N/A'
      }

      return {
        buy: safeParseFloatStrict(extractPrice(tables[0])),
        sell: safeParseFloatStrict(extractPrice(tables[1]))
      }
    } else {
      console.error('Nije pronađen dovoljan broj tabela.')
    }

  } catch (error) {
    console.error('Greška pri dohvaćanju podataka:', error.message)
  }
}

export async function ScrapeGoldSpecialWebsite (url) {
  try {
    const { data } = await axios.get(url)

    const parser = new DOMParser()
    const doc = parser.parseFromString(data, 'text/html')

    const priceContainers = doc.querySelectorAll('div[style*="justify-content:space-between; align-items:center;"]')

    if (priceContainers.length >= 2) {
      const sell = priceContainers[0].querySelector('div:nth-child(2)')
      const buy = priceContainers[1].querySelector('div:nth-child(2)')

      return {
        buy: sell ? safeParseFloatStrict(sell.textContent.trim()) : 'N/A',
        sell: buy ? safeParseFloatStrict(buy.textContent.trim()) : 'N/A'
      }
    } else {
      console.error('Nije pronađen dovoljan broj kontejnera za cene.')
    }

  } catch (error) {
    console.error('Greška pri dohvaćanju podataka:', error.message)
  }
}
