<template>

    <div class="head" ref="container">
        <div class="first">
            <!--    Sidebar  -->
            <div class="sidebar">
                <sidebar />
            </div>

            <div class="p-4 sm:ml-72 mt-20 sm:mx-5">
                <!--Breadcrumb-->
                <div class="breadcrumbs">
                    <div class="navigation">
                        <breadcrumb class="pt-8" />
                    </div>
                </div>

                <div class="flex justify-between h-auto items-center">
                    <div class="py-10">
                        <h1 class="text-gray-900 font-semibold text-3xl pb-1">Add Funds</h1>
                        <p class="text-gray-700">Get to deposit money in advance</p>
                    </div>

                    <div class="icon shadow rounded-full">
                        <Icon icon="gridicons:plans" width="60px" height="60px"
                            class="bg-white rounded-full p-2 text-purple-600" />
                    </div>
                </div>
                <div class="md:grid md:grid-cols-3  md:gap-32">
                    <div class="md:col-span-2 ">
                        <div class="grid md:gap-4 mb-4">

                            <!--     Wallet Section       -->
                            <indexVue />

                        </div>

                        <h1 class="text-gray-500 text-lg py-10 py-5">Overview</h1>
                        <div class="grid grid-cols-2 gap-4 mb-4 mt-0">
                            <div
                                class="sm:flex gap-4 sm:gap-1 md:gap-4 p-5 justify-start items-center sm:h-24 rounded-lg shadow bg-white dark:bg-gray-800">

                                <Icon icon="ic:baseline-paid" class="text-purple-700  hidden sm:block mx-auto md:mx-0"
                                    width="70px" height="70px" />
                                <div class="text-center md:text-left">
                                    <h1 class="text-purple-700 sm:text-4xl text-6xl">0</h1>
                                    <p class="md:text-lg text-sm text-gray-700 dark:text-gray-500">WEEKS PAID</p>
                                </div>
                            </div>
                            <div
                                class="relative sm:flex gap-4 p-5 justify-start items-center  sm:h-24 rounded-lg shadow bg-white dark:bg-gray-800">

                                <Icon icon="mdi:receipt-text-pending"
                                    class="text-purple-700 hidden sm:block mx-auto md:mx-0" width="70px"
                                    height="70px" />
                                <div class="text-center md:text-left">
                                    <h1 class="text-purple-700  sm:text-4xl text-6xl">0</h1>
                                    <p class="md:text-lg text-sm text-gray-700  dark:text-gray-500">PENDING FEE</p>
                                </div>
                            </div>

                        </div>




                        <div class="bg-white rounded border border-gray-200 mt-10">
                            <h1 class="text-sm p-1 px-2 text-white font-semibold bg-gray-400 mx-0">Add money</h1>
                            <div class="grid grid-cols-1 md:grid-cols-2">
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

                        <history />
                    </div>



                    <div class="w-full md:block col md:ixed mx-auto right-10 md:w-1/4">

                        <div v-if="currentPlan" class="border  rounded-lg w-full shadow bg-white h-80 w-100 p-4 mt-0">
                            <div class="flex justify-between gap-2">
                                <!-- <Icon icon="ri:live-fill" width="20px" height="20px" class="mt-1 text-blue-600" /> -->
                                <h1 class="text-sm font-semibold text-black flex">YOUR PLAN</h1>

                                <div class="flex bg-purple-600 p-1 px-2 text-white rounded text-sm gap-2"
                                    v-if="currentPlan.isPaid = true">
                                    <p>{{ countdown.days }}D</p>
                                    <p>{{ countdown.days }}H</p>
                                    <p>{{ countdown.minutes }}M</p>
                                    <p>{{ countdown.seconds }}S</p>

                                    <!-- <table>
                                        <tr>
                                            <th>D</th>
                                            <th>H</th>
                                            <th>M</th>
                                            <th>S</th>
                                        </tr>
                                        <tr>
                                            <td>{{ countdown.days }}</td>
                                            <td>{{ countdown.days }}</td>
                                            <td>{{ countdown.minutes }}</td>
                                            <td>{{ countdown.seconds }}</td>
                                        </tr>

                                       
                                    </table> -->
                                </div>
                                <div v-else>
                                    <p class="text-xs text-red-600 flex items-center gap-1"><svg
                                            xmlns="http://www.w3.org/2000/svg" width="1em" height="1em"
                                            viewBox="0 0 512 512">
                                            <path fill="none" stroke="currentColor" stroke-linecap="round"
                                                stroke-linejoin="round" stroke-width="32"
                                                d="M85.57 446.25h340.86a32 32 0 0 0 28.17-47.17L284.18 82.58c-12.09-22.44-44.27-22.44-56.36 0L57.4 399.08a32 32 0 0 0 28.17 47.17" />
                                            <path fill="none" stroke="currentColor" stroke-linecap="round"
                                                stroke-linejoin="round" stroke-width="32"
                                                d="m250.26 195.39l5.74 122l5.73-121.95a5.74 5.74 0 0 0-5.79-6h0a5.74 5.74 0 0 0-5.68 5.95" />
                                            <path fill="currentColor"
                                                d="M256 397.25a20 20 0 1 1 20-20a20 20 0 0 1-20 20" />
                                        </svg> <span>Subscription has expired.</span></p>
                                </div>
                            </div>

                            <div class="justify-center h-auto items-center ">
                                <h1 class="text-6xl font-bold text-black py-4">N{{ currentPlan.amount }}<span
                                        class="text-sm">/wk</span>
                                </h1>
                                <h1 class="text-sm text-gray-600">Weekly Subscription</h1>

                                <button class="mt-8 bg-blue-600">
                                    <router-link to="/change-plan"
                                        class="border border-white bg-purple-600 text-white text-md py-2.5 px-3 my-8">Change
                                        Plan</router-link>
                                </button>

                                <p class="text-gray-500 text-xs mt-8">Renewwal of plan is automatically deducted
                                    from wallet
                                    balance, fund wallet balance to renew</p>


                            </div>



                        </div>

                    </div>
                </div>
            </div>

            <bottomNavVue />
        </div>
    </div>

