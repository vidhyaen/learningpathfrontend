import React, { useEffect } from "react";
import { useState } from "react";
import "../login.css";
import {useNavigate} from "react-router-dom"
import axios from "axios";

function AddTopic(props) {
  const [topic, setTopicname] = useState("");
  const [courses, setCourses] = useState([]);
  const [courseId, setCourseId] = useState("");
  const [courseName, setCoursename] = useState("");
  const navigate=useNavigate();

  const coursedata = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:8080/admin/courses/getAll"
      );
      console.log(typeof data);
      setCourses(data);
    } catch (error) {
      console.error("Error fetching course data:", error);
    }
  };

  useEffect(() => {
    coursedata();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    var topic_url = "http://localhost:8080/admin/topic";
    const topicBody = { topic_name: topic, course_id: courseId };
    fetch(`${topic_url}/add`, {
      method: "POST",
      mode: "cors",
      headers: {
        // Authorization: `Bearer: ${token}`,

        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(topicBody),
    }).then(() => {
      console.log("New topic added");
      navigate("/admin/viewtopic")
    });
  };

  return (
    <div
      className=""
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
            <a href="/admin/viewtopic">Topic</a>
            <a href="/admin/viewsubtopic"> Sub Topic</a>
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
                    value={topic}
                    name="topic"
                    onChange={(e) => setTopicname(e.target.value)}
                    placeholder="Topic Name"
                  />
                </div>
                <div className="form-group p-2 mt-3">
                  <label htmlFor="name" className="pb-2 text-left">
                    Select Course Name
                  </label>
                </div>
                <select
                  onChange={(e) => {
                    console.log(e.target.value);
                    setCourseId(e.target.value);
                  }}
                  className="form-control"
                  id="exampleFormControlSelect1"
                >
                  <option value="">Select Course</option>
                  {courses.map((item) => (
                    <option value={item?.id}>
                      {item.id} -{item?.name}
                    </option>
                  ))}
                </select>

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
