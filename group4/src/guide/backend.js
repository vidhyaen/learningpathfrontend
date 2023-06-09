import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

const backend = () => {

	// Function will execute on click of button
	const onButtonClick = () => {
		// using Java Script method to get PDF file
		fetch('backend.pdf').then(response => {
			response.blob().then(blob => {
				// Creating new object of PDF file
				const fileURL = window.URL.createObjectURL(blob);
				// Setting various property values
				let alink = document.createElement('a');
				alink.href = fileURL;
				alink.download = 'backend.pdf';
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
				<h1 className="text-white mt-5">BACK END DEVELOPER</h1>
				<h3 className="text-white mt-5">Click on below button to download PDF file of backend developer flowchart</h3>
				<button className="buttonguide mt-5" onClick={onButtonClick}>
					Download RoadMap for backend Developer
				</button>
        <br></br>
        <br></br>
        <br></br>
			
      <table className="colorful-table">
      <tbody>
        <tr>
          <td>
            <a
              href="https://www.simplilearn.com/tutorials/programming-tutorial/what-is-backend-development"
              className="colorful-link"
            >
              What is a backend developement?
            </a>
          </td>
        </tr>
        <tr>
          <td>
            <a
              href="https://www.coursera.org/articles/back-end-developer#:~:text=Back%2Dend%20developers%20are%20the,functions%20that%20you%20cannot%20see."
              className="colorful-link"
            >
              What does backend developer do?
            </a>
          </td>
        </tr>
        <tr>
          <td>
            <a
              href="https://www.glassdoor.co.in/Salaries/backend-developer-salary-SRCH_KO0,17.htm#:~:text=How%20much%20does%20a%20Backend,Glassdoor%20by%20Backend%20Developer%20employees."
              className="colorful-link"
            >
              Average backend developers salary
            </a>
          </td>
        </tr>
       
        <tr>
          <td>
            <a
              href="https://www.naukri.com/back-end-developer-jobs"
              className="colorful-link"
            >
              Backend developer jobs
            </a>
          </td>
        </tr>
        <tr>
          <td>
            <a
              href="https://www.ishir.com/blog/75047/your-guide-to-the-top-15-backend-languages-for-2023.htm"
              className="colorful-link"
            >
              Popular backend developement languages
            </a>
          </td>
        </tr>
        <tr>
          <td>
            <a
              href="https://www.kickresume.com/en/help-center/back-end-developer-resume-samples/"
              className="colorful-link"
            >
              How to create a resume as a backend developer
            </a>
          </td>
        </tr>

      </tbody>
    </table>
    </center>
		</div>
	);
};

export default backend;

