import { useState } from "react";
import Project from "./Project";
import Container from "@/components/common/Container";
import Title from "@/components/common/Title";
import { TPortfolio } from "@/type/type";
import { portfolios } from "@/data/portfolios";

const Projects = () => {
  const [projects] = useState<TPortfolio[]>(portfolios);
  const [selectedCategory, setSelectedCategory] = useState<
    string | undefined
  >();

  const getFilteredProjects = () => {
    if (!selectedCategory) {
      return projects;
    }
    return projects.filter((item: TPortfolio) =>
      item.technology.some(
        (tech) => tech.toLowerCase() === selectedCategory.toLowerCase()
      )
    );
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(e.target.value);
  };

  const uniqueTechnologies = Array.from(
    new Set(portfolios.flatMap((project) => project.technology))
  );

  return (
    <div id="portfolios" className=" ">
      <Container>
        <Title title="Portfolios" />
        <div className="lg:px-20 md:px-14 lg:mt-10 mt-8">
          <div className="flex flex-wrap lg:justify-start md:justify-start justify-center lg:mb-10 mb-7 md:mb-8">
            <button
              onClick={() => setSelectedCategory(undefined)}
              className="btn btn-primary hover:bg-green-400 transition duration-500 text-white mr-1"
            >
              All
            </button>

            <select
              onChange={handleCategoryChange}
              className="select select-primary bg-gray-800"
            >
              <option value="" disabled selected>
                Select Technology
              </option>
              {uniqueTechnologies.map((tech) => (
                <option key={tech} value={tech}>
                  {tech}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-8 md:gap-7 gap-6">
            {getFilteredProjects()
              .slice(0, 9)
              .map((project: TPortfolio) => (
                <Project key={project.name} project={project} />
              ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Projects;
