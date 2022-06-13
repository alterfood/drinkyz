<script setup lang="ts">
import { getSliceComponentProps } from "@prismicio/vue"

const { $recaptcha } = useNuxtApp()

defineProps(getSliceComponentProps(["slice", "index", "slices", "context"]))

const router = useRouter()
const currentLocale = useCurrentLocale()

const contactForm = reactive({
    lastName: '',
    firstName: '',
    company: '',
    email: '',
    phone: '',
    products: '',
    quantity: '',
    shippingCity: '',
    shippingDate: '',
    subject: '',
    message: '',
})



// const submitContactForm = () => {
//     // $recaptcha.ready(function() {
//     //     $recaptcha.execute('6LcJJBsgAAAAAPlaOYyOjh04pfEwx-jByFXbZI4n', {action: 'submit'}).then(function(token) {
//     //         console.log(contactForm)
//     //         $fetch('/api/contact', { method: 'POST', body: { contactForm } }).then(() => {
//     //             router.push(`/${currentLocale}/contact-success`)
//     //         })
//     //     })
//     // })
//     fetch("/", {
//         method: "POST",
//         headers: { "Content-Type": "application/x-www-form-urlencoded" },
//         body: new URLSearchParams(contactForm).toString()
//     }).then(() => router.push(`/${currentLocale}/contact-success`));
// }
</script>
<template>
    <section class="mb-16">
        <form 
            name="contact"
            :action="`/${currentLocale}/contact-success`"
            method="POST"
            netlify-honeypot="bot-field"
            data-netlify="true"
        >
            <p class="invisible">
                <label>
                Don’t fill this out if you’re human: <input name="bot-field" />
                </label>
            </p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 mb-4">
                <div class="flex flex-col">
                    <label class="mb-1">Nom*</label>
                    <input name="lastName" v-model="contactForm.lastName" class="bg-gray-200 p-2" required>
                </div>
                <div class="flex flex-col">
                    <label class="mb-1">Prénom*</label>
                    <input name="firstName" v-model="contactForm.firstName" class="bg-gray-200 p-2" required>
                </div>

                <div class="flex flex-col">
                    <label class="mb-1">Entreprise</label>
                    <input name="company" v-model="contactForm.company" class="bg-gray-200 p-2">
                </div>
                <div class="flex flex-col">
                    <label class="mb-1">Mail*</label>
                    <input name="email" v-model="contactForm.email" class="bg-gray-200 p-2" required>
                </div>

                <div class="flex flex-col">
                    <label class="mb-1">Téléphone</label>
                    <input name="phone" v-model="contactForm.phone" class="bg-gray-200 p-2">
                </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 mb-4">
                <div class="flex flex-col">
                    <label class="mb-1">Produit</label>
                    <input name="products" v-model="contactForm.products" class="bg-gray-200 p-2">
                </div>
                <div class="flex flex-col">
                    <label class="mb-1">Quantité</label>
                    <input name="quantity" v-model="contactForm.quantity" class="bg-gray-200 p-2">
                </div>

                <div class="flex flex-col">
                    <label class="mb-1">Ville de livraison</label>
                    <input name="shippingCity" v-model="contactForm.shippingCity" class="bg-gray-200 p-2">
                </div>
                <div class="flex flex-col">
                    <label class="mb-1">Date de livraison*</label>
                    <input name="shippingDate" v-model="contactForm.shippingDate" class="bg-gray-200 p-2">
                </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 mb-4">
                <div>
                    <div class="flex flex-col">
                        <label class="mb-1">Sujet*</label>
                        <input name="subject" v-model="contactForm.subject" class="bg-gray-200 p-2" required>
                    </div>
                </div>
            </div>

            <div class="flex flex-col gap-x-8 gap-y-4 mb-4">
                <div class="flex flex-col">
                    <label class="mb-1">Message*</label>
                    <textarea name="message" v-model="contactForm.message" class="bg-gray-200 p-2" rows="8" required />
                </div>
            </div>

            <div class="flex justify-between">
                <div>*champs obligatoires</div>
                <input class="border-2 border-black px-6 py-3 font-bold cursor-pointer" type="submit" value="Envoyer" />
            </div>
        </form>
    </section>
    
</template>