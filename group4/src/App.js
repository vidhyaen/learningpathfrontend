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
