import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

export default function BasicEx() {
    const[count,setCount] = useState(0);
    useEffect(()=>{
        console.log("Component rendered!!");
        
    },[count])
  return (
    <div>
        <h2>Count:{count}</h2>
        <button onClick={()=> setCount(count+1)}>Click Me !!</button>
    </div>
  )
}
