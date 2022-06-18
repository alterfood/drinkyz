<script setup lang="ts">
import { getSliceComponentProps } from "@prismicio/vue"

defineProps(getSliceComponentProps(["slice", "index", "slices", "context"]))
</script>
<template>
    <section class="container max-w-screen-lg mx-auto px-4 md:px-0 mb-10">
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 auto-rows-1fr">
            <template
                v-for="(item, index) in slice.items"
                :key="index"
            >
                <div class="bg-black p-16 sm:p-7 flex justify-center content-center">
                    <PrismicImage :field="item.brand_image" class="object-contain" />
                </div>
            </template>
        </div>
    </section>
</template>