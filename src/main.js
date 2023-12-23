import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia';
import naive from "naive-ui";

import router from "../routers";
const pinia = createPinia();
const app = createApp(App);
app.use(pinia);
app.use(router);
app.use(naive)
app.mount('#app');
