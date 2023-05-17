import React from "react";
import { useState } from "react";
import "../login.css";
// import {navigate} from "react-router-dom"
import axios from "axios";
function AddSubTopic(props) {
  const [subtopicname, setSubTopicname] = useState("");
  const [description, setDescription] = useState("");
  const [contentUrl, setContentUrl] = useState("");

  const handleSubmit = async(e) => {
    e.preventDefault();
    const sub_topic = { subtopicname, description,contentUrl};
    await axios.post("http://localhost:8080/addtopic", sub_topic);
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
              <h1 className="text-white">Add SubTopic</h1>
              <form onSubmit={handleSubmit} className="logincontainer">
                <div className="form-group p-2 mt-3">
                  <label htmlFor="name" className="pb-2 text-left">
                    Sub Topic Name
                  </label>
                </div>
                <div className="form-group p-2">
                  <input
                    type="text"
                    value={subtopicname}
                    name="subtopicname"
                    onChange={(e) => setSubTopicname(e.target.value)}
                    id="subtopicname"
                    placeholder="Add Subtopic"
                  />
                </div>
                <div className="form-group p-2 mt-3">
                  <label htmlFor="name" className="pb-2 text-left">
                  Description
                  </label>
                </div>
                <div className="form-group p-2">
                  <input
                    type="text"
                    value={subtopicname}
                    name="description"
                    onChange={(e) => setDescription(e.target.value)}
                    id="description"
                    placeholder="Add Subtopic Description"
                  />
                </div>
                <div className="form-group p-2 mt-3">
                  <label htmlFor="name" className="pb-2 text-left">
                Other Content Url
                  </label>
                </div>
                <div className="form-group p-2">
                  <input
                    type="text"
                    value={contentUrl}
                    name="contentUrl"
                    onChange={(e) => setContentUrl(e.target.value)}
                    id="contentUrl"
                    placeholder="Add Subtopic contentUrl"
                  />
                </div>
               
               

                <div className="text-center">
                  <button
                    type="submit"
                    className="btn btn-success text-center btn-small mt-3"
                  >
                    Add SubTopic
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

export default AddSubTopic;
