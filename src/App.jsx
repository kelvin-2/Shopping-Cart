import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import NavBar from './components/Navbar'
import Layout  from './components/Layout'
import Home from './Pages/HomePage'

function App() {
  return (
    <BrowserRouter>
     <Routes>
      <Route path="/" element ={<Layout/>}>
        <Route index element ={<Home/>}/>
        
      </Route>
     </Routes>
    </BrowserRouter>
  )
}

export default App
