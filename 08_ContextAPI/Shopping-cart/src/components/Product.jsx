import { useContext } from "react"
import { CartContext } from "../context/CartContext"


const Product = ({product})=>{
    const {addToCart}= useContext(CartContext)

    return(
         <div style={{ border: '1px solid gray', padding: '1rem' }}>
            <h3>{product.name}</h3>
            <p> {product.price} </p>
            <button onClick={()=>addToCart(product)}> Add to Cart </button>
         </div>
    )
}

export default Product;