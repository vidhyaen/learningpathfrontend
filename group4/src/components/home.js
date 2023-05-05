import React, { useEffect, useState } from "react";
import "./home.css";
function Home() {
  const [height, setHeight] = useState(window.innerHeight);
 
  useEffect(() => {
    function handleResize() {
      setHeight(window.innerHeight);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    // <div className=' mt-5'>  <img src="https://blog.commlabindia.com/wp-content/uploads/2019/08/elearning-promotion-creative-ways.jpg" className='shadow border'
    // alt='elearning' width="1119" height="420"/></div>
    <div
      style={{
        paddingTop: "150px",

        height: height,
        backgroundColor: "black",
        color: "white",
      }}
      className="container"
    >
    
<div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
      <img src="https://sellcoursesonline.com/wp-content/uploads/2022/05/types-of-online-courses.png" className="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
    <div class="">
      
    <div class="row d-flex justify-content-right learntocodeh1">
              <div class="col-md-6 mt-5">
                <div class="  mt-5">
                  <h2 class="heading ">
                    Your Learning Journey Starts Here
                  </h2>
                  <h3 class="heading mt-4 ">
                    Hi! How can we help You?
                  </h3>
                  <div class="d-flex col-md-6  ">
                    <div class=" search d-flex pt-3 ">
                    <input
                        type="text"
                        class="search-input"
                        placeholder="Search..."
                        name=""/>
                      <a href="/" class="search-icon search ">
                        <i class="fa fa-search"></i>{" "}
                      </a>
                    </div>
                    
                  </div>{" "}
                  <h1 className=" mt-5">
                <a href="/course" className=" text-white">
                  Not Sure Where To Begin?
                </a>
              </h1>
                </div>{" "}
              </div>
             
            </div>
    </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>

        </div>
  
</div>

  );
}

export default Home;
