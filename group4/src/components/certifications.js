import React from 'react';
import './page.css';
import './certification.css';
// import traillogo from "../image/trailheadlogo.png";

const items = [
  { name: 'Trails', link: 'https://trailhead.salesforce.com/trails' },
  { name: 'Trailmixes', link: 'https://trailhead.salesforce.com/my-trailmixes' },
  { name: 'Trailhead Academy', link: 'https://trailheadacademy.salesforce.com/' },

]
const items2 = [
  { name: 'Modules', link: 'https://trailhead.salesforce.com/modules' },
  { name: 'Projects', link: 'https://trailhead.salesforce.com/projects' },
  { name: 'Trailhead Quotes', link: 'https://trailhead.salesforce.com/quests' },

]
const items3 = [
  { name: 'Career Paths', link: 'https://trailhead.salesforce.com/career-path' },
  { name: 'Hire Me Button', link: 'https://trailhead.salesforce.com/help?article=Hire-Me-for-Job-Seekers' },
  { name: 'Salesforce Fundamentals', link: 'https://trailhead.salesforce.com/trailblazerconnect/fundamentals' },
  { name: 'Trailblazer Blog', link: 'https://www.salesforce.com/blog/category/trailblazer/' },
]
const items4 = [
  { name: 'Certifications', link: 'https://trailhead.salesforce.com/credentials/administratoroverview' },
  { name: 'Superbadges and Supersets', link: 'https://trailhead.salesforce.com/superbadges' },
]
const items5 = [
  { name: 'Maintain Certifications', link: 'https://trailhead.salesforce.com/content/learn/trails/maintain-your-salesforce-certifications' },
  { name: 'Verify Certifications', link: 'https://trailhead.salesforce.com/credentials/verification' },
  { name: 'Take Free Certification Prep', link: 'https://trailhead.salesforce.com/credentials/cert-days' },
  
]
const fontSize = 18; 


const containerStyle = {
  fontSize: `${fontSize}px`, 
  fontWeight: 'bold', 
  color: 'white',
  padding: '20px', 
  
   }
  const containerStyle2 = {
    display: "flex", 
    flexDirection: "row",
    
  };

  const containerStyle3 = {
  fontSize: `${fontSize}px`, 
  fontWeight: 'bold', 
  color: 'white',
  padding: '20px', 
  justifyContent: "center",
  alignItems: "center",
  display: "flex",
    flexDirection: "column",
     };



function Certifications() {
 

  return (
    <div className="courses-container"
    style={{
        backgroundColor: 'black',
        color: 'white'
    }}
    >
    
      <h1 className='text-center mt-5'>GUIDES</h1>
      <div  style={containerStyle2}>
      <div  style={containerStyle}>
        <br></br>
      <p >Learn in demand skills</p>
    <ul>
      {items.map((item, index) => (
        <li key={index}>
          <a href={item.link}>{item.name}</a>
        </li>
      ))}
      </ul></div>
      &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;
      &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; 
 <div  style={containerStyle3}>
  
      <p >Earn resume-worthy credentials</p>
    <ul>
      {items4.map((item, index) => (
        <li key={index}>
          <a href={item.link}>{item.name}</a>
        </li>
      ))}
      </ul></div>
      
      
      
      </div>
      



      <div  style={containerStyle2}>  
    <div  style={containerStyle}>
    <p>Choose your own learning adventure</p>
    <ul>
      {items2.map((item, index) => (
        <li key={index}>
          <a href={item.link}>{item.name}</a>
        </li>
      ))}
     </ul></div>
     <div  style={containerStyle3}>
      <p >Discover Credential Resources</p>
    <ul>
      {items5.map((item, index) => (
        <li key={index}>
          <a href={item.link}>{item.name}</a>
        </li>
      ))}
      </ul></div></div>
    
      
    <div  style={containerStyle}>
    <p>Grow your career</p>
    <ul>
      {items3.map((item, index) => (
        <li key={index}>
          <a href={item.link}>{item.name}</a>
        </li>
      ))}
    </ul></div> 
    
    
   </div>
     
  
  );
};

export default Certifications;

