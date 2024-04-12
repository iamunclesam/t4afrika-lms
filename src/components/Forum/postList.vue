<template>
    <main>
        <div class="grid">
            <div class="col">
                <div class="post-form mb-4">
                    <postFormVue />
                </div>
                <div class="post-list mb-3" v-for="post in posts" :key="post.id">
                    <postCardVue :post="post" />
                </div>
            </div>
        </div>
    </main>
</template>

<script>
import postCardVue from './postCard.vue'
import postFormVue from './postForm.vue'

export default {
    components: { postCardVue, postFormVue },
    data() {
        return {
            posts: [
                {
                    name: 'Samuel',
                    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse tenetur corrupti perspiciatis incidunt vitae quam distinctio dicta officia sequi libero?'
                },

                {
                    name: 'James',
                    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse tenetur corrupti perspiciatis incidunt vitae quam distinctio dicta officia sequi libero?'
                },

                {
                    name: 'James',
                    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse tenetur corrupti perspiciatis incidunt vitae quam distinctio dicta officia sequi libero?'
                },

                {
                    name: 'James',
                    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse tenetur corrupti perspiciatis incidunt vitae quam distinctio dicta officia sequi libero?'
                }
            ]
        }
    }
}
</script>

<style></style>