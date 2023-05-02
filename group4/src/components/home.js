import React, { useEffect, useState } from 'react';
function Home() {
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    function handleResize() {
      setHeight(window.innerHeight);
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: height,
        backgroundColor: 'black',
        color: 'white'
      }}
    >
      <h1>Home</h1>
    </div>
  );
}

export default Home;
