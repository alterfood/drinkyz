<script setup lang="ts">
const route = useRoute()

const props = defineProps({
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
    <footer class="text-white bg-blac py-5">
        <div class="container max-w-screen-lg mx-auto pb-10">
            <div class="grid sm: grid-cols-3 md:grid-cols-5">
                <div class="">
                    Logo
                </div>
                <div class="col-span-3">
                    <h4 class="font-bold mb-1">Nos produits</h4>
                    <ul class="grid grid-cols-3 text-sm">
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
                <div class="">
                    <h4 class="font-bold mb-1">Contact</h4>
                    hello@drinkyz.com<br/>
                    +33 (0) 1 58 18 35 83<br/>
                    4 rue de Sèze 75009 Paris
                </div>
            </div>
        </div>
        <div class="flex justify-between">
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
                <p>Mentions légales</p>
            </div>
            <div class="w-32 pr-5 flex justify-end content-center">
                FR
            </div>
        </div>
    </footer>
</template>
<style>
    footer {
        background-color: v-bind(bgColor)!important;
    }
</style>