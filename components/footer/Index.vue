<script setup lang="ts">
const route = useRoute()

defineProps({
  bgColor: {
      type: String,
      default: 'black'
  }
})

const { client } = usePrismic()
const { data: menu } = await useAsyncData('menuFooter', () => client.getByID('YmUlChMAAF72YTAg'))
const { data: menuProducts } = await useAsyncData('menuProducts', () => client.getByID('YmUvpxMAAF72YV7Y'))
</script>
<template>
    <footer 
        class="text-white py-5 px-4 md:px-0"
        :class="[bgColor === '#000000' ? 'bg-gradient-to-b from-black to-menub' : 'color']"
    >
        <div class="container max-w-screen-lg mx-auto pb-10">
            <div class="grid sm: grid-cols-3 md:grid-cols-5">
                <div class="hidden sm:block sm:col-span-1 text-center sm:text-right">
                    <img src="/logo.svg" alt="Drinkyz.com" class="mx-auto sm:mr-10 mb-6 sm:mb-2 h-36" />
                </div>
                <div class="col-span-3">
                    <h4 class="font-bold mb-1">Nos produits</h4>
                    <ul class="grid grid-cols-2 sm:grid-cols-3 text-sm">
                        <li 
                            v-for="(menuLink, Itemindex) in menuProducts.data.menu_links"
                            :key="Itemindex"
                        >
                            <NuxtLink v-if="menuLink.link.uid" :to="'/' + menuLink.link.uid">
                                <PrismicRichText :field="menuLink.label" />    
                            </NuxtLink>
                            <NuxtLink v-else :to="menuLink.link.url" target="_blank">
                                <PrismicRichText :field="menuLink.label" />    
                            </NuxtLink>
                        </li>
                    </ul>
                </div>
                <div class="col-span-3 sm:col-span-1 flex">
                    <img src="/logo.svg" alt="Drinkyz.com" class="sm:hidden mr-6 mb-2 sm:mb-2 h-28" />
                    <div>
                        <h4 class="font-bold mb-1">Contact</h4>
                        hello@drinkyz.com<br/>
                        +33 (0) 1 58 18 35 83<br/>
                        4 rue de Sèze 75009 Paris
                    </div>
                </div>
            </div>
        </div>
        <div class="flex flex-col sm:flex-row justify-between">
            <div class="w-32">

            </div>
            <div class="container max-w-screen-lg mx-auto text-center text-xs">
                <ul class="flex flex-wrap justify-center">
                    <li 
                        v-for="(menuLink, Itemindex) in menu.data.menu_links"
                        :key="Itemindex"
                        class="flex m-0"
                    >
                        <NuxtLink v-if="menuLink.link.uid" :to="'/' + menuLink.link.uid">
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
                    <NuxtLink :to="'/mentions-legales'">
                        Mentions légales
                    </NuxtLink>
                </p>
            </div>
            <div class="sm:w-32 sm:pr-5 flex justify-center sm:justify-end content-center text-center">
                FR
            </div>
        </div>
    </footer>
</template>
<style>
    footer.color {
        background-color: v-bind(bgColor)!important;
    }
</style>