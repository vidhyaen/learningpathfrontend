import React from "react";
import { useParams } from "react-router-dom";
import "../App.css";
import "./Courseviewside.css";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Courseviewsidebar } from "./Courseviewsidebar";
import {Sidebar} from "./Sidebar";
import { Accordion } from "react-bootstrap";
import swal from 'sweetalert';
function Coursedetail() {
  const { id } = useParams();
  console.log(id);
  const [courses, setCourses] = React.useState([]);
  const [eventkey, setEventkey] = React.useState(0);
  const [isHidden, setIsHidden] = React.useState(true);
  const [currentSubTopicId, setCurrentSubTopicId] = React.useState(null);
  const [isdone, setIsdone] = React.useState(false);
  const [enableIndex, setEnableIndex] = React.useState([]);
  const[is_all_topic_done , setIs_all_topic_done] = React.useState(false);

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
   // let enableIndex = [];
    try {
      const { data } = await axios.get(
        `http://localhost:8080/admin/topic/get/${id}`
      

      );
      let isDoneFound = true;
      data.forEach((element) => {
         // Flag to track if "is_done" subtopic is found
        
        element.subTopics.forEach((subTopic, index) => {
          if (subTopic.is_done === 1) {
            subTopic.enable = true; // Enable the first subtopic that comes after "is_done"
            isDoneFound = true; // Set the flag to true when "is_done" subtopic is found
          } else if (isDoneFound) {
            subTopic.enable = true; // Enable the first subtopic that comes after "is_done"
            isDoneFound = false; // Reset the flag to false after enabling the next subtopic
          } else {
            subTopic.enable = false; // Disable other subtopics
          }
        });
      });      
     //check if all the topics are done then display sweey alert
      
      let isAllTopicDone = data.every((topic) => {
        return topic.subTopics.every((subTopic) => subTopic.is_done === 1);
      });
      if (isAllTopicDone) {
        swal({
            title: "Good job!",
          
            color: "green",
            icon: "success",
            button: "ok",
           //change the color of the button in sweet alert
            button: {
              text: "OK",
              value: true,
              visible: true,
              className: "btn btn-success",
              closeModal: true,
            },
            //change text color in sweet alert
            text: "You have completed course successfully",
            className: "text-success",
            //click on ok button then redirect to courseviewsidebar page
          }).then((value) => {
            if (value) {
              navigate("/course");
              
            }


    
            
          });
      }
      //sweat alert style
      // swal({
      //   title: "Good job!",
      //   text: "You have completed course successfully",
      //   icon: "success",
      //   button: "Aww yiss!",
      // });


      // swal("Hurry!!! You have completed course successfully");
      // remove the not done courses
      // let filteredData = data.filter((course, index) =>
      //   enableIndex.includes(index)
      // );
      setCourses(data);
  
    } 
    catch (error) {
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

  console.log(courses, "courses")

  return (
    <div className="App-header">
      <div className="container">
        <h1 className="mt-5 text-white text-center">Role based Road Map</h1>
        <p className="mt-5 text-white">
          Step by Step guides for the Learners listed below:{" "}
        </p>
        <h1 className="text-danger mt-3">Disclaimer</h1>
        <div className="text-warning shadow mt-3">
        <p>
          Course content are displayed in sidenav and when one topic is completed another topic will be popup
        </p>
        <p>So user cannot view all the subtopic they cannot skip any topics</p>

        </div>

        <div className="row mt-3">
         
          
            {/* <div className=" mt-5 mb-3 sidenav1" >
            {courses.map((course, index) => (
            <div className="" key={index} >
              <h1 >
                {course.topic_name}

          
               
                 </h1>
          </div>
            ))}
            </div> */}
            {/* <div className="col-md-2 mt-5 mb-3">
            <Sidebar/>
              </div> */}
              <Sidebar/>
           
          {courses.map((course, index) => (

<div className="col-md-3 mt-5 mb-3" key={index}>
  
              <Accordion>
                <Accordion.Item className="">
                  <Accordion.Header>{course.topic_name}</Accordion.Header>
                
                  <Accordion.Body>
                    {course.subTopics.map((subTopic, index) => (
                    
                      <button
                        className={`btn   m-2 ${
                          subTopic.is_done ? "btn-success strike-through" : "btn-danger"
                        }`}
                        key={index}
                        onClick={() => {
                           setCurrentSubTopicId(subTopic?.id);
                           openNav(course?.id);
                          // //add subtopic id to local storage
                          localStorage.setItem("subTopicId", subTopic.id);

                          // debugger
                          // handleStyle(subTopic.id);
                        }}
                        id={subTopic.id}
                        disabled={!subTopic.enable}
                      >
                        {subTopic.sub_topic_name}
                      </button>
                    ))}

                    {!isHidden ? <Courseviewsidebar closeNav={closeNav} /> : ""}
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
              {/* <div
                className="accordion accordion-flush"
                id="accordionFlushExample "
              >
                <div className="accordion-item " eventKey={[0]}>
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
                    <div className="accordion-body" >
                    
                      {course.subTopics.map((subTopic, index) => (
                        
                        <button
                          className="btn btn-danger p-2 m-2"
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
                  </div> */}
                  
            </div>
          ))}
     
     
    </div>
    </div>
    </div>
  );
}
export default Coursedetail;
