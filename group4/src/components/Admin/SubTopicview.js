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
         <h1 className="mt-3 text-center">List of Subtopics</h1>
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
                  <th scope="col">Sub Topic</th>
                  
                  <th scope="col">Description</th>
                  <th scope="col">Content Url</th>
                  <th>Add</th>
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
                      <th><a href="/admin/subtopic" className="btn btn-small btn-success">Add</a></th>
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
