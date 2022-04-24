<script setup lang="ts">
import { getSliceComponentProps } from "@prismicio/vue"

defineProps(getSliceComponentProps(["slice", "index", "slices", "context"]))
</script>
<template>
    <div class="flex bg-gray-200 justify-center">
        <template
            v-for="(item, index) in slice.items"
            :key="index"
        >
            <div class="w-36">
                <PrismicImage :field="item.image" />
            </div>
        </template>
    </div>
    
</template>