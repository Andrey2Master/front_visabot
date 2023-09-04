import HelloWorld from "@/components/HelloWorld";
import {createRouter, createWebHistory} from "vue-router/dist/vue-router";
import AdminLayout from "@/layout/AdminLayout";
const routes = [
    {
        path: '/root',
        name: 'root',
        component: HelloWorld,
        meta: {layout: AdminLayout},
    },
]

const router = createRouter(
    {
        routes,
        history: createWebHistory(process.env.BASE_URL)
    }
)
export default router
