
import { useEffect, useState } from 'react'
import { getUsers } from '../services/userService'  // nota: usa la ruta relativa correcta

export function useUsers() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
      //  await new Promise(resolve => setTimeout(resolve, 5000))  // 2000 ms = 2 segundos
        const data = await getUsers()
        setUsers(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  return { users, loading, error }
}