import React from 'react'
import TopHeader from './components/header/TopHeader'
import BtnHeader from './components/header/BtnHeader'
import Home from './page/home/Home'
import { Route, Routes } from 'react-router-dom'
import ProductDetails from './page/productDetalis/ProductDetails'
import Cart from './page/cart/Cart'

function App() {
  return (
    <>
    <header >
      <TopHeader/>
      <BtnHeader/>
    </header>

    <Routes>
      <Route path='/' element={ <Home/>}/> 
      <Route path='/cart' element={ <Cart />}/> 
      <Route path='/products/:id' element={ <ProductDetails/>}/> 
    </Routes>
   
    </> 
  )
}

export default App