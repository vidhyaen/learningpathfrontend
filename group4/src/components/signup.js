
import React from "react";
import {useState} from "react";
import "./login.css";
function Signup(props) {
  const [email, setEmail] = useState("");

  const [pass, setPass] = useState("");

  const [name, setName] = useState("");
  const [role, setRole] = useState("");

  const handleSubmit = (e) => {

    e.preventDefault();

    console.log(email);

  }




  return (

    <div
    className="courses-container"
    style={{
      backgroundColor: "black",
      color: "white",
    }}
  >
    
    <div className="container1 mt-5">
      <div className="login-container">
        <h1>Signup</h1>
        <form  onSubmit={handleSubmit}>
        <div className="form-group p-2">
        <label htmlFor="name" className="pb-2 text-left">Full Name</label>
</div>
<div className="form-group p-2">
<input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="Full Name" />
</div>
<div className="form-group p-2">
<label htmlFor="name" className="pb-3">Email</label>

<input value={email} name="email" onChange={(e) => setEmail(e.target.value)} id="email" placeholder="Email" />
</div>
<div className="form-group p-2">
<label htmlFor="email" className="pb-3">Role</label>

<input value={role} onChange={(e) => setRole(e.target.value)}type="text" placeholder="Enter your role" id="role" name="role" />
</div>
<div className="form-group p-2">
<label htmlFor="password" className="pb-3">Password</label>

<input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="Enter your password" id="password" name="password" />
</div>
<div className="row">
  <div className="col-md-4">
  <button type="submit" className="btn btn-danger text-center btn-small mt-3">
             Signup
            </button>
    </div>
    <div className="col-md-8 mt-3">
    <a href="/login">Already have an account? Login here.</a>
      </div>
</div>

          </form>
        </div>
     </div>

  

  </div>

  );

}

export default Signup;
