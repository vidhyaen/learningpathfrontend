
import React, { useState } from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";

const FooterHeading = styled.button`
background-color: black;
color: white;
border: white;
cursor: pointer;
font-size: 1.0rem;
font-weight: bold;
text-align: center;
margin-right: 10px;
margin-left: 10px;
border-radius: 50%;
width: 50px;
height: 50px;


&:hover {
  background-color: white;
  color: black;
  border: black;
  transition: all 0.3s ease;
  transform: translateY(-0%) scale(1.1);
}
`;



const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color:  #390642;
  color: white;
`;



const FooterBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
  max-width: 700px;
  width: 100%;
  padding: 20px;
  margin-bottom: 20px;
  margin-top: 20px;
  background-color: rgba(255, 255, 255, 0.2);
  text-align: center;
`;

const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  max-width: 800px;
  border: none;
`;

const TableRow = styled.tr`
  padding: 3px;
`;

const TableCell = styled.td`
  padding: 5px;
  text-align: center;
  border-right: 1px solid white;
  border: none;

  &:last-child {
    border-right: none;
  }
`;

const TableHeader = styled.th`
  padding: 10px;
  text-align: center;
  border-right: 1px solid white;
  font-weight: bold;
  text-transform: uppercase;
  border: none;

  &:last-child {
    border-right: -20px;
  }
`;

const FooterLink = styled.a`
  color: white;
  text-decoration: none;

  &:hover {
    color: rgb(188, 151, 214);
    transition: 200ms ease-in;
  }
`;


const Footer = () => {
    const [quote, setQuote] = useState("");
  
    const handleClick = () => {
      const quotes = [
        "The best way to predict the future is to create it",
        "Innovation distinguishes between a leader and a follower",
        "You can never cross the ocean until you have the courage to lose sight of the shore",
        "Do not wait for opportunities, create them",
        "Success is not final, failure is not fatal: it is the courage to continue that counts",
        "Believe you can and you're halfway there",
        "Don't watch the clock; do what it does. Keep going",
        "The only way to do great work is to love what you do",
        "The best revenge is massive success",
        "It does not matter how slowly you go as long as you do not stop",
        "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
        "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough. - Oprah Winfre",
        "I can't change the direction of the wind, but I can adjust my sails to always reach my destination. - Jimmy Dean",
        "If you want to lift yourself up, lift up someone else. - Booker T. Washington",
        "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
        "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
        "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle. - Christian D. Larson",
        "The only way to do great work is to love what you do. - Steve Jobs",
        "Don't let yesterday take up too much of today. - Will Rogers",
        "You can have everything in life you want, if you will just help other people get what they want. - Zig Ziglar"
      ];
  
      const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
      setQuote(randomQuote);
    };
    
  return (
    <FooterContainer>
      <div>
        <FooterHeading onClick={handleClick}>{"< >"}</FooterHeading>
        
      </div>
      <FooterBox>
        <p>" {quote} "</p>
      </FooterBox>
        
      <Table>
        <thead>
          <TableRow>
          
            <TableHeader>About</TableHeader>
            <TableHeader>Other Projects</TableHeader>
            <TableHeader>Contact</TableHeader>
            
            <TableHeader>Social</TableHeader>
            
          </TableRow>
        </thead>
        <tbody>
        <TableRow>
          
          <TableCell>
          <FooterLink href="/about#aim">Aim</FooterLink>
          </TableCell>
          
          <TableCell>
            <FooterLink href="#">Resume Builder</FooterLink>
          </TableCell>
          <TableCell>
            <FooterLink href="/vidhya">Vidhya</FooterLink>
          </TableCell>
          <TableCell>
            <FooterLink href="https://github.com/vidhyaen">
            {/* <FontAwesomeIcon icon={faGithub} />*/}
            GitHub 
            </FooterLink>
          </TableCell>
        </TableRow>
        <TableRow>
        
          <TableCell>
            <FooterLink href="/about#mission">Mission</FooterLink>
          </TableCell>
          
          <TableCell>
          <FooterLink href="#">Resume Parser</FooterLink>
        </TableCell>
        <TableCell>
            <FooterLink href="/impana">Impana</FooterLink>
          </TableCell>
          <TableCell>
            <FooterLink href="https://instagram.com/vidhya_en?igshid=ZDdkNTZiNTM=">
            {/* <FontAwesomeIcon icon={faSquareInstagram} /> */}
            Instagram 
            </FooterLink> 
          </TableCell>
        </TableRow>
        <TableRow>
        
          <TableCell>
            <FooterLink href="/about#references">References</FooterLink>
          </TableCell>
          
          <TableCell>
            <FooterLink href="#">Contribution Tracker</FooterLink>
          </TableCell>
          <TableCell>
            <FooterLink href="/josika">Josika</FooterLink>
          </TableCell>
          <TableCell>
            <FooterLink href="https://www.youtube.com">
            {/* <FontAwesomeIcon icon={faYoutube} /> */}
            Youtube 
            </FooterLink>
          </TableCell>
        </TableRow>
        <TableRow>
        <TableCell></TableCell>
         
          
          <TableCell></TableCell>
          <TableCell>
            <FooterLink href="/suhas">Suhas</FooterLink>
          </TableCell>
          <TableCell>
          <FooterLink href="https://twitter.com/VidhyaEn">
          {/* <FontAwesomeIcon icon={faTwitter} />  */}
          Twitter
          </FooterLink>
          </TableCell>
        </TableRow>
        <TableRow>
        <TableCell></TableCell>
          
          
          <TableCell>          </TableCell>
          <TableCell>
            <FooterLink href="/thoufeek">Thoufeek</FooterLink>
          </TableCell>
          <TableCell>
          <FooterLink href="https://in.linkedin.com/in/vidhya-e-n-2585131b9">
          {/* <FontAwesomeIcon icon={faLinkedin} />  */}
          LinkedIn
          </FooterLink>
          </TableCell>
        </TableRow>
        </tbody>
      </Table>
    </FooterContainer>
  );
};

export default Footer;

 