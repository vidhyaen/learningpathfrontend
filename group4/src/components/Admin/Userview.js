import React, { useState, useEffect } from "react";
import axios from "axios";


const CourseView = () => {
  const [Users, setUsers] = useState([]);

  useEffect(() => {
    userdata();
  }, []);

  const userdata = async () => {
    try {
      const { data } = await axios.get("http://localhost:2000/users/getusers");
      console.log(typeof data);
      setUsers(data);
    } catch (error) {
      console.error("Error fetching course data:", error);
    }
  };

  return (
    <div className="">
         <h1 className="mt-3 text-center text-white">List of Users</h1>
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
                  <th scope="col">User Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Role</th>
                </tr>
              </thead>
              {/* <tbody>
                {Users.length >= 1 ? (
                  Users.map((UserInfo, index) => (
                    <tr key={index}>
                      <th scope="row">{index + 1}</th>
                      <td>{UserInfo.username}</td>
                      <td>{UserInfo.email}</td>
                      <td>{UserInfo.role}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="2">No Users</td>
                  </tr>
                )}
              </tbody> */}
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Vidhya E N</td>
                  <td>envidhya99@gmail.com</td>
                  <td>Fullstack Developer</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Josika </td>
                  <td>josika123@gmail.com</td>
                  <td>Backend Developer</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Pranesh </td>
                  <td>pranesh.vimal@gmail.com</td>
                  <td>Frontend Developer</td>
                </tr>
  </tbody>            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseView;
