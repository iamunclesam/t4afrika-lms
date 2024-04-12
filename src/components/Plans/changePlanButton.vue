<template>
    <main v-if="plan">
        <a href="#" @click="toggleModal"
            class="text-white bg-purple-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900">Get
            started
        </a>

        <transition name="fade">
            <div v-if="showModal"
                class="fixed top-0 right-0 left-0 z-50 flex justify-center items-center h-screen bg-black bg-opacity-50">
                <div class="relative p-4 w-full max-w-md">
                    <div class="relative bg-purple-600 rounded-lg shadow dark:bg-gray-700">
                        <button type="button" @click="toggleModal"
                            class="absolute top-3 right-3 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white">
                            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox="0 0 14 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                            </svg>
                            <span class="sr-only">Close modal</span>
                        </button>
                        <div class="p-4 md:p-5 text-center">
                            <svg class="mx-auto mb-4 text-white w-12 h-12 dark:text-gray-200" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2" d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                            <h3 class="mb-5 text-lg font-normal text-white dark:text-gray-400">Are
                                you sure you want to proceed with this plan</h3>
                            <button @click="changeSubscription(plan.id, plan.amount)"
                                class="text-purple bg-white hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center">
                                Yes, I'm sure
                            </button>
                            <button @click="toggleModal"
                                class="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">No,
                                cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </transition>
    </main>
</template>

<script>
import { initFlowbite } from 'flowbite';
export default {
    
    props: {
        plan: {
            type: Object,
            required: true
        }
    },

    data() {
        return {
            paystackResponse: 'Success',
            showModal: false
        }
    },

    mounted() {
        initFlowbite()
    },

    computed: {
        transactionReference() {
            let randomRef = "";
            let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

            for (let i = 0; i < 15; i++)
                randomRef += characters.charAt(Math.floor(Math.random() * characters.length));

            return randomRef;
        },

        duration(plan) {
            return plan
        }
    },

    methods: {
        changeSubscription(planId, amount) {
            this.$store.dispatch('changePlan', { planId, amount, transactionReference: this.transactionReference, paystackResponse: this.paystackResponse })
        },

        toggleModal() {
            this.showModal = !this.showModal;
        },

    }
}
</script>

<style></style>