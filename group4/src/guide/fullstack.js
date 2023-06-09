import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

const fullstack = () => {

	// Function will execute on click of button
	const onButtonClick = () => {
		// using Java Script method to get PDF file
		fetch('full-stack.pdf').then(response => {
			response.blob().then(blob => {
				// Creating new object of PDF file
				const fileURL = window.URL.createObjectURL(blob);
				// Setting various property values
				let alink = document.createElement('a');
				alink.href = fileURL;
				alink.download = 'full-stack.pdf';
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
        
				<h1 className="text-white mt-5">FULL STACK DEVELOPER</h1>
				<h3 className="text-white mt-5">Click on below button to download PDF file of fullstack developer flowchart</h3>
				<button className="buttonguide mt-5" onClick={onButtonClick}>
					Download RoadMap for fullstack Developer
				</button>
        <br></br>
        <br></br>
        <br></br>
			
      <table className="colorful-table">
      <tbody>
        <tr>
          <td>
            <a
              href="https://www.mongodb.com/languages/full-stack-development#:~:text=What%20is%20meant%20by%20full,the%20business%20logic%20is%20applied."
              className="colorful-link"
            >
              What is a fullstack developement?
            </a>
          </td>
        </tr>
        <tr>
          <td>
            <a
              href="https://www.knowledgehut.com/blog/web-development/what-does-a-full-stack-developer-do"
              className="colorful-link"
            >
              What does fullstack developer do?
            </a>
          </td>
        </tr>
        <tr>
          <td>
            <a
              href="https://www.ambitionbox.com/profile/full-stack-developer-salary"
              className="colorful-link"
            >
              Average fullstack developers salary
            </a>
          </td>
        </tr>
       
        <tr>
          <td>
            <a
              href="https://www.naukri.com/full-stack-developer-jobs"
              className="colorful-link"
            >
              fullstack developer jobs
            </a>
          </td>
        </tr>
        <tr>
          <td>
            <a
              href="https://www.upgrad.com/blog/full-stack-developer-languages/"
              className="colorful-link"
            >
              Popular fullstack developement languages
            </a>
          </td>
        </tr>
        <tr>
          <td>
            <a
              href="https://zety.com/blog/full-stack-developer-resume-example?utm_source=google&utm_medium=sem&utm_campaign=13033814815&utm_term=full%20stack%20developer%20cv%20example&network=g&device=c&adposition=&adgroupid=117216862450&placement=&utm_source=google&utm_medium=sem&utm_campaign=13033814815&utm_term=full%20stack%20developer%20cv%20example&network=g&device=c&adposition=&adgroupid=117216862450&placement=&gad=1&gclid=CjwKCAjwvdajBhBEEiwAeMh1U33YAko3g_5DcY7MExzDR0prGhXmUZ3XVhFD3d5O3ewaT1nt4Zd1oBoC2wQQAvD_BwE"
              className="colorful-link"
            >
              How to create a resume as a fullstack developer
            </a>
          </td>
        </tr>

      </tbody>
    </table>
    </center>
		</div>
	);
};

export default fullstack;