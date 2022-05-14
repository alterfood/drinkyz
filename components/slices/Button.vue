<script setup lang="ts">
import { getSliceComponentProps } from "@prismicio/vue"

defineProps(getSliceComponentProps(["slice", "index", "slices", "context"]))
</script>
<template>
    <div class="flex justify-center my-12">
        <NuxtLink 
            v-if="slice.primary.button_link.uid" :to="'/' + slice.primary.button_link.uid"
            class="border-2 border-black px-6 py-3"
        >
            <PrismicRichText :field="slice.primary.button_label" class="text-2xl font-bold" />
        </NuxtLink>
        <NuxtLink v-else 
            :to="slice.primary.button_link.url"
            target="_blank"
            class="border-2 border-black px-6 py-3"
        >
            <PrismicRichText :field="slice.primary.button_label" />    
        </NuxtLink>
    </div>
</template>