import {createStore} from 'vuex'
import {appointmentModule} from '@/store/appointmentModule'
import {adminModule} from "@/store/adminModule";

export default createStore({
    state: {
        isAuth: false,
    },
    modules: {
        appointment: appointmentModule,
        admin: adminModule,
    }

})
