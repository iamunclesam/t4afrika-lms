<template>
    <main>
      <div class="login">
        <div class="grid grid-cols-1 md:grid-cols-2">
          <div class="col bg-purple-600 h-screen side hidden md:block">
            <div class=" flex items-center justify-center">
              <div>
  
              </div>
            </div>
          </div>
  
          <div class="col bg-white md:p-8 md:px-12 p-2">
  
  
  
          </div>
        </div>
      </div>
    </main>
  </template>
  
  <script>
  import paystack from "vue3-paystack";
  import { Icon } from '@iconify/vue'
  import {
    collection,
    getDocs
  } from 'firebase/firestore'
  import { db } from '@/firebase'
  export default {
    data() {
      return {
        fullName: '',
        email: '',
        phone: '',
        password: '',
        loading: false,
        step: 1,
        publicKey: 'pk_test_a5875f86ad8ddaf47cc9046fac01412e2514bd98',
        amount: 50000,
        paymentEmail: 'sam@gmail.com',
        selectedPlan: null,
        subscriptionPlans: [],
        plans: [
          { id: '1', value: 500, description: 'Basic plan' },
          { id: '2', value: 1000, description: 'Standard plan' },
          { id: '3', value: 2000, description: 'Premium plan' }
        ]
      }
    },
  
    components: { paystack, Icon },
  
    async created() {
      await this.fetchPlans();
    },
  
    computed: {
  
      convertAmount() {
        return this.selectedPlan * 100
      },
  
      reference: function () {
        // return nanoid(15);
  
        let randomRef = "";
        let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  
        for (let i = 0; i < 15; i++)
          randomRef += characters.charAt(Math.floor(Math.random() * characters.length));
  
        return randomRef;
      },
  
      userProfile() {
        return this.$store.state.user;
      },
      generatedId() {
        // Define characters for the ID
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
        const idLength = 15 // Adjust the length of the ID as needed
  
        // Generate the ID
        let id = ''
        for (let i = 0; i < idLength; i++) {
          const randomIndex = Math.floor(Math.random() * characters.length)
          id += characters.charAt(randomIndex)
        }
  
        return id
      },
  
    },
  
    methods: {
      async fetchPlans() {
  
        try {
          // Assuming "db" is your Firestore instance
          const subscriptionPlansCollection = collection(db, 'Plans');
          const querySnapshot = await getDocs(subscriptionPlansCollection);
  
          // Iterate over the query snapshot to extract subscription plans
  
          querySnapshot.forEach((doc) => {
            const plan = doc.data();
            this.subscriptionPlans.push(plan);
            console.log("sucessfully", plan);
          });
        }
  
        catch (e) {
          console.log(e)
        }
  
      },
  
      onSuccessfulPayment: async function (response) {
        try {
          if (response) {
  
  
            // Dispatch the register action with username, email, and password
            this.$store.dispatch('register', {
              id: this.generatedId,
              fullName: this.fullName,
              email: this.email,
              password: this.password,
              // subscriptionPlans:this.subscriptionPlans
              subscriptionPlan: {
                plan: this.selectedPlan,
                startDate: new Date().toISOString(),
                endDate: new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000).toISOString()
              },
              subscriptionPlanHistory: {
                planId: this.selectedPlan,
                isPaid: true,
                timestamp: new Date().toISOString()
              }
  
  
            })
  
            if (this.fullName == '' && this.email == '') {
              alert('pls fill all field')
            } else {
              this.loading = true
            }
  
            ; (this.fullName = ''), (this.email = ''), (this.password = '')
  
          }
          console.log(response);
          this.stepOne = true
          this.step = 2
          // location.reload()
        } catch (error) {
          console.error('Error creating User:', error);
        }
      },
  
      onCancelledPayment: function () {
  
        console.log("Payment cancelled by user");
        // location.reload
      },
  
  
    }
  }
  </script>
  
  <style scoped></style>
  