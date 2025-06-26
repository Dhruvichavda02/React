import React, { useState } from 'react';

export default function BgChanger() {
  const [color, setColor] = useState('black');

  return (
    <div
      style={{
        backgroundColor: color,
        height: '100vh',
        width: '100vw',
        margin: 0,
        padding: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        color: 'white',
      }}
    >
      <h1>BgChanger</h1>
      <button onClick={() => setColor('green')}>Green</button>
    </div>
  );
}
