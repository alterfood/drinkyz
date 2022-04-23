<script setup lang="ts">

</script>
<template>
    <footer class="text-white bg-black py-5">
        <div class="container max-w-screen-lg mx-auto pb-10">
            <div class="grid sm: grid-cols-3 md:grid-cols-5">
                <div class="">
                    Logo
                </div>
                <div class="col-span-3">
                    <h4>Nos produits</h4>
                    <ul>
                        <li v-for="(item, Itemindex) in items">
                            <NuxtLink :to="'/' + item.slug">{{ item.title }}</NuxtLink>
                        </li>
                    </ul>
                </div>
                <div class="">
                    <h4>Contact</h4>
                    hello@drinkyz.com<br/>
                    +33 (0) 1 58 18 35 83<br/>
                    4 rue de Sèze 75009 Paris
                </div>
            </div>
        </div>
        <div class="flex justify-between">
            <div class="w-32">

            </div>
            <div class="container max-w-screen-lg mx-auto text-center text-xs">
                <ul class="flex flex-wrap justify-center">
                    <li class="after:content-['-'] mr-1">Boisson personnalisée </li>
                    <li class="after:content-['-'] mr-1">boisson publicitaire </li>
                    <li class="after:content-['-'] mr-1">boissons BIO </li>
                    <li class="after:content-['-'] mr-1">bouteille d'eau pubilicitaire </li>
                    <li class="after:content-['-'] mr-1">bouteille d'eau publicitaire </li>
                    <li class="after:content-['-'] mr-1">canette personnalisée boisson logotée </li>
                    <li class="after:content-['-'] mr-1">energy drink personnalisé </li>
                    <li class="after:content-['-'] mr-1">energy drink publicitaire </li>
                    <li class="after:content-['-'] mr-1">jus de fruit personnalisé </li>
                    <li>Soda personnalisé</li>
                </ul>
                <p>Mentions légales</p>
            </div>
            <div class="w-32 pr-5 flex justify-end content-center">
                FR
            </div>
        </div>
    </footer>
</template>