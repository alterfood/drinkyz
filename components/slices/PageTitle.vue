<script setup lang="ts">
import { getSliceComponentProps } from "@prismicio/vue"

defineProps(getSliceComponentProps(["slice", "index", "slices", "context"]))
</script>
<template>
    <h1 class="text-center text-5xl font-bold my-14"><PrismicRichText :field="slice.primary.title1" /></h1>
</template>