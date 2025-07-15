import React from "react"
import { useState } from "react"
import { createContext } from "react"

export const ToDoContext = createContext()

export const TodoProvider = ({children}) =>{
    const [todos,setTodos] = useState([])

    const addTodo = (text) =>{
        //add todo to the end of array
        setTodos(prev=>[...prev,{id: Date.now(),text,done:false}])
    }
    const deleteTodo = (id)=>{
        //Removes the matched item from the list 
        setTodos(prev=>prev.filter(todo=>todo.id !==id))
    }

    const toogleDone =(id)=>{
        setTodos(prev=>prev.map(todo =>todo.id === id ? {...todo,done: !todo.done}: todo))
    }
    return(
        <ToDoContext.Provider value={{todos,addTodo,deleteTodo,toogleDone}}>
            {children}
        </ToDoContext.Provider>
    )
}