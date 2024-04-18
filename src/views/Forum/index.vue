<template>
    <main>
        <sidebar />
        <div class="p-4 sm:ml-72 mt-20">
            <!-- <breadcrumb class="pt-8" /> -->
            <div class="md:grid grid-cols md:grid-cols-12 gap-12">
                <div class="col-span-7">
                    <postListVue />
                </div>

                <div class="col-span-5 hidden md:block">
                    <peopleYouMayKnowVue />
                </div>
            </div>
          
        </div>

        <bottomNavVue />
    </main>
</template>

<script>
import sidebar from '@/components/Layout/sidebar.vue'
import { Icon } from '@iconify/vue'
import breadcrumb from '@/components/Layout/breadcrumb.vue'
import postListVue from '@/components/Forum/postList.vue'
import peopleYouMayKnowVue from '@/components/Forum/peopleYouMayKnow.vue'
import bottomNavVue from '@/components/Layout/bottomNav.vue'


export default {

    components: { sidebar, Icon, breadcrumb, postListVue, peopleYouMayKnowVue, bottomNavVue },
    methods: {
        goToLink() {
            this.$router.push('/session-details')
        }
    }
}
</script>
