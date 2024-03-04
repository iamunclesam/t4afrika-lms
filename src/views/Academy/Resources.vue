<template>
    <main>
        <sidebar />



        <div class="p-4 sm:ml-72 mt-20 mx-5">
            <breadcrumb class="pt-8"/>
            <div class="grid md:grid-cols-3  gap-6">
                <div class="col-span-2">
                    <h1 class="text-gray-500 text-lg pt-10 pb-5">Upcoming Sessions</h1>
                    <div class="grid grid-cols-3 gap-4 mb-4 mt-0">
                        <div
                            class="flex gap-4 p-5 justify-center items-center h-24 rounded-lg shadow bg-blue-600 dark:bg-gray-800">

                            <div class="">
                                <div class="flex items-center">
                                    <div class="flex-shrink-0">
                                        <img class="w-16 h-16 rounded-full" src="@/assets/img/hero.jpeg" alt="Neil image">
                                    </div>
                                    <div class="flex-1 min-w-0 ms-4">
                                        <p class="text-sm font-medium text-white truncate dark:text-white">
                                            Intro to Tech..
                                        </p>
                                        <p class="text-xs text-white truncate dark:text-gray-400">
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
                            class="flex gap-4 p-5 justify-center items-center h-24 rounded-lg shadow bg-blue-600 dark:bg-gray-800">

                            <div class="">
                                <div class="flex items-center">
                                    <div class="flex-shrink-0">
                                        <img class="w-16 h-16 rounded-full" src="@/assets/img/hero.jpeg" alt="Neil image">
                                    </div>
                                    <div class="flex-1 min-w-0 ms-4">
                                        <p class="text-sm font-medium text-white truncate dark:text-white">
                                            Intro to Tech..
                                        </p>
                                        <p class="text-xs text-white truncate dark:text-gray-400">
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
                            class="flex gap-4 p-5 justify-center items-center h-24 rounded-lg shadow bg-blue-600 dark:bg-gray-800">

                            <div class="">
                                
                                <div class="flex items-center">
                                    <div class="flex-shrink-0">
                                        <img class="w-16 h-16 rounded-full" src="@/assets/img/hero.jpeg" alt="Neil image">
                                    </div>
                                    <div class="flex-1 min-w-0 ms-4">
                                        <p class="text-sm font-medium text-white truncate dark:text-white">
                                            Intro to Tech..
                                        </p>
                                        <p class="text-xs text-white truncate dark:text-gray-400">
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


                    <div class="grid md:grid-cols-12">

                        <div class="col-span-12">
                            <div class="flex justify-between">
                                <h1 class="text-gray-500 text-lg pt-10 pb-5">Previous Sessions (Videos, PDFs, Notes etc)
                                </h1>
                                <h1 class="text-blue-500 text-sm pt-10 pb-5">See all</h1>
                            </div>

                            <div class="flow-root">
                                <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
                                    <li @click.prevent="goToLink" class="mb-5 py-3 sm:py-3 shadow-md bg-white rounded-md px-3">
                                        <div class="relative">
                                            <div class="absolute top-0 right-4">
                                                <Icon icon="jam:padlock-open" class="text-blue-500"/>
                                            </div>
                                        </div>
                                        <div class="flex items-center">
                                            <div class="flex-shrink-0">
                                                <img class="w-28 h-28 rounded-full" src="@/assets/img/hero.jpeg"
                                                    alt="Neil image" />
                                            </div>
                                            <div class="flex-1 min-w-0 ms-4">
                                                <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                    Introduction to Forex Trading - WK-2
                                                </p>
                                                <p class="text-xs text-gray-500 truncate dark:text-gray-400">
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi nam
                                                    modi
                                                    necessitatibus repellendus numquam!
                                                </p>
                                                <div class="duration py-3 flex justify-between">
                                                    <div class="flex gap-1">
                                                        <Icon icon="icon-park:time" width="20px" height="15px" />
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
                                                class="inline-flex gap-1 items-center text-base font-medium text-white text-xs bg-blue-500 rounded-full p-3 ml-4 text-gray-900 dark:text-white">
                                                <Icon icon="solar:play-bold" width="20px" height="20px" />

                                            </div>
                                        </div>
                                    </li>

                                    <li class="py-3 sm:py-3 shadow-md bg-white rounded-md px-3">
                                        <div class="relative">
                                            <div class="absolute top-0 right-4">
                                                <Icon icon="jam:padlock-open" class="text-blue-500"/>
                                            </div>
                                        </div>
                                        <div class="flex items-center">
                                            <div class="flex-shrink-0">
                                                <img class="w-28 h-28 rounded-full" src="@/assets/img/hero.jpeg"
                                                    alt="Neil image" />
                                            </div>
                                            <div class="flex-1 min-w-0 ms-4">
                                                <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                    Introduction to Forex Trading - WK-1
                                                </p>
                                                <p class="text-xs text-gray-500 truncate dark:text-gray-400">
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi nam
                                                    modi
                                                    necessitatibus repellendus numquam!
                                                </p>
                                                <div class="duration py-3 flex justify-between">
                                                    <div class="flex gap-1">
                                                        <Icon icon="icon-park:time" width="20px" height="15px" />
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
                                                class="inline-flex gap-1 items-center text-base font-medium text-white text-xs bg-blue-500 rounded-full p-3 ml-4 text-gray-900 dark:text-white">
                                                <Icon icon="solar:play-bold" width="20px" height="20px" />

                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>


                    </div>


                </div>



                <div class="col fixed right-10">

                    <div class="border h-48 rounded-lg shadow bg-white p-4 mt-4">
                        <div class="flex h-auto items-center gap-2">
                            <Icon icon="ri:live-fill" width="20px" height="20px" class=" text-blue-600" />
                            <h1 class="text-md text-blue-500 flex">LIVE SESSIONS</h1>
                        </div>

                        <div class="flex justify-center h-full items-center ">
                            <h1 class="text-sm text-gray-300">No live session yet! Check back soon</h1>
                        </div>
                    </div>

                    <div class="border h-full rounded-lg shadow bg-white p-4 mt-4">
                        <div class="flex gap-2">
                            <h1 class="text-md text-blue-500 flex">NOTIFICATIONS</h1>
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

export default {
    components: { sidebar, Icon, breadcrumb },
    methods: {
        goToLink() {
            this.$router.push('/session-details')
        }
    }
}
</script>

<style></style>