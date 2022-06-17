import Vue from 'vue'
import Vuex from 'vuex'
import montage from './modules/montage'
import getters from './getters'
Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        montage
    },
    getters
})

export default store