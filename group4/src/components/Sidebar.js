import React from 'react'
import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './page.css';
export const Sidebar = () => {
  const { id } = useParams();
  const [courses, setCourses] = useState([]);
useEffect(() => {
  coursedata();
}, []);

const coursedata = async () => {
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
console.log(courses, "sidecourses");
 
courses?.map((course, index) => (
    course?.subTopics.map((subTopic, index1) => (
    (subTopic?.is_done == 1) ? courses[index].is_all_subtopics_done = true : courses[index].is_all_subtopics_done = false            
    ))
))

console.log(courses, "sidecourses1");

  return (
    <div className="sidenav">
    <h3 className="text-danger m-5">Course content</h3>
    {courses?.map((course, index) => (
    <div className="" key={index} >
      <h4 className="text-white m-3" >
        {course.is_all_subtopics_done ? <del>{course?.topic_name}</del> : course?.topic_name}
         </h4>
      </div>
    ))}
      </div>
 
  )
}
