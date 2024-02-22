<template>
    <main>
        <div class="sm:flex sm:justify-between items-center sm:h-48 sm:p-10 p-4 rounded bg-blue-500 dark:bg-gray-800">
            <div class="">
                <h1 class="text-md text-white font-medium flex h-auto items-center gap-2">Wallet Balance
                    <Icon icon="icon-park-outline:eyes" width="20px" height="20px" />
                </h1>
                <h1 class="sm:text-6xl text-5xl text-white font-bold py-2">N1000.00</h1>
                <div class="gap-2 inline-flex my-3">
                    <button class="bg-white px-2 sm:py-1 py-2 rounded-md flex items-center h-auto gap-1">
                        <!-- <Icon icon="majesticons:money-plus-line" width="20px" height="20px" class="text-blue-600" />
                        <span class="text-blue-600">Add money</span> -->
                        <paystackVue :firstName="firstName" :lastName="lastName"/>
                    </button>

                    <button class="bg-white px-2 sm:py-1 py-2 rounded-md flex items-center h-auto gap-1">
                        <Icon icon="uil:money-insert" height="20px" class="text-blue-600" />
                        <span class="text-blue-600">Withdraw</span>
                    </button>

                    <!-- <Icon icon="icon-park:file-withdrawal-one" width="40px" height="40px" class="text-blue-600 bg-white rounded p-2" /> -->

                </div>
            </div>

            <!-- <div class="img">
            <img src="@/assets/img/hero-bg.png" class="w-96 -mt-5" alt="" />
          </div> -->
        </div>


        
    </main>
</template>

<script>
import { Icon } from '@iconify/vue'
import paystack from "vue3-paystack";
import paystackVue from './paystack.vue';


export default {
    components: {
        Icon, paystack, paystackVue
    },


    data() {
        return {
            firstName:'',
            lastName: '',
        }
    },

};

</script>

<style></style>