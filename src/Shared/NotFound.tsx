import { Link } from "react-router-dom";
import notFound from "../Assets/Images/notFound.png";

const NotFound = () => {
  return (
    <div
      className="min-h-screen flex-col bg-[#011F41] text-slate-200
    "
    >
      <img
        className=" lg:w-1/2 md:w-1/2 w-10/12 d-block mx-auto"
        src={notFound}
        alt=""
      />
      <div className="flex justify-center mt-20">
        <p>
          Back to
          <Link className="btn btn-primary bg-primary text-white ml-4" to="/">
            Home
          </Link>
        </p>
      </div>
    </div>
  );
};

export default NotFound;
