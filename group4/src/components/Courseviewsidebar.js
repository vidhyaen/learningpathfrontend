import React from "react";
import "./Courseviewside.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export const Courseviewsidebar = ({ closeNav,    allCourses}) => {
  const { id } = useParams();
  const [courses, setCourses] = useState([]);
  const [isHidden, setIsHidden] = useState(true);
  const[isdone, setIsdone] = useState(0);
  
  const handleStyle = (currentSubtopicId) => {
    // alert("Marked as done");
 
    // let x = document.getElementById(`${currentSubtopicId}`);

    isdone? setIsdone(0): setIsdone(1);
    setIsdone(1);
   
  };
  
  useEffect(() => {
    detaildata();
  }, []);
  const detaildata = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:8080/admin/topic/get/${id}`
      );
      console.log(typeof data);
      setCourses(data);
    } catch (error) {
      console.error("Error fetching course data:", error);
    }
  };
  const currentSubtopicId= localStorage.getItem("subTopicId"); 
  console.log(courses, "courses",courses.name);
  return (
    <>
    {courses?.map((course, index) => (

             <div id={`topic-${course?.id}`} className="sidenav1">
    {course?.subTopics?.map((subTopic, index) => (
      (subTopic?.id == currentSubtopicId) && (
        <div className="row">
        <div className="text-right m-3">
          <button className="btn btn-success btn-lg"  onClick={handleStyle} style={{ backgroundColor: isdone ? 'green' : 'red' }}>
           
            {isdone ? 'Completed' : 'Mark as Done'}
          </button>
          </div>
       <div className="col-2"></div>
        <div className="col-8">
          <a href={`/detail/${id}`} className="closebtn" onClick={closeNav}>
            &times;
          </a>
            <div>
              <h1 className="text-danger">{subTopic.sub_topic_name}</h1>

             
                <p className="p-3">{subTopic.description}</p>
           

              <h3 className=" text-danger m-3">
                Visit the following resources to learn more:
              </h3>
<div className="m-3">
              <a href={subTopic.content_url} className="">
                <li className="text-info" >W3schools</li>
               
              </a>
              <a href="https://www.geeksforgeeks.org/">
                <li className="text-info">GeeksforGeeks</li>
              </a>
              <a href="https://www.tutorialspoint.com/index.htm">
                <li className="text-info">Tutorial Point</li>
              </a>
            </div>
            </div>
        </div> 
        <div className="col-2"></div>
      </div>
      )
    ))}
    </div>
    
          ))}{" "}
</>
  );
};
export default Courseviewsidebar;
