import { useNavigate } from "react-router-dom";
import Projects from "./Projects";

const Portfolios = () => {
  const navigate = useNavigate();

  const handleNavigateAllProjects = () => {
    navigate("/portfolios");
  };
  return (
    <div className="lg:mt-28 md:mt-20 mt-14">
      <Projects />
      <div className=" lg:mt-10 mt-8 flex justify-center">
        <button
          className="btn btn-primary hover:bg-green-400  text-white lg:px-10 px-8"
          onClick={handleNavigateAllProjects}
        >
          View all Projects
        </button>
      </div>
    </div>
  );
};

export default Portfolios;
