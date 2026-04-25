import React, { useEffect } from 'react'

import { useState } from 'react'
import { createContext } from 'react'

export const CartContext = createContext()

export  function CartProvider({children}) {

    const [cartItems,setCartItems]=useState(()=>{
        const savedCart = localStorage.getItem("cartItems");
        return savedCart? JSON.parse(savedCart):[]
    })

    const addToCart = (item)=> {
        setCartItems((prevItem)=> [...prevItem,item ])
    }

        useEffect(() => { 
            localStorage.setItem('cartItems' , JSON.stringify(cartItems))
         },[cartItems])
  return (
    <CartContext.Provider value={{cartItems,addToCart}}>
        {children}
    </CartContext.Provider>
  )
}

