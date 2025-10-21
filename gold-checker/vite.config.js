import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api/golden-space': {
        target: 'https://golden-space.rs',
        changeOrigin: true,
        secure: true,
        followRedirects: true,
        rewrite: (path) => path.replace(/^\/api\/golden-space/, ''),
        configure: (proxy, options) => {
          proxy.on('proxyReq', (proxyReq, req, res) => {
            const targetUrl = proxyReq.protocol + '//' + proxyReq.host + proxyReq.path
            console.log('Proxy šalje zahtev na:', targetUrl)
          })
        },
        logLevel: 'debug'
      },
      '/api/gold': {
        target: 'https://goldzlatara.in.rs',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/gold/, ''),
        secure: true
      }
    }
  },
  base: '/GoldPriceChecker/',
  plugins:
    [
      vue(),
      vueDevTools()
    ],
  resolve:
    {
      alias: {
        '@':
          fileURLToPath(new URL('./src', import.meta.url))
      }
    }
})
