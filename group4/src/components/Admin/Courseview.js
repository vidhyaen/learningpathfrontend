import React, { useState, useEffect } from "react";
import axios from "axios";

const CourseView = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    coursedata();
  }, []);

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

  return (
    <div className=" ">
        <h2 className="mt-3 text-center text-white">List of Courses
            <a href="/admin/courses" className="btn btn-success float-right m-3">Add Course</a>
        </h2>
      
      <div className="py-4">
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
            <div className="col-md-4 ">
          
        <table className="table table-bordered table-dark shadow">
          <thead className="thead-dark">
            <tr>
              <th scope="">Course Id</th>
              <th scope="">Course Name</th>
            
            </tr>
          </thead>
          <tbody>
            {courses.length >= 1 ? (
              courses.map((course, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{course.name}</td>
                
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="2">No Courses</td>
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

export default CourseView;
