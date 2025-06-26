// Child.js
import React from 'react';

const Child = React.memo(({ handleClick }) => {
  console.log("👶 Child component rendered");
  return (
    <div>
      <button onClick={handleClick}>Click Me (Child)</button>
    </div>
  );
});

export default Child;
