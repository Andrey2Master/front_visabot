import axios from "axios";

export const appointmentModule = {
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
        setAppointmentData(state, prodData, cityName) {
            state.catalogTitle = cityName
            state.appointmentData = prodData

        },
    },
    actions: {

        async getAppointmentFromApi({commit}, cityName) {

            try {
                const response = await axios.get("https://visa-bro.ru/application/"+ cityName,
                    {
                        method: "GET",
                    }
                )
                console.log(response.data.data)
                commit("setAppointmentData", response.data.data, cityName);

            } catch (e) {
                console.log(e)
            }


        },
    }
}
