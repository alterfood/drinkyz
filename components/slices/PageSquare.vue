<script setup lang="ts">
import { getSliceComponentProps } from "@prismicio/vue"

defineProps(getSliceComponentProps(["slice", "index", "slices", "context"]))
</script>
<template>
    <NuxtLink 
        :to="{ name: 'page', params: { page: slice.square_link.uid } }"
    >
        <div class="bg-gray-200 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div class="">
                <PrismicImage :field="slice.square_image" />
            </div>
            <div class="flex justify-center text-center  p-5">
                <PrismicRichText :field="slice.square_title" class="text-3xl font-extrabold" />
                <PrismicRichText :field="slice.square_text" />
            </div>
        </div>
    </NuxtLink>
</template>