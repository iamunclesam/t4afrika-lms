import './assets/main.css'
import store from './store'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { initFlowbite } from 'flowbite';


router.afterEach(() => {
  initFlowbite();
});

const app = createApp(App)

app.use(router)
app.use(store)
app.mount('#app')
