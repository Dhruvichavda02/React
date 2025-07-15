import React from "react";
import usercontext from "./context";

 const UserProvider = ({Children})=>{

        const[user,setUser] = React.useState(null);
    return(
        <usercontext.Provider value={{user,setUser}}>
            {Children}
        </usercontext.Provider>
    )
}

export default UserProvider;