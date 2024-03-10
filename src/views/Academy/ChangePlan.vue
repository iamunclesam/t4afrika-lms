<template>
    <main>
        <sidebar />



        <div class="p-4 sm:ml-72 mt-20 sm:mx-5">
            <breadcrumb class="mt-5 sm:mt-5" />



            <section class="dark:bg-gray-900">
                <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                    <div class="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
                        <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Designed
                            for business teams like yours</h2>
                        <p class="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">Here at Flowbite we focus
                            on markets where technology, innovation, and capital can unlock long-term value and drive
                            economic growth.</p>
                    </div>
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
                         
                            <a href="#"
                                class="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900">Get
                                started</a>
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
                          
                            <a href="#"
                                class="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900">Get
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
                          
                            <a href="#"
                                class="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900">Get
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
import indexVue from '@/components/Wallet/index.vue'
import paystack from '@/components/Wallet/paystack.vue'
import { initFlowbite } from 'flowbite';


export default {
    components: { sidebar, Icon, breadcrumb, bottomNavVue, indexVue, paystack },
    mounted() {
        initFlowbite()
    }
}
</script>

<style scoped>
.clip-half {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
    transform: rotate(135deg);
}
</style>