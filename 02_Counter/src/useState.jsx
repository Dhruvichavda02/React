import React,{useState} from "react";

export default function UseState(){

    const[name,setName] = useState('');

    const handleChange=(e)=>{
        setName(e.target.value)
    }

    const handleSubmit = () =>{
       // e.preventDefault()
        alert(`Hello,${name}!`)
    }
    return(
        <>
        <form onSubmit={handleSubmit}>
            <label>
                Enter Name:
                <input type="text" value={name} onChange={handleChange} />

            </label>
            <button type="submit"> Submit!</button>

        </form>
        

        </>
    )
}