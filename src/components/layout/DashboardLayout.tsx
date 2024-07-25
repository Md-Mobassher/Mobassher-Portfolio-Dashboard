import React, { useState } from "react";
import Sidebar from "./Sidebar/Sidebar";
import Header from "./Navbar/DashboardHeader";
import { Outlet } from "react-router-dom";

const Dashboard: React.FC = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex min-h-screen overflow-hidden">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div
        className={`fixed  bg-[#111A28] bg-opacity-100 lg:hidden ${
          isSidebarOpen ? "block" : "hidden"
        }`}
        onClick={toggleSidebar}
      ></div>
      <div className="flex-1 ml-0 lg:ml-64 bg-slate-50">
        <Header toggleSidebar={toggleSidebar} />
        <main className="p-5 h-full bg-green-50 overflow-x-scroll">
          {/*dashboard content*/}
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
