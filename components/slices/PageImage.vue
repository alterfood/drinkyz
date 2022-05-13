<script setup lang="ts">
import { getSliceComponentProps } from "@prismicio/vue"

defineProps(getSliceComponentProps(["slice", "index", "slices", "context"]))
</script>
<template>
<div class="flex justify-center">
    <PrismicImage :field="slice.primary.image" />
</div>
</template>