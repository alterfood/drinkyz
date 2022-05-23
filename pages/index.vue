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

useHead({
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  charset: 'utf-8',
  meta: [
    { name: 'description', content: 'My amazing site.' },
    { name: 'msapplication-TileColor', content: '#da532c' },
    { name: 'theme-color', content: '#ffffff'}
  ],
  link: [
    { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
    { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
    { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
    { rel: 'manifest', href: '/site.webmanifest' },
    { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#5bbad5' },
  ],

})

</script>
<template>
  <div>
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
  </div>
</template>