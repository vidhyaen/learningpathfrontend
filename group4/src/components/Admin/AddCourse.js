import React from "react";
import { useState } from "react";
import "../login.css";
function AddCourse(props) {
  const [cname, setCname] = useState("");
  const [topic, setTopic] = useState("");
  const [subtopic, setSubtopic] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
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
            <a href="/admin/courses">Courses</a>
            <a href="/admin/users">Users</a>
            <a href="/admin">Logout</a>
          </div>
            </div>

          <div className="col-md-8">
            <div className="login-container ">
              <h1 className="text-white">Add Course</h1>
              <form onSubmit={handleSubmit} className="logincontainer">
                <div className="form-group p-2 mt-3">
                  <label htmlFor="name" className="pb-2 text-left">
                    Course Name
                  </label>
                </div>
                <div className="form-group p-2">
                  <input
                    type="text"
                    value={cname}
                    name="cname"
                    onChange={(e) => setCname(e.target.value)}
                    id="cname"
                    placeholder="CourseName"
                  />
                </div>
                <div className="form-group p-2">
                  <label htmlFor="topix" className="pb-3">
                    Topic
                  </label>

                  <input
                    type="text"
                    value={topic}
                    name="topic"
                    onChange={(e) => setTopic(e.target.value)}
                    id="topic"
                    placeholder="topic"
                  />
                </div>
                <div className="form-group p-2">
                  <label htmlFor="subtopic" className="pb-3">
                    Subtopic
                  </label>

                  <input
                    value={subtopic}
                    onChange={(e) => setSubtopic(e.target.value)}
                    type="text"
                    placeholder="subtopic"
                    id="subtopic"
                    name="subtopic"
                  />
                </div>
                <div className="form-group p-2">
                  <label htmlFor="description" className="pb-3">
                    Description
                  </label>

                  <input
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    type="text"
                    placeholder="Add the description"
                    id="description"
                    name="description"
                  />
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="btn btn-success text-center btn-small mt-3"
                  >
                    Add Course
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

export default AddCourse;
