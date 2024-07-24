import { MenuIcon, X } from "lucide-react";
import { useState } from "react";
import { navItemsData } from "./Navitems";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { logout, selectCurrentUser } from "@/redux/features/auth/authSlice";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectCurrentUser);

  return (
    <div>
      {/* Mobile Menu Button (visible on small screens) */}
      <div className=" flex md:hidden lg:hidden px-2 relative justify-center items-center">
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className=" text-slate-700  rounded"
          aria-controls="mobile-menu"
          aria-expanded={isOpen ? "true" : "false"}
        >
          {isOpen ? (
            <div className="p-1 border border-green-500 rounded-md bg-green-500 text-white">
              <X className="size-8" />
            </div>
          ) : (
            <div className="p-1 flex justify-center items-center gap-2 rounded-md text-white hover:border bg-green-500">
              <MenuIcon className="size-8" />
            </div>
          )}
          {isOpen && (
            <div className=" mt-3 w-[250px] top-8 right-0 shadow-lg rounded-lg absolute transition-all duration-500 z-50 bg-gray-300 border border-green-500 ">
              <nav className="w-full flex flex-col rounded-lg ">
                {navItemsData.map((item, index) => (
                  <a
                    key={index}
                    href={item.url}
                    className=" text-xl font-semibold  py-2 px-4 hover:text-white hover:bg-green-500 rounded-md"
                  >
                    {item.title}
                  </a>
                ))}
                {user && (
                  <button
                    className=" text-xl font-semibold  py-2 px-4 hover:text-white hover:bg-green-500 rounded-md"
                    onClick={() => dispatch(logout())}
                  >
                    Logout
                  </button>
                )}
              </nav>
            </div>
          )}
        </button>
      </div>
    </div>
  );
};

export default MobileMenu;
