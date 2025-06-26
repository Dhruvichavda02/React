import { useCallback, useState } from "react";
import React from "react";
import Child from "./Child1";


export default function Parent1(){

    const [count,setCount] = useState(0)
    const handleChildClick = useCallback(()=>{
        alert("Child Button Clicked!");
    },[])

    return(

        <>
            <h2>Count: {count} </h2>

            <Child onClick= {handleChildClick}/>

            <button onClick={()=> setCount(count+1)}>Increase Count</button>

        </>
    )

}