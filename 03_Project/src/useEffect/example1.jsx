import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'

export default function Example1() {
    const [count,setcount] = useState(0)
  //  const [color,setColor] = useState(0)
    

    useEffect(()=>{
        alert("Hey welcome to the page")
    },[])

    useEffect(()=>{
        alert("count changed")
    },[count])

    useEffect(()=>{},[count])
  return (
    <div>
        <Navbar color={'red'}/>
        <h2>Count:{count}</h2><br /><br />

        <button onClick={()=>{
            setcount(count+1)
        }}>Click me </button>


    </div>
  )
}
