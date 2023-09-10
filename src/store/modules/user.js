import axios from "axios";

export const user = {
    state: {
        user: null,
    },
    actions: {
        async register({dispatch}, form) {
            console.log(form)
            await axios.post('/user/register', form)
            await dispatch('logIn', form)
        },
        async logIn({dispatch}, user) {
            await axios.post('/user/login', user)
            await dispatch('viewMe')
        },
        async logOut({commit}) {
            commit('logOut', null)
        },
        async viewMe({commit}) {
            let data = await axios.get('/user/whoami')
            await commit('setUser', data)
        },
    },
    mutations: {
        setUser(state, username) {
            state.user = username;
        },
        logOut(state, user) {

            state.user = user;
        },
    }
}
