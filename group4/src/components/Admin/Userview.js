import React, { useState, useEffect } from "react";
import axios from "axios";


const CourseView = () => {
  const [Users, setUsers] = useState([]);

  useEffect(() => {
    userdata();
  }, []);

  const userdata = async () => {
    try {
      const { data } = await axios.get("http://localhost:8080/signup/getAll");
      console.log(typeof data);
      setUsers(data);
    } catch (error) {
      console.error("Error fetching course data:", error);
    }
  };

  return (
    <div className="">
         <h1 className="mt-3 text-center">List of Users</h1>
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
              <a href="/admin/topic">Topic</a>
              <a href="/admin/subtopic">Add Sub Topic</a>
              <a href="/admin">Logout</a>
            </div>
          </div>
          <div className="col-md-6">
           
            <table className="table table-bordered table-dark shadow ">
              <thead className="thead-dark">
                <tr>
                  <th>S.NO</th>
                  <th scope="col">User Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Role</th>
                </tr>
              </thead>
              <tbody>
                {Users.length >= 1 ? (
                  Users.map((Signup, index) => (
                    <tr key={index}>
                      <th scope="row">{index + 1}</th>
                      <td>{Signup.firstname}</td>
                      <td>{Signup.email}</td>
                      <td>{Signup.role}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="2">No Users</td>
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
