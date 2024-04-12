<template>
    <main>

        <div class="hidden md:grid grid-cols-3 gap-4 mb-4 mt-0">

            <div
                class="flex gap-4 p-3 justify-center border border-gray-100 items-center h-20 rounded-lg shadow bg-white dark:bg-gray-800">

                <div class="">
                    <div class="flex items-center">
                        <div class="flex-shrink-0">
                            <img class="w-12 h-12 rounded-full object-cover" src="@/assets/img/course-bg.jpg"
                                alt="Neil image">
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
                            <img class="w-12 h-12 rounded-full object-cover" src="@/assets/img/course-bg.jpg"
                                alt="Neil image">
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
                            <img class="w-12 h-12 rounded-full object-cover" src="@/assets/img/course-bg.jpg"
                                alt="Neil image">
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
            <Carousel :items-to-show="2" :wrap-around="true">
            <Slide v-for="slide in 3" :key="slide">
                <div class="carousel__item mx-2">
                    <div
                        class="flex gap-4 p-5 mx-2 justify-center items-center h-24 rounded-lg shadow bg-purple-700 dark:bg-gray-800">

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