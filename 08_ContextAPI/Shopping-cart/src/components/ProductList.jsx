import React from 'react'
import Product from './Product'



    const dummyProducts = [
        {id: 1, name:'Dior',price: 50000},
        {id :2,name:'Channel',price:10000},
        { id: 3, name: 'Cap', price: 10 },

    ]
    
const ProductList =()=>{
    return (
         <div style={{ display: 'flex', gap: '1rem', padding: '1rem' }}>
            {dummyProducts.map(product=> (
                <Product key={product.id} product={product}/>
            ))}
         </div>
    )
}
export default ProductList