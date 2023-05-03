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
    >
      <div className="mt-5">
        {/* <div className='row'>
          
        */}
        <div className=" mt-5 shadow card" style={{ backgroundColor: "black" }}>
          <h1 className="text-center learntocodeh1"> Learn & Explore More</h1>

          <div class="container">
            <div class="row d-flex justify-content-center">
              <div class="col-md-6">
                <div class=" p-4 mt-2">
                  <h2 class="heading text-center">
                    Your Learning Journey Starts Here
                  </h2>
                  <h3 class="heading mt-4 text-center">
                    Hi! How can we help You?
                  </h3>
                  <div class="d-flex justify-content-center px-2">
                    <div class="search">
                      <input
                        type="text"
                        class="search-input"
                        placeholder="Search..."
                        name=""
                      />
                      <a href="/" class="search-icon">
                        <i class="fa fa-search"></i>{" "}
                      </a>
                    </div>
                  </div>{" "}
                </div>{" "}
              </div>
              <h1 className="text-center">
                <a href="/course" className="text-center">
                  Not Sure Where To Begin?
                </a>
              </h1>
            </div>
          </div>

          <h1> </h1>
        </div>
      </div>
    </div>

    // </div>
  );
}

export default Home;
