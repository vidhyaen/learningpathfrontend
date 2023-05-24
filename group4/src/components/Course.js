import React from 'react';
import './page.css';
import { useNavigate } from 'react-router-dom';
import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';

import axios from 'axios';

function Course() {
   
    const navigate = useNavigate();  

    const [courses, setCourses] = useState([]);
    const { id } = useParams({courseId:courses.id});
  useEffect(() => {
    coursedata();
    detaildata();
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
  const detaildata = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:8080/admin/courses/get/{id}"
      );
      console.log(typeof data);
      setCourses(data);
    } catch (error) {
      console.error("Error fetching course data:", error);
    }
  };

   
    return (
        <div>
    
     

        <div className="App-header">
            <h1 className='course text-white text-center'>Roles</h1>
           <div className="container">
          
                 {/* <div className="row technology"> */}
                 <div className="row my-5 mx-3 mb-5">
            {
                courses.map((course, index) => (
                <div className="col-md-4 mb-5" key={index}>
                    <div className="">
                     
                        <center>
                 

                          
                            <button className="btn btn-outline-warning btn-lg btn-center"
                            onClick={()=>navigate(`/detail/${course.id}`)}>{course.name}</button>
                          
                            </center>
                    </div>
                
                              
     
                </div>
            ))}
        </div>

        </div>
        </div></div>
    );
    }
export default Course;