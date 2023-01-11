import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Projects from './Pages/Projects/Projects';
import Contact from './Pages/Contact/Contact';
import Footer from './Shared/Footer';
import Navbar from './Shared/Navbar';
import NotFound from './Shared/NotFound';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProjectDetails from './Pages/Projects/ProjectDetails';
import Blogs from './Pages/Blogs/Blogs';
import Testimonial from './Pages/Testimonial/Testimonial';




function App() {
  return (
    <div >
      <Navbar>
        <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='about' element={<About></About>}></Route>
            <Route path='/:projectName' element={<ProjectDetails></ProjectDetails>}></Route>
            <Route path='projects' element={<Projects></Projects>}></Route>
            <Route path='testimonial' element={<Testimonial></Testimonial>}></Route>
            <Route path='contact' element={<Contact></Contact>}></Route>
            <Route path='blogs' element={<Blogs></Blogs>}></Route>
           

            <Route path='*' element={<NotFound></NotFound>}></Route>
          </Routes>
          <Footer></Footer>
      </Navbar>
      
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
