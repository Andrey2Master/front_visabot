import axios from "axios";

export const appointments = {
    namespaced: true,
    state: {
        catalogTitle: '',
        appointmentData: []
    },
    getters: {
        totalAppointment: (state) => (
            state.appointmentData.length
        ),
    },
    mutations: {
        setAppointments(state, prodData, cityName) {
            state.catalogTitle = cityName
            state.appointmentData = prodData

        },
    },
    actions: {
        async createAppointment({dispatch}, appointment) {
            console.log(appointment)
            try {
                await axios.post("/application/create", appointment)
                await dispatch('getAppointments');
            } catch (e) {
                console.log(e)
            }
        },
        async getAppointments({commit}, params) {
            try {
                const response = await axios.get("/application", {params: {city: params}})
                console.log(response.data)
                commit("setAppointments", response.data, params);
            } catch (e) {
                console.log(e)
            }
        },
    }
}
