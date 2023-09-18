export const adminModule = {
    namespaced: true,
    state: {
        sideBarOpen: false,
        layout: "empty"
    }, getters: {
        sideBarOpen: state => {
            return state.sideBarOpen
        }
    }, mutations: {
        toggleSidebar(state) {
            state.sideBarOpen = !state.sideBarOpen
        },
        hideSideBar(state){
            state.sideBarOpen = false
        }

    }, actions: {
        hideSideBar(context){
            context.commit('hideSideBar')
        },
        toggleSidebar(context) {
            console.log('toggleSidebar')
            context.commit('toggleSidebar')
        }
    }
}
