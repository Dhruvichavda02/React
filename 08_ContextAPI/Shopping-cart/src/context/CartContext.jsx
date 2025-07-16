import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({children}) =>{
    const [cartItems , setCartItems]  = useState([]);

    const addToCart = (product)=>{
        const existing = cartItems.find(item=>item.id === product.id)

        if(existing) {
            //increase quantity
            setCartItems(
                cartItems.map(item=>
                    item.id ===product.id ? {...item,quantity:item.quantity+1} : item
                )
            )
        }
        else{
        setCartItems([...cartItems,{...product,quantity:1}])
        }
    }

    const removeFromCart = (id) =>{
        const item = cartItems.find(item=>item.id ===id)
        if(item.quantity > 1){
            setCartItems(
                cartItems.map(item=>
                    item.id === id ? {...item,quantity: item.quantity-1} : item
                )
            )
        }
        else{
        setCartItems(cartItems.filter(item=>item.id!==id))
        }
    }
    return(
        <CartContext.Provider value={{cartItems,addToCart,removeFromCart}}>
            {children}
        </CartContext.Provider>
    )
}