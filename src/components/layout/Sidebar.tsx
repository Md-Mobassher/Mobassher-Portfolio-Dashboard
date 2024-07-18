import assets from "@/assets";
import React from "react";

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  return (
    <div
      className={`fixed inset-y-0 left-0 transform ${
        isOpen ? "translate-x-0 " : "-translate-x-full lg:translate-x-0"
      } transition-transform duration-200 ease-in-out w-64 bg-gray-900 text-white h-full`}
    >
      <div className="flex justify-end">
        <button
          className="block lg:hidden mb-4 text-xl font-bold text-right"
          onClick={toggleSidebar}
        >
          X
        </button>
      </div>
      <nav>
        <div className="px-4 py-2">
          <a href="/">
            <img src={assets.image.logo} className="w-[50px]" />
          </a>
        </div>
        <ul>
          <a href="/dashboard">
            <li className="py-2 hover:bg-green-500 px-4">Dashboard</li>
          </a>
          <a href="/dashboard/skill-management">
            <li className="py-2 hover:bg-green-500 px-4">Skills Management</li>
          </a>
          <a href="/dashboard/project-management">
            <li className="py-2 hover:bg-green-500 px-4">Project Management</li>
          </a>{" "}
          <a href="/dashboard/blog-management">
            <li className="py-2 hover:bg-green-500 px-4">Blog Management</li>
          </a>{" "}
          <a href="/dashboard/testimonials-management">
            <li className="py-2 hover:bg-green-500 px-4">
              Testimonials Management
            </li>
          </a>{" "}
          {/* <a href="/dashboard/user-management">
            <li className="py-2 hover:bg-green-500 px-4">User Management</li>
          </a>{" "} */}
          <a href="/dashboard/contact-management">
            <li className="py-2 hover:bg-green-500 px-4">Contact Management</li>
          </a>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
