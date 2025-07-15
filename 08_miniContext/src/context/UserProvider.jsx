import React from "react";
import usercontext from "./context";

 const UserProvider = ({children})=>{

        const[user,setUser] = React.useState(null);
    return(
        <usercontext.Provider value={{user,setUser}}>
            {children}
        </usercontext.Provider>
    )
}

export default UserProvider;