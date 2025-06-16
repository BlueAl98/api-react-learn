
import './App.css'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPage from './pages/login/LoginPage'
import HomePage from './pages/home/HomePage'

function App() {

   return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
   )


}
export default App