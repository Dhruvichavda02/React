import React from "react";

export default function Child2(props){
    return(
        <>
        <div style={{ border: '1px solid gray', margin: 10, padding: 10 }}></div>
            <h3>Hi,{props.name}</h3>
            <p>My age is {props.age}</p>
        </>
    )
}