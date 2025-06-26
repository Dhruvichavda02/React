import React, { useState } from "react";
import TodoItem from "./Child3";

export default function TodoApp(){
   const [todos ,setTodos] = useState([
    {id: 1 ,task : 'Learn React'},
   {id: 2 , task : 'Work on a Project'}]
   )
    const handleDelete = (id)=>{
       setTodos(
        todos.filter(todo=> todo.id!=id)
       )
   }
    return(
        <>
            <h2>To do List</h2>

            {todos.map(todo => (
             <TodoItem key={todo.id} todo={todo} onDelete={handleDelete}/>
                    ))}

      
        </>
    )
}
