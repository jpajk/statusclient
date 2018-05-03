
import axios from 'axios'

const API_URL = 'http://localhost:8888/' // dev

const client = axios.create({
  baseURL: API_URL,
  timeout: 3000
})

export { API_URL, client }
