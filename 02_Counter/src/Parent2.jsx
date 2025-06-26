import React from "react";
import Child2 from "./Child2";

export default function Parent2() {

    

      const profiles = [
    { name: 'Amit', age: 25 },
    { name: 'Sara', age: 30 }
  ];
    return(
        <>
            {
            profiles.map((person,idx)=>(
                <Child2 key={idx} name= {person.name} age={person.age} />
            ))
            
            }
        </>
    )
}