import React, { useState } from 'react'
import { useEffect } from 'react';

export default function MainEx() {
    const [date,setDate] = useState(0);  

    useEffect(()=>{

        setInterval(()=>{

            const updatedDate = new Date();
            setDate(updatedDate.toLocaleTimeString())
        },1000)
    },[])
  return (
    <div>
        <h1>Hello</h1>
            <h1>Date :{date}</h1>
    </div>
  )
}
