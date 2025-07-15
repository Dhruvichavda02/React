import  { useContext, useState } from 'react'
import usercontext from '../context/context';

function Login() {
    const [username,setUsername] = useState('');
    const [pass, setpass] = useState('')

    const {setUser} = useContext(usercontext) //usercontext from context.js
    const handleSubmit = (e)=>{
        e.preventDefault()
        setUser({username,pass})
    }
  return (
    <div>

        <h1>Login</h1>
        <input type="text" placeholder='username' value={username} onChange={(e)=> setUsername(e.target.value)}/> <br />
        <input type="text" placeholder='password' value={pass} onChange={(e)=> setpass(e.target.value)}/> <br /><br />
        <button onClick={handleSubmit}> Submit</button>
    </div>
  )
}

export default Login