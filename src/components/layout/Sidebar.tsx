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
          <li className="py-2 hover:bg-green-500 px-4">
            <a href="/dashboard">Dashboard</a>
          </li>
          <li className="py-2 hover:bg-green-500 px-4">
            <a href="/dashboard/skill-management">Skills Management</a>
          </li>
          <li className="py-2 hover:bg-green-500 px-4">
            <a href="/dashboard/project-management">Project Management</a>
          </li>
          <li className="py-2 hover:bg-green-500 px-4">
            <a href="/dashboard/blog-management">Blog Management</a>
          </li>
          <li className="py-2 hover:bg-green-500 px-4">
            <a href="/dashboard/testimonials-management">
              Testimonials Management
            </a>
          </li>
          <li className="py-2 hover:bg-green-500 px-4">
            <a href="/dashboard/user-management">User Management</a>
          </li>
          <li className="py-2 hover:bg-green-500 px-4">
            <a href="/dashboard/contact-management">Contact Management</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
