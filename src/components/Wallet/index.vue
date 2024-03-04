<template>
    <main>
        <div
            class="sm:flex sm:justify-between items-center sm:h-48 sm:p-10 p-5 sm:px-5 rounded bg-blue-500 dark:bg-gray-800">
            <div class="pt-8">
                <h1 class="text-md text-white font-medium flex h-auto items-center gap-2">Your Wallet Balance
                    <Icon icon="icon-park-outline:eyes" width="20px" height="20px" />
                </h1>
                <h1 class="sm:text-7xl text-5xl text-white font-bold py-2"><span class="hidden sm:block">NGN</span><span class="md:hidden">N</span>.20,000.00</h1>
                <div class="flex h-auto items-center gap-2">
                    <Icon icon="emojione-v1:warning" />
                    <p class="py-2 text-gray-200">All deposits are non-refundable</p>
                </div>
                <div class="gap-2 inline-flex my-3">

                </div>
            </div>

        </div>



    </main>
</template>

<script>
import { Icon } from '@iconify/vue'
import paystack from "vue3-paystack";
import paystackVue from './paystack.vue';
import { initFlowbite } from 'flowbite';


export default {
    data() {
        return {
            email: '',
            amount: 0
        }
    },

    components: {
        Icon, paystack, paystackVue
    },

    mounted() {
        initFlowbite()
    },

};

</script>

<style></style>