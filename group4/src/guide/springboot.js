import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

const springboot = () => {

	// Function will execute on click of button
	const onButtonClick = () => {
		// using Java Script method to get PDF file
		fetch('spring-boot.pdf').then(response => {
			response.blob().then(blob => {
				// Creating new object of PDF file
				const fileURL = window.URL.createObjectURL(blob);
				// Setting various property values
				let alink = document.createElement('a');
				alink.href = fileURL;
				alink.download = 'spring-boot.pdf';
				alink.click();
			})
		})
	}
	return (
		<div className="App-header">
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
				<h1 className="text-white mt-5">SPRING BOOT DEVELOPER</h1>
				<h3 className="text-white mt-5">Click on below button to download PDF file of spring-boot developer flowchart</h3>
				<button className="buttonguide mt-5" onClick={onButtonClick}>
					Download RoadMap for springboot Developer
				</button>
        <br></br>
        <br></br>
        <br></br>
			
      <table className="colorful-table">
      <tbody>
        <tr>
          <td>
            <a
              href="https://azure.microsoft.com/en-in/resources/cloud-computing-dictionary/what-is-java-spring-boot/#:~:text=Java%20Spring%20Boot%20is%20an,computing%20platforms%20for%20app%20development."
              className="colorful-link"
            >
              What is a spring boot developement?
            </a>
          </td>
        </tr>
        <tr>
          <td>
            <a
              href="https://www.ibm.com/topics/java-spring-boot#:~:text=Spring%20Boot%20helps%20developers%20create,app%20during%20the%20initialization%20process."
              className="colorful-link"
            >
              What does spring boot developer do?
            </a>
          </td>
        </tr>
        <tr>
          <td>
            <a
              href="https://www.ambitionbox.com/profile/java-spring-boot-developer-salary"
              className="colorful-link"
            >
              Average spring boot developers salary
            </a>
          </td>
        </tr>
       
        <tr>
          <td>
            <a
              href="https://www.naukri.com/spring-boot-jobs"
              className="colorful-link"
            >
              spring boot developer jobs
            </a>
          </td>
        </tr>
        <tr>
          <td>
            <a
              href="https://www.sayonetech.com/blog/trends-in-java-spring-boot-development/"
              className="colorful-link"
            >
              Trends in java spring boot developement
            </a>
          </td>
        </tr>
        <tr>
          <td>
            <a
              href="https://www.hireitpeople.com/resume-database/64-java-developers-architects-resumes/157133-java-spring-boot-developer-resume-austin-tx"
              className="colorful-link"
            >
              How to create a resume as a spring boot developer
            </a>
          </td>
        </tr>

      </tbody>
    </table>
    </center>
		</div>
	);
};

export default springboot;

