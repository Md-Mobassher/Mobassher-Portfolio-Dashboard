import { useNavigate } from "react-router-dom";
import { FaGithub, FaShareSquare } from "react-icons/fa";
import { TPortfolio } from "../../type/type";

const Project = ({ project }: { project: TPortfolio }) => {
  const {
    image,
    name,
    liveUrl,
    clientUrl,
    serverUrl,
    technology,
    description,
  } = project;
  const navigate = useNavigate();

  const navigateToProjectDetail = (projectName: string) => {
    console.log(projectName);
    navigate(`/portfolios/${projectName.split(" ").join("-")}`);
  };

  return (
    <div className="card bg-slate-800 rounded-md  max-w-sm mx-auto shadow-2xl">
      <div className="h-44 ">
        <figure className="h-full">
          <img
            className="w-full h-full object-cover object-center rounded-t-md "
            src={image.cover}
            alt={name}
          />
        </figure>
      </div>

      <div className="card-body px-5 pt-5 pb-6 justify-between items-between">
        <div className="">
          <h2 className="text-justify mb-1 text-xl font-bold  hover:text-secondary ">
            {name}
          </h2>
          <p className="text-justify text-sm mt-2 text-gray-300">
            {description[0]}
          </p>
        </div>

        <div className="">
          <div className="card-actions justify-between items-center  mt-3">
            <div className="flex gap-3 ">
              {clientUrl && (
                <div className="group  relative">
                  <a target="_blank" href={clientUrl}>
                    <FaGithub className="size-6  hover:text-primary  transition duration-400"></FaGithub>
                    <div className="absolute bottom-7 left-20 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 bg-primary text-white text-center p-1 w-36 rounded-sm  transition-opacity duration-300 ">
                      Client Site Code
                    </div>
                  </a>
                </div>
              )}

              {serverUrl && (
                <div className="group  relative">
                  <a target="_blank" href={serverUrl}>
                    <FaGithub className="size-6  hover:text-primary transition duration-400"></FaGithub>
                    <div className="absolute bottom-7 left-20 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 bg-primary text-white text-center p-1 w-36 rounded-sm  transition-opacity duration-300">
                      Server Site Code
                    </div>
                  </a>
                </div>
              )}

              {liveUrl && (
                <div className="group  relative">
                  <a target="_blank" href={liveUrl}>
                    <FaShareSquare className="size-6  hover:text-primary transition duration-400"></FaShareSquare>
                    <div className="absolute bottom-7 left-12 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 bg-primary text-white text-center p-1 w-20 rounded-sm  transition-opacity duration-300">
                      Live Site
                    </div>
                  </a>
                </div>
              )}
            </div>
            <div
              onClick={() => navigateToProjectDetail(project.name)}
              className="border-primary border px-2 rounded-sm transition text-md font-bold hover:text-white hover:bg-primary  duration-300 cursor-pointer"
            >
              Details
            </div>
          </div>

          <div className="pt-4">
            <div className="text-sm text-slate-300 flex flex-wrap justify-start items-center gap-1">
              {technology.map((item, index) => (
                <span key={index} className="">
                  {item},
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
