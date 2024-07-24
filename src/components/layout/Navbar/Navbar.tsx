import assets from "@/assets";
import { navItemsData } from "./Navitems";
import MobileMenu from "./MobileMenu";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { logout, selectCurrentUser } from "@/redux/features/auth/authSlice";

const Navbar = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectCurrentUser);

  return (
    <>
      <header className=" sticky top-0 z-50 bg-[#111A28] border-b border-gray-700 py-1 shadow-sm">
        <div className="flex justify-between items-center max-w-7xl mx-auto lg:px-10 md:px-5 px-4 ">
          <div className="">
            <a href="/">
              <img
                src={assets.image.logo}
                alt="logo"
                className="lg:w-[70px] w-[60px] "
              />
            </a>
          </div>
          <div>
            <nav className="lg:flex md:flex hidden flex-wrap">
              {navItemsData.map((item, index) => (
                <a
                  key={index}
                  href={item.url}
                  className=" text-xl font-semibold  py-2 px-4 hover:text-white hover:bg-green-500 rounded-md uppercase"
                >
                  {item.title}
                </a>
              ))}
              {user && (
                <button
                  className=" text-xl font-semibold  py-2 px-4 hover:text-white hover:bg-green-500 rounded-md bg:green-500 border-green-500 border uppercase ml-2"
                  onClick={() => dispatch(logout())}
                >
                  Logout
                </button>
              )}
            </nav>
            <MobileMenu />
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
