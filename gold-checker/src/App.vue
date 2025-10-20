<script>

import { products } from '@/products.js'

export default {
  data () {
    return {
      prices: [],
      productTypes: null
    }
  }, mounted () {
    this.fetchGoldPrices()
    this.getDistinctProducerSize()
  },
  methods: {
    async fetchGoldPrices () {
      for (let i = 0; i < products.length; i++) {
        const product = products[i]
        for (let j = 0; j < product.list.length; j++) {
          const item = product.list[j]
          item.prices = await item.scraper(item.link)
          item.producer = product.producer

          this.prices.push(item)
        }
      }
    },
    getDistinctProducerSize () {
      const distinctKeys = new Set()
      const distinctList = []

      products.forEach(item => {
        const producerName = item.producer
        const size = item.size

        item.list.forEach(item => {
          const shop = item.shop
          const key = `${producerName}|${size}|${shop}`

          if (!distinctKeys.has(key)) {
            distinctKeys.add(key)

            distinctList.push({
              producer: producerName,
              size: size,
              shop: shop
            })
          }
        })
      })

      this.productTypes = distinctList
    },
    GetBuyPrice (productType) {
      const price = this.prices.filter(item => this.GetHash(item) === this.GetHash(productType))

      return price.buy
    },
    GetSellPrice (productType) {
    },
    GetMarkup (productType) {
    },
    GetHash (p) {
      return p.shop + ':' + p.size + ':' + p.producer
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
</style>
