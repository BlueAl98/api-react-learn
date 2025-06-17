import api from "./api"


export const getItems = async () => {
    const response = await api.get('/items/test')
    return response.data
  }