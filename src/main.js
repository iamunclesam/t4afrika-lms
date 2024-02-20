import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { initFlowbite } from 'flowbite';


router.afterEach(() => {
  initFlowbite();
});

const app = createApp(App)

app.use(router)

app.mount('#app')
