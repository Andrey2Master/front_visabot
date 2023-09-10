import HelloWorld from "@/components/HelloWorld";
import {createRouter, createWebHistory} from "vue-router/dist/vue-router";
import AdminLayout from "@/layout/AdminLayout";
import VAppointmentList from "@/views/v-appointment-list";
import appointmentCreate from "@/views/appointmentCreate";
import LoginView from "@/views/user/LoginView";
import EmptyLayout from "@/layout/EmptyLayout";
import RegisterView from "@/views/user/RegisterView";

const routes = [
    {
        path: '/',
        name: 'Root',
        component: HelloWorld,
        meta: {layout: AdminLayout},
    },
    {
        path: '/register',
        name: 'Register',
        component: RegisterView,
        meta: {layout: AdminLayout},
    },
    {
        path: '/login',
        name: 'Login',
        component: LoginView,
        meta: {layout: EmptyLayout},
    },
    {
        path: '/appointment',
        name: 'Appointment',
        component: VAppointmentList,
        meta: {layout: AdminLayout},
    },
    {
        path: '/appointment/create',
        name: 'Appointment-create',
        component: appointmentCreate,
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
