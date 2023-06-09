import React from 'react';
import Footer from './components/footer';
import Header from './components/header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Backend from './guide/backend';
import Devops from './guide/devops';
import Frontend from './guide/frontend';
import Fullstack from './guide/fullstack';
import Springboot from './guide/springboot';
import Qaengineer from './guide/qaengineer';
import Thoufeek from "./components/people/thoufeek";
import Suhas from "./components/people/suhas";
import Josika from "./components/people/josika";
import Vidhya from "./components/people/vidhya";
import Impana from "./components/people/impana";



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
import Topicview from './components/Admin/Topicview';
import SubTopicview from './components/Admin/SubTopicview';

// import  Sidebar  from './components/Sidebar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {

  const isAdminPath = window.location.pathname.startsWith('/admin/');
 
  return (
    <div className="App">
  
  
    <BrowserRouter>
  
                
      <div>

   {/* <Header /> */}

    

    

     
        {/* { window.location.pathname !== '/admin/' && <Header />  } */}
        
    <ToastContainer />
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
          <Route exact path="/backend" element={<Backend />} />

          <Route exact path="/devops" element={<Devops />} />

          <Route exact path="/frontend" element={<Frontend />} />

          <Route exact path="/fullstack" element={<Fullstack />} />

          <Route exact path="/springboot" element={< Springboot/>} />

          <Route exact path="/qaengineer" element={<Qaengineer />} />
          <Route exact path="/roadmaps" element={<Roadmaps />} />
          <Route exact path="/videos" element={<Videos />} />
          <Route exact path="/login" element={<Login />} />

          <Route exact path="/signup" element={
          <Signup />
        } />
          {/* <Route exact path="/side" element={<Sidebar />} /> */}
          
           
          <Route exact path="/admin" element={<AdminLogin />} />
          <Route path="/admin/view" element={<Courseview/>} />
          <Route exact path="/admin/dashboard" element={<Dashboard />} />
          <Route exact path="/admin/courses" element={<AddCourse />} />
          <Route exact path="/admin/topic" element={<AddTopic />} />
          <Route exact path="/admin/subtopic" element={<AddSubTopic />} />
          <Route exact path="/admin/view" element={<Courseview />} />
          <Route exact path="/admin/users" element={<UserView />} />
          <Route exact path="/admin/viewtopic" element={<Topicview />} />
          <Route exact path="/admin/viewsubtopic" element={<SubTopicview/>} />
          <Route exact path="/admin/viewsubtopic" element={<SubTopicview/>} />
          
               

          <Route exact path="/thoufeek" element={<Thoufeek />} />
        <Route exact path="/impana" element={<Impana />} />
        <Route exact path="/vidhya" element={<Vidhya />} />
        <Route exact path="/josika" element={<Josika />} />
        <Route exact path="/suhas" element={<Suhas />} />

           
        </Routes>

       
       
      
      
      </div>
     

      { window.location.pathname === '/certifications' && <Footer />  }
      { window.location.pathname === '/videos' && <Footer />  }
      { window.location.pathname === '/home' && <Footer />  }
     

    </BrowserRouter>

    </div>
  );
}


export default App;












