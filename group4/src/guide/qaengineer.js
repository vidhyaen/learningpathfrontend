import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

const qaengineer = () => {

	// Function will execute on click of button
	const onButtonClick = () => {
		// using Java Script method to get PDF file
		fetch('qaengineer.pdf').then(response => {
			response.blob().then(blob => {
				// Creating new object of PDF file
				const fileURL = window.URL.createObjectURL(blob);
				// Setting various property values
				let alink = document.createElement('a');
				alink.href = fileURL;
				alink.download = 'qaengineer.pdf';
				alink.click();
			})
		})
	}
	return (
		<div className=" App-header">
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
				<h1 className="text-white mt-5">QA ENGINEER </h1>
				<h3 className="text-white mt-5">Click on below button to download PDF file of QA Engineer flowchart</h3>
				<button className="buttonguide mt-5" onClick={onButtonClick}>
					Download RoadMap for QA Engineer
				</button>
        <br></br>
        <br></br>
        <br></br>
			
      <table className="colorful-table">
      <tbody>
        <tr>
          <td>
            <a
              href="https://in.indeed.com/career-advice/finding-a-job/what-is-qa-engineer"
              className="colorful-link"
            >
              What is a QA Engineering?
            </a>
          </td>
        </tr>
        <tr>
          <td>
            <a
              href="https://u-tor.com/topic/what-does-qa-engineer-do"
              className="colorful-link"
            >
              What does QA Engineer do?
            </a>
          </td>
        </tr>
        <tr>
          <td>
            <a
              href="https://www.ambitionbox.com/profile/quality-assurance-engineer-salary"
              className="colorful-link"
            >
              Average QA Engineer salary
            </a>
          </td>
        </tr>
       
        <tr>
          <td>
            <a
              href="https://www.naukri.com/qa-engineer-jobs"
              className="colorful-link"
            >
             QA Engineer jobs
            </a>
          </td>
        </tr>
        <tr>
          <td>
            <a
              href="https://testsigma.com/qa-automation-tools"
              className="colorful-link"
            >
              QA Engineer tools
            </a>
          </td>
        </tr>
        <tr>
          <td>
            <a
              href="https://zety.com/blog/qa-resume-example?utm_source=google&utm_medium=sem&utm_campaign=13033814815&utm_term=qa%20resume&network=g&device=c&adposition=&adgroupid=117216939490&placement=&utm_source=google&utm_medium=sem&utm_campaign=13033814815&utm_term=qa%20resume&network=g&device=c&adposition=&adgroupid=117216939490&placement=&gad=1&gclid=CjwKCAjwvdajBhBEEiwAeMh1U7SkNoXZcwaw8DBD9Y2do1pc4UJekCuLBAP8tjjlURCjp58sHbEBjxoCwKUQAvD_BwE"
              className="colorful-link"
            >
              How to create a resume as a QA Engineer
            </a>
          </td>
        </tr>

      </tbody>
    </table>
    </center>
		</div>
	);
};

export default qaengineer;

