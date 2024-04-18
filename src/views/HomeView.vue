<template>
  <main class="">
    <div class="">
      <sidebar />
    </div>

    <div class="md:p-4 sm:ml-72 md:mt-24 md:mt-16">
      <nav  class="hidden md:flex mb-10" aria-label="Breadcrumb">
        <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
          <li class="inline-flex items-center">
            <a href="#"
              class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
              <svg class="w-3 h-3 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                viewBox="0 0 20 20">
                <path
                  d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
              </svg>
              Home
            </a>
          </li>
        </ol>
      </nav>



      <div class="relative">
       
        <div class="md:flex justify-between h-78 md:h-64 pb-10 items-center sm:p-10 sm:pb-16 p-5 rounded bg-gradient-to-b from-purple-700 to-pink-500 dark:bg-gray-800">
          <div class="mt-16 pb-10">
            <h1 class="md:text-6xl flex gap-2 items-center pt-5 text-3xl text-white font-bold">
              <span class="">Hello,</span>
              <div v-if="user.username">{{ user.username }}!</div>
              <div v-else><svg aria-hidden="true"
                  class="w-10 h-10 text-gray-200 animate-spin dark:text-gray-600 fill-purple-600" viewBox="0 0 100 101"
                  fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor" />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill" />
                </svg>
                <span class="sr-only">Loading...</span>
              </div>
            </h1>
            <p class="text-md text-white font-medium">Welcome Back, have a nice trading week</p>
            <!-- <p class="hidden md:block text-md text-gray-200 py-4 text-white font-medium">
                  Ready to start your week with some new pitch desk?
                </p> -->

            <form class="flex items-center pb-20 md:pb-0 w-full mt-4 mx-auto">
              <label for="simple-search" class="sr-only">Search</label>
              <div class="relative w-full">
                <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">

                </div>
                <input type="text" id="simple-search"
                  class="bg-gray-50 py-3 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search course..." required />
              </div>
              <button type="submit"
                class="p-3.5 ms-2 text-sm font-medium text-white bg-pink-600 rounded-lg border border-pink-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                  viewBox="0 0 20 20">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
                <span class="sr-only">Search</span>
              </button>
            </form>
          </div>

          <div class="md:block hidden img">
            <img src="@/assets/img/hero-2.png" class="w-full object-fit -mt-0" alt="" />
          </div>
        </div>
      </div>

      <div
        class="-mt-28 md:mt-10 bg-white md:bg-transparent relative my-10 rounded-t-3xl rounded-b-xl pb-8 md:pb-4 px-2">
        <div class="md:hidden">
          <div class="flex gap-1 py-5 items-center">
            <Icon icon="fluent-mdl2:insights" class="text-xl font-bold" />
            <h1 class="text-gray-500 font-medium text-md">Cohort Overview</h1>
          </div>

          <div class="sm:p-10 p-5 rounded-3xl bg-white ">
            <div class="flex justify-between items-center h-auto">
              <h1 class="md:text-6xl text-lg text-gray-900 font-bold">Weeks completed</h1>
              <Icon icon="vaadin:academy-cap" class="text-gray-400" width="30px" height="30px" />
            </div>
            <div class="grid grid-cols-2 dark:bg-gray-800">
              <div class="mt-8">
                <h1 class="md:text-6xl text-8xl text-gray-900 font-bold">0</h1>
                <!-- <p class="text-md text-white font-medium">
                    Have a nice trading week
                  </p> -->
                <p class="text-gray-300 text-sm">Lorem, ipsum dolor.</p>
              </div>

              <div class="flex w-full justify-center items-center img">
                <img src="@/assets/img/hero-2.png" class="mt-0 w-96" alt="" />
                <!-- <Icon icon="fluent-emoji:sad-but-relieved-face" class="text-8xl"/> -->
              </div>
            </div>
          </div>

          <div class="grid grid-cols-2">
            <div
              class="md:flex mt-4 justify-between md:h-48 sm:p-10 p-5 rounded-l-3xl bg-gradient-to-b from-purple-700 to-pink-500 dark:bg-gray-800">
              <div class="">
                <div class="flex justify-between h-auto">
                  <h1 class="md:text-6xl text-md text-white font-bold">Overdue Weeks</h1>
                  <Icon icon="lets-icons:clock-fill" class="text-white text-3xl mt-1" />
                </div>

                <h1 class="py-4 text-5xl text-white">6</h1>
                <p class="text-gray-300 text-sm">Lorem, ipsum dolor.</p>
              </div>

              <!-- <div class="md:block hidden img">
                <img src="@/assets/img/hero-bg.png" class="w-96 -mt-40" alt="" />
              </div> -->
            </div>

            <div class="md:flex mt-4 justify-between md:h-48 sm:p-10 p-5 rounded-r-3xl bg-gray-600 dark:bg-gray-800">
              <div class="">
                <div class="flex justify-between h-auto">
                  <h1 class="md:text-6xl text-md text-white font-bold">Tasks completed</h1>
                  <Icon icon="fluent-mdl2:completed-solid" class="text-white text-3xl mt-1" />
                </div>

                <h1 class="py-4 text-5xl text-white">0</h1>
                <p class="text-gray-300 text-sm">Lorem, ipsum dolor.</p>
              </div>

              <!-- <div class="md:block hidden img">
                <img src="@/assets/img/hero-bg.png" class="w-96 -mt-40" alt="" />
              </div> -->
            </div>
          </div>
        </div>

        <div class="md:flex hidden gap-1 py-5 h-auto items-center">

          <Icon icon="fluent-mdl2:insights" class="text-xl font-bold" />
          <h1 class="text-gray-900 font-medium text-md mt-1">Cohort Overview</h1>
        </div>

        <div class="hidden md:grid grid-cols-3 gap-4 mb-4 md:mb-0 mt-0">
          <div
            class="flex gap-4 p-5 justify-center items-center h-24 rounded-lg shadow border border-purple-100 bg-white dark:bg-gray-800">
            <Icon icon="vaadin:academy-cap" class="text-pink-700" width="50px" height="50px" />
            <div class="">
              <h1 class="text-pink-700 text-3xl">10</h1>
              <p class="text-lg text-gray-700 dark:text-gray-500">WEEKS COMPLETED</p>
            </div>
          </div>
          <div
            class="flex gap-4 p-5 justify-center items-center h-24 rounded-lg shadow bg-white border border-purple-100 dark:bg-gray-800">
            <Icon icon="f7:timer-fill" class="text-pink-700" width="50px" height="50px" />
            <div class="">
              <h1 class="text-pink-700 text-3xl">0</h1>
              <p class="text-lg text-gray-700 dark:text-gray-500">OVERDUE WEEKS</p>
            </div>
          </div>
          <div
            class="flex gap-4 p-5 justify-center items-center h-24 rounded-lg shadow bg-white border border-purple-100 dark:bg-gray-800">
            <Icon icon="fluent:cloud-sync-complete-32-filled" class="text-pink-700" width="50px" height="50px" />
            <div class="">
              <h1 class="text-pink-700 text-3xl">0</h1>
              <p class="text-lg text-gray-700 dark:text-gray-500">TASKS COMPLETED</p>
            </div>
          </div>
        </div>

        <!-- <OverviewVue /> -->
      </div>

      <!-- <div class="md:flex hidden gap-1 py-5 h-auto items-center">
        <Icon icon="formkit:group" class="text-xl" />
        <h1 class="text-gray-900 font-medium text-md">Week Overview</h1>
      </div> -->
      <div class=" ">
        <div class="sm:grid grid-cols-1 md:grid-cols-3 px-3 py-2 pb-8 gap-8">
          <div class="review p-0 pb-2 col-span-2">
            <div class="w-full py-0 sm:p-0 dark:bg-gray-800 dark:border-gray-700">
              <div class="flex items-center justify-between mb-4">
                <div class="flex h-auto items-center gap-1">
                  <Icon icon="mingcute:time-line" class="text-purple-600" />
                  <h5 class="text-md font-medium leading-none text-gray-700 dark:text-white">
                    Previously on
                  </h5>
                </div>

                <a href="#" class="text-sm font-medium text-purple-600 hover:underline dark:text-blue-500">
                  View all
                </a>
              </div>
              <div class="flow-root">
                <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
                  <li @click.prevent="goToLink" class="py-4 mb-4 bg-white sm:py-2 px-2 rounded-lg border shadow">
                    <div class="flex items-center md:gap-4 md:p-3">
                      <div class="flex-shrink-0">
                        <img class="md:w-28 md:h-28 h-20 w-20 rounded-lg object-cover" src="../assets/img/course-bg.jpg"
                          alt="Neil image" />
                      </div>
                      <div class="flex-1 min-w-0 ms-2">
                        <div
                          class="md:text-2xl text-md truncate flex justify-between font-semibold text-gray-900 truncate dark:text-white">
                          Introduction to Forex
                          <div class="flex items-center gap-1 top-2 right-4">
                            <Icon icon="ep:collection-tag" />
                            <Icon icon="charm:menu-kebab" />
                          </div>
                        </div>
                        <p class="text-xs text-gray-400 truncate md:line-clamp-2 dark:text-gray-400 mt-1">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi nam modi
                          necessitatibus repellendus numquam!
                        </p>
                        <div class="duration pt-2">
                          <div class="flex h-auto items-center gap-1">
                            <Icon icon="ri:time-line" class="text-blue-400 text-xs" />
                            <p class="text-xs text-gray-500 font-medium">Duration: 30m</p>
                          </div>
                        </div>

                        <div class="mt-2 hidden md:flex">
                          <span
                            class="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">Default</span>
                          <span
                            class="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">Dark</span>
                          <span
                            class="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">Red</span>
                        </div>
                      </div>
                    </div>

                  </li>

                  <li @click.prevent="goToLink" class="py-4 mb-4 bg-white sm:py-2 px-2 rounded-lg border shadow">
                    <div class="flex items-center md:gap-4 md:p-3">
                      <div class="flex-shrink-0">
                        <img class="md:w-28 md:h-28 h-20 w-20 rounded-lg object-cover" src="../assets/img/course-bg.jpg"
                          alt="Neil image" />
                      </div>
                      <div class="flex-1 min-w-0 ms-2">
                        <div
                          class="md:text-2xl text-md truncate flex justify-between font-semibold text-gray-900 truncate dark:text-white">
                          Introduction to Forex
                          <div class="flex items-center gap-1 top-2 right-4">
                            <Icon icon="ep:collection-tag" />
                            <Icon icon="charm:menu-kebab" />
                          </div>
                        </div>
                        <p class="text-xs text-gray-400 truncate md:line-clamp-2 dark:text-gray-400 mt-1">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi nam modi
                          necessitatibus repellendus numquam!
                        </p>
                        <div class="duration pt-2">
                          <div class="flex h-auto items-center gap-1">
                            <Icon icon="ri:time-line" class="text-blue-400 text-xs" />
                            <p class="text-xs text-gray-500 font-medium">Duration: 30m</p>
                          </div>
                        </div>

                        <div class="mt-2 hidden md:flex">
                          <span
                            class="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">Default</span>
                          <span
                            class="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">Dark</span>
                          <span
                            class="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">Red</span>
                        </div>
                      </div>
                    </div>

                  </li>

                </ul>
              </div>
            </div>
          </div>

          <div class="col">
            <h1 class="text-xl font-semibold">Upcoming.</h1>


            <div
              class="max-w-sm my-4 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

              <a href="#">
                <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Synthetic Trading
                  (Volatility 75 Index)</h5>
              </a>
              <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">Go to this step by step guideline process on
                how to certify for your weekly benefits:</p>
              <div class="mt-2 flex py-2">
                <span
                  class="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">Default</span>
                <span
                  class="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">Dark</span>
                <span
                  class="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">Red</span>
              </div>
              <a href="#" class="inline-flex font-medium items-center text-blue-600 hover:underline">
                See course guideline
                <svg class="w-3 h-3 ms-2.5 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                  fill="none" viewBox="0 0 18 18">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778" />
                </svg>
              </a>
            </div>

          </div>

        </div>
      </div>

      <div class="bg-white border mb-48 bordere-gray-200 shadow">
        <!-- <div class="grid grid-cols-1 md:grid-cols-2">
          <div class="col">
            <div class="px-3">
              <TaskList />
            </div>
          </div>

          <div class="col mx-auto">
            <WidgetOne />
          </div>
        </div> -->
      </div>
    </div>

    <div class="">
      <bottomNavVue />
    </div>
  </main>
</template>

<script>
import sidebar from '@/components/Layout/sidebar.vue'
import { Icon } from '@iconify/vue'
import OverviewVue from '@/components/Overview.vue'
import bottomNavVue from '@/components/Layout/bottomNav.vue'
import ChartVue from '@/components/TradingViewWidgets/Chart.vue'
import WidgetOne from '@/components/TradingViewWidgets/WidgetOne.vue'
import TaskList from '../components/Task/TaskList.vue'
export default {
  components: { sidebar, Icon, OverviewVue, bottomNavVue, ChartVue, WidgetOne, TaskList },
  
  methods: {
    goToLink() {
      this.$router.push('/session-details')
    }
  },

  computed: {
    user() {
      return this.$store.state.user // Access user state from Vuex store
    }
  },

  mounted() {
    // Dispatch the fetchUserDetails action when the component is mounted
    this.$store
      .dispatch('fetchUserDetails')
      .then(() => {
        // Handle success if needed
        console.log('User details fetched successfully')
      })
      .catch((error) => {
        // Handle error if needed
        console.error('Error fetching user details:', error)
      })
  }
}
</script>

<style></style>
