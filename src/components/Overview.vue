<template>
    <Carousel :items-to-show="1.5" :wrap-around="true">
        <Slide v-for="slide in 3" :key="slide">
            <div class="carousel__item text-left">
                <div class="flex items-center bg-blue-50 gap-4 p-3 mx-2  h-28 rounded-lg shadow border border-gray-300 dark:bg-gray-800">
                    <Icon icon="vaadin:academy-cap" class="text-blue-500" width="70px" height="70px" />
                    <div class="">
                        <h1 class="text-blue-500 text-4xl">10</h1>
                        <p class="text-sm text-gray-700 dark:text-gray-500">WEEKS COMPLETED</p>
                    </div>
                </div>

               
            </div>
        </Slide>

        <template #addons>
            <Navigation />
        </template>
    </Carousel>
</template>
  
<script>
import { defineComponent } from 'vue'
import { Carousel, Navigation, Slide } from 'vue3-carousel'
import { Icon } from '@iconify/vue'

import 'vue3-carousel/dist/carousel.css'

export default defineComponent({
    name: 'WrapAround',
    components: {
        Carousel,
        Slide,
        Navigation,
        Icon,
    },
})
</script>

<style  scoped>
    .carousel__item {
        margin: 5px;
    }
</style>
  