import UseIcon from "../components/common/UseIcon";
import Flogo from "../Assets/Images/Flogo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer footer-center rounded lg:mt-20 md:mt-18 mt-14 pb-6">
      <div>
        <p className=" mb-3">
          <Link to="/" className=" ">
            <img src={Flogo} alt="logo" className=" mx-auto h-20" />
          </Link>
          <br />
          Providing reliable tech since 2022
        </p>

        <UseIcon></UseIcon>

        <p className="text-center  mt-3">
          Copyright &copy; {new Date().getFullYear()}. All right reserved to
          <span className="text-primary font-semibold">
            {" "}
            <Link to="/" className=" ">
              Developer Md Mobassher Hossain
            </Link>
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
