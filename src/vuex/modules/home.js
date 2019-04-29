import * as CONSTANTS from '../mutation-types'

const state = {
  isLoading: false
}

const getters = {
  isLoadingGetter (state) {
    return state.isLoading
  }
}

const actions = {
  isLoadingSetter ({ commit }, isLoading) {
    commit({
      type: CONSTANTS.IS_LOADING_SETTER,
      isLoading
    })
  }
}

const mutations = {
  [CONSTANTS.IS_LOADING_SETTER] (state, payload) {
    state.isLoading = payload.isLoading
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
