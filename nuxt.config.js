const meta = require('./meta')
const contentfulConfig = require('./.contentful.json')

export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        lazyload: true,
        href:
          'https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700&display=optional&subset=vietnamese'
      }
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
    [
      'bootstrap-vue/nuxt',
      {
        bootstrapCss: false
      }
    ],
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/eslint-module'
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
          exclude: /(node_modules)/
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
  manifest: {
    name: 'Van Nguyen — UX/UI Designer',
    short_name: 'Van Nguyen'
  }
}
