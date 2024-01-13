import { useState } from 'react'
import './App.css'
import NavBar from './component/NavBar/NavBar'
import Banner from './component/Banner/Banner'
import RowPost from './component/RowPost/RowPost'
import Footer from './component/Footer/Footer'
function App() {
  return (
    <>
      <NavBar/>
      <Banner/>
      <RowPost/>
      <Footer/>
    </>
  )
}

export default App
