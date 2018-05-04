
import { client } from '../../lib/client'

const state = {
  isAuthenticated: false,
  token: '',
  currentUser: {}
}

const getters = {
  isAuthenticated (state) {
    return state.isAuthenticated
  },
  token (state) {
    return state.token
  },
  currentUser (state) {
    return state.currentUser
  }
}

const mutations = {
  SET_IS_AUTHENTICATED (state, payload) {
    state.isAuthenticated = payload
  },

  SET_TOKEN (state, payload) {
    state.token = payload
  },

  SET_CURRENT_USER (state, payload) {
    state.currentUser = payload
  }
}

const actions = {
  /**
   * @returns {Promise<any>}
   */
  checkIsAuthenticated () {
    return new Promise((resolve, reject) => {
      client.get('/users/is-authenticated', {
        params: {
          token: this.getters.token
        }
      }).then(res => {
        resolve(res.data.isAuthenticated)
      }).catch(err => {
        reject(err)
      })
    })
  },

  /**
   * @param context
   * @param email
   * @param password
   * @returns {Promise<any>}
   */
  loginOrRegister (context, { email, password }) {
    return new Promise((resolve, reject) => {
      client.post('/users/login-or-register', JSON.stringify({
        email: email,
        password: password
      })).then(res => {
        if (!res.data.current_user) {
          reject(new Error('Authentication failure'))
        }

        let currentUser = res.data.current_user

        context.commit('SET_CURRENT_USER', currentUser)
        context.commit('SET_TOKEN', currentUser.token)

        resolve(res)
      }).catch(err => {
        reject(err)
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
