import { defineNuxtPlugin } from '#app'
import VueGtag from 'vue-gtag-next'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueGtag, {
    property: {
      id: 'G-J19L9FXBSM'
    },
    appName: 'drinkyz',
    enabled: true,
    pageTrackerScreenviewEnabled: true
  }, nuxtApp.vueApp.router);
});