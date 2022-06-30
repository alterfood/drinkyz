<script setup lang="ts">
import { getSliceComponentProps } from "@prismicio/vue"

defineProps(getSliceComponentProps(["slice", "index", "slices", "context"]))
</script>
<template>
    <h1 class="container max-w-screen-lg mx-auto px-4 md:px-0 text-3xl sm:text-5xl font-bold my-14"><PrismicRichText :field="slice.primary.title1" /></h1>
</template>