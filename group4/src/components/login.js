import React from "react";
// import "./page.css";
import "./login.css"
import { useState } from "react";

function Login() {
  const [username, setUsername] = useState("");

  const [password, setPassword] = useState("");

  const handleBack = () => {
    window.history.back();
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(`Username: ${username}, Password: ${password}`);

    // Here you would typically make a call to your API to authenticate the user
  };

  return (
    <div
      className="courses-container"
      style={{
        backgroundColor: "black",
        color: "white",
      }}
    >
      <button className="back-button" onClick={handleBack}>
        {"<"}
      </button>
      <div className="container">
        <div className="login-container">
          <h1>Login</h1>

          <form onSubmit={handleSubmit}>
            <div className="form-group p-2">
              <label htmlFor="username" className="pb-3">Username</label>

              <input
                type="text"
                id="username"
              
                value={username}
                onChange={handleUsernameChange}
              />
            </div>

            <div className="form-group p-2">
              <label htmlFor="password" className="pb-3">Password</label>

              <input
                type="password"
                id="password"
                
                value={password}
                onChange={handlePasswordChange}
              />
            </div>

<div className="row">
  <div className="col-md-4">
  <button type="submit" className="btn btn-danger text-center btn-small">
              Login
            </button>
    </div>
    <div className="col-md-8">
    <button type="button" className="forgot-password-btn ">
              Forgot password?
            </button>
      </div>
</div>
            
          </form>

          <p className="signup-link">
            Don't have an account? <a href="/signup">Sign up here</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;


