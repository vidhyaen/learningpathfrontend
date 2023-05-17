import React from "react";
import { useState } from "react";
import "../login.css";
// import {navigate} from "react-router-dom"
import axios from "axios";
function AddVideo() {
  const [Video, setVideoname] = useState({name:""});
   const{name}=Video;
   const onInputChange = (e) => {
    setVideoname({ ...Video, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/addVideo", Video);

  };
 

  return (
    <div
      className="Videos-container"
      style={{
        backgroundColor: "black",
        color: "white",
      }}
    >
      <div className=" mt-5">
        <div className="row">
            <div className="col-md-4">

          <div className=" sidenav">
           <h1>
           <a href="/admin/dashboard" className="active">
              Dashboard
            </a>
            </h1> 
            <a href="/admin/Videos">Videos</a>

            <a href="/admin/users">Users</a>
            <a href="/admin/topic">Topic</a>
            <a href="/admin/courses">Add Course</a>
            <a href="/admin/subtopic">AddSubTopic</a>
            <a href="/admin">Logout</a>
          </div>
            </div>

          <div className="col-md-8">
            <div className="login-container ">
              <h1 className="text-white">Add Video</h1>
              <form className="logincontainer" onSubmit={(e) => onSubmit(e)}>
                <div className="form-group p-2 mt-3">
                  <label htmlFor="name" className="pb-2 text-left">
                    Video Name
                  </label>
                </div>
                <div className="form-group p-2">
                  <input
                    type="text"
                    value={name}
                    name="name"
                    onChange={(e) => onInputChange(e)}
                    id="name"
                    placeholder="VideoName"
                  />
                </div>
               
               

                <div className="text-center">
                  <button
                    type="submit"
                    className="btn btn-success text-center btn-small mt-3"
                    
                  >
                    Add Video
                  </button>
                  < a href="/admin/Videos" className="btn btn-danger text-center btn-small mt-3 ml-3">Cancel</a>

                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddVideo;
