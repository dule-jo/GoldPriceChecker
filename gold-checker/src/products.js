import { ScrapeGoldWebsite, ScrapeGoldSpecialWebsite } from '@/GoldScraper.js'
import { ScrapeGoldenSpaceWebsite } from '@/GoldenSpaceScraper.js'

const shops = {
  Gold: 'Zlatara Gold',
  GoldenSpaceAH: 'Golden Space AH'
}

const producers = {
  ArgorHeraeus: 'Argor Heraeus'
}

const shopLink = {
  [shops.Gold]: 'https://investicionozlato.com/cena-zlatnih-poluga/',
  [shops.GoldenSpaceAH]: 'https://golden-space.rs/investicionozlato-argor-heraeus/'
}

const scrapers = {
  Gold: ScrapeGoldWebsite,
  GoldSpecial: ScrapeGoldSpecialWebsite,
  GoldenSpace: ScrapeGoldenSpaceWebsite,
}

export const products = [
  {
    producer: producers.ArgorHeraeus,
    size: '1',
    list: [
      {
        link: '/api/gold/cena-1-gram.php',
        shop: shops.Gold,
        scraper: scrapers.Gold,
      }
    ]
  },
  {
    producer: producers.ArgorHeraeus,
    size: '2',
    list: [
      {
        link: '/api/gold/cena-2-grama.php',
        shop: shops.Gold,
        scraper: scrapers.Gold
      }
    ]
  },
  {
    producer: producers.ArgorHeraeus,
    size: '5',
    list: [
      {
        link: '/api/gold/cena-5-grama.php',
        shop: shops.Gold,
        scraper: scrapers.Gold
      }
    ]
  },
  {
    producer: producers.ArgorHeraeus,
    size: '10',
    list: [
      {
        link: '/api/gold/CENE/10.php',
        shop: shops.Gold,
        scraper: scrapers.GoldSpecial
      }
    ]
  },
  {
    producer: producers.ArgorHeraeus,
    size: '20',
    list: [
      {
        link: '/api/gold/CENE/20.php',
        shop: shops.Gold,
        scraper: scrapers.GoldSpecial
      }
    ]
  },
  {
    producer: producers.ArgorHeraeus,
    size: '1OZ',
    list: [
      {
        link: '/api/gold/CENE/1OZ.php',
        shop: shops.Gold,
        scraper: scrapers.GoldSpecial
      }
    ]
  },
  {
    producer: producers.ArgorHeraeus,
    size: '50',
    list: [
      {
        link: '/api/gold/CENE/50.php',
        shop: shops.Gold,
        scraper: scrapers.GoldSpecial
      }
    ]
  },
  {
    producer: producers.ArgorHeraeus,
    size: '100',
    list: [
      {
        link: '/api/gold/CENE/100.php',
        shop: shops.Gold,
        scraper: scrapers.GoldSpecial
      }
    ]
  },
  {
    producer: producers.ArgorHeraeus,
    size: '250',
    list: [
      {
        link: '/api/gold/CENE/250.php',
        shop: shops.Gold,
        scraper: scrapers.GoldSpecial
      }
    ]
  },
  {
    producer: producers.ArgorHeraeus,
    size: '500',
    list: [
      {
        link: '/api/gold/CENE/500.php',
        shop: shops.Gold,
        scraper: scrapers.GoldSpecial
      }
    ]
  },
  {
    producer: producers.ArgorHeraeus,
    size: '1000',
    list: [
      {
        link: '/api/gold/CENE/1000.php',
        shop: shops.Gold,
        scraper: scrapers.GoldSpecial
      }
    ]
  }
]
