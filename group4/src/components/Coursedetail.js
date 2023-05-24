import React from "react";
import { useParams } from "react-router-dom";
import "../App.css";
import "./Courseviewside.css";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Courseviewsidebar } from "./Courseviewsidebar";
function Coursedetail() {
  const { id } = useParams(); 
  console.log(id);
  const [courses, setCourses] = React.useState([]);
  const [isHidden, setIsHidden] = React.useState(true);
  const [currentSubTopicId,  setCurrentSubTopicId] = React.useState(null);
  const [isdone, setIsdone] = React.useState(false);

  const navigate = useNavigate();
  const handleComplete = (event) => {
    console.log("complete");
    navigate("/courseviewsidebar");
  };
  useEffect(() => {
    detaildata();
  }, []);
  
  // const handleStyle = (currentSubtopicId) => {
  //   // alert("Marked as done");
  //   let x = document.getElementById(`${currentSubtopicId}`);
   
     
  //   // isdone ? x.style.backgroundColor = "green" : x.style.backgroundColor = "red";
  //   setIsdone(isdone);
   
   
  //   // console.log(x);
  //   // x.style.backgroundColor = "green";
  // };
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
  const openNav = (currentTopicId) => {
    setIsHidden(false);
    setTimeout(() => {
      let Y = document.getElementById(`topic-${currentTopicId}`);
      console.log(Y);
      Y.style.width = "600px";
    }, 1000);
  };

  const closeNav = () => {
    console.log("close");
    setIsHidden(true);
  };
  return (
    <div className="App-header">
      <div className="container">
        <h1>Role based Road Map</h1>
        <div className="row">
          {courses.map((course, index) => (
            <div className="col-md-3 mt-3 mb-3" key={index}>
              <div
                className="accordion accordion-flush"
                id="accordionFlushExample "
              >
                <div className="accordion-item ">
                  <h2 className="accordion-header" id="flush-headingOne">
                    <button
                      className="accordion-button collapsed demo border text-white text-small"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseOne"
                      aria-expanded="true"
                      aria-controls="flush-collapseOne"
                    >
                      {course.topic_name}
                    </button>
                  </h2>
                  <div
                    id="flush-collapseOne"
                    className="accordion-collapse collapse"
                    aria-labelledby="flush-headingOne"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      {course.subTopics.map((subTopic, index) => (
                        <button
                          className="btn btn-info p-2 m-2"
                          onClick={()=>{
                            setCurrentSubTopicId(subTopic?.id);
                            openNav(course?.id);
                            //add subtopic id to local storage
                            localStorage.setItem("subTopicId", subTopic.id);

                            // debugger
                            // handleStyle(subTopic.id);
                          }
                          }


                          id={subTopic.id}
                        >
                          {" "}
                          {subTopic.sub_topic_name}{" "}
                        </button>
                      ))}
                       {!isHidden ?  <Courseviewsidebar  closeNav={closeNav}  /> : ''}  
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Coursedetail;
