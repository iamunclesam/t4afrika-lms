<!-- eslint-disable vue/multi-word-component-names -->

<template>
    <main>
        <form class="p-4 bg-white">
            <div class="mb-5">
                <label for="email" class="block mb-2 text-xs font-semibold text-gray-900 dark:text-white">Your
                    email</label>
                <input type="email" id="email"
                    class=" border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="" v-model="getEmail" required />
            </div>
            <div class="mb-0">
                <label for="password" class="block mb-2 text-xs font-semibold text-gray-900 dark:text-white">Amount
                    to add:</label>
                <input type="number" id="password"
                    class=" border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    v-model="amount" required />
            </div>
        </form>

        <paystack buttonClass="'button-class bg-blue-500'"
            class="mb-3 text-white bg-purple-600 mx-4 py-2.5 px-3 text-md" buttonText="Add money" :publicKey="publicKey"
            :email="email" :amount="convertAmount" :reference="reference" :onSuccess="onSuccessfulPayment"
            :onCanel="onCancelledPayment">
        </paystack>

    </main>
</template>

<script>
import { Icon } from '@iconify/vue'
import paystack from "vue3-paystack";
// import { nanoid } from "nanoid";
import { collection, getDocs } from 'firebase/firestore';
import { auth, db } from '@/firebase';


export default {
    components: {
        // eslint-disable-next-line vue/no-unused-components
        Icon, paystack,
    },

    data() {
        return {
            publicKey: 'pk_test_a5875f86ad8ddaf47cc9046fac01412e2514bd98',
            firstname: 'sam',
            lastname: 'text',
            MainAccount: 0,
            amount: 500,
            email: '',
            currentPlan: []
        }
    },

    computed: {
        reference: function () {
            // return nanoid(15);

            let randomRef = "";
            let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

            for (let i = 0; i < 15; i++)
                randomRef += characters.charAt(Math.floor(Math.random() * characters.length));

            return randomRef;
        },

        currentUser() {
            return this.getCurrentUserData();
        },

        convertAmount() {
            return this.amount * 100
        },

        getEmail() {
            const userEmail = auth.currentUser;
            return userEmail.email
        },


    },

    mounted() {
        this.getCurrentUserData()
    },

    methods: {


        async getCurrentUserData() {
            try {
                const user = auth.currentUser;

                if (user) {
                    const querySnapshot = await getDocs(collection(db, 'Users'));
                    const userDoc = querySnapshot.docs.find(doc => doc.data().email === user.email);
                    // if (userDoc) {
                    //     const userDocRef = doc(db, 'Users', userDoc.id);
                    //     console.log('User Document Reference ID:', userDocRef.id);
                    //     return userDocRef;
                    // }

                    this.email = userDoc.data().email
                    this.currentPlan = userDoc.data().subscriptionPlan

                    console.log(userDoc.data());
                }
            } catch (e) {
                console.error(e);
            }
        },






        onSuccessfulPayment: async function (response) {
            try {
                if (response) {
                    // Dispatch the action to update the wallet data
                    await this.$store.dispatch('updateWallet', { amount: this.amount, transactionReference: response.reference, paystackResponse: response.status });

                }
                console.log(response);
                location.reload()
            } catch (error) {
                console.error('Error updating wallet:', error);
            }
        },

        onCancelledPayment: async function (response) {

            try {
                if (response) {
                    // Dispatch the action to update the wallet data
                    await this.$store.dispatch('updateWallet', { amount: this.amount, transactionReference: response.reference, paystackResponse: response });

                }
                console.log(response);
                location.reload()
            } catch (error) {
                console.error('Error updating wallet:', error);
            }

            console.log("Payment cancelled by user");
            // location.reload
        },
    },
};

</script>


<style></style>