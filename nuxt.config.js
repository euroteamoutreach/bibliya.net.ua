import PurgecssPlugin from 'purgecss-webpack-plugin'
import glob from 'glob-all'
import path from 'path'

class TailwindExtractor {
  static extract (content) {
    return content.match(/[A-z0-9-:/]+/g) || []
  }
}

export default {
  mode: 'universal',

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
      { name: 'google-site-verification', content: 'L25FLD3GhES_J3WnBwzJMRMh64ZMjnn89svdD4mz2Tg' },
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
        content: 'https://d2ppgd6w5akw3v.cloudfront.net/images/bibliya-og-1200w.jpg'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/b1-favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Fira+Sans+Condensed|Kurale|Montserrat:400,600&amp;subset=cyrillic,cyrillic-ext' }
    ]
  },

  loading: {
    color: '#1569ec',
    height: '4px'
  },

  css: [
    '@fortawesome/fontawesome-svg-core/styles.css',
    '~/assets/styles/tailwind.css'
  ],

  plugins: [
    '~/plugins/font-awesome',
    '~/plugins/vuelidate'
  ],

  modules: [
    '@nuxtjs/google-analytics',
    '@nuxtjs/sitemap'
  ],

  'google-analytics': {
    id: 'UA-71158009-5',
    debug: {
      sendHitTask: process.env.APP_ENV === 'production'
    }
  },

  sitemap: {
    path: '/sitemap.xml',
    hostname: 'https://bibliya.net.ua',
    gzip: true,
    generate: true,
    exclude: [
      '/kontakty/diakuiemo/',
      '/pidpysatysia/diakuiemo/'
    ]
  },

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
            whitelistPatterns: [
              /^fade/,
              /^svg-inline/,
              /^fa$/,
              /^fa-/,
              /^fab/,
              /^fas/,
              /^fal/,
              /^far/,
              /--fa$/,
              /^sr-/
            ],
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
