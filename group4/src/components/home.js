import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../image/logo.jpg";
import "./home.css";
import { FiArrowRight } from "react-icons/fi";
import { Footer } from "./footer";


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
    // <div className=' mt-5'> <img src="https://blog.commlabindia.com/wp-content/uploads/2019/08/elearning-promotion-creative-ways.jpg" className='shadow border'

    // alt='elearning' width="1119" height="420"/></div>

    <div
      style={{
        paddingTop: "150px",

        height: height,

        color: "white",
      }}
      className=""
    >
      <div className="header">
        <Link
          to="/about"
          className="nav-link"
          style={{
            margin: "0 auto",
            color: "white",
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
          }}
        >
          <img
            src={Logo}
            alt=""
            style={{ width: "40px", height: "40px", marginRight: "5px" }}
          />
          <span style={{ fontWeight: "bold" }}>Learning Path</span>
        </Link>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/course" className="nav-link">
            Courses
          </Link>
          <Link to="/certifications" className="nav-link">
            Guides
          </Link>

          <Link to="/videos" className="nav-link">
            Videos
          </Link>
          <Link to="/login" className="nav-link">
            Logout
          </Link>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        ></div>
      </div>

      <div class=" row flex justify-content-center m-5">
        <div class="col-md-6  text-center">
          <div class=" ">
            <h1 class="heading mt-5 ">Your Learning Journey Starts Here</h1>
            <h1 className="mt-5 text-center">
              Hello{" "}
              {localStorage.getItem("username")
                ? localStorage.getItem("username")
                : ""}{" "}
              !!!
            </h1>

            <h2 className="mt-5 text-center ">
              <a href="/course" className=" text-white  mt-5">
                Not Sure Where To Begin?
              </a>
            </h2>
            <div className="text-center">
              <button
                className="secondary-button m-5 "
                onClick={() => (window.location.href = "/course")}
              >
                GET STARTED <FiArrowRight className="text-center" />{" "}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="container">
        <h1>Our Team Members</h1>
        <div className="row">
         
          <div className="col-md-3">
            <div class="card" style={{ width: "18rem", height:"50px"}}>
              <img src={Vidhya} class="card-img-top" alt="vidhya" />
              <div class="card-body">
                <p>Vidhya E N</p>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div class="card" style={{ width: "18rem", height:"50px"}}>
              <img src={Josika} class="card-img-top" alt="josika" />
              <div class="card-body">
                <p>Josika P</p>
              </div>
            </div>
          </div>
          
          <div className="col-md-3">
            <div class="card" style={{ width: "18rem", height:"50px"}}>
              <img src={Thoufi} class="card-img-top" alt="thoufi" />
              <div class="card-body">
                <p>Mohammad Thoufeek S K </p>
              </div>
            </div>
          </div>
          </div>

          <div className="row">
          <div className="col-md-3">
          <div class="card" style={{ width: "18rem", height:"50px"}}>
              <img src={Impana} class="card-img-top" alt="impana" />
              <div class="card-body">
                <p>Impana S</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
          <div class="card" style={{ width: "18rem", height:"50px"}}>
              <img src={Suhas} class="card-img-top" alt="suhas" />
              <div class="card-body">
                <p>Suhas</p>
              </div>
            </div>
          </div>
          </div>
        
      </div> */}
    </div>
  );
}

export default Home;
