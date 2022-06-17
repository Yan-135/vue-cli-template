const state = {
    music: null,
}
const mutations = {
    SET_music: (state, value) => {
        state.music = value
    },
}


const actions = {
    music({ commit, state }) {
        return new Promise((resolve, reject) => {
            commit('SET_music', "sds4544")
        })
    },
}
export default {
    state,
    mutations,
    actions
}