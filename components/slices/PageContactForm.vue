<script setup lang="ts">
import { getSliceComponentProps } from "@prismicio/vue"

defineProps(getSliceComponentProps(["slice", "index", "slices", "context"]))

const router = useRouter()

const submitContactForm = () => {
    $fetch('/api/contact').then(() => {
        // router.push('/contact-success')
    })
}
</script>
<template>
    <section class="mb-16">
        <form @submit.prevent="submitContactForm">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 mb-4">
                <div class="flex flex-col">
                    <label class="mb-1">Nom*</label>
                    <input class="bg-gray-200 p-2" required>
                </div>
                <div class="flex flex-col">
                    <label class="mb-1">Prénom*</label>
                    <input class="bg-gray-200 p-2" required>
                </div>

                <div class="flex flex-col">
                    <label class="mb-1">Entreprise</label>
                    <input class="bg-gray-200 p-2">
                </div>
                <div class="flex flex-col">
                    <label class="mb-1">Mail*</label>
                    <input class="bg-gray-200 p-2" required>
                </div>

                <div class="flex flex-col">
                    <label class="mb-1">Téléphone</label>
                    <input class="bg-gray-200 p-2">
                </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 mb-4">
                <div class="flex flex-col">
                    <label class="mb-1">Produit</label>
                    <input class="bg-gray-200 p-2">
                </div>
                <div class="flex flex-col">
                    <label class="mb-1">Quantité</label>
                    <input class="bg-gray-200 p-2">
                </div>

                <div class="flex flex-col">
                    <label class="mb-1">Ville de livraison</label>
                    <input class="bg-gray-200 p-2">
                </div>
                <div class="flex flex-col">
                    <label class="mb-1">Date de livraison*</label>
                    <input class="bg-gray-200 p-2">
                </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 mb-4">
                <div>
                    <div class="flex flex-col">
                        <label class="mb-1">Sujet*</label>
                        <input class="bg-gray-200 p-2" required>
                    </div>
                </div>
            </div>

            <div class="flex flex-col gap-x-8 gap-y-4 mb-4">
                <div class="flex flex-col">
                    <label class="mb-1">Message*</label>
                    <textarea class="bg-gray-200 p-2" rows="8" required />
                </div>
            </div>

            <div class="flex justify-between">
                <div>*champs obligatoires</div>
                <input class="border-2 border-black px-6 py-3 font-bold" type="submit" value="Envoyer" />
            </div>
        </form>
</section>
    
</template>