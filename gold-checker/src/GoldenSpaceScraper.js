  import axios from 'axios'
  import { items } from '@/products.js'

  export async function ScrapeGoldenSpaceWebsite () {
    const bars = []
    for (let i = 0; i < items.length; i++) {
      const item = items[i]
      const response = await axios.get(item.link)
      bars.push(ExtractBars(response.data, item))
    }
    return bars.flat()
  }

  function ExtractBars (htmlContent, item) {
    const items = []
    const parser = new DOMParser()
    const doc = parser.parseFromString(htmlContent, 'text/html')
    const priceElements = doc.querySelectorAll('p.price > .woocommerce-Price-amount')
    const weightElements = doc.querySelectorAll('.elementor-widget-container > p.elementor-heading-title')

    const prices = []
    const weights = []
    priceElements.forEach(priceElement => {
      let numberStr = (priceElement.innerText || priceElement.textContent)
        .replace('RSD', '')
        .trim()

      numberStr = numberStr.replace('.', '').replace(',', '.')
      prices.push(parseFloat(numberStr))
    })
    weightElements.forEach(weightElement => {

      let numberStr = (weightElement.innerText || weightElement.textContent)
        .trim()

      const regex = /(\d+(?:\.\d+)?[gG])/
      const match = numberStr.match(regex)
      if (match && match.length > 1) {
        weights.push(match[1])
      }
    })

    for (let i = 0; i < weights.length; i++) {
      const weight = weights[i]
      const buy = prices[i*3]
      const buy10 = prices[i*3+1]
      const sell = prices[i*3+2]

      items.push({
        shop: item.shop,
        size: weight,
        prices: {
          buy: buy,
          sell: sell,
          buyFor10: buy10
        },
      })
    }

    return items
  }

