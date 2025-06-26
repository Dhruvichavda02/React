import React, { useRef } from 'react'

export default function AccessDom() {

    const inputRef = useRef(null)
    const focusInput =()=>{
        inputRef.current.focus();
    }

  return (
    <div>   
            <input type="text"  ref={inputRef} style={{background:'pink '}}/>
            <button onClick={focusInput}>focus input</button>

    </div>
  )
}
