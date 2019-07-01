const meta = require('./meta')
const contentfulConfig = require('./.contentful.json')

export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: meta.name || 'Van Nguyen',
    htmlAttrs: {
      lang: 'vi'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: meta.description || ''
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://behance.com' },
      { rel: 'prerender', href: '/' },
      { rel: 'prerender', href: '/about' },
      { rel: 'prerender', href: '/contact' }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['~assets/styles/main', '@fortawesome/fontawesome-svg-core/styles.css'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '~/plugins/vue-lazyload',
    '~/plugins/vue-anime.js',
    '~/plugins/fontawesome.js',
    '~/plugins/utils.js'
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://bootstrap-vue.js.org/docs/
    'nuxt-webfontloader',
    [
      'bootstrap-vue/nuxt',
      {
        bootstrapCss: false
      }
    ],
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/eslint-module',
    '@nuxtjs/pwa',
    [
      '@nuxtjs/component-cache',
      {
        max: 10000,
        maxAge: 1000 * 60 * 60
      }
    ]
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
          options: {
            fix: true
          }
        })
      }
    }
  },
  render: {
    bundleRenderer: {
      shouldPreload: (file, type) => {
        return ['script', 'style', 'font'].includes(type)
      }
    }
  },
  env: {
    site_name: `- ${meta.name}`,
    site_description: `- ${meta.description}`,
    CTF_SPACE_ID: contentfulConfig.CTF_SPACE_ID,
    CTF_CDA_ACCESS_TOKEN: contentfulConfig.CTF_CDA_ACCESS_TOKEN,
    CTF_ABOUT_ID: contentfulConfig.CTF_ABOUT_ID,
    CTF_ABOUT_TYPE_ID: contentfulConfig.CTF_ABOUT_TYPE_ID,
    CTF_PORTFOLIO_TYPE_ID: contentfulConfig.CTF_PORTFOLIO_TYPE_ID
  },
  extractCSS: true,
  splitChunks: {
    layout: true
  },
  manifest: {
    name: 'Van Nguyen — Product Designer',
    short_name: 'Van Nguyen'
  },
  webfontloader: {
    google: {
      families: [
        'Montserrat:300,400,500,600,700&display=swap&subset=vietnamese'
      ]
    }
  }
}
