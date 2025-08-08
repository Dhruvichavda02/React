import React, { useState,useRef, useEffect } from 'react'

function WithDebounce() {
    const [query,setquery] = useState('')
    const [result,setResult] = useState([])
    const timeRef = useRef(null)

    useEffect(()=>{
        if(timeRef.current) clearTimeout(timeRef.current)
        
    if(query.trim()){
        timeRef.current = setTimeout(() => {
        // Simulate API call
        console.log("Searching for:", query);
        // Fake result generation
        setResult([
             `${query} Result 1`,
          `${query} Result 2`,
          `${query} Result 3`
        ])
    }, 500);
}
else setResult([])

return ()=>clearTimeout(timeRef.current)
    },[query])
  return (
  <div style={{ padding: '1rem' }}>
      <h2>Debounced Search</h2>
      <input
        type="text"
        value={query}
        onChange={(e) => setquery(e.target.value)}
        placeholder="Search something..."
      />
      <div style={{ marginTop: '1rem' }}>
        <strong>Results:</strong>
        <ul>
          {result.map((r, index) => (
            <li key={index}>{r}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default WithDebounce