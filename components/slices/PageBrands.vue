<script setup lang="ts">
import { getSliceComponentProps } from "@prismicio/vue"

defineProps(getSliceComponentProps(["slice", "index", "slices", "context"]))
</script>
<template>
    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
        <template
            v-for="(item, index) in slice.items"
            :key="index"
        >
            <div class="bg-black">
                <PrismicImage :field="item.image" />
            </div>
        </template>
    </div>
</template>