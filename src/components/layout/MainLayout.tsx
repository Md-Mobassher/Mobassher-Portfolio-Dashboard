import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
// import Footer from "./Footer/Footer";

const MainLayout = () => {
  return (
    <div className="bg-[#111A28] text-slate-100  min-h-screen">
      <Navbar />
      <Outlet />
      {/* <Footer /> */}
    </div>
  );
};

export default MainLayout;
