export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    htmlAttrs: {
      lang: "ar",
      dir: "rtl"
    },
    title: "client",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "hello here is me" }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      // {
      //   rel: "stylesheet",
      //   href:
      //     "https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css",
      // },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com"
      },
      {
        href:
          "https://fonts.googleapis.com/css2?family=Tajawal:wght@200;300;400;500;700;800;900&display=swap",
        rel: "stylesheet"
      }
    ]
  },
  server: {
    port: 80, // default: 3000
    host: "0.0.0.0" // default: localhost
  },
  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ["~/assets/scss/main.scss"],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: ["~/plugins/vuelidate"],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    // https://go.nuxtjs.dev/pwa
    "@nuxtjs/pwa",
    "@nuxtjs/style-resources",
    "bootstrap-vue/nuxt",
    "@nuxtjs/auth"
  ],
  proxy: {
    "/api": "http://localhost:8000"
  },

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    proxy: true,
    baseURL: "http://localhost:8000"
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: {
            url: "/api/auth/login",
            method: "post",
            propertyName: "token"
          },
          logout: true,
          user: { url: "/api/auth/user", method: "get", propertyName: false }
        },
        // tokenRequired: true,
        // tokenType: 'bearer',
        // globalToken: true,
        autoFetchUser: true
      }
    }
  }
};
