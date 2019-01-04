new Vuex.store({
  state: { isLoding: false },
  mutations: {
    setIsLoading(state, isLoading) {
      state.isLoading = isLoading
    }
  },
  modules: {
    users: {
      state: {
        list: []
      },
      mutations: {
        addUser(state, user) {
          state.list.push(user)
        }
      },
      actions: {
        addUser({ commit }, { user }) {
          commit('addUser', user)
        }
      }
    }
  }
})
