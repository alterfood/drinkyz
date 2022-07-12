import { defineNuxtPlugin } from '#app'
import VueGtag from 'vue-gtag-next'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueGtag, {
    property: {
      id: 'UA-207506426-1'
    },
    appName: 'drinkyz',
    enabled: true,
    pageTrackerScreenviewEnabled: true
  }, nuxtApp.vueApp.router);
});