<template>
    <main>
        <sidebar />



        <div class="p-4 sm:ml-72 mt-20 sm:mx-5">
            <breadcrumb class="mt-5 sm:mt-5" />

            <div class="flex justify-between h-auto items-center">
                <div class="py-10">
                    <h1 class="text-gray-900 font-semibold text-3xl pb-1">Add Funds</h1>
                    <p class="text-gray-700">Get to deposit money in advance</p>
                </div>

                <div class="icon shadow rounded-full">
                    <Icon icon="gridicons:plans" width="60px" height="60px"
                        class="bg-white rounded-full p-2 text-blue-600" />
                </div>
            </div>
            <div class="md:grid md:grid-cols-3  md:gap-6 ">
                <div class="md:col-span-2 ">
                    <div class="grid md:gap-4 mb-4">

                        <!--     Wallet Section       -->
                        <indexVue />

                    </div>

                    <h1 class="text-gray-500 text-lg py-10 py-5">Overview</h1>
                    <div class="grid grid-cols-2 gap-4 mb-4 mt-0">
                        <div
                            class="sm:flex gap-4 sm:gap-1 md:gap-4 p-5 justify-start items-center sm:h-24 rounded-lg shadow bg-white dark:bg-gray-800">

                            <Icon icon="ic:baseline-paid" class="text-blue-500 mx-auto md:mx-0" width="70px"
                                height="70px" />
                            <div class="text-center md:text-left">
                                <h1 class="text-blue-500 sm:text-4xl text-2xl">0</h1>
                                <p class="md:text-lg text-sm text-gray-700 dark:text-gray-500">WEEKS PAID</p>
                            </div>
                        </div>
                        <div
                            class="relative sm:flex gap-4 p-5 justify-start items-center  sm:h-24 rounded-lg shadow bg-white dark:bg-gray-800">

                            <Icon icon="mdi:receipt-text-pending" class="text-blue-500 mx-auto md:mx-0" width="70px"
                                height="70px" />
                            <div class="text-center md:text-left">
                                <h1 class="text-blue-500 sm:text-4xl text-2xl">0</h1>
                                <p class="md:text-lg text-sm text-gray-700  dark:text-gray-500">PENDING FEE</p>
                            </div>
                        </div>

                    </div>




                    <div class="bg-white rounded border border-gray-200 mt-10">
                        <h1 class="text-sm p-1 px-2 text-white font-semibold bg-gray-400 mx-0">Add money</h1>
                        <div class="grid grid-cols md:grid-cols-2">
                            <div class="col border-r border-gray-200">
                                <paystack />
                            </div>

                            <div class="col">


                                <ul
                                    class="w-full h-full text-sm font-medium text-gray-900 bg-white border border-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                                    <li
                                        class="w-full flex justify-between h-auto items-center px-4 py-4 border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                                        <span>Minimum Deposit:</span>
                                        <span class="text-gray-700 font-bold">NGN.100.00</span>
                                    </li>
                                    <li
                                        class="w-full flex justify-between h-auto items-center px-4 py-4 border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                                        <span>Minimum Balance:</span>
                                        <span class="text-gray-700 font-bold">NGN.500.00</span>
                                    </li>
                                    <li
                                        class="w-full flex justify-between h-auto items-center px-4 py-4 border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                                        <span>Maximum Deposit:</span>
                                        <span class="text-gray-700 font-bold">NGN.10,000.00</span>
                                    </li>
                                    <li
                                        class="w-full flex justify-between h-auto items-center px-4 py-4 border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                                        <span>Maximum Deposit:</span>
                                        <span class="text-gray-700 font-bold">NGN.20,000.00</span>
                                    </li>
                                </ul>

                            </div>

                        </div>
                    </div>

                    <h1 class="text-gray-500 text-lg py-10 pb-5">Order History</h1>

                    <section class="dark:bg-gray-900 ">
                        <div class="mx-auto max-w-screen-xl lg:px-0">
                            <!-- Start coding here -->
                            <div class="bg-white dark:bg-gray-800 relative md:shadow-md sm:rounded-lg overflow-hidden">

                                <div class="overflow-x-auto">
                                    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                        <thead
                                            class="text-xs text-gray-700 uppercase font-medium bg-gray-100 py-4 dark:bg-gray-700 dark:text-gray-400">
                                            <tr>
                                                <th scope="col" class="px-4 py-3">Amount</th>

                                                <th scope="col" class="px-4 py-3">Transaction id</th>
                                                <th scope="col" class="px-4 py-3">Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>

                                            <tr class="border-b dark:border-gray-700">
                                                <th scope="row"
                                                    class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    N500</th>
                                                <td class="px-4 py-3">123ABCD001XYZ</td>
                                                <td class="px-4 py-3 text-green-400">Success</td>


                                            </tr>


                                        </tbody>
                                    </table>
                                </div>
                                <nav class="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-4"
                                    aria-label="Table navigation">
                                    <span class="text-sm font-normal text-gray-500 dark:text-gray-400">
                                        Showing
                                        <span class="font-semibold text-gray-900 dark:text-white">1-10</span>
                                        of
                                        <span class="font-semibold text-gray-900 dark:text-white">1000</span>
                                    </span>
                                    <ul class="inline-flex items-stretch -space-x-px">
                                        <li>
                                            <a href="#"
                                                class="flex items-center justify-center h-full py-1.5 px-3 ml-0 text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                                <span class="sr-only">Previous</span>
                                                <svg class="w-5 h-5" aria-hidden="true" fill="currentColor"
                                                    viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd"
                                                        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                                        clip-rule="evenodd" />
                                                </svg>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#"
                                                class="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
                                        </li>
                                        <li>
                                            <a href="#"
                                                class="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
                                        </li>
                                        <li>
                                            <a href="#" aria-current="page"
                                                class="flex items-center justify-center text-sm z-10 py-2 px-3 leading-tight text-primary-600 bg-primary-50 border border-primary-300 hover:bg-primary-100 hover:text-primary-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
                                        </li>
                                        <li>
                                            <a href="#"
                                                class="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">...</a>
                                        </li>
                                        <li>
                                            <a href="#"
                                                class="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">100</a>
                                        </li>
                                        <li>
                                            <a href="#"
                                                class="flex items-center justify-center h-full py-1.5 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                                <span class="sr-only">Next</span>
                                                <svg class="w-5 h-5" aria-hidden="true" fill="currentColor"
                                                    viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd"
                                                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                                        clip-rule="evenodd" />
                                                </svg>
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </section>
                </div>



                <div class="hidden md:block col fixed right-10 w-1/5">

                    <div class="border  rounded-lg w-full shadow bg-white h-80 w-100 p-4 mt-0">
                        <div class="flex gap-2">
                            <!-- <Icon icon="ri:live-fill" width="20px" height="20px" class="mt-1 text-blue-600" /> -->
                            <h1 class="text-md font-semibold text-black flex">YOUR PLAN</h1>
                        </div>

                        <div class="justify-center h-auto items-center ">
                            <h1 class="text-6xl font-bold text-black py-4">N500<span class="text-sm">/wk</span></h1>
                            <h1 class="text-sm text-gray-600">Weekly Subscription</h1>
                           
                            <button class="mt-8 bg-blue-600">
                                <router-link to="/change-plan" class="border border-white bg-blue-600 text-white text-md py-2.5 px-3 my-8">Change Plan</router-link>
                            </button>

                            <p class="text-gray-500 text-xs mt-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure facere, vel omnis facilis error consequuntur?</p>
                         

                        </div>


                        
                    </div>






                    <!-- <div class="flow-root">
                        <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
                            <li class="py-3 sm:py-4">
                                <div class="flex items-center">
                                    <div class="flex-shrink-0">
                                        <img class="w-20 h-20 rounded-full" src="@/assets/img/hero.jpeg" alt="Neil image">
                                    </div>
                                    <div class="flex-1 min-w-0 ms-4">
                                        <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                            Intro to Tech..
                                        </p>
                                        <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                                            Lorem, ipsum dolor.
                                        </p>
                                    </div>
                                  
                                </div>
                            </li>
                        </ul>
                    </div> -->
                </div>
            </div>
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