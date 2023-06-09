import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

const frontend = () => {

	// Function will execute on click of button
	const onButtonClick = () => {
		// using Java Script method to get PDF file
		fetch('frontend.pdf').then(response => {
			response.blob().then(blob => {
				// Creating new object of PDF file
				const fileURL = window.URL.createObjectURL(blob);
				// Setting various property values
				let alink = document.createElement('a');
				alink.href = fileURL;
				alink.download = 'frontend.pdf';
				alink.click();
			})
		})
	}
	return (
		<>
     <div className="App-header mt-5">
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
      <br></br>
      <br></br>
			<center>
				<h1 className="text-white mt-5">FRONT END DEVELOPER</h1>
				<h3 className="text-white mt-5">Click on below button to download PDF file of frontend developer flowchart</h3>
				<button className="buttonguide mt-5" onClick={onButtonClick}>
					Download RoadMap for Frontend Developer
				</button>
        <br></br>
        <br></br>
        <br></br>
			
      <table className="colorful-table">
      <tbody>
        <tr>
          <td>
            <a
              href="https://www.w3schools.com/whatis/whatis_frontenddev.asp"
              className="colorful-link"
            >
              What is a front end developement?
            </a>
          </td>
        </tr>
        <tr>
          <td>
            <a
              href="https://www.coursera.org/articles/front-end-developer"
              className="colorful-link"
            >
              What does front end developer do?
            </a>
          </td>
        </tr>
        <tr>
          <td>
            <a
              href="https://www.ambitionbox.com/profile/front-end-developer-salary"
              className="colorful-link"
            >
              Average front end developers salary
            </a>
          </td>
        </tr>
       
        <tr>
          <td>
            <a
              href="https://www.google.com/search?q=front+end+developer+jobs&oq=front+end+developer+jobs&aqs=chrome..69i57j0i402i512j0i512j0i131i433i512j0i512l6.5396j0j7&sourceid=chrome&ie=UTF-8"
              className="colorful-link"
            >
              Front end developer jobs
            </a>
          </td>
        </tr>
        <tr>
          <td>
            <a
              href="https://www.google.com/search?q=best+languages+for+front+end+development&oq=best+languages+for&aqs=chrome.0.0i20i263i512j69i57j0i512l8.4852j0j7&sourceid=chrome&ie=UTF-8"
              className="colorful-link"
            >
              Popular front end developement languages
            </a>
          </td>
        </tr>
        <tr>
          <td>
            <a
              href="https://enhancv.com/resume-examples/front-end-developer/"
              className="colorful-link"
            >
              How to create a resume as a front end developer
            </a>
          </td>
        </tr>

      </tbody>
    </table>
    </center>
    </div>
		</>
	);
};

export default frontend;