import { useNavigate } from "react-router-dom";
import { FaGithub, FaShareSquare } from "react-icons/fa";
import { TProject } from "../../type/type";

const Project = ({ project }: { project: TProject }) => {
  const { img1, name, live, client, server, technology, description } = project;
  const navigate = useNavigate();

  const navigateToProjectDetail = (name: Partial<TProject>) => {
    navigate(`/portfolios/${name}`, { state: project });
  };

  return (
    <div className="card bg-slate-800 rounded-md  max-w-sm mx-auto shadow-2xl">
      <div className="h-44 ">
        <figure className="h-full">
          <img
            className="w-full h-full object-cover object-center "
            src={img1}
            alt={img1}
          />
        </figure>
      </div>

      <div className="card-body px-5 pt-5 pb-6 justify-between items-between">
        <div className="">
          <h2 className="text-justify mb-1 text-xl font-bold  hover:text-secondary ">
            {name}
          </h2>
          <p className="text-justify text-sm mt-2 text-gray-300">
            {description}
          </p>
        </div>

        <div className="">
          <div className="card-actions justify-between items-center  mt-3">
            <div className="flex gap-3 ">
              {client && (
                <div className="group  relative">
                  <a target="_blank" href={client}>
                    <FaGithub className="size-6  hover:text-primary  transition duration-400"></FaGithub>
                    <div className="absolute bottom-7 left-20 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 bg-primary text-white text-center p-1 w-36 rounded-sm  transition-opacity duration-300 ">
                      Client Site Code
                    </div>
                  </a>
                </div>
              )}

              {server && (
                <div className="group  relative">
                  <a target="_blank" href={server}>
                    <FaGithub className="size-6  hover:text-primary transition duration-400"></FaGithub>
                    <div className="absolute bottom-7 left-20 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 bg-primary text-white text-center p-1 w-36 rounded-sm  transition-opacity duration-300">
                      Server Site Code
                    </div>
                  </a>
                </div>
              )}

              {live && (
                <div className="group  relative">
                  <a target="_blank" href={live}>
                    <FaShareSquare className="size-6  hover:text-primary transition duration-400"></FaShareSquare>
                    <div className="absolute bottom-7 left-12 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 bg-primary text-white text-center p-1 w-20 rounded-sm  transition-opacity duration-300">
                      Live Site
                    </div>
                  </a>
                </div>
              )}
            </div>
            <div
              onClick={(name) => navigateToProjectDetail(name)}
              className="border-primary border px-2 rounded-sm transition text-md font-bold hover:text-white hover:bg-primary  duration-300 cursor-pointer"
            >
              Details
            </div>
          </div>

          <div className="pt-4">
            <p className="text-sm text-slate-300">{technology}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
