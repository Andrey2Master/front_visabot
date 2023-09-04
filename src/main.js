import { createApp } from 'vue'
import App from './App.vue'
import './assets/css/tailwind.css'
import router from "@/router/routre";
import store from "@/store";
// import components from "@/components/";

const app = createApp(App)
// components.forEach(component=>{
//     app.component(component.name, component)
// })
app.use(router)
app.use(store)
app.mount('#app')
