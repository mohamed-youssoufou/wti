export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  generate: {
    minify: {
      collapseWhitespace: true
    }
  },
  // loading: '~/components/loader.vue',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Wealthtech Innovations',
    htmlAttrs: {
      lang: 'en'
    },
    // Global site tag (gtag.js) - Google Analytics
    // script: {
    //   src: 'https://www.googletagmanager.com/gtag/js?id=G-7LPSCGVLHZ',
    //   async: true,
    // },
    script: [
      {
        src: "https://code.jquery.com/jquery-3.3.1.slim.min.js",
        type: "text/javascript"
      },
      {
        src:
          "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js",
        type: "text/javascript"
      },
      {
        src:
          "https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js",
        type: "text/javascript"
      }
    ],
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/logo_wealth.png' },
      { rel: 'stylesheet', type: '', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css' },
      // { rel: 'stylesheet\, type: '', href: 'https://cdn-uicons.flaticon.com/uicons-regular-rounded/css/uicons-regular-rounded.css' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "~/assets/css/main.css",
    "~/assets/css/work.css",
    "~/assets/css/flaticon.css"
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
    baseURL: process.env.BASE_URL,
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
        port: 465,
        auth: {
          user: 'contact@wealthtechinnovations.com',
          pass: 'Azer102385)'
        },
      },
    }],
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    vendor: ['aframe'],
    maxChunkSize: 300000
  }
}
