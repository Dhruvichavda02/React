// import { useState } from "react";
import React from "react";
import ProductCard from "./ProductCard";

export default function ProductList(){

    const Products =[
            { id: 1, name: 'Phone', price: 1000 },
            { id: 2, name: 'Laptop', price: 2000 },
            { id: 3, name: 'Tablet', price: 800 }
    ]

    const expensive =true

    const filtered = expensive ? Products.filter(p=> p.price>1000 ): Products

    return(
        <>
            <h2>Products</h2>
            {filtered.map(prod =>
            <ProductCard key={prod.id} item={prod}/>

            )}
        </>
    )
}