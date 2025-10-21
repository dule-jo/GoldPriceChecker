import { ScrapeGoldWebsite, ScrapeGoldSpecialWebsite } from '@/GoldScraper.js'
import { ScrapeGoldenSpaceWebsite } from '@/GoldenSpaceScraper.js'

export const shopNames = {
  Gold: 'Zlatara Gold Heraus',
  GoldenSpaceAH: 'Golden Space Heraus',
  GoldenSpaceCH: 'Golden Space CHafner',
  GoldenSpaceHM: 'Golden Space Heimerle Meule',
  GoldenSpaceIGR: 'Golden Space IGR',
}

const producers = {
  ArgorHeraeus: 'Argor Heraeus',
  HeimerleMeule: 'Heimerle+Meule',
  CHafner: 'CHafner',
}

const shopLink = {
  [shopNames.Gold]: 'https://investicionozlato.com/cena-zlatnih-poluga/',
  [shopNames.GoldenSpaceAH]: 'https://golden-space.rs/investicionozlato-argor-heraeus/'
}

const scrapers = {
  Gold: ScrapeGoldWebsite,
  GoldSpecial: ScrapeGoldSpecialWebsite,
  GoldenSpace: ScrapeGoldenSpaceWebsite,
}

export const products = [
  {
    size: '1g',
    list: [
      {
        link: '/api/gold/cena-1-gram.php',
        shop: shopNames.Gold,
        scraper: scrapers.Gold,
      },
      {
        shop: shopNames.GoldenSpaceAH
      },
      {
        shop: shopNames.GoldenSpaceHM
      },
      {
        shop: shopNames.GoldenSpaceCH
      },
      {
        shop: shopNames.GoldenSpaceIGR
      }
    ]
  },
  {
    size: '2g',
    list: [
      {
        link: '/api/gold/cena-2-grama.php',
        shop: shopNames.Gold,
        scraper: scrapers.Gold
      },
      {
        shop: shopNames.GoldenSpaceAH
      },
      {
        shop: shopNames.GoldenSpaceCH
      }
    ]
  },
  {
    size: '2.5g',
    list: [
      {
        shop: shopNames.GoldenSpaceHM
      },
      {
        shop: shopNames.GoldenSpaceIGR
      }
    ]
  },
  {
    size: '5g',
    list: [
      {
        link: '/api/gold/cena-5-grama.php',
        shop: shopNames.Gold,
        scraper: scrapers.Gold
      },
      {
        shop: shopNames.GoldenSpaceAH
      },
      {
        shop: shopNames.GoldenSpaceHM
      },
      {
        shop: shopNames.GoldenSpaceCH
      },
      {
        shop: shopNames.GoldenSpaceIGR
      }
    ]
  },
  {
    size: '10g',
    list: [
      {
        link: '/api/gold/CENE/10.php',
        shop: shopNames.Gold,
        scraper: scrapers.GoldSpecial
      },
      {
        shop: shopNames.GoldenSpaceAH
      },
      {
        shop: shopNames.GoldenSpaceHM
      },
      {
        shop: shopNames.GoldenSpaceCH
      },
      {
        shop: shopNames.GoldenSpaceIGR
      }
    ]
  },
  {
    size: '20g',
    list: [
      {
        link: '/api/gold/CENE/20.php',
        shop: shopNames.Gold,
        scraper: scrapers.GoldSpecial
      },
      {
        shop: shopNames.GoldenSpaceAH
      },
      {
        shop: shopNames.GoldenSpaceHM
      },
      {
        shop: shopNames.GoldenSpaceCH
      },
      {
        shop: shopNames.GoldenSpaceIGR
      }
    ]
  },
  {
    size: '1 Oz',
    list: [
      {
        link: '/api/gold/CENE/1OZ.php',
        shop: shopNames.Gold,
        scraper: scrapers.GoldSpecial
      },
      {
        shop: shopNames.GoldenSpaceAH
      },
      {
        shop: shopNames.GoldenSpaceHM
      },
      {
        shop: shopNames.GoldenSpaceCH
      },
      {
        shop: shopNames.GoldenSpaceIGR
      }
    ]
  },
  {
    size: '50g',
    list: [
      {
        link: '/api/gold/CENE/50.php',
        shop: shopNames.Gold,
        scraper: scrapers.GoldSpecial
      },
      {
        shop: shopNames.GoldenSpaceAH
      },
      {
        shop: shopNames.GoldenSpaceHM
      },
      {
        shop: shopNames.GoldenSpaceCH
      },
      {
        shop: shopNames.GoldenSpaceIGR
      }
    ]
  },
  {
    size: '100g',
    list: [
      {
        link: '/api/gold/CENE/100.php',
        shop: shopNames.Gold,
        scraper: scrapers.GoldSpecial
      },
      {
        shop: shopNames.GoldenSpaceAH
      },
      {
        shop: shopNames.GoldenSpaceHM
      },
      {
        shop: shopNames.GoldenSpaceCH
      },
      {
        shop: shopNames.GoldenSpaceIGR
      }
    ]
  },
  {
    size: '250g',
    list: [
      {
        link: '/api/gold/CENE/250.php',
        shop: shopNames.Gold,
        scraper: scrapers.GoldSpecial
      },
      {
        shop: shopNames.GoldenSpaceAH
      },
      {
        shop: shopNames.GoldenSpaceHM
      },
      {
        shop: shopNames.GoldenSpaceCH
      },
      {
        shop: shopNames.GoldenSpaceIGR
      }
    ]
  },
  {
    size: '500g',
    list: [
      {
        link: '/api/gold/CENE/500.php',
        shop: shopNames.Gold,
        scraper: scrapers.GoldSpecial
      },
      {
        shop: shopNames.GoldenSpaceAH
      },
      {
        shop: shopNames.GoldenSpaceHM
      },
      {
        shop: shopNames.GoldenSpaceCH
      },
      {
        shop: shopNames.GoldenSpaceIGR
      }
    ]
  },
  {
    size: '1000g',
    list: [
      {
        link: '/api/gold/CENE/1000.php',
        shop: shopNames.Gold,
        scraper: scrapers.GoldSpecial
      },
      {
        shop: shopNames.GoldenSpaceAH
      },
      {
        shop: shopNames.GoldenSpaceHM
      },
      {
        shop: shopNames.GoldenSpaceCH
      },
      {
        shop: shopNames.GoldenSpaceIGR
      }
    ]
  }
]

export const items = [
  {
    name: 'IGR',
    link: '/api/golden-space/investicionozlato-igr/',
    shop: shopNames.GoldenSpaceIGR
  },
  {
    name: 'ARGOR-HERAEUS',
    link: '/api/golden-space/investicionozlato-argor-heraeus/',
    shop: shopNames.GoldenSpaceAH
  },
  {
    name: 'C.Hafner',
    link: '/api/golden-space/investicionozlato-c-hafner/',
    shop: shopNames.GoldenSpaceCH
  },
  {
    name: 'HEIMERLE+MEULE',
    link: '/api/golden-space/investicionozlato-heimerle-meule/',
    shop: shopNames.GoldenSpaceHM
  }
]
