<script setup lang="ts">
import { getSliceComponentProps } from "@prismicio/vue"

const props = defineProps(getSliceComponentProps(["slice", "index", "slices", "context"]))

const route = useRoute()
const currentLocale = useCurrentLocale()

const { client } = usePrismic()
const { data: menu, refresh } = await useAsyncData(Math.random().toString(36).substring(7), () => client.getByID(props.slice.primary.menu.id))

watch(
  () => [route.fullPath],
  async() => {
    refresh
  },
)
</script>
<template>
    <section class="bg-gray-200">
        <div class="container max-w-screen-lg mx-auto px-4 md:px-0">
            <div class="container flex justify-center items-center">
                <div 
                    v-for="(item, index) in menu.data.menu_links"
                    :key="index"
                    class="flex flex-col items-center text-center mx-3 sm:mx-8 my-3"
                >
                    <NuxtLink
                        :to="`/${currentLocale}/${item.link.uid}`"
                        class="flex flex-col justify-center"
                    >
                        <PrismicImage :field="item.image" class="h-20" />
                        <p class="text-xs sm:text-base font-bold"><PrismicText :field="item.label" /></p>
                    </NuxtLink>
                </div>
            </div>
        </div>
        <!-- {{ menu }} -->
    </section>
</template>