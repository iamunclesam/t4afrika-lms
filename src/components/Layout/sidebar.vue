<template>
  <main>
    <div class="">
      <nav class="fixed top-0 z-50 w-full md:bg-white bg-purple-700 md:border-b md:border-gray-200 dark:bg-gray-800 dark:border-gray-700 py-2">
        <div class="px-1 py-3 lg:px-5 lg:pl-3">
          <div class="flex items-center justify-between gap-8">
            <div class="flex md:flex-shrink-0 items-center justify-start rtl:justify-end">
              <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar"
                type="button"
                class="inline-flex items-center p-2 text-sm text-white md:text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                <span class="sr-only">Open sidebar</span>
                <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path clip-rule="evenodd" fill-rule="evenodd"
                    d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z">
                  </path>
                </svg>
              </button>
              <a href="/" class="flex ms-2 md:me-24">
                <h1 class="text-white sm:text-gray-900 font-medium text-2xl">Trade<span class="text-yellow-300">4Afrika</span></h1>
               </a>
            </div>

            <!-- Search bar -->
            <div class="hidden md:block relative md:flex-shrink-0">
              <h1 class="text-md text-gray-600">Dashboard</h1>
              <p class="date text-xs text-gray-300"><span class="text-blue-500">Monday</span> 08 February 2024</p>
            </div>

            <div class="flex w-100 items-center ml-auto mr-4 md:mr-10">
              <div class="hidden md:flex items-center ms-3 md:gap-7">
                <div class="relative">
                  <Icon icon="material-symbols-light:mail-outline" width="26" class="text-gray-700" />
                  <div
                    class="absolute inline-flex items-center justify-center w-3 h-3 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-0.5 -end-0 dark:border-gray-900">
                  </div>
                </div>

                <div class="relative">
                  <Icon icon="ph:bell-light" width="24" class=" text-gray-700" />
                  <div
                    class="absolute inline-flex items-center justify-center w-3 h-3 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-1 -end-0 dark:border-gray-900">
                  </div>
                </div>

                <div class="md:flex md:gap-4">
                  <button type="button"
                    class="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                    aria-expanded="false" data-dropdown-toggle="dropdown-user">
                    <span class="sr-only">Open user menu</span>
                    <img class="w-10 h-10 rounded-full md:p-0"
                      src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="user photo">

                  </button>
                  <div class="leading-none h-10 hidden md:block">
                    <h1 class="text-sm ">Adeyemi Samuel</h1>
                    <span class="text-xs text-gray-500 -pt-1">@unclesam</span>
                  </div>
                </div>


                <div
                  class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600"
                  id="dropdown-user">
                  <!-- ... existing user dropdown ... -->
                </div>
              </div>

              <div class="md:hidden md:gap-4">
                  <button type="button"
                    class="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                    aria-expanded="false" data-dropdown-toggle="dropdown-user">
                    <span class="sr-only">Open user menu</span>
                    <img class="w-12 h-12 rounded-full md:p-0"
                      src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="user photo">

                  </button>
                  <div class="leading-none h-10 hidden md:block">
                    <h1 class="text-sm ">Adeyemi Samuel</h1>
                    <span class="text-xs text-gray-500 -pt-1">@unclesam</span>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </nav>
    </div>





    <aside id="logo-sidebar"
      class="fixed top-20 shadow-lg bg-blue-500 left-0 z-40 w-64 h-screen pt-5 transition-transform -translate-x-full bg-white border mb-20 border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
      aria-label="Sidebar">
      <div class="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
        <ul class="space-y-2 font-medium">
          <h1 class="my-3 mx-2.5 text-sm text-gray-500">Home</h1>
          <li>
            <router-link to="/"
              class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-blue-700 hover:text-white dark:hover:bg-gray-700 group">
              <Icon icon="majesticons:home" width="20" class="text-purple-700" />
              <span class="ms-3 text-sm">Dashboard</span>
            </router-link>
          </li>


          <li>
            <router-link to="/"
              class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-blue-700 hover:text-white dark:hover:bg-gray-700 group">
              <Icon icon="heroicons:user-group-solid" width="20" class="text-purple-700"/>
              <span class="ms-3 text-sm">Forum</span>
            </router-link>
          </li>

          <!-- <li>
          <a href="#"
            class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-red-700 hover:text-white dark:hover:bg-gray-700 group">
            <Icon icon="mingcute:notification-fill" width="20" class="text-blue-500"/>
            <span class="flex-1 ms-3 whitespace-nowrap">Notifications</span>
            <span
              class="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">3</span>
          </a>
        </li> -->

        </ul>


        <ul class="space-y-2 mt-8 font-medium">
          <h1 class="my-3 mx-2.5 text-sm text-gray-500">Academy</h1>

          <!-- <li>
            <router-link to="/movies"
              class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
              <Icon icon="vaadin:academy-cap" width="20" class="text-blue-500" />
              <span class="flex-1 ms-3 whitespace-nowrap">Academy</span>
            </router-link>
          </li> -->


          <li>
            <router-link to="/academy-resources"
              class="flex justify-between w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
              <div class="flex">
                <Icon icon="ph:books-fill" width="20" class="text-purple-700"/>
                
                <span class="flex-1 ms-3 whitespace-nowrap text-sm">Resources</span>
              </div>
            </router-link>

            <router-link to="/academy-billing"
              class="flex justify-between w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
              <div class="flex">
                <Icon icon="solar:money-bag-bold" width="20" class="text-purple-700" />
                <span class="flex-1 ms-3 whitespace-nowrap text-sm">Billing</span>
              </div>
            </router-link>

            <button type="button"
              class="flex justify-between w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
              <div class="flex">
                <Icon icon="vaadin:academy-cap" width="20" class="text-purple-700" />
                <span class="flex-1 ms-3 whitespace-nowrap text-sm">FAQ</span>
              </div>
            </button>
          </li>


          <!-- <li>
            <router-link to="/my-collections"
              class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
              <Icon icon="fa6-solid:money-bill-trend-up" width="20" class="text-blue-500" />
              <span class="flex-1 ms-3 whitespace-nowrap">Signal Booth</span>
            </router-link>
          </li>
 -->

          <!-- <li>
            <button type="button"
              class="flex justify-between w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
              <div class="flex">
                <Icon icon="fa6-solid:money-bill-trend-up" width="20" class="text-blue-500" />
                <span class="flex-1 ms-3 whitespace-nowrap text-sm">Signal Booth</span>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="20px" height="20px" viewBox="0 0 24 24">
                <path fill="currentColor"
                  d="M18 12.998h-5v5a1 1 0 0 1-2 0v-5H6a1 1 0 0 1 0-2h5v-5a1 1 0 0 1 2 0v5h5a1 1 0 0 1 0 2" />
              </svg>
            </button>
            <ul id="dropdown-example" class="hidden py-2 space-y-2">
              <li>
                <a href="#"
                  class="flex items-center w-full p-2 text-gray-900 text-sm transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Resources</a>
              </li>
              <li>
                <a href="#"
                  class="flex items-center w-full p-2 text-gray-900 text-sm transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Billing</a>
              </li>
              <li>
                <a href="#"
                  class="flex items-center w-full p-2 text-gray-900 text-sm transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Faq</a>
              </li>
            </ul>
          </li> -->




          <!-- 
          <li>
            <router-link to="/profile"
              class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
              <Icon icon="eos-icons:ai" width="23" class="text-blue-500" />
              <span class="flex-1 ms-3 whitespace-nowrap">TradeAi</span>
            </router-link>
          </li> -->


          <!-- <li>
            <button type="button"
              class="flex justify-between w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
              <div class="flex">
                <Icon icon="eos-icons:ai" width="23" class="text-blue-500" />
                <span class="flex-1 ms-3 whitespace-nowrap text-sm">TradeAi</span>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="20px" height="20px" viewBox="0 0 24 24">
                <path fill="currentColor"
                  d="M18 12.998h-5v5a1 1 0 0 1-2 0v-5H6a1 1 0 0 1 0-2h5v-5a1 1 0 0 1 2 0v5h5a1 1 0 0 1 0 2" />
              </svg>
            </button>
            <ul id="dropdown-example" class="hidden py-2 space-y-2">
              <li>
                <a href="#"
                  class="flex items-center w-full p-2 text-gray-900 text-sm transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Resources</a>
              </li>
              <li>
                <a href="#"
                  class="flex items-center w-full p-2 text-gray-900 text-sm transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Billing</a>
              </li>
              <li>
                <a href="#"
                  class="flex items-center w-full p-2 text-gray-900 text-sm transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Faq</a>
              </li>
            </ul>
          </li> -->



        </ul>

        <ul class="pt-4 mt-4 space-y-2 font-medium border-t border-gray-200 dark:border-gray-700">
          <h1 class="my-3 mx-2.5 text-sm text-gray-500">Account</h1>
          <li>
            <a href="#"
              class="flex items-center p-2 text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
              <Icon icon="material-symbols:account-child" width="20" class="text-purple-700" />
              <span class="ms-3 text-sm">Manage account</span>
            </a>
          </li>
          <li>
            <a href="#"
              class="flex items-center p-2 text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
              <Icon icon="icon-park-solid:help" width="20" class="text-purple-700"/>
              <span class="ms-3 text-sm">Help</span>
            </a>
          </li>

          <li>
            <a @click="handleLogout"
              class="flex items-center p-2 text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
              <Icon icon="icon-park-solid:help" width="20" class="text-purple-700"/>
              <span class="ms-3 text-sm">Sign Out</span>
            </a>
          </li>

        </ul>
      </div>
    </aside>

    <!-- <div class="p-4 sm:ml-64">
  
</div> -->

  </main>
</template>

<script>
import { Icon } from '@iconify/vue';
import { initFlowbite } from 'flowbite';

export default {
  components: { Icon },

  mounted() {
    initFlowbite()
  },

  methods: {
    async handleLogout() {
      try {
        await this.$store.dispatch('logOut');
        this.$router.push('/login')
      }

      catch(error) {
        console.error('Error Logging out:', error)

      }
    }
  }
}
</script>

<style></style>