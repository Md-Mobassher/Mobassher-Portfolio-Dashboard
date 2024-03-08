import { ToastContainer } from "react-toastify";
import Footer from "./Shared/Footer";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./Shared/Navbar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="">
      <Navbar />
      <Outlet />
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
