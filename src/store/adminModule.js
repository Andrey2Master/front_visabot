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
        setLayout(state, layout){
            state.layout = layout
        }

    }, actions: {
        testAction(){
            console.log('Test action')
        },
        toggleSidebar(context) {
            console.log('toggleSidebar')
            context.commit('toggleSidebar')
        }
    }
}
