import Child from '../Memo/Child'
import React, { useState, useCallback } from 'react';



export default function Parent() {
  const [count, setCount] = useState(0);
  

  // 👇 useCallback prevents this function from being re-created on every render
  const handleClick = useCallback(() => {
    alert("Child Button Clicked!");
  }, []); // no dependencies, so it never changes

  return (
    <div style={{ padding: '20px' }}>
      <h2>useCallback Example</h2>
      <p>Count: {count}</p>

      {/* 👶 Passing memoized function to child */}
      <Child handleClick={handleClick} />
      

      {/* 🔼 Changes parent state, not related to child */}
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
    </div>
  );
}
