import React,{useState} from "react";
import UseState from "./useState";

export default function  UseState2(){

    const [color,setColor] = useState('red')

    return(
        <>
            <h1>My Fav color is:<p style={{color:color}}>{color}</p></h1>
            
            <button type="button" onClick={() => setColor("blue")}>blue</button>
            <button type="button" onClick={()=> setColor("green")}>Green</button>
        </>
    )
}
