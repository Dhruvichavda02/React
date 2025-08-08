import React, { useEffect, useRef, useState } from 'react';

function WindowResize() {
  const [size, setsize] = useState(() => ({
    width: window.innerWidth,
    height: window.innerHeight
  }));
  const timeRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (timeRef.current) clearTimeout(timeRef.current);

      timeRef.current = setTimeout(() => {
        setsize({ width: window.innerWidth, height: window.innerHeight });
        console.log("Updated size: ", window.innerWidth, window.innerHeight);
      }, 300);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timeRef.current);
    };
  }, []);

  return (
    <div>
      <h2>Window Size</h2>
      <p>width : {size.width}</p>
      <p>height : {size.height}</p>
    </div>
  );
}

export default WindowResize;
