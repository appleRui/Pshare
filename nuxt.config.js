export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Pshare',
    htmlAttrs: {
      lang: 'ja'
    },
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: ''
      },
      {
        name: 'format-detection',
        content: 'telephone=no'
      }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // DOC:https://nuxtjs.org/ja/docs/configuration-glossary/configuration-css/
    // '@/assets/css/main.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [
    {
      path: '@/components/',
      pathPrefix: false
    }
  ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/vuetify',
  ],

  vuetify: {
    // Doc: https://vuetifyjs.com/ja/customization/a-la-carte/
    treeShake: true,
    customVariables: ['~/assets/scss/main.scss'],
    theme: {
      themes: {
        light: {
          primary: '#e75a5e',
        }
      }
    }
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
}
