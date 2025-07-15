import  { useContext } from 'react'
import usercontext from '../context/context'

function Profile() {
    const {user} = useContext(usercontext)
  

    if(!user) return <div>please Login</div>
    return <div>Welcome,{user.pass}!!</div>
}

export default Profile