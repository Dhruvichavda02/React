import React, { useState } from 'react'

function Todo() {
  const [todo,settodos] = useState([])
  const [inputValue,setInputValue] = useState('')

  const handleAdd =()=>{
    settodos([...todo,{text:inputValue,completed:false}]);
    setInputValue('')

  }

  const handleDelete = (index)=>{
      const updatedTodo = todo.filter((_,i)=>i!=index)
      settodos(updatedTodo)
  }

  const handleCompleted = (index)=>{
    const updateCom = todo.map((todo,i)=>
      i==index ? {...todo,completed: !todo.completed} : todo
    )
    settodos(updateCom)
  }
  return (
    <>
        <input type="text" value={inputValue} onChange={(e)=>setInputValue(e.target.value)} />
        <button onClick={handleAdd}>Add Task</button>

        <br /><br />
        
        <ul>
        {todo.map((item,index)=>(
          <li key={index}>
          <span
          style={{ cursor: 'pointer', marginRight: '10px' }}
          onClick={ ()=>handleCompleted(index)}
          > {item.completed ? <s>{item.text}</s> : item.text}</span>
          <button onClick={()=>handleDelete(index)}>Delete</button>
          </li>
        ))}

        
        </ul>
        
    </>
  )
}

export default Todo