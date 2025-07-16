import { useContext } from "react"
import { CartContext } from "../context/CartContext"

const Cart = ()=>{
    const {cartItems,removeFromCart}=useContext(CartContext )
    return (
        <>
             <h2>🛒 Your Cart</h2>
             {cartItems.map(items=>(
                <div key={items.id}>
                    {items.name} - {items.price} * {items.quantity}
                    <button onClick={()=>removeFromCart(items.id)}>Remove</button>
                </div>
             ))}
        </>
    )
}

export default Cart;