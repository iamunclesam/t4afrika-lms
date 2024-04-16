<template>
    <main>

        <div class="hidden md:grid grid-cols-2 gap-4 mb-4 mt-0">

            <div
                class="flex gap-4 p-3 justify-center border border-gray-100 items-center rounded-lg shadow bg-white dark:bg-gray-800">

                <div class="py-0">
                    <div class="flex items-center">
                        <div class="flex">
                            <img class="w-16 h-16 rounded-lg object-cover" src="@/assets/img/course-bg.jpg"
                                alt="Neil image">
                        </div>
                        <div class="flex-1 min-w-0 ms-4">
                            <p class="text-lg font-semibold font-medium text-gray-900 line-clamp-2 dark:text-white">
                                Welcome to Technical Analysis
                            </p>

                        </div>


                    </div>

                    <div class="grid grid-cols-2 gap-8 mt-4 items-center">
                        <p class="text-xs text-gray-900 line-clamp-2 dark:text-gray-400">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>
                        <div class="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                            <div class="bg-purple-600 h-2 rounded-full dark:bg-purple-500" style="width: 45%"></div>
                        </div>
                    </div>

                </div>
            </div>

            <div
                class="flex gap-4 p-3 justify-center border border-gray-100 items-center rounded-lg shadow bg-white dark:bg-gray-800">

                <div class="py-0">
                    <div class="flex items-center">
                        <div class="flex">
                            <img class="w-16 h-16 rounded-lg object-cover" src="@/assets/img/course-bg.jpg"
                                alt="Neil image">
                        </div>
                        <div class="flex-1 min-w-0 ms-4">
                            <p class="text-lg font-semibold font-medium text-gray-900 line-clamp-2 dark:text-white">
                                Welcome to Technical Analysis
                            </p>

                        </div>


                    </div>

                    <div class="grid grid-cols-2 gap-8 mt-4 items-center">
                        <p class="text-xs text-gray-900 line-clamp-2 dark:text-gray-400">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>
                        <div class="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                            <div class="bg-purple-600 h-2 rounded-full dark:bg-purple-500" style="width: 45%"></div>
                        </div>
                    </div>

                </div>
            </div>

        </div>

        <div class="sm:hidden">
            <Carousel :items-to-show="1" :wrap-around="true">
                <Slide v-for="slide in 3" :key="slide">
                    <div class="carousel__item mx-2">
                        <div
                            class="flex gap-4 p-3 justify-center border border-gray-100 items-center rounded-lg shadow bg-white dark:bg-gray-800">

                            <div class="py-0">
                                <div class="flex items-center">
                                    <div class="flex">
                                        <img class="w-16 h-16 rounded-lg object-cover" src="@/assets/img/course-bg.jpg"
                                            alt="Neil image">
                                    </div>
                                    <div class="flex-1 min-w-0 ms-4">
                                        <p
                                            class="text-md text-left font-semibold font-medium text-gray-900 line-clamp-2 dark:text-white">
                                            Welcome to Technical Analysis
                                        </p>

                                    </div>


                                </div>

                                <div class="grid grid-cols-2 gap-8 mt-4 items-center">
                                    <p class="text-xs text-left text-gray-900 line-clamp-2 dark:text-gray-400">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    </p>
                                    <div class="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                                        <div class="bg-purple-600 h-2 rounded-full dark:bg-purple-500"
                                            style="width: 45%"></div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </Slide>

                <template #addons>
                    <Navigation />
                </template>
            </Carousel>
        </div>
    </main>
</template>

<script>
import { defineComponent } from 'vue'
import { Carousel, Navigation, Slide } from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'

export default defineComponent({
    name: 'WrapAround',
    components: {
        Carousel,
        Slide,
        Navigation,
    },
    methods: {
        goToLink() {
            this.$router.push('/session-details')
        }
    }
})
</script>