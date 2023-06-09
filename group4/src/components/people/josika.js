import React from 'react';
import './people.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
// import { faLinkedin, faInstagram,  faGithub} from '@fortawesome/free-brands-svg-icons';
import Josik from './photos/Josik.jpeg'

function Josika() {
  const handleBack = () => {
    window.history.back();
  };

  return (
    <div className="courses-container"
      style={{
        backgroundColor: 'black',
        color: 'white'
      }}
    >
      <button className="back-button" color='black' onClick={handleBack}>{"<"}</button>
      <div className="image-container">
        <img className="profile-image" src={Josik} alt="" />
      </div>
      <h1>Josika</h1>
      <div className="quote-box">
        <p>"Your quote goes here"</p>
      </div>
      <p>content goes here</p>
      <div className="social-icons">
        <a href="https://www.linkedin.com/in/josika-p-726245215?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BxdL1AyCSQ4y9FXzz5QoIWw%3D%3D" target="_blank" rel="noopener noreferrer">
          {/* <FontAwesomeIcon icon={faLinkedin} /> */}
        </a>
        <a href="https://instagram.com/its_josika?igshid=ZDdkNTZiNTM=" target="_blank" rel="noopener noreferrer">
          {/* <FontAwesomeIcon icon={faInstagram} /> */}
        </a>
        <a href="mailto:mailstojosika@gmail.com" target="_blank" rel="noopener noreferrer">
          {/* <FontAwesomeIcon icon={faEnvelope} /> */}
        </a>
        <a href="https://github.com/josikaprabakaran" target="_blank" rel="noopener noreferrer">
          {/* <FontAwesomeIcon icon={faGithub} /> */}
        </a>

      </div>
    </div>
  );
};

export default Josika;