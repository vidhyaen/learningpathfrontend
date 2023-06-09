import React from "react";
import jwt from 'jwt-decode'
// import "./page.css";

import "./login.css";

import { useState } from "react";

import { useNavigate } from "react-router-dom";

import axios from "axios";
import {ToastContainer, toast } from "react-toastify";
import jwtDecode from "jwt-decode";
// import jwt from 'jwt-decode'

function Login() {
  const [username, setUsername] = useState("");

  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  async function handleSubmit(event) {
    event.preventDefault();

    console.log(`username: ${username}, password: ${password}`);

    const login = { username, password };

    console.log(login);

    try {
      await axios
        .post("http://localhost:2000/users/login", {
          username: username,

          password: password,
        })
        .then(
          (res) => {
            toast.success("Login was successfull");
            // console.log(res.data);
            //console.log(res.data.message);
            console.log(res , "res");
            // alert("Login was successfull");
            // alert(jwtDecode(res?.data));
            localStorage.setItem("username", username);
            navigate("/home");
          },
          (fail) => {
            localStorage.removeItem("username");
            toast.error("Invalid Credentials");
            console.error(fail);

            // alert("Verify your username and password, login unsucessfull"); // Error!
            navigate("/login");
          }
        );
    } catch (err) {
      alert(err);
    } // Here you would typically make a call to your API to authenticate the user
  }


  return (
    <>
    <div
      className=""
      style={{
        backgroundColor: "black",

        color: "white",
      }}
    >
      {" "}
      <div className="container1 mt-5">
        {" "}
        <div className="login-container">
          <h1>Login</h1>{" "}
          <form onSubmit={handleSubmit}>
            {" "}
            <div className="form-group p-2">
              {" "}
              <label htmlFor="username" className="pb-3">
                Username
              </label>{" "}
              <input
                type="text"
                id="username"
                value={username}
                onChange={handleUsernameChange}
                required
              />{" "}
            </div>{" "}
            <div className="form-group p-2">
              {" "}
              <label htmlFor="password" className="pb-3">
                Password
              </label>{" "}
              <input
                type="password"
                id="password"
                value={password}
                onChange={handlePasswordChange}
                required
              />{" "}
            </div>
            <div className="row">
              {" "}
              <div className="col-md-4">
                {" "}
                <button
                  type="submit"
                  className="btn btn-danger text-center btn-small mt-3"
                >
                  Login{" "}
                </button>{" "}
              </div>{" "}
              <div className="col-md-8">
                {" "}
                <button type="button" className="forgot-password-btn ">
                  Forgot password?{" "}
                </button>{" "}
              </div>
            </div>{" "}
          </form>{" "}
          <p className="signup-link">
            Don't have an account? <a href="/signup">Sign up here</a>{" "}
          </p>{" "}
        </div>{" "}
      </div>{" "}
    </div>
    </>
  );
}

export default Login;

// import React from "react";
// // import "./page.css";
// import "./login.css"
// import { useState } from "react";

// function Login() {
//   const [username, setUsername] = useState("");

//   const [password, setPassword] = useState("");

//   const handleUsernameChange = (event) => {
//     setUsername(event.target.value);
//   };

//   const handlePasswordChange = (event) => {
//     setPassword(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     console.log(`Username: ${username}, Password: ${password}`);

//     // Here you would typically make a call to your API to authenticate the user
//   };

//   return (

//     <div
//       className=""
//       style={{
//         backgroundColor: "black",
//         color: "white",
//       }}
//     >

//       <div className="container1 mt-5">
//         <div className="login-container">
//           <h1>Login</h1>

//           <form onSubmit={handleSubmit}>
//             <div className="form-group p-2">
//               <label htmlFor="username" className="pb-3">Username</label>

//               <input
//                 type="text"
//                 id="username"

//                 value={username}
//                 onChange={handleUsernameChange}
//               />
//             </div>

//             <div className="form-group p-2">
//               <label htmlFor="password" className="pb-3">Password</label>

//               <input
//                 type="password"
//                 id="password"

//                 value={password}
//                 onChange={handlePasswordChange}
//               />
//             </div>

// <div className="row">
//   <div className="col-md-4">
//   <button type="submit" className="btn btn-danger text-center btn-small mt-3">
//               Login
//             </button>
//     </div>
//     <div className="col-md-8">
//     <button type="button" className="forgot-password-btn ">
//               Forgot password?
//             </button>
//       </div>
// </div>

//           </form>

//           <p className="signup-link mt-4">
//             Don't have an account? <a href="/signup">Sign up here</a>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Login;
