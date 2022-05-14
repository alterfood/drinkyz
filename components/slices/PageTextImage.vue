<script setup lang="ts">
import { getSliceComponentProps } from "@prismicio/vue"

defineProps(getSliceComponentProps(["slice", "index", "slices", "context"]))
</script>
<template>
<div class="flex flex-col sm:flex-row justify-center gap-10 my-20 text-justify">
    <PrismicRichText :field="slice.primary.text" />
    <PrismicImage :field="slice.primary.image" />
</div>
</template>
<style scoped>
    .flex >>> h2 {
        @apply font-bold;
    }
</style>