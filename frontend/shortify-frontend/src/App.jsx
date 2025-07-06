import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import AboutPage from './components/AboutPage'
import Navbar from './components/NavBar'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
            <Route path='/' element={<LandingPage/>}/>
            <Route path='/about' element={<AboutPage/>}/>
        </Routes>
      <Footer/>
       </BrowserRouter>
    </>
  )
}

export default App
