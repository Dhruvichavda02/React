import React from 'react'

 function Child({onClick}) {
    console.log("👶 Child rendered");
  return (
    <div>

     <button onClick={onClick}>Click from Child</button>
    </div>
  )
}

export default React.memo(Child);