<script setup lang="ts">
import { getSliceComponentProps } from "@prismicio/vue"

const props = defineProps(getSliceComponentProps(["slice", "index", "slices", "context"]))

const route = useRoute()
const currentLocale = useCurrentLocale()

const { client } = usePrismic()
const { data: menu, refresh } = await useAsyncData(`submenu-${props.slice.primary.menu.id}`, () => client.getByUID('menu', props.slice.primary.menu.uid, { lang: currentLocale }))

watch(
  () => [route.fullPath],
  async() => {
    refresh
  },
)
</script>
<template>
    <section class="bg-gray-200">
        <div class="container max-w-screen-lg px-4 mx-auto md:px-0">
            <div class="container flex items-center justify-center">
                <div 
                    v-for="(item, index) in menu.data.menu_links"
                    :key="index"
                    class="flex flex-col items-center mx-3 my-3 text-center sm:mx-8"
                >
                    <NuxtLink
                        :to="`/${currentLocale}/${item.link.uid}`"
                        class="flex flex-col justify-center"
                    >
                        <PrismicImage :field="item.image" class="h-20" />
                        <p class="text-xs font-bold sm:text-base"><PrismicText :field="item.label" /></p>
                    </NuxtLink>
                </div>
            </div>
        </div>
    </section>
</template>