<template>
    <main>
        <div class="login">
            <div class="grid grid-cols-1 md:grid-cols-2">
                <div class="col h-screen side hidden md:block">
                    <div class="h-screen flex items-center justify-center">
                        <div>
                            <h1 class="text-white text-5xl">Join the journey</h1>
                            <p class="text-white text-xl">Your cinematic journey starts now</p>
                        </div>
                    </div>
                </div>

                <div class="col ">


                    <div
                        class="mx-auto md:mt-10 w-full max-w-md p-4 bg-white  border-gray-200 rounded-lg sm:p-6 md:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <!-- <h1 class="text-center text-red-700 text-lg font-semibold">MovieFusion</h1> -->
                        <form class="space-y-4" action="#">
                            <h5 class="text-3xl font-bold text-gray-900 dark:text-white">Welcome!</h5>
                            <p class="text-gray-700">
                               Lorem ipsum dolor sit amet.
                            </p>
                            <div>
                                <label for="email"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Full Name</label>
                                <input type="text" name="fullname" id="fullname"
                                    class=" border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                    placeholder=""  required v-model="fullName">
                            </div>

                           

                            <div>
                                <label for="email"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                                <input type="email" name="email" id="email"
                                    class=" border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                    placeholder="" v-model="email" required>
                            </div>

                            <div>
                                <label for="password"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                <input type="password" name="password" id="password" placeholder=""
                                    class=" border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                   v-model="password" required>
                            </div>

                            <!-- <div>
                                <label for="password"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm Password</label>
                                <input type="password" name="password" id="password" placeholder=""
                                    class=" border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                   v-model="password" required>
                            </div> -->

                            <div class="flex items-start">
                                <div class="flex items-start">
                                    <div class="flex items-center h-5">
                                        <input id="remember" type="checkbox" value=""
                                            class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                                            required>
                                    </div>
                                    <label for="remember"
                                        class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Keep me logged
                                        in</label>
                                </div>
                                <a href="#" class="ms-auto text-sm text-blue-700 hover:underline dark:text-blue-500">Recover
                                    Password</a>
                            </div>
                            <button type="submit"
                                @click.prevent="register"
                                class="w-full text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-3.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                <span v-if="!loading">Create your account</span>
                                    <span v-else class="flex h-auto items-center gap-1 justify-center"><div role="status">
    <svg aria-hidden="true" class="inline w-4 h-4 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
   
    </svg>
    <span class="sr-only">Loading...</span>
</div>Loading...</span> 
                            </button>

                            <div class="flex items-center">
                                <hr class="flex-grow border-gray-300 mr-3">
                                <span class="text-gray-300 text-sm">Or Sign up using</span>
                                <hr class="flex-grow border-gray-300 ml-3">
                            </div>

                            <div class="flex justify-center gap-2">
                                <button type="button"
                                    class="text-white bg-white border border-gray-300 hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-full text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 me-2 mb-2">
                                    <svg class="w-4 h-4 mx-auto" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                        fill="blue" viewBox="0 0 8 19">
                                        <path fill-rule="evenodd"
                                            d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                                            clip-rule="evenodd" />
                                    </svg>

                                </button>

                                <button type="button"
                                    class="text-white bg-white border border-gray-300 hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-full text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 me-2 mb-2">
                                    <svg class="w-4 h-4 mx-auto" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                        fill="red" viewBox="0 0 18 19">
                                        <path fill-rule="evenodd"
                                            d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z"
                                            clip-rule="evenodd" />
                                    </svg>

                                </button>

                                <button type="button"
                                    class="text-white bg-white border border-gray-300 hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-full text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 me-2 mb-2">
                                    <svg class="w-5 h-5 mx-auto -ms-1" aria-hidden="true" focusable="false" data-prefix="fab"
                                        data-icon="apple" role="img" xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 384 512">
                                        <path fill="black"
                                            d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z">
                                        </path>
                                    </svg>
                                    
                                </button>
                            </div>
                            <div class="text-sm text-center font-medium text-gray-500 dark:text-gray-300">
                                Already have an account?<a href="#" class="text-blue-700 font-semibold hover:underline dark:text-blue-500"> <router-link to="/login"> Sign In </router-link></a>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    </main>
</template>

<script>
export default {
    data() {
        return {
              
                fullName:'',
                email: '',
                password: '',
                loading: false
        
        }
    },

    computed: {
    generatedId() {
      // Define characters for the ID
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      const idLength = 15; // Adjust the length of the ID as needed

      // Generate the ID
      let id = '';
      for (let i = 0; i < idLength; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        id += characters.charAt(randomIndex);
      }

      return id;
    },
  },

    methods: {
        register() {
      // Dispatch the register action with username, email, and password
      this.$store.dispatch('register', {
        id: this.generatedId,
        fullName: this.fullName,
        email: this.email,
        password: this.password,
      });

      if(this.fullName == "" && this.email == "") {
        alert('pls fill all field')
      }
      else {
        this.loading = true
      }
      
      this.fullName = '',
      this.email = '',
      this.password = ''
    },
    }

}
</script>


<style scoped>


</style>
