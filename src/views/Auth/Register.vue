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

          <section class="bg-white dark:bg-gray-900">

            <div class="py-8 px-4 mx-auto max-w-2xl lg:pt-0 lg:pb-0">
              <h1 class="text-purple-600 text-xs text-right flex h-auto justify-end items-center gap-2"> <span>Go to
                  Sign In </span>
                <Icon icon="ic:round-navigate-next" class="text-xl bg-purple-100 rounded-full" />
              </h1>
              <h2 class="mb-2 text-3xl font-bold text-gray-900 dark:text-white">Registration</h2>
              <p class="text-sm text-gray-500 mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <!-- <p class="bg-purple-600 h-2 max-w-16 mb-8"></p> -->



              <form>

                <div class="mb-6">
                  <label for="username"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
                  <input type="name" id="username"
                    class="bg-purple-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="" v-model="user.username" required />
                </div>
                <div class="grid gap-6 mb-6 md:grid-cols-2">

                  <div>
                    <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First
                      name</label>
                    <input type="text" id="first_name"
                      class="bg-purple-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="" v-model="user.firstName" required />
                  </div>
                  <div>
                    <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last
                      name</label>
                    <input type="text" id="last_name"
                      class="bg-purple-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="" v-model="user.lastName" required />
                  </div>
                  <div>
                    <label for="email"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                    <input type="email" id="email"
                      class="bg-purple-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="" v-model="user.email" required />
                  </div>
                  <div>
                    <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone
                      number</label>
                    <input type="number" id="phone"
                      class="bg-purple-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" v-model="user.phone" required />
                  </div>

                </div>

                <div class="mb-6">
                  <label for="password"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                  <input type="password" id="password"
                    class="bg-purple-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="" v-model="user.password" required />
                </div>

                <div class="flex items-start mb-6">
                  <div class="flex items-center h-5">
                    <input id="remember" type="checkbox" value=""
                      class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                      required />
                  </div>
                  <label for="remember" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with
                    the <a href="#" class="text-blue-600 hover:underline dark:text-blue-500">terms and
                      conditions</a>.</label>
                </div>
                <button type="button"
                @click.prevent="register"
                  class="text-white bg-purple-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  <span v-if="!loading">Create Account</span>
                  <span v-else class="flex h-auto items-center gap-1 justify-center">
                    <div role="status">
                      <svg aria-hidden="true"
                        class="inline w-4 h-4 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                        viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                          fill="currentColor" />
                        <path
                          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                          fill="currentFill" />
                      </svg>
                      <span class="sr-only">creating...</span>
                    </div>
                    Creating...
                  </span>
                </button>
              </form>

            </div>


          </section>



        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { Icon } from '@iconify/vue'

import {
  collection,
  getDocs
} from 'firebase/firestore'
import { db } from '@/firebase'

export default {
  data() {
    return {
      user: {
        username: '',
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        password: '',
      },
      loading: false
    }
  },

  components: { Icon },

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

    register() {
      try {

        const userDetails = this.user

        this.$store.dispatch('register', userDetails)

        if (this.fullName == '' && this.email == '') {
          alert('pls fill all field')
        } else {
          this.loading = true
        }

        ; (this.fullName = ''), (this.email = ''), (this.password = '')
        console.log();
      }

      catch (error) {
        console.error('Error creating User:', error);
      }
    }
  }
}
</script>

<style scoped></style>
