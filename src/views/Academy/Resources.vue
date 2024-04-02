<template>
    <main>
        <sidebar />



        <div class="p-4 sm:ml-72 mt-20 sm:mx-5">
            <breadcrumb class="pt-8"/>
            <div class="md:grid md:grid-cols-3  gap-6">
                <div class="md:col-span-2">
                    <h1 class="text-gray-500 text-lg pt-10 pb-5">Upcoming Sessions</h1>
                    <div class="hidden md:grid grid-cols-3 gap-4 mb-4 mt-0">

                        <div
                            class="flex gap-4 p-3 justify-center border border-gray-100 items-center h-20 rounded-lg shadow bg-white dark:bg-gray-800">

                            <div class="">
                                <div class="flex items-center">
                                    <div class="flex-shrink-0">
                                        <img class="w-12 h-12 rounded-full object-cover" src="@/assets/img/course-bg.jpg" alt="Neil image">
                                    </div>
                                    <div class="flex-1 min-w-0 ms-4">
                                        <p class="text-xs font-semibold font-medium text-gray-900 truncate dark:text-white">
                                            Intro to Tech..
                                        </p>
                                        <p class="text-xs text-gray-900 truncate dark:text-gray-400">
                                            Lorem, ipsum dolor.
                                        </p>
                                    </div>
                                    <!-- <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        $320
                    </div> -->
                                </div>

                            </div>
                        </div>
                        <div
                            class="flex gap-4 p-3 justify-center border border-gray-100 items-center h-20 rounded-lg shadow bg-white dark:bg-gray-800">

                            <div class="">
                                <div class="flex items-center">
                                    <div class="flex-shrink-0">
                                        <img class="w-12 h-12 rounded-full object-cover" src="@/assets/img/course-bg.jpg" alt="Neil image">
                                    </div>
                                    <div class="flex-1 min-w-0 ms-4">
                                        <p class="text-xs font-semibold font-medium text-gray-900 truncate dark:text-white">
                                            Intro to Tech..
                                        </p>
                                        <p class="text-xs text-gray-900 truncate dark:text-gray-400">
                                            Lorem, ipsum dolor.
                                        </p>
                                    </div>
                                    <!-- <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        $320
                    </div> -->
                                </div>

                            </div>
                        </div>

                        <div
                            class="flex gap-4 p-3 justify-center border border-gray-100 items-center h-20 rounded-lg shadow bg-white dark:bg-gray-800">

                            <div class="">
                                <div class="flex items-center"> 
                                    <div class="flex-shrink-0">
                                        <img class="w-12 h-12 rounded-full object-cover" src="@/assets/img/course-bg.jpg" alt="Neil image">
                                    </div>
                                    <div class="flex-1 min-w-0 ms-4">
                                        <p class="text-xs font-semibold font-medium text-gray-900 truncate dark:text-white">
                                            Intro to Tech..
                                        </p>
                                        <p class="text-xs text-gray-900 truncate dark:text-gray-400">
                                            Lorem, ipsum dolor.
                                        </p>
                                    </div>
                                    <!-- <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        $320
                    </div> -->
                                </div>

                            </div>
                        </div>

                    </div>

                    <div class="sm:hidden">
                        <upcomingSession />
                    </div>

                    


                    <div class="grid md:grid-cols-12">

                        <div class="col-span-12">
                            <div class="flex justify-between">
                                <h1 class="text-gray-500 text-lg pt-10 pb-5">Previous Sessions
                                </h1>
                                <h1 class="text-purple-700 text-sm pt-10 pb-5">See all</h1>
                            </div>

                            <div class="flow-root">
                                <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
                                    <li @click.prevent="goToLink" class="mb-5 py-3 sm:py-3 shadow-md bg-white rounded-md px-3">
                                        <div class="relative">
                                            <div class="absolute top-0 right-2">
                                                <Icon icon="jam:padlock-open" class="text-purple-700"/>
                                            </div>
                                        </div>
                                        <div class="flex items-center">
                                            <div class="flex-shrink-0">
                                                <img class="md:w-22 md:h-22 h-20 w-20 rounded-md object-cover" src="@/assets/img/course-bg.jpg"
                                                    alt="Neil image" />
                                            </div>
                                            <div class="flex-1 min-w-0 ms-4">
                                                <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                    Introduction to Forex Trading - WK-2
                                                </p>
                                                <p class="text-xs w-28 text-gray-500 truncate dark:text-gray-400">
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi nam
                                                    modi
                                                    necessitatibus repellendus numquam!
                                                </p>
                                                <div class="duration py-3 flex justify-between">
                                                    <div class="flex gap-1">
                                                        <Icon icon="ri:time-line" class="text-sm text-purple-700"/>     
                                                        <p class="text-xs text-gray-500 font-medium">45m 30s</p>
                                                    </div>

                                                    <div class="flex gap-1">
                                                        <Icon icon="clarity:date-line" width="16px" height="16px"
                                                            class="text-gray-500" />
                                                        <p class="text-xs text-gray-500 font-medium">Yesterday</p>
                                                    </div>


                                                </div>
                                            </div>
                                            <div
                                                class="inline-flex gap-1 items-center text-base font-medium text-white text-xs bg-purple-700 rounded-full p-2 md:p-2 ml-4 text-gray-900 dark:text-white">
                                                <Icon icon="solar:play-bold" class="md:text-xl text-sm"/>
                                            </div>
                                        </div>
                                    </li>

                                  
                                </ul>
                            </div>
                            
                        </div>


                    </div>


                </div>



                <div class="col md:block hidden fixed right-10">

                    <div class="border h-48 rounded-lg shadow bg-purple-700 p-4 mt-4">
                        <div class="flex h-auto items-center gap-2">
                            <Icon icon="ri:live-fill" width="20px" height="20px" class=" text-white" />
                            <h1 class="text-md text-white flex">LIVE SESSIONS</h1>
                        </div>

                        <div class="flex justify-center h-full items-center ">
                            <h1 class="text-sm text-gray-300">No live session yet! Check back soon</h1>
                        </div>
                    </div>

                    <div class="border h-full rounded-lg shadow bg-white p-4 mt-4">
                        <div class="flex gap-2">
                            <h1 class="text-md text-purple-700 flex">NOTIFICATIONS</h1>
                        </div>

                        <!-- <div class="flex justify-center h-full items-center ">
                            <h1 class="text-sm text-gray-300">No live session yet! Check back soon</h1>
                        </div> -->
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
    </main>
</template>

<script>
import sidebar from '@/components/Layout/sidebar.vue'
import { Icon } from '@iconify/vue'
import breadcrumb from '@/components/Layout/breadcrumb.vue'
import upcomingSession from '@/components/Resources/upcomingSession.vue'

export default {
    components: { sidebar, Icon, breadcrumb, upcomingSession },
    methods: {
        goToLink() {
            this.$router.push('/session-details')
        }
    }
}
</script>;

<style></style>