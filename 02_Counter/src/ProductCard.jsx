import React from 'react'

export default function ProductCard({item}) {
  return (
    <div style={{border: '1px solid #ccc',margin:'8px',padding:'10px'}}>
      <strong>{item.name}</strong> 
      <p>Price:{item.price}</p>


        
    </div>
  )
}
