import React from "react";
import UserCard from "./src/Child1";

export default function Parent1(){
   const users = [
                { name: 'Alice', email: 'alice@example.com', isOnline: true },
                { name: 'Bob', email: 'bob@example.com', isOnline: false }
            
            ];

            const handleFollow=(userName) =>{
                alert(`You followed ${userName}`)
            }
                
    return(
        <>
            <h1>User Profile</h1>

            {
                users.map((user, index) => (
                <UserCard key={index} user={user} onFollow={handleFollow} />
                ))
            }
        </>
    )
}