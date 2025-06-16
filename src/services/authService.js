import api from "./api"


export const authUser = async (credentials) => {
    const response = await api.post('/login', credentials)
    return response.data
  }