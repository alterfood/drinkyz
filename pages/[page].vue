<script setup lang="ts">
import { defineSliceZoneComponents } from "@prismicio/vue"
import { 
    LazySlicesPageTitle,
    LazySlicesPageText,
    LazySlicesPageImage,
    LazySlicesPageSquare,
    LazySlicesPageSquares,
    LazySlicesPageBrands,
    LazySlicesButton
} from "~~/.nuxt/components";

const route = useRoute()

console.log(route.params.page)

const { client } = usePrismic()
const { data: page } = await useAsyncData('page', () => client.getByUID('page', route.params.page as string))

const components = defineSliceZoneComponents({
    'page_title': LazySlicesPageTitle,
    'page_text': LazySlicesPageText,
    'page_image': LazySlicesPageImage,
    // 'page_image_text': LazySlicesPageImageText,
    'page_brands': LazySlicesPageBrands,
    'page_square': LazySlicesPageSquare,
    'page_squares': LazySlicesPageSquares,
    'button': LazySlicesButton,
});
</script>
<template>
    <div class="container max-w-screen-lg mx-auto">
        <SliceZone
            :slices="page.data.body"
            :components="components"
        />
    </div>
</template>