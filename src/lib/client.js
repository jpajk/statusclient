
import axios from 'axios'
import store from '../store'
import router from '../router'

const API_URL = 'http://localhost:8888/' // dev

const client = axios.create({
  baseURL: API_URL,
  timeout: 3000
})

client.interceptors.request.use(function (config) {
  config.headers.common['Authorization'] = 'Bearer ' + store.getters.token

  return config
})

client.interceptors.response.use(function (response) {
  let responseData = response.data.data

  response.getFromData = function (key) {
    if (!response.getStatus()) {
      return null
    }

    if (responseData && responseData[key]) {
      return responseData[key]
    }

    return null
  }

  response.getStatus = function () {
    if (!response.data.status) {
      return 0
    }

    return response.data.status
  }

  response.getMessage = function () {
    if (!response.data.message) {
      return ''
    }

    return response.data.message
  }

  return response
}, (err) => {
  if (err.response.status === 400) {
    console.log(err, store, router)
    store.commit('CLEAR')
    router.push({name: 'Login'})
  }
})

export { API_URL, client }
