import React, { useState, useEffect } from 'react';
import './header.css';
import { Link } from 'react-router-dom';
import Logo from '../image/logo.jpg'
//import {  useLocation } from 'react-router-dom';

function Header() {
  const [isHidden] = useState(false);
  //const location = useLocation();

  const handleClick = () => {
    // setIsHidden(true);
  };

  useEffect(() => {
    const handlePopstate = () => {
      // setIsHidden(true);
    };
    window.addEventListener('popstate', handlePopstate);
    return () => window.removeEventListener('popstate', handlePopstate);
  }, []);

  return (
    <header className="header"
      style={{
        backgroundColor: '#390642',
        borderRadius: '0px',
        color: 'white',
        padding: '20px',
        height: '90px',
        display: 'flex',
        alignItems: 'center',
        opacity: isHidden ? 0 : 1,
        transition: 'opacity 0.5s ease-out',
      }}
    >
      <Link to="/about" className="nav-link" onClick={handleClick} style={{ margin: '0 auto', color: 'white', textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
        <img src= {Logo} alt="" style={{ width: '40px', height: '40px', marginRight: '5px' }} />
        <span style={{ fontWeight: 'bold' }}>G4 Applicitation</span>
      </Link>
      <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginLeft: 'auto', marginRight: 'auto' }}>
        <Link to="/" className="nav-link" onClick={handleClick}>Home</Link>
        <Link to="/course" className="nav-link" onClick={handleClick}>Courses</Link>
        <Link to="/certifications" className="nav-link" onClick={handleClick}>Guides</Link>
         {/*<Link to="/roadmaps" className="nav-link" onClick={handleClick}>Roadmaps</Link>  */}
        <Link to="/videos" className="nav-link" onClick={handleClick}>Videos</Link>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginLeft: 'auto', marginRight: 'auto' }}>
        <Link to="/login" className="btn-login" onClick={handleClick}>  Login  </Link>
        <Link to="/signup" className="btn-signup" onClick={handleClick}>Signup</Link>
      </div>
    </header>
  );
}

export default Header;





/*
import React, { useState } from 'react';
import './header.css';
import { Link } from 'react-router-dom';

function Header() {
  const [isHidden, setIsHidden] = useState(false);

  const handleClick = () => {
    setIsHidden(true);
  };

  return (
    <header
      style={{
        backgroundColor: 'indigo',
        borderRadius: '0px',
        padding: '20px',
        height: '90px',
        display: 'flex',
        alignItems: 'center',
        opacity: isHidden ? 0 : 1,
        transition: 'opacity 0.5s ease-out',
      }}
    >
      <Link to="/about" className="nav-link" onClick={handleClick} style={{ margin: '0 auto', color: 'white', textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
        <img src="/logo.jpg" alt="" style={{ width: '40px', height: '40px', marginRight: '5px' }} />
        <span style={{ fontWeight: 'bold' }}>G4 Applicitation</span>
      </Link>
      <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginLeft: 'auto', marginRight: 'auto' }}>
        <Link to="/courses" className="nav-link" onClick={handleClick}>Courses</Link>
        <Link to="/certifications" className="nav-link" onClick={handleClick}>Certifications</Link>
        <Link to="/roadmaps" className="nav-link" onClick={handleClick}>Roadmaps</Link>
        <Link to="/videos" className="nav-link" onClick={handleClick}>Videos</Link>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginLeft: 'auto', marginRight: 'auto' }}>
        <Link to="/login" className="btn-login" onClick={handleClick}>  Login  </Link>
        <Link to="/signup" className="btn-signup" onClick={handleClick}>Signup</Link>
      </div>
    </header>
  );
}

export default Header;


*/












