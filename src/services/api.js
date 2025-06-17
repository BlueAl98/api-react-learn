import axios from 'axios'
import { getToken, logoutUser } from '../utils/manageStorage'

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

// 401 not allow
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      logoutUser()
      window.location.href = '/' // Force redirect to login
    }
    return Promise.reject(error)
  }
)




  export default api