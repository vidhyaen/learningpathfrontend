import React from "react";
import "./page.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import {Link} from 'react-router-dom'
import { useParams } from "react-router-dom";

import axios from "axios";

function Certification() {
  const navigate = useNavigate();


  return (
    <div>
      <div className="App-header mt-5">
      <div className='row header'>
            <div className='col-md-6'>
            <Link to="/videos" className="nav-link">
            Videos
          </Link>
            </div>
            <div className='col-md-6'>
           
            <Link to="/certifications" className="nav-link">
            Guide
          </Link>
            </div>

</div>
        <h1 className="course text-danger text-center mt-5">Step By Step Guides</h1>
        <div className="container">
          {/* <div className="row technology"> */}
          <div className="row my-5 mx-3 mb-5 mt-5">
            <div className="col-md-4 mb-5">
              <div className="card p-5" > 
             <button  onClick={()=>navigate("/frontend")}>Frontend Guide</button> 
              
              </div>

            </div>
            <div className="col-md-4 mb-5">
            <div className="card p-5" > 
            <button  onClick={()=>navigate("/backend")}>Backend Guide</button> 
              
              </div>
            </div>
            <div className="col-md-4 mb-5">
            <div className="card p-5" > 
            <button  onClick={()=>navigate("/qaengineer")}>QA Engineer Guide</button> 
              
              </div>
            </div>
          </div>
          <div className="row my-5 mx-3 mb-5">
            <div className="col-md-4 mb-5">
            <div className="card p-5" > 
            <button  onClick={()=>navigate("/fullstack")}>Fullstack Guide</button> 
              </div>
            </div>
            <div className="col-md-4 mb-5">
            <div className="card p-5" > 
            <button  onClick={()=>navigate("/springboot")}>Springboot Guide</button> 
              </div>
            </div>
            <div className="col-md-4 mb-5">
            <div className="card p-5"> 
            <button  onClick={()=>navigate("/devops")}>Devops Guide</button> 
             
              
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Certification;
