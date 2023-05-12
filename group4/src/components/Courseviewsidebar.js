import React from "react";
import "./Courseviewside.css";


export const Courseviewsidebar = ({ closeNav }) => {
 const  handleComplete = () => {  
  // alert("Marked as done");
  
  let x=document.getElementById("in1");
  // console.log(x);
  x.style.backgroundColor="green";
  }
  return (
    <div id="mySidenav" className="sidenav1">
      <div className="row">
        <div className="col-6">
          <button className="btn btn-success btn-lg" onClick={handleComplete}>Mark as done</button>
        </div>
        <div className="col-6">
          <a href="/detail/1
          " className="closebtn" onClick={closeNav}>
            &times;
          </a>
        </div>
      </div>

      <h1 className="text-dark">Internet</h1>
      <p>
        The Internet is a global network of computers connected to each other
        which communicate through a standardized set of protocols.
      </p>
      <details>
        <summary>Introduction to the Internet</summary>
        <p>
          Before we learn what the Internet is, we need to understand what a
          Network is.A network is a group of computers or other devices which
          are connected to eachother.{" "}
        </p>
      </details>
      <details>
        <summary>What is the Internet?</summary>
        <p> The Internet is a global network of computers connected to each other which communicate through a standardized set of protocols.</p>
      </details>
      <details>
        <summary>How does the Internet work?</summary>
        <p> The Internet is a global network of computers connected to each other which communicate through a standardized set of protocols.</p>
      
    </details>

      

      


      <h2 className="mt-5">Visit the following resources to learn more:</h2>

      <a href="https://cs.fyi/guide/how-does-internet-work">
        How does the Internet work?
      </a>
      <div>
        <a href="https://www.youtube.com/watch?v=7_LPdttKXPc&ab_channel=Aaron">
          {" "}
          How the Internet Works in 5 Minutes
        </a>
      </div>
    </div>
  );
};
export default Courseviewsidebar;