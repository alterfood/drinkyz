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
    LazySlicesPageContactAddress,
    LazySlicesPageContactFormSuccess,
    LazySlicesPageSubmenu,
    LazySlicesButton
} from "~~/.nuxt/components";

const route = useRoute()
const config = useRuntimeConfig()
const currentLocale = useCurrentLocale()
const locales = useLocales()
const { client } = usePrismic()

const { data: page, refresh } = await useAsyncData(
    route.fullPath as string,
    () => client.getByUID('page', route.params.page as string, { lang: currentLocale }),
)

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
    'image___text': LazySlicesPageImageText,
    'text___image': LazySlicesPageTextImage,
    'page_brand': LazySlicesPageBrands,
    'page_square': LazySlicesPageSquare,
    'page_squares': LazySlicesPageSquares,
    'page_packshots_header': LazySlicesPagePackshotsHeader,
    'page_contact_form': LazySlicesPageContactForm,
    'page_contact_address': LazySlicesPageContactAddress,
    'page_contact_form_success': LazySlicesPageContactFormSuccess,
    'page_submenu': LazySlicesPageSubmenu,
    'button': LazySlicesButton,
})

useHead({
  viewport: 'width=device-width, initial-scale=1, maximum-scale=5',
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
            <Html :lang="locales[page.lang]" />
            <Title>{{ page?.data?.meta_title }}</Title>
            <Meta name="description" :content="page?.data?.meta_description" />
            <Meta http-equiv="content-language" :content="page.lang" />
            <Link 
                v-for="language of page.alternate_languages"
                rel="alternate"
                :href="`${config.BASE_URL}/${language.lang}/${language.uid}`"
                :hreflang="locales[language.lang]"
            />
             <Body class="font-body" />
        </Head>
        <Header 
            :page="page"
            :bgColor="page?.data?.page_color"
        />
        <div class="">
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
<style>
    h2 {
        @apply font-light;
        @apply mb-2;
    }

    p{ 
        @apply mb-2;
    }

    em {
        background-color: v-bind('page.data.page_color')!important;
        color: white;
        @apply not-italic py-[0.15rem] px-[0.4rem];
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