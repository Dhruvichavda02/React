import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
function Navbar() {
  console.log("Rendered")
  const {cartItems} = useContext(CartContext)
  return (
    <nav style={{ padding: '1rem', background: '#eee' }}>
      <h2>🛍️ React Shop</h2>
      <span>Cart Items: {cartItems.length}</span>
    </nav>
  )
}

export default Navbar