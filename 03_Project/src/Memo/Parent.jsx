import React, { useState } from 'react'
import Child from './Child'
export default function Parent() {
    const [count,setCount] = useState(0)

  return (
    <div>
            <h1>Parent</h1>
            <Child message="Hi from child component"/>

            <button onClick={()=>setCount(count+1)}>Increase Count: {count}</button>


    </div>
  )
}
