

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import VCalendar from 'v-calendar';

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.use(VCalendar)
app.mount('#app')
