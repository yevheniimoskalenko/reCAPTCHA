export const state = () => ({
  error: null
})
export const mutations = {
  SetError(state, payload) {
    state.error = payload
  }
}
export const getters = {}
export const actions = {
  async create({ commit }, payload) {
    try {
      await this.$axios.$post('/api/create', payload)
    } catch (e) {
      commit('SetError', e)
      throw e
    }
  },
  async login({ comit }, payload) {
    try {
      await this.$axios.$post('/api/login', payload)
    } catch (e) {
      comit('SetError', e)
    }
  }
}
