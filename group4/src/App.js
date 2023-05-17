import React from 'react';
import Footer from './components/footer';
import Header from './components/header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Certifications from './components/certifications';
import AdminLogin from './components/Admin/AdminLogin';
import Roadmaps from './components/roadmaps';
import Videos from './components/videos';
import Login from './components/login';
import Signup from './components/signup';
import Home from './components/home';
import Courseviewsidebar from './components/Courseviewsidebar';
import About from './components/about';
import Logo from './image/logo.jpg';
import Coursedetail from './components/Coursedetail';
import Course from './components/Course';
import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from './components/Admin/Dashboard';
import AddCourse from './components/Admin/AddCourse';
import AddTopic from './components/Admin/AddTopic';
import AddSubTopic from './components/Admin/AddSubtopic';
import Courseview from './components/Admin/Courseview';
import UserView from './components/Admin/Userview';

function App() {
  
  let HideHeader =! <Header />;
  return (
    <div className="App">
  
  
    <BrowserRouter>
  
                
      <div>
      {window.location.pathname !== '/admin/' && !<Header /> 

      }
      {window.location.pathname === '/admin/' && !<Footer /> 

      }
      { window.location.pathname !== '/admin' && <Header />  }
     
        <Routes>
        <Route path="/detail/:id" element={<Coursedetail />} />
          <Route path='/course' element={<Course/>} />
          <Route path="Courseviewsidebar" element={<Courseviewsidebar/>} />
          <Route exact path="/" element={<Home />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/logo.jpg" element={<Logo />} />
          <Route exact path="/courses" element={<Course />} />
          <Route exact path="/certifications" element={<Certifications />} />
          <Route exact path="/roadmaps" element={<Roadmaps />} />
          <Route exact path="/videos" element={<Videos />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
         
               {HideHeader}
          <Route exact path="/admin" element={<AdminLogin />} />
          <Route path="/admin/view" element={<Courseview/>} />
          <Route exact path="/admin/dashboard" element={<Dashboard />} />
          <Route exact path="/admin/courses" element={<AddCourse />} />
          <Route exact path="/admin/topic" element={<AddTopic />} />
          <Route exact path="/admin/subtopic" element={<AddSubTopic />} />
          <Route exact path="/admin/view" element={<Courseview />} />
          <Route exact path="/admin/users" element={<UserView />} />
          
          

          

           
        </Routes>

        { window.location.pathname !== '/admin' && <Footer />  }

      
      </div>
    </BrowserRouter>
    </div>
  );
}

export default App;












