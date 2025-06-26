// Child1.js
import React from 'react';

const Child = React.memo(({ onClick }) => {
  console.log("👶 Child rendered");

  return (
    <div>
      <button onClick={onClick}>Click from Child</button>
    </div>
  );
});

export default Child;
