<template>
    <main>
        <div
            class="sm:flex sm:justify-between items-center sm:py-5 sm:p-10 p-5 sm:px-5 rounded bg-purple-700 dark:bg-gray-800">
            <div class="">
                <h1 class="text-md text-white font-medium flex h-auto items-center gap-2">Your Wallet Balance
                    <Icon icon="icon-park-outline:eyes" width="20px" v-if="showBal" height="20px"
                        @click="showBalance" />
                    <Icon icon="ion:eye-off" width="20px" height="20px" v-if="hideBal" @click="hideBalance" />
                </h1>
                <h1 class="sm:text-7xl text-5xl text-white font-bold flex h-auto items-center gap-1 py-2"
                    v-if="updatedWalletBalance !== null"><sub class="hidden md:block">&#8358;</sub><span
                        class="md:hidden">&#8358;</span>
                    <span v-if="showStars == false"> <span v-if="updatedWalletBalance !== null">{{
                        updatedWalletBalance.toLocaleString('en-us')
                    }}</span></span>
                    <span v-if="showStars == true" class="flex gap-1 py-2">
                        <Icon icon="fa:asterisk" class="text-sm sm:text-5xl" />
                        <Icon icon="fa:asterisk" class="text-sm sm:text-5xl" />
                        <Icon icon="fa:asterisk" class="text-sm sm:text-5xl" />
                        <Icon icon="fa:asterisk" class="text-sm sm:text-5xl" />
                    </span>
                </h1>

                    <div role="status" class="my-4" v-else>
                        <svg aria-hidden="true"
                            class="w-12 h-12 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                            viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                fill="currentColor" />
                            <path
                                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                fill="currentFill" />
                        </svg>
                        <span class="sr-only">Loading...</span>
                    </div>




                <div class="flex h-auto items-center gap-2">
                    <Icon icon="emojione-v1:warning" />
                    <p class="py-2 text-gray-200">All deposits are non-refundable</p>
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
import { collection, updateDoc, getDocs, } from 'firebase/firestore';
import { auth, db } from '@/firebase';
import { mapGetters, mapActions } from 'vuex';

export default {
    data() {
        return {
            email: '',
            amount: '0.00',
            showBal: true,
            hideBal: false,
            showStars: false,
            updatedWalletBalance: null
            // walletBalance: null
        }
    },

    components: {
        Icon, paystack, paystackVue
    },

    async mounted() {
        initFlowbite()
        await this.updateWallet();
    },

    created() {
        this.$store.dispatch('initAuth');
    },


    methods: {

        async updateWallet() {
            try {
                // Call the action and wait for the promise to resolve
                const result = await this.$store.dispatch('updateWalletBalanceInFirestore');

                // Assign the resolved value to updatedWalletBalance
                this.updatedWalletBalance = result;

                // You can use updatedWalletBalance as needed in your component
            } catch (error) {
                console.error('Error updating wallet balance:', error);
                // Handle the error as needed
            }
        },



        showBalance() {
            this.showBal = false
            if (this.showBal == false) {
                this.showStars = true
            }
            this.hideBal = true
        },

        hideBalance() {
            this.showBal = true

            if (this.showBal == true) {
                this.showStars = false
                this.hideBal = false
            }

        },

        balanceStatus() {

        }

    }

};

</script>

<style></style>