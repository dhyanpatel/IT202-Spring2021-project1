import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        currentPage: "Home",
        filters: null
    },
    mutations: {
        setPage(state, payload) {
            state.currentPage = payload
        },
        setFilters(state, payload) {
            state.filters = payload
        }
    },
    actions: {},
    getters: {
        getPage: state => {
            return state.currentPage
        },
        getFilters: state => {
            return state.filters
        }
    }
})
