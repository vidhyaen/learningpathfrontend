import React from 'react';
import './people.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
// import { faLinkedin, faInstagram,  faGithub} from '@fortawesome/free-brands-svg-icons';
import Thoufee from './photos/Thoufee.jpeg'

function Thoufeek() {
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
        <img className="profile-image" src={Thoufee} alt="" />
      </div>
      <h1>Thoufeek</h1>
      <div className="quote-box">
        <p>"Your quote goes here"</p>
      </div>
      <p>content goes here</p>
      <div className="social-icons">
        <a href="https://www.linkedin.com/in/thoufeek-sa" target="_blank" rel="noopener noreferrer">
          {/* <FontAwesomeIcon icon={faLinkedin} /> */}
        </a>
        <a href="https://instagram.com/_toffeeii_?igshid=NTc4MTIwNjQ2YQ==" target="_blank" rel="noopener noreferrer">
          {/* <FontAwesomeIcon icon={faInstagram} /> */}
        </a>
        <a href="mailto:thoufeekmohammed8@gmail.com" target="_blank" rel="noopener noreferrer">
          {/* <FontAwesomeIcon icon={faEnvelope} /> */}
        </a>
        <a href="https://github.com/toffeeii" target="_blank" rel="noopener noreferrer">
          {/* <FontAwesomeIcon icon={faGithub} /> */}
        </a>

      </div>
    </div>
  );
};

export default Thoufeek;