/*import React, { useState } from 'react';
import './header.css';
import { Link } from 'react-router-dom';

function Header() {
    const [isHidden, setIsHidden] = useState(false);
  
    const handleClick = () => {
      setIsHidden(true);
    };
  
    return (
      <header
        className={isHidden ? "hidden" : ""}
        style={{
          backgroundColor: 'indigo',
          borderRadius: '0px',
          padding: '20px',
          height: '90px',
          display: 'flex',
          alignItems: 'center',
          transition: 'opacity 0.5s ease-out',
        }}
      >
        <Link to="/" className="nav-link" style={{ margin: '0 auto', color: 'white', textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
          <img src="/path/to/your/image.jpg" alt="" style={{ width: '40px', height: '40px', marginRight: '5px' }} />
          <span style={{ fontWeight: 'bold' }}>G4 Things</span>
        </Link>
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginLeft: 'auto', marginRight: 'auto' }}>
          <Link to="/courses" className="nav-link" onClick={handleClick}>Courses</Link>
          <Link to="/certifications" className="nav-link" onClick={handleClick}>Certifications</Link>
          <Link to="/roadmaps" className="nav-link" onClick={handleClick}>Roadmaps</Link>
          <Link to="/videos" className="nav-link" onClick={handleClick}>Videos</Link>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginLeft: 'auto', marginRight: 'auto' }}>
          <Link to="/login" className="btn-login" onClick={handleClick}>Login</Link>
          <Link to="/signup" className="btn-signup" onClick={handleClick}>Signup</Link>
        </div>
      </header>
    );
  }
  
  export default Header;

*/


/*
import React, { useState } from 'react';
import './header.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Certifications from './certifications';
import Courses from './courses';
import Roadmaps from './roadmaps';
import Videos from './videos';
import Login from './login';
import Signup from './signup';
import Home from './home';

function Header() {
  const [isHidden, setIsHidden] = useState(false);

  const handleClick = () => {
    setIsHidden(true);
  };

  return (
    <BrowserRouter>
      <div>
        <header
          style={{
            backgroundColor: 'indigo',
            borderRadius: '0px',
            padding: '20px',
            height: '90px',
            display: 'flex',
            alignItems: 'center',
            opacity: isHidden ? 0 : 1,
            transition: 'opacity 0.5s ease-out',
          }}
        >
          <Link to="/home" className="nav-link" style={{ margin: '0 auto', color: 'white', textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
            <img src="/path/to/your/image.jpg" alt="" style={{ width: '40px', height: '40px', marginRight: '5px' }} />
            <span style={{ fontWeight: 'bold' }}>G4 Things</span>
          </Link>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginLeft: 'auto', marginRight: 'auto' }}>
            <Link to="/courses" className="nav-link" onClick={handleClick}>Courses</Link>
            <Link to="/certifications" className="nav-link" onClick={handleClick}>Certifications</Link>
            <Link to="/roadmaps" className="nav-link" onClick={handleClick}>Roadmaps</Link>
            <Link to="/videos" className="nav-link" onClick={handleClick}>Videos</Link>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginLeft: 'auto', marginRight: 'auto' }}>
            <Link to="/login" className="btn-login" onClick={handleClick}>Login</Link>
            <Link to="/signup" className="btn-signup" onClick={handleClick}>Signup</Link>
          </div>
        </header>
      </div>
      <Routes>
        <Route exact path="/courses" element={<Courses />} />
        <Route exact path="/certifications" element={<Certifications />} />
        <Route exact path="/roadmaps" element={<Roadmaps />} />
        <Route exact path="/videos" element={<Videos />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Header;

/*
import React from 'react';
import './header.css'
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Certifications from './certifications';
import Courses from './courses';
import Roadmaps from './roadmaps';
import Videos from './videos';
import Login from './login';
import Signup from './signup';
import Home from './home';

function Header() {
  return (
    <BrowserRouter>
      <div>
      <header style={{ backgroundColor: 'indigo', borderRadius: '0px', padding: '20px', height: '90px', display: 'flex', alignItems: 'center' }}>
        <a href="/home" className="nav-link" style={{ margin: '0 auto', color: 'white', textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
          <img src="/path/to/your/image.jpg" alt="" style={{ width: '40px', height: '40px', marginRight: '5px' }} />
          <span style={{ fontWeight: 'bold' }}>G4 Things</span>
        </a>
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginLeft: 'auto', marginRight: 'auto' }}>
          <a href="/courses" className="nav-link">Courses</a>
          <a href="/certifications" className="nav-link">Certifications</a>
          <a href="/roadmaps" className="nav-link">Roadmaps</a>
          <a href="/videos" className="nav-link">Videos</a>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginLeft: 'auto', marginRight: 'auto' }}>
          <a href="/login" className="btn-login">Login</a>
          <a href="/signup" className="btn-signup">Signup</a>
        </div>
      </header>
      </div>
      <Routes>
        <Route exact path="/courses" element={<Courses />} />
        <Route exact path="/certifications" element={<Certifications />} />
        <Route exact path="/roadmaps" element={<Roadmaps />} />
        <Route exact path="/videos" element={<Videos />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Header;
*/