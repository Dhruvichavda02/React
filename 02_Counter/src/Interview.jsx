import React,{useState} from 'react'

export default function Interview() {
    const [counter,setCounter] = useState(0)

    const addValue = () =>{
        setCounter(prevCounter => prevCounter+1)
        setCounter(prevCounter => prevCounter+1)
        setCounter(prevCounter => prevCounter +1)
        setCounter(prevCounter => prevCounter+1)

    }
  return (
    <div>
        
        Interview {counter}
        <button onClick={addValue}>  Add value</button>

        
        </div>
    
  )
}
