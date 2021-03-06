const disallowDirective = () => {
  if (process.env.APP_ENV !== 'prod') {
    return '/';
  }
  return [
    '/kontakty/diakuiemo/',
    '/pidpysatysia/diakuiemo/',
  ];
};

export default {
  mode: 'universal',

  head: {
    titleTemplate: (titleChunk) => {
      const baseTitle = 'Біблія понад усе — безплатний курс дистанційного навчання';
      return titleChunk ? `${titleChunk} | ${baseTitle}` : baseTitle;
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, viewport-fit=cover' },
      { name: 'msapplication-TileColor', content: '#2d89ef' },
      { name: 'theme-color', content: '#ffffff' },
      {
        hid: 'description',
        name: 'description',
        content: 'Біблія понад усе — це безплатний курс дистанційного навчання на основі першої книги Біблії — Книги Буття.',
      },
      { name: 'author', content: 'Euro Team Outreach, Inc.' },
      { name: 'google-site-verification', content: 'L25FLD3GhES_J3WnBwzJMRMh64ZMjnn89svdD4mz2Tg' },
      { hid: 'robots', name: 'robots', content: process.env.APP_ENV === 'prod' ? 'index,follow' : 'noindex,nofollow' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: '@eto_ukraine' },
      { property: 'og:url', content: 'https://bibliya.net.ua/' },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Біблія понад усе - безплатний курс дистанційного навчання',
      },
      {
        property: 'og:description',
        content: 'Біблія понад усе — це безплатний курс дистанційного навчання на основі першої книги Біблії — Книги Буття.',
      },
      {
        property: 'og:image',
        content: 'https://d2ppgd6w5akw3v.cloudfront.net/images/bibliya-og-1200w.jpg',
      },
    ],
    link: [
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      {
        rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png',
      },
      {
        rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png',
      },
      { rel: 'manifest', href: '/site.webmanifest' },
      { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#5bbad5' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Fira+Sans+Condensed|Kurale|Montserrat:400,600&amp;subset=cyrillic,cyrillic-ext' },
    ],
  },

  loading: {
    color: '#1569ec',
    height: '4px',
  },

  css: [
    '@fortawesome/fontawesome-svg-core/styles.css',
  ],

  plugins: [
    '~/plugins/font-awesome',
    '~/plugins/vuelidate',
  ],

  buildModules: [
    '@nuxtjs/google-analytics',
    '@nuxtjs/tailwindcss',
  ],

  modules: [
    '@nuxtjs/robots',
    '@nuxtjs/sitemap',
  ],

  robots: {
    UserAgent: '*',
    Disallow: disallowDirective(),
    Sitemap: 'https://bibliya.net.ua/sitemap.xml',
  },

  'google-analytics': {
    id: 'UA-71158009-5',
    dev: false,
  },

  sitemap: {
    path: '/sitemap.xml',
    hostname: 'https://bibliya.net.ua',
    gzip: true,
    exclude: [
      '/kontakty/diakuiemo/',
      '/pidpysatysia/diakuiemo/',
    ],
  },

  purgeCSS: {
    whitelist: ['html', 'body', 'nuxt-progress'],
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
      /^sr-/,
    ],
  },

  build: {
    extractCSS: true,
    quiet: false,
  },

  generate: {
    fallback: true,
  },

  pageTransition: {
    name: 'fade',
    mode: 'out-in',
  },
};
