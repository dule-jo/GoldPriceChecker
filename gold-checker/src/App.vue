<script>

import { products } from '@/products.js'
import { shopNames, shopLink } from '@/products'
import { ScrapeGoldenSpaceWebsite } from '@/GoldenSpaceScraper.js'
import { FormatNumber } from '@/helper'

export default {
  computed: {
    shopNames () {
      return shopNames
    },
    shopLink () {
      return shopLink
    }
  },
  data () {
    return {
      prices: [],
      productTypes: null,
      loading: true
    }
  }, mounted () {
    this.fetchGoldPrices()
    this.getDistinctProducerSize()
  },
  methods: {
    FormatNumber,
    async fetchGoldPrices () {
      const gsItemsPromise = ScrapeGoldenSpaceWebsite()

      const allItemPromises = products.flatMap(product =>
        product.list.map(async item => {
          if (!item.scraper) return {
            ...item,
            producer: product.producer,
            size: product.size
          }
          const prices = await item.scraper(item.link)

          return {
            ...item,
            prices: prices,
            producer: product.producer,
            size: product.size
          }
        })
      )

      const processedItems = await Promise.all(allItemPromises)
      const gsItems = await gsItemsPromise

      this.prices.push(...processedItems)

      this.prices.forEach(price => {
        const found = gsItems.find(item => this.GetHash(item) + item.shop === this.GetHash(price) + price.shop)
        if (!found) return
        price.prices = found.prices
      })
      this.loading = false
    },
    getDistinctProducerSize () {
      const distinctKeys = new Set()
      const distinctList = []

      products.forEach(item => {
        const producerName = item.producer
        const size = item.size

        item.list.forEach(item => {
          const shop = item.shop
          const key = `${ producerName }|${ size }`

          if (!distinctKeys.has(key)) {
            distinctKeys.add(key)

            distinctList.push({
              producer: producerName,
              size: size
            })
          }
        })
      })

      this.productTypes = distinctList
    },
    GetPrice (productType, shop) {
      const price = this.prices.filter(item => this.GetHash(item) === this.GetHash(productType) && item.shop === shop)[0]
      if (!price) return null
      return price.prices
    },
    GetBuyPrice (productType, shop) {
      let price = this.GetPrice(productType, shop)
      if (!price) return null
      return price.buy
    },
    GetBuyFor10Price (productType, shop) {
      let price = this.GetPrice(productType, shop)
      if (!price) return null
      return price.buyFor10
    },
    GetSellPrice (productType, shop) {
      let price = this.GetPrice(productType, shop)
      if (!price) return null
      return price.sell
    },
    GetMarkup (productType, shop) {
      let price = this.GetPrice(productType, shop)
      if (!price) return null
      return 100 * (price.buy / price.sell - 1)
    },
    GetMarkupFor10 (productType, shop) {
      let price = this.GetPrice(productType, shop)
      if (!price) return null
      if (!price.buyFor10) return null
      return 100 * (price.buyFor10 / price.sell - 1)
    },
    GetHash (p) {
      return p.size
    },
    GetTdClass (markup) {
      if (!markup) return ''
      return markup > 3 ? 'warning' : 'success'
    }
  }
}
</script>

<template src="./app.html"/>

<style scoped>
table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
}

td, th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
}

tr:nth-child(even) {
    background-color: #dddddd;
}

td.success {
    background-color: #a6d96a;
}

td.warning {
    background-color: #fdae61;
}
</style>
