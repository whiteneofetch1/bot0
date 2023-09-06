export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: '1page',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'yandex-verification', content: '011bf8fdbb63d0b8' },

      { name: 'og:image', content: '011bf8fdbb63d0b8' },
      { name: 'og:image:height', content: '011bf8fdbb63d0b8' },
      { name: 'og:image:width', content: '011bf8fdbb63d0b8' },
      { name: 'twitter:card', content: '011bf8fdbb63d0b8' },
      { name: 'og:url', content: '011bf8fdbb63d0b8' },
      { name: 'twitter:image', content: '011bf8fdbb63d0b8' },
      { property:"og:image", content:"https://www.bot0.ru/BOT0.jpg"},
      { property:"og:image:height", content:"1980"},
      { property:"og:image:width", content:"1280"},
      { property:"og:url", content:"https://www.bot0.ru/"},
      { name:"twitter:image", content:"https://www.bot0.ru/BOT0.jpg"},
      { name:"twitter:card", content:"https://www.bot0.ru/BOT0.jpg"},

    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/robots',
    [
      '@nuxtjs/yandex-metrika',
      {
        id: '94498152',
        webvisor: true,
        // clickmap: true,
        // useCDN: false,
        // trackLinks: true,
        // accurateTrackBounce: true,
      }
    ],
    // '@nuxtjs/sitemap',
  ],

  sitemap: {
    hostname:'',
    gzip: true,
     routes: [
      '/*',
                '/',
      
      {
        url: '/ru/**',
        changefreq: 'daily',
        priority: 1,
        lastmod: '2023-09-06T07:13:00.000Z'
      }
    ]
  },

  server: {
    host: process.env.NUXT_APP_HOST, // default: localhost
    port: process.env.NUXT_APP_PORT // default: 3000
  },

  robots: {
    UserAgent: '*',
    Allow: '/*',
    //Disallow: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
