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
              
              <div  class="flex justify-center align-center h-auto items-center text-center">
                <div class="md:mx-40 m-4 mt-10 text-center">
                  <img src="@/assets/img/email.png" class="w-64 mx-auto" alt="" srcset="">
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
  
                  <RouterLink class="bg-purple-600 text-white text-lg text-center mt-20 py-3 px-4 rounded" to="/login">
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
        paymentEmail: 'sam@gmail.com',
        stepOne: false,
        stepTwo: false,
        stepThree: false
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
  
      next() {
        this.step += 1
      },
  
      prev() {
        this.step -= 1
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
  