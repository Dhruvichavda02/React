import React, { useCallback, useEffect, useRef, useState } from 'react'

export default function Example2() {
    const [counter,setCounter] = useState(0)
    const InputRef = useRef(null)

    const handleclick = useCallback(()=>{
        if(InputRef.current) InputRef.current.focus()

        setCounter(coun=>coun+1)

    },[])
    
    useEffect(()=>{
            if(counter>0) console.log(`Button clicked ${counter} times`);
            
    },[counter])
    //if(counter>0) console.log(`Button clicked ${counter} tinmes`);

  return (
    <div>
        <label htmlFor="" ref={InputRef}> Hello Moto !</label><br /><br />
        <button onClick={handleclick}> Click Meeeeeeeeee!</button>
        <h2>Counter:{counter}</h2>

    </div>
  )
}
