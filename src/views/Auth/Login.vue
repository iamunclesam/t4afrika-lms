<template>
    <main>
        <div class="login">
            <div class="grid grid-cols-1 md:grid-cols-2">
                <div class="col  h-screen border-r border-gray-300 bg-white  ">


                    <section class=" dark:bg-gray-900">
                        <div
                            class="flex mt-10 flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                            <a href="#"
                                class="flex items-center mb-6 text-2xl mt-4 font-medium text-gray-900 dark:text-white">

                                Trade<span class="text-blue-600">4afrika</span>
                            </a>
                            <div
                                class="w-full bg-white rounded-lg dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                                <div class="space-y-4 md:space-y-6 sm:p-8">
                                    <h1
                                        class="text-3xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-4xl dark:text-white">
                                        Welcome Back
                                    </h1>
                                    <form class=" md:space-y-6" action="#">
                                        <div>
                                            <label for="email"
                                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
                                                email</label>
                                            <input type="email" name="email" id="email"
                                                class=" border border-gray-300 text-gray-900 sm:text-sm rounded-md focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                placeholder="name@company.com" required="true" v-model="email">
                                        </div>
                                        <div>
                                            <label for="password"
                                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                            <input type="password" name="password" id="password" placeholder="••••••••"
                                                class=" border border-gray-300 text-gray-900 sm:text-sm rounded-md focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                required="true" v-model="password">
                                        </div>
                                        <!-- <div>
                                            <label for="confirm-password"
                                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm
                                                password</label>
                                            <input type="confirm-password" name="confirm-password" id="confirm-password"
                                                placeholder="••••••••"
                                                class=" border border-gray-300 text-gray-900 sm:text-sm rounded-md focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                required="true">
                                        </div> -->
                                        <div class="flex items-start">
                                            <div class="flex items-center h-5">
                                                <input id="terms" aria-describedby="terms" type="checkbox"
                                                    class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800">
                                            </div>
                                            <div class="ml-3 text-sm">
                                                <label for="terms"
                                                    class="font-light text-gray-500 dark:text-gray-300">Remember
                                                    me</label>
                                            </div>
                                        </div>
                                        <button @click.prevent="login" type="submit"
                                            class="w-full text-white bg-purple-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">

                                            <span v-if="!loading">Login</span>
                                            <span v-else class="flex h-auto items-center gap-1 justify-center">
                                                <div role="status">
                                                    <svg aria-hidden="true"
                                                        class="inline w-4 h-4 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                                                        viewBox="0 0 100 101" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                                            fill="currentColor" />
                                                        <path
                                                            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                                            fill="currentFill" />
                                                    </svg>
                                                    <span class="sr-only">Loading...</span>
                                                </div>
                                            </span>
                                        </button>
                                        <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                                            Don't have an account? <router-link to="/register"
                                                class="font-medium text-blue-600 hover:underline dark:text-primary-500">Sign
                                                Up
                                            </router-link>
                                        </p>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                <div class="col side bg-purple-600">
                    <div class="hidden md:flex items-center h-screen justify-center">
                        <!-- <img src="@/assets/img/login-bg.png" class=" object-cover"> -->
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
            email: '',
            password: '',
            loading: false
        }
    },
    methods: {
        login() {
            const details = {
                email: this.email,
                password: this.password
            }
            this.$store.dispatch('login', details)
            this.loading = true
        }
    }
}
</script>

<style scoped></style>