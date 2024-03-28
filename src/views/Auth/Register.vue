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

        <div class="col-span-2 bg-white md:p-8 p-4">


          <ol class="flex items-center mx-auto max-w-2xl">
            <li
              class="flex w-full items-center text-purple-600 dark:text-blue-500 after:content-[''] after:w-full after:h-1 after:border-b after:border-purple-100 after:border-4 after:inline-block dark:after:border-blue-800">
              <span
                class="flex items-center justify-center w-10 h-10 bg-purple-100 rounded-full lg:h-12 lg:w-12 dark:bg-blue-800 shrink-0">
                <svg class="w-3.5 h-3.5 text-purple-600 lg:w-4 lg:h-4 dark:text-blue-300" aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M1 5.917 5.724 10.5 15 1.5" />
                </svg>
              </span>
            </li>
            <li
              class="flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-purple-100 after:border-4 after:inline-block dark:after:border-gray-700">
              <span
                class="flex items-center justify-center w-10 h-10 bg-purple-100 rounded-full lg:h-12 lg:w-12 dark:bg-gray-700 shrink-0">
                <svg class="w-4 h-4 text-purple-500 lg:w-5 lg:h-5 dark:text-gray-100" aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                  <path
                    d="M18 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2ZM6.5 3a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3.014 13.021l.157-.625A3.427 3.427 0 0 1 6.5 9.571a3.426 3.426 0 0 1 3.322 2.805l.159.622-6.967.023ZM16 12h-3a1 1 0 0 1 0-2h3a1 1 0 0 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Z" />
                </svg>
              </span>
            </li>
            <li class="flex items-center w-full">
              <span
                class="flex items-center justify-center w-10 h-10 bg-purple-100 rounded-full lg:h-12 lg:w-12 dark:bg-gray-700 shrink-0">
                <svg class="w-4 h-4 text-purple-500 lg:w-5 lg:h-5 dark:text-gray-100" aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                  <path
                    d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2ZM7 2h4v3H7V2Zm5.7 8.289-3.975 3.857a1 1 0 0 1-1.393 0L5.3 12.182a1.002 1.002 0 1 1 1.4-1.436l1.328 1.289 3.28-3.181a1 1 0 1 1 1.392 1.435Z" />
                </svg>
              </span>
            </li>
          </ol>


          <section class="bg-white dark:bg-gray-900">
            <div class="flex gap-4 controls mx-auto max-w-2xl mt-4">
              <button class="">
                <Icon icon="ic:round-navigate-before" width="2em" height="2em" />
              </button>
              <button class="">
                <Icon icon="ic:round-navigate-next" width="2em" height="2em" />
              </button>
            </div>
            <div v-if="step === 1" class="py-8 px-4 mx-auto max-w-2xl lg:py-6 lg:pb-4">
              <h2 class="mb-4 text-xl font-bold text-gray-900 dark:text-white">Account Details</h2>
              <form action="#">
                <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">


                  <div class="w-full">
                    <label for="brand" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Full
                      Name</label>
                    <input type="text" name="brand" id="brand"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="John Doe" required="">
                  </div>
                  <div class="w-full">
                    <label for="price"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                    <input type="email" name="price" id="price"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="johnDoe@gmail.com" required="">
                  </div>

                  <div class="w-full">
                    <label for="brand"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone</label>
                    <input type="Phone" name="brand" id="brand"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="+234 901 3456 789" required="">
                  </div>
                  <div class="w-full">
                    <label for="price"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Passowrd</label>
                    <input type="password" name="price" id="price"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="+234 90 123 4567 890" required="">
                  </div>
                </div>



                <h2 class="mb-4 mt-10 text-xl font-bold text-gray-900 dark:text-white">Payment Details</h2>

                <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">


                  <div class="w-full">
                    <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select
                      Plan</label>
                    <select id="countries"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                      <option selected>&#8358;500 - 1wk</option>
                      <option value="US">&#8358;1000 - 2wks</option>
                      <option value="CA">&#8358;2000 - 1mon </option>
                      <option value="FR">&#8358;6000 - 3mon</option>
                    </select>
                  </div>
                  <div class="w-full">
                    <label for="price" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Payment
                      Email</label>
                    <input type="email" name="price" id="price"
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
                  class="mb-3 text-white bg-purple-600 rounded my-4 py-2.5 px-3 text-md" buttonText="Proceed with paystack"
                  :publicKey="publicKey" :email="paymentEmail" :amount="convertAmount" :reference="reference"
                  :onSuccess="onSuccessfulPayment" :onCanel="onCancelledPayment">
                </paystack>
              </form>
            </div>


            <div v-if="step === 2" class="flex justify-center align-center items-center text-center">
              <div class="md:m-40 md:mt-20 m-10 text-center">
                <img src="@/assets/img/email.png" class="w-48 mx-auto" alt="" srcset="">
                <h1 class="md:text-4xl my-4 text-3xl">Email Confirmation</h1>
                <p class="text-gray-500">We've sent an email to {{ userProfile.email }} to confirm the validity of
                  your email address. After recieving the email, follow the link provided to complete your registration
                </p>

                <!-- <div class="relative md:mt-20 mt-10 text-center border-none border-t-green-500">
                  <p class="text-gray-500">
                    <button @click="resendConfirmationEmail" :disabled="resendDisabled"
                      class="mt-4 py-2 text-green-500 rounded ">
                      {{ resendDisabled ? `Resend in ${resendTimer}s` : 'Resend Confirmation Email' }}
                    </button> if you didn't receive any email.
                  </p>
                </div> -->

                <RouterLink class="bg-purple-600 text-white text-lg text-center mt-20 py-3 px-4 rounded" to="/signin">
                  <button class="mt-10">Proceed to Sign In</button>
                </RouterLink>
              </div>
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
      paymentEmail: 'sam@gmail.com'
    }
  },

  components: { paystack, Icon },

  computed: {

    convertAmount() {
      return this.amount * 100
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
    register() {

    },

    submitAccountDetails() {
      this.step = 2
    },

    onSuccessfulPayment: async function (response) {
      try {
        if (response) {
          // Dispatch the register action with username, email, and password
          this.$store.dispatch('register', {
            id: this.generatedId,
            fullName: this.fullName,
            email: this.email,
            password: this.password
          })

          if (this.fullName == '' && this.email == '') {
            alert('pls fill all field')
          } else {
            this.loading = true
          }

          ; (this.fullName = ''), (this.email = ''), (this.password = '')

        }
        console.log(response);
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
