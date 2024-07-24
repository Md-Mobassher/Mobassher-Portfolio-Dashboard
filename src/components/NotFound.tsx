import { Link } from "react-router-dom";
import assets from "@/assets";

const NotFound = () => {
  return (
    <div
      className="min-h-screen flex-col bg-[#011F41] text-slate-200 flex justify-center items-center
    "
    >
      <img className="flex" src={assets.image.notFound} alt="" />
      <div className="flex justify-center mt-16">
        <p>
          Go Back to
          <Link className=" px-5 py-2 bg-green-500 text-white ml-4" to="/">
            Home
          </Link>
        </p>
      </div>
    </div>
  );
};

export default NotFound;
