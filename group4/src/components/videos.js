import React from 'react';
import './page.css';

function Videos() {
  const handleBack = () => {
    window.history.back();
  };

  return (
    <div className="courses-container"
    style={{
        backgroundColor: 'black',
        color: 'white'
    }}
    >
      <button className="back-button" onClick={handleBack}>{"<"}</button>
      <h1>Videos</h1>
      <p>content goes here</p>
    </div>
  );
};

export default Videos;