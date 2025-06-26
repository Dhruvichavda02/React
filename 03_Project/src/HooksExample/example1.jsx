// ✅ Scenario: Input Focus + Button Click Count with useCallback
// 🔧 Features:
// A button to focus an input (useRef)
// A click counter (useState)
// A memoized callback function using useCallback



import React, { useCallback, useRef, useState } from 'react'

export default function FocusInputCounter() {
    const [counter,setCounter] = useState(0)
    const InputRef = useRef(null)
    const handleClick = useCallback(()=>{
        
        //console.log(InputRef.current);
        
        if(InputRef.current)  {InputRef.current.focus()}

        setCounter(counter=>counter+1)

    },[])

  return (
    <div style={{ padding: '20px' }}>
        <input placeholder='click button to focus me' ref={InputRef} />
        <br /><br />

        <button onClick={handleClick}>Focus Input & Increment</button>
        <h1>Counter :{counter}</h1>

    </div>
  )
}
