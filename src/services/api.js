import axios from 'axios'
import { getToken } from '../utils/manageStorage'

const api = axios.create({
    baseURL: 'http://localhost:8080/api',
    timeout: 5000,
    headers: {
      'Content-Type': 'application/json'
    }
  })

 // Request interceptor: attach token to every request
api.interceptors.request.use(
  (config) => {
    const token = getToken()
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => Promise.reject(error)
)




  export default api