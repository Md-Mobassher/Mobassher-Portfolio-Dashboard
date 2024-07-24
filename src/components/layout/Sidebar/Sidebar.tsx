import assets from "@/assets";
import React from "react";
import { sidebarItems } from "./SidebarItem";

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  return (
    <div
      className={`fixed inset-y-0 left-0 transform z-20 ${
        isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
      } transition-transform duration-200 ease-in-out w-64 bg-gray-800 text-white h-full`}
    >
      <div className="flex justify-between items-start">
        <div className="px-4 py-2">
          <a href="/">
            <img src={assets.image.logo} className="w-[50px]" />
          </a>
        </div>
        <button
          className="block lg:hidden text-xl font-bold text-right px-3 py-1 rounded-md hover:bg-green-500 m-3"
          onClick={toggleSidebar}
        >
          X
        </button>
      </div>
      <nav className="mt-3">
        <ul>
          {sidebarItems.map((item, index) => (
            <a href={`/${item.url}`} key={index}>
              <li className="py-2 hover:bg-green-500 px-4">{item.title}</li>
            </a>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
