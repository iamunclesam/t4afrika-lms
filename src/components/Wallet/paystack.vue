<template>
    <main>
        <paystack buttonClass="'button-class btn btn-primary'" buttonText="Pay Online" :publicKey="publicKey" :email="email"
            :amount="amount" :reference="reference" :onSuccess="onSuccessfulPayment" :onCanel="onCancelledPayment">
        </paystack>
    </main>
</template>

<script>
import { Icon } from '@iconify/vue'
import paystack from "vue3-paystack";
import { nanoid } from "nanoid";
import { collection, updateDoc, getDocs, doc, arrayUnion } from 'firebase/firestore';
import { auth, db } from '@/firebase';


export default {
    components: {
        // eslint-disable-next-line vue/no-unused-components
        Icon, paystack,
    },

    props: {
        firstName: {
            type: String,
            required: true
        },

        lastName: {
            type: String,
            required: true
        },

        userEmail: {
            type: String,
            required: true
        }
    },

    data() {
        return {
            publicKey: 'pk_test_0000',
            amount: 1000,
            email: 'sam@gmail.com',
            firstname: 'sam',
            lastname: 'text',
            MainAccount: 0,
        }
    },

    computed: {
        reference: function () {
            return nanoid(15);
        },

        currentUser() {
            return this.getCurrentUserData();
        }
    },

    methods: {

        async getCurrentUserData() {
            try {
                const user = auth.currentUser;

                if (user) {
                    const querySnapshot = await getDocs(collection(db, 'Users'));
                    const userData = querySnapshot.docs.find(doc => doc.data().email == user.email)?.data();

                    return userData;
                }
            } catch (e) {
                console.error(e);
            }
        },



        onSuccessfulPayment: async function (response) {

            try {
                const currentUserData = this.currentUser;

                if (currentUserData) {
                    const userDocRef = doc(db, 'Users', currentUserData.docs[0].id);

                    await updateDoc(userDocRef, {
                        wallet: {
                            added: arrayUnion({ amount: this.amount, id: 'transaction_id' }) // Replace with your actual values
                        }
                    });
                }
            } catch (error) {
                console.error('Error updating wallet:', error);
            }

            console.log(response);
        },
        onCancelledPayment: function () {
            console.log("Payment cancelled by user");
        },
    },
};

</script>


<style></style>