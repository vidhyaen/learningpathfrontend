import React from "react";

import axios from "axios";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer,  toast } from 'react-toastify';
import "./login.css";

function Signup(props) {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [username, setUsername] = useState("");

  const [role, setRole] = useState("");

  const navigate = useNavigate();

  /*const handleSubmit = (e) => {

e.preventDefault();

const login={name,email,password,role}

console.log(login);






fetch("http://localhost:1998/users/create-user",{

    method:"POST",

    headers:{"Content-Type":"application/json"},

    body:JSON.stringify(login)




}).then(()=>{

  console.log("New member signed in")

})

}*/
  async function save(e) {
    e.preventDefault();

    const login = { username, email, password, role };

    console.log(login);

    try {
      await axios
        .post("http://localhost:2000/users/create-user", {
          username: username,

          email: email,

          password: password,

          role: role,
        })
        .then(() => {
          toast.success("New member signed in!");
          console.log("New member signed in");
        });
      // alert("New Member Registation Successfully");
      setTimeout(() => {
      navigate("/login");
      }, 4000);
    } catch (err) {
      // alert(err);
      navigate("/signup");
    }
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
      <div
        className="toast"
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
      >
        <div className="toast-header">
          <button
            type="button"
            className="ml-2 mb-1 close"
            data-dismiss="toast"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="toast-body">Signup Successfully</div>
      </div>
      <div className="container1 mt-5">
        <div className="login-container">
          <h1>Signup</h1>
          <form onSubmit={save}>
            <div className="form-group p-2">
              <label htmlFor="username" className="pb-2 text-left">
                Full Name
              </label>
            </div>

            <div className="form-group p-2">
              <input
                value={username}
                name="name"
                onChange={(e) => setUsername(e.target.value)}
                id="username"
                placeholder="Full Name"
                required
              />
            </div>

            <div className="form-group p-2">
              <label htmlFor="username" className="pb-3">
                Email
              </label>

              <input
                value={email}
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                id="email"
                placeholder="Email"
                required
              />
            </div>

            <div className="form-group p-2">
              <label htmlFor="email" className="pb-3">
                Role
              </label>

              <input
                value={role}
                onChange={(e) => setRole(e.target.value)}
                type="text"
                placeholder="Enter your role"
                id="role"
                name="role"
                required
              />
            </div>

            <div className="form-group p-2">
              <label htmlFor="password" className="pb-3">
                Password
              </label>

              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                minLength="6"
                type="password"
                placeholder="Enter your password"
                id="password"
                name="password"
                required
              />
            </div>

            <div className="row">
              <div className="col-md-4">
                <button
                  type="submit"
                  className="btn btn-danger text-center btn-small mt-3"
                >
                  Signup
                </button>
              </div>

              <div className="col-md-8 mt-3">
                <a href="/login">Already have an account? Login here.</a>
              </div>
            </div>
          </form>

          {/* {username}
          {password}  */}
        </div>
      </div>
    </div>
    </>
  );
}

export default Signup;

// import React from "react";
// import {useState} from "react";
// import {useNavigate} from "react-router-dom";

// import "./login.css";
// function Signup(props) {

// const [email, setEmail] = useState("");
// const [password, setPassword] = useState("");
// const [firstname, setFirstname] = useState("");
// const navigate = useNavigate();

// const [role, setRole] = useState("");
// const handleSubmit = (e) => {
// e.preventDefault();
// const login={firstname,email,password,role}
// console.log(login);

// fetch("http://localhost:8080/signup/add",{
//     method:"POST",
//     headers:{"Content-Type":"application/json"},
//     body:JSON.stringify(login)

// }).then(()=>{
//   console.log("New member signed in")
//    navigate("/login")
// })
// }
// return (
// <div
// className="courses-container"
// style={{
// backgroundColor: "black",
// color: "white",
//  }}
//  >
// <div className="container1 mt-5">
// <div className="login-container">
//  <h1>Signup</h1>
// <form onSubmit={handleSubmit}>
// <div className="form-group p-2">
// <label htmlFor="name" className="pb-2 text-left">Full Name</label>

// </div>
// <div className="form-group p-2">
// <input value={firstname} name="name" onChange={(e) => setFirstname(e.target.value)} id="name" placeholder="Full Name" />
// </div>

// <div className="form-group p-2">

// <label htmlFor="name" className="pb-3">Email</label>

// <input value={email} name="email" onChange={(e) => setEmail(e.target.value)} id="email" placeholder="Email" />

// </div>

// <div className="form-group p-2">

// <label htmlFor="email" className="pb-3">Role</label>

// <input value={role} onChange={(e) => setRole(e.target.value)}type="text" placeholder="Enter your role" id="role" name="role" />

// </div>

// <div className="form-group p-2">

// <label htmlFor="password" className="pb-3">Password</label>

// <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Enter your password" id="password" name="password" />

// </div>

// <div className="row">

// <div className="col-md-4">

// <button type="submit" className="btn btn-danger text-center btn-small mt-3">

// Signup

//  </button>

//  </div>

// <div className="col-md-8 mt-3">

// <a href="/login">Already have an account? Login here.</a>

// </div>

// </div>

// </form>
// {firstname}
// {password}

//  </div></div>
// </div>
//  );
// }
// export default Signup;
