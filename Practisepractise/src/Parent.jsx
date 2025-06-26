import React, { useCallback, useState } from 'react';
import Child from './Child';

export default function Parent() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback( () => {
    alert('Child button clicked!!');
  },[]);

  return (
    <div>
      <h1>Count :{count}</h1>
      <Child onClick={handleClick} />
      <button onClick={() => setCount(count + 1)}> Increase Count</button>
    </div>
  );
}
