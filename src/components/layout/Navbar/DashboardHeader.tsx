import { logout, selectCurrentUser } from "@/redux/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";

interface HeaderProps {
  toggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => {
  const user = useAppSelector(selectCurrentUser);
  const dispatch = useAppDispatch();

  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <button className="block lg:hidden" onClick={toggleSidebar}>
        <GiHamburgerMenu className="size-8" />
      </button>
      <p className="hover:bg-green-500 transition duration-300 rounded-lg uppercase ml-auto">
        {user ? (
          <p
            onClick={() => dispatch(logout())}
            className="rounded-lg lg:px-5 md:px-4  px-6 py-2 font-semibold  text-lg uppercase scroll-smooth bg:green-500 border-green-500 border text-center cursor-pointer"
          >
            LOGOUT
          </p>
        ) : (
          <a
            href="/login"
            className="rounded-lg lg:px-5 md:px-4  px-6 py-3 font-semibold  text-lg uppercase scroll-smooth  text-center cursor-pointer"
          >
            LOGIN
          </a>
        )}
      </p>
    </header>
  );
};

export default Header;
