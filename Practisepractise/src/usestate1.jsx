import React, { useState } from 'react'

export default function Usestate1({name = "Anonymous",age}) {
    const [username,setUserName] = useState(name);
    const [userage,setage] = useState(age ||18);
  return (
    <div>
        <h1>Hello {username}</h1>
        <input type="text" value={name} onChange={(e)=>setUserName(e.target.value)} />
        <input type="number" value={userage} onChange={(e)=>setage(parseInt(e.target.value))} />
    </div>
  )
}
