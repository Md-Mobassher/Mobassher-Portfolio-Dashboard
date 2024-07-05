import React, { useState } from "react";
import Sidebar from "./Sidebar";
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
        className={`fixed inset-0 bg-[#111A28] bg-opacity-70 lg:hidden ${
          isSidebarOpen ? "block" : "hidden"
        }`}
        onClick={toggleSidebar}
      ></div>
      <div className="flex-1 ml-0 lg:ml-64">
        <Header toggleSidebar={toggleSidebar} />
        <main className="p-4">
          {/* Add your dashboard content here */}
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
