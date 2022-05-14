<script setup lang="ts">
import { defineSliceZoneComponents } from "@prismicio/vue"
import { 
    LazySlicesPageTitle,
    LazySlicesPageText,
    LazySlicesPageImage,
    LazySlicesPageImageText,
    LazySlicesPageTextImage,
    LazySlicesPageSquare,
    LazySlicesPageSquares,
    LazySlicesPageBrands,
    LazySlicesPagePackshotsHeader,
    LazySlicesPageContactForm,
    LazySlicesButton
} from "~~/.nuxt/components";

const route = useRoute()

const { client } = usePrismic()
const { data: page } = await useAsyncData('page', () => client.getByUID('page', route.params.page as string))

const components = defineSliceZoneComponents({
    'page_title': LazySlicesPageTitle,
    'page_text': LazySlicesPageText,
    'page_image': LazySlicesPageImage,
    'image___text': LazySlicesPageImageText,
    'text___image': LazySlicesPageTextImage,
    'page_brand': LazySlicesPageBrands,
    'page_square': LazySlicesPageSquare,
    'page_squares': LazySlicesPageSquares,
    'page_packshots_header': LazySlicesPagePackshotsHeader,
    'page_contact_form': LazySlicesPageContactForm,
    'button': LazySlicesButton,
})
</script>
<template>
    <Head>
      <Title>{{ page?.data?.meta_title }}</Title>
      <Meta name="description" :content="page?.data?.meta_description" />
    </Head>
    <Header :bgColor="page?.data?.page_color" />
    <div class="container max-w-screen-lg mx-auto px-4 md:px-0">
        <SliceZone
            :slices="page.data.body"
            :components="components"
        />
    </div>
    <Footer :bgColor="page?.data?.page_color" />
</template>
<style>
    h2 {
        @apply font-light;
        @apply mb-2;
    }

    p{ 
        @apply mb-2;
    }

    em {
        background-color: v-bind(page?.data?.page_color)!important;
        color: white;
        @apply not-italic;
    }

    ul {
        @apply mb-6;
    }

    li {
        @apply list-disc ml-4;
    }

    strong {
        @apply font-extrabold;
    }
</style>