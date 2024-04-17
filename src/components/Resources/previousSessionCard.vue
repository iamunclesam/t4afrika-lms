<template>
    <main>
        <div class="relative">
            <div class="absolute top-0 right-2">
                <Icon icon="jam:padlock-open" class="text-purple-700" />
            </div>
        </div>
        <div class="flex items-center">
            <div class="flex-shrink-0">
                <img class="md:w-22 md:h-24 h-22 w-24 rounded-md object-cover" src="@/assets/img/course-bg.jpg"
                    alt="Neil image" />
            </div>
            <div class="flex-1 min-w-0 ms-4">
                <p class="text-sm font-semibold text-gray-900 truncate dark:text-white">
                    Introduction to Forex Trading - WK-2
                </p>
                <p class="text-xs md:w-84 w-32 truncate md:line-clamp-2 pr-20 text-gray-500  dark:text-gray-400">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi nam
                    
                </p>
                <div class="duration py-3 flex justify-between">
                    <div class="flex gap-1">
                        <Icon icon="ri:time-line" class="text-sm text-purple-700" />
                        <p class="text-xs text-gray-500 font-medium">45m 30s</p>
                    </div>

                    <div class="flex gap-1">
                        <Icon icon="clarity:date-line" width="16px" height="16px" class="text-gray-500" />
                        <p class="text-xs text-gray-500 font-medium">Yesterday</p>
                    </div>


                </div>
            </div>
            <div
                class="inline-flex gap-1 items-center text-base font-medium text-white text-xs bg-purple-700 rounded-full p-2 md:p-2 ml-4 text-gray-900 dark:text-white">
                <Icon icon="solar:play-bold" class="md:text-xl text-sm" />
            </div>
        </div>
    </main>
</template>

<script>
import { Icon } from '@iconify/vue'
export default {
components: {Icon}
}
</script>

<style></style>