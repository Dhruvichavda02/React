import React, { useEffect, useRef, useState } from 'react';

function ThrottledScroll() {
  const [scrollY, setScrollY] = useState(0);
  const throttleRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (throttleRef.current) return;

      throttleRef.current = setTimeout(() => {
        setScrollY(window.scrollY);
        console.log('Scroll position:', window.scrollY);
        throttleRef.current = null; // reset
      }, 200); // throttle delay
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(throttleRef.current);
    };
  }, []);

  return (
    <div style={{ height: '200vh', padding: '1rem' }}>
      <h2>Throttled Scroll Example</h2>
      <p>Scroll down the page and watch the scrollY value update every 200ms.</p>
      <div>Current scroll position: {scrollY}px</div>
    </div>
  );
}

export default ThrottledScroll;
