import React, { useEffect, useMemo, useState } from 'react';
import Project from './Project';

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState();
    
    useEffect( () =>{
        fetch('data.json')      
        .then(res => res.json())
        .then(data => setProjects(data));
    }, []);

   // Function to get filtered list
  function getFilteredProjects() {
    // Avoid filter when selectedCategory is null
    if (!selectedCategory) {
      return projects;
    }
    return projects.filter((item) => {
        return item.technology.toLowerCase().match(selectedCategory.toLowerCase());
    })
  }

  // Avoid duplicate function calls with useMemo
  var filteredProjects = useMemo(getFilteredProjects, [selectedCategory, projects]);

  function handleAllProjects (){  
    setSelectedCategory('')
    return projects
  }

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);  
  }

    return (
        <section id='projects' className='py-6 lg:px-20  sm:p-5 mx-auto '>
            <h2 className='lg:text-4xl md:text-3xl text-2xl font-bold text-primary text-center mb-5'>Projects</h2>

            <div className='mb-8 form-control mx-auto max-w-xs'>
                <div  className="input-group justify-center">
                    <button onClick={handleAllProjects} className='btn btn-primary text-white hover:text-b'> All</button>

                    <select  onChange={handleCategoryChange} class="select select-primary">
                        <option disabled selected>Select Technology</option>
                        <option value="react">React JS</option>
                        <option value="node">Node JS</option>
                        <option value="javascript">JavaScript</option>
                        <option value="wordpress">WordPress</option>
                        <option value="bootstrap">Bootstrap</option>
                        <option value="tailwind">Tailwind</option>
                        <option value="ghost">Ghost</option>
                    </select>
                </div>
            </div>


            <div className='h-'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-5'>
                    {
                        filteredProjects.map(project => <Project
                            key={project._id}
                            project={project}
                        ></Project>)
                    }
                </div>           
            </div>
        </section>
    );
};

export default Projects;