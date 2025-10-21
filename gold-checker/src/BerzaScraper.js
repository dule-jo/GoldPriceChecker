import axios from 'axios'

export async function ScrapeGoldBerza() {

  try {
    const { data } = await axios.get('https://data-asg.goldprice.org/dbXRates/USD')
    return data.items[0]
  } catch (error) {
    console.error('Greška pri dohvaćanju podataka:', error.message)
  }
}
