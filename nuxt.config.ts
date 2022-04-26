import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    typescript: {
        shim: false
    },
    // buildModules: ['@intlify/nuxt3'],
    modules: [
        // '@intlify/nuxt3',
        '@nuxtjs/tailwindcss',
        '@nuxtjs/prismic'
    ],
    prismic: {
        endpoint: 'drinkyz'
    },
})
