import { createApp } from 'vue'
import App from './App.vue'
import './assets/css/tailwind.css'
import router from "@/router/routre";
import store from "./store/index";
import axios from "axios";

axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'http://127.0.0.1:8000/';  // the FastAPI backend
// axios.defaults.baseURL = 'https://visa-bro.ru/';  // the FastAPI backend
// axios.defaults.baseURL = 'http://212.22.94.99/api';  // the test FastAPI backend
// axios.defaults.baseURL = '/api';  // the test FastAPI backend

const app = createApp(App)
// components.forEach(component=>{
//     app.component(component.name, component)
// })
app.use(router)
app.use(store)
app.mount('#app')

axios.interceptors.response.use(undefined, async function (error) {
    if (error) {
        const originalRequest = error.config;
        if (error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;
            await store.dispatch('logOut');
            return router.push('/login')
        }
    }
});
