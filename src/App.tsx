import { ToastContainer } from "react-toastify";
import Home from "./Pages/Home/Home";
import Footer from "./Shared/Footer";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./Shared/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;
