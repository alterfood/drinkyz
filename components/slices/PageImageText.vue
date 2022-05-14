<script setup lang="ts">
import { getSliceComponentProps } from "@prismicio/vue"

defineProps(getSliceComponentProps(["slice", "index", "slices", "context"]))
</script>
<template>
<div class="flex flex-col sm:flex-row justify-center gap-10 my-20 text-justify">
    <PrismicImage :field="slice.primary.image" />
    <PrismicRichText :field="slice.primary.text" />
</div>
</template>
<style scoped>
    .flex >>> h2 {
        @apply font-bold;
        @apply mb-2;
    }
</style>