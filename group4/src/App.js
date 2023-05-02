<<<<<<< HEAD
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
<<<<<<< HEAD
import Logo from './component/logo.jpg';
>>>>>>> b78665b (Done with header and footer navigation)
=======
import Logo from './image/logo.jpg';
>>>>>>> e47d734 (changes in logo)

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
=======
import React from "react";
import Footer from "./components/footer";
import Header from "./components/header";
import { Routes, Route } from "react-router-dom";
import Certifications from "./components/certifications";
import Courses from "./components/courses";
import Roadmaps from "./components/roadmaps";
import Videos from "./components/videos";
import Login from "./components/login";
import Signup from "./components/signup";
import Home from "./components/home";
import About from "./components/about";
import Logo from "./image/logo.jpg";
import "./App.css";
>>>>>>> 6574603 (Updated the viewchanges)

import Coursedetail from './components/Coursedetail';
import Course from './components/Course';
import "bootstrap/dist/css/bootstrap.min.css";
import CourseView from './components/CourseView.Js';
function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/course" element={<Course />} />
        <Route exact path="/detail/:id" element={<Coursedetail />} />
        <Route exact path="/view/" element={<CourseView />} />
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
  );
}

export default App;
