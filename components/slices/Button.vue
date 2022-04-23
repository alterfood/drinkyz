<script setup lang="ts">
import { getSliceComponentProps } from "@prismicio/vue"

defineProps(getSliceComponentProps(["slice", "index", "slices", "context"]))
</script>
<template>
    <div class="flex justify-center my-12">
        <a href="" class="border-2 border-black px-6 py-3">
            <PrismicRichText :field="slice.primary.label" class="text-2xl font-bold" />
        </a>
    </div>
</template>