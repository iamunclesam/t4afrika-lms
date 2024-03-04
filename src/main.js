import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import store from './stores'
import router from './router'
import { initFlowbite } from 'flowbite';

router.afterEach(() => {
  initFlowbite();
});


const app = createApp(App)
app.use(router)

// app.use(AOS)
app.use(store)
app.mount('#app')
