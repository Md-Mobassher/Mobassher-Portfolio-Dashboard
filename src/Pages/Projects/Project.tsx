import { useNavigate } from "react-router-dom";

const Project = ({ project }) => {
  const { img1, name, type, description } = project;
  const navigate = useNavigate();

  const navigateToProjectDetail = (name) => {
    navigate(`/${name}`, { state: project });
  };

  return (
    <div className="card rounded-lg bg-white border border-1 border-primary hover:border-secondary max-w-sm mx-auto shadow-lg">
      <div className="h-40 border-b">
        <figure className="h-full">
          <img
            className="w-full h-full object-cover object-center "
            src={img1}
            alt={img1}
          />
        </figure>
      </div>
      <div className="card-body bg-base-100 px-3 pb-3 pt-3 justify-between items-between">
        <div className="bg-base-100">
          <h2 className="text-justify mb-1 font-semibold text-primary hover:text-secondary bg-base-100">
            {name}
          </h2>
          <h2 className="text-justify mb-1 font-semibold bg-base-100">
            {type}
          </h2>
          <p className="text-justify bg-base-100 text-sm">
            {" "}
            {description.slice(0, 70)}...
          </p>
        </div>
        <div className="card-actions justify-end items-end bg-base-100 mt-3">
          <div
            onClick={() => navigateToProjectDetail(name)}
            className=" btn  btn-primary hover:btn-secondary text-white transition duration-500 "
          >
            Details
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
