<script setup lang="ts">
import { defineSliceZoneComponents } from "@prismicio/vue"
import { 
    LazySlicesPageTitle,
    LazySlicesPageText,
    LazySlicesPageImage,
    LazySlicesPageSquare,
    LazySlicesPageSquares,
    LazySlicesPageBrands,
    LazySlicesPagePackshotsHeader,
    LazySlicesButton
} from "~~/.nuxt/components";

const route = useRoute()

const { client } = usePrismic()
const { data: page } = await useAsyncData('page', () => client.getByUID('page', route.params.page as string))

const components = defineSliceZoneComponents({
    'page_title': LazySlicesPageTitle,
    'page_text': LazySlicesPageText,
    'page_image': LazySlicesPageImage,
    // 'page_image_text': LazySlicesPageImageText,
    'page_brand': LazySlicesPageBrands,
    'page_square': LazySlicesPageSquare,
    'page_squares': LazySlicesPageSquares,
    'page_packshots_header': LazySlicesPagePackshotsHeader,
    'button': LazySlicesButton,
})
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
    <Footer :bgColor="page.data.page_color" />
</template>
<style>
    em {
        background-color: red;
        color: white;
        @apply not-italic;
    }

    li {
        @apply list-disc ml-4;
    }

    strong {
        @apply font-extrabold;
    }
</style>