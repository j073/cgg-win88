export default {
  router: {
    '/': { prerender: true },
    extendRoutes(routes, resolve) {
      routes.push({
        path: '*',
        redirect: '/'
      });
    }
  },
  loadingIndicator: {
    name: 'chasing-dots',
    color: 'purple',
    background: 'green'
  },
  env: {
    API_TOKEN: process.env.API_TOKEN,
    API_URL: process.env.API_URL
  },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'WIN88: WIN88: Bocoran RTP Live Slot Gacor Hari Ini',
      name: 'description', content: 'Yuk, langsung dapetin keuntungan seru bermain RTP Live Slot dengan update terkini dan info yang akurat hanya di situs kita, guys! Gabung di WIN88 dan nikmati keseruan main rtp slot yang gacor.' ,
      link: [{ rel: 'icon', type: 'image/png', href: './win88.png' }],
    }
  },
  serverMiddleware: [
    { path: '/api/data', handler: '~/server/api.js' }
  ],
  css: [
    '~/assets/css/boot.css',
  ],
  sourcemap: {
    server: true,
    client: false
  },
  modules: [
    'nuxt-lazy-load',
    '@nuxt/image',
    'vue3-carousel-nuxt',
    'nuxt-swiper',
  ],
  security: {
    hidePoweredBy: false
  },
  carousel: {
    prefix: 'MyPrefix'
  },
  build: {
    productionSourceMap: false
  }
}