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
        '@nuxtjs/prismic',
    ],
    prismic: {
        endpoint: 'drinkyz'
    },
    serverMiddleware: [
        { 
            path: '/api/check-token',
            handler: '~/middleware/recaptcha'
        },
    ],
    publicRuntimeConfig: {
        BASE_URL: process.env.BASE_URL || 'https://drinkyz.com',
        RECAPTCHA_SITE_KEY: process.env.RECAPTCHA_SITE_KEY,
    },
})
