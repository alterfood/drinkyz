<script setup lang="ts">
import { defineSliceZoneComponents } from "@prismicio/vue"
import { LazySlicesPageTitle, LazySlicesPageText, LazySlicesPageImage, LazySlicesPageSquares, LazySlicesPageBrands } from "~~/.nuxt/components";

const route = useRoute()
const locales = useLocales()

const { client } = usePrismic()
const { data: page, refresh } = await useAsyncData('home-fr', () => client.getByUID('page', 'home', { lang: 'fr-fr' }))

watch(
  () => [route.fullPath],
  async() => {
    refresh
  },
)

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
      <Html lang="fr" />
      <Title>{{ page?.data?.meta_title }}</Title>
      <Meta name="description" :content="page?.data?.meta_description" />
      <Link 
        v-for="language of page.alternate_languages"
        rel="alternate"
        :href="`/${language.lang}/${language.uid}`"
        :hreflang="locales[language.lang]"
      />
    </Head>
    <Header 
      :page="page"
      :bgColor="page?.data?.page_color"
    />
    <div class="container max-w-screen-lg mx-auto px-4 md:px-0">
        <SliceZone
            :slices="page.data.body"
            :components="components"
        />
    </div>
    <Footer
      :page="page"
      :bgColor="page?.data?.page_color"
    />
  </div>
</template>