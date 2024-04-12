<template>
    <main>
        <sidebar />
        <div class="p-4 sm:ml-72 mt-20 sm:mx-5">
            <breadcrumb class="mt-5 sm:mt-5" />
            <section class="dark:bg-gray-900">
                <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                    <div class="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-4 lg:space-y-0" >
                        <!-- Pricing Card -->
                        <div class="" v-for="(plan, index) in plans" :key="index">
                            <div class="plan-card">
                                <planCardVue :plan="plan" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        <bottomNavVue />
    </main>
</template>

<script>
import sidebar from '@/components/Layout/sidebar.vue'
// import { Icon } from '@iconify/vue'
import breadcrumb from '@/components/Layout/breadcrumb.vue'
import bottomNavVue from '@/components/Layout/bottomNav.vue'
import { initFlowbite } from 'flowbite';
import planCardVue from '@/components/Plans/planCard.vue'
import {
    collection,
    getDocs
} from 'firebase/firestore'
import { db } from '@/firebase'


export default {

    components: { sidebar, breadcrumb, bottomNavVue, planCardVue },

    data() {
        return {
            plans: []
        }
    },

    mounted() {
        initFlowbite();
        this.fetchPlans()
    },

    methods: {

        toggleModal() {
            this.showModal = !this.showModal;
        },

        async fetchPlans() {
            try {
                // Assuming "db" is your Firestore instance
                const subscriptionPlansCollection = collection(db, 'Plans');
                const querySnapshot = await getDocs(subscriptionPlansCollection);

                // Iterate over the query snapshot to extract subscription plans

                querySnapshot.forEach((doc) => {
                    const plan = doc.data();
                    this.plans.push(plan);
                    console.log("sucessfully", plan);
                });
            }

            catch (e) {
                console.log(e)
            }

        },

    }
}
</script>

<style scoped>
.clip-half {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
    transform: rotate(135deg);
}
</style>