</template>

<script>
import sidebar from '@/components/Layout/sidebar.vue'
import { Icon } from '@iconify/vue'
import breadcrumb from '@/components/Layout/breadcrumb.vue'
import bottomNavVue from '@/components/Layout/bottomNav.vue'
import indexVue from '@/components/Wallet/index.vue'
import paystack from '@/components/Wallet/paystack.vue'
import { initFlowbite } from 'flowbite';
import history from '@/components/Wallet/history.vue'
import { auth, db } from '@/firebase';
import { collection, getDocs } from 'firebase/firestore';


export default {
    components: { sidebar, Icon, breadcrumb, bottomNavVue, indexVue, paystack, history },
    data() {
        return {
            currentPlan: [],
            startDate: '',
            endDate: '',
            countdown: {
                days: 0,
                hours: 0,
                minutes: 0,
                seconds: 0
            },
        }
    },

    mounted() {
        initFlowbite(),
            this.getCurrentUserData()

    },

    computed: {
        endTime() {
            return new Date(this.endDate).getTime();
        }
    },
    async created() {
        await this.getCurrentUserData();
        this.startCountdown();
    },
    methods: {

        async getCurrentUserData() {
            try {
                // Introduce a delay of 1 second before fetching user data
                await new Promise(resolve => setTimeout(resolve, 1000));

                const user = auth.currentUser;

                if (user) {
                    const querySnapshot = await getDocs(collection(db, 'Users'));
                    const userDoc = querySnapshot.docs.find(doc => doc.data().email === user.email);

                    if (userDoc.exists()) {
                        const userData = userDoc.data();
                        this.currentPlan = userData.subscriptionPlan
                        this.email = userData.email;
                        this.startDate = userData.subscriptionPlan.startDate;
                        this.endDate = userData.subscriptionPlan.endDate;
                    } else {
                        console.error('User document not found');
                    }
                } else {
                    console.error('User not authenticated');
                }
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        },


        startCountdown() {
            const calculateCountdown = () => {
                const now = new Date().getTime();
                const distance = this.endTime - now;

                if (distance > 0) {
                    this.countdown.days = Math.floor(distance / (1000 * 60 * 60 * 24));
                    this.countdown.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                    this.countdown.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                    this.countdown.seconds = Math.floor((distance % (1000 * 60)) / 1000);
                } else {
                    // Subscription has expired
                    this.countdown.days = this.countdown.hours = this.countdown.minutes = this.countdown.seconds = 0;
                }
            };

            calculateCountdown();
            setInterval(calculateCountdown, 1000);
        }
    }
}
</script>

<style scoped></style>