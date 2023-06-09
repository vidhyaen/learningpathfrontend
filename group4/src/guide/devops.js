import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

const devops = () => {

	// Function will execute on click of button
	const onButtonClick = () => {
		// using Java Script method to get PDF file
		fetch('devops.pdf').then(response => {
			response.blob().then(blob => {
				// Creating new object of PDF file
				const fileURL = window.URL.createObjectURL(blob);
				// Setting various property values
				let alink = document.createElement('a');
				alink.href = fileURL;
				alink.download = 'devops.pdf';
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
				<h1 className="text-white mt-5" >DEVOPS DEVELOPER</h1>
				<h3 className="text-white mt-5">Click on below button to download PDF file of devops developer flowchart</h3>
				<button className="buttonguide mt-5" onClick={onButtonClick}>
					Download RoadMap for devops Developer
				</button>
        <br></br>
        <br></br>
        <br></br>
			
      <table className="colorful-table">
      <tbody>
        <tr>
          <td>
            <a
              href="https://aws.amazon.com/devops/what-is-devops/"
              className="colorful-link"
            >
              What is a devops developement?
            </a>
          </td>
        </tr>
        <tr>
          <td>
            <a
              href="https://www.upgrad.com/blog/what-does-a-devops-developer-do/"
              className="colorful-link"
            >
              What does devops developer do?
            </a>
          </td>
        </tr>
        <tr>
          <td>
            <a
              href="https://www.ambitionbox.com/profile/devops-engineer-salary#:~:text=Devops%20Engineer%20salary%20in%20India%20ranges%20between%20%E2%82%B9%203.7%20Lakhs,salary%20of%20%E2%82%B9%206.3%20Lakhs."
              className="colorful-link"
            >
              Average devops developers salary
            </a>
          </td>
        </tr>
       
        <tr>
          <td>
            <a
              href="https://www.naukri.com/devops-developer-jobs"
              className="colorful-link"
            >
              Devops developer jobs
            </a>
          </td>
        </tr>
        <tr>
          <td>
            <a
              href="https://www.turing.com/blog/programming-and-scripting-languages-devops-engineers-should-learn/"
              className="colorful-link"
            >
              Popular devops developement languages
            </a>
          </td>
        </tr>
        <tr>
          <td>
            <a
              href="https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwjg2abj0Z3_AhVFmWYCHQL-Dn4YABAAGgJzbQ&ohost=www.google.com&cid=CAESauD2jFEYz666-Bb7Equ7hORMxz7du04vQkOcs8C5j4aWXj3dpNXV8LLoHvbhX680nACG8b5sHPP7tXwcvrie6CnC0soLD3p4X0M6L7nbUy0YUjzcS5eqqR4xirljgHVwHLwMexUVxdTwDxQ&sig=AOD64_3PhZXrgf21Hi2sm7yRtWRX9MrFAQ&q&adurl&ved=2ahUKEwiIoqDj0Z3_AhWaZWwGHZlODMUQ0Qx6BAgHEAE"
              className="colorful-link"
            >
              How to create a resume as a devops developer
            </a>
          </td>
        </tr>

      </tbody>
    </table>
    </center>
		</div>
	);
};

export default devops;

