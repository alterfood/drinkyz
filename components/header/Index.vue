<script setup lang="ts">import { usePrismicDocuments } from '@prismicio/vue';

    // const { client } = usePrismic()
    // const { data: home } = await useAsyncData('home', () => useFirstPrismicDocument())
    // console.log(home)

    // const { data: documents, state, error, refresh } = usePrismicDocuments();
    const items = reactive([
        {
            title: 'Services',
            slug: 'boissons'
        },
        {
            title: 'Eau',
            slug: 'bouteilles'
        },
        {
            title: 'Soft',
            slug: 'jus-de-fruits'
        },
        {
            title: 'Jus',
            slug: 'soda'
        },
        {
            title: 'Soupe',
            slug: 'soda'
        },
        {
            title: 'Alterfood',
            slug: 'soda'
        },
        {
            title: 'Contact',
            slug: 'soda'
        }
    ])
</script>
<template>
    <header class="flex justify-between text-gray-100 bg-black font-bold">
        <div></div>
        <div class="flex">
            <img src="logo" alt="Drinkyz.com" class="mr-10 my-2 h-12" />
            <ul class="flex  py-5">
                <li 
                    v-for="(item, index) in items"
                    :key="index"
                    class="mx-4"
                >
                    {{ item.title }}
                </li>
            </ul>
        </div>
        <div class="w-32 pr-5 py-5 flex justify-end content-center">
            <NuxtLink to="/">FR</NuxtLink>
        </div>
    </header>
</template>