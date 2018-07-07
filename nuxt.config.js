const PurgecssPlugin = require('purgecss-webpack-plugin')
const glob = require('glob-all')
const path = require('path')

class TailwindExtractor {
  static extract (content) {
    return content.match(/[A-z0-9-:/]+/g) || []
  }
}

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: (titleChunk) => {
      let baseTitle = 'Біблія понад усе — безплатний курс дистанційного навчання'
      return titleChunk ? `${titleChunk} | ${baseTitle}` : baseTitle
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Біблія понад усе — це безплатний курс дистанційного навчання на основі першої книги Біблії — Книги Буття.'
      },
      { name: 'author', content: 'Euro Team Outreach, Inc.' },
      { name: 'google-site-verification', content: '' },
      {
        hid: 'robots',
        name: 'robots',
        content: process.env.APP_ENV !== 'production' ? 'noindex,nofollow' : 'index,follow'
      },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: '@eto_ukraine' },
      { property: 'og:url', content: 'https://bibliya.net.ua/' },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Біблія понад усе - безплатний курс дистанційного навчання'
      },
      {
        property: 'og:description',
        content: 'Біблія понад усе — це безплатний курс дистанційного навчання на основі першої книги Біблії — Книги Буття.'
      },
      {
        property: 'og:image',
        content: ''
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/b1-favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Fira+Sans+Condensed|Kurale|Montserrat:400,400i,500&amp;subset=cyrillic-ext' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: {
    color: '#1569ec',
    height: '4px'
  },

  /*
  ** Global CSS
  */
  css: [
    '~/assets/styles/tailwind.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/font-awesome',
    '~/plugins/vuelidate'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
  ],

  /*
  ** Build configuration
  */
  build: {
    extractCSS: true,
    postcss: [
      require('tailwindcss')('./tailwind.js'),
      require('autoprefixer')
    ],
    extend (config, { isDev }) {
      if (!isDev) {
        config.plugins.push(
          new PurgecssPlugin({
            // purgecss configuration
            // https://github.com/FullHuman/purgecss
            paths: glob.sync([
              path.join(__dirname, './pages/**/*.vue'),
              path.join(__dirname, './layouts/**/*.vue'),
              path.join(__dirname, './components/**/*.vue')
            ]),
            extractors: [
              {
                extractor: TailwindExtractor,
                extensions: ['vue']
              }
            ],
            whitelistPatterns: [/^fade/],
            whitelist: ['html', 'body', 'nuxt-progress']
          })
        )
      }
    }
  },
  generate: {
    fallback: true
  },
  transition: {
    name: 'fade',
    mode: 'out-in'
  }
}
