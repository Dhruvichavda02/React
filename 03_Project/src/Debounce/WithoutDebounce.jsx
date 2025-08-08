import React, { useEffect, useState } from 'react'

function WithoutDebounce() {
    const [query,setquery] = useState('')
    const [results,setResult] = useState([])

    useEffect(()=>{
        if(query.trim){
            console.log('Searching for',query);
            setResult([
                `${query} Result 1`,
                `${query} Result 2`,
                `${query} Result 3,`
            ])
        }
        else{
            setResult([])
        }
    },[query])
  return (
    <div style={{ padding: '1rem' }}>
            <h2>Instant Search no Debounce</h2>
            <input type="text" value={query} 
            onChange={(e)=>{
                setquery(e.target.value)
            }}
            placeholder="Search something..."
            />
             <div style={{ marginTop: '1rem' }}>
                <strong>Results</strong>
                <ul>
                {results.map((r,index)=>(
                    <li key={index}>
                        {r}
                    </li>
                ))}
                </ul>
             </div>
    </div>
  )
}

export default WithoutDebounce
