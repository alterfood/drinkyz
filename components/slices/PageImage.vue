<script setup lang="ts">
import { getSliceComponentProps } from "@prismicio/vue"

defineProps(getSliceComponentProps(["slice", "index", "slices", "context"]))
</script>
<template>
    <template
        v-for="(item, index) in slice.items"
        :key="index"
    >
        <PrismicImage :field="item.image" />
    </template>
</template>