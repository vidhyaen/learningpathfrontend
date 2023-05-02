import React from "react";
import { useNavigate } from 'react-router-dom'; 
import { useParams } from "react-router-dom";
function Coursedetail() {
  const { id } = useParams();
  const navigate = useNavigate();  
  return (
    <div className="App-header">
      {/* Course 1 */}
      {id === "1" && (
        <div className="course ">
          <div className="card bg-black pt-5 ">
            <div className="row">
              <div className="col-md-1 "></div>
              <div className="col-md-5 card card-info p-3">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjyHA0z64Zo0Ovz0X6MSIoyjqPYkUVHYFgoQ&usqp=CAU"
                  alt="ml"
                  // height="200"
                  // width="300"
                  className="card card-transparent"
                />
                <div className="pt-5">
                  <h4 className="">
                    The Complete Front-End Web Development Course
                  </h4>
                  <h4 className="">
                    Get started as a front-end web developer using HTML,
                  </h4>
                  <h4>CSS, JavaScript, jQuery, and Bootstrap!</h4>
                  <h4 className="pt-3">
                    <b> Course Duration :</b>{" "}
                    <span className="text-danger">17 Hours</span>
                  </h4>
                </div>
                <h5 className="pt-2 text-black">
                  Created by
                  <a href="https://josephdelgadillo.com/"> Joseph Delgadio</a>
                </h5>
                <div className="rating pb-3 text-black">
                  <span>☆</span>
                  <span>☆</span>
                  <span>☆</span>
                  <span>☆</span>
                  <span>☆</span>
                </div>
              </div>
              <div className="col-md-1 pt-3"></div>
              <div className="col-md-4 pt-3 ">
                <div
                  class="accordion accordion-flush"
                  id="accordionFlushExample "
                >
                  <div class="accordion-item ">
                    <h2 class="accordion-header" id="flush-headingOne">
                      <button
                        class="accordion-button collapsed demo text-white text-lg"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseOne"
                        aria-expanded="false"
                        aria-controls="flush-collapseOne"
                      >
                        What you will learn!!!
                      </button>
                    </h2>
                    <div
                      id="flush-collapseOne"
                      class="accordion-collapse collapse"
                      aria-labelledby="flush-headingOne"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div class="accordion-body">
                        <h6 className=" shadow  text-dark py-3 ">
                          Build a simple HTML text site
                        </h6>
                        <h6 className=" shadow text-dark py-3">
                          Style web pages using CSS
                        </h6>
                        <h6 className=" shadow  text-dark py-3">
                          Program websites with JavaScript
                        </h6>
                        <h6 className="  shadow py-3">
                          Build a Pipboy using Bootstrap
                        </h6>
                        <h6 className="  shadow py-3">
                          Build and publish a Google Chrome Extension
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingTwo">
                      <button
                        class="accordion-button collapsed demo text-white text-lg"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseTwo"
                        aria-expanded="false"
                        aria-controls="flush-collapseTwo"
                      >
                        HTML BASICS
                      </button>
                    </h2>
                    <div
                      id="flush-collapseTwo"
                      class="accordion-collapse collapse"
                      aria-labelledby="flush-headingTwo"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div class="accordion-body">
                        <div className="row">
                          <div className="col-md-6">
                            <h6 className="  text-dark py-3 shadow">
                              HTML Documents, Heading,Paragraph
                            </h6>
                          </div>

                          <div className="col-md-6">
                            <button
                              
                               className="btn btn-sm btn-outline-dark"
                               onClick={()=>navigate("/Courseview/1")}
                            >
                              
                              View
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      id="flush-collapseTwo"
                      class="accordion-collapse collapse"
                      aria-labelledby="flush-headingTwo"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div class="accordion-body">
                        <div className="row">
                          <div className="col-md-6">
                            <h6 className="  text-dark py-3 shadow ">
                              HTML Links & Image
                            </h6>
                          </div>

                          <div className="col-md-6">
                            <a
                              href="/Course"
                              className="btn btn-sm btn-outline-dark"
                            >
                              {" "}
                              View
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      id="flush-collapseTwo"
                      class="accordion-collapse collapse"
                      aria-labelledby="flush-headingTwo"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div class="accordion-body">
                        <div className="row">
                          <div className="col-md-6">
                            <h6 className="  text-dark py-3 shadow ">
                              HTML Forms{" "}
                            </h6>
                          </div>

                          <div className="col-md-6">
                            <a
                              href="/Course"
                              className="btn btn-sm btn-outline-dark"
                            >
                              {" "}
                              View
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      id="flush-collapseTwo"
                      class="accordion-collapse collapse"
                      aria-labelledby="flush-headingTwo"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div class="accordion-body">
                        <div className="row">
                          <div className="col-md-6">
                            <h6 className="  text-dark py-3 shadow ">
                              HTML Tables{" "}
                            </h6>
                          </div>

                          <div className="col-md-6">
                            <a
                              href="/Course"
                              className="btn btn-sm btn-outline-dark"
                            >
                              {" "}
                              View
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      id="flush-collapseTwo"
                      class="accordion-collapse collapse"
                      aria-labelledby="flush-headingTwo"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div class="accordion-body">
                        <div className="row">
                          <div className="col-md-6">
                            <h6 className="  text-dark py-3 shadow ">
                              HTML Graphics{" "}
                            </h6>
                          </div>

                          <div className="col-md-6">
                            <a
                              href="/Course"
                              className="btn btn-sm btn-outline-dark"
                            >
                              {" "}
                              View
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingThree">
                      <button
                        class="accordion-button collapsed demo text-white text-lg"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseThree"
                        aria-expanded="false"
                        aria-controls="flush-collapseThree"
                      >
                        CSS BASICS
                      </button>
                    </h2>
                    <div
                      id="flush-collapseThree"
                      class="accordion-collapse collapse"
                      aria-labelledby="flush-headingThree"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div class="accordion-body">
                        <div className="row">
                          <div className="col-md-6">
                            <h6 className="  text-dark py-3 shadow ">
                              CSS Syntax &Three Type Of CSS
                            </h6>
                          </div>

                          <div className="col-md-6">
                            <a
                              href="/Course"
                              className="btn btn-sm btn-outline-dark"
                            >
                              {" "}
                              View
                            </a>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <h6 className="  text-dark py-3 shadow ">
                              CSS Selector & Background
                            </h6>
                          </div>

                          <div className="col-md-6">
                            <a
                              href="/Course"
                              className="btn btn-sm btn-outline-dark"
                            >
                              {" "}
                              View
                            </a>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <h6 className="  text-dark py-3 shadow ">
                              Border,Margin,Padding{" "}
                            </h6>
                          </div>

                          <div className="col-md-6">
                            <a
                              href="/Course"
                              className="btn btn-sm btn-outline-dark"
                            >
                              {" "}
                              View
                            </a>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <h6 className="  text-dark py-3 shadow ">
                              Pseudo-classes & Elements
                            </h6>
                          </div>

                          <div className="col-md-6">
                            <a
                              href="/Course"
                              className="btn btn-sm btn-outline-dark"
                            >
                              {" "}
                              View
                            </a>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <h6 className="  text-dark py-3 shadow ">
                              Grid & Flex{" "}
                            </h6>
                          </div>

                          <div className="col-md-6">
                            <a
                              href="/Course"
                              className="btn btn-sm btn-outline-dark"
                            >
                              {" "}
                              View
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Course 2 */}
      {id === "2" && (
        <div className="course ">
          <div className="card bg-black pt-5 ">
            <div className="row">
              <div className="col-md-1 "></div>
              <div className="col-md-5 card card-info p-3">
                <img
                  src="https://codecondo.com/wp-content/uploads/2017/09/back-end-developer.jpg"
                  alt="backend"
                  // height="200"
                  // width="300"
                  className="card card-transparent"
                />
                <div className="pt-5">
                  <h4 className="">
                    React, NodeJS, Express & MongoDB - The MERN Fullstack Guide
                  </h4>
                  <h4 className="">
                    Build fullstack React.js applications with Node.js,
                    Express.js &
                  </h4>
                  <h4> MongoDB (MERN) with this project-focused course.!</h4>
                  <h4 className="pt-3">
                    <b> Course Duration :</b>{" "}
                    <span className="text-danger">19 Hours</span>
                  </h4>
                </div>
                <h5 className="pt-2 text-black">
                  Created by
                  <a href="https://www.udemy.com/user/manuel-lorenz/">
                    {" "}
                    Manuel Lorenz
                  </a>
                </h5>
                <div className="rating pb-3 text-black">
                  <span>☆</span>
                  <span>☆</span>
                  <span>☆</span>
                  <span>☆</span>
                  <span>☆</span>
                </div>
              </div>
              <div className="col-md-1 pt-3"></div>
              <div className="col-md-4 pt-3 ">
                <div
                  class="accordion accordion-flush"
                  id="accordionFlushExample "
                >
                  <div class="accordion-item ">
                    <h2 class="accordion-header" id="flush-headingOne">
                      <button
                        class="accordion-button collapsed demo text-white text-lg"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseOne"
                        aria-expanded="false"
                        aria-controls="flush-collapseOne"
                      >
                        What you will learn!!!
                      </button>
                    </h2>
                    <div
                      id="flush-collapseOne"
                      class="accordion-collapse collapse"
                      aria-labelledby="flush-headingOne"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div class="accordion-body">
                        <h6 className=" shadow  text-dark py-3 ">
                          Introduction & Getting Started
                        </h6>
                        <h6 className=" shadow text-dark py-3">
                          Install & setup{" "}
                        </h6>
                        <h6 className=" shadow  text-dark py-3">Basic React</h6>
                        <h6 className="  shadow py-3">
                          Basic NodeJS & Express
                        </h6>
                        <h6 className="  shadow py-3">MongoDB</h6>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingTwo">
                      <button
                        class="accordion-button collapsed demo text-white text-lg"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseTwo"
                        aria-expanded="false"
                        aria-controls="flush-collapseTwo"
                      >
                        Introduction & Getting Started
                      </button>
                    </h2>
                    <div
                      id="flush-collapseTwo"
                      class="accordion-collapse collapse"
                      aria-labelledby="flush-headingTwo"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div class="accordion-body">
                        <div className="row">
                          <div className="col-md-6">
                            <h6 className="  text-dark py-3 shadow">
                              Server setup with Express.js and Node.js
                            </h6>
                          </div>

                          <div className="col-md-6">
                            <a
                              href="/Course"
                              className="btn btn-sm btn-outline-dark"
                            >
                              {" "}
                              View
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      id="flush-collapseTwo"
                      class="accordion-collapse collapse"
                      aria-labelledby="flush-headingTwo"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div class="accordion-body">
                        <div className="row">
                          <div className="col-md-6">
                            <h6 className="  text-dark py-3 shadow ">
                              Database management with MongoDB
                            </h6>
                          </div>

                          <div className="col-md-6">
                            <a
                              href="/Course"
                              className="btn btn-sm btn-outline-dark"
                            >
                              {" "}
                              View
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      id="flush-collapseTwo"
                      class="accordion-collapse collapse"
                      aria-labelledby="flush-headingTwo"
                      data-bs-parent="#accordionFlushExample"
                    ></div>
                    <div
                      id="flush-collapseTwo"
                      class="accordion-collapse collapse"
                      aria-labelledby="flush-headingTwo"
                      data-bs-parent="#accordionFlushExample"
                    ></div>
                    <div
                      id="flush-collapseTwo"
                      class="accordion-collapse collapse"
                      aria-labelledby="flush-headingTwo"
                      data-bs-parent="#accordionFlushExample"
                    ></div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingThree">
                      <button
                        class="accordion-button collapsed demo text-white text-lg"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseThree"
                        aria-expanded="false"
                        aria-controls="flush-collapseThree"
                      >
                        Basic React
                      </button>
                    </h2>
                    <div
                      id="flush-collapseThree"
                      class="accordion-collapse collapse"
                      aria-labelledby="flush-headingThree"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div class="accordion-body">
                        <div className="row">
                          <div className="col-md-6">
                            <h6 className="  text-dark py-3 shadow ">
                              Create React App & Folder Structure
                            </h6>
                          </div>

                          <div className="col-md-6">
                            <a
                              href="/Course"
                              className="btn btn-sm btn-outline-dark"
                            >
                              {" "}
                              View
                            </a>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <h6 className="  text-dark py-3 shadow ">
                              Class & Functional Components
                            </h6>
                          </div>

                          <div className="col-md-6">
                            <a
                              href="/Course"
                              className="btn btn-sm btn-outline-dark"
                            >
                              {" "}
                              View
                            </a>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <h6 className="  text-dark py-3 shadow ">
                              Props, State & Events
                            </h6>
                          </div>

                          <div className="col-md-6">
                            <a
                              href="/Course"
                              className="btn btn-sm btn-outline-dark"
                            >
                              {" "}
                              View
                            </a>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <h6 className="  text-dark py-3 shadow ">
                              React Forms ,Router & Links
                            </h6>
                          </div>

                          <div className="col-md-6">
                            <a
                              href="/Course"
                              className="btn btn-sm btn-outline-dark"
                            >
                              {" "}
                              View
                            </a>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <h6 className="  text-dark py-3 shadow ">
                              React Hooks
                            </h6>
                          </div>

                          <div className="col-md-6">
                            <a
                              href="/Course"
                              className="btn btn-sm btn-outline-dark"
                            >
                              {" "}
                              View
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="coursecontent"></div>
        </div>
      )}
      {/* Course 3 */}
      {id === "3" && (
        <div className="course ">
          <div className="card bg-black pt-5 ">
            <div className="row">
              <div className="col-md-1 "></div>
              <div className="col-md-5 card card-info p-3">
                <img
                  src="https://mindphp.com/images/Hosting_Directadmin/Webmail/Machine-Learning.jpg"
                  alt="ml"
                  // height="200"
                  // width="300"
                  className="card card-transparent"
                />
                <div className="pt-5">
                  <h4 className="">Complete Machine Learning Using Python</h4>
                  <h4 className="">
                    Learn to create Machine Learning Algorithms in Python from Data Science experts.
                  </h4>
                  <h4> Code templates included. </h4>
                  <h4 className="pt-3">
                    <b> Course Duration :</b>{" "}
                    <span className="text-danger">13 Hours</span>
                  </h4>
                </div>
                <h5 className="pt-2 text-black">
                  Created by
                  <a href="https://josephdelgadillo.com/"> Joseph Delgadio</a>
                </h5>
                <div className="rating pb-3 text-black">
                  <span>☆</span>
                  <span>☆</span>
                  <span>☆</span>
                  <span>☆</span>
                  <span>☆</span>
                </div>
              </div>
              <div className="col-md-1 pt-3"></div>
              <div className="col-md-4 pt-3 ">
                <div
                  class="accordion accordion-flush"
                  id="accordionFlushExample "
                >
                  <div class="accordion-item ">
                    <h2 class="accordion-header" id="flush-headingOne">
                      <button
                        class="accordion-button collapsed demo text-white text-lg"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseOne"
                        aria-expanded="false"
                        aria-controls="flush-collapseOne"
                      >
                        What you will learn!!!
                      </button>
                    </h2>
                    <div
                      id="flush-collapseOne"
                      class="accordion-collapse collapse"
                      aria-labelledby="flush-headingOne"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div class="accordion-body">
                        <h6 className=" shadow  text-dark py-3 ">
                          Introduction to Machine Learning
                        </h6>
                        <h6 className=" shadow text-dark py-3">
                          Basic python programming
                        </h6>
       
                        <h6 className="  shadow py-3">ML Concepts</h6>
                        <h6 className="  shadow py-3">Tenser Flow</h6>
                      </div>
                    </div>
                  </div>

                  <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingThree">
                      <button
                        class="accordion-button collapsed demo text-white text-lg"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseThree"
                        aria-expanded="false"
                        aria-controls="flush-collapseThree"
                      >
                        ML Python Concepts
                      </button>
                    </h2>
                    <div
                      id="flush-collapseThree"
                      class="accordion-collapse collapse"
                      aria-labelledby="flush-headingThree"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div class="accordion-body">
                        <div className="row">
                          <div className="col-md-6">
                            <h6 className="  text-dark py-3 shadow ">
                              Python Numpy
                            </h6>
                          </div>

                          <div className="col-md-6">
                            <a
                              href="/Course"
                              className="btn btn-sm btn-outline-dark"
                            >
                              {" "}
                              View
                            </a>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <h6 className="  text-dark py-3 shadow ">
                              Python Matplotlib
                            </h6>
                          </div>

                          <div className="col-md-6">
                            <a
                              href="/Course"
                              className="btn btn-sm btn-outline-dark"
                            >
                              {" "}
                              View
                            </a>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <h6 className="  text-dark py-3 shadow ">
                              Python Pandas
                            </h6>
                          </div>

                          <div className="col-md-6">
                            <a
                              href="/Course"
                              className="btn btn-sm btn-outline-dark"
                            >
                              {" "}
                              View
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingTwo">
                      <button
                        class="accordion-button collapsed demo text-white text-lg"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseTwo"
                        aria-expanded="false"
                        aria-controls="flush-collapseTwo"
                      >
                        ML Concepts
                      </button>
                    </h2>
                    <div
                      id="flush-collapseTwo"
                      class="accordion-collapse collapse"
                      aria-labelledby="flush-headingTwo"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div class="accordion-body">
                        <div className="row">
                          <div className="col-md-6">
                            <h6 className="  text-dark py-3 shadow">
                              ML Linear Graph & Plots
                            </h6>
                          </div>

                          <div className="col-md-6">
                            <a
                              href="/Course"
                              className="btn btn-sm btn-outline-dark"
                            >
                              {" "}
                              View
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      id="flush-collapseTwo"
                      class="accordion-collapse collapse"
                      aria-labelledby="flush-headingTwo"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div class="accordion-body">
                        <div className="row">
                          <div className="col-md-6">
                            <h6 className="  text-dark py-3 shadow ">
                              ML Training & Testing
                            </h6>
                          </div>

                          <div className="col-md-6">
                            <a
                              href="/Course"
                              className="btn btn-sm btn-outline-dark"
                            >
                              {" "}
                              View
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      id="flush-collapseTwo"
                      class="accordion-collapse collapse"
                      aria-labelledby="flush-headingTwo"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div class="accordion-body">
                        <div className="row">
                          <div className="col-md-6">
                            <h6 className="  text-dark py-3 shadow ">
                              ML Learning & Prediction
                            </h6>
                          </div>

                          <div className="col-md-6">
                            <a
                              href="/Course"
                              className="btn btn-sm btn-outline-dark"
                            >
                              {" "}
                              View
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      id="flush-collapseTwo"
                      class="accordion-collapse collapse"
                      aria-labelledby="flush-headingTwo"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div class="accordion-body">
                        <div className="row">
                          <div className="col-md-6">
                            <h6 className="  text-dark py-3 shadow ">
                              ML Data Cluster & Regression
                            </h6>
                          </div>

                          <div className="col-md-6">
                            <a
                              href="/Course"
                              className="btn btn-sm btn-outline-dark"
                            >
                              {" "}
                              View
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      id="flush-collapseTwo"
                      class="accordion-collapse collapse"
                      aria-labelledby="flush-headingTwo"
                      data-bs-parent="#accordionFlushExample"
                    ></div>
                    <div class="accordion-item">
                      <h2 class="accordion-header" id="flush-headingThree">
                        <button
                          class="accordion-button collapsed demo text-white text-lg"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseThree"
                          aria-expanded="false"
                          aria-controls="flush-collapseThree"
                        >
                          Tenser Flow
                        </button>
                      </h2>
                      <div
                        id="flush-collapseThree"
                        class="accordion-collapse collapse"
                        aria-labelledby="flush-headingThree"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div class="accordion-body">
                          <div className="row">
                            <div className="col-md-6">
                              <h6 className="  text-dark py-3 shadow ">
                                Tenser Flow Operations
                              </h6>
                            </div>

                            <div className="col-md-6">
                              <a
                                href="/Course"
                                className="btn btn-sm btn-outline-dark"
                              >
                                {" "}
                                View
                              </a>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-6">
                              <h6 className="  text-dark py-3 shadow ">
                                Tenser Flow Models
                              </h6>
                            </div>

                            <div className="col-md-6">
                              <a
                                href="/Course"
                                className="btn btn-sm btn-outline-dark"
                              >
                                {" "}
                                View
                              </a>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-6">
                              <h6 className="  text-dark py-3 shadow ">
                                Tenser Flow Visors
                              </h6>
                            </div>

                            <div className="col-md-6">
                              <a
                                href="/Course"
                                className="btn btn-sm btn-outline-dark"
                              >
                                {" "}
                                View
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      ;
    </div>
  );
}
export default Coursedetail;
