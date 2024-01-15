import { useState, useEffect, useContext } from 'react'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import './App.css'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import Post from './pages/Post'
import { AuthContext } from './firebase/context'
import { Firebase } from './firebase/config';
import SellingPage from './pages/SellingPage';

function App() {
  const auth = getAuth(Firebase)
  const {  setUser } = useContext(AuthContext)
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        setUser(user)
      } else {
       console.log("logOut");
      }
    });
  }, [])
  return (
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignupPage />} />
        <Route path='/post' element={<Post />} />
        <Route path='/sell' element={<SellingPage/>} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
