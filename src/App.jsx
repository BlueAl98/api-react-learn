
import './App.css'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import LoginPage from './pages/login/LoginPage'
import HomePage from './pages/home/HomePage'
import { useAuth } from './context/AuthProvider'


function App() {

   const { token } = useAuth()

    console.log('token', token)
   return (
      <BrowserRouter>
      <Routes>
      <Route path="/" element={token ? <Navigate to="/home" /> : <LoginPage />} />
      <Route path="/home" element={token ? <HomePage /> : <Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
   )


}
export default App