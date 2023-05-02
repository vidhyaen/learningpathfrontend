import React from 'react';
import './page.css';
import { useNavigate } from 'react-router-dom';
// import { useState } from 'react';

function Course() {
   
    const navigate = useNavigate();  
    const handleBack = () => {
        window.history.back();
      };
    return (
        <div>
      <button className="back-button" color = 'black' onClick={handleBack}>{"<"}</button>
     

        <div className="App-header">
            <h1 className='course text-white text-center'>Courses</h1>
           <div className="container">
                 <div className="row technology">
                    
                    <div className="col">
                        <div className="card">
                           <center>
                           <img src="https://w1.pngwing.com/pngs/751/223/png-transparent-digital-marketing-icon-web-design-web-development-frontend-web-development-search-engine-optimization-user-interface-design-web-application-wordpress-thumbnail.png" alt="front end development" height="180"
                           width="180" className="technology"/>
                           <h4>Frontend Developer</h4> 
                           {/* <i class="fa-regular fa-heart"></i> */}
                           </center>
                           <div className="technology text-center">
                           <button className="btn btn-outline-warning btn-lg btn-center"
                           onClick={()=>navigate("/detail/1")}>Know More</button>
                          

                           </div>
                        </div>
                    </div>

                    <div class="col">
                           <div class="card">
                             <center>
 <img src="data:image/png;base64,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" 
                            width="180" height="180" alt="backend" className="technology"/>
                             <h4>Backend  Developer</h4> 
                             </center>
                             <div class="technology text-center">
                             <button class="btn btn-outline-warning btn-lg" onClick={()=>navigate("/detail/2")}>Know More</button>
                             </div>
                            
                            </div>
                    </div>

                    <div className="col">
                       <div className="card">
                        <center>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjyHA0z64Zo0Ovz0X6MSIoyjqPYkUVHYFgoQ&usqp=CAU" 
                            width="200" height="180" alt="cloud"  className="technology"/>
                            <h4>Machine Learning
</h4> 
                             </center>
                             <div className="technology text-center">
                             <button className="btn btn-outline-warning btn-lg" onClick={()=>navigate("/detail/3")}>Know More</button> 
                             </div>
                        </div>  
                    </div>
                 </div>
            </div>
        </div></div>
    );
    }
export default Course;