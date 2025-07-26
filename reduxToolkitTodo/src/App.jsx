
import { Provider } from 'react-redux'
import './App.css'
import Addtodo from './components/Addtodo'
import Todos from './components/Todos'
import { store } from './app/store'

function App() {


  return (
    <>
      <Provider store={store}>
        <Addtodo/>
        <Todos/>
      </Provider>
    </>
  )
}

export default App
