import { defineNuxtConfig } from 'nuxt/config'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    devtools: {
        enabled: false
    },
    nitro: {
        prerender: {
          routes: ['/fr-fr/contact-success', '/en-us/contact-success']
        }
    },
    typescript: {
        shim: false
    },
    // buildModules: ['@intlify/nuxt3'],
    modules: [
        // '@intlify/nuxt3',
        '@nuxtjs/tailwindcss',
        '@nuxtjs/prismic',
    ],
    prismic: {
        endpoint: 'drinkyz'
    },
    runtimeConfig: {
        public: {
            BASE_URL: process.env.BASE_URL || 'https://drinkyz.com',
        }
    },
})
