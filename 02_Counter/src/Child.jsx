import React,{useState} from "react";

export default function ChildComponent(props){

    return(
        <>
        <h1>This is Child Component</h1>
        <h2>Hello,{props.name}</h2>
        <p>You are {props.age} old!</p>
        </>
        
    )
}