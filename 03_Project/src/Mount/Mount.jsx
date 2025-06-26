import React, { useEffect, useState } from 'react'


function ChildComponent(){
    useEffect(()=>{
        console.log("Child Component mounted");
        
        return() =>{
            console.log("Child component unmounted");
            
        }
    },[])
}

export default function Mount() {

    const [showChild,setshowChild] = useState(true)

    
  return (
    <div>

    <button onClick={()=>setshowChild(!setshowChild)}>{showChild ?  "Hide" : "Show"}Child Component </button>
    {showChild && <ChildComponent/>}
    </div>
  )
}
