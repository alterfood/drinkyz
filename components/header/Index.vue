<script setup lang="ts">
defineProps({
  bgColor: {
      type: String,
      default: 'black'
  }
})

const { client } = usePrismic()
const { data: menu } = await useAsyncData('menuHeader', () => client.getByID('YmUadxMAACUAYQFr'))
</script>
<template>
    <header 
        class="flex justify-between text-gray-100 font-bold px-4 md:px-0"
        :class="[bgColor === '#000000' ? 'bg-gradient-to-b from-black to-menub' : 'color']"
    >
        <div></div>
        <div class="flex">
            <NuxtLink to="/">
                <img src="/logo.svg" alt="Drinkyz.com" class="mr-10 my-2 h-12" />
            </NuxtLink>
            <ul class="flex flex-wrap py-5">
                <li 
                    v-for="(menuLink, index) in menu.data.menu_links"
                    :key="index"
                    class="mx-4"
                >
                    <NuxtLink
                        v-if="menuLink.link.uid" 
                        :to="menuLink.link.uid"
                    >
                        <PrismicRichText :field="menuLink.label" />    
                    </NuxtLink>
                    <NuxtLink v-else :to="menuLink.link.url" target="_blank">
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
<style>
    header.color {
        background-color: v-bind(bgColor);
    }
</style>