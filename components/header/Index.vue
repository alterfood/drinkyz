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

for (const item of menu.value.data.menu_links) {
    if(item.submenu.id) {
        const { data: submenu, refresh } = await useAsyncData(item.submenu.id, () => client.getByID(item.submenu.id))
        item.submenu = submenu.value.data.menu_links
    }
}

watch(
  () => [route.fullPath],
  async() => {
    refresh
  },
)

const submenu = ref<string>('')

const showSubmenu = (value: string) => {
    submenu.value = value
}

const hideSubmenu = () => {
    submenu.value = ''
}
</script>
<template>
    <header 
        class="flex justify-between text-gray-100 font-bold px-4 md:px-0 sm:h-16"
        :class="[bgColor === '#000000' ? 'bg-gradient-to-b from-black to-menub' : 'color']"
    >
        <div></div>
        <div class="flex">
            <NuxtLink to="/" class="flex items-center">
                <img src="/logo.svg" alt="Drinkyz.com" class="mr-10 my-2 h-12" />
            </NuxtLink>
            <ul class="flex flex-wrap mb-0 marker:text-transparent relative">
                <li 
                    v-for="(menuLink, index) in menu.data.menu_links"
                    :key="index"
                    class="mx-4 my-2 sm:my-5"
                    @mouseover="showSubmenu(menuLink.submenu.id)"
                    @mouseleave="hideSubmenu()"
                >
                    <NuxtLink
                        v-if="menuLink.link.uid" 
                        :to="`/${currentLocale}/${menuLink.link.uid}`"
                    >
                        <PrismicText :field="menuLink.label" />    
                    </NuxtLink>
                    <NuxtLink v-else :to="menuLink.link.url" target="_blank">
                        <PrismicText :field="menuLink.label" />    
                    </NuxtLink>
                    <ul 
                        v-if="menuLink.submenu.length"
                        class="absolute -mx-2"
                        :class="[bgColor === '#000000' ? 'bg-gradient-to-b from-black to-menub' : 'color']"
                        v-show="submenu === menuLink.submenu.id"
                    >
                        <li 
                            v-for="(submenuLink, index) in menuLink.submenu"
                            :key="index"
                            class="mx-4 my-4"
                        >
                            <NuxtLink
                                v-if="submenuLink.link.uid" 
                                :to="`/${currentLocale}/${submenuLink.link.uid}`"
                            >
                                <PrismicText :field="submenuLink.label" />    
                            </NuxtLink>
                            <NuxtLink v-else :to="submenuLink.link.url" target="_blank">                
                                <PrismicText :field="submenuLink.label" />    
                            </NuxtLink>
                        </li>
                    </ul>
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
    header.color,
    ul.color {
        background-color: v-bind(bgColor);
    }
</style>