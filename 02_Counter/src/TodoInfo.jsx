import React from "react";

export default function TodoItem({todo,OnDelete}){
    return(
        <>
            <h2>{todo.task}</h2>
            <button onClick={()=>OnDelete(todo.id)}>Delete</button>

        </>
    )
}