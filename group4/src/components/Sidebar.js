// import React from 'react'
// import { useState,useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import './page.css';
// export const Sidebar = () => {
//   const { id } = useParams();
//   const [courses, setCourses] = useState({ topics: [], subtopics: [] });

// useEffect(() => {
//   coursedata();
// }, []);

// const coursedata = async () => {
//   try {
//     const { data } = await axios.get(
//       `http://localhot:8080/admin/topic/get/${id}`
//     );
//     console.log(typeof data);
//     setCourses(data);
//   } catch (error) {
//     console.error("Error fetching course data:", error);
//   }
// };

//   return (
//     <div className="text-white mt-5">
//     <div className="row">
//       <div className="col-md-3">
//       <div className="sidenav mt-5">
//       {courses.subTopics.map((subTopic, index) => (
//               <h1 className="text-dark">{subTopic.sub_topic_name}</h1>
 

//  ))}
//       </div>
      
//   </div>
//   </div>
//   </div>
//   )
// }
