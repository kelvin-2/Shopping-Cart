import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import NavBar from './components/Navbar'

function App() {
  return (
   <BrowserRouter>
   <NavBar/>
   </BrowserRouter>
  )
}

export default App
