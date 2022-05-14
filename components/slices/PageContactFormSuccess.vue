<script setup lang="ts">
import { getSliceComponentProps } from "@prismicio/vue"

defineProps(getSliceComponentProps(["slice", "index", "slices", "context"]))

</script>
<template>
    <section>
        <div class="bg-gray-200 text-center p-16 mb-10">
            <PrismicRichText :field="slice.primary.title" />
            <PrismicRichText :field="slice.primary.subtitle" />
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
        @apply font-bold;
    }
</style>