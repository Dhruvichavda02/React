import React,{useState} from "react";
export default function Form(){
    const [name,SetName] = useState('');
    const [age,Setage] = useState('');
    const [submitted,setSubmitted] = useState(false);
  const handleSubmit= ()=>{
        setSubmitted(true)
  }

    return(
        <>
                Enter your name:
                <input type="text" name="" id=""  value={name} onChange={(e)=>SetName(e.target.value)}/>
                
                Enter you age:
                <input type="text" name="" id="" value={age} onChange={(e)=> Setage(e.target.value) }/>

                <button onClick={handleSubmit}> 
                        Submit
                </button>
                {submitted && <p>Form Submitted!</p>}
        </>
    )
}