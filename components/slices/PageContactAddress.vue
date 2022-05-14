<script setup lang="ts">
import { getSliceComponentProps } from "@prismicio/vue"

defineProps(getSliceComponentProps(["slice", "index", "slices", "context"]))

</script>
<template>
    <section class="mb-12">
        <div class="flex justify-center gap-6">
            <img src="/logo-black.svg" alt="logo" class="text-black h-24">
            <PrismicRichText :field="slice.primary.text" />
        </div>
    </section>
</template>

<style scoped>
    * :deep(h2) {
        @apply text-6xl font-extrabold;
    }

    * :deep(h3) {
        @apply text-4xl font-extrabold mb-16;
    }

    * :deep(p) {
    }
</style>