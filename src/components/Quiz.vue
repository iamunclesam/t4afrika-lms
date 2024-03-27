<template>
    <main>
        <div class="p-6">
            <small class="text-gray-500">Question 1</small>
            <h1 class="text-2xl text-gray-700">Lorem ipsum dolor sit amet consectetur.</h1>
            <p class="text-gray-600 my-4 text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore molestiae quis quo
                harum ipsa nulla.</p>

            <QuizOptions />
        </div>
    </main>
</template>

<script>

import QuizOptions from '@/components/QuizOptions.vue'

export default {
    components: {QuizOptions}
}

</script>