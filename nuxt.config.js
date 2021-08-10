export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'server',

  // loading: '~/components/loader.vue',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'wti',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "~/assets/css/main.css",
    "~/assets/css/work.css"
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/particles.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [

  ],

  axios: {
    baseURL: "https://www.wealthtechinnovations.com",
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    ['vue-scrollto/nuxt', {
      container: "body",
      duration: 1000,
      easing: "ease-in-out",
      force: true,
      cancelable: true,
      onStart: false,
      onDone: false,
      onCancel: false,
      x: false,
      y: true,
    }],
    [
      'nuxt-fontawesome', {
        imports: [
          {
            set: '@fortawesome/free-solid-svg-icons',
            icons: ['fas']
          },
          {
            set: '@fortawesome/free-brands-svg-icons',
            icons: ['fab']
          }
        ]
      }
    ],
    ['nuxt-gmaps', {
      key: 'AIzaSyCMo6DieI9jDuutybzKEPrzmQ4_Nr2hTng',
      //you can use libraries: ['places']
    }],
    '@nuxtjs/axios',
    ['nuxt-mail', {
      message: {
        to: 'contact@wealthtechinnovations.com',
      },
      smtp: {
        host: "smtp.ionos.fr",
        port: 587,
        auth: {
          user: 'contact@wealthtechinnovations.com',
          pass: 'Azer102385)'
        },
      },
    }],
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    vendor: ['aframe']
  }
}
