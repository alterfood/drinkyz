<script setup lang="ts">
import { getSliceComponentProps } from "@prismicio/vue"

defineProps(getSliceComponentProps(["slice", "index", "slices", "context"]))
</script>
<template>
<div class="container max-w-screen-lg mx-auto px-4 md:px-0 flex justify-center">
    <PrismicImage :field="slice.primary.image" />
</div>
</template>