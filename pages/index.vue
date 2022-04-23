<script setup lang="ts">
import { defineSliceZoneComponents } from "@prismicio/vue"
import { LazySlicesPageTitle, LazySlicesPageText, LazySlicesPageImage, LazySlicesPageSquares, LazySlicesPageBrands } from "~~/.nuxt/components";

const { client } = usePrismic()
const { data: homepage } = await useAsyncData('homepage', () => client.getSingle('homepage'))

const components = defineSliceZoneComponents({
    'page_title': LazySlicesPageTitle,
    'page_text': LazySlicesPageText,
    'page_image': LazySlicesPageImage,
    'page_squares': LazySlicesPageSquares,
    'page_brands': LazySlicesPageBrands,
});
</script>
<template>
    <div class="container max-w-screen-lg mx-auto">
        <SliceZone
            :slices="homepage.data.body"
            :components="components"
        />
        <!-- {{ homepage.data.body }} -->
    </div>
</template>