<template>
  <main>
    <sidebar />

    <div class="md:p-4 sm:ml-72 md:mt-24 mt-20">
      <nav class="hidden md:flex mb-10" aria-label="Breadcrumb">
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

      <div class="grid grid-cols-1 gap-4 mb-4">
        <div class="md:flex justify-between h-64 items-center sm:p-10 p-5 rounded bg-blue-600 dark:bg-gray-800">
          <div class="">
            <h1 class="md:text-6xl text-3xl text-white font-bold">
              <span class="text-gray-300">Hello</span>, Unclesam!
            </h1>
            <p class="text-md text-white font-medium">Have a nice trading week</p>
            <!-- <p class="hidden md:block text-md text-gray-200 py-4 text-white font-medium">
                  Ready to start your week with some new pitch desk?
                </p> -->

            <form class="flex items-center w-full mt-4 mx-auto">
              <label for="simple-search" class="sr-only">Search</label>
              <div class="relative w-full">
                <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2" />
                  </svg>
                </div>
                <input type="text" id="simple-search"
                  class="bg-gray-50 py-3 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search branch name..." required />
              </div>
              <button type="submit"
                class="p-3.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
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
            <img src="@/assets/img/hero-bg.png" class="w-96 h-full object-fit -mt-10" alt="" />
          </div>
        </div>
      </div>

      <div class="-mt-10 md:mt-10 bg-white md:bg-transparent relative my-10 rounded-t-3xl rounded-b-xl pb-8 md:pb-4 px-2">
        <div class="md:hidden">
          <div class="flex gap-1 py-5 h-auto items-center">
            <Icon icon="formkit:group" class="text-xl" />
            <h1 class="text-gray-500 font-semibold text-md">Cohort Overview</h1>
          </div>

          <div class="sm:p-10 p-5 rounded-3xl bg-white border border-gray-200 shadow">
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

              <div class="flex h-auto items-center img">
                <img src="@/assets/img/bg-2.png" class="mt-0" alt="" />
              </div>
            </div>
          </div>

          <div class="grid grid-cols-2 gap-4">
            <div class="md:flex mt-4 justify-between md:h-48 sm:p-10 p-5 rounded-3xl bg-blue-600 dark:bg-gray-800">
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

            <div class="md:flex mt-4 justify-between md:h-48 sm:p-10 p-5 rounded-3xl bg-yellow-400 dark:bg-gray-800">
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
          <Icon icon="formkit:group" class="text-xl" />
          <h1 class="text-gray-900 font-medium text-md">Cohort Overview</h1>
        </div>

        <div class="hidden md:grid grid-cols-3 gap-4 mb-4 md:mb-0 mt-0">
          <div class="flex gap-4 p-5 justify-center items-center h-24 rounded-lg shadow bg-white dark:bg-gray-800">
            <Icon icon="vaadin:academy-cap" class="text-blue-500" width="50px" height="50px" />
            <div class="">
              <h1 class="text-blue-500 text-3xl">10</h1>
              <p class="text-lg text-gray-700 dark:text-gray-500">WEEKS COMPLETED</p>
            </div>
          </div>
          <div class="flex gap-4 p-5 justify-center items-center h-24 rounded-lg shadow bg-white dark:bg-gray-800">
            <Icon icon="f7:timer-fill"  class="text-blue-500" width="50px" height="50px" />
            <div class="">
              <h1 class="text-blue-500 text-3xl">0</h1>
              <p class="text-lg text-gray-700 dark:text-gray-500">OVERDUE WEEKS</p>
            </div>
          </div>
          <div class="flex gap-4 p-5 justify-center items-center h-24 rounded-lg shadow bg-white dark:bg-gray-800">
            <Icon icon="fluent:cloud-sync-complete-32-filled" class="text-blue-500" width="50px" height="50px" />
            <div class="">
              <h1 class="text-blue-500 text-3xl">0</h1>
              <p class="text-lg text-gray-700 dark:text-gray-500">TASKS COMPLETED</p>
            </div>
          </div>
        </div>

        <!-- <OverviewVue /> -->
      </div>


      <div class="md:flex hidden gap-1 py-5 h-auto items-center">
          <Icon icon="formkit:group" class="text-xl" />
          <h1 class="text-gray-900 font-medium text-md">Week Overview</h1>
        </div>
      <div class="bg-white border border-gray-200 rounded shadow">
        
        <div class="grid grid-cols-1 md:grid-cols-2 py-2 pb-8 gap-4">
          <div class="review p-4 pb-2 col">
            <div class="w-full py-0 bg-white sm:p-0 max-w-lg dark:bg-gray-800 dark:border-gray-700">
              <div class="flex items-center justify-between mb-4">
                <div class="flex h-auto items-center gap-1">
                  <Icon icon="mingcute:time-line" class="text-blue-500" />
                  <h5 class="text-md font-medium leading-none text-gray-700 dark:text-white">
                    Previously on
                  </h5>
                </div>
                <a href="#" class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
                  View all
                </a>
              </div>
              <div class="flow-root">
                <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
                  <li class="py-4 mb-4 sm:py-0 p-3 rounded-lg border border-gray-100">
                    <div class="relative">
                      <div class="absolute top-2 right-4">
                        <Icon icon="jam:padlock-open" class="text-blue-500" />
                      </div>
                    </div>
                    <div class="flex items-center">
                      <div class="flex-shrink-0">
                        <img class="w-20 h-20 rounded-full" src="../assets/img/hero.jpeg" alt="Neil image" />
                      </div>
                      <div class="flex-1 min-w-0 ms-2 mt-2">
                        <p class="text-sm font-semibold text-gray-900 truncate dark:text-white">
                          Introduction to Forex
                        </p>
                        <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi nam modi
                          necessitatibus repellendus numquam!
                        </p>
                        <div class="duration pt-2">
                          <div class="flex h-auto items-center gap-1">
                            <Icon icon="memory:time-sand" width="18px" height="15px" class="text-blue-400" />
                            <p class="text-xs text-gray-500 font-medium">Duration: 30m</p>
                          </div>
                        </div>
                      </div>
                      <!-- <div
                            class="inline-flex gap-1 items-center text-base font-medium text-white text-xs bg-blue-500 md:rounded rounded-full p-2 ml-4 text-gray-900 dark:text-white">
                            <Icon icon="solar:play-bold" width="14px" height="14px" />
                            <span class="hidden sm:block">Watch highlight</span>
                          </div> -->
                    </div>
                  </li>

                  <li class="py-4 mb-4 sm:py-0 p-3 rounded-lg border border-gray-100">
                    <div class="relative">
                      <div class="absolute top-2 right-4">
                        <Icon icon="jam:padlock-open" class="text-blue-500" />
                      </div>
                    </div>
                    <div class="flex items-center">
                      <div class="flex-shrink-0">
                        <img class="w-20 h-20 rounded-full" src="../assets/img/hero.jpeg" alt="Neil image" />
                      </div>
                      <div class="flex-1 min-w-0 ms-2 mt-2">
                        <p class="text-sm font-semibold text-gray-900 truncate dark:text-white">
                          Introduction to Forex
                        </p>
                        <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi nam modi
                          necessitatibus repellendus numquam!
                        </p>
                        <div class="duration pt-2">
                          <div class="flex h-auto items-center gap-1">
                            <Icon icon="memory:time-sand" width="18px" height="15px" class="text-blue-400" />
                            <p class="text-xs text-gray-500 font-medium">Duration: 30m</p>
                          </div>
                        </div>
                      </div>
                      <!-- <div
                            class="inline-flex gap-1 items-center text-base font-medium text-white text-xs bg-blue-500 md:rounded rounded-full p-2 ml-4 text-gray-900 dark:text-white">
                            <Icon icon="solar:play-bold" width="14px" height="14px" />
                            <span class="hidden sm:block">Watch highlight</span>
                          </div> -->
                    </div>
                  </li>

                  <li class="py-4 mb-4 sm:py-0 p-3 rounded-lg border border-gray-100">
                    <div class="relative">
                      <div class="absolute top-2 right-4">
                        <Icon icon="jam:padlock-open" class="text-blue-500" />
                      </div>
                    </div>
                    <div class="flex items-center">
                      <div class="flex-shrink-0">
                        <img class="w-20 h-20 rounded-full" src="../assets/img/hero.jpeg" alt="Neil image" />
                      </div>
                      <div class="flex-1 min-w-0 ms-2 mt-2">
                        <p class="text-sm font-semibold text-gray-900 truncate dark:text-white">
                          Introduction to Forex
                        </p>
                        <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi nam modi
                          necessitatibus repellendus numquam!
                        </p>
                        <div class="duration pt-2">
                          <div class="flex h-auto items-center gap-1">
                            <Icon icon="memory:time-sand" width="18px" height="15px" class="text-blue-400" />
                            <p class="text-xs text-gray-500 font-medium">Duration: 30m</p>
                          </div>
                        </div>
                      </div>
                      <!-- <div
                            class="inline-flex gap-1 items-center text-base font-medium text-white text-xs bg-blue-500 md:rounded rounded-full p-2 ml-4 text-gray-900 dark:text-white">
                            <Icon icon="solar:play-bold" width="14px" height="14px" />
                            <span class="hidden sm:block">Watch highlight</span>
                          </div> -->
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="col border rounded-lg shadow p-4 mx-5 mt-4">
            <h1 class="text-md text-center text-black">Next On</h1>
            <p class="text-gray-300 text-sm py-1 text-center">Get a peek into next week</p>

            <div class="flow-root mt-8">
              <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
                <li class="sm:py-0 p-3 rounded-lg border border-gray-100">
                  <div class="relative">
                    <div class="absolute top-2 right-4">
                      <Icon icon="jam:padlock-open" class="text-blue-500" />
                    </div>
                  </div>
                  <div class="flex items-center">
                    <div class="flex-shrink-0">
                      <img class="w-20 h-20 rounded-full" src="../assets/img/hero.jpeg" alt="Neil image" />
                    </div>
                    <div class="flex-1 min-w-0 ms-2 mt-2">
                      <p class="text-sm font-semibold text-gray-900 truncate dark:text-white">
                        Introduction to Forex
                      </p>
                      <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi nam modi
                        necessitatibus repellendus numquam!
                      </p>
                      <div class="duration pt-2">
                        <div class="flex h-auto items-center gap-1">
                          <Icon icon="memory:time-sand" width="18px" height="15px" class="text-blue-400" />
                          <p class="text-xs text-gray-500 font-medium">Duration: 30m</p>
                        </div>
                      </div>
                    </div>
                    <!-- <div
                            class="inline-flex gap-1 items-center text-base font-medium text-white text-xs bg-blue-500 md:rounded rounded-full p-2 ml-4 text-gray-900 dark:text-white">
                            <Icon icon="solar:play-bold" width="14px" height="14px" />
                            <span class="hidden sm:block">Watch highlight</span>
                          </div> -->
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>


      <div class="flex gap-1 pt-12 py-5 h-auto items-center">
          <Icon icon="formkit:group" class="text-xl" />
          <h1 class="text-gray-900 font-medium text-md">Market Overview</h1>
        </div>
      <div class="bg-white border bordere-gray-200 shadow py-8">
       
        <ChartVue />
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

export default {
  // eslint-disable-next-line vue/no-unused-components
  components: { sidebar, Icon, OverviewVue, bottomNavVue, ChartVue }
}
</script>

<style></style>
