<template>
    <main>
        <sidebar />



        <div class="p-4 sm:ml-72 mt-20 sm:mx-5">
            <breadcrumb class="pt-8" />


            <div class="task">

                <div :class="{ 'grid md:grid-cols-2 gap-4': isColumn, 'col-span-1': !isColumn }">
                    <div class="col">

                        <div class="flex mt-20 h-96 items-center justify-center">
                            <div class="">
                                <img src="@/assets/img/course-bg.jpg" class="border border-purple-700 p-1 w-48 h-48 rounded-full object-cover mx-auto -mt-0" alt="" />
                                <h1 class="py-6 text-4xl font-semibold text-gray-900 text-center">The first task</h1>
                                <p class="text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste quae adipisci ad?</p>
                                <button @click="changeCol" class="bg-purple-600 rounded mx-auto my-6 flex justify-center text-white py-2 px-3">Start Task</button>
                            </div>
                        </div>
                    </div>
                    <div v-show="isColumn" class="col h-full overflow-y-scroll bg-purple-200">
                    
                        <Quiz />
                    
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
import upcomingSession from '@/components/Resources/upcomingSession.vue'
import Quiz from '@/components/Quiz.vue'

export default {

    data() {
        return {
            isColumn: false
        }
    },

    components: { sidebar, Icon, breadcrumb, upcomingSession, Quiz },
    methods: {
        goToLink() {
            this.$router.push('/session-details')
        },

        changeCol() {
            this.isColumn = true;
        }
    }
}
</script>;

<style></style>