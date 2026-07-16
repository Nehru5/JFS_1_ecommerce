import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Homepage from "./pages/Homepage"
import Signup from './pages/Signup'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import ProductDetails from './pages/ProductDetails'
const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/productdetails/:id' element={<ProductDetails/>}/>
    </Routes>
    </>
  )
}

export default App