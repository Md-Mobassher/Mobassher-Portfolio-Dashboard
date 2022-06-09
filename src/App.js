import './App.css';
import Home from './Pages/Home/Home';
import Footer from './Shared/Footer';
import Navbar from './Shared/Navbar';


function App() {
  return (
    <div >
      <Navbar>
        <Home></Home>
       
        <Footer></Footer>
      </Navbar>
      

    </div>
  );
}

export default App;
