<script setup lang="ts">
import { defineSliceZoneComponents } from "@prismicio/vue"
import { LazySlicesPageTitle, LazySlicesPageText, LazySlicesPageImage, LazySlicesPageSquares, LazySlicesPageBrands } from "~~/.nuxt/components";

const { client } = usePrismic()
const { data: page } = await useAsyncData('page', () => client.getByUID('page', 'home'))

const components = defineSliceZoneComponents({
    'page_title': LazySlicesPageTitle,
    'page_text': LazySlicesPageText,
    'page_image': LazySlicesPageImage,
    'page_squares': LazySlicesPageSquares,
    'page_brand': LazySlicesPageBrands,
});
</script>
<template>
    <Head>
      <Title>{{ page?.data?.meta_title }}</Title>
      <Meta name="description" :content="page?.data?.meta_description" />
    </Head>
    <Header />
    <div class="container max-w-screen-lg mx-auto">
        <SliceZone
            :slices="page.data.body"
            :components="components"
        />
    </div>
    <Footer />
</template>