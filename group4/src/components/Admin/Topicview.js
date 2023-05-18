import React, { useState, useEffect } from "react";
import axios from "axios";
import Course from "../Course";


const Topicview = () => {
  const [Topics, setTopics] = useState([]);
  const [courses, setCourses] = useState([]);
  const[Subtopics,setSubtopic]=useState([{}]);

  useEffect(() => {
    topicdata();
    coursedata();
    subtopicdata();
  }, []);

  const topicdata = async () => {
    try {
      const { data } = await axios.get("http://localhost:8080/admin/topic/getAll");
      console.log(typeof data);
      setTopics(data);
    } catch (error) {
      console.error("Error fetching course data:", error);
    }
  };
    const coursedata = async () => {
    try {
        const { data } = await axios.get(
            "http://localhost:8080/admin/courses/getAll"
        );
        console.log(typeof data);   
        setCourses(data);
        console.log(data)
    } catch (error) {
        console.error("Error fetching course data:", error);
    }
};
const subtopicdata = async () => {      

    try {   
        const { data } = await axios.get(
            "http://localhost:8080/admin/subtopic/getAll"
        );
        console.log(typeof data);
        setSubtopic(data);
        console.log(data)
    } catch (error) {
        console.error("Error fetching course data:", error);
    }
};


  return (
    <div className="">
         <h1 className="mt-3 text-center">List of Topics</h1>
      <div className="py-4 ">
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
          <div className="col-md-6">
           
            <table className="table table-bordered table-dark shadow ">
              <thead className="thead-dark">
                <tr>
                  <th>S.NO</th>
                  
                  <th scope="col">Topic</th>
                 
                  <th scope="col">Course</th>
                  <th> Add Topics </th>
               
                </tr>
              </thead>
              <tbody>
                {Topics.length >= 1 ? (
                  Topics.map((topic, index) => (
                    <tr key={index}>
                      <th scope="row">{index + 1}</th>
                      
                      <td>{topic.topic_name}</td>
                    
                      {courses.map((course, index) => (
                        <td>{course.name}</td>
                      ))}
                      <th><a href="/admin/topic" className="btn btn-small btn-success">Add</a></th>
                      
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="2">No Topics</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topicview;
