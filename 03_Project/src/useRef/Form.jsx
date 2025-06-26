import React, { useRef } from 'react'

export default function Form() {
    const usern = useRef(null);
    const pass = useRef(null);
    const handlesubmit = (e)=>{
        e.preventDefault();
        console.log(usern.current.value,pass.current.value);
        
    }
  return (
    <div>
        <form onSubmit={handlesubmit}>
                <input type="text" id="username" ref={usern} /> <br /><br />
                <input type="number" name="" id="pass"  ref={pass}/> <br />
                <button> Submit</button>

        </form>
    </div>
  )
}
