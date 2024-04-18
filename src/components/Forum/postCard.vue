<template>
    <main class="">
        <div class="card border rounded shadow">
            <div class="card-head p-3 pb-0 flex items-center justify-between">
                <div class="flex gap-2 items-center">
                    <img src="@/assets/img/bg-1.png" class="w-10 h-10 object-cover rounded-full" alt="" srcset="">
                    <h1>{{ post.name }}</h1>

                </div>

                <div class="date">
                    <span class="date text-gray-500 text-xs">5 months ago</span>
                </div>
            </div>

            <div class="card-body pt-1 px-3">
                <div class="content">
                    <p class="text-gray-700 py-2 text-sm">
                        {{ post.content }}
                    </p>
                </div>
            </div>

            <div class="card-footer border-t p-3 bg-white">
                <div class="icons flex items-center gap-3">
                    <div class="like-button flex items-center gap-1">
                        <Icon icon="ph:heart-light" />
                        <span class="text-xs">10k</span>
                    </div>

                    <div class="comment-button flex items-center gap-1">
                        <Icon icon="fluent:comment-20-regular" />
                        <span class="text-xs">10k</span>
                    </div>

                    <div class="share-button flex items-center gap-1">
                        <Icon icon="material-symbols-light:share-outline" />
                        <span class="text-xs">10k</span>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
import { Icon } from '@iconify/vue'
export default {
    props: {
        post: {
            type: Array,
            required: true
        }
    },
    components: {
        Icon
    }
}
</script>

<style></style>