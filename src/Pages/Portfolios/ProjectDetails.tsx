import Container from "@/components/common/Container";
import { portfolios } from "@/data/portfolios";
import { TPortfolio } from "@/type/type";
import { BiRightArrow } from "react-icons/bi";
import { useParams } from "react-router-dom";

const ProjectDetails = () => {
  const { projectName } = useParams();
  const project = portfolios.find(
    (portfolio) => portfolio.name.split(" ").join("-") === projectName
  );

  if (!project) {
    return (
      <div className="container mx-auto text-center">Project not found</div>
    );
  }
  const {
    name,
    type,
    description,
    image,
    technology,
    liveUrl,
    clientUrl,
    serverUrl,
  } = project as TPortfolio;

  return (
    <section id="details" className="py-10 min-h-screen">
      <Container>
        <div className="dropdown  w-full mb-10 mx-auto ">
          <button className=" btn btn-primary hover:bg-green-400 transition duration-500 gap-4 flex justify-center lg:px-10  lg:text-xl text-white">
            Project Details
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </button>

          <div className="dropdown-content max-w-5xl bg-gray-700 border border-primary rounded-lg mt-1 z-0">
            <div className="items-center text-justify justify-start  lg:pt-10 p-5 lg:px-20 ">
              {name && (
                <div className="flex">
                  <p className="mb-3 font-bold lg:text-xl">
                    Project Name:
                    <span className="text-white ml-2 font-semibold lg:text-xl">
                      {name}
                    </span>
                  </p>
                </div>
              )}
              {type && (
                <div className="flex">
                  <p className="mb-3 font-bold lg:text-xl">
                    Project Type:
                    <span className=" ml-2 font-semibold lg:text-xl">
                      {type}
                    </span>
                  </p>
                </div>
              )}
              {description.length > 0 && (
                <div className="">
                  <p className="mb-1 font-bold lg:text-xl ">Project Details:</p>
                  <div className="mb-3 ml-5 ">
                    {description.map((item, index) => (
                      <div
                        key={index}
                        className="flex justify-start items-start gap-3"
                      >
                        <div className="flex justify-center items-center mt-2">
                          <BiRightArrow />
                        </div>
                        <div>{item}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {technology.length > 0 && (
                <div className="flex">
                  <p className="mb-3 font-bold lg:text-xl ">
                    Technology:{" "}
                    <span className=" ml-2 font-semibold lg:text-lg">
                      {technology}
                    </span>{" "}
                  </p>
                </div>
              )}

              {liveUrl && (
                <p className="mb-3 mt-5 font-bold  lg:text-xl">
                  Go to Live site -{" "}
                  <a
                    target="_black"
                    href={liveUrl}
                    className=" btn btn-primary hover:bg-green-400 transition duration-500 ml-auto text-white"
                  >
                    Click here{" "}
                  </a>
                </p>
              )}
              {clientUrl && (
                <p className="mb-3 mt-5 font-bold  lg:text-xl">
                  Client-Side code -{" "}
                  <a
                    target="_black"
                    href={clientUrl}
                    className=" btn btn-primary hover:bg-green-400 transition duration-500 ml-auto text-white"
                  >
                    Click here{" "}
                  </a>
                </p>
              )}
              {serverUrl && (
                <p className="mb-3 mt-5 font-bold  lg:text-xl">
                  Server-Side code -{" "}
                  <a
                    target="_black"
                    href={serverUrl}
                    className=" btn btn-primary hover:bg-green-400 transition duration-500 ml-auto text-white"
                  >
                    Click here{" "}
                  </a>
                </p>
              )}
            </div>
          </div>
        </div>
        <img
          src={image.landing}
          className="w-full shadow-2xl rounded-md"
          alt={name}
        />
      </Container>
    </section>
  );
};

export default ProjectDetails;
