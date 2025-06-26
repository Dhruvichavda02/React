import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

export default function FetchData() {
    const[users,setUsers] = useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(data=>setUsers(data));

    },[])

  return (
    <div>
            {users.map(user=> 
                <li key={user.id}> {user.name} </li>
            )}
    </div>
  )
}
