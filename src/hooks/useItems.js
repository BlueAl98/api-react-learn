import { getItems } from "../services/itemService"
import { useState } from 'react'


export function useItems() {
    const [error, setError] = useState(null)
  
    const getApiItems = async () => {
      try {
        const data = await getItems()
        return data
      } catch (err) {
        setError(err.message)
        throw err
      }
    }
  
    return { getApiItems, error }
  }