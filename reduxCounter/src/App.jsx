
import './App.css'
import {useSelector,useDispatch, Provider} from 'react-redux'
import {increment,decrement, clear} from './features/counterSlice'


function App() {

    const count = useSelector((state)=>state.counter.value) // get state from redux
    const dispatch = useDispatch(); //to send action to redux

  return (
   
     <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h1>Redux Counter</h1>
        <h2>{count}</h2>
        <button onClick={()=>dispatch(increment())}>+</button>
        <button onClick={ ()=>dispatch(decrement())}>-</button>
        <button onClick={()=>dispatch(clear())}>Clear</button>
    </div>
   
  )
}

export default App
