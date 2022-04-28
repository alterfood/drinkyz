<script setup lang="ts">
import { getSliceComponentProps } from "@prismicio/vue"

defineProps(getSliceComponentProps(["slice", "index", "slices", "context"]))
</script>
<template>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <template
            v-for="(item, index) in slice.items"
            :key="index"
        >
            <div class="flex flex-col justify-center text-center bg-gray-200 p-5">
                <PrismicRichText :field="item.square_title" class="text-3xl font-extrabold" />
                <PrismicImage :field="item.square_image" />
            </div>
        </template>
    </div>
</template>