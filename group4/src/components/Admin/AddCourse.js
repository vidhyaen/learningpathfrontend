import React from "react";
import { useState} from "react";
import "../login.css";
//  import {useNavigate} from "react-router-dom"
// import axios from "axios";
function AddCourse(props) {
  const [coursename, setCoursename] = useState("");
const [imageurl,setImageUrl] = useState("");


const handleSubmit = async (e) => {
e.preventDefault();
var course_url= "http://localhost:8080/admin/courses";
const course={name:coursename,imageUrl:imageurl}
 fetch(`${course_url}/add`, {
  method: 'POST',
  mode: 'cors',
  headers: {
    // Authorization: `Bearer: ${token}`,
   
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  },
  body: JSON.stringify(course)

}).then(()=>{
  console.log("New course added")
})

}
// useEffect(()=>{
//   fetch("http://localhost:8080/admin/courses/getAll")
//   .then(res=>res.json())
//   .then((result)=>{
//     setCoursename(result);
//   }
// )
// },[])
 

  return (
    <div
      className="courses-container"
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
            <a href="/admin/courses">Courses</a>
            <a href="/admin/users">Users</a>
            <a href="/admin/topic">Topic</a>
            <a href="/admin/subtopic">Add Sub Topic</a>
            <a href="/admin">Logout</a>
          </div>
            </div>

          <div className="col-md-8">
            <div className="login-container ">
              <h1 className="text-white">Add Course</h1>
              <form className="logincontainer" onSubmit={handleSubmit}>
                <div className="form-group p-2 mt-3">
                  <label htmlFor="name" className="pb-2 text-left">
                    Course Name
                  </label>
                </div>
                <div className="form-group p-2">
                  <input
                    type="text"
                    value={coursename}
                    name="name"
                    onChange={(e) => setCoursename(e.target.value)}
                
                    placeholder="CourseName"
                  />
                </div>
               
                <div className="form-group p-2 mt-3">
                  <label htmlFor="name" className="pb-2 text-left">
                    Image Url
                  </label>
                </div>
                <div className="form-group p-2">
                  <input
                    type="text"
                    value={imageurl}
                    name="imageurl"
                    onChange={(e) => setImageUrl(e.target.value)}
                
                    placeholder="Add image url"
                  />
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="btn btn-success text-center btn-small mt-3"
                    
                  >
                    Add Course
                  </button>
                  < a href="/admin/courses" className="btn btn-danger text-center btn-small mt-3 ml-3">Cancel</a>

                </div>
              </form>
              {coursename}
              {imageurl}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddCourse;
