<script setup lang="ts">

</script>
<template>
    <div class="h-full flex flex-col font-sans font-light antialiased bg-gray-100 text-gray-900">
        <Header />
        <div class="flex-grow">
            <slot />
        </div>      
        <Footer />
    </div>
</template>