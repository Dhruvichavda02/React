import React from 'react'
import { useTodo } from '../context/Todo'

function ToDoList() {
    const {todos,deleteTodo,toogleDone} = useTodo()
  return (
    <div>
        <ul className="space-y-2">
            {todos.map((todo)=>(
            <li key={todo.id} className="flex justify-between items-center border p-2 rounded">
                <span className={todo.done? "line-through text-gray-500" : ""} 
                onClick={()=>toogleDone(todo.id)}
                >
                        {todo.text}
                </span>
                
                <button
                    onClick={()=>deleteTodo(todo.id)} className="text-red-500 font-bold"
                >Delete </button>
            </li>
            ))}
        </ul>
    </div>
  )
}

export default ToDoList