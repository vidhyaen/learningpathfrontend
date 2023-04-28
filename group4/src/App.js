<<<<<<< HEAD
=======
import React from 'react';
import Footer from './component/footer';
import Header from './component/header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Certifications from './component/certifications';
import Courses from './component/courses';
import Roadmaps from './component/roadmaps';
import Videos from './component/videos';
import Login from './component/login';
import Signup from './component/signup';
import Home from './component/home';
import About from './component/about';
import Logo from './component/logo.jpg';
>>>>>>> b78665b (Done with header and footer navigation)

import './App.css';
import {Routes, Route} from 'react-router-dom';
import Coursedetail from './components/Coursedetail';
import Course from './components/Course';
import CourseView from './components/CourseView.Js';
function App() {  
  return (
<<<<<<< HEAD
    <div className="App">
    <Routes>
          <Route path="/detail/:id" element={<Coursedetail />} />
          <Route path='/course' element={<Course/>} />
          <Route path="Courseview/:id" element={<CourseView/>} />
     </Routes>
   
  </div>
=======
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/logo.jpg" element={<Logo />} />
          <Route exact path="/courses" element={<Courses />} />
          <Route exact path="/certifications" element={<Certifications />} />
          <Route exact path="/roadmaps" element={<Roadmaps />} />
          <Route exact path="/videos" element={<Videos />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
>>>>>>> b78665b (Done with header and footer navigation)
  );
}

export default App;












/*import React from 'react';
import Footer from './component/footer';
import Header from './component/header';

function App() {
  return (
    <div>
      <Header />
      <Footer />
    </div>
  );
}

export default App;*/
/*

import React from 'react';
import './App.css'
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Certifications from './component/certifications';
import Courses from './component/courses';
import Roadmaps from './component/roadmaps';
import Videos from './component/videos';
import Login from './component/login';
import Signup from './component/signup';
import Home from './component/home';

function App() {
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

export default App;


*/















