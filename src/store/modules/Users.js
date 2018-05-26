
import { client } from '../../lib/client'

const originalState = {
  isAuthenticated: false,
  token: '',
  currentUser: {}
}

const state = originalState

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
  CLEAR (state) {
    state = originalState
  },

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
      client.get('/users/is-authenticated').then(res => {
        resolve(res)
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
  login (context, { email, password }) {
    return new Promise((resolve, reject) => {
      client.post('/users/login', {
        email: email,
        password: password
      }).then(res => {
        let currentUser = res.getFromData('currentUser')

        if (!currentUser) {
          reject(new Error('Authentication failure'))
        }

        context.commit('SET_CURRENT_USER', currentUser)
        context.commit('SET_TOKEN', currentUser.token)

        resolve(res)
      }).catch(err => {
        reject(err)
      })
    })
  },

  register (context, { email, password }) {
    return new Promise((resolve, reject) => {
      client.post('/users/register', {
        email: email,
        password: password
      }).then(res => {
        let currentUser = res.getFromData('currentUser')

        if (!currentUser) {
          reject(new Error('Authentication failure'))
        }

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
