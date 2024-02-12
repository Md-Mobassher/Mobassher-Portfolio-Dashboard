import { useEffect, useMemo, useState } from "react";
import Project from "./Project";
import Container from "@/components/common/Container";
import Title from "@/components/common/Title";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState();

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  // Function to get filtered list
  const getFilteredProjects = () => {
    // Avoid filter when selectedCategory is null
    if (!selectedCategory) {
      return projects;
    }
    return projects.filter((item) => {
      return item?.technology
        .toLowerCase()
        .match(selectedCategory.toLowerCase());
    });
  };

  // Avoid duplicate function calls with useMemo
  const filteredProjects = useMemo(getFilteredProjects, [
    selectedCategory,
    projects,
  ]);

  function handleAllProjects() {
    setSelectedCategory("");
    return projects;
  }

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <div id="portfolios" className=" lg:mt-28 md:mt-24 mt-20">
      <Container>
        <Title title="Portfolios" />
        <div className="lg:px-20 md:px-14 lg:mt-12 mt-10">
          <div className="flex flex-wrap lg:justify-start md:justify-start justify-center lg:mb-10 mb-7 md:mb-8">
            <button
              onClick={handleAllProjects}
              className="btn btn-primary hover:btn-secondary text-white mr-1"
            >
              All
            </button>

            <select
              onChange={handleCategoryChange}
              className="select select-primary "
            >
              <option disabled selected>
                Select Technology
              </option>
              <option value="react">React JS</option>
              <option value="redux">Redux</option>
              <option value="node">Node JS</option>
              <option value="node">TypeScript</option>
              <option value="javascript">JavaScript</option>
              <option value="wordpress">WordPress</option>
              <option value="bootstrap">Bootstrap</option>
              <option value="tailwind">Tailwind</option>
            </select>
          </div>
        </div>

        <div className="">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <Project key={project?._id} project={project}></Project>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Projects;
