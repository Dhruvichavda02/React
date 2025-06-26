import React, { useCallback, useEffect, useRef, useState } from 'react'

export default function Passwordgenerator() {

    const [length,setLength] = useState(8)
    const [character,setCharacter] = useState(false)
    const [number,setNumber] = useState(false)
    const [password,setpassword] = useState("")

    //useCallback(fn,[])
    const passGen = useCallback( ()=>{
        let pass =""
        let str ="ABCDERFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

        if(number) str+= "0123456789"
        if(character) str+= "@#$^&[]{}~"
        
        for (let i = 1; i <= length; i++) {
          let char = Math.floor(Math.random()*str.length+1); //chr index value
          pass += str.charAt(char)
        }
    setpassword(pass)
    },[length,number,character,setpassword])

    useEffect(()=>{
            passGen()
      },[length,number,character])

    //useRef
    const passwordRef = useRef(null)

    const copyPasswordToClipboard = useCallback(()=>{
        passwordRef.current?.select()  
        passwordRef.current?.setSelectionRange(0,3)
        window.navigator.clipboard.writeText(password)
    },[password])
  return (
    <div>
      <h1>Password generator</h1>
      <input type="text" name="" id=""  placeholder='password' value={password} ref={passwordRef}readOnly />
      <input type="range" name="" id="" min={8} max={20} value={length}
      onChange={(e)=>setLength(e.target.value)}/>
      <label htmlFor="">Length: {length}</label><br />

      <input type="checkbox" name="" id="numberInput" defaultChecked={number} 
      
      onChange={()=>{
        setNumber((prev)=>!prev)

      }}/>
      <label htmlFor="">number</label><br />


      <input type="checkbox" name="" id="" defaultChecked={character} 
      onChange={() => setCharacter((prev) => !prev)}
 />
      <label htmlFor="">Character</label><br />

      <button className='bg-blue-200' onClick={copyPasswordToClipboard}>copy</button>


    </div>
  )
}
