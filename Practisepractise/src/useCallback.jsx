import React, { useCallback, useState } from 'react'

//child  component
const Child = React.memo(({onclick})=>{
    console.log("Child here ");
    return(
        <>
            <button onClick={onclick}> Message(Child)</button>
        </>
    )
    
})
export default function UseCallback() {
    const [count,setCount] = useState(0);
    const [message,setmessage] = useState("");

    const handleClick = useCallback(()=>{
        setmessage('Child button clicked');
    },[])
  return (
    <div>
            <h1>Parent count :{count}</h1>
            <button onClick={()=>setCount(count+1)}> Increase Count</button>
        <Child onclick={handleClick}/>

        <p>{message}</p>
    </div>
  )
}
