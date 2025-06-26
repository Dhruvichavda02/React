// ✅ Example 1: Search Box with Debounce (API Simulation)

import React, { useCallback, useEffect, useRef, useState } from "react";



export default function SearchBox() {
    const [query,setquery] = useState('')
    const timeRef = useRef(null)

    const handleInputChange= useCallback((e)=>{
        const value = e.target.value
        setquery(value)
    },[])

    useEffect(()=>{

        if(timeRef.current) clearTimeout(timeRef.current)

           // Only run if user has typed something

        if(query.trim()){
            timeRef.current = setTimeout(()=>{
                console.log(`🔍 Fetching results for "${query}"`);
                
            },500)
        }

        return ()=> clearTimeout(timeRef.current)
    },[query])
  return (
    <div>
        <input type="text" value={query} placeholder="Type to search here..🔍"
        onChange={handleInputChange}
        />

    </div>
  )
}
