import UseIcon from "../components/common/UseIcon";
import logo from "../Assets/Images/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer footer-center bg-gray-200 text-base-content rounded p-12 mt-14">
      <div>
        <p className="font-bold">
          <Link to="/" className=" ">
            <img src={logo} alt="logo" className=" mx-auto " />
          </Link>
          <br />
          Providing reliable tech since 2022
        </p>

        <UseIcon></UseIcon>

        <p className="text-center font-semibold mt-3">
          Copyright &copy; {new Date().getFullYear()} all right reserved to
          <span className="text-secondary">
            {" "}
            Developer Md Mobassher Hossain
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
