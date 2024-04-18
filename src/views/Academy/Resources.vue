<template>
    <main>

        <!--    Sidebar  -->
        <div class="sidebar" style="background-color: #6C2BD9 !important;">
            <sidebar class="bg-purple-600 z-30"/>
        </div>

        <!--  Content  -->
        <div class="p-4 sm:ml-72 mt-20 sm:mx-5">
            <!--Breadcrumb-->
            <div class="breadcrumbs">
                <div class="navigation">
                    <breadcrumb class="pt-4" />
                </div>
            </div>

            <h1 class="text-5xl text-extrabold pt-8 text-dark-700">Cohort 2.0</h1>

            <div class="md:grid md:grid-cols-3  gap-6">
                <div class="md:col-span-2">

                    <!--Upcoming session Section-->
                    <h1 class="text-gray-700 text-lg pt-10 pb-5">Upcoming Sessions</h1>
                    <div class="upcoming-session">
                        <upcomingSession />
                    </div>
                    <div class="grid md:grid-cols-12">

                        <div class="col-span-12">
                            <div class="flex justify-between">
                                <!--Previous Session Section -->
                                <h1 class="text-gray-700 text-lg pt-10 pb-5">New Sessions
                                </h1>
                                <h1 class="text-purple-700 text-sm pt-10 pb-5">See all</h1>
                            </div>

                            <div class="flow-root">
                                <div class="previous-session" @click.prevent="goToLink">
                                    <previousSessionVue />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col md:block hidden fixed right-10">

                    <div class="border h-48 rounded-lg shadow bg-gradient-to-b from-purple-700 to-pink-500 p-4 mt-4">
                        <!--Live Session-->
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
                    </div>
                </div>
            </div>
        </div>

        <BottomNav  />
    </main>
</template>

<script>
import sidebar from '@/components/Layout/sidebar.vue'
import { Icon } from '@iconify/vue'
import breadcrumb from '@/components/Layout/breadcrumb.vue'
import upcomingSession from '@/components/Resources/upcomingSession.vue'
import previousSessionVue from '@/components/Resources/previousSession.vue'
import BottomNav from '@/components/Layout/bottomNav.vue'



export default {
    components: { sidebar, Icon, breadcrumb, upcomingSession, previousSessionVue, BottomNav },
    methods: {
    goToLink() {
      this.$router.push('/session-details')
    }
  },
}
</script>;

<style></style>