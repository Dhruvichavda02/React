import React, { useEffect, useState } from 'react'

 function TimeComponent() {
  
  const[seconds,setSeconds] = useState(0)

  useEffect(()=>{
    console.log("Component mounted");
    
    const Interval = setInterval(()=>{
      setSeconds(prev=> prev+1)
    },1000)

    return () =>{
      console.log("Time component unmounted");
      
    }

  },[])


  return <h2>Timer :{seconds}</h2>
}


export default function ParentComponent() {
  const [showTime,setShowtime] = useState(true)
  return (
    <div>
        <button onClick={()=>{setShowtime(prev=>!prev)} }> 
          {showTime ? 'stop Time': 'start time' } 
          </button>

          {showTime && <TimeComponent/>}

    </div>
  )
}

