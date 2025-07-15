import React from 'react'
import { useState } from 'react'
import { useTodo } from '../context/Todo';

function TodoInput() {

    const {addTodo} = useTodo()

    const[text,setText] = useState('');

    const handleAdd = ()=>{
        if(text.trim()){
            addTodo(text),
            setText("")
        }
    }
  return (
    <div className="flex gap-2 mb-4">
      <h2>Hello</h2>
        <input type="text" value={text} onChange={(e)=>setText(e.target.value)} 
        className="border p-2 rounded w-full"
        placeholder="Enter a todo"
        />

        <button onClick={handleAdd}
                className="bg-green-500 text-white px-4 rounded"
        >Add</button>



    </div>
  )
}

export default TodoInput