<script setup lang="ts">
import { getSliceComponentProps } from "@prismicio/vue"

defineProps(getSliceComponentProps(["slice", "index", "slices", "context"]))

const currentLocale = useCurrentLocale()
</script>
<template>
    <section class="container max-w-screen-lg mx-auto px-4 md:px-0 my-6">
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <template
                v-for="(item, index) in slice.items"
                :key="index"
            >
                <NuxtLink 
                    :to="`/${currentLocale}/${item.square_link.uid}`"
                >
                    <div class="flex flex-col justify-center text-center bg-gray-200 p-5">
                        <h2 class="text-3xl text-3xl font-extrabold"><PrismicText :field="item.square_title" /></h2>
                        <PrismicImage :field="item.square_image" />
                    </div>
                </NuxtLink>
            </template>
        </div>
    </section>
</template>