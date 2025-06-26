import React,{useState} from "react";
import ChildComponent from "./Child";

export default function Parentcomponent(){
    return(

        <>
            <h2>
                Welcome, This is Parent Component
            </h2>
            <ChildComponent name="John"  age={34}/>
            <ChildComponent name="Alia" age={21}/>
        </>
    )
}