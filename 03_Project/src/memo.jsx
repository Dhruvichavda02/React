import React, { useState } from 'react'

// Child component 
const Message = React.memo(({text})=>{
    console.log("Message component rendered");
    return <p>{text}</p>
    
})


export default function MemoExample() {
    const [count,setCount] = useState(0)

  return (
    <div>
       <h2>memo</h2>
         {/* Child component with fixed prop */}
        <Message text="Hello from child"/>
            {/* Button that updates parent state */}

            <button onClick={()=> setCount(count+1)}>Increase Count ({count})</button>
        </div>



  )
}
