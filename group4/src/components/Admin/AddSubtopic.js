import React from "react";
import { useState ,useEffect} from "react";
import "../login.css";
import {useNavigate} from "react-router-dom"
import axios from "axios";

function AddSubTopic(props) {
  const [subtopicname, setSubTopicname] = useState("");
  const [description, setDescription] = useState("");
  const [contentUrl, setContentUrl] = useState("");
  const[courseId,setCourseId]=useState("");
  const[topicId,setTopicId]=useState("");
  const [courses, setCourses] = useState([]);
  const [topics, setTopics] = useState([]);
  const navigate = useNavigate();
  

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
  const topicdata = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:8080/admin/topic/getAll"
      );
      console.log(typeof data);
      setTopics(data);
    } catch (error) {
      console.error("Error fetching course data:", error);
    }
  };

  useEffect(() => {
    coursedata();
    topicdata();
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    var topic_url= "http://localhost:8080/admin/subtopic";
    const topic={sub_topic_name:subtopicname,	content_url:contentUrl,description:description,topic_id:topicId,course_id:courseId,}
     fetch(`${topic_url}/add`, {
      method: 'POST',
      mode: 'cors',
      headers: {
        // Authorization: `Bearer: ${token}`,
        //Allow Access control
       

        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(topic)
    
    }).then(()=>{
      console.log("New topic added")
      navigate("/admin/subtopic")
      
    })
   window.location.pathname="/admin/courses"
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
              <h1 className="text-white">Add SubTopic</h1>
              <form onSubmit={handleSubmit} className="logincontainer">
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
              <div className="form-group p-2 mt-3">
                  <label htmlFor="name" className="pb-2 text-left">
                    Select Topic Name
                  </label>
                </div>
                <select
                  onChange={(e) => {
                    console.log(e.target.value);
                    setTopicId(e.target.value);
                  }}
                  className="form-control"
                  id="exampleFormControlSelect1"
                >
                  <option value="">Select Topic</option>
                  {topics.map((item) => (
                    <option value={item?.id}>
                      {item.id} -{item?.topic_name}
                    </option>
                  ))}
                </select>
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
                    value={description}
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
