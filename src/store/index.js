import {createStore} from 'vuex'
import {appointments} from '@/store/modules/appointments'
import {adminModule} from "@/store/adminModule";
import {user} from "@/store/modules/user";
import {bots} from "@/store/modules/bots";

export default createStore({
    state: {
        isAuth: false,
        curCity: 'MOW2'
    },
    getters:{
        curCity:(state)=>state.curCity
    },
    modules: {
        appointment: appointments,
        admin: adminModule,
        user: user,
        bots: bots,
    }

})
