import React from "react";

export default function TodoItem({todo, onDelete}){
    return(
        <>
            {todo.task}
            <button onClick={()=> onDelete(todo.id)}>
                Delete
            </button>
        </>
    )
}