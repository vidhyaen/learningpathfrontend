import React from "react";

// import "./page.css";

import "./video.css";
import { Link } from "react-router-dom";

import { Dropdown } from "rsuite";

import "rsuite/dist/rsuite.min.css";

import certiimg from "../image/certiflowchart.jpg";

function videos() {
  return (
    <div
      className="App-header"
      style={{
        backgroundColor: "black",

        color: "white",
      }}
    >
      <div className="row header">
        <div className="col-md-6">
          <Link to="/videos" className="nav-link">
            Videos
          </Link>
        </div>
        <div className="col-md-6">
          <Link to="/certifications" className="nav-link">
            Guide
          </Link>
        </div>
      </div>{" "}
&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp  &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp
 &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp
 &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp
 &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp
      <div className="text-center m-5 mt-5">
        <h1 className="text-center text-danger mt-5 ">VIDEOS</h1> {" "}
        <div className="text-center">
          {" "}
          <h3>
            Video tutorials can help in excellent understanding of the concepts
          </h3>{" "}
          <h3>
            {" "}
            Check out the below links which contains video tutorials of various
            courses
          </h3>
        </div>{" "}
        <div className=" mt-5">
          {" "}
          <center>
            {" "}
           
            <Dropdown
              title="FRONT END DEVELOPEMENT"
              style={{ color: "darkblue",fontSize:"20px",fontFamily:"sans-serif", fontWeight:"bold" }}
            >
              {" "}
              <Dropdown.Item
                as="a"
                href="https://www.youtube.com/watch?v=UnTQVlqmDQ0&list=PL8cbIVgGw2saOmAkj8c-j-H-7L45SAbHl"
              >
              <h2>Front End Developer Playlist{" "}</h2>  
              </Dropdown.Item>{" "}
              <Dropdown.Item
                as="a"
                href="https://www.youtube.com/watch?v=dgKSqz3it50&list=PLNPsnMKCW_FQqnhbnV8G1ACcXQtpKxXpK"
              >
                Front End Developer Projects{" "}
              </Dropdown.Item>{" "}
              <Dropdown.Item
                as="a"
                href="https://www.youtube.com/watch?v=-hdumERhtvU&pp=ygUwRnJvbnQgRW5kIERldmVsb3BlciBDZXJ0aWZpY2F0aW9ucyBmb3IgYmVnaW5lZXJz"
              >
                Front End Developer Certifications{" "}
              </Dropdown.Item>{" "}
              <Dropdown.Item as="a" href="https://youtu.be/7mTNt3mzC6E">
                Front End Developer Interviews{" "}
              </Dropdown.Item>{" "}
              <Dropdown.Item
                as="a"
                href="https://www.youtube.com/watch?v=Lp_1vHxOQ0I"
              >
                Front End Developer Job Opportunities{" "}
              </Dropdown.Item>{" "}
            </Dropdown>
            &nbsp; &nbsp; &nbsp;{" "}
            <Dropdown title="DEVOPS ENGINEER"  style={{ color: "darkblue",fontSize:"20px",fontFamily:"sans-serif", fontWeight:"bold" }}>
              {" "}
              <Dropdown.Item
                as="a"
                href="https://www.youtube.com/watch?v=ZbG0c87wcM8&list=PL9gnSGHSqcnoqBXdMwUTRod4Gi3eac2Ak"
              >
                Devops Engineer Playlist{" "}
              </Dropdown.Item>{" "}
              <Dropdown.Item
                as="a"
                href="https://www.youtube.com/watch?v=8D46Pgbz0gg&list=PLxzKY3wu0_FJdJd3IKdiM4Om1hGo2Hsdt"
              >
                Devops Engineer Projects{" "}
              </Dropdown.Item>{" "}
              <Dropdown.Item
                as="a"
                href="https://www.youtube.com/watch?v=HFILkW449_w&pp=ygUdZGV2b3BzIGVuZ2luZWVyIGNlcnRpZmljYXRpb24%3D"
              >
                Devops Engineer Certifications{" "}
              </Dropdown.Item>{" "}
              <Dropdown.Item
                as="a"
                href="https://www.youtube.com/watch?v=WxjJlYFIWtI&pp=ygUZZGV2b3BzIGVuZ2luZWVyIGludGVydmlldw%3D%3D"
              >
                Devops Engineer Interviews{" "}
              </Dropdown.Item>{" "}
              <Dropdown.Item
                as="a"
                href="https://www.youtube.com/watch?v=Ho6yp1oTwMo&pp=ygUhZGV2b3BzIGVuZ2luZWVyIGpvYiBvcHBvcnR1bml0aWVz"
              >
                Devops Engineer Jobs{" "}
              </Dropdown.Item>{" "}
            </Dropdown>
            &nbsp; &nbsp; &nbsp;{" "}
            <Dropdown
              title="SPRING BOOT DEVELOPEMENT"
              style={{ color: "darkblue",fontSize:"20px",fontFamily:"sans-serif", fontWeight:"bold" }}
            >
              {" "}
              <Dropdown.Item
                as="a"
                href="https://www.youtube.com/watch?v=slTUtTSwRKU&list=PLGRDMO4rOGcNSBOJOlrgQqGpIgo6_VZgR"
              >
                Spring Boot Developer playlist{" "}
              </Dropdown.Item>{" "}
              <Dropdown.Item
                as="a"
                href="https://www.youtube.com/watch?v=np3AcrjiR8A&list=PLA7e3zmT6XQVurih2daho3QdKbVN9Dutx"
              >
                Spring Boot Developer projects{" "}
              </Dropdown.Item>{" "}
              <Dropdown.Item
                as="a"
                href="https://www.youtube.com/watch?v=brcdGMnM1lo&pp=ygUjc3ByaW5nIGJvb3QgZGV2ZWxvcGVyIGNlcnRpZmljYXRpb24%3D"
              >
                Spring Boot Developer Certifications{" "}
              </Dropdown.Item>{" "}
              <Dropdown.Item
                as="a"
                href="https://www.youtube.com/watch?v=OpoRDu9radA&pp=ygUgU3ByaW5nIEJvb3QgRGV2ZWxvcGVyIGludGVydmlld3M%3D"
              >
                Spring Boot Developer Interviews{" "}
              </Dropdown.Item>{" "}
              <Dropdown.Item
                as="a"
                href="https://www.youtube.com/watch?v=OpoRDu9radA&pp=ygUgU3ByaW5nIEJvb3QgRGV2ZWxvcGVyIGludGVydmlld3M%3D"
              >
                Spring Boot Developer Jobs{" "}
              </Dropdown.Item>{" "}
            </Dropdown>{" "}
          </center>
          <br></br>  
          <center>
            {" "}
            <Dropdown title="BACK END DEVELOPER"  style={{ color: "darkblue",fontSize:"20px",fontFamily:"sans-serif", fontWeight:"bold" }}>
              {" "}
              <Dropdown.Item
                as="a"
                href="https://www.youtube.com/watch?v=fupTFbQv3MQ&list=PL-Jc9J83PIiEnK1q9tuVrrORqKBexcE_J"
              >
                Back End developer playlist{" "}
              </Dropdown.Item>{" "}
              <Dropdown.Item
                as="a"
                href="https://www.youtube.com/watch?v=cGAdC4A5fF4&pp=ygUaYmFja2VuZCBkZXZlbG9wZXIgcHJvamVjdHM%3D"
              >
                Back End developer projects{" "}
              </Dropdown.Item>{" "}
              <Dropdown.Item
                as="a"
                href="https://www.youtube.com/watch?v=WN5onNWfNc8&list=PLqX4M0x0p9ck3OfyL14-MISy6_-4oH9fK"
              >
                Back End developer certifications{" "}
              </Dropdown.Item>{" "}
              <Dropdown.Item
                as="a"
                href="https://www.youtube.com/watch?v=ack9Eb7Hvqk&pp=ygUbYmFja2VuZCBkZXZlbG9wZXIgaW50ZXJ2aWV3"
              >
                Back End developer interviews{" "}
              </Dropdown.Item>{" "}
              <Dropdown.Item
                as="a"
                href="https://www.youtube.com/watch?v=_770O2pzlkg&pp=ygUWYmFja2VuZCBkZXZlbG9wZXIgam9icw%3D%3D"
              >
                Back End developer jobs{" "}
              </Dropdown.Item>{" "}
            </Dropdown>
            &nbsp; &nbsp; &nbsp;{" "}
            <Dropdown title="QA ENGINEER" style={{ color: "darkblue",fontSize:"20px",fontFamily:"sans-serif", fontWeight:"bold" }}>
              {" "}
              <Dropdown.Item
                as="a"
                href="https://www.youtube.com/watch?v=E2t5XbWwj7I&list=PLL34mf651faM_nn8uKlnwbQPw5zSh_F84"
              >
                QA Engineer playlist{" "}
              </Dropdown.Item>{" "}
              <Dropdown.Item
                as="a"
                href="https://www.youtube.com/watch?v=vv2PskqvGRA&pp=ygUUcWEgZW5naW5lZXIgcHJvamVjdHM%3D"
              >
                QA Engineer projects{" "}
              </Dropdown.Item>{" "}
              <Dropdown.Item
                as="a"
                href="https://www.youtube.com/watch?v=i843CLnivcs&pp=ygUZcWEgZW5naW5lZXJjZXJ0aWZpY2F0aW9ucw%3D%3D"
              >
                QA Engineer certifications{" "}
              </Dropdown.Item>{" "}
              <Dropdown.Item
                as="a"
                href="https://www.youtube.com/watch?v=WylVDKwNllk&pp=ygUfcWEgZW5naW5lZXIgaW50ZXJ2aWV3IHF1ZXN0aW9ucw%3D%3D"
              >
                QA Engineer Interviews{" "}
              </Dropdown.Item>{" "}
              <Dropdown.Item
                as="a"
                href="https://www.youtube.com/watch?v=zvonNsdjUNQ&pp=ygUQUUEgZW5naW5lZXIgam9icw%3D%3D"
              >
                QA Engineer Jobs{" "}
              </Dropdown.Item>{" "}
            </Dropdown>
            &nbsp; &nbsp; &nbsp;{" "}
            <Dropdown
              title=" FULL STACK DEVELOPEMENT"
              style={{ color: "darkblue",fontSize:"20px",fontFamily:"sans-serif", fontWeight:"bold" }}
            >
              {" "}
              <Dropdown.Item
                as="a"
                href="https://www.youtube.com/playlist?list=PL9ooVrP1hQOGTHk2auXsk3cyqRBbbsQ6l"
              >
                fullstack developer playlist{" "}
              </Dropdown.Item>{" "}
              <Dropdown.Item
                as="a"
                href="https://medium.com/for-self-taught-developers/10-best-project-based-tutorials-to-learn-full-stack-development-d172fe5c3aac"
              >
                fullstack developer projects{" "}
              </Dropdown.Item>{" "}
              <Dropdown.Item
                as="a"
                href="https://careerfoundry.com/en/blog/web-development/full-stack-developer-certification-courses/"
              >
                fullstack developer certifications{" "}
              </Dropdown.Item>{" "}
              <Dropdown.Item
                as="a"
                href="https://intellipaat.com/blog/interview-question/full-stack-developer-interview-questions/"
              >
                fullstack developer Interviews{" "}
              </Dropdown.Item>{" "}
              <Dropdown.Item
                as="a"
                href="https://www.codingdojo.com/blog/top-careers-full-stack-developers"
              >
                fullstack developer Jobs{" "}
              </Dropdown.Item>{" "}
            </Dropdown>
            &nbsp; &nbsp; &nbsp;{" "}
          </center>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}

export default videos;
