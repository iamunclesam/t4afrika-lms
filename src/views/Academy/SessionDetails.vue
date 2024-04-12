<template>
    <main>
        <sidebar />
        <div class="p-4 sm:ml-72 mt-20">
            <breadcrumb class="pt-8" />
            <div class="video-frame my-6">
                <h1
                    class="pb-8 text-xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-3xl dark:text-white">
                    Lesson 1: Introduction To Forex Trading
                </h1>
                <iframe class="w-full h-96 rounded-lg" src="https://www.youtube.com/embed/tgbNymZ7vqY">
                </iframe>
            </div>

            <h1 class="text-lg text-gray-500 mb-6">Session Overview</h1>
            <div class="grid md:grid-cols-3  gap-6">

                <div class="md:col-span-2">
                    <div class="content md:px-8 px-4 rounded-md bg-white py-4">


                        <div class="about mt-8">
                            <h1 class="text-xl font-semibold text-gray-900 mb-4">About this session</h1>
                            <p class="text-gray-700 text-sm">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe nesciunt esse ipsa
                                exercitationem, nulla porro culpa itaque nisi nostrum optio nemo ratione? Ipsum
                                exercitationem vel non ducimus iusto animi libero!
                            </p>
                        </div>

                        <div class="about my-8">
                            <h1 class="text-xl font-semibold text-gray-900 mb-4">What you'll learn</h1>
                            <div class="grid md:grid-cols-2">
                                <div class="flex mb-4 gap-3 items-center h-auto">
                                    <Icon icon="lets-icons:check-fill" class="text-3xl text-purple-600" />
                                    <h1 class="text-gray-500 text-xs">Lorem ipsum dolor sit amet, consectetur
                                        adipisicing
                                        elit. Perferendis, enim odit!</h1>
                                </div>

                                <div class="flex mb-4 gap-3 items-center h-auto">
                                    <Icon icon="lets-icons:check-fill" class="text-3xl text-purple-600" />
                                    <h1 class="text-gray-500 text-xs">Lorem ipsum dolor sit amet, consectetur
                                        adipisicing
                                        elit. Perferendis, enim odit!</h1>
                                </div>

                                <div class="flex mb-4 gap-3 items-center h-auto">
                                    <Icon icon="lets-icons:check-fill" class="text-3xl text-purple-600" />
                                    <h1 class="text-gray-500 text-xs">Lorem ipsum dolor sit amet, consectetur
                                        adipisicing
                                        elit. Perferendis, enim odit!</h1>
                                </div>

                                <div class="flex mb-4 gap-3 items-center h-auto">
                                    <Icon icon="lets-icons:check-fill" class="text-3xl text-purple-600" />
                                    <h1 class="text-gray-500 text-xs">Lorem ipsum dolor sit amet, consectetur
                                        adipisicing
                                        elit. Perferendis, enim odit!</h1>
                                </div>
                                <div class="flex mb-4 gap-3 items-center h-auto">
                                    <Icon icon="lets-icons:check-fill" class="text-3xl text-purple-600" />
                                    <h1 class="text-gray-500 text-xs">Lorem ipsum dolor sit amet, consectetur
                                        adipisicing
                                        elit. Perferendis, enim odit!</h1>
                                </div>

                                <div class="flex mb-4 gap-3 items-center h-auto">
                                    <Icon icon="lets-icons:check-fill" class="text-3xl text-purple-600" />
                                    <h1 class="text-gray-500 text-xs">Lorem ipsum dolor sit amet, consectetur
                                        adipisicing
                                        elit. Perferendis, enim odit!</h1>
                                </div>
                            </div>
                        </div>

                        <div class="about mt-8">
                            <h1 class="text-xl font-semibold text-gray-900 mb-4">Images</h1>
                         

                            <Carousel :items-to-show="2" :wrap-around="true">
                                <Slide v-for="slide in 3" :key="slide">
                                    <div class="carousel__item mx-2">
                                        <img class="rounded w-full" src="@/assets/img/course-bg.jpg" alt="" />
                                    </div>
                                </Slide>

                                <template #addons>
                                    <Navigation />
                                </template>
                            </Carousel>
                        </div>


                    </div>

                </div>



                <div class="md:col-span-1">


                    <div
                        class="max-w-sm bg-white border border-gray-200 rounded-lg p-4 shadow dark:bg-gray-800 dark:border-gray-700">

                        <TaskList />


                        <div class="">

                            <!-- <a href="#"
                                class="inline-flex justify-center gap-2 items-center px-3 py-2.5 w-full text-sm font-medium text-right text-white bg-purple-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Star
                                <Icon icon="ph:star" class="text-white text-xl" />

                            </a> -->

                            <h5 class="mt-8 text-md font-medium tracking-tight text-gray-700 dark:text-white">Session
                                Materials</h5>

                            <div class="pdf my-6">
                                <button
                                    class="shadow border border-gray-300 flex h-auto gap-3 items-center justify-center px-3 py-2 5 text-gray-800 text-sm rounded text-center w-full">Download
                                    PDF
                                    <Icon icon="material-symbols:download" class="text-blue-600" width="20" />
                                </button>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    </main>
</template>

<script>
import sidebar from '@/components/Layout/sidebar.vue'
import { Icon } from '@iconify/vue'
import breadcrumb from '@/components/Layout/breadcrumb.vue'
import TaskList from '@/components/Task/TaskList.vue'
import { defineComponent } from 'vue'
import { Carousel, Navigation, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'


export default defineComponent({
    components: {
        sidebar, Icon, breadcrumb, TaskList, Carousel,
        Slide,
        Navigation,
    }
})
</script>

<style scoped>
ul {
    list-style-type: disc;
}
</style>