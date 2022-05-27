<script setup lang="ts">
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

const route = useRoute()
const currentLocale = useCurrentLocale()
const locales = ref(useLocales())


const { client } = usePrismic()
const { data: menu, refresh } = await useAsyncData('menuHeader', () => client.getByID('YmUadxMAACUAYQFr'))

watch(
  () => [route.fullPath],
  async() => {
    refresh
  },
)
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
        <div class="w-32 pr-5 py-5 flex justify-end content-center">
            <template v-for="(language, index) of page.alternate_languages">
                <NuxtLink class="uppercase mr-3" :to="`/${language.lang}/${language.uid}`">
                    {{ locales[language.lang] }}
                </NuxtLink>
            </template>
        </div>
    </header>
</template>
<style>
    header.color {
        background-color: v-bind(bgColor);
    }
</style>