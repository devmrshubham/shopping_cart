import React from 'react'
import 'react-toastify/dist/ReactToastify.css';
import { Routes, Route } from "react-router-dom"
import Navbar from './Component/Navbar'
import Home from './Component/Home'
import Cart from './Component/Cart'
import PageNotFound from './Component/PageNotFound'
import { ToastContainer, } from 'react-toastify';



const App = () => {
  return (
    <>
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>

    </>
  )
}

export default App
