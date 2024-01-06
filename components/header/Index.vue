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
const { data: menu, refresh } = await useAsyncData(`menuHeader-${currentLocale}`, () => client.getByUID('menu', 'menu-header', { lang: currentLocale }))

// for (const item of menu.value.data.menu_links) {
//     if(item.submenu.id) {
//         const { data: submenu, refresh } = await useAsyncData(item.submenu.id, () => client.getByID(item.submenu.id))
//         item.submenu.links = submenu.value.data.menu_links
//     } else {
//         item.submenu.links = []
//     }
// }

watch(
  () => [route.fullPath],
  async() => {
    refresh
  },
)

const showMenu = ref<boolean>(false)
const submenu = ref<string>('')

const showSubmenu = (value: string) => {
    submenu.value = value
}

const hideSubmenu = () => {
    submenu.value = ''
}
</script>
<template>
    <!-- <header 
        class="font-bold text-gray-100"
        :class="[bgColor === '#000000' ? 'bg-gradient-to-b from-black to-menub' : 'color']"
    > -->
    <header 
        class="font-bold text-gray-100 color"
    >
        <div 
            class="flex flex-col sm:hidden"
            :class="{ 'min-h-screen' : showMenu }"
        >
            <div class="flex justify-between px-4 md:px-0 sm:h-16">
                <NuxtLink to="/" class="flex items-center">
                    <img src="/logo.svg" alt="Drinkyz.com" class="h-12 my-2 mr-10" />
                </NuxtLink>
                <div class="mx-4 my-5">
                    <span @click="showMenu = !showMenu">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-menu-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <line x1="4" y1="6" x2="20" y2="6"></line>
                            <line x1="4" y1="12" x2="20" y2="12"></line>
                            <line x1="4" y1="18" x2="20" y2="18"></line>
                        </svg>
                    </span>
                </div>
            </div>
            <div 
                v-show="showMenu"
                class="relative flex flex-col flex-wrap justify-between mb-0 marker:text-transparent grow"
            >   
                <ul>
                    <li 
                        v-for="(menuLink, index) in menu.data.menu_links"
                        :key="index"
                        class="px-4 py-4 mx-0 text-xl border-b border-white sm:my-5"
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
                    </li>
                </ul>
                <div class="flex content-center justify-center w-full py-5 pr-5 text-xl">
                    <template v-for="(language, index) of page.alternate_languages">
                        <NuxtLink class="mr-3 uppercase" :to="`/${language.lang}/${language.uid}`">
                            {{ locales[language.lang] }}
                        </NuxtLink>
                    </template>
                </div>
            </div>
        </div>

        <div class="justify-between hidden px-4 sm:flex md:px-0 sm:h-16">
            <div></div>
            <div class="flex">
                <NuxtLink to="/" class="flex items-center">
                    <img src="/logo.svg" alt="Drinkyz.com" class="h-12 my-2 mr-10" />
                </NuxtLink>
                <ul class="relative flex flex-wrap mb-0 marker:text-transparent">
                    <li 
                        v-for="(menuLink, index) in menu.data.menu_links"
                        :key="index"
                        class="mx-4 my-2 list-none sm:my-5"
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
                        <!-- <ul 
                            v-if="menuLink.submenu.links.length"
                            class="absolute -mx-2"
                            :class="[bgColor === '#000000' ? 'bg-gradient-to-b from-black to-menub' : 'color']"
                            v-show="submenu === menuLink.submenu.id"
                        >
                            <li 
                                v-for="(submenuLink, index) in menuLink.submenu.links"
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
                        </ul> -->
                    </li>
                </ul>
            </div>
            <div class="flex content-center justify-end w-32 py-5 pr-5">
                <template v-for="(language, index) of page.alternate_languages">
                    <NuxtLink class="mr-3 uppercase" :to="`/${language.lang}/${language.uid}`">
                        {{ locales[language.lang] }}
                    </NuxtLink>
                </template>
            </div>
        </div>
    </header>
</template>
<style>
    header.color,
    ul.color {
        background-color: v-bind(bgColor);
    }
</style>