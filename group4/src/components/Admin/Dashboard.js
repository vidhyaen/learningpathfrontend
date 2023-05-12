import React from "react";
import "./Dashboard.css";
import "../Courseview.css"

function Dashboard() { 
    return (
        <div className="" >
        <div className="row mt-5">    
            
    <div className="col-md-4 sidenav" >
    <a href="/admin/dashboard" className="active">Dashboard</a>
      <a href="/admin/courses">Courses</a>
      <a href="/admin/users">Users</a>
      

  </div>    

  <div className="col-md-8">
  

  </div>
            </div>
        </div>
    
      
    );
    }
    export default Dashboard;