import React, { useState} from 'react';
import { authUser } from '../services/authService';

export function useLogin() {
    const [error, setError] = useState(null)
  
    const login = async (email, password) => {
      try {
        const data = await authUser({ name: email, password })
        return data
      } catch (err) {
        setError(err.message)
        throw err
      }
    }
  
    return { login, error }
  }