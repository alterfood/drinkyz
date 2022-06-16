<script setup lang="ts">
import { getSliceComponentProps } from "@prismicio/vue"

defineProps(getSliceComponentProps(["slice", "index", "slices", "context"]))

const currentLocale = useCurrentLocale()
</script>
<template>
    <section class="container max-w-screen-lg mx-auto px-4 md:px-0 my-6">
        <NuxtLink 
            :to="`/${currentLocale}/${slice.primary.square_link.uid}`"
        >
            <div class="p-4 bg-gray-200 flex gap-6">
                <div class="text-center">
                    <h2 class="text-3xl font-extrabold sm:hidden">
                        <PrismicText :field="slice.primary.square_title" />
                    </h2>
                    <PrismicImage :field="slice.primary.square_image" />
                </div>
                <div class="flex-col justify-center p-5 hidden sm:block">
                    <h2 class="text-3xl font-extrabold">
                        <PrismicText :field="slice.primary.square_title" />
                    </h2>
                    <PrismicRichText :field="slice.primary.square_text" />
                </div>
            </div>
        </NuxtLink>
    </section>
</template>