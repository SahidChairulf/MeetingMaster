import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from "./store"
import VCalendar from 'v-calendar';
import 'v-calendar/style.css';

const app = createApp(App)

app.use(router)
app.use(store)
app.use(VCalendar, {})
app.mount('#app')
