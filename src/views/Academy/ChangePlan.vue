<template>
    <main>
        <sidebar />



        <div class="p-4 sm:ml-72 mt-20 sm:mx-5">
            <breadcrumb class="mt-5 sm:mt-5" />



            <section class="dark:bg-gray-900">
                <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">

                    <div class="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-4 lg:space-y-0">
                        <!-- Pricing Card -->
                        <div
                            class="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                            <h3 class="mb-4 text-2xl font-semibold">Weekly Plan</h3>
                            <p class="font-light text-gray-500 sm:text-lg dark:text-gray-400">Best option for personal
                                use & for your next project.</p>
                            <div class="flex justify-center items-baseline my-8">
                                <span class="mr-2 text-5xl font-extrabold">&#8358;500</span>
                                <span class="text-gray-500 dark:text-gray-400">/week</span>
                            </div>

                            <a href="#" @click="toggleModal"
                                class="text-white bg-purple-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900">Get
                                started</a>

                            <transition name="fade">
                                <div v-if="showModal"
                                    class="fixed top-0 right-0 left-0 z-50 flex justify-center items-center h-screen bg-black bg-opacity-50">
                                    <div class="relative p-4 w-full max-w-md">
                                        <div class="relative bg-purple-600 rounded-lg shadow dark:bg-gray-700">
                                            <button type="button" @click="toggleModal"
                                                class="absolute top-3 right-3 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white">
                                                <svg class="w-3 h-3" aria-hidden="true"
                                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                                    <path stroke="currentColor" stroke-linecap="round"
                                                        stroke-linejoin="round" stroke-width="2"
                                                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                                </svg>
                                                <span class="sr-only">Close modal</span>
                                            </button>
                                            <div class="p-4 md:p-5 text-center">
                                                <svg class="mx-auto mb-4 text-white w-12 h-12 dark:text-gray-200"
                                                    aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                                    viewBox="0 0 20 20">
                                                    <path stroke="currentColor" stroke-linecap="round"
                                                        stroke-linejoin="round" stroke-width="2"
                                                        d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                                </svg>
                                                <h3 class="mb-5 text-lg font-normal text-white dark:text-gray-400">Are
                                                    you sure you want to proceed with this plan</h3>
                                                <button @click="changeSubscription(1, 500)"
                                                    class="text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center">
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


                        </div>
                        <!-- Pricing Card -->
                        <div
                            class="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                            <h3 class="mb-4 text-2xl font-semibold">Bi-weekly Plan</h3>
                            <p class="font-light text-gray-500 sm:text-lg dark:text-gray-400">Relevant for multiple
                                users, extended & premium support.</p>
                            <div class="flex justify-center items-baseline my-8">
                                <span class="mr-2 text-5xl font-extrabold">&#8358;1000</span>
                                <span class="text-gray-500 dark:text-gray-400">/2weeks</span>
                            </div>

                            <a href="#" @click="changeSubscription(2, 1000)"
                                class="text-white bg-purple-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900">Get
                                started</a>
                        </div>
                        <!-- Pricing Card -->
                        <div
                            class="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                            <h3 class="mb-4 text-2xl font-semibold">Monthly Plan</h3>
                            <p class="font-light text-gray-500 sm:text-lg dark:text-gray-400">Best for large scale uses
                                and extended redistribution rights.</p>
                            <div class="flex justify-center items-baseline my-8">
                                <span class="mr-2 text-5xl font-extrabold">&#8358;2000</span>
                                <span class="text-gray-500 dark:text-gray-400">/month</span>
                            </div>

                            <a href="#" @click="changeSubscription(3, 2000)"
                                class="text-white bg-purple-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900">Get
                                started</a>
                        </div>
                    </div>
                </div>
            </section>

        </div>

        <bottomNavVue />
    </main>
</template>

<script>
import sidebar from '@/components/Layout/sidebar.vue'
import { Icon } from '@iconify/vue'
import breadcrumb from '@/components/Layout/breadcrumb.vue'
import bottomNavVue from '@/components/Layout/bottomNav.vue'
import { initFlowbite } from 'flowbite';

export default {
    components: { sidebar, Icon, breadcrumb, bottomNavVue, },
    mounted() {
        initFlowbite()
    },

    data() {
        return {

            paystackResponse: 'Success',
            showModal: false
        }
    },

    computed: {
        transactionReference() {
            let randomRef = "";
            let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

            for (let i = 0; i < 15; i++)
                randomRef += characters.charAt(Math.floor(Math.random() * characters.length));

            return randomRef;
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

<style scoped>
.clip-half {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
    transform: rotate(135deg);
}
</style>