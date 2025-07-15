
import './App.css'

import TodoInput from './components/TodoInput'
import ToDoList from './components/ToDoList' 

function App() {
 
return(
  <div className="max-w-md mx-auto mt-10 p-4 shadow rounded bg-white">
      <h1 className="text-xl font-bold mb-4 text-center">📝 Todo App</h1>
    <TodoInput/>
    <ToDoList/>

  </div>
)
}

export default App
