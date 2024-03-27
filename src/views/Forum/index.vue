<template>
    <main>
        <sidebar />
        <div class="p-4 sm:ml-72 mt-20">
            <!-- <breadcrumb class="pt-8" /> -->
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
