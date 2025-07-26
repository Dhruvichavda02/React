import { createSlice, nanoid } from "@reduxjs/toolkit"

const initialState ={
    todos :[{id:1,text:"Hello MasterMind"}]
}

export const todoSlice = createSlice({
    name : 'todo',
    initialState,
    reducers:{
        // here state will tell us how many todos are there in intialState  
        //basically gives current state 
        addTodo : (state,action)=>{
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo :(state,action)=>{
            state.todos = state.todos.filter((todo)=>todo.id !== action.payload)
        }
    }

})

export const {addTodo,removeTodo} = todoSlice.actions; // individually exporting them for components

//exporting for store
export default todoSlice.reducer;