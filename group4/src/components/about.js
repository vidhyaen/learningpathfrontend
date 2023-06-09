import React from 'react'
import './about.css';

import Logo from '../image/logo.jpg';



function About() {
  const handleBack = () => {
    window.history.back();
  };
 

  return (
    <div
      className="courses-container"
      style={{
        backgroundColor: 'black',
        color: 'white',
        height: '370vh'
      }}
    >
      <button className="back-button" color="black" onClick={handleBack}>
        {"<"}
      </button>
      <div className="image-container">
        <img className="profile-image" src={Logo} alt="" />
      </div>
      <h1>About G4</h1>
      
      <p className="center-align">
        G4 is the ultimate career companion that helps individuals navigate their unique career paths with
        ease. Our platform is designed to provide you with the guidance, resources, and tools you need to achieve your
        professional aspirations.
      </p>
      <p className="center-align">
        With G4, you have access to a range of features that empower you to make informed decisions about your
        career. Our personalized career assessments analyze your skills, interests, and values to suggest suitable
        career paths and opportunities.
      </p>
      <p className="center-align">
        Discover industry insights, trends, and expert advice through our curated content library. Stay up to date with
        the latest developments in your field and gain a competitive edge in the job market.
      </p>
      <p className="center-align">
        We take your privacy seriously and adhere to strict security measures to protect your personal information. You
        can trust G4 as a safe and reliable platform for managing your career journey.
      </p>
      <p className="center-align">
        Join our growing community of ambitious professionals who are on the path to success. Engage in discussions,
        share experiences, and connect with mentors who can provide valuable guidance along the way.
      </p>
      <section id="aim">
      <p className="center-align">
        If you have any questions or need assistance, our dedicated support team is here to help. Contact us at{' '}
        <a href="mailto:.com">G4@gmail.com</a>, and we'll respond promptly to address
        your needs.
      </p>
      
      <p className="center-align">Start exploring G4 today and embark on a fulfilling and rewarding career journey!</p>

      <h1 className="center-align">Aim</h1>

      <p className="center-align">
        At G4, we have set the following aims to guide our platform and support our users:
      </p>

      <ol className="center-align">
        <li>
          <p>   Empower Individuals: We aim to empower individuals by providing them with the necessary tools, resources, and guidance to take control of their career paths.</p>
        </li>
        <li>
          <p>Promote Career Exploration: We strive to encourage career exploration and help individuals discover diverse opportunities aligned with their interests, skills, and values.</p>
        </li>
        <li>
          <p>Facilitate Informed Decisions: Our goal is to enable users to make informed career decisions by offering personalized assessments, industry insights, and expert advice.</p>
        </li>
        <li>
          <p>Foster Professional Development: We aim to support ongoing professional development by providing access to curated content, educational resources, and networking opportunities.</p>
        </li>
        <li>
          <p>Ensure User Satisfaction: We are committed to delivering a user-centric experience, continuously improving our platform, and prioritizing the needs and satisfaction of our users.</p>
        </li>
      </ol>
      </section>
      <section id="mission">
      <p className="center-align">
        Join our growing community of ambitious professionals who are on the path to success. Engage in discussions,
        share experiences, and connect with mentors who can provide valuable guidance along the way.
      </p>
      <p className="center-align">
        By aligning our efforts with these aims, we strive to make a positive impact on the careers and lives of our users.
      </p>
      <h1 className="center-align">Mission</h1>
      <p className="center-align">
        At G4, our mission is to empower individuals to achieve their career goals and aspirations. 
        We believe that everyone deserves a fulfilling and rewarding career, and we are dedicated to 
        providing the tools and resources necessary to make it happen.
      </p>
      <p className="center-align">
        We take a personalized approach to career development. Our platform utilizes advanced algorithms and 
        assessments to analyze your unique skills, interests, and values. By understanding your 
        individual strengths and preferences, we can provide tailored recommendations and guidance 
        for your career path.
      </p>
      </section>
      <section id="references">
      <p className="center-align">
        Behind G4 is a team of passionate career experts, technologists, and industry professionals. 
        We bring together diverse perspectives and expertise to create a platform that meets the needs of 
        professionals in various fields. We are committed to continuous improvement and ensuring that our 
        users receive the best support and guidance throughout their career journey.
      </p>


    
          <h1 className="center-align">References</h1>

          <p className="center-align">
            Here are a few testimonials from our satisfied users:
          </p>

          <blockquote>
            <p className="center-align">
              "G4 has been instrumental in helping me navigate my career path. The personalized assessments 
              and recommendations provided me with valuable insights and guidance. 
              I highly recommend G4 to anyone looking to make informed career decisions." - Priyadharshini - (PA)Cognizant
            </p>
          </blockquote>

          <blockquote>
            <p className="center-align">
              "The curated content library on G4 is a goldmine of industry insights and advice. 
              It keeps me up to date with the latest trends and developments, giving me a competitive
               edge in the job market. Thank you, G4!" - Dinesh - (PA)Cognizant
            </p>
          </blockquote>
          <blockquote>
            <p className="center-align">
            "G4 helped me discover my true passion and guided me towards a career that aligns 
            perfectly with my interests and skills. I am grateful for this platform!" - Nachammai - (PA)Cognizant
            </p>
          </blockquote>
          <blockquote>
            <p className="center-align">
            "With G4, I gained valuable industry insights and found resources 
            that boosted my professional development. It's a game-changer!" - Shalini - (PA)Cognizant
            </p>
          </blockquote>
          <blockquote>
            <p className="center-align">
            "G4's personalized career assessments provided me with a clear roadmap and helped me make 
            confident career decisions. It's an invaluable tool for anyone on their career journey." - Ravi Kumar - (PA)Cognizant
            </p>
          </blockquote>

          <p className="center-align">
            These testimonials reflect the positive impact G4 has had on the careers of our users. We are grateful for their support and trust in our platform.
          </p>
          <p className="center-align">
            If you would like to share your experience with G4 or have any questions, we would love to hear from you. Reach out to our dedicated support team at <a href="mailto:support@G4.com">support@G4.com</a> and let us assist you.
          </p>




      <p className="center-align">
        Join Us
      
      <div className="social-icons">
        <a href="https://www.linkedin.com/in/your-linkedin-url" target="_blank" rel="noopener noreferrer">
          
        </a>
        <a href="https://www.instagram.com/your-instagram-url" target="_blank" rel="noopener noreferrer">
           
        </a>
        <a href="mailto:your-email-address" target="_blank" rel="noopener noreferrer">
         
        </a>
        <a href="https://github.com/your-github-username" target="_blank" rel="noopener noreferrer">
         
        </a>
      </div>
      </p>
      <p className="center-align">
        We invite you to join our community of ambitious professionals who are committed to unlocking their full potential. Whether you are a recent graduate, a mid-career professional, or someone looking to make a career transition, G4 is here to support you every step of the way. Start exploring our platform today and embark on a transformative career journey!
      </p>
      </section>
      

      <p className="center-align">
        Copyright & Terms and Conditions
      </p>

      <p>
        &copy; {new Date().getFullYear()} G4. All rights reserved.
      </p>

      <p>
        By accessing and using G4, you agree to comply with our Terms and Conditions. Please read our <a href="https://policies.google.com/terms?hl=en">Terms and Conditions</a> carefully before using our platform.
      </p>
      
    </div>
  );
}

export default About;