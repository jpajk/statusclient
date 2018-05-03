
import { client } from '../../lib/client'

const state = {
  isAuthenticated: false,
  token: ''
}

const getters = {
  isAuthenticated (state) {
    return state.isAuthenticated
  },
  token (state) {
    return state.token
  }
}

const mutations = {
  SET_IS_AUTHENTICATED (state, payload) {
    state.isAuthenticated = payload
  },
  SET_TOKEN (state, payload) {
    state.token = payload
  }
}

const actions = {
  checkIsAuthenticated () {
    return new Promise((resolve, reject) => {
      client.get('/users/is-authenticated', {
        params: {
          token: this.getters.token
        }
      }).then(res => {
        resolve(res.data.isAuthenticated)
      })
    })
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
