<template>
    <main>
        <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
            <li @click.prevent="goToLink" class="mb-5 py-3 sm:py-3 shadow-md bg-white rounded-md px-3">
               <previousSessionCardVue />
            </li>
        </ul>
    </main>
</template>

<script>
import previousSessionCardVue from './previousSessionCard.vue'
import { Icon } from '@iconify/vue'
export default {
components: {previousSessionCardVue, Icon}
}
</script>

<style></style>