import React from 'react';
import './page.css';

function Login() {
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
      <h1>Login</h1>
      <p>content goes here</p>
    </div>
  );
};

export default Login;



/*import React from 'react';

function Login  ()  {
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
            <h1>Login</h1>
        </div>
    );
};

export default Login;
*/
