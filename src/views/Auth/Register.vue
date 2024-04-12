<template>
  <main>
    <div class="login">
      <div class="grid grid-cols-1 md:grid-cols-3">
        <div class="col bg-purple-600 h-screen side hidden md:block">
          <div class=" flex items-center justify-center">
            <div>

            </div>
          </div>
        </div>

        <div class="col-span-2 bg-white md:p-8 p-2">

          <section class="bg-white dark:bg-gray-900">

            <div class="py-8 px-4 mx-auto max-w-2xl lg:pt-0 lg:pb-0">
              <h1 class="text-purple-600 text-xs text-right flex h-auto justify-end items-center gap-2"> <span>Go to
                  Sign In </span>
                <Icon icon="ic:round-navigate-next" class="text-xl bg-purple-100 rounded-full" />
              </h1>
              <h2 class="mb-4 text-xl font-bold text-gray-900 dark:text-white">Account Details</h2>
              <p class="text-gray-600 text-xs my-6">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat
                autem aperiam dolorem facere, enim expedita ipsam dolore minima eius quo.</p>
              <form action="#">
                <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">


                  <div class="w-full">
                    <label for="fullname" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Full
                      Name</label>
                    <input type="text" name="fullname" id="fullname"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="John Doe" v-model="fullName" required="">
                  </div>
                  <div class="w-full">
                    <label for="email"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                    <input type="email" name="email" id="email"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="johnDoe@gmail.com" v-model="email" required="">
                  </div>

                  <div class="w-full">
                    <label for="phone"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone</label>
                    <input type="Phone" name="phone" id="phone"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="+234 901 3456 789" v-model="phone" required="">
                  </div>
                  <div class="w-full">
                    <label for="password"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Passowrd</label>
                    <input type="password" name="password" id="password"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="*****" v-model="password" required="">
                  </div>
                </div>



                <h2 class="mb-4 mt-10 text-xl font-bold text-gray-900 dark:text-white">Payment Details</h2>

                <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">


                  <div class="w-full">
                    <label for="plan" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select
                      Plan</label>
                    <select v-model="selectedPlan"
                      class="bg-purple-600 border border-gray-300 text-white text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                      <option v-for="plan in plans" :key="plan.id" :value="plan.value">{{ plan.value }}</option>
                    </select>
                  </div>
                  <div class="w-full">
                    <label for="paymentemail"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Payment
                      Email</label>
                    <input type="email" name="paymentemail" id="paymentemail"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="johnDoe@gmail.com" required="">
                  </div>



                  <div class="flex items-center">
                    <input id="link-checkbox" type="checkbox" value=""
                      class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                    <label for="link-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree
                      with the <a href="#" class="text-blue-600 dark:text-blue-500 hover:underline">terms and
                        conditions</a>.</label>
                  </div>


                </div>
                <paystack buttonClass="'button-class bg-blue-500'"
                  class="mb-3 text-white bg-purple-600 rounded my-4 py-2.5 px-3 text-md"
                  buttonText="Proceed with paystack" :publicKey="publicKey" :email="paymentEmail"
                  :amount="convertAmount" :reference="reference" :onSuccess="onSuccessfulPayment"
                  :onCanel="onCancelledPayment">
                </paystack>
              </form>
            </div>


          </section>



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
