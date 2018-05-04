
import axios from 'axios'
import store from '../store'

const API_URL = 'http://localhost:8888/' // dev

const client = axios.create({
  baseURL: API_URL,
  timeout: 3000
})

client.interceptors.request.use(function (config) {
  config.headers.common['Authorization'] = 'Bearer ' + store.getters.token

  return config
})

export { API_URL, client }
