import React from 'react'
import {BrowserRouter, BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import ProductDetails from './Pages/ProductDetails'
import Sidebar from './Components/Sidebar'
import Header from './Components/Header'
import Footer from './Components/Footer'
function App() {
  return (
    <div className='App'>
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={< Home/>}/>
          <Route path='/product/:id' element={<ProductDetails/>}/>
        </Routes>
        <Sidebar/>
        <Footer/>
      </Router>
    </div>
  )
}

export default App
