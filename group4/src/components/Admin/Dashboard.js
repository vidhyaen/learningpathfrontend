import React from "react";
import "./Dashboard.css";
import "../Courseview.css"

function Dashboard() { 
    return (
        <div className="App" >
        <div className="row mt-5">    
            
    <div className="col-md-4 sidenav" >
    <a href="/admin/dashboard" className="active">Dashboard</a>
    <a href="/admin/view">Courses</a>
             
             <a href="/admin/users">Users</a>
             <a href="/admin/topic">Topic</a>
             <a href="/admin/subtopic">Add Sub Topic</a>
             <a href="/admin">Logout</a>
      

  </div>    

  <div className="col-md-8">
  

  </div>
            </div>
        </div>
    
      
    );
    }
    export default Dashboard;