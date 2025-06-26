// Child.js
import React from 'react';

const Child = ({ message }) => {
  
alert("👶 Child component rendered")
  return <p>{message}</p>;
};

// ✅ Wrap with React.memo before exporting
export default React.memo(Child);
