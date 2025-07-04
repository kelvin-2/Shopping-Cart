import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import NavBar from './components/Navbar'
import Layout  from './components/Layout'
import Home from './Pages/HomePage'
import {CartProvider} from './components/CartContext';
import Cart from './Pages/CartPage'

function App() {
  return (
    <BrowserRouter>
     <CartProvider>
      <Routes>
          <Route path="/" element ={<Layout/>}>
            <Route index element ={<Home/>}/>
            <Route path = "/carts" element={<Cart/>}/>
            
          </Route>
      </Routes>
     </CartProvider>
    </BrowserRouter>
  )
}

export default App
