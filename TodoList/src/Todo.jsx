import React, { useState } from 'react'

function Todo() {
    const [input,setInput] = useState("")
    const [todos,setTodo] = useState([])

    const handleAddTodo = ()=>{
        if (input.trim()=="")return ;
        setTodo([...todos,{text:input,completed:false}])
        setInput("")
    }

    const taskComplete= (index)=>{
        const updated = todos.map((todo,i)=>
            i==index ? {...todo,completed : !todo.completed} :todo
        )
        setTodo(updated)
    }       

    const handleDelete =(index) =>{
        const updatedTodo = todos.filter((_,i)=>i!=index)
        setTodo(updatedTodo)
    }
  return (
    <div>

            <input type="text"
                value={input}
                onChange={(e)=>setInput(e.target.value)}
            />
            <button
                onClick={handleAddTodo}
            >Add the task </button>

            <ul>
                {todos.map((todo,index)=>
                    <li key={index}>
                        <span
                            onClick={()=>taskComplete(index)}
                        >
                            {todo.completed ? <s>{todo.text}</s>: todo.text}
                        </span>
                        <button
                            onClick={()=>handleDelete(index)}
                        >Delete the task</button>
                    </li>
                )}
            </ul>
    </div>
  )
}

export default Todo