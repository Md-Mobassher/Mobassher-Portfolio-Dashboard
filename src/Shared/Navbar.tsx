import { Link } from "react-router-dom";
import Img from "../Assets/Images/MLogo.png";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isToggled, setIsToggled] = useState(false);
  const toggleButton = () => {
    setIsToggled(!isToggled);
  };
  const navItems = (
    <>
      <li className="hover:bg-green-500 rounded-lg">
        <a
          href="/#about"
          className="rounded-lg lg:px-5 md:px-4 px-6 py-3 font-semibold  text-lg uppercase scroll-smooth"
        >
          About
        </a>
      </li>
      <li className="hover:bg-green-500 rounded-lg">
        <a
          href="/#myskills"
          className="rounded-lg lg:px-5 md:px-4  px-6 py-3 font-semibold  text-lg uppercase scroll-smooth "
        >
          Skills
        </a>
      </li>
      <li className="hover:bg-green-500 rounded-lg">
        <a
          href="/#portfolios"
          className="rounded-lg lg:px-5 md:px-4  px-6 py-3 font-semibold  text-lg uppercase scroll-smooth"
        >
          Portfolios
        </a>
      </li>
      <li className="hover:bg-green-500 rounded-lg">
        <a
          href="/#contact"
          className="rounded-lg lg:px-5 md:px-4  px-6 py-3 font-semibold  text-lg uppercase scroll-smooth"
        >
          Contact
        </a>
      </li>
      <li className="hover:bg-green-500 rounded-lg">
        <a
          href="https://drive.google.com/file/d/1do9DTe38XXl99OyMsRiFROU-yNAzDqUJ/view?usp=sharing"
          target="_blank"
          className="rounded-lg lg:px-5 md:px-4  px-6 py-3 font-semibold  text-lg uppercase scroll-smooth"
        >
          Resume
        </a>
      </li>
    </>
  );

  return (
    <header className=" sticky top-0 z-10  bg-[#111A29]">
      <div className="drawer drawer-end max-w-[1200px] mx-auto ">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <nav className="drawer-content lg:flex md:flex flex-col ">
          <div className="w-full h-20 navbar  py-10">
            <Link to="/" className="flex-1 px-2 mx-2 text-2xl font-semibold ">
              <img src={Img} className="w-14" alt="Logo Mobassher" />
            </Link>
            <div className="flex-none lg:hidden mr-6">
              <label
                htmlFor="my-drawer-3"
                onClick={toggleButton}
                className="btn btn-square btn-ghost text-white border border-white hover:bg-primary  hover:text-white"
              >
                {isToggled ? (
                  <FaTimes className="size-6" />
                ) : (
                  <FaBars className="size-6" />
                )}
              </label>
            </div>

            <div className="flex-none hidden lg:block">
              <ul className="menu menu-horizontal flex justify-center items-center text-white">
                {navItems}
              </ul>
            </div>
          </div>
        </nav>
        <div className="drawer-side z-50 top-20 rounded">
          <label htmlFor="my-drawer-3" className="drawer-overlay "></label>
          <ul className="menu bg-slate-700 w-60 rounded-lg p-0 m-0">
            {navItems}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
