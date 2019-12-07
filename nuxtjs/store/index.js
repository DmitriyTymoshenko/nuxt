export const state = () => ({
token : null
});

export const mutations = {
  SET_TOKEN(state , payload) {
    state.token = payload
  },
  CLEAR_TOKEN(state) {
    state.token = null
  }
}

export const actions = {
  // вызываеться при старте сервера
  nuxtServerInit({dispatch }){
    console.log('nuxtServerInit')
  }  ,
   login ({commit}) {
    commit('SET_TOKEN' , 'truetoken')
  },
  logOut ({commit}) {
     commit('CLEAR_TOKEN' )
  }
}

export const getters = {
  hasToken : s => !!s.token   // s - state
}
