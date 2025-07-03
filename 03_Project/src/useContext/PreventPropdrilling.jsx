
import { useContext,createContext } from 'react'

import './App.css'

const UserContext = createContext()
function App() {
 return(
  <>
  <h2>React Context ApI</h2>
  <UserContext.Provider value={"Dhruvi"}>
    <Parent/>
  </UserContext.Provider>

  </>
 )
}

function Parent(){
  return(
     <div style={{ border: '1px solid gray', padding: '10px' }}>
      <p>Parent Component</p>
      <Child />
    </div>
  )
}

function Child(){
  return(
    <div style={{ border: '1px solid blue', padding: '10px' }}>
      <p>Child Component</p>
      <Grandchild />
    </div>
  )
}
function Grandchild(){
    const username = useContext(UserContext)
    return(
      <>
        <p>Grand Child here!</p>
        <h3>Hello,{username}</h3>
      </>
    )
}
export default App
