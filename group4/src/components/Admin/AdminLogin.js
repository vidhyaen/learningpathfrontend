import React from "react";
// import "./page.css";
import "../login.css"
import { useState } from "react";

function AdminLogin() {
  const [loginData, setLoginData] = useState(null)

  const loginCredentials = () => {
      if (loginData.username === "admin" && loginData.password === "admin1234") {
        
     window.location.href = "/admin/courses"
      } else {
         window.location.href = "/admin"
      }
  }


  const handleChange = ({ target }) => {
      const { name, value } = target
      const newData = Object.assign({}, loginData, { [name]: value })
      setLoginData(newData)

  }


  const handleSubmit = (e) => {
      e.preventDefault()
  
      loginCredentials()

  }  
   

    // console.log(`Username: ${username}, Password: ${password}`);

    // Here you would typically make a call to your API to authenticate the user


  return (
    
    <div
      className=""
      style={{
        backgroundColor: "black",
        color: "white",
      }}
    >
      
      <div className="container1">
        <div className="login-container">
          <h1>Admin Login</h1>

          <form onSubmit={handleSubmit}>
            <div className="form-group p-2">
              <label htmlFor="username" className="pb-3">Username</label>

              <input
                type="text"
                name="username"
                id="username"
                onChange={handleChange}
              
              
              />
            </div>

            <div className="form-group p-2">
              <label htmlFor="password" className="pb-3">Password</label>

              <input
                type="password"
                name="password"
                
                id="password"
                onChange={handleChange}
              />
            </div>


  <div className="text-center">
  <button type="submit" className="btn btn-danger text-center btn-small mt-3" >
              Login
            </button>
    </div>
 

            
          </form>

          
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;


