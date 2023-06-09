import React from 'react';
import './people.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
// import { faLinkedin, faInstagram,  faGithub} from '@fortawesome/free-brands-svg-icons';
import Vidhy from './photos/Vidhy.jpeg'
function Vidhya() {
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
        <img className="profile-image" src={Vidhy} alt="" />
      </div>
      <h1>Vidhya</h1>
      <div className="quote-box">
    <p>
    "I am good at front end developer and allows me to explore my knowledge and skills
      </p>  
      <p>that I have and to learn new technology that gives me chance to contribute to its growth</p>
      <p>I am a person who is positive about every aspect of life.
        
        There are many things I like to do, to see, and to experience. 
        </p><p>I like to read, I like to write; I like to think, I like to dream; I like to talk, I like to listen."
        </p>
        
      </div>
      <p></p>
      <div className="sidenav">
        <h1>
        <a href="https://in.linkedin.com/in/vidhya-e-n-2585131b9" target="_blank" rel="noopener noreferrer">
          {/* <FontAwesomeIcon icon={faLinkedin} /> */} LinkedIn
        </a>

        </h1>
        <h1>
        <a href="https://instagram.com/vidhya_en?igshid=ZDdkNTZiNTM=" target="_blank" rel="noopener noreferrer">
          {/* <FontAwesomeIcon icon={faInstagram} /> */} Instagram
        </a>

        </h1>
        <h1>
        <a href="mailto:envidhya99@gmail.com" target="_blank" rel="noopener noreferrer">
          {/* <FontAwesomeIcon icon={faEnvelope} /> */} Mail
        </a>
        </h1>
        <h1>
        <a href="https://github.com/vidhyaen" target="_blank" rel="noopener noreferrer">
          {/* <FontAwesomeIcon icon={faGithub} /> */} Github
        </a>

        </h1>

      </div>
    </div>
  );
};

export default Vidhya;