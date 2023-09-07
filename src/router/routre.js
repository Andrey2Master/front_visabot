import HelloWorld from "@/components/HelloWorld";
import {createRouter, createWebHistory} from "vue-router/dist/vue-router";
import AdminLayout from "@/layout/AdminLayout";
import VAppointmentList from "@/views/v-appointment-list";
const routes = [
    {
        path: '/',
        name: 'root',
        component: HelloWorld,
        meta: {layout: AdminLayout},
    },
    {
        path: '/appointment',
        name: 'appointment',
        component: VAppointmentList,
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
