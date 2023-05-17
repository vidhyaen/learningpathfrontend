import React from "react";
import { useState } from "react";
import "../login.css";
// import {navigate} from "react-router-dom"
import axios from "axios";
import { Dropdown } from "rsuite";
function AddTopic(props) {
  const [topicname, setTopicname] = useState("");

  const handleSubmit = async(e) => {
    e.preventDefault();
    const topic = { topicname};
    await axios.post("http://localhost:8080/addtopic", topic);
    // navigate("/admin/courses");
  };

  return (
    <div
      className="courses-container"
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
            <a href="/admin/view">Courses</a>
             
             <a href="/admin/users">Users</a>
             <a href="/admin/topic">Topic</a>
             <a href="/admin/subtopic">Add Sub Topic</a>
             <a href="/admin">Logout</a>
          </div>
            </div>

          <div className="col-md-8">
            <div className="login-container ">
              <h1 className="text-white">Add Topic</h1>
              <form onSubmit={handleSubmit} className="logincontainer">
                <div className="form-group p-2 mt-3">
                  <label htmlFor="name" className="pb-2 text-left">
                    Topic Name
                  </label>
                </div>
                <div className="form-group p-2">
                  <input
                    type="text"
                    value={topicname}
                    name="topicname"
                    onChange={(e) => setTopicname(e.target.value)}
                    id="topicname"
                    placeholder="CourseName"
                  />
                </div>
                <div className="form-group p-2 mt-3">
                  <label htmlFor="name" className="pb-2 text-left">
                 Course Name
                  </label>
                </div>
               <Dropdown title="Select Course" className="mt-3 form-group">
                    <Dropdown.Item >Frontend Developer</Dropdown.Item>
                    <Dropdown.Item>Backend Developer</Dropdown.Item>
              
                    </Dropdown>

                <div className="text-center">
                  <button
                    type="submit"
                    className="btn btn-success text-center btn-small mt-3"
                  >
                    Add Topic
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddTopic;
