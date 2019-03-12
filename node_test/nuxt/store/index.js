import Vuex from 'vuex'

const store = () => new Vuex.Store({


    state: {
        count: 0
    },
    mutations: {
      increment (state, value) {
        state.count += value
    },
    init (state, value) {
      value = value || 0 //
      state.count = value
    }
  }
})
export default store
