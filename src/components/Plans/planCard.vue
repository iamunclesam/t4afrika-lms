<template>
    <main>
        <div v-if="plan"
            class="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
            <h3 class="mb-4 text-2xl font-semibold">{{ plan.plan }} Plan</h3>
            <p class="font-light text-gray-500 sm:text-lg dark:text-gray-400">{{ plan.description }}</p>
            <div class="flex justify-center items-baseline my-8">
                <span class="mr-2 text-5xl font-extrabold">&#8358;{{ plan.amount }}</span>
                <span class="text-gray-500 text-sm dark:text-gray-400">/{{ duration }}</span>
            </div>
            <div class="change-plan-button">
                <changePlanButtonVue :plan="plan" />
            </div>
        </div>
    </main>
</template>

<script>
import changePlanButtonVue from './changePlanButton.vue'


export default {
    props: {
        plan: {
            type: Object,
            required: true
        }
    },

    components: { changePlanButtonVue },

    computed: {
        duration() {
            let planDuration = this.plan.plan;
            switch(planDuration) {
                case 'weekly':
                    return 'Wk'
                

                case 'Bi-weekly':
                    return '2wks'
                

                case 'monthly':
                    return 'Month'
                
                default:
                    return 'no plan'
            }

        }
    }
}
</script>

<style></style>