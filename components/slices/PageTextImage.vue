<script setup lang="ts">
import { getSliceComponentProps } from "@prismicio/vue"

defineProps(getSliceComponentProps(["slice", "index", "slices", "context"]))
</script>
<template>
<div class="container max-w-screen-lg mx-auto px-4 md:px-0 gap-10 my-20 text-justify">
    <PrismicRichText :field="slice.primary.text" />
    <div class="flex justify-center">
        <PrismicImage :field="slice.primary.image" />
    </div>
</div>
</template>
<style scoped>
    .container :deep(h2) {
        @apply font-bold mb-2;
    }
</style>