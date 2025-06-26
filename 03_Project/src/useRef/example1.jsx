import React,{useRef, useState} from 'react'

export default function ClickTracker() {
    const countRef = useRef(0)
    const [show, setShow] = useState(false)
    const handleClick = () =>{
        countRef.current+=1
        console.log("Button clicked",countRef.current ,"times");

        
    }
  return (
    <div>

        <button onClick={handleClick}> Click me </button>

        <button onClick={()=>{
            setShow(!show)
        }}> Manually re-render</button>
    </div>
  )
}
