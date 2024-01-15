import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import Post from './pages/Post'

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<LoginPage/>} />
        <Route path='/signup' element={<SignupPage/>} />
        <Route path='/post' element={<Post/>} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
