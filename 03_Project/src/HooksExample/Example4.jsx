import React, { memo, useState } from 'react'

const ChildButton = memo(({onClick})=>{
    console.log("Childbutton rendered!!!");

    return <button onClick={onClick}> Click me !</button>
    
})

export default function ParentComponent() {
    const [count,setcount] = useState(0)
    const [text,setText] = useState('')

    const handleClick = ()=>{
        setcount(count+1)
    }

  return (
    <div>
        <ChildButton onClick={handleClick} />
        <p>Count:{count}</p>

        <input type="text" value={text}  placeholder='Type Something!!!'
        onChange={e=>setText(e.target.value)}
        />
    </div>
  )
}
