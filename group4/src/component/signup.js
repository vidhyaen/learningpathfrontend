import React from 'react';
import './page.css';

function Signup() {
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
      <h1>Signup</h1>
      <p>content goes here</p>
    </div>
  );
};

export default Signup;



/*import React from 'react';

function Signup  ()  {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                backgroundColor: 'black',
                color: 'white'
            }}
        >
            <h1>Signup</h1>
        </div>
    );
};

export default Signup;

*/