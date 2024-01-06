<script setup lang="ts">
const route = useRoute()

defineProps({
    page: {
        type: Object,
        default: () => ({}),
    },
  bgColor: {
      type: String,
      default: 'black'
  }
})

const locales = useLocales()
const currentLocale = useCurrentLocale()

const { client } = usePrismic()
const { data: menu } = await useAsyncData(`menuFooter-${currentLocale}`, () => client.getByUID('menu', 'menu-footer', { lang: currentLocale }))
const { data: menuProducts } = await useAsyncData(`menuProducts-${currentLocale}`, () => client.getByUID('menu', 'menu-products', { lang: currentLocale }))
</script>
<template>
    <!-- <footer 
        class="px-4 py-5 text-white md:px-0"
        :class="[bgColor === '#000000' ? 'bg-gradient-to-b from-black to-menub' : 'color']"
    > -->
    <footer 
        class="px-4 py-5 text-white md:px-0 color"
    >
        <div class="container max-w-screen-lg pb-10 mx-auto">
            <div class="grid grid-cols-3 sm: md:grid-cols-5">
                <div class="hidden text-center sm:block sm:col-span-1 sm:text-right">
                    <img src="/logo.svg" alt="Drinkyz.com" class="mx-auto mb-6 sm:mr-10 sm:mb-2 h-36" />
                </div>
                <div class="col-span-3">
                    <h4 class="mb-1 font-bold">{{ menuProducts.data.title[0].text }}</h4>
                    <ul class="grid grid-cols-2 sm:grid-cols-3 sm:text-sm marker:text-transparent">
                        <li 
                            v-for="(menuLink, Itemindex) in menuProducts.data.menu_links"
                            :key="Itemindex"
                            class="m-0"
                        >
                            <NuxtLink
                                v-if="menuLink.link.uid" 
                                :to="`/${currentLocale}/${menuLink.link.uid}`"
                            >
                                <PrismicRichText :field="menuLink.label" />    
                            </NuxtLink>
                            <NuxtLink v-else :to="menuLink.link.url" target="_blank">
                                <PrismicRichText :field="menuLink.label" />    
                            </NuxtLink>
                        </li>
                    </ul>
                </div>
                <div class="flex col-span-3 sm:col-span-1">
                    <img src="/logo.svg" alt="Drinkyz.com" class="mb-2 mr-6 sm:hidden sm:mb-2 h-28" />
                    <div>
                        <h4 class="mb-1 font-bold">Contact</h4>
                        info@drinkyz.com<br/>
                        +33 (0) 1 58 18 35 83<br/>
                        4 rue de Sèze 75009 Paris
                    </div>
                </div>
            </div>
        </div>
        <div class="flex flex-col justify-between sm:flex-row">
            <div class="w-32">

            </div>
            <div class="container max-w-screen-lg mx-auto text-center sm:text-xs">
                <ul class="flex flex-wrap justify-center marker:text-transparent">
                    <li 
                        v-for="(menuLink, Itemindex) in menu.data.menu_links"
                        :key="Itemindex"
                        class="flex mx-0 my-2 sm:my-0"
                    >
                        <NuxtLink 
                            v-if="menuLink.link.uid" 
                            :to="`/${currentLocale}/${menuLink.link.uid}`"
                        >
                            <PrismicRichText :field="menuLink.label" />    
                        </NuxtLink>
                        <NuxtLink v-else :to="menuLink.link.url" target="_blank">
                            <PrismicRichText :field="menuLink.label" />    
                        </NuxtLink>
                        <span 
                            v-if="Itemindex < menu.data.menu_links.length - 1"
                            class="mx-2"
                        > - </span>
                    </li>
                </ul>
                <p>
                    <NuxtLink :to="`/${currentLocale}/mentions-legales`">
                        Mentions légales
                    </NuxtLink>
                </p>
            </div>
            <div class="flex content-center justify-center text-center sm:w-32 sm:pr-5 sm:justify-end">
                <template v-for="language of page.alternate_languages">
                    <NuxtLink class="mr-3 uppercase" :to="`/${language.lang}/${language.uid}`">
                        {{ locales[language.lang] }}
                    </NuxtLink>
                </template>
            </div>
        </div>
    </footer>
</template>
<style>
    footer.color {
        background-color: v-bind(bgColor)!important;
    }
</style>