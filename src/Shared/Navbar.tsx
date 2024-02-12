import { Link } from "react-router-dom";
import Logo from "@/components/common/Logo";
import Container from "@/components/common/Container";

const Navbar = () => {
  const navItems = (
    <>
      <li>
        <a href="#about" className="rounded-lg font-semibold ">
          About
        </a>
      </li>
      <li>
        <a href="#myskills" className="rounded-lg font-semibold ">
          Skills
        </a>
      </li>
      <li>
        <a href="#portfolios" className="rounded-lg font-semibold ">
          Portfolios
        </a>
      </li>
      <li>
        <a href="#contact" className="rounded-lg font-semibold ">
          Contact
        </a>
      </li>
      <li>
        <a href="/" className="rounded-lg font-semibold ">
          Resume
        </a>
      </li>
    </>
  );

  return (
    <header className="relative">
      <div className="drawer drawer-end">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <nav className="drawer-content flex flex-col">
          <div className="w-full h-20 navbar bg-base-100 py-10 lg:px-20  sticky top-0 z-50 shadow ">
            <Link to="/" className="flex-1 px-2 mx-2 text-2xl font-semibold ">
              <Logo />
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
        <div className="drawer-side">
          <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-60 bg-base-100 ">
            {navItems}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
