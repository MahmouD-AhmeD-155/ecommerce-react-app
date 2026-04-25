import React, { useEffect } from 'react'

import { useState } from 'react'
import { createContext } from 'react'

export const CartContext = createContext()

export  function CartProvider({children}) {

    const [cartItems,setCartItems]=useState(()=>{
        const savedCart = localStorage.getItem("cartItems");
        return savedCart? JSON.parse(savedCart):[]
    })

    // increase Quantity
    
    const increaseQuantity =(id)=>{
        setCartItems(prevItems => prevItems.map(item => 
            item.id === id ? {...item , quantity: item.quantity + 1} : item
        ))
    }
    
    // decreaseQuantity
    
    const  decreaseQuantity =(id)=>{
        setCartItems(prevItems => prevItems.map(item => 
            item.id === id &&item.quantity > 1 ? 
            {...item , quantity: item.quantity - 1} : item
        ))
    }

     // Remove from cart
     const removeFromCart = (id) => {
        setCartItems(prevItems => prevItems.filter(item => item.id !==id))
     }






    const addToCart = (item)=> {
        setCartItems((prevItem)=> [...prevItem,{...item,quantity:1}])
    }

        useEffect(() => { 
            localStorage.setItem('cartItems' , JSON.stringify(cartItems))
         },[cartItems])
  return (
    <CartContext.Provider value={{cartItems,addToCart,increaseQuantity ,decreaseQuantity,removeFromCart}}>
        {children}
    </CartContext.Provider>
  )
}

