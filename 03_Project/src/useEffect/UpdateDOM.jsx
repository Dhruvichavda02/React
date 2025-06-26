import React from 'react'
import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react'

export default function UpdateDOM() {
    const [count,setCount] = useState(0);
    const headingRef = useRef();

    useEffect(()=>{
        headingRef.current.style.color = count%2==0 ? 'green' : 'red';
    },[count])

  return (
    <div>
        <h2 ref={headingRef}>Count;{count}</h2>
        <button onClick={()=>setCount(count+1)}>Click me !</button>
    </div>
  )
}
