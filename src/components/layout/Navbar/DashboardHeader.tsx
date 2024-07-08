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
      <p className="hover:bg-green-500 transition duration-300 rounded-lg">
        {user ? (
          <p
            onClick={() => dispatch(logout())}
            className="rounded-lg lg:px-5 md:px-4  px-6 py-2 font-semibold  text-lg uppercase scroll-smooth bg:green-500 text-center cursor-pointer"
          >
            Logout
          </p>
        ) : (
          <a
            href="/login"
            className="rounded-lg lg:px-5 md:px-4  px-6 py-3 font-semibold  text-lg uppercase scroll-smooth  text-center cursor-pointer"
          >
            Login
          </a>
        )}
      </p>
    </header>
  );
};

export default Header;
