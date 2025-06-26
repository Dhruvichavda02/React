import React from "react";

export default function UserCard({user,onFollow}){
    return(
        <>
            <h3>{user.name}</h3>
            <p>Email: {user.email}</p>
            <p>Status: {user.is0nline ? 'Online' : 'Offline' }</p>
            <button onClick={() => onFollow(user.name) }> Follow</button>
        </>
    )
}