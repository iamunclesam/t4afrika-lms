<template>
  <main>

    <div class="flow-root ">
      <div class="flex justify-between h-auto items-center">
        <h1 class="text-gray-900 my-4 font-semibold">Available Task</h1>
        <h1 class="text-purple-600">see all</h1>
      </div>
      <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">


        <li @click.prevent="goToLink" class="py-4 mb-4 bg-purple-700 sm:py-2 px-4 my-3 rounded-lg shadow">

          <div class="flex gap-4 items-center">
            <div class="flex-shrink-0">
              <img class="w-12 h-12 rounded-full object-cover" src="@/assets/img/course-bg.jpg" alt="Neil image" />
            </div>
            <div class="flex-1 min-w-0 ms-2 mt-2">
              <p class="text-xs font-semibold text-gray-300 truncate dark:text-white">
                Introduction to Forex
              </p>
              <!-- <p class="text-xs text-gray-400 truncate dark:text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi nam modi
                necessitatibus repellendus numquam!
              </p> -->
              <div class="duration pt-2">
                <div class="flex h-auto items-center gap-1">

                  <Icon icon="mingcute:time-fill" class="text-yellow-300 font-extrabold text-sm" />
                  <p class="text-xs text-gray-200 font-medium">30m</p>
                </div>
              </div>
            </div>
            <div class="inline-flex gap-1">
              <span
                class="bg-yellow-300 text-white text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">Yellow</span>
            </div>
          </div>
        </li>

        <li @click.prevent="goToLink" class="py-4 mb-4 bg-purple-700 sm:py-2 px-4 my-3 rounded-lg shadow">

          <div class="flex gap-4 items-center">
            <div class="flex-shrink-0">
              <img class="w-12 h-12 rounded-full object-cover" src="@/assets/img/course-bg.jpg" alt="Neil image" />
            </div>
            <div class="flex-1 min-w-0 ms-2 mt-2">
              <p class="text-xs font-semibold text-gray-300 truncate dark:text-white">
                Introduction to Forex
              </p>
              <!-- <p class="text-xs text-gray-400 truncate dark:text-gray-400">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi nam modi
      necessitatibus repellendus numquam!
    </p> -->
              <div class="duration pt-2">
                <div class="flex h-auto items-center gap-1">

                  <Icon icon="mingcute:time-fill" class="text-yellow-300 font-extrabold text-sm" />
                  <p class="text-xs text-gray-200 font-medium">30m</p>
                </div>
              </div>
            </div>
            <div class="inline-flex gap-1">
              <span
                class="bg-yellow-300 text-white text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">Yellow</span>
            </div>
          </div>
        </li>

      </ul>
    </div>
  </main>
</template>

<script>
import { defineComponent } from 'vue'
import { Icon } from '@iconify/vue'
export default defineComponent({
  name: 'WrapAround',
  components: {
    Icon
  },
})
</script>