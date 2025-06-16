import axios from 'axios' 

const api = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    timeout: 5000,
  })


  // Simple GET call
export const getUsers = async () => {
  const response = await api.get('/users')
  return response.data
}