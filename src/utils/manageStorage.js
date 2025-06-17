export function getToken() {
    return localStorage.getItem('token')
  }
  
  export function logoutUser() {
    localStorage.removeItem('token')
  }