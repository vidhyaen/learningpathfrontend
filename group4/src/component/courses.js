import React from 'react';
import './page.css';

function Courses() {
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
      <h1>Courses</h1>
      <p>content goes here</p>
    </div>
  );
};

export default Courses;











/*import React from 'react';
import { Link } from 'react-router-dom';
import './page.css';

function Courses() {
  return (
    <div className="courses-container">
      <Link to="/header" className="back-link">Back </Link>
      <h1>Courses</h1>
      <p>content goes here</p>
    </div>
  );
};

export default Courses;




background-color: gray;
transition: all 0.2s ease-in-out;
transform: translateY(-50%) scale(1.1);



/*import React from 'react';
import { Link } from 'react-router-dom';

function Courses() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <div style={{ position: 'absolute', top: '50%', right: '0', transform: 'translateY(-50%)' }}>
        <Link to="/header" style={{ marginRight: '10px' }}>Back to Home</Link>
      </div>
      <h1>Courses</h1>
      <p>Course content goes here</p>
    </div>
  );
};

export default Courses;


/*

import React from 'react';

function Courses() {

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh'
            }}
        >
            <h1>Courses</h1>
        </div>
    );
};

export default Courses;
*/