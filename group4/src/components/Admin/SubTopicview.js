import React, { useState, useEffect } from "react";
import axios from "axios";


const SubTopicview= () => {
  const [subtopic, setSubtopic] = useState([{}]);

  useEffect(() => {
    subtopicdata();
  }, []);

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
        <h2 className="mt-3 text-center text-white">List of Sub Topics
            <a href="/admin/subtopic" className="btn btn-success float-right m-3">Add Topic</a>
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
          <div className="col-md-6">
           
            <table className="table table-bordered table-dark shadow col-12 ">
              <thead className="thead-dark">
                <tr>
                  <th scope="col-1">S.NO</th>
                  <th scope="col-3">Sub Topic</th>
                  
                  <th scope="col-6">Description</th>
                  <th scope="col-4">Content Url</th>
                 
                </tr>
              </thead>
              <tbody>
                {subtopic.length >= 1 ? (
                  subtopic.map((SubTopic, index) => (
                    <tr key={index}>
                      <th scope="row">{index + 1}</th>
                      <td>{SubTopic.sub_topic_name}</td>
                        
                      <td>{SubTopic.description}</td>
                      <td>{SubTopic.content_url}</td>
                     
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

export default SubTopicview;
