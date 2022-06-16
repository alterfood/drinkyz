<script setup lang="ts">
import { getSliceComponentProps } from "@prismicio/vue"

defineProps(getSliceComponentProps(["slice", "index", "slices", "context"]))
</script>
<template>
    <section class="container max-w-screen-lg mx-auto px-4 md:px-0 my-12">
        <template
            v-for="(item, index) in slice.items"
            :key="index"
        >
            <PrismicRichText :field="item.text" class="text-justify" />
        </template>
    </section>
</template>