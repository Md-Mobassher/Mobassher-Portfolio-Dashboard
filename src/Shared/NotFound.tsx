import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div
      className="min-h-screen flex-col 
    "
    >
      <img
        className=" lg:w-1/2 md:w-1/2 w-10/12 d-block mx-auto"
        src={"https://i.ibb.co/rss80m5/404.png"}
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
