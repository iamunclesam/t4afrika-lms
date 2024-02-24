<template>
    <main>
        <div class="login">
            <div class="grid grid-cols-1 md:grid-cols-2">
                <div class="col  h-screen border-r border-gray-300 bg-white  ">


                    <section class=" dark:bg-gray-900">
                        <div class="flex mt-10 flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                            <a href="#"
                                class="flex items-center mb-6 text-2xl mt-4 font-medium text-gray-900 dark:text-white">

                                Trade<span class="text-blue-600">4afrika</span>
                            </a>
                            <div
                                class="w-full bg-white rounded-lg dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                                <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                                    <h1
                                        class="text-3xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-4xl dark:text-white">
                                        Welcome Back
                                    </h1>
                                    <form class="space-y-4 md:space-y-6" action="#">
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
                                                    class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                                                    required="true">
                                            </div>
                                            <div class="ml-3 text-sm">
                                                <label for="terms" class="font-light text-gray-500 dark:text-gray-300">I
                                                    accept the <a
                                                        class="font-medium text-primary-600 hover:underline dark:text-primary-500"
                                                        href="#">Terms and Conditions</a></label>
                                            </div>
                                        </div>
                                        <button @click.prevent="login" type="submit"
                                            class="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Login</button>
                                        <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                                            Already have an account? <a href="#"
                                                class="font-medium text-blue-600 hover:underline dark:text-primary-500">Login
                                                here</a>
                                        </p>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                <div class="col side bg-blue-50">

                    <!-- <div class="relative w-full">
                            <div class="absolute left-4 bottom-4 bg-white border-b-2 border-blue-500 py-4 px-2">
                                <h1 class="text-xl text-gray-400">Lorem ipsum dolor sit amet.</h1>
                                <p class="text-md text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, quo!</p>
                            </div>
                    </div> -->
                    <div class="hidden md:block flex items-center h-screen justify-center">
                        <img src="@/assets/img/login-bg.png" class=" object-cover">
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