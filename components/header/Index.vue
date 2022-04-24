<script setup lang="ts">import { usePrismicDocuments } from '@prismicio/vue';
    const { client } = usePrismic()
    const { data: menu } = await useAsyncData('home', () => client.getByID('YmUadxMAACUAYQFr'))
</script>
<template>
    <header class="flex justify-between text-gray-100 bg-black font-bold">
        <div></div>
        <div class="flex">
            <!-- <img src="logo" alt="Drinkyz.com" class="mr-10 my-2 h-12" /> -->
            <ul class="flex  py-5">
                <li 
                    v-for="(menuLink, index) in menu.data.menu_links"
                    :key="index"
                    class="mx-4"
                >
                    <NuxtLink :to="'/' + menuLink.link.uid">
                        <PrismicRichText :field="menuLink.label" />    
                    </NuxtLink>
                </li>
            </ul>
        </div>
        <div class="w-32 pr-5 py-5 flex justify-end content-center">
            <NuxtLink to="/">FR</NuxtLink>
        </div>
    </header>
</template>