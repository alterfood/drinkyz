<script setup lang="ts">
import { getSliceComponentProps } from "@prismicio/vue"

defineProps(getSliceComponentProps(["slice", "index", "slices", "context"]))
</script>
<template>
    <section class="my-6">
        <NuxtLink 
            :to="{ name: 'page', params: { page: slice.primary.square_link.uid } }"
        >
            <div class="p-4 bg-gray-200 flex gap-6">
                <div class="">
                    <PrismicRichText :field="slice.primary.square_title" class="text-3xl font-extrabold sm:hidden" />
                    <PrismicImage :field="slice.primary.square_image" />
                </div>
                <div class="flex-col justify-center p-5 hidden sm:block">
                    <PrismicRichText :field="slice.primary.square_title" class="text-3xl font-extrabold" />
                    <PrismicRichText :field="slice.primary.square_text" />
                </div>
            </div>
        </NuxtLink>
    </section>
</template>