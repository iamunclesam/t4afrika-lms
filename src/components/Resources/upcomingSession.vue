<template>
   <main>
    <Carousel :items-to-show="1.5" :wrap-around="true">
        <Slide v-for="slide in 3" :key="slide">
            <div class="carousel__item">
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
        </Slide>

        <template #addons>
            <Navigation />
        </template>
    </Carousel>
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
})
</script>