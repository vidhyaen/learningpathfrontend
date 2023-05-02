
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Coursedetail from './components/Coursedetail';
import Course from './components/Course';
import CourseView from './components/CourseView.Js';
function App() {  
  return (
    <div className="App">
    <Routes>
          <Route path="/detail/:id" element={<Coursedetail />} />
          <Route path='/course' element={<Course/>} />
          <Route path="Courseview/:id" element={<CourseView/>} />
     </Routes>
   
  </div>
  );
}

export default App;
