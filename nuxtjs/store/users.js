export const state = () => ({
  users : []
});

export const mutations = {
  SET_USERS(state , payload) {
    state.users = payload
  }
}

export const actions = {
  async fetch({commit}) {
    const users = await this.$axios.$get('https://jsonplaceholder.typicode.com/users')
    commit('SET_USERS' , users)
  }
}

export const getters = {
  users : s => s.users   // s - state
}
