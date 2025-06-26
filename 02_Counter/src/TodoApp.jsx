import React,{useState} from "react";
import TodoItem from "./TodoInfo";

export default function Todo(){
    const[todos,setTodos] = useState([
        {id: 1 ,task : 'learn'},
        {id: 2 ,task : 'Implement'},
    ])
    const[newTask,setTask] = useState('');

    const handleAddTask= () =>{
        if(newTask.trim === '') return;

        const newTodo={
            id: Date.now(),
            task: newTask
        }
        setTodos([...todos,newTodo])
        setTask('')
    }

    const handleDelete =(id)=>{
       setTodos( todos.filter(todo=> todo.id!= id))
    }
    
    return(
        <>
        <h2>To do List</h2>
        <input type="text" name="" id="" placeholder="Enter new Task" 
        onChange={(e)=> setTask(e.target.value)} />

        <button 
            onClick={handleAddTask}
        >Add Task</button>


        {todos.map(todo=>(
            <TodoItem key={todo.id} todo ={todo}  OnDelete={handleDelete} />
        ))}
        
        </>
    )
}