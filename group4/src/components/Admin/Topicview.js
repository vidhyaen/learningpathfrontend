import React, { useState, useEffect } from "react";
import axios from "axios";
import Course from "../Course";
import { useNavigate } from "react-router-dom";


const Topicview = () => {
  const [Topics, setTopics] = useState([]);
  const [courses, setCourses] = useState([]);
  const[Subtopics,setSubtopic]=useState([{}]);
  const Navigate = useNavigate();

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
            "http://localhost:8080/admin/topic/get/${id}"
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
        <h2 className="mt-3 text-center text-white">List of Topics
            <a href="/admin/topic" className="btn btn-success float-right m-3">Add Topics</a>
        </h2>
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
          <div className="col-md-4">
           
            <table className="table table-bordered table-dark shadow ">
              <thead className="thead-dark">
                <tr>
                  <th>S.NO</th>
                  
                  
                  <th scope="col">Topic</th>
                 
                 
                </tr>
              </thead>
              <tbody>
                {Topics.length >= 1 ? (
                  Topics.map((topic, index) => (
                    <tr key={index}>
                      <td scope="">{index + 1}</td>
                      
                    
                      <th>{topic.topic_name}</th>
                   
                    
                     
                      
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
