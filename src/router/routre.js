import HelloWorld from "@/components/HelloWorld";
import {createRouter, createWebHistory} from "vue-router/dist/vue-router";
import AdminLayout from "@/layout/AdminLayout";
import VAppointmentList from "@/views/appointments/v-appointment-list";
import appointmentCreate from "@/views/appointments/appointmentCreate";
import LoginView from "@/views/user/LoginView";
import EmptyLayout from "@/layout/EmptyLayout";
import RegisterView from "@/views/user/RegisterView";
import VBotsList from "@/views/bots/VBotsList";
import store from "@/store";

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
    {
        path: '/bots',
        name: 'Bots',
        component: VBotsList,
        meta: {layout: AdminLayout},
    },
]

const router = createRouter(
    {
        routes,
        history: createWebHistory(process.env.BASE_URL)
    }
)
router.afterEach(() => {
    store.commit('admin/hideSideBar')
})
export default router
