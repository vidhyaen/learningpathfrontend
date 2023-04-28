import React from 'react';
import './page.css';

function Roadmaps() {
  const handleBack = () => {
    window.location.href = "/";
  };

  return (
    <div className="courses-container"
    style={{
        backgroundColor: 'black',
        color: 'white'
    }}
    >
      <button className="back-button" onClick={handleBack}>{"<"}</button>
      <h1>Roadmaps</h1>
      <p>content goes here</p>
    </div>
  );
};

export default Roadmaps;
