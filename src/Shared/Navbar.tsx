import { Link } from "react-router-dom";
import Img from "../Assets/Images/logo.png";

const Navbar = () => {
  const navItems = (
    <>
      <li>
        <a
          href="/#about"
          className="rounded-lg lg:px-5 md:px-4 px-6 py-3 font-semibold  text-lg uppercase scroll-smooth"
        >
          About
        </a>
      </li>
      <li>
        <a
          href="/#myskills"
          className="rounded-lg lg:px-5 md:px-4  px-6 py-3 font-semibold  text-lg uppercase scroll-smooth "
        >
          Skills
        </a>
      </li>
      <li>
        <a
          href="/#portfolios"
          className="rounded-lg lg:px-5 md:px-4  px-6 py-3 font-semibold  text-lg uppercase scroll-smooth"
        >
          Portfolios
        </a>
      </li>
      <li>
        <a
          href="/#contact"
          className="rounded-lg lg:px-5 md:px-4  px-6 py-3 font-semibold  text-lg uppercase scroll-smooth"
        >
          Contact
        </a>
      </li>
      <li>
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
    <header className=" sticky top-0 z-10 shadow-md shrink">
      <div className="drawer drawer-end max-w-[1200px] mx-auto ">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <nav className="drawer-content lg:flex md:flex flex-col ">
          <div className="w-full h-20 navbar bg-base-100 py-10 ">
            <Link to="/" className="flex-1 px-2 mx-2 text-2xl font-semibold ">
              <img src={Img} alt="Logo Mobassher" />
            </Link>
            <div className="flex-none lg:hidden">
              <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>

            <div className="flex-none hidden lg:block">
              <ul className="menu menu-horizontal flex justify-center items-center">
                {navItems}
              </ul>
            </div>
          </div>
        </nav>
        <div className="drawer-side z-50 top-20 rounded">
          <label htmlFor="my-drawer-3" className="drawer-overlay "></label>
          <ul className="menu bg-base-100 w-60 rounded-lg">{navItems}</ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
