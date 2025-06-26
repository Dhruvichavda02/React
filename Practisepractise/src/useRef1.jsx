import React, { useRef } from 'react'

export default function UseRef1() {
    const inputRef = useRef(null);
    const focusInput = ()=>{
        inputRef.current.focus();
    }
  return (
    <div>

        <input ref={inputRef} type="text" placeholder='Type here..' />
    
        <button onClick={focusInput} >Click me to focus!</button>
    </div>
  )
}
