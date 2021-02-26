import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        currentPage: "Home"
    },
    mutations: {
        setPage(state, payload) {
            state.currentPage = payload
        }
    },
    actions: {},
    getters: {
        getPage: state => {
            return state.currentPage
        }
    }
})
