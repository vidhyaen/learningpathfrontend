import React from 'react';
import './page.css';

function About() {
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
      <button className="back-button" color = 'black' onClick={handleBack}>{"<"}</button>
      <h1>About</h1>
      <p>content goes here</p>
    </div>
  );
};

export default About;