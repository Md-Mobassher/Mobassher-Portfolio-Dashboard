import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";

interface HeaderProps {
  toggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => {
  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <button className="block lg:hidden" onClick={toggleSidebar}>
        <GiHamburgerMenu />
      </button>
      <p className="hover:bg-green-500 transition duration-300 rounded-lg">
        <a
          href="/login"
          className="rounded-lg lg:px-5 md:px-4  px-6 py-3 font-semibold  text-lg uppercase scroll-smooth  text-center"
        >
          Login
        </a>
      </p>
    </header>
  );
};

export default Header;
