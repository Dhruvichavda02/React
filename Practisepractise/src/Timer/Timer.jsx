import React, { useEffect, useState } from 'react'

function Timer() {
  const [seconds,setSeconds] = useState(0)
  const [isRunning,setISRunning] = useState(false)

  useEffect(()=>{
    let interval ;

    if(isRunning){
      interval = setInterval(()=>{
        setSeconds(prev=>prev+1)
      },1000)
    }
    else{
      clearInterval(interval)
    }

    return ()=>clearInterval(interval)
  },[isRunning])


  const handleStart = () => setISRunning(true)
  const handleStop = ()=> setISRunning(false)
  const Reset = ()=>{
    setISRunning(false)
    setSeconds(0)
  }
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
          <h2>⏱️ Stopwatch</h2>
          <h1>{seconds}</h1>
          <button onClick={handleStart}>Start</button> <br />
          <button onClick={handleStop}></button><br />
          <button onClick={Reset}></button>
     </div>
  )
}

export default Timer