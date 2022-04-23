<script setup lang="ts">
import { getSliceComponentProps } from "@prismicio/vue"

defineProps(getSliceComponentProps(["slice", "index", "slices", "context"]))
</script>
<template>
    <template
        v-for="(item, index) in slice.items"
        :key="index"
    >
        <h1 class="text-4xl font-bold"><PrismicRichText :field="item.title1" /></h1>
    </template>
</template>