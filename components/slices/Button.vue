<script setup lang="ts">
import { getSliceComponentProps } from "@prismicio/vue"

defineProps(getSliceComponentProps(["slice", "index", "slices", "context"]))
</script>
<template>
    <div class="flex justify-center my-12">
        <NuxtLink 
            v-if="slice.primary.link.uid" :to="'/' + slice.primary.link.uid"
            class="border-2 border-black px-6 py-3"
        >
            <PrismicRichText :field="slice.primary.label" class="text-2xl font-bold" />
        </NuxtLink>
        <NuxtLink v-else 
            :to="slice.primary.link.url"
            target="_blank"
            class="border-2 border-black px-6 py-3"
        >
            <PrismicRichText :field="slice.primary.link.label" />    
        </NuxtLink>
    </div>
</template>