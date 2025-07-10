import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import AboutPage from './components/AboutPage'
import Navbar from './components/NavBar'
import Footer from './components/Footer'
import RegisterPage from './components/RegisterPage'
import LoginPage from './components/LoginPage'
import { Toaster } from 'react-hot-toast'
import DashboardLayout from './components/dashboard/DashboardLayout'

function App() {

  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <Toaster position='bottom-center'/>
        <Routes>
            <Route path='/' element={<LandingPage/>}/>
            <Route path='/about' element={<AboutPage/>}/>
            <Route path='/register' element={<RegisterPage/>}/>
            <Route path='/login' element={<LoginPage/>}/>
            <Route path='/dashboard' element={<DashboardLayout/>}/>
        </Routes>
      <Footer/>
       </BrowserRouter>
    </>
  )
}

export default App
