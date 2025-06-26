import React, { useEffect } from 'react'

export default function UseEffe1() {
    useEffect(()=>{
        console.log("Component mounted !");
        
        return () =>{
          console.log("Component will mount");
          
        }
    },[])
